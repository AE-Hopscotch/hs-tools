// Project Info Script
function showProjectData (p) {
  const r = Math.round(JSON.stringify(p).length / 10) / 100
  const customDescription = (p.objects.filter(o => { return o.name === 'AE.webInfoText' })[0] || {}).text
  const infoTexts = '\nTitle: ' + p.title +
    '\nPublished: ' + !!(p.correct_published_at && !p.deleted_at) + ', Filtered: ' + p.has_been_removed +
    (p.correct_published_at ? '\nPublish Time: ' + (p.correct_published_at || '').replace('T', ' at ').replace('Z', ' GMT') : '') +
    `\nMade by: ${p.user ? p.user.nickname : p.author}\u202D (user id: ${(p.user != null) ? p.user.id : 'unknown'}) ` +
    ((p.original_user != null && p.user && p.original_user.id !== p.user.id) ? `\nRemixed from: ${p.original_user.nickname}\u202D (user id: ${p.original_user.id}) ` : '') +
    '\nProject UUID: ' + p.uuid +
    '\nFile ID: ' + (p.filename || '').replace(/\.hopscotch/, '') + ' (' + ((r < 1000) ? r + 'KB)' : Math.round(r / 10) / 100 + 'MB)') +
    '\nLikes: ' + p.number_of_stars + ', Play Count: ' + p.play_count +
    '\nRemixes: ' + p.project_remixes_count + ', Published Remixes: ' + p.published_remixes_count +
    '\nAbout 1 like per ' + Math.round((p.play_count || 1) / p.number_of_stars || 0) + ' plays (' + (Math.round(p.number_of_stars / p.play_count * 10000) / 100 || 0) + '%)' +
    '\n' + (Math.round(p.published_remixes_count / (p.published_remixes_count + p.project_remixes_count) * 10000) / 100 || 0) + '% of remixes are published' +
    '\nVersion: Editor ' + p.version + ', Player ' + (p.playerVersion || '1.0.0') + ' (' + Object.keys(p.playerUpgrades || {}).length + ' upgrades)' +
    '\nNumber of Scenes: ' + (p.scenes || '_').length + ', Number of Objects: ' + p.objects.length +
    '\n' + (p.rules || []).length + ' rules, ' + (p.abilities || []).length + ' abilities, ' +
    (function () { let blocks = 0; (p.abilities || []).forEach((x) => { blocks += (x.blocks || []).length }); return blocks })() + ' blocks' +
    '\nNumber of Variables: ' + (p.variables || '').length + ', Custom Images: ' + (p.customObjects || '').length +
    '\nObject Scale: ' + (p.baseObjectScale || 1) + ', Font Size: ' + (p.fontSize || 80) + ', Stage: ' + (p.stageSize || { width: 1024 }).width + 'x' + (p.stageSize || { height: 768 }).height +
    (customDescription ? '\nCustom Description: ' + customDescription : '')
  document.getElementById('projectInfoText').innerHTML = infoTexts.replace(/\n/g, '<br/>')
  XHR.get('https://ae-hs-tools.firebaseio.com/project-reviews/' + p.uuid + '.json', function (r, s) {
    if (s !== 200) {
      document.getElementById('projectInfoReviews').innerHTML = '<br/>There was an error loading reviews for this project'
      return
    }
    if (r === 'null') {
      document.getElementById('projectInfoReviews').innerHTML = '<br/>No Reviews Yet'
      return
    }
    try { JSON.parse(r) } catch (e) {
      document.getElementById('projectInfoReviews').innerHTML = '<br/>There was an error loading reviews for this project'
      return
    }
    const reviews = JSON.parse(r)
    document.getElementById('projectInfoReviews').innerHTML = ''
    Object.keys(reviews).sort().reverse().forEach(key => {
      const reviewdata = reviews[key]
      const reviewcard = document.createElement('div')
      const reviewtime = new Date(Number(key))
      console.log(reviewtime)
      const timestring = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][reviewtime.getMonth()] + ' ' + String(reviewtime.getDate()) + ', ' + String(reviewtime.getFullYear())
      reviewcard.classList.add('review-card')
      reviewcard.innerHTML = (reviewdata.rating != null ? '<span class="rating">' + reviewdata.rating + ' <i class="fa fa-star-o"></i></span>' : '') +
        '<b>' + reviewdata.author + '<span style="position:relative;top:-1.05px;left:0.6px;font-size:16px;">:</span></b>' +
        '<br/>&ldquo;<i>' + reviewdata.review + '</i>&thinsp;&rdquo;' +
        '<span class="review-date">' + timestring + '</span>'
      document.getElementById('projectInfoReviews').appendChild(reviewcard)
    })
  }, false)
}
document.addEventListener('touchstart', e => {
  const infoDiv = document.getElementById('projectInfoDiv')
  if (infoDiv.contains(e.target)) {
    infoDiv.classList.add('open')
    infoDiv.style.animationName = 'none'
  } else {
    if (!document.querySelector('.player-icon-toolbar').contains(e.target)) infoDiv.classList.remove('open')
  }
})

// Combining and Downloading Project Screenshot
function downloadProjectScreenshot () {
  // Define variables and set loading animation
  document.getElementById('screenshot-button').src = 'assets/loading-dots.gif'
  const scContainer = document.getElementById('projectScreenshotContainer'); const bgImg = document.querySelector('img[name="background"]'); const canvasElm = document.getElementById('sc-output')
  // Load the images and contetxt
  const context = canvasElm.getContext('2d')
  const img1 = new Image(); img1.src = bgImg.src
  const img2 = new Image(); img2.src = document.querySelector('img[name="foreground"]').src
  // Original Opacity so that the user can still play
  AE_MOD.context.screenshot.style.opacity = 0
  AE_MOD.context.canvas.style.opacity = 1
  img2.onload = function () {
    // Adjust canvas size
    canvasElm.style.width = scContainer.style.width = getComputedStyle(bgImg).width
    canvasElm.style.height = scContainer.style.height = getComputedStyle(bgImg).height
    const cWidth = canvasElm.width = parseInt(canvasElm.style.width)
    const cHeight = canvasElm.height = parseInt(canvasElm.style.height)
    // Draw the images on top of each other
    context.drawImage(img1, 0, 0, cWidth, cHeight)
    context.drawImage(img2, 0, 0, cWidth, cHeight)
    // Export to blob and download
    canvasElm.toBlob(function (blob) {
      console.log(blob, typeof blob)
      const xhr = new XMLHttpRequest()
      const formData = new FormData()
      formData.append('file', blob, `Screenshot ${new Date().toISOString()} ${AE_MOD.projectData.title}.png`.replace(/\s|:/g, '_'))
      xhr.open('POST', 'https://enw6yiuqc2jyb5w.m.pipedream.net/filedrop')
      xhr.onload = function () {
        console.log('Image URL: ' + xhr.responseText)
        location.href = xhr.responseText
        setTimeout(function () {
          document.getElementById('screenshot-button').src = 'assets/screenshot-icon.png'
        }, 400)
      }
      xhr.onerror = function () {
        console.error(xhr.responseText)
        document.getElementById('screenshot-button').src = 'assets/screenshot-icon.png'
      }
      console.log('Saving image...')
      xhr.send(formData)
    })
  }
}

// Touchstart events
document.getElementById('play_container').ontouchstart = document.getElementById('play_container').onclick = function () {
  if (!onIos) return
  document.getElementById('info-button').addEventListener('touchstart', function () {
    document.getElementById('projectInfoDiv').classList.add('open')
    document.getElementById('info-button').removeAttribute('onclick')
  })
  document.getElementById('screenshot-button').addEventListener('touchstart', function () {
    AE_MOD.context.stageProject ? HSMain.prototype.takeScreenshot() : window.open(document.getElementById('project-image').src)
    document.getElementById('screenshot-button').removeAttribute('onclick')
  })
}

// Open sidebar on CMD + I
document.addEventListener('keydown', e => {
  if (e.key !== 'i' || (navigator.userAgent.match(/mac|ipad|iphone/i) ? !e.metaKey : !e.ctrlKey)) return
  const infoDiv = document.getElementById('projectInfoDiv')
  infoDiv.classList.toggle('open')
  infoDiv.style.animationName = 'none'
})

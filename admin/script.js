const endpoint = 'https://hs-tools-api.deta.dev'
const authMenuItem = document.querySelector('li[role="authkey"]')
const passField = authMenuItem.querySelector('input[type="password"]')
authMenuItem.addEventListener('click', function () {
  const userInput = prompt('New value for API key')
  if (userInput != null) {
    passField.value = userInput
    authMenuItem.querySelector('span').innerText = userInput ? 'Edit Key' : 'Set Key'
  }
})

// Handle Blocks
const blockContainer = document.getElementById('api-blocks-container')
function refreshBlocks() {
  blockContainer.innerHTML = ''
  XHR.requestExt('GET', endpoint + '/hopscotch-data/blocks', function (r, s) {
    let response = []
    try {
      response = JSON.parse(r)
    } catch (e) {
      return console.error(new Error('Received invalid response, status: ' + s))
    }
    response.sort((a, b) => a.id - b.id).forEach(block => {
      const card = document.createElement('div');
      ['card', 'block-card', 'blockColor', block.type].forEach(cl => { if (cl) card.classList.add(cl) })
      card.innerHTML = `<span class="id-badge">${block.id}</span>
        <h2>${block.name.htmlEscape()}</h2>
      `
      blockContainer.appendChild(card)
      card.addEventListener('click', function () {
        fillForm (blocksForm, block)
      })
    })
  }, 0)
}

// Handle Videos
const videoContainer = document.getElementById('api-videos-container')
function refreshVideos() {
  videoContainer.innerHTML = ''
  XHR.requestExt('GET', endpoint + '/admin/videos', function (r, s) {
    let response = []
    try {
      response = JSON.parse(r)
    } catch (e) {
      videoContainer.innerText = 'Invalid Response'
      return console.error(new Error('Received invalid response, status: ' + s))
    }
    if (s !== 200) {
      return videoContainer.innerText = response.error || 'Invalid or bad request'
    }
    response.items.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    }).forEach(video => {
      const card = document.createElement('div')
      card.classList.add('card', 'video-card')
      card.setAttribute('data-group', video.group)
      card.innerHTML = `<span class="id-badge">${new Date(video.date)
        .toLocaleDateString('en-US', { day: 'numeric', month: 'numeric' })}</span>
      <h2><i class="fa ${video.icon}"></i> ${video.name.htmlEscape()}</h2>`
      videoContainer.appendChild(card)

      card.addEventListener('click', function () {
        fillForm(videosForm, video)
      })
    })
  }, 0, null, { 'api-token': passField.value })
}

// Edit Content Form
const editFormContainer = document.querySelector('.wrapper .form-container')
const blocksForm = document.getElementById('blocks-form')
const videosForm = document.getElementById('videos-form')
let formAction = 'update'
function fillForm (form, dictionary) {
  Object.entries(dictionary).forEach(entry => {
    const field = form.querySelector(`[name="${entry[0]}"]`)
    if (field) {
      switch (field.type) {
        case 'checkbox':
          field.checked = !!entry[1]
          break
        default:
          field.value = entry[1]
      }
    }
  })
}
function objectFromForm (form) {
  const dict = Object.fromEntries(new FormData(videosForm).entries())
  form.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    dict[checkbox.name] = checkbox.checked
  })
  return dict
}
function renderResponse (response) {
  document.querySelector('.output-container').innerHTML = ''
  document.querySelector('.output-container').appendChild(renderjson(response))
}
document.querySelectorAll('input[type="submit"]').forEach(btn => {
  btn.addEventListener('click', e => {
    formAction = e.target.value.toLowerCase()
  })
})
videosForm.addEventListener('submit', e => {
  e.preventDefault()
  if (formAction === 'update') {
    const updateBtn = videosForm.querySelector('.update-btn')
    updateBtn.disabled = true
    const body = {
      api_token: passField.value,
      videos: [objectFromForm(videosForm)]
    }
    XHR.requestExt('POST', endpoint + '/admin/videos/bulkupdate', (r, s) => {
      let response = []
      updateBtn.disabled = false
      try {
        response = JSON.parse(r)
      } catch (e) {
        return console.error(new Error('Received invalid response, status: ' + s))
      }
      renderResponse(response)
      if (s === 200) {
        refreshVideos()
      }
    }, 0, JSON.stringify(body), { 'Content-Type': 'application/json' })
  } else if (formAction === 'delete') {
    const video = objectFromForm(videosForm)
    if (!confirm(`Are you sure you want to delete "${video.name}"?`)) return
    const deleteBtn = videosForm.querySelector('.delete-btn')
    deleteBtn.disabled = true
    const body = { api_token: passField.value }
    XHR.requestExt('DELETE', `${endpoint}/admin/videos/update/${video.key}`, (r, s) => {
      let response = []
      deleteBtn.disabled = false
      try {
        response = JSON.parse(r)
      } catch (e) {
        return console.error(new Error('Received invalid response, status: ' + s))
      }
      renderResponse(response)
      if (s === 200) {
        refreshVideos()
      }
    }, 0, JSON.stringify(body), { 'Content-Type': 'application/json' })
  }
})

function updateViews () {
  document.querySelectorAll('[data-show]').forEach(card => {
    card.classList[(location.hash === '#' + card.getAttribute('data-show')) ? 'add' : 'remove']('show')
  })
}
window.addEventListener('hashchange', updateViews)
window.addEventListener('popstate', updateViews)
// Set Transition Time on Load
window.addEventListener('load', function () {
  document.documentElement.style.setProperty('--time-trans', '0.5s')
  updateViews()
})

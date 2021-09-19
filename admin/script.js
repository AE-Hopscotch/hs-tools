const endpoint = 'https://hs-tools-api.deta.dev'
const authMenuItem = document.querySelector('li[role="authkey"]')
const passField = document.getElementById('authkey')
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
        videosForm.querySelector('video').src = video.url
      })
    })
  }, 0, null, { 'api-token': passField.value })
}

// Handle Filter Entries
const filterContainer = document.getElementById('api-filter-container')
function refreshFilter() {
  filterContainer.innerHTML = ''
  XHR.requestExt('GET', endpoint + '/admin/filter/entries', function (r, s) {
    let response = []
    try {
      response = JSON.parse(r)
    } catch (e) {
      filterContainer.innerText = 'Invalid Response'
      return console.error(new Error('Received invalid response, status: ' + s))
    }
    if (s !== 200) {
      return filterContainer.innerText = response.error || 'Invalid or bad request'
    }
    response.items.forEach(entry => {
      const card = document.createElement('div')
      card.classList.add('card', 'entry-card')
      entry.rules.forEach(rule => {
        card.classList.add('entry-' + ['csv', 'phrase', 'noalt', 'contained'][rule - 1])
      })
      card.setAttribute('data-severity', entry.severity)
      card.innerHTML = `<span class="id-badge">
      ${entry.start_letter || entry.label[0].toUpperCase()}
      </span><h2>${entry.label.htmlEscape()}</h2>`
      filterContainer.appendChild(card)

      card.addEventListener('click', function () {
        fillForm(filterForm, entry)
      })
    })
  }, 0, null, { 'api-token': passField.value })
}

// Handle Channels
const channelsContainer = document.getElementById('api-channels-container')
function refreshChannels() {
  channelsContainer.innerHTML = ''
  XHR.requestExt('GET', endpoint + '/admin/video-channels/', function (r, s) {
    let response = []
    try {
      response = JSON.parse(r)
    } catch (e) {
      channelsContainer.innerText = 'Invalid Response'
      return console.error(new Error('Received invalid response, status: ' + s))
    }
    if (s !== 200) {
      return channelsContainer.innerText = response.error || 'Invalid or bad request'
    }
    response.items.forEach(channel => {
      const card = document.createElement('div')
      card.classList.add('card', 'channel-card')
      card.innerHTML = `<span class="id-badge">
      ${channel.requires_auth ? '<i class="fa fa-lock"></i>' : ''}
      </span><h2>${channel.title.htmlEscape()}</h2>`
      channelsContainer.appendChild(card)

      card.addEventListener('click', function () {
        fillForm(channelsForm, channel)
      })
    })
  }, 0, null, { 'api-token': passField.value })
}

// Edit Content Form
const editFormContainer = document.querySelector('.wrapper .form-container')
const blocksForm = document.getElementById('blocks-form')
const videosForm = document.getElementById('videos-form')
const filterForm = document.getElementById('filter-form')
const channelsForm = document.getElementById('channels-form')
let formAction = 'update'
function tableKeys (table) {
  return Array.from(table.querySelectorAll('thead th[value]')).map(th => th.getAttribute('value'))
}
function fillForm (form, dictionary) {
  form.querySelectorAll('input:not([type="submit"])').forEach(input => input.value = '')
  Object.entries(dictionary).forEach(entry => {
    const field = form.querySelector(`[name="${entry[0]}"]`)
    if (field) {
      switch (field.getAttribute('data-format') || field.type) {
        case 'array': {
          if (field.nodeName !== 'TABLE') {
            field.value = entry[1].join(field.getAttribute('data-separator') || undefined)
            return
          }
          const tableBody = field.querySelector('tbody')
          tableBody.innerHTML = ''
          entry[1].forEach(item => {
            const row = document.createElement('tr')
            row.innerHTML = `<td contenteditable>${item.htmlEscape()}</td>`
              + '<td><button class="unstyled" action="remove"><i class="fa fa-minus-circle"></i></button></td>'
            row.querySelector('button[action="remove"]').addEventListener('click', e => {
              e.preventDefault()
              row.remove()
            })
            tableBody.appendChild(row)
          })
          break;
        }
        case 'dictionaries-array': {
          const tableBody = field.querySelector('tbody')
          tableBody.innerHTML = ''
          const keys = tableKeys(field)
          entry[1].forEach(object => {
            const row = document.createElement('tr')
            row.innerHTML = keys.map(key => `<td contenteditable>${object[key].htmlEscape()}</td>`).join('')
              + '<td><button class="unstyled" action="remove"><i class="fa fa-minus-circle"></i></button></td>'
            row.querySelector('button[action="remove"]').addEventListener('click', e => {
              e.preventDefault()
              row.remove()
            })
            tableBody.appendChild(row)
          })
          break;
        }
        case 'checkbox':
          field.checked = !!entry[1]
          break
        default:
          // if (typeof entry[1] === 'object' && Array.isArray(entry[1])) {
            field.value = entry[1]
      }
    }
  })
}
function objectFromForm (form) {
  let dict = Object.fromEntries(new FormData(form).entries())
  dict = Object.fromEntries(Object.entries(dict).map(e => [e[0], e[1].replace(/\r\n/g, '\n')]))
  form.querySelectorAll('input[type="number"]').forEach(input => {
    dict[input.name] = parseInt(input.value) || 0
  })
  form.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    dict[checkbox.name] = checkbox.checked
  })
  form.querySelectorAll('[data-format="array"]:not(table)').forEach(field => {
    if (!field.value) {
      dict[field.name] = []
      return
    }
    dict[field.name] = field.value.replace(/\r\n/g, '\n')
      .split(field.getAttribute('data-separator') || ',')
  })
  form.querySelectorAll('table[data-format="array"]').forEach(table => {
    const rows = Array.from(table.querySelectorAll('tbody tr'))
    dict[table.getAttribute('name')] = rows.map(tr => tr.querySelector('td:first-child').innerText)
  })
  form.querySelectorAll('table[data-format="dictionaries-array"]').forEach(table => {
    const dictArray = []
    const keys = tableKeys(table)
    table.querySelectorAll('tbody tr').forEach(row => {
      const dict = {}
      Array.from(row.children).forEach((td, index) => {
        const key = keys[index]
        if (!key) return
        dict[key] = td.innerText
      })
      dictArray.push(dict)
    })
    dict[table.getAttribute('name')] = dictArray
  })
  return dict
}
function renderResponse (response) {
  document.querySelector('.output-container').innerHTML = ''
  document.querySelector('.output-container').appendChild(renderjson(response))
}
// Set up buttons to add rows
document.querySelectorAll('form table').forEach(table => {
  const btn = table.querySelector('button[action="new-row"]')
  btn.addEventListener('click', e => {
    e.preventDefault()
    const keys = tableKeys(table)
    const row = document.createElement('tr')
    row.innerHTML = keys.map(key => `<td contenteditable></td>`).join('')
      + '<td><button class="unstyled" action="remove"><i class="fa fa-minus-circle"></i></button></td>'
    row.querySelector('button[action="remove"]').addEventListener('click', e => {
      e.preventDefault()
      row.remove()
    })
    table.querySelector('tbody').appendChild(row)
  })
})

document.querySelectorAll('input[type="submit"]').forEach(btn => {
  btn.addEventListener('click', e => {
    formAction = e.target.value.toLowerCase()
  })
})
blocksForm.addEventListener('submit', e => {
  e.preventDefault()
  if (formAction === 'update') {
    const updateBtn = blocksForm.querySelector('.update-btn')
    updateBtn.disabled = true
    const body = {
      api_token: passField.value,
      block: objectFromForm(blocksForm)
    }
    XHR.requestExt('POST', endpoint + '/hopscotch-data/blocks', (r, s) => {
      let response = []
      updateBtn.disabled = false
      try {
        response = JSON.parse(r)
      } catch (e) {
        return console.error(new Error('Received invalid response, status: ' + s))
      }
      renderResponse(response)
      if (s === 200) {
        refreshBlocks()
      }
    }, 0, JSON.stringify(body), { 'Content-Type': 'application/json' })
  } else if (formAction === 'delete') {
    const block = objectFromForm(blocksForm)
    if (!confirm(`Are you sure you want to delete "${block.name}" (id ${block.id})?`)) return
    const deleteBtn = blocksForm.querySelector('.delete-btn')
    deleteBtn.disabled = true
    const body = { api_token: passField.value }
    XHR.requestExt('DELETE', `${endpoint}/hopscotch-data/blocks/${block.id}`, (r, s) => {
      let response = []
      deleteBtn.disabled = false
      try {
        response = JSON.parse(r)
      } catch (e) {
        return console.error(new Error('Received invalid response, status: ' + s))
      }
      renderResponse(response)
      if (s === 200) {
        refreshBlocks()
      }
    }, 0, JSON.stringify(body), { 'Content-Type': 'application/json' })
  }
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
videosForm.querySelector('input[name="url"]').addEventListener('change', function (e) {
  videosForm.querySelector('video').src = e.target.value
})
filterForm.addEventListener('submit', e => {
  e.preventDefault()
  console.log(objectFromForm(filterForm))
  if (formAction === 'update') {
    const updateBtn = filterForm.querySelector('.update-btn')
    updateBtn.disabled = true
    const body = {
      api_token: passField.value,
      data: objectFromForm(filterForm)
    }
    body.data.rules = body.data.rules.map(r => parseInt(r))
    if (!body.data.start_letter) delete body.data.start_letter
    if (!body.data.sub) delete body.data.sub
    XHR.requestExt('PUT', endpoint + '/admin/filter/entry', (r, s) => {
      let response = []
      updateBtn.disabled = false
      try {
        response = JSON.parse(r)
      } catch (e) {
        return console.error(new Error('Received invalid response, status: ' + s))
      }
      renderResponse(response)
      if (s === 200) {
        refreshFilter()
      }
    }, 0, JSON.stringify(body), { 'Content-Type': 'application/json' })
  } else if (formAction === 'delete') {
    const entry = objectFromForm(filterForm)
    if (!confirm(`Are you sure you want to delete "${entry.key}"?`)) return
    const deleteBtn = filterForm.querySelector('.delete-btn')
    deleteBtn.disabled = true
    const body = { api_token: passField.value }
    XHR.requestExt('DELETE', `${endpoint}/admin/filter/entries/${entry.key}`, (r, s) => {
      let response = []
      deleteBtn.disabled = false
      try {
        response = JSON.parse(r)
      } catch (e) {
        return console.error(new Error('Received invalid response, status: ' + s))
      }
      renderResponse(response)
      if (s === 200) {
        refreshFilter()
      }
    }, 0, JSON.stringify(body), { 'Content-Type': 'application/json' })
  }
})
channelsForm.addEventListener('submit', e => {
  e.preventDefault()
  console.log(objectFromForm(channelsForm))
  if (formAction === 'update') {
    const updateBtn = channelsForm.querySelector('.update-btn')
    updateBtn.disabled = true
    const body = {
      api_token: passField.value,
      data: objectFromForm(channelsForm)
    }
    if (!body.data.auth_code) delete body.data.auth_code
    XHR.requestExt('PUT', endpoint + '/admin/video-channels', (r, s) => {
      let response = []
      updateBtn.disabled = false
      try {
        response = JSON.parse(r)
      } catch (e) {
        return console.error(new Error('Received invalid response, status: ' + s))
      }
      renderResponse(response)
      if (s === 200) {
        refreshChannels()
      }
    }, 0, JSON.stringify(body), { 'Content-Type': 'application/json' })
  } else if (formAction === 'delete') {
    const entry = objectFromForm(channelsForm)
    if (!confirm(`Are you sure you want to delete "${entry.key}"?`)) return
    const deleteBtn = channelsForm.querySelector('.delete-btn')
    deleteBtn.disabled = true
    const body = { api_token: passField.value }
    XHR.requestExt('DELETE', `${endpoint}/admin/video-channels/${entry.key}`, (r, s) => {
      let response = []
      deleteBtn.disabled = false
      try {
        response = JSON.parse(r)
      } catch (e) {
        return console.error(new Error('Received invalid response, status: ' + s))
      }
      renderResponse(response)
      if (s === 200) {
        refreshChannels()
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

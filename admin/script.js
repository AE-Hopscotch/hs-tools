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
  blockContainer.querySelectorAll('.block-card').remove()
  XHR.requestExt('GET', endpoint + '/hopscotch-data/blocks', function (r, s) {
    let response = []
    try {
      response = JSON.parse(r)
    } catch (e) {
      console.error(new Error('Received invalid response, status: ' + s))
    }
    response.sort((a, b) => a.id - b.id).forEach(block => {
      const card = document.createElement('div');
      ['block-card', 'blockColor', block.type].forEach(cl => { if (cl) card.classList.add(cl) })
      card.innerHTML = `<span class="id-badge">${block.id}</span>
        <h2>${block.name.htmlEscape()}</h2>
      `
      blockContainer.appendChild(card)
      card.addEventListener('click', function () {
        Object.entries(block).forEach(entry => {
          const field = editFormContainer.querySelector(`[name="${entry[0]}"]`)
          if (field) field.value = entry[1]
        })
      })
    })
  }, 0)
}
refreshBlocks()

// Edit Content Form
const editFormContainer = document.querySelector('.wrapper .form-container')

// Set Transition Time on Load
window.addEventListener('load', function () {
  document.documentElement.style.setProperty('--time-trans', '0.5s')
})

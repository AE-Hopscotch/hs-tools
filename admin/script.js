const endpoint = 'http://hs-tools-api.deta.dev'
const authMenuItem = document.querySelector('li[role="authkey"]')
const authForm = document.getElementById('authform')
const passField = authForm.querySelector('input[type="password"]')
authMenuItem.addEventListener('click', function () {
  const userInput = prompt('New value for API key')
  if (userInput != null) {
    passField.value = userInput
    authForm.action = endpoint + '/admin/ping'
    authForm.submit()
  }
})
setTimeout(function () {
  console.log('passField length: ' + passField.value.length)
  authForm.action = endpoint + '/admin/ping'
  authForm.submit()
}, 1200)
// Set Transition Time on Load
window.addEventListener('load', function () {
  document.documentElement.style.setProperty('--time-trans', '0.5s')
})

function setFormStateIfValid (input, button) {
  setFormState(button, input.checkValidity() ? 2 : 1)
}

function setFormState (button, s) {
  // 0 = waiting, 1 = disabled, 2 = enabled
  button.disabled = (s !== 2); 
  button.setAttribute("waiting", (s === 0));
}

const retrieveInput = document.getElementById('retrieve-project-input')
document.getElementById('project-url').addEventListener('input', e => {
  setFormStateIfValid(e.target, submitBtn)
})
retrieveInput.addEventListener('input', e => {
  setFormStateIfValid(e.target, retrieveBtn)
})

const submitBtn = document.getElementById('submit-btn')
const retrieveBtn = document.getElementById('retrieve-btn')
const reqForm = document.getElementById('request-form')
const retrieveForm = document.getElementById('get-project')
const endpoint = location.protocol === 'https:' ? 'https://hs-tools-api.up.railway.app' : 'http://ethan-mbp14.local:7700'

function submitRequest() {
  setFormState(submitBtn, 1);
  const data = Object.fromEntries([...new FormData(reqForm).entries()])
  XHR.requestExt('POST', endpoint + '/project-requests', (res, status) => {
    setFormState(submitBtn, 2);
    const response = JSON.parse(res)
    if (response.error) return alert('Error: ' + response.error)
    reqForm.querySelector('.form-input').hidden = true
    reqForm.querySelector('.form-output').hidden = false
    document.getElementById('project-key-span').innerText = response.key
  }, false, JSON.stringify(data), { 'Content-Type': 'application/json' });
}
document.getElementById("submit-btn").onclick = function(event){
  event.preventDefault();
  submitRequest();
}
retrieveForm.addEventListener('submit', e => {
  e.preventDefault()
  setFormState(retrieveBtn, 0)
  XHR.requestExt('GET', endpoint + '/project-requests/' + retrieveInput.value, (res, status) => {
    let result = {}
    setFormState(retrieveBtn, 2)
    try { result = JSON.parse(res) } catch (e) { return alert('Invalid Server Response') }
    if (result.error) {
      alert('Error: ' + result.error)
    } else if (result.output && result.output.match(/^https:\/\/c\.gethopscotch\.com\/p\//)) {
      location.replace(result.output)
    } else if (result.output) {
      alert((result.status === 'rejected' ? 'Error: ' : '') + result.output)
    } else {
      switch (result.status) {
        case 'received': return alert('The project request is in progress')
        case 'sent': return alert('The project request has been sent')
      }
    }
  }, false)
})

function copyText(text) {
  var copyText = document.getElementById("id-copybox");
  copyText.value = text;
  
  copyText.select();
  copyText.setSelectionRange(0, 9999999); //Mobile

  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}
document.getElementById('copy-id-btn').addEventListener('click', e => {
  e.preventDefault()
  copyText(document.getElementById('project-key-span').innerText)
})

XHR.requestExt('GET', endpoint + '/project-requests/status', (res, status) => {
  let response = {}
  try { response = JSON.parse(res) } catch (e) {}
  if (response.is_open === undefined) {
    document.querySelector('select[name="edit-reason"] option[disabled]').innerText = 'ERROR: Could not connect to server'
    document.querySelector('.form-input input[name="project-url"]').value = ''
    document.querySelector('.form-input input[name="project-url"]').disabled = true
    return
  }
  if (!response.is_open) {
    document.querySelector('.form-input').hidden = true
    document.querySelector('.form-closed').hidden = false
    return
  }
  document.querySelector('select[name="edit-reason"]').innerHTML = response.options.map(option => {
    return `<option value="${option[0]}">${option[1]}</option>`
  }).join('')
}, false)

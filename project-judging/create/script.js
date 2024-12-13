const endpoint = location.protocol === 'https:' ? 'https://hs-tools-api.up.railway.app' : 'http://localhost:7700'
const submitDialog = document.getElementById('submission-progress')

// Auto-adjust height of textareas
document.body.addEventListener('input', e => {
  if (e.target.nodeName !== 'TEXTAREA') return
  e.target.style.height = ''
  e.target.style.height = (e.target.scrollHeight - 16) + 'px'
})

// Delete Criteria on Backspace
document.body.addEventListener('keydown', e => {
  if (!e.target.matches('[data-role="name"]')) return
  if (e.key !== 'Backspace' || e.target.value.length) return
  const container = e.target.parentNode.parentNode
  const containerIndex = [...container.parentNode.children].indexOf(container)
  if (containerIndex === 2) return
  container.previousElementSibling.querySelector('[data-role="description"]').focus()
  e.preventDefault()
  container.remove()
})

function addCriteria (event) {
  const template = document.getElementById('criteria-template')
  const container = template.content.querySelector('.criterium').cloneNode(true)
  template.parentNode.insertBefore(container, addCriteriaBtn)
  if (event) container.querySelector('[data-role="name"]').focus()
}

const addCriteriaBtn = document.getElementById('add-criteria-button')
addCriteriaBtn.addEventListener('click', e => {
  addCriteria(e)
})
addCriteria()

let projectsCompleted = 0
let totalProjects = 0
function addProgress () {
  projectsCompleted++
  submitDialog.querySelector('[name="completed"]').innerText = projectsCompleted
  submitDialog.querySelector('progress').value = projectsCompleted / totalProjects
}
async function fetchAll (list) {
  const buildURL = url => 'https://corsproxy.io/?url=' + encodeURIComponent('https://c.gethopscotch.com/api' + url)
  const promiseList = list.map(async uuid => {
    return fetch(buildURL(`/v2/projects/${uuid}/metadata`)).then(x => x.json())
      // Catch when metadata not found
      .catch(() => new Promise(resolve => {
        // Fallback: /api/v1/projects route
        fetch(buildURL(`/v1/projects/${uuid}`)).then(x => x.json())
          .then(data => resolve(data))
          .catch(e => {
            resolve(null)
          })
      }))
  })
  promiseList.forEach(p => {
    p.then(addProgress)
  })
  const results = await Promise.all(promiseList)
  return results
}

document.querySelector('form').addEventListener('submit', async e => {
  e.preventDefault()
  const initialData = Object.fromEntries(new FormData(e.target))
  const projectList = [...new Set(initialData.projects.split('\n'))]

  // Get Criteria
  const criteria = [...document.querySelectorAll('.criterium')].map(c => {
    const name = c.querySelector('[data-role="name"]').value
    const symbol = c.querySelector('[data-role="symbol"]').value
    const max = c.querySelector('[data-role="max"]').value
    const description = c.querySelector('[data-role="description"]').value
    const slug = name.replace(/\s/g, '-').toLowerCase().match(/[\w-]?/g).join('')
    return { name, slug, symbol, description, max }
  })

  // Set `uuidList` to list of Hopscotch project uuids
  const prefixes = [
    'ae-hopscotch.github.io/hs-tools/play-project/?id=',
    'c.gethopscotch.com/p/',
    'c.gethopscotch.com/e/',
    'explore.gethopscotch.com/p/',
    'explore.gethopscotch.com/e/',
    'community.gethopscotch.com/p/',
    'community.gethopscotch.com/e/'
  ]
  const projectLinkRegex = new RegExp(`^https://(${
    prefixes.map(p => p.replace(/\./g, '\\.')).join('|')
  })([\\w-]+)$`)
  const uuidList = projectList.map(link => {
    const linkMatch = link.trim().match(projectLinkRegex)
    if (!linkMatch) return null
    return linkMatch[2]
  }).filter(x => !!x)

  totalProjects = uuidList.length
  submitDialog.querySelector('[name="total"]').innerText = uuidList.length

  // Show Submission Progress Dialog
  submitDialog.showModal()
  document.body.style.overflow = 'hidden'
  document.body.ontouchmove = e => e.preventDefault()

  const projects = []
  for (let i = 0; i < uuidList.length; i += 5) {
    // Groups of 5 parallel requests at once
    const links = uuidList.slice(i, i + 5)
    const results = await fetchAll(links, 0)
    results.forEach(data => {
      if (!data) return
      const { uuid: id, title } = data
      projects.push({ id, title })
    })
  }
  const requestBody = { ...initialData, projects, criteria }
  if (!requestBody.accessCode) delete requestBody.accessCode
  if (!requestBody.viewingCode) delete requestBody.viewingCode

  submitDialog.querySelector('p').innerText = 'Generating Links...'

  let error
  const results = await fetch(endpoint + '/judging/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  }).then(x => x.json()).catch(e => {
    error = e
  })
  error = error || results.error

  if (error) {
    console.error(error)
    submitDialog.querySelector('p').innerText = 'Failed to submit:\n' + error
    submitDialog.querySelector('progress').remove()
    return
  }
  submitDialog.close()

  const completionDialog = document.getElementById('completion-dialog')
  const { accessCode, viewingCode, key } = results
  const viewingKey = viewingCode ? md5(viewingCode) : '';

  // Show judging access and viewing codes
  ['accessCode', 'viewingCode'].forEach(trait => {
    const value = results[trait]
    const target = document.getElementById('cd-' + trait)
    if (!value) return target.parentNode.remove()
    target.innerText = value
  })

  const viewKeyExt = viewingCode ? `?key=${md5(viewingCode)}` : ''
  const links = {
    judgingLink: `${location.origin}/hs-tools/project-judging/?id=${key}`,
    resultsLink: `${location.origin}/hs-tools/project-judging/view/?id=${key}`,
    projectScoresheetLink: `${endpoint}/judging/spreadsheet/${key}/projects${viewKeyExt}`,
    categoryScoresheetLink: `${endpoint}/judging/spreadsheet/${key}/categories${viewKeyExt}`
  }
  Object.entries(links).forEach(([id, link]) => {
    const target = document.getElementById('cd-' + id)
    target.dataset.link = link
  })

  completionDialog.showModal()
})

document.querySelectorAll('button.copyable-link').forEach(button => {
  button.addEventListener('click', () => {
    const text = button.dataset.link

    // Copy Text
    const copyText = document.getElementById('copytext')
    copyText.value = text
    copyText.focus()
    document.execCommand('selectAll')
    document.execCommand('copy')
    window.getSelection().removeAllRanges()

    // Temporarily change to check mark
  })
})

const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const criteriaTable = document.getElementById('criteria-table')
const thumbnailPanel = document.querySelector('.side-panel-top')
const projectFrame = document.querySelector('.iframe-container iframe')
const toggleViewBtn = document.querySelector('.hs-toggle')
const openDialog = document.getElementById('open-dialog')
const submitDialog = document.getElementById('submit-dialog')

let currentProjectIndex = 0
let projectList = []
let projectCriteria = []
function showProject (index) {
  if (index === projectList.length) return showConfirmation()
  currentProjectIndex = index
  const { id, title } = projectList[index]
  // Update link to open project in app
  document.querySelector('a.hs-app-link').href =
    `hssampleproject://?https://c.gethopscotch.com/api/v1/projects/${id}`
  // Update Title
  document.querySelector('.wrapper h2').innerText = title
  // Update iframe
  projectFrame.src = `/hs-tools/play-project/?bgColor=transparent&id=${id}`

  // Update the project index counter
  document.querySelector('.project-index').innerText = index + 1
  document.querySelector('.project-count').innerText = projectList.length

  // Set state of previous and next buttons
  prevBtn.disabled = index === 0
  nextBtn.querySelector('i.fa').classList.toggle('fa-chevron-right', index !== projectList.length - 1)
  nextBtn.querySelector('i.fa').classList.toggle('fa-check', index === projectList.length - 1);

  // Add selected class to project in thumbnail panel
  [...thumbnailPanel.children].forEach((element, pos) => {
    element.classList.toggle('selected', pos === index)
  })

  // Update table with existing values, if any
  const rows = criteriaTable.querySelectorAll('tbody tr[data-criteria-id]')
  rows.forEach(row => {
    const criteriaId = row.dataset.criteriaId
    const currentValue = projectList[index].scores[criteriaId]
    row.querySelector('input').value = currentValue === '-' ? '' : currentValue
  })

  // Set text of view code button
  toggleViewBtn.innerText = 'View Code'
}
function updateProject (index, skip, disqualify) {
  const project = projectList[index]
  const scoreEntries = Object.entries(project.scores)
  project.skipped = project.disqualified = false
  if (skip) {
    project.skipped = true
    project.scores = Object.fromEntries(
      scoreEntries.map(([criteria]) => [criteria, '-'])
    )
  }
  if (disqualify) {
    project.disqualified = true
    project.scores = Object.fromEntries(
      scoreEntries.map(([criteria]) => [criteria, 0])
    )
  }
  const rows = criteriaTable.querySelectorAll('tbody tr[data-criteria-id]')
  rows.forEach(row => {
    const input = row.querySelector('input')
    let value = input.checkValidity() ? parseInt(input.value) : '-'

    if (skip) value = '-'
    if (disqualify) value = 0

    const criteriumId = row.dataset.criteriaId
    const criterium = projectCriteria.find(c => c.slug === criteriumId)

    project.scores[criteriumId] = value
    const tile = thumbnailPanel.children[currentProjectIndex]
    tile.querySelector(`.criteria-overview span[data-name="${criteriumId}"]`)
      .innerText = criterium.symbol + value
  })
  if ((skip || disqualify) && index < projectList.length - 1) showProject(index + 1)
}
function showConfirmation () {
  submitDialog.showModal()
}

function loadJudging (data) {
  const IMG_ROOT = 'https://s3.amazonaws.com/hopscotch-cover-images/production/'

  // Set criteria and projects to response data
  let { criteria, projects, submission } = data
  if (submission) projects = submission.scoringData

  // Set global variables
  projectCriteria = criteria
  projectList = projects.map(p => {
    if (p.scores) return p
    p.skipped = p.disqualified = false
    p.scores = Object.fromEntries(criteria.map(c => [c.slug, '-']))
    return p
  })

  console.log(projects)
  // Populate criteria table
  criteria.forEach(c => {
    const tableRow = document.getElementById('criteria-template').cloneNode(true).content.children[0]
    tableRow.dataset.criteriaId = c.slug
    tableRow.querySelector('.cr-symbol').innerText = c.symbol
    tableRow.querySelector('.cr-name').innerText = c.name
    tableRow.querySelector('.cr-name').title = c.description || ''
    tableRow.querySelector('[data-criteria-max]').innerText = c.max

    const scoreInput = tableRow.querySelector('input')
    scoreInput.max = c.max
    scoreInput.min = 0

    criteriaTable.querySelector('tbody').appendChild(tableRow)
  })

  projects.forEach(project => {
    const thumbnailCard = document.getElementById('thumbnail-template').cloneNode(true).content.children[0]
    thumbnailCard.querySelector('img').src = `${IMG_ROOT}${project.id}.png`
    thumbnailPanel.appendChild(thumbnailCard)

    const scores = project.scores || {}
    criteria.forEach(c => {
      const existingScore = scores[c.slug] != null ? scores[c.slug] : '-'
      const span = document.createElement('span')
      span.innerText = c.symbol + existingScore
      span.dataset.name = c.slug
      thumbnailCard.querySelector('.criteria-overview').appendChild(span)
    })
  })

  showProject(0)
  document.querySelector('.wrapper').hidden = false

  document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', e => {
      const index = [...thumbnailPanel.children].indexOf(item)
      showProject(index)
    })
  })
}

const endpoint = location.protocol === 'https:' ? 'https://hs-tools-api.up.railway.app' : 'http://localhost:7700'
const judgingEndpoint = `${endpoint}/judging/${new URL(location.href).searchParams.get('id')}`
function fetchData (accessCode, editCode) {
  fetch(judgingEndpoint, {
    headers: {
      'x-judging-access-code': accessCode,
      'x-judging-edit-code': editCode
    }
  })
    .then(x => x.json())
    .then(data => {
      loadJudging(data)
    })
    .catch(e => {
      thumbnailPanel.innerText = 'Unable to load projects'
      console.error('Entry does not exist ||', e)
    })
}

// Previous and Next Project buttons
prevBtn.addEventListener('click', e => {
  showProject(currentProjectIndex - 1)
})
nextBtn.addEventListener('click', e => {
  showProject(currentProjectIndex + 1)
})

// Update current project values when skipped, DQ'd, or values changeed
document.getElementById('skip-btn').addEventListener('click', e => {
  updateProject(currentProjectIndex, true)
})
document.getElementById('dq-btn').addEventListener('click', e => {
  updateProject(currentProjectIndex, undefined, true)
})
document.querySelector('.side-panel-bottom').addEventListener('input', e => {
  updateProject(currentProjectIndex)
})

// Toggle playing and code viewing
toggleViewBtn.addEventListener('click', e => {
  const id = projectList[currentProjectIndex].id
  const isPlaying = new URL(projectFrame.src).origin === location.origin
  const baseUrl = isPlaying ? 'https://explore.gethopscotch.com/edit/' : '/hs-tools/play-project/?bgColor=transparent&id='
  projectFrame.src = baseUrl + id
  toggleViewBtn.innerText = !isPlaying ? 'View Code' : 'Play'
})

// Load projects and criteria
let accessCode, editCode
openDialog.showModal()
openDialog.addEventListener('close', () => {
  accessCode = document.getElementById('od-accessCode').value
  editCode = document.getElementById('od-editCode').value
  fetchData(accessCode, editCode)
}, { once: true })

// Submit scores
submitDialog.querySelector('form').addEventListener('submit', e => {
  const username = document.getElementById('sd-username').value
  const reqBody = {
    username,
    scoringData: projectList
  }
  fetch(judgingEndpoint, {
    method: 'POST',
    headers: {
      'x-judging-access-code': accessCode,
      'x-judging-edit-code': editCode,
      'content-type': 'application/json'
    },
    body: JSON.stringify(reqBody)
  }).then(x => x.json())
    .then(data => {
      editCode = data.submission.id
      document.getElementById('fd-code').innerText = editCode
      document.getElementById('finish-dialog').showModal()
    })
})
document.getElementById('sd-cancel').addEventListener('click', () => {
  submitDialog.close()
})

const openDialog = document.getElementById('open-dialog')
const endpoint = location.protocol === 'https:' ? 'https://hs-tools-api.up.railway.app' : 'http://localhost:7700'
const eventId = new URL(location.href).searchParams.get('id')
const judgingEndpoint = `${endpoint}/judging/${eventId}/results`

function drawChart (element, judges, scores, max) {
  data = google.visualization.arrayToDataTable(
    [
      ['Judge', ...judges], //, { role: 'style' }],
      ['', ...scores]
    ]
  )
  options = {
    textStyle: { color: '#777' },
    width: 325,
    height: 250,
    backgroundColor: { fill: 'transparent' },
    legend: { position: 'none' },
    chartArea: { left: 48, top: 8, width: 270, height: 230 },
    bars: 'vertical',
    orientation: 'horizontal',
    hAxis: { titleTextStyle: { color: '#777' }, textPosition: 'none' },
    vAxis: {
      title: `Score (out of ${max})`,
      titleTextStyle: { color: '#777', italic: false },
      textStyle: { color: '#777'/* , fontSize: 8 */ },
      baselineColor: '#777',
      gridlines: { color: '#777', opacity: 0.2 },
      minorGridlines: { count: 0 },
      minValue: 0,
      maxValue: max
    },
    bar: { gap: 0, groupWidth: '100%' }
  }

  chart = new google.visualization.BarChart(element)
  chart.draw(data, options)
}

function drawProjectScoreCharts (data, uuid) {
  const currentProjectScores = data.projectScores.find(s => s.id === uuid)
  if (!currentProjectScores) return

  // Secondary sort: name
  data.criteria.sort((a, b) => a.name > b.name || -1)
  // Primary sort: max score, desc
  data.criteria.sort((b, a) => a.max - b.max)

  const container = document.querySelector('.data-container')
  container.innerHTML = ''

  data.criteria.forEach(c => {
    const key = c.slug
    const scoreEntries = currentProjectScores.entries.map(e => {
      return [e.username, e.scores[key]]
    })
    const judges = scoreEntries.map(x => x[0])
    const scores = scoreEntries.map(x => x[1])
    const average = (scores.reduce((total, s) => total + s, 0) / scores.length) || 0

    const chartElement = document.createElement('fieldset')
    container.appendChild(chartElement)

    drawChart(chartElement, judges, scores, c.max)

    const label = document.createElement('legend')
    chartElement.appendChild(label)
    label.innerText = `${c.name} (${Math.round(average * 100) / 100}/${c.max} pts)`
  })
}

function drawCategoryScoreCharts (data, codeName) {
  const currentCategoryScores = data.categoryScores.find(c => c.slug === codeName)
  if (!currentCategoryScores) return

  const container = document.querySelector('.data-container')
  container.innerHTML = ''

  currentCategoryScores.projects.forEach(p => {
    // const key = p.slug
    const truncatedTitle = p.title.replace(/(.{25}).+/g, (m0, m1) => m1.trim() + '\u2026')
    const scoreEntries = p.scores.map(e => {
      return [e.username, e.value]
    })

    const judges = scoreEntries.map(x => x[0])
    const scores = scoreEntries.map(x => x[1])
    const average = Math.round(p.average * 100) / 100

    const chartElement = document.createElement('fieldset')
    container.appendChild(chartElement)

    drawChart(chartElement, judges, scores, currentCategoryScores.max)

    const label = document.createElement('legend')
    chartElement.appendChild(label)
    label.innerText = `${truncatedTitle} (${average}/${currentCategoryScores.max} pts)`
  })
}

function loadProjectResults (data) {
  document.getElementById('spreadsheet-download-link').href =
    `${endpoint}/judging/spreadsheet/${eventId}/projects?key=${md5(accessCode)}`
  // Draw scoring charts for the first project
  drawProjectScoreCharts(data, data.projectScores[0].id)

  const bottomPanel = document.querySelector('.bottom-fixed')
  bottomPanel.innerHTML = ''

  const emojiList = ['🥇 ', '🥈 ', '🥉 ']

  data.projectScores.forEach((project, index) => {
    const truncatedTitle = project.title.replace(/(.{25}).+/g, (m0, m1) => m1.trim() + '\u2026')
    const labelText = `${emojiList[index] || ''}${truncatedTitle} (${Math.round(project.average * 100) / 100})`
    const button = document.createElement('button')
    if (index === 0) button.classList.add('selected')
    button.innerText = labelText
    bottomPanel.appendChild(button)

    button.addEventListener('click', () => {
      // Add selected class to clicked button only
      bottomPanel.querySelectorAll('button').forEach(b => {
        b.classList.toggle('selected', b === button)
        if (b === button) b.scrollIntoViewIfNeeded()
      })

      // Show data for project
      drawProjectScoreCharts(judgingResults, project.id)
    })
  })
}

function loadCategoryResults (data) {
  document.getElementById('spreadsheet-download-link').href =
    `${endpoint}/judging/spreadsheet/${eventId}/categories?key=${md5(accessCode)}`
  // Draw scoring charts for the project total
  drawCategoryScoreCharts(data, data.categoryScores[0].slug)

  const bottomPanel = document.querySelector('.bottom-fixed')
  bottomPanel.innerHTML = ''

  data.categoryScores.forEach((category, index) => {
    const labelText = `${category.symbol ? category.symbol + ' ' : ''}${category.name} (${category.max})`
    const button = document.createElement('button')
    if (index === 0) button.classList.add('selected')
    button.innerText = labelText
    button.title = category.description
    bottomPanel.appendChild(button)

    button.addEventListener('click', () => {
      // Add selected class to clicked button only
      bottomPanel.querySelectorAll('button').forEach(b => {
        b.classList.toggle('selected', b === button)
        if (b === button) b.scrollIntoViewIfNeeded()
      })

      // Show data for project
      drawCategoryScoreCharts(judgingResults, category.slug)
    })
  })
}

document.getElementById('sort-selection').addEventListener('input', e => {
  if (e.target.value === 'projects') {
    loadProjectResults(judgingResults)
  } else {
    loadCategoryResults(judgingResults)
  }
})

function fetchData (accessCode) {
  fetch(judgingEndpoint, {
    headers: {
      'x-judging-access-code': accessCode
    }
  })
    .then(x => x.json())
    .then(data => {
      const nameEl = document.getElementById('event-name')
      // Return if error message is present
      if (data.error) {
        nameEl.parentNode.innerText = 'Cannot Load'
        return
      }

      judgingResults = data
      console.log(data)
      nameEl.innerText = data.title
      // Load Charts
      google.charts.load('current', { packages: ['corechart', 'bar'] })
      google.charts.setOnLoadCallback(() => {
        loadProjectResults(data)
      })
    })
    .catch(e => {
      console.error('Entry does not exist ||', e)
    })
}

let accessCode, judgingResults
openDialog.showModal()
openDialog.addEventListener('close', () => {
  accessCode = document.getElementById('od-accessCode').value
  fetchData(accessCode)
}, { once: true })

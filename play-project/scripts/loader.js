
// Basic Config
const onIos = (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
if (typeof projectImport === 'undefined') {
  window.projectImport = {}
}
const AE_MOD = {
  projectData: {},
  uuid: '',
  playerVersion: '',
  moddedActions: {
    keyboardSupport: false,
    hasUrl: false
  },
  pendingHostList: [],
  webplayer_action: function (a, b, c) {
    isTrusted = !AE_PROJECT_USES_CUSTOM_DATA
    if (!typeof c === 'object' || !/^.{1,3}$/.test(Object.getPrototypeOf(c || {}).constructor.name)) {
      isTrusted = false
      console.warn('Untrusted Event')
    }
    try {
      a = JSON.parse(a.replace(/"_data"/g, b).replace(/"_data_escaped"/g, JSON.stringify(b)))
      a.args = a.args || []
    } catch (e) {
      console.error('Invalid webplayer action:' + a, b)
      return
    }
    switch (a.name) {
      case 'restart':
        document.getElementById('restart-button').click()
        break
      case 'js-console-log':
        console.log('%cAwesome_E’s Project Player%c ' + a.args, 'display:inline-block; padding: 4px 6px; background-color: salmon; color: white; font-weight: bold;', '')
        break
      case 'js-alert':
        alert(a.args)
        break
      case 'js-prompt':
        return prompt(a.args[0], (a.args[1] || ''))
      case 'checkKey':
        return Number(a.args.repeatEach(function (k) {
          return AE_MOD.keyboardKeys.includes(k)
        }).includes(true))
      case 'checkKeyData':
        return Number(AE_MOD.keyboardKeys.includes(b))
      case 'checkKeyAll':
        return Number(!a.args.repeatEach(function (k) {
          return AE_MOD.keyboardKeys.includes(k)
        }).includes(false))
      case 'getGamepadCount':
        return [...navigator.getGamepads()].filter(x => !!x).length
      case 'checkControllerButton': { // Args: [0] Controller ID, [1] Mode (0=one, 1=any, 2=all)
        const gamepad = navigator.getGamepads()[a.args[0]]
        if (!gamepad) return 0

        // Return Value of Single Button
        if (!Number(a.args[1])) return gamepad.buttons[a.args[2]]?.value || 0

        const buttons = (Array.isArray(a.args[2])) ? a.args[2] : [a.args[2]]
        const resolver = Number(a.args[1]) === 1 ? 'some' : 'every'
        return Number(buttons[resolver](id => {
          return gamepad.buttons[id]?.pressed || 0
        }))
      }
      case 'checkControllerAxis': { // Args: [0] Controller ID, [1] Mode (0=one, 1=any, 2=all)
        const gamepad = navigator.getGamepads()[a.args[0]]
        if (!gamepad) return 0
        return gamepad.axes[a.args[1]] || 0
      }
      case 'scrollData':
        return AE_MOD.mouseWheelData[a.args[0]]
      case 'isWebExp':
        return 1
      case 'isComputer':
        return Number(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && !(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))
      case 'user-tz':
        return Math.round(new Date().getTimezoneOffset() / -60)
      case 'user-darkmode':
        return Number(window.matchMedia('(prefers-color-scheme: dark)').matches)
      case 'savedata-write':
        if (LS_ACCESS) {
          localStorage.setItem('pData_' + AE_PROJECT_UUID, a.args.join(''))
          return 1
        } else {
          alert('Unable to save data. Make sure third-party cookies are allowed for ae-hopscotch.github.io so that the project has access to local storage')
          return 0
        }
      case 'savedata-read': {
        if (!LS_ACCESS) {
          alert('Save data cannot be accessed within this frame.')
          return 0
        }
        function maskedEval (scr) {
          const mask = { data: localStorage.getItem('pData_' + AE_PROJECT_UUID) }
          for (p in this) mask[p] = undefined

          // eslint-disable-next-line no-new-func
          return (new Function('with(this) { return eval(' + JSON.stringify(scr) + ') }')).call(mask)
        }
        try { return maskedEval(a.args.join('')) } catch (e) { return 0 }
      }
      case 'newsave-read': // Args: [0] Property, [1] Default
      case 'newsave-write': // Args: [0] Property, [1] Value
      case 'newsave-delete': { // Args: [0] Property
        if (!LS_ACCESS) {
          alert('Save data cannot be created within this frame.')
          return 0
        }
        let storedVals = localStorage.getItem('new_pData_' + AE_PROJECT_UUID) || {}
        try { storedVals = JSON.parse(storedVals) } catch (e) { storedVals = {} }
        if (a.name === 'newsave-read') return storedVals[a.args[0]] || a.args[1]
        a.name === 'newsave-delete' ? delete storedVals[a.args[0]] : (storedVals[a.args[0]] = a.args[1])
        localStorage.setItem('new_pData_' + AE_PROJECT_UUID, JSON.stringify(storedVals))
        break
      }
      case 'globalvar-connect':
        // Args: none
        if (AE_MOD.globalvarsConnected) return
        firebase.database().ref('global-variables/' + (AE_USER_ID || -1) + '/').once('value').then(function (s) {
          AE_MOD.globalvars = s.val() || {}
          AE_MOD.globalvarsConnected = true
        })
        firebase.database().ref('global-variables/' + (AE_USER_ID || -1) + '/').on('value', function (s) {
          if (AE_MOD.globalvarsConnected) AE_MOD.globalvars = s.val() || {}
        })
        break
      case 'globalvar-read':
        // Args: [0] Variable Name
        return AE_MOD.globalvars[a.args[0]]
      case 'globalvar-write':
        // Args: [0] Variable Name, [1] New Value
        if (!isTrusted && !a.args[0].match(/^@UNLOCKED_/g)) return alert('Cannot write global data: untrusted code execution')
        firebase.database().ref('global-variables/' + (AE_USER_ID || -1) + '/' + a.args[0].replace(/[.#$[\]]/g, '')).set(
          a.args[1]
        )
        break
      case 'url-iframe': {
        // Args: [0] URL
        function onList (hostname) {
          return !!hostname.match(new RegExp('^(' + AE_MOD.approvedHostList.join('|').replace(/\*/g, '.*?') + ')$'))
        }
        if (a.args[0]) {
          try {
            host = new URL(a.args[0]).host
            const origin = new URL(a.args[0]).origin
            if (host && !onList(host)) {
              if (AE_MOD.pendingHostList.indexOf(origin) === -1) AE_MOD.pendingHostList.push(origin)
              return alert('This URL has not been approved')
            }
          } catch (e) { return alert('Invalid URL') }
          let parentDiv = document.getElementById('projectIframeDiv')
          parentDiv.style.display = 'block'
          const iframe = parentDiv.querySelector('iframe') || document.createElement('iframe')
          iframe.src = (a.args[0].match(/^https?:\/\/.*?\.github\.io|data:/)) ? a.args[0] : 'https://api.allorigins.win/raw?url=' + encodeURIComponent(a.args[0])
          parentDiv.appendChild(iframe)
          setTimeout(function () { parentDiv.style.bottom = 0 }, 0)
          if (!parentDiv.querySelector('button').onclick) {
            parentDiv.querySelector('button').onclick = function () {
              parentDiv = document.getElementById('projectIframeDiv')
              parentDiv.style.bottom = '-100vh'
              setTimeout(() => { parentDiv.querySelector('iframe').remove(); parentDiv.style.display = 'none' }, 1000)
            }
          }
        }
        break
      }
      case 'url-goto': {
        // Args: [0] URL
        function onList (hostname) {
          return !!hostname.match(new RegExp('^(' + AE_MOD.approvedHostList.join('|').replace(/\*/g, '.*?') + ')$'))
        }
        if (a.args[0]) {
          try {
            host = new URL(a.args[0]).host
            const origin = new URL(a.args[0]).origin
            console.log(host, origin)
            if (host && !onList(host)) {
              if (AE_MOD.pendingHostList.indexOf(origin) === -1) AE_MOD.pendingHostList.push(origin)
              return alert('This URL has not been approved')
            }
          } catch (e) { return alert('Invalid URL') }
          location.href = a.args[0]
        }
        break
      }
      case 'achievement': {
        // Args: [0] HTML Input
        // Args: [0] Title, [1] Description, {2} Image URL
        const target = document.getElementById('achievement-banner')
        target.innerHTML = ''
        if (a.args[1]) {
          target.innerHTML = `<img src="${a.args[2] || 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='}" width="48"/>
              <div><span class="achievement-name">${a.args[0]}</span>
                <span class="achievement-description">${a.args[1]}</span>
              </div><i class="fa fa-close" onclick="banner(false)"></i>`
        } else {
          target.innerHTML = a.args[0]
        }
        banner(true)
        break
      }
      case 'userdata-load':
        // Args: [0] User ID
        XHR.requestExt('GET', 'https://c.gethopscotch.com/api/v2/users/' + encodeURIComponent(a.args[0]), function (r, s) {
          try {
            JSON.parse(r)
            AE_MOD.hs_user_data[a.args[0]] = JSON.parse(r)
          } catch (e) { /* Bad JSON */ }
        }, 1)
        break
      case 'userdata-read': {
        // Args: [0] User ID, {1} JSON trait name (e.g. nickname)
        if (!AE_MOD.hs_user_data[a.args[0]]) return ''
        const dataPiece = a.args[1] ? AE_MOD.hs_user_data[a.args[0]][a.args[1]] : JSON.stringify(AE_MOD.hs_user_data[a.args[0]])
        return dataPiece == null ? 'undefined' : dataPiece
        // return AE_MOD.hs_user_data[a.args[0]] ? (a.args[1]?AE_MOD.hs_user_data[a.args[0]][a.args[1]]||"undefined":AE_MOD.hs_user_data[a.args[0]]) : "";
      }
      case 'set-project-font': {
        const fontFamilies = HSTextTextureFactory.FONT_FAMILIES
        if (fontFamilies[0] === 'Avenir-Book') fontFamilies.unshift('unknown')
        fontFamilies[0] = a.args[0]
        return 1
      }
      case 'session-new': {
        // Args: [0] Max Size
        if (!isTrusted) return alert('Cannot start session: untrusted code execution')
        if (session.gameId && session.isHost) {
          if (!confirm('Your current session (' + session.gameId + ') is still active! Would you like to create a new session anyways?')) break
          session.leave()
        } else if (session.gameId) {
          if (!confirm('You are currently in a session (' + session.gameId + ')! Are you sure you want to leave?')) break
          session.leave()
        }
        session.isHost = true
        session.maxSize = Number(a.args[0]) || 256
        session.gameId = Math.round(Math.random() * 36 ** 6).toString(36)
        const now = Math.round(Date.now() / 1000).toString(36)
        session.userJoined = now + session.userId
        firebase.database().ref('live-projects/' + AE_PROJECT_UUID + '-' + session.gameId).set({
          createdAt: new Date().toISOString(),
          canJoin: true,
          maxSize: session.maxSize
        })
        firebase.database().ref('live-projects/' + AE_PROJECT_UUID + '-' + session.gameId + '/users/' + session.userJoined).set(true)
        copyText(session.gameId)
        setTimeout(function () { alert('Session ID copied to clipboard: ' + session.gameId) }, 10)

        firebase.database().ref('live-projects/' + AE_PROJECT_UUID + '-' + session.gameId).on('value', function (s) {
          if (session.userJoined) session.data = s.val()
        })
        return session.gameId
      }
      case 'session-join':
        // Args: none
        if (!isTrusted) return alert('Cannot join session: untrusted code execution')
        if (session.gameId && session.isHost) {
          if (!confirm('Your current session (' + session.gameId + ') is still active! Would you like to join a new session anyways?')) break
          session.leave()
        } else if (session.gameId) {
          if (!confirm('You are currently in a session (' + session.gameId + ')! Are you sure you want to leave?')) break
          session.leave()
        }
        session.gameId = (prompt('Enter Session ID:') || '').toLowerCase().replace(/[\s\-.#$[\]]/g, '')
        if (session.gameId) {
          const now = Math.round(Date.now() / 1000).toString(36)
          session.userJoined = now + session.userId
          firebase.database().ref('live-projects/' + AE_PROJECT_UUID + '-' + session.gameId).once('value').then(s => {
            if (s.val() && Object.keys(s.val().users || {}).length < s.val().maxSize) {
              firebase.database().ref('live-projects/' + AE_PROJECT_UUID + '-' + session.gameId + '/users/' + session.userJoined).set(false)
              firebase.database().ref('live-projects/' + AE_PROJECT_UUID + '-' + session.gameId).on('value', function (s) {
                if (session.userJoined) session.data = s.val()
                if (!s.val() || !s.val().users) {
                  if (!s.val() && session.userJoined) alert('The host has ended the session')
                  session.leave()
                }
              })
            } else {
              alert(s.val() ? 'The session is full' : 'No such session exists')
              session.leave()
            }
          })
        }
        break
      case 'session-read':
        // Args: [0..1..2..] JS Code
        if (!session.data) break
        if (!isTrusted && (!session.data || !session.data.users[session.getUser(-1)])) return alert('Cannot simulate read: untrusted non-host code execution')
        // eslint-disable-next-line no-eval
        try { return eval(a.args.join('')) } catch (e) { return 0 }
      case 'session-write':
        // Args: [0] User Index, [1] property, [2] value
        if (!session.data || !session.gameId || !session.data.users) break
        if (!isTrusted && session.getUser(-1) !== session.getUser(0)) return alert('Cannot write code: untrusted code execution')
        try {
          firebase.database().ref('live-projects/' + AE_PROJECT_UUID + '-' + session.gameId + '/game/' + session.getUser(a.args[0]) + '/' + a.args[1]).set(
            a.args[2]
          )
        } catch (e) {
          return 0
        }
        break
      case 'session-myindex':
        // Args: none
        if (!session.data) return 0
        try { return session.getUser(-1, true) } catch (e) { return 0 }
      case 'session-open':
        // Args: none
        if (!isTrusted && (!session.data || session.getUser(-1) !== session.getUser(0))) return alert('Could not open session')
        firebase.database().ref('live-projects/' + AE_PROJECT_UUID + '-' + session.gameId + '/canJoin').set(true)
        break
      case 'session-close':
        // Args: none
        if (!isTrusted && (!session.data || session.getUser(-1) !== session.getUser(0))) return alert('Could not close session')
        firebase.database().ref('live-projects/' + AE_PROJECT_UUID + '-' + session.gameId + '/canJoin').set(true)
        break
      case 'session-leave':
        // Args: none
        session.leave()
        break
      // New Multiplayer Actions
      case 'socket-create':
      case 'socket-join':
      case 'socket-leave':
      case 'socket-read':
      case 'socket-write':
      case 'socket-room':
      case 'socket-playerdata':
        if (!isTrusted) {
          alert('Cannot join session: untrusted code execution')
          return 0
        }
        try { return AE_MOD.multiplayerActionHandler(a, b, c) || 0 } catch (e) { return 0 }
      default:
        console.error('Unknown webplayer action:', a)
    }
  },
  load_function: function () {
    // var url = new URL(location.href);
    if (new URL(location.href).searchParams.get('from') === 'hsBuilder') {
      localStorage.setItem('projectLoadState', 'loaded')
      // if (self !== top) window.top.postMessage('hello', '*');
      // window.top.postMessage('hello', '*')
    } else if (window.parent && new URL(location.href).searchParams.get('sendLoadMsg') === '1') {
      const event = new CustomEvent('player-loaded')
      window.parent.document.dispatchEvent(event)
    }
  },
  globalvars: {},
  globalvarsConnected: false,
  customCommands: {
    data: [],
    getFromParams: function (block) {
      if (!block.parameters) return []
      function getData (datum) {
        if (!datum.block_class?.match(/operator$/i) || !datum.params) return
        if (datum.type === 22) return datum
        const paramData = datum.params.map(param => {
          if (!param.datum) return undefined
          return getData(param.datum)
        }).flat().filter(x => !!x)
        return paramData
      }
      return block.parameters.map(param => {
        if (!param.datum) return undefined
        return getData(param.datum)
      }).flat().filter(x => !!x)
    },
    match: function (block, expression) {
      const params = block.parameters || block.params
      if (!params) return false
      const cmdVal = params[0].value
      let cmdJSON = {}
      try { cmdJSON = JSON.parse(cmdVal.replace(/^_ae_webplayer_action:/, '')) } catch {}
      // console.log(cmdJSON)
      return !!cmdJSON.name?.match(expression)
    }
  },
  hs_user_data: {},
  initiated: false
}

// Load HS Project
window.BASE_IMAGE_URL = 'https://hopscotch-images.s3.amazonaws.com/production/images/project-images/'
window.HS_INDEX_PATH = 'https://d3nbkco6xo1vz0.cloudfront.net/production/'
window.HS_WEBPLAYER_VERSION = AE_MOD.playerVersion
function init () {
  AE_MOD.initiated = true
  AE_MOD.customCustomObjects = []
  showProjectData(AE_MOD.projectData);
  (AE_MOD.projectData.abilities || []).forEach(a => {
    for (i = 0; i < (a.blocks || []).length; i++) {
      b = a.blocks[i]
      const customActions = AE_MOD.customCommands.getFromParams(b)
      // Check all custom actions
      customActions.concat(b.type === 22 || b.type === 69 ? [b] : []).forEach(actionBlock => {
        // Check if keyboard actions are present
        if (AE_MOD.customCommands.match(actionBlock, /^checkKey(All|Data)?$/)) {
          AE_MOD.moddedActions.keyboardSupport = true
          document.querySelector('.play-button').classList.add('has-keyboard')
        }
        // Check for URL actions
        if (AE_MOD.customCommands.match(actionBlock, /^url-(iframe|goto)$/)) AE_MOD.moddedActions.hasUrl = true
      })
      // Custom Custom
      const matchedValues = (JSON.stringify(b).match(/("value":"((?:|[^{}[\]]*?[^\\])(?:\\\\)*)"[^{}[\]]*?"datum":\{[^{[\]]*?"type":2000)/g) || [''])
        .join('\n').replace(/^.*?"value":"((?:|.*?[^\\])(?:\\\\)*)".*$|^.*$/, '$1\n')
        .replace(/\n$/, '')
      if (matchedValues) {
        matchedValues.split('\n').forEach(match => {
          console.log('%cMatched Custom Block:', 'color:green')
          console.log(b)
          a.blocks[i] = JSON.parse(JSON.stringify(b).replace(/("value":"((?:|[^{}[\]]*?[^\\])(?:\\\\)*)"[^{}[\]]*?"datum":\{[^{}[\]]*?"type":2000)/g, '$1,"customObject":"$2"'))
          if (!match || !/\//.test(match) || AE_MOD.customCustomObjects.indexOf(match) !== -1) return
          AE_MOD.customCustomObjects.push(match)
          const newCustomObj = {
            size: {
              width: Number(match.split('/')[0]),
              height: Number(match.split('/')[1])
            },
            id: match,
            fileName: match.split('/').splice(2).join('/')
          };
          (AE_MOD.projectData.customObjects || []).push(newCustomObj)
        })
      }
    };
  })
  delete AE_MOD.customCustomObjects
  if (AE_MOD.moddedActions.hasUrl) {
    AE_MOD.approvedHostList = ['*.gethopscotch.com', '*.github.io'] // Not being used often; PR to request more
  }
  document.getElementById('hopscotch-link').href = 'https://c.gethopscotch.com/p/' + AE_MOD.uuid
  BASE_IMAGE_URL = 'https://hopscotch-images.s3.amazonaws.com/production/images/project-images/'
  HS_INDEX_PATH = 'https://d3nbkco6xo1vz0.cloudfront.net/production/'
  HS_WEBPLAYER_VERSION = AE_MOD.playerVersion
  document.getElementById('appJs').src = 'application.js' // /*(location.protocol == "file:") ? "local_application.js" :*/ "https://ae-hopscotch.github.io/hs-tools/play-project/application.js";
  const pTitle = AE_MOD.projectData.title || 'Untitled'
  const pAuthor = (AE_MOD.projectData.user || { nickname: AE_MOD.projectData.author }).nickname
  const pTitleFull = pTitle + ((pAuthor == null) ? '' : ' by ' + pAuthor)
  document.title = pTitleFull
  if (!AE_MOD.isCustom) {
    document.querySelector('#project-image').src = 'https://s3.amazonaws.com/hopscotch-cover-images/production/' + AE_MOD.uuid + '.png'
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', 'https://s3.amazonaws.com/hopscotch-cover-images/production/' + AE_MOD.uuid)
  }
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', pTitle)
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', pTitleFull)
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', pTitle)
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', pTitleFull)
  document.querySelector('meta[name="description"]')?.setAttribute('content', pTitleFull)
}

// Project UUID
const createConstUUID = function () {
  if (typeof AE_PROJECT_UUID !== 'undefined' || typeof AE_USER_ID !== 'undefined' || typeof AE_PROJECT_USES_CUSTOM_DATA !== 'undefined') location.reload()
  const constUUIDScript = document.createElement('script')
  constUUIDScript.innerHTML = `const AE_PROJECT_UUID = '${AE_MOD.uuid}', AE_USER_ID = ${AE_MOD.projectData.user_id}, AE_PROJECT_USES_CUSTOM_DATA = ${AE_MOD.isCustom}`
  document.body.appendChild(constUUIDScript)
}

// Retrieve Project
function request (url) {
  XHR.requestExt('GET', url, function (result, status) {
    console.warn(url)
    try {
      const p = JSON.parse(result)
      console.groupCollapsed('%cProject Data', 'color:#05f')
      console.log(p)
      console.groupEnd()
      AE_MOD.projectData = p
      AE_MOD.uuid = p.uuid
      AE_MOD.isCustom = false
      AE_MOD.customActions = p.abilities.map(a => a.blocks ? a.blocks.filter(b => b.type === 22 || b.type === 69) : []).reduce((a, b) => a.concat(b), [])
      createConstUUID()
      AE_MOD.playerVersion = p.playerVersion || '1.0.0'
      // Authorize if Project contains session or global variable blocks.
      if (AE_MOD.customActions.some(x => { return AE_MOD.customCommands.match(x, /^(globalvar|session)-/) })) {
        firebase.auth().signInAnonymously().catch(function (error) {
          // Handle Errors here
          const errorCode = error.code
          const errorMessage = error.message
        })
      }

      init()
    } catch (SyntaxError) {
      document.body.innerHTML = "<h2 style='display: block; width: 100%; text-align: center; position: fixed; top: calc(50% - 12px); font-size: 24px;'>Unable to load the project...</h2>"
      console.log('Unable to load')
      console.error(SyntaxError)
    }
    // OUTPUT
  }, (url.match(/gethopscotch\.com/) ? 1 : 0))
}
const url = new URL(window.location.href)
const customUUID = url.searchParams.get('id')
if (JSON.stringify(projectImport) !== '{}' || (LS_ACCESS && localStorage.getItem('projectFromStorage') && url.searchParams.get('play') === '1')) {
  try {
    setTimeout(function () {
      if (!localStorage.getItem('projectFromStorage').match(/^\{/)) projectImport = JSON.parse(LZString.decompressFromUint8Array(new Uint8Array(localStorage.getItem('projectFromStorage').match(/[\w\d]{2}/g).repeatEach(val => parseInt(val, 16)))))
      const p = JSON.stringify(projectImport) !== '{}' ? projectImport : JSON.parse(localStorage.getItem('projectFromStorage'))
      AE_MOD.projectData = p
      AE_MOD.uuid = p.uuid
      AE_MOD.isCustom = true
      createConstUUID()
      AE_MOD.playerVersion = p.playerVersion || '1.0.0'
      if (new URL(location.href).searchParams.get('from') === 'hsBuilder') localStorage.setItem('projectLoadState', 'loadingPlayer')
      init()
    }, 200)
  } catch (SyntaxError) {
    document.body.innerHTML = "<h2 style='display: block; width: 100%; text-align: center; position: fixed; top: calc(50% - 12px); font-size: 24px;'>Unable to load the project...</h2>"
    console.error(SyntaxError)
  }
} else {
  if (LS_ACCESS) localStorage.removeItem('projectFromStorage')
  const reqUUID = customUUID || (prompt('Project URL or UUID', '') || '').replace(/.*\/p\//, '')
  if (reqUUID.match(/^\*/)) {
    request('dedicated-projects/' + reqUUID.replace(/^\*/, '') + '.hopscotch?t=' + Date.now())
  } else {
    request('https://c.gethopscotch.com/api/v1/projects/' + reqUUID)
  }
  const params = Object.fromEntries(url.searchParams)
  params.id = reqUUID
  replaceLocation('?' + new URLSearchParams(params).toString())
}

// Achievement Banner
function banner (open) {
  const b = document.querySelector('.achievement-banner')
  if (!b.innerHTML) return
  if (open) {
    b.style.display = 'block'
    b.style.animationName = 'banner-in'
    b.style.top = '8px'
  } else {
    b.style.animationName = 'banner-out'
    b.style.top = '-96px'
    setTimeout(function () { b.style.display = 'none' }, 1000)
  }
}

const firebaseConfig = {
  apiKey: 'AIzaSyD875SNjpnaKUFFk7c3aR1PCb0RLDmhct0',
  authDomain: 'ae-hs-tools.firebaseapp.com',
  databaseURL: 'https://ae-hs-tools.firebaseio.com',
  projectId: 'ae-hs-tools',
  storageBucket: 'ae-hs-tools.appspot.com',
  messagingSenderId: '308306472112',
  appId: '1:308306472112:web:60bfcd36fca7d9723a9f75',
  measurementId: 'G-XQBHQKPNWK'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const session = {
  isHost: false,
  userId: null,
  gameId: null,
  maxSize: 256,
  leave: function () {
    if (session.gameId && session.isHost) firebase.database().ref('live-projects/' + AE_PROJECT_UUID + '-' + session.gameId).remove()
    else if (session.gameId) {
      firebase.database().ref('live-projects/' + AE_PROJECT_UUID + '-' + session.gameId + '/game/' + session.userJoined).remove()
      firebase.database().ref('live-projects/' + AE_PROJECT_UUID + '-' + session.gameId + '/users/' + session.userJoined).remove()
    }
    session.isHost = false
    session.gameId = null
    if (session.data) session.data = null
    if (session.userJoined) session.userJoined = null
  },
  getUser: function (u, idNotString) {
    u = Number(u)
    try {
      if (u === -2) return ''
      if (u === -1) u = Object.keys(session.data.users).sort().indexOf(session.userJoined)
      return (idNotString) ? u : Object.keys(session.data.users)[u]
    } catch (e) {
      return 'error'
    }
  }
}
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in
    const isAnonymous = user.isAnonymous
    session.userId = user.uid
    // Leave if restart
    document.getElementById('restart-button').addEventListener('click', function () {
      session.leave()
    })
    document.getElementById('restart-button').addEventListener('touchstart', function () {
      session.leave()
    })
  } else {
    // User is signed out
  }
  // ...
})
document.body.onunload = function () {
  session.leave()
  // if (AE_MOD.pendingHostList.length > 0) navigator.sendBeacon('https://<PD_HS_TOOLS_URL>/play-project/approved-urls', JSON.stringify({ urls: AE_MOD.pendingHostList }))
}
document.body.onblur = function () {
  if (!session.data || !session.gameId || !session.data.users) return
  firebase.database().ref('live-projects/' + AE_PROJECT_UUID + '-' + session.gameId + '/game/' + session.getUser(-1) + '/lastInactive').set(new Date().toISOString())
}
document.body.onfocus = function () {
  if (!session.data || !session.gameId || !session.data.users) return
  firebase.database().ref('live-projects/' + AE_PROJECT_UUID + '-' + session.gameId + '/game/' + session.getUser(-1) + '/lastInactive').set(null)
}
setInterval(function () {
  if (!session.data || !session.gameId || !session.data.users) return
  firebase.database().ref('live-projects/' + AE_PROJECT_UUID + '-' + session.gameId + '/game/' + session.getUser(-1) + '/lastPing').set(new Date().toISOString())
}, 60000)

document.body.addEventListener('keydown', function (e) {
  // Play the project using the space bar
  if (e.keyCode === 32 && document.getElementById('play_container')?.style.display === 'block') document.getElementById('play_container').click()
})

document.body.style.backgroundColor = (getPref('dark_mode')) ? 'black' : ''
document.body.style.backgroundColor = (getPref('dark_mode')) ? 'black' : ''

// When Escape is pressed, close the player if it is embedded in the web explorer
document.body.addEventListener('keydown', function (e) {
  if (e.keyCode === 27 && window.frameElement && !window.fullScreen && !(top.innerWidth === screen.width && top.innerHeight === screen.height) && self !== top && top.document.getElementById('close-player-btn')) {
    top.document.getElementById('close-player-btn').click()
  }
})
// Focus a draggable window if in iframe
function focusDragFrame () {
  if (self !== top && top.document.querySelector('.textbox-float iframe'))top.document.querySelector('.textbox-float iframe').parentNode.click()
}
document.body.addEventListener('touchstart', focusDragFrame)
document.body.addEventListener('mousedown', focusDragFrame)
// Remove User-specified UI once loaded
window.addEventListener('load', function () {
  try {
    if (new URL(location.href).searchParams.get('hide')) elmList = document.querySelectorAll(new URL(location.href).searchParams.get('hide')); else return
    elmList.forEach(elm => {
      elm.style.display = 'none'
    })
  } catch (e) {
    console.error(new Error(), e)
  }
})

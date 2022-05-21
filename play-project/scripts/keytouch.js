(() => {
  const playerContainer = document.getElementById('ae-hs-player')

  const touches = []
  function simulateTouch (type, x, y, elm) {
    const playerElement = document.querySelector('hopscotch-player')
    const event = {}
    event.target = playerElement
    let touch = {}
    if (type === 'touchstart') {
      touch = new Touch({
        identifier: Date.now(),
        clientX: x,
        clientY: y,
        clientWidth: innerWidth,
        clientHeight: innerHeight,
        target: playerElement
      })
      touches.push([touch, elm])
    } else {
      const toRemove = touches.find(t => t[1] === elm)
      if (!toRemove) return
      touches.splice(touches.indexOf(toRemove), 1)
      touch = toRemove[0]
    }
    event.touches = event.changedTouches = touch ? [touch] : []

    event.clientWidth = innerWidth
    event.clientHeight = innerHeight
    playerElement.dispatchEvent(new TouchEvent(type, event))
  }
  function clearTouches () {
    touches.forEach(touch => simulateTouch('touchend', touch[0].x, touch[0].y, touch[1]))
  }

  class KeyTouch {
    constructor () {
      const target = this.target = document.createElement('div')
      target.classList.add('ae-touch-target')
      // Add SVG to Target
      target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" fill="none">' +
        '<circle cx="256" cy="256" r="256" fill="#C4C4C4" fill-opacity="0.4"/>' +
        '<path fill-rule="evenodd" clip-rule="evenodd" d="M263 148H251V250H149V262H251V364H263V262H365V250H263V148ZM263 250H251V262H263V250Z" fill="black" fill-opacity="0.5"/>' +
        '<path d="M251 250V262H263V250H251Z" fill="black" fill-opacity="0.5"/></svg>' +
        '<p class="label"></p>'
      playerContainer.appendChild(target)

      KeyTouch.instances.push(this)

      this.eventCode = null
      this.eventKey = ''
      const keypressHandler = (e) => {
        if (e.code !== this.eventCode) return
        if (e.type === 'keydown' && this.pressed) return
        this.pressed = e.type === 'keydown'
        const { x, y, width, height } = this.target.getBoundingClientRect()
        simulateTouch(e.type === 'keydown' ? 'touchstart' : 'touchend', x + width / 2, y + height / 2, this.target)
        if (e.type === 'keyup' && window.AE_MOD && AE_MOD.keyboardKeys && AE_MOD.keyboardKeys.length === 0) clearTouches()
      }
      document.body.addEventListener('keydown', keypressHandler)
      document.body.addEventListener('keyup', keypressHandler)
      this.keypressHandler = keypressHandler
    }

    static get instances () { return this.constructor.instances }
    static get get () {
      return function (element) {
        return KeyTouch.instances.find(i => i.target.contains(element))
      }
    }

    updateLabel () {
      function replacements (match) {
        const list = {
          ARROWLEFT: '←',
          ARROWRIGHT: '→',
          ARROWUP: '↑',
          ARROWDOWN: '↓',
          CONTROL: 'CTRL',
          META: '⌘',
          ENTER: '⮐',
          SHIFT: '⇪',
          ' ': '␣'
        }
        return list[match] || match
      }
      this.target.querySelector('p.label').innerText = this.eventKey.toUpperCase().replace(/.*/, m0 => replacements(m0))
    }

    destroy () {
      const instances = KeyTouch.instances
      instances.splice(instances.indexOf(this))
      this.target.remove()
      document.body.removeEventListener('keydown', this.keypressHandler)
      document.body.removeEventListener('keyup', this.keypressHandler)
    }
  }
  KeyTouch.constructor.instances = []

  function createTarget () {
    const touchTarget = new KeyTouch()
    touchTarget.target.addEventListener('contextmenu', e => {
      e.preventDefault()
      touchTarget.destroy()
    })
  }

  // Make it so you can drag touch targets
  interact('.ae-touch-target')
    .draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'body',
          endOnly: false
        })
      ],
      listeners: {
        move: dragMoveListener
        // call this function on every dragend event
        // end (event) {
        //   const textEl = event.target.querySelector('p')
        // }
      }
    })
    .on('hold', e => {
      invokePopup(KeyTouch.get(e.target))
    })

  function dragMoveListener (event) {
    const target = event.target
    // keep the dragged position in the data-x/data-y attributes
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
  }

  // Create Keyboard Input Element
  const keyInputPopup = document.createElement('div')
  keyInputPopup.classList.add('ae-keyinput')
  keyInputPopup.innerHTML = '<div class="idle"><h3>Press a Key</h3><p>Click to unbind</p></div><div class="activekey"><span></span></div>'
  playerContainer.appendChild(keyInputPopup)
  let activeInstance = null
  function closePopup (e) {
    keyInputPopup.style.display = 'none'
    if (!activeInstance) return
    activeInstance.eventCode = e.type === 'click' ? null : e.code
    activeInstance.eventKey = e.type === 'click' ? '' : e.key
    activeInstance.updateLabel()
    activeInstance = null
  }
  document.body.addEventListener('keydown', e => {
    document.querySelector('.ae-keyinput .activekey span').innerText = e.code
    document.querySelector('.ae-keyinput .idle').style.display = 'none'
    document.querySelector('.ae-keyinput .activekey').style.display = 'block'
  })
  document.body.addEventListener('keyup', closePopup)
  keyInputPopup.addEventListener('click', closePopup)
  function invokePopup (targetInstance) {
    keyInputPopup.style.display = 'flex'
    document.querySelector('.ae-keyinput .idle').style.display = 'block'
    document.querySelector('.ae-keyinput .activekey').style.display = 'none'
    activeInstance = targetInstance
    keyInputPopup.focus()
  }

  // Insert add button under Project reviews
  const sidebar = document.getElementById('projectInfoContent')
  const btnContainer = document.createElement('div')
  btnContainer.classList.add('sidebar-control')
  btnContainer.innerHTML = '<h4>Touch Emulation</h4>' +
    '<br><button>Add Keyboard Touch Target</button>' +
    '<p>This allows you to use keyboard keys to simulate pressing a certain part of the screen. Drag a target to reposition it, and click and hold to change its keybind</p>'
  sidebar.appendChild(btnContainer)
  btnContainer.querySelector('button').addEventListener('click', createTarget)

  window.createTarget = createTarget
})()
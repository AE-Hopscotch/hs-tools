/* eslint-disable no-unused-vars, no-undef */
const NestedPath = {
  read: function (obj, path) {
    return path.split('.').reduce((dict, key) => dict ? dict[key] : undefined, obj)
  },
  write: function (obj, path, data) {
    return path.split('.').reduce((dict, key, index, keys) => {
      if (dict == null) return undefined
      if (index === keys.length - 1) {
        dict[key] = data
        return data
      }
      if (typeof dict === 'object' && !Array.isArray(dict) && dict[key] === undefined) {
        dict[key] = {}
        return dict[key]
      }
      return dict[key]
    }, obj)
  },
  delete: function (obj, path) {
    return path.split('.').reduce((dict, key, index, keys) => {
      if (index !== keys.length - 1) return dict ? dict[key] : undefined
      if (!dict) return false
      if (Array.isArray(dict)) return dict.splice(dict.indexOf(key), 1)
      return delete dict[key]
    }, obj)
  }
}

const SessionHandler = {
  socket: null,
  endpoint: location.protocol === 'https:' ? 'https://hs-tools-multiplayer.up.railway.app' : 'http://localhost:7701',
  room: {},
  playerId: null,
  joinedRoomId: null,
  connect: function (requestType, roomId) {
    if (typeof io === 'undefined') return 'not loaded yet'
    this.socket = io(this.endpoint, {
      transports: ['websocket'],
      upgrade: false,
      reconnectionAttempts: 5
    })
    this.socket.on('connect', () => {
      // Includes reconnects
      if (this.joinedRoomId) {
        this.socket.emit('rejoin-room', {
          project: AE_MOD?.projectData,
          room_id: this.joinedRoomId,
          player_id: this.playerId
        })
      } else {
        this.playerId = this.socket.id
        this.socket.emit(requestType, {
          project: AE_MOD?.projectData,
          room_id: roomId,
          player_id: this.playerId
        })
      }
    })
    this.socket.io.on('reconnect_failed', (data) => {
      this.socket.disconnect()
      console.error(new Error('Failed to reconnect after 5 attempts'))
    })
    this.socket.on('disconnect', (reason) => {
      console.log(this.socket, reason)
      if (reason.match(/disconnect/)) {
        console.log('purposefully disconnected, should not reconnect')
        this.socket.removeAllListeners()
        this.socket = null
        this.joinedRoomId = null
        this.playerId = null
        this.room = {}
      }
    })
    this.socket.on('data-update', message => {
      switch (message.type) {
        case 'player-join': {
          this.room.users.push(message.data)
          this.room.game_data[message.data] = {}
          break
        }
        case 'player-left': {
          this.removeSessionData(['game_data.' + message.data, 'users.' + message.data])
          break
        }
      }
    })
  },
  createRoom: function () {
    if (this.socket) this.socket.disconnect()
    this.connect('create-room')
    this.socket.on('create-response', msg => {
      if (!msg.success) return
      if (msg.room_id) this.joinedRoomId = msg.room_id
      this.room = msg.data
      console.log(msg)
    })
  },
  joinRoom: function (roomId) {
    if (this.socket) this.socket.disconnect()
    this.connect('join-room', roomId)
    this.socket.on('join-response', msg => {
      if (!msg.success) return
      if (msg.room_id) this.joinedRoomId = msg.room_id
      this.room = msg.data
      console.log(msg)
    })
  },
  disconnect: function () {
    if (!this.socket) return
    this.socket.disconnect()
  },
  removeSessionData: function (data) {
    data.forEach(item => NestedPath.delete(this.room, item))
  }
}

// Add Socket.io Script
document.body.appendChild(document.createElement('script')).src = SessionHandler.endpoint + '/socket.io/socket.io.js'

function multiplayerActionHandler (action, data, caller) {
  const { args } = action
  if (!typeof caller === 'object' || !/^.{1,3}$/.test(Object.getPrototypeOf(caller || {}).constructor.name)) {
    return console.warn('Untrusted Event')
  }
  switch (action.name) {
    case 'socket-create':
      SessionHandler.createRoom()
      break
    case 'socket-join': {
      let code = String(args[0] || '')
      if (!code) code = (prompt('Enter Session ID:') || '').toLowerCase().replace(/[\s\-.#$[\]]/g, '')
      SessionHandler.joinRoom(code)
      break
    }
    case 'socket-read':
      break
    case 'socket-write':
    case 'socket-playerdata':
      break
    case 'socket-leave':
      SessionHandler.disconnect()
      break
  }
}

document.getElementById('restart-button').addEventListener('click', () => SessionHandler.disconnect())
document.getElementById('restart-button').addEventListener('touchstart', () => SessionHandler.disconnect())

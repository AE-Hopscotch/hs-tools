/* eslint-disable no-unused-vars, no-undef */
(() => {
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
    },
    resolve: function (obj, path) {
      const resolvedKeys = []
      path.split('.').reduce((dict, key) => {
        const command = key.match(/^<(\w+):(\w+)(?::(\w+))?:(\d+)>$/)
        if (command) {
          function compare (a, b) {
            if (typeof a === 'object' || typeof b === 'object') {
              a = a ?? {}
              b = b ?? {}
              // Consider as zero because undefined and '' returns zero in webplayer actions
              return (a[command[3]] || 0) < (b[command[3]] || 0) ? -1 : 1
            } else {
              return a < b ? -1 : 1
            }
          }
          // dict is the current item
          switch (command[1]) {
            case 'sort': {
              // <sort:direction:criteria:index>
              if (typeof dict !== 'object') return dict
              const entries = Object.entries(dict)
                .sort((a, b) => compare(a[1], b[1]) * (command[2] === 'desc' ? -1 : 1))
              const item = entries[command[4]]
              resolvedKeys.push(item[0])
              return item[1]
            }
          }
        }
        resolvedKeys.push(key)
        return dict ? dict[key] : undefined
      }, obj)
      return resolvedKeys.join('.')
    },
    room: function (playerId, path) {
      const rootKey = ({
        '-2': 'game_data',
        '-1': 'game_data._users.' + SessionHandler.playerId
      })[playerId] || 'game_data._users.' + SessionHandler.room.users[playerId]
      return NestedPath.resolve(SessionHandler.room, (rootKey + '.' + path).replace(/\.$/, ''))
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
      this.socket.on('id-assignment', (data) => {
        // Includes reconnects
        if (this.joinedRoomId) {
          this.socket.emit('rejoin-room', {
            project: AE_MOD?.projectData,
            room_id: this.joinedRoomId,
            player_id: this.playerId
          })
        } else {
          this.playerId = data.playerId
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
        this.socket.removeAllListeners()
        this.socket = null
        this.joinedRoomId = null
        this.playerId = null
        this.room = {}
      })
      this.socket.on('disconnect', (reason) => {
        if (reason.match(/disconnect/)) {
          // Purposefully Disconnected, should not reconnect
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
            this.room.game_data._users[message.data] = {}
            break
          }
          case 'player-left': {
            this.removeSessionData(['game_data._users.' + message.data, 'users.' + message.data])
            break
          }
          case 'write': {
            console.log('self:', message.userId === this.socket.id, message)
            if (message.userId === this.socket.id) return
            // Write or delete data
            NestedPath[message.data === undefined ? 'delete' : 'write'](SessionHandler.room, message.path, message.data)
            console.log('data:', SessionHandler.room)
            break
          }
        }
      })
      this.socket.on('room-close', data => {
        alert(data.message)
        this.disconnect()
      })
    },
    createRoom: function () {
      if (this.socket) this.socket.disconnect()
      this.connect('create-room')
      this.socket.on('create-response', msg => {
        if (!msg.success) return
        if (msg.room_id) this.joinedRoomId = msg.room_id
        this.room = msg.data
        const code = msg.room_id.replace(/^[\w-]+_/, '')
        copyText(code)
        setTimeout(() => alert('Code copied to clipboard: ' + code), 50)
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
  const socketioScript = document.createElement('script')
  socketioScript.addEventListener('load', () => {
    SessionHandler.disconnect()
  })
  socketioScript.src = SessionHandler.endpoint + '/socket.io/socket.io.js'
  document.body.appendChild(socketioScript)
  // If supported, call disconnect when unloading page
  window.addEventListener('beforeunload', () => {
    SessionHandler.disconnect()
  })

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
      case 'socket-leave': {
        SessionHandler.disconnect()
        break
      }
      case 'socket-read': {
        // <0> Player ID, <1> Path
        if (!SessionHandler.socket) return
        const rootPath = NestedPath.room(args[0], args[1])
        return NestedPath.read(SessionHandler.room, rootPath)
      }
      case 'socket-write': {
        // <0> Player ID, <1> Path, <2> New Value
        if (!SessionHandler.socket) return
        const rootPath = NestedPath.room(args[0], args[1])
        NestedPath.write(SessionHandler.room, rootPath, args[2])
        console.log(rootPath)
        SessionHandler.socket.emit('data-update', {
          type: args[2] === undefined ? 'delete' : 'set',
          path: rootPath,
          content: args[2],
          roomId: SessionHandler.joinedRoomId
        })
        break
      }
      case 'socket-playerdata': {
        if (!SessionHandler.socket) return
        // <0> Command
        switch (args[0]) {
          case 'read-array':
            // <1> Path
            return NestedPath.read(SessionHandler.room, NestedPath.resolve(SessionHandler.room, ('users.' + args[1]).replace(/\.$/, '')))
          case 'get-index':
            // <1> User ID, defaults to self
            return SessionHandler.room.users.indexOf(args[1] || SessionHandler.playerId)
        }
        break
      }
      case 'socket-room': {
        if (!SessionHandler.socket) return
        // <0> Command
        switch (args[0]) {
          case 'id':
            return SessionHandler.joinedRoomId.replace(/^[\w-]+_/, '') || 0
          case 'lock':
            NestedPath.write(SessionHandler.room, 'can_join', false)
            SessionHandler.socket.emit('data-update', { type: 'set', path: 'can_join', content: false, roomId: SessionHandler.joinedRoomId })
            break
          case 'unlock':
            NestedPath.write(SessionHandler.room, 'can_join', true)
            SessionHandler.socket.emit('data-update', { type: 'set', path: 'can_join', content: true, roomId: SessionHandler.joinedRoomId })
            break
          case 'is-locked':
            return Number(!NestedPath.read(SessionHandler.room, 'can_join'))
          case 'set-limit': {
            // <1> Player Limit
            const limit = Math.min(Math.max(Number(args[1]) || 1, 1), 64)
            NestedPath.write(SessionHandler.room, 'player_limit', limit)
            SessionHandler.socket.emit('data-update', { type: 'set', path: 'player_limit', content: limit, roomId: SessionHandler.joinedRoomId })
            break
          }
          case 'read-limit':
            return NestedPath.read(SessionHandler.room, 'player_limit')
        }
      }
    }
  }

  document.getElementById('restart-button').addEventListener('click', () => SessionHandler.disconnect())
  document.getElementById('restart-button').addEventListener('touchstart', () => SessionHandler.disconnect())

  AE_MOD.multiplayerActionHandler = multiplayerActionHandler
})()

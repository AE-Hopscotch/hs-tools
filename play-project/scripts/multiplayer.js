/* eslint-disable no-unused-vars, no-undef */
(() => {
  function getArrays (project) {
    // Returns just keys with arrays, like abilities and objects, but not number_of_stars
    const entries = Object.entries(project)
    const filtered = entries.filter(e => Array.isArray(e[1]))
    return Object.fromEntries(filtered)
  }

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
              // <sort:direction:criteria?:index>
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
        const projectHash = SHA1(JSON.stringify(getArrays(AE_MOD?.projectData || {})))
        // Includes reconnects
        if (this.joinedRoomId) {
          this.socket.emit('rejoin-room', {
            project: projectHash,
            uuid: AE_MOD.uuid,
            room_id: this.joinedRoomId,
            player_id: this.playerId
          })
        } else {
          this.playerId = data.playerId
          this.socket.emit(requestType, {
            project: projectHash,
            uuid: AE_MOD.uuid,
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
        if (!msg.success) return alert(msg.message)
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
        if (!msg.success) return alert(msg.message)
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
        // [0] Join Code
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

  // Generate Project Hashes
  // eslint-disable-next-line
  function _0x153b(){const _0x5e2fa7=['fromCharCode','5NxkEzl','3QbhBSI','toLowerCase','8671059royWxR','4155366SDpTsf','6496722OVfIfw','2246312wCGTud','11SFHqbB','toString','push','1928860wOUtZo','8jaENUT','replace','7367143uMWWjz','charCodeAt','length','126870cVqbKh'];_0x153b=function(){return _0x5e2fa7;};return _0x153b();}function _0x1eb9(_0x564373,_0xd52de1){const _0x153b1c=_0x153b();return _0x1eb9=function(_0x1eb987,_0x5c7b82){_0x1eb987=_0x1eb987-0x96;let _0x34247c=_0x153b1c[_0x1eb987];return _0x34247c;},_0x1eb9(_0x564373,_0xd52de1);}(function(_0x207322,_0x598c7b){const _0x4ad9ed=_0x1eb9,_0x1d51e3=_0x207322();while(!![]){try{const _0x3c03b9=-parseInt(_0x4ad9ed(0x9e))/0x1*(-parseInt(_0x4ad9ed(0x9b))/0x2)+parseInt(_0x4ad9ed(0xa1))/0x3+-parseInt(_0x4ad9ed(0xa3))/0x4*(-parseInt(_0x4ad9ed(0x9d))/0x5)+-parseInt(_0x4ad9ed(0xa2))/0x6+parseInt(_0x4ad9ed(0x98))/0x7+parseInt(_0x4ad9ed(0x96))/0x8*(-parseInt(_0x4ad9ed(0xa0))/0x9)+-parseInt(_0x4ad9ed(0xa7))/0xa*(parseInt(_0x4ad9ed(0xa4))/0xb);if(_0x3c03b9===_0x598c7b)break;else _0x1d51e3['push'](_0x1d51e3['shift']());}catch(_0x4ebb22){_0x1d51e3['push'](_0x1d51e3['shift']());}}}(_0x153b,0xe803a));function SHA1(_0x1cb2d7){const _0x16d790=_0x1eb9;function _0x3dc589(_0x3a74c7,_0x12596d){const _0x142279=_0x3a74c7<<_0x12596d|_0x3a74c7>>>0x20-_0x12596d;return _0x142279;}function _0x165c3d(_0x3bdc6b){const _0x584bca=_0x1eb9;let _0x15c204='',_0x21e16d,_0x291dc7;for(_0x21e16d=0x7;_0x21e16d>=0x0;_0x21e16d--){_0x291dc7=_0x3bdc6b>>>_0x21e16d*0x4&0xf,_0x15c204+=_0x291dc7[_0x584bca(0xa5)](0x10);}return _0x15c204;};function _0x114e6b(_0x160480){const _0x2ef3eb=_0x1eb9;_0x160480=_0x160480[_0x2ef3eb(0x97)](/\r\n/g,'\x0a');let _0x8274b1='';for(let _0x11904d=0x0;_0x11904d<_0x160480[_0x2ef3eb(0x9a)];_0x11904d++){const _0x3615e3=_0x160480['charCodeAt'](_0x11904d);if(_0x3615e3<0x80)_0x8274b1+=String[_0x2ef3eb(0x9c)](_0x3615e3);else _0x3615e3>0x7f&&_0x3615e3<0x800?(_0x8274b1+=String[_0x2ef3eb(0x9c)](_0x3615e3>>0x6|0xc0),_0x8274b1+=String[_0x2ef3eb(0x9c)](_0x3615e3&0x3f|0x80)):(_0x8274b1+=String[_0x2ef3eb(0x9c)](_0x3615e3>>0xc|0xe0),_0x8274b1+=String[_0x2ef3eb(0x9c)](_0x3615e3>>0x6&0x3f|0x80),_0x8274b1+=String['fromCharCode'](_0x3615e3&0x3f|0x80));}return _0x8274b1;};let _0x502eaa,_0x59b4bc,_0x566455;const _0x44206b=new Array(0x50);let _0x5aa70d=0x67452301,_0x2862b=0xefcdab89,_0x2b760b=0x98badcfe,_0x1a7d94=0x10325476,_0x4a42fd=0xc3d2e1f0,_0xc5322e,_0x2f0fa0,_0x3c46f5,_0xd67bbe,_0x6f4e90,_0x4b7296;_0x1cb2d7=_0x114e6b(_0x1cb2d7);const _0x5521bf=_0x1cb2d7['length'],_0x3f46c0=[];for(_0x59b4bc=0x0;_0x59b4bc<_0x5521bf-0x3;_0x59b4bc+=0x4){_0x566455=_0x1cb2d7[_0x16d790(0x99)](_0x59b4bc)<<0x18|_0x1cb2d7[_0x16d790(0x99)](_0x59b4bc+0x1)<<0x10|_0x1cb2d7['charCodeAt'](_0x59b4bc+0x2)<<0x8|_0x1cb2d7[_0x16d790(0x99)](_0x59b4bc+0x3),_0x3f46c0[_0x16d790(0xa6)](_0x566455);}switch(_0x5521bf%0x4){case 0x0:_0x59b4bc=0x80000000;break;case 0x1:_0x59b4bc=_0x1cb2d7[_0x16d790(0x99)](_0x5521bf-0x1)<<0x18|0x800000;break;case 0x2:_0x59b4bc=_0x1cb2d7[_0x16d790(0x99)](_0x5521bf-0x2)<<0x18|_0x1cb2d7[_0x16d790(0x99)](_0x5521bf-0x1)<<0x10|0x8000;break;case 0x3:_0x59b4bc=_0x1cb2d7[_0x16d790(0x99)](_0x5521bf-0x3)<<0x18|_0x1cb2d7[_0x16d790(0x99)](_0x5521bf-0x2)<<0x10|_0x1cb2d7[_0x16d790(0x99)](_0x5521bf-0x1)<<0x8|0x80;break;}_0x3f46c0['push'](_0x59b4bc);while(_0x3f46c0[_0x16d790(0x9a)]%0x10!==0xe)_0x3f46c0[_0x16d790(0xa6)](0x0);_0x3f46c0['push'](_0x5521bf>>>0x1d),_0x3f46c0['push'](_0x5521bf<<0x3&0xffffffff);for(_0x502eaa=0x0;_0x502eaa<_0x3f46c0[_0x16d790(0x9a)];_0x502eaa+=0x10){for(_0x59b4bc=0x0;_0x59b4bc<0x10;_0x59b4bc++)_0x44206b[_0x59b4bc]=_0x3f46c0[_0x502eaa+_0x59b4bc];for(_0x59b4bc=0x10;_0x59b4bc<=0x4f;_0x59b4bc++)_0x44206b[_0x59b4bc]=_0x3dc589(_0x44206b[_0x59b4bc-0x3]^_0x44206b[_0x59b4bc-0x8]^_0x44206b[_0x59b4bc-0xe]^_0x44206b[_0x59b4bc-0x10],0x1);_0xc5322e=_0x5aa70d,_0x2f0fa0=_0x2862b,_0x3c46f5=_0x2b760b,_0xd67bbe=_0x1a7d94,_0x6f4e90=_0x4a42fd;for(_0x59b4bc=0x0;_0x59b4bc<=0x13;_0x59b4bc++){_0x4b7296=_0x3dc589(_0xc5322e,0x5)+(_0x2f0fa0&_0x3c46f5|~_0x2f0fa0&_0xd67bbe)+_0x6f4e90+_0x44206b[_0x59b4bc]+0x5a827999&0xffffffff,_0x6f4e90=_0xd67bbe,_0xd67bbe=_0x3c46f5,_0x3c46f5=_0x3dc589(_0x2f0fa0,0x1e),_0x2f0fa0=_0xc5322e,_0xc5322e=_0x4b7296;}for(_0x59b4bc=0x14;_0x59b4bc<=0x27;_0x59b4bc++){_0x4b7296=_0x3dc589(_0xc5322e,0x5)+(_0x2f0fa0^_0x3c46f5^_0xd67bbe)+_0x6f4e90+_0x44206b[_0x59b4bc]+0x6ed9eba1&0xffffffff,_0x6f4e90=_0xd67bbe,_0xd67bbe=_0x3c46f5,_0x3c46f5=_0x3dc589(_0x2f0fa0,0x1e),_0x2f0fa0=_0xc5322e,_0xc5322e=_0x4b7296;}for(_0x59b4bc=0x28;_0x59b4bc<=0x3b;_0x59b4bc++){_0x4b7296=_0x3dc589(_0xc5322e,0x5)+(_0x2f0fa0&_0x3c46f5|_0x2f0fa0&_0xd67bbe|_0x3c46f5&_0xd67bbe)+_0x6f4e90+_0x44206b[_0x59b4bc]+0x8f1bbcdc&0xffffffff,_0x6f4e90=_0xd67bbe,_0xd67bbe=_0x3c46f5,_0x3c46f5=_0x3dc589(_0x2f0fa0,0x1e),_0x2f0fa0=_0xc5322e,_0xc5322e=_0x4b7296;}for(_0x59b4bc=0x3c;_0x59b4bc<=0x4f;_0x59b4bc++){_0x4b7296=_0x3dc589(_0xc5322e,0x5)+(_0x2f0fa0^_0x3c46f5^_0xd67bbe)+_0x6f4e90+_0x44206b[_0x59b4bc]+0xca62c1d6&0xffffffff,_0x6f4e90=_0xd67bbe,_0xd67bbe=_0x3c46f5,_0x3c46f5=_0x3dc589(_0x2f0fa0,0x1e),_0x2f0fa0=_0xc5322e,_0xc5322e=_0x4b7296;}_0x5aa70d=_0x5aa70d+_0xc5322e&0xffffffff,_0x2862b=_0x2862b+_0x2f0fa0&0xffffffff,_0x2b760b=_0x2b760b+_0x3c46f5&0xffffffff,_0x1a7d94=_0x1a7d94+_0xd67bbe&0xffffffff,_0x4a42fd=_0x4a42fd+_0x6f4e90&0xffffffff;}return _0x4b7296=_0x165c3d(_0x5aa70d)+_0x165c3d(_0x2862b)+_0x165c3d(_0x2b760b)+_0x165c3d(_0x1a7d94)+_0x165c3d(_0x4a42fd),_0x4b7296[_0x16d790(0x9f)]();}

  document.getElementById('restart-button').addEventListener('click', () => SessionHandler.disconnect())
  document.getElementById('restart-button').addEventListener('touchstart', () => SessionHandler.disconnect())

  AE_MOD.multiplayerActionHandler = multiplayerActionHandler
})()

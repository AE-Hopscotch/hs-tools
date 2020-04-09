console.log("Webplayer v1.3.4 - 2019/12/09 (production)");

!function(e) {
    var t = {};
    function u(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, u), i.l = !0, i.exports;
    }
    u.m = e, u.c = t, u.d = function(e, t, r) {
        u.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        });
    }, u.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, u.t = function(e, t) {
        if (1 & t && (e = u(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (u.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) u.d(r, i, function(t) {
            return e[t];
        }.bind(null, i));
        return r;
    }, u.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return u.d(t, "a", t), t;
    }, u.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, u.p = "", u(u.s = 41);
}([ function(e, t, u) {
    "use strict";
    var r, i;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), function(e) {
        e[e.WaitTilTimestamp = 19] = "WaitTilTimestamp", e[e.None = 22] = "None", e[e.Move = 23] = "Move", 
        e[e.Rotate = 24] = "Rotate", e[e.ChangeX = 27] = "ChangeX", e[e.ChangeY = 28] = "ChangeY", 
        e[e.Scale = 29] = "Scale", e[e.Clear = 30] = "Clear", e[e.StrokeWidth = 31] = "StrokeWidth", 
        e[e.StrokeColor = 32] = "StrokeColor", e[e.ChangeCostume = 33] = "ChangeCostume", 
        e[e.ChangeSpeed = 34] = "ChangeSpeed", e[e.Wait = 35] = "Wait", e[e.SetOpacity = 36] = "SetOpacity", 
        e[e.PenDown = 37] = "PenDown", e[e.PenUp = 38] = "PenUp", e[e.SetHeading = 39] = "SetHeading", 
        e[e.SetText = 40] = "SetText", e[e.SetPosition = 41] = "SetPosition", e[e.SendToBack = 42] = "SendToBack", 
        e[e.BringToFront = 43] = "BringToFront", e[e.ChangeVariable = 44] = "ChangeVariable", 
        e[e.SetVariable = 45] = "SetVariable", e[e.MoveWithTrail = 46] = "MoveWithTrail", 
        e[e.SetInvisibility = 47] = "SetInvisibility", e[e.Grow = 48] = "Grow", e[e.Shrink = 49] = "Shrink", 
        e[e.Flip = 50] = "Flip", e[e.SetSize = 51] = "SetSize", e[e.PlaySound = 52] = "PlaySound", 
        e[e.MakeAClone = 53] = "MakeAClone", e[e.SetColor = 54] = "SetColor", e[e.Destroy = 55] = "Destroy", 
        e[e.SetImage = 56] = "SetImage", e[e.SetWidthAndHeight = 57] = "SetWidthAndHeight", 
        e[e.SetZIndex = 58] = "SetZIndex", e[e.SetOriginXY = 59] = "SetOriginXY", e[e.SetCenterXY = 60] = "SetCenterXY", 
        e[e.WaitSeconds = 61] = "WaitSeconds", e[e.PlaySoundSeconds = 62] = "PlaySoundSeconds", 
        e[e.LeaveATrail = 26] = "LeaveATrail", e[e.Repeat = 120] = "Repeat", e[e.RepeatForever = 121] = "RepeatForever", 
        e[e.CheckOnceIf = 122] = "CheckOnceIf", e[e.Ability = 123] = "Ability", e[e.CheckIfElse = 124] = "CheckIfElse", 
        e[e.ChangeScene = 125] = "ChangeScene", e[e.Random = 233] = "Random", e[e.XPos = 234] = "XPos", 
        e[e.YPos = 235] = "YPos", e[e.Random110 = 236] = "Random110", e[e.Random1100 = 237] = "Random1100", 
        e[e.Random11000 = 238] = "Random11000", e[e.Variable = 239] = "Variable", e[e.ConditionalOperatorEquals = 1e3] = "ConditionalOperatorEquals", 
        e[e.ConditionalOperatorNotEquals = 1001] = "ConditionalOperatorNotEquals", e[e.ConditionalOperatorLessThan = 1002] = "ConditionalOperatorLessThan", 
        e[e.ConditionalOperatorGreaterThan = 1003] = "ConditionalOperatorGreaterThan", e[e.ConditionalOperatorAnd = 1004] = "ConditionalOperatorAnd", 
        e[e.ConditionalOperatorOr = 1005] = "ConditionalOperatorOr", e[e.ConditionalOperatorGreaterThanOrEqualTo = 1006] = "ConditionalOperatorGreaterThanOrEqualTo", 
        e[e.ConditionalOperatorLessThanOrEqualTo = 1007] = "ConditionalOperatorLessThanOrEqualTo", 
        e[e.HS_END_OF_CONDITIONAL_OPERATORS = 1008] = "HS_END_OF_CONDITIONAL_OPERATORS", 
        e[e.TraitRotation = 2e3] = "TraitRotation", e[e.TraitXPosition = 2001] = "TraitXPosition", 
        e[e.TraitYPosition = 2002] = "TraitYPosition", e[e.TraitInvisibility = 2003] = "TraitInvisibility", 
        e[e.TraitSize = 2004] = "TraitSize", e[e.TraitSpeed = 2005] = "TraitSpeed", e[e.TraitCloneIndex = 2006] = "TraitCloneIndex", 
        e[e.TraitTotalClones = 2007] = "TraitTotalClones", e[e.TraitWidth = 2008] = "TraitWidth", 
        e[e.TraitHeight = 2009] = "TraitHeight", e[e.TraitZIndex = 2010] = "TraitZIndex", 
        e[e.TraitOriginX = 2011] = "TraitOriginX", e[e.TraitOriginY = 2012] = "TraitOriginY", 
        e[e.TraitCenterX = 2013] = "TraitCenterX", e[e.TraitCenterY = 2014] = "TraitCenterY", 
        e[e.HS_END_OF_OBJECT_TRAITS = 2015] = "HS_END_OF_OBJECT_TRAITS", e[e.StageTraitWidth = 3e3] = "StageTraitWidth", 
        e[e.StageTraitHeight = 3001] = "StageTraitHeight", e[e.StageTraitTiltUp = 3002] = "StageTraitTiltUp", 
        e[e.StageTraitTiltDown = 3003] = "StageTraitTiltDown", e[e.StageTraitTiltLeft = 3004] = "StageTraitTiltLeft", 
        e[e.StageTraitTiltRight = 3005] = "StageTraitTiltRight", e[e.StageTraitLastTouchX = 3006] = "StageTraitLastTouchX", 
        e[e.StageTraitLastTouchY = 3007] = "StageTraitLastTouchY", e[e.StageTraitTotalObjects = 3008] = "StageTraitTotalObjects", 
        e[e.HS_END_OF_STAGE_TRAITS = 3009] = "HS_END_OF_STAGE_TRAITS", e[e.MathOperatorAdd = 4e3] = "MathOperatorAdd", 
        e[e.MathOperatorSubtract = 4001] = "MathOperatorSubtract", e[e.MathOperatorMultiply = 4002] = "MathOperatorMultiply", 
        e[e.MathOperatorDivide = 4003] = "MathOperatorDivide", e[e.MathOperatorRandom = 4004] = "MathOperatorRandom", 
        e[e.MathOperatorPower = 4005] = "MathOperatorPower", e[e.MathOperatorSquareRoot = 4006] = "MathOperatorSquareRoot", 
        e[e.MathOperatorSine = 4007] = "MathOperatorSine", e[e.MathOperatorCosine = 4008] = "MathOperatorCosine", 
        e[e.MathOperatorRound = 4009] = "MathOperatorRound", e[e.MathOperatorAbs = 4010] = "MathOperatorAbs", 
        e[e.MathOperatorModulo = 4011] = "MathOperatorModulo", e[e.MathOperatorTangent = 4012] = "MathOperatorTangent", 
        e[e.MathOperatorInverseSine = 4013] = "MathOperatorInverseSine", e[e.MathOperatorInverseCosine = 4014] = "MathOperatorInverseCosine", 
        e[e.MathOperatorInverseTangent = 4015] = "MathOperatorInverseTangent", e[e.MathOperatorMaximum = 4016] = "MathOperatorMaximum", 
        e[e.MathOperatorMinimum = 4017] = "MathOperatorMinimum", e[e.HS_END_OF_MATH_OPERATORS = 4018] = "HS_END_OF_MATH_OPERATORS", 
        e[e.ColorOperatorRandom = 5e3] = "ColorOperatorRandom", e[e.ColorOperatorRGB = 5001] = "ColorOperatorRGB", 
        e[e.ColorOperatorHSB = 5002] = "ColorOperatorHSB", e[e.HS_END_OF_COLOR_OPERATORS = 5003] = "HS_END_OF_COLOR_OPERATORS", 
        e[e.Rule = 6e3] = "Rule", e[e.RulePreview = 6001] = "RulePreview", e[e.EventOperatorStart = 7e3] = "EventOperatorStart", 
        e[e.EventOperatorTap = 7001] = "EventOperatorTap", e[e.EventOperatorIsTouching = 7002] = "EventOperatorIsTouching", 
        e[e.EventOperatorHold = 7003] = "EventOperatorHold", e[e.EventOperatorTiltRight = 7004] = "EventOperatorTiltRight", 
        e[e.EventOperatorTiltLeft = 7005] = "EventOperatorTiltLeft", e[e.EventOperatorTiltUp = 7006] = "EventOperatorTiltUp", 
        e[e.EventOperatorTiltDown = 7007] = "EventOperatorTiltDown", e[e.EventOperatorLoudNoise = 7008] = "EventOperatorLoudNoise", 
        e[e.EventOperatorShake = 7009] = "EventOperatorShake", e[e.EventOperatorBump = 7010] = "EventOperatorBump", 
        e[e.EventOperatorSwipeRight = 7011] = "EventOperatorSwipeRight", e[e.EventOperatorSwipeLeft = 7012] = "EventOperatorSwipeLeft", 
        e[e.EventOperatorSwipeUp = 7013] = "EventOperatorSwipeUp", e[e.EventOperatorSwipeDown = 7014] = "EventOperatorSwipeDown", 
        e[e.EventOperatorEnterTheWorld = 7015] = "EventOperatorEnterTheWorld", e[e.EventOperatorTiltRightEditor = 7016] = "EventOperatorTiltRightEditor", 
        e[e.EventOperatorTiltLeftEditor = 7017] = "EventOperatorTiltLeftEditor", e[e.EventOperatorTiltUpEditor = 7018] = "EventOperatorTiltUpEditor", 
        e[e.EventOperatorTiltDownEditor = 7019] = "EventOperatorTiltDownEditor", e[e.EventOperatorNotPressed = 7020] = "EventOperatorNotPressed", 
        e[e.EventOperatorGamePlaying = 7021] = "EventOperatorGamePlaying", e[e.EventOperatorTouchEnds = 7022] = "EventOperatorTouchEnds", 
        e[e.HS_END_OF_EVENT_OPERATORS = 7023] = "HS_END_OF_EVENT_OPERATORS", e[e.Object = 8e3] = "Object", 
        e[e.AnyObject = 8001] = "AnyObject", e[e.ScreenEdge = 8002] = "ScreenEdge", e[e.Device = 8003] = "Device", 
        e[e.Self = 8004] = "Self", e[e.OriginalObject = 8005] = "OriginalObject", e[e.HS_END_OF_EVENT_PARAMETER_BLOCKS = 8006] = "HS_END_OF_EVENT_PARAMETER_BLOCKS";
    }(r = t.HSBlockType || (t.HSBlockType = {})), function(e) {
        e[e.HSEventOnStart = 1239] = "HSEventOnStart", e[e.HSEventTouchedObject = 1240] = "HSEventTouchedObject", 
        e[e.HSEventTapStage = 1241] = "HSEventTapStage", e[e.HSEventShake = 1242] = "HSEventShake", 
        e[e.HSEventTiltRight = 1243] = "HSEventTiltRight", e[e.HSEventTiltLeft = 1244] = "HSEventTiltLeft", 
        e[e.HSEventTiltDown = 1245] = "HSEventTiltDown", e[e.HSEventTiltUp = 1246] = "HSEventTiltUp", 
        e[e.HSEventLoudNoise = 1247] = "HSEventLoudNoise", e[e.HSEventCollision = 1248] = "HSEventCollision", 
        e[e.HSEventHeldObject = 1249] = "HSEventHeldObject", e[e.HSEventEnteredWorld = 1250] = "HSEventEnteredWorld";
    }(i = t.HSEventType || (t.HSEventType = {})), t.blockTypeForLegacyEventType = function(e) {
        switch (e) {
          case i.HSEventOnStart:
            return r.EventOperatorStart;

          case i.HSEventShake:
            return r.EventOperatorShake;

          case i.HSEventTiltUp:
            return r.EventOperatorTiltUp;

          case i.HSEventTiltDown:
            return r.EventOperatorTiltDown;

          case i.HSEventTiltRight:
            return r.EventOperatorTiltRight;

          case i.HSEventTiltLeft:
            return r.EventOperatorTiltLeft;

          case i.HSEventTapStage:
          case i.HSEventTouchedObject:
            return r.EventOperatorTap;

          case i.HSEventLoudNoise:
            return r.EventOperatorLoudNoise;

          case i.HSEventCollision:
            return r.EventOperatorIsTouching;

          case i.HSEventHeldObject:
            return r.EventOperatorHold;

          case i.HSEventEnteredWorld:
            return r.EventOperatorEnterTheWorld;
        }
        return r.EventOperatorStart;
    }, window.HSBlockType = r, window.HSEventType = i;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.emoji = window.emoji, t.emoji.basePath = "https://d2j12ek52gvmx9.cloudfront.net/emojis/" /*AE_MOD - fix emojis "/assets"*/, t.iOS = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent), 
    t.iOSApp = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
    var r = function() {
        function e() {}
        return e.forceIOSApp = function(e) {
            t.iOSApp = e;
        }, e.sendToApp = function() {
            for (var t = [], u = 0; u < arguments.length; u++) t[u] = arguments[u];
            e.instance.sendToApp.apply(e.instance, t);
        }, e.prototype.sendToApp = function(e, t, u) {
            var r;
            void 0 === u && (u = "hopscotch");
            var i = window.webkit;
            i && i.messageHandlers && i.messageHandlers[u].postMessage(((r = {})[e] = t, r));
        }, e.instance = new e(), e;
    }();
    function i(e) {
        return null != e && "" !== e && (/[\uD800-\uDBFF\uDC00-\uDFFF]/.test(e) || RegExp("" + t.emoji.regex.source).test(e));
    }
    function n(e) {
        return null != e && "" !== e && RegExp("^(" + t.emoji.regex.source + ")+$").test(e);
    }
    t.HSApp = r, t.hasEmoji = i, t.onlyEmoji = n;
    var o = 0;
    function f(e, u) {
        if (void 0 === u && (u = JSON.stringify(e)), !t.appRequestCache.get(u)) {
            var r = o++;
            t.appRequestCache.set(u, new Promise(function(u) {
                t.appRequestCallbacks[r] = u, window.webkit.messageHandlers.renderer.postMessage(Object.assign({}, e, {
                    replyTo: "appRequestCallbacks[" + r + "]"
                }));
            }).then(function(e) {
                return delete t.appRequestCallbacks[r], e;
            }));
        }
        return t.appRequestCache.get(u);
    }
    function c() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        console.log.apply(console, arguments), r.sendToApp("log", Array.prototype.join.call(arguments, " "));
    }
    function a(e, t, u) {
        var r = Math.max(t, e);
        return Math.min(r, u);
    }
    function s(e) {
        return e.reduce(function(e, t) {
            return e + t;
        }, 0) / e.length;
    }
    function d(e) {
        var t = s(e);
        return e.reduce(function(e, u) {
            return e + Math.pow(u - t, 2);
        }, 0) / e.length;
    }
    function h(e, t) {
        for (var u = e.length - 1; u >= 0; u--) if (t(e[u], u, e)) return e[u];
    }
    t.appRequestCallbacks = {}, t.appRequestCache = new Map(), t.requestTextureFromApp = f, 
    t.log = c, t.clamp = a, t.mean = s, t.variance = d, t.findLast = h;
    var l, p, S, g = [], y = 0;
    function b() {
        y = performance.now();
    }
    function v() {
        var e = performance.now();
        if (g.length >= 100) {
            for (var t = 0, u = 0; u < g.length; u++) t += g[u];
            var r = document.getElementById("time").innerText;
            r.length > 130 && (r = r.substring(50, 130));
            var i = Math.round(t / g.length * 1e3) / 1e3;
            document.getElementById("time").innerText = r + " " + i + "ms", g = [];
        }
        var n = e - y;
        g.push(n);
    }
    function T(e, t) {
        return Math.abs(e) >= Math.abs(t) ? l.horizontal : l.vertical;
    }
    function m(e, t) {
        return Math.abs(e) < t ? p.none : e > 0 ? p.positive : p.negative;
    }
    function E(e, t, u) {
        var r, i = T(e, t);
        switch (i) {
          case l.horizontal:
            r = m(e, u);
            break;

          case l.vertical:
            r = m(t, u);
        }
        return O(r, i);
    }
    function O(e, t) {
        return e === p.positive && t === l.horizontal ? S.right : e === p.positive && t === l.vertical ? S.up : e === p.negative && t === l.horizontal ? S.left : e === p.negative && t === l.vertical ? S.down : null;
    }
    function H() {}
    function w(e) {
        var t = new Image();
        return e.startsWith("data:") || (t.crossOrigin = "Anonymous"), new Promise(function(u, r) {
            t.onload = function() {
                return u(t);
            }, t.onerror = r, t.src = e;
        });
    }
    function _(e) {
        return e * Math.PI / 180;
    }
    function C(e) {
        return e / Math.PI * 180;
    }
    t.benchmarkStart = b, t.benchmarkEnd = v, function(e) {
        e[e.horizontal = 0] = "horizontal", e[e.vertical = 1] = "vertical";
    }(l = t.HSPlane || (t.HSPlane = {})), function(e) {
        e[e.positive = 0] = "positive", e[e.negative = 1] = "negative", e[e.none = 2] = "none";
    }(p = t.HSMagnitude || (t.HSMagnitude = {})), function(e) {
        e[e.up = 0] = "up", e[e.down = 1] = "down", e[e.left = 2] = "left", e[e.right = 3] = "right";
    }(S = t.HSDirection || (t.HSDirection = {})), t.hs_plane = T, t.hs_magnitude = m, 
    t.hs_direction = E, t.hs_directionForMagnitudeAndPlane = O, t.exitFullscreen = H, 
    t.getImageFromUri = w, t.degreesToRadians = _, t.radiansToDegrees = C, Array.prototype.remove = function(e) {
        var t = this.indexOf(e);
        void 0 !== t && this.splice(t, 1);
    }, window.HSPlane = l, window.HSMagnitude = p, window.HSDirection = S, window.hasEmoji = i, 
    window.onlyEmoji = n, window.requestTextureFromApp = f, window.log = c, window.clamp = a, 
    window.mean = s, window.variance = d, window.findLast = h, window.benchmarkStart = b, 
    window.benchmarkEnd = v, window.hs_plane = T, window.hs_magnitude = m, window.hs_direction = E, 
    window.hs_directionForMagnitudeAndPlane = O, window.exitFullscreen = H, window.getImageFromUri = w, 
    window.degreesToRadians = _, window.radiansToDegrees = C, window.HSApp = r, window.appRequestCallbacks = t.appRequestCallbacks;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = u(19), n = u(5), o = u(10), f = u(12), c = u(9), a = u(55), s = u(16), d = u(0);
    t.VERSION_KEY = "version", t.CUSTOM_OBJECTS_KEY = "customObjects", t.SCALE_KEY = "baseObjectScale", 
    t.FONT_SIZE_KEY = "fontSize", t.STAGE_SIZE = "stageSize", function(e) {
        e[e.V13 = 13] = "V13", e[e.V14 = 14] = "V14", e[e.V15 = 15] = "V15", e[e.V16 = 16] = "V16", 
        e[e.V17 = 17] = "V17", e[e.V18 = 18] = "V18", e[e.V19 = 19] = "V19", e[e.V24 = 24] = "V24", 
        e[e.WEBPLAYER_IN_APP = 25] = "WEBPLAYER_IN_APP", e[e.ADD_SELF = 26] = "ADD_SELF", 
        e[e.CUSTOM_WHENS = 28] = "CUSTOM_WHENS";
    }(r = t.HSProjectVersion || (t.HSProjectVersion = {}));
    var h = function() {
        function e() {
            this.projectObjects = {}, this.version = r.CUSTOM_WHENS, this.baseObjectScale = 1, 
            this.fontSize = 80, this._hasAccelerometerEvent = null, this._hasAccelerometerTrait = null;
        }
        return e.prototype.findAllForClassName = function(e) {
            return this.projectObjects[e] ? this.projectObjects[e] : [];
        }, e.prototype.findWithObjectID = function(e, t) {
            return this.findAllForClassName(e).find(function(e) {
                return e.objectID === t;
            });
        }, e.prototype.insertObject = function(e) {
            var t = Object.getPrototypeOf(e).constructor.key;
            this.projectObjects[t] ? this.projectObjects[t].push(e) : this.projectObjects[t] = [ e ];
        }, e.prototype.deleteObject = function(e) {
            var t = Object.getPrototypeOf(e).constructor.key, u = this.projectObjects[t].indexOf(e);
            u > -1 && this.projectObjects[t].splice(u, 1);
        }, e.prototype.parseJSON = function(u) {
            if (void 0 === u && (u = {}), this.version = u[t.VERSION_KEY] || r.V14, this.baseObjectScale = u[t.SCALE_KEY] || 1, 
            this.fontSize = u[t.FONT_SIZE_KEY] || 80, i.HSEmojiTextNode.WIDTH = this.fontSize / 2, 
            i.HSEmojiTextNode.HEIGHT = this.fontSize / 2, i.HSTextNode.LINE_HEIGHT = this.fontSize < 80 ? 49 : 55, 
            this.version >= r.V19) {
                var o = u[t.STAGE_SIZE];
                o && (n.HSStageScene.stageWidth = o.width, n.HSStageScene.stageHeight = o.height, 
                i.HSTextNode.MAX_LINE_WIDTH = Math.min(i.HSTextNode.MAX_LINE_WIDTH, o.width));
            }
            Array.isArray(u[t.CUSTOM_OBJECTS_KEY]) && u[t.CUSTOM_OBJECTS_KEY].forEach(function(t) {
                var u = new a.HSCustomObject(t.fileName, t.size.width, t.size.height);
                e.customObjectMap.set(t.id, u);
            });
        }, e.prototype.allSoundNames = function() {
            for (var e = this.findAllForClassName(f.HSParameter.key), t = [], u = 0; u < e.length; u++) {
                var r = e[u];
				//AE_MOD Load multiple sounds
				if (r.type === HSParameterType.Sound && -1 === t.indexOf(r.value)) {
					var isCustom = (!/^((low-|high)?[a-zA-Z](sharp|flat)?|clickPlayable|alert|car|chaChing|check|clang|crash|dash|doorbell|drip|fail|footsteps|laser|pop|schoolBell|spring|vibrate|trophy|aliens|bubbles|crickets|meow|rain|roar|tweet|wind|woof|ahhh|cheer|eating|heartbeat|laugh|news|talking|bass|chord|clap|gong|snare)$/.test(r.value));
					t.push(((isCustom) ? "custom/":"") + r.value);
					if (!isCustom && !!getPref && !getPref("old_sounds") && /^(low-|high)?[a-gA-G](sharp|flat)?$/.test(r.value)) {
						t.push("new/" + r.value, "guitar/" + r.value);
					}
				}
            }
            return t;
        }, e.prototype.hasAccelerometerEvent = function() {
            if (null != this._hasAccelerometerEvent) return this._hasAccelerometerEvent;
            for (var e = this.findAllForClassName(o.HSRule.key), t = 0; t < e.length; t++) switch (e[t].eventType()) {
              case d.HSBlockType.EventOperatorTiltUp:
              case d.HSBlockType.EventOperatorTiltDown:
              case d.HSBlockType.EventOperatorTiltLeft:
              case d.HSBlockType.EventOperatorTiltRight:
              case d.HSBlockType.EventOperatorShake:
                return this._hasAccelerometerEvent = !0;
            }
            return !1;
        }, e.prototype.hasAccelerometerTrait = function() {
            if (null != this._hasAccelerometerTrait) return this._hasAccelerometerTrait;
            for (var e = this.findAllForClassName(c.HSParameterBlock.key), t = 0; t < e.length; t++) switch (e[t].type) {
              case d.HSBlockType.StageTraitTiltUp:
              case d.HSBlockType.StageTraitTiltDown:
              case d.HSBlockType.StageTraitTiltLeft:
              case d.HSBlockType.StageTraitTiltRight:
                return this._hasAccelerometerEvent = !0;
            }
            return !1;
        }, e.customObjectMap = new Map(), e;
    }();
    t.HSProjectContext = h, window.HSProjectVersion = r, window.HSProjectContext = h, 
    window.VERSION_KEY = t.VERSION_KEY, window.CUSTOM_OBJECTS_KEY = t.CUSTOM_OBJECTS_KEY, 
    window.SCALE_KEY = t.SCALE_KEY, window.FONT_SIZE_KEY = t.FONT_SIZE_KEY, window.STAGE_SIZE = t.STAGE_SIZE;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(6), o = u(2), f = u(1), c = u(22), a = u(23), s = u(7);
    t.OBJECT_ID_KEY = "objectID", t.X_POSITION_KEY = "xPosition", t.Y_POSITION_KEY = "yPosition", 
    t.TEXT_KEY = "text", t.TYPE_KEY = "type", t.IMAGE_ID_KEY = "customObjectID";
    var d = function(e) {
        function u() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rules = [], t.heading = 0, t.customObject = null, t.willChangeCostume = !1, 
            t._stageObjects = [], t.mostRecentCloneCache = new Map(), t;
        }
        return i(u, e), u.prototype.stageObject = function(e) {
            return this._stageObjects.length || this.rebuildStageObject(), e && e.objectID === this.objectID ? e : e && null != e.creationTick ? this.mostRecentCloneBeforeTimestamp(e.creationTick) : this.context.version < o.HSProjectVersion.ADD_SELF ? this.mostRecentClone() : this.originalStageObject();
        }, u.prototype.rebuildStageObject = function() {
            var e = new c.HSStageObject(this.x, this.y, this.text, this.type, this.context.baseObjectScale, this.context.fontSize, this.objectID, this.fileName(), this.willChangeCostume, this.width, this.height);
            this.latestCloneIndex = 1, e.stageRules = this.rules.reduce(function(t, u) {
                return u ? t.concat(u.stageRules(e)) : t;
            }, []), this._stageObjects = [ e ], this.mostRecentCloneCache = new Map();
        }, u.prototype.parseJSON = function(e) {
            void 0 === e && (e = {}), this.x = parseFloat(e[t.X_POSITION_KEY]), this.y = parseFloat(e[t.Y_POSITION_KEY]), 
            this.text = e[t.TEXT_KEY], this.type = e[t.TYPE_KEY], this.width = parseFloat(e.width), 
            this.height = parseFloat(e.height), this.objectID = e[t.OBJECT_ID_KEY], this.customObject = o.HSProjectContext.customObjectMap.get(e[t.IMAGE_ID_KEY]), 
            this.customObject && a.HSImageTextureFactory.instance.prefetchImage(this.customObject);
        }, u.prototype.fileName = function() {
            if (this.customObject) return this.customObject.fileName;
        }, u.prototype.addRule = function(e) {
            this.rules.push(e);
        }, u.prototype.allStageObjects = function() {
            return this._stageObjects;
        }, u.prototype.addStageObject = function(e) {
            this.latestCloneIndex++, this.allStageObjects().push(e), e.cloneIndex = this.latestCloneIndex;
        }, u.prototype.removeStageObject = function(e) {
            this._stageObjects.remove(e);
        }, u.prototype.mostRecentClone = function() {
            var e = this.allStageObjects();
            return e[e.length - 1];
        }, u.prototype.originalStageObject = function() {
            return this.allStageObjects()[0];
        }, u.prototype.mostRecentCloneBeforeTimestamp = function(e) {
            return this.mostRecentCloneCache.has(e) || this.mostRecentCloneCache.set(e, f.findLast(this.allStageObjects(), function(t) {
                return t.creationTick <= e;
            })), this.mostRecentCloneCache.get(e);
        }, u.prototype.canChangeCostume = function() {
            return this.type !== s.HSObjectType.text && (!s.hsIsShapeType(this.type) && this.type <= s.HSObjectType.HS_NUMBER_OF_OBJECTS);
        }, u.key = "HSObject", u;
    }(n.HSManagedObject);
    t.HSObject = d, window.HSObject = d;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(14), i = window.tinycolor, n = function() {
        function e() {}
        return e.textColor = function() {
            return e.rgbTextColor;
        }, e.randomColor = function() {
            var t = e.RGBAColors.length, u = Math.floor(Math.random() * (t - 1));
            return e.RGBAColors[u];
        }, e.rgb = function(e, t, u) {
            return "rgb(" + Math.round(e) + ", " + Math.round(t) + ", " + Math.round(u) + ")";
        }, e.hexColor = function(e) {
            return i(e).toHex();
        }, e.hexToTint = function(t) {
            return void 0 === this._colorMap.get(t) && this._colorMap.set(t, parseInt(e.hexColor(t), 16)), 
            this._colorMap.get(t);
        }, e.hsb = function(t, u, r) {
            return e.convertHSBStringToRGBAString("HSB(" + t + ", " + u + "%, " + r + "%)");
        }, e.rgbStringFromHSBString = function(t) {
            var u = e.hsbRGBAColorMaps[t];
            return u || (u = e.convertHSBStringToRGBAString(t)), u;
        }, e.hsbStringFromRgbString = function(e) {
            var t = i(e).toHsv();
            return "HSB(" + Math.round(t.h) + "," + Math.round(100 * t.s) + "," + Math.round(100 * t.v) + ")";
        }, e.rgbStringFromNumericColor = function(t) {
            var u = parseFloat(t);
            if (!isNaN(u)) {
                var r = Math.abs(Math.round(u) % e.RGBAColors.length);
                return e.RGBAColors[r];
            }
            return null;
        }, e.convertHSBStringToTinyColor = function(e) {
            var t = e.replace("B", "V");
            return i(t);
        }, e.convertHSBStringToRGBAString = function(e) {
            return this.convertHSBStringToTinyColor(e).toRgbString();
        }, e.convertHSBStringToRGB = function(e) {
            var t = this.convertHSBStringToTinyColor(e).toRgb();
            return r.vec4.fromValues(t.r / 255, t.g / 255, t.b / 255, 1);
        }, e.RGBAColors = [ "rgb(100, 48, 112)", "rgb(134, 77, 209)", "rgb(168, 177, 255)", "rgb(215, 163, 227)", "rgb(255, 179, 207)", "rgb(232, 84, 96)", "rgb(214, 24, 100)", "rgb(212, 8, 29)", "rgb(255, 119, 0)", "rgb(250, 204, 0)", "rgb(255, 233, 38)", "rgb(159, 245, 165)", "rgb(134, 196, 63)", "rgb(64, 143, 50)", "rgb(86, 214, 186)", "rgb(140, 219, 255)", "rgb(10, 169, 209)", "rgb(39, 138, 219)", "rgb(29, 60, 117)", "rgb(77, 77, 77)", "rgb(51, 41, 50)", "rgb(122, 67, 29)", "rgb(204, 204, 204)", "rgb(255, 255, 255)", "rgb(250,220,186)", "rgb(225,187,146)", "rgb(192,143,101)", "rgb(156,100,57)", "rgb(89,69,56)" ], 
        e.hsbRGBAColorMaps = {
            "HSB(289,57,44)": "rgb(100, 48, 112)",
            "HSB(266,63,82)": "rgb(134, 77, 209)",
            "HSB(234,34,100)": "rgb(168, 177, 255)",
            "HSB(289,28,89)": "rgb(215, 163, 227)",
            "HSB(338,30,100)": "rgb(255, 179, 207)",
            "HSB(355,64,91)": "rgb(232, 84, 96)",
            "HSB(336,89,84)": "rgb(214, 24, 100)",
            "HSB(354,96,83)": "rgb(212, 8, 29)",
            "HSB(28,100,100)": "rgb(255, 119, 0)",
            "HSB(49,100,98)": "rgb(250, 204, 0)",
            "HSB(54,85,100)": "rgb(255, 233, 38)",
            "HSB(124,35,96)": "rgb(159, 245, 165)",
            "HSB(88,68,77)": "rgb(134, 196, 63)",
            "HSB(111,65,56)": "rgb(64, 143, 50)",
            "HSB(167,60,84)": "rgb(86, 214, 186)",
            "HSB(199,45,100)": "rgb(140, 219, 255)",
            "HSB(192,95,82)": "rgb(10, 169, 209)",
            "HSB(207,82,86)": "rgb(39, 138, 219)",
            "HSB(219,75,46)": "rgb(29, 60, 117)",
            "HSB(0,0,30)": "rgb(77, 77, 77)",
            "HSB(306,20,20)": "rgb(51, 41, 50)",
            "HSB(24,76,48)": "rgb(122, 67, 29)",
            "HSB(0,0,80)": "rgb(204, 204, 204)",
            "HSB(0,0,100)": "rgb(255, 255, 255)",
            "HSB(32,26,98)": "rgb(250,220,186)",
            "HSB(31,35,88)": "rgb(225,187,146)",
            "HSB(28,47,75)": "rgb(192,143,101)",
            "HSB(26,63,61)": "rgb(156,100,57)",
            "HSB(24,37,35)": "rgb(89,69,56)"
        }, e.rgbWhiteColor = "rgb(255, 255, 255)", e.rgbTextColor = "rgb(0,0,0)", e._colorMap = new Map(), 
        e;
    }();
    t.HSColor = n, window.HSColor = n;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(1), o = u(21), f = u(3), c = u(49), a = u(52), s = u(0), d = function(e) {
        function t(u) {
            var r = e.call(this) || this;
            return r.scene = u, r.renderList = new a.HSLinkedList(), r.pointers = [], r.currentlyPressedObjects = [], 
            r.tickCount = 0, r.container = new PIXI.Container(), u.objects.forEach(function(e) {
                e.rebuildStageObject(), r.addStageObject(e.stageObject());
            }), r.lastTouchX = t.stageWidth / 2, r.lastTouchY = t.stageHeight / 2, r.name = u.name, 
            r;
        }
        return i(t, e), t.prototype.addStageObject = function(e) {
            e.bringToFrontFunction = this.bringToFront.bind(this), e.sendToBackFunction = this.sendToBack.bind(this), 
            e.cloneFunction = this.clone.bind(this), e.destroyFunction = this.addToDestroyQueue.bind(this), 
            this.stageObjects.push(e), this.renderList.push(e);
        }, t.prototype.animationTick = function(e) {
            var u = this;
            t.dirtySort && (t.dirtySort = !1, this.sortRenderList()), this.container.removeChildren(), 
            this.renderList.forEach(function(e) {
                e.update(), e.view.sprite && u.container.addChild(e.view.sprite);
            }), this.collisionTest(e), this.activateRules(), this.executeRules(), this.cleanDestroyQueue(), 
            this.tickCount++;
        }, t.prototype.collisionTest = function(e) {
            if (e) {
                e.numberOfPixelCollisions = 0;
                var t = this.allPossibleCollisionPairs();
                t.forEach(function(t) {
                    return t.update(e);
                }), this.currentCollisions = t.filter(function(e) {
                    return e.isTouching();
                }), this.bumpingCollisions = this.currentCollisions.filter(function(e) {
                    return e.isBumping();
                });
            }
        }, t.prototype.activateRules = function() {
            var e = this;
            this.touchIsDown && this.currentlyPressedObjects.forEach(function(t) {
                e.activateAllRulesForEventWithObjects(s.HSBlockType.EventOperatorHold, t);
            }), this.scene.context.hasAccelerometerEvent() && (this.activateTiltRules(), this.activateShakeRules()), 
            this.activateAllNotPressedRules(), this.activateCurrentCollisionRules();
        }, t.prototype.activateAllNotPressedRules = function() {
            var e = this;
            this.allStageRulesForEventType(s.HSBlockType.EventOperatorNotPressed).forEach(function(t) {
                t.activateIfNotPressed(e);
            });
        }, t.prototype.executeRules = function() {
            this.executeAllActiveRules();
        }, t.prototype.receiveClickEvent = function(e, t) {
            this.setTouchPosition(e, t);
            var u = e.point, r = u[0], i = u[1], n = this.stageObjectsToReceiveTouchInRange(r, i, t);
            this.activateAllRulesForEventWithObjects(s.HSBlockType.EventOperatorTap, n), this.activateAllRulesForEventWithObjects(s.HSBlockType.EventOperatorHold, n);
            var o = this.indexOfPointer(e.id);
            this.currentlyPressedObjects[o] = n;
        }, t.prototype.addPointer = function(e) {
            var t = this.indexOfPointer(e.id);
            if (-1 !== t) return this.pointers[t];
            var u = this.getPointerData(e);
            return this.pointers.push(u), u;
        }, t.prototype.receiveTouchDownEvent = function(e, t) {
            this.setTouchPosition(e, t);
        }, t.prototype.receiveTouchMoveEvent = function(e, t) {
            this.touchIsDown && (this.setTouchPosition(e, t), this.calculateSwipeEvents(this.getPointerFrom(e.id), t));
        }, t.prototype.receiveTouchUpEvent = function(e, t) {
            var u = this.indexOfPointer(e.id);
            this.removePointer(e.id), this.currentlyPressedObjects.splice(u, 1), this.activateAllRulesForEventType(s.HSBlockType.EventOperatorTouchEnds);
        }, t.prototype.getPointerData = function(e) {
            var t = e.point, u = t[0], r = t[1];
            return {
                id: e.id,
                downX: u,
                downY: r,
                lastX: u,
                lastY: r
            };
        }, t.prototype.removePointer = function(e) {
            var t = this.indexOfPointer(e);
            -1 !== t && this.pointers.splice(t, 1);
        }, t.prototype.indexOfPointer = function(e) {
            for (var t = 0; t < this.pointers.length; t++) if (this.pointers[t].id === e) return t;
            return -1;
        }, t.prototype.getPointerFrom = function(e) {
            var t = this.indexOfPointer(e);
            return -1 !== t ? this.pointers[t] : null;
        }, t.prototype.calculateSwipeEvents = function(e, t) {
            var u = this.horizontalSwipeForPoint(e), r = this.verticalSwipeForPoint(e), i = this.directionForSwipe(u, r);
            if (i) {
                var n = this.stageObjectsToReceiveTouchInRange(e.downX, e.downY, t);
                this.activateAllRulesForEventWithObjects(i, n), e.downX = null, e.downY = null;
            }
        }, t.prototype.directionForSwipe = function(e, t) {
            switch (n.hs_direction(e, t, 10)) {
              case n.HSDirection.up:
                return s.HSBlockType.EventOperatorSwipeUp;

              case n.HSDirection.down:
                return s.HSBlockType.EventOperatorSwipeDown;

              case n.HSDirection.left:
                return s.HSBlockType.EventOperatorSwipeLeft;

              case n.HSDirection.right:
                return s.HSBlockType.EventOperatorSwipeRight;

              default:
                return null;
            }
        }, t.prototype.horizontalSwipeForPoint = function(e) {
            return e.downX ? e.lastX - e.downX : 0;
        }, t.prototype.verticalSwipeForPoint = function(e) {
            return e.downY ? e.lastY - e.downY : 0;
        }, t.prototype.setTouchPosition = function(e, t) {
            var u = this.getPointerFrom(e.id) || this.addPointer(e), r = e.point, i = r[0], n = r[1];
            return u.lastX = i, u.lastY = n, this.isTheLastPointer(e.id) && (this.lastTouchX = i, 
            this.lastTouchY = n), u;
        }, t.prototype.isTheLastPointer = function(e) {
            return this.indexOfPointer(e) === this.pointers.length - 1;
        }, t.prototype.firstStageObjectWithinRange = function(e, t, u) {
            return this.renderList.findLast(function(r) {
                return u.hitTest(r, e, t);
            });
        }, t.prototype.stageObjectsToReceiveTouchInRange = function(e, t, u) {
            var r = this.firstStageObjectWithinRange(e, t, u);
            return r ? [ r, null ] : [ null ];
        }, t.prototype.bringToFront = function(e) {
            this.renderList.remove(e), this.renderList.push(e);
        }, t.prototype.sendToBack = function(e) {
            this.renderList.remove(e), this.renderList.unshift(e);
        }, t.prototype.sortRenderList = function() {
            this.renderList.setNewOrder(function(e) {
                var t = [];
                return e.forEach(function(e) {
                    var u = e.zIndex || 0;
                    t[u] || (t[u] = []), t[u].push(e);
                }), (t = t.filter(function(e) {
                    return !!e;
                })).forEach(function(e) {
                    e.sort(function(e, t) {
                        return e.createOrder - t.createOrder;
                    });
                }), t.reduce(function(e, t) {
                    return e.concat(t);
                }, []);
            });
        }, t.prototype.break = function() {
            this.stageObjects.forEach(function(e) {
                return e.break();
            });
        }, t.prototype.destroy = function(t) {
            e.prototype.destroy.call(this, t), this.renderList.remove(t), this.scene.context.findWithObjectID(f.HSObject.key, t.objectID).removeStageObject(t);
        }, t.prototype.clone = function(e, u) {
            if (void 0 === u && (u = 1), !(this.stageObjects.length >= t.MAX_CLONES)) {
                u = Math.min(t.MAX_CLONES - this.stageObjects.length, u);
                for (var r = this.scene.context, i = r.findWithObjectID(f.HSObject.key, e.objectID), n = 0; n < u; n++) {
                    var o = e.deepCopy(r.version, i);
                    o.creationTick = this.tickCount, i.addStageObject(o), o.relatedCollisionRules = e.relatedCollisionRules, 
                    this.addStageObject(o), this.cacheRulesForStageObject(o), this.addCollisionPairsForStageObject(o), 
                    o.activateAllStageRulesForEventType(s.HSBlockType.EventOperatorEnterTheWorld);
                }
            }
        }, t.prototype.activateTiltRules = function() {
            var e;
            switch (o.HSAccelerometerManager.tiltDirection()) {
              case n.HSDirection.up:
                e = s.HSBlockType.EventOperatorTiltUp;
                break;

              case n.HSDirection.down:
                e = s.HSBlockType.EventOperatorTiltDown;
                break;

              case n.HSDirection.left:
                e = s.HSBlockType.EventOperatorTiltLeft;
                break;

              case n.HSDirection.right:
                e = s.HSBlockType.EventOperatorTiltRight;
                break;

              default:
                e = s.HSBlockType.None;
            }
            this.activateAllRulesForEventType(e);
        }, t.prototype.activateShakeRules = function() {
            o.HSAccelerometerManager.isShaking() && this.activateAllRulesForEventType(s.HSBlockType.EventOperatorShake);
        }, Object.defineProperty(t.prototype, "touchIsDown", {
            get: function() {
                return 0 !== this.pointers.length;
            },
            enumerable: !0,
            configurable: !0
        }), t.dirtySort = !1, t.stageHeight = 768, t.stageWidth = 1024, t.MAX_CLONES = 4096, 
        t;
    }(c.HSRuleActivator);
    t.HSStageScene = d, window.HSStageScene = d;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e) {
            this.context = e, this.description = this.constructor.name, e.insertObject(this);
        }
        return e.key = "HSManagedObject", e;
    }();
    t.HSManagedObject = r, window.HSManagedObject = r;
}, function(e, t, u) {
    "use strict";
    var r;
    function i(e) {
        return e >= r.roundedSquareFullSize && e < r.HS_END_OF_FULL_SIZE_SHAPES;
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), function(e) {
        e[e.monkey = 0] = "monkey", e[e.text = 1] = "text", e[e.octopus = 2] = "octopus", 
        e[e.gorilla = 3] = "gorilla", e[e.cupcake = 4] = "cupcake", e[e.bear = 5] = "bear", 
        e[e.dino = 6] = "dino", e[e.frog = 7] = "frog", e[e.greenman = 8] = "greenman", 
        e[e.mustache = 9] = "mustache", e[e.spacepod = 10] = "spacepod", e[e.zombieBear = 11] = "zombieBear", 
        e[e.ghoulopus = 12] = "ghoulopus", e[e.bats = 13] = "bats", e[e.frankenrilla = 14] = "frankenrilla", 
        e[e.jodyWitch = 15] = "jodyWitch", e[e.cauldron = 16] = "cauldron", e[e.pumpkin = 17] = "pumpkin", 
        e[e.broom = 18] = "broom", e[e.lantern = 19] = "lantern", e[e.parrotFlying = 20] = "parrotFlying", 
        e[e.mandrill = 21] = "mandrill", e[e.mosquito = 22] = "mosquito", e[e.missChief = 23] = "missChief", 
        e[e.venus = 24] = "venus", e[e.jeepers = 25] = "jeepers", e[e.banyan = 26] = "banyan", 
        e[e.stargirl = 27] = "stargirl", e[e.astro = 28] = "astro", e[e.chillanna = 29] = "chillanna", 
        e[e.robo = 30] = "robo", e[e.raccoon = 31] = "raccoon", e[e.bird = 32] = "bird", 
        e[e.HS_END_OF_CHARACTERS = 33] = "HS_END_OF_CHARACTERS", e[e.square = 34] = "square", 
        e[e.circle = 35] = "circle", e[e.hexagon = 36] = "hexagon", e[e.triangle = 37] = "triangle", 
        e[e.rightTriangle = 38] = "rightTriangle", e[e.rectangle = 39] = "rectangle", e[e.heart = 40] = "heart", 
        e[e.star = 41] = "star", e[e.arch = 42] = "arch", e[e.parallelogram = 43] = "parallelogram", 
        e[e.squiggle = 44] = "squiggle", e[e.donut = 45] = "donut", e[e.tetrisZ = 46] = "tetrisZ", 
        e[e.tetrisT = 47] = "tetrisT", e[e.tetrisL = 48] = "tetrisL", e[e.corner = 49] = "corner", 
        e[e.flower = 50] = "flower", e[e.threeProngedBoomerang = 51] = "threeProngedBoomerang", 
        e[e.squishedBox = 52] = "squishedBox", e[e.bead = 53] = "bead", e[e.chevron = 54] = "chevron", 
        e[e.xShape = 55] = "xShape", e[e.tetrisLine = 56] = "tetrisLine", e[e.HS_END_OF_SHAPES = 57] = "HS_END_OF_SHAPES", 
        e[e.toucan = 58] = "toucan", e[e.anteater = 59] = "anteater", e[e.crocodile = 60] = "crocodile", 
        e[e.sloth = 61] = "sloth", e[e.iguana = 62] = "iguana", e[e.hut = 63] = "hut", e[e.penguin = 64] = "penguin", 
        e[e.winterQueen = 65] = "winterQueen", e[e.shyYeti = 66] = "shyYeti", e[e.deer = 67] = "deer", 
        e[e.elf = 68] = "elf", e[e.snowGlobe = 69] = "snowGlobe", e[e.polarbear = 70] = "polarbear", 
        e[e.sleigh = 71] = "sleigh", e[e.mistletoe = 72] = "mistletoe", e[e.snowMan = 73] = "snowMan", 
        e[e.snowflake = 74] = "snowflake", e[e.roundedSquareFullSize = 100] = "roundedSquareFullSize", 
        e[e.squareFullSize = 101] = "squareFullSize", e[e.circleFullSize = 102] = "circleFullSize", 
        e[e.hexagonFullSize = 103] = "hexagonFullSize", e[e.triangleFullSize = 104] = "triangleFullSize", 
        e[e.rightTriangleFullSize = 105] = "rightTriangleFullSize", e[e.rectangleFullSize = 106] = "rectangleFullSize", 
        e[e.heartFullSize = 107] = "heartFullSize", e[e.starFullSize = 108] = "starFullSize", 
        e[e.archFullSize = 109] = "archFullSize", e[e.parallelogramTallFullSize = 110] = "parallelogramTallFullSize", 
        e[e.squiggleFullSize = 111] = "squiggleFullSize", e[e.donutFullSize = 112] = "donutFullSize", 
        e[e.tetrisZFullSize = 113] = "tetrisZFullSize", e[e.tetrisTFullSize = 114] = "tetrisTFullSize", 
        e[e.tetrisLFullSize = 115] = "tetrisLFullSize", e[e.cornerFullSize = 116] = "cornerFullSize", 
        e[e.flowerFullSize = 117] = "flowerFullSize", e[e.fanbladeFullSize = 118] = "fanbladeFullSize", 
        e[e.squishedBoxFullSize = 119] = "squishedBoxFullSize", e[e.roundedRightTriangleFullSize = 120] = "roundedRightTriangleFullSize", 
        e[e.arrowRoundedFullSize = 121] = "arrowRoundedFullSize", e[e.beadFullSize = 122] = "beadFullSize", 
        e[e.parallelogramWideFullSize = 123] = "parallelogramWideFullSize", e[e.chevronFullSize = 124] = "chevronFullSize", 
        e[e.xFullSize = 125] = "xFullSize", e[e.tetrisLineFullSize = 126] = "tetrisLineFullSize", 
        e[e.hexagonV3 = 150] = "hexagonV3", e[e.triangleV3 = 151] = "triangleV3", e[e.rectangleV3 = 152] = "rectangleV3", 
        e[e.heartV3 = 153] = "heartV3", e[e.starV3 = 154] = "starV3", e[e.archV3 = 155] = "archV3", 
        e[e.squiggleV3 = 156] = "squiggleV3", e[e.tetrisZV3 = 157] = "tetrisZV3", e[e.tetrisTV3 = 158] = "tetrisTV3", 
        e[e.tetrisLV3 = 159] = "tetrisLV3", e[e.fanbladeV3 = 160] = "fanbladeV3", e[e.arrowRoundedV3 = 161] = "arrowRoundedV3", 
        e[e.beadV3 = 162] = "beadV3", e[e.parallelogramWideV3 = 163] = "parallelogramWideV3", 
        e[e.chevronV3 = 164] = "chevronV3", e[e.HS_END_OF_FULL_SIZE_SHAPES = 165] = "HS_END_OF_FULL_SIZE_SHAPES", 
        e[e.HS_NUMBER_OF_OBJECTS = 166] = "HS_NUMBER_OF_OBJECTS", e[e.image = 2e3] = "image", 
        e[e.HS_START_OF_CHARACTERS2 = 3e3] = "HS_START_OF_CHARACTERS2", e[e.crocodileJaws = 3001] = "crocodileJaws", 
        e[e.lanternFullSize = 3002] = "lanternFullSize", e[e.HS_END_OF_CHARACTERS2 = 3003] = "HS_END_OF_CHARACTERS2", 
        e[e.nil = 1e4] = "nil", e[e.edgeOfScreen = 3e4] = "edgeOfScreen";
    }(r = t.HSObjectType || (t.HSObjectType = {})), t.hsIsShapeType = function(e) {
        var t = i(e);
        return e > r.HS_END_OF_CHARACTERS && e < r.HS_END_OF_SHAPES || t;
    }, t.hsIsFullSizeShape = i, window.HSObjectType = r;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(0), i = u(16), n = function() {
        function e() {}
        return e.blocksToSrc = function(e) {
            return e.join(", ");
        }, e.blockToSrc = function(e) {
            return r.HSBlockType[e.type] + "(" + e.parameters.join(", ") + ")";
        }, e.paramToSrc = function(e) {
            return i.HSParameterType[e.type] + ": " + e.value;
        }, e.stageParamToSrc = function(e, t) {
            return e + (t ? "...\n" + t.toString() : "");
        }, e.stageControlToSrc = function(e) {
            var t = r.HSBlockType[e.type] + "(" + e.parameters.join(", ") + ")";
            return e.scripts.length > 0 && (t += " { ", t += e.scripts.map(function(e) {
                return e.toString();
            }).join(" } ")), t;
        }, e.stageMethodToSrc = function(e) {
            return r.HSBlockType[e.type] + "(" + e.parameters.join(", ") + ")";
        }, e.executableToSrc = function(e) {
            return "NOW {" + e.blocksToExecuteNow.map(function(e) {
                return e.toString();
            }).join(", ") + "}; LATER {" + e.blocksToExecuteLater.map(function(e) {
                return e.toString();
            }).join(", ") + "}";
        }, e;
    }();
    t.SourceFormatter = n, window.SourceFormatter = n;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(21), o = u(13), f = u(3), c = u(1), a = u(2), s = u(5), d = u(22), h = u(11), l = u(50), p = u(0), S = u(4);
    t.TRAIT_OBJECT_ID_KEY = "HSTraitObjectIDKey", t.TRAIT_ID_KEY = "HSTraitIDKey", t.TRAIT_TYPE_KEY = "HSTraitTypeKey", 
    t.MAX_FLOAT = 3.4028234663852886e38;
    var g = function(e) {
        function u() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return i(u, e), u.prototype.parseJSON = function(u) {
            void 0 === u && (u = {}), e.prototype.parseJSON.call(this, u), u[t.TRAIT_ID_KEY] && this.parseTrait(u);
        }, u.prototype.stageParameterBlock = function() {
            return new l.HSStageParameterBlock(this);
        }, u.prototype.matchesObject = function(e) {
            return this.object ? this.object === e : !e;
        }, u.prototype.parseTrait = function(e) {
            this.object = this.context.findWithObjectID(f.HSObject.key, e[t.TRAIT_OBJECT_ID_KEY]), 
            this.objectID = e[t.TRAIT_ID_KEY], this.type = e[t.TRAIT_TYPE_KEY], this.objectReferenceType = e.HSTraitObjectParameterTypeKey;
        }, u.prototype.computedValue = function(e) {
            switch (this.type) {
              case p.HSBlockType.Random110:
              case p.HSBlockType.Random1100:
              case p.HSBlockType.Random11000:
              case p.HSBlockType.MathOperatorRandom:
              case p.HSBlockType.Random:
                var t = this.secondParameterValue(e), u = this.firstParameterValue(e);
                return Math.floor(Math.random() * (t - u + 1)) + u;

			  case p.HSBlockType.None: //AE_MOD
				if (/^_ae_webplayer_action:/g.test(this.parameters[0].value)){
					return AE_MOD.webplayer_action(this.parameters[0].value.split('_ae_webplayer_action:')[1], ((this.parameters[1])?this.secondParameterValue(a):undefined));
				}
				return 0;

			  case p.HSBlockType.MathOperatorAdd:
                return this.secondParameterValue(e) + this.firstParameterValue(e);

              case p.HSBlockType.MathOperatorSubtract:
                return this.firstParameterValue(e) - this.secondParameterValue(e);

              case p.HSBlockType.MathOperatorMultiply:
                return this.firstParameterValue(e) * this.secondParameterValue(e);

              case p.HSBlockType.MathOperatorDivide:
                return 0 === (r = this.secondParameterValue(e)) ? 0 : this.firstParameterValue(e) / r;

              case p.HSBlockType.MathOperatorSine:
                return Math.sin(c.degreesToRadians(this.firstParameterValue(e)));

              case p.HSBlockType.MathOperatorCosine:
                return Math.cos(c.degreesToRadians(this.firstParameterValue(e)));

              case p.HSBlockType.MathOperatorTangent:
                return Math.tan(c.degreesToRadians(this.firstParameterValue(e)));

              case p.HSBlockType.MathOperatorInverseSine:
                return c.radiansToDegrees(Math.asin(this.firstParameterValue(e)) || 0);

              case p.HSBlockType.MathOperatorInverseCosine:
                return c.radiansToDegrees(Math.acos(this.firstParameterValue(e)) || 0);

              case p.HSBlockType.MathOperatorInverseTangent:
                return c.radiansToDegrees(Math.atan(this.firstParameterValue(e)) || 0);

              case p.HSBlockType.MathOperatorMaximum:
                return Math.max(this.firstParameterValue(e), this.secondParameterValue(e));

              case p.HSBlockType.MathOperatorMinimum:
                return Math.min(this.firstParameterValue(e), this.secondParameterValue(e));

              case p.HSBlockType.MathOperatorSquareRoot:
                return Math.sqrt(this.firstParameterValue(e));

              case p.HSBlockType.MathOperatorPower:
                return Math.pow(this.firstParameterValue(e), this.secondParameterValue(e));

              case p.HSBlockType.MathOperatorRound:
                return Math.round(this.firstParameterValue(e));

              case p.HSBlockType.MathOperatorAbs:
                return Math.abs(this.firstParameterValue(e));

              case p.HSBlockType.MathOperatorModulo:
                var r;
                return 0 === (r = this.secondParameterValue(e)) ? 0 : this.firstParameterValue(e) % r;

              case p.HSBlockType.ConditionalOperatorEquals:
              case p.HSBlockType.ConditionalOperatorLessThan:
              case p.HSBlockType.ConditionalOperatorGreaterThan:
              case p.HSBlockType.ConditionalOperatorGreaterThanOrEqualTo:
              case p.HSBlockType.ConditionalOperatorLessThanOrEqualTo:
              case p.HSBlockType.ConditionalOperatorNotEquals:
              case p.HSBlockType.ConditionalOperatorAnd:
              case p.HSBlockType.ConditionalOperatorOr:
                return this.computedBooleanValue(e) ? 1 : 0;

              case p.HSBlockType.TraitXPosition:
                return Math.round(this.stageObjects(e)[0].x);

              case p.HSBlockType.TraitYPosition:
                return Math.round(this.stageObjects(e)[0].y);

              case p.HSBlockType.TraitWidth:
                return this.stageObjects(e)[0].width();

              case p.HSBlockType.TraitHeight:
                return this.stageObjects(e)[0].height();

              case p.HSBlockType.TraitZIndex:
                return this.stageObjects(e)[0].zIndex;

              case p.HSBlockType.TraitOriginX:
                return Math.round(this.stageObjects(e)[0].originX);

              case p.HSBlockType.TraitOriginY:
                return Math.round(this.stageObjects(e)[0].originY);

              case p.HSBlockType.TraitCenterX:
                return Math.round(this.stageObjects(e)[0].x);

              case p.HSBlockType.TraitCenterY:
                return Math.round(this.stageObjects(e)[0].y);

              case p.HSBlockType.TraitRotation:
                return this.stageObjects(e)[0].headingInDegrees;

              case p.HSBlockType.TraitSpeed:
                return this.stageObjects(e)[0].speed;

              case p.HSBlockType.TraitCloneIndex:
                return this.stageObjects(e)[0].cloneIndex;

              case p.HSBlockType.TraitTotalClones:
                var i = this.stageObjects(e)[0];
                return this.context.findWithObjectID(f.HSObject.key, i.objectID).allStageObjects().length;

              case p.HSBlockType.StageTraitTotalObjects:
                return h.HSStageProject.sharedInstance.activeStageScene.stageObjects.length;

              case p.HSBlockType.TraitInvisibility:
                return this.stageObjects(e)[0].invisibilityPercent;

              case p.HSBlockType.TraitSize:
                return this.computedSizePercent(e);

              case p.HSBlockType.StageTraitLastTouchX:
                return h.HSStageProject.sharedInstance.activeStageScene.lastTouchX;

              case p.HSBlockType.StageTraitLastTouchY:
                return h.HSStageProject.sharedInstance.activeStageScene.lastTouchY;

              case p.HSBlockType.StageTraitTiltUp:
                return n.HSAccelerometerManager.tiltUp;

              case p.HSBlockType.StageTraitTiltDown:
                return n.HSAccelerometerManager.tiltDown;

              case p.HSBlockType.StageTraitTiltLeft:
                return n.HSAccelerometerManager.tiltLeft;

              case p.HSBlockType.StageTraitTiltRight:
                return n.HSAccelerometerManager.tiltRight;

              case p.HSBlockType.StageTraitWidth:
                return s.HSStageScene.stageWidth;

              case p.HSBlockType.StageTraitHeight:
                return s.HSStageScene.stageHeight;

              case p.HSBlockType.EventOperatorGamePlaying:
                return 1;

              default:
                return null;
            }
        }, u.prototype.computedSizePercent = function(e) {
            var t = this.stageObjects(e)[0];
            switch (this.whichSizeShouldIUse(t)) {
              case "minimum":
                return Math.min(t.sizePercentHeight, t.sizePercentWidth);

              case "height":
                return t.sizePercentHeight;

              case "width":
                return t.sizePercentWidth;
            }
        }, u.prototype.whichSizeShouldIUse = function(e) {
            var t = Math.abs(e.sizePercentHeight), u = Math.abs(e.sizePercentWidth);
            return t === u ? "minimum" : t > u ? "height" : "width";
        }, u.prototype.computedColorString = function(e) {
            switch (this.type) {
              case p.HSBlockType.ColorOperatorRandom:
                return S.HSColor.randomColor();

              case p.HSBlockType.ColorOperatorRGB:
                return S.HSColor.rgb(this.firstParameterValue(e) % 256, this.secondParameterValue(e) % 256, this.parameters[2].stageParameter().computedValue(e) % 256);

              case p.HSBlockType.ColorOperatorHSB:
                return S.HSColor.hsb(this.firstParameterValue(e) % 361, this.secondParameterValue(e) % 101, this.parameters[2].stageParameter().computedValue(e) % 101);

              default:
                var t = S.HSColor.rgbStringFromNumericColor(this.computedStringValue(e));
                return null == t ? S.HSColor.rgbTextColor : t;
            }
        }, u.prototype.computedStringValue = function(e) {
            var u = this.computedValue(e);
            return null === u ? null : u > t.MAX_FLOAT ? "inf" : u < -t.MAX_FLOAT ? "-inf" : 0 === u ? 1 / u > 0 ? "0" : "-0" : (Math.round(1e6 * u) / 1e6).toString();
        }, u.prototype.computedBooleanValue = function(e) {
            var t = Number.EPSILON, u = this.firstParameterValue(e), r = this.secondParameterValue(e);
            function i() {
                return Math.abs(u - r) <= t;
            }
            function n() {
                return u < r;
            }
            function o() {
                return u > r;
            }
            switch (u && (u = parseFloat(u.toFixed(5))), r && (r = parseFloat(r.toFixed(5))), 
            this.type) {
              case p.HSBlockType.ConditionalOperatorEquals:
                return i();

              case p.HSBlockType.ConditionalOperatorLessThan:
                return n() && !i();

              case p.HSBlockType.ConditionalOperatorLessThanOrEqualTo:
                return i() || n();

              case p.HSBlockType.ConditionalOperatorGreaterThan:
                return o() && !i();

              case p.HSBlockType.ConditionalOperatorGreaterThanOrEqualTo:
                return i() || o();

              case p.HSBlockType.ConditionalOperatorNotEquals:
                return !i();

              case p.HSBlockType.ConditionalOperatorAnd:
                return !(!this.firstParameterValue(e) || !this.secondParameterValue(e));

              case p.HSBlockType.ConditionalOperatorOr:
                return !(!this.firstParameterValue(e) && !this.secondParameterValue(e));

              case p.HSBlockType.EventOperatorGamePlaying:
                return !0;

              default:
                return !1;
            }
        }, u.prototype.usesOriginalObject = function() {
            return this.type === p.HSBlockType.OriginalObject || this.objectReferenceType == p.HSBlockType.OriginalObject;
        }, u.prototype.stageObjects = function(e) {
            return this.type === p.HSBlockType.Self ? [ e ] : this.usesOriginalObject() ? [ e.originalObject(this.context) ] : this.object ? this.context.version >= a.HSProjectVersion.ADD_SELF ? this.object.allStageObjects() : [ this.object.stageObject(e) ] : this.type === p.HSBlockType.ScreenEdge ? [ d.HSStageObject.edgeOfScreenObject ] : this.type === p.HSBlockType.AnyObject ? h.HSStageProject.sharedInstance.activeStageScene.stageObjects : this.type >= p.HSBlockType.TraitRotation && this.type < p.HSBlockType.HS_END_OF_OBJECT_TRAITS ? [ e ] : [];
        }, u.prototype.firstParameterValue = function(e) {
            switch (this.type) {
              case p.HSBlockType.Random110:
              case p.HSBlockType.Random1100:
              case p.HSBlockType.Random11000:
                return 1;

              default:
                if (this.parameters.length > 0) return this.parameters[0].stageParameter().computedValue(e);
                if (p.HSBlockType[this.type] === p.HSBlockType[p.HSBlockType.Random110]) return 0;
            }
        }, u.prototype.secondParameterValue = function(e) {
            switch (this.type) {
              case p.HSBlockType.Random110:
                return 10;

              case p.HSBlockType.Random1100:
                return 100;

              case p.HSBlockType.Random11000:
                return 1e3;

              default:
                return this.parameters.length >= 2 ? this.parameters[1].stageParameter().computedValue(e) : 0;
            }
        }, u.key = "HSParameterBlock", u;
    }(o.HSBlock);
    t.HSParameterBlock = g, window.HSParameterBlock = g;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(3), o = u(2), f = u(12), c = u(13), a = u(9), s = u(53), d = u(28), h = u(0), l = u(16);
    t.SCRIPT_ID_KEY = "abilityID";
    var p = function(e) {
        function u(t) {
            var u = e.call(this, t) || this;
            return u.type = h.HSBlockType.Rule, u;
        }
        return i(u, e), u.prototype.stageRule = function(e) {
            return new s.HSStageRule(this, e);
        }, u.prototype.stageRules = function(e) {
            return [ this.stageRule(e) ];
        }, u.prototype.parseJSON = function(u) {
            if (void 0 === u && (u = {}), this.context.version < o.HSProjectVersion.CUSTOM_WHENS) this.parseLowerThanCustomWhensJSON(u); else {
                var r = this.context.findWithObjectID("HSScript", u[t.SCRIPT_ID_KEY]);
                r ? (e.prototype.parseJSON.call(this, u), this.childBlock() ? (this.objectID = u.id, 
                this.script = r) : this.context.deleteObject(this)) : this.context.deleteObject(this);
            }
        }, u.prototype.parseLowerThanCustomWhensJSON = function(u) {
            void 0 === u && (u = {});
            var r = this.context.findWithObjectID("HSScript", u[t.SCRIPT_ID_KEY]), i = this.context.findWithObjectID("HSObject", u[n.OBJECT_ID_KEY]);
            i && r ? (this.context.version < o.HSProjectVersion.V14 && this.parseLowerThanV14JSON(u, i), 
            e.prototype.parseJSON.call(this, u), this.childBlock() ? (this.script = r, i.willChangeCostume = i.canChangeCostume() && r.containsChangeCostume(), 
            i.addRule(this)) : this.context.deleteObject(this)) : this.context.deleteObject(this);
        }, u.prototype.parseLowerThanV14JSON = function(e, t) {
            var u = e.eventType, r = h.blockTypeForLegacyEventType(u), i = new a.HSParameterBlock(this.context);
            i.type = r;
            var n = new f.HSParameter(this.context);
            switch (this.parameters = [ n ], n.childBlock = i, r) {
              case h.HSBlockType.EventOperatorTap:
              case h.HSBlockType.EventOperatorHold:
                this.addObjectToEventOperator(i, t);
                break;

              case h.HSBlockType.EventOperatorBump:
              case h.HSBlockType.EventOperatorIsTouching:
                this.addObjectsToBumps(i, t, e);
            }
        }, u.prototype.addObjectToEventOperator = function(e, t) {
            var u = new d.HSEventParameterBlock(this.context);
            u.object = t;
            var r = new f.HSParameter(this.context);
            r.type = l.HSParameterType.HSObject, r.childBlock = u, e.parameters = [ r ];
        }, u.prototype.addObjectsToBumps = function(e, t, u) {
            var r = new d.HSEventParameterBlock(this.context);
            r.object = t;
            var i = new d.HSEventParameterBlock(this.context);
            i.object = this.context.findWithObjectID("HSObject", u.collisionReceiverObject);
            var n = new f.HSParameter(this.context);
            n.type = l.HSParameterType.HSObject, n.childBlock = r;
            var o = new f.HSParameter(this.context);
            o.type = l.HSParameterType.HSObject, o.childBlock = i, e.parameters = [ n, o ];
        }, u.prototype.firstObject = function() {
            return this.childBlock() && this.childBlock().parameters.length > 0 ? this.childBlock().parameters[0].childBlock.object : null;
        }, u.prototype.firstParam = function() {
            return this.parameters[0];
        }, u.prototype.childBlock = function() {
            return this.firstParam().childBlock;
        }, u.prototype.eventType = function() {
            return this.childBlock().type;
        }, u.prototype.eventParameterBlocks = function() {
            var e = [];
            return this.childBlock() && this.childBlock().parameters.forEach(function(t) {
                t.childBlock && e.push(t.childBlock);
            }), e;
        }, u.prototype.paramsBlock = function() {
            if (this.childBlock().parameters[0]) return this.childBlock().parameters[0].childBlock;
        }, u.prototype.matchesEvent = function(e) {
            return this.childBlock().type === e;
        }, u.prototype.conditionIsTrue = function(e) {
            return this.childBlock().computedBooleanValue(e);
        }, u.key = "HSRule", u;
    }(c.HSBlock);
    t.HSRule = p, window.HSRule = p, window.SCRIPT_ID_KEY = t.SCRIPT_ID_KEY;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(25), i = u(15), n = u(0), o = function() {
        function e(t) {
            this.stageScenes = t.scenes.map(function(e) {
                return e.stageScene();
            }), this.version = t.context.version, this.activeStageScene = this.stageScenes[0], 
            r.HSVariable.globalScope = {}, e.sharedInstance = this;
        }
        return e.prototype.changeScene = function(e) {
            var t = this.stageScenes.find(function(t) {
                return t.name === e;
            });
            t && (i.HopscotchDrawingContext.shouldClear = !0, this.activeStageScene = t, this.activeStageScene.activateAllRulesForEventType(n.HSBlockType.EventOperatorStart));
        }, e.prototype.activateAllRulesForEventType = function(e) {
            this.activeStageScene.activateAllRulesForEventType(e);
        }, e.prototype.executeAllActiveRules = function() {
            this.activeStageScene.executeAllActiveRules();
        }, e.prototype.animationTick = function(e) {
            this.activeStageScene.animationTick(e);
        }, e.prototype.receiveClickEvent = function(e, t) {
            this.activeStageScene.receiveClickEvent(e, t);
        }, e.prototype.receiveTouchDownEvent = function(e, t) {
            this.activeStageScene.receiveTouchDownEvent(e, t);
        }, e.prototype.receiveTouchMoveEvent = function(e, t) {
            this.activeStageScene.receiveTouchMoveEvent(e, t);
        }, e.prototype.receiveTouchUpEvent = function(e, t) {
            this.activeStageScene.receiveTouchUpEvent(e, t);
        }, e;
    }();
    t.HSStageProject = o, window.HSStageProject = o;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(6), o = u(2), f = u(8), c = u(25), a = u(26), s = u(27), d = u(28), h = u(9), l = u(23), p = u(16);
    t.VALUE_KEY = "value", t.CHILD_BLOCK_KEY = "datum", t.VARIABLE_KEY = "variable", 
    t.PARAMETER_TYPE_KEY = "type";
    var S = function(e) {
        function u() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return i(u, e), u.prototype.stageParameter = function() {
            return new a.HSStageParameter(this.value, this.childBlock);
        }, u.prototype.parseJSON = function(e) {
            if (void 0 === e && (e = {}), this.value = e[t.VALUE_KEY], this.type = e[t.PARAMETER_TYPE_KEY], 
            this.type === p.HSParameterType.Object && e[t.CHILD_BLOCK_KEY]) {
                var u = e[t.CHILD_BLOCK_KEY];
                if (u.customObject) {
                    var r = o.HSProjectContext.customObjectMap.get(u.customObject);
                    this.childBlock = r, l.HSImageTextureFactory.instance.prefetchImage(r);
                }
                this.value = u.text ? u.text : u.type;
            } else if (e[t.CHILD_BLOCK_KEY] && e[t.CHILD_BLOCK_KEY].variable) this.setChildBlockToVariableIfPossible(e[t.CHILD_BLOCK_KEY]); else if (e[t.CHILD_BLOCK_KEY]) {
                var i = new h.HSParameterBlock(this.context);
                i.parseJSON(e[t.CHILD_BLOCK_KEY]), this.childBlock = i;
            } else e[t.VARIABLE_KEY] && (this.setChildBlockToVariableIfPossible(e), this.setChildBlockToTraitIfPossible(e), 
            this.setChildBlockToEventParameterIfPossible(e));
        }, u.prototype.toString = function() {
            return f.SourceFormatter.paramToSrc(this);
        }, u.prototype.setChildBlockToVariableIfPossible = function(e) {
            var u = e[t.VARIABLE_KEY];
            if (this.context.findWithObjectID(s.HSVariablePrototype.key, u)) {
                var r = new c.HSVariable(this.context);
                r.parseJSON(e), this.childBlock = r;
            }
        }, u.prototype.setChildBlockToTraitIfPossible = function(e) {
            var u = e[t.VARIABLE_KEY], r = this.context.findWithObjectID(h.HSParameterBlock.key, u);
            r && (this.childBlock = r);
        }, u.prototype.setChildBlockToEventParameterIfPossible = function(e) {
            var u = e[t.VARIABLE_KEY], r = this.context.findWithObjectID(d.HSEventParameterBlock.key, u);
            r && (this.childBlock = r);
        }, u.key = "HSParameter", u;
    }(n.HSManagedObject);
    t.HSParameter = S, window.HSParameter = S, window.VALUE_KEY = t.VALUE_KEY, window.CHILD_BLOCK_KEY = t.CHILD_BLOCK_KEY, 
    window.VARIABLE_KEY = t.VARIABLE_KEY, window.PARAMETER_TYPE_KEY = t.PARAMETER_TYPE_KEY;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, o = u(6), f = u(12), c = u(8), a = u(0);
    t.BLOCK_TYPE_KEY = "type", t.PARAMETERS_KEY = "parameters", t.PARAMS_KEY = "params", 
    function(e) {
        e[e.Method = 0] = "Method", e[e.Control = 1] = "Control", e[e.ConditionalControl = 2] = "ConditionalControl", 
        e[e.Variable = 3] = "Variable";
    }(n = t.HSBlockClass || (t.HSBlockClass = {}));
    var s = function(e) {
        function u() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.parameters = [], t.isControl = !1, t;
        }
        return i(u, e), u.prototype.parseJSON = function(e) {
            var u = this;
            void 0 === e && (e = {}), this.type = this.type || parseInt(e[t.BLOCK_TYPE_KEY]), 
            (e[t.PARAMETERS_KEY] || e[t.PARAMS_KEY] || []).forEach(function(e) {
                var t = new f.HSParameter(u.context);
                t.parseJSON(e), u.parameters.push(t);
            });
        }, u.prototype.stageParameters = function() {
            return this.parameters.map(function(e) {
                return e.stageParameter();
            });
        }, u.prototype.toString = function() {
            return c.SourceFormatter.blockToSrc(this);
        }, u.blockClassForDict = function(e) {
            switch (void 0 === e && (e = {}), e[t.BLOCK_TYPE_KEY]) {
              case a.HSBlockType.Repeat:
              case a.HSBlockType.LeaveATrail:
              case a.HSBlockType.RepeatForever:
              case a.HSBlockType.Ability:
                return n.Control;

              case a.HSBlockType.CheckOnceIf:
              case a.HSBlockType.CheckIfElse:
                return n.ConditionalControl;
            }
            return n.Method;
        }, u.key = "HSBlock", u;
    }(o.HSManagedObject);
    t.HSBlock = s, window.HSBlockClass = n, window.HSBlock = s, window.BLOCK_TYPE_KEY = t.BLOCK_TYPE_KEY, 
    window.PARAMETERS_KEY = t.PARAMETERS_KEY, window.PARAMS_KEY = t.PARAMS_KEY;
}, function(e, t, u) {
    var r;
    r = function() {
        return function(e) {
            var t = {};
            function u(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return e[r].call(i.exports, i, i.exports, u), i.loaded = !0, i.exports;
            }
            return u.m = e, u.c = t, u.p = "", u(0);
        }([ function(e, t, u) {
            t.glMatrix = u(1), t.mat2 = u(2), t.mat2d = u(3), t.mat3 = u(4), t.mat4 = u(5), 
            t.quat = u(6), t.vec2 = u(9), t.vec3 = u(7), t.vec4 = u(8);
        }, function(e, t, u) {
            var r = {
                EPSILON: 1e-6
            };
            r.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, r.RANDOM = Math.random, 
            r.setMatrixArrayType = function(e) {
                GLMAT_ARRAY_TYPE = e;
            };
            var i = Math.PI / 180;
            r.toRadian = function(e) {
                return e * i;
            }, e.exports = r;
        }, function(e, t, u) {
            var r = u(1), i = {
                create: function() {
                    var e = new r.ARRAY_TYPE(4);
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e;
                },
                clone: function(e) {
                    var t = new r.ARRAY_TYPE(4);
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
                },
                copy: function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
                },
                identity: function(e) {
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e;
                },
                transpose: function(e, t) {
                    if (e === t) {
                        var u = t[1];
                        e[1] = t[2], e[2] = u;
                    } else e[0] = t[0], e[1] = t[2], e[2] = t[1], e[3] = t[3];
                    return e;
                },
                invert: function(e, t) {
                    var u = t[0], r = t[1], i = t[2], n = t[3], o = u * n - i * r;
                    return o ? (o = 1 / o, e[0] = n * o, e[1] = -r * o, e[2] = -i * o, e[3] = u * o, 
                    e) : null;
                },
                adjoint: function(e, t) {
                    var u = t[0];
                    return e[0] = t[3], e[1] = -t[1], e[2] = -t[2], e[3] = u, e;
                },
                determinant: function(e) {
                    return e[0] * e[3] - e[2] * e[1];
                },
                multiply: function(e, t, u) {
                    var r = t[0], i = t[1], n = t[2], o = t[3], f = u[0], c = u[1], a = u[2], s = u[3];
                    return e[0] = r * f + n * c, e[1] = i * f + o * c, e[2] = r * a + n * s, e[3] = i * a + o * s, 
                    e;
                }
            };
            i.mul = i.multiply, i.rotate = function(e, t, u) {
                var r = t[0], i = t[1], n = t[2], o = t[3], f = Math.sin(u), c = Math.cos(u);
                return e[0] = r * c + n * f, e[1] = i * c + o * f, e[2] = r * -f + n * c, e[3] = i * -f + o * c, 
                e;
            }, i.scale = function(e, t, u) {
                var r = t[0], i = t[1], n = t[2], o = t[3], f = u[0], c = u[1];
                return e[0] = r * f, e[1] = i * f, e[2] = n * c, e[3] = o * c, e;
            }, i.fromRotation = function(e, t) {
                var u = Math.sin(t), r = Math.cos(t);
                return e[0] = r, e[1] = u, e[2] = -u, e[3] = r, e;
            }, i.fromScaling = function(e, t) {
                return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = t[1], e;
            }, i.str = function(e) {
                return "mat2(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
            }, i.frob = function(e) {
                return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2));
            }, i.LDU = function(e, t, u, r) {
                return e[2] = r[2] / r[0], u[0] = r[0], u[1] = r[1], u[3] = r[3] - e[2] * u[1], 
                [ e, t, u ];
            }, e.exports = i;
        }, function(e, t, u) {
            var r = u(1), i = {
                create: function() {
                    var e = new r.ARRAY_TYPE(6);
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e;
                },
                clone: function(e) {
                    var t = new r.ARRAY_TYPE(6);
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], 
                    t;
                },
                copy: function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], 
                    e;
                },
                identity: function(e) {
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e;
                },
                invert: function(e, t) {
                    var u = t[0], r = t[1], i = t[2], n = t[3], o = t[4], f = t[5], c = u * n - r * i;
                    return c ? (c = 1 / c, e[0] = n * c, e[1] = -r * c, e[2] = -i * c, e[3] = u * c, 
                    e[4] = (i * f - n * o) * c, e[5] = (r * o - u * f) * c, e) : null;
                },
                determinant: function(e) {
                    return e[0] * e[3] - e[1] * e[2];
                },
                multiply: function(e, t, u) {
                    var r = t[0], i = t[1], n = t[2], o = t[3], f = t[4], c = t[5], a = u[0], s = u[1], d = u[2], h = u[3], l = u[4], p = u[5];
                    return e[0] = r * a + n * s, e[1] = i * a + o * s, e[2] = r * d + n * h, e[3] = i * d + o * h, 
                    e[4] = r * l + n * p + f, e[5] = i * l + o * p + c, e;
                }
            };
            i.mul = i.multiply, i.rotate = function(e, t, u) {
                var r = t[0], i = t[1], n = t[2], o = t[3], f = t[4], c = t[5], a = Math.sin(u), s = Math.cos(u);
                return e[0] = r * s + n * a, e[1] = i * s + o * a, e[2] = r * -a + n * s, e[3] = i * -a + o * s, 
                e[4] = f, e[5] = c, e;
            }, i.scale = function(e, t, u) {
                var r = t[0], i = t[1], n = t[2], o = t[3], f = t[4], c = t[5], a = u[0], s = u[1];
                return e[0] = r * a, e[1] = i * a, e[2] = n * s, e[3] = o * s, e[4] = f, e[5] = c, 
                e;
            }, i.translate = function(e, t, u) {
                var r = t[0], i = t[1], n = t[2], o = t[3], f = t[4], c = t[5], a = u[0], s = u[1];
                return e[0] = r, e[1] = i, e[2] = n, e[3] = o, e[4] = r * a + n * s + f, e[5] = i * a + o * s + c, 
                e;
            }, i.fromRotation = function(e, t) {
                var u = Math.sin(t), r = Math.cos(t);
                return e[0] = r, e[1] = u, e[2] = -u, e[3] = r, e[4] = 0, e[5] = 0, e;
            }, i.fromScaling = function(e, t) {
                return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = t[1], e[4] = 0, e[5] = 0, e;
            }, i.fromTranslation = function(e, t) {
                return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = t[0], e[5] = t[1], e;
            }, i.str = function(e) {
                return "mat2d(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ")";
            }, i.frob = function(e) {
                return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + 1);
            }, e.exports = i;
        }, function(e, t, u) {
            var r = u(1), i = {
                create: function() {
                    var e = new r.ARRAY_TYPE(9);
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, 
                    e[8] = 1, e;
                },
                fromMat4: function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], 
                    e[6] = t[8], e[7] = t[9], e[8] = t[10], e;
                },
                clone: function(e) {
                    var t = new r.ARRAY_TYPE(9);
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], 
                    t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
                },
                copy: function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], 
                    e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
                },
                identity: function(e) {
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, 
                    e[8] = 1, e;
                },
                transpose: function(e, t) {
                    if (e === t) {
                        var u = t[1], r = t[2], i = t[5];
                        e[1] = t[3], e[2] = t[6], e[3] = u, e[5] = t[7], e[6] = r, e[7] = i;
                    } else e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], 
                    e[6] = t[2], e[7] = t[5], e[8] = t[8];
                    return e;
                },
                invert: function(e, t) {
                    var u = t[0], r = t[1], i = t[2], n = t[3], o = t[4], f = t[5], c = t[6], a = t[7], s = t[8], d = s * o - f * a, h = -s * n + f * c, l = a * n - o * c, p = u * d + r * h + i * l;
                    return p ? (p = 1 / p, e[0] = d * p, e[1] = (-s * r + i * a) * p, e[2] = (f * r - i * o) * p, 
                    e[3] = h * p, e[4] = (s * u - i * c) * p, e[5] = (-f * u + i * n) * p, e[6] = l * p, 
                    e[7] = (-a * u + r * c) * p, e[8] = (o * u - r * n) * p, e) : null;
                },
                adjoint: function(e, t) {
                    var u = t[0], r = t[1], i = t[2], n = t[3], o = t[4], f = t[5], c = t[6], a = t[7], s = t[8];
                    return e[0] = o * s - f * a, e[1] = i * a - r * s, e[2] = r * f - i * o, e[3] = f * c - n * s, 
                    e[4] = u * s - i * c, e[5] = i * n - u * f, e[6] = n * a - o * c, e[7] = r * c - u * a, 
                    e[8] = u * o - r * n, e;
                },
                determinant: function(e) {
                    var t = e[0], u = e[1], r = e[2], i = e[3], n = e[4], o = e[5], f = e[6], c = e[7], a = e[8];
                    return t * (a * n - o * c) + u * (-a * i + o * f) + r * (c * i - n * f);
                },
                multiply: function(e, t, u) {
                    var r = t[0], i = t[1], n = t[2], o = t[3], f = t[4], c = t[5], a = t[6], s = t[7], d = t[8], h = u[0], l = u[1], p = u[2], S = u[3], g = u[4], y = u[5], b = u[6], v = u[7], T = u[8];
                    return e[0] = h * r + l * o + p * a, e[1] = h * i + l * f + p * s, e[2] = h * n + l * c + p * d, 
                    e[3] = S * r + g * o + y * a, e[4] = S * i + g * f + y * s, e[5] = S * n + g * c + y * d, 
                    e[6] = b * r + v * o + T * a, e[7] = b * i + v * f + T * s, e[8] = b * n + v * c + T * d, 
                    e;
                }
            };
            i.mul = i.multiply, i.translate = function(e, t, u) {
                var r = t[0], i = t[1], n = t[2], o = t[3], f = t[4], c = t[5], a = t[6], s = t[7], d = t[8], h = u[0], l = u[1];
                return e[0] = r, e[1] = i, e[2] = n, e[3] = o, e[4] = f, e[5] = c, e[6] = h * r + l * o + a, 
                e[7] = h * i + l * f + s, e[8] = h * n + l * c + d, e;
            }, i.rotate = function(e, t, u) {
                var r = t[0], i = t[1], n = t[2], o = t[3], f = t[4], c = t[5], a = t[6], s = t[7], d = t[8], h = Math.sin(u), l = Math.cos(u);
                return e[0] = l * r + h * o, e[1] = l * i + h * f, e[2] = l * n + h * c, e[3] = l * o - h * r, 
                e[4] = l * f - h * i, e[5] = l * c - h * n, e[6] = a, e[7] = s, e[8] = d, e;
            }, i.scale = function(e, t, u) {
                var r = u[0], i = u[1];
                return e[0] = r * t[0], e[1] = r * t[1], e[2] = r * t[2], e[3] = i * t[3], e[4] = i * t[4], 
                e[5] = i * t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
            }, i.fromTranslation = function(e, t) {
                return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = t[0], 
                e[7] = t[1], e[8] = 1, e;
            }, i.fromRotation = function(e, t) {
                var u = Math.sin(t), r = Math.cos(t);
                return e[0] = r, e[1] = u, e[2] = 0, e[3] = -u, e[4] = r, e[5] = 0, e[6] = 0, e[7] = 0, 
                e[8] = 1, e;
            }, i.fromScaling = function(e, t) {
                return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = t[1], e[5] = 0, e[6] = 0, 
                e[7] = 0, e[8] = 1, e;
            }, i.fromMat2d = function(e, t) {
                return e[0] = t[0], e[1] = t[1], e[2] = 0, e[3] = t[2], e[4] = t[3], e[5] = 0, e[6] = t[4], 
                e[7] = t[5], e[8] = 1, e;
            }, i.fromQuat = function(e, t) {
                var u = t[0], r = t[1], i = t[2], n = t[3], o = u + u, f = r + r, c = i + i, a = u * o, s = r * o, d = r * f, h = i * o, l = i * f, p = i * c, S = n * o, g = n * f, y = n * c;
                return e[0] = 1 - d - p, e[3] = s - y, e[6] = h + g, e[1] = s + y, e[4] = 1 - a - p, 
                e[7] = l - S, e[2] = h - g, e[5] = l + S, e[8] = 1 - a - d, e;
            }, i.normalFromMat4 = function(e, t) {
                var u = t[0], r = t[1], i = t[2], n = t[3], o = t[4], f = t[5], c = t[6], a = t[7], s = t[8], d = t[9], h = t[10], l = t[11], p = t[12], S = t[13], g = t[14], y = t[15], b = u * f - r * o, v = u * c - i * o, T = u * a - n * o, m = r * c - i * f, E = r * a - n * f, O = i * a - n * c, H = s * S - d * p, w = s * g - h * p, _ = s * y - l * p, C = d * g - h * S, B = d * y - l * S, x = h * y - l * g, k = b * x - v * B + T * C + m * _ - E * w + O * H;
                return k ? (k = 1 / k, e[0] = (f * x - c * B + a * C) * k, e[1] = (c * _ - o * x - a * w) * k, 
                e[2] = (o * B - f * _ + a * H) * k, e[3] = (i * B - r * x - n * C) * k, e[4] = (u * x - i * _ + n * w) * k, 
                e[5] = (r * _ - u * B - n * H) * k, e[6] = (S * O - g * E + y * m) * k, e[7] = (g * T - p * O - y * v) * k, 
                e[8] = (p * E - S * T + y * b) * k, e) : null;
            }, i.str = function(e) {
                return "mat3(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ")";
            }, i.frob = function(e) {
                return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + Math.pow(e[6], 2) + Math.pow(e[7], 2) + Math.pow(e[8], 2));
            }, e.exports = i;
        }, function(e, t, u) {
            var r = u(1), i = {
                create: function() {
                    var e = new r.ARRAY_TYPE(16);
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, 
                    e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, 
                    e;
                },
                clone: function(e) {
                    var t = new r.ARRAY_TYPE(16);
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], 
                    t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], 
                    t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
                },
                copy: function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], 
                    e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], 
                    e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
                },
                identity: function(e) {
                    return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, 
                    e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, 
                    e;
                },
                transpose: function(e, t) {
                    if (e === t) {
                        var u = t[1], r = t[2], i = t[3], n = t[6], o = t[7], f = t[11];
                        e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = u, e[6] = t[9], e[7] = t[13], e[8] = r, 
                        e[9] = n, e[11] = t[14], e[12] = i, e[13] = o, e[14] = f;
                    } else e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], 
                    e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], 
                    e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
                    return e;
                },
                invert: function(e, t) {
                    var u = t[0], r = t[1], i = t[2], n = t[3], o = t[4], f = t[5], c = t[6], a = t[7], s = t[8], d = t[9], h = t[10], l = t[11], p = t[12], S = t[13], g = t[14], y = t[15], b = u * f - r * o, v = u * c - i * o, T = u * a - n * o, m = r * c - i * f, E = r * a - n * f, O = i * a - n * c, H = s * S - d * p, w = s * g - h * p, _ = s * y - l * p, C = d * g - h * S, B = d * y - l * S, x = h * y - l * g, k = b * x - v * B + T * C + m * _ - E * w + O * H;
                    return k ? (k = 1 / k, e[0] = (f * x - c * B + a * C) * k, e[1] = (i * B - r * x - n * C) * k, 
                    e[2] = (S * O - g * E + y * m) * k, e[3] = (h * E - d * O - l * m) * k, e[4] = (c * _ - o * x - a * w) * k, 
                    e[5] = (u * x - i * _ + n * w) * k, e[6] = (g * T - p * O - y * v) * k, e[7] = (s * O - h * T + l * v) * k, 
                    e[8] = (o * B - f * _ + a * H) * k, e[9] = (r * _ - u * B - n * H) * k, e[10] = (p * E - S * T + y * b) * k, 
                    e[11] = (d * T - s * E - l * b) * k, e[12] = (f * w - o * C - c * H) * k, e[13] = (u * C - r * w + i * H) * k, 
                    e[14] = (S * v - p * m - g * b) * k, e[15] = (s * m - d * v + h * b) * k, e) : null;
                },
                adjoint: function(e, t) {
                    var u = t[0], r = t[1], i = t[2], n = t[3], o = t[4], f = t[5], c = t[6], a = t[7], s = t[8], d = t[9], h = t[10], l = t[11], p = t[12], S = t[13], g = t[14], y = t[15];
                    return e[0] = f * (h * y - l * g) - d * (c * y - a * g) + S * (c * l - a * h), e[1] = -(r * (h * y - l * g) - d * (i * y - n * g) + S * (i * l - n * h)), 
                    e[2] = r * (c * y - a * g) - f * (i * y - n * g) + S * (i * a - n * c), e[3] = -(r * (c * l - a * h) - f * (i * l - n * h) + d * (i * a - n * c)), 
                    e[4] = -(o * (h * y - l * g) - s * (c * y - a * g) + p * (c * l - a * h)), e[5] = u * (h * y - l * g) - s * (i * y - n * g) + p * (i * l - n * h), 
                    e[6] = -(u * (c * y - a * g) - o * (i * y - n * g) + p * (i * a - n * c)), e[7] = u * (c * l - a * h) - o * (i * l - n * h) + s * (i * a - n * c), 
                    e[8] = o * (d * y - l * S) - s * (f * y - a * S) + p * (f * l - a * d), e[9] = -(u * (d * y - l * S) - s * (r * y - n * S) + p * (r * l - n * d)), 
                    e[10] = u * (f * y - a * S) - o * (r * y - n * S) + p * (r * a - n * f), e[11] = -(u * (f * l - a * d) - o * (r * l - n * d) + s * (r * a - n * f)), 
                    e[12] = -(o * (d * g - h * S) - s * (f * g - c * S) + p * (f * h - c * d)), e[13] = u * (d * g - h * S) - s * (r * g - i * S) + p * (r * h - i * d), 
                    e[14] = -(u * (f * g - c * S) - o * (r * g - i * S) + p * (r * c - i * f)), e[15] = u * (f * h - c * d) - o * (r * h - i * d) + s * (r * c - i * f), 
                    e;
                },
                determinant: function(e) {
                    var t = e[0], u = e[1], r = e[2], i = e[3], n = e[4], o = e[5], f = e[6], c = e[7], a = e[8], s = e[9], d = e[10], h = e[11], l = e[12], p = e[13], S = e[14], g = e[15];
                    return (t * o - u * n) * (d * g - h * S) - (t * f - r * n) * (s * g - h * p) + (t * c - i * n) * (s * S - d * p) + (u * f - r * o) * (a * g - h * l) - (u * c - i * o) * (a * S - d * l) + (r * c - i * f) * (a * p - s * l);
                },
                multiply: function(e, t, u) {
                    var r = t[0], i = t[1], n = t[2], o = t[3], f = t[4], c = t[5], a = t[6], s = t[7], d = t[8], h = t[9], l = t[10], p = t[11], S = t[12], g = t[13], y = t[14], b = t[15], v = u[0], T = u[1], m = u[2], E = u[3];
                    return e[0] = v * r + T * f + m * d + E * S, e[1] = v * i + T * c + m * h + E * g, 
                    e[2] = v * n + T * a + m * l + E * y, e[3] = v * o + T * s + m * p + E * b, v = u[4], 
                    T = u[5], m = u[6], E = u[7], e[4] = v * r + T * f + m * d + E * S, e[5] = v * i + T * c + m * h + E * g, 
                    e[6] = v * n + T * a + m * l + E * y, e[7] = v * o + T * s + m * p + E * b, v = u[8], 
                    T = u[9], m = u[10], E = u[11], e[8] = v * r + T * f + m * d + E * S, e[9] = v * i + T * c + m * h + E * g, 
                    e[10] = v * n + T * a + m * l + E * y, e[11] = v * o + T * s + m * p + E * b, v = u[12], 
                    T = u[13], m = u[14], E = u[15], e[12] = v * r + T * f + m * d + E * S, e[13] = v * i + T * c + m * h + E * g, 
                    e[14] = v * n + T * a + m * l + E * y, e[15] = v * o + T * s + m * p + E * b, e;
                }
            };
            i.mul = i.multiply, i.translate = function(e, t, u) {
                var r, i, n, o, f, c, a, s, d, h, l, p, S = u[0], g = u[1], y = u[2];
                return t === e ? (e[12] = t[0] * S + t[4] * g + t[8] * y + t[12], e[13] = t[1] * S + t[5] * g + t[9] * y + t[13], 
                e[14] = t[2] * S + t[6] * g + t[10] * y + t[14], e[15] = t[3] * S + t[7] * g + t[11] * y + t[15]) : (r = t[0], 
                i = t[1], n = t[2], o = t[3], f = t[4], c = t[5], a = t[6], s = t[7], d = t[8], 
                h = t[9], l = t[10], p = t[11], e[0] = r, e[1] = i, e[2] = n, e[3] = o, e[4] = f, 
                e[5] = c, e[6] = a, e[7] = s, e[8] = d, e[9] = h, e[10] = l, e[11] = p, e[12] = r * S + f * g + d * y + t[12], 
                e[13] = i * S + c * g + h * y + t[13], e[14] = n * S + a * g + l * y + t[14], e[15] = o * S + s * g + p * y + t[15]), 
                e;
            }, i.scale = function(e, t, u) {
                var r = u[0], i = u[1], n = u[2];
                return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * i, 
                e[5] = t[5] * i, e[6] = t[6] * i, e[7] = t[7] * i, e[8] = t[8] * n, e[9] = t[9] * n, 
                e[10] = t[10] * n, e[11] = t[11] * n, e[12] = t[12], e[13] = t[13], e[14] = t[14], 
                e[15] = t[15], e;
            }, i.rotate = function(e, t, u, i) {
                var n, o, f, c, a, s, d, h, l, p, S, g, y, b, v, T, m, E, O, H, w, _, C, B, x = i[0], k = i[1], j = i[2], P = Math.sqrt(x * x + k * k + j * j);
                return Math.abs(P) < r.EPSILON ? null : (x *= P = 1 / P, k *= P, j *= P, n = Math.sin(u), 
                f = 1 - (o = Math.cos(u)), c = t[0], a = t[1], s = t[2], d = t[3], h = t[4], l = t[5], 
                p = t[6], S = t[7], g = t[8], y = t[9], b = t[10], v = t[11], T = x * x * f + o, 
                m = k * x * f + j * n, E = j * x * f - k * n, O = x * k * f - j * n, H = k * k * f + o, 
                w = j * k * f + x * n, _ = x * j * f + k * n, C = k * j * f - x * n, B = j * j * f + o, 
                e[0] = c * T + h * m + g * E, e[1] = a * T + l * m + y * E, e[2] = s * T + p * m + b * E, 
                e[3] = d * T + S * m + v * E, e[4] = c * O + h * H + g * w, e[5] = a * O + l * H + y * w, 
                e[6] = s * O + p * H + b * w, e[7] = d * O + S * H + v * w, e[8] = c * _ + h * C + g * B, 
                e[9] = a * _ + l * C + y * B, e[10] = s * _ + p * C + b * B, e[11] = d * _ + S * C + v * B, 
                t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
            }, i.rotateX = function(e, t, u) {
                var r = Math.sin(u), i = Math.cos(u), n = t[4], o = t[5], f = t[6], c = t[7], a = t[8], s = t[9], d = t[10], h = t[11];
                return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], 
                e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = n * i + a * r, e[5] = o * i + s * r, 
                e[6] = f * i + d * r, e[7] = c * i + h * r, e[8] = a * i - n * r, e[9] = s * i - o * r, 
                e[10] = d * i - f * r, e[11] = h * i - c * r, e;
            }, i.rotateY = function(e, t, u) {
                var r = Math.sin(u), i = Math.cos(u), n = t[0], o = t[1], f = t[2], c = t[3], a = t[8], s = t[9], d = t[10], h = t[11];
                return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], 
                e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = n * i - a * r, e[1] = o * i - s * r, 
                e[2] = f * i - d * r, e[3] = c * i - h * r, e[8] = n * r + a * i, e[9] = o * r + s * i, 
                e[10] = f * r + d * i, e[11] = c * r + h * i, e;
            }, i.rotateZ = function(e, t, u) {
                var r = Math.sin(u), i = Math.cos(u), n = t[0], o = t[1], f = t[2], c = t[3], a = t[4], s = t[5], d = t[6], h = t[7];
                return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], 
                e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = n * i + a * r, e[1] = o * i + s * r, 
                e[2] = f * i + d * r, e[3] = c * i + h * r, e[4] = a * i - n * r, e[5] = s * i - o * r, 
                e[6] = d * i - f * r, e[7] = h * i - c * r, e;
            }, i.fromTranslation = function(e, t) {
                return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, 
                e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], 
                e[15] = 1, e;
            }, i.fromScaling = function(e, t) {
                return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = t[1], e[6] = 0, 
                e[7] = 0, e[8] = 0, e[9] = 0, e[10] = t[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, 
                e[15] = 1, e;
            }, i.fromRotation = function(e, t, u) {
                var i, n, o, f = u[0], c = u[1], a = u[2], s = Math.sqrt(f * f + c * c + a * a);
                return Math.abs(s) < r.EPSILON ? null : (f *= s = 1 / s, c *= s, a *= s, i = Math.sin(t), 
                o = 1 - (n = Math.cos(t)), e[0] = f * f * o + n, e[1] = c * f * o + a * i, e[2] = a * f * o - c * i, 
                e[3] = 0, e[4] = f * c * o - a * i, e[5] = c * c * o + n, e[6] = a * c * o + f * i, 
                e[7] = 0, e[8] = f * a * o + c * i, e[9] = c * a * o - f * i, e[10] = a * a * o + n, 
                e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e);
            }, i.fromXRotation = function(e, t) {
                var u = Math.sin(t), r = Math.cos(t);
                return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = r, e[6] = u, e[7] = 0, 
                e[8] = 0, e[9] = -u, e[10] = r, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, 
                e;
            }, i.fromYRotation = function(e, t) {
                var u = Math.sin(t), r = Math.cos(t);
                return e[0] = r, e[1] = 0, e[2] = -u, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, 
                e[8] = u, e[9] = 0, e[10] = r, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, 
                e;
            }, i.fromZRotation = function(e, t) {
                var u = Math.sin(t), r = Math.cos(t);
                return e[0] = r, e[1] = u, e[2] = 0, e[3] = 0, e[4] = -u, e[5] = r, e[6] = 0, e[7] = 0, 
                e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, 
                e;
            }, i.fromRotationTranslation = function(e, t, u) {
                var r = t[0], i = t[1], n = t[2], o = t[3], f = r + r, c = i + i, a = n + n, s = r * f, d = r * c, h = r * a, l = i * c, p = i * a, S = n * a, g = o * f, y = o * c, b = o * a;
                return e[0] = 1 - (l + S), e[1] = d + b, e[2] = h - y, e[3] = 0, e[4] = d - b, e[5] = 1 - (s + S), 
                e[6] = p + g, e[7] = 0, e[8] = h + y, e[9] = p - g, e[10] = 1 - (s + l), e[11] = 0, 
                e[12] = u[0], e[13] = u[1], e[14] = u[2], e[15] = 1, e;
            }, i.fromRotationTranslationScale = function(e, t, u, r) {
                var i = t[0], n = t[1], o = t[2], f = t[3], c = i + i, a = n + n, s = o + o, d = i * c, h = i * a, l = i * s, p = n * a, S = n * s, g = o * s, y = f * c, b = f * a, v = f * s, T = r[0], m = r[1], E = r[2];
                return e[0] = (1 - (p + g)) * T, e[1] = (h + v) * T, e[2] = (l - b) * T, e[3] = 0, 
                e[4] = (h - v) * m, e[5] = (1 - (d + g)) * m, e[6] = (S + y) * m, e[7] = 0, e[8] = (l + b) * E, 
                e[9] = (S - y) * E, e[10] = (1 - (d + p)) * E, e[11] = 0, e[12] = u[0], e[13] = u[1], 
                e[14] = u[2], e[15] = 1, e;
            }, i.fromRotationTranslationScaleOrigin = function(e, t, u, r, i) {
                var n = t[0], o = t[1], f = t[2], c = t[3], a = n + n, s = o + o, d = f + f, h = n * a, l = n * s, p = n * d, S = o * s, g = o * d, y = f * d, b = c * a, v = c * s, T = c * d, m = r[0], E = r[1], O = r[2], H = i[0], w = i[1], _ = i[2];
                return e[0] = (1 - (S + y)) * m, e[1] = (l + T) * m, e[2] = (p - v) * m, e[3] = 0, 
                e[4] = (l - T) * E, e[5] = (1 - (h + y)) * E, e[6] = (g + b) * E, e[7] = 0, e[8] = (p + v) * O, 
                e[9] = (g - b) * O, e[10] = (1 - (h + S)) * O, e[11] = 0, e[12] = u[0] + H - (e[0] * H + e[4] * w + e[8] * _), 
                e[13] = u[1] + w - (e[1] * H + e[5] * w + e[9] * _), e[14] = u[2] + _ - (e[2] * H + e[6] * w + e[10] * _), 
                e[15] = 1, e;
            }, i.fromQuat = function(e, t) {
                var u = t[0], r = t[1], i = t[2], n = t[3], o = u + u, f = r + r, c = i + i, a = u * o, s = r * o, d = r * f, h = i * o, l = i * f, p = i * c, S = n * o, g = n * f, y = n * c;
                return e[0] = 1 - d - p, e[1] = s + y, e[2] = h - g, e[3] = 0, e[4] = s - y, e[5] = 1 - a - p, 
                e[6] = l + S, e[7] = 0, e[8] = h + g, e[9] = l - S, e[10] = 1 - a - d, e[11] = 0, 
                e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
            }, i.frustum = function(e, t, u, r, i, n, o) {
                var f = 1 / (u - t), c = 1 / (i - r), a = 1 / (n - o);
                return e[0] = 2 * n * f, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 2 * n * c, 
                e[6] = 0, e[7] = 0, e[8] = (u + t) * f, e[9] = (i + r) * c, e[10] = (o + n) * a, 
                e[11] = -1, e[12] = 0, e[13] = 0, e[14] = o * n * 2 * a, e[15] = 0, e;
            }, i.perspective = function(e, t, u, r, i) {
                var n = 1 / Math.tan(t / 2), o = 1 / (r - i);
                return e[0] = n / u, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = n, e[6] = 0, 
                e[7] = 0, e[8] = 0, e[9] = 0, e[10] = (i + r) * o, e[11] = -1, e[12] = 0, e[13] = 0, 
                e[14] = 2 * i * r * o, e[15] = 0, e;
            }, i.perspectiveFromFieldOfView = function(e, t, u, r) {
                var i = Math.tan(t.upDegrees * Math.PI / 180), n = Math.tan(t.downDegrees * Math.PI / 180), o = Math.tan(t.leftDegrees * Math.PI / 180), f = Math.tan(t.rightDegrees * Math.PI / 180), c = 2 / (o + f), a = 2 / (i + n);
                return e[0] = c, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = a, e[6] = 0, e[7] = 0, 
                e[8] = -(o - f) * c * .5, e[9] = (i - n) * a * .5, e[10] = r / (u - r), e[11] = -1, 
                e[12] = 0, e[13] = 0, e[14] = r * u / (u - r), e[15] = 0, e;
            }, i.ortho = function(e, t, u, r, i, n, o) {
                var f = 1 / (t - u), c = 1 / (r - i), a = 1 / (n - o);
                return e[0] = -2 * f, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * c, e[6] = 0, 
                e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * a, e[11] = 0, e[12] = (t + u) * f, e[13] = (i + r) * c, 
                e[14] = (o + n) * a, e[15] = 1, e;
            }, i.lookAt = function(e, t, u, n) {
                var o, f, c, a, s, d, h, l, p, S, g = t[0], y = t[1], b = t[2], v = n[0], T = n[1], m = n[2], E = u[0], O = u[1], H = u[2];
                return Math.abs(g - E) < r.EPSILON && Math.abs(y - O) < r.EPSILON && Math.abs(b - H) < r.EPSILON ? i.identity(e) : (h = g - E, 
                l = y - O, p = b - H, o = T * (p *= S = 1 / Math.sqrt(h * h + l * l + p * p)) - m * (l *= S), 
                f = m * (h *= S) - v * p, c = v * l - T * h, (S = Math.sqrt(o * o + f * f + c * c)) ? (o *= S = 1 / S, 
                f *= S, c *= S) : (o = 0, f = 0, c = 0), a = l * c - p * f, s = p * o - h * c, d = h * f - l * o, 
                (S = Math.sqrt(a * a + s * s + d * d)) ? (a *= S = 1 / S, s *= S, d *= S) : (a = 0, 
                s = 0, d = 0), e[0] = o, e[1] = a, e[2] = h, e[3] = 0, e[4] = f, e[5] = s, e[6] = l, 
                e[7] = 0, e[8] = c, e[9] = d, e[10] = p, e[11] = 0, e[12] = -(o * g + f * y + c * b), 
                e[13] = -(a * g + s * y + d * b), e[14] = -(h * g + l * y + p * b), e[15] = 1, e);
            }, i.str = function(e) {
                return "mat4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ", " + e[9] + ", " + e[10] + ", " + e[11] + ", " + e[12] + ", " + e[13] + ", " + e[14] + ", " + e[15] + ")";
            }, i.frob = function(e) {
                return Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2) + Math.pow(e[3], 2) + Math.pow(e[4], 2) + Math.pow(e[5], 2) + Math.pow(e[6], 2) + Math.pow(e[7], 2) + Math.pow(e[8], 2) + Math.pow(e[9], 2) + Math.pow(e[10], 2) + Math.pow(e[11], 2) + Math.pow(e[12], 2) + Math.pow(e[13], 2) + Math.pow(e[14], 2) + Math.pow(e[15], 2));
            }, e.exports = i;
        }, function(e, t, u) {
            var r, i, n, o, f, c, a = u(1), s = u(4), d = u(7), h = u(8), l = {
                create: function() {
                    var e = new a.ARRAY_TYPE(4);
                    return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e;
                }
            };
            l.rotationTo = (r = d.create(), i = d.fromValues(1, 0, 0), n = d.fromValues(0, 1, 0), 
            function(e, t, u) {
                var o = d.dot(t, u);
                return o < -.999999 ? (d.cross(r, i, t), d.length(r) < 1e-6 && d.cross(r, n, t), 
                d.normalize(r, r), l.setAxisAngle(e, r, Math.PI), e) : o > .999999 ? (e[0] = 0, 
                e[1] = 0, e[2] = 0, e[3] = 1, e) : (d.cross(r, t, u), e[0] = r[0], e[1] = r[1], 
                e[2] = r[2], e[3] = 1 + o, l.normalize(e, e));
            }), l.setAxes = (o = s.create(), function(e, t, u, r) {
                return o[0] = u[0], o[3] = u[1], o[6] = u[2], o[1] = r[0], o[4] = r[1], o[7] = r[2], 
                o[2] = -t[0], o[5] = -t[1], o[8] = -t[2], l.normalize(e, l.fromMat3(e, o));
            }), l.clone = h.clone, l.fromValues = h.fromValues, l.copy = h.copy, l.set = h.set, 
            l.identity = function(e) {
                return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e;
            }, l.setAxisAngle = function(e, t, u) {
                u *= .5;
                var r = Math.sin(u);
                return e[0] = r * t[0], e[1] = r * t[1], e[2] = r * t[2], e[3] = Math.cos(u), e;
            }, l.add = h.add, l.multiply = function(e, t, u) {
                var r = t[0], i = t[1], n = t[2], o = t[3], f = u[0], c = u[1], a = u[2], s = u[3];
                return e[0] = r * s + o * f + i * a - n * c, e[1] = i * s + o * c + n * f - r * a, 
                e[2] = n * s + o * a + r * c - i * f, e[3] = o * s - r * f - i * c - n * a, e;
            }, l.mul = l.multiply, l.scale = h.scale, l.rotateX = function(e, t, u) {
                u *= .5;
                var r = t[0], i = t[1], n = t[2], o = t[3], f = Math.sin(u), c = Math.cos(u);
                return e[0] = r * c + o * f, e[1] = i * c + n * f, e[2] = n * c - i * f, e[3] = o * c - r * f, 
                e;
            }, l.rotateY = function(e, t, u) {
                u *= .5;
                var r = t[0], i = t[1], n = t[2], o = t[3], f = Math.sin(u), c = Math.cos(u);
                return e[0] = r * c - n * f, e[1] = i * c + o * f, e[2] = n * c + r * f, e[3] = o * c - i * f, 
                e;
            }, l.rotateZ = function(e, t, u) {
                u *= .5;
                var r = t[0], i = t[1], n = t[2], o = t[3], f = Math.sin(u), c = Math.cos(u);
                return e[0] = r * c + i * f, e[1] = i * c - r * f, e[2] = n * c + o * f, e[3] = o * c - n * f, 
                e;
            }, l.calculateW = function(e, t) {
                var u = t[0], r = t[1], i = t[2];
                return e[0] = u, e[1] = r, e[2] = i, e[3] = Math.sqrt(Math.abs(1 - u * u - r * r - i * i)), 
                e;
            }, l.dot = h.dot, l.lerp = h.lerp, l.slerp = function(e, t, u, r) {
                var i, n, o, f, c, a = t[0], s = t[1], d = t[2], h = t[3], l = u[0], p = u[1], S = u[2], g = u[3];
                return (n = a * l + s * p + d * S + h * g) < 0 && (n = -n, l = -l, p = -p, S = -S, 
                g = -g), 1 - n > 1e-6 ? (i = Math.acos(n), o = Math.sin(i), f = Math.sin((1 - r) * i) / o, 
                c = Math.sin(r * i) / o) : (f = 1 - r, c = r), e[0] = f * a + c * l, e[1] = f * s + c * p, 
                e[2] = f * d + c * S, e[3] = f * h + c * g, e;
            }, l.sqlerp = (f = l.create(), c = l.create(), function(e, t, u, r, i, n) {
                return l.slerp(f, t, i, n), l.slerp(c, u, r, n), l.slerp(e, f, c, 2 * n * (1 - n)), 
                e;
            }), l.invert = function(e, t) {
                var u = t[0], r = t[1], i = t[2], n = t[3], o = u * u + r * r + i * i + n * n, f = o ? 1 / o : 0;
                return e[0] = -u * f, e[1] = -r * f, e[2] = -i * f, e[3] = n * f, e;
            }, l.conjugate = function(e, t) {
                return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e;
            }, l.length = h.length, l.len = l.length, l.squaredLength = h.squaredLength, l.sqrLen = l.squaredLength, 
            l.normalize = h.normalize, l.fromMat3 = function(e, t) {
                var u, r = t[0] + t[4] + t[8];
                if (r > 0) u = Math.sqrt(r + 1), e[3] = .5 * u, u = .5 / u, e[0] = (t[5] - t[7]) * u, 
                e[1] = (t[6] - t[2]) * u, e[2] = (t[1] - t[3]) * u; else {
                    var i = 0;
                    t[4] > t[0] && (i = 1), t[8] > t[3 * i + i] && (i = 2);
                    var n = (i + 1) % 3, o = (i + 2) % 3;
                    u = Math.sqrt(t[3 * i + i] - t[3 * n + n] - t[3 * o + o] + 1), e[i] = .5 * u, u = .5 / u, 
                    e[3] = (t[3 * n + o] - t[3 * o + n]) * u, e[n] = (t[3 * n + i] + t[3 * i + n]) * u, 
                    e[o] = (t[3 * o + i] + t[3 * i + o]) * u;
                }
                return e;
            }, l.str = function(e) {
                return "quat(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
            }, e.exports = l;
        }, function(e, t, u) {
            var r, i = u(1), n = {
                create: function() {
                    var e = new i.ARRAY_TYPE(3);
                    return e[0] = 0, e[1] = 0, e[2] = 0, e;
                },
                clone: function(e) {
                    var t = new i.ARRAY_TYPE(3);
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
                },
                fromValues: function(e, t, u) {
                    var r = new i.ARRAY_TYPE(3);
                    return r[0] = e, r[1] = t, r[2] = u, r;
                },
                copy: function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e;
                },
                set: function(e, t, u, r) {
                    return e[0] = t, e[1] = u, e[2] = r, e;
                },
                add: function(e, t, u) {
                    return e[0] = t[0] + u[0], e[1] = t[1] + u[1], e[2] = t[2] + u[2], e;
                },
                subtract: function(e, t, u) {
                    return e[0] = t[0] - u[0], e[1] = t[1] - u[1], e[2] = t[2] - u[2], e;
                }
            };
            n.sub = n.subtract, n.multiply = function(e, t, u) {
                return e[0] = t[0] * u[0], e[1] = t[1] * u[1], e[2] = t[2] * u[2], e;
            }, n.mul = n.multiply, n.divide = function(e, t, u) {
                return e[0] = t[0] / u[0], e[1] = t[1] / u[1], e[2] = t[2] / u[2], e;
            }, n.div = n.divide, n.min = function(e, t, u) {
                return e[0] = Math.min(t[0], u[0]), e[1] = Math.min(t[1], u[1]), e[2] = Math.min(t[2], u[2]), 
                e;
            }, n.max = function(e, t, u) {
                return e[0] = Math.max(t[0], u[0]), e[1] = Math.max(t[1], u[1]), e[2] = Math.max(t[2], u[2]), 
                e;
            }, n.scale = function(e, t, u) {
                return e[0] = t[0] * u, e[1] = t[1] * u, e[2] = t[2] * u, e;
            }, n.scaleAndAdd = function(e, t, u, r) {
                return e[0] = t[0] + u[0] * r, e[1] = t[1] + u[1] * r, e[2] = t[2] + u[2] * r, e;
            }, n.distance = function(e, t) {
                var u = t[0] - e[0], r = t[1] - e[1], i = t[2] - e[2];
                return Math.sqrt(u * u + r * r + i * i);
            }, n.dist = n.distance, n.squaredDistance = function(e, t) {
                var u = t[0] - e[0], r = t[1] - e[1], i = t[2] - e[2];
                return u * u + r * r + i * i;
            }, n.sqrDist = n.squaredDistance, n.length = function(e) {
                var t = e[0], u = e[1], r = e[2];
                return Math.sqrt(t * t + u * u + r * r);
            }, n.len = n.length, n.squaredLength = function(e) {
                var t = e[0], u = e[1], r = e[2];
                return t * t + u * u + r * r;
            }, n.sqrLen = n.squaredLength, n.negate = function(e, t) {
                return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e;
            }, n.inverse = function(e, t) {
                return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e;
            }, n.normalize = function(e, t) {
                var u = t[0], r = t[1], i = t[2], n = u * u + r * r + i * i;
                return n > 0 && (n = 1 / Math.sqrt(n), e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n), 
                e;
            }, n.dot = function(e, t) {
                return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
            }, n.cross = function(e, t, u) {
                var r = t[0], i = t[1], n = t[2], o = u[0], f = u[1], c = u[2];
                return e[0] = i * c - n * f, e[1] = n * o - r * c, e[2] = r * f - i * o, e;
            }, n.lerp = function(e, t, u, r) {
                var i = t[0], n = t[1], o = t[2];
                return e[0] = i + r * (u[0] - i), e[1] = n + r * (u[1] - n), e[2] = o + r * (u[2] - o), 
                e;
            }, n.hermite = function(e, t, u, r, i, n) {
                var o = n * n, f = o * (2 * n - 3) + 1, c = o * (n - 2) + n, a = o * (n - 1), s = o * (3 - 2 * n);
                return e[0] = t[0] * f + u[0] * c + r[0] * a + i[0] * s, e[1] = t[1] * f + u[1] * c + r[1] * a + i[1] * s, 
                e[2] = t[2] * f + u[2] * c + r[2] * a + i[2] * s, e;
            }, n.bezier = function(e, t, u, r, i, n) {
                var o = 1 - n, f = o * o, c = n * n, a = f * o, s = 3 * n * f, d = 3 * c * o, h = c * n;
                return e[0] = t[0] * a + u[0] * s + r[0] * d + i[0] * h, e[1] = t[1] * a + u[1] * s + r[1] * d + i[1] * h, 
                e[2] = t[2] * a + u[2] * s + r[2] * d + i[2] * h, e;
            }, n.random = function(e, t) {
                t = t || 1;
                var u = 2 * i.RANDOM() * Math.PI, r = 2 * i.RANDOM() - 1, n = Math.sqrt(1 - r * r) * t;
                return e[0] = Math.cos(u) * n, e[1] = Math.sin(u) * n, e[2] = r * t, e;
            }, n.transformMat4 = function(e, t, u) {
                var r = t[0], i = t[1], n = t[2], o = u[3] * r + u[7] * i + u[11] * n + u[15];
                return o = o || 1, e[0] = (u[0] * r + u[4] * i + u[8] * n + u[12]) / o, e[1] = (u[1] * r + u[5] * i + u[9] * n + u[13]) / o, 
                e[2] = (u[2] * r + u[6] * i + u[10] * n + u[14]) / o, e;
            }, n.transformMat3 = function(e, t, u) {
                var r = t[0], i = t[1], n = t[2];
                return e[0] = r * u[0] + i * u[3] + n * u[6], e[1] = r * u[1] + i * u[4] + n * u[7], 
                e[2] = r * u[2] + i * u[5] + n * u[8], e;
            }, n.transformQuat = function(e, t, u) {
                var r = t[0], i = t[1], n = t[2], o = u[0], f = u[1], c = u[2], a = u[3], s = a * r + f * n - c * i, d = a * i + c * r - o * n, h = a * n + o * i - f * r, l = -o * r - f * i - c * n;
                return e[0] = s * a + l * -o + d * -c - h * -f, e[1] = d * a + l * -f + h * -o - s * -c, 
                e[2] = h * a + l * -c + s * -f - d * -o, e;
            }, n.rotateX = function(e, t, u, r) {
                var i = [], n = [];
                return i[0] = t[0] - u[0], i[1] = t[1] - u[1], i[2] = t[2] - u[2], n[0] = i[0], 
                n[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r), n[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r), 
                e[0] = n[0] + u[0], e[1] = n[1] + u[1], e[2] = n[2] + u[2], e;
            }, n.rotateY = function(e, t, u, r) {
                var i = [], n = [];
                return i[0] = t[0] - u[0], i[1] = t[1] - u[1], i[2] = t[2] - u[2], n[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r), 
                n[1] = i[1], n[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r), e[0] = n[0] + u[0], 
                e[1] = n[1] + u[1], e[2] = n[2] + u[2], e;
            }, n.rotateZ = function(e, t, u, r) {
                var i = [], n = [];
                return i[0] = t[0] - u[0], i[1] = t[1] - u[1], i[2] = t[2] - u[2], n[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r), 
                n[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r), n[2] = i[2], e[0] = n[0] + u[0], 
                e[1] = n[1] + u[1], e[2] = n[2] + u[2], e;
            }, n.forEach = (r = n.create(), function(e, t, u, i, n, o) {
                var f, c;
                for (t || (t = 3), u || (u = 0), c = i ? Math.min(i * t + u, e.length) : e.length, 
                f = u; f < c; f += t) r[0] = e[f], r[1] = e[f + 1], r[2] = e[f + 2], n(r, r, o), 
                e[f] = r[0], e[f + 1] = r[1], e[f + 2] = r[2];
                return e;
            }), n.angle = function(e, t) {
                var u = n.fromValues(e[0], e[1], e[2]), r = n.fromValues(t[0], t[1], t[2]);
                n.normalize(u, u), n.normalize(r, r);
                var i = n.dot(u, r);
                return i > 1 ? 0 : Math.acos(i);
            }, n.str = function(e) {
                return "vec3(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
            }, e.exports = n;
        }, function(e, t, u) {
            var r, i = u(1), n = {
                create: function() {
                    var e = new i.ARRAY_TYPE(4);
                    return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e;
                },
                clone: function(e) {
                    var t = new i.ARRAY_TYPE(4);
                    return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
                },
                fromValues: function(e, t, u, r) {
                    var n = new i.ARRAY_TYPE(4);
                    return n[0] = e, n[1] = t, n[2] = u, n[3] = r, n;
                },
                copy: function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
                },
                set: function(e, t, u, r, i) {
                    return e[0] = t, e[1] = u, e[2] = r, e[3] = i, e;
                },
                add: function(e, t, u) {
                    return e[0] = t[0] + u[0], e[1] = t[1] + u[1], e[2] = t[2] + u[2], e[3] = t[3] + u[3], 
                    e;
                },
                subtract: function(e, t, u) {
                    return e[0] = t[0] - u[0], e[1] = t[1] - u[1], e[2] = t[2] - u[2], e[3] = t[3] - u[3], 
                    e;
                }
            };
            n.sub = n.subtract, n.multiply = function(e, t, u) {
                return e[0] = t[0] * u[0], e[1] = t[1] * u[1], e[2] = t[2] * u[2], e[3] = t[3] * u[3], 
                e;
            }, n.mul = n.multiply, n.divide = function(e, t, u) {
                return e[0] = t[0] / u[0], e[1] = t[1] / u[1], e[2] = t[2] / u[2], e[3] = t[3] / u[3], 
                e;
            }, n.div = n.divide, n.min = function(e, t, u) {
                return e[0] = Math.min(t[0], u[0]), e[1] = Math.min(t[1], u[1]), e[2] = Math.min(t[2], u[2]), 
                e[3] = Math.min(t[3], u[3]), e;
            }, n.max = function(e, t, u) {
                return e[0] = Math.max(t[0], u[0]), e[1] = Math.max(t[1], u[1]), e[2] = Math.max(t[2], u[2]), 
                e[3] = Math.max(t[3], u[3]), e;
            }, n.scale = function(e, t, u) {
                return e[0] = t[0] * u, e[1] = t[1] * u, e[2] = t[2] * u, e[3] = t[3] * u, e;
            }, n.scaleAndAdd = function(e, t, u, r) {
                return e[0] = t[0] + u[0] * r, e[1] = t[1] + u[1] * r, e[2] = t[2] + u[2] * r, e[3] = t[3] + u[3] * r, 
                e;
            }, n.distance = function(e, t) {
                var u = t[0] - e[0], r = t[1] - e[1], i = t[2] - e[2], n = t[3] - e[3];
                return Math.sqrt(u * u + r * r + i * i + n * n);
            }, n.dist = n.distance, n.squaredDistance = function(e, t) {
                var u = t[0] - e[0], r = t[1] - e[1], i = t[2] - e[2], n = t[3] - e[3];
                return u * u + r * r + i * i + n * n;
            }, n.sqrDist = n.squaredDistance, n.length = function(e) {
                var t = e[0], u = e[1], r = e[2], i = e[3];
                return Math.sqrt(t * t + u * u + r * r + i * i);
            }, n.len = n.length, n.squaredLength = function(e) {
                var t = e[0], u = e[1], r = e[2], i = e[3];
                return t * t + u * u + r * r + i * i;
            }, n.sqrLen = n.squaredLength, n.negate = function(e, t) {
                return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = -t[3], e;
            }, n.inverse = function(e, t) {
                return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e[3] = 1 / t[3], e;
            }, n.normalize = function(e, t) {
                var u = t[0], r = t[1], i = t[2], n = t[3], o = u * u + r * r + i * i + n * n;
                return o > 0 && (o = 1 / Math.sqrt(o), e[0] = u * o, e[1] = r * o, e[2] = i * o, 
                e[3] = n * o), e;
            }, n.dot = function(e, t) {
                return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
            }, n.lerp = function(e, t, u, r) {
                var i = t[0], n = t[1], o = t[2], f = t[3];
                return e[0] = i + r * (u[0] - i), e[1] = n + r * (u[1] - n), e[2] = o + r * (u[2] - o), 
                e[3] = f + r * (u[3] - f), e;
            }, n.random = function(e, t) {
                return t = t || 1, e[0] = i.RANDOM(), e[1] = i.RANDOM(), e[2] = i.RANDOM(), e[3] = i.RANDOM(), 
                n.normalize(e, e), n.scale(e, e, t), e;
            }, n.transformMat4 = function(e, t, u) {
                var r = t[0], i = t[1], n = t[2], o = t[3];
                return e[0] = u[0] * r + u[4] * i + u[8] * n + u[12] * o, e[1] = u[1] * r + u[5] * i + u[9] * n + u[13] * o, 
                e[2] = u[2] * r + u[6] * i + u[10] * n + u[14] * o, e[3] = u[3] * r + u[7] * i + u[11] * n + u[15] * o, 
                e;
            }, n.transformQuat = function(e, t, u) {
                var r = t[0], i = t[1], n = t[2], o = u[0], f = u[1], c = u[2], a = u[3], s = a * r + f * n - c * i, d = a * i + c * r - o * n, h = a * n + o * i - f * r, l = -o * r - f * i - c * n;
                return e[0] = s * a + l * -o + d * -c - h * -f, e[1] = d * a + l * -f + h * -o - s * -c, 
                e[2] = h * a + l * -c + s * -f - d * -o, e[3] = t[3], e;
            }, n.forEach = (r = n.create(), function(e, t, u, i, n, o) {
                var f, c;
                for (t || (t = 4), u || (u = 0), c = i ? Math.min(i * t + u, e.length) : e.length, 
                f = u; f < c; f += t) r[0] = e[f], r[1] = e[f + 1], r[2] = e[f + 2], r[3] = e[f + 3], 
                n(r, r, o), e[f] = r[0], e[f + 1] = r[1], e[f + 2] = r[2], e[f + 3] = r[3];
                return e;
            }), n.str = function(e) {
                return "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
            }, e.exports = n;
        }, function(e, t, u) {
            var r, i = u(1), n = {
                create: function() {
                    var e = new i.ARRAY_TYPE(2);
                    return e[0] = 0, e[1] = 0, e;
                },
                clone: function(e) {
                    var t = new i.ARRAY_TYPE(2);
                    return t[0] = e[0], t[1] = e[1], t;
                },
                fromValues: function(e, t) {
                    var u = new i.ARRAY_TYPE(2);
                    return u[0] = e, u[1] = t, u;
                },
                copy: function(e, t) {
                    return e[0] = t[0], e[1] = t[1], e;
                },
                set: function(e, t, u) {
                    return e[0] = t, e[1] = u, e;
                },
                add: function(e, t, u) {
                    return e[0] = t[0] + u[0], e[1] = t[1] + u[1], e;
                },
                subtract: function(e, t, u) {
                    return e[0] = t[0] - u[0], e[1] = t[1] - u[1], e;
                }
            };
            n.sub = n.subtract, n.multiply = function(e, t, u) {
                return e[0] = t[0] * u[0], e[1] = t[1] * u[1], e;
            }, n.mul = n.multiply, n.divide = function(e, t, u) {
                return e[0] = t[0] / u[0], e[1] = t[1] / u[1], e;
            }, n.div = n.divide, n.min = function(e, t, u) {
                return e[0] = Math.min(t[0], u[0]), e[1] = Math.min(t[1], u[1]), e;
            }, n.max = function(e, t, u) {
                return e[0] = Math.max(t[0], u[0]), e[1] = Math.max(t[1], u[1]), e;
            }, n.scale = function(e, t, u) {
                return e[0] = t[0] * u, e[1] = t[1] * u, e;
            }, n.scaleAndAdd = function(e, t, u, r) {
                return e[0] = t[0] + u[0] * r, e[1] = t[1] + u[1] * r, e;
            }, n.distance = function(e, t) {
                var u = t[0] - e[0], r = t[1] - e[1];
                return Math.sqrt(u * u + r * r);
            }, n.dist = n.distance, n.squaredDistance = function(e, t) {
                var u = t[0] - e[0], r = t[1] - e[1];
                return u * u + r * r;
            }, n.sqrDist = n.squaredDistance, n.length = function(e) {
                var t = e[0], u = e[1];
                return Math.sqrt(t * t + u * u);
            }, n.len = n.length, n.squaredLength = function(e) {
                var t = e[0], u = e[1];
                return t * t + u * u;
            }, n.sqrLen = n.squaredLength, n.negate = function(e, t) {
                return e[0] = -t[0], e[1] = -t[1], e;
            }, n.inverse = function(e, t) {
                return e[0] = 1 / t[0], e[1] = 1 / t[1], e;
            }, n.normalize = function(e, t) {
                var u = t[0], r = t[1], i = u * u + r * r;
                return i > 0 && (i = 1 / Math.sqrt(i), e[0] = t[0] * i, e[1] = t[1] * i), e;
            }, n.dot = function(e, t) {
                return e[0] * t[0] + e[1] * t[1];
            }, n.cross = function(e, t, u) {
                var r = t[0] * u[1] - t[1] * u[0];
                return e[0] = e[1] = 0, e[2] = r, e;
            }, n.lerp = function(e, t, u, r) {
                var i = t[0], n = t[1];
                return e[0] = i + r * (u[0] - i), e[1] = n + r * (u[1] - n), e;
            }, n.random = function(e, t) {
                t = t || 1;
                var u = 2 * i.RANDOM() * Math.PI;
                return e[0] = Math.cos(u) * t, e[1] = Math.sin(u) * t, e;
            }, n.transformMat2 = function(e, t, u) {
                var r = t[0], i = t[1];
                return e[0] = u[0] * r + u[2] * i, e[1] = u[1] * r + u[3] * i, e;
            }, n.transformMat2d = function(e, t, u) {
                var r = t[0], i = t[1];
                return e[0] = u[0] * r + u[2] * i + u[4], e[1] = u[1] * r + u[3] * i + u[5], e;
            }, n.transformMat3 = function(e, t, u) {
                var r = t[0], i = t[1];
                return e[0] = u[0] * r + u[3] * i + u[6], e[1] = u[1] * r + u[4] * i + u[7], e;
            }, n.transformMat4 = function(e, t, u) {
                var r = t[0], i = t[1];
                return e[0] = u[0] * r + u[4] * i + u[12], e[1] = u[1] * r + u[5] * i + u[13], e;
            }, n.forEach = (r = n.create(), function(e, t, u, i, n, o) {
                var f, c;
                for (t || (t = 2), u || (u = 0), c = i ? Math.min(i * t + u, e.length) : e.length, 
                f = u; f < c; f += t) r[0] = e[f], r[1] = e[f + 1], n(r, r, o), e[f] = r[0], e[f + 1] = r[1];
                return e;
            }), n.str = function(e) {
                return "vec2(" + e[0] + ", " + e[1] + ")";
            }, e.exports = n;
        } ]);
    }, e.exports = r();
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(5), i = u(18), n = function() {
        function e(e, t, u) {
            this.bgCanvas = e, this.drawBackground = t, this.visualContext = u, this.bgContext = this.layerFromCanvas2d(e), 
            this.clearBackground();
        }
        return e.prototype.layerFromCanvas2d = function(e) {
            var t = this.canvasWidth(), u = this.canvasHeight();
            e.width = t, e.height = u;
            var r = e.getContext("2d");
            return r && (r.translate(0, u), r.scale(i.HSMain.dpi, -1 * i.HSMain.dpi)), r;
        }, e.prototype.canvasWidth = function() {
            return r.HSStageScene.stageWidth * i.HSMain.dpi;
        }, e.prototype.canvasHeight = function() {
            return r.HSStageScene.stageHeight * i.HSMain.dpi;
        }, e.prototype.renderFrame = function() {
            e.shouldClear && (this.clearBackground(), e.shouldClear = !1), this.drawBackground();
        }, e.prototype.clearBackground = function() {
            this.bgContext && (this.bgContext.fillStyle = "white", this.bgContext.fillRect(0, 0, this.bgCanvas.width, this.bgCanvas.height));
        }, e.prototype.drawLine = function(e, t) {
            var u = this.bgContext;
            u.beginPath(), u.moveTo.apply(u, e.point), e.point[0] === t.point[0] && e.point[1] === t.point[1] ? (u.fillStyle = t.colorReference.drawingColor, 
            u.arc(t.point[0], t.point[1], t.radius, 0, 2 * Math.PI), u.fill()) : (u.lineWidth = 2 * t.radius, 
            u.lineCap = "round", u.strokeStyle = t.colorReference.drawingColor, u.lineTo.apply(u, t.point), 
            u.stroke());
        }, e.shouldClear = !1, e.MAX_TEXTURE_SIDE_LENGTH = 1024, e;
    }();
    t.HopscotchDrawingContext = n, window.HopscotchDrawingContext = n;
}, function(e, t, u) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), function(e) {
        e[e.Default = 42] = "Default", e[e.LineWidth = 43] = "LineWidth", e[e.LineColor = 44] = "LineColor", 
        e[e.RandomLow = 45] = "RandomLow", e[e.RandomHigh = 46] = "RandomHigh", e[e.Variable = 47] = "Variable", 
        e[e.VariableValue = 48] = "VariableValue", e[e.Conditional = 49] = "Conditional", 
        e[e.HSObject = 50] = "HSObject", e[e.Sound = 51] = "Sound", e[e.Event = 52] = "Event", 
        e[e.SetText = 53] = "SetText", e[e.Object = 54] = "Object", e[e.TextOnly = 55] = "TextOnly", 
        e[e.Scene = 56] = "Scene";
    }(r = t.HSParameterType || (t.HSParameterType = {})), window.HSParameterType = r;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(6), o = u(39), f = u(10), c = u(13), a = u(33), s = u(58), d = u(40), h = u(0);
    t.BLOCKS_KEY = "blocks";
    var l = function(e) {
        function u() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.blocks = [], t;
        }
        return i(u, e), u.prototype.stageScript = function() {
            return new s.HSStageScript(this);
        }, u.prototype.addObjectIDFromJSON = function(e) {
            void 0 === e && (e = {}), this.objectID = e[f.SCRIPT_ID_KEY];
        }, u.prototype.isImmediatelyRecursive = function() {
            return this.blocks.length > 0 && this.blocks[0].scripts && this.blocks[0].scripts[0] === this || !this.firstMethod(0);
        }, u.prototype.firstMethod = function(e) {
            if (e > 30) return null;
            var t = this.blocks[0];
            return t ? t.isControl ? t.scripts[0] ? t.scripts[0].firstMethod(e + 1) : null : t : this;
        }, u.prototype.containsChangeCostume = function(e) {
            void 0 === e && (e = {});
            for (var t = 0; t < this.blocks.length; t++) {
                var u = this.blocks[t];
                if (u.type === h.HSBlockType.ChangeCostume) return !0;
                var r = u;
                if (r.scripts) for (var i = 0; i < r.scripts.length; i++) {
                    var n = r.scripts[i], o = n.objectID;
                    if (!e[o] && (e[o] = !0, n.containsChangeCostume(e))) return !0;
                }
            }
            return !1;
        }, u.prototype.parseJSON = function(e) {
            var u = this;
            void 0 === e && (e = {}), (e[t.BLOCKS_KEY] || []).forEach(function(e) {
                var t;
                switch (c.HSBlock.blockClassForDict(e)) {
                  case c.HSBlockClass.Control:
                    t = new a.HSControlBlock(u.context);
                    break;

                  case c.HSBlockClass.Method:
                    t = new d.HSMethodBlock(u.context);
                    break;

                  case c.HSBlockClass.ConditionalControl:
                    t = new o.HSConditionalControl(u.context);
                }
                t.parseJSON(e), u.blocks.push(t);
            });
        }, u.key = "HSScript", u;
    }(n.HSManagedObject);
    t.HSScript = l, window.HSScript = l, window.BLOCKS_KEY = t.BLOCKS_KEY;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(2), i = u(21), n = u(1), o = u(56), f = u(36), c = u(5), a = u(22), s = u(37), d = u(29), h = u(11), l = u(24), p = u(0), S = u(14);
    function g(e) {
        var t = new XMLHttpRequest();
        t.open("GET", "https://d2j12ek52gvmx9.cloudfront.net/emojis/d83d-de0e.png" /*AE_MOD fix emojis but ok cors "/assets/d83d-de0e.png"*/, !0), t.onreadystatechange = function() {
            4 === t.readyState && e(200 === t.status);
        }, t.onerror = function() {
            e(!1);
        }, t.send(null);
    }
    u(60), window.addEventListener("load", function() {
        for (var e = document.querySelectorAll("hopscotch-player"), u = e.length; --u >= 0; ) window.main = t.main = new y(e[u]), 
        window.addEventListener("resize", function() {
            return n.HSApp.sendToApp("resize", "true");
        });
    }), t.hsCanLoadEmojis = g, window.addEventListener("error", function(e) {
        var u = t.main.projectData.uuid;
        return console.error("ERROR", e, "uuid", u), n.HSApp.sendToApp("error", JSON.stringify(e) + ";uuid: " + u), 
        !1;
    });
    var y = function() {
        function e(t) {
            this.root = t, this.context = new r.HSProjectContext(), this.isMaximized = !1, this.hasDrawn = !1, 
            this.setiOSStageSizeIfNecessary();
            var u = document.getElementById("project_data");//, i = t.dataset.projectJson || u && u.getAttribute("data");
            
			var i = JSON.stringify(AE_MOD.projectData); //AE_MOD - This sets the project data
			
			i && (this.load(JSON.parse(i)), n.HSApp.sendToApp("playerState", "loaded")), this.setSizeFromDataAttrs(), 
            this.background = this.createCanvas("background"), this.screenshot = this.createCanvas("screenshot"), 
            this.canvas = this.createCanvas("foreground"), window.gliEmbedDebug ? this.renderer = new PIXI.WebGLRenderer(c.HSStageScene.stageWidth, c.HSStageScene.stageHeight, {
                resolution: e.dpi,
                transparent: !0,
                view: this.canvas
            }) : this.renderer = PIXI.autoDetectRenderer(c.HSStageScene.stageWidth, c.HSStageScene.stageHeight, {
                resolution: e.dpi,
                backgroundColor: null,
                transparent: !0,
                view: this.canvas
            }), this.screenshotRenderer = new PIXI.CanvasRenderer(c.HSStageScene.stageWidth, c.HSStageScene.stageHeight, {
                resolution: e.dpi,
                backgroundColor: null,
                transparent: !0,
                view: this.screenshot
            });
            var o = document.getElementById("play_container");
            o && (o.style.width = "100%", o.style.height = "100%");
            var f = this.drawBackground.bind(this);
            try {
                this.visualContext = new l.HSVisualContext(this.background, f);
            } catch (e) {
                console.log("No gl found in this context: ", e);
            }
        }
        return e.prototype.setSizeFromDataAttrs = function() {
            this.resizeRoot(+this.root.getAttribute("width"), +this.root.getAttribute("height"));
        }, e.prototype.createCanvas = function(e) {
            var t = document.createElement("canvas");
            return t.setAttribute("name", e), t.style.background = "transparent", t.style.position = "absolute", 
            t.style.top = "0", t.style.left = "0", t.style.width = "100%", t.style.height = "100%", 
            this.root.appendChild(t), t;
        }, e.prototype.resizeScreen = function() { //AE_MOD
			main.resizeRoot(window.innerWidth, window.innerHeight);
		}, e.prototype.toggleFullscreen = function() {
            this.isFullscreen() ? this.exitFullscreen() : this.enterFullscreen(window.innerWidth, window.innerHeight);
        }, e.prototype.isFullscreen = function() {
            return !!document.fullscreenElement || (!!document.webkitFullscreenElement || (!!document.mozFullScreenElement || (!!document.msFullScreenElement || this.isMaximized)));
        }, e.prototype.enterFullscreen = function(e, t) {
            f.HSCollisionContext.DEBUG || this.enterFullscreenAction(this.root, e, t);
        }, e.prototype.enterFullscreenAction = function(e, t, u) {
			e = e.parentNode; //AE_MOD Container fullscreen to fix UI touch
            var r = t || window.innerWidth, i = u || window.innerHeight;
            if (this.resizeRoot(r, i), (e = e).requestFullscreen) e.requestFullscreen(); else if (e.mozRequestFullScreen) e.mozRequestFullScreen(); else if (e.webkitRequestFullscreen) e.webkitRequestFullscreen(); else if (e.msRequestFullscreen) e.msRequestFullscreen(); else {
                this.isMaximized = !0, this.resizeRoot(r, i), this.root.style.position = "absolute", 
                this.centerOnScreen(r, i);
                for (var n = 0; n < document.body.children.length; n++) document.body.children[n].style.visibility = "hidden";
                document.body.style.backgroundColor = "black", this.root.style.visibility = "visible", 
                document.dispatchEvent(new Event("fullscreenchange"));
            }
        }, e.prototype.exitFullscreen = function() {
            if (this.setSizeFromDataAttrs(), document.exitFullscreen) document.exitFullscreen(); else if (document.msExitFullscreen) document.msExitFullscreen(); else if (document.mozCancelFullScreen) document.mozCancelFullScreen(); else if (document.webkitExitFullscreen) document.webkitExitFullscreen(); else {
                this.isMaximized = !1, this.root.style.position = "", this.root.style.top = "", 
                this.root.style.left = "";
                for (var e = 0; e < document.body.children.length; e++) document.body.children[e].style.visibility = "";
                document.body.style.backgroundColor = "", this.root.style.visibility = "", document.dispatchEvent(new Event("fullscreenchange"));
            }
        }, e.prototype.resizeRoot = function(t, u) {
            var r;
            void 0 === t && (t = this._oldWidth), void 0 === u && (u = this._oldHeight), this._oldWidth = t, 
            this._oldHeight = u;
            var i = c.HSStageScene.stageWidth, n = c.HSStageScene.stageHeight;
            t || u ? t && !u ? u = t * n / i : !t && u && (t = u * i / n) : (t = window.innerWidth - 20, 
            u = window.innerHeight - 250), r = Math.min(u / n, t / i);
            var o = Math.max(Math.floor(i * r), e.MIN_STAGE_WIDTH), f = o * n / i;
            this.root.style.width = Math.floor(o) + "px", this.root.style.height = Math.floor(f) + "px", 
            this.isMaximized && this.centerOnScreen(t, u);
        }, e.prototype.centerOnScreen = function(e, u) {
            var r = e || window.innerWidth, i = u || window.innerHeight;
            this.root.style.top = Math.floor((i - t.main.root.offsetHeight) / 2) + "px", this.root.style.left = Math.floor((r - t.main.root.offsetWidth) / 2) + "px";
        }, e.prototype.load = function(e) {
            this.projectData = e, this.context = new r.HSProjectContext(), this.project = new d.HSProject(this.context, e), 
            s.HSSoundManager.sharedInstance = new s.HSSoundManager(this.context.allSoundNames());
        }, e.prototype.mute = function() {
            s.HSSoundManager.sharedInstance.mute();
        }, e.prototype.unmute = function() {
            s.HSSoundManager.sharedInstance.unmute();
        }, e.prototype.isMuted = function() {
            return s.HSSoundManager.sharedInstance.isMuted;
        }, e.prototype.setiOSStageSizeIfNecessary = function() {
            if ("container" === this.root.getAttribute("stage-size")) {
                var e = this.root.getBoundingClientRect();
                c.HSStageScene.stageWidth = e.width, c.HSStageScene.stageHeight = e.height;
            }
        }, e.prototype.willPlay = function(e) {
            window.project_error && (window.project_error.style.display = "none"), e && this.load(e), 
            this.stageProject = new h.HSStageProject(this.project), this.stageProject.activateAllRulesForEventType(p.HSBlockType.EventOperatorStart), 
            this.stageProject.executeAllActiveRules(), this.hasDrawn || this.prepareForFirstPlay(), 
            this.registerEventCallbacks();
        }, e.prototype.prepareForFirstPlay = function() {
            var e = this, t = [], u = this.renderer;
            this.stageProject.activeStageScene.stageObjects.forEach(function(e) {
                var r = e.view.buildAllTextures().then(function(e) {
                    for (var t = 0; t < e.length; t++) u.bindTexture && u.bindTexture(e[t]);
                });
                t.push(r);
            }), Promise.all(t).then(function() {
                e.hasDrawn = !0, n.HSApp.sendToApp("playerState", "ready");
            }).catch(function(e) {
                setTimeout(function() {
                    throw "error building initial textures " + JSON.stringify(e);
                });
            });
        }, e.prototype.startProject = function() {
            this.animationTick();
        }, e.prototype.play = function(t) {
            var u = this;
            g(function(r) {
                r || (e.HS_EMOJI_HOST = location.protocol + "//d2j12ek52gvmx9.cloudfront.net/emojis"), 
                u.resetStage(), u.willPlay(t), u.startProject();
            });
        }, e.prototype.resetStage = function() {
            this.animationFrameReq && (this.visualContext.drawingContext.clearBackground(), 
            window.cancelAnimationFrame(this.animationFrameReq), this.animationFrameReq = null);
        }, e.prototype.drawBackground = function() {
            var e = this;
            if (a.DEBUG_DRAW_BOUNDING_BOXES) {
                var t = this.background;
                this.visualContext.drawingContext.bgContext.clearRect(0, 0, t.width, t.height);
            }
            this.stageProject.activeStageScene.stageObjects.forEach(function(t) {
                t.drawPath(e.visualContext.drawingContext);
            });
        }, e.prototype.registerEventCallbacks = function() {
            var e = this;
            (this.project.context.hasAccelerometerEvent() || this.project.context.hasAccelerometerTrait()) && i.HSAccelerometerManager.startAccelerometerUpdates(), 
            this.listeners && this.listeners.unregister(), this.listeners = o.UIRegisterEventCallbacks(this.root, {
                pointerDown: function(t) {
                    e.stageProject && (e.stageProject.receiveClickEvent(t, e.visualContext.collisionContext), 
                    e.stageProject.receiveTouchDownEvent(t, e.visualContext.collisionContext));
                },
                pointerUp: function(t) {
                    e.stageProject && e.stageProject.receiveTouchUpEvent(t, e.visualContext.collisionContext);
                },
                pointerDrag: function(t) {
                    e.stageProject && e.stageProject.receiveTouchMoveEvent(t, e.visualContext.collisionContext);
                },
                pointerCancel: function(t) {
                    e.stageProject && e.stageProject.receiveTouchUpEvent(t, e.visualContext.collisionContext);
                }
            });
        }, e.prototype.animationTick = function() {
            this.stageProject.animationTick(this.visualContext.collisionContext), this.renderer.render(this.stageProject.activeStageScene.container), 
            this.visualContext.drawingContext.renderFrame(), this.requestNextFrame();
        }, e.prototype.requestNextFrame = function() {
            var e = this;
            this.animationFrameReq = window.requestAnimationFrame(function(t) {
                e.animationTick();
            });
        }, e.prototype.takeScreenshot = function() {
            this.screenshotRenderer.render(this.stageProject.activeStageScene.container), this.screenshot.style.zIndex = "99999", 
            this.canvas.style.opacity = "0", this.screenshot.style.opacity = "1", setTimeout(n.HSApp.sendToApp.bind(void 0, "screenshot", "done"), 400);
        }, e.prototype.releaseScreenshot = function() {
            this.screenshot.style.zIndex = "-99999", this.canvas.style.opacity = "1", this.screenshot.style.opacity = "0";
        }, e.HS_EMOJI_HOST = "", e.MIN_STAGE_WIDTH = 210, e.dpi = Math.min(window.devicePixelRatio, 2), 
        e;
    }();
    t.HSMain = y, window.HSMain = y, window.vec2 = S.vec2, window.vec4 = S.vec4;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n, o = u(1), f = u(18), c = u(20), a = u(4), s = function() {
        this.width = 0;
    };
    t.HSLineBox = s, function(e) {
        e[e.center = 1] = "center", e[e.left = 2] = "left";
    }(n = t.HSTextJustify || (t.HSTextJustify = {}));
    var d = function() {
        function e(e, t) {
            return this.text = e, this.kind = t, t === c.HSTextNodeKind.emoji ? new h(e) : t === c.HSTextNodeKind.geometricShape ? new l(e) : void 0;
        }
        return e.prototype.prevWhitespace = function() {
            return this.kind === c.HSTextNodeKind.whitespace ? this : this.kind !== c.HSTextNodeKind.newline && this.prev ? this.prev.prevWhitespace() : null;
        }, e.prototype.tail = function() {
            return this.next ? this.next.tail() : this;
        }, e.concat = function(e, t) {
            if (e) {
                var u = e.tail();
                u.next = t, t && (t.prev = u);
            }
            return e || t;
        }, e.prototype.concat = function(t) {
            return e.concat(this, t);
        }, e.prototype.replace = function(e) {
            e.prev = this.prev, e.prev && (e.prev.next = e);
            var t = e.tail();
            return t.next = this.next, t.next && (t.next.prev = t), e;
        }, e.prototype.flow = function(t, u, r) {
            r = r || n.center;
            var i = this, o = {
                width: 0,
                height: 0
            };
            function f() {
                var u = i.x + i.measure(t).width, r = i.y + e.LINE_HEIGHT;
                o = {
                    width: Math.max(u, o.width),
                    height: r
                }, i = i.next;
            }
            for (;i; ) {
                var a = i.measure(t);
                if (i.prev) {
                    var d = i.prev.measure(t).width;
                    i.x = i.prev.x + d, i.y = i.prev.y, i.lineBox = i.prev.lineBox;
                } else i.x = 0, i.y = 0, i.lineBox = new s();
                if (i.lineBox.width = i.x + a.width, i.kind === c.HSTextNodeKind.newline) i.y += e.LINE_HEIGHT, 
                i.x = 0, i.lineBox = new s(), f(); else if (i.x + a.width > u) {
                    var h = i.prevWhitespace();
                    if (h) {
                        var l = new e("\n", c.HSTextNodeKind.newline);
                        i = h.replace(l);
                    } else i = i.replace(i.forceLineBreak(t, u));
                } else f();
            }
            return r === n.center && this.center(o), o;
        }, e.prototype.center = function(e) {
            this.x += (e.width - this.lineBox.width) / 2, this.next && this.next.center(e);
        }, e.prototype.measure = function(e) {
            return this.kind === c.HSTextNodeKind.newline ? {
                width: 0
            } : e.measureText(this.text);
        }, e.prototype.allNodes = function() {
            return (this.next ? this.next.allNodes() : []).concat(this);
        }, e.prototype.draw = function(e) {
            return Promise.all(this.allNodes().map(function(t) {
                return t.drawNode(e);
            }));
        }, e.prototype.drawNode = function(e) {
            return e.fillText(this.text, this.x, this.y), null;
        }, e.prototype.forceLineBreak = function(t, u) {
            for (var r = "", i = this.text, n = 0; n !== i.length; ++n) {
                var o = r + i[n];
                if (t.measureText(o).width > u) {
                    var f = e.parse(r).head, a = new e("\n", c.HSTextNodeKind.newline);
                    f.concat(a);
                    var s = new e(this.text.substr(r.length), this.kind);
                    return a.concat(s), f;
                }
                r = o;
            }
            return this;
        }, e.prototype.toString = function() {
            return this.text + (this.next ? this.next.toString() : "");
        }, e.fromString = function(t) {
            return e.parse(t).head;
        }, e.parse = function(t) {
            var u, r;
            return c.HSTokenizer.tokenize(t).forEach(function(t) {
                var i = new e(t.text, t.kind);
                e.concat(u, i), u = i, r || (r = u);
            }), {
                head: r,
                tail: u
            };
        }, e.MAX_LINE_WIDTH = 600, e.LINE_HEIGHT = 55, e;
    }();
    t.HSTextNode = d;
    var h = function(e) {
        function t(t) {
            var u = e.call(this, t, null) || this;
            return u.kind = c.HSTextNodeKind.emoji, u;
        }
        return i(t, e), t.prototype.drawNode = function(u) {
            var r = this;
            return t.getImage({
                text: this.text,
                color: a.HSColor.hsbStringFromRgbString(u.fillStyle)
            }).then(function(e) {
                var i = o.iOSApp ? e.width : t.WIDTH, n = o.iOSApp ? e.height : t.HEIGHT;
                u.drawImage(e, r.x, r.y, i, n);
            }).catch(function(t) {
                return e.prototype.drawNode.call(r, u);
            });
        }, t.getImageInfo = function(e) {
            return o.iOSApp ? o.requestTextureFromApp({
                type: "emoji",
                props: e
            }).then(function(e) {
                return {
                    dataURI: e.dataURI,
                    scaleFactor: window.devicePixelRatio
                };
            }) : Promise.resolve({
                dataURI: o.emoji.getImage(e.text),
                scaleFactor: 1
            });
        }, t.getImage = function(e) {
            return this.getImageInfo(e).then(function(e) {
                var t = e.dataURI;
                return f.HSMain.HS_EMOJI_HOST && (t = t.replace("/assets", f.HSMain.HS_EMOJI_HOST)), 
                o.getImageFromUri(t).then(function(t) {
                    return t.width /= e.scaleFactor, t.height /= e.scaleFactor, t;
                });
            });
        }, t.prototype.measure = function(e) {
            return {
                width: t.WIDTH
            };
        }, t.prototype.forceLineBreak = function(e, u) {
            var r = d.fromString("\n"), i = new t(this.text);
            return r.concat(i), r;
        }, t.HEIGHT = 40, t.WIDTH = 40, t;
    }(d);
    t.HSEmojiTextNode = h;
    var l = function(e) {
        function t(t) {
            var u = e.call(this, t, null) || this;
            return u.kind = c.HSTextNodeKind.geometricShape, u.kind = c.HSTextNodeKind.geometricShape, 
            u;
        }
        return i(t, e), t.prototype.drawNode = function(e) {
            var u = e.font, r = +e.font.match(/^\d*/), i = Math.round(r * this.getScaleFactor()), n = this.measure(e).width;
            e.font = i + "px " + t.FONT_FAMILIES.join(", ");
            var o = e.measureText(this.text).width;
            return e.fillText(this.text, this.x + (n - o) / 2, this.y + n - o + 1.5), e.font = u, 
            Promise.resolve(null);
        }, t.prototype.getScaleFactor = function() {
            return "■" === this.text ? .85 : .81;
        }, t.prototype.measure = function(e) {
            var u = e.font, r = +e.font.match(/^\d*/);
            e.font = r + "px " + t.FONT_FAMILIES.join(", ");
            var i = e.measureText(this.text);
            return e.font = u, i;
        }, t.FONT_FAMILIES = [ "Avenir-Book", "STIXGeneral", "sans-serif" ], t;
    }(d);
    t.HSGeometricShapeTextNode = l, window.HSLineBox = s, window.HSTextJustify = n, 
    window.HSTextNode = d, window.HSEmojiTextNode = h, window.HSGeometricShapeTextNode = l;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r, i = u(1);
    !function(e) {
        e[e.text = 0] = "text", e[e.whitespace = 1] = "whitespace", e[e.newline = 2] = "newline", 
        e[e.emoji = 3] = "emoji", e[e.geometricShape = 4] = "geometricShape";
    }(r = t.HSTextNodeKind || (t.HSTextNodeKind = {}));
    var n = function(e, t) {
        this.text = e, this.kind = t;
    };
    t.HSToken = n;
    var o = function() {
        function e() {}
        return e.hasDrawableTokens = function(t) {
            return null != t && /\S/.test(t) && !e.ONLY_VARIATION_SELECTORS.test(t);
        }, e.tokenize = function(t) {
            if (this.tokenizedStringsCache.has(t)) return this.tokenizedStringsCache.get(t);
            var u, o = [], f = 0, c = null;
            for (u = 0; u < t.length; u++) if (" " === t[u] || "	" === t[u]) c !== r.whitespace && (u > f && o.push(new n(t.substring(f, u), c)), 
            f = u, c = r.whitespace); else if ("\n" === t[u]) u > f && c !== r.whitespace && o.push(new n(t.substring(f, u), c)), 
            f = u, c = r.newline; else if (e.ZERO_WIDTH_JOINER.test(t[u]) && c === r.emoji) u += 1, 
            this.isEmojiStartIndex(t, u) && (u += t.slice(u, u + 5).match(i.emoji.regex)[0].length - 1); else if (e.ONLY_VARIATION_SELECTORS.test(t[u]) && c !== r.text) {
                if (u > f) {
                    var a = u;
                    c === r.emoji && (a = u + 1), o.push(new n(t.substring(f, a), c));
                }
                f = u + 1, c = null;
            } else if (this.isEmojiStartIndex(t, u)) {
                u > f && o.push(new n(t.substring(f, u), c)), f = u, c = r.emoji;
                var s = 5;
                this.isUnicodeEmojiStartIndex(t, u) && (s = 2);
                var d = t.slice(u, u + s), h = e.emojiMatch(d);
                if (h) u += d.indexOf(h[0]) + (h[0].length - 1);
            } else !i.iOS && e.GEOMETRIC_SHAPES.test(t[u]) ? (u > f && o.push(new n(t.substring(f, u), c)), 
            f = u, c = r.geometricShape) : c !== r.text && (u > f && o.push(new n(t.substring(f, u), c)), 
            f = u, c = r.text);
            return u > f && null !== c && o.push(new n(t.substring(f, u), c)), this.clearTokenCacheIfNecessary(), 
            this.tokenizedStringsCache.set(t, o), o;
        }, e.clearTokenCacheIfNecessary = function() {
            this.tokenizedStringsCache.size > 30 && this.tokenizedStringsCache.delete(this.tokenizedStringsCache.keys().next().value);
        }, e.isEmojiStartIndex = function(t, u) {
            var r = t.slice(u, u + 5);
            return e.startsWithEmojiRegex.test(r) || e.secondCharIsSurrogate.test(r);
        }, e.isUnicodeEmojiStartIndex = function(t, u) {
            var r = t.slice(u, u + 5);
            return !(e.startsWithEmojiRegex.test(r) || e.fitzRegex.test(r));
        }, e.emojiMatch = function(t) {
            return t.match(i.emoji.regex) || t.match(e.secondCharIsSurrogate);
        }, e.rangeOfFirstEmojiStartingAtIndex = function(e, t) {
            var u = e.slice(t, t + 7).match(/[\ufe00-\ufe0f\u200d\u2640]$/);
            return 0 === u.length ? t : e.indexOf(u[0]) + 1;
        }, e.ONLY_VARIATION_SELECTORS = /^[\ufe00-\ufe0f]*$/, e.ZERO_WIDTH_JOINER = /[\u200d]/, 
        e.GEOMETRIC_SHAPES = /[\u25A0-\u25CF\u25E0-\u25E1\u25E6-\u25FF]/, e.tokenizedStringsCache = new Map(), 
        e.highSurrogates = "�-�", e.lowSurrogates = String.fromCharCode(56320) + "-" + String.fromCharCode(57343), 
        e.surrogateRegex = RegExp("[" + e.lowSurrogates + e.highSurrogates + "]"), e.secondCharIsSurrogate = RegExp("^.[" + e.lowSurrogates + "]"), 
        e.startsWithEmojiRegex = RegExp("^" + i.emoji.regex.source), e.fitzpatricks = String.fromCharCode(55356) + "[" + String.fromCharCode(57088) + "-" + String.fromCharCode(57343) + "]", 
        e.fitzRegex = RegExp("" + e.fitzpatricks), e;
    }();
    t.HSTokenizer = o, window.HSTextNodeKind = r, window.HSToken = n, window.HSTokenizer = o;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(1), i = function() {
        function e() {}
        return e.listener = function(e) {
            var t = e.accelerationIncludingGravity, u = Math.hypot(t.x, t.y, t.z) || 9.8, r = Math.round(100 * t.x / u), i = Math.round(100 * t.y / u), n = window.orientation;
            null == n || -90 === n ? (this.tiltUp = r, this.tiltRight = i) : 90 === n ? (this.tiltUp = -r, 
            this.tiltRight = -i) : 0 === n ? (this.tiltUp = -i, this.tiltRight = r) : (this.tiltUp = i, 
            this.tiltRight = -r), this.tiltDown = -this.tiltUp, this.tiltLeft = -this.tiltRight, 
            this.updateShakeData(e.acceleration.x, e.acceleration.y, e.acceleration.z);
        }, e.startAccelerometerUpdates = function() {
            "DeviceMotionEvent" in window && !this.isListening && (this.isListening = !0, window.addEventListener("devicemotion", this.listener.bind(this), !1));
        }, e.tiltDirection = function() {
            if (!this.tiltRight || !this.tiltUp) return null;
            return r.hs_direction(this.tiltRight, this.tiltUp, 30);
        }, e.updateShakeData = function(t, u, r) {
            this.xAccelerations.push(t), this.yAccelerations.push(u), this.zAccelerations.push(r), 
            this.xAccelerations.length > e.SHAKE_MEMORY_COUNT && this.xAccelerations.shift(), 
            this.yAccelerations.length > e.SHAKE_MEMORY_COUNT && this.yAccelerations.shift(), 
            this.zAccelerations.length > e.SHAKE_MEMORY_COUNT && this.zAccelerations.shift();
        }, e.isShaking = function() {
            return [ this.xAccelerations, this.yAccelerations, this.zAccelerations ].some(function(t) {
                return Math.abs(r.mean(t)) < e.SUDDEN_ACCEL_THRESHOLD && r.variance(t) > e.SHAKE_SENSITIVITY;
            });
        }, e.isListening = !1, e.tiltUp = 0, e.tiltDown = 0, e.tiltLeft = 0, e.tiltRight = 0, 
        e.xAccelerations = [], e.yAccelerations = [], e.zAccelerations = [], e.SHAKE_MEMORY_COUNT = 10, 
        e.SHAKE_SENSITIVITY = 60, e.SUDDEN_ACCEL_THRESHOLD = 2, e;
    }();
    t.HSAccelerometerManager = i, window.HSAccelerometerManager = i;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(34), i = u(3), n = u(1), o = u(20), f = u(5), c = u(35), a = u(19), s = u(15), d = u(46), h = u(47), l = u(7), p = u(48), S = u(0), g = u(4);
    t.BASE_SPEED = 400, t.BASE_STEP_SIZE = 10, t.EDGE_OF_SCREEN_OBJECT_ID = "zzzEdge", 
    t.DEBUG_DRAW_BOUNDING_BOXES = !1;
    var y = function() {
        function e(u, i, n, o, f, s, d, p, S, g, y) {
            var b = this;
            void 0 === g && (g = 1), void 0 === y && (y = 1), this.x = u, this.y = i, this.text = n, 
            this.type = o, this.baseObjectScale = f, this.fontSize = s, this.objectID = d, this.imageName = p, 
            this.willChangeCostume = S, this.originalWidth = g, this.originalHeight = y, this.createOrder = -1, 
            this._animationNumber = 0, this.sizePercentWidth = 100, this.sizePercentHeight = 100, 
            this.headingInDegrees = 0, this.speed = t.BASE_SPEED, this.invisibilityPercent = 0, 
            this.isFlipped = !1, this.drawingRadius = null, this.drawingColor = null, this.penDown = !1, 
            this.creationTick = null, this.relatedCollisionRules = new Set(), this.collisionImageFactory = new h.HSCollisionImageFactory(), 
            this.stageRules = [], this.cloneIndex = 1, this.zIndex = 0, this.isAlive = !0, this.resetTextSize = function() {
                var e = a.HSTextNode.fromString(b.text), t = b.view.canvas;
                if (t) {
                    if (e) {
                        var u = e.flow(t.getContext("2d"), a.HSTextNode.MAX_LINE_WIDTH), r = u.width, i = u.height;
                        b.originalWidth = r, b.originalHeight = i;
                    }
                } else b.view.onTextureBuild = b.resetTextSize;
            }, e.initEdges(), this.createOrder = ++e.OBJECTS_CREATED, this.color = this.colorForType(o), 
            this.stageObjectID = e.uniqueIdCounter++, this.type === l.HSObjectType.text ? this.text = n : this.text = null, 
            this.pathDrawer = new r.HSPathDrawer(this.currentPoint()), this.view = new c.HSView(this.viewProps());
        }
        return e.initEdges = function() {
            e.initiatedEdgeOfScreen || (e.initiatedEdgeOfScreen = !0, e.edgeOfScreenObject = new e(0, 0, "", l.HSObjectType.edgeOfScreen, 1, 80, t.EDGE_OF_SCREEN_OBJECT_ID, null, !1));
        }, e.prototype.setWidth = function(e) {
            0 === e && (e = .01), e && (this.sizePercentWidth = e / this.originalWidth * (1 / this.baseScale()) * 100);
        }, e.prototype.setHeight = function(e) {
            0 === e && (e = .01), e && (this.sizePercentHeight = e / this.originalHeight * (1 / this.baseScale()) * 100);
        }, e.prototype.width = function() {
            return this.view.textureExists ? this.view.width() : Math.round(this.originalWidth * this.baseScale());
        }, e.prototype.height = function() {
            return this.view.textureExists ? this.view.height() : Math.round(this.originalHeight * this.baseScale());
        }, e.prototype.colorForType = function(e) {
            return this.type === l.HSObjectType.text ? g.HSColor.rgbTextColor : this.isShape() ? g.HSColor.rgbTextColor : g.HSColor.rgbWhiteColor;
        }, e.prototype.originalObject = function(e) {
            var t = e.findWithObjectID(i.HSObject.key, this.objectID);
            return t ? t.stageObject() : null;
        }, e.prototype.baseScale = function() {
            return this.isFullSizeShape() ? .5 : 1;
        }, e.prototype.isFullSizeShape = function() {
            return l.hsIsFullSizeShape(this.type);
        }, e.prototype.isShape = function() {
            return l.hsIsShapeType(this.type);
        }, e.prototype.update = function() {
            this.isAlive && this.view.update(this.viewProps());
        }, e.prototype.viewProps = function() {
            return {
                type: this.type,
                text: this.text,
                color: this.color,
                x: this.x,
                y: this.y,
                headingInRadians: this.headingInRadians(),
                sizePercentWidth: this.sizePercentWidth,
                sizePercentHeight: this.sizePercentHeight,
                fontSize: this.fontSize,
                opacity: this.opacity(),
                isFlipped: this.isFlipped,
                animationNumber: this.animationNumber(),
                willChangeCostume: this.willChangeCostume,
                imageName: this.imageName,
                baseObjectScale: this.baseScale(),
                stageHeight: f.HSStageScene.stageHeight,
                originalHeight: this.originalHeight,
                originalWidth: this.originalWidth
            };
        }, e.prototype.imageForCollision = function() {
            return this.collisionImageFactory.image(this.view.imageSource());
        }, e.prototype.boundingBox = function() {
            this._boundingBox || (this._boundingBox = new d.HSBoundingBox());
            var e = this.view.bounds();
            return this._boundingBox.update(this.x, this.y, e.width / 2, e.height / 2), this._boundingBox;
        }, e.prototype.drawPath = function(e) {
            this.pathDrawer.drawDiff(e);
        }, e.prototype.isBlankTextObject = function() {
            return this.type === l.HSObjectType.text && !this.shouldDrawText();
        }, e.prototype.shouldDrawText = function() {
            return o.HSTokenizer.hasDrawableTokens(this.text);
        }, e.prototype.canDrawCharacter = function() {
            return this.type !== l.HSObjectType.text;
        }, e.prototype.canDrawImage = function() {
            return !!this.imageName;
        }, e.prototype.opacity = function() {
            return .01 * Math.max(100 - this.invisibilityPercent, 0);
        }, e.prototype.clear = function() {
            s.HopscotchDrawingContext.shouldClear = !0;
        }, e.prototype.maxStepSize = function() {
            var e = this.speed / t.BASE_SPEED * t.BASE_STEP_SIZE;
            return Math.abs(e) >= 1 ? e : Math.sign(e);
        }, e.prototype.headingInRadians = function() {
            return this.headingInDegrees * Math.PI / 180;
        }, e.prototype.changeXBy = function(e) {
            this.x += e, this.moveToWithinBoundary(), this.pathDrawer.addPoint(this.currentPoint(), this.penDown);
        }, e.prototype.changeYBy = function(e) {
            this.y += e, this.moveToWithinBoundary(), this.pathDrawer.addPoint(this.currentPoint(), this.penDown);
        }, e.prototype.setPosition = function(e, t) {
            this.x = e, this.y = t, this.pathDrawer.addPoint(this.currentPoint(), this.penDown);
        }, e.prototype.setOrigin = function(e, t) {
            this.setPosition(e + .5 * this.width(), t + .5 * this.height());
        }, e.prototype.rotateBy = function(t) {
            this.headingInDegrees = e.normalizeHeading(this.headingInDegrees + t * this.multiplier());
        }, e.prototype.moveBy = function(e) {
            this.x += this.multiplier() * Math.cos(this.headingInRadians()) * e, this.y += this.multiplier() * Math.sin(this.headingInRadians()) * e, 
            this.moveToWithinBoundary(), this.pathDrawer.addPoint(this.currentPoint(), this.penDown);
        }, e.prototype.setText = function(e, t) {
            this.text = e, this.color = t, this.type = l.HSObjectType.text, this.resetTextSize();
        }, e.prototype.setCharacter = function(e) {
            this.type = e, this.color = this.colorForType(e), this._animationNumber = 0, this.text = null, 
            this.imageName = null, p.HSOBJECT_SIZES[e] && (this.originalWidth = p.HSOBJECT_SIZES[e].width, 
            this.originalHeight = p.HSOBJECT_SIZES[e].height);
        }, e.prototype.setImage = function(e) {
            this.type = l.HSObjectType.image, this.color = this.colorForType(l.HSObjectType.image), 
            this._animationNumber = 0, this.text = null, e && (this.imageName = e.fileName, 
            this.originalWidth = e.width, this.originalHeight = e.height);
        }, e.prototype.changePose = function() {
            this.isShape() || this._animationNumber++;
        }, e.prototype.animationNumber = function() {
            return this._animationNumber % 4;
        }, e.prototype.bringToFront = function() {
            this.bringToFrontFunction(this);
        }, e.prototype.sendToBack = function() {
            this.sendToBackFunction(this);
        }, e.prototype.clone = function(e) {
            this.cloneFunction(this, e);
        }, e.prototype.addToDestroyQueue = function() {
            this.isAlive = !1, this.destroyFunction(this);
        }, e.prototype.destroy = function() {
            this.view = null, this.stageRules = [];
        }, e.prototype.isInvisible = function() {
            return this.invisibilityPercent >= 100;
        }, e.prototype.deepCopy = function(t, u) {
            var r = new e(u.x, u.y, u.text, u.type, u.context.baseObjectScale, u.context.fontSize, u.objectID, u.fileName(), u.willChangeCostume, this.originalWidth, this.originalHeight);
            return r.stageRules = this.stageRules.map(function(e) {
                return e.deepCopy(r);
            }), r;
        }, e.prototype.break = function() {
            this.stageRules.forEach(function(e) {
                return e.break();
            });
        }, e.normalizeHeading = function(e) {
            return (e % 360 + 360) % 360;
        }, e.prototype.currentPoint = function() {
            return new r.HSLinePoint([ this.x, this.y ], this.drawingRadius, this);
        }, e.prototype.moveToWithinBoundary = function() {
            this.x = Math.min(this.x, f.HSStageScene.stageWidth), this.x = Math.max(this.x, 0), 
            this.y = Math.min(this.y, f.HSStageScene.stageHeight), this.y = Math.max(this.y, 0);
        }, e.prototype.multiplier = function() {
            return this.isFlipped ? -1 : 1;
        }, e.prototype.activateAllStageRulesForEventType = function(e, t) {
            this.allStageRulesForEventTypeAndObject(e, t).forEach(function(e) {
                return e.activate();
            });
        }, e.prototype.allStageRulesForEventTypeAndObject = function(e, t) {
            return this.allStageRulesForEventType(e).filter(function(e) {
                return e.matchesFirstObject(t);
            });
        }, e.prototype.allStageRulesForEventType = function(e) {
            return this.stageRules.filter(function(t) {
                return t.matchesEvent(e);
            });
        }, e.prototype.allPossibleCollisionPairs = function() {
            return this.allStageRulesForEventType(S.HSBlockType.EventOperatorIsTouching).concat(this.allStageRulesForEventType(S.HSBlockType.EventOperatorBump)).reduce(function(e, t) {
                return e.concat(t.collisionPairs());
            }, []);
        }, e.prototype.executeActiveRules = function() {
            for (var e = this.stageRules, t = e.length, u = 0; u !== t; ++u) e[u].conditionIsTrue(this) && (e[u].hasBlocksToExecute() || (e[u].isActive = !1), 
            e[u].activate()), e[u].execute(this);
        }, e.prototype.executeBlock = function(t) {
            var u, r, i, o = t.firstIntegerValue(this), c = t.parameters;
            switch (t.type) {
              case S.HSBlockType.Move:
                this.moveBy(o);
                break;

              case S.HSBlockType.SetPosition:
                this.setPosition(c[0].computedValue(this), c[1].computedValue(this));
                break;

              case S.HSBlockType.SetSize:
                this.sizePercentWidth = o, this.sizePercentHeight = o;
                break;

              case S.HSBlockType.Grow:
                u = Math.max(100 + o, 0), this.sizePercentWidth *= .01 * u, this.sizePercentHeight *= .01 * u;
                break;

              case S.HSBlockType.Scale:
                this.sizePercentWidth *= .01 * o, this.sizePercentHeight *= .01 * o;
                break;

              case S.HSBlockType.Shrink:
                u = Math.max(100 - o, 0), r = this.sizePercentWidth * u * .01, this.sizePercentWidth = Math.max(r, 1e-7), 
                r = this.sizePercentHeight * u * .01, this.sizePercentHeight = Math.max(r, 1e-7);
                break;

              case S.HSBlockType.SetHeading:
                this.headingInDegrees = e.normalizeHeading(o);
                break;

              case S.HSBlockType.ChangeX:
                this.changeXBy(o);
                break;

              case S.HSBlockType.ChangeY:
                this.changeYBy(o);
                break;

              case S.HSBlockType.Rotate:
                this.rotateBy(o);
                break;

              case S.HSBlockType.ChangeSpeed:
                this.speed = o;
                break;

              case S.HSBlockType.SetInvisibility:
                this.invisibilityPercent = o;
                break;

              case S.HSBlockType.Flip:
                this.isFlipped = !this.isFlipped;
                break;

              case S.HSBlockType.StrokeColor:
                this.drawingColor = c[0].computedColorString(this);
                break;

              case S.HSBlockType.StrokeWidth:
                this.drawingRadius = o / 2;
                break;

              case S.HSBlockType.Clear:
                this.clear();
                break;

              case S.HSBlockType.PenDown:
                this.penDown = !0;
                break;

              case S.HSBlockType.PenUp:
                this.penDown = !1;
                break;

              case S.HSBlockType.ChangeCostume:
                this.changePose();
                break;

              case S.HSBlockType.SetText:
                var a = g.HSColor.rgbTextColor;
                c.length >= 2 && (a = c[1].computedColorString(this)), this.setText(c[0].computedStringValue(this), a);
                break;

              case S.HSBlockType.SetVariable:
                (i = c[0].variable()) && (i.isSkillComplete() && 1 === c[1].computedValue(this) && n.HSApp.sendToApp("hsSkillComplete", "1"), 
                i.setValue(c[1].computedValue(this), this));
                break;

              case S.HSBlockType.ChangeVariable:
                if (i = c[0].variable()) {
                    var s = i.computedValue(this) + c[1].computedValue(this);
                    i.setValue(s, this);
                }
                break;

              case S.HSBlockType.BringToFront:
                this.bringToFront();
                break;

              case S.HSBlockType.SendToBack:
                this.sendToBack();
                break;

              case S.HSBlockType.SetImage:
                c[0].computedObjectType() === l.HSObjectType.text ? this.setText(c[0].value, g.HSColor.rgbTextColor) : c[0].computedObjectType() === l.HSObjectType.image ? this.setImage(c[0].childBlock) : this.setCharacter(c[0].computedObjectType());
                break;

              case S.HSBlockType.SetColor:
                this.color = c[0].computedColorString(this);
                break;

              case S.HSBlockType.SetWidthAndHeight:
                this.setWidth(c[0].computedValue(this)), this.setHeight(c[1].computedValue(this));
                break;

              case S.HSBlockType.SetZIndex:
                var d = c[0].computedValue(this);
                d !== this.zIndex && (this.zIndex = d, f.HSStageScene.dirtySort = !0);
                break;

              case S.HSBlockType.SetOriginXY:
                this.setOrigin(c[0].computedValue(this), c[1].computedValue(this));
                break;

              case S.HSBlockType.SetCenterXY:
                this.setPosition(c[0].computedValue(this), c[1].computedValue(this));
				break;
				
			  case HSBlockType.None: //AE_MOD
				if (/^_ae_webplayer_action:/g.test(d[0].value)){
					AE_MOD.webplayer_action(d[0].value.split('_ae_webplayer_action:')[1], ((d[1])?d[1].computedValue(this):undefined));
				}
				break;
            }
        }, Object.defineProperty(e.prototype, "originX", {
            get: function() {
                return this.x - .5 * this.width();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "originY", {
            get: function() {
                return this.y - .5 * this.height();
            },
            enumerable: !0,
            configurable: !0
        }), e.OBJECTS_CREATED = 0, e.uniqueIdCounter = 0, e.initiatedEdgeOfScreen = !1, 
        e;
    }();
    t.HSStageObject = y, window.HSStageObject = y, window.BASE_SPEED = t.BASE_SPEED, 
    window.BASE_STEP_SIZE = t.BASE_STEP_SIZE, window.EDGE_OF_SCREEN_OBJECT_ID = t.EDGE_OF_SCREEN_OBJECT_ID, 
    window.DEBUG_DRAW_BOUNDING_BOXES = t.DEBUG_DRAW_BOUNDING_BOXES;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(1), i = function() {
        function e() {
            this.prefetchedImageCache = new Map();
        }
        return e.prototype.build = function(e, t) {
            var u = this.prefetchedImageCache.get(t.imageName);
            return u ? u.then(function(e) {
                return PIXI.Texture.from(e);
            }) : Promise.reject(null);
        }, e.prototype.buildAll = function(e, t) {
            return this.build(e, t).then(function(e) {
                return [ e ];
            });
        }, e.prototype.prefetchImage = function(e) {
            var t = this;
            if (e && !this.prefetchedImageCache.get(e.fileName)) {
                var u = this.getImageUrl(e.fileName).then(r.getImageFromUri).then(function(u) {
                    return t.resizeImage(u, e.width, e.height);
                });
                this.prefetchedImageCache.set(e.fileName, u);
            }
        }, e.prototype.resizeImage = function(e, t, u) {
            return e.width = t, e.height = u, Promise.resolve(e);
        }, e.prototype.getImageUrl = function(e) {
            return Object.prototype.hasOwnProperty.call(window, "BASE_IMAGE_URL") ? this.getImageUrlFromBaseUrl(e) : this.getImageUrlFromApp(e);
        }, e.prototype.getImageUrlFromBaseUrl = function(e) {
            return Promise.resolve(BASE_IMAGE_URL + e);
        }, e.prototype.getImageUrlFromApp = function(e) {
            return r.requestTextureFromApp({
                fileName: e
            }).then(function(e) {
                return e.dataURI;
            });
        }, e.instance = new e(), e;
    }();
    t.HSImageTextureFactory = i, window.HSImageTextureFactory = i;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(36), i = u(15), n = function() {
        function e(e, t) {
            this.backgroundCanvas = e, this.drawingContext = new i.HopscotchDrawingContext(e, t, this), 
            this.collisionContext = new r.HSCollisionContext();
        }
        return e.collisionResolution = 64, e;
    }();
    t.HSVisualContext = n, window.HSVisualContext = n;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(2), o = u(3), f = u(12), c = u(27), a = u(9), s = u(0), d = function(e) {
        function t(t) {
            var u = e.call(this, t) || this;
            return u.type = s.HSBlockType.Variable, u;
        }
        return i(t, e), t.prototype.parseJSON = function(u) {
            void 0 === u && (u = {}), e.prototype.parseJSON.call(this, u), this.blockType = u.type, 
            u.object && (this.object = this.context.findWithObjectID(o.HSObject.key, u.object)), 
            this.type = s.HSBlockType.Variable;
            var r = this.context.findWithObjectID(c.HSVariablePrototype.key, u[f.VARIABLE_KEY]);
            r.name === t.skillComplete ? this.name = r.name : this.object && this.context.version < n.HSProjectVersion.ADD_SELF ? this.name = "_hs_" + this.object.objectID + "_" + r.name : this.name = "_hs_" + r.name;
        }, t.prototype.isSkillComplete = function() {
            return this.name === t.skillComplete;
        }, t.prototype.computedValue = function(e) {
            return this._object(e)[this.name] || 0;
        }, t.prototype.setValue = function(e, t) {
            this._object(t)[this.name] = e;
        }, t.prototype._object = function(e) {
            return this.context.version < n.HSProjectVersion.ADD_SELF || this.blockType === s.HSBlockType.Device ? t.globalScope : this.blockType === s.HSBlockType.Object && this.object ? this.object.stageObject() : this.blockType === s.HSBlockType.OriginalObject ? e.originalObject(this.context) : e;
        }, t.globalScope = {}, t.key = "HSVariable", t.skillComplete = "hsSkillComplete", 
        t;
    }(a.HSParameterBlock);
    t.HSVariable = d, window.HSVariable = d;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(8), i = u(7), n = u(0), o = u(4), f = function() {
        function e(e, t) {
            void 0 === t && (t = null), this.value = e, this.childBlock = t;
        }
        return e.prototype.variable = function() {
            if (this.childBlock && this.childBlock.type === n.HSBlockType.Variable) return this.childBlock;
        }, e.prototype.computedStringValue = function(e) {
            return this.childBlock ? this.childBlock.computedStringValue(e) : this.value.toString();
        }, e.prototype.computedObjectType = function() {
            return this.childBlock ? i.HSObjectType.image : "string" == typeof this.value ? i.HSObjectType.text : this.value;
        }, e.prototype.computedValue = function(e) {
            var t = this.childBlockValue(e);
            return null != t ? t : this.numberValue();
        }, e.prototype.computedColorString = function(e) {
            return this.childBlock ? this.childBlock.computedColorString(e) : o.HSColor.rgbStringFromHSBString(this.computedStringValue(e));
        }, e.prototype.toString = function() {
            return r.SourceFormatter.stageParamToSrc(this.value, this.childBlock);
        }, e.prototype.childBlockValue = function(e) {
            return this.childBlock ? this.childBlock.computedValue(e) : null;
        }, e.prototype.numberValue = function() {
            var e = parseFloat(this.value);
            return Number.isFinite(e) ? e : null;
        }, e;
    }();
    t.HSStageParameter = f, window.HSStageParameter = f;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(6), o = u(0);
    t.OBJECT_ID_STRING_KEY = "objectIdString";
    var f = function(e) {
        function u(t) {
            return e.call(this, t) || this;
        }
        return i(u, e), u.prototype.parseJSON = function(e) {
            void 0 === e && (e = {}), this.objectID = e[t.OBJECT_ID_STRING_KEY], this.name = e.name, 
            this.type = e.type || o.HSBlockType.Object;
        }, u.key = "HSVariablePrototype", u;
    }(n.HSManagedObject);
    t.HSVariablePrototype = f, window.HSVariablePrototype = f;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(3), o = u(9);
    t.EVENT_PARAMETER_OBJECT_ID_KEY = "id", t.EVENT_PARAMETER_TYPE_KEY = "blockType", 
    t.EVENT_PARAMETER_OBJECT_KEY = "objectID";
    var f = function(e) {
        function u() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return i(u, e), u.prototype.parseJSON = function(u) {
            void 0 === u && (u = {}), e.prototype.parseJSON.call(this, u), this.objectID = u[t.EVENT_PARAMETER_OBJECT_ID_KEY], 
            this.type = u[t.EVENT_PARAMETER_TYPE_KEY];
            var r = this.context.findWithObjectID(n.HSObject.key, u[t.EVENT_PARAMETER_OBJECT_KEY]);
            this.object = r;
        }, u.key = "HSEventParameterBlock", u;
    }(o.HSParameterBlock);
    t.HSEventParameterBlock = f, window.HSEventParameterBlock = f;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(6), o = u(2), f = u(3), c = u(38), a = u(10), s = u(17), d = u(27), h = u(28), l = u(9), p = u(59);
    t.OBJECTS_KEY = "objects", t.RULES_KEY = "rules", t.VARIABLES_KEY = "variables", 
    t.TRAITS_KEY = "traits", t.EVENT_PARAMETERS_KEY = "eventParameters", t.SCRIPTS_KEY = "abilities", 
    t.SCENES_KEY = "scenes";
    var S = function(e) {
        function u(u, r) {
            void 0 === r && (r = {});
            var i = e.call(this, u) || this;
            return i.context.parseJSON(r), i.parseObjectDictionaries(r[t.OBJECTS_KEY], r[t.SCENES_KEY]), 
            i.parseVariableDictionaries(r[t.VARIABLES_KEY]), i.parseTraitsDictionaries(r[t.TRAITS_KEY]), 
            i.parseEventParameters(r[t.EVENT_PARAMETERS_KEY]), i.parseScriptDictionaries(r[t.SCRIPTS_KEY]), 
            i.parseRulesDictionaries(r[t.RULES_KEY]), i.importCustomRules(r.customRules), i.context.version >= o.HSProjectVersion.CUSTOM_WHENS && i.addRulesToObjects(r[t.OBJECTS_KEY]), 
            i.parseScenesDictionaries(r[t.SCENES_KEY]), i;
        }
        return i(u, e), u.prototype.parseEventParameters = function(e) {
            var t = this;
            void 0 === e && (e = []), e && e.forEach(function(e, u, r) {
                new h.HSEventParameterBlock(t.context).parseJSON(e);
            });
        }, u.prototype.parseVariableDictionaries = function(e) {
            if (void 0 === e && (e = []), e) {
                var t = this.context;
                e.forEach(function(e, u, r) {
                    new d.HSVariablePrototype(t).parseJSON(e);
                });
            }
        }, u.prototype.parseTraitsDictionaries = function(e) {
            if (void 0 === e && (e = []), e) {
                var t = this.context;
                e.forEach(function(e, u, r) {
                    new l.HSParameterBlock(t).parseJSON(e);
                });
            }
        }, u.prototype.parseObjectDictionaries = function(e, u) {
            void 0 === e && (e = []), void 0 === u && (u = []);
            var r = [];
            u.length && (r = u.map(function(e) {
                return null === e[t.OBJECTS_KEY] ? [] : e[t.OBJECTS_KEY];
            }).reduce(function(e, t) {
                return e.concat(t);
            }));
            var i = this.context;
            e.forEach(function(e, t, n) {
                u.length > 0 && !r.includes(e.objectID) || new f.HSObject(i).parseJSON(e);
            });
        }, u.prototype.addRulesToObjects = function(e) {
            void 0 === e && (e = []);
            for (var t = this.context, u = function(e) {
                var u = t.findWithObjectID(f.HSObject.key, e.objectID);
                if (!e.rules || !u || !u.rules) return "continue";
                var r = u.canChangeCostume(), i = !1, n = e.rules.map(function(e) {
                    var u = t.findWithObjectID(a.HSRule.key, e);
                    return !i && r && u && u.script.containsChangeCostume() && (i = !0), u || t.findWithObjectID(p.HSCustomRule.key, e);
                });
                u.rules = n.filter(function(e) {
                    return !!e;
                }), u.willChangeCostume = i;
            }, r = 0, i = e; r < i.length; r++) {
                u(i[r]);
            }
        }, u.prototype.importCustomRules = function(e) {
            void 0 === e && (e = []);
            var t = this.context;
            e instanceof Array || (e = []), e.forEach(function(e, u, r) {
                new p.HSCustomRule(t).parseJSON(e);
            }), e.forEach(function(e, u, r) {
                t.findWithObjectID(p.HSCustomRule.key, e.id).addRulesFromJSON(e);
            });
        }, u.prototype.parseScriptDictionaries = function(e) {
            void 0 === e && (e = []);
            for (var t = [], u = 0; u < e.length; u++) {
                var r = new s.HSScript(this.context);
                t.push(r), r.addObjectIDFromJSON(e[u]);
            }
            for (u = 0; u < t.length; u++) {
                (r = t[u]).parseJSON(e[u]);
            }
        }, u.prototype.parseRulesDictionaries = function(e) {
            void 0 === e && (e = []);
            var t = this.context;
            e.forEach(function(e, u, r) {
                new a.HSRule(t).parseJSON(e);
            });
        }, u.prototype.parseScenesDictionaries = function(e) {
            if (void 0 === e && (e = []), e.length > 0) {
                var t = this.context;
                this.scenes = e.map(function(e) {
                    var u = new c.HSScene(t);
                    return u.parseJSON(e), u;
                });
            } else {
                var u = new c.HSScene(this.context);
                u.parseJSON(), this.scenes = [ u ];
            }
        }, u;
    }(n.HSManagedObject);
    t.HSProject = S, window.HSProject = S, window.OBJECTS_KEY = t.OBJECTS_KEY, window.RULES_KEY = t.RULES_KEY, 
    window.VARIABLES_KEY = t.VARIABLES_KEY, window.TRAITS_KEY = t.TRAITS_KEY, window.EVENT_PARAMETERS_KEY = t.EVENT_PARAMETERS_KEY, 
    window.SCRIPTS_KEY = t.SCRIPTS_KEY, window.SCENES_KEY = t.SCENES_KEY;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(31), i = u(8), n = u(32), o = u(26), f = u(0), c = function() {
        function e(e, t, u) {
            void 0 === u && (u = []), this.type = e, this.scripts = t, this.parameters = u, 
            this.isImmediate = !1;
        }
        return e.prototype.integerValue = function(e) {
            switch (this.type) {
              case f.HSBlockType.Repeat:
                return Math.round(this.firstParameterValue(e));

              case f.HSBlockType.RepeatForever:
                return 1 / 0;

              default:
                return 0;
            }
        }, e.prototype.script = function(e) {
            switch (this.type) {
              case f.HSBlockType.CheckOnceIf:
              case f.HSBlockType.CheckIfElse:
                return this.parameters[0].computedValue(e) ? this.trueScript() : this.falseScript();

              default:
                return this.trueScript();
            }
        }, e.prototype.trueScript = function() {
            return this.scripts[0].stageScript();
        }, e.prototype.falseScript = function() {
            return this.scripts[1].stageScript();
        }, e.prototype.toString = function() {
            return i.SourceFormatter.stageControlToSrc(this);
        }, e.prototype.firstParameterValue = function(e) {
            return this.parameters.length > 0 ? this.parameters[0].computedValue(e) : 0;
        }, e.prototype.executableForStepSize = function(e, t) {
            switch (this.type) {
              case f.HSBlockType.Repeat:
              case f.HSBlockType.RepeatForever:
                return this.executableForRepeat(e, t);

              case f.HSBlockType.LeaveATrail:
                return this.executableForLeaveATrail(e, t);

              case f.HSBlockType.CheckOnceIf:
              case f.HSBlockType.CheckIfElse:
              case f.HSBlockType.Ability:
                return this.scripts[0].isImmediatelyRecursive() ? new r.HSExecutable([], []) : this.script(t).executableForStepSize(e, t);
            }
        }, e.prototype.executableForRepeat = function(e, t) {
            switch (this.integerValue(t)) {
              case 0:
                return new r.HSExecutable([], []);

              case 1:
                return this.script(t).executableForStepSize(e, t);

              default:
                return this.executableWithRepeatOnTheEnd(e, t);
            }
        }, e.prototype.executableForLeaveATrail = function(e, t) {
            var u = this.script(t).executableForStepSize(e, t), i = [ new n.HSStageMethod(f.HSBlockType.PenDown) ];
            this.parameters[0] && i.push(new n.HSStageMethod(f.HSBlockType.StrokeColor, [ this.parameters[0] ])), 
            this.parameters[1] && i.push(new n.HSStageMethod(f.HSBlockType.StrokeWidth, [ this.parameters[1] ]));
            var o = new n.HSStageMethod(f.HSBlockType.PenUp);
            return new r.HSExecutable(i.concat(u.blocksToExecuteNow), u.blocksToExecuteLater.concat(o));
        }, e.prototype.executableWithRepeatOnTheEnd = function(t, u) {
            var r = this.script(u).executableForStepSize(t, u), i = this.integerValue(u) - 1, n = new o.HSStageParameter("" + i), f = new e(this.type, this.scripts, [ n ]), c = r.blocksToExecuteLater;
            return c.push(f), r.newWithNewBlocksToExecuteLater(c);
        }, e;
    }();
    t.HSStageControl = c, window.HSStageControl = c;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(8), i = u(11), n = u(37), o = u(0), f = function() {
        function e(e, t) {
            this.blocksToExecuteNow = e, this.blocksToExecuteLater = t, this.isImmediate = !1;
        }
        return e.prototype.newWithNewBlocksToExecuteLater = function(t) {
            return new e(this.blocksToExecuteNow, t);
        }, e.prototype.execute = function(e) {
            var t = this;
            this.blocksToExecuteNow.forEach(function(u) {
                return t.executeBlock(u, e);
            });
        }, e.prototype.toString = function() {
            return r.SourceFormatter.executableToSrc(this);
        }, e.prototype.executeBlock = function(e, t) {
            var u = e.parameters;
            switch (e.type) {
              case o.HSBlockType.PlaySoundSeconds:
              case o.HSBlockType.PlaySound:
				function notePath (val) {
					//AE_MOD find path of note
					isCustom = (!/^((low-|high)?[a-zA-Z](sharp|flat)?|clickPlayable|alert|car|chaChing|check|clang|crash|dash|doorbell|drip|fail|footsteps|laser|pop|schoolBell|spring|vibrate|trophy|aliens|bubbles|crickets|meow|rain|roar|tweet|wind|woof|ahhh|cheer|eating|heartbeat|laugh|news|talking|bass|chord|clap|gong|snare)$/.test(val));
					i = (/^(low-|high)?[a-zA-Z](sharp|flat)?$/.test(val)) ? ({"-1": "", "0": "new/", "1": "guitar/"})[(u[2])?u[2].computedStringValue(t):'0'] : ((isCustom)?"custom/":"");
					return (!isCustom && !!getPref && getPref("old_sounds")) ? "" : i;
				}
                var r = n.HSSoundManager.sharedInstance;
				var f = notePath(u[0].computedStringValue(t)) + u[0].computedStringValue(t);
                r.play(f);
                break;

              case o.HSBlockType.MakeAClone:
                var c = 1;
                u[0] && (c = u[0].computedValue(t)), t.clone(c);
                break;

              case o.HSBlockType.Destroy:
                t.addToDestroyQueue();
                break;

              case o.HSBlockType.ChangeX:
              case o.HSBlockType.ChangeY:
              case o.HSBlockType.Move:
              case o.HSBlockType.Rotate:
                var a = t.x, s = t.y, d = t.headingInDegrees;
                t.executeBlock(e), t.x === a && t.y === s && t.headingInDegrees === d && this.blocksToExecuteLater.shift();
                break;

              case o.HSBlockType.ChangeScene:
                i.HSStageProject.sharedInstance.changeScene(u[0].computedStringValue(t));
                break;

              default:
                t.executeBlock(e);
            }
        }, e;
    }();
    t.HSExecutable = f, window.HSExecutable = f;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(31), i = u(8), n = u(26), o = u(0), f = function() {
        function e(e, t) {
            void 0 === t && (t = []), this.type = e, this.parameters = t, this.isImmediate = [ o.HSBlockType.PenDown, o.HSBlockType.StrokeColor, o.HSBlockType.StrokeWidth, o.HSBlockType.PenUp, o.HSBlockType.SetVariable, o.HSBlockType.ChangeVariable ].includes(e);
        }
        return e.prototype.isOverStepSize = function(e, t) {
            return this.usesStepSize() && Math.abs(this.firstIntegerValue(t)) > e;
        }, e.prototype.isWaitBlock = function() {
            return this.type === o.HSBlockType.Wait || this.type === o.HSBlockType.WaitSeconds;
        }, e.prototype.isFinishedTimestampBlock = function(e) {
            return this.type === o.HSBlockType.WaitTilTimestamp && this.firstIntegerValue(e) <= Date.now();
        }, e.prototype.isUnfinishedTimestampBlock = function(e) {
            return this.type === o.HSBlockType.WaitTilTimestamp && this.firstIntegerValue(e) > Date.now();
        }, e.prototype.usesStepSize = function() {
            return -1 !== [ o.HSBlockType.ChangeX, o.HSBlockType.ChangeY, o.HSBlockType.Move, o.HSBlockType.Rotate ].indexOf(this.type);
        }, e.prototype.firstIntegerValue = function(e) {
            return this.parameters.length > 0 ? this.parameters[0].computedValue(e) : null;
        }, e.prototype.calculateValueMinusOneStep = function(e, t) {
            return this.isOverStepSize(e, t) ? this.signOfFirstValue(t) * (Math.abs(this.firstIntegerValue(t)) - Math.abs(e)) : 0;
        }, e.prototype.executableForStepSize = function(t, u) {
            if (this.isWaitBlock()) {
                var i = this.getWaitMilliseconds(u), f = Date.now() + i;
                return new e(o.HSBlockType.WaitTilTimestamp, [ new n.HSStageParameter(f + "") ]).executableForStepSize(t, u);
            }
            return new r.HSExecutable(this.blocksToExecuteNow(t, u), this.blocksToExecuteLater(t, u));
        }, e.prototype.getWaitMilliseconds = function(e) {
            if (!this.isWaitBlock()) return 0;
            var t = this.firstIntegerValue(e);
            return this.type === o.HSBlockType.WaitSeconds ? 1e3 * t : t;
        }, e.prototype.blocksToExecuteNow = function(t, u) {
            if (this.type === o.HSBlockType.WaitTilTimestamp) return [];
            if (!this.isOverStepSize(t, u)) return [ this ];
            var r = new n.HSStageParameter("" + t * this.signOfFirstValue(u));
            return [ new e(this.type, [ r ]) ];
        }, e.prototype.toString = function() {
            return i.SourceFormatter.stageMethodToSrc(this);
        }, e.prototype.signOfFirstValue = function(e) {
            var t = this.firstIntegerValue(e);
            return t / Math.abs(t);
        }, e.prototype.blocksToExecuteLater = function(t, u) {
            if (this.isUnfinishedTimestampBlock(u)) return [ this ];
            if (this.type === o.HSBlockType.PlaySound) return [ new e(o.HSBlockType.Wait, [ new n.HSStageParameter(this.parameters[1].computedValue(u) + "") ]) ];
            if (this.type === o.HSBlockType.PlaySoundSeconds) return [ new e(o.HSBlockType.WaitSeconds, [ new n.HSStageParameter(this.parameters[1].computedValue(u) + "") ]) ];
            if (!this.usesStepSize()) return [];
            var r = this.calculateValueMinusOneStep(t, u), i = new n.HSStageParameter("" + r);
            return [ new e(this.type, [ i ]) ];
        }, e;
    }();
    t.HSStageMethod = f, window.HSStageMethod = f;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(30), o = u(10), f = u(13), c = u(17);
    t.CONTROL_SCRIPT_KEY = "controlScript";
    var a = function(e) {
        function u() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.scripts = [], t.isControl = !0, t;
        }
        return i(u, e), u.prototype.stageBlock = function() {
            var e = this.scripts[0] || new c.HSScript(this.context);
            return new n.HSStageControl(this.type, [ e ], this.stageParameters());
        }, u.prototype.parseJSON = function(u) {
            void 0 === u && (u = {}), e.prototype.parseJSON.call(this, u);
            var r = (u[t.CONTROL_SCRIPT_KEY] || [])[o.SCRIPT_ID_KEY] || "", i = this.context.findWithObjectID("HSScript", r);
            this.scripts.push(i || new c.HSScript(this.context));
        }, u.key = "HSControlBlock", u;
    }(f.HSBlock);
    t.HSControlBlock = a, window.HSControlBlock = a;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(1), i = function() {
        function e(t, u, i) {
            this.point = t, this.radius = u, this.colorReference = i, this.point[0] = r.clamp(t[0], -e.MAX_POINT_VALUE, e.MAX_POINT_VALUE), 
            this.point[1] = r.clamp(t[1], -e.MAX_POINT_VALUE, e.MAX_POINT_VALUE);
            var n = Math.ceil(2 * u) / 2;
            this.radius = n < 0 ? .5 : r.clamp(n, 0, e.MAX_POINT_VALUE);
        }
        return e.prototype.clone = function() {
            return new e(this.point, this.radius, this.colorReference);
        }, e.MAX_POINT_VALUE = 1e4, e;
    }();
    t.HSLinePoint = i;
    var n = function() {
        function e(e) {
            this.currentPoint = e, this.shouldDraw = !1;
        }
        return e.prototype.drawDiff = function(e) {
            this.shouldDrawPath() && (this.currentPoint.radius && e.drawLine(this.previousPointWithRadiusAndColor(), this.currentPoint), 
            this.shouldDraw = !1);
        }, e.prototype.shouldDrawPath = function() {
            return this.shouldDraw && this.currentPoint && this.previousPoint;
        }, e.prototype.previousPointWithRadiusAndColor = function() {
            var e = this.previousPoint.clone();
            return e.colorReference = this.currentPoint.colorReference, e.radius = this.currentPoint.radius, 
            e;
        }, e.prototype.addPoint = function(e, t) {
            t ? (this.shouldDraw = !0, this.previousPoint = this.currentPoint, this.currentPoint = e) : (this.currentPoint = e, 
            this.shouldDraw = !1);
        }, e;
    }();
    t.HSPathDrawer = n, window.HSLinePoint = i, window.HSPathDrawer = n;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(20), i = u(1), n = u(44), o = u(23), f = u(45), c = u(7), a = u(4), s = function() {
        function e(e) {
            this.props = e, this.sprite = new PIXI.Sprite(), this.canvas = null, this.textureExists = !1, 
            this.onTextureBuild = null, this.buildTexture(), this.update(this.props);
        }
        return e.prototype.factory = function() {
            return this.shouldDrawText() ? n.HSTextTextureFactory.instance : this.canDrawImage() ? o.HSImageTextureFactory.instance : f.HSCharacterTextureFactory.instance;
        }, e.prototype.imageSource = function() {
            return this.sprite ? this.sprite.texture.baseTexture.source : null;
        }, e.prototype.bounds = function() {
            if (this.sprite) return this.sprite.getBounds();
        }, e.prototype.width = function() {
            return this.sprite.texture.baseTexture.width * this.sprite.scale.x;
        }, e.prototype.height = function() {
            return this.sprite.texture.baseTexture.height * this.sprite.scale.y;
        }, e.prototype.shouldDrawText = function() {
            return r.HSTokenizer.hasDrawableTokens(this.props.text);
        }, e.prototype.canDrawImage = function() {
            return !!this.props.imageName;
        }, e.prototype.buildTexture = function() {
            var e = this;
            this.createCanvasIfNeeded();
            var t = this;
            return this.hasEmoji = !!this.shouldDrawText() && i.hasEmoji(this.props.text), this.factory().build(this.canvas, this.props).then(function(u) {
                return u === t.sprite.texture ? u : (u.baseTexture === t.sprite.texture.baseTexture && t.sprite.texture.destroy(), 
                e.shouldDrawText() && u.update(), t.sprite.texture = u, t.sprite.anchor.x = .5, 
                t.sprite.anchor.y = .5, t.originalWidth = t.sprite.texture.baseTexture.width, t.originalHeight = t.sprite.texture.baseTexture.height, 
                t.textureExists = !0, t.onBuildCallback(), u);
            }).catch(function(e) {
                i.log("error in building texture", e, t.props);
            });
        }, e.prototype.onBuildCallback = function() {
            var e = this.onTextureBuild;
            this.onTextureBuild = null, e && e();
        }, e.prototype.createCanvasIfNeeded = function() {
            this.canvas || this.shouldDrawText() && (this.canvas = document.createElement("canvas"));
        }, e.prototype.buildAllTextures = function() {
            return this.factory().buildAll(this.canvas, this.props);
        }, e.prototype.getOriginalScale = function(e, t, u) {
            return isNaN(e) ? u === c.HSObjectType.text ? 1 / n.HSTextTextureFactory.scaleUp() : 1 : e / t;
        }, e.prototype.getSpriteScale = function(e, t, u, r, i, n) {
            void 0 === n && (n = !1);
            var o = this.getOriginalScale(t, e, i), f = u * r * .01 * this.scaleForObjectType(i), c = Math.abs(f), a = f / c, s = Math.min(c, 1024) * a * o;
            return Math.round(e * s) / e * (n ? -1 : 1);
        }, e.prototype.update = function(e) {
            var t = this.props;
            if (this.props = e, this.needsNewTexture(t) && this.buildTexture(), this.textureExists) {
                var u = this.sprite.texture.baseTexture.width, r = this.sprite.texture.baseTexture.height;
                this.sprite.scale.x = this.getSpriteScale(u, e.originalWidth, e.baseObjectScale, e.sizePercentWidth, this.props.type, e.isFlipped), 
                this.sprite.scale.y = this.getSpriteScale(r, e.originalHeight, e.baseObjectScale, e.sizePercentHeight, this.props.type, !1), 
                this.sprite.position.x = Math.round(e.x), this.sprite.position.y = Math.round(e.stageHeight - e.y), 
                this.sprite.alpha = e.opacity, this.sprite.rotation = -1 * e.headingInRadians;
                var i = e.color;
                this.hasEmoji && (i = a.HSColor.rgbWhiteColor), this.sprite.tint = a.HSColor.hexToTint(i);
            }
        }, e.prototype.needsNewTexture = function(e) {
            return e.text !== this.props.text || this.quantizedScaleY(e) !== this.quantizedScaleY(this.props) || this.quantizedScaleX(e) !== this.quantizedScaleX(this.props) || e.animationNumber !== this.props.animationNumber || e.type !== this.props.type || e.imageName !== this.props.imageName || e.color !== this.props.color && !i.onlyEmoji(e.text) && i.hasEmoji(e.text);
        }, e.prototype.quantizedScaleY = function(e) {
            var t = e.sizePercentHeight || 100;
            return Math.ceil(.01 * t);
        }, e.prototype.quantizedScaleX = function(e) {
            var t = e.sizePercentWidth || 100;
            return Math.ceil(.01 * t);
        }, e.prototype.scaleForObjectType = function(e) {
            return e === c.HSObjectType.hexagon ? 1.05 : 1;
        }, e.xmlSerializer = new XMLSerializer(), e.svgCache = {}, e;
    }();
    t.HSView = s, window.HSView = s;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(5), i = u(24), n = u(7);
    function o(e, t) {
        var u = document.createElement("canvas");
        return u.style.position = "fixed", u.style.top = e + "px", u.style.left = t + "px", 
        u.style.border = "1px solid blue", u.style.zIndex = "99999", document.body.appendChild(u), 
        u.width = i.HSVisualContext.collisionResolution, u.height = i.HSVisualContext.collisionResolution, 
        u;
    }
    t.makeDebugCanvas = o;
    var f = function() {
        function e() {
            this.numberOfPixelCollisions = 0, this.debugTwoObjects = function() {
                var t = this, u = i.HSVisualContext.collisionResolution;
                function r(e, t, u, r, i) {
                    i(e, t, u, r);
                }
                function n(e, t) {
                    var r = t.imageForCollision(), i = r.width > 2 * u || r.height > 2 * u ? 2 * u / Math.max(r.width, r.height) : 1;
                    e.width = Math.ceil(r.width * i), e.height = Math.ceil(r.height * i);
                    var n = e.getContext("2d");
                    r && (n.clearRect(0, 0, e.width, e.height), n.drawImage(r, 0, 0, r.width, r.height, 0, 0, e.width, e.height));
                }
                if (e.DEBUG) {
                    var f = o.apply(this, e.DEBUG_VIEW_OBJECT1_POS), c = o.apply(this, e.DEBUG_VIEW_OBJECT2_POS), a = o.apply(this, e.DEBUG_VIEW_OBJECT3_POS), s = o.apply(this, e.DEBUG_VIEW_OBJECT4_POS);
                    return function(e, u, i, o) {
                        n(f, e), n(c, u);
                        var d = t.boundingBoxForObject(e), h = t.boundingBoxForObject(u);
                        r(a, e, d, i, o), r(s, u, h, i, o);
                    };
                }
                return function(e, t, u) {};
            }(), this.canvas1 = document.createElement("canvas"), this.canvas2 = document.createElement("canvas");
        }
        return e.prototype.hitTest = function(e, t, u) {
            if (e.isInvisible()) return !1;
            var r = this.boundingBoxForObject(e);
            if (r.containsPoint(t, u)) {
                if (e.type === n.HSObjectType.text) return !0;
                var i = this.generatePixelTestData(this.canvas1, e, r, r), o = i.width / (r.maxX() - r.minX()), f = i.height / (r.maxY() - r.minY()), c = (t - r.minX()) * o, a = i.height - (u - r.minY()) * f;
                return t = Math.round(c), u = Math.round(a), this.pixelCoordinateHasAlpha(t, u, i);
            }
            return !1;
        }, e.prototype.collisionTest = function(e, t) {
            return t.type === n.HSObjectType.edgeOfScreen ? this.objectIsTouchingEdgeOfScreen(e) : e.type === n.HSObjectType.edgeOfScreen ? this.objectIsTouchingEdgeOfScreen(t) : this.objectsAreColliding(e, t);
        }, e.prototype.objectsAreColliding = function(t, u) {
            var r = this.boundingBoxForObject(t), i = this.boundingBoxForObject(u);
            if (0 === r.area() || 0 === i.area()) return !1;
            var n = this.intersectionBoxBetweenTwoBoxes(r, i);
            return !!this.bigEnoughCollisionIntersectionTest(t, u, r, i, n) || !!this.boundingBoxIntersectionTest(n) && (e.DEBUG && this.debugTwoObjects(t, u, n, this.prepareCanvasForPixelTest), 
            this.pixelTest(t, r, u, i, n));
        }, e.prototype.pixelTest = function(t, u, r, i, n) {
            if (this.numberOfPixelCollisions >= e.PIXEL_TESTING_THRESHOLD) return !0;
            this.numberOfPixelCollisions += 1;
            var o = this.generatePixelTestData(this.canvas1, t, u, n), f = this.generatePixelTestData(this.canvas2, r, i, n);
            return this.testPixelData(o, f);
        }, e.prototype.objectIsTouchingEdgeOfScreen = function(e) {
            var t = this.boundingBoxForObject(e);
            if (0 === t.area()) return !1;
            var u = t.centerX, i = t.centerY;
            return u <= 0 || u >= r.HSStageScene.stageWidth || i <= 0 || i >= r.HSStageScene.stageHeight;
        }, e.prototype.testPixelData = function(t, u) {
            if (!t || !u) return !1;
            var r = t, i = u;
            t.width < u.width && (r = u, i = t);
            var n = null, f = null;
            if (e.DEBUG) {
                this._debugCanvas || (this._debugCanvas = o.apply(this, e.DEBUG_VIEW_INTERSECTION_POS)), 
                f = (n = this._debugCanvas).getContext("2d");
                var c = r.width, a = r.height;
                n.width = c, n.height = a;
                var s = Math.min(5 * c, 400), d = Math.min(5 * a, 400);
                n.style.width = s + "px", n.style.height = d + "px";
            }
            for (var h = i.width / r.width, l = i.height / r.height, p = !1, S = 1; S < r.height - 1; S++) for (var g = 1; g < r.width - 1; g++) {
                var y = Math.round(g * h), b = Math.round(S * l);
                if (n) this.pixelCoordinateHasAlpha(g, S, r) ? this.pixelCoordinateHasAlpha(y, b, i) ? (f.fillStyle = "white", 
                p = !0) : f.fillStyle = "red" : this.pixelCoordinateHasAlpha(y, b, i) ? f.fillStyle = "blue" : f.fillStyle = "black", 
                f.fillRect(g, S, 1, 1); else if (this.pixelCoordinateHasAlpha(g, S, r) && this.pixelCoordinateHasAlpha(y, b, i)) return !0;
            }
            return p;
        }, e.prototype.pixelCoordinateHasAlpha = function(e, t, u) {
            var r = 4 * (t * u.width + e) + 3;
            return u.data[r] > 0;
        }, e.prototype.intersectionBoxBetweenTwoBoxes = function(e, t) {
            return e.intersectionRectWithOtherBoundingBox(t);
        }, e.prototype.bigEnoughCollisionIntersectionTest = function(e, t, u, r, i) {
            var o = .4;
            e.type > n.HSObjectType.HS_END_OF_CHARACTERS && (o = .7);
            var f = .4;
            t.type > n.HSObjectType.HS_END_OF_CHARACTERS && (f = .7);
            var c = i.area();
            return c > o * u.area() && c > f * r.area();
        }, e.prototype.boundingBoxIntersectionTest = function(e) {
            return e.halfWidth > 0 && e.halfHeight > 0;
        }, e.prototype.boundingBoxForObject = function(e) {
            return e.boundingBox();
        }, e.prototype.generatePixelTestData = function(e, t, u, r) {
            var i = (e = this.prepareCanvasForPixelTest(e, t, u, r)).getContext("2d"), n = e.width / u.width(), o = e.height / u.height(), f = Math.round((r.minX() - u.minX()) * n), c = Math.round((u.maxY() - r.maxY()) * o), a = Math.max(Math.ceil((r.maxX() - r.minX()) * n), 1), s = Math.max(Math.ceil((r.maxY() - r.minY()) * o), 1);
            return i.getImageData(f, c, a, s);
        }, e.prototype.prepareCanvasForPixelTest = function(e, t, u, r) {
            var i = t.imageForCollision();
            if (!i) return e;
            var n = function(e, t, u) {
                var r = Math.cos(u), i = Math.sin(u);
                return i < 0 && (i = -i), r < 0 && (r = -r), {
                    width: t * i + e * r,
                    height: t * r + e * i
                };
            }(Math.ceil(i.width * u.halfWidth / u.halfWidth), Math.ceil(i.height * u.halfHeight / u.halfHeight), t.headingInRadians());
            e.width = Math.ceil(n.width), e.height = Math.ceil(n.height);
            var o = e.getContext("2d");
            o.imageSmoothingEnabled = !1, o.oImageSmoothingEnabled = !1, o.msImageSmoothingEnabled = !1, 
            o.mozImageSmoothingEnabled = !1, o.webkitImageSmoothingEnabled = !1, o.clearRect(0, 0, e.width, e.height);
            var f = e.width / 2, c = e.height / 2;
            return o.translate(f, c), o.rotate(-t.headingInRadians()), t.isFlipped && o.scale(-1, 1), 
            i.width * i.height == 0 ? e : (o.drawImage(i, -i.width / 2, -i.height / 2), o.setTransform(1, 0, 0, 1, 0, 0), 
            e);
        }, e.DEBUG = !1, e.PIXEL_TESTING_THRESHOLD = 10, e.DEBUG_VIEW_OBJECT1_POS = [ 10, 0 ], 
        e.DEBUG_VIEW_OBJECT2_POS = [ 200, 0 ], e.DEBUG_VIEW_OBJECT3_POS = [ 10, 200 ], e.DEBUG_VIEW_OBJECT4_POS = [ 200, 200 ], 
        e.DEBUG_VIEW_INTERSECTION_POS = [ 300, 0 ], e;
    }();
    t.HSCollisionContext = f, window.HSCollisionContext = f;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(57);
    t.AudioContext = window.AudioContext || window.webkitAudioContext;
    var i = function() {
        function e(t) {
            var u = this;
            this.sounds = {}, this.context = e.audioContext, this.isMuted = !1, t.forEach(function(e) {
                u.sounds[e] = new r.HSSound(e, u.context);
            }), e.hasUnlockListener || (e.hasUnlockListener = !0, this.eventListenerFunc = function() {
                var e = u.context.createBufferSource();
                e.buffer = u.context.createBuffer(1, 1, 22050), e.connect(u.context.destination), 
                e.start(0), window.removeEventListener("touchstart", u.eventListenerFunc), window.removeEventListener("touchend", u.eventListenerFunc);
            }, window.addEventListener("touchstart", this.eventListenerFunc), window.addEventListener("touchend", this.eventListenerFunc));
        }
        return e.prototype.play = function(e) {
            this.sounds[e] && !this.isMuted && this.sounds[e].play();
        }, e.prototype.mute = function() {
            this.isMuted || Object.values(this.sounds).forEach(function(e) {
                return e.stop();
            }), this.isMuted = !0;
        }, e.prototype.unmute = function() {
            this.isMuted = !1;
        }, e.audioContext = new t.AudioContext(), e.hasUnlockListener = !1, e;
    }();
    t.HSSoundManager = i, window.HSSoundManager = i;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(6), o = u(5), f = u(3), c = u(29), a = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.objects = [], t;
        }
        return i(t, e), t.prototype.parseJSON = function(e) {
            var t = this;
            void 0 === e && (e = {}), e[c.OBJECTS_KEY] && e[c.OBJECTS_KEY].length > 0 ? this.objects = e[c.OBJECTS_KEY].map(function(e) {
                return t.context.findWithObjectID(f.HSObject.key, e);
            }) : e[c.OBJECTS_KEY] && 0 === e[c.OBJECTS_KEY].length ? this.objects = [] : this.objects = this.context.findAllForClassName(f.HSObject.key), 
            this.name = e.name;
        }, t.prototype.stageScene = function() {
            return new o.HSStageScene(this);
        }, t.key = "HSScene", t;
    }(n.HSManagedObject);
    t.HSScene = a, window.HSScene = a;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(10), o = u(30), f = u(33), c = u(17);
    t.FALSE_SCRIPT_KEY = "controlFalseScript";
    var a = function(e) {
        function u() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return i(u, e), u.prototype.parseJSON = function(u) {
            void 0 === u && (u = {}), e.prototype.parseJSON.call(this, u);
            var r = (u[t.FALSE_SCRIPT_KEY] || [])[n.SCRIPT_ID_KEY] || "", i = this.context.findWithObjectID("HSScript", r);
            this.scripts.push(i || new c.HSScript(this.context));
        }, u.prototype.stageBlock = function() {
            var e = this.trueScript(), t = this.falseScript();
            return new o.HSStageControl(this.type, [ e, t ], this.stageParameters());
        }, u.prototype.trueScript = function() {
            return this.scripts[0];
        }, u.prototype.falseScript = function() {
            return this.scripts[1];
        }, u.key = "HSConditionalControl", u;
    }(f.HSControlBlock);
    t.HSConditionalControl = a, window.HSConditionalControl = a;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(32), o = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return i(t, e), t.prototype.stageBlock = function() {
            return this._stageBlock || (this._stageBlock = new n.HSStageMethod(this.type, this.stageParameters())), 
            this._stageBlock;
        }, t.key = "HSMethodBlock", t;
    }(u(13).HSBlock);
    t.HSMethodBlock = o, window.HSMethodBlock = o;
}, function(e, t, u) {
    u(42), u(14), u(43), e.exports = u(18);
}, function(e, t, u) {
    var r;
    !function e(t, u, i) {
        function n(f, c) {
            if (!u[f]) {
                if (!t[f]) {
                    if (!c && ("function" == typeof r && r)) return r(f, !0);
                    if (o) return o(f, !0);
                    var a = new Error("Cannot find module '" + f + "'");
                    throw a.code = "MODULE_NOT_FOUND", a;
                }
                var s = u[f] = {
                    exports: {}
                };
                t[f][0].call(s.exports, function(e) {
                    var u = t[f][1][e];
                    return n(u || e);
                }, s, s.exports, e, t, u, i);
            }
            return u[f].exports;
        }
        for (var o = "function" == typeof r && r, f = 0; f < i.length; f++) n(i[f]);
        return n;
    }({
        1: [ function(e, t, u) {
            (function(t) {
                var r = e("path");
                function i(e) {
                    e = e.replace(/[\ufe00-\ufe0f]/g, "");
                    for (var t = [], r = 0; r < e.length; r++) t.push(("0000" + e.charCodeAt(r).toString(16)).slice(-4));
                    return u.basePath.replace(/\/$/, "") + "/" + t.join("-") + ".png";
                }
                u.imageDir = r.join(t, "images"), u.basePath = u.imageDir, u.regex = e("./regex"), 
                u.nativeSupport = function() {
                    if ("undefined" == typeof document) return !1;
                    var e = document.createElement("canvas");
                    if (!e.getContext) return !1;
                    var t = e.getContext("2d");
                    return t.textBaseline = "top", t.font = "32px sans-serif", t.fillText("😃", 0, 0), 
                    0 !== t.getImageData(16, 16, 1, 1).data[0];
                }();
                var n = new RegExp("^(" + u.regex.toString().slice(1, -2) + ")$");
                u.getImage = function(e) {
                    return n.test(e) ? i(e) : null;
                }, u.replace = function(e) {
                    return e = "" + e, u.nativeSupport ? e : e.replace(u.regex, function(e) {
                        return '<img class="emoji" src="' + i(e) + '" alt="' + e + '">';
                    });
                };
            }).call(this, "/");
        }, {
            "./regex": 3,
            path: 4
        } ],
        2: [ function(e, t, u) {
            window.emoji = window.emoji || e("./index.js");
        }, {
            "./index.js": 1
        } ],
        3: [ function(e, t, u) {
            t.exports = /(?:\ud83e\ufe0f?\udd18\ufe0f?\ud83c\ufe0f?\udfff|\ud83e\ufe0f?\udd18\ufe0f?\ud83c\ufe0f?\udffe|\ud83e\ufe0f?\udd18\ufe0f?\ud83c\ufe0f?\udffd|\ud83e\ufe0f?\udd18\ufe0f?\ud83c\ufe0f?\udffc|\ud83e\ufe0f?\udd18\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udec0\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udec0\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udec0\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udec0\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udec0\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udeb6\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udeb6\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udeb6\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udeb6\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udeb6\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udeb5\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udeb5\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udeb5\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udeb5\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udeb5\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udeb4\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udeb4\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udeb4\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udeb4\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udeb4\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udea3\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udea3\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udea3\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udea3\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udea3\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\ude4f\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\ude4f\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\ude4f\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\ude4f\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\ude4f\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\ude4e\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\ude4e\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\ude4e\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\ude4e\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\ude4e\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\ude4d\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\ude4d\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\ude4d\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\ude4d\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\ude4d\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\ude4c\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\ude4c\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\ude4c\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\ude4c\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\ude4c\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\ude4b\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\ude4b\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\ude4b\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\ude4b\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\ude4b\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\ude47\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\ude47\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\ude47\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\ude47\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\ude47\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\ude46\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\ude46\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\ude46\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\ude46\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\ude46\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\ude45\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\ude45\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\ude45\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\ude45\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\ude45\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udd96\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udd96\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udd96\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udd96\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udd96\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udd95\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udd95\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udd95\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udd95\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udd95\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udd90\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udd90\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udd90\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udd90\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udd90\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udcaa\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udcaa\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udcaa\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udcaa\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udcaa\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc87\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc87\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc87\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc87\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc87\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc86\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc86\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc86\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc86\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc86\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc85\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc85\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc85\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc85\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc85\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc83\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc83\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc83\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc83\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc83\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc82\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc82\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc82\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc82\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc82\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc81\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc81\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc81\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc81\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc81\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc7c\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc7c\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc7c\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc7c\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc7c\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc78\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc78\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc78\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc78\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc78\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc77\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc77\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc77\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc77\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc77\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc76\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc76\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc76\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc76\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc76\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc75\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc75\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc75\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc75\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc75\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc74\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc74\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc74\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc74\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc74\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc73\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc73\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc73\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc73\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc73\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc72\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc72\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc72\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc72\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc72\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc71\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc71\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc71\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc71\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc71\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc70\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc70\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc70\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc70\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc70\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc6e\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc6e\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc6e\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc6e\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc6e\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc69\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc69\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc69\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc69\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc69\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc68\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc68\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc68\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc68\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc68\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc67\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc67\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc67\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc67\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc67\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc66\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc66\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc66\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc66\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc66\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc50\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc50\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc50\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc50\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc50\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc4f\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc4f\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc4f\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc4f\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc4f\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc4e\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc4e\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc4e\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc4e\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc4e\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc4d\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc4d\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc4d\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc4d\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc4d\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc4c\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc4c\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc4c\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc4c\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc4c\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc4b\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc4b\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc4b\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc4b\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc4b\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc4a\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc4a\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc4a\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc4a\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc4a\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc49\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc49\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc49\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc49\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc49\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc48\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc48\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc48\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc48\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc48\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc47\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc47\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc47\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc47\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc47\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc46\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc46\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc46\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc46\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc46\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc43\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc43\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc43\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc43\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc43\ufe0f?\ud83c\ufe0f?\udffb|\ud83d\ufe0f?\udc42\ufe0f?\ud83c\ufe0f?\udfff|\ud83d\ufe0f?\udc42\ufe0f?\ud83c\ufe0f?\udffe|\ud83d\ufe0f?\udc42\ufe0f?\ud83c\ufe0f?\udffd|\ud83d\ufe0f?\udc42\ufe0f?\ud83c\ufe0f?\udffc|\ud83d\ufe0f?\udc42\ufe0f?\ud83c\ufe0f?\udffb|\ud83c\ufe0f?\udfcb\ufe0f?\ud83c\ufe0f?\udfff|\ud83c\ufe0f?\udfcb\ufe0f?\ud83c\ufe0f?\udffe|\ud83c\ufe0f?\udfcb\ufe0f?\ud83c\ufe0f?\udffd|\ud83c\ufe0f?\udfcb\ufe0f?\ud83c\ufe0f?\udffc|\ud83c\ufe0f?\udfcb\ufe0f?\ud83c\ufe0f?\udffb|\ud83c\ufe0f?\udfca\ufe0f?\ud83c\ufe0f?\udfff|\ud83c\ufe0f?\udfca\ufe0f?\ud83c\ufe0f?\udffe|\ud83c\ufe0f?\udfca\ufe0f?\ud83c\ufe0f?\udffd|\ud83c\ufe0f?\udfca\ufe0f?\ud83c\ufe0f?\udffc|\ud83c\ufe0f?\udfca\ufe0f?\ud83c\ufe0f?\udffb|\ud83c\ufe0f?\udfc7\ufe0f?\ud83c\ufe0f?\udfff|\ud83c\ufe0f?\udfc7\ufe0f?\ud83c\ufe0f?\udffe|\ud83c\ufe0f?\udfc7\ufe0f?\ud83c\ufe0f?\udffd|\ud83c\ufe0f?\udfc7\ufe0f?\ud83c\ufe0f?\udffc|\ud83c\ufe0f?\udfc7\ufe0f?\ud83c\ufe0f?\udffb|\ud83c\ufe0f?\udfc4\ufe0f?\ud83c\ufe0f?\udfff|\ud83c\ufe0f?\udfc4\ufe0f?\ud83c\ufe0f?\udffe|\ud83c\ufe0f?\udfc4\ufe0f?\ud83c\ufe0f?\udffd|\ud83c\ufe0f?\udfc4\ufe0f?\ud83c\ufe0f?\udffc|\ud83c\ufe0f?\udfc4\ufe0f?\ud83c\ufe0f?\udffb|\ud83c\ufe0f?\udfc3\ufe0f?\ud83c\ufe0f?\udfff|\ud83c\ufe0f?\udfc3\ufe0f?\ud83c\ufe0f?\udffe|\ud83c\ufe0f?\udfc3\ufe0f?\ud83c\ufe0f?\udffd|\ud83c\ufe0f?\udfc3\ufe0f?\ud83c\ufe0f?\udffc|\ud83c\ufe0f?\udfc3\ufe0f?\ud83c\ufe0f?\udffb|\ud83c\ufe0f?\udf85\ufe0f?\ud83c\ufe0f?\udfff|\ud83c\ufe0f?\udf85\ufe0f?\ud83c\ufe0f?\udffe|\ud83c\ufe0f?\udf85\ufe0f?\ud83c\ufe0f?\udffd|\ud83c\ufe0f?\udf85\ufe0f?\ud83c\ufe0f?\udffc|\ud83c\ufe0f?\udf85\ufe0f?\ud83c\ufe0f?\udffb|\ud83c\ufe0f?\uddff\ufe0f?\ud83c\ufe0f?\uddfc|\ud83c\ufe0f?\uddff\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\uddff\ufe0f?\ud83c\ufe0f?\udde6|\ud83c\ufe0f?\uddfe\ufe0f?\ud83c\ufe0f?\uddf9|\ud83c\ufe0f?\uddfe\ufe0f?\ud83c\ufe0f?\uddea|\ud83c\ufe0f?\uddfd\ufe0f?\ud83c\ufe0f?\uddf0|\ud83c\ufe0f?\uddfc\ufe0f?\ud83c\ufe0f?\uddf8|\ud83c\ufe0f?\uddfc\ufe0f?\ud83c\ufe0f?\uddeb|\ud83c\ufe0f?\uddfb\ufe0f?\ud83c\ufe0f?\uddfa|\ud83c\ufe0f?\uddfb\ufe0f?\ud83c\ufe0f?\uddf3|\ud83c\ufe0f?\uddfb\ufe0f?\ud83c\ufe0f?\uddee|\ud83c\ufe0f?\uddfb\ufe0f?\ud83c\ufe0f?\uddec|\ud83c\ufe0f?\uddfb\ufe0f?\ud83c\ufe0f?\uddea|\ud83c\ufe0f?\uddfb\ufe0f?\ud83c\ufe0f?\udde8|\ud83c\ufe0f?\uddfb\ufe0f?\ud83c\ufe0f?\udde6|\ud83c\ufe0f?\uddfa\ufe0f?\ud83c\ufe0f?\uddff|\ud83c\ufe0f?\uddfa\ufe0f?\ud83c\ufe0f?\uddfe|\ud83c\ufe0f?\uddfa\ufe0f?\ud83c\ufe0f?\uddf8|\ud83c\ufe0f?\uddfa\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\uddfa\ufe0f?\ud83c\ufe0f?\uddec|\ud83c\ufe0f?\uddfa\ufe0f?\ud83c\ufe0f?\udde6|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\uddff|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\uddfc|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\uddfb|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\uddf9|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\uddf7|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\uddf4|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\uddf3|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\uddf1|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\uddf0|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\uddef|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\udded|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\uddec|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\uddeb|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\udde9|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\udde8|\ud83c\ufe0f?\uddf9\ufe0f?\ud83c\ufe0f?\udde6|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\uddff|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\uddfe|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\uddfd|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\uddfb|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\uddf9|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\uddf8|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\uddf7|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\uddf4|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\uddf3|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\uddf1|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\uddf0|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\uddef|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\uddee|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\udded|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\uddec|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\uddea|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\udde9|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\udde8|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\udde7|\ud83c\ufe0f?\uddf8\ufe0f?\ud83c\ufe0f?\udde6|\ud83c\ufe0f?\uddf7\ufe0f?\ud83c\ufe0f?\uddfc|\ud83c\ufe0f?\uddf7\ufe0f?\ud83c\ufe0f?\uddfa|\ud83c\ufe0f?\uddf7\ufe0f?\ud83c\ufe0f?\uddf8|\ud83c\ufe0f?\uddf7\ufe0f?\ud83c\ufe0f?\uddf4|\ud83c\ufe0f?\uddf7\ufe0f?\ud83c\ufe0f?\uddea|\ud83c\ufe0f?\uddf6\ufe0f?\ud83c\ufe0f?\udde6|\ud83c\ufe0f?\uddf5\ufe0f?\ud83c\ufe0f?\uddfe|\ud83c\ufe0f?\uddf5\ufe0f?\ud83c\ufe0f?\uddfc|\ud83c\ufe0f?\uddf5\ufe0f?\ud83c\ufe0f?\uddf9|\ud83c\ufe0f?\uddf5\ufe0f?\ud83c\ufe0f?\uddf8|\ud83c\ufe0f?\uddf5\ufe0f?\ud83c\ufe0f?\uddf7|\ud83c\ufe0f?\uddf5\ufe0f?\ud83c\ufe0f?\uddf3|\ud83c\ufe0f?\uddf5\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\uddf5\ufe0f?\ud83c\ufe0f?\uddf1|\ud83c\ufe0f?\uddf5\ufe0f?\ud83c\ufe0f?\uddf0|\ud83c\ufe0f?\uddf5\ufe0f?\ud83c\ufe0f?\udded|\ud83c\ufe0f?\uddf5\ufe0f?\ud83c\ufe0f?\uddec|\ud83c\ufe0f?\uddf5\ufe0f?\ud83c\ufe0f?\uddeb|\ud83c\ufe0f?\uddf5\ufe0f?\ud83c\ufe0f?\uddea|\ud83c\ufe0f?\uddf5\ufe0f?\ud83c\ufe0f?\udde6|\ud83c\ufe0f?\uddf4\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\uddf3\ufe0f?\ud83c\ufe0f?\uddff|\ud83c\ufe0f?\uddf3\ufe0f?\ud83c\ufe0f?\uddfa|\ud83c\ufe0f?\uddf3\ufe0f?\ud83c\ufe0f?\uddf7|\ud83c\ufe0f?\uddf3\ufe0f?\ud83c\ufe0f?\uddf5|\ud83c\ufe0f?\uddf3\ufe0f?\ud83c\ufe0f?\uddf4|\ud83c\ufe0f?\uddf3\ufe0f?\ud83c\ufe0f?\uddf1|\ud83c\ufe0f?\uddf3\ufe0f?\ud83c\ufe0f?\uddee|\ud83c\ufe0f?\uddf3\ufe0f?\ud83c\ufe0f?\uddec|\ud83c\ufe0f?\uddf3\ufe0f?\ud83c\ufe0f?\uddeb|\ud83c\ufe0f?\uddf3\ufe0f?\ud83c\ufe0f?\uddea|\ud83c\ufe0f?\uddf3\ufe0f?\ud83c\ufe0f?\udde8|\ud83c\ufe0f?\uddf3\ufe0f?\ud83c\ufe0f?\udde6|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddff|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddfe|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddfd|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddfc|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddfb|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddfa|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddf9|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddf8|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddf7|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddf6|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddf5|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddf4|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddf3|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddf1|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddf0|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\udded|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddec|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddeb|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\uddea|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\udde9|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\udde8|\ud83c\ufe0f?\uddf2\ufe0f?\ud83c\ufe0f?\udde6|\ud83c\ufe0f?\uddf1\ufe0f?\ud83c\ufe0f?\uddfe|\ud83c\ufe0f?\uddf1\ufe0f?\ud83c\ufe0f?\uddfb|\ud83c\ufe0f?\uddf1\ufe0f?\ud83c\ufe0f?\uddfa|\ud83c\ufe0f?\uddf1\ufe0f?\ud83c\ufe0f?\uddf9|\ud83c\ufe0f?\uddf1\ufe0f?\ud83c\ufe0f?\uddf8|\ud83c\ufe0f?\uddf1\ufe0f?\ud83c\ufe0f?\uddf7|\ud83c\ufe0f?\uddf1\ufe0f?\ud83c\ufe0f?\uddf0|\ud83c\ufe0f?\uddf1\ufe0f?\ud83c\ufe0f?\uddee|\ud83c\ufe0f?\uddf1\ufe0f?\ud83c\ufe0f?\udde8|\ud83c\ufe0f?\uddf1\ufe0f?\ud83c\ufe0f?\udde7|\ud83c\ufe0f?\uddf1\ufe0f?\ud83c\ufe0f?\udde6|\ud83c\ufe0f?\uddf0\ufe0f?\ud83c\ufe0f?\uddff|\ud83c\ufe0f?\uddf0\ufe0f?\ud83c\ufe0f?\uddfe|\ud83c\ufe0f?\uddf0\ufe0f?\ud83c\ufe0f?\uddfc|\ud83c\ufe0f?\uddf0\ufe0f?\ud83c\ufe0f?\uddf7|\ud83c\ufe0f?\uddf0\ufe0f?\ud83c\ufe0f?\uddf5|\ud83c\ufe0f?\uddf0\ufe0f?\ud83c\ufe0f?\uddf3|\ud83c\ufe0f?\uddf0\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\uddf0\ufe0f?\ud83c\ufe0f?\uddee|\ud83c\ufe0f?\uddf0\ufe0f?\ud83c\ufe0f?\udded|\ud83c\ufe0f?\uddf0\ufe0f?\ud83c\ufe0f?\uddec|\ud83c\ufe0f?\uddf0\ufe0f?\ud83c\ufe0f?\uddea|\ud83c\ufe0f?\uddef\ufe0f?\ud83c\ufe0f?\uddf5|\ud83c\ufe0f?\uddef\ufe0f?\ud83c\ufe0f?\uddf4|\ud83c\ufe0f?\uddef\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\uddef\ufe0f?\ud83c\ufe0f?\uddea|\ud83c\ufe0f?\uddee\ufe0f?\ud83c\ufe0f?\uddf9|\ud83c\ufe0f?\uddee\ufe0f?\ud83c\ufe0f?\uddf8|\ud83c\ufe0f?\uddee\ufe0f?\ud83c\ufe0f?\uddf7|\ud83c\ufe0f?\uddee\ufe0f?\ud83c\ufe0f?\uddf6|\ud83c\ufe0f?\uddee\ufe0f?\ud83c\ufe0f?\uddf4|\ud83c\ufe0f?\uddee\ufe0f?\ud83c\ufe0f?\uddf3|\ud83c\ufe0f?\uddee\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\uddee\ufe0f?\ud83c\ufe0f?\uddf1|\ud83c\ufe0f?\uddee\ufe0f?\ud83c\ufe0f?\uddea|\ud83c\ufe0f?\uddee\ufe0f?\ud83c\ufe0f?\udde9|\ud83c\ufe0f?\uddee\ufe0f?\ud83c\ufe0f?\udde8|\ud83c\ufe0f?\udded\ufe0f?\ud83c\ufe0f?\uddfa|\ud83c\ufe0f?\udded\ufe0f?\ud83c\ufe0f?\uddf9|\ud83c\ufe0f?\udded\ufe0f?\ud83c\ufe0f?\uddf7|\ud83c\ufe0f?\udded\ufe0f?\ud83c\ufe0f?\uddf3|\ud83c\ufe0f?\udded\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\udded\ufe0f?\ud83c\ufe0f?\uddf0|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\uddfe|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\uddfc|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\uddfa|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\uddf9|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\uddf8|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\uddf7|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\uddf6|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\uddf5|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\uddf3|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\uddf1|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\uddee|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\udded|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\uddec|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\uddeb|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\uddea|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\udde9|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\udde7|\ud83c\ufe0f?\uddec\ufe0f?\ud83c\ufe0f?\udde6|\ud83c\ufe0f?\uddeb\ufe0f?\ud83c\ufe0f?\uddf7|\ud83c\ufe0f?\uddeb\ufe0f?\ud83c\ufe0f?\uddf4|\ud83c\ufe0f?\uddeb\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\uddeb\ufe0f?\ud83c\ufe0f?\uddf0|\ud83c\ufe0f?\uddeb\ufe0f?\ud83c\ufe0f?\uddef|\ud83c\ufe0f?\uddeb\ufe0f?\ud83c\ufe0f?\uddee|\ud83c\ufe0f?\uddea\ufe0f?\ud83c\ufe0f?\uddfa|\ud83c\ufe0f?\uddea\ufe0f?\ud83c\ufe0f?\uddf9|\ud83c\ufe0f?\uddea\ufe0f?\ud83c\ufe0f?\uddf8|\ud83c\ufe0f?\uddea\ufe0f?\ud83c\ufe0f?\uddf7|\ud83c\ufe0f?\uddea\ufe0f?\ud83c\ufe0f?\udded|\ud83c\ufe0f?\uddea\ufe0f?\ud83c\ufe0f?\uddec|\ud83c\ufe0f?\uddea\ufe0f?\ud83c\ufe0f?\uddea|\ud83c\ufe0f?\uddea\ufe0f?\ud83c\ufe0f?\udde8|\ud83c\ufe0f?\uddea\ufe0f?\ud83c\ufe0f?\udde6|\ud83c\ufe0f?\udde9\ufe0f?\ud83c\ufe0f?\uddff|\ud83c\ufe0f?\udde9\ufe0f?\ud83c\ufe0f?\uddf4|\ud83c\ufe0f?\udde9\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\udde9\ufe0f?\ud83c\ufe0f?\uddf0|\ud83c\ufe0f?\udde9\ufe0f?\ud83c\ufe0f?\uddef|\ud83c\ufe0f?\udde9\ufe0f?\ud83c\ufe0f?\uddec|\ud83c\ufe0f?\udde9\ufe0f?\ud83c\ufe0f?\uddea|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\uddff|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\uddfe|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\uddfd|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\uddfc|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\uddfb|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\uddfa|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\uddf7|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\uddf5|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\uddf4|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\uddf3|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\uddf1|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\uddf0|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\uddee|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\udded|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\uddec|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\uddeb|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\udde9|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\udde8|\ud83c\ufe0f?\udde8\ufe0f?\ud83c\ufe0f?\udde6|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddff|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddfe|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddfc|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddfb|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddf9|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddf8|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddf7|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddf6|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddf4|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddf3|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddf1|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddef|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddee|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\udded|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddec|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddeb|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\uddea|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\udde9|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\udde7|\ud83c\ufe0f?\udde7\ufe0f?\ud83c\ufe0f?\udde6|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\uddff|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\uddfd|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\uddfc|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\uddfa|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\uddf9|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\uddf8|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\uddf7|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\uddf6|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\uddf4|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\uddf2|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\uddf1|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\uddee|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\uddec|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\uddeb|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\uddea|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\udde9|\ud83c\ufe0f?\udde6\ufe0f?\ud83c\ufe0f?\udde8|\u270d\ufe0f?\ud83c\ufe0f?\udfff|\u270d\ufe0f?\ud83c\ufe0f?\udffe|\u270d\ufe0f?\ud83c\ufe0f?\udffd|\u270d\ufe0f?\ud83c\ufe0f?\udffc|\u270d\ufe0f?\ud83c\ufe0f?\udffb|\u270c\ufe0f?\ud83c\ufe0f?\udfff|\u270c\ufe0f?\ud83c\ufe0f?\udffe|\u270c\ufe0f?\ud83c\ufe0f?\udffd|\u270c\ufe0f?\ud83c\ufe0f?\udffc|\u270c\ufe0f?\ud83c\ufe0f?\udffb|\u270b\ufe0f?\ud83c\ufe0f?\udfff|\u270b\ufe0f?\ud83c\ufe0f?\udffe|\u270b\ufe0f?\ud83c\ufe0f?\udffd|\u270b\ufe0f?\ud83c\ufe0f?\udffc|\u270b\ufe0f?\ud83c\ufe0f?\udffb|\u270a\ufe0f?\ud83c\ufe0f?\udfff|\u270a\ufe0f?\ud83c\ufe0f?\udffe|\u270a\ufe0f?\ud83c\ufe0f?\udffd|\u270a\ufe0f?\ud83c\ufe0f?\udffc|\u270a\ufe0f?\ud83c\ufe0f?\udffb|\u26f9\ufe0f?\ud83c\ufe0f?\udfff|\u26f9\ufe0f?\ud83c\ufe0f?\udffe|\u26f9\ufe0f?\ud83c\ufe0f?\udffd|\u26f9\ufe0f?\ud83c\ufe0f?\udffc|\u26f9\ufe0f?\ud83c\ufe0f?\udffb|\u261d\ufe0f?\ud83c\ufe0f?\udfff|\u261d\ufe0f?\ud83c\ufe0f?\udffe|\u261d\ufe0f?\ud83c\ufe0f?\udffd|\u261d\ufe0f?\ud83c\ufe0f?\udffc|\u261d\ufe0f?\ud83c\ufe0f?\udffb|\u0039\ufe0f?\u20e3|\u0038\ufe0f?\u20e3|\u0037\ufe0f?\u20e3|\u0036\ufe0f?\u20e3|\u0035\ufe0f?\u20e3|\u0034\ufe0f?\u20e3|\u0033\ufe0f?\u20e3|\u0032\ufe0f?\u20e3|\u0031\ufe0f?\u20e3|\u0030\ufe0f?\u20e3|\u002a\ufe0f?\u20e3|\u0023\ufe0f?\u20e3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0])[\uFE00-\uFE0D\uFE0F]?(?!\uFE0E)/g;
        }, {} ],
        4: [ function(e, t, u) {
            (function(e) {
                function t(e, t) {
                    for (var u = 0, r = e.length - 1; r >= 0; r--) {
                        var i = e[r];
                        "." === i ? e.splice(r, 1) : ".." === i ? (e.splice(r, 1), u++) : u && (e.splice(r, 1), 
                        u--);
                    }
                    if (t) for (;u--; u) e.unshift("..");
                    return e;
                }
                var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, i = function(e) {
                    return r.exec(e).slice(1);
                };
                function n(e, t) {
                    if (e.filter) return e.filter(t);
                    for (var u = [], r = 0; r < e.length; r++) t(e[r], r, e) && u.push(e[r]);
                    return u;
                }
                u.resolve = function() {
                    for (var u = "", r = !1, i = arguments.length - 1; i >= -1 && !r; i--) {
                        var o = i >= 0 ? arguments[i] : e.cwd();
                        if ("string" != typeof o) throw new TypeError("Arguments to path.resolve must be strings");
                        o && (u = o + "/" + u, r = "/" === o.charAt(0));
                    }
                    return (r ? "/" : "") + (u = t(n(u.split("/"), function(e) {
                        return !!e;
                    }), !r).join("/")) || ".";
                }, u.normalize = function(e) {
                    var r = u.isAbsolute(e), i = "/" === o(e, -1);
                    return (e = t(n(e.split("/"), function(e) {
                        return !!e;
                    }), !r).join("/")) || r || (e = "."), e && i && (e += "/"), (r ? "/" : "") + e;
                }, u.isAbsolute = function(e) {
                    return "/" === e.charAt(0);
                }, u.join = function() {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return u.normalize(n(e, function(e, t) {
                        if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                        return e;
                    }).join("/"));
                }, u.relative = function(e, t) {
                    function r(e) {
                        for (var t = 0; t < e.length && "" === e[t]; t++) ;
                        for (var u = e.length - 1; u >= 0 && "" === e[u]; u--) ;
                        return t > u ? [] : e.slice(t, u - t + 1);
                    }
                    e = u.resolve(e).substr(1), t = u.resolve(t).substr(1);
                    for (var i = r(e.split("/")), n = r(t.split("/")), o = Math.min(i.length, n.length), f = o, c = 0; c < o; c++) if (i[c] !== n[c]) {
                        f = c;
                        break;
                    }
                    var a = [];
                    for (c = f; c < i.length; c++) a.push("..");
                    return (a = a.concat(n.slice(f))).join("/");
                }, u.sep = "/", u.delimiter = ":", u.dirname = function(e) {
                    var t = i(e), u = t[0], r = t[1];
                    return u || r ? (r && (r = r.substr(0, r.length - 1)), u + r) : ".";
                }, u.basename = function(e, t) {
                    var u = i(e)[2];
                    return t && u.substr(-1 * t.length) === t && (u = u.substr(0, u.length - t.length)), 
                    u;
                }, u.extname = function(e) {
                    return i(e)[3];
                };
                var o = "b" === "ab".substr(-1) ? function(e, t, u) {
                    return e.substr(t, u);
                } : function(e, t, u) {
                    return t < 0 && (t = e.length + t), e.substr(t, u);
                };
            }).call(this, e("_process"));
        }, {
            _process: 5
        } ],
        5: [ function(e, t, u) {
            var r, i = t.exports = {}, n = [], o = !1, f = -1;
            function c() {
                o = !1, r.length ? n = r.concat(n) : f = -1, n.length && a();
            }
            function a() {
                if (!o) {
                    var e = setTimeout(c);
                    o = !0;
                    for (var t = n.length; t; ) {
                        for (r = n, n = []; ++f < t; ) r && r[f].run();
                        f = -1, t = n.length;
                    }
                    r = null, o = !1, clearTimeout(e);
                }
            }
            function s(e, t) {
                this.fun = e, this.array = t;
            }
            function d() {}
            i.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var u = 1; u < arguments.length; u++) t[u - 1] = arguments[u];
                n.push(new s(e, t)), 1 !== n.length || o || setTimeout(a, 0);
            }, s.prototype.run = function() {
                this.fun.apply(null, this.array);
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", 
            i.versions = {}, i.on = d, i.addListener = d, i.once = d, i.off = d, i.removeListener = d, 
            i.removeAllListeners = d, i.emit = d, i.binding = function(e) {
                throw new Error("process.binding is not supported");
            }, i.cwd = function() {
                return "/";
            }, i.chdir = function(e) {
                throw new Error("process.chdir is not supported");
            }, i.umask = function() {
                return 0;
            };
        }, {} ]
    }, {}, [ 2 ]);
}, function(e, t, u) {
    var r;
    !function() {
        var i = /^[\s,#]+/, n = /\s+$/, o = 0, f = Math, c = f.round, a = f.min, s = f.max, d = f.random;
        function h(e, t) {
            if (t = t || {}, (e = e || "") instanceof h) return e;
            if (!(this instanceof h)) return new h(e, t);
            var u = function(e) {
                var t = {
                    r: 0,
                    g: 0,
                    b: 0
                }, u = 1, r = !1, o = !1;
                "string" == typeof e && (e = function(e) {
                    e = e.replace(i, "").replace(n, "").toLowerCase();
                    var t, u = !1;
                    if (k[e]) e = k[e], u = !0; else if ("transparent" == e) return {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0,
                        format: "name"
                    };
                    if (t = L.rgb.exec(e)) return {
                        r: t[1],
                        g: t[2],
                        b: t[3]
                    };
                    if (t = L.rgba.exec(e)) return {
                        r: t[1],
                        g: t[2],
                        b: t[3],
                        a: t[4]
                    };
                    if (t = L.hsl.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        l: t[3]
                    };
                    if (t = L.hsla.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        l: t[3],
                        a: t[4]
                    };
                    if (t = L.hsv.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        v: t[3]
                    };
                    if (t = L.hsva.exec(e)) return {
                        h: t[1],
                        s: t[2],
                        v: t[3],
                        a: t[4]
                    };
                    if (t = L.hex8.exec(e)) return {
                        a: (r = t[1], R(r) / 255),
                        r: R(t[2]),
                        g: R(t[3]),
                        b: R(t[4]),
                        format: u ? "name" : "hex8"
                    };
                    var r;
                    if (t = L.hex6.exec(e)) return {
                        r: R(t[1]),
                        g: R(t[2]),
                        b: R(t[3]),
                        format: u ? "name" : "hex"
                    };
                    if (t = L.hex3.exec(e)) return {
                        r: R(t[1] + "" + t[1]),
                        g: R(t[2] + "" + t[2]),
                        b: R(t[3] + "" + t[3]),
                        format: u ? "name" : "hex"
                    };
                    return !1;
                }(e));
                "object" == typeof e && (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b") ? (c = e.r, 
                d = e.g, h = e.b, t = {
                    r: 255 * M(c, 255),
                    g: 255 * M(d, 255),
                    b: 255 * M(h, 255)
                }, r = !0, o = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : e.hasOwnProperty("h") && e.hasOwnProperty("s") && e.hasOwnProperty("v") ? (e.s = D(e.s), 
                e.v = D(e.v), t = function(e, t, u) {
                    e = 6 * M(e, 360), t = M(t, 100), u = M(u, 100);
                    var r = f.floor(e), i = e - r, n = u * (1 - t), o = u * (1 - i * t), c = u * (1 - (1 - i) * t), a = r % 6;
                    return {
                        r: 255 * [ u, o, n, n, c, u ][a],
                        g: 255 * [ c, u, u, o, n, n ][a],
                        b: 255 * [ n, n, c, u, u, o ][a]
                    };
                }(e.h, e.s, e.v), r = !0, o = "hsv") : e.hasOwnProperty("h") && e.hasOwnProperty("s") && e.hasOwnProperty("l") && (e.s = D(e.s), 
                e.l = D(e.l), t = function(e, t, u) {
                    var r, i, n;
                    function o(e, t, u) {
                        return u < 0 && (u += 1), u > 1 && (u -= 1), u < 1 / 6 ? e + 6 * (t - e) * u : u < .5 ? t : u < 2 / 3 ? e + (t - e) * (2 / 3 - u) * 6 : e;
                    }
                    if (e = M(e, 360), t = M(t, 100), u = M(u, 100), 0 === t) r = i = n = u; else {
                        var f = u < .5 ? u * (1 + t) : u + t - u * t, c = 2 * u - f;
                        r = o(c, f, e + 1 / 3), i = o(c, f, e), n = o(c, f, e - 1 / 3);
                    }
                    return {
                        r: 255 * r,
                        g: 255 * i,
                        b: 255 * n
                    };
                }(e.h, e.s, e.l), r = !0, o = "hsl"), e.hasOwnProperty("a") && (u = e.a));
                var c, d, h;
                return u = P(u), {
                    ok: r,
                    format: e.format || o,
                    r: a(255, s(t.r, 0)),
                    g: a(255, s(t.g, 0)),
                    b: a(255, s(t.b, 0)),
                    a: u
                };
            }(e);
            this._originalInput = e, this._r = u.r, this._g = u.g, this._b = u.b, this._a = u.a, 
            this._roundA = c(100 * this._a) / 100, this._format = t.format || u.format, this._gradientType = t.gradientType, 
            this._r < 1 && (this._r = c(this._r)), this._g < 1 && (this._g = c(this._g)), this._b < 1 && (this._b = c(this._b)), 
            this._ok = u.ok, this._tc_id = o++;
        }
        function l(e, t, u) {
            e = M(e, 255), t = M(t, 255), u = M(u, 255);
            var r, i, n = s(e, t, u), o = a(e, t, u), f = (n + o) / 2;
            if (n == o) r = i = 0; else {
                var c = n - o;
                switch (i = f > .5 ? c / (2 - n - o) : c / (n + o), n) {
                  case e:
                    r = (t - u) / c + (t < u ? 6 : 0);
                    break;

                  case t:
                    r = (u - e) / c + 2;
                    break;

                  case u:
                    r = (e - t) / c + 4;
                }
                r /= 6;
            }
            return {
                h: r,
                s: i,
                l: f
            };
        }
        function p(e, t, u) {
            e = M(e, 255), t = M(t, 255), u = M(u, 255);
            var r, i, n = s(e, t, u), o = a(e, t, u), f = n, c = n - o;
            if (i = 0 === n ? 0 : c / n, n == o) r = 0; else {
                switch (n) {
                  case e:
                    r = (t - u) / c + (t < u ? 6 : 0);
                    break;

                  case t:
                    r = (u - e) / c + 2;
                    break;

                  case u:
                    r = (e - t) / c + 4;
                }
                r /= 6;
            }
            return {
                h: r,
                s: i,
                v: f
            };
        }
        function S(e, t, u, r) {
            var i = [ A(c(e).toString(16)), A(c(t).toString(16)), A(c(u).toString(16)) ];
            return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
        }
        function g(e, t, u, r) {
            var i;
            return [ A((i = r, Math.round(255 * parseFloat(i)).toString(16))), A(c(e).toString(16)), A(c(t).toString(16)), A(c(u).toString(16)) ].join("");
        }
        function y(e, t) {
            t = 0 === t ? 0 : t || 10;
            var u = h(e).toHsl();
            return u.s -= t / 100, u.s = I(u.s), h(u);
        }
        function b(e, t) {
            t = 0 === t ? 0 : t || 10;
            var u = h(e).toHsl();
            return u.s += t / 100, u.s = I(u.s), h(u);
        }
        function v(e) {
            return h(e).desaturate(100);
        }
        function T(e, t) {
            t = 0 === t ? 0 : t || 10;
            var u = h(e).toHsl();
            return u.l += t / 100, u.l = I(u.l), h(u);
        }
        function m(e, t) {
            t = 0 === t ? 0 : t || 10;
            var u = h(e).toRgb();
            return u.r = s(0, a(255, u.r - c(-t / 100 * 255))), u.g = s(0, a(255, u.g - c(-t / 100 * 255))), 
            u.b = s(0, a(255, u.b - c(-t / 100 * 255))), h(u);
        }
        function E(e, t) {
            t = 0 === t ? 0 : t || 10;
            var u = h(e).toHsl();
            return u.l -= t / 100, u.l = I(u.l), h(u);
        }
        function O(e, t) {
            var u = h(e).toHsl(), r = (c(u.h) + t) % 360;
            return u.h = r < 0 ? 360 + r : r, h(u);
        }
        function H(e) {
            var t = h(e).toHsl();
            return t.h = (t.h + 180) % 360, h(t);
        }
        function w(e) {
            var t = h(e).toHsl(), u = t.h;
            return [ h(e), h({
                h: (u + 120) % 360,
                s: t.s,
                l: t.l
            }), h({
                h: (u + 240) % 360,
                s: t.s,
                l: t.l
            }) ];
        }
        function _(e) {
            var t = h(e).toHsl(), u = t.h;
            return [ h(e), h({
                h: (u + 90) % 360,
                s: t.s,
                l: t.l
            }), h({
                h: (u + 180) % 360,
                s: t.s,
                l: t.l
            }), h({
                h: (u + 270) % 360,
                s: t.s,
                l: t.l
            }) ];
        }
        function C(e) {
            var t = h(e).toHsl(), u = t.h;
            return [ h(e), h({
                h: (u + 72) % 360,
                s: t.s,
                l: t.l
            }), h({
                h: (u + 216) % 360,
                s: t.s,
                l: t.l
            }) ];
        }
        function B(e, t, u) {
            t = t || 6, u = u || 30;
            var r = h(e).toHsl(), i = 360 / u, n = [ h(e) ];
            for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t; ) r.h = (r.h + i) % 360, n.push(h(r));
            return n;
        }
        function x(e, t) {
            t = t || 6;
            for (var u = h(e).toHsv(), r = u.h, i = u.s, n = u.v, o = [], f = 1 / t; t--; ) o.push(h({
                h: r,
                s: i,
                v: n
            })), n = (n + f) % 1;
            return o;
        }
        h.prototype = {
            isDark: function() {
                return this.getBrightness() < 128;
            },
            isLight: function() {
                return !this.isDark();
            },
            isValid: function() {
                return this._ok;
            },
            getOriginalInput: function() {
                return this._originalInput;
            },
            getFormat: function() {
                return this._format;
            },
            getAlpha: function() {
                return this._a;
            },
            getBrightness: function() {
                var e = this.toRgb();
                return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
            },
            getLuminance: function() {
                var e, t, u, r = this.toRgb();
                return e = r.r / 255, t = r.g / 255, u = r.b / 255, .2126 * (e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .7152 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .0722 * (u <= .03928 ? u / 12.92 : Math.pow((u + .055) / 1.055, 2.4));
            },
            setAlpha: function(e) {
                return this._a = P(e), this._roundA = c(100 * this._a) / 100, this;
            },
            toHsv: function() {
                var e = p(this._r, this._g, this._b);
                return {
                    h: 360 * e.h,
                    s: e.s,
                    v: e.v,
                    a: this._a
                };
            },
            toHsvString: function() {
                var e = p(this._r, this._g, this._b), t = c(360 * e.h), u = c(100 * e.s), r = c(100 * e.v);
                return 1 == this._a ? "hsv(" + t + ", " + u + "%, " + r + "%)" : "hsva(" + t + ", " + u + "%, " + r + "%, " + this._roundA + ")";
            },
            toHsl: function() {
                var e = l(this._r, this._g, this._b);
                return {
                    h: 360 * e.h,
                    s: e.s,
                    l: e.l,
                    a: this._a
                };
            },
            toHslString: function() {
                var e = l(this._r, this._g, this._b), t = c(360 * e.h), u = c(100 * e.s), r = c(100 * e.l);
                return 1 == this._a ? "hsl(" + t + ", " + u + "%, " + r + "%)" : "hsla(" + t + ", " + u + "%, " + r + "%, " + this._roundA + ")";
            },
            toHex: function(e) {
                return S(this._r, this._g, this._b, e);
            },
            toHexString: function(e) {
                return "#" + this.toHex(e);
            },
            toHex8: function() {
                return g(this._r, this._g, this._b, this._a);
            },
            toHex8String: function() {
                return "#" + this.toHex8();
            },
            toRgb: function() {
                return {
                    r: c(this._r),
                    g: c(this._g),
                    b: c(this._b),
                    a: this._a
                };
            },
            toRgbString: function() {
                return 1 == this._a ? "rgb(" + c(this._r) + ", " + c(this._g) + ", " + c(this._b) + ")" : "rgba(" + c(this._r) + ", " + c(this._g) + ", " + c(this._b) + ", " + this._roundA + ")";
            },
            toPercentageRgb: function() {
                return {
                    r: c(100 * M(this._r, 255)) + "%",
                    g: c(100 * M(this._g, 255)) + "%",
                    b: c(100 * M(this._b, 255)) + "%",
                    a: this._a
                };
            },
            toPercentageRgbString: function() {
                return 1 == this._a ? "rgb(" + c(100 * M(this._r, 255)) + "%, " + c(100 * M(this._g, 255)) + "%, " + c(100 * M(this._b, 255)) + "%)" : "rgba(" + c(100 * M(this._r, 255)) + "%, " + c(100 * M(this._g, 255)) + "%, " + c(100 * M(this._b, 255)) + "%, " + this._roundA + ")";
            },
            toName: function() {
                return 0 === this._a ? "transparent" : !(this._a < 1) && (j[S(this._r, this._g, this._b, !0)] || !1);
            },
            toFilter: function(e) {
                var t = "#" + g(this._r, this._g, this._b, this._a), u = t, r = this._gradientType ? "GradientType = 1, " : "";
                e && (u = h(e).toHex8String());
                return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + t + ",endColorstr=" + u + ")";
            },
            toString: function(e) {
                var t = !!e;
                e = e || this._format;
                var u = !1, r = this._a < 1 && this._a >= 0;
                return t || !r || "hex" !== e && "hex6" !== e && "hex3" !== e && "name" !== e ? ("rgb" === e && (u = this.toRgbString()), 
                "prgb" === e && (u = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (u = this.toHexString()), 
                "hex3" === e && (u = this.toHexString(!0)), "hex8" === e && (u = this.toHex8String()), 
                "name" === e && (u = this.toName()), "hsl" === e && (u = this.toHslString()), "hsv" === e && (u = this.toHsvString()), 
                u || this.toHexString()) : "name" === e && 0 === this._a ? this.toName() : this.toRgbString();
            },
            _applyModification: function(e, t) {
                var u = e.apply(null, [ this ].concat([].slice.call(t)));
                return this._r = u._r, this._g = u._g, this._b = u._b, this.setAlpha(u._a), this;
            },
            lighten: function() {
                return this._applyModification(T, arguments);
            },
            brighten: function() {
                return this._applyModification(m, arguments);
            },
            darken: function() {
                return this._applyModification(E, arguments);
            },
            desaturate: function() {
                return this._applyModification(y, arguments);
            },
            saturate: function() {
                return this._applyModification(b, arguments);
            },
            greyscale: function() {
                return this._applyModification(v, arguments);
            },
            spin: function() {
                return this._applyModification(O, arguments);
            },
            _applyCombination: function(e, t) {
                return e.apply(null, [ this ].concat([].slice.call(t)));
            },
            analogous: function() {
                return this._applyCombination(B, arguments);
            },
            complement: function() {
                return this._applyCombination(H, arguments);
            },
            monochromatic: function() {
                return this._applyCombination(x, arguments);
            },
            splitcomplement: function() {
                return this._applyCombination(C, arguments);
            },
            triad: function() {
                return this._applyCombination(w, arguments);
            },
            tetrad: function() {
                return this._applyCombination(_, arguments);
            }
        }, h.fromRatio = function(e, t) {
            if ("object" == typeof e) {
                var u = {};
                for (var r in e) e.hasOwnProperty(r) && (u[r] = "a" === r ? e[r] : D(e[r]));
                e = u;
            }
            return h(e, t);
        }, h.equals = function(e, t) {
            return !(!e || !t) && h(e).toRgbString() == h(t).toRgbString();
        }, h.random = function() {
            return h.fromRatio({
                r: d(),
                g: d(),
                b: d()
            });
        }, h.mix = function(e, t, u) {
            u = 0 === u ? 0 : u || 50;
            var r, i = h(e).toRgb(), n = h(t).toRgb(), o = u / 100, f = 2 * o - 1, c = n.a - i.a, a = 1 - (r = ((r = f * c == -1 ? f : (f + c) / (1 + f * c)) + 1) / 2);
            return h({
                r: n.r * r + i.r * a,
                g: n.g * r + i.g * a,
                b: n.b * r + i.b * a,
                a: n.a * o + i.a * (1 - o)
            });
        }, h.readability = function(e, t) {
            var u = h(e), r = h(t);
            return (Math.max(u.getLuminance(), r.getLuminance()) + .05) / (Math.min(u.getLuminance(), r.getLuminance()) + .05);
        }, h.isReadable = function(e, t, u) {
            var r, i, n = h.readability(e, t);
            switch (i = !1, (r = function(e) {
                var t, u;
                t = ((e = e || {
                    level: "AA",
                    size: "small"
                }).level || "AA").toUpperCase(), u = (e.size || "small").toLowerCase(), "AA" !== t && "AAA" !== t && (t = "AA");
                "small" !== u && "large" !== u && (u = "small");
                return {
                    level: t,
                    size: u
                };
            }(u)).level + r.size) {
              case "AAsmall":
              case "AAAlarge":
                i = n >= 4.5;
                break;

              case "AAlarge":
                i = n >= 3;
                break;

              case "AAAsmall":
                i = n >= 7;
            }
            return i;
        }, h.mostReadable = function(e, t, u) {
            var r, i, n, o, f = null, c = 0;
            i = (u = u || {}).includeFallbackColors, n = u.level, o = u.size;
            for (var a = 0; a < t.length; a++) (r = h.readability(e, t[a])) > c && (c = r, f = h(t[a]));
            return h.isReadable(e, f, {
                level: n,
                size: o
            }) || !i ? f : (u.includeFallbackColors = !1, h.mostReadable(e, [ "#fff", "#000" ], u));
        };
        var k = h.names = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            burntsienna: "ea7e5d",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            rebeccapurple: "663399",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32"
        }, j = h.hexNames = function(e) {
            var t = {};
            for (var u in e) e.hasOwnProperty(u) && (t[e[u]] = u);
            return t;
        }(k);
        function P(e) {
            return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
        }
        function M(e, t) {
            (function(e) {
                return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e);
            })(e) && (e = "100%");
            var u = function(e) {
                return "string" == typeof e && -1 != e.indexOf("%");
            }(e);
            return e = a(t, s(0, parseFloat(e))), u && (e = parseInt(e * t, 10) / 100), f.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t);
        }
        function I(e) {
            return a(1, s(0, e));
        }
        function R(e) {
            return parseInt(e, 16);
        }
        function A(e) {
            return 1 == e.length ? "0" + e : "" + e;
        }
        function D(e) {
            return e <= 1 && (e = 100 * e + "%"), e;
        }
        var F, N, V, L = (N = "[\\s|\\(]+(" + (F = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?", 
        V = "[\\s|\\(]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")[,|\\s]+(" + F + ")\\s*\\)?", 
        {
            rgb: new RegExp("rgb" + N),
            rgba: new RegExp("rgba" + V),
            hsl: new RegExp("hsl" + N),
            hsla: new RegExp("hsla" + V),
            hsv: new RegExp("hsv" + N),
            hsva: new RegExp("hsva" + V),
            hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        });
        e.exports ? e.exports = h : void 0 === (r = function() {
            return h;
        }.call(t, u, t, e)) || (e.exports = r), window.tinycolor = h;
    }();
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(19), i = u(15), n = u(1), o = u(4), f = function() {
        function e() {}
        return e.setFont = function(t, u) {
            t.font = u / 2 + "px " + e.FONT_FAMILIES.join(", "), t.textAlign = "left", t.textBaseline = "top";
        }, e.prototype.key = function(e) {
            return JSON.stringify({
                text: e.text,
                color: e.color
            });
        }, e.prototype.buildAll = function(e, t) {
            return this.build(e, t).then(function(e) {
                return [ e ];
            }).catch(function(e) {
                return [];
            });
        }, e.prototype.build = function(e, t) {
            var u = r.HSTextNode.fromString(t.text);
            if (!u) return Promise.reject(null);
            if (!(e = this.canvas(e, t, u))) return Promise.reject(null);
            var i = e.getContext("2d");
            return u.draw(i).then(function(t) {
                return PIXI.Texture.fromCanvas(e);
            });
        }, e.scaleUp = function() {
            return i.HopscotchDrawingContext.MAX_TEXTURE_SIDE_LENGTH / r.HSTextNode.MAX_LINE_WIDTH;
        }, e.prototype.canvas = function(t, u, i) {
            var f = t.getContext("2d");
            e.setFont(f, u.fontSize);
            var c = u.text, a = o.HSColor.rgbWhiteColor;
            n.hasEmoji(c) && (a = u.color);
            var s = i.flow(f, r.HSTextNode.MAX_LINE_WIDTH);
            if (0 === s.width || 0 === s.height) return null;
            var d = e.scaleUp();
            return t.width = Math.min(s.width * d, 4096), t.height = Math.min(s.height * d, 4096), 
            e.setFont(f, u.fontSize), f.scale(d, d), f.fillStyle = o.HSColor.rgbStringFromHSBString(a), 
            t;
        }, e.FONT_FAMILIES = [ "Avenir-Book", "Hiragino Sans", "sans-serif", "AppleSymbols" ], 
        e.instance = new e(), e.textureCache = {}, e;
    }();
    t.HSTextTextureFactory = f, window.HSTextTextureFactory = f;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(35), i = u(7), n = u(4), o = function() {
        function e() {}
        return e.prototype.build = function(e, t) {
            return Promise.resolve(this._build(t));
        }, e.prototype._build = function(e) {
            var t = document.getElementById(this.imageID(e)), u = this.quantizedScale(t, e), r = this.svgString(t, e), i = PIXI.Texture.fromImage(r, !1, PIXI.SCALE_MODES.LINEAR, u);
            return i.baseTexture.resolution = u, i;
        }, e.prototype.quantizedScale = function(e, t) {
            var u = 1, r = 4;
            if (e) {
                var i = parseFloat(e.getAttribute("width")) || t.originalWidth, n = parseFloat(e.getAttribute("height")) || t.originalHeight;
                u = Math.max(t.originalWidth / i, t.originalHeight / n) * t.baseObjectScale, r = Math.floor(1024 / i);
            }
            var o = Math.abs(t.sizePercentWidth), f = Math.abs(t.sizePercentHeight), c = Math.max(o, f), a = Math.max(Math.ceil(.01 * c), 1) * u;
            return Math.min(a, r);
        }, e.prototype.buildAll = function(e, t) {
            for (var u = [], r = t.willChangeCostume ? 4 : 1, i = 0; i < r; i++) t.animationNumber = i, 
            u.push(this._build(t));
            return Promise.resolve(u);
        }, e.prototype.imageID = function(e) {
            var t = e.type || 0, u = i.HSObjectType[t];
            return u[0].toUpperCase() + u.slice(1) + e.animationNumber + ".svg";
        }, e.prototype.svgString = function(e, t) {
            var u = "";
            if (e) {
                e.style.fill = n.HSColor.rgbWhiteColor;
                var i = this.quantizedScale(e, t);
                e.setAttribute("hsScale", "" + i), u = r.HSView.xmlSerializer.serializeToString(e);
            }
            return "data:image/svg+xml;charset=utf8," + u;
        }, e.instance = new e(), e;
    }();
    t.HSCharacterTextureFactory = o, window.HSCharacterTextureFactory = o;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(34), i = u(4), n = u(14), o = function() {
        function e(e, t, u, r) {
            void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === u && (u = 0), void 0 === r && (r = 0), 
            this.centerX = e, this.centerY = t, this.halfWidth = u, this.halfHeight = r, this.vertices = [ n.vec2.create(), n.vec2.create(), n.vec2.create(), n.vec2.create() ], 
            this.update(e, t, u, r);
        }
        return e.prototype.update = function(e, t, u, r) {
            this.halfWidth = u, this.halfHeight = r, this.centerX = e, this.centerY = t, this.vertices[0][0] = e - this.halfWidth, 
            this.vertices[0][1] = t - this.halfHeight, this.vertices[1][0] = e + this.halfWidth, 
            this.vertices[1][1] = t - this.halfHeight, this.vertices[2][0] = e + this.halfWidth, 
            this.vertices[2][1] = t + this.halfHeight, this.vertices[3][0] = e - this.halfWidth, 
            this.vertices[3][1] = t + this.halfHeight;
        }, e.prototype.width = function() {
            return 2 * this.halfWidth;
        }, e.prototype.height = function() {
            return 2 * this.halfHeight;
        }, e.prototype.minX = function() {
            return this.vertices[0][0];
        }, e.prototype.minY = function() {
            return this.vertices[0][1];
        }, e.prototype.maxX = function() {
            return this.vertices[2][0];
        }, e.prototype.maxY = function() {
            return this.vertices[2][1];
        }, e.prototype.draw = function(e) {
            var t = i.HSColor.rgb(0, 0, 0), u = this.vertices.map(function(e) {
                return new r.HSLinePoint(e, 1, {
                    drawingColor: t
                });
            });
            u.forEach(function(t, r) {
                e.drawLine(t, u[(r + 1) % u.length]);
            });
        }, e.prototype.containsPoint = function(e, t) {
            this.pointTestVecs || (this.pointTestVecs = [ n.vec2.create(), n.vec2.create(), n.vec2.create() ]);
            var u = n.vec2.fromValues(e, t), r = this.vertices[0], i = this.vertices[1], o = this.vertices[3], f = n.vec2.subtract(this.pointTestVecs[0], i, r), c = n.vec2.subtract(this.pointTestVecs[1], o, r), a = n.vec2.subtract(this.pointTestVecs[2], u, r), s = n.vec2.dot(a, f) / n.vec2.length(f), d = n.vec2.dot(a, c) / n.vec2.length(c);
            return s > 0 && s < n.vec2.length(f) && d > 0 && d < n.vec2.length(c);
        }, e.prototype.area = function() {
            return this.width() * this.height();
        }, e.prototype.overlapsWithOtherBoundingBox = function(e) {
            return this.maxX() > e.minX() && this.minX() < e.maxX() && this.maxY() > e.minY() && this.minY() < e.maxY();
        }, e.prototype.intersectionRectWithOtherBoundingBox = function(t) {
            if (this.surroundingBox || (this.surroundingBox = new e()), !this.overlapsWithOtherBoundingBox(t)) return e.zero;
            var u = this.minX(), r = this.minY(), i = this.maxX(), n = this.maxY(), o = t.minX(), f = t.minY(), c = t.maxX(), a = t.maxY(), s = Math.max(u, o), d = Math.max(r, f), h = Math.min(i, c), l = Math.min(n, a), p = .5 * (s + h), S = .5 * (d + l), g = .5 * (h - s), y = .5 * (l - d);
            return this.surroundingBox.update(p, S, g, y), this.surroundingBox;
        }, e.zero = new e(), e;
    }();
    t.HSBoundingBox = o, window.HSBoundingBox = o;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(24);
    HTMLCanvasElement.prototype.unscaledWidth = function() {
        return this.width;
    }, HTMLCanvasElement.prototype.unscaledHeight = function() {
        return this.height;
    }, HTMLImageElement.prototype.unscaledWidth = function() {
        return this.naturalWidth;
    }, HTMLImageElement.prototype.unscaledHeight = function() {
        return this.naturalHeight;
    };
    var i = function() {
        function e() {}
        return e.prototype.image = function(e) {
            if (this._image) return this._image;
            if (!e) return null;
            var t = document.createElement("canvas"), u = t.getContext("2d"), i = e.unscaledWidth(), n = e.unscaledHeight(), o = r.HSVisualContext.collisionResolution, f = this.getScaledImageDimensions({
                width: i,
                height: n
            }, Math.pow(o, 2)), c = f.width, a = f.height;
            return t.width = c, t.height = a, u.drawImage(e, 0, 0, i, n, 0, 0, c, a), this._image = t, 
            t;
        }, e.prototype.getScaledImageDimensions = function(e, t) {
            var u = Math.max(Math.sqrt(e.width * e.height / t), 1);
            return {
                width: Math.round(e.width / u),
                height: Math.round(e.height / u)
            };
        }, e;
    }();
    t.HSCollisionImageFactory = i, window.HSCollisionImageFactory = i;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(7);
    t.HSOBJECT_SIZES = {}, t.HSOBJECT_SIZES[r.HSObjectType.text] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.monkey] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.octopus] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.gorilla] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.cupcake] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.bear] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.dino] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.frog] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.greenman] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.mustache] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.spacepod] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.zombieBear] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.ghoulopus] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.bats] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.frankenrilla] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.jodyWitch] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.cauldron] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.pumpkin] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.broom] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.lantern] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.parrotFlying] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.mandrill] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.mosquito] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.missChief] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.venus] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.jeepers] = {
        width: 390,
        height: 390
    }, t.HSOBJECT_SIZES[r.HSObjectType.banyan] = {
        width: 600,
        height: 600
    }, t.HSOBJECT_SIZES[r.HSObjectType.stargirl] = {
        width: 172.5,
        height: 172.5
    }, t.HSOBJECT_SIZES[r.HSObjectType.astro] = {
        width: 187.5,
        height: 187.5
    }, t.HSOBJECT_SIZES[r.HSObjectType.chillanna] = {
        width: 172.5,
        height: 172.5
    }, t.HSOBJECT_SIZES[r.HSObjectType.robo] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.raccoon] = {
        width: 172.5,
        height: 172.5
    }, t.HSOBJECT_SIZES[r.HSObjectType.bird] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.square] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.circle] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.hexagon] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.triangle] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.rightTriangle] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.rectangle] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.heart] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.star] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.arch] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.parallelogram] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.squiggle] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.donut] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.tetrisZ] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.tetrisT] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.tetrisL] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.corner] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.flower] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.threeProngedBoomerang] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.squishedBox] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.bead] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.chevron] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.xShape] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.tetrisLine] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.toucan] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.anteater] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.crocodile] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.sloth] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.iguana] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.hut] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.penguin] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.winterQueen] = {
        width: 225,
        height: 225
    }, t.HSOBJECT_SIZES[r.HSObjectType.shyYeti] = {
        width: 300,
        height: 300
    }, t.HSOBJECT_SIZES[r.HSObjectType.deer] = {
        width: 255,
        height: 255
    }, t.HSOBJECT_SIZES[r.HSObjectType.elf] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.snowGlobe] = {
        width: 450,
        height: 450
    }, t.HSOBJECT_SIZES[r.HSObjectType.polarbear] = {
        width: 300,
        height: 300
    }, t.HSOBJECT_SIZES[r.HSObjectType.sleigh] = {
        width: 300,
        height: 300
    }, t.HSOBJECT_SIZES[r.HSObjectType.mistletoe] = {
        width: 129,
        height: 129
    }, t.HSOBJECT_SIZES[r.HSObjectType.snowMan] = {
        width: 225,
        height: 225
    }, t.HSOBJECT_SIZES[r.HSObjectType.snowflake] = {
        width: 45,
        height: 45
    }, t.HSOBJECT_SIZES[r.HSObjectType.tetrisTFullSize] = {
        width: 150,
        height: 100
    }, t.HSOBJECT_SIZES[r.HSObjectType.rectangleFullSize] = {
        width: 150,
        height: 112.5
    }, t.HSOBJECT_SIZES[r.HSObjectType.archFullSize] = {
        width: 150,
        height: 75
    }, t.HSOBJECT_SIZES[r.HSObjectType.rightTriangleFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.tetrisLFullSize] = {
        width: 150,
        height: 100
    }, t.HSOBJECT_SIZES[r.HSObjectType.roundedSquareFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.roundedRightTriangleFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.squishedBoxFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.starFullSize] = {
        width: 150,
        height: 142.66
    }, t.HSOBJECT_SIZES[r.HSObjectType.parallelogramTallFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.arrowRoundedFullSize] = {
        width: 106.07,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.hexagonFullSize] = {
        width: 150,
        height: 129.9
    }, t.HSOBJECT_SIZES[r.HSObjectType.squiggleFullSize] = {
        width: 150,
        height: 69.64
    }, t.HSOBJECT_SIZES[r.HSObjectType.squareFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.chevronFullSize] = {
        width: 150,
        height: 129.9
    }, t.HSOBJECT_SIZES[r.HSObjectType.flowerFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.heartFullSize] = {
        width: 150,
        height: 126.77
    }, t.HSOBJECT_SIZES[r.HSObjectType.parallelogramWideFullSize] = {
        width: 150,
        height: 75
    }, t.HSOBJECT_SIZES[r.HSObjectType.beadFullSize] = {
        width: 150,
        height: 76.95
    }, t.HSOBJECT_SIZES[r.HSObjectType.triangleFullSize] = {
        width: 150,
        height: 129.9
    }, t.HSOBJECT_SIZES[r.HSObjectType.xFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.donutFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.tetrisZFullSize] = {
        width: 150,
        height: 100
    }, t.HSOBJECT_SIZES[r.HSObjectType.tetrisLineFullSize] = {
        width: 200,
        height: 50
    }, t.HSOBJECT_SIZES[r.HSObjectType.fanbladeFullSize] = {
        width: 150,
        height: 137.26
    }, t.HSOBJECT_SIZES[r.HSObjectType.cornerFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.circleFullSize] = {
        width: 150,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.tetrisTV3] = {
        width: 150,
        height: 100
    }, t.HSOBJECT_SIZES[r.HSObjectType.rectangleV3] = {
        width: 150,
        height: 100
    }, t.HSOBJECT_SIZES[r.HSObjectType.archV3] = {
        width: 150,
        height: 75
    }, t.HSOBJECT_SIZES[r.HSObjectType.tetrisLV3] = {
        width: 150,
        height: 100
    }, t.HSOBJECT_SIZES[r.HSObjectType.starV3] = {
        width: 150,
        height: 143
    }, t.HSOBJECT_SIZES[r.HSObjectType.arrowRoundedV3] = {
        width: 106,
        height: 150
    }, t.HSOBJECT_SIZES[r.HSObjectType.hexagonV3] = {
        width: 150,
        height: 130
    }, t.HSOBJECT_SIZES[r.HSObjectType.squiggleV3] = {
        width: 150,
        height: 70
    }, t.HSOBJECT_SIZES[r.HSObjectType.chevronV3] = {
        width: 150,
        height: 130
    }, t.HSOBJECT_SIZES[r.HSObjectType.heartV3] = {
        width: 150,
        height: 127
    }, t.HSOBJECT_SIZES[r.HSObjectType.parallelogramWideV3] = {
        width: 150,
        height: 75
    }, t.HSOBJECT_SIZES[r.HSObjectType.beadV3] = {
        width: 150,
        height: 77
    }, t.HSOBJECT_SIZES[r.HSObjectType.triangleV3] = {
        width: 150,
        height: 130
    }, t.HSOBJECT_SIZES[r.HSObjectType.tetrisZV3] = {
        width: 150,
        height: 100
    }, t.HSOBJECT_SIZES[r.HSObjectType.fanbladeV3] = {
        width: 150,
        height: 137
    }, t.HSOBJECT_SIZES[r.HSObjectType.crocodileJaws] = {
        width: 288,
        height: 164
    }, t.HSOBJECT_SIZES[r.HSObjectType.lanternFullSize] = {
        width: 48,
        height: 84
    }, window.HSOBJECT_SIZES = t.HSOBJECT_SIZES;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(11), i = u(2), n = u(51), o = u(0), f = function() {
        function e() {
            this.stageObjects = [], this.currentCollisions = new n.HSCollisionPairCollection([]), 
            this._stageObjectCache = new Set(), this._stageRulesCache = null, this._objectsToDestroy = [];
        }
        return e.prototype.addToDestroyQueue = function(e) {
            this._objectsToDestroy.push(e);
        }, e.prototype.cleanDestroyQueue = function() {
            for (var e; e = this._objectsToDestroy.pop(); ) this.destroy(e);
        }, e.prototype.destroy = function(e) {
            this._removeRulesForObject(e), this.stageObjects.remove(e), this._stageObjectCache.delete(e), 
            e.destroy(), this._collisionPairs = null;
        }, e.prototype._removeRulesForObject = function(e) {
            var t = this.stageRulesCache();
            for (var u in t) 0 !== t[u].length && (t[u] = t[u].filter(function(t) {
                return !t.isCurrentObject(e);
            }));
        }, e.prototype.activateAllRulesForEventType = function(e) {
            this.stageObjects.forEach(function(t) {
                return t.activateAllStageRulesForEventType(e);
            });
        }, e.prototype.allPossibleCollisionPairs = function() {
            var e = this;
            return this._collisionPairs || (this._collisionPairs = new n.HSCollisionPairCollection(), 
            this.stageObjects.forEach(function(t) {
                return e.addCollisionPairsForStageObject(t);
            })), this._collisionPairs;
        }, e.prototype.addCollisionPairsForStageObject = function(e) {
            if (this._collisionPairs) {
                var t = Array.from(e.relatedCollisionRules).map(function(e) {
                    return e.collisionPairs();
                }).reduce(function(e, t) {
                    return e.concat(t);
                }, []).filter(function(e) {
                    var t = e.stageObject1, u = e.stageObject2;
                    return t && t.isAlive && u && u.isAlive;
                });
                this._collisionPairs.add(t), this._collisionPairs.add(e.allPossibleCollisionPairs());
            }
        }, e.prototype.allStageRulesForEventType = function(e) {
            var t = this, u = this.stageRulesCache();
            return this.stageObjects.filter(function(e) {
                return !t._stageObjectCache.has(e);
            }).forEach(function(e) {
                t.cacheRulesForStageObject(e);
            }), u[e];
        }, e.prototype.stageRulesCache = function() {
            if (this._stageRulesCache) return this._stageRulesCache;
            this._stageRulesCache = {};
            for (var e = Object.keys(o.HSBlockType).filter(function(e) {
                return "string" == typeof e;
            }), t = 0; t < e.length; t++) this._stageRulesCache[e[t]] = [];
            return this._stageRulesCache;
        }, e.prototype.cacheRulesForStageObject = function(e) {
            var t = this.stageRulesCache(), u = e.stageRules;
            this._stageObjectCache.add(e), u.forEach(function(e) {
                return t[e.eventType()].push(e);
            });
        }, e.prototype.activateCurrentCollisionRules = function() {
            var e, t = this, u = r.HSStageProject.sharedInstance.version < i.HSProjectVersion.WEBPLAYER_IN_APP;
            u && (e = this.bumpingCollisions ? this.bumpingCollisions.copy() : new n.HSCollisionPairCollection([])), 
            this.allTouchingRules().forEach(function(r) {
                var i = r.collisionPairs().find(function(e) {
                    return t.currentCollisions.contains(e);
                });
                i && (r.activate(), u && e.add([ i ]));
            }), this.allBumpRules().forEach(function(r) {
                if (u) {
                    var i = r.collisionPairs().filter(function(e) {
                        return t.currentCollisions.contains(e);
                    });
                    e.intersects(i) && r.activate(), e.add(i.slice(0, 1));
                } else t.bumpingCollisions.intersects(r.collisionPairs()) && r.activate();
            });
        }, e.prototype.allTouchingRules = function() {
            return this.allStageRulesForEventType(o.HSBlockType.EventOperatorIsTouching);
        }, e.prototype.allBumpRules = function() {
            return this.allStageRulesForEventType(o.HSBlockType.EventOperatorBump);
        }, e.prototype.executeAllActiveRules = function() {
            for (var e = this.stageObjects, t = e.length, u = 0; u < t; ++u) void 0 !== e[u] && e[u].executeActiveRules();
        }, e.prototype.activateAllRulesForEventWithObjects = function(e, t) {
            var u = this.allStageRulesForEventType(e);
            t.forEach(function(e) {
                u.forEach(function(t) {
                    t.activateIfMatchesFirstObject(e);
                });
            });
        }, e;
    }();
    t.HSRuleActivator = f, window.HSRuleActivator = f;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(2), i = u(0), n = function() {
        function e(e) {
            this.parameterBlock = e;
        }
        return e.prototype.matchesStageObject = function(e, t) {
            var u = this.stageObjects(t), n = u[0];
            if (!n && !e) return !0;
            var o = this.parameterBlocks() && this.parameterBlocks().length > 0 && this.parameterBlocks()[0].type === i.HSBlockType.AnyObject;
            return this.parameterBlock.context.version < r.HSProjectVersion.ADD_SELF && !o ? n && e && n.objectID === e.objectID : u.includes(e);
        }, e.prototype.stageObjects = function(e) {
            return this.parameterBlocks().reduce(function(t, u) {
                return t.concat(u.stageObjects(e));
            }, []);
        }, e.prototype.parameterBlocks = function() {
            return this.parameterBlock.parameters.filter(function(e) {
                return null != e.childBlock;
            }).map(function(e) {
                return e.childBlock;
            });
        }, e;
    }();
    t.HSStageParameterBlock = n, window.HSStageParameterBlock = n;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e) {
            void 0 === e && (e = []), this.pairMap = new Map(), this.add(e);
        }
        return e.prototype.add = function(e) {
            var t = this;
            e.forEach(function(e) {
                return t.addOne(e);
            });
        }, e.prototype.filter = function(t) {
            return new e(this.toArray().filter(t));
        }, e.prototype.contains = function(e) {
            return this.pairMap.has(e.uniqueKey);
        }, e.prototype.without = function(e) {
            return this.filter(function(t) {
                return !e.contains(t);
            });
        }, e.prototype.addOne = function(e) {
            this.pairMap.set(e.uniqueKey, e);
        }, e.prototype.toArray = function() {
            return Array.from(this.pairMap.values());
        }, e.prototype.intersects = function(e) {
            var t = this;
            return e.some(function(e) {
                return t.contains(e);
            });
        }, e.prototype.copy = function() {
            return new e(Array.from(this));
        }, e.prototype.forEach = function(e) {
            return this.pairMap.forEach(function(t) {
                return e(t);
            });
        }, e.prototype[Symbol.iterator] = function() {
            return this.pairMap.values();
        }, e.prototype.length = function() {
            return this.pairMap.size;
        }, e;
    }();
    t.HSCollisionPairCollection = r, window.HSCollisionPairCollection = r;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e() {
            this.nodeMap = new Map(), this.headNode = new i(), this.length = 0, this.headNode.next = this.headNode, 
            this.headNode.previous = this.headNode;
        }
        return e.prototype.setNewOrder = function(e) {
            var t = this, u = e(Array.from(this.nodeMap.keys()));
            u.forEach(function(e) {
                return t.remove(e);
            }), u.forEach(function(e) {
                return t.push(e);
            });
        }, e.prototype.push = function(e) {
            if (!this.includes(e)) {
                var t = new i(e);
                t.next = this.headNode, t.previous = this.headNode.previous, t.previous.next = t, 
                this.headNode.previous = t, this.nodeMap.set(e, t), this.length++;
            }
        }, e.prototype.unshift = function(e) {
            if (!this.includes(e)) {
                var t = new i(e);
                t.next = this.headNode.next, t.previous = this.headNode, t.next.previous = t, this.headNode.next = t, 
                this.nodeMap.set(e, t), this.length++;
            }
        }, e.prototype.remove = function(e) {
            var t = this.nodeMap.get(e);
            t && (t.previous.next = t.next, t.next.previous = t.previous, this.nodeMap.delete(e), 
            this.length--);
        }, e.prototype.includes = function(e) {
            return this.nodeMap.has(e);
        }, e.prototype[Symbol.iterator] = function() {
            return new n(this.headNode);
        }, e.prototype.getReverseIterator = function() {
            return new n(this.headNode, !0);
        }, e.prototype.forEach = function(e) {
            var t = this, u = 0;
            this[Symbol.iterator]().forEach(function(r) {
                return e(r, u++, t);
            });
        }, e.prototype.forEachRight = function(e) {
            var t = this, u = this.length - 1;
            this.getReverseIterator().forEach(function(r) {
                return e(r, u--, t);
            });
        }, e.prototype.find = function(e) {
            var t = this, u = 0;
            return this[Symbol.iterator]().find(function(r) {
                return e(r, u++, t);
            });
        }, e.prototype.findLast = function(e) {
            var t = this, u = this.length - 1;
            return this.getReverseIterator().find(function(r) {
                return e(r, u--, t);
            });
        }, e;
    }();
    t.HSLinkedList = r;
    var i = function(e) {
        void 0 === e && (e = null), this.value = e, this.next = this, this.previous = this;
    };
    t.HSLinkedListNode = i;
    var n = function() {
        function e(e, t) {
            void 0 === t && (t = !1), this.headNode = e, this.isReversed = t, this.currentNode = e;
        }
        return e.prototype.next = function() {
            var e = this.isReversed ? this.currentNode.previous : this.currentNode.next;
            return e !== this.headNode ? (this.currentNode = e, {
                value: this.currentNode.value,
                done: !1
            }) : {
                value: void 0,
                done: !0
            };
        }, e.prototype.forEach = function(e) {
            for (var t = this.next(); !t.done; ) e(t.value), t = this.next();
        }, e.prototype.find = function(e) {
            for (var t = this.next(); !t.done; ) {
                if (e(t.value)) return t.value;
                t = this.next();
            }
        }, e.prototype[Symbol.iterator] = function() {
            return this;
        }, e;
    }();
    t.HSLinkedListIterator = n, window.HSLinkedList = r;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(11), i = u(2), n = u(54), o = u(0), f = function() {
        function e(e, t) {
            this.rule = e, this.currentObject = t, this.isActive = !1, this._collisionPairs = [], 
            this.numFirstParamObjects = 0, this.numSecondParamObjects = 0, this.stageScript = this.rule.script.stageScript(), 
            this.eventBlock = this.rule.childBlock().stageParameterBlock();
        }
        return e.prototype.reset = function() {
            this.stageScript.reset();
        }, e.prototype.activate = function() {
            this.isActive || (this.reset(), this.isActive = !0);
        }, e.prototype.activateIfMatchesFirstObject = function(e) {
            this.matchesFirstObject(e) && this.activate();
        }, e.prototype.activateIfNotPressed = function(e) {
            this.isPressed(e) || this.activate();
        }, e.prototype.isPressed = function(e) {
            var t = this;
            return e.currentlyPressedObjects.some(function(e) {
                return t.matchesATap(e);
            });
        }, e.prototype.matchesATap = function(e) {
            var t = this;
            return e.some(function(e) {
                return t.matchesFirstObject(e);
            });
        }, e.prototype.break = function() {
            this.isActive = !1, this.reset();
        }, e.prototype.collisionPairs = function() {
            var e = this, t = this.eventBlock.parameterBlocks()[0], u = this.eventBlock.parameterBlocks()[1], r = this.stageObjectsForParameter(t), i = this.stageObjectsForParameter(u);
            if (this._collisionPairs && this.numFirstParamObjects === r.length && this.numSecondParamObjects === i.length) return this._collisionPairs;
            var o = r.slice(this.numFirstParamObjects), f = i.slice(this.numSecondParamObjects), c = r.slice(0, this.numFirstParamObjects);
            return o.forEach(function(t) {
                i.filter(function(e) {
                    return e !== t;
                }).forEach(function(u) {
                    e._collisionPairs.push(new n.HSCollisionPair(t, u)), t.relatedCollisionRules.add(e), 
                    u.relatedCollisionRules.add(e);
                });
            }), c.forEach(function(t) {
                f.filter(function(e) {
                    return e !== t;
                }).forEach(function(u) {
                    e._collisionPairs.push(new n.HSCollisionPair(t, u));
                });
            }), this.numFirstParamObjects = r.length, this.numSecondParamObjects = i.length, 
            this._collisionPairs;
        }, e.prototype.stageObjectsForParameter = function(e) {
            try {
                return e.type === o.HSBlockType.AnyObject ? r.HSStageProject.sharedInstance.activeStageScene.stageObjects : this.rule.context.version < i.HSProjectVersion.ADD_SELF && e.type === o.HSBlockType.Object && e.object ? e.object.allStageObjects() : e.stageObjects(this.currentObject);
            } catch (e) {}
            return [];
        }, e.prototype.eventType = function() {
            return this.rule.eventType();
        }, e.prototype.matchesEvent = function(e) {
            return this.eventType() === e;
        }, e.prototype.matchesFirstObject = function(e) {
            return this.eventBlock.matchesStageObject(e, this.currentObject);
        }, e.prototype.execute = function(e) {
            this.isExecutable() ? (this.stageScript.isImmediate && (this.isActive = !1), this.stageScript.execute(e)) : this.isActive = !1;
        }, e.prototype.isExecutable = function() {
            return this.isValid() && this.isActive && this.hasBlocksToExecute();
        }, e.prototype.hasBlocksToExecute = function() {
            return this.stageScript.blocks.length > 0;
        }, e.prototype.isValid = function() {
            return null != this.stageScript;
        }, e.prototype.conditionIsTrue = function(e) {
            return this.rule.conditionIsTrue(e);
        }, e.prototype.deepCopy = function(t) {
            var u = new e(this.rule, t);
            return u.stageScript = this.stageScript.deepCopy(), u;
        }, e.prototype.isCurrentObject = function(e) {
            return this.currentObject === e;
        }, e;
    }();
    t.HSStageRule = f, window.HSStageRule = f;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            this.isOverlapping = !1, this.wasOverlapping = !1;
            var u = this.getSortedPair(e, t);
            this.stageObject1 = u[0], this.stageObject2 = u[1], this.uniqueKey = this.stageObject1.stageObjectID + "_" + this.stageObject2.stageObjectID;
        }
        return e.prototype.getSortedPair = function(e, t) {
            return e.stageObjectID < t.stageObjectID ? [ e, t ] : [ t, e ];
        }, e.prototype.collisionTest = function(e) {
            return !!this.canCollide() && e.collisionTest(this.stageObject1, this.stageObject2);
        }, e.prototype.isVisible = function() {
            return !this.stageObject1.isInvisible() && !this.stageObject2.isInvisible();
        }, e.prototype.canCollide = function() {
            return this.isVisible() && this.isAlive();
        }, e.prototype.isAlive = function() {
            return this.stageObject1.isAlive && this.stageObject2.isAlive;
        }, e.prototype.update = function(e) {
            this.wasOverlapping = this.isOverlapping, this.isOverlapping = this.collisionTest(e);
        }, e.prototype.isTouching = function() {
            return this.isOverlapping;
        }, e.prototype.isBumping = function() {
            return this.isTouching() && !this.wasOverlapping;
        }, e;
    }();
    t.HSCollisionPair = r, window.HSCollisionPair = r;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t, u) {
            this.fileName = e, this.width = t, this.height = u;
        }
        return e.prototype.computedValue = function() {
            return 0;
        }, e;
    }();
    t.HSCustomObject = r, window.HSCustomObject = r;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(5), i = function(e, t, u) {
        void 0 === u && (u = 0), this.id = u, this.id = u;
        var i = e.target, n = i.clientWidth, o = i.clientHeight;
        this.point = [ t[0] * r.HSStageScene.stageWidth / n, r.HSStageScene.stageHeight - t[1] * r.HSStageScene.stageHeight / o ];
    };
    t.UIPointerEvent = i;
    var n = function() {
        function e(e) {
            this.listeners = e;
        }
        return e.prototype.unregister = function() {
            this.listeners.forEach(function(e) {
                return e.unregister();
            });
        }, e;
    }();
    t.UIEventListeners = n;
    var o = function() {
        function e(e, t, u) {
            this.element = e, this.eventType = t, this.callback = u, e.addEventListener(t, u);
        }
        return e.prototype.unregister = function() {
            this.element.removeEventListener(this.eventType, this.callback);
        }, e;
    }();
    t.UIEventListener = o, t.UIRegisterEventCallbacks = function(e, t) {
        function u(e, t, u) {
            return new o(e, t, function(e) {
                e.preventDefault(), u(e);
            });
        }
        function r(e, t, r) {
            return u(e, t, function(e) {
                var t = [ e.offsetX, e.offsetY ], u = new i(e, t);
                r(u);
            });
        }
        function f(e, t, r) {
            return u(e, t, function(e) {
                return function(e, t) {
                    var u = e.target.getBoundingClientRect();
                    Array.from(e.changedTouches).forEach(function(e) {
                        t(new i(e, [ e.clientX - u.left, e.clientY - u.top ], e.identifier));
                    });
                }(e, r);
            });
        }
        var c = !1;
        return new n([ r(e, "mousedown", function(e) {
            c && t.pointerUp(e), c = !0, t.pointerDown(e);
        }), r(e, "mousemove", function(e) {
            c && t.pointerDrag(e);
        }), r(window, "mouseup", function(e) {
            t.pointerUp(e), c = !1;
        }), f(e, "touchstart", t.pointerDown), f(e, "touchmove", t.pointerDrag), f(window, "touchend", t.pointerUp), f(window, "touchcancel", t.pointerCancel) ]);
    }, window.UIPointerEvent = i, window.UIEventListeners = n, window.UIEventListener = o;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(1), i = function() {
        function e(t, u) {
            var r = this;
            this.name = t, this.context = u, this.sources = new Set(), e.soundCache.has(t) || e.soundCache.set(t, new Promise(function(e, t) {
                var u = new XMLHttpRequest();
                u.open("GET", r.url(), !0), u.responseType = "arraybuffer", u.onload = function() {
                    u.status >= 200 && u.status < 300 ? r.context.decodeAudioData(u.response, e, function() {}) : t(u);
                }, u.onerror = t, u.send();
            })), e.soundCache.get(t).then(function(e) {
                return r.buffer = e;
            });
        }
        return e.prototype.play = function() {
            var e = this;
            if (r.iOSApp) r.HSApp.sendToApp("sound", this.name); else if (this.buffer) {
                var t = this.context.createBufferSource();
                t.buffer = this.buffer, t.connect(this.context.destination), t.start(0), this.sources.add(t), 
                t.onended = function() {
                    return e.sources.delete(t);
                };
            }
        }, e.prototype.stop = function() {
            this.sources.forEach(function(e) {
                return e.stop();
            }), this.sources.clear();
        }, e.prototype.url = function() {
			return "https://awesome-e.github.io/hs-tools/play-project/hopscotch-sounds/" /*AE_MOD Self-host sounds  "https://d2jeqdlsh5ay24.cloudfront.net/"*/ + this.name + ".mp3";
        }, e.soundCache = new Map(), e;
    }();
    t.HSSound = i, window.HSSound = i;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(25), i = u(30), n = u(32), o = u(31), f = u(8), c = u(0), a = function() {
        function e(e) {
            this.script = e, this.reset();
        }
        return e.prototype.reset = function() {
            this.blocks = this.script.blocks.map(function(e) {
                return e.stageBlock();
            }), this.isImmediate = this.blocks.every(function(e) {
                return e.isImmediate;
            });
        }, e.prototype.execute = function(e) {
            var t = this.executableForStepSize(e.maxStepSize(), e);
            t.execute(e), this.blocks = t.blocksToExecuteLater, this.isImmediate = this.blocks.every(function(e) {
                return e.isImmediate;
            });
        }, e.prototype.blockIsVariable = function(e) {
            return e === c.HSBlockType.SetVariable || e === c.HSBlockType.ChangeVariable;
        }, e.prototype.blockIsUsingVariable = function(e) {
            return !!(e && e instanceof i.HSStageControl) && (!(!e.parameters || !e.parameters.length) && this.blockUsesVariable(e));
        }, e.prototype.blockUsesVariable = function(e) {
            if (!e) return !1;
            for (var t = e.parameters || [], u = 0; u < t.length; u++) {
                var i = t[u].childBlock;
                if (i instanceof r.HSVariable || this.blockUsesVariable(i)) return !0;
            }
            return !1;
        }, e.prototype.executableForStepSize = function(e, t) {
            var u = this;
            if (!this.blocks.length) return new o.HSExecutable([], []);
            for (var r = this.blocks.slice().reverse(), i = r.pop(), f = [], c = function(e) {
                if (!e) return !1;
                var i = u.blockIsVariable(e.type) && u.blockIsUsingVariable(r.length ? r[r.length - 1] : null), o = e.isImmediate, f = e instanceof n.HSStageMethod && e.isFinishedTimestampBlock(t);
                return !i && (o || f);
            }; c(i); ) f.push(i), i = r.pop();
            if (!i) return new o.HSExecutable(f, []);
            var a = i.executableForStepSize(e, t);
            return new o.HSExecutable(f.concat(a.blocksToExecuteNow), a.blocksToExecuteLater.concat(r.reverse()));
        }, e.prototype.deepCopy = function() {
            return new e(this.script);
        }, e.prototype.toString = function() {
            return f.SourceFormatter.blocksToSrc(this.blocks);
        }, e;
    }();
    t.HSStageScript = a, window.HSStageScript = a;
}, function(e, t, u) {
    "use strict";
    var r, i = this && this.__extends || (r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var u in t) t.hasOwnProperty(u) && (e[u] = t[u]);
        })(e, t);
    }, function(e, t) {
        function u() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (u.prototype = t.prototype, 
        new u());
    });
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = u(6), o = u(10), f = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return i(t, e), t.prototype.parseJSON = function(e) {
            void 0 === e && (e = {}), this.name = e.name, this.objectID = e.id, this.addRulesFromJSON(e);
        }, t.prototype.addRulesFromJSON = function(e) {
            void 0 === e && (e = {});
            var u = this.context;
            this.rules = e.rules.map(function(e) {
                var r = u.findWithObjectID(o.HSRule.key, e);
                return r || (r = u.findWithObjectID(t.key, e)), r;
            }).filter(function(e) {
                return !!e;
            });
        }, t.prototype.stageRules = function(e) {
            var t = this;
            return this.rules.reduce(function(u, r) {
                return r === t ? u : u.concat(r.stageRules(e));
            }, []);
        }, t.key = "HSCustomRule", t;
    }(n.HSManagedObject);
    t.HSCustomRule = f, window.HSCustomRule = f;
}, function(e, t, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = u(2), i = u(39), n = u(38), o = u(17), f = u(10), c = u(3), a = u(33), s = u(29), d = u(12), h = u(9), l = u(40), p = u(7), S = u(0), g = function() {
        function e() {
            this.context = new r.HSProjectContext(), this.scene = this.buildScene(), this.project = new s.HSProject(this.context), 
            this.project.scenes = [ this.scene ];
        }
        return e.prototype.buildDemoScene = function() {
            this.buildObject(p.HSObjectType.octopus, "", 400, 200);
            for (var e = this.buildObject(p.HSObjectType.chillanna, "", 400, 350), t = "Hello World \n", u = 0; u < 100; u++) t += "😈";
            return this.buildObject(p.HSObjectType.text, t, 350, 200), this.buildOnStartRule(e), 
            this.scene.parseJSON(), this.scene;
        }, e.prototype.buildScene = function() {
            var e = new n.HSScene(this.context);
            return e.parseJSON({}), e;
        }, e.prototype.buildObject = function(e, t, u, r) {
            void 0 === e && (e = p.HSObjectType.monkey), void 0 === t && (t = ""), void 0 === u && (u = 750), 
            void 0 === r && (r = 500);
            var i = new c.HSObject(this.scene.context);
            return i.type = e, i.text = t, i.x = u, i.y = r, i.objectID = Math.floor(Math.random() * Math.pow(2, 32)).toString(16), 
            i;
        }, e.prototype.buildObjectWithRule = function() {
            var e = this.buildObject();
            this.buildOnStartRule(e);
            return e;
        }, e.prototype.buildOnStartRule = function(e, t) {
            var u = this.context;
            t || (t = this.buildScript()), e || (e = this.buildObject(p.HSObjectType.monkey));
            var r = new f.HSRule(u);
            r.script = t, e.addRule(r);
            var i = new d.HSParameter(u), n = new h.HSParameterBlock(u);
            return n.type = S.HSBlockType.EventOperatorStart, i.childBlock = n, r.parameters = [ i ], 
            r.parameters[0].childBlock.parameters[0] = new d.HSParameter(r.context), r.parameters[0].childBlock.parameters[0].childBlock = new h.HSParameterBlock(r.context), 
            r;
        }, e.prototype.buildTapRule = function(e, t) {
            return this.buildRule(S.HSBlockType.EventOperatorTap, e, t);
        }, e.prototype.buildRule = function(e, t, u) {
            var r = this.context;
            u || (u = this.buildScript()), t || (t = this.buildObject(p.HSObjectType.monkey));
            var i = new f.HSRule(r);
            i.script = u, t.addRule(i);
            var n = new d.HSParameter(r), o = new h.HSParameterBlock(r);
            return o.type = e, n.childBlock = o, i.parameters = [ n ], i;
        }, e.prototype.buildScript = function() {
            return this.buildScript3();
        }, e.prototype.buildRecursiveScript = function() {
            var e = new o.HSScript(this.context);
            return e.blocks = [ this.buildControlBlock(S.HSBlockType.Ability, [ "" ], e) ], 
            e;
        }, e.prototype.buildEmptyScript = function() {
            var e = new o.HSScript(this.context);
            return e.blocks = [], e;
        }, e.prototype.buildScript3 = function() {
            var e = this.context, t = new o.HSScript(e);
            return t.blocks = [ this.buildControlBlock(S.HSBlockType.Repeat, [ "100" ], this.buildScript4()) ], 
            t;
        }, e.prototype.buildScript4 = function() {
            var e = this.context, t = new o.HSScript(e);
            return t.blocks = [ this.buildMethodBlock(S.HSBlockType.SetInvisibility, [ "90" ]), this.buildMethodBlock(S.HSBlockType.ChangeSpeed, [ "1600" ]), this.buildMethodBlock(S.HSBlockType.StrokeColor, [ "HSB(74, 100, 100)" ]), this.buildMethodBlock(S.HSBlockType.StrokeWidth, [ "30" ]), this.buildMethodBlock(S.HSBlockType.PenDown, []), this.buildMethodBlock(S.HSBlockType.Move, [ "200" ]), this.buildMethodBlock(S.HSBlockType.PenUp, []), this.buildMethodBlock(S.HSBlockType.Rotate, [ "135" ]), this.buildMethodBlock(S.HSBlockType.Move, [ "200" ]), this.buildMethodBlock(S.HSBlockType.Rotate, [ "145" ]) ], 
            t;
        }, e.prototype.buildScript2 = function() {
            var e = this.context, t = new o.HSScript(e);
            return t.blocks = [ this.buildMethodBlock(S.HSBlockType.ChangeSpeed, [ "1000" ]), this.buildMethodBlock(S.HSBlockType.Move, [ "100" ]), this.buildMethodBlock(S.HSBlockType.Rotate, [ "30" ]), this.buildMethodBlock(S.HSBlockType.Move, [ "150" ]), this.buildMethodBlock(S.HSBlockType.ChangeSpeed, [ "100" ]), this.buildMethodBlock(S.HSBlockType.Rotate, [ "60" ]), this.buildMethodBlock(S.HSBlockType.Move, [ "200" ]) ], 
            t;
        }, e.prototype.buildScript1 = function() {
            var e = this.context, t = new o.HSScript(e);
            return t.blocks = [ this.buildMethodBlock(S.HSBlockType.Grow, [ "200" ]), this.buildMethodBlock(S.HSBlockType.Shrink, [ "50" ]) ], 
            t;
        }, e.prototype.buildScript0 = function() {
            for (var e = this.context, t = new o.HSScript(e), u = [ this.buildMethodBlock(S.HSBlockType.SetPosition, [ "200", "200" ]) ], r = 0; r < 50; r++) u.push(this.buildMethodBlock(S.HSBlockType.Move, [ "200" ]));
            return u.push(this.buildMethodBlock(S.HSBlockType.SetSize, [ "200" ])), t.blocks = u, 
            t;
        }, e.prototype.buildMethodBlock = function(e, t) {
            void 0 === e && (e = S.HSBlockType.Move), void 0 === t && (t = []);
            this.context;
            var u = this.parametersFromValues(t), r = new l.HSMethodBlock(this.context);
            return r.type = e, r.parameters = u, r;
        }, e.prototype.parametersFromValues = function(e) {
            var t = this, u = [];
            return e.forEach(function(e, r, i) {
                var n = new d.HSParameter(t.context);
                n.value = e, u.push(n);
            }), u;
        }, e.prototype.buildControlBlock = function(e, t, u) {
            void 0 === e && (e = S.HSBlockType.Repeat), void 0 === t && (t = []), u || (u = this.buildScript1());
            var r = this.parametersFromValues(t), i = new a.HSControlBlock(this.context);
            return i.type = e, i.parameters = r, i.scripts = [ u ], i;
        }, e.prototype.buildConditionalControlBlock = function(e, t, u) {
            void 0 === e && (e = S.HSBlockType.CheckOnceIf), void 0 === t && (t = []), u || (u = this.buildScript1());
            var r = this.parametersFromValues(t), n = new i.HSConditionalControl(this.context);
            return n.type = e, n.parameters = r, n.scripts = [ u ], n;
        }, e;
    }();
    t.HSManagedObjectFactory = g, window.HSManagedObjectFactory = g;
} ]);
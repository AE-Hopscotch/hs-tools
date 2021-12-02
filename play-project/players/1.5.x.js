console.log("Webplayer v1.5.17 - 2021/09/08 (production)");

!function(e) {
    var t = {};
    function i(r) {
        if (t[r]) return t[r].exports;
        var n = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
    }
    i.m = e, i.c = t, i.d = function(e, t, r) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        });
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) i.d(r, n, function(t) {
            return e[t];
        }.bind(null, n));
        return r;
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return i.d(t, "a", t), t;
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = "", i(i.s = 43);
}([ function(e, t, i) {
    "use strict";
    var r, n;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.blockTypeForLegacyEventType = t.HSEventType = t.HSBlockType = void 0, function(e) {
        e[e.WaitTilTimestamp = 19] = "WaitTilTimestamp", e[e.WaitUntilInputIsDone = 20] = "WaitUntilInputIsDone", 
        e[e.None = 22] = "None", e[e.Move = 23] = "Move", e[e.Rotate = 24] = "Rotate", e[e.ChangeX = 27] = "ChangeX", 
        e[e.ChangeY = 28] = "ChangeY", e[e.Scale = 29] = "Scale", e[e.Clear = 30] = "Clear", 
        e[e.StrokeWidth = 31] = "StrokeWidth", e[e.StrokeColor = 32] = "StrokeColor", e[e.ChangeCostume = 33] = "ChangeCostume", 
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
        e[e.SaveInput = 63] = "SaveInput", e[e.SetTextToInput = 64] = "SetTextToInput", 
        e[e.PlayNote = 65] = "PlayNote", e[e.SetTempo = 66] = "SetTempo", e[e.SetInstrument = 67] = "SetInstrument", 
        e[e.OpenProject = 68] = "OpenProject", e[e.LeaveATrail = 26] = "LeaveATrail", e[e.Repeat = 120] = "Repeat", 
        e[e.RepeatForever = 121] = "RepeatForever", e[e.CheckOnceIf = 122] = "CheckOnceIf", 
        e[e.Ability = 123] = "Ability", e[e.CheckIfElse = 124] = "CheckIfElse", e[e.ChangeScene = 125] = "ChangeScene", 
        e[e.BroadcastMessage = 126] = "BroadcastMessage", e[e.RequestSeeds = 127] = "RequestSeeds", 
        e[e.Random = 233] = "Random", e[e.XPos = 234] = "XPos", e[e.YPos = 235] = "YPos", 
        e[e.Random110 = 236] = "Random110", e[e.Random1100 = 237] = "Random1100", e[e.Random11000 = 238] = "Random11000", 
        e[e.Variable = 239] = "Variable", e[e.ConditionalOperatorEquals = 1e3] = "ConditionalOperatorEquals", 
        e[e.ConditionalOperatorNotEquals = 1001] = "ConditionalOperatorNotEquals", e[e.ConditionalOperatorLessThan = 1002] = "ConditionalOperatorLessThan", 
        e[e.ConditionalOperatorGreaterThan = 1003] = "ConditionalOperatorGreaterThan", e[e.ConditionalOperatorAnd = 1004] = "ConditionalOperatorAnd", 
        e[e.ConditionalOperatorOr = 1005] = "ConditionalOperatorOr", e[e.ConditionalOperatorGreaterThanOrEqualTo = 1006] = "ConditionalOperatorGreaterThanOrEqualTo", 
        e[e.ConditionalOperatorLessThanOrEqualTo = 1007] = "ConditionalOperatorLessThanOrEqualTo", 
        e[e.ConditionalOperatorMatches = 1008] = "ConditionalOperatorMatches", e[e.HS_END_OF_CONDITIONAL_OPERATORS = 1009] = "HS_END_OF_CONDITIONAL_OPERATORS", 
        e[e.TraitRotation = 2e3] = "TraitRotation", e[e.TraitXPosition = 2001] = "TraitXPosition", 
        e[e.TraitYPosition = 2002] = "TraitYPosition", e[e.TraitInvisibility = 2003] = "TraitInvisibility", 
        e[e.TraitSize = 2004] = "TraitSize", e[e.TraitSpeed = 2005] = "TraitSpeed", e[e.TraitCloneIndex = 2006] = "TraitCloneIndex", 
        e[e.TraitTotalClones = 2007] = "TraitTotalClones", e[e.TraitWidth = 2008] = "TraitWidth", 
        e[e.TraitHeight = 2009] = "TraitHeight", e[e.TraitZIndex = 2010] = "TraitZIndex", 
        e[e.TraitOriginX = 2011] = "TraitOriginX", e[e.TraitOriginY = 2012] = "TraitOriginY", 
        e[e.TraitCenterX = 2013] = "TraitCenterX", e[e.TraitCenterY = 2014] = "TraitCenterY", 
        e[e.TraitText = 2015] = "TraitText", e[e.TraitTempo = 2016] = "TraitTempo", e[e.TraitInstrument = 2017] = "TraitInstrument", 
        e[e.HS_END_OF_OBJECT_TRAITS = 2018] = "HS_END_OF_OBJECT_TRAITS", e[e.TraitUsername = 2500] = "TraitUsername", 
        e[e.TraitTime = 2501] = "TraitTime", e[e.TraitYear = 2502] = "TraitYear", e[e.TraitMonth = 2503] = "TraitMonth", 
        e[e.TraitDay = 2504] = "TraitDay", e[e.TraitHour = 2505] = "TraitHour", e[e.TraitMinute = 2506] = "TraitMinute", 
        e[e.TraitSecond = 2507] = "TraitSecond", e[e.HS_END_OF_USER_TRAITS = 2508] = "HS_END_OF_USER_TRAITS", 
        e[e.StageTraitWidth = 3e3] = "StageTraitWidth", e[e.StageTraitHeight = 3001] = "StageTraitHeight", 
        e[e.StageTraitTiltUp = 3002] = "StageTraitTiltUp", e[e.StageTraitTiltDown = 3003] = "StageTraitTiltDown", 
        e[e.StageTraitTiltLeft = 3004] = "StageTraitTiltLeft", e[e.StageTraitTiltRight = 3005] = "StageTraitTiltRight", 
        e[e.StageTraitLastTouchX = 3006] = "StageTraitLastTouchX", e[e.StageTraitLastTouchY = 3007] = "StageTraitLastTouchY", 
        e[e.StageTraitTotalObjects = 3008] = "StageTraitTotalObjects", e[e.HS_END_OF_STAGE_TRAITS = 3009] = "HS_END_OF_STAGE_TRAITS", 
        e[e.MathOperatorAdd = 4e3] = "MathOperatorAdd", e[e.MathOperatorSubtract = 4001] = "MathOperatorSubtract", 
        e[e.MathOperatorMultiply = 4002] = "MathOperatorMultiply", e[e.MathOperatorDivide = 4003] = "MathOperatorDivide", 
        e[e.MathOperatorRandom = 4004] = "MathOperatorRandom", e[e.MathOperatorPower = 4005] = "MathOperatorPower", 
        e[e.MathOperatorSquareRoot = 4006] = "MathOperatorSquareRoot", e[e.MathOperatorSine = 4007] = "MathOperatorSine", 
        e[e.MathOperatorCosine = 4008] = "MathOperatorCosine", e[e.MathOperatorRound = 4009] = "MathOperatorRound", 
        e[e.MathOperatorAbs = 4010] = "MathOperatorAbs", e[e.MathOperatorModulo = 4011] = "MathOperatorModulo", 
        e[e.MathOperatorTangent = 4012] = "MathOperatorTangent", e[e.MathOperatorInverseSine = 4013] = "MathOperatorInverseSine", 
        e[e.MathOperatorInverseCosine = 4014] = "MathOperatorInverseCosine", e[e.MathOperatorInverseTangent = 4015] = "MathOperatorInverseTangent", 
        e[e.MathOperatorMaximum = 4016] = "MathOperatorMaximum", e[e.MathOperatorMinimum = 4017] = "MathOperatorMinimum", 
        e[e.MathOperatorFloor = 4018] = "MathOperatorFloor", e[e.MathOperatorCeiling = 4019] = "MathOperatorCeiling", 
        e[e.HS_END_OF_MATH_OPERATORS = 4020] = "HS_END_OF_MATH_OPERATORS", e[e.ColorOperatorRandom = 5e3] = "ColorOperatorRandom", 
        e[e.ColorOperatorRGB = 5001] = "ColorOperatorRGB", e[e.ColorOperatorHSB = 5002] = "ColorOperatorHSB", 
        e[e.HS_END_OF_COLOR_OPERATORS = 5003] = "HS_END_OF_COLOR_OPERATORS", e[e.Rule = 6e3] = "Rule", 
        e[e.RulePreview = 6001] = "RulePreview", e[e.EventOperatorStart = 7e3] = "EventOperatorStart", 
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
        e[e.EventOperatorHearMessage = 7023] = "EventOperatorHearMessage", e[e.EventOperatorMessageMatches = 7024] = "EventOperatorMessageMatches", 
        e[e.EventOperatorIsNotTouching = 7025] = "EventOperatorIsNotTouching", e[e.HS_END_OF_EVENT_OPERATORS = 7026] = "HS_END_OF_EVENT_OPERATORS", 
        e[e.Object = 8e3] = "Object", e[e.AnyObject = 8001] = "AnyObject", e[e.ScreenEdge = 8002] = "ScreenEdge", 
        e[e.Game = 8003] = "Game", e[e.Self = 8004] = "Self", e[e.OriginalObject = 8005] = "OriginalObject", 
        e[e.Local = 8006] = "Local", e[e.User = 8007] = "User", e[e.Product = 8008] = "Product", 
        e[e.HS_END_OF_EVENT_PARAMETER_BLOCKS = 8009] = "HS_END_OF_EVENT_PARAMETER_BLOCKS", 
        e[e.TextOperatorCharAtIndex = 9e3] = "TextOperatorCharAtIndex", e[e.TextOperatorCharsInRange = 9001] = "TextOperatorCharsInRange", 
        e[e.TextOperatorLength = 9002] = "TextOperatorLength", e[e.HS_END_OF_TEXT_OPERATOR_BLOCKS = 9003] = "HS_END_OF_TEXT_OPERATOR_BLOCKS";
    }(r = t.HSBlockType || (t.HSBlockType = {})), function(e) {
        e[e.HSEventOnStart = 1239] = "HSEventOnStart", e[e.HSEventTouchedObject = 1240] = "HSEventTouchedObject", 
        e[e.HSEventTapStage = 1241] = "HSEventTapStage", e[e.HSEventShake = 1242] = "HSEventShake", 
        e[e.HSEventTiltRight = 1243] = "HSEventTiltRight", e[e.HSEventTiltLeft = 1244] = "HSEventTiltLeft", 
        e[e.HSEventTiltDown = 1245] = "HSEventTiltDown", e[e.HSEventTiltUp = 1246] = "HSEventTiltUp", 
        e[e.HSEventLoudNoise = 1247] = "HSEventLoudNoise", e[e.HSEventCollision = 1248] = "HSEventCollision", 
        e[e.HSEventHeldObject = 1249] = "HSEventHeldObject", e[e.HSEventEnteredWorld = 1250] = "HSEventEnteredWorld";
    }(n = t.HSEventType || (t.HSEventType = {})), t.blockTypeForLegacyEventType = function(e) {
        switch (e) {
          case n.HSEventOnStart:
            return r.EventOperatorStart;

          case n.HSEventShake:
            return r.EventOperatorShake;

          case n.HSEventTiltUp:
            return r.EventOperatorTiltUp;

          case n.HSEventTiltDown:
            return r.EventOperatorTiltDown;

          case n.HSEventTiltRight:
            return r.EventOperatorTiltRight;

          case n.HSEventTiltLeft:
            return r.EventOperatorTiltLeft;

          case n.HSEventTapStage:
          case n.HSEventTouchedObject:
            return r.EventOperatorTap;

          case n.HSEventLoudNoise:
            return r.EventOperatorLoudNoise;

          case n.HSEventCollision:
            return r.EventOperatorIsTouching;

          case n.HSEventHeldObject:
            return r.EventOperatorHold;

          case n.HSEventEnteredWorld:
            return r.EventOperatorEnterTheWorld;
        }
        return r.EventOperatorStart;
    }, window.HSBlockType = r, window.HSEventType = n;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.checkMatches = t.radiansToDegrees = t.degreesToRadians = t.getImageFromUri = t.exitFullscreen = t.hs_directionForMagnitudeAndPlane = t.hs_direction = t.hs_magnitude = t.hs_plane = t.HSDirection = t.HSMagnitude = t.HSPlane = t.benchmarkEnd = t.benchmarkStart = t.findLast = t.variance = t.mean = t.clamp = t.log = t.requestTextureFromApp = t.appRequestCache = t.appRequestCallbacks = t.onlyEmoji = t.hasEmoji = t.HSApp = t.isIOSApp = t.iOSApp = t.iOS = t.hs_random_id = t.emoji = t.parseInstrumentName = void 0;
    var r = i(17);
    function n() {
        return t.iOSApp || !!window.HS_IS_IOS_APP;
    }
    t.parseInstrumentName = function(e) {
        return "strings" === e && (e = "cello"), e.toLocaleLowerCase().replace(" ", "");
    }, t.emoji = window.emoji, t.emoji.basePath = "https://d2j12ek52gvmx9.cloudfront.net/emojis", 
    t.hs_random_id = function() {
        return (1e7 * Math.random()).toString();
    }, t.iOS = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent), t.iOSApp = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), 
    t.isIOSApp = n;
    var o = function() {
        function e() {}
        return e.forceIOSApp = function(e) {
            t.iOSApp = e;
        }, e.initUserVariables = function(t, i) {
            n() || 0 === t.length || 0 === i.length || (e.userVarID = e.userVarPrefix + t + "_" + i, 
            e.initialUserVariables = JSON.parse(localStorage.getItem(e.userVarID) || "{}"));
        }, e.storeUserVar = function(t, i) {
            n() || (e.initialUserVariables[t] = i, localStorage.setItem(e.userVarID, JSON.stringify(e.initialUserVariables)));
        }, e.sendToApp = function() {
            for (var t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
            e.instance.sendToApp.apply(e.instance, t);
        }, e.addResetCallback = function(t, i) {
            e.resetCallback[t] = i;
        }, e.prototype.sendToApp = function(e, t, i) {
            var r;
            void 0 === i && (i = "hopscotch");
            var n = window.webkit;
            n && n.messageHandlers && n.messageHandlers[i].postMessage(((r = {})[e] = t, r));
        }, e.reset = function() {
            for (var t in r.HSAccelerometerManager.clear(), e.appCallbacks = {}, e.resetCallback) e.resetCallback.hasOwnProperty(t) && e.resetCallback[t]();
        }, e.readFromAppOnce = function(t, i) {
            e.appCallbacks[t] = i;
        }, e.readFromAppEternal = function(t, i) {
            e.eternalCallbacks.push(t), e.appCallbacks[t] = i;
        }, e.executeCallback = function(t, i) {
            e.appCallbacks[t] && (e.appCallbacks[t](i), -1 === e.eternalCallbacks.indexOf(t) && delete e.appCallbacks[t]);
        }, e.instance = new e(), e.isRunning = !0, e.initialUserVariables = {}, e.userVarPrefix = "user_var_", 
        e.eternalCallbacks = [], e.appCallbacks = {}, e.resetCallback = {}, e;
    }();
    function a(e) {
        return null != e && "" !== e && (/[\uD800-\uDBFF\uDC00-\uDFFF]/.test(e) || RegExp("" + t.emoji.regex.source).test(e));
    }
    function s(e) {
        return null != e && "" !== e && RegExp("^(" + t.emoji.regex.source + ")+$").test(e);
    }
    t.HSApp = o, t.hasEmoji = a, t.onlyEmoji = s;
    var c = 0;
    function u(e, i) {
        var r = JSON.stringify(e), n = t.appRequestCache.get(r);
        if (null != i && (null == n ? void 0 : n.updatedDate) === i) return n.promise;
        var o = c++, a = {
            updatedDate: i || 0,
            promise: new Promise(function(i) {
                t.appRequestCallbacks[o] = i, window.webkit.messageHandlers.renderer.postMessage(Object.assign({}, e, {
                    replyTo: "appRequestCallbacks[" + o + "]"
                }));
            }).then(function(e) {
                return delete t.appRequestCallbacks[o], e;
            })
        };
        return t.appRequestCache.set(r, a), t.appRequestCache.get(r).promise;
    }
    function l() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        o.sendToApp("log", Array.prototype.join.call(arguments, " "));
    }
    function h(e, t, i) {
        var r = Math.max(t, e);
        return Math.min(r, i);
    }
    function p(e) {
        return e.reduce(function(e, t) {
            return e + t;
        }, 0) / e.length;
    }
    function d(e) {
        var t = p(e);
        return e.reduce(function(e, i) {
            return e + Math.pow(i - t, 2);
        }, 0) / e.length;
    }
    function S(e, t) {
        for (var i = e.length - 1; i >= 0; i--) if (t(e[i], i, e)) return e[i];
    }
    t.appRequestCallbacks = {}, t.appRequestCache = new Map(), t.requestTextureFromApp = u, 
    t.log = l, t.clamp = h, t.mean = p, t.variance = d, t.findLast = S;
    var f, g, y, v = [], b = 0;
    function T() {
        b = performance.now();
    }
    function m() {
        var e = performance.now();
        if (v.length >= 100) {
            for (var t = 0, i = 0; i < v.length; i++) t += v[i];
            var r = document.getElementById("time").innerText;
            r.length > 130 && (r = r.substring(50, 130));
            var n = Math.round(t / v.length * 1e3) / 1e3;
            document.getElementById("time").innerText = r + " " + n + "ms", v = [];
        }
        var o = e - b;
        v.push(o);
    }
    function E(e, t) {
        return Math.abs(e) >= Math.abs(t) ? f.horizontal : f.vertical;
    }
    function H(e, t) {
        return Math.abs(e) < t ? g.none : e > 0 ? g.positive : g.negative;
    }
    function O(e, t, i) {
        var r, n = E(e, t);
        switch (n) {
          case f.horizontal:
            r = H(e, i);
            break;

          case f.vertical:
            r = H(t, i);
        }
        return w(r, n);
    }
    function w(e, t) {
        return e === g.positive && t === f.horizontal ? y.right : e === g.positive && t === f.vertical ? y.up : e === g.negative && t === f.horizontal ? y.left : e === g.negative && t === f.vertical ? y.down : null;
    }
    function _() {}
    function k(e) {
        var t = new Image();
        return e.startsWith("data:") || (t.crossOrigin = "Anonymous"), new Promise(function(i, r) {
            t.onload = function() {
                return i(t);
            }, t.onerror = r, t.src = e.replace(/-?200d/g, "");
        });
    }
    function C(e) {
        return e * Math.PI / 180;
    }
    function B(e) {
        return e / Math.PI * 180;
    }
    t.benchmarkStart = T, t.benchmarkEnd = m, function(e) {
        e[e.horizontal = 0] = "horizontal", e[e.vertical = 1] = "vertical";
    }(f = t.HSPlane || (t.HSPlane = {})), function(e) {
        e[e.positive = 0] = "positive", e[e.negative = 1] = "negative", e[e.none = 2] = "none";
    }(g = t.HSMagnitude || (t.HSMagnitude = {})), function(e) {
        e[e.up = 0] = "up", e[e.down = 1] = "down", e[e.left = 2] = "left", e[e.right = 3] = "right";
    }(y = t.HSDirection || (t.HSDirection = {})), t.hs_plane = E, t.hs_magnitude = H, 
    t.hs_direction = O, t.hs_directionForMagnitudeAndPlane = w, t.exitFullscreen = _, 
    t.getImageFromUri = k, t.degreesToRadians = C, t.radiansToDegrees = B, Array.prototype.remove = function(e) {
        var t = this.indexOf(e);
        void 0 !== t && this.splice(t, 1);
    }, t.checkMatches = function(e, t) {
        return new RegExp(t, "gi").test(e);
    }, window.isIOSApp = n, window.HSPlane = f, window.HSMagnitude = g, window.HSDirection = y, 
    window.hasEmoji = a, window.onlyEmoji = s, window.requestTextureFromApp = u, window.log = l, 
    window.clamp = h, window.mean = p, window.variance = d, window.findLast = S, window.benchmarkStart = T, 
    window.benchmarkEnd = m, window.hs_plane = E, window.hs_magnitude = H, window.hs_direction = O, 
    window.hs_directionForMagnitudeAndPlane = w, window.exitFullscreen = _, window.getImageFromUri = k, 
    window.degreesToRadians = C, window.radiansToDegrees = B, window.HSApp = o, window.appRequestCallbacks = t.appRequestCallbacks;
}, function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, "__extends", function() {
        return n;
    }), i.d(t, "__assign", function() {
        return o;
    }), i.d(t, "__rest", function() {
        return a;
    }), i.d(t, "__decorate", function() {
        return s;
    }), i.d(t, "__param", function() {
        return c;
    }), i.d(t, "__metadata", function() {
        return u;
    }), i.d(t, "__awaiter", function() {
        return l;
    }), i.d(t, "__generator", function() {
        return h;
    }), i.d(t, "__exportStar", function() {
        return p;
    }), i.d(t, "__values", function() {
        return d;
    }), i.d(t, "__read", function() {
        return S;
    }), i.d(t, "__spread", function() {
        return f;
    }), i.d(t, "__spreadArrays", function() {
        return g;
    }), i.d(t, "__await", function() {
        return y;
    }), i.d(t, "__asyncGenerator", function() {
        return v;
    }), i.d(t, "__asyncDelegator", function() {
        return b;
    }), i.d(t, "__asyncValues", function() {
        return T;
    }), i.d(t, "__makeTemplateObject", function() {
        return m;
    }), i.d(t, "__importStar", function() {
        return E;
    }), i.d(t, "__importDefault", function() {
        return H;
    });
    var r = function(e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(e, t) {
            e.__proto__ = t;
        } || function(e, t) {
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        })(e, t);
    };
    function n(e, t) {
        function i() {
            this.constructor = e;
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, 
        new i());
    }
    var o = function() {
        return (o = Object.assign || function(e) {
            for (var t, i = 1, r = arguments.length; i < r; i++) for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
        }).apply(this, arguments);
    };
    function a(e, t) {
        var i = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (i[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (i[r[n]] = e[r[n]]);
        }
        return i;
    }
    function s(e, t, i, r) {
        var n, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, r); else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
        return o > 3 && a && Object.defineProperty(t, i, a), a;
    }
    function c(e, t) {
        return function(i, r) {
            t(i, r, e);
        };
    }
    function u(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
    }
    function l(e, t, i, r) {
        return new (i || (i = Promise))(function(n, o) {
            function a(e) {
                try {
                    c(r.next(e));
                } catch (e) {
                    o(e);
                }
            }
            function s(e) {
                try {
                    c(r.throw(e));
                } catch (e) {
                    o(e);
                }
            }
            function c(e) {
                e.done ? n(e.value) : new i(function(t) {
                    t(e.value);
                }).then(a, s);
            }
            c((r = r.apply(e, t || [])).next());
        });
    }
    function h(e, t) {
        var i, r, n, o, a = {
            label: 0,
            sent: function() {
                if (1 & n[0]) throw n[1];
                return n[1];
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            "throw": s(1),
            "return": s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this;
        }), o;
        function s(o) {
            return function(s) {
                return function(o) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (;a; ) try {
                        if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
                        0) : r.next) && !(n = n.call(r, o[1])).done) return n;
                        switch (r = 0, n && (o = [ 2 & o[0], n.value ]), o[0]) {
                          case 0:
                          case 1:
                            n = o;
                            break;

                          case 4:
                            return a.label++, {
                                value: o[1],
                                done: !1
                            };

                          case 5:
                            a.label++, r = o[1], o = [ 0 ];
                            continue;

                          case 7:
                            o = a.ops.pop(), a.trys.pop();
                            continue;

                          default:
                            if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                a = 0;
                                continue;
                            }
                            if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                a.label = o[1];
                                break;
                            }
                            if (6 === o[0] && a.label < n[1]) {
                                a.label = n[1], n = o;
                                break;
                            }
                            if (n && a.label < n[2]) {
                                a.label = n[2], a.ops.push(o);
                                break;
                            }
                            n[2] && a.ops.pop(), a.trys.pop();
                            continue;
                        }
                        o = t.call(e, a);
                    } catch (e) {
                        o = [ 6, e ], r = 0;
                    } finally {
                        i = n = 0;
                    }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    };
                }([ o, s ]);
            };
        }
    }
    function p(e, t) {
        for (var i in e) t.hasOwnProperty(i) || (t[i] = e[i]);
    }
    function d(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator], i = 0;
        return t ? t.call(e) : {
            next: function() {
                return e && i >= e.length && (e = void 0), {
                    value: e && e[i++],
                    done: !e
                };
            }
        };
    }
    function S(e, t) {
        var i = "function" == typeof Symbol && e[Symbol.iterator];
        if (!i) return e;
        var r, n, o = i.call(e), a = [];
        try {
            for (;(void 0 === t || t-- > 0) && !(r = o.next()).done; ) a.push(r.value);
        } catch (e) {
            n = {
                error: e
            };
        } finally {
            try {
                r && !r.done && (i = o.return) && i.call(o);
            } finally {
                if (n) throw n.error;
            }
        }
        return a;
    }
    function f() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(S(arguments[t]));
        return e;
    }
    function g() {
        for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
        var r = Array(e), n = 0;
        for (t = 0; t < i; t++) for (var o = arguments[t], a = 0, s = o.length; a < s; a++, 
        n++) r[n] = o[a];
        return r;
    }
    function y(e) {
        return this instanceof y ? (this.v = e, this) : new y(e);
    }
    function v(e, t, i) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, n = i.apply(e, t || []), o = [];
        return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
            return this;
        }, r;
        function a(e) {
            n[e] && (r[e] = function(t) {
                return new Promise(function(i, r) {
                    o.push([ e, t, i, r ]) > 1 || s(e, t);
                });
            });
        }
        function s(e, t) {
            try {
                (i = n[e](t)).value instanceof y ? Promise.resolve(i.value.v).then(c, u) : l(o[0][2], i);
            } catch (e) {
                l(o[0][3], e);
            }
            var i;
        }
        function c(e) {
            s("next", e);
        }
        function u(e) {
            s("throw", e);
        }
        function l(e, t) {
            e(t), o.shift(), o.length && s(o[0][0], o[0][1]);
        }
    }
    function b(e) {
        var t, i;
        return t = {}, r("next"), r("throw", function(e) {
            throw e;
        }), r("return"), t[Symbol.iterator] = function() {
            return this;
        }, t;
        function r(r, n) {
            t[r] = e[r] ? function(t) {
                return (i = !i) ? {
                    value: y(e[r](t)),
                    done: "return" === r
                } : n ? n(t) : t;
            } : n;
        }
    }
    function T(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, i = e[Symbol.asyncIterator];
        return i ? i.call(e) : (e = d(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
            return this;
        }, t);
        function r(i) {
            t[i] = e[i] && function(t) {
                return new Promise(function(r, n) {
                    (function(e, t, i, r) {
                        Promise.resolve(r).then(function(t) {
                            e({
                                value: t,
                                done: i
                            });
                        }, t);
                    })(r, n, (t = e[i](t)).done, t.value);
                });
            };
        }
    }
    function m(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
        }) : e.raw = t, e;
    }
    function E(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);
        return t.default = e, t;
    }
    function H(e) {
        return e && e.__esModule ? e : {
            "default": e
        };
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSProjectContext = t.HSProjectVersion = t.STAGE_SIZE = t.FONT_SIZE_KEY = t.SCALE_KEY = t.CUSTOM_OBJECTS_KEY = t.VERSION_KEY = void 0;
    var r = i(2), n = i(23), o = i(5), a = i(12), s = i(13), c = i(11), u = i(60), l = i(19), h = i(0), p = i(1), d = i(18);
    t.VERSION_KEY = "version", t.CUSTOM_OBJECTS_KEY = "customObjects", t.SCALE_KEY = "baseObjectScale", 
    t.FONT_SIZE_KEY = "fontSize", t.STAGE_SIZE = "stageSize";
    var S, f = [ "ocarina", "piano", "vibraphone", "guitar", "cello", "8bit", "choir" ];
    !function(e) {
        e[e.V13 = 13] = "V13", e[e.V14 = 14] = "V14", e[e.V15 = 15] = "V15", e[e.V16 = 16] = "V16", 
        e[e.V17 = 17] = "V17", e[e.V18 = 18] = "V18", e[e.V19 = 19] = "V19", e[e.V24 = 24] = "V24", 
        e[e.WEBPLAYER_IN_APP = 25] = "WEBPLAYER_IN_APP", e[e.ADD_SELF = 26] = "ADD_SELF", 
        e[e.CUSTOM_WHENS = 28] = "CUSTOM_WHENS";
    }(S = t.HSProjectVersion || (t.HSProjectVersion = {}));
    var g = function() {
        function e() {
            this.projectObjects = {}, this.version = S.CUSTOM_WHENS, this.baseObjectScale = 1, 
            this.fontSize = 80, this.alreadyDownloadedInstruments = [], this._hasAccelerometerEvent = null, 
            this._hasAccelerometerTrait = null;
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
            var t = Object.getPrototypeOf(e).constructor.key, i = this.projectObjects[t].indexOf(e);
            i > -1 && this.projectObjects[t].splice(i, 1);
        }, e.prototype.parseJSON = function(i) {
            if (void 0 === i && (i = {}), this.version = i[t.VERSION_KEY] || S.V14, this.baseObjectScale = i[t.SCALE_KEY] || 1, 
            this.fontSize = i[t.FONT_SIZE_KEY] || 80, n.HSEmojiTextNode.WIDTH = this.fontSize / 2, 
            n.HSEmojiTextNode.HEIGHT = this.fontSize / 2, n.HSTextNode.LINE_HEIGHT = this.fontSize < 80 ? 49 : 55, 
            this.version >= S.V19) {
                var r = i[t.STAGE_SIZE];
                r && (o.HSStageScene.stageWidth = r.width, o.HSStageScene.stageHeight = r.height, 
                n.HSTextNode.MAX_LINE_WIDTH = Math.min(n.HSTextNode.MAX_LINE_WIDTH, 512), n.HSTextNode.MAX_LINE_WIDTH = Math.min(n.HSTextNode.MAX_LINE_WIDTH, r.width));
            }
            Array.isArray(i[t.CUSTOM_OBJECTS_KEY]) && i[t.CUSTOM_OBJECTS_KEY].forEach(function(t) {
                var i = new u.HSCustomObject(t.fileName, t.size.width, t.size.height, t.updatedDate);
                e.customObjectMap.set(t.id, i);
            });
        }, e.prototype.allSoundNames = function() {
            this.alreadyDownloadedInstruments.length = 0;
            for (var e = this.findAllForClassName(s.HSParameter.key), t = [], i = 0; i < e.length; i++) {
                var r = e[i];
                switch (r.type) {
                  case l.HSParameterType.Sound:
                    // -1 === t.indexOf(r.value) && t.push(r.value);
                    //AE_MOD Load multiple sounds
                    if (-1 === t.indexOf(r.value)) {
                      var isCustom = (!/^((low-|high)?[a-zA-Z](sharp|flat)?|clickPlayable|alert|car|chaChing|check|clang|crash|dash|doorbell|drip|fail|footsteps|laser|pop|schoolBell|spring|vibrate|trophy|aliens|bubbles|crickets|meow|rain|roar|tweet|wind|woof|ahhh|cheer|eating|heartbeat|laugh|news|talking|bass|chord|clap|gong|snare)$/.test(r.value));
                      t.push(((isCustom) ? "custom/":"") + r.value);
                      if (!isCustom && !!getPref && !getPref("old_sounds") && /^(low-|high)?[a-gA-G](sharp|flat)?$/.test(r.value)) {
                        t.push("new/" + r.value, "guitar/" + r.value, "8-bit/" + r.value);
                      }
                    }
                    break;

                  case l.HSParameterType.MusicNote:
                    t = t.concat(this.allMusicNotesFor());
                    break;

                  case l.HSParameterType.Instrument:
                    t = t.concat(this.allMusicNotesFor(r.value));
                }
            }
            return t;
        }, e.prototype.allMusicNotesFor = function(e) {
            return void 0 === e && (e = d.DEFAULT_INSTRUMENT), e = p.parseInstrumentName(e), 
            this.alreadyDownloadedInstruments.includes(e) || !f.includes(e) ? [] : (this.alreadyDownloadedInstruments.push(e), 
            r.__spread(Array(37).keys()).map(function(t) {
                return e + "/" + (t + 48) + ".wav";
            }));
        }, e.prototype.hasAccelerometerEvent = function() {
            if (null != this._hasAccelerometerEvent) return this._hasAccelerometerEvent;
            for (var e = this.findAllForClassName(a.HSRule.key), t = 0; t < e.length; t++) switch (e[t].eventType()) {
              case h.HSBlockType.EventOperatorTiltUp:
              case h.HSBlockType.EventOperatorTiltDown:
              case h.HSBlockType.EventOperatorTiltLeft:
              case h.HSBlockType.EventOperatorTiltRight:
              case h.HSBlockType.EventOperatorShake:
                return this.preventDefaultKeys(), this._hasAccelerometerEvent = !0;
            }
            return !1;
        }, e.prototype.preventDefaultKeys = function() {
            var e = PIXI.keyboard.Key, t = PIXI.keyboardManager;
            t.setPreventDefault(e.SPACE), t.setPreventDefault(e.RIGHT), t.setPreventDefault(e.LEFT), 
            t.setPreventDefault(e.UP), t.setPreventDefault(e.DOWN);
        }, e.prototype.hasAccelerometerTrait = function() {
            if (null != this._hasAccelerometerTrait) return this._hasAccelerometerTrait;
            for (var e = this.findAllForClassName(c.HSParameterBlock.key), t = 0; t < e.length; t++) switch (e[t].type) {
              case h.HSBlockType.StageTraitTiltUp:
              case h.HSBlockType.StageTraitTiltDown:
              case h.HSBlockType.StageTraitTiltLeft:
              case h.HSBlockType.StageTraitTiltRight:
                return this._hasAccelerometerEvent = !0;
            }
            return !1;
        }, e.customObjectMap = new Map(), e;
    }();
    t.HSProjectContext = g, window.HSProjectVersion = S, window.HSProjectContext = g, 
    window.VERSION_KEY = t.VERSION_KEY, window.CUSTOM_OBJECTS_KEY = t.CUSTOM_OBJECTS_KEY, 
    window.SCALE_KEY = t.SCALE_KEY, window.FONT_SIZE_KEY = t.FONT_SIZE_KEY, window.STAGE_SIZE = t.STAGE_SIZE;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSColor = void 0;
    var r = i(68), n = function() {
        function e() {}
        return e.textColor = function() {
            return e.rgbTextColor;
        }, e.randomColor = function() {
            var t = e.RGBAColors.length, i = Math.floor(Math.random() * (t - 1));
            return e.RGBAColors[i];
        }, e.rgb = function(e, t, i) {
            return "rgb(" + Math.round(e) + ", " + Math.round(t) + ", " + Math.round(i) + ")";
        }, e.hexColor = function(e) {
            return new r.TinyColor(e).toHex();
        }, e.hexToTint = function(t) {
            return void 0 === this._colorMap.get(t) && this._colorMap.set(t, parseInt(e.hexColor(t), 16)), 
            this._colorMap.get(t);
        }, e.hsb = function(t, i, r) {
            return e.convertHSBStringToRGBAString("HSB(" + t + ", " + i + "%, " + r + "%)");
        }, e.rgbStringFromHSBString = function(t) {
            var i = e.hsbRGBAColorMaps[t];
            return i || (i = e.convertHSBStringToRGBAString(t)), i;
        }, e.hsbStringFromRgbString = function(e) {
            var t = new r.TinyColor(e).toHsv();
            return "HSB(" + Math.round(t.h) + "," + Math.round(100 * t.s) + "," + Math.round(100 * t.v) + ")";
        }, e.rgbStringFromNumericColor = function(t) {
            var i = parseFloat(t);
            if (!isNaN(i)) {
                var r = Math.abs(Math.round(i) % e.RGBAColors.length);
                return e.RGBAColors[r];
            }
            return null;
        }, e.convertHSBStringToTinyColor = function(e) {
            var t = e.replace("B", "V");
            return new r.TinyColor(t);
        }, e.convertHSBStringToRGBAString = function(e) {
            return this.convertHSBStringToTinyColor(e).toRgbString();
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
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageScene = void 0;
    var r = i(2), n = i(1), o = i(17), a = i(6), s = i(55), c = i(57), u = i(0), l = function(e) {
        function t(i) {
            var r = e.call(this) || this;
            return r.scene = i, r.renderList = new c.HSLinkedList(), r.pointers = [], r.currentlyPressedObjects = [], 
            r.tickCount = 0, r.nextEvents = new Set(), r.currentEvents = new Set(), r.container = new PIXI.Container(), 
            i.objects.forEach(function(e) {
                e.rebuildStageObject(), r.addStageObject(e.stageObject());
            }), r.lastTouchX = t.stageWidth / 2, r.lastTouchY = t.stageHeight / 2, r.name = i.name, 
            r;
        }
        return r.__extends(t, e), t.prototype.queueEventMessage = function(e) {
            this.nextEvents.add(e);
        }, t.prototype.swapEventMessageQueue = function() {
            var e = this.currentEvents;
            e.clear(), this.currentEvents = this.nextEvents, this.nextEvents = e;
        }, t.prototype.addStageObject = function(e) {
            e.bringToFrontFunction = this.bringToFront.bind(this), e.sendToBackFunction = this.sendToBack.bind(this), 
            e.cloneFunction = this.clone.bind(this), e.destroyFunction = this.addToDestroyQueue.bind(this), 
            e.broadcastMessageFunction = this.queueEventMessage.bind(this), this.stageObjects.push(e), 
            this.renderList.push(e);
        }, t.prototype.animationTick = function(e) {
            var i = this;
            t.dirtySort && (t.dirtySort = !1, this.sortRenderList()), this.container.removeChildren(), 
            this.renderList.forEach(function(e) {
                e.update(), e.view.sprite && i.container.addChild(e.view.sprite);
            }), this.collisionTest(e), this.activateRules(), this.executeRules(), this.cleanDestroyQueue(), 
            this.swapEventMessageQueue(), this.tickCount++;
        }, t.prototype.collisionTest = function(e) {
            if (e) {
                e.tick(this.renderList), e.numberOfPixelCollisions = 0;
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
                e.activateAllRulesForEventWithObjects(u.HSBlockType.EventOperatorHold, t);
            }), this.scene.context.hasAccelerometerEvent() && (this.activateTiltRules(), this.activateShakeRules()), 
            this.activateAllNotPressedRules(), this.activateEventMessageRules(), this.activateCurrentCollisionRules();
        }, t.prototype.activateEventMessageRules = function() {
            var e = this;
            this.allStageRulesForEventType(u.HSBlockType.EventOperatorHearMessage).forEach(function(t) {
                e.currentEvents.forEach(t.activateIfEqualsEventMessage);
            }), this.allStageRulesForEventType(u.HSBlockType.EventOperatorMessageMatches).forEach(function(t) {
                e.currentEvents.forEach(t.activateIfMatchesEventMessage);
            });
        }, t.prototype.activateAllNotPressedRules = function() {
            var e = this;
            this.allStageRulesForEventType(u.HSBlockType.EventOperatorNotPressed).forEach(function(t) {
                t.activateIfNotPressed(e);
            });
        }, t.prototype.executeRules = function() {
            this.executeAllActiveRules();
        }, t.prototype.receiveClickEvent = function(e, t) {
            this.setTouchPosition(e, t);
            var i = e.point, r = i.x, n = i.y, o = this.stageObjectsToReceiveTouchInRange(r, n, t);
            this.activateAllRulesForEventWithObjects(u.HSBlockType.EventOperatorTap, o), this.activateAllRulesForEventWithObjects(u.HSBlockType.EventOperatorHold, o);
            var a = this.indexOfPointer(e.id);
            this.currentlyPressedObjects[a] = o;
        }, t.prototype.addPointer = function(e) {
            var t = this.indexOfPointer(e.id);
            if (-1 !== t) return this.pointers[t];
            var i = this.getPointerData(e);
            return this.pointers.push(i), i;
        }, t.prototype.receiveTouchDownEvent = function(e, t) {
            this.setTouchPosition(e, t);
        }, t.prototype.receiveTouchMoveEvent = function(e, t) {
            this.touchIsDown && (this.setTouchPosition(e, t), this.calculateSwipeEvents(this.getPointerFrom(e.id), t));
        }, t.prototype.receiveTouchUpEvent = function(e, t) {
            var i = this.indexOfPointer(e.id);
            this.removePointer(e.id), this.currentlyPressedObjects.splice(i, 1), this.activateAllRulesForEventType(u.HSBlockType.EventOperatorTouchEnds);
        }, t.prototype.getPointerData = function(e) {
            var t = e.point, i = t.x, r = t.y;
            return {
                id: e.id,
                downX: i,
                downY: r,
                lastX: i,
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
            var i = this.horizontalSwipeForPoint(e), r = this.verticalSwipeForPoint(e), n = this.directionForSwipe(i, r);
            if (n) {
                var o = this.stageObjectsToReceiveTouchInRange(e.downX, e.downY, t);
                this.activateAllRulesForEventWithObjects(n, o), e.downX = null, e.downY = null;
            }
        }, t.prototype.directionForSwipe = function(e, t) {
            switch (n.hs_direction(e, t, 10)) {
              case n.HSDirection.up:
                return u.HSBlockType.EventOperatorSwipeUp;

              case n.HSDirection.down:
                return u.HSBlockType.EventOperatorSwipeDown;

              case n.HSDirection.left:
                return u.HSBlockType.EventOperatorSwipeLeft;

              case n.HSDirection.right:
                return u.HSBlockType.EventOperatorSwipeRight;

              default:
                return null;
            }
        }, t.prototype.horizontalSwipeForPoint = function(e) {
            return e.downX ? e.lastX - e.downX : 0;
        }, t.prototype.verticalSwipeForPoint = function(e) {
            return e.downY ? e.lastY - e.downY : 0;
        }, t.prototype.setTouchPosition = function(e, t) {
            var i = this.getPointerFrom(e.id) || this.addPointer(e), r = e.point, n = r.x, o = r.y;
            return i.lastX = n, i.lastY = o, this.isTheLastPointer(e.id) && (this.lastTouchX = n, 
            this.lastTouchY = o), i;
        }, t.prototype.isTheLastPointer = function(e) {
            return this.indexOfPointer(e) === this.pointers.length - 1;
        }, t.prototype.firstStageObjectWithinRange = function(e, t, i) {
            return this.renderList.findLast(function(r) {
                return i.hitTest(r, e, t);
            });
        }, t.prototype.stageObjectsToReceiveTouchInRange = function(e, t, i) {
            var r = this.firstStageObjectWithinRange(e, t, i);
            return r ? [ r, null ] : [ null ];
        }, t.prototype.bringToFront = function(e) {
            this.renderList.remove(e), this.renderList.push(e);
        }, t.prototype.sendToBack = function(e) {
            this.renderList.remove(e), this.renderList.unshift(e);
        }, t.prototype.sortRenderList = function() {
            this.renderList.setNewOrder(function(e) {
                var t = [];
                return e.forEach(function(e) {
                    var i = e.zIndex || 0;
                    t[i] || (t[i] = []), t[i].push(e);
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
            e.prototype.destroy.call(this, t), this.renderList.remove(t), this.scene.context.findWithObjectID(a.HSObject.key, t.objectID).removeStageObject(t);
        }, t.prototype.clone = function(e, i) {
            if (void 0 === i && (i = 1), !(this.stageObjects.length >= t.MAX_CLONES)) {
                i = Math.min(t.MAX_CLONES - this.stageObjects.length, i);
                for (var r = this.scene.context, n = r.findWithObjectID(a.HSObject.key, e.objectID), o = 0; o < i; o++) {
                    var s = e.deepCopy(r.version, n);
                    s.creationTick = this.tickCount, n.addStageObject(s), s.relatedCollisionRules = e.relatedCollisionRules, 
                    this.addStageObject(s), this.cacheRulesForStageObject(s), this.addCollisionPairsForStageObject(s), 
                    s.activateAllStageRulesForEventType(u.HSBlockType.EventOperatorEnterTheWorld);
                }
            }
        }, t.prototype.activateTiltRules = function() {
            var e;
            switch (o.HSAccelerometerManager.tiltDirection()) {
              case n.HSDirection.up:
                e = u.HSBlockType.EventOperatorTiltUp;
                break;

              case n.HSDirection.down:
                e = u.HSBlockType.EventOperatorTiltDown;
                break;

              case n.HSDirection.left:
                e = u.HSBlockType.EventOperatorTiltLeft;
                break;

              case n.HSDirection.right:
                e = u.HSBlockType.EventOperatorTiltRight;
                break;

              default:
                e = u.HSBlockType.None;
            }
            this.activateAllRulesForEventType(e);
        }, t.prototype.activateShakeRules = function() {
            o.HSAccelerometerManager.isShaking() && this.activateAllRulesForEventType(u.HSBlockType.EventOperatorShake);
        }, Object.defineProperty(t.prototype, "touchIsDown", {
            get: function() {
                return 0 !== this.pointers.length;
            },
            enumerable: !1,
            configurable: !0
        }), t.dirtySort = !1, t.promptsToExecute = [], t.stageHeight = 768, t.stageWidth = 1024, 
        t.MAX_CLONES = 4096, t;
    }(s.HSRuleActivator);
    t.HSStageScene = l, window.HSStageScene = l;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSObject = t.IMAGE_ID_KEY = t.TYPE_KEY = t.TEXT_KEY = t.Y_POSITION_KEY = t.X_POSITION_KEY = t.OBJECT_ID_KEY = void 0;
    var r = i(2), n = i(8), o = i(3), a = i(1), s = i(18), c = i(28), u = i(7);
    t.OBJECT_ID_KEY = "objectID", t.X_POSITION_KEY = "xPosition", t.Y_POSITION_KEY = "yPosition", 
    t.TEXT_KEY = "text", t.TYPE_KEY = "type", t.IMAGE_ID_KEY = "customObjectID";
    var l = function(e) {
        function i() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.rules = [], t.heading = 0, t.customObject = null, t.willChangeCostume = !1, 
            t._stageObjects = [], t.mostRecentCloneCache = new Map(), t;
        }
        return r.__extends(i, e), i.prototype.stageObject = function(e) {
            return this._stageObjects.length || this.rebuildStageObject(), e && e.objectID === this.objectID ? e : e && null != e.creationTick ? this.mostRecentCloneBeforeTimestamp(e.creationTick) : this.context.version < o.HSProjectVersion.ADD_SELF ? this.mostRecentClone() : this.originalStageObject();
        }, i.prototype.rebuildStageObject = function() {
            var e = new s.HSStageObject(this.x, this.y, this.text, this.type, this.context.baseObjectScale, this.context.fontSize, this.objectID, this.fileName(), this.willChangeCostume, this.width, this.height);
            this.latestCloneIndex = 0, e.stageRules = this.rules.reduce(function(t, i) {
                return i ? t.concat(i.stageRules(e)) : t;
            }, []), this._stageObjects = [ e ], this.mostRecentCloneCache = new Map(), this.type === u.HSObjectType.text && (e.setText(this.text, "rgb(0,0,0)"), 
            e.setWidth(e.width() * this.resizeScale), e.setHeight(e.height() * this.resizeScale));
        }, i.prototype.parseJSON = function(e) {
            void 0 === e && (e = {}), this.x = parseFloat(e[t.X_POSITION_KEY]), this.y = parseFloat(e[t.Y_POSITION_KEY]), 
            this.text = e[t.TEXT_KEY], this.type = e[t.TYPE_KEY], this.width = parseFloat(e.width), 
            this.height = parseFloat(e.height), this.resizeScale = parseFloat(e.resizeScale), 
            this.objectID = e[t.OBJECT_ID_KEY], this.customObject = o.HSProjectContext.customObjectMap.get(e[t.IMAGE_ID_KEY]), 
            this.customObject && c.HSImageTextureFactory.instance.prefetchImage(this.customObject);
        }, i.prototype.fileName = function() {
            if (this.customObject) return this.customObject.fileName;
        }, i.prototype.addRule = function(e) {
            this.rules.push(e);
        }, i.prototype.allStageObjects = function() {
            return this._stageObjects;
        }, i.prototype.addStageObject = function(e) {
            this.latestCloneIndex++, this.allStageObjects().push(e), e.cloneIndex = this.latestCloneIndex;
        }, i.prototype.removeStageObject = function(e) {
            this._stageObjects.remove(e);
        }, i.prototype.mostRecentClone = function() {
            var e = this.allStageObjects();
            return e[e.length - 1];
        }, i.prototype.originalStageObject = function() {
            return this.allStageObjects()[0];
        }, i.prototype.mostRecentCloneBeforeTimestamp = function(e) {
            return this.mostRecentCloneCache.has(e) || this.mostRecentCloneCache.set(e, a.findLast(this.allStageObjects(), function(t) {
                return t.creationTick <= e;
            })), this.mostRecentCloneCache.get(e);
        }, i.prototype.canChangeCostume = function() {
            return this.type !== u.HSObjectType.text && (!u.hsIsShapeType(this.type) && this.type <= u.HSObjectType.HS_NUMBER_OF_OBJECTS);
        }, i.key = "HSObject", i;
    }(n.HSManagedObject);
    t.HSObject = l, window.HSObject = l;
}, function(e, t, i) {
    "use strict";
    var r;
    function n(e) {
        return e >= r.roundedSquareFullSize && e < r.HS_END_OF_FULL_SIZE_SHAPES;
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.hsIsFullSizeShape = t.hsIsShapeType = t.HSObjectType = void 0, function(e) {
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
        var t = n(e);
        return e > r.HS_END_OF_CHARACTERS && e < r.HS_END_OF_SHAPES || t;
    }, t.hsIsFullSizeShape = n, window.HSObjectType = r;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSManagedObject = void 0;
    var r = function() {
        function e(e) {
            this.context = e, this.description = this.constructor.name, e.insertObject(this);
        }
        return e.key = "HSManagedObject", e;
    }();
    t.HSManagedObject = r, window.HSManagedObject = r;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSVariable = void 0;
    var r = i(2), n = i(3), o = i(6), a = i(13), s = i(26), c = i(11), u = i(0), l = i(1), h = function(e) {
        function t(t) {
            var i = e.call(this, t) || this;
            return i.type = u.HSBlockType.Variable, i;
        }
        return r.__extends(t, e), t.prototype.parseJSON = function(i) {
            void 0 === i && (i = {}), e.prototype.parseJSON.call(this, i), this.blockType = i.type, 
            i.object && (this.object = this.context.findWithObjectID(o.HSObject.key, i.object)), 
            this.type = u.HSBlockType.Variable, this.objectID = i[a.VARIABLE_KEY];
            var r = this.context.findWithObjectID(s.HSVariablePrototype.key, this.objectID);
            this.name = "_hs_" + r.name, this.blockType === u.HSBlockType.User && (t.userGlobalScope[this.name] = r.initialValue);
        }, t.prototype.isSkillComplete = function() {
            return this.name === t.skillComplete;
        }, t.prototype.computedValue = function(e) {
            if (this.blockType === u.HSBlockType.Product) return l.HSApp.initialUserVariables["_hs_product_" + this.objectID] || "0";
            var t = this._object(e);
            return t && t[this.name] || 0;
        }, t.prototype.computedNumberValue = function(e) {
            return t.parseNumberFrom(this.computedValue(e));
        }, t.prototype.setValue = function(e, i) {
            var r = t.parseValue(e, !0);
            this._object(i)[this.name] = r, this.storeUserValueIfNeeded(r.toString());
        }, t.prototype.storeUserValueIfNeeded = function(e) {
            this.blockType === u.HSBlockType.User && (l.isIOSApp() ? l.HSApp.sendToApp("setVariable", JSON.stringify({
                variableValue: e,
                variableName: this.name.replace("_hs_", ""),
                variableID: this.objectID
            })) : l.HSApp.storeUserVar(this.objectID, e));
        }, t.prototype._object = function(e) {
            return this.context.version < n.HSProjectVersion.ADD_SELF || this.blockType === u.HSBlockType.Game ? t.globalScope : this.blockType === u.HSBlockType.User ? t.userGlobalScope : this.blockType === u.HSBlockType.Object && this.object ? this.object.stageObject() : this.blockType === u.HSBlockType.OriginalObject ? e.originalObject(this.context) : e;
        }, t.parseValue = function(e, t) {
            var i = parseFloat(e);
            return isNaN(i) || !/^\-?[0-9]+(e\+?[0-9]+)?(\.[0-9]+(e\+?[0-9]+)?)?$/.test(e) ? null == e ? 0 : e : (function(e) {
                return e >= -c.MAX_FLOAT && e <= c.MAX_FLOAT;
            }(i) || (i = i < 0 ? -c.MAX_FLOAT : c.MAX_FLOAT), Number.isInteger(i) || t ? i : Math.round(1e6 * i) / 1e6);
        }, t.parseNumberFrom = function(e) {
            var i = t.parseValue(e, !0);
            return "string" == typeof i ? 0 : i;
        }, t.prototype.getPublicName = function() {
            return this.name.replace("_hs_", "");
        }, t.globalScope = {}, t.userGlobalScope = {}, t.key = "HSVariable", t.skillComplete = "hsSkillComplete", 
        t;
    }(c.HSParameterBlock);
    t.HSVariable = h, window.HSVariable = h;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SourceFormatter = void 0;
    var r = i(0), n = i(19), o = function() {
        function e() {}
        return e.blocksToSrc = function(e) {
            return e.join(", ");
        }, e.blockToSrc = function(e) {
            return r.HSBlockType[e.type] + "(" + e.parameters.join(", ") + ")";
        }, e.paramToSrc = function(e) {
            return n.HSParameterType[e.type] + ": " + e.value;
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
    t.SourceFormatter = o, window.SourceFormatter = o;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSParameterBlock = t.MAX_FLOAT = t.TRAIT_TYPE_KEY = t.TRAIT_ID_KEY = t.TRAIT_OBJECT_ID_KEY = void 0;
    var r = i(2), n = i(17), o = i(14), a = i(6), s = i(1), c = i(3), u = i(5), l = i(18), h = i(15), p = i(46), d = i(0), S = i(4), f = i(9), g = i(16);
    t.TRAIT_OBJECT_ID_KEY = "HSTraitObjectIDKey", t.TRAIT_ID_KEY = "HSTraitIDKey", t.TRAIT_TYPE_KEY = "HSTraitTypeKey", 
    t.MAX_FLOAT = 3.4028234663852886e38;
    var y = function(e) {
        function i() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return r.__extends(i, e), i.prototype.parseJSON = function(i) {
            void 0 === i && (i = {}), e.prototype.parseJSON.call(this, i), i[t.TRAIT_ID_KEY] && this.parseTrait(i);
        }, i.prototype.stageParameterBlock = function() {
            return new p.HSStageParameterBlock(this);
        }, i.prototype.matchesObject = function(e) {
            return this.object ? this.object === e : !e;
        }, i.prototype.parseTrait = function(e) {
            this.object = this.context.findWithObjectID(a.HSObject.key, e[t.TRAIT_OBJECT_ID_KEY]), 
            this.objectID = e[t.TRAIT_ID_KEY], this.type = e[t.TRAIT_TYPE_KEY], this.objectReferenceType = e.HSTraitObjectParameterTypeKey;
        }, i.prototype.computedValue = function(e) {
            var t, i, r, o, c, p, S, y, v, b, T, m, E, H, O, w;
            switch (this.type) {
              case d.HSBlockType.Random110:
              case d.HSBlockType.Random1100:
              case d.HSBlockType.Random11000:
              case d.HSBlockType.MathOperatorRandom:
              case d.HSBlockType.Random:
                var _ = this.secondParamNumberValue(e), k = this.firstParamNumberValue(e);
                return Math.floor(Math.random() * (_ - k + 1)) + k;

              case HSBlockType.None: //AE_MOD
                if (/^_ae_webplayer_action:/g.test(this.parameters[0].value)){
                  return AE_MOD.webplayer_action(this.parameters[0].value.split('_ae_webplayer_action:')[1], ((this.parameters[1])?this.secondParamValue(e):undefined),this);
                }
                return 0;

              case d.HSBlockType.MathOperatorAdd:
                var C = this.firstParamValue(e), B = this.secondParamValue(e);
                return "string" != typeof C && "string" != typeof B || ("number" == typeof C && (C = Math.round(1e6 * C) / 1e6), 
                "number" == typeof B && (B = Math.round(1e6 * B) / 1e6), C = C.toString(), B = B.toString()), 
                C + B;

              case d.HSBlockType.TextOperatorCharAtIndex:
                return this.firstParameterStringValue(e)[this.secondParamNumberValue(e)] || "";

              case d.HSBlockType.TextOperatorCharsInRange:
                var x = this.firstParameterStringValue(e), I = this.secondParamNumberValue(e), P = this.endIndexValue(e);
                return x.slice(I, P);

              case d.HSBlockType.TextOperatorLength:
                return (null == (C = this.firstParameterStringValue(e)) ? void 0 : C.length) || 0;

              case d.HSBlockType.MathOperatorSubtract:
                return this.firstParamNumberValue(e) - this.secondParamNumberValue(e);

              case d.HSBlockType.MathOperatorMultiply:
                return this.firstParamNumberValue(e) * this.secondParamNumberValue(e);

              case d.HSBlockType.MathOperatorDivide:
                return 0 === (N = this.secondParamNumberValue(e)) ? 0 : this.firstParamNumberValue(e) / N;

              case d.HSBlockType.MathOperatorSine:
                return Math.sin(s.degreesToRadians(this.firstParamNumberValue(e)));

              case d.HSBlockType.MathOperatorCosine:
                return Math.cos(s.degreesToRadians(this.firstParamNumberValue(e)));

              case d.HSBlockType.MathOperatorTangent:
                return Math.tan(s.degreesToRadians(this.firstParamNumberValue(e)));

              case d.HSBlockType.MathOperatorInverseSine:
                return s.radiansToDegrees(Math.asin(this.firstParamNumberValue(e)) || 0);

              case d.HSBlockType.MathOperatorInverseCosine:
                return s.radiansToDegrees(Math.acos(this.firstParamNumberValue(e)) || 0);

              case d.HSBlockType.MathOperatorInverseTangent:
                return s.radiansToDegrees(Math.atan(this.firstParamNumberValue(e)) || 0);

              case d.HSBlockType.MathOperatorMaximum:
                var j = this.firstParamValue(e), M = this.secondParamValue(e);
                if ("string" == typeof j || "string" == typeof M) {
                    var R = j.toString(), A = M.toString();
                    return R.localeCompare(A) >= 0 ? R : A;
                }
                return Math.max(this.firstParamNumberValue(e), this.secondParamNumberValue(e));

              case d.HSBlockType.MathOperatorMinimum:
                var D = this.firstParamValue(e), F = this.secondParamValue(e);
                if ("string" == typeof D || "string" == typeof F) {
                    R = D.toString(), A = F.toString();
                    return R.localeCompare(A) <= 0 ? R : A;
                }
                return Math.min(this.firstParamNumberValue(e), this.secondParamNumberValue(e));

              case d.HSBlockType.MathOperatorSquareRoot:
                return Math.sqrt(this.firstParamNumberValue(e));

              case d.HSBlockType.MathOperatorPower:
                return Math.pow(this.firstParamNumberValue(e), this.secondParamNumberValue(e));

              case d.HSBlockType.MathOperatorFloor:
                return Math.floor(this.firstParamNumberValue(e));

              case d.HSBlockType.MathOperatorCeiling:
                return Math.ceil(this.firstParamNumberValue(e));

              case d.HSBlockType.MathOperatorRound:
                return Math.round(this.firstParamNumberValue(e));

              case d.HSBlockType.MathOperatorAbs:
                return Math.abs(this.firstParamNumberValue(e));

              case d.HSBlockType.MathOperatorModulo:
                var N;
                return 0 === (N = this.secondParamNumberValue(e)) ? 0 : this.firstParamNumberValue(e) % N;

              case d.HSBlockType.ConditionalOperatorEquals:
              case d.HSBlockType.ConditionalOperatorLessThan:
              case d.HSBlockType.ConditionalOperatorGreaterThan:
              case d.HSBlockType.ConditionalOperatorGreaterThanOrEqualTo:
              case d.HSBlockType.ConditionalOperatorLessThanOrEqualTo:
              case d.HSBlockType.ConditionalOperatorNotEquals:
              case d.HSBlockType.ConditionalOperatorAnd:
              case d.HSBlockType.ConditionalOperatorOr:
              case d.HSBlockType.ConditionalOperatorMatches:
                return this.computedBooleanValue(e) ? 1 : 0;

              case d.HSBlockType.TraitXPosition:
                return Math.round((null === (t = this.stageObjects(e)[0]) || void 0 === t ? void 0 : t.x) || 0);

              case d.HSBlockType.TraitYPosition:
                return Math.round((null === (i = this.stageObjects(e)[0]) || void 0 === i ? void 0 : i.y) || 0);

              case d.HSBlockType.TraitWidth:
                return (null === (r = this.stageObjects(e)[0]) || void 0 === r ? void 0 : r.width()) || 0;

              case d.HSBlockType.TraitHeight:
                return (null === (o = this.stageObjects(e)[0]) || void 0 === o ? void 0 : o.height()) || 0;

              case d.HSBlockType.TraitZIndex:
                return (null === (c = this.stageObjects(e)[0]) || void 0 === c ? void 0 : c.zIndex) || 0;

              case d.HSBlockType.TraitOriginX:
                return Math.round((null === (p = this.stageObjects(e)[0]) || void 0 === p ? void 0 : p.originX) || 0);

              case d.HSBlockType.TraitOriginY:
                return Math.round((null === (S = this.stageObjects(e)[0]) || void 0 === S ? void 0 : S.originY) || 0);

              case d.HSBlockType.TraitCenterX:
                return Math.round((null === (y = this.stageObjects(e)[0]) || void 0 === y ? void 0 : y.x) || 0);

              case d.HSBlockType.TraitCenterY:
                return Math.round((null === (v = this.stageObjects(e)[0]) || void 0 === v ? void 0 : v.y) || 0);

              case d.HSBlockType.TraitRotation:
                return (null === (b = this.stageObjects(e)[0]) || void 0 === b ? void 0 : b.headingInDegrees) || 0;

              case d.HSBlockType.TraitUsername:
                return g.HSMain.currentPlayerName;

              case d.HSBlockType.TraitTime:
                return Date.now();

              case d.HSBlockType.TraitYear:
                return new Date().getFullYear();

              case d.HSBlockType.TraitMonth:
                return new Date().getMonth() + 1;

              case d.HSBlockType.TraitDay:
                return new Date().getDate();

              case d.HSBlockType.TraitHour:
                return new Date().getHours();

              case d.HSBlockType.TraitMinute:
                return new Date().getMinutes();

              case d.HSBlockType.TraitSecond:
                return new Date().getSeconds();

              case d.HSBlockType.TraitSpeed:
                return (null === (T = this.stageObjects(e)[0]) || void 0 === T ? void 0 : T.speed) || 0;

              case d.HSBlockType.TraitCloneIndex:
                return (null === (m = this.stageObjects(e)[0]) || void 0 === m ? void 0 : m.cloneIndex) || 0;

              case d.HSBlockType.TraitText:
                var V = (null === (E = this.stageObjects(e)[0]) || void 0 === E ? void 0 : E.text) || "";
                return f.HSVariable.parseValue(V, !1).toString();

              case d.HSBlockType.TraitTotalClones:
                var L = this.stageObjects(e)[0];
                return this.context.findWithObjectID(a.HSObject.key, L.objectID).allStageObjects().length;

              case d.HSBlockType.StageTraitTotalObjects:
                return h.HSStageProject.sharedInstance.activeStageScene.stageObjects.length;

              case d.HSBlockType.TraitInvisibility:
                return (null === (H = this.stageObjects(e)[0]) || void 0 === H ? void 0 : H.invisibilityPercent) || 0;

              case d.HSBlockType.TraitSize:
                return this.computedSizePercent(e);

              case d.HSBlockType.StageTraitLastTouchX:
                return h.HSStageProject.sharedInstance.activeStageScene.lastTouchX;

              case d.HSBlockType.StageTraitLastTouchY:
                return h.HSStageProject.sharedInstance.activeStageScene.lastTouchY;

              case d.HSBlockType.StageTraitTiltUp:
                return n.HSAccelerometerManager.tiltUp;

              case d.HSBlockType.StageTraitTiltDown:
                return n.HSAccelerometerManager.tiltDown;

              case d.HSBlockType.StageTraitTiltLeft:
                return n.HSAccelerometerManager.tiltLeft;

              case d.HSBlockType.StageTraitTiltRight:
                return n.HSAccelerometerManager.tiltRight;

              case d.HSBlockType.StageTraitWidth:
                return u.HSStageScene.stageWidth;

              case d.HSBlockType.StageTraitHeight:
                return u.HSStageScene.stageHeight;

              case d.HSBlockType.EventOperatorGamePlaying:
                return 1;

              case d.HSBlockType.TraitTempo:
                return (null === (O = this.stageObjects(e)[0]) || void 0 === O ? void 0 : O.tempo) || l.DEFAULT_TEMPO;

              case d.HSBlockType.TraitInstrument:
                return (null === (w = this.stageObjects(e)[0]) || void 0 === w ? void 0 : w.instrument) || l.DEFAULT_INSTRUMENT;

              default:
                return null;
            }
        }, i.prototype.computedSizePercent = function(e) {
            var t = this.stageObjects(e)[0];
            switch (this.whichSizeShouldIUse(t)) {
              case "minimum":
                return Math.min(t.sizePercentHeight, t.sizePercentWidth);

              case "height":
                return t.sizePercentHeight;

              case "width":
                return t.sizePercentWidth;
            }
        }, i.prototype.whichSizeShouldIUse = function(e) {
            var t = Math.abs(e.sizePercentHeight), i = Math.abs(e.sizePercentWidth);
            return t === i ? "minimum" : t > i ? "height" : "width";
        }, i.prototype.computedColorString = function(e) {
            switch (this.type) {
              case d.HSBlockType.ColorOperatorRandom:
                return S.HSColor.randomColor();

              case d.HSBlockType.ColorOperatorRGB:
                return S.HSColor.rgb(this.firstParamNumberValue(e) % 256, this.secondParamNumberValue(e) % 256, this.parameters[2].stageParameter().computedNumberValue(e) % 256);

              case d.HSBlockType.ColorOperatorHSB:
                return S.HSColor.hsb(this.firstParamNumberValue(e) % 361, this.secondParamNumberValue(e) % 101, this.parameters[2].stageParameter().computedNumberValue(e) % 101);

              default:
                var t = S.HSColor.rgbStringFromNumericColor(this.computedStringValue(e));
                return null == t ? S.HSColor.rgbTextColor : t;
            }
        }, i.prototype.computedStringValue = function(e) {
            var t = this.computedValue(e), i = f.HSVariable.parseValue(t, !1);
            return "number" == typeof i && (i = Math.round(1e6 * i) / 1e6), i.toString();
        }, i.prototype.computedBooleanValue = function(e) {
            var t, i = this.firstParamValue(e), r = this.secondParamValue(e);
            switch (this.type) {
              case d.HSBlockType.ConditionalOperatorMatches:
                return t = this.firstParameterStringValue(e), function(e, t) {
                    try {
                        return new RegExp(e, t);
                    } catch (t) {
                        return new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
                    }
                }(this.secondParameterStringValue(e), "gi").test(t);

              case d.HSBlockType.ConditionalOperatorEquals:
                return v(i, r);

              case d.HSBlockType.ConditionalOperatorLessThan:
                return b(i, r) && !v(i, r);

              case d.HSBlockType.ConditionalOperatorLessThanOrEqualTo:
                return v(i, r) || b(i, r);

              case d.HSBlockType.ConditionalOperatorGreaterThan:
                return T(i, r) && !v(i, r);

              case d.HSBlockType.ConditionalOperatorGreaterThanOrEqualTo:
                return v(i, r) || T(i, r);

              case d.HSBlockType.ConditionalOperatorNotEquals:
                return !v(i, r);

              case d.HSBlockType.ConditionalOperatorAnd:
                return !(!this.firstParamNumberValue(e) || !this.secondParamNumberValue(e));

              case d.HSBlockType.ConditionalOperatorOr:
                return !(!this.firstParamNumberValue(e) && !this.secondParamNumberValue(e));

              case d.HSBlockType.EventOperatorGamePlaying:
                return !0;

              default:
                return !1;
            }
        }, i.prototype.usesOriginalObject = function() {
            return this.type === d.HSBlockType.OriginalObject || this.objectReferenceType === d.HSBlockType.OriginalObject;
        }, i.prototype.stageObjects = function(e) {
            return this.type === d.HSBlockType.Self ? [ e ] : this.usesOriginalObject() ? [ e.originalObject(this.context) ] : this.object ? this.context.version >= c.HSProjectVersion.ADD_SELF ? this.object.allStageObjects() : [ this.object.stageObject(e) ] : this.type === d.HSBlockType.ScreenEdge ? [ l.HSStageObject.edgeOfScreenObject ] : this.type === d.HSBlockType.AnyObject ? h.HSStageProject.sharedInstance.activeStageScene.stageObjects : this.type >= d.HSBlockType.TraitRotation && this.type < d.HSBlockType.HS_END_OF_OBJECT_TRAITS ? [ e ] : [];
        }, i.prototype.firstParameterStringValue = function(e) {
            switch (this.type) {
              case d.HSBlockType.Random110:
              case d.HSBlockType.Random1100:
              case d.HSBlockType.Random11000:
                return "1";

              default:
                if (this.parameters.length > 0) return this.parameters[0].stageParameter().computedStringValue(e);
                if (d.HSBlockType[this.type] === d.HSBlockType[d.HSBlockType.Random110]) return "0";
            }
        }, i.prototype.secondParameterStringValue = function(e) {
            switch (this.type) {
              case d.HSBlockType.Random110:
                return "10";

              case d.HSBlockType.Random1100:
                return "100";

              case d.HSBlockType.Random11000:
                return "1000";

              default:
                return this.parameters.length >= 2 ? this.parameters[1].stageParameter().computedStringValue(e) : "0";
            }
        }, i.prototype.firstParamValue = function(e) {
            switch (this.type) {
              case d.HSBlockType.Random110:
              case d.HSBlockType.Random1100:
              case d.HSBlockType.Random11000:
                return 1;

              default:
                if (this.parameters.length > 0) return this.parameters[0].stageParameter().computedValue(e);
                if (d.HSBlockType[this.type] === d.HSBlockType[d.HSBlockType.Random110]) return 0;
            }
        }, i.prototype.secondParamValue = function(e) {
            switch (this.type) {
              case d.HSBlockType.Random110:
                return 10;

              case d.HSBlockType.Random1100:
                return 100;

              case d.HSBlockType.Random11000:
                return 1e3;

              default:
                return this.parameters.length >= 2 ? this.parameters[1].stageParameter().computedValue(e) : 0;
            }
        }, i.prototype.firstParamNumberValue = function(e) {
            switch (this.type) {
              case d.HSBlockType.Random110:
              case d.HSBlockType.Random1100:
              case d.HSBlockType.Random11000:
                return 1;

              default:
                if (this.parameters.length > 0) return this.parameters[0].stageParameter().computedNumberValue(e);
                if (d.HSBlockType[this.type] === d.HSBlockType[d.HSBlockType.Random110]) return 0;
            }
        }, i.prototype.secondParamNumberValue = function(e) {
            switch (this.type) {
              case d.HSBlockType.Random110:
                return 10;

              case d.HSBlockType.Random1100:
                return 100;

              case d.HSBlockType.Random11000:
                return 1e3;

              default:
                return this.parameters.length >= 2 ? this.parameters[1].stageParameter().computedNumberValue(e) : 0;
            }
        }, i.prototype.endIndexValue = function(e) {
            return this.parameters.length < 3 ? 0 : this.parameters[2].stageParameter().computedNumberValue(e);
        }, i.key = "HSParameterBlock", i;
    }(o.HSBlock);
    function v(e, t) {
        if ("number" == typeof e && "number" == typeof t) {
            var i = e, r = t;
            return Math.abs(i - r) <= Number.EPSILON;
        }
        return e.toString() === t.toString();
    }
    function b(e, t) {
        if ("number" == typeof e && "number" == typeof t) return e < t;
        var i = e.toString(), r = t.toString();
        return -1 === i.localeCompare(r);
    }
    function T(e, t) {
        if ("number" == typeof e && "number" == typeof t) return e > t;
        var i = e.toString(), r = t.toString();
        return 1 === i.localeCompare(r);
    }
    t.HSParameterBlock = y, window.HSParameterBlock = y, window.MAX_FLOAT = t.MAX_FLOAT;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSRule = t.SCRIPT_ID_KEY = void 0;
    var r = i(2), n = i(6), o = i(3), a = i(13), s = i(14), c = i(11), u = i(58), l = i(27), h = i(0), p = i(19);
    t.SCRIPT_ID_KEY = "abilityID";
    var d = function(e) {
        function i(t) {
            var i = e.call(this, t) || this;
            return i.type = h.HSBlockType.Rule, i;
        }
        return r.__extends(i, e), i.prototype.stageRule = function(e) {
            return new u.HSStageRule(this, e);
        }, i.prototype.stageRules = function(e) {
            return [ this.stageRule(e) ];
        }, i.prototype.parseJSON = function(i) {
            if (void 0 === i && (i = {}), this.context.version < o.HSProjectVersion.CUSTOM_WHENS) this.parseLowerThanCustomWhensJSON(i); else {
                var r = this.context.findWithObjectID("HSScript", i[t.SCRIPT_ID_KEY]);
                r ? (e.prototype.parseJSON.call(this, i), this.childBlock() ? (this.objectID = i.id, 
                this.script = r) : this.context.deleteObject(this)) : this.context.deleteObject(this);
            }
        }, i.prototype.parseLowerThanCustomWhensJSON = function(i) {
            void 0 === i && (i = {});
            var r = this.context.findWithObjectID("HSScript", i[t.SCRIPT_ID_KEY]), a = this.context.findWithObjectID("HSObject", i[n.OBJECT_ID_KEY]);
            a && r ? (this.context.version < o.HSProjectVersion.V14 && this.parseLowerThanV14JSON(i, a), 
            e.prototype.parseJSON.call(this, i), this.childBlock() ? (this.script = r, a.willChangeCostume = a.canChangeCostume() && r.containsChangeCostume(), 
            a.addRule(this)) : this.context.deleteObject(this)) : this.context.deleteObject(this);
        }, i.prototype.parseLowerThanV14JSON = function(e, t) {
            var i = e.eventType, r = h.blockTypeForLegacyEventType(i), n = new c.HSParameterBlock(this.context);
            n.type = r;
            var o = new a.HSParameter(this.context);
            switch (this.parameters = [ o ], o.childBlock = n, r) {
              case h.HSBlockType.EventOperatorTap:
              case h.HSBlockType.EventOperatorHold:
                this.addObjectToEventOperator(n, t);
                break;

              case h.HSBlockType.EventOperatorBump:
              case h.HSBlockType.EventOperatorIsTouching:
              case h.HSBlockType.EventOperatorIsNotTouching:
                this.addObjectsToBumps(n, t, e);
            }
        }, i.prototype.addObjectToEventOperator = function(e, t) {
            var i = new l.HSEventParameterBlock(this.context);
            i.object = t;
            var r = new a.HSParameter(this.context);
            r.type = p.HSParameterType.HSObject, r.childBlock = i, e.parameters = [ r ];
        }, i.prototype.addObjectsToBumps = function(e, t, i) {
            var r = new l.HSEventParameterBlock(this.context);
            r.object = t;
            var n = new l.HSEventParameterBlock(this.context);
            n.object = this.context.findWithObjectID("HSObject", i.collisionReceiverObject);
            var o = new a.HSParameter(this.context);
            o.type = p.HSParameterType.HSObject, o.childBlock = r;
            var s = new a.HSParameter(this.context);
            s.type = p.HSParameterType.HSObject, s.childBlock = n, e.parameters = [ o, s ];
        }, i.prototype.firstObject = function() {
            return this.childBlock() && this.childBlock().parameters.length > 0 ? this.childBlock().parameters[0].childBlock.object : null;
        }, i.prototype.firstParam = function() {
            return this.parameters[0];
        }, i.prototype.childBlock = function() {
            return this.firstParam().childBlock;
        }, i.prototype.eventType = function() {
            return this.childBlock().type;
        }, i.prototype.eventParameterBlocks = function() {
            var e = [];
            return this.childBlock() && this.childBlock().parameters.forEach(function(t) {
                t.childBlock && e.push(t.childBlock);
            }), e;
        }, i.prototype.paramsBlock = function() {
            if (this.childBlock().parameters[0]) return this.childBlock().parameters[0].childBlock;
        }, i.prototype.matchesEvent = function(e) {
            return this.childBlock().type === e;
        }, i.prototype.conditionIsTrue = function(e) {
            return this.childBlock().computedBooleanValue(e);
        }, i.key = "HSRule", i;
    }(s.HSBlock);
    t.HSRule = d, window.HSRule = d, window.SCRIPT_ID_KEY = t.SCRIPT_ID_KEY;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSParameter = t.PARAMETER_TYPE_KEY = t.VARIABLE_KEY = t.CHILD_BLOCK_KEY = t.VALUE_KEY = void 0;
    var r = i(2), n = i(8), o = i(3), a = i(10), s = i(9), c = i(25), u = i(26), l = i(27), h = i(11), p = i(28), d = i(19);
    t.VALUE_KEY = "value", t.CHILD_BLOCK_KEY = "datum", t.VARIABLE_KEY = "variable", 
    t.PARAMETER_TYPE_KEY = "type";
    var S = function(e) {
        function i() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return r.__extends(i, e), i.prototype.stageParameter = function() {
            return new c.HSStageParameter(this.value, this.childBlock);
        }, i.prototype.parseJSON = function(e) {
            if (void 0 === e && (e = {}), this.value = e[t.VALUE_KEY], this.type = e[t.PARAMETER_TYPE_KEY], 
            this.type === d.HSParameterType.Object && e[t.CHILD_BLOCK_KEY]) {
                var i = e[t.CHILD_BLOCK_KEY];
                if (i.customObject) {
                    var r = o.HSProjectContext.customObjectMap.get(i.customObject);
                    this.childBlock = r, p.HSImageTextureFactory.instance.prefetchImage(r);
                }
                this.value = i.text ? i.text : i.type;
            } else if (e[t.CHILD_BLOCK_KEY] && e[t.CHILD_BLOCK_KEY].variable) this.setChildBlockToVariableIfPossible(e[t.CHILD_BLOCK_KEY]); else if (e[t.CHILD_BLOCK_KEY]) {
                var n = new h.HSParameterBlock(this.context);
                n.parseJSON(e[t.CHILD_BLOCK_KEY]), this.childBlock = n;
            } else e[t.VARIABLE_KEY] && (this.setChildBlockToVariableIfPossible(e), this.setChildBlockToTraitIfPossible(e), 
            this.setChildBlockToEventParameterIfPossible(e));
        }, i.prototype.toString = function() {
            return a.SourceFormatter.paramToSrc(this);
        }, i.prototype.setChildBlockToVariableIfPossible = function(e) {
            var i = e[t.VARIABLE_KEY];
            if (this.context.findWithObjectID(u.HSVariablePrototype.key, i)) {
                var r = new s.HSVariable(this.context);
                r.parseJSON(e), this.childBlock = r;
            }
        }, i.prototype.setChildBlockToTraitIfPossible = function(e) {
            var i = e[t.VARIABLE_KEY], r = this.context.findWithObjectID(h.HSParameterBlock.key, i);
            r && (this.childBlock = r);
        }, i.prototype.setChildBlockToEventParameterIfPossible = function(e) {
            var i = e[t.VARIABLE_KEY], r = this.context.findWithObjectID(l.HSEventParameterBlock.key, i);
            r && (this.childBlock = r);
        }, i.key = "HSParameter", i;
    }(n.HSManagedObject);
    t.HSParameter = S, window.HSParameter = S, window.VALUE_KEY = t.VALUE_KEY, window.CHILD_BLOCK_KEY = t.CHILD_BLOCK_KEY, 
    window.VARIABLE_KEY = t.VARIABLE_KEY, window.PARAMETER_TYPE_KEY = t.PARAMETER_TYPE_KEY;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSBlock = t.HSBlockClass = t.PARAMS_KEY = t.PARAMETERS_KEY = t.BLOCK_TYPE_KEY = void 0;
    var r, n = i(2), o = i(8), a = i(13), s = i(10), c = i(0);
    t.BLOCK_TYPE_KEY = "type", t.PARAMETERS_KEY = "parameters", t.PARAMS_KEY = "params", 
    function(e) {
        e[e.Method = 0] = "Method", e[e.Control = 1] = "Control", e[e.ConditionalControl = 2] = "ConditionalControl", 
        e[e.Variable = 3] = "Variable";
    }(r = t.HSBlockClass || (t.HSBlockClass = {}));
    var u = function(e) {
        function i() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.parameters = [], t.isControl = !1, t;
        }
        return n.__extends(i, e), i.prototype.parseJSON = function(e) {
            var i = this;
            void 0 === e && (e = {}), this.type = this.type || parseInt(e[t.BLOCK_TYPE_KEY]), 
            (e[t.PARAMETERS_KEY] || e[t.PARAMS_KEY] || []).forEach(function(e) {
                var t = new a.HSParameter(i.context);
                t.parseJSON(e), i.parameters.push(t);
            });
        }, i.prototype.stageParameters = function() {
            return this.parameters.map(function(e) {
                return e.stageParameter();
            });
        }, i.prototype.toString = function() {
            return s.SourceFormatter.blockToSrc(this);
        }, i.blockClassForDict = function(e) {
            switch (void 0 === e && (e = {}), e[t.BLOCK_TYPE_KEY]) {
              case c.HSBlockType.Repeat:
              case c.HSBlockType.LeaveATrail:
              case c.HSBlockType.RepeatForever:
              case c.HSBlockType.Ability:
                return r.Control;

              case c.HSBlockType.CheckOnceIf:
              case c.HSBlockType.CheckIfElse:
                return r.ConditionalControl;
            }
            return r.Method;
        }, i.key = "HSBlock", i;
    }(o.HSManagedObject);
    t.HSBlock = u, window.HSBlockClass = r, window.HSBlock = u, window.BLOCK_TYPE_KEY = t.BLOCK_TYPE_KEY, 
    window.PARAMETERS_KEY = t.PARAMETERS_KEY, window.PARAMS_KEY = t.PARAMS_KEY;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageProject = void 0;
    var r = i(9), n = i(20), o = i(0), a = function() {
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
            t && (n.HopscotchDrawingContext.shouldClear = !0, this.activeStageScene = t, this.activeStageScene.activateAllRulesForEventType(o.HSBlockType.EventOperatorStart));
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
    t.HSStageProject = a, window.HSStageProject = a;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSMain = t.getCurrentPlayerName = t.hsCanLoadEmojis = t.main = void 0;
    var r = i(3), n = i(17), o = i(1), a = i(61), s = i(5), c = i(18), u = i(30), l = i(31), h = i(15), p = i(29), d = i(0), S = i(21);
    i(66), i(67);
    var f = i(39);
    function g(e) {
        var t = new XMLHttpRequest();
        t.open("GET", "https://d2j12ek52gvmx9.cloudfront.net/emojis/d83d-de0e.png", !0), 
        t.onreadystatechange = function() {
            4 === t.readyState && e(200 === t.status);
        }, t.onerror = function() {
            e(!1);
        }, t.send(null);
    }
    function y() {
        var e;
        return ((null === (e = window.ACCOUNT) || void 0 === e ? void 0 : e.user) || {}).nickname || "Guest";
    }
    window.addEventListener("load", function() {
        for (var e = document.querySelectorAll("hopscotch-player"), i = e.length; --i >= 0; ) window.main = t.main = new v(e[i]), 
        window.addEventListener("resize", function() {
            return o.HSApp.sendToApp("resize", "true");
        });
    }), t.hsCanLoadEmojis = g, window.addEventListener("error", function(e) {
        if (!o.isIOSApp()) return !1;
        var i = t.main.projectData.uuid;
        return console.error("ERROR", e, "uuid", i), o.HSApp.sendToApp("error", JSON.stringify(e) + ";uuid: " + i), 
        !1;
    }), t.getCurrentPlayerName = y;
    var v = function() {
        function e(t) {
            AE_MOD.context = this; //AE_MOD Track Context for Screenshot
            this.root = t, this.context = new r.HSProjectContext(), this.isMaximized = !1, this.hasDrawn = !1, 
            this.setiOSStageSizeIfNecessary();
            // var i = document.getElementById("project_data"), n = t.dataset.projectJson || i && i.getAttribute("data");
            var n = JSON.stringify(AE_MOD.projectData); //AE_MOD - This sets the project data
            n && (this.load(JSON.parse(n)), o.HSApp.sendToApp("playerState", "loaded")), this.setSizeFromDataAttrs(), 
            this.background = this.createCanvas("background"), this.screenshot = this.createCanvas("screenshot"), 
            this.canvas = this.createCanvas("foreground"), window.gliEmbedDebug ? this.renderer = new PIXI.WebGLRenderer(s.HSStageScene.stageWidth, s.HSStageScene.stageHeight, {
                resolution: e.dpi,
                transparent: !0,
                view: this.canvas
            }) : this.renderer = PIXI.autoDetectRenderer(s.HSStageScene.stageWidth, s.HSStageScene.stageHeight, {
                resolution: e.dpi,
                backgroundColor: null,
                transparent: !0,
                view: this.canvas
            }), this.screenshotRenderer = new PIXI.CanvasRenderer(s.HSStageScene.stageWidth, s.HSStageScene.stageHeight, {
                resolution: e.dpi,
                backgroundColor: null,
                transparent: !0,
                view: this.screenshot
            });
            var a = document.getElementById("play_container");
            a && (a.style.width = "100%", a.style.height = "100%");
            var c = this.drawBackground.bind(this);
            try {
                this.visualContext = new p.HSVisualContext(this.background, c);
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
            f.CollisionManagerDebug.ENABLED || this.enterFullscreenAction(this.root.parentNode, e, t);
        }, e.prototype.enterFullscreenAction = function(e, t, i) {
            var r = t || window.innerWidth, n = i || window.innerHeight;
            this.resizeRoot(r, n);
            var o = e.parentElement;
            if (o.requestFullscreen) o.requestFullscreen(); else if (o.mozRequestFullScreen) o.mozRequestFullScreen(); else if (o.webkitRequestFullscreen) o.webkitRequestFullscreen(); else if (o.msRequestFullscreen) o.parent.msRequestFullscreen(); else {
                this.isMaximized = !0, this.resizeRoot(r, n), this.root.style.position = "absolute", 
                this.centerOnScreen(r, n);
                for (var a = 0; a < document.body.children.length; a++) document.body.children[a].style.visibility = "hidden";
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
        }, e.prototype.resizeRoot = function(e, t) {
            void 0 === e && (e = this._oldWidth), void 0 === t && (t = this._oldHeight), this._oldWidth = e, 
            this._oldHeight = t;
            var i = s.HSStageScene.stageWidth, r = s.HSStageScene.stageHeight;
            e || t ? e && !t ? t = e * r / i : !e && t && (e = t * i / r) : (e = window.innerWidth - 20, 
            t = window.innerHeight - 250), i > r ? this.resizeRootLandscape(e, t, i, r) : this.resizeRootPortrait(e, t, i, r);
        }, e.prototype.resizeRootLandscape = function(t, i, r, n) {
            var o = Math.min(i / n, t / r), a = Math.max(Math.floor(r * o), e.MIN_STAGE_WIDTH), s = a * (n / r);
            this.root.style.width = Math.floor(a) + "px", this.root.style.height = Math.floor(s) + "px", 
            this.isMaximized && this.centerOnScreen(t, i);
        }, e.prototype.resizeRootPortrait = function(e, t, i, r) {
            var n = Math.min(t / r, e / i), o = Math.floor(r * n), a = o * (i / r);
            this.root.style.width = Math.floor(a) + "px", this.root.style.height = Math.floor(o) + "px", 
            this.isMaximized && this.centerOnScreen(e, t);
        }, e.prototype.centerOnScreen = function(e, i) {
            var r = e || window.innerWidth, n = i || window.innerHeight;
            this.root.style.top = Math.floor((n - t.main.root.offsetHeight) / 2) + "px", this.root.style.left = Math.floor((r - t.main.root.offsetWidth) / 2) + "px";
        }, e.prototype.load = function(e) {
            this.projectData = e, o.HSApp.initUserVariables(this.uuid, this.editedAt), this.context = new r.HSProjectContext(), 
            this.project = new l.HSProject(this.context, e), u.HSSoundManager.sharedInstance = new u.HSSoundManager(this.context.allSoundNames());
        }, e.prototype.mute = function() {
            u.HSSoundManager.sharedInstance.mute();
        }, e.prototype.unmute = function() {
            u.HSSoundManager.sharedInstance.unmute();
        }, e.prototype.isMuted = function() {
            return u.HSSoundManager.sharedInstance.isMuted;
        }, e.prototype.setiOSStageSizeIfNecessary = function() {
            if ("container" === this.root.getAttribute("stage-size")) {
                var e = this.root.getBoundingClientRect();
                s.HSStageScene.stageWidth = e.width, s.HSStageScene.stageHeight = e.height;
            }
        }, e.prototype.willPlay = function(e) {
            var t;
            window.project_error && (window.project_error.style.display = "none"), e && this.load(e), 
            s.HSStageScene.promptsToExecute = [], o.isIOSApp() || null === (t = document.querySelector("div.hs-popup")) || void 0 === t || t.remove(), 
            this.stageProject = new h.HSStageProject(this.project), this.stageProject.activateAllRulesForEventType(d.HSBlockType.EventOperatorStart), 
            this.stageProject.executeAllActiveRules(), this.hasDrawn || this.prepareForFirstPlay(), 
            this.registerEventCallbacks();
        }, e.prototype.prepareForFirstPlay = function() {
            var e = this, t = [], i = this.renderer;
            this.stageProject.activeStageScene.stageObjects.forEach(function(e) {
                var r = e.view.buildAllTextures().then(function(e) {
                    for (var t = 0; t < e.length; t++) i.bindTexture && i.bindTexture(e[t]);
                });
                t.push(r);
            }), Promise.all(t).then(function() {
                e.hasDrawn = !0, o.HSApp.sendToApp("playerState", "ready");
            }).catch(function(e) {
                setTimeout(function() {
                    throw "error building initial textures " + JSON.stringify(e);
                });
            });
        }, e.prototype.startProject = function() {
            o.HSApp.reset(), this.animationTick();
        }, e.prototype.play = function(t) {
            var i = this;
            g(function(r) {
                r || (e.HS_EMOJI_HOST = location.protocol + "//d2j12ek52gvmx9.cloudfront.net/emojis"), 
                i.resetStage(), i.willPlay(t), i.startProject();
            });
        }, e.prototype.resetStage = function() {
            this.animationFrameReq && (this.visualContext.drawingContext.clearBackground(), 
            window.cancelAnimationFrame(this.animationFrameReq), this.animationFrameReq = null);
        }, e.prototype.drawBackground = function() {
            var e = this;
            if (c.DEBUG_DRAW_BOUNDING_BOXES) {
                var t = this.background;
                this.visualContext.drawingContext.bgContext.clearRect(0, 0, t.width, t.height);
            }
            this.stageProject.activeStageScene.stageObjects.forEach(function(t) {
                t.drawPath(e.visualContext.drawingContext);
            });
        }, e.prototype.registerEventCallbacks = function() {
            var e = this;
            (this.project.context.hasAccelerometerEvent() || this.project.context.hasAccelerometerTrait()) && n.HSAccelerometerManager.startAccelerometerUpdates(), 
            this.listeners && this.listeners.unregister(), this.listeners = a.UIRegisterEventCallbacks(this.root, {
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
            this.visualContext.drawingContext.renderFrame(), this.showPrompts(), this.requestNextFrame(), 
            this.updateAndCleanKeyboardEvents();
        }, e.prototype.updateAndCleanKeyboardEvents = function() {
            PIXI.keyboardManager.update(.0166);
        }, e.prototype.showPrompts = function() {
            var e = s.HSStageScene.promptsToExecute[0];
            null == e || e.execute(), (null == e ? void 0 : e.isDone) && s.HSStageScene.promptsToExecute.shift();
        }, e.prototype.requestNextFrame = function() {
            var e = this;
            this.animationFrameReq = window.requestAnimationFrame(function(t) {
                o.HSApp.isRunning ? e.animationTick() : e.requestNextFrame();
            });
        }, e.prototype.takeScreenshot = function() {
            let THIS = AE_MOD.context;
            //AE_MOD Take Screenshot
            THIS.screenshotRenderer.render(THIS.stageProject.activeStageScene.container), THIS.screenshot.style.zIndex = "99999", 
            THIS.canvas.style.opacity = "0", THIS.screenshot.style.opacity = "1", setTimeout(o.HSApp.sendToApp.bind(void 0, "screenshot", "done"), 400);
            //AE_MOD Download Screenshot
            document.querySelector('img[name="background"]').src = THIS.background.toDataURL();
            document.querySelector('img[name="foreground"]').src = THIS.screenshot.toDataURL();
            downloadProjectScreenshot();
            // this.screenshotRenderer.render(this.stageProject.activeStageScene.container), this.screenshot.style.zIndex = "99999", 
            // this.canvas.style.opacity = "0", this.screenshot.style.opacity = "1", setTimeout(o.HSApp.sendToApp.bind(void 0, "screenshot", "done"), 400);
        }, e.prototype.releaseScreenshot = function() {
            this.screenshot.style.zIndex = "-99999", this.canvas.style.opacity = "1", this.screenshot.style.opacity = "0";
        }, Object.defineProperty(e.prototype, "uuid", {
            get: function() {
                return this.projectData.uuid || "";
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "editedAt", {
            get: function() {
                return this.projectData.edited_at || "";
            },
            enumerable: !1,
            configurable: !0
        }), e.HS_EMOJI_HOST = "", e.currentPlayerName = y(), e.MIN_STAGE_WIDTH = 210, e.dpi = Math.min(window.devicePixelRatio, 2), 
        e;
    }();
    t.HSMain = v, window.HSMain = v, window.Vec2 = S.Vec2;
    //AE_MOD Screenshot HSMain declared
    document.getElementById('screenshot-button').src = "assets/screenshot-icon.png";
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSAccelerometerManager = void 0;
    var r = i(1), n = function() {
        function e() {}
        return e.accelerometerFromIOSApp = function(e, t) {
            this.listener(e), this.isShakingFromApp = t;
        }, e.listener = function(e) {
            var t = e.accelerationIncludingGravity, i = Math.hypot(t.x, t.y, t.z) || 9.8, n = Math.round(100 * t.x / i), o = Math.round(100 * t.y / i), a = window.orientation;
            null == a || -90 === a ? (this.tiltUp = n, this.tiltRight = o) : 90 === a ? (this.tiltUp = -n, 
            this.tiltRight = -o) : 0 === a ? (this.tiltUp = -o, this.tiltRight = n) : (this.tiltUp = o, 
            this.tiltRight = -n), r.isIOSApp() || this.updateShakeData(e.acceleration.x, e.acceleration.y, e.acceleration.z);
        }, e.startAccelerometerUpdates = function() {
            "DeviceMotionEvent" in window && !this.isListening && ("function" == typeof DeviceMotionEvent.requestPermission ? this.enableIOS13Accelerometer() : this.enableAccelerometer());
        }, e.checkIfNeedsToOverrideKeyboardTilt = function() {
            var e = this;
            window.addEventListener("devicemotion", function(t) {
                e.shouldOverrideKeyboard || (e.shouldOverrideKeyboard = !!(t.rotationRate.alpha || t.rotationRate.beta || t.rotationRate.gamma));
            });
        }, e.enableIOS13Accelerometer = function() {
            this.isListening || r.isIOSApp() || window.addEventListener("touchend", e.deviceRequestPermissionIOS13);
        }, e.enableAccelerometer = function() {
            this.isListening || (this.isListening = !0, window.addEventListener("devicemotion", this.listener.bind(this), !1));
        }, e.tiltUsingKeyboardIfNecessary = function() {
            this.tiltHorizontalUsingKeyboard(3), this.tiltVerticalUsingKeyboard(3);
        }, e.tiltHorizontalUsingKeyboard = function(e) {
            var t = PIXI.keyboard.Key, i = this.keyDownTime(e, t.LEFT, t.RIGHT);
            null !== i && (this.tiltHorizontalKeyCount = this.tiltHorizontalKeyCount + i, this.keyboardTitlLeft = -1 * Math.floor(this.tiltHorizontalKeyCount), 
            this.keyboardTitlRight = Math.floor(this.tiltHorizontalKeyCount));
        }, e.keyDownTime = function(e, t, i) {
            var r = PIXI.keyboardManager;
            return r.isPressed(t) ? -1 : r.isDown(t) ? -1 * Math.min(e, r.downTime(t)) : r.isPressed(i) ? 1 : r.isDown(i) ? Math.min(e, r.downTime(i)) : null;
        }, e.tiltVerticalUsingKeyboard = function(e) {
            var t = PIXI.keyboard.Key, i = this.keyDownTime(e, t.UP, t.DOWN);
            null !== i && (this.tiltVerticalKeyCount = this.tiltVerticalKeyCount + i, this.keyboardTitlUp = -1 * Math.floor(this.tiltVerticalKeyCount), 
            this.keyboardTitlDown = Math.floor(this.tiltVerticalKeyCount));
        }, e.tiltDirection = function() {
            if (this.tiltUsingKeyboardIfNecessary(), !this.tiltRight || !this.tiltUp) return null;
            return r.hs_direction(this.tiltRight, this.tiltUp, 30);
        }, e.updateShakeData = function(t, i, r) {
            this.xAccelerations.push(t), this.yAccelerations.push(i), this.zAccelerations.push(r), 
            this.xAccelerations.length > e.SHAKE_MEMORY_COUNT && this.xAccelerations.shift(), 
            this.yAccelerations.length > e.SHAKE_MEMORY_COUNT && this.yAccelerations.shift(), 
            this.zAccelerations.length > e.SHAKE_MEMORY_COUNT && this.zAccelerations.shift();
        }, e.isShaking = function() {
            return !!this.wasSpaceKeyPressed || (r.isIOSApp() ? this.isShakingFromApp : [ this.xAccelerations, this.yAccelerations, this.zAccelerations ].some(function(t) {
                return Math.abs(r.mean(t)) < e.SUDDEN_ACCEL_THRESHOLD && r.variance(t) > e.SHAKE_SENSITIVITY;
            }));
        }, e.clear = function() {
            e.tiltUp = 0, e.keyboardTitlUp = 0, e.tiltDown = 0, e.keyboardTitlDown = 0, e.tiltLeft = 0, 
            e.keyboardTitlLeft = 0, e.tiltRight = 0, e.keyboardTitlRight = 0, e.tiltHorizontalKeyCount = 0, 
            e.tiltVerticalKeyCount = 0;
        }, Object.defineProperty(e, "wasSpaceKeyPressed", {
            get: function() {
                if (this.shouldOverrideKeyboard) return !1;
                var e = PIXI.keyboard.Key;
                return PIXI.keyboardManager.isPressed(e.SPACE);
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e, "tiltUp", {
            get: function() {
                return this.shouldOverrideKeyboard ? this._tiltUp : o(this._tiltUp, this.keyboardTitlUp);
            },
            set: function(e) {
                this._tiltUp = e, this._tiltDown = -e;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e, "tiltDown", {
            get: function() {
                return this.shouldOverrideKeyboard ? this._tiltDown : o(this._tiltDown, this.keyboardTitlDown);
            },
            set: function(e) {
                this._tiltDown = e, this._tiltUp = -e;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e, "tiltLeft", {
            get: function() {
                return this.shouldOverrideKeyboard ? this._tiltLeft : o(this._tiltLeft, this.keyboardTitlLeft);
            },
            set: function(e) {
                this._tiltLeft = e, this._tiltRight = -e;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e, "tiltRight", {
            get: function() {
                return this.shouldOverrideKeyboard ? this._tiltRight : o(this._tiltRight, this.keyboardTitlRight);
            },
            set: function(e) {
                this._tiltRight = e, this._tiltLeft = -e;
            },
            enumerable: !1,
            configurable: !0
        }), e.shouldOverrideKeyboard = !1, e.isListening = !1, e.isShakingFromApp = !1, 
        e._tiltUp = 0, e._tiltDown = 0, e._tiltLeft = 0, e._tiltRight = 0, e.deviceRequestPermissionIOS13 = function() {
            DeviceMotionEvent.requestPermission().then(function(t) {
                "granted" === t && (e.enableAccelerometer(), window.removeEventListener("touchend", e.deviceRequestPermissionIOS13));
            }).catch(console.error);
        }, e.tiltHorizontalKeyCount = 0, e.tiltVerticalKeyCount = 0, e.keyboardTitlUp = 0, 
        e.keyboardTitlDown = 0, e.keyboardTitlLeft = 0, e.keyboardTitlRight = 0, e.xAccelerations = [], 
        e.yAccelerations = [], e.zAccelerations = [], e.SHAKE_MEMORY_COUNT = 10, e.SHAKE_SENSITIVITY = 60, 
        e.SUDDEN_ACCEL_THRESHOLD = 2, e;
    }();
    function o(e, t) {
        var i = e + t, r = a(i + 100, 400) - 200 < 0 ? 1 : -1;
        return (a(i + 100, 200) - 100) * r;
    }
    function a(e, t) {
        return (e % t + t) % t;
    }
    t.HSAccelerometerManager = n, window.HSAccelerometerManager = n;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageObject = t.DEFAULT_INSTRUMENT = t.DEFAULT_TEMPO = t.DEBUG_DRAW_BOUNDING_BOXES = t.EDGE_OF_SCREEN_OBJECT_ID = t.BASE_STEP_SIZE = t.BASE_SPEED = void 0;
    var r = i(36), n = i(6), o = i(1), a = i(24), s = i(5), c = i(45), u = i(37), l = i(23), h = i(20), p = i(49), d = i(50), S = i(7), f = i(54), g = i(0), y = i(4), v = i(21);
    t.BASE_SPEED = 400, t.BASE_STEP_SIZE = 10, t.EDGE_OF_SCREEN_OBJECT_ID = "zzzEdge", 
    t.DEBUG_DRAW_BOUNDING_BOXES = !1, t.DEFAULT_TEMPO = 120, t.DEFAULT_INSTRUMENT = "piano";
    var b = function() {
        function e(i, n, o, a, s, c, h, p, f, g, y) {
            var v = this;
            void 0 === g && (g = 1), void 0 === y && (y = 1), this.x = i, this.y = n, this.text = o, 
            this.type = a, this.baseObjectScale = s, this.fontSize = c, this.objectID = h, this.imageName = p, 
            this.willChangeCostume = f, this.originalWidth = g, this.originalHeight = y, this.createOrder = -1, 
            this._animationNumber = 0, this.sizePercentWidth = 100, this.sizePercentHeight = 100, 
            this.headingInDegrees = 0, this.speed = t.BASE_SPEED, this.tempo = t.DEFAULT_TEMPO, 
            this.instrument = t.DEFAULT_INSTRUMENT, this.invisibilityPercent = 0, this.isFlipped = !1, 
            this.drawingRadius = null, this.drawingColor = null, this.penDown = !1, this.creationTick = null, 
            this.relatedCollisionRules = new Set(), this.collisionImageFactory = new d.HSCollisionImageFactory(), 
            this.stageRules = [], this.cloneIndex = 0, this.zIndex = 0, this.isAlive = !0, this.resetTextSize = function() {
                var e = l.HSTextNode.fromString(v.text), t = v.view.canvas;
                if (t) {
                    if (e) {
                        var i = e.flow(t.getContext("2d"), l.HSTextNode.MAX_LINE_WIDTH), r = i.width, n = i.height;
                        v.originalWidth = r, v.originalHeight = n, v.collisionObject = null;
                    }
                } else v.view.onTextureBuild = v.resetTextSize;
            }, e.initEdges(), this.createOrder = ++e.OBJECTS_CREATED, this.color = this.colorForType(a), 
            this.stageObjectID = e.uniqueIdCounter++, this.type === S.HSObjectType.text ? this.text = o : this.text = null, 
            this.pathDrawer = new r.HSPathDrawer(this.currentPoint()), this.view = new u.HSView(this.viewProps());
        }
        return e.initEdges = function() {
            e.initiatedEdgeOfScreen || (e.initiatedEdgeOfScreen = !0, e.edgeOfScreenObject = new e(0, 0, "", S.HSObjectType.edgeOfScreen, 1, 80, t.EDGE_OF_SCREEN_OBJECT_ID, null, !1));
        }, e.prototype.setWidth = function(e) {
            0 === e && (e = .01), e && (this.sizePercentWidth = e / this.originalWidth * (1 / this.baseScale()) * 100);
        }, e.prototype.setHeight = function(e) {
            0 === e && (e = .01), e && (this.sizePercentHeight = e / this.originalHeight * (1 / this.baseScale()) * 100);
        }, e.prototype.width = function() {
            return this.view.textureExists ? this.view.width() : Math.round(this.originalWidth * this.baseScale());
        }, e.prototype.height = function() {
            return this.view.textureExists ? this.view.height() : Math.round(this.originalHeight * this.baseScale());
        }, e.prototype.colorForType = function(e) {
            return this.type === S.HSObjectType.text ? y.HSColor.rgbTextColor : this.isShape() ? y.HSColor.rgbTextColor : y.HSColor.rgbWhiteColor;
        }, e.prototype.originalObject = function(e) {
            var t = e.findWithObjectID(n.HSObject.key, this.objectID);
            return t ? t.stageObject() : null;
        }, e.prototype.baseScale = function() {
            return this.isFullSizeShape() ? .5 : 1;
        }, e.prototype.isFullSizeShape = function() {
            return S.hsIsFullSizeShape(this.type);
        }, e.prototype.isShape = function() {
            return S.hsIsShapeType(this.type);
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
                stageHeight: s.HSStageScene.stageHeight,
                originalHeight: this.originalHeight,
                originalWidth: this.originalWidth
            };
        }, e.prototype.imageForCollision = function() {
            return this.collisionImageFactory.image(this.view.imageSource());
        }, e.prototype.boundingBox = function() {
            this._boundingBox || (this._boundingBox = new p.HSBoundingBox());
            var e = this.view.bounds();
            return this._boundingBox.update(this.x, this.y, e.width / 2, e.height / 2), this._boundingBox;
        }, e.prototype.drawPath = function(e) {
            this.pathDrawer.drawDiff(e);
        }, e.prototype.isBlankTextObject = function() {
            return this.type === S.HSObjectType.text && !this.shouldDrawText();
        }, e.prototype.shouldDrawText = function() {
            return a.HSTokenizer.hasDrawableTokens(this.text);
        }, e.prototype.canDrawCharacter = function() {
            return this.type !== S.HSObjectType.text;
        }, e.prototype.canDrawImage = function() {
            return !!this.imageName;
        }, e.prototype.opacity = function() {
            return .01 * Math.max(100 - this.invisibilityPercent, 0);
        }, e.prototype.clear = function() {
            h.HopscotchDrawingContext.shouldClear = !0;
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
            this.text = e, this.color = t, this.type = S.HSObjectType.text, this.resetTextSize();
        }, e.prototype.setCharacter = function(e) {
            this.type = e, this.color = this.colorForType(e), this._animationNumber = 0, this.text = null, 
            this.imageName = null, f.HSOBJECT_SIZES[e] && (this.originalWidth = f.HSOBJECT_SIZES[e].width, 
            this.originalHeight = f.HSOBJECT_SIZES[e].height);
        }, e.prototype.setImage = function(e) {
            this.type = S.HSObjectType.image, this.color = this.colorForType(S.HSObjectType.image), 
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
        }, e.prototype.queueEventMessage = function(e) {
            this.broadcastMessageFunction(e);
        }, e.prototype.destroy = function() {
            this.view = null, this.stageRules = [];
        }, e.prototype.isInvisible = function() {
            return this.invisibilityPercent >= 100;
        }, e.prototype.deepCopy = function(t, i) {
            var r = new e(i.x, i.y, i.text, i.type, i.context.baseObjectScale, i.context.fontSize, i.objectID, i.fileName(), i.willChangeCostume, this.originalWidth, this.originalHeight);
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
            return new r.HSLinePoint(new v.Vec2(this.x, this.y), this.drawingRadius, this);
        }, e.prototype.moveToWithinBoundary = function() {
            this.x = Math.min(this.x, s.HSStageScene.stageWidth), this.x = Math.max(this.x, 0), 
            this.y = Math.min(this.y, s.HSStageScene.stageHeight), this.y = Math.max(this.y, 0);
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
            var e = this.allStageRulesForEventType(g.HSBlockType.EventOperatorIsTouching), t = this.allStageRulesForEventType(g.HSBlockType.EventOperatorIsNotTouching), i = this.allStageRulesForEventType(g.HSBlockType.EventOperatorBump);
            return e.concat(t).concat(i).reduce(function(e, t) {
                return e.concat(t.collisionPairs());
            }, []);
        }, e.prototype.executeActiveRules = function() {
            for (var e = this.stageRules, t = e.length, i = 0; i !== t; ++i) e[i].conditionIsTrue(this) && (e[i].hasBlocksToExecute() || (e[i].isActive = !1), 
            e[i].activate()), e[i].execute(this);
        }, e.prototype.executeBlock = function(i) {
            var r, n, a, u, l, h, p = i.firstIntegerValue(this), d = i.parameters;
            switch (i.type) {
              case g.HSBlockType.Move:
                this.moveBy(p);
                break;

              case g.HSBlockType.SetPosition:
                this.setPosition(d[0].computedNumberValue(this), d[1].computedNumberValue(this));
                break;

              case g.HSBlockType.SetSize:
                if (null === (r = d[0]) || void 0 === r ? void 0 : r.isSet(this)) {
                    var f = null === (n = d[0]) || void 0 === n ? void 0 : n.computedValue(this);
                    "number" == typeof f && (this.sizePercentWidth = f, this.sizePercentHeight = f);
                }
                break;

              case g.HSBlockType.Grow:
                a = Math.max(100 + p, 0), this.sizePercentWidth *= .01 * a, this.sizePercentHeight *= .01 * a;
                break;

              case g.HSBlockType.Scale:
                this.sizePercentWidth *= .01 * p, this.sizePercentHeight *= .01 * p;
                break;

              case g.HSBlockType.Shrink:
                a = Math.max(100 - p, 0), u = this.sizePercentWidth * a * .01, this.sizePercentWidth = Math.max(u, 1e-7), 
                u = this.sizePercentHeight * a * .01, this.sizePercentHeight = Math.max(u, 1e-7);
                break;

              case g.HSBlockType.SetHeading:
                this.headingInDegrees = e.normalizeHeading(p);
                break;

              case g.HSBlockType.ChangeX:
                this.changeXBy(p);
                break;

              case g.HSBlockType.ChangeY:
                this.changeYBy(p);
                break;

              case g.HSBlockType.Rotate:
                this.rotateBy(p);
                break;

              case g.HSBlockType.ChangeSpeed:
                this.speed = p;
                break;

              case g.HSBlockType.SetInvisibility:
                this.invisibilityPercent = p;
                break;

              case g.HSBlockType.Flip:
                this.isFlipped = !this.isFlipped;
                break;

              case g.HSBlockType.StrokeColor:
                this.drawingColor = d[0].computedColorString(this);
                break;

              case g.HSBlockType.StrokeWidth:
                this.drawingRadius = p / 2;
                break;

              case g.HSBlockType.Clear:
                this.clear();
                break;

              case g.HSBlockType.PenDown:
                this.penDown = !0;
                break;

              case g.HSBlockType.PenUp:
                this.penDown = !1;
                break;

              case g.HSBlockType.ChangeCostume:
                this.changePose();
                break;

              case g.HSBlockType.SetText:
                h = y.HSColor.rgbTextColor, d.length >= 2 && (h = d[1].computedColorString(this)), 
                this.setText(d[0].computedStringValue(this), h);
                break;

              case g.HSBlockType.SetTextToInput:
                s.HSStageScene.promptsToExecute.push(new c.HSStagePrompt(this, i));
                break;

              case g.HSBlockType.SetVariable:
                (l = d[0].variable()) && (l.isSkillComplete() && 1 === d[1].computedValue(this) && o.HSApp.sendToApp("hsSkillComplete", "1"), 
                l.setValue(d[1].computedValue(this), this));
                break;

              case g.HSBlockType.SaveInput:
                s.HSStageScene.promptsToExecute.push(new c.HSStagePrompt(this, i));
                break;

              case g.HSBlockType.ChangeVariable:
                if (l = d[0].variable()) {
                    var v = l.computedNumberValue(this) + d[1].computedNumberValue(this);
                    l.setValue(v, this);
                }
                break;

              case g.HSBlockType.BringToFront:
                this.bringToFront();
                break;

              case g.HSBlockType.SendToBack:
                this.sendToBack();
                break;

              case g.HSBlockType.SetImage:
                d[0].computedObjectType() === S.HSObjectType.text ? this.setText(d[0].value, y.HSColor.rgbTextColor) : d[0].computedObjectType() === S.HSObjectType.image ? this.setImage(d[0].childBlock) : this.setCharacter(d[0].computedObjectType());
                break;

              case g.HSBlockType.SetColor:
                this.color = d[0].computedColorString(this);
                break;

              case g.HSBlockType.SetWidthAndHeight:
                d[0].isSet(this) && this.setWidth(d[0].computedNumberValue(this)), d[1].isSet(this) && this.setHeight(d[1].computedNumberValue(this));
                break;

              case g.HSBlockType.SetZIndex:
                var b = d[0].computedNumberValue(this);
                b !== this.zIndex && (this.zIndex = b, s.HSStageScene.dirtySort = !0);
                break;

              case g.HSBlockType.SetOriginXY:
                this.setOrigin(d[0].computedNumberValue(this), d[1].computedNumberValue(this));
                break;

              case g.HSBlockType.SetCenterXY:
                this.setPosition(d[0].computedNumberValue(this), d[1].computedNumberValue(this));
                break;

              case g.HSBlockType.SetTempo:
                this.tempo = p;
                break;

              case g.HSBlockType.SetInstrument:
                this.instrument = o.parseInstrumentName(d[0].computedStringValue(this)) || t.DEFAULT_INSTRUMENT;
                break;
                
              case HSBlockType.None: //AE_MOD
                if (/^_ae_webplayer_action:/g.test(d[0].value)){
                  AE_MOD.webplayer_action(d[0].value.split('_ae_webplayer_action:')[1], ((d[1])?d[1].computedValue(this):undefined),this);
                }
                break;
            }
        }, Object.defineProperty(e.prototype, "originX", {
            get: function() {
                return this.x - .5 * this.width();
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "originY", {
            get: function() {
                return this.y - .5 * this.height();
            },
            enumerable: !1,
            configurable: !0
        }), e.OBJECTS_CREATED = 0, e.uniqueIdCounter = 0, e.initiatedEdgeOfScreen = !1, 
        e;
    }();
    t.HSStageObject = b, window.HSStageObject = b, window.BASE_SPEED = t.BASE_SPEED, 
    window.BASE_STEP_SIZE = t.BASE_STEP_SIZE, window.EDGE_OF_SCREEN_OBJECT_ID = t.EDGE_OF_SCREEN_OBJECT_ID, 
    window.DEBUG_DRAW_BOUNDING_BOXES = t.DEBUG_DRAW_BOUNDING_BOXES, window.DEFAULT_TEMPO = t.DEFAULT_TEMPO, 
    window.DEFAULT_INSTRUMENT = t.DEFAULT_INSTRUMENT;
}, function(e, t, i) {
    "use strict";
    var r;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSParameterType = void 0, function(e) {
        e[e.Default = 42] = "Default", e[e.LineWidth = 43] = "LineWidth", e[e.LineColor = 44] = "LineColor", 
        e[e.RandomLow = 45] = "RandomLow", e[e.RandomHigh = 46] = "RandomHigh", e[e.Variable = 47] = "Variable", 
        e[e.VariableValue = 48] = "VariableValue", e[e.Conditional = 49] = "Conditional", 
        e[e.HSObject = 50] = "HSObject", e[e.Sound = 51] = "Sound", e[e.Event = 52] = "Event", 
        e[e.SetText = 53] = "SetText", e[e.Object = 54] = "Object", e[e.TextOnly = 55] = "TextOnly", 
        e[e.Scene = 56] = "Scene", e[e.MultiPurposeNumberDefault = 57] = "MultiPurposeNumberDefault", 
        e[e.Product = 58] = "Product", e[e.Rhythm = 59] = "Rhythm", e[e.MusicNote = 60] = "MusicNote", 
        e[e.Instrument = 61] = "Instrument";
    }(r = t.HSParameterType || (t.HSParameterType = {})), window.HSParameterType = r;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HopscotchDrawingContext = void 0;
    var r = i(5), n = i(16), o = function() {
        function e(e, t, i) {
            this.bgCanvas = e, this.drawBackground = t, this.visualContext = i, this.bgContext = this.layerFromCanvas2d(e), 
            this.clearBackground();
        }
        return e.prototype.layerFromCanvas2d = function(e) {
            var t = this.canvasWidth(), i = this.canvasHeight();
            e.width = t, e.height = i;
            var r = e.getContext("2d");
            return r && (r.translate(0, i), r.scale(n.HSMain.dpi, -1 * n.HSMain.dpi)), r;
        }, e.prototype.canvasWidth = function() {
            return r.HSStageScene.stageWidth * n.HSMain.dpi;
        }, e.prototype.canvasHeight = function() {
            return r.HSStageScene.stageHeight * n.HSMain.dpi;
        }, e.prototype.renderFrame = function() {
            e.shouldClear && (this.clearBackground(), e.shouldClear = !1), this.drawBackground();
        }, e.prototype.clearBackground = function() {
            this.bgContext && (this.bgContext.fillStyle = "white", this.bgContext.fillRect(0, 0, this.bgCanvas.width, this.bgCanvas.height));
        }, e.prototype.drawLine = function(e, t) {
            var i = this.bgContext;
            i.beginPath(), i.moveTo.apply(i, [ e.point.x, e.point.y ]), e.point.x === t.point.x && e.point.y === t.point.y ? (i.fillStyle = t.colorReference.drawingColor, 
            i.arc(t.point.x, t.point.y, t.radius, 0, 2 * Math.PI), i.fill()) : (i.lineWidth = 2 * t.radius, 
            i.lineCap = "round", i.strokeStyle = t.colorReference.drawingColor, i.lineTo.apply(i, [ t.point.x, t.point.y ]), 
            i.stroke());
        }, e.shouldClear = !1, e.MAX_TEXTURE_SIDE_LENGTH = 1024, e;
    }();
    t.HopscotchDrawingContext = o, window.HopscotchDrawingContext = o;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Vec2 = void 0;
    var r = Float32Array || Array, n = function() {
        function e(e, t) {
            void 0 === e && (e = 0), void 0 === t && (t = 0), this.inner = new r(2), this.inner[0] = e, 
            this.inner[1] = t;
        }
        return Object.defineProperty(e.prototype, 0, {
            get: function() {
                return this.inner[0];
            },
            set: function(e) {
                this.inner[0] = e;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, 1, {
            get: function() {
                return this.inner[1];
            },
            set: function(e) {
                this.inner[1] = e;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "x", {
            get: function() {
                return this.inner[0];
            },
            set: function(e) {
                this.inner[0] = e;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "y", {
            get: function() {
                return this.inner[1];
            },
            set: function(e) {
                this.inner[1] = e;
            },
            enumerable: !1,
            configurable: !0
        }), e.subtract = function(e, t, i) {
            return e[0] = t[0] - i[0], e[1] = t[1] - i[1], e;
        }, e.prototype.subtract = function(t, i) {
            return this.inner = e.subtract(this.inner, t.inner, i.inner), this;
        }, e.len = function(e) {
            var t = e[0], i = e[1];
            return Math.sqrt(t * t + i * i);
        }, e.prototype.len = function() {
            return e.len(this.inner);
        }, e.dot = function(e, t) {
            return e[0] * t[0] + e[1] * t[1];
        }, e.prototype.dot = function(t) {
            return e.dot(this.inner, t.inner);
        }, e.prototype.toString = function() {
            return "Vec2(" + this.inner[0] + ", " + this.inner[1] + ")";
        }, e;
    }();
    t.Vec2 = n;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSScript = t.BLOCKS_KEY = void 0;
    var r = i(2), n = i(8), o = i(41), a = i(12), s = i(14), c = i(35), u = i(64), l = i(42), h = i(0);
    t.BLOCKS_KEY = "blocks";
    var p = function(e) {
        function i() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.blocks = [], t;
        }
        return r.__extends(i, e), i.prototype.stageScript = function() {
            return new u.HSStageScript(this);
        }, i.prototype.addObjectIDFromJSON = function(e) {
            void 0 === e && (e = {}), this.objectID = e[a.SCRIPT_ID_KEY];
        }, i.prototype.isImmediatelyRecursive = function() {
            return this.blocks.length > 0 && this.blocks[0].scripts && this.blocks[0].scripts[0] === this || !this.firstMethod(0);
        }, i.prototype.firstMethod = function(e) {
            if (e > 30) return null;
            var t = this.blocks[0];
            return t ? t.isControl ? t.scripts[0] ? t.scripts[0].firstMethod(e + 1) : null : t : this;
        }, i.prototype.containsChangeCostume = function(e) {
            void 0 === e && (e = {});
            for (var t = 0; t < this.blocks.length; t++) {
                var i = this.blocks[t];
                if (i.type === h.HSBlockType.ChangeCostume) return !0;
                var r = i;
                if (r.scripts) for (var n = 0; n < r.scripts.length; n++) {
                    var o = r.scripts[n], a = o.objectID;
                    if (!e[a] && (e[a] = !0, o.containsChangeCostume(e))) return !0;
                }
            }
            return !1;
        }, i.prototype.parseJSON = function(e) {
            var i = this;
            void 0 === e && (e = {}), (e[t.BLOCKS_KEY] || []).forEach(function(e) {
                var t;
                switch (s.HSBlock.blockClassForDict(e)) {
                  case s.HSBlockClass.Control:
                    t = new c.HSControlBlock(i.context);
                    break;

                  case s.HSBlockClass.Method:
                    t = new l.HSMethodBlock(i.context);
                    break;

                  case s.HSBlockClass.ConditionalControl:
                    t = new o.HSConditionalControl(i.context);
                }
                t.parseJSON(e), i.blocks.push(t);
            });
        }, i.key = "HSScript", i;
    }(n.HSManagedObject);
    t.HSScript = p, window.HSScript = p, window.BLOCKS_KEY = t.BLOCKS_KEY;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSGeometricShapeTextNode = t.HSEmojiTextNode = t.HSTextNode = t.HSTextJustify = t.HSLineBox = void 0;
    var r, n = i(2), o = i(1), a = i(16), s = i(24), c = i(4), u = function() {
        this.width = 0;
    };
    t.HSLineBox = u, function(e) {
        e[e.center = 1] = "center", e[e.left = 2] = "left";
    }(r = t.HSTextJustify || (t.HSTextJustify = {}));
    var l = function() {
        function e(e, t) {
            return this.text = e, this.kind = t, t === s.HSTextNodeKind.emoji ? new h(e) : t === s.HSTextNodeKind.geometricShape ? new p(e) : void 0;
        }
        return e.prototype.prevWhitespace = function() {
            return this.kind === s.HSTextNodeKind.whitespace ? this : this.kind !== s.HSTextNodeKind.newline && this.prev ? this.prev.prevWhitespace() : null;
        }, e.prototype.tail = function() {
            return this.next ? this.next.tail() : this;
        }, e.concat = function(e, t) {
            if (e) {
                var i = e.tail();
                i.next = t, t && (t.prev = i);
            }
            return e || t;
        }, e.prototype.concat = function(t) {
            return e.concat(this, t);
        }, e.prototype.replace = function(e) {
            e.prev = this.prev, e.prev && (e.prev.next = e);
            var t = e.tail();
            return t.next = this.next, t.next && (t.next.prev = t), e;
        }, e.prototype.flow = function(t, i, n) {
            n = n || r.center;
            var o = this, a = {
                width: 0,
                height: 0
            };
            function c() {
                var i = o.x + o.measure(t).width, r = o.y + e.LINE_HEIGHT;
                a = {
                    width: Math.max(i, a.width),
                    height: r
                }, o = o.next;
            }
            for (;o; ) {
                var l = o.measure(t);
                if (o.prev) {
                    var h = o.prev.measure(t).width;
                    o.x = o.prev.x + h, o.y = o.prev.y, o.lineBox = o.prev.lineBox;
                } else o.x = 0, o.y = 0, o.lineBox = new u();
                if (o.lineBox.width = o.x + l.width, o.kind === s.HSTextNodeKind.newline) o.y += e.LINE_HEIGHT, 
                o.x = 0, o.lineBox = new u(), c(); else if (o.x + l.width > i) {
                    var p = o.prevWhitespace();
                    if (p) {
                        var d = new e("\n", s.HSTextNodeKind.newline);
                        o = p.replace(d);
                    } else o = o.replace(o.forceLineBreak(t, i));
                } else c();
            }
            return n === r.center && this.center(a), a;
        }, e.prototype.center = function(e) {
            this.x += (e.width - this.lineBox.width) / 2, this.next && this.next.center(e);
        }, e.prototype.measure = function(e) {
            return this.kind === s.HSTextNodeKind.newline ? {
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
        }, e.prototype.forceLineBreak = function(t, i) {
            for (var r = "", n = this.text, o = 0; o !== n.length; ++o) {
                var a = r + n[o];
                if (t.measureText(a).width > i) {
                    var c = e.parse(r).head, u = new e("\n", s.HSTextNodeKind.newline);
                    c.concat(u);
                    var l = new e(this.text.substr(r.length), this.kind);
                    return u.concat(l), c;
                }
                r = a;
            }
            return this;
        }, e.prototype.toString = function() {
            return this.text + (this.next ? this.next.toString() : "");
        }, e.fromString = function(t) {
            return e.parse(t).head;
        }, e.parse = function(t) {
            var i, r;
            return s.HSTokenizer.tokenize(t).forEach(function(t) {
                var n = new e(t.text, t.kind);
                e.concat(i, n), i = n, r || (r = i);
            }), {
                head: r,
                tail: i
            };
        }, e.MAX_LINE_WIDTH = 600, e.LINE_HEIGHT = 55, e;
    }();
    t.HSTextNode = l;
    var h = function(e) {
        function t(t) {
            var i = e.call(this, t, null) || this;
            return i.kind = s.HSTextNodeKind.emoji, i;
        }
        return n.__extends(t, e), t.prototype.drawNode = function(i) {
            var r = this;
            return t.getImage({
                text: this.text,
                color: c.HSColor.hsbStringFromRgbString(i.fillStyle)
            }).then(function(e) {
                var n = o.isIOSApp() ? e.width : t.WIDTH, a = o.isIOSApp() ? e.height : t.HEIGHT;
                i.drawImage(e, r.x, r.y, n, a);
            }).catch(function(t) {
                return e.prototype.drawNode.call(r, i);
            });
        }, t.getImageInfo = function(e) {
            return o.isIOSApp() ? o.requestTextureFromApp({
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
                return a.HSMain.HS_EMOJI_HOST && (t = t.replace("/assets", a.HSMain.HS_EMOJI_HOST)), 
                o.getImageFromUri(t).then(function(t) {
                    return t.width /= e.scaleFactor, t.height /= e.scaleFactor, t;
                });
            });
        }, t.prototype.measure = function(e) {
            return {
                width: t.WIDTH
            };
        }, t.prototype.forceLineBreak = function(e, i) {
            var r = l.fromString("\n"), n = new t(this.text);
            return r.concat(n), r;
        }, t.HEIGHT = 40, t.WIDTH = 40, t;
    }(l);
    t.HSEmojiTextNode = h;
    var p = function(e) {
        function t(t) {
            var i = e.call(this, t, null) || this;
            return i.kind = s.HSTextNodeKind.geometricShape, i.kind = s.HSTextNodeKind.geometricShape, 
            i;
        }
        return n.__extends(t, e), t.prototype.drawNode = function(e) {
            var i = e.font, r = +e.font.match(/^\d*/), n = Math.round(r * this.getScaleFactor()), o = this.measure(e).width;
            e.font = n + "px " + t.FONT_FAMILIES.join(", ");
            var a = e.measureText(this.text).width;
            return e.fillText(this.text, this.x + (o - a) / 2, this.y + o - a + 1.5), e.font = i, 
            Promise.resolve(null);
        }, t.prototype.getScaleFactor = function() {
            return "■" === this.text ? .85 : .81;
        }, t.prototype.measure = function(e) {
            var i = e.font, r = +e.font.match(/^\d*/);
            e.font = r + "px " + t.FONT_FAMILIES.join(", ");
            var n = e.measureText(this.text);
            return e.font = i, n;
        }, t.FONT_FAMILIES = [ "Avenir-Book", "STIXGeneral", "sans-serif" ], t;
    }(l);
    t.HSGeometricShapeTextNode = p, window.HSLineBox = u, window.HSTextJustify = r, 
    window.HSTextNode = l, window.HSEmojiTextNode = h, window.HSGeometricShapeTextNode = p;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSTokenizer = t.HSToken = t.HSTextNodeKind = void 0;
    var r, n = i(1);
    !function(e) {
        e[e.text = 0] = "text", e[e.whitespace = 1] = "whitespace", e[e.newline = 2] = "newline", 
        e[e.emoji = 3] = "emoji", e[e.geometricShape = 4] = "geometricShape";
    }(r = t.HSTextNodeKind || (t.HSTextNodeKind = {}));
    var o = function(e, t) {
        this.text = e, this.kind = t;
    };
    t.HSToken = o;
    var a = function() {
        function e() {}
        return e.hasDrawableTokens = function(t) {
            return null != t && /\S/.test(t) && !e.ONLY_VARIATION_SELECTORS.test(t);
        }, e.tokenize = function(t) {
            if (this.tokenizedStringsCache.has(t)) return this.tokenizedStringsCache.get(t);
            var i, a = [], s = 0, c = null;
            for (i = 0; i < t.length; i++) if (" " === t[i] || "	" === t[i]) c !== r.whitespace && (i > s && a.push(new o(t.substring(s, i), c)), 
            s = i, c = r.whitespace); else if ("\n" === t[i]) i > s && c !== r.whitespace && a.push(new o(t.substring(s, i), c)), 
            s = i, c = r.newline; else if (e.ZERO_WIDTH_JOINER.test(t[i]) && c === r.emoji) {
                if (i += 1, this.isEmojiStartIndex(t, i)) {
                    var u = t.slice(i, i + 5).match(n.emoji.regex);
                    u && u[0] && (i += u[0].length - 1);
                }
            } else if (e.ONLY_VARIATION_SELECTORS.test(t[i]) && c !== r.text) {
                if (i > s) {
                    var l = i;
                    c === r.emoji && (l = i + 1), a.push(new o(t.substring(s, l), c));
                }
                s = i + 1, c = null;
            } else if (this.isEmojiStartIndex(t, i)) {
                i > s && a.push(new o(t.substring(s, i), c)), s = i, c = r.emoji;
                var h = 5;
                this.isUnicodeEmojiStartIndex(t, i) && (h = 2);
                var p = t.slice(i, i + h), d = e.emojiMatch(p);
                if (d) i += p.indexOf(d[0]) + (d[0].length - 1);
            } else !n.iOS && e.GEOMETRIC_SHAPES.test(t[i]) ? (i > s && a.push(new o(t.substring(s, i), c)), 
            s = i, c = r.geometricShape) : c !== r.text && (i > s && a.push(new o(t.substring(s, i), c)), 
            s = i, c = r.text);
            return i > s && null !== c && a.push(new o(t.substring(s, i), c)), this.clearTokenCacheIfNecessary(), 
            this.tokenizedStringsCache.set(t, a), a;
        }, e.clearTokenCacheIfNecessary = function() {
            this.tokenizedStringsCache.size > 30 && this.tokenizedStringsCache.delete(this.tokenizedStringsCache.keys().next().value);
        }, e.isEmojiStartIndex = function(t, i) {
            var r = t.slice(i, i + 5);
            return e.startsWithEmojiRegex.test(r) || e.secondCharIsSurrogate.test(r);
        }, e.isUnicodeEmojiStartIndex = function(t, i) {
            var r = t.slice(i, i + 5);
            return !(e.startsWithEmojiRegex.test(r) || e.fitzRegex.test(r));
        }, e.emojiMatch = function(t) {
            return t.match(n.emoji.regex) || t.match(e.secondCharIsSurrogate);
        }, e.rangeOfFirstEmojiStartingAtIndex = function(e, t) {
            var i = e.slice(t, t + 7).match(/[\ufe00-\ufe0f\u200d\u2640]$/);
            return 0 === i.length ? t : e.indexOf(i[0]) + 1;
        }, e.ONLY_VARIATION_SELECTORS = /^[\ufe00-\ufe0f]*$/, e.ZERO_WIDTH_JOINER = /[\u200d]/, 
        e.GEOMETRIC_SHAPES = /[\u25A0-\u25CF\u25E0-\u25E1\u25E6-\u25FF]/, e.tokenizedStringsCache = new Map(), 
        e.highSurrogates = "�-�", e.lowSurrogates = String.fromCharCode(56320) + "-" + String.fromCharCode(57343), 
        e.surrogateRegex = RegExp("[" + e.lowSurrogates + e.highSurrogates + "]"), e.secondCharIsSurrogate = RegExp("^.[" + e.lowSurrogates + "]"), 
        e.startsWithEmojiRegex = RegExp("^" + n.emoji.regex.source), e.fitzpatricks = String.fromCharCode(55356) + "[" + String.fromCharCode(57088) + "-" + String.fromCharCode(57343) + "]", 
        e.fitzRegex = RegExp("" + e.fitzpatricks), e;
    }();
    t.HSTokenizer = a, window.HSTextNodeKind = r, window.HSToken = o, window.HSTokenizer = a;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageParameter = void 0;
    var r = i(9), n = i(10), o = i(7), a = i(0), s = i(4), c = function() {
        function e(e, t) {
            void 0 === t && (t = null), this.value = e, this.childBlock = t;
        }
        return e.prototype.variable = function() {
            return this.childBlock && this.childBlock.type === a.HSBlockType.Variable ? this.childBlock : null;
        }, e.prototype.computedStringValue = function(e) {
            return this.childBlock ? this.childBlock.computedStringValue(e) : r.HSVariable.parseValue(this.value, !1).toString();
        }, e.prototype.computedObjectType = function() {
            return this.childBlock ? o.HSObjectType.image : "string" == typeof this.value ? o.HSObjectType.text : this.value;
        }, e.prototype.isSet = function(e) {
            return null !== this.value || null != this.childBlockValue(e);
        }, e.prototype.computedBooleanValue = function(e) {
            var t = this.computedValue(e);
            return "0" !== t && !!t;
        }, e.prototype.computedRhythmValue = function(e) {
            var t, i = 4 * (60 / (e.tempo ? +e.tempo : 120) * 1e3);
            return null !== (t = +this.computedNumberValue(e) * i) && void 0 !== t ? t : 0;
        }, e.prototype.computedValue = function(e) {
            var t = this.childBlockValue(e);
            return null != t ? t : r.HSVariable.parseValue(this.value, !1);
        }, e.prototype.computedNumberValue = function(e) {
            return r.HSVariable.parseNumberFrom(this.computedValue(e));
        }, e.prototype.computedColorString = function(e) {
            return this.childBlock ? this.childBlock.computedColorString(e) : s.HSColor.rgbStringFromHSBString(this.computedStringValue(e));
        }, e.prototype.toString = function() {
            return n.SourceFormatter.stageParamToSrc(this.value, this.childBlock);
        }, e.prototype.childBlockValue = function(e) {
            return this.childBlock ? this.childBlock.computedValue(e) : null;
        }, e;
    }();
    t.HSStageParameter = c, window.HSStageParameter = c;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSVariablePrototype = t.OBJECT_ID_STRING_KEY = void 0;
    var r = i(2), n = i(8), o = i(0), a = i(1);
    t.OBJECT_ID_STRING_KEY = "objectIdString";
    var s = function(e) {
        function i(t) {
            return e.call(this, t) || this;
        }
        return r.__extends(i, e), i.prototype.parseJSON = function(e) {
            void 0 === e && (e = {}), this.objectID = e[t.OBJECT_ID_STRING_KEY], this.name = e.name, 
            this.type = e.type || o.HSBlockType.Object, this.initialValue = this.getInitialValue();
        }, i.prototype.getInitialValue = function() {
            return this.type !== o.HSBlockType.User ? "0" : a.HSApp.initialUserVariables[this.objectID] || "0";
        }, i.key = "HSVariablePrototype", i;
    }(n.HSManagedObject);
    t.HSVariablePrototype = s, window.HSVariablePrototype = s;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSEventParameterBlock = t.EVENT_PARAMETER_OBJECT_KEY = t.EVENT_PARAMETER_TYPE_KEY = t.EVENT_PARAMETER_OBJECT_ID_KEY = void 0;
    var r = i(2), n = i(6), o = i(11);
    t.EVENT_PARAMETER_OBJECT_ID_KEY = "id", t.EVENT_PARAMETER_TYPE_KEY = "blockType", 
    t.EVENT_PARAMETER_OBJECT_KEY = "objectID";
    var a = function(e) {
        function i() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return r.__extends(i, e), i.prototype.parseJSON = function(i) {
            void 0 === i && (i = {}), e.prototype.parseJSON.call(this, i), this.objectID = i[t.EVENT_PARAMETER_OBJECT_ID_KEY], 
            this.type = i[t.EVENT_PARAMETER_TYPE_KEY];
            var r = this.context.findWithObjectID(n.HSObject.key, i[t.EVENT_PARAMETER_OBJECT_KEY]);
            this.object = r;
        }, i.key = "HSEventParameterBlock", i;
    }(o.HSParameterBlock);
    t.HSEventParameterBlock = a, window.HSEventParameterBlock = a;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSImageTextureFactory = void 0;
    var r = i(1), n = function() {
        function e() {
            this.prefetchedImageCache = new Map();
        }
        return e.prototype.build = function(e, t) {
            var i, r = null === (i = this.prefetchedImageCache.get(t.imageName)) || void 0 === i ? void 0 : i.promise;
            return r ? r.then(function(e) {
                return PIXI.Texture.from(e);
            }) : Promise.reject(null);
        }, e.prototype.buildAll = function(e, t) {
            return this.build(e, t).then(function(e) {
                return [ e ];
            });
        }, e.prototype.prefetchImage = function(e) {
            var t = this;
            if (e) {
                var i = e.fileName, n = this.prefetchedImageCache.get(i);
                if (null == e.updatedDate || (null == n ? void 0 : n.updatedDate) !== e.updatedDate) {
                    var o = this.getImageUrl(e).then(r.getImageFromUri).then(function(i) {
                        return t.resizeImage(i, e.width, e.height);
                    });
                    this.prefetchedImageCache.set(i, {
                        updatedDate: e.updatedDate,
                        promise: o
                    });
                }
            }
        }, e.prototype.resizeImage = function(e, t, i) {
            return e.width = t, e.height = i, Promise.resolve(e);
        }, e.prototype.getImageUrl = function(e) {
            var t = e.fileName, i = e.updatedDate;
            return (Object.prototype.hasOwnProperty.call(window, "BASE_IMAGE_URL") ? (
              !/^\w{0,8}(?::\/)?\//.test(t) ? this.getImageUrlFromBaseUrl : Promise.resolve /* AE_MOD custom custom */
            ) : this.getImageUrlFromApp)(t, i);
        }, e.prototype.getImageUrlFromBaseUrl = function(e, t) {
            var i = BASE_IMAGE_URL + e, r = -1 !== i.indexOf("?") ? "&" : "?";
            return Promise.resolve(i + r + "cache=" + t);
        }, e.prototype.getImageUrlFromApp = function(e, t) {
            return r.requestTextureFromApp({
                fileName: e
            }, t).then(function(e) {
                return e.dataURI;
            });
        }, e.instance = new e(), e;
    }();
    t.HSImageTextureFactory = n, window.HSImageTextureFactory = n;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSVisualContext = void 0;
    var r = i(51), n = i(20), o = function() {
        function e(e, t) {
            this.backgroundCanvas = e, this.drawingContext = new n.HopscotchDrawingContext(e, t, this), 
            this.collisionContext = new r.HSCollisionContext();
        }
        return e.collisionResolution = 64, e;
    }();
    t.HSVisualContext = o, window.HSVisualContext = o;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSSoundManager = t.AudioContext = void 0;
    var r = i(62);
    t.AudioContext = window.AudioContext || window.webkitAudioContext;
    var n = function() {
        function e(t) {
            var i = this;
            this.sounds = {}, this.context = e.audioContext, this.isMuted = !1, t.forEach(function(e) {
                var t = e.split("."), n = t[0], o = t[1] || "mp3";
                i.sounds[n] = new r.HSSound(n, i.context, o);
            }), e.hasUnlockListener || (e.hasUnlockListener = !0, this.unlockListener = function() {
                var e = i.context.createBufferSource();
                e.buffer = i.context.createBuffer(1, 1, 22050), e.connect(i.context.destination), 
                e.start(0), window.removeEventListener("touchstart", i.unlockListener), window.removeEventListener("touchend", i.unlockListener), 
                window.removeEventListener("mousedown", i.unlockListener);
            }, window.addEventListener("touchstart", this.unlockListener), window.addEventListener("touchend", this.unlockListener), 
            window.addEventListener("mousedown", this.unlockListener));
        }
        return e.prototype.play = function(e) {
            this.sounds[e] && !this.isMuted && this.sounds[e].play();
        }, e.prototype.playNote = function(e, t) {
            var i = t + "/" + e;
            this.sounds[i] && !this.isMuted && this.sounds[i].play();
        }, e.prototype.mute = function() {
            this.isMuted || Object.values(this.sounds).forEach(function(e) {
                return e.stop();
            }), this.isMuted = !0;
        }, e.prototype.unmute = function() {
            this.isMuted = !1;
        }, e.audioContext = new t.AudioContext(), e.hasUnlockListener = !1, e;
    }();
    t.HSSoundManager = n, window.HSSoundManager = n;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSProject = t.SCENES_KEY = t.SCRIPTS_KEY = t.EVENT_PARAMETERS_KEY = t.TRAITS_KEY = t.VARIABLES_KEY = t.RULES_KEY = t.OBJECTS_KEY = void 0;
    var r = i(2), n = i(8), o = i(3), a = i(6), s = i(40), c = i(12), u = i(22), l = i(26), h = i(27), p = i(11), d = i(65);
    t.OBJECTS_KEY = "objects", t.RULES_KEY = "rules", t.VARIABLES_KEY = "variables", 
    t.TRAITS_KEY = "traits", t.EVENT_PARAMETERS_KEY = "eventParameters", t.SCRIPTS_KEY = "abilities", 
    t.SCENES_KEY = "scenes";
    var S = function(e) {
        function i(i, r) {
            void 0 === r && (r = {});
            var n = e.call(this, i) || this;
            return n.context.parseJSON(r), n.parseObjectDictionaries(r[t.OBJECTS_KEY], r[t.SCENES_KEY]), 
            n.parseVariableDictionaries(r[t.VARIABLES_KEY]), n.parseTraitsDictionaries(r[t.TRAITS_KEY]), 
            n.parseEventParameters(r[t.EVENT_PARAMETERS_KEY]), n.parseScriptDictionaries(r[t.SCRIPTS_KEY]), 
            n.parseRulesDictionaries(r[t.RULES_KEY]), n.importCustomRules(r.customRules), n.context.version >= o.HSProjectVersion.CUSTOM_WHENS && n.addRulesToObjects(r[t.OBJECTS_KEY]), 
            n.parseScenesDictionaries(r[t.SCENES_KEY]), n;
        }
        return r.__extends(i, e), i.prototype.parseEventParameters = function(e) {
            var t = this;
            void 0 === e && (e = []), e && e.forEach(function(e, i, r) {
                new h.HSEventParameterBlock(t.context).parseJSON(e);
            });
        }, i.prototype.parseVariableDictionaries = function(e) {
            if (void 0 === e && (e = []), e) {
                var t = this.context;
                e.forEach(function(e, i, r) {
                    new l.HSVariablePrototype(t).parseJSON(e);
                });
            }
        }, i.prototype.parseTraitsDictionaries = function(e) {
            if (void 0 === e && (e = []), e) {
                var t = this.context;
                e.forEach(function(e, i, r) {
                    new p.HSParameterBlock(t).parseJSON(e);
                });
            }
        }, i.prototype.parseObjectDictionaries = function(e, i) {
            void 0 === e && (e = []), void 0 === i && (i = []);
            var r = [];
            i.length && (r = i.map(function(e) {
                return null === e[t.OBJECTS_KEY] ? [] : e[t.OBJECTS_KEY];
            }).reduce(function(e, t) {
                return e.concat(t);
            }));
            var n = this.context;
            e.forEach(function(e, t, o) {
                i.length > 0 && !r.includes(e.objectID) || new a.HSObject(n).parseJSON(e);
            });
        }, i.prototype.addRulesToObjects = function(e) {
            var t, i;
            void 0 === e && (e = []);
            var n = this.context, o = function(e) {
                var t = n.findWithObjectID(a.HSObject.key, e.objectID);
                if (!e.rules || !t || !t.rules) return "continue";
                var i = t.canChangeCostume(), r = !1, o = e.rules.map(function(e) {
                    var t = n.findWithObjectID(c.HSRule.key, e);
                    return !r && i && t && t.script.containsChangeCostume() && (r = !0), t || n.findWithObjectID(d.HSCustomRule.key, e);
                });
                t.rules = o.filter(function(e) {
                    return !!e;
                }), t.willChangeCostume = r;
            };
            try {
                for (var s = r.__values(e), u = s.next(); !u.done; u = s.next()) {
                    o(u.value);
                }
            } catch (e) {
                t = {
                    error: e
                };
            } finally {
                try {
                    u && !u.done && (i = s.return) && i.call(s);
                } finally {
                    if (t) throw t.error;
                }
            }
        }, i.prototype.importCustomRules = function(e) {
            void 0 === e && (e = []);
            var t = this.context;
            e instanceof Array || (e = []), e.forEach(function(e, i, r) {
                new d.HSCustomRule(t).parseJSON(e);
            }), e.forEach(function(e, i, r) {
                t.findWithObjectID(d.HSCustomRule.key, e.id).addRulesFromJSON(e);
            });
        }, i.prototype.parseScriptDictionaries = function(e) {
            void 0 === e && (e = []);
            for (var t = [], i = 0; i < e.length; i++) {
                var r = new u.HSScript(this.context);
                t.push(r), r.addObjectIDFromJSON(e[i]);
            }
            for (i = 0; i < t.length; i++) {
                (r = t[i]).parseJSON(e[i]);
            }
        }, i.prototype.parseRulesDictionaries = function(e) {
            void 0 === e && (e = []);
            var t = this.context;
            e.forEach(function(e, i, r) {
                new c.HSRule(t).parseJSON(e);
            });
        }, i.prototype.parseScenesDictionaries = function(e) {
            if (void 0 === e && (e = []), e.length > 0) {
                var t = this.context;
                this.scenes = e.map(function(e) {
                    var i = new s.HSScene(t);
                    return i.parseJSON(e), i;
                });
            } else {
                var i = new s.HSScene(this.context);
                i.parseJSON(), this.scenes = [ i ];
            }
        }, i;
    }(n.HSManagedObject);
    t.HSProject = S, window.HSProject = S, window.OBJECTS_KEY = t.OBJECTS_KEY, window.RULES_KEY = t.RULES_KEY, 
    window.VARIABLES_KEY = t.VARIABLES_KEY, window.TRAITS_KEY = t.TRAITS_KEY, window.EVENT_PARAMETERS_KEY = t.EVENT_PARAMETERS_KEY, 
    window.SCRIPTS_KEY = t.SCRIPTS_KEY, window.SCENES_KEY = t.SCENES_KEY;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageControl = void 0;
    var r = i(33), n = i(10), o = i(34), a = i(25), s = i(0), c = function() {
        function e(e, t, i) {
            void 0 === i && (i = []), this.type = e, this.scripts = t, this.parameters = i, 
            this.isImmediate = !1;
        }
        return e.prototype.integerValue = function(e) {
            switch (this.type) {
              case s.HSBlockType.Repeat:
                return Math.round(this.firstParameterValue(e));

              case s.HSBlockType.RepeatForever:
                return 1 / 0;

              default:
                return 0;
            }
        }, e.prototype.script = function(e) {
            switch (this.type) {
              case s.HSBlockType.CheckOnceIf:
              case s.HSBlockType.CheckIfElse:
                return this.parameters[0].computedBooleanValue(e) ? this.trueScript() : this.falseScript();

              default:
                return this.trueScript();
            }
        }, e.prototype.trueScript = function() {
            return this.scripts[0].stageScript();
        }, e.prototype.falseScript = function() {
            return this.scripts[1].stageScript();
        }, e.prototype.toString = function() {
            return n.SourceFormatter.stageControlToSrc(this);
        }, e.prototype.firstParameterValue = function(e) {
            return this.parameters.length > 0 ? this.parameters[0].computedNumberValue(e) : 0;
        }, e.prototype.executableForStepSize = function(e, t) {
            switch (this.type) {
              case s.HSBlockType.Repeat:
              case s.HSBlockType.RepeatForever:
                return this.executableForRepeat(e, t);

              case s.HSBlockType.LeaveATrail:
                return this.executableForLeaveATrail(e, t);

              case s.HSBlockType.CheckOnceIf:
              case s.HSBlockType.CheckIfElse:
              case s.HSBlockType.Ability:
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
            var i = this.script(t).executableForStepSize(e, t), n = [ new o.HSStageMethod(s.HSBlockType.PenDown) ];
            this.parameters[0] && n.push(new o.HSStageMethod(s.HSBlockType.StrokeColor, [ this.parameters[0] ])), 
            this.parameters[1] && n.push(new o.HSStageMethod(s.HSBlockType.StrokeWidth, [ this.parameters[1] ]));
            var a = new o.HSStageMethod(s.HSBlockType.PenUp);
            return new r.HSExecutable(n.concat(i.blocksToExecuteNow), i.blocksToExecuteLater.concat(a));
        }, e.prototype.executableWithRepeatOnTheEnd = function(t, i) {
            var r = this.script(i).executableForStepSize(t, i), n = this.integerValue(i) - 1, o = new a.HSStageParameter("" + n), s = new e(this.type, this.scripts, [ o ]), c = r.blocksToExecuteLater;
            return c.push(s), r.newWithNewBlocksToExecuteLater(c);
        }, e;
    }();
    t.HSStageControl = c, window.HSStageControl = c;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSExecutable = void 0;
    var r = i(2), n = i(10), o = i(15), a = i(30), s = i(63), c = i(0), u = i(1), l = function() {
        function e(e, t) {
            this.blocksToExecuteNow = e, this.blocksToExecuteLater = t, this.isImmediate = !1;
        }
        return e.prototype.newWithNewBlocksToExecuteLater = function(t) {
            return new e(this.blocksToExecuteNow, t);
        }, e.prototype.execute = function(e) {
            var t = this;
            this.blocksToExecuteNow.forEach(function(i) {
                return t.executeBlock(i, e);
            });
        }, e.prototype.toString = function() {
            return n.SourceFormatter.executableToSrc(this);
        }, e.prototype.executeBlock = function(e, t) {
            var i, n, l = e.parameters;
            switch (e.type) {
              case c.HSBlockType.PlaySoundSeconds:
              case c.HSBlockType.PlaySound:
                function notePath (val) {
                  //AE_MOD find path of note
                  var isCustom = (!/^((low-|high)?[a-zA-Z](sharp|flat)?|clickPlayable|alert|car|chaChing|check|clang|crash|dash|doorbell|drip|fail|footsteps|laser|pop|schoolBell|spring|vibrate|trophy|aliens|bubbles|crickets|meow|rain|roar|tweet|wind|woof|ahhh|cheer|eating|heartbeat|laugh|news|talking|bass|chord|clap|gong|snare)$/.test(val));
                  var ins = (/^(low-|high)?[a-zA-Z](sharp|flat)?$/.test(val)) ? ({"-1": "", "0": "new/", "1": "guitar/", "2": "8-bit/"})[(l[2])?l[2].computedStringValue(t):'0'] : ((isCustom)?"custom/":"");
                  return (!isCustom && !!getPref && getPref("old_sounds")) ? "" : ins;
                }
                i = a.HSSoundManager.sharedInstance // , n = l[0].computedStringValue(t), i.play(n);
                var n = notePath(l[0].computedStringValue(t)) + l[0].computedStringValue(t)
                i.play(n)
                break;

              case c.HSBlockType.MakeAClone:
                var h = 1;
                l[0] && (h = l[0].computedNumberValue(t)), t.clone(h);
                break;

              case c.HSBlockType.Destroy:
                t.addToDestroyQueue();
                break;

              case c.HSBlockType.ChangeX:
              case c.HSBlockType.ChangeY:
              case c.HSBlockType.Move:
              case c.HSBlockType.Rotate:
                var p = t.x, d = t.y, S = t.headingInDegrees;
                t.executeBlock(e), t.x === p && t.y === d && t.headingInDegrees === S && this.blocksToExecuteLater.shift();
                break;

              case c.HSBlockType.ChangeScene:
                o.HSStageProject.sharedInstance.changeScene(l[0].computedStringValue(t));
                break;

              case c.HSBlockType.BroadcastMessage:
                var f = l[0].computedStringValue(t);
                f && t.queueEventMessage(f);
                break;

              case c.HSBlockType.RequestSeeds:
                !function(e, t) {
                    var i = r.__read(e, 2), n = i[0], o = i[1].variable();
                    if (!o || 1 === o.computedNumberValue(t)) return;
                    var a = o.getPublicName();
                    if (!a) return;
                    var s = Math.max(0, Math.floor(n.computedNumberValue(t)));
                    !function(e, t, i) {
                        if (!u.isIOSApp()) return void (confirm('This project is using a feature only available in the Hopscotch iOS App. Tap "OK" to download it!') && window.open("https://apps.apple.com/us/app/hopscotch-make-games/id617098629", "_self"));
                        u.HSApp.sendToApp("product:purchase", JSON.stringify({
                            variableID: e,
                            variableName: t,
                            seeds: i
                        }));
                    }(o.objectID, a, s);
                }(l, t);
                break;

              case c.HSBlockType.OpenProject:
                var g = l[0].computedStringValue(t);
                new s.HSProjectOpener(g).open();

              default:
                try {
                  t.executeBlock(e);
                } catch (E) {
                  //AE_MOD
                  //Errors do not catch these blocks: Play Sound, CLone, Destroy, Change X, Change Y, Move, Rotate, Change Scene, Broadcast Message
                  console.groupCollapsed("%cBlock Execution Error","color:white;font-weight:900;display:block;background-color:red;border:2px solid salmon;padding:2px 4px;");
                  console.log("Block Code:", e);
                  console.log("Active Object UUID: " + t.objectID);
                  t.stageRules.forEach(r=>{
                    if (r.isActive) console.log("Active Rule Type: " + r.eventBlock.parameterBlock.type);
                  });
                  console.groupEnd();
                  throw E;
                }
            }
        }, e;
    }();
    t.HSExecutable = l, window.HSExecutable = l;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageMethod = void 0;
    var r = i(30), n = i(33), o = i(10), a = i(25), s = i(0), c = i(5), u = i(1), l = function() {
        function e(e, t) {
            void 0 === t && (t = []), this.type = e, this.parameters = t, this.id = u.hs_random_id(), 
            this.isImmediate = [ s.HSBlockType.PenDown, s.HSBlockType.StrokeColor, s.HSBlockType.StrokeWidth, s.HSBlockType.PenUp, s.HSBlockType.SetVariable, s.HSBlockType.ChangeVariable ].includes(e);
        }
        return e.prototype.isOverStepSize = function(e, t) {
            return this.usesStepSize() && Math.abs(this.firstIntegerValue(t)) > e;
        }, e.prototype.isWaitBlock = function() {
            return this.type === s.HSBlockType.Wait || this.type === s.HSBlockType.WaitSeconds;
        }, e.prototype.isFinishedTimestampBlock = function(e) {
            return this.type === s.HSBlockType.WaitTilTimestamp && this.firstIntegerValue(e) <= Date.now();
        }, e.prototype.isUnfinishedTimestampBlock = function(e) {
            return this.type === s.HSBlockType.WaitTilTimestamp && this.firstIntegerValue(e) > Date.now();
        }, e.prototype.usesStepSize = function() {
            return -1 !== [ s.HSBlockType.ChangeX, s.HSBlockType.ChangeY, s.HSBlockType.Move, s.HSBlockType.Rotate ].indexOf(this.type);
        }, e.prototype.firstIntegerValue = function(e) {
            var t;
            return (null === (t = this.parameters[0]) || void 0 === t ? void 0 : t.computedNumberValue(e)) || 0;
        }, e.prototype.calculateValueMinusOneStep = function(e, t) {
            return this.isOverStepSize(e, t) ? this.signOfFirstValue(t) * (Math.abs(this.firstIntegerValue(t)) - Math.abs(e)) : 0;
        }, e.prototype.executableForStepSize = function(e, t, i) {
            return this.isWaitBlock() ? this.waitTilMillisecondsForWait(t).executableForStepSize(e, t, i) : this.type == s.HSBlockType.PlayNote ? this.playNoteAndReturnWaitTime(e, t, i) : new n.HSExecutable(this.blocksToExecuteNow(e, t), this.blocksToExecuteLater(e, t));
        }, e.prototype.playNoteAndReturnWaitTime = function(t, i, n) {
            var o = r.HSSoundManager.sharedInstance, c = this.parameters[0].computedStringValue(i);
            return o.playNote(c, i.instrument), new e(s.HSBlockType.Wait, [ new a.HSStageParameter(this.parameters[1].computedRhythmValue(i) + "") ]).waitTilMillisecondsForWait(i).executableForStepSize(t, i, n);
        }, e.prototype.waitTilMillisecondsForWait = function(t) {
            var i = this.getWaitMilliseconds(t), r = Date.now() + i;
            return new e(s.HSBlockType.WaitTilTimestamp, [ new a.HSStageParameter(r + "") ]);
        }, e.prototype.getWaitMilliseconds = function(e) {
            if (!this.isWaitBlock()) return 0;
            var t = this.firstIntegerValue(e);
            return this.type === s.HSBlockType.WaitSeconds ? 1e3 * t : t;
        }, e.prototype.blocksToExecuteNow = function(t, i) {
            if (this.type === s.HSBlockType.WaitTilTimestamp) return [];
            if (!this.isOverStepSize(t, i)) return [ this ];
            var r = new a.HSStageParameter("" + t * this.signOfFirstValue(i));
            return [ new e(this.type, [ r ]) ];
        }, e.prototype.toString = function() {
            return o.SourceFormatter.stageMethodToSrc(this);
        }, e.prototype.signOfFirstValue = function(e) {
            var t = this.firstIntegerValue(e);
            return t / Math.abs(t);
        }, e.prototype.isPromptDone = function() {
            var e, t = (null === (e = this.parameters[0]) || void 0 === e ? void 0 : e.value) || "-1", i = c.HSStageScene.promptsToExecute.find(function(e) {
                return e.id === t;
            });
            return null == i ? void 0 : i.isDone;
        }, e.prototype.blocksToExecuteLater = function(t, i) {
            switch (this.type) {
              case s.HSBlockType.WaitTilTimestamp:
                return this.firstIntegerValue(i) > Date.now() ? [ this ] : [];

              case s.HSBlockType.ChangeX:
              case s.HSBlockType.Ability:
              case s.HSBlockType.ChangeY:
              case s.HSBlockType.AnyObject:
              case s.HSBlockType.Move:
              case s.HSBlockType.Rotate:
                var r = this.calculateValueMinusOneStep(t, i), n = new a.HSStageParameter("" + r);
                return [ new e(this.type, [ n ]) ];

              case s.HSBlockType.WaitUntilInputIsDone:
                return this.isPromptDone() ? [] : [ this ];

              case s.HSBlockType.SaveInput:
              case s.HSBlockType.SetTextToInput:
                return [ new e(s.HSBlockType.WaitUntilInputIsDone, [ new a.HSStageParameter(this.id) ]) ];

              case s.HSBlockType.PlaySound:
                return [ new e(s.HSBlockType.Wait, [ new a.HSStageParameter(this.parameters[1].computedValue(i) + "") ]) ];

              case s.HSBlockType.PlayNote:
                return [ new e(s.HSBlockType.Wait, [ new a.HSStageParameter(this.parameters[1].computedRhythmValue(i) + "") ]) ];

              case s.HSBlockType.PlaySoundSeconds:
                return [ new e(s.HSBlockType.WaitSeconds, [ new a.HSStageParameter(this.parameters[1].computedValue(i) + "") ]) ];

              default:
                return [];
            }
        }, e;
    }();
    t.HSStageMethod = l, window.HSStageMethod = l;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSControlBlock = t.CONTROL_SCRIPT_KEY = void 0;
    var r = i(2), n = i(32), o = i(12), a = i(14), s = i(22);
    t.CONTROL_SCRIPT_KEY = "controlScript";
    var c = function(e) {
        function i() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.scripts = [], t.isControl = !0, t;
        }
        return r.__extends(i, e), i.prototype.stageBlock = function() {
            var e = this.scripts[0] || new s.HSScript(this.context);
            return new n.HSStageControl(this.type, [ e ], this.stageParameters());
        }, i.prototype.parseJSON = function(i) {
            void 0 === i && (i = {}), e.prototype.parseJSON.call(this, i);
            var r = (i[t.CONTROL_SCRIPT_KEY] || [])[o.SCRIPT_ID_KEY] || "", n = this.context.findWithObjectID("HSScript", r);
            this.scripts.push(n || new s.HSScript(this.context));
        }, i.key = "HSControlBlock", i;
    }(a.HSBlock);
    t.HSControlBlock = c, window.HSControlBlock = c;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSPathDrawer = t.HSLinePoint = void 0;
    var r = i(1), n = function() {
        function e(t, i, n) {
            this.point = t, this.radius = i, this.colorReference = n, this.point.x = r.clamp(t.x, -e.MAX_POINT_VALUE, e.MAX_POINT_VALUE), 
            this.point.y = r.clamp(t.y, -e.MAX_POINT_VALUE, e.MAX_POINT_VALUE);
            var o = Math.ceil(2 * i) / 2;
            this.radius = o < 0 ? .5 : r.clamp(o, 0, e.MAX_POINT_VALUE);
        }
        return e.prototype.clone = function() {
            return new e(this.point, this.radius, this.colorReference);
        }, e.MAX_POINT_VALUE = 1e4, e;
    }();
    t.HSLinePoint = n;
    var o = function() {
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
    t.HSPathDrawer = o, window.HSLinePoint = n, window.HSPathDrawer = o;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSView = void 0;
    var r = i(24), n = i(1), o = i(47), a = i(28), s = i(48), c = i(7), u = i(4), l = function() {
        function e(e) {
            this.props = e, this.sprite = new PIXI.Sprite(), this.canvas = null, this.textureExists = !1, 
            this.onTextureBuild = null, this.buildTexture(), this.update(this.props);
        }
        return e.prototype.factory = function() {
            return this.shouldDrawText() ? o.HSTextTextureFactory.instance : this.canDrawImage() ? a.HSImageTextureFactory.instance : s.HSCharacterTextureFactory.instance;
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
            return this.hasEmoji = !!this.shouldDrawText() && n.hasEmoji(this.props.text), this.factory().build(this.canvas, this.props).then(function(i) {
                return i === t.sprite.texture ? i : (i.baseTexture === t.sprite.texture.baseTexture && t.sprite.texture.destroy(), 
                e.shouldDrawText() && i.update(), t.sprite.texture = i, t.sprite.anchor.x = .5, 
                t.sprite.anchor.y = .5, t.originalWidth = t.sprite.texture.baseTexture.width, t.originalHeight = t.sprite.texture.baseTexture.height, 
                t.textureExists = !0, t.onBuildCallback(), i);
            }).catch(function(e) {
                n.log("error in building texture", e, t.props);
            });
        }, e.prototype.onBuildCallback = function() {
            var e = this.onTextureBuild;
            this.onTextureBuild = null, e && e();
        }, e.prototype.createCanvasIfNeeded = function() {
            this.canvas || this.shouldDrawText() && (this.canvas = document.createElement("canvas"));
        }, e.prototype.buildAllTextures = function() {
            return this.factory().buildAll(this.canvas, this.props);
        }, e.prototype.getOriginalScale = function(e, t, i) {
            return isNaN(e) ? i === c.HSObjectType.text ? 1 / o.HSTextTextureFactory.scaleUp() : 1 : e / t;
        }, e.prototype.getSpriteScale = function(e, t, i, r, n, o) {
            void 0 === o && (o = !1);
            var a = this.getOriginalScale(t, e, n), s = i * r * .01 * this.scaleForObjectType(n), c = Math.abs(s), u = s / c, l = Math.min(c, 1024) * u * a;
            return Math.round(e * l) / e * (o ? -1 : 1);
        }, e.prototype.update = function(e) {
            var t = this.props;
            if (this.props = e, this.needsNewTexture(t) && this.buildTexture(), this.textureExists) {
                var i = this.sprite.texture.baseTexture.width, r = this.sprite.texture.baseTexture.height;
                this.sprite.scale.x = this.getSpriteScale(i, e.originalWidth, e.baseObjectScale, e.sizePercentWidth, this.props.type, e.isFlipped), 
                this.sprite.scale.y = this.getSpriteScale(r, e.originalHeight, e.baseObjectScale, e.sizePercentHeight, this.props.type, !1), 
                this.sprite.position.x = Math.round(e.x), this.sprite.position.y = Math.round(e.stageHeight - e.y), 
                this.sprite.alpha = e.opacity, this.sprite.rotation = -1 * e.headingInRadians;
                var n = e.color;
                this.hasEmoji && (n = u.HSColor.rgbWhiteColor), this.sprite.tint = u.HSColor.hexToTint(n);
            }
        }, e.prototype.needsNewTexture = function(e) {
            return e.text !== this.props.text || this.quantizedScaleY(e) !== this.quantizedScaleY(this.props) || this.quantizedScaleX(e) !== this.quantizedScaleX(this.props) || e.animationNumber !== this.props.animationNumber || e.type !== this.props.type || e.imageName !== this.props.imageName || e.color !== this.props.color && !n.onlyEmoji(e.text) && n.hasEmoji(e.text);
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
    t.HSView = l, window.HSView = l;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CollisionManager = void 0;
    var r = i(7), n = i(52), o = i(53), a = i(39), s = function() {
        function e() {
            this.cache = {}, this.tempRect = new PIXI.Rectangle(), this.currentTime = Date.now(), 
            this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), 
            this.ctx.imageSmoothingEnabled = !1, this.debug = new a.CollisionManagerDebug();
        }
        return e.prototype.tick = function(e) {
            this.currentTime = Date.now(), this.cleanCache(), this.debug.draw(e, this.getCollisionObjectFrom.bind(this));
        }, e.prototype.collisionId = function(e) {
            var t;
            return e.type === r.HSObjectType.text ? "text_" + e.text : null === (t = e.view.sprite.texture.baseTexture.imageUrl) || void 0 === t ? void 0 : t.replace(/hsScale=\".\"/g, "");
        }, e.prototype.collisionInfo = function(e) {
            var t = this.collisionId(e);
            if (!t) return null;
            if (this.cache[t]) return this.cache[t];
            var i = e.view.sprite, r = i.texture.baseTexture, n = r.source, o = r.width, a = r.height;
            if (!n || !o || !a) return null;
            var s = i.texture.baseTexture.resolution;
            this.canvas.width = o, this.canvas.height = a, this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), 
            this.ctx.drawImage(n, 0, 0, o * s, a * s, 0, 0, o, a);
            var c = this.createCollisionInfo();
            return c ? (this.cache[t] = c, c) : null;
        }, e.prototype.createCollisionInfo = function() {
            for (var t = this.canvas.width, i = this.canvas.height, r = this.ctx.getImageData(0, 0, t, i).data, o = Number.MAX_SAFE_INTEGER, a = Number.MAX_SAFE_INTEGER, s = Number.MIN_SAFE_INTEGER, c = Number.MIN_SAFE_INTEGER, u = e.PIXEL_OFFSET, l = new Uint8ClampedArray(t * i / u | 0), h = 3; h < r.length; h += 4 * u) {
                var p = h / 4 | 0;
                if (0 !== r[h]) {
                    l[p / u | 0] = 255;
                    var d = p % t, S = p / t | 0;
                    d < o && (o = d), d > s && (s = d), S < a && (a = S), S > c && (c = S);
                }
            }
            var f = new n.CollisionInfo(l, 0 | t, 0 | i, 0 | o, 0 | a, 0 | s, 0 | c);
            return f.isEmpty() ? null : f;
        }, e.prototype.cleanCache = function() {
            for (var e in this.cache) this.cache[e].readyToDrop(this.currentTime) && delete this.cache[e];
        }, e.prototype.createCollisionObject = function(e) {
            var t = this.collisionInfo(e);
            if (t) {
                t.updateDropTime(this.currentTime);
                var i = e.view.sprite, r = new o.CollisionObject(i, t);
                return e.collisionObject = r, r;
            }
        }, e.prototype.areSpritesLoaded = function(e, t) {
            return e.view.sprite.texture.baseTexture.hasLoaded && t.view.sprite.texture.baseTexture.hasLoaded;
        }, e.prototype.getCollisionObjectFrom = function(e) {
            return e.collisionObject && this.cache[this.collisionId(e)] ? (e.collisionObject.info.updateDropTime(this.currentTime), 
            e.collisionObject) : this.createCollisionObject(e);
        }, e.prototype.existsCollisionBetweenStageObjects = function(e, t) {
            if (!this.areSpritesLoaded(e, t)) return !1;
            var i = this.getCollisionObjectFrom(e), r = this.getCollisionObjectFrom(t);
            return !(!i || !r) && this.existsCollisionBetween(i, r);
        }, e.prototype.existsCollisionBetween = function(e, t) {
            return e !== t && (!!function(e, t) {
                return c(e.sprite.getBounds(), t.sprite.getBounds());
            }(e, t) && (!!function(e, t) {
                return c(e.getMaskBounds(), t.getMaskBounds());
            }(e, t) && this.existsMaskCollision(e, t)));
        }, e.prototype.existsMaskCollision = function(e, t) {
            var i, r, n, o, s, c, u, l = e.getMaskBounds(), h = t.getMaskBounds(), p = (i = l, 
            r = h, n = this.tempRect, o = Math.max(i.x, r.x), s = Math.max(i.y, r.y), c = Math.min(i.x + i.width, r.x + r.width), 
            u = Math.min(i.y + i.height, r.y + r.height), n.x = o, n.y = s, n.width = c - o, 
            n.height = u - s, n), d = 0 | p.x, S = 0 | p.y, f = d + p.width | 0, g = S + p.height | 0;
            return a.CollisionManagerDebug.ENABLED ? this.debug.checkCollision(e, t, d, S, f, g) : !!this.intersectionCoverMoreThan(.5, p, l, h) || this.checkCollision(e, t, d, S, f, g);
        }, e.prototype.intersectionCoverMoreThan = function(e, t, i, r) {
            var n = t.width * t.height, o = i.width * i.height * e, a = r.width * r.height * e;
            return o > a ? n > o : n > a;
        }, e.prototype.checkCollision = function(e, t, i, r, n, o) {
            for (var a = i; a < n; a++) for (var s = r; s < o; s++) if (e.hit(a, s) && t.hit(a, s)) return !0;
            return !1;
        }, e.PIXEL_OFFSET = 2, e;
    }();
    function c(e, t) {
        return !(e.x >= t.x + t.width || t.x >= e.x + e.width) && !(e.y >= t.y + t.height || t.y >= e.y + e.height);
    }
    t.CollisionManager = s, window.CollisionManager = s;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CollisionManagerDebug = void 0;
    var r = function() {
        function e() {
            if (e.ENABLED) {
                this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d");
                var t = document.getElementsByName("foreground")[0];
                this.canvas.width = t.width / window.devicePixelRatio, this.canvas.height = t.height / window.devicePixelRatio, 
                this.canvas.style.position = "absolute", this.canvas.style.top = "0px", this.canvas.style.left = "0px", 
                this.canvas.style.pointerEvents = "none", this.canvas.style.width = "100%", this.canvas.style.height = "100%", 
                document.body.getElementsByTagName("hopscotch-player")[0].append(this.canvas);
            }
        }
        return e.prototype.draw = function(t, i) {
            var r = this;
            e.ENABLED && (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), t.forEach(function(e) {
                if (e.view.sprite.texture.baseTexture.hasLoaded) {
                    var t = i(e);
                    t && r.drawCollisionObject(t);
                }
            }));
        }, e.prototype.drawCollisionObject = function(t) {
            var i, r, o;
            e.ENABLED && (i = t, r = this.ctx, n((o = i.sprite.getBounds()).x, o.y, o.width, o.height, "#ffff00", r), 
            function(e, t) {
                var i = e.getMaskBounds();
                n(i.x, i.y, i.width, i.height, "#ff0000", t);
            }(t, this.ctx), function(e, t) {
                t.fillStyle = "#0000ff", t.beginPath();
                for (var i = e.sprite.getBounds(), r = i.left; r < i.right; r++) for (var n = i.top; n < i.bottom; n++) {
                    e.hit(r, n) && t.rect(r, n, 1, 1);
                }
                t.fill(), t.closePath();
            }(t, this.ctx));
        }, e.prototype.checkCollision = function(t, i, r, o, a, s) {
            return !!e.ENABLED && (n(r, o, a - r, s - o, "#0000ff", this.ctx), function(e, t, i, r, n, o, a) {
                var s = !1;
                e.fillStyle = "#00ff00", e.beginPath();
                for (var c = r; c < o; c++) for (var u = n; u < a; u++) {
                    t.hit(c, u) && i.hit(c, u) && (s = !0, e.rect(c, u, 1, 1));
                }
                return e.fill(), e.closePath(), s;
            }(this.ctx, t, i, r, o, a, s));
        }, e.ENABLED = !1, e;
    }();
    function n(e, t, i, r, n, o) {
        o.beginPath(), o.globalAlpha = .5, o.lineWidth = 2, o.strokeStyle = n, o.rect(e, t, i, r), 
        o.stroke(), o.globalAlpha = 1, o.closePath();
    }
    t.CollisionManagerDebug = r;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSScene = void 0;
    var r = i(2), n = i(8), o = i(5), a = i(6), s = i(31), c = function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.objects = [], t;
        }
        return r.__extends(t, e), t.prototype.parseJSON = function(e) {
            var t = this;
            void 0 === e && (e = {}), e[s.OBJECTS_KEY] && e[s.OBJECTS_KEY].length > 0 ? this.objects = e[s.OBJECTS_KEY].map(function(e) {
                return t.context.findWithObjectID(a.HSObject.key, e);
            }) : e[s.OBJECTS_KEY] && 0 === e[s.OBJECTS_KEY].length ? this.objects = [] : this.objects = this.context.findAllForClassName(a.HSObject.key), 
            this.name = e.name;
        }, t.prototype.stageScene = function() {
            return new o.HSStageScene(this);
        }, t.key = "HSScene", t;
    }(n.HSManagedObject);
    t.HSScene = c, window.HSScene = c;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSConditionalControl = t.FALSE_SCRIPT_KEY = void 0;
    var r = i(2), n = i(12), o = i(32), a = i(35), s = i(22);
    t.FALSE_SCRIPT_KEY = "controlFalseScript";
    var c = function(e) {
        function i() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return r.__extends(i, e), i.prototype.parseJSON = function(i) {
            void 0 === i && (i = {}), e.prototype.parseJSON.call(this, i);
            var r = (i[t.FALSE_SCRIPT_KEY] || [])[n.SCRIPT_ID_KEY] || "", o = this.context.findWithObjectID("HSScript", r);
            this.scripts.push(o || new s.HSScript(this.context));
        }, i.prototype.stageBlock = function() {
            var e = this.trueScript(), t = this.falseScript();
            return new o.HSStageControl(this.type, [ e, t ], this.stageParameters());
        }, i.prototype.trueScript = function() {
            return this.scripts[0];
        }, i.prototype.falseScript = function() {
            return this.scripts[1];
        }, i.key = "HSConditionalControl", i;
    }(a.HSControlBlock);
    t.HSConditionalControl = c, window.HSConditionalControl = c;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSMethodBlock = void 0;
    var r = i(2), n = i(34), o = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return r.__extends(t, e), t.prototype.stageBlock = function() {
            return this._stageBlock || (this._stageBlock = new n.HSStageMethod(this.type, this.stageParameters())), 
            this._stageBlock;
        }, t.key = "HSMethodBlock", t;
    }(i(14).HSBlock);
    t.HSMethodBlock = o, window.HSMethodBlock = o;
}, function(e, t, i) {
    i(44), e.exports = i(16);
}, function(e, t, i) {
    var r;
    !function e(t, i, n) {
        function o(s, c) {
            if (!i[s]) {
                if (!t[s]) {
                    if (!c && ("function" == typeof r && r)) return r(s, !0);
                    if (a) return a(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u;
                }
                var l = i[s] = {
                    exports: {}
                };
                t[s][0].call(l.exports, function(e) {
                    var i = t[s][1][e];
                    return o(i || e);
                }, l, l.exports, e, t, i, n);
            }
            return i[s].exports;
        }
        for (var a = "function" == typeof r && r, s = 0; s < n.length; s++) o(n[s]);
        return o;
    }({
        1: [ function(e, t, i) {
            (function(t) {
                var r = e("path");
                function n(e) {
                    e = e.replace(/[\ufe00-\ufe0f]/g, "");
                    for (var t = [], r = 0; r < e.length; r++) t.push(("0000" + e.charCodeAt(r).toString(16)).slice(-4));
                    return i.basePath.replace(/\/$/, "") + "/" + t.join("-") + ".png";
                }
                i.imageDir = r.join(t, "images"), i.basePath = i.imageDir, i.regex = e("./regex"), 
                i.nativeSupport = function() {
                    if ("undefined" == typeof document) return !1;
                    var e = document.createElement("canvas");
                    if (!e.getContext) return !1;
                    var t = e.getContext("2d");
                    return t.textBaseline = "top", t.font = "32px sans-serif", t.fillText("😃", 0, 0), 
                    0 !== t.getImageData(16, 16, 1, 1).data[0];
                }();
                var o = new RegExp("^(" + i.regex.toString().slice(1, -2) + ")$");
                i.getImage = function(e) {
                    return o.test(e) ? n(e) : null;
                }, i.replace = function(e) {
                    return e = "" + e, i.nativeSupport ? e : e.replace(i.regex, function(e) {
                        return '<img class="emoji" src="' + n(e) + '" alt="' + e + '">';
                    });
                };
            }).call(this, "/");
        }, {
            "./regex": 3,
            path: 4
        } ],
        2: [ function(e, t, i) {
            window.emoji = window.emoji || e("./index.js");
        }, {
            "./index.js": 1
        } ],
        3: [ function(e, t, i) {
            t.exports = /(\uD83C[\uDDE6-\uDDFF])?(\u00a9|\u00ae|[\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2640\u2642\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303d\u3297\u3299]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|[#*0-9]\uFE0F\u20E3)\uFE0F?(\ud83c[\udffb-\udfff])?(\u200d(\u00a9|\u00ae|\u2695\uFE0F|\uD83C\uDF93|\uD83C\uDFEB|\u2696\uFE0F|\uD83C\uDF3E|\uD83C\uDF73|\uD83D\uDD27|\uD83C\uDFED|\uD83D\uDCBC|\uD83D\uDD2C|\uD83D\uDCBB|\uD83C\uDFA4|\uD83C\uDFA8|\u2708\uFE0F|\uD83D\uDE80|\uD83D\uDC8B|\uD83D\uDE92|\u2764\uFE0F|\uD83D\uDC66|\uD83D\uDC67|\uD83D\uDC68|\uD83D\uDC69|\uD83D\uDC6A|\uD83D\uDC91|\u2640|\u2642|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|[#*0-9]\uFE0F\u20E3)\uFE0F?)*/g;
        }, {} ],
        4: [ function(e, t, i) {
            (function(e) {
                function t(e, t) {
                    for (var i = 0, r = e.length - 1; r >= 0; r--) {
                        var n = e[r];
                        "." === n ? e.splice(r, 1) : ".." === n ? (e.splice(r, 1), i++) : i && (e.splice(r, 1), 
                        i--);
                    }
                    if (t) for (;i--; i) e.unshift("..");
                    return e;
                }
                var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, n = function(e) {
                    return r.exec(e).slice(1);
                };
                function o(e, t) {
                    if (e.filter) return e.filter(t);
                    for (var i = [], r = 0; r < e.length; r++) t(e[r], r, e) && i.push(e[r]);
                    return i;
                }
                i.resolve = function() {
                    for (var i = "", r = !1, n = arguments.length - 1; n >= -1 && !r; n--) {
                        var a = n >= 0 ? arguments[n] : e.cwd();
                        if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                        a && (i = a + "/" + i, r = "/" === a.charAt(0));
                    }
                    return (r ? "/" : "") + (i = t(o(i.split("/"), function(e) {
                        return !!e;
                    }), !r).join("/")) || ".";
                }, i.normalize = function(e) {
                    var r = i.isAbsolute(e), n = "/" === a(e, -1);
                    return (e = t(o(e.split("/"), function(e) {
                        return !!e;
                    }), !r).join("/")) || r || (e = "."), e && n && (e += "/"), (r ? "/" : "") + e;
                }, i.isAbsolute = function(e) {
                    return "/" === e.charAt(0);
                }, i.join = function() {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return i.normalize(o(e, function(e, t) {
                        if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                        return e;
                    }).join("/"));
                }, i.relative = function(e, t) {
                    function r(e) {
                        for (var t = 0; t < e.length && "" === e[t]; t++) ;
                        for (var i = e.length - 1; i >= 0 && "" === e[i]; i--) ;
                        return t > i ? [] : e.slice(t, i - t + 1);
                    }
                    e = i.resolve(e).substr(1), t = i.resolve(t).substr(1);
                    for (var n = r(e.split("/")), o = r(t.split("/")), a = Math.min(n.length, o.length), s = a, c = 0; c < a; c++) if (n[c] !== o[c]) {
                        s = c;
                        break;
                    }
                    var u = [];
                    for (c = s; c < n.length; c++) u.push("..");
                    return (u = u.concat(o.slice(s))).join("/");
                }, i.sep = "/", i.delimiter = ":", i.dirname = function(e) {
                    var t = n(e), i = t[0], r = t[1];
                    return i || r ? (r && (r = r.substr(0, r.length - 1)), i + r) : ".";
                }, i.basename = function(e, t) {
                    var i = n(e)[2];
                    return t && i.substr(-1 * t.length) === t && (i = i.substr(0, i.length - t.length)), 
                    i;
                }, i.extname = function(e) {
                    return n(e)[3];
                };
                var a = "b" === "ab".substr(-1) ? function(e, t, i) {
                    return e.substr(t, i);
                } : function(e, t, i) {
                    return t < 0 && (t = e.length + t), e.substr(t, i);
                };
            }).call(this, e("_process"));
        }, {
            _process: 5
        } ],
        5: [ function(e, t, i) {
            var r, n = t.exports = {}, o = [], a = !1, s = -1;
            function c() {
                a = !1, r.length ? o = r.concat(o) : s = -1, o.length && u();
            }
            function u() {
                if (!a) {
                    var e = setTimeout(c);
                    a = !0;
                    for (var t = o.length; t; ) {
                        for (r = o, o = []; ++s < t; ) r && r[s].run();
                        s = -1, t = o.length;
                    }
                    r = null, a = !1, clearTimeout(e);
                }
            }
            function l(e, t) {
                this.fun = e, this.array = t;
            }
            function h() {}
            n.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
                o.push(new l(e, t)), 1 !== o.length || a || setTimeout(u, 0);
            }, l.prototype.run = function() {
                this.fun.apply(null, this.array);
            }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", 
            n.versions = {}, n.on = h, n.addListener = h, n.once = h, n.off = h, n.removeListener = h, 
            n.removeAllListeners = h, n.emit = h, n.binding = function(e) {
                throw new Error("process.binding is not supported");
            }, n.cwd = function() {
                return "/";
            }, n.chdir = function(e) {
                throw new Error("process.chdir is not supported");
            }, n.umask = function() {
                return 0;
            };
        }, {} ]
    }, {}, [ 2 ]);
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.PromptView = t.HSStagePrompt = void 0;
    var r = i(9), n = i(0), o = i(4), a = i(1), s = function() {
        function e(t, i) {
            var r;
            this.object = t, this.isOnScreen = !1, e.enableAntiSpam(), this.type = i.type, this.id = i.id, 
            this.parameters = i.parameters, this.promptText = (null === (r = i.parameters[1]) || void 0 === r ? void 0 : r.computedStringValue(t)) || "Type here", 
            this.placeholderText = (i.parameters[2]&& i.parameters[2].computedStringValue())||"";
            this.view = new u(this.promptText, this.placeholderText);
        }
        return e.enableAntiSpam = function() {
            null === e.antiSpam && (e.antiSpam = new l());
        }, e.prototype.execute = function() {
            this.displayIfNeeded(), this.checkValue();
        }, e.prototype.checkSpam = function(e) {
            this.antiSpam.check(e);
        }, e.prototype.checkValue = function() {
            var e, t;
            if (!this.doesNotNeedToBeChecked()) switch (this.checkSpam(this.view.isSpam), this.type) {
              case n.HSBlockType.SaveInput:
                var i = null === (e = this.parameters[0]) || void 0 === e ? void 0 : e.variable();
                if (!i) return;
                i.setValue(this.view.value, this.object);
                break;

              case n.HSBlockType.SetTextToInput:
                var a = (null === (t = this.parameters[0]) || void 0 === t ? void 0 : t.computedColorString(this.object)) || o.HSColor.rgbTextColor;
                this.object.setText(r.HSVariable.parseValue(this.view.value, !1).toString(), a);
            }
        }, e.prototype.displayIfNeeded = function() {
            this.needsToBeDisplayed() && (this.isOnScreen = !0, this.view.show(e.antiSpam.askIfNextIsSpam));
        }, e.prototype.doesNotNeedToBeChecked = function() {
            return this.isOnScreen && !this.view.isDone;
        }, e.prototype.needsToBeDisplayed = function() {
            var e, t = this.type === n.HSBlockType.SaveInput && (null === (e = this.parameters[0]) || void 0 === e ? void 0 : e.variable()), i = this.type === n.HSBlockType.SetTextToInput;
            return !this.isSpam && !this.isOnScreen && (t || i) && !this.isDone;
        }, Object.defineProperty(e.prototype, "isDone", {
            get: function() {
                return this.view.isDone;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "antiSpam", {
            get: function() {
                return e.antiSpam;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "isSpam", {
            get: function() {
                return this.antiSpam.dontShowPrompts;
            },
            enumerable: !1,
            configurable: !0
        }), e.antiSpam = null, e;
    }();
    function c(e, t) {
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
    }
    t.HSStagePrompt = s;
    var u = function() {
        function e(e, tu /* AE_MOD CUSTOM PLACEHOLDER */) {
            void 0 === e && (e = "Type here"), this.text = e, this.isSpam = !1, this.isDone = !1, 
            this.appValue = "", this.createHTMLView(e, tu /* AE_MOD CUSTOM PLACEHOLDER */);
        }
        return e.prototype.createHTMLView = function(e, tu /* AE_MOD CUSTOM PLACEHOLDER */) {
            var t = this;
            if (!a.isIOSApp()) {
                var i = document.createElement("div");
                i.id = "hs_parent_div" + a.hs_random_id(), i.classList.add("hs-popup"), c(i.style, {
                    position: "absolute",
                    top: "0",
                    left: "50%",
                    transform: "translate(-50%, 20%)",
                    overflow: "hidden",
                    padding: "10px 20px 10px 20px",
                    borderRadius: "16px",
                    background: "white",
                    boxShadow: "2px 2px 8px 2px rgba(158, 158, 158, 0.47)",
                    zIndex: "9",
                    fontSize: "100%",
                    minWidth: "min(35%, 320px)"
                }), this.div = i;
                var r = document.createElement("p");
                c(r.style, {
                    fontSize: "2em",
                    fontFamily: "Avenir, sans-serif",
                    fontWeight: "normal",
                    color: "#000000c2",
                    margin: "10px 0px",
                    textAlign: "center"
                }), r.innerText = e, this.div.appendChild(r);
                var n = document.createElement("input");
                n.value = tu;
                c(n.style, {
                    width: "100%",
                    height: "50px",
                    type: "text",
                    fontSize: "1.8em",
                    fontFamily: "Avenir, sans-serif",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderRadius: "8px",
                    borderImage: "none",
                    outline: "none",
                    padding: "10px",
                    color: "#000000de"
                }), n.autofocus = !0, this.input = n, this.div.appendChild(n);
                if (tu == "_ae_webplayer_hide_prompt_input") n.value = "", n.style.display = "none";
                var o = document.createElement("a");
                c(o.style, {
                    fontFamily: "Avenir, sans-serif",
                    display: "block",
                    position: "relative",
                    textAlign: "center",
                    padding: "10px",
                    background: "#1dd8be",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.8em",
                    borderRadius: "19px",
                    width: "100px",
                    margin: "10px auto -1px",
                    cursor: "pointer",
                    userSelect: "none",
                    webkitUserSelect: "none"
                }), o.innerText = "OK";
                var s = !a.isIOSApp() && "ontouchstart" in document.documentElement ? "touchstart" : "click";
                o.addEventListener(s, function() {
                    u(t);
                }), n.addEventListener(s, function(e) {
                    return n.focus();
                }), n.addEventListener("keyup", function(e) {
                    13 === e.keyCode && (e.preventDefault(), u(t));
                }), this.btn = o, this.div.appendChild(o);
            }
            function u(e) {
                e.isDone = !0, e.hide();
            }
        }, e.prototype.show = function(e) {
            this.showAppPromptIfNecessary(e), this.showBrowserPromptIfNecessary();
        }, e.prototype.showBrowserPromptIfNecessary = function() {
            a.isIOSApp() || (document.getElementById("ae-hs-player").appendChild(this.div), /* this.input.value = "", */ this.input.focus());
        }, e.prototype.showAppPromptIfNecessary = function(e) {
            var t = this;
            a.isIOSApp() && (a.HSApp.sendToApp("input_prompt" + (e ? ":spam" : ""), this.text), 
            a.HSApp.readFromAppOnce("input_prompt", function(e) {
                t.readInputFromIOSApp(e, !1);
            }), e && a.HSApp.readFromAppOnce("input_prompt:spam", function(e) {
                t.readInputFromIOSApp(e, !0);
            }));
        }, e.prototype.readInputFromIOSApp = function(e, t) {
            this.appValue = e, this.isDone = !0, this.isSpam = t;
        }, e.prototype.hide = function() {
            a.isIOSApp() || this.div.remove();
        }, e.prototype.isFilled = function() {
            return "" !== this.value;
        }, Object.defineProperty(e.prototype, "value", {
            get: function() {
                return a.isIOSApp() ? this.appValue : this.input.value;
            },
            enumerable: !1,
            configurable: !0
        }), e;
    }();
    t.PromptView = u;
    var l = function() {
        function e() {
            var e = this;
            this.minTimeBeforeSpam = 1600, this.timeBeforeCheck = 2200, this.count = 0, this.lastTime = 0, 
            this.elapsed = 0, this.askIfNextIsSpam = !1, this.dontShowPrompts = !1, this.reset = function() {
                e.count = 0, e.elapsed = 0, e.lastTime = 0, e.askIfNextIsSpam = !1, e.dontShowPrompts = !1;
            }, a.HSApp.addResetCallback("antispam", this.reset);
        }
        return e.prototype.check = function(e) {
            e && (this.dontShowPrompts = !0), this.checkElapsedTime(), this.lastTime = Date.now(), 
            this.askIfNextIsSpam = this.askUserIfNextIsSpam();
        }, e.prototype.checkElapsedTime = function() {
            if (0 !== this.lastTime) {
                var e = this.lastTime, t = Date.now() - e;
                this.elapsed += t, this.count += 1;
            }
        }, e.prototype.askUserIfNextIsSpam = function() {
            if (this.elapsed <= this.timeBeforeCheck) return !1;
            var e = this.elapsed, t = this.count;
            return this.elapsed = 0, this.count = 0, e / t <= this.minTimeBeforeSpam;
        }, e;
    }();
    window.HSStagePrompt = s, window.PromptView = u;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageParameterBlock = void 0;
    var r = i(3), n = i(0), o = i(9), a = function() {
        function e(e) {
            this.parameterBlock = e;
        }
        return e.prototype.matchesStageObject = function(e, t) {
            var i = this.stageObjects(t), o = i[0];
            if (!o && !e) return !0;
            var a = this.parameterBlocks() && this.parameterBlocks().length > 0 && this.parameterBlocks()[0].type === n.HSBlockType.AnyObject;
            return this.parameterBlock.context.version < r.HSProjectVersion.ADD_SELF && !a ? o && e && o.objectID === e.objectID : i.includes(e);
        }, e.prototype.stageObjects = function(e) {
            return this.parameterBlocks().reduce(function(t, i) {
                return t.concat(i.stageObjects(e));
            }, []);
        }, e.prototype.parameterBlocks = function() {
            return this.parameterBlock.parameters.filter(function(e) {
                return null != e.childBlock;
            }).map(function(e) {
                return e.childBlock;
            });
        }, e.prototype.parameterBlockStringValues = function(e) {
            return this.parameterBlock.parameters.map(function(t) {
                return function(e, t) {
                    var i, r = (null === (i = e.childBlock) || void 0 === i ? void 0 : i.computedValue(t)) || e.value || "";
                    return o.HSVariable.parseValue(r, !0).toString();
                }(t, e);
            });
        }, e;
    }();
    t.HSStageParameterBlock = a, window.HSStageParameterBlock = a;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSTextTextureFactory = void 0;
    var r = i(23), n = i(20), o = i(1), a = i(4), s = function() {
        function e() {}
        return e.setFont = function(t, i) {
            t.font = i / 2 + "px " + e.FONT_FAMILIES.join(", "), t.textAlign = "left", t.textBaseline = "top";
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
            var i = r.HSTextNode.fromString(t.text);
            if (!i) return Promise.reject(null);
            if (!(e = this.canvas(e, t, i))) return Promise.reject(null);
            var n = e.getContext("2d");
            return i.draw(n).then(function(t) {
                return PIXI.Texture.fromCanvas(e);
            });
        }, e.scaleUp = function() {
            return n.HopscotchDrawingContext.MAX_TEXTURE_SIDE_LENGTH / r.HSTextNode.MAX_LINE_WIDTH;
        }, e.prototype.canvas = function(t, i, n) {
            var s = t.getContext("2d");
            e.setFont(s, i.fontSize);
            var c = i.text, u = a.HSColor.rgbWhiteColor;
            o.hasEmoji(c) && (u = i.color);
            var l = n.flow(s, r.HSTextNode.MAX_LINE_WIDTH);
            if (0 === l.width || 0 === l.height) return null;
            var h = i.sizePercentWidth / 100 || 1, p = i.sizePercentHeight / 100 || 1, d = e.scaleUp(), S = Math.min(l.width * d * h, 4096), f = Math.min(l.height * d * p, 4096);
            return t.width = S, t.height = f, e.setFont(s, i.fontSize), s.scale(S / l.width, f / l.height), 
            s.fillStyle = a.HSColor.rgbStringFromHSBString(u), t;
        }, e.FONT_FAMILIES = [ "Avenir-Book", "Hiragino Sans", "sans-serif", "AppleSymbols" ], 
        e.instance = new e(), e.textureCache = {}, e;
    }();
    t.HSTextTextureFactory = s, window.HSTextTextureFactory = s;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSCharacterTextureFactory = void 0;
    var r = i(37), n = i(7), o = i(4), a = function() {
        function e() {}
        return e.prototype.build = function(e, t) {
            return Promise.resolve(this._build(t));
        }, e.prototype._build = function(e) {
            var t = document.getElementById(this.imageID(e)), i = this.quantizedScale(t, e), r = this.svgString(t, e), n = PIXI.Texture.fromImage(r, !1, PIXI.SCALE_MODES.LINEAR, i);
            return n.baseTexture.resolution = i, n;
        }, e.prototype.quantizedScale = function(e, t) {
            var i = 1, r = 4;
            if (e) {
                var n = parseFloat(e.getAttribute("width")) || t.originalWidth, o = parseFloat(e.getAttribute("height")) || t.originalHeight;
                i = Math.max(t.originalWidth / n, t.originalHeight / o) * t.baseObjectScale, r = Math.floor(1024 / n);
            }
            var a = Math.abs(t.sizePercentWidth), s = Math.abs(t.sizePercentHeight), c = Math.max(a, s), u = Math.max(Math.ceil(.01 * c), 1) * i;
            return Math.min(u, r);
        }, e.prototype.buildAll = function(e, t) {
            for (var i = [], r = t.willChangeCostume ? 4 : 1, n = 0; n < r; n++) t.animationNumber = n, 
            i.push(this._build(t));
            return Promise.resolve(i);
        }, e.prototype.imageID = function(e) {
            var t = e.type || 0, i = n.HSObjectType[t];
            return i[0].toUpperCase() + i.slice(1) + e.animationNumber + ".svg";
        }, e.prototype.svgString = function(e, t) {
            var i = "";
            if (e) {
                e.style.fill = o.HSColor.rgbWhiteColor;
                var n = this.quantizedScale(e, t);
                e.setAttribute("hsScale", "" + n), i = r.HSView.xmlSerializer.serializeToString(e);
            }
            return "data:image/svg+xml;charset=utf8," + i;
        }, e.instance = new e(), e;
    }();
    t.HSCharacterTextureFactory = a, window.HSCharacterTextureFactory = a;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSBoundingBox = void 0;
    var r = i(36), n = i(4), o = i(21), a = function() {
        function e(e, t, i, r) {
            void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), 
            this.centerX = e, this.centerY = t, this.halfWidth = i, this.halfHeight = r, this.vertices = [ new o.Vec2(), new o.Vec2(), new o.Vec2(), new o.Vec2() ], 
            this.update(e, t, i, r);
        }
        return e.prototype.update = function(e, t, i, r) {
            this.halfWidth = i, this.halfHeight = r, this.centerX = e, this.centerY = t, this.vertices[0].x = e - this.halfWidth, 
            this.vertices[0].y = t - this.halfHeight, this.vertices[1].x = e + this.halfWidth, 
            this.vertices[1].y = t - this.halfHeight, this.vertices[2].x = e + this.halfWidth, 
            this.vertices[2].y = t + this.halfHeight, this.vertices[3].x = e - this.halfWidth, 
            this.vertices[3].y = t + this.halfHeight;
        }, e.prototype.width = function() {
            return 2 * this.halfWidth;
        }, e.prototype.height = function() {
            return 2 * this.halfHeight;
        }, e.prototype.minX = function() {
            return this.vertices[0].x;
        }, e.prototype.minY = function() {
            return this.vertices[0].y;
        }, e.prototype.maxX = function() {
            return this.vertices[2].x;
        }, e.prototype.maxY = function() {
            return this.vertices[2].y;
        }, e.prototype.draw = function(e) {
            var t = n.HSColor.rgb(0, 0, 0), i = this.vertices.map(function(e) {
                return new r.HSLinePoint(e, 1, {
                    drawingColor: t
                });
            });
            i.forEach(function(t, r) {
                e.drawLine(t, i[(r + 1) % i.length]);
            });
        }, e.prototype.containsPoint = function(e, t) {
            this.pointTestVecs || (this.pointTestVecs = [ new o.Vec2(), new o.Vec2(), new o.Vec2() ]);
            var i = new o.Vec2(e, t), r = this.vertices[0], n = this.vertices[1], a = this.vertices[3], s = this.pointTestVecs[0].subtract(n, r), c = this.pointTestVecs[1].subtract(a, r), u = this.pointTestVecs[2].subtract(i, r), l = u.dot(s) / s.len(), h = u.dot(c) / c.len();
            return l > 0 && l < s.len() && h > 0 && h < c.len();
        }, e.prototype.area = function() {
            return this.width() * this.height();
        }, e.prototype.overlapsWithOtherBoundingBox = function(e) {
            return this.maxX() > e.minX() && this.minX() < e.maxX() && this.maxY() > e.minY() && this.minY() < e.maxY();
        }, e.prototype.intersectionRectWithOtherBoundingBox = function(t) {
            if (this.surroundingBox || (this.surroundingBox = new e()), !this.overlapsWithOtherBoundingBox(t)) return e.zero;
            var i = this.minX(), r = this.minY(), n = this.maxX(), o = this.maxY(), a = t.minX(), s = t.minY(), c = t.maxX(), u = t.maxY(), l = Math.max(i, a), h = Math.max(r, s), p = Math.min(n, c), d = Math.min(o, u), S = .5 * (l + p), f = .5 * (h + d), g = .5 * (p - l), y = .5 * (d - h);
            return this.surroundingBox.update(S, f, g, y), this.surroundingBox;
        }, e.zero = new e(), e;
    }();
    t.HSBoundingBox = a, window.HSBoundingBox = a;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSCollisionImageFactory = void 0;
    var r = i(29);
    HTMLCanvasElement.prototype.unscaledWidth = function() {
        return this.width;
    }, HTMLCanvasElement.prototype.unscaledHeight = function() {
        return this.height;
    }, HTMLImageElement.prototype.unscaledWidth = function() {
        return this.naturalWidth;
    }, HTMLImageElement.prototype.unscaledHeight = function() {
        return this.naturalHeight;
    };
    var n = function() {
        function e() {}
        return e.prototype.image = function(e) {
            if (this._image) return this._image;
            if (!e) return null;
            var t = document.createElement("canvas"), i = t.getContext("2d"), n = e.unscaledWidth(), o = e.unscaledHeight(), a = r.HSVisualContext.collisionResolution, s = this.getScaledImageDimensions({
                width: n,
                height: o
            }, Math.pow(a, 2)), c = s.width, u = s.height;
            return t.width = c, t.height = u, i.drawImage(e, 0, 0, n, o, 0, 0, c, u), this._image = t, 
            t;
        }, e.prototype.getScaledImageDimensions = function(e, t) {
            var i = Math.max(Math.sqrt(e.width * e.height / t), 1);
            return {
                width: Math.round(e.width / i),
                height: Math.round(e.height / i)
            };
        }, e;
    }();
    t.HSCollisionImageFactory = n, window.HSCollisionImageFactory = n;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSCollisionContext = t.makeDebugCanvas = void 0;
    var r = i(5), n = i(29), o = i(7), a = i(38);
    t.makeDebugCanvas = function(e, t) {
        var i = document.createElement("canvas");
        return i.style.position = "fixed", i.style.top = e + "px", i.style.left = t + "px", 
        i.style.border = "1px solid blue", i.style.zIndex = "99999", document.body.appendChild(i), 
        i.width = n.HSVisualContext.collisionResolution, i.height = n.HSVisualContext.collisionResolution, 
        i;
    };
    var s = function() {
        function e() {
            this.numberOfPixelCollisions = 0, this.manager = new a.CollisionManager(), this.canvas1 = document.createElement("canvas"), 
            this.canvas2 = document.createElement("canvas");
        }
        return e.prototype.hitTest = function(e, t, i) {
            if (e.isInvisible()) return !1;
            var r = this.boundingBoxForObject(e);
            if (r.containsPoint(t, i)) {
                if (e.type === o.HSObjectType.text) return !0;
                var n = this.generatePixelTestData(this.canvas1, e, r, r), a = n.width / (r.maxX() - r.minX()), s = n.height / (r.maxY() - r.minY()), c = (t - r.minX()) * a, u = n.height - (i - r.minY()) * s;
                return t = Math.round(c), i = Math.round(u), this.pixelCoordinateHasAlpha(t, i, n);
            }
            return !1;
        }, e.prototype.tick = function(e) {
            this.manager.tick(Array.from(e));
        }, e.prototype.collisionTest = function(e, t) {
            return t.type === o.HSObjectType.edgeOfScreen ? this.objectIsTouchingEdgeOfScreen(e) : e.type === o.HSObjectType.edgeOfScreen ? this.objectIsTouchingEdgeOfScreen(t) : this.objectsAreColliding(e, t);
        }, e.prototype.objectsAreColliding = function(e, t) {
            return this.manager.existsCollisionBetweenStageObjects(e, t);
        }, e.prototype.objectIsTouchingEdgeOfScreen = function(e) {
            var t = this.boundingBoxForObject(e);
            if (0 === t.area()) return !1;
            var i = t.centerX, n = t.centerY;
            return i <= 0 || i >= r.HSStageScene.stageWidth || n <= 0 || n >= r.HSStageScene.stageHeight;
        }, e.prototype.pixelCoordinateHasAlpha = function(e, t, i) {
            var r = 4 * (t * i.width + e) + 3;
            return i.data[r] > 0;
        }, e.prototype.boundingBoxForObject = function(e) {
            return e.boundingBox();
        }, e.prototype.generatePixelTestData = function(e, t, i, r) {
            var n = (e = this.prepareCanvasForPixelTest(e, t, i, r)).getContext("2d"), o = e.width / i.width(), a = e.height / i.height(), s = Math.round((r.minX() - i.minX()) * o), c = Math.round((i.maxY() - r.maxY()) * a), u = Math.max(Math.ceil((r.maxX() - r.minX()) * o), 1), l = Math.max(Math.ceil((r.maxY() - r.minY()) * a), 1);
            return n.getImageData(s, c, u, l);
        }, e.prototype.prepareCanvasForPixelTest = function(e, t, i, r) {
            var n = t.imageForCollision();
            if (!n) return e;
            var o = function(e, t, i) {
                var r = Math.cos(i), n = Math.sin(i);
                return n < 0 && (n = -n), r < 0 && (r = -r), {
                    width: t * n + e * r,
                    height: t * r + e * n
                };
            }(Math.ceil(n.width * i.halfWidth / i.halfWidth), Math.ceil(n.height * i.halfHeight / i.halfHeight), t.headingInRadians());
            e.width = Math.ceil(o.width), e.height = Math.ceil(o.height);
            var a = e.getContext("2d");
            a.imageSmoothingEnabled = !1, a.oImageSmoothingEnabled = !1, a.msImageSmoothingEnabled = !1, 
            a.mozImageSmoothingEnabled = !1, a.webkitImageSmoothingEnabled = !1, a.clearRect(0, 0, e.width, e.height);
            var s = e.width / 2, c = e.height / 2;
            return a.translate(s, c), a.rotate(-t.headingInRadians()), t.isFlipped && a.scale(-1, 1), 
            n.width * n.height == 0 ? e : (a.drawImage(n, -n.width / 2, -n.height / 2), a.setTransform(1, 0, 0, 1, 0, 0), 
            e);
        }, e.PIXEL_TESTING_THRESHOLD = 10, e;
    }();
    t.HSCollisionContext = s, window.HSCollisionContext = s;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CollisionInfo = void 0;
    var r = i(38), n = function() {
        function e(e, t, i, r, n, o, a) {
            this.mask = e, this.width = t, this.height = i, this.minX = r, this.minY = n, this.maxX = o, 
            this.maxY = a, this.lastUse = Date.now();
        }
        return e.prototype.updateDropTime = function(e) {
            this.lastUse = e;
        }, e.prototype.isEmpty = function() {
            return this.minX < 0 || this.minY < 0;
        }, e.prototype.readyToDrop = function(t) {
            return t - this.lastUse > e.DROP_TIME;
        }, e.prototype.hit = function(e, t) {
            return !(e < 0 || e >= this.width) && (!(t < 0 || t >= this.height) && (e = e / r.CollisionManager.PIXEL_OFFSET | 0, 
            t = t / r.CollisionManager.PIXEL_OFFSET | 0, 0 !== this.mask[t * this.width + e]));
        }, e.DROP_TIME = 1e4, e;
    }();
    t.CollisionInfo = n, window.CollisionInfo = n;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CollisionObject = void 0;
    var r = function() {
        function e(e, t) {
            this.sprite = e, this.info = t, this.localTempPoint = new PIXI.Point(), this.outputPoints = [ new PIXI.Point(), new PIXI.Point(), new PIXI.Point(), new PIXI.Point() ], 
            this.tempPoints = [ new PIXI.Point(), new PIXI.Point(), new PIXI.Point(), new PIXI.Point() ], 
            this.tempRect = new PIXI.Rectangle(), this.outputPoint = new PIXI.Point();
        }
        return e.prototype.hit = function(e, t) {
            this.outputPoint.set(e, t);
            var i = this.sprite.toLocal(this.outputPoint, this.sprite.parent, this.localTempPoint);
            return i.x += (1 - this.sprite.anchor.x) * (this.sprite.width / Math.abs(this.sprite.scale.x)), 
            i.y += (1 - this.sprite.anchor.y) * (this.sprite.height / this.sprite.scale.y), 
            this.info.hit(i.x, i.y);
        }, e.prototype.getMaskBounds = function() {
            var e = this.sprite.getLocalBounds(), t = e.left + this.info.minX, i = e.top + this.info.minY, r = e.right - (this.info.width - this.info.maxX), n = e.bottom - (this.info.height - this.info.maxY);
            this.tempPoints[0].set(t, i), this.tempPoints[1].set(r, i), this.tempPoints[2].set(r, n), 
            this.tempPoints[3].set(t, n);
            var o = [ this.sprite.toGlobal(this.tempPoints[0], this.outputPoints[0]), this.sprite.toGlobal(this.tempPoints[1], this.outputPoints[1]), this.sprite.toGlobal(this.tempPoints[2], this.outputPoints[2]), this.sprite.toGlobal(this.tempPoints[3], this.outputPoints[3]) ], a = Number.MAX_SAFE_INTEGER, s = Number.MAX_SAFE_INTEGER, c = Number.MIN_SAFE_INTEGER, u = Number.MIN_SAFE_INTEGER;
            o.forEach(function(e) {
                var t = e.x, i = e.y;
                t < a && (a = t), t > c && (c = t), i < s && (s = i), i > u && (u = i);
            });
            var l = c - a, h = u - s;
            return this.tempRect.x = a, this.tempRect.y = s, this.tempRect.width = l, this.tempRect.height = h, 
            this.tempRect;
        }, e;
    }();
    t.CollisionObject = r, window.CollisionObject = r;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSOBJECT_SIZES = void 0;
    var r = i(7);
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
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSRuleActivator = void 0;
    var r = i(15), n = i(3), o = i(56), a = i(0), s = function() {
        function e() {
            this.stageObjects = [], this.currentCollisions = new o.HSCollisionPairCollection([]), 
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
            for (var i in t) 0 !== t[i].length && (t[i] = t[i].filter(function(t) {
                return !t.isCurrentObject(e);
            }));
        }, e.prototype.activateAllRulesForEventType = function(e) {
            this.stageObjects.forEach(function(t) {
                return t.activateAllStageRulesForEventType(e);
            });
        }, e.prototype.allPossibleCollisionPairs = function() {
            var e = this;
            return this._collisionPairs || (this._collisionPairs = new o.HSCollisionPairCollection(), 
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
                    var t = e.stageObject1, i = e.stageObject2;
                    return t && t.isAlive && i && i.isAlive;
                });
                this._collisionPairs.add(t), this._collisionPairs.add(e.allPossibleCollisionPairs());
            }
        }, e.prototype.allStageRulesForEventType = function(e) {
            var t = this, i = this.stageRulesCache();
            return this.stageObjects.filter(function(e) {
                return !t._stageObjectCache.has(e);
            }).forEach(function(e) {
                t.cacheRulesForStageObject(e);
            }), i[e];
        }, e.prototype.stageRulesCache = function() {
            if (this._stageRulesCache) return this._stageRulesCache;
            this._stageRulesCache = {};
            for (var e = Object.keys(a.HSBlockType).filter(function(e) {
                return "string" == typeof e;
            }), t = 0; t < e.length; t++) this._stageRulesCache[e[t]] = [];
            return this._stageRulesCache;
        }, e.prototype.cacheRulesForStageObject = function(e) {
            var t = this.stageRulesCache(), i = e.stageRules;
            this._stageObjectCache.add(e), i.forEach(function(e) {
                return t[e.eventType()].push(e);
            });
        }, e.prototype.activateCurrentCollisionRules = function() {
            var e, t = this, i = r.HSStageProject.sharedInstance.version < n.HSProjectVersion.WEBPLAYER_IN_APP;
            i && (e = this.bumpingCollisions ? this.bumpingCollisions.copy() : new o.HSCollisionPairCollection([])), 
            this.allTouchingRules().forEach(function(r) {
                var n = r.collisionPairs().find(function(e) {
                    return t.currentCollisions.contains(e);
                });
                n && (r.activate(), i && e.add([ n ]));
            }), this.allNotTouchingRules().forEach(function(e) {
                e.collisionPairs().find(function(e) {
                    return t.currentCollisions.contains(e);
                }) || e.activate();
            }), this.allBumpRules().forEach(function(r) {
                if (i) {
                    var n = r.collisionPairs().filter(function(e) {
                        return t.currentCollisions.contains(e);
                    });
                    e.intersects(n) && r.activate(), e.add(n.slice(0, 1));
                } else t.bumpingCollisions.intersects(r.collisionPairs()) && r.activate();
            });
        }, e.prototype.allNotTouchingRules = function() {
            return this.allStageRulesForEventType(a.HSBlockType.EventOperatorIsNotTouching);
        }, e.prototype.allTouchingRules = function() {
            return this.allStageRulesForEventType(a.HSBlockType.EventOperatorIsTouching);
        }, e.prototype.allBumpRules = function() {
            return this.allStageRulesForEventType(a.HSBlockType.EventOperatorBump);
        }, e.prototype.executeAllActiveRules = function() {
            for (var e = this.stageObjects, t = e.length, i = 0; i < t; ++i) void 0 !== e[i] && e[i].executeActiveRules();
        }, e.prototype.activateAllRulesForEventWithObjects = function(e, t) {
            var i = this.allStageRulesForEventType(e);
            t.forEach(function(e) {
                i.forEach(function(t) {
                    t.activateIfMatchesFirstObject(e);
                });
            });
        }, e;
    }();
    t.HSRuleActivator = s, window.HSRuleActivator = s;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSCollisionPairCollection = void 0;
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
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSLinkedListIterator = t.HSLinkedListNode = t.HSLinkedList = void 0;
    var r = function() {
        function e() {
            this.nodeMap = new Map(), this.headNode = new n(), this.length = 0, this.headNode.next = this.headNode, 
            this.headNode.previous = this.headNode;
        }
        return e.prototype.setNewOrder = function(e) {
            var t = this, i = e(Array.from(this.nodeMap.keys()));
            i.forEach(function(e) {
                return t.remove(e);
            }), i.forEach(function(e) {
                return t.push(e);
            });
        }, e.prototype.push = function(e) {
            if (!this.includes(e)) {
                var t = new n(e);
                t.next = this.headNode, t.previous = this.headNode.previous, t.previous.next = t, 
                this.headNode.previous = t, this.nodeMap.set(e, t), this.length++;
            }
        }, e.prototype.unshift = function(e) {
            if (!this.includes(e)) {
                var t = new n(e);
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
            return new o(this.headNode);
        }, e.prototype.getReverseIterator = function() {
            return new o(this.headNode, !0);
        }, e.prototype.forEach = function(e) {
            var t = this, i = 0;
            this[Symbol.iterator]().forEach(function(r) {
                return e(r, i++, t);
            });
        }, e.prototype.forEachRight = function(e) {
            var t = this, i = this.length - 1;
            this.getReverseIterator().forEach(function(r) {
                return e(r, i--, t);
            });
        }, e.prototype.find = function(e) {
            var t = this, i = 0;
            return this[Symbol.iterator]().find(function(r) {
                return e(r, i++, t);
            });
        }, e.prototype.findLast = function(e) {
            var t = this, i = this.length - 1;
            return this.getReverseIterator().find(function(r) {
                return e(r, i--, t);
            });
        }, e;
    }();
    t.HSLinkedList = r;
    var n = function(e) {
        void 0 === e && (e = null), this.value = e, this.next = this, this.previous = this;
    };
    t.HSLinkedListNode = n;
    var o = function() {
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
    t.HSLinkedListIterator = o, window.HSLinkedList = r;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageRule = void 0;
    var r = i(15), n = i(3), o = i(59), a = i(0), s = i(1), c = function() {
        function e(e, t) {
            var i = this;
            this.rule = e, this.currentObject = t, this.isActive = !1, this._collisionPairs = [], 
            this.numFirstParamObjects = 0, this.numSecondParamObjects = 0, this.activateIfEqualsEventMessage = function(e) {
                var t;
                e.trim() === (null === (t = i.eventBlock.parameterBlockStringValues(i.currentObject)[0]) || void 0 === t ? void 0 : t.trim()) && i.activate();
            }, this.activateIfMatchesEventMessage = function(e) {
                var t, r = e.trim(), n = null === (t = i.eventBlock.parameterBlockStringValues(i.currentObject)[0]) || void 0 === t ? void 0 : t.trim();
                s.checkMatches(r, n) && i.activate();
            }, this.stageScript = this.rule.script.stageScript(), this.eventBlock = this.rule.childBlock().stageParameterBlock();
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
            var e = this, t = this.eventBlock.parameterBlocks()[0], i = this.eventBlock.parameterBlocks()[1], r = this.stageObjectsForParameter(t), n = this.stageObjectsForParameter(i);
            if (this._collisionPairs && this.numFirstParamObjects === r.length && this.numSecondParamObjects === n.length) return this._collisionPairs;
            var a = r.slice(this.numFirstParamObjects), s = n.slice(this.numSecondParamObjects), c = r.slice(0, this.numFirstParamObjects);
            return a.forEach(function(t) {
                n.filter(function(e) {
                    return e !== t;
                }).forEach(function(i) {
                    e._collisionPairs.push(new o.HSCollisionPair(t, i)), t.relatedCollisionRules.add(e), 
                    i.relatedCollisionRules.add(e);
                });
            }), c.forEach(function(t) {
                s.filter(function(e) {
                    return e !== t;
                }).forEach(function(i) {
                    e._collisionPairs.push(new o.HSCollisionPair(t, i));
                });
            }), this.numFirstParamObjects = r.length, this.numSecondParamObjects = n.length, 
            this._collisionPairs;
        }, e.prototype.stageObjectsForParameter = function(e) {
            try {
                return e.type === a.HSBlockType.AnyObject ? r.HSStageProject.sharedInstance.activeStageScene.stageObjects : this.rule.context.version < n.HSProjectVersion.ADD_SELF && e.type === a.HSBlockType.Object && e.object ? e.object.allStageObjects() : e.stageObjects(this.currentObject);
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
            var i = new e(this.rule, t);
            return i.stageScript = this.stageScript.deepCopy(), i;
        }, e.prototype.isCurrentObject = function(e) {
            return this.currentObject === e;
        }, e;
    }();
    t.HSStageRule = c, window.HSStageRule = c;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSCollisionPair = void 0;
    var r = function() {
        function e(e, t) {
            this.isOverlapping = !1, this.wasOverlapping = !1;
            var i = this.getSortedPair(e, t);
            this.stageObject1 = i[0], this.stageObject2 = i[1], this.uniqueKey = this.stageObject1.stageObjectID + "_" + this.stageObject2.stageObjectID;
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
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSCustomObject = void 0;
    var r = function() {
        function e(e, t, i, r) {
            this.fileName = e, this.width = t, this.height = i, this.updatedDate = 0, r && (this.updatedDate = new Date(r).getTime());
        }
        return e.prototype.computedValue = function() {
            return 0;
        }, e;
    }();
    t.HSCustomObject = r, window.HSCustomObject = r;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.UIRegisterEventCallbacks = t.UIEventListener = t.UIEventListeners = t.UIPointerEvent = void 0;
    var r = i(5), n = i(21), o = function(e, t, i) {
        void 0 === i && (i = 0), this.id = i, this.id = i;
        var o = e.target, a = o.clientWidth, s = o.clientHeight;
        this.point = new n.Vec2(t[0] * r.HSStageScene.stageWidth / a, r.HSStageScene.stageHeight - t[1] * r.HSStageScene.stageHeight / s);
    };
    t.UIPointerEvent = o;
    var a = function() {
        function e(e) {
            this.listeners = e;
        }
        return e.prototype.unregister = function() {
            this.listeners.forEach(function(e) {
                return e.unregister();
            });
        }, e;
    }();
    t.UIEventListeners = a;
    var s = function() {
        function e(e, t, i) {
            this.element = e, this.eventType = t, this.callback = i, e.addEventListener(t, i);
        }
        return e.prototype.unregister = function() {
            this.element.removeEventListener(this.eventType, this.callback);
        }, e;
    }();
    t.UIEventListener = s, t.UIRegisterEventCallbacks = function(e, t) {
        function i(e, t, i) {
            return new s(e, t, function(e) {
                e.preventDefault(), i(e);
            });
        }
        function r(e, t, r) {
            return i(e, t, function(e) {
                var t = [ e.offsetX, e.offsetY ], i = new o(e, t);
                r(i);
            });
        }
        function n(e, t, r) {
            return i(e, t, function(e) {
                return function(e, t) {
                    var i = e.target.getBoundingClientRect();
                    Array.from(e.changedTouches).forEach(function(e) {
                        t(new o(e, [ e.clientX - i.left, e.clientY - i.top ], e.identifier));
                    });
                }(e, r);
            });
        }
        var c = !1;
        return new a([ r(e, "mousedown", function(e) {
            c && t.pointerUp(e), c = !0, t.pointerDown(e);
        }), r(e, "mousemove", function(e) {
            c && t.pointerDrag(e);
        }), r(window, "mouseup", function(e) {
            t.pointerUp(e), c = !1;
        }), n(e, "touchstart", t.pointerDown), n(e, "touchmove", t.pointerDrag), n(e/* AE_MOD player > window prevention */, "touchend", t.pointerUp), n(window, "touchcancel", t.pointerCancel) ]);
    }, window.UIPointerEvent = o, window.UIEventListeners = a, window.UIEventListener = s;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSSound = void 0;
    var r = i(1), n = function() {
        function e(t, i, r) {
            var n = this;
            void 0 === r && (r = "mp3"), this.name = t, this.context = i, this.extension = r, 
            this.sources = new Set(), e.soundCache.has(t) || e.soundCache.set(t, new Promise(function(e, t) {
                var i = new XMLHttpRequest();
                i.open("GET", n.url(), !0), i.responseType = "arraybuffer", i.onload = function() {
                    i.status >= 200 && i.status < 300 ? n.context.decodeAudioData(i.response, e, function() {}) : t(i);
                }, i.onerror = t, i.send();
            })), e.soundCache.get(t).then(function(e) {
                return n.buffer = e;
            });
        }
        return e.prototype.play = function() {
            var e = this;
            if (r.isIOSApp()) r.HSApp.sendToApp("sound", this.name); else if (this.buffer) {
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
            return "https://awesome-e.github.io/hs-tools/play-project/hopscotch-sounds/" /*AE_MOD Self-host sounds  "https://d2jeqdlsh5ay24.cloudfront.net/"*/ + this.name + "." + (this.extension||"mp3");
        }, e.soundCache = new Map(), e;
    }();
    t.HSSound = n, window.HSSound = n;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSProjectOpener = void 0;
    var r = i(1), n = function() {
        function e(e) {
            this.projectIdentifier = e;
        }
        return e.prototype.open = function() {
            if (r.isIOSApp()) r.HSApp.sendToApp("openProject", this.projectIdentifier); else {
                var e = function(e) {
                    return new URL(e, window.location.href).toString();
                }, t = e(`https://api.allorigins.win/raw?url=https://c.gethopscotch.com/api/v2/projects/${this.projectIdentifier}/metadata`) /*AE_MOD Project Linking Patch*/,
                n = new XMLHttpRequest();
                n.open("GET", t, !0), n.setRequestHeader("Content-Type", "application/json;charset=UTF-8"), 
                n.onreadystatechange = function() {
                    if (4 === n.readyState && 200 === n.status) {
                        var t = JSON.parse(n.responseText).uuid, i = "?play=1&id=" + t;
                        window.location.href = e(i);
                    }
                }, n.send();
            }
        }, e;
    }();
    t.HSProjectOpener = n, window.HSProjectOpener = n;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSStageScript = void 0;
    var r = i(9), n = i(32), o = i(34), a = i(33), s = i(10), c = i(0), u = function() {
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
            return e === c.HSBlockType.SetVariable || e === c.HSBlockType.ChangeVariable || e === c.HSBlockType.RequestSeeds;
        }, e.prototype.doesBlockAffectExecutionOrder = function(e) {
            return !!this.isControlBlock(e) && (!this.blockIsEmpty(e) && (!!this.blockHasAScriptThatContainsVariables(e) || this.blockUsesVariable(e)));
        }, e.prototype.blockHasAScriptThatContainsVariables = function(e) {
            if (!this.blockHasScriptWithoutParameters(e)) return !1;
            for (var t = 0; t < e.scripts.length; t++) {
                var i = e.scripts[t];
                if (this.scriptUsesVariable(i)) return !0;
            }
        }, e.prototype.blockHasScriptWithoutParameters = function(e) {
            return !this.blockHasParameters(e) && this.blockHasScripts(e);
        }, e.prototype.blockIsEmpty = function(e) {
            return !this.blockHasParameters(e) && !this.blockHasScripts(e);
        }, e.prototype.blockHasParameters = function(e) {
            return e.parameters && e.parameters.length;
        }, e.prototype.blockHasScripts = function(e) {
            return e.scripts && e.scripts.length;
        }, e.prototype.isControlBlock = function(e) {
            return e && e instanceof n.HSStageControl;
        }, e.prototype.scriptUsesVariable = function(e) {
            for (var t = 0; t < e.blocks.length; t++) {
                var i = e.blocks[t];
                if (this.blockUsesVariable(i)) return !0;
            }
            return !1;
        }, e.prototype.blockUsesVariable = function(e) {
            if (!e) return !1;
            for (var t = e.parameters || [], i = 0; i < t.length; i++) {
                var n = t[i].childBlock;
                if (n instanceof r.HSVariable || this.blockUsesVariable(n)) return !0;
            }
            return !1;
        }, e.prototype.executableForStepSize = function(e, t) {
            var i = this;
            if (!this.blocks.length) return new a.HSExecutable([], []);
            for (var r = this.blocks.slice().reverse(), n = r.pop(), s = [], c = function(e) {
                if (!e) return !1;
                var n = i.blockIsVariable(e.type) && i.doesBlockAffectExecutionOrder(r.length ? r[r.length - 1] : null), a = e.isImmediate, s = e instanceof o.HSStageMethod && e.isFinishedTimestampBlock(t);
                return !n && (a || s);
            }; c(n); ) s.push(n), n = r.pop();
            if (!n) return new a.HSExecutable(s, []);
            var u = n.executableForStepSize(e, t, this);
            return new a.HSExecutable(s.concat(u.blocksToExecuteNow), u.blocksToExecuteLater.concat(r.reverse()));
        }, e.prototype.deepCopy = function() {
            return new e(this.script);
        }, e.prototype.toString = function() {
            return s.SourceFormatter.blocksToSrc(this.blocks);
        }, e;
    }();
    t.HSStageScript = u, window.HSStageScript = u;
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSCustomRule = void 0;
    var r = i(2), n = i(8), o = i(12), a = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this;
        }
        return r.__extends(t, e), t.prototype.parseJSON = function(e) {
            void 0 === e && (e = {}), this.name = e.name, this.objectID = e.id, this.addRulesFromJSON(e);
        }, t.prototype.addRulesFromJSON = function(e) {
            void 0 === e && (e = {});
            var i = this.context;
            this.rules = e.rules.map(function(e) {
                var r = i.findWithObjectID(o.HSRule.key, e);
                return r || (r = i.findWithObjectID(t.key, e)), r;
            }).filter(function(e) {
                return !!e;
            });
        }, t.prototype.stageRules = function(e) {
            var t = this;
            return this.rules.reduce(function(i, r) {
                return r === t ? i : i.concat(r.stageRules(e));
            }, []);
        }, t.key = "HSCustomRule", t;
    }(n.HSManagedObject);
    t.HSCustomRule = a, window.HSCustomRule = a;
}, function(e, t) {
    !function(e) {
        var t = {};
        function i(r) {
            if (t[r]) return t[r].exports;
            var n = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
        }
        i.m = e, i.c = t, i.d = function(e, t, r) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            });
        }, i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, i.t = function(e, t) {
            if (1 & t && (e = i(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (i.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var n in e) i.d(r, n, function(t) {
                return e[t];
            }.bind(null, n));
            return r;
        }, i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return i.d(t, "a", t), t;
        }, i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, i.p = "", i(i.s = 3);
    }([ function(e, t) {
        e.exports = PIXI;
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(2), n = function() {
            function e(e, t) {
                this.key = e, this.manager = t, this.isPressed = !1, this.isDown = !1, this.isReleased = !1, 
                this.ctrl = !1, this.shift = !1, this.alt = !1;
            }
            return e.prototype.update = function() {
                this.isDown = this.manager.isDown(this.key), this.isPressed = this.manager.isPressed(this.key), 
                this.isReleased = this.manager.isReleased(this.key), this.ctrl = this.manager.isDown(r.default.CTRL), 
                this.shift = this.manager.isDown(r.default.SHIFT), this.alt = this.manager.isDown(r.default.ALT);
            }, e.prototype.remove = function() {
                this.manager.removeHotKey(this.key);
            }, e;
        }();
        t.default = n;
    }, function(e, t, i) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), function(e) {
            e[e.BACKSPACE = 8] = "BACKSPACE", e[e.TAB = 9] = "TAB", e[e.ENTER = 13] = "ENTER", 
            e[e.SHIFT = 16] = "SHIFT", e[e.PAUSE = 19] = "PAUSE", e[e.CTRL = 17] = "CTRL", e[e.ALT = 18] = "ALT", 
            e[e.CAPS_LOCK = 20] = "CAPS_LOCK", e[e.ESCAPE = 27] = "ESCAPE", e[e.SPACE = 32] = "SPACE", 
            e[e.PAGE_UP = 33] = "PAGE_UP", e[e.PAGE_DOWN = 34] = "PAGE_DOWN", e[e.END = 35] = "END", 
            e[e.HOME = 36] = "HOME", e[e.LEFT = 37] = "LEFT", e[e.UP = 38] = "UP", e[e.RIGHT = 39] = "RIGHT", 
            e[e.DOWN = 40] = "DOWN", e[e.PRINT_SCREEN = 44] = "PRINT_SCREEN", e[e.INSERT = 45] = "INSERT", 
            e[e.DELETE = 46] = "DELETE", e[e._0 = 48] = "_0", e[e._1 = 49] = "_1", e[e._2 = 50] = "_2", 
            e[e._3 = 51] = "_3", e[e._4 = 52] = "_4", e[e._5 = 53] = "_5", e[e._6 = 54] = "_6", 
            e[e._7 = 55] = "_7", e[e._8 = 56] = "_8", e[e._9 = 57] = "_9", e[e.A = 65] = "A", 
            e[e.B = 66] = "B", e[e.C = 67] = "C", e[e.D = 68] = "D", e[e.E = 69] = "E", e[e.F = 70] = "F", 
            e[e.G = 71] = "G", e[e.H = 72] = "H", e[e.I = 73] = "I", e[e.J = 74] = "J", e[e.K = 75] = "K", 
            e[e.L = 76] = "L", e[e.M = 77] = "M", e[e.N = 78] = "N", e[e.O = 79] = "O", e[e.P = 80] = "P", 
            e[e.Q = 81] = "Q", e[e.R = 82] = "R", e[e.S = 83] = "S", e[e.T = 84] = "T", e[e.U = 85] = "U", 
            e[e.V = 86] = "V", e[e.W = 87] = "W", e[e.X = 88] = "X", e[e.Y = 89] = "Y", e[e.Z = 90] = "Z", 
            e[e.CMD = 91] = "CMD", e[e.CMD_RIGHT = 93] = "CMD_RIGHT", e[e.NUM_0 = 96] = "NUM_0", 
            e[e.NUM_1 = 97] = "NUM_1", e[e.NUM_2 = 98] = "NUM_2", e[e.NUM_3 = 99] = "NUM_3", 
            e[e.NUM_4 = 100] = "NUM_4", e[e.NUM_5 = 101] = "NUM_5", e[e.NUM_6 = 102] = "NUM_6", 
            e[e.NUM_7 = 103] = "NUM_7", e[e.NUM_8 = 104] = "NUM_8", e[e.NUM_9 = 105] = "NUM_9", 
            e[e.MULTIPLY = 106] = "MULTIPLY", e[e.ADD = 107] = "ADD", e[e.SUBTRACT = 109] = "SUBTRACT", 
            e[e.DECIMAL_POINT = 110] = "DECIMAL_POINT", e[e.DIVIDE = 111] = "DIVIDE", e[e.F1 = 112] = "F1", 
            e[e.F2 = 113] = "F2", e[e.F3 = 114] = "F3", e[e.F4 = 115] = "F4", e[e.F5 = 116] = "F5", 
            e[e.F6 = 117] = "F6", e[e.F7 = 118] = "F7", e[e.F8 = 119] = "F8", e[e.F9 = 120] = "F9", 
            e[e.F10 = 121] = "F10", e[e.F11 = 122] = "F11", e[e.F12 = 123] = "F12", e[e.NUM_LOCK = 144] = "NUM_LOCK", 
            e[e.SCROLL_LOCK = 145] = "SCROLL_LOCK", e[e.SEMI_COLON = 186] = "SEMI_COLON", e[e.EQUAL = 187] = "EQUAL", 
            e[e.COMMA = 188] = "COMMA", e[e.DASH = 189] = "DASH", e[e.PERIOD = 190] = "PERIOD", 
            e[e.FORWARD_SLASH = 191] = "FORWARD_SLASH", e[e.OPEN_BRACKET = 219] = "OPEN_BRACKET", 
            e[e.BACK_SLASH = 220] = "BACK_SLASH", e[e.CLOSE_BRACKET = 221] = "CLOSE_BRACKET", 
            e[e.SINGLE_QUOTE = 222] = "SINGLE_QUOTE";
        }(r || (r = {})), t.default = r;
    }, function(e, t, i) {
        e.exports = i(4);
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(0), n = i(5), o = i(1), a = i(2), s = {
            KeyboardManager: n.default,
            Key: a.default,
            HotKey: o.default
        }, c = r;
        if (!c.keyboard) {
            var u = new n.default();
            u.enable(), c.keyboard = s, c.keyboardManager = u;
        }
        t.default = s;
    }, function(e, t, i) {
        "use strict";
        var r, n = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            })(e, t);
        }, function(e, t) {
            function i() {
                this.constructor = e;
            }
            r(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, 
            new i());
        });
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = i(0), a = i(1), s = function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.isEnabled = !1, t.pressedKeys = [], t.releasedKeys = [], t.downKeys = {}, 
                t.hotKeys = [], t.preventDefaultKeys = [], t;
            }
            return n(t, e), t.prototype.enable = function() {
                this.isEnabled || (this.isEnabled = !0, this._enableEvents());
            }, t.prototype._enableEvents = function() {
                window.addEventListener("keydown", this._onKeyDown.bind(this), !0), window.addEventListener("keyup", this._onKeyUp.bind(this), !0);
            }, t.prototype.disable = function() {
                this.isEnabled && (this.isEnabled = !1, this._disableEvents());
            }, t.prototype._disableEvents = function() {
                window.removeEventListener("keydown", this._onKeyDown, !0), window.removeEventListener("keyup", this._onKeyUp, !0);
            }, t.prototype.setPreventDefault = function(e, t) {
                if (void 0 === t && (t = !0), r = e, "[object Array]" === Object.prototype.toString.call(r)) for (var i = 0; i < e.length; i++) this.preventDefaultKeys[e[i]] = t; else this.preventDefaultKeys[e] = t;
                var r;
            }, t.prototype._onKeyDown = function(e) {
                var t = e.which || e.keyCode;
                this.preventDefaultKeys[t] && e.preventDefault(), this.isDown(t) || (this.downKeys[t] = 0, 
                this.pressedKeys[t] = !0, this.emit("pressed", t));
            }, t.prototype._onKeyUp = function(e) {
                var t = e.which || e.keyCode;
                this.preventDefaultKeys[t] && e.preventDefault(), this.isDown(t) && (this.pressedKeys[t] = !1, 
                this.releasedKeys[t] = !0, delete this.downKeys[t], this.emit("released", t));
            }, t.prototype.downTime = function(e) {
                return this.downKeys[e] || 0;
            }, t.prototype.isDown = function(e) {
                return this.downKeys.hasOwnProperty(e);
            }, t.prototype.isPressed = function(e) {
                return !!this.pressedKeys[e];
            }, t.prototype.isReleased = function(e) {
                return !!this.releasedKeys[e];
            }, t.prototype.update = function(e) {
                for (var t in void 0 === e && (e = 0), this.hotKeys.forEach(function(e) {
                    return e.update();
                }), this.downKeys) this.downKeys.hasOwnProperty(t) && (this.downKeys[t] += e, this.emit("down", t));
                this.pressedKeys.length = 0, this.releasedKeys.length = 0;
            }, t.prototype.getHotKey = function(e) {
                var t = this.hotKeys[e] || new a.default(e, this);
                return this.hotKeys[e] = t, t;
            }, t.prototype.removeHotKey = function(e) {
                this.hotKeys[e] && delete this.hotKeys[e];
            }, t;
        }(o.utils.EventEmitter);
        t.default = s;
    } ]);
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.HSManagedObjectFactory = void 0;
    var r = i(3), n = i(41), o = i(40), a = i(22), s = i(12), c = i(6), u = i(35), l = i(31), h = i(13), p = i(11), d = i(42), S = i(7), f = i(0), g = i(9), y = function() {
        function e() {
            this.context = new r.HSProjectContext(), this.scene = this.buildScene(), this.project = new l.HSProject(this.context), 
            this.project.scenes = [ this.scene ];
        }
        return e.prototype.buildDemoScene = function() {
            this.buildObject(S.HSObjectType.octopus, "", 400, 200);
            for (var e = this.buildObject(S.HSObjectType.chillanna, "", 400, 350), t = "Hello World \n", i = 0; i < 100; i++) t += "😈";
            return this.buildObject(S.HSObjectType.text, t, 350, 200), this.buildOnStartRule(e), 
            this.scene.parseJSON(), this.scene;
        }, e.prototype.buildScene = function() {
            var e = new o.HSScene(this.context);
            return e.parseJSON({}), e;
        }, e.prototype.buildObject = function(e, t, i, r) {
            void 0 === e && (e = S.HSObjectType.monkey), void 0 === t && (t = ""), void 0 === i && (i = 750), 
            void 0 === r && (r = 500);
            var n = new c.HSObject(this.scene.context);
            return n.type = e, n.text = t, n.x = i, n.y = r, n.objectID = Math.floor(Math.random() * Math.pow(2, 32)).toString(16), 
            n;
        }, e.prototype.buildObjectWithRule = function() {
            var e = this.buildObject();
            this.buildOnStartRule(e);
            return e;
        }, e.prototype.buildOnStartRule = function(e, t) {
            var i = this.context;
            t || (t = this.buildScript()), e || (e = this.buildObject(S.HSObjectType.monkey));
            var r = new s.HSRule(i);
            r.script = t, e.addRule(r);
            var n = new h.HSParameter(i), o = new p.HSParameterBlock(i);
            return o.type = f.HSBlockType.EventOperatorStart, n.childBlock = o, r.parameters = [ n ], 
            r.parameters[0].childBlock.parameters[0] = new h.HSParameter(r.context), r.parameters[0].childBlock.parameters[0].childBlock = new p.HSParameterBlock(r.context), 
            r;
        }, e.prototype.buildTapRule = function(e, t) {
            return this.buildRule(f.HSBlockType.EventOperatorTap, e, t);
        }, e.prototype.buildMessageMatchesRule = function(e, t, i) {
            var r = i || {};
            this.context.version = 32;
            var n = this.context, o = this.buildScript(), a = this.buildObject(S.HSObjectType.monkey), c = new s.HSRule(n);
            c.script = o, a.addRule(c);
            var u = new h.HSParameter(n), l = new p.HSParameterBlock(n);
            l.type = f.HSBlockType.EventOperatorMessageMatches, u.childBlock = l, c.parameters = [ u ];
            var d = new h.HSParameter(c.context);
            d.value = t;
            var y = new g.HSVariable(c.context);
            return y.setValue(e, r || {}), d.childBlock = y, c.parameters[0].childBlock.parameters[0] = d, 
            c;
        }, e.prototype.buildHeardMessageRule = function(e) {
            var t = this.context, i = this.buildScript(), r = this.buildObject(S.HSObjectType.monkey), n = new s.HSRule(t);
            n.script = i, r.addRule(n);
            var o = new h.HSParameter(t), a = new p.HSParameterBlock(t);
            a.type = f.HSBlockType.EventOperatorHearMessage, o.childBlock = a, n.parameters = [ o ], 
            n.parameters[0].childBlock.parameters[0] = new h.HSParameter(n.context);
            var c = new g.HSVariable(n.context);
            return c.setValue(e, null), n.parameters[0].childBlock.parameters[0].childBlock = c, 
            n;
        }, e.prototype.buildHeardMessageRuleWithSelfVar = function(e) {
            var t = this.context, i = this.buildScript(), r = this.buildObject(S.HSObjectType.monkey), n = new s.HSRule(t);
            n.script = i, r.addRule(n);
            var o = new h.HSParameter(t), a = new p.HSParameterBlock(t);
            a.type = f.HSBlockType.EventOperatorHearMessage, o.childBlock = a, n.parameters = [ o ], 
            n.parameters[0].childBlock.parameters[0] = new h.HSParameter(n.context);
            var c = new g.HSVariable(n.context);
            return c.blockType = f.HSBlockType.Self, c.setValue(e, null), n.parameters[0].childBlock.parameters[0].childBlock = c, 
            {
                rule: n,
                variable: c
            };
        }, e.prototype.buildRule = function(e, t, i) {
            var r = this.context;
            i || (i = this.buildScript()), t || (t = this.buildObject(S.HSObjectType.monkey));
            var n = new s.HSRule(r);
            n.script = i, t.addRule(n);
            var o = new h.HSParameter(r), a = new p.HSParameterBlock(r);
            return a.type = e, o.childBlock = a, n.parameters = [ o ], n;
        }, e.prototype.buildScript = function() {
            return this.buildScript3();
        }, e.prototype.buildRecursiveScript = function() {
            var e = new a.HSScript(this.context);
            return e.blocks = [ this.buildControlBlock(f.HSBlockType.Ability, [ "" ], e) ], 
            e;
        }, e.prototype.buildEmptyScript = function() {
            var e = new a.HSScript(this.context);
            return e.blocks = [], e;
        }, e.prototype.buildScript3 = function() {
            var e = this.context, t = new a.HSScript(e);
            return t.blocks = [ this.buildControlBlock(f.HSBlockType.Repeat, [ "100" ], this.buildScript4()) ], 
            t;
        }, e.prototype.buildScript4 = function() {
            var e = this.context, t = new a.HSScript(e);
            return t.blocks = [ this.buildMethodBlock(f.HSBlockType.SetInvisibility, [ "90" ]), this.buildMethodBlock(f.HSBlockType.ChangeSpeed, [ "1600" ]), this.buildMethodBlock(f.HSBlockType.StrokeColor, [ "HSB(74, 100, 100)" ]), this.buildMethodBlock(f.HSBlockType.StrokeWidth, [ "30" ]), this.buildMethodBlock(f.HSBlockType.PenDown, []), this.buildMethodBlock(f.HSBlockType.Move, [ "200" ]), this.buildMethodBlock(f.HSBlockType.PenUp, []), this.buildMethodBlock(f.HSBlockType.Rotate, [ "135" ]), this.buildMethodBlock(f.HSBlockType.Move, [ "200" ]), this.buildMethodBlock(f.HSBlockType.Rotate, [ "145" ]) ], 
            t;
        }, e.prototype.buildScript2 = function() {
            var e = this.context, t = new a.HSScript(e);
            return t.blocks = [ this.buildMethodBlock(f.HSBlockType.ChangeSpeed, [ "1000" ]), this.buildMethodBlock(f.HSBlockType.Move, [ "100" ]), this.buildMethodBlock(f.HSBlockType.Rotate, [ "30" ]), this.buildMethodBlock(f.HSBlockType.Move, [ "150" ]), this.buildMethodBlock(f.HSBlockType.ChangeSpeed, [ "100" ]), this.buildMethodBlock(f.HSBlockType.Rotate, [ "60" ]), this.buildMethodBlock(f.HSBlockType.Move, [ "200" ]) ], 
            t;
        }, e.prototype.buildScript1 = function() {
            var e = this.context, t = new a.HSScript(e);
            return t.blocks = [ this.buildMethodBlock(f.HSBlockType.Grow, [ "200" ]), this.buildMethodBlock(f.HSBlockType.Shrink, [ "50" ]) ], 
            t;
        }, e.prototype.buildScript0 = function() {
            for (var e = this.context, t = new a.HSScript(e), i = [ this.buildMethodBlock(f.HSBlockType.SetPosition, [ "200", "200" ]) ], r = 0; r < 50; r++) i.push(this.buildMethodBlock(f.HSBlockType.Move, [ "200" ]));
            return i.push(this.buildMethodBlock(f.HSBlockType.SetSize, [ "200" ])), t.blocks = i, 
            t;
        }, e.prototype.buildMethodBlock = function(e, t) {
            void 0 === e && (e = f.HSBlockType.Move), void 0 === t && (t = []);
            this.context;
            var i = this.parametersFromValues(t), r = new d.HSMethodBlock(this.context);
            return r.type = e, r.parameters = i, r;
        }, e.prototype.parametersFromValues = function(e) {
            var t = this, i = [];
            return e.forEach(function(e, r, n) {
                var o = new h.HSParameter(t.context);
                e instanceof g.HSVariable ? o.childBlock = e : o.value = e, i.push(o);
            }), i;
        }, e.prototype.buildControlBlock = function(e, t, i) {
            void 0 === e && (e = f.HSBlockType.Repeat), void 0 === t && (t = []), i || (i = this.buildScript1());
            var r = this.parametersFromValues(t), n = new u.HSControlBlock(this.context);
            return n.type = e, n.parameters = r, n.scripts = [ i ], n;
        }, e.prototype.buildConditionalControlBlock = function(e, t, i) {
            void 0 === e && (e = f.HSBlockType.CheckOnceIf), void 0 === t && (t = []), i || (i = this.buildScript1());
            var r = this.parametersFromValues(t), o = new n.HSConditionalControl(this.context);
            return o.type = e, o.parameters = r, o.scripts = [ i ], o;
        }, e;
    }();
    t.HSManagedObjectFactory = y, window.HSManagedObjectFactory = y;
}, function(e, t, i) {
    "use strict";
    function r(e, t) {
        (function(e) {
            return "string" == typeof e && e.includes(".") && 1 === parseFloat(e);
        })(e) && (e = "100%");
        var i = function(e) {
            return "string" == typeof e && e.includes("%");
        }(e);
        return e = 360 === t ? e : Math.min(t, Math.max(0, parseFloat(e))), i && (e = parseInt(String(e * t), 10) / 100), 
        Math.abs(e - t) < 1e-6 ? 1 : e = 360 === t ? (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e % t / parseFloat(String(t));
    }
    function n(e) {
        return Math.min(1, Math.max(0, e));
    }
    function o(e) {
        return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
    }
    function a(e) {
        return e <= 1 ? 100 * Number(e) + "%" : e;
    }
    function s(e) {
        return 1 === e.length ? "0" + e : String(e);
    }
    function c(e, t, i) {
        e = r(e, 255), t = r(t, 255), i = r(i, 255);
        var n = Math.max(e, t, i), o = Math.min(e, t, i), a = 0, s = 0, c = (n + o) / 2;
        if (n === o) s = 0, a = 0; else {
            var u = n - o;
            switch (s = c > .5 ? u / (2 - n - o) : u / (n + o), n) {
              case e:
                a = (t - i) / u + (t < i ? 6 : 0);
                break;

              case t:
                a = (i - e) / u + 2;
                break;

              case i:
                a = (e - t) / u + 4;
            }
            a /= 6;
        }
        return {
            h: a,
            s: s,
            l: c
        };
    }
    function u(e, t, i) {
        e = r(e, 255), t = r(t, 255), i = r(i, 255);
        var n = Math.max(e, t, i), o = Math.min(e, t, i), a = 0, s = n, c = n - o, u = 0 === n ? 0 : c / n;
        if (n === o) a = 0; else {
            switch (n) {
              case e:
                a = (t - i) / c + (t < i ? 6 : 0);
                break;

              case t:
                a = (i - e) / c + 2;
                break;

              case i:
                a = (e - t) / c + 4;
            }
            a /= 6;
        }
        return {
            h: a,
            s: u,
            v: s
        };
    }
    function l(e, t, i, r) {
        var n = [ s(Math.round(e).toString(16)), s(Math.round(t).toString(16)), s(Math.round(i).toString(16)) ];
        return r && n[0].charAt(0) === n[0].charAt(1) && n[1].charAt(0) === n[1].charAt(1) && n[2].charAt(0) === n[2].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) : n.join("");
    }
    function h(e, t, i, r) {
        return [ s(p(r)), s(Math.round(e).toString(16)), s(Math.round(t).toString(16)), s(Math.round(i).toString(16)) ].join("");
    }
    function p(e) {
        return Math.round(255 * parseFloat(e)).toString(16);
    }
    function d(e) {
        return S(e) / 255;
    }
    function S(e) {
        return parseInt(e, 16);
    }
    i.r(t);
    var f = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };
    function g(e) {
        var t, i, n, s = {
            r: 0,
            g: 0,
            b: 0
        }, c = 1, u = null, l = null, h = null, p = !1, d = !1;
        return "string" == typeof e && (e = m(e)), "object" == typeof e && (E(e.r) && E(e.g) && E(e.b) ? (t = e.r, 
        i = e.g, n = e.b, s = {
            r: 255 * r(t, 255),
            g: 255 * r(i, 255),
            b: 255 * r(n, 255)
        }, p = !0, d = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : E(e.h) && E(e.s) && E(e.v) ? (u = a(e.s), 
        l = a(e.v), s = function(e, t, i) {
            e = 6 * r(e, 360), t = r(t, 100), i = r(i, 100);
            var n = Math.floor(e), o = e - n, a = i * (1 - t), s = i * (1 - o * t), c = i * (1 - (1 - o) * t), u = n % 6;
            return {
                r: 255 * [ i, s, a, a, c, i ][u],
                g: 255 * [ c, i, i, s, a, a ][u],
                b: 255 * [ a, a, c, i, i, s ][u]
            };
        }(e.h, u, l), p = !0, d = "hsv") : E(e.h) && E(e.s) && E(e.l) && (u = a(e.s), h = a(e.l), 
        s = function(e, t, i) {
            var n, o, a;
            function s(e, t, i) {
                return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? e + 6 * i * (t - e) : i < .5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e;
            }
            if (e = r(e, 360), t = r(t, 100), i = r(i, 100), 0 === t) o = i, a = i, n = i; else {
                var c = i < .5 ? i * (1 + t) : i + t - i * t, u = 2 * i - c;
                n = s(u, c, e + 1 / 3), o = s(u, c, e), a = s(u, c, e - 1 / 3);
            }
            return {
                r: 255 * n,
                g: 255 * o,
                b: 255 * a
            };
        }(e.h, u, h), p = !0, d = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (c = e.a)), 
        c = o(c), {
            ok: p,
            format: e.format || d,
            r: Math.min(255, Math.max(s.r, 0)),
            g: Math.min(255, Math.max(s.g, 0)),
            b: Math.min(255, Math.max(s.b, 0)),
            a: c
        };
    }
    var y = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)", v = "[\\s|\\(]+(" + y + ")[,|\\s]+(" + y + ")[,|\\s]+(" + y + ")\\s*\\)?", b = "[\\s|\\(]+(" + y + ")[,|\\s]+(" + y + ")[,|\\s]+(" + y + ")[,|\\s]+(" + y + ")\\s*\\)?", T = {
        CSS_UNIT: new RegExp(y),
        rgb: new RegExp("rgb" + v),
        rgba: new RegExp("rgba" + b),
        hsl: new RegExp("hsl" + v),
        hsla: new RegExp("hsla" + b),
        hsv: new RegExp("hsv" + v),
        hsva: new RegExp("hsva" + b),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
    function m(e) {
        if (0 === (e = e.trim().toLowerCase()).length) return !1;
        var t = !1;
        if (f[e]) e = f[e], t = !0; else if ("transparent" === e) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
        var i = T.rgb.exec(e);
        return i ? {
            r: i[1],
            g: i[2],
            b: i[3]
        } : (i = T.rgba.exec(e)) ? {
            r: i[1],
            g: i[2],
            b: i[3],
            a: i[4]
        } : (i = T.hsl.exec(e)) ? {
            h: i[1],
            s: i[2],
            l: i[3]
        } : (i = T.hsla.exec(e)) ? {
            h: i[1],
            s: i[2],
            l: i[3],
            a: i[4]
        } : (i = T.hsv.exec(e)) ? {
            h: i[1],
            s: i[2],
            v: i[3]
        } : (i = T.hsva.exec(e)) ? {
            h: i[1],
            s: i[2],
            v: i[3],
            a: i[4]
        } : (i = T.hex8.exec(e)) ? {
            r: S(i[1]),
            g: S(i[2]),
            b: S(i[3]),
            a: d(i[4]),
            format: t ? "name" : "hex8"
        } : (i = T.hex6.exec(e)) ? {
            r: S(i[1]),
            g: S(i[2]),
            b: S(i[3]),
            format: t ? "name" : "hex"
        } : (i = T.hex4.exec(e)) ? {
            r: S(i[1] + i[1]),
            g: S(i[2] + i[2]),
            b: S(i[3] + i[3]),
            a: d(i[4] + i[4]),
            format: t ? "name" : "hex8"
        } : !!(i = T.hex3.exec(e)) && {
            r: S(i[1] + i[1]),
            g: S(i[2] + i[2]),
            b: S(i[3] + i[3]),
            format: t ? "name" : "hex"
        };
    }
    function E(e) {
        return Boolean(T.CSS_UNIT.exec(String(e)));
    }
    var H = function() {
        function e(t, i) {
            if (void 0 === t && (t = ""), void 0 === i && (i = {}), t instanceof e) return t;
            this.originalInput = t;
            var r = g(t);
            this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, 
            this.roundA = Math.round(100 * this.a) / 100, this.format = i.format || r.format, 
            this.gradientType = i.gradientType, this.r < 1 && (this.r = Math.round(this.r)), 
            this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), 
            this.isValid = r.ok;
        }
        return e.prototype.isDark = function() {
            return this.getBrightness() < 128;
        }, e.prototype.isLight = function() {
            return !this.isDark();
        }, e.prototype.getBrightness = function() {
            var e = this.toRgb();
            return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3;
        }, e.prototype.getLuminance = function() {
            var e = this.toRgb(), t = e.r / 255, i = e.g / 255, r = e.b / 255;
            return .2126 * (t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .7152 * (i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)) + .0722 * (r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4));
        }, e.prototype.getAlpha = function() {
            return this.a;
        }, e.prototype.setAlpha = function(e) {
            return this.a = o(e), this.roundA = Math.round(100 * this.a) / 100, this;
        }, e.prototype.toHsv = function() {
            var e = u(this.r, this.g, this.b);
            return {
                h: 360 * e.h,
                s: e.s,
                v: e.v,
                a: this.a
            };
        }, e.prototype.toHsvString = function() {
            var e = u(this.r, this.g, this.b), t = Math.round(360 * e.h), i = Math.round(100 * e.s), r = Math.round(100 * e.v);
            return 1 === this.a ? "hsv(" + t + ", " + i + "%, " + r + "%)" : "hsva(" + t + ", " + i + "%, " + r + "%, " + this.roundA + ")";
        }, e.prototype.toHsl = function() {
            var e = c(this.r, this.g, this.b);
            return {
                h: 360 * e.h,
                s: e.s,
                l: e.l,
                a: this.a
            };
        }, e.prototype.toHslString = function() {
            var e = c(this.r, this.g, this.b), t = Math.round(360 * e.h), i = Math.round(100 * e.s), r = Math.round(100 * e.l);
            return 1 === this.a ? "hsl(" + t + ", " + i + "%, " + r + "%)" : "hsla(" + t + ", " + i + "%, " + r + "%, " + this.roundA + ")";
        }, e.prototype.toHex = function(e) {
            return void 0 === e && (e = !1), l(this.r, this.g, this.b, e);
        }, e.prototype.toHexString = function(e) {
            return void 0 === e && (e = !1), "#" + this.toHex(e);
        }, e.prototype.toHex8 = function(e) {
            return void 0 === e && (e = !1), function(e, t, i, r, n) {
                var o = [ s(Math.round(e).toString(16)), s(Math.round(t).toString(16)), s(Math.round(i).toString(16)), s(p(r)) ];
                return n && o[0].charAt(0) === o[0].charAt(1) && o[1].charAt(0) === o[1].charAt(1) && o[2].charAt(0) === o[2].charAt(1) && o[3].charAt(0) === o[3].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
            }(this.r, this.g, this.b, this.a, e);
        }, e.prototype.toHex8String = function(e) {
            return void 0 === e && (e = !1), "#" + this.toHex8(e);
        }, e.prototype.toRgb = function() {
            return {
                r: Math.round(this.r),
                g: Math.round(this.g),
                b: Math.round(this.b),
                a: this.a
            };
        }, e.prototype.toRgbString = function() {
            var e = Math.round(this.r), t = Math.round(this.g), i = Math.round(this.b);
            return 1 === this.a ? "rgb(" + e + ", " + t + ", " + i + ")" : "rgba(" + e + ", " + t + ", " + i + ", " + this.roundA + ")";
        }, e.prototype.toPercentageRgb = function() {
            var e = function(e) {
                return Math.round(100 * r(e, 255)) + "%";
            };
            return {
                r: e(this.r),
                g: e(this.g),
                b: e(this.b),
                a: this.a
            };
        }, e.prototype.toPercentageRgbString = function() {
            var e = function(e) {
                return Math.round(100 * r(e, 255));
            };
            return 1 === this.a ? "rgb(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%)" : "rgba(" + e(this.r) + "%, " + e(this.g) + "%, " + e(this.b) + "%, " + this.roundA + ")";
        }, e.prototype.toName = function() {
            if (0 === this.a) return "transparent";
            if (this.a < 1) return !1;
            for (var e = "#" + l(this.r, this.g, this.b, !1), t = 0, i = Object.keys(f); t < i.length; t++) {
                var r = i[t];
                if (f[r] === e) return r;
            }
            return !1;
        }, e.prototype.toString = function(e) {
            var t = Boolean(e);
            e = e || this.format;
            var i = !1, r = this.a < 1 && this.a >= 0;
            return t || !r || !e.startsWith("hex") && "name" !== e ? ("rgb" === e && (i = this.toRgbString()), 
            "prgb" === e && (i = this.toPercentageRgbString()), "hex" !== e && "hex6" !== e || (i = this.toHexString()), 
            "hex3" === e && (i = this.toHexString(!0)), "hex4" === e && (i = this.toHex8String(!0)), 
            "hex8" === e && (i = this.toHex8String()), "name" === e && (i = this.toName()), 
            "hsl" === e && (i = this.toHslString()), "hsv" === e && (i = this.toHsvString()), 
            i || this.toHexString()) : "name" === e && 0 === this.a ? this.toName() : this.toRgbString();
        }, e.prototype.clone = function() {
            return new e(this.toString());
        }, e.prototype.lighten = function(t) {
            void 0 === t && (t = 10);
            var i = this.toHsl();
            return i.l += t / 100, i.l = n(i.l), new e(i);
        }, e.prototype.brighten = function(t) {
            void 0 === t && (t = 10);
            var i = this.toRgb();
            return i.r = Math.max(0, Math.min(255, i.r - Math.round(-t / 100 * 255))), i.g = Math.max(0, Math.min(255, i.g - Math.round(-t / 100 * 255))), 
            i.b = Math.max(0, Math.min(255, i.b - Math.round(-t / 100 * 255))), new e(i);
        }, e.prototype.darken = function(t) {
            void 0 === t && (t = 10);
            var i = this.toHsl();
            return i.l -= t / 100, i.l = n(i.l), new e(i);
        }, e.prototype.tint = function(e) {
            return void 0 === e && (e = 10), this.mix("white", e);
        }, e.prototype.shade = function(e) {
            return void 0 === e && (e = 10), this.mix("black", e);
        }, e.prototype.desaturate = function(t) {
            void 0 === t && (t = 10);
            var i = this.toHsl();
            return i.s -= t / 100, i.s = n(i.s), new e(i);
        }, e.prototype.saturate = function(t) {
            void 0 === t && (t = 10);
            var i = this.toHsl();
            return i.s += t / 100, i.s = n(i.s), new e(i);
        }, e.prototype.greyscale = function() {
            return this.desaturate(100);
        }, e.prototype.spin = function(t) {
            var i = this.toHsl(), r = (i.h + t) % 360;
            return i.h = r < 0 ? 360 + r : r, new e(i);
        }, e.prototype.mix = function(t, i) {
            void 0 === i && (i = 50);
            var r = this.toRgb(), n = new e(t).toRgb(), o = i / 100;
            return new e({
                r: (n.r - r.r) * o + r.r,
                g: (n.g - r.g) * o + r.g,
                b: (n.b - r.b) * o + r.b,
                a: (n.a - r.a) * o + r.a
            });
        }, e.prototype.analogous = function(t, i) {
            void 0 === t && (t = 6), void 0 === i && (i = 30);
            var r = this.toHsl(), n = 360 / i, o = [ this ];
            for (r.h = (r.h - (n * t >> 1) + 720) % 360; --t; ) r.h = (r.h + n) % 360, o.push(new e(r));
            return o;
        }, e.prototype.complement = function() {
            var t = this.toHsl();
            return t.h = (t.h + 180) % 360, new e(t);
        }, e.prototype.monochromatic = function(t) {
            void 0 === t && (t = 6);
            for (var i = this.toHsv(), r = i.h, n = i.s, o = i.v, a = [], s = 1 / t; t--; ) a.push(new e({
                h: r,
                s: n,
                v: o
            })), o = (o + s) % 1;
            return a;
        }, e.prototype.splitcomplement = function() {
            var t = this.toHsl(), i = t.h;
            return [ this, new e({
                h: (i + 72) % 360,
                s: t.s,
                l: t.l
            }), new e({
                h: (i + 216) % 360,
                s: t.s,
                l: t.l
            }) ];
        }, e.prototype.triad = function() {
            return this.polyad(3);
        }, e.prototype.tetrad = function() {
            return this.polyad(4);
        }, e.prototype.polyad = function(t) {
            for (var i = this.toHsl(), r = i.h, n = [ this ], o = 360 / t, a = 1; a < t; a++) n.push(new e({
                h: (r + a * o) % 360,
                s: i.s,
                l: i.l
            }));
            return n;
        }, e.prototype.equals = function(t) {
            return this.toRgbString() === new e(t).toRgbString();
        }, e;
    }();
    function O(e, t) {
        return void 0 === e && (e = ""), void 0 === t && (t = {}), new H(e, t);
    }
    function w(e, t) {
        var i = new H(e), r = new H(t);
        return (Math.max(i.getLuminance(), r.getLuminance()) + .05) / (Math.min(i.getLuminance(), r.getLuminance()) + .05);
    }
    function _(e, t, i) {
        void 0 === i && (i = {
            level: "AA",
            size: "small"
        });
        var r = w(e, t);
        switch ((i.level || "AA") + (i.size || "small")) {
          case "AAsmall":
          case "AAAlarge":
            return r >= 4.5;

          case "AAlarge":
            return r >= 3;

          case "AAAsmall":
            return r >= 7;

          default:
            return !1;
        }
    }
    function k(e, t, i) {
        void 0 === i && (i = {
            includeFallbackColors: !1,
            level: "AA",
            size: "small"
        });
        for (var r = null, n = 0, o = i.includeFallbackColors, a = i.level, s = i.size, c = 0, u = t; c < u.length; c++) {
            var l = u[c], h = w(e, l);
            h > n && (n = h, r = new H(l));
        }
        return _(e, r, {
            level: a,
            size: s
        }) || !o ? r : (i.includeFallbackColors = !1, k(e, [ "#fff", "#000" ], i));
    }
    function C(e, t) {
        var i = new H(e), r = "#" + h(i.r, i.g, i.b, i.a), n = r, o = i.gradientType ? "GradientType = 1, " : "";
        if (t) {
            var a = new H(t);
            n = "#" + h(a.r, a.g, a.b, a.a);
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + o + "startColorstr=" + r + ",endColorstr=" + n + ")";
    }
    function B(e, t) {
        var i = {
            r: a(e.r),
            g: a(e.g),
            b: a(e.b)
        };
        return void 0 !== e.a && (i.a = Number(e.a)), new H(i, t);
    }
    function x() {
        return new H({
            r: Math.random(),
            g: Math.random(),
            b: Math.random()
        });
    }
    function I(e) {
        if (void 0 === e && (e = {}), void 0 !== e.count && null !== e.count) {
            var t = e.count, i = [];
            for (e.count = void 0; t > i.length; ) e.count = null, e.seed && (e.seed += 1), 
            i.push(I(e));
            return e.count = t, i;
        }
        var r = function(e, t) {
            var i = j(function(e) {
                var t = parseInt(e, 10);
                if (!Number.isNaN(t) && t < 360 && t > 0) return [ t, t ];
                if ("string" == typeof e) {
                    var i = R.find(function(t) {
                        return t.name === e;
                    });
                    if (i) {
                        var r = M(i);
                        if (r.hueRange) return r.hueRange;
                    }
                    var n = new H(e);
                    if (n.isValid) {
                        var o = n.toHsv().h;
                        return [ o, o ];
                    }
                }
                return [ 0, 360 ];
            }(e), t);
            i < 0 && (i = 360 + i);
            return i;
        }(e.hue, e.seed), n = function(e, t) {
            if ("monochrome" === t.hue) return 0;
            if ("random" === t.luminosity) return j([ 0, 100 ], t.seed);
            var i = P(e).saturationRange, r = i[0], n = i[1];
            switch (t.luminosity) {
              case "bright":
                r = 55;
                break;

              case "dark":
                r = n - 10;
                break;

              case "light":
                n = 55;
            }
            return j([ r, n ], t.seed);
        }(r, e), o = {
            h: r,
            s: n,
            v: function(e, t, i) {
                var r = function(e, t) {
                    for (var i = P(e).lowerBounds, r = 0; r < i.length - 1; r++) {
                        var n = i[r][0], o = i[r][1], a = i[r + 1][0], s = i[r + 1][1];
                        if (t >= n && t <= a) {
                            var c = (s - o) / (a - n);
                            return c * t + (o - c * n);
                        }
                    }
                    return 0;
                }(e, t), n = 100;
                switch (i.luminosity) {
                  case "dark":
                    n = r + 20;
                    break;

                  case "light":
                    r = (n + r) / 2;
                    break;

                  case "random":
                    r = 0, n = 100;
                }
                return j([ r, n ], i.seed);
            }(r, n, e)
        };
        return void 0 !== e.alpha && (o.a = e.alpha), new H(o);
    }
    function P(e) {
        e >= 334 && e <= 360 && (e -= 360);
        for (var t = 0, i = R; t < i.length; t++) {
            var r = M(i[t]);
            if (r.hueRange && e >= r.hueRange[0] && e <= r.hueRange[1]) return r;
        }
        throw Error("Color not found");
    }
    function j(e, t) {
        if (void 0 === t) return Math.floor(e[0] + Math.random() * (e[1] + 1 - e[0]));
        var i = e[1] || 1, r = e[0] || 0, n = (t = (9301 * t + 49297) % 233280) / 233280;
        return Math.floor(r + n * (i - r));
    }
    function M(e) {
        var t = e.lowerBounds[0][0], i = e.lowerBounds[e.lowerBounds.length - 1][0], r = e.lowerBounds[e.lowerBounds.length - 1][1], n = e.lowerBounds[0][1];
        return {
            name: e.name,
            hueRange: e.hueRange,
            lowerBounds: e.lowerBounds,
            saturationRange: [ t, i ],
            brightnessRange: [ r, n ]
        };
    }
    var R = [ {
        name: "monochrome",
        hueRange: null,
        lowerBounds: [ [ 0, 0 ], [ 100, 0 ] ]
    }, {
        name: "red",
        hueRange: [ -26, 18 ],
        lowerBounds: [ [ 20, 100 ], [ 30, 92 ], [ 40, 89 ], [ 50, 85 ], [ 60, 78 ], [ 70, 70 ], [ 80, 60 ], [ 90, 55 ], [ 100, 50 ] ]
    }, {
        name: "orange",
        hueRange: [ 19, 46 ],
        lowerBounds: [ [ 20, 100 ], [ 30, 93 ], [ 40, 88 ], [ 50, 86 ], [ 60, 85 ], [ 70, 70 ], [ 100, 70 ] ]
    }, {
        name: "yellow",
        hueRange: [ 47, 62 ],
        lowerBounds: [ [ 25, 100 ], [ 40, 94 ], [ 50, 89 ], [ 60, 86 ], [ 70, 84 ], [ 80, 82 ], [ 90, 80 ], [ 100, 75 ] ]
    }, {
        name: "green",
        hueRange: [ 63, 178 ],
        lowerBounds: [ [ 30, 100 ], [ 40, 90 ], [ 50, 85 ], [ 60, 81 ], [ 70, 74 ], [ 80, 64 ], [ 90, 50 ], [ 100, 40 ] ]
    }, {
        name: "blue",
        hueRange: [ 179, 257 ],
        lowerBounds: [ [ 20, 100 ], [ 30, 86 ], [ 40, 80 ], [ 50, 74 ], [ 60, 60 ], [ 70, 52 ], [ 80, 44 ], [ 90, 39 ], [ 100, 35 ] ]
    }, {
        name: "purple",
        hueRange: [ 258, 282 ],
        lowerBounds: [ [ 20, 100 ], [ 30, 87 ], [ 40, 79 ], [ 50, 70 ], [ 60, 65 ], [ 70, 59 ], [ 80, 52 ], [ 90, 45 ], [ 100, 42 ] ]
    }, {
        name: "pink",
        hueRange: [ 283, 334 ],
        lowerBounds: [ [ 20, 100 ], [ 30, 90 ], [ 40, 86 ], [ 60, 84 ], [ 80, 80 ], [ 90, 75 ], [ 100, 73 ] ]
    } ];
    i.d(t, "TinyColor", function() {
        return H;
    }), i.d(t, "tinycolor", function() {
        return O;
    }), i.d(t, "names", function() {
        return f;
    }), i.d(t, "readability", function() {
        return w;
    }), i.d(t, "isReadable", function() {
        return _;
    }), i.d(t, "mostReadable", function() {
        return k;
    }), i.d(t, "toMsFilter", function() {
        return C;
    }), i.d(t, "fromRatio", function() {
        return B;
    }), i.d(t, "legacyRandom", function() {
        return x;
    }), i.d(t, "inputToRGB", function() {
        return g;
    }), i.d(t, "stringInputToObject", function() {
        return m;
    }), i.d(t, "isValidCSSUnit", function() {
        return E;
    }), i.d(t, "random", function() {
        return I;
    }), i.d(t, "bounds", function() {
        return R;
    });
    t.default = O;
} ]);

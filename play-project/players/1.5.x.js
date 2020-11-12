console.log("Webplayer v1.5.6 - 2020/10/15 (production)");

!function(t) {
    var e = {};
    function i(r) {
        if (e[r]) return e[r].exports;
        var n = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
    }
    i.m = t, i.c = e, i.d = function(t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        });
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var n in t) i.d(r, n, function(e) {
            return t[e];
        }.bind(null, n));
        return r;
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return i.d(e, "a", e), e;
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, i.p = "", i(i.s = 42);
}([ function(t, e, i) {
    "use strict";
    var r, n;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), function(t) {
        t[t.WaitTilTimestamp = 19] = "WaitTilTimestamp", t[t.WaitUntilInputIsDone = 20] = "WaitUntilInputIsDone", 
        t[t.None = 22] = "None", t[t.Move = 23] = "Move", t[t.Rotate = 24] = "Rotate", t[t.ChangeX = 27] = "ChangeX", 
        t[t.ChangeY = 28] = "ChangeY", t[t.Scale = 29] = "Scale", t[t.Clear = 30] = "Clear", 
        t[t.StrokeWidth = 31] = "StrokeWidth", t[t.StrokeColor = 32] = "StrokeColor", t[t.ChangeCostume = 33] = "ChangeCostume", 
        t[t.ChangeSpeed = 34] = "ChangeSpeed", t[t.Wait = 35] = "Wait", t[t.SetOpacity = 36] = "SetOpacity", 
        t[t.PenDown = 37] = "PenDown", t[t.PenUp = 38] = "PenUp", t[t.SetHeading = 39] = "SetHeading", 
        t[t.SetText = 40] = "SetText", t[t.SetPosition = 41] = "SetPosition", t[t.SendToBack = 42] = "SendToBack", 
        t[t.BringToFront = 43] = "BringToFront", t[t.ChangeVariable = 44] = "ChangeVariable", 
        t[t.SetVariable = 45] = "SetVariable", t[t.MoveWithTrail = 46] = "MoveWithTrail", 
        t[t.SetInvisibility = 47] = "SetInvisibility", t[t.Grow = 48] = "Grow", t[t.Shrink = 49] = "Shrink", 
        t[t.Flip = 50] = "Flip", t[t.SetSize = 51] = "SetSize", t[t.PlaySound = 52] = "PlaySound", 
        t[t.MakeAClone = 53] = "MakeAClone", t[t.SetColor = 54] = "SetColor", t[t.Destroy = 55] = "Destroy", 
        t[t.SetImage = 56] = "SetImage", t[t.SetWidthAndHeight = 57] = "SetWidthAndHeight", 
        t[t.SetZIndex = 58] = "SetZIndex", t[t.SetOriginXY = 59] = "SetOriginXY", t[t.SetCenterXY = 60] = "SetCenterXY", 
        t[t.WaitSeconds = 61] = "WaitSeconds", t[t.PlaySoundSeconds = 62] = "PlaySoundSeconds", 
        t[t.SaveInput = 63] = "SaveInput", t[t.SetTextToInput = 64] = "SetTextToInput", 
        t[t.LeaveATrail = 26] = "LeaveATrail", t[t.Repeat = 120] = "Repeat", t[t.RepeatForever = 121] = "RepeatForever", 
        t[t.CheckOnceIf = 122] = "CheckOnceIf", t[t.Ability = 123] = "Ability", t[t.CheckIfElse = 124] = "CheckIfElse", 
        t[t.ChangeScene = 125] = "ChangeScene", t[t.BroadcastMessage = 126] = "BroadcastMessage", 
        t[t.RequestSeeds = 127] = "RequestSeeds", t[t.Random = 233] = "Random", t[t.XPos = 234] = "XPos", 
        t[t.YPos = 235] = "YPos", t[t.Random110 = 236] = "Random110", t[t.Random1100 = 237] = "Random1100", 
        t[t.Random11000 = 238] = "Random11000", t[t.Variable = 239] = "Variable", t[t.ConditionalOperatorEquals = 1e3] = "ConditionalOperatorEquals", 
        t[t.ConditionalOperatorNotEquals = 1001] = "ConditionalOperatorNotEquals", t[t.ConditionalOperatorLessThan = 1002] = "ConditionalOperatorLessThan", 
        t[t.ConditionalOperatorGreaterThan = 1003] = "ConditionalOperatorGreaterThan", t[t.ConditionalOperatorAnd = 1004] = "ConditionalOperatorAnd", 
        t[t.ConditionalOperatorOr = 1005] = "ConditionalOperatorOr", t[t.ConditionalOperatorGreaterThanOrEqualTo = 1006] = "ConditionalOperatorGreaterThanOrEqualTo", 
        t[t.ConditionalOperatorLessThanOrEqualTo = 1007] = "ConditionalOperatorLessThanOrEqualTo", 
        t[t.ConditionalOperatorMatches = 1008] = "ConditionalOperatorMatches", t[t.HS_END_OF_CONDITIONAL_OPERATORS = 1009] = "HS_END_OF_CONDITIONAL_OPERATORS", 
        t[t.TraitRotation = 2e3] = "TraitRotation", t[t.TraitXPosition = 2001] = "TraitXPosition", 
        t[t.TraitYPosition = 2002] = "TraitYPosition", t[t.TraitInvisibility = 2003] = "TraitInvisibility", 
        t[t.TraitSize = 2004] = "TraitSize", t[t.TraitSpeed = 2005] = "TraitSpeed", t[t.TraitCloneIndex = 2006] = "TraitCloneIndex", 
        t[t.TraitTotalClones = 2007] = "TraitTotalClones", t[t.TraitWidth = 2008] = "TraitWidth", 
        t[t.TraitHeight = 2009] = "TraitHeight", t[t.TraitZIndex = 2010] = "TraitZIndex", 
        t[t.TraitOriginX = 2011] = "TraitOriginX", t[t.TraitOriginY = 2012] = "TraitOriginY", 
        t[t.TraitCenterX = 2013] = "TraitCenterX", t[t.TraitCenterY = 2014] = "TraitCenterY", 
        t[t.TraitText = 2015] = "TraitText", t[t.HS_END_OF_OBJECT_TRAITS = 2016] = "HS_END_OF_OBJECT_TRAITS", 
        t[t.TraitUsername = 2500] = "TraitUsername", t[t.TraitTime = 2501] = "TraitTime", 
        t[t.TraitYear = 2502] = "TraitYear", t[t.TraitMonth = 2503] = "TraitMonth", t[t.TraitDay = 2504] = "TraitDay", 
        t[t.TraitHour = 2505] = "TraitHour", t[t.TraitMinute = 2506] = "TraitMinute", t[t.TraitSecond = 2507] = "TraitSecond", 
        t[t.HS_END_OF_USER_TRAITS = 2508] = "HS_END_OF_USER_TRAITS", t[t.StageTraitWidth = 3e3] = "StageTraitWidth", 
        t[t.StageTraitHeight = 3001] = "StageTraitHeight", t[t.StageTraitTiltUp = 3002] = "StageTraitTiltUp", 
        t[t.StageTraitTiltDown = 3003] = "StageTraitTiltDown", t[t.StageTraitTiltLeft = 3004] = "StageTraitTiltLeft", 
        t[t.StageTraitTiltRight = 3005] = "StageTraitTiltRight", t[t.StageTraitLastTouchX = 3006] = "StageTraitLastTouchX", 
        t[t.StageTraitLastTouchY = 3007] = "StageTraitLastTouchY", t[t.StageTraitTotalObjects = 3008] = "StageTraitTotalObjects", 
        t[t.HS_END_OF_STAGE_TRAITS = 3009] = "HS_END_OF_STAGE_TRAITS", t[t.MathOperatorAdd = 4e3] = "MathOperatorAdd", 
        t[t.MathOperatorSubtract = 4001] = "MathOperatorSubtract", t[t.MathOperatorMultiply = 4002] = "MathOperatorMultiply", 
        t[t.MathOperatorDivide = 4003] = "MathOperatorDivide", t[t.MathOperatorRandom = 4004] = "MathOperatorRandom", 
        t[t.MathOperatorPower = 4005] = "MathOperatorPower", t[t.MathOperatorSquareRoot = 4006] = "MathOperatorSquareRoot", 
        t[t.MathOperatorSine = 4007] = "MathOperatorSine", t[t.MathOperatorCosine = 4008] = "MathOperatorCosine", 
        t[t.MathOperatorRound = 4009] = "MathOperatorRound", t[t.MathOperatorAbs = 4010] = "MathOperatorAbs", 
        t[t.MathOperatorModulo = 4011] = "MathOperatorModulo", t[t.MathOperatorTangent = 4012] = "MathOperatorTangent", 
        t[t.MathOperatorInverseSine = 4013] = "MathOperatorInverseSine", t[t.MathOperatorInverseCosine = 4014] = "MathOperatorInverseCosine", 
        t[t.MathOperatorInverseTangent = 4015] = "MathOperatorInverseTangent", t[t.MathOperatorMaximum = 4016] = "MathOperatorMaximum", 
        t[t.MathOperatorMinimum = 4017] = "MathOperatorMinimum", t[t.MathOperatorFloor = 4018] = "MathOperatorFloor", 
        t[t.MathOperatorCeiling = 4019] = "MathOperatorCeiling", t[t.HS_END_OF_MATH_OPERATORS = 4020] = "HS_END_OF_MATH_OPERATORS", 
        t[t.ColorOperatorRandom = 5e3] = "ColorOperatorRandom", t[t.ColorOperatorRGB = 5001] = "ColorOperatorRGB", 
        t[t.ColorOperatorHSB = 5002] = "ColorOperatorHSB", t[t.HS_END_OF_COLOR_OPERATORS = 5003] = "HS_END_OF_COLOR_OPERATORS", 
        t[t.Rule = 6e3] = "Rule", t[t.RulePreview = 6001] = "RulePreview", t[t.EventOperatorStart = 7e3] = "EventOperatorStart", 
        t[t.EventOperatorTap = 7001] = "EventOperatorTap", t[t.EventOperatorIsTouching = 7002] = "EventOperatorIsTouching", 
        t[t.EventOperatorHold = 7003] = "EventOperatorHold", t[t.EventOperatorTiltRight = 7004] = "EventOperatorTiltRight", 
        t[t.EventOperatorTiltLeft = 7005] = "EventOperatorTiltLeft", t[t.EventOperatorTiltUp = 7006] = "EventOperatorTiltUp", 
        t[t.EventOperatorTiltDown = 7007] = "EventOperatorTiltDown", t[t.EventOperatorLoudNoise = 7008] = "EventOperatorLoudNoise", 
        t[t.EventOperatorShake = 7009] = "EventOperatorShake", t[t.EventOperatorBump = 7010] = "EventOperatorBump", 
        t[t.EventOperatorSwipeRight = 7011] = "EventOperatorSwipeRight", t[t.EventOperatorSwipeLeft = 7012] = "EventOperatorSwipeLeft", 
        t[t.EventOperatorSwipeUp = 7013] = "EventOperatorSwipeUp", t[t.EventOperatorSwipeDown = 7014] = "EventOperatorSwipeDown", 
        t[t.EventOperatorEnterTheWorld = 7015] = "EventOperatorEnterTheWorld", t[t.EventOperatorTiltRightEditor = 7016] = "EventOperatorTiltRightEditor", 
        t[t.EventOperatorTiltLeftEditor = 7017] = "EventOperatorTiltLeftEditor", t[t.EventOperatorTiltUpEditor = 7018] = "EventOperatorTiltUpEditor", 
        t[t.EventOperatorTiltDownEditor = 7019] = "EventOperatorTiltDownEditor", t[t.EventOperatorNotPressed = 7020] = "EventOperatorNotPressed", 
        t[t.EventOperatorGamePlaying = 7021] = "EventOperatorGamePlaying", t[t.EventOperatorTouchEnds = 7022] = "EventOperatorTouchEnds", 
        t[t.EventOperatorHearMessage = 7023] = "EventOperatorHearMessage", t[t.EventOperatorMessageMatches = 7024] = "EventOperatorMessageMatches", 
        t[t.EventOperatorIsNotTouching = 7025] = "EventOperatorIsNotTouching", t[t.HS_END_OF_EVENT_OPERATORS = 7026] = "HS_END_OF_EVENT_OPERATORS", 
        t[t.Object = 8e3] = "Object", t[t.AnyObject = 8001] = "AnyObject", t[t.ScreenEdge = 8002] = "ScreenEdge", 
        t[t.Game = 8003] = "Game", t[t.Self = 8004] = "Self", t[t.OriginalObject = 8005] = "OriginalObject", 
        t[t.Local = 8006] = "Local", t[t.User = 8007] = "User", t[t.Product = 8008] = "Product", 
        t[t.HS_END_OF_EVENT_PARAMETER_BLOCKS = 8009] = "HS_END_OF_EVENT_PARAMETER_BLOCKS", 
        t[t.TextOperatorCharAtIndex = 9e3] = "TextOperatorCharAtIndex", t[t.TextOperatorCharsInRange = 9001] = "TextOperatorCharsInRange", 
        t[t.TextOperatorLength = 9002] = "TextOperatorLength", t[t.HS_END_OF_TEXT_OPERATOR_BLOCKS = 9003] = "HS_END_OF_TEXT_OPERATOR_BLOCKS";
    }(r = e.HSBlockType || (e.HSBlockType = {})), function(t) {
        t[t.HSEventOnStart = 1239] = "HSEventOnStart", t[t.HSEventTouchedObject = 1240] = "HSEventTouchedObject", 
        t[t.HSEventTapStage = 1241] = "HSEventTapStage", t[t.HSEventShake = 1242] = "HSEventShake", 
        t[t.HSEventTiltRight = 1243] = "HSEventTiltRight", t[t.HSEventTiltLeft = 1244] = "HSEventTiltLeft", 
        t[t.HSEventTiltDown = 1245] = "HSEventTiltDown", t[t.HSEventTiltUp = 1246] = "HSEventTiltUp", 
        t[t.HSEventLoudNoise = 1247] = "HSEventLoudNoise", t[t.HSEventCollision = 1248] = "HSEventCollision", 
        t[t.HSEventHeldObject = 1249] = "HSEventHeldObject", t[t.HSEventEnteredWorld = 1250] = "HSEventEnteredWorld";
    }(n = e.HSEventType || (e.HSEventType = {})), e.blockTypeForLegacyEventType = function(t) {
        switch (t) {
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
}, function(t, e, i) {
    "use strict";
    function r() {
        return e.iOSApp || !!window.HS_IS_IOS_APP;
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.emoji = window.emoji, e.emoji.basePath = "https://d2j12ek52gvmx9.cloudfront.net/emojis", 
    e.hs_random_id = function() {
        return (1e7 * Math.random()).toString();
    }, e.iOS = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent), e.iOSApp = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), 
    e.isIOSApp = r;
    var n = function() {
        function t() {}
        return t.forceIOSApp = function(t) {
            e.iOSApp = t;
        }, t.initUserVariables = function(e, i) {
            r() || 0 === e.length || 0 === i.length || (t.userVarID = t.userVarPrefix + e + "_" + i, 
            t.initialUserVariables = JSON.parse(localStorage.getItem(t.userVarID) || "{}"));
        }, t.storeUserVar = function(e, i) {
            r() || (t.initialUserVariables[e] = i, localStorage.setItem(t.userVarID, JSON.stringify(t.initialUserVariables)));
        }, t.sendToApp = function() {
            for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
            t.instance.sendToApp.apply(t.instance, e);
        }, t.addResetCallback = function(e, i) {
            t.resetCallback[e] = i;
        }, t.prototype.sendToApp = function(t, e, i) {
            var r;
            void 0 === i && (i = "hopscotch");
            var n = window.webkit;
            n && n.messageHandlers && n.messageHandlers[i].postMessage(((r = {})[t] = e, r));
        }, t.reset = function() {
            for (var e in t.appCallbacks = {}, t.resetCallback) t.resetCallback.hasOwnProperty(e) && t.resetCallback[e]();
        }, t.readFromAppOnce = function(e, i) {
            t.appCallbacks[e] = i;
        }, t.readFromAppEternal = function(e, i) {
            t.eternalCallbacks.push(e), t.appCallbacks[e] = i;
        }, t.executeCallback = function(e, i) {
            t.appCallbacks[e] && (t.appCallbacks[e](i), -1 === t.eternalCallbacks.indexOf(e) && delete t.appCallbacks[e]);
        }, t.instance = new t(), t.isRunning = !0, t.initialUserVariables = {}, t.userVarPrefix = "user_var_", 
        t.eternalCallbacks = [], t.appCallbacks = {}, t.resetCallback = {}, t;
    }();
    function o(t) {
        return null != t && "" !== t && (/[\uD800-\uDBFF\uDC00-\uDFFF]/.test(t) || RegExp("" + e.emoji.regex.source).test(t));
    }
    function a(t) {
        return null != t && "" !== t && RegExp("^(" + e.emoji.regex.source + ")+$").test(t);
    }
    e.HSApp = n, e.hasEmoji = o, e.onlyEmoji = a;
    var s = 0;
    function c(t, i) {
        if (void 0 === i && (i = JSON.stringify(t)), !e.appRequestCache.get(i)) {
            var r = s++;
            e.appRequestCache.set(i, new Promise(function(i) {
                e.appRequestCallbacks[r] = i, window.webkit.messageHandlers.renderer.postMessage(Object.assign({}, t, {
                    replyTo: "appRequestCallbacks[" + r + "]"
                }));
            }).then(function(t) {
                return delete e.appRequestCallbacks[r], t;
            }));
        }
        return e.appRequestCache.get(i);
    }
    function u() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        n.sendToApp("log", Array.prototype.join.call(arguments, " "));
    }
    function h(t, e, i) {
        var r = Math.max(e, t);
        return Math.min(r, i);
    }
    function l(t) {
        return t.reduce(function(t, e) {
            return t + e;
        }, 0) / t.length;
    }
    function p(t) {
        var e = l(t);
        return t.reduce(function(t, i) {
            return t + Math.pow(i - e, 2);
        }, 0) / t.length;
    }
    function d(t, e) {
        for (var i = t.length - 1; i >= 0; i--) if (e(t[i], i, t)) return t[i];
    }
    e.appRequestCallbacks = {}, e.appRequestCache = new Map(), e.requestTextureFromApp = c, 
    e.log = u, e.clamp = h, e.mean = l, e.variance = p, e.findLast = d;
    var S, f, g, y = [], b = 0;
    function v() {
        b = performance.now();
    }
    function m() {
        var t = performance.now();
        if (y.length >= 100) {
            for (var e = 0, i = 0; i < y.length; i++) e += y[i];
            var r = document.getElementById("time").innerText;
            r.length > 130 && (r = r.substring(50, 130));
            var n = Math.round(e / y.length * 1e3) / 1e3;
            document.getElementById("time").innerText = r + " " + n + "ms", y = [];
        }
        var o = t - b;
        y.push(o);
    }
    function T(t, e) {
        return Math.abs(t) >= Math.abs(e) ? S.horizontal : S.vertical;
    }
    function H(t, e) {
        return Math.abs(t) < e ? f.none : t > 0 ? f.positive : f.negative;
    }
    function O(t, e, i) {
        var r, n = T(t, e);
        switch (n) {
          case S.horizontal:
            r = H(t, i);
            break;

          case S.vertical:
            r = H(e, i);
        }
        return E(r, n);
    }
    function E(t, e) {
        return t === f.positive && e === S.horizontal ? g.right : t === f.positive && e === S.vertical ? g.up : t === f.negative && e === S.horizontal ? g.left : t === f.negative && e === S.vertical ? g.down : null;
    }
    function w() {}
    function _(t) {
        var e = new Image();
        return t.startsWith("data:") || (e.crossOrigin = "Anonymous"), new Promise(function(i, r) {
            e.onload = function() {
                return i(e);
            }, e.onerror = r, e.src = t.replace(/-?200d/g, "");
        });
    }
    function k(t) {
        return t * Math.PI / 180;
    }
    function B(t) {
        return t / Math.PI * 180;
    }
    e.benchmarkStart = v, e.benchmarkEnd = m, function(t) {
        t[t.horizontal = 0] = "horizontal", t[t.vertical = 1] = "vertical";
    }(S = e.HSPlane || (e.HSPlane = {})), function(t) {
        t[t.positive = 0] = "positive", t[t.negative = 1] = "negative", t[t.none = 2] = "none";
    }(f = e.HSMagnitude || (e.HSMagnitude = {})), function(t) {
        t[t.up = 0] = "up", t[t.down = 1] = "down", t[t.left = 2] = "left", t[t.right = 3] = "right";
    }(g = e.HSDirection || (e.HSDirection = {})), e.hs_plane = T, e.hs_magnitude = H, 
    e.hs_direction = O, e.hs_directionForMagnitudeAndPlane = E, e.exitFullscreen = w, 
    e.getImageFromUri = _, e.degreesToRadians = k, e.radiansToDegrees = B, Array.prototype.remove = function(t) {
        var e = this.indexOf(t);
        void 0 !== e && this.splice(e, 1);
    }, e.checkMatches = function(t, e) {
        return new RegExp(e, "gi").test(t);
    }, window.isIOSApp = r, window.HSPlane = S, window.HSMagnitude = f, window.HSDirection = g, 
    window.hasEmoji = o, window.onlyEmoji = a, window.requestTextureFromApp = c, window.log = u, 
    window.clamp = h, window.mean = l, window.variance = p, window.findLast = d, window.benchmarkStart = v, 
    window.benchmarkEnd = m, window.hs_plane = T, window.hs_magnitude = H, window.hs_direction = O, 
    window.hs_directionForMagnitudeAndPlane = E, window.exitFullscreen = w, window.getImageFromUri = _, 
    window.degreesToRadians = k, window.radiansToDegrees = B, window.HSApp = n, window.appRequestCallbacks = e.appRequestCallbacks;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r, n = i(20), o = i(4), a = i(11), s = i(12), c = i(10), u = i(59), h = i(16), l = i(0);
    e.VERSION_KEY = "version", e.CUSTOM_OBJECTS_KEY = "customObjects", e.SCALE_KEY = "baseObjectScale", 
    e.FONT_SIZE_KEY = "fontSize", e.STAGE_SIZE = "stageSize", function(t) {
        t[t.V13 = 13] = "V13", t[t.V14 = 14] = "V14", t[t.V15 = 15] = "V15", t[t.V16 = 16] = "V16", 
        t[t.V17 = 17] = "V17", t[t.V18 = 18] = "V18", t[t.V19 = 19] = "V19", t[t.V24 = 24] = "V24", 
        t[t.WEBPLAYER_IN_APP = 25] = "WEBPLAYER_IN_APP", t[t.ADD_SELF = 26] = "ADD_SELF", 
        t[t.CUSTOM_WHENS = 28] = "CUSTOM_WHENS";
    }(r = e.HSProjectVersion || (e.HSProjectVersion = {}));
    var p = function() {
        function t() {
            this.projectObjects = {}, this.version = r.CUSTOM_WHENS, this.baseObjectScale = 1, 
            this.fontSize = 80, this._hasAccelerometerEvent = null, this._hasAccelerometerTrait = null;
        }
        return t.prototype.findAllForClassName = function(t) {
            return this.projectObjects[t] ? this.projectObjects[t] : [];
        }, t.prototype.findWithObjectID = function(t, e) {
            return this.findAllForClassName(t).find(function(t) {
                return t.objectID === e;
            });
        }, t.prototype.insertObject = function(t) {
            var e = Object.getPrototypeOf(t).constructor.key;
            this.projectObjects[e] ? this.projectObjects[e].push(t) : this.projectObjects[e] = [ t ];
        }, t.prototype.deleteObject = function(t) {
            var e = Object.getPrototypeOf(t).constructor.key, i = this.projectObjects[e].indexOf(t);
            i > -1 && this.projectObjects[e].splice(i, 1);
        }, t.prototype.parseJSON = function(i) {
            if (void 0 === i && (i = {}), this.version = i[e.VERSION_KEY] || r.V14, this.baseObjectScale = i[e.SCALE_KEY] || 1, 
            this.fontSize = i[e.FONT_SIZE_KEY] || 80, n.HSEmojiTextNode.WIDTH = this.fontSize / 2, 
            n.HSEmojiTextNode.HEIGHT = this.fontSize / 2, n.HSTextNode.LINE_HEIGHT = this.fontSize < 80 ? 49 : 55, 
            this.version >= r.V19) {
                var a = i[e.STAGE_SIZE];
                a && (o.HSStageScene.stageWidth = a.width, o.HSStageScene.stageHeight = a.height, 
                n.HSTextNode.MAX_LINE_WIDTH = Math.min(n.HSTextNode.MAX_LINE_WIDTH, 512), n.HSTextNode.MAX_LINE_WIDTH = Math.min(n.HSTextNode.MAX_LINE_WIDTH, a.width));
            }
            Array.isArray(i[e.CUSTOM_OBJECTS_KEY]) && i[e.CUSTOM_OBJECTS_KEY].forEach(function(e) {
                var i = new u.HSCustomObject(e.fileName, e.size.width, e.size.height);
                t.customObjectMap.set(e.id, i);
            });
        }, t.prototype.allSoundNames = function() {
            for (var t = this.findAllForClassName(s.HSParameter.key), e = [], i = 0; i < t.length; i++) {
                var r = t[i];
				//AE_MOD Load multiple sounds
				if (r.type === h.HSParameterType.Sound && -1 === e.indexOf(r.value)) {
					var isCustom = (!/^((low-|high)?[a-zA-Z](sharp|flat)?|clickPlayable|alert|car|chaChing|check|clang|crash|dash|doorbell|drip|fail|footsteps|laser|pop|schoolBell|spring|vibrate|trophy|aliens|bubbles|crickets|meow|rain|roar|tweet|wind|woof|ahhh|cheer|eating|heartbeat|laugh|news|talking|bass|chord|clap|gong|snare)$/.test(r.value));
					e.push(((isCustom) ? "custom/":"") + r.value);
					if (!isCustom && !!getPref && !getPref("old_sounds") && /^(low-|high)?[a-gA-G](sharp|flat)?$/.test(r.value)) {
						e.push("new/" + r.value, "guitar/" + r.value, "8-bit/" + r.value);
					}
				}
            }
            return e;
        }, t.prototype.hasAccelerometerEvent = function() {
            if (null != this._hasAccelerometerEvent) return this._hasAccelerometerEvent;
            for (var t = this.findAllForClassName(a.HSRule.key), e = 0; e < t.length; e++) switch (t[e].eventType()) {
              case l.HSBlockType.EventOperatorTiltUp:
              case l.HSBlockType.EventOperatorTiltDown:
              case l.HSBlockType.EventOperatorTiltLeft:
              case l.HSBlockType.EventOperatorTiltRight:
              case l.HSBlockType.EventOperatorShake:
                return this._hasAccelerometerEvent = !0;
            }
            return !1;
        }, t.prototype.hasAccelerometerTrait = function() {
            if (null != this._hasAccelerometerTrait) return this._hasAccelerometerTrait;
            for (var t = this.findAllForClassName(c.HSParameterBlock.key), e = 0; e < t.length; e++) switch (t[e].type) {
              case l.HSBlockType.StageTraitTiltUp:
              case l.HSBlockType.StageTraitTiltDown:
              case l.HSBlockType.StageTraitTiltLeft:
              case l.HSBlockType.StageTraitTiltRight:
                return this._hasAccelerometerEvent = !0;
            }
            return !1;
        }, t.customObjectMap = new Map(), t;
    }();
    e.HSProjectContext = p, window.HSProjectVersion = r, window.HSProjectContext = p, 
    window.VERSION_KEY = e.VERSION_KEY, window.CUSTOM_OBJECTS_KEY = e.CUSTOM_OBJECTS_KEY, 
    window.SCALE_KEY = e.SCALE_KEY, window.FONT_SIZE_KEY = e.FONT_SIZE_KEY, window.STAGE_SIZE = e.STAGE_SIZE;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(65), n = function() {
        function t() {}
        return t.textColor = function() {
            return t.rgbTextColor;
        }, t.randomColor = function() {
            var e = t.RGBAColors.length, i = Math.floor(Math.random() * (e - 1));
            return t.RGBAColors[i];
        }, t.rgb = function(t, e, i) {
            return "rgb(" + Math.round(t) + ", " + Math.round(e) + ", " + Math.round(i) + ")";
        }, t.hexColor = function(t) {
            return new r.TinyColor(t).toHex();
        }, t.hexToTint = function(e) {
            return void 0 === this._colorMap.get(e) && this._colorMap.set(e, parseInt(t.hexColor(e), 16)), 
            this._colorMap.get(e);
        }, t.hsb = function(e, i, r) {
            return t.convertHSBStringToRGBAString("HSB(" + e + ", " + i + "%, " + r + "%)");
        }, t.rgbStringFromHSBString = function(e) {
            var i = t.hsbRGBAColorMaps[e];
            return i || (i = t.convertHSBStringToRGBAString(e)), i;
        }, t.hsbStringFromRgbString = function(t) {
            var e = new r.TinyColor(t).toHsv();
            return "HSB(" + Math.round(e.h) + "," + Math.round(100 * e.s) + "," + Math.round(100 * e.v) + ")";
        }, t.rgbStringFromNumericColor = function(e) {
            var i = parseFloat(e);
            if (!isNaN(i)) {
                var r = Math.abs(Math.round(i) % t.RGBAColors.length);
                return t.RGBAColors[r];
            }
            return null;
        }, t.convertHSBStringToTinyColor = function(t) {
            var e = t.replace("B", "V");
            return new r.TinyColor(e);
        }, t.convertHSBStringToRGBAString = function(t) {
            return this.convertHSBStringToTinyColor(t).toRgbString();
        }, t.RGBAColors = [ "rgb(100, 48, 112)", "rgb(134, 77, 209)", "rgb(168, 177, 255)", "rgb(215, 163, 227)", "rgb(255, 179, 207)", "rgb(232, 84, 96)", "rgb(214, 24, 100)", "rgb(212, 8, 29)", "rgb(255, 119, 0)", "rgb(250, 204, 0)", "rgb(255, 233, 38)", "rgb(159, 245, 165)", "rgb(134, 196, 63)", "rgb(64, 143, 50)", "rgb(86, 214, 186)", "rgb(140, 219, 255)", "rgb(10, 169, 209)", "rgb(39, 138, 219)", "rgb(29, 60, 117)", "rgb(77, 77, 77)", "rgb(51, 41, 50)", "rgb(122, 67, 29)", "rgb(204, 204, 204)", "rgb(255, 255, 255)", "rgb(250,220,186)", "rgb(225,187,146)", "rgb(192,143,101)", "rgb(156,100,57)", "rgb(89,69,56)" ], 
        t.hsbRGBAColorMaps = {
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
        }, t.rgbWhiteColor = "rgb(255, 255, 255)", t.rgbTextColor = "rgb(0,0,0)", t._colorMap = new Map(), 
        t;
    }();
    e.HSColor = n, window.HSColor = n;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(1), a = i(22), s = i(5), c = i(54), u = i(56), h = i(0), l = function(t) {
        function e(i) {
            var r = t.call(this) || this;
            return r.scene = i, r.renderList = new u.HSLinkedList(), r.pointers = [], r.currentlyPressedObjects = [], 
            r.tickCount = 0, r.nextEvents = new Set(), r.currentEvents = new Set(), r.container = new PIXI.Container(), 
            i.objects.forEach(function(t) {
                t.rebuildStageObject(), r.addStageObject(t.stageObject());
            }), r.lastTouchX = e.stageWidth / 2, r.lastTouchY = e.stageHeight / 2, r.name = i.name, 
            r;
        }
        return n(e, t), e.prototype.queueEventMessage = function(t) {
            this.nextEvents.add(t);
        }, e.prototype.swapEventMessageQueue = function() {
            var t = this.currentEvents;
            t.clear(), this.currentEvents = this.nextEvents, this.nextEvents = t;
        }, e.prototype.addStageObject = function(t) {
            t.bringToFrontFunction = this.bringToFront.bind(this), t.sendToBackFunction = this.sendToBack.bind(this), 
            t.cloneFunction = this.clone.bind(this), t.destroyFunction = this.addToDestroyQueue.bind(this), 
            t.broadcastMessageFunction = this.queueEventMessage.bind(this), this.stageObjects.push(t), 
            this.renderList.push(t);
        }, e.prototype.animationTick = function(t) {
            var i = this;
            e.dirtySort && (e.dirtySort = !1, this.sortRenderList()), this.container.removeChildren(), 
            this.renderList.forEach(function(t) {
                t.update(), t.view.sprite && i.container.addChild(t.view.sprite);
            }), this.collisionTest(t), this.activateRules(), this.executeRules(), this.cleanDestroyQueue(), 
            this.swapEventMessageQueue(), this.tickCount++;
        }, e.prototype.collisionTest = function(t) {
            if (t) {
                t.tick(this.renderList), t.numberOfPixelCollisions = 0;
                var e = this.allPossibleCollisionPairs();
                e.forEach(function(e) {
                    return e.update(t);
                }), this.currentCollisions = e.filter(function(t) {
                    return t.isTouching();
                }), this.bumpingCollisions = this.currentCollisions.filter(function(t) {
                    return t.isBumping();
                });
            }
        }, e.prototype.activateRules = function() {
            var t = this;
            this.touchIsDown && this.currentlyPressedObjects.forEach(function(e) {
                t.activateAllRulesForEventWithObjects(h.HSBlockType.EventOperatorHold, e);
            }), this.scene.context.hasAccelerometerEvent() && (this.activateTiltRules(), this.activateShakeRules()), 
            this.activateAllNotPressedRules(), this.activateEventMessageRules(), this.activateCurrentCollisionRules();
        }, e.prototype.activateEventMessageRules = function() {
            var t = this;
            this.allStageRulesForEventType(h.HSBlockType.EventOperatorHearMessage).forEach(function(e) {
                t.currentEvents.forEach(e.activateIfEqualsEventMessage);
            }), this.allStageRulesForEventType(h.HSBlockType.EventOperatorMessageMatches).forEach(function(e) {
                t.currentEvents.forEach(e.activateIfMatchesEventMessage);
            });
        }, e.prototype.activateAllNotPressedRules = function() {
            var t = this;
            this.allStageRulesForEventType(h.HSBlockType.EventOperatorNotPressed).forEach(function(e) {
                e.activateIfNotPressed(t);
            });
        }, e.prototype.executeRules = function() {
            this.executeAllActiveRules();
        }, e.prototype.receiveClickEvent = function(t, e) {
            this.setTouchPosition(t, e);
            var i = t.point, r = i.x, n = i.y, o = this.stageObjectsToReceiveTouchInRange(r, n, e);
            this.activateAllRulesForEventWithObjects(h.HSBlockType.EventOperatorTap, o), this.activateAllRulesForEventWithObjects(h.HSBlockType.EventOperatorHold, o);
            var a = this.indexOfPointer(t.id);
            this.currentlyPressedObjects[a] = o;
        }, e.prototype.addPointer = function(t) {
            var e = this.indexOfPointer(t.id);
            if (-1 !== e) return this.pointers[e];
            var i = this.getPointerData(t);
            return this.pointers.push(i), i;
        }, e.prototype.receiveTouchDownEvent = function(t, e) {
            this.setTouchPosition(t, e);
        }, e.prototype.receiveTouchMoveEvent = function(t, e) {
            this.touchIsDown && (this.setTouchPosition(t, e), this.calculateSwipeEvents(this.getPointerFrom(t.id), e));
        }, e.prototype.receiveTouchUpEvent = function(t, e) {
            var i = this.indexOfPointer(t.id);
            this.removePointer(t.id), this.currentlyPressedObjects.splice(i, 1), this.activateAllRulesForEventType(h.HSBlockType.EventOperatorTouchEnds);
        }, e.prototype.getPointerData = function(t) {
            var e = t.point, i = e.x, r = e.y;
            return {
                id: t.id,
                downX: i,
                downY: r,
                lastX: i,
                lastY: r
            };
        }, e.prototype.removePointer = function(t) {
            var e = this.indexOfPointer(t);
            -1 !== e && this.pointers.splice(e, 1);
        }, e.prototype.indexOfPointer = function(t) {
            for (var e = 0; e < this.pointers.length; e++) if (this.pointers[e].id === t) return e;
            return -1;
        }, e.prototype.getPointerFrom = function(t) {
            var e = this.indexOfPointer(t);
            return -1 !== e ? this.pointers[e] : null;
        }, e.prototype.calculateSwipeEvents = function(t, e) {
            var i = this.horizontalSwipeForPoint(t), r = this.verticalSwipeForPoint(t), n = this.directionForSwipe(i, r);
            if (n) {
                var o = this.stageObjectsToReceiveTouchInRange(t.downX, t.downY, e);
                this.activateAllRulesForEventWithObjects(n, o), t.downX = null, t.downY = null;
            }
        }, e.prototype.directionForSwipe = function(t, e) {
            switch (o.hs_direction(t, e, 10)) {
              case o.HSDirection.up:
                return h.HSBlockType.EventOperatorSwipeUp;

              case o.HSDirection.down:
                return h.HSBlockType.EventOperatorSwipeDown;

              case o.HSDirection.left:
                return h.HSBlockType.EventOperatorSwipeLeft;

              case o.HSDirection.right:
                return h.HSBlockType.EventOperatorSwipeRight;

              default:
                return null;
            }
        }, e.prototype.horizontalSwipeForPoint = function(t) {
            return t.downX ? t.lastX - t.downX : 0;
        }, e.prototype.verticalSwipeForPoint = function(t) {
            return t.downY ? t.lastY - t.downY : 0;
        }, e.prototype.setTouchPosition = function(t, e) {
            var i = this.getPointerFrom(t.id) || this.addPointer(t), r = t.point, n = r.x, o = r.y;
            return i.lastX = n, i.lastY = o, this.isTheLastPointer(t.id) && (this.lastTouchX = n, 
            this.lastTouchY = o), i;
        }, e.prototype.isTheLastPointer = function(t) {
            return this.indexOfPointer(t) === this.pointers.length - 1;
        }, e.prototype.firstStageObjectWithinRange = function(t, e, i) {
            return this.renderList.findLast(function(r) {
                return i.hitTest(r, t, e);
            });
        }, e.prototype.stageObjectsToReceiveTouchInRange = function(t, e, i) {
            var r = this.firstStageObjectWithinRange(t, e, i);
            return r ? [ r, null ] : [ null ];
        }, e.prototype.bringToFront = function(t) {
            this.renderList.remove(t), this.renderList.push(t);
        }, e.prototype.sendToBack = function(t) {
            this.renderList.remove(t), this.renderList.unshift(t);
        }, e.prototype.sortRenderList = function() {
            this.renderList.setNewOrder(function(t) {
                var e = [];
                return t.forEach(function(t) {
                    var i = t.zIndex || 0;
                    e[i] || (e[i] = []), e[i].push(t);
                }), (e = e.filter(function(t) {
                    return !!t;
                })).forEach(function(t) {
                    t.sort(function(t, e) {
                        return t.createOrder - e.createOrder;
                    });
                }), e.reduce(function(t, e) {
                    return t.concat(e);
                }, []);
            });
        }, e.prototype.break = function() {
            this.stageObjects.forEach(function(t) {
                return t.break();
            });
        }, e.prototype.destroy = function(e) {
            t.prototype.destroy.call(this, e), this.renderList.remove(e), this.scene.context.findWithObjectID(s.HSObject.key, e.objectID).removeStageObject(e);
        }, e.prototype.clone = function(t, i) {
            if (void 0 === i && (i = 1), !(this.stageObjects.length >= e.MAX_CLONES)) {
                i = Math.min(e.MAX_CLONES - this.stageObjects.length, i);
                for (var r = this.scene.context, n = r.findWithObjectID(s.HSObject.key, t.objectID), o = 0; o < i; o++) {
                    var a = t.deepCopy(r.version, n);
                    a.creationTick = this.tickCount, n.addStageObject(a), a.relatedCollisionRules = t.relatedCollisionRules, 
                    this.addStageObject(a), this.cacheRulesForStageObject(a), this.addCollisionPairsForStageObject(a), 
                    a.activateAllStageRulesForEventType(h.HSBlockType.EventOperatorEnterTheWorld);
                }
            }
        }, e.prototype.activateTiltRules = function() {
            var t;
            switch (a.HSAccelerometerManager.tiltDirection()) {
              case o.HSDirection.up:
                t = h.HSBlockType.EventOperatorTiltUp;
                break;

              case o.HSDirection.down:
                t = h.HSBlockType.EventOperatorTiltDown;
                break;

              case o.HSDirection.left:
                t = h.HSBlockType.EventOperatorTiltLeft;
                break;

              case o.HSDirection.right:
                t = h.HSBlockType.EventOperatorTiltRight;
                break;

              default:
                t = h.HSBlockType.None;
            }
            this.activateAllRulesForEventType(t);
        }, e.prototype.activateShakeRules = function() {
            a.HSAccelerometerManager.isShaking() && this.activateAllRulesForEventType(h.HSBlockType.EventOperatorShake);
        }, Object.defineProperty(e.prototype, "touchIsDown", {
            get: function() {
                return 0 !== this.pointers.length;
            },
            enumerable: !0,
            configurable: !0
        }), e.dirtySort = !1, e.promptsToExecute = [], e.stageHeight = 768, e.stageWidth = 1024, 
        e.MAX_CLONES = 4096, e;
    }(c.HSRuleActivator);
    e.HSStageScene = l, window.HSStageScene = l;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(7), a = i(2), s = i(1), c = i(23), u = i(27), h = i(6);
    e.OBJECT_ID_KEY = "objectID", e.X_POSITION_KEY = "xPosition", e.Y_POSITION_KEY = "yPosition", 
    e.TEXT_KEY = "text", e.TYPE_KEY = "type", e.IMAGE_ID_KEY = "customObjectID";
    var l = function(t) {
        function i() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.rules = [], e.heading = 0, e.customObject = null, e.willChangeCostume = !1, 
            e._stageObjects = [], e.mostRecentCloneCache = new Map(), e;
        }
        return n(i, t), i.prototype.stageObject = function(t) {
            return this._stageObjects.length || this.rebuildStageObject(), t && t.objectID === this.objectID ? t : t && null != t.creationTick ? this.mostRecentCloneBeforeTimestamp(t.creationTick) : this.context.version < a.HSProjectVersion.ADD_SELF ? this.mostRecentClone() : this.originalStageObject();
        }, i.prototype.rebuildStageObject = function() {
            var t = new c.HSStageObject(this.x, this.y, this.text, this.type, this.context.baseObjectScale, this.context.fontSize, this.objectID, this.fileName(), this.willChangeCostume, this.width, this.height);
            this.latestCloneIndex = 0, t.stageRules = this.rules.reduce(function(e, i) {
                return i ? e.concat(i.stageRules(t)) : e;
            }, []), this._stageObjects = [ t ], this.mostRecentCloneCache = new Map();
        }, i.prototype.parseJSON = function(t) {
            void 0 === t && (t = {}), this.x = parseFloat(t[e.X_POSITION_KEY]), this.y = parseFloat(t[e.Y_POSITION_KEY]), 
            this.text = t[e.TEXT_KEY], this.type = t[e.TYPE_KEY], this.width = parseFloat(t.width), 
            this.height = parseFloat(t.height), this.objectID = t[e.OBJECT_ID_KEY], this.customObject = a.HSProjectContext.customObjectMap.get(t[e.IMAGE_ID_KEY]), 
            this.customObject && u.HSImageTextureFactory.instance.prefetchImage(this.customObject);
        }, i.prototype.fileName = function() {
            if (this.customObject) return this.customObject.fileName;
        }, i.prototype.addRule = function(t) {
            this.rules.push(t);
        }, i.prototype.allStageObjects = function() {
            return this._stageObjects;
        }, i.prototype.addStageObject = function(t) {
            this.latestCloneIndex++, this.allStageObjects().push(t), t.cloneIndex = this.latestCloneIndex;
        }, i.prototype.removeStageObject = function(t) {
            this._stageObjects.remove(t);
        }, i.prototype.mostRecentClone = function() {
            var t = this.allStageObjects();
            return t[t.length - 1];
        }, i.prototype.originalStageObject = function() {
            return this.allStageObjects()[0];
        }, i.prototype.mostRecentCloneBeforeTimestamp = function(t) {
            return this.mostRecentCloneCache.has(t) || this.mostRecentCloneCache.set(t, s.findLast(this.allStageObjects(), function(e) {
                return e.creationTick <= t;
            })), this.mostRecentCloneCache.get(t);
        }, i.prototype.canChangeCostume = function() {
            return this.type !== h.HSObjectType.text && (!h.hsIsShapeType(this.type) && this.type <= h.HSObjectType.HS_NUMBER_OF_OBJECTS);
        }, i.key = "HSObject", i;
    }(o.HSManagedObject);
    e.HSObject = l, window.HSObject = l;
}, function(t, e, i) {
    "use strict";
    var r;
    function n(t) {
        return t >= r.roundedSquareFullSize && t < r.HS_END_OF_FULL_SIZE_SHAPES;
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), function(t) {
        t[t.monkey = 0] = "monkey", t[t.text = 1] = "text", t[t.octopus = 2] = "octopus", 
        t[t.gorilla = 3] = "gorilla", t[t.cupcake = 4] = "cupcake", t[t.bear = 5] = "bear", 
        t[t.dino = 6] = "dino", t[t.frog = 7] = "frog", t[t.greenman = 8] = "greenman", 
        t[t.mustache = 9] = "mustache", t[t.spacepod = 10] = "spacepod", t[t.zombieBear = 11] = "zombieBear", 
        t[t.ghoulopus = 12] = "ghoulopus", t[t.bats = 13] = "bats", t[t.frankenrilla = 14] = "frankenrilla", 
        t[t.jodyWitch = 15] = "jodyWitch", t[t.cauldron = 16] = "cauldron", t[t.pumpkin = 17] = "pumpkin", 
        t[t.broom = 18] = "broom", t[t.lantern = 19] = "lantern", t[t.parrotFlying = 20] = "parrotFlying", 
        t[t.mandrill = 21] = "mandrill", t[t.mosquito = 22] = "mosquito", t[t.missChief = 23] = "missChief", 
        t[t.venus = 24] = "venus", t[t.jeepers = 25] = "jeepers", t[t.banyan = 26] = "banyan", 
        t[t.stargirl = 27] = "stargirl", t[t.astro = 28] = "astro", t[t.chillanna = 29] = "chillanna", 
        t[t.robo = 30] = "robo", t[t.raccoon = 31] = "raccoon", t[t.bird = 32] = "bird", 
        t[t.HS_END_OF_CHARACTERS = 33] = "HS_END_OF_CHARACTERS", t[t.square = 34] = "square", 
        t[t.circle = 35] = "circle", t[t.hexagon = 36] = "hexagon", t[t.triangle = 37] = "triangle", 
        t[t.rightTriangle = 38] = "rightTriangle", t[t.rectangle = 39] = "rectangle", t[t.heart = 40] = "heart", 
        t[t.star = 41] = "star", t[t.arch = 42] = "arch", t[t.parallelogram = 43] = "parallelogram", 
        t[t.squiggle = 44] = "squiggle", t[t.donut = 45] = "donut", t[t.tetrisZ = 46] = "tetrisZ", 
        t[t.tetrisT = 47] = "tetrisT", t[t.tetrisL = 48] = "tetrisL", t[t.corner = 49] = "corner", 
        t[t.flower = 50] = "flower", t[t.threeProngedBoomerang = 51] = "threeProngedBoomerang", 
        t[t.squishedBox = 52] = "squishedBox", t[t.bead = 53] = "bead", t[t.chevron = 54] = "chevron", 
        t[t.xShape = 55] = "xShape", t[t.tetrisLine = 56] = "tetrisLine", t[t.HS_END_OF_SHAPES = 57] = "HS_END_OF_SHAPES", 
        t[t.toucan = 58] = "toucan", t[t.anteater = 59] = "anteater", t[t.crocodile = 60] = "crocodile", 
        t[t.sloth = 61] = "sloth", t[t.iguana = 62] = "iguana", t[t.hut = 63] = "hut", t[t.penguin = 64] = "penguin", 
        t[t.winterQueen = 65] = "winterQueen", t[t.shyYeti = 66] = "shyYeti", t[t.deer = 67] = "deer", 
        t[t.elf = 68] = "elf", t[t.snowGlobe = 69] = "snowGlobe", t[t.polarbear = 70] = "polarbear", 
        t[t.sleigh = 71] = "sleigh", t[t.mistletoe = 72] = "mistletoe", t[t.snowMan = 73] = "snowMan", 
        t[t.snowflake = 74] = "snowflake", t[t.roundedSquareFullSize = 100] = "roundedSquareFullSize", 
        t[t.squareFullSize = 101] = "squareFullSize", t[t.circleFullSize = 102] = "circleFullSize", 
        t[t.hexagonFullSize = 103] = "hexagonFullSize", t[t.triangleFullSize = 104] = "triangleFullSize", 
        t[t.rightTriangleFullSize = 105] = "rightTriangleFullSize", t[t.rectangleFullSize = 106] = "rectangleFullSize", 
        t[t.heartFullSize = 107] = "heartFullSize", t[t.starFullSize = 108] = "starFullSize", 
        t[t.archFullSize = 109] = "archFullSize", t[t.parallelogramTallFullSize = 110] = "parallelogramTallFullSize", 
        t[t.squiggleFullSize = 111] = "squiggleFullSize", t[t.donutFullSize = 112] = "donutFullSize", 
        t[t.tetrisZFullSize = 113] = "tetrisZFullSize", t[t.tetrisTFullSize = 114] = "tetrisTFullSize", 
        t[t.tetrisLFullSize = 115] = "tetrisLFullSize", t[t.cornerFullSize = 116] = "cornerFullSize", 
        t[t.flowerFullSize = 117] = "flowerFullSize", t[t.fanbladeFullSize = 118] = "fanbladeFullSize", 
        t[t.squishedBoxFullSize = 119] = "squishedBoxFullSize", t[t.roundedRightTriangleFullSize = 120] = "roundedRightTriangleFullSize", 
        t[t.arrowRoundedFullSize = 121] = "arrowRoundedFullSize", t[t.beadFullSize = 122] = "beadFullSize", 
        t[t.parallelogramWideFullSize = 123] = "parallelogramWideFullSize", t[t.chevronFullSize = 124] = "chevronFullSize", 
        t[t.xFullSize = 125] = "xFullSize", t[t.tetrisLineFullSize = 126] = "tetrisLineFullSize", 
        t[t.hexagonV3 = 150] = "hexagonV3", t[t.triangleV3 = 151] = "triangleV3", t[t.rectangleV3 = 152] = "rectangleV3", 
        t[t.heartV3 = 153] = "heartV3", t[t.starV3 = 154] = "starV3", t[t.archV3 = 155] = "archV3", 
        t[t.squiggleV3 = 156] = "squiggleV3", t[t.tetrisZV3 = 157] = "tetrisZV3", t[t.tetrisTV3 = 158] = "tetrisTV3", 
        t[t.tetrisLV3 = 159] = "tetrisLV3", t[t.fanbladeV3 = 160] = "fanbladeV3", t[t.arrowRoundedV3 = 161] = "arrowRoundedV3", 
        t[t.beadV3 = 162] = "beadV3", t[t.parallelogramWideV3 = 163] = "parallelogramWideV3", 
        t[t.chevronV3 = 164] = "chevronV3", t[t.HS_END_OF_FULL_SIZE_SHAPES = 165] = "HS_END_OF_FULL_SIZE_SHAPES", 
        t[t.HS_NUMBER_OF_OBJECTS = 166] = "HS_NUMBER_OF_OBJECTS", t[t.image = 2e3] = "image", 
        t[t.HS_START_OF_CHARACTERS2 = 3e3] = "HS_START_OF_CHARACTERS2", t[t.crocodileJaws = 3001] = "crocodileJaws", 
        t[t.lanternFullSize = 3002] = "lanternFullSize", t[t.HS_END_OF_CHARACTERS2 = 3003] = "HS_END_OF_CHARACTERS2", 
        t[t.nil = 1e4] = "nil", t[t.edgeOfScreen = 3e4] = "edgeOfScreen";
    }(r = e.HSObjectType || (e.HSObjectType = {})), e.hsIsShapeType = function(t) {
        var e = n(t);
        return t > r.HS_END_OF_CHARACTERS && t < r.HS_END_OF_SHAPES || e;
    }, e.hsIsFullSizeShape = n, window.HSObjectType = r;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        function t(t) {
            this.context = t, this.description = this.constructor.name, t.insertObject(this);
        }
        return t.key = "HSManagedObject", t;
    }();
    e.HSManagedObject = r, window.HSManagedObject = r;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(2), a = i(5), s = i(12), c = i(25), u = i(10), h = i(0), l = i(1), p = function(t) {
        function e(e) {
            var i = t.call(this, e) || this;
            return i.type = h.HSBlockType.Variable, i;
        }
        return n(e, t), e.prototype.parseJSON = function(i) {
            void 0 === i && (i = {}), t.prototype.parseJSON.call(this, i), this.blockType = i.type, 
            i.object && (this.object = this.context.findWithObjectID(a.HSObject.key, i.object)), 
            this.type = h.HSBlockType.Variable, this.objectID = i[s.VARIABLE_KEY];
            var r = this.context.findWithObjectID(c.HSVariablePrototype.key, this.objectID);
            this.name = "_hs_" + r.name, this.blockType === h.HSBlockType.User && (e.userGlobalScope[this.name] = r.initialValue);
        }, e.prototype.isSkillComplete = function() {
            return this.name === e.skillComplete;
        }, e.prototype.computedValue = function(t) {
            if (this.blockType === h.HSBlockType.Product) return l.HSApp.initialUserVariables["_hs_product_" + this.objectID] || "0";
            var e = this._object(t);
            return e && e[this.name] || 0;
        }, e.prototype.computedNumberValue = function(t) {
            return e.parseNumberFrom(this.computedValue(t));
        }, e.prototype.setValue = function(t, i) {
            var r = e.parseValue(t);
            this._object(i)[this.name] = r, this.storeUserValueIfNeeded(r.toString());
        }, e.prototype.storeUserValueIfNeeded = function(t) {
            this.blockType === h.HSBlockType.User && (l.isIOSApp() ? l.HSApp.sendToApp("setVariable", JSON.stringify({
                variableValue: t,
                variableName: this.name.replace("_hs_", ""),
                variableID: this.objectID
            })) : l.HSApp.storeUserVar(this.objectID, t));
        }, e.prototype._object = function(t) {
            return this.context.version < o.HSProjectVersion.ADD_SELF || this.blockType === h.HSBlockType.Game ? e.globalScope : this.blockType === h.HSBlockType.User ? e.userGlobalScope : this.blockType === h.HSBlockType.Object && this.object ? this.object.stageObject() : this.blockType === h.HSBlockType.OriginalObject ? t.originalObject(this.context) : t;
        }, e.parseValue = function(t) {
            var e = parseFloat(t);
            return isNaN(e) || !/^\-?[0-9]+(e\+?[0-9]+)?(\.[0-9]+(e\+?[0-9]+)?)?$/.test(t) ? null == t ? 0 : t : (function(t) {
                return t >= -u.MAX_FLOAT && t <= u.MAX_FLOAT;
            }(e) || (e = e < 0 ? -u.MAX_FLOAT : u.MAX_FLOAT), Number.isInteger(e) ? e : Math.round(1e6 * e) / 1e6);
        }, e.parseNumberFrom = function(t) {
            var i = e.parseValue(t);
            return "string" == typeof i ? 0 : i;
        }, e.prototype.getPublicName = function() {
            return this.name.replace("_hs_", "");
        }, e.globalScope = {}, e.userGlobalScope = {}, e.key = "HSVariable", e.skillComplete = "hsSkillComplete", 
        e;
    }(u.HSParameterBlock);
    e.HSVariable = p, window.HSVariable = p;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(0), n = i(16), o = function() {
        function t() {}
        return t.blocksToSrc = function(t) {
            return t.join(", ");
        }, t.blockToSrc = function(t) {
            return r.HSBlockType[t.type] + "(" + t.parameters.join(", ") + ")";
        }, t.paramToSrc = function(t) {
            return n.HSParameterType[t.type] + ": " + t.value;
        }, t.stageParamToSrc = function(t, e) {
            return t + (e ? "...\n" + e.toString() : "");
        }, t.stageControlToSrc = function(t) {
            var e = r.HSBlockType[t.type] + "(" + t.parameters.join(", ") + ")";
            return t.scripts.length > 0 && (e += " { ", e += t.scripts.map(function(t) {
                return t.toString();
            }).join(" } ")), e;
        }, t.stageMethodToSrc = function(t) {
            return r.HSBlockType[t.type] + "(" + t.parameters.join(", ") + ")";
        }, t.executableToSrc = function(t) {
            return "NOW {" + t.blocksToExecuteNow.map(function(t) {
                return t.toString();
            }).join(", ") + "}; LATER {" + t.blocksToExecuteLater.map(function(t) {
                return t.toString();
            }).join(", ") + "}";
        }, t;
    }();
    e.SourceFormatter = o, window.SourceFormatter = o;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(22), a = i(13), s = i(5), c = i(1), u = i(2), h = i(4), l = i(23), p = i(14), d = i(45), S = i(0), f = i(3), g = i(8), y = i(15);
    e.TRAIT_OBJECT_ID_KEY = "HSTraitObjectIDKey", e.TRAIT_ID_KEY = "HSTraitIDKey", e.TRAIT_TYPE_KEY = "HSTraitTypeKey", 
    e.MAX_FLOAT = 3.4028234663852886e38;
    var b = function(t) {
        function i() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return n(i, t), i.prototype.parseJSON = function(i) {
            void 0 === i && (i = {}), t.prototype.parseJSON.call(this, i), i[e.TRAIT_ID_KEY] && this.parseTrait(i);
        }, i.prototype.stageParameterBlock = function() {
            return new d.HSStageParameterBlock(this);
        }, i.prototype.matchesObject = function(t) {
            return this.object ? this.object === t : !t;
        }, i.prototype.parseTrait = function(t) {
            this.object = this.context.findWithObjectID(s.HSObject.key, t[e.TRAIT_OBJECT_ID_KEY]), 
            this.objectID = t[e.TRAIT_ID_KEY], this.type = t[e.TRAIT_TYPE_KEY], this.objectReferenceType = t.HSTraitObjectParameterTypeKey;
        }, i.prototype.computedValue = function(t) {
            var e, i, r, n, a, u, l, d, f, b, v, m, T, H, O;
            switch (this.type) {
              case S.HSBlockType.Random110:
              case S.HSBlockType.Random1100:
              case S.HSBlockType.Random11000:
              case S.HSBlockType.MathOperatorRandom:
              case S.HSBlockType.Random:
                var E = this.secondParamNumberValue(t), w = this.firstParamNumberValue(t);
                return Math.floor(Math.random() * (E - w + 1)) + w;

			  case HSBlockType.None: //AE_MOD
				if (/^_ae_webplayer_action:/g.test(this.parameters[0].value)){
					return AE_MOD.webplayer_action(this.parameters[0].value.split('_ae_webplayer_action:')[1], ((this.parameters[1])?this.secondParamValue(t):undefined),this);
				}
				return 0;
				
              case S.HSBlockType.MathOperatorAdd:
                var _ = this.firstParamValue(t), k = this.secondParamValue(t);
                return "string" != typeof _ && "string" != typeof k || (_ = _.toString(), k = k.toString()), 
                _ + k;

              case S.HSBlockType.TextOperatorCharAtIndex:
                return this.firstParameterStringValue(t)[this.secondParamNumberValue(t)] || "";

              case S.HSBlockType.TextOperatorCharsInRange:
                var B = this.firstParameterStringValue(t), x = this.secondParamNumberValue(t), C = this.endIndexValue(t);
                return B.slice(x, C);

              case S.HSBlockType.TextOperatorLength:
                return (null === (e = _ = this.firstParameterStringValue(t)) || void 0 === e ? void 0 : e.length) || 0;

              case S.HSBlockType.MathOperatorSubtract:
                return this.firstParamNumberValue(t) - this.secondParamNumberValue(t);

              case S.HSBlockType.MathOperatorMultiply:
                return this.firstParamNumberValue(t) * this.secondParamNumberValue(t);

              case S.HSBlockType.MathOperatorDivide:
                return 0 === (F = this.secondParamNumberValue(t)) ? 0 : this.firstParamNumberValue(t) / F;

              case S.HSBlockType.MathOperatorSine:
                return Math.sin(c.degreesToRadians(this.firstParamNumberValue(t)));

              case S.HSBlockType.MathOperatorCosine:
                return Math.cos(c.degreesToRadians(this.firstParamNumberValue(t)));

              case S.HSBlockType.MathOperatorTangent:
                return Math.tan(c.degreesToRadians(this.firstParamNumberValue(t)));

              case S.HSBlockType.MathOperatorInverseSine:
                return c.radiansToDegrees(Math.asin(this.firstParamNumberValue(t)) || 0);

              case S.HSBlockType.MathOperatorInverseCosine:
                return c.radiansToDegrees(Math.acos(this.firstParamNumberValue(t)) || 0);

              case S.HSBlockType.MathOperatorInverseTangent:
                return c.radiansToDegrees(Math.atan(this.firstParamNumberValue(t)) || 0);

              case S.HSBlockType.MathOperatorMaximum:
                var j = this.firstParamValue(t), I = this.secondParamValue(t);
                if ("string" == typeof j || "string" == typeof I) {
                    var P = j.toString(), M = I.toString();
                    return P.localeCompare(M) >= 0 ? P : M;
                }
                return Math.max(this.firstParamNumberValue(t), this.secondParamNumberValue(t));

              case S.HSBlockType.MathOperatorMinimum:
                var R = this.firstParamValue(t), A = this.secondParamValue(t);
                if ("string" == typeof R || "string" == typeof A) {
                    P = R.toString(), M = A.toString();
                    return P.localeCompare(M) <= 0 ? P : M;
                }
                return Math.min(this.firstParamNumberValue(t), this.secondParamNumberValue(t));

              case S.HSBlockType.MathOperatorSquareRoot:
                return Math.sqrt(this.firstParamNumberValue(t));

              case S.HSBlockType.MathOperatorPower:
                return Math.pow(this.firstParamNumberValue(t), this.secondParamNumberValue(t));

              case S.HSBlockType.MathOperatorFloor:
                return Math.floor(this.firstParamNumberValue(t));

              case S.HSBlockType.MathOperatorCeiling:
                return Math.ceil(this.firstParamNumberValue(t));

              case S.HSBlockType.MathOperatorRound:
                return Math.round(this.firstParamNumberValue(t));

              case S.HSBlockType.MathOperatorAbs:
                return Math.abs(this.firstParamNumberValue(t));

              case S.HSBlockType.MathOperatorModulo:
                var F;
                return 0 === (F = this.secondParamNumberValue(t)) ? 0 : this.firstParamNumberValue(t) % F;

              case S.HSBlockType.ConditionalOperatorEquals:
              case S.HSBlockType.ConditionalOperatorLessThan:
              case S.HSBlockType.ConditionalOperatorGreaterThan:
              case S.HSBlockType.ConditionalOperatorGreaterThanOrEqualTo:
              case S.HSBlockType.ConditionalOperatorLessThanOrEqualTo:
              case S.HSBlockType.ConditionalOperatorNotEquals:
              case S.HSBlockType.ConditionalOperatorAnd:
              case S.HSBlockType.ConditionalOperatorOr:
              case S.HSBlockType.ConditionalOperatorMatches:
                return this.computedBooleanValue(t) ? 1 : 0;

              case S.HSBlockType.TraitXPosition:
                return Math.round((null === (i = this.stageObjects(t)[0]) || void 0 === i ? void 0 : i.x) || 0);

              case S.HSBlockType.TraitYPosition:
                return Math.round((null === (r = this.stageObjects(t)[0]) || void 0 === r ? void 0 : r.y) || 0);

              case S.HSBlockType.TraitWidth:
                return (null === (n = this.stageObjects(t)[0]) || void 0 === n ? void 0 : n.width()) || 0;

              case S.HSBlockType.TraitHeight:
                return (null === (a = this.stageObjects(t)[0]) || void 0 === a ? void 0 : a.height()) || 0;

              case S.HSBlockType.TraitZIndex:
                return (null === (u = this.stageObjects(t)[0]) || void 0 === u ? void 0 : u.zIndex) || 0;

              case S.HSBlockType.TraitOriginX:
                return Math.round((null === (l = this.stageObjects(t)[0]) || void 0 === l ? void 0 : l.originX) || 0);

              case S.HSBlockType.TraitOriginY:
                return Math.round((null === (d = this.stageObjects(t)[0]) || void 0 === d ? void 0 : d.originY) || 0);

              case S.HSBlockType.TraitCenterX:
                return Math.round((null === (f = this.stageObjects(t)[0]) || void 0 === f ? void 0 : f.x) || 0);

              case S.HSBlockType.TraitCenterY:
                return Math.round((null === (b = this.stageObjects(t)[0]) || void 0 === b ? void 0 : b.y) || 0);

              case S.HSBlockType.TraitRotation:
                return (null === (v = this.stageObjects(t)[0]) || void 0 === v ? void 0 : v.headingInDegrees) || 0;

              case S.HSBlockType.TraitUsername:
                return y.HSMain.currentPlayerName;

              case S.HSBlockType.TraitTime:
                return Date.now();

              case S.HSBlockType.TraitYear:
                return new Date().getFullYear();

              case S.HSBlockType.TraitMonth:
                return new Date().getMonth() + 1;

              case S.HSBlockType.TraitDay:
                return new Date().getDate();

              case S.HSBlockType.TraitHour:
                return new Date().getHours();

              case S.HSBlockType.TraitMinute:
                return new Date().getMinutes();

              case S.HSBlockType.TraitSecond:
                return new Date().getSeconds();

              case S.HSBlockType.TraitSpeed:
                return (null === (m = this.stageObjects(t)[0]) || void 0 === m ? void 0 : m.speed) || 0;

              case S.HSBlockType.TraitCloneIndex:
                return (null === (T = this.stageObjects(t)[0]) || void 0 === T ? void 0 : T.cloneIndex) || 0;

              case S.HSBlockType.TraitText:
                var D = (null === (H = this.stageObjects(t)[0]) || void 0 === H ? void 0 : H.text) || "";
                return g.HSVariable.parseValue(D).toString();

              case S.HSBlockType.TraitTotalClones:
                var N = this.stageObjects(t)[0];
                return this.context.findWithObjectID(s.HSObject.key, N.objectID).allStageObjects().length;

              case S.HSBlockType.StageTraitTotalObjects:
                return p.HSStageProject.sharedInstance.activeStageScene.stageObjects.length;

              case S.HSBlockType.TraitInvisibility:
                return (null === (O = this.stageObjects(t)[0]) || void 0 === O ? void 0 : O.invisibilityPercent) || 0;

              case S.HSBlockType.TraitSize:
                return this.computedSizePercent(t);

              case S.HSBlockType.StageTraitLastTouchX:
                return p.HSStageProject.sharedInstance.activeStageScene.lastTouchX;

              case S.HSBlockType.StageTraitLastTouchY:
                return p.HSStageProject.sharedInstance.activeStageScene.lastTouchY;

              case S.HSBlockType.StageTraitTiltUp:
                return o.HSAccelerometerManager.tiltUp;

              case S.HSBlockType.StageTraitTiltDown:
                return o.HSAccelerometerManager.tiltDown;

              case S.HSBlockType.StageTraitTiltLeft:
                return o.HSAccelerometerManager.tiltLeft;

              case S.HSBlockType.StageTraitTiltRight:
                return o.HSAccelerometerManager.tiltRight;

              case S.HSBlockType.StageTraitWidth:
                return h.HSStageScene.stageWidth;

              case S.HSBlockType.StageTraitHeight:
                return h.HSStageScene.stageHeight;

              case S.HSBlockType.EventOperatorGamePlaying:
                return 1;

              default:
                return null;
            }
        }, i.prototype.computedSizePercent = function(t) {
            var e = this.stageObjects(t)[0];
            switch (this.whichSizeShouldIUse(e)) {
              case "minimum":
                return Math.min(e.sizePercentHeight, e.sizePercentWidth);

              case "height":
                return e.sizePercentHeight;

              case "width":
                return e.sizePercentWidth;
            }
        }, i.prototype.whichSizeShouldIUse = function(t) {
            var e = Math.abs(t.sizePercentHeight), i = Math.abs(t.sizePercentWidth);
            return e === i ? "minimum" : e > i ? "height" : "width";
        }, i.prototype.computedColorString = function(t) {
            switch (this.type) {
              case S.HSBlockType.ColorOperatorRandom:
                return f.HSColor.randomColor();

              case S.HSBlockType.ColorOperatorRGB:
                return f.HSColor.rgb(this.firstParamNumberValue(t) % 256, this.secondParamNumberValue(t) % 256, this.parameters[2].stageParameter().computedNumberValue(t) % 256);

              case S.HSBlockType.ColorOperatorHSB:
                return f.HSColor.hsb(this.firstParamNumberValue(t) % 361, this.secondParamNumberValue(t) % 101, this.parameters[2].stageParameter().computedNumberValue(t) % 101);

              default:
                var e = f.HSColor.rgbStringFromNumericColor(this.computedStringValue(t));
                return null == e ? f.HSColor.rgbTextColor : e;
            }
        }, i.prototype.computedStringValue = function(t) {
            var e = this.computedValue(t);
            return g.HSVariable.parseValue(e).toString();
        }, i.prototype.computedBooleanValue = function(t) {
            var e, i, r = this.firstParamValue(t), n = this.secondParamValue(t);
            switch (this.type) {
              case S.HSBlockType.ConditionalOperatorMatches:
                return e = this.firstParameterStringValue(t), i = this.secondParameterStringValue(t), 
                new RegExp(i, "gi").test(e);

              case S.HSBlockType.ConditionalOperatorEquals:
                return v(r, n);

              case S.HSBlockType.ConditionalOperatorLessThan:
                return m(r, n) && !v(r, n);

              case S.HSBlockType.ConditionalOperatorLessThanOrEqualTo:
                return v(r, n) || m(r, n);

              case S.HSBlockType.ConditionalOperatorGreaterThan:
                return T(r, n) && !v(r, n);

              case S.HSBlockType.ConditionalOperatorGreaterThanOrEqualTo:
                return v(r, n) || T(r, n);

              case S.HSBlockType.ConditionalOperatorNotEquals:
                return !v(r, n);

              case S.HSBlockType.ConditionalOperatorAnd:
                return !(!this.firstParamNumberValue(t) || !this.secondParamNumberValue(t));

              case S.HSBlockType.ConditionalOperatorOr:
                return !(!this.firstParamNumberValue(t) && !this.secondParamNumberValue(t));

              case S.HSBlockType.EventOperatorGamePlaying:
                return !0;

              default:
                return !1;
            }
        }, i.prototype.usesOriginalObject = function() {
            return this.type === S.HSBlockType.OriginalObject || this.objectReferenceType === S.HSBlockType.OriginalObject;
        }, i.prototype.stageObjects = function(t) {
            return this.type === S.HSBlockType.Self ? [ t ] : this.usesOriginalObject() ? [ t.originalObject(this.context) ] : this.object ? this.context.version >= u.HSProjectVersion.ADD_SELF ? this.object.allStageObjects() : [ this.object.stageObject(t) ] : this.type === S.HSBlockType.ScreenEdge ? [ l.HSStageObject.edgeOfScreenObject ] : this.type === S.HSBlockType.AnyObject ? p.HSStageProject.sharedInstance.activeStageScene.stageObjects : this.type >= S.HSBlockType.TraitRotation && this.type < S.HSBlockType.HS_END_OF_OBJECT_TRAITS ? [ t ] : [];
        }, i.prototype.firstParameterStringValue = function(t) {
            switch (this.type) {
              case S.HSBlockType.Random110:
              case S.HSBlockType.Random1100:
              case S.HSBlockType.Random11000:
                return "1";

              default:
                if (this.parameters.length > 0) return this.parameters[0].stageParameter().computedStringValue(t);
                if (S.HSBlockType[this.type] === S.HSBlockType[S.HSBlockType.Random110]) return "0";
            }
        }, i.prototype.secondParameterStringValue = function(t) {
            switch (this.type) {
              case S.HSBlockType.Random110:
                return "10";

              case S.HSBlockType.Random1100:
                return "100";

              case S.HSBlockType.Random11000:
                return "1000";

              default:
                return this.parameters.length >= 2 ? this.parameters[1].stageParameter().computedStringValue(t) : "0";
            }
        }, i.prototype.firstParamValue = function(t) {
            switch (this.type) {
              case S.HSBlockType.Random110:
              case S.HSBlockType.Random1100:
              case S.HSBlockType.Random11000:
                return 1;

              default:
                if (this.parameters.length > 0) return this.parameters[0].stageParameter().computedValue(t);
                if (S.HSBlockType[this.type] === S.HSBlockType[S.HSBlockType.Random110]) return 0;
            }
        }, i.prototype.secondParamValue = function(t) {
            switch (this.type) {
              case S.HSBlockType.Random110:
                return 10;

              case S.HSBlockType.Random1100:
                return 100;

              case S.HSBlockType.Random11000:
                return 1e3;

              default:
                return this.parameters.length >= 2 ? this.parameters[1].stageParameter().computedValue(t) : 0;
            }
        }, i.prototype.firstParamNumberValue = function(t) {
            switch (this.type) {
              case S.HSBlockType.Random110:
              case S.HSBlockType.Random1100:
              case S.HSBlockType.Random11000:
                return 1;

              default:
                if (this.parameters.length > 0) return this.parameters[0].stageParameter().computedNumberValue(t);
                if (S.HSBlockType[this.type] === S.HSBlockType[S.HSBlockType.Random110]) return 0;
            }
        }, i.prototype.secondParamNumberValue = function(t) {
            switch (this.type) {
              case S.HSBlockType.Random110:
                return 10;

              case S.HSBlockType.Random1100:
                return 100;

              case S.HSBlockType.Random11000:
                return 1e3;

              default:
                return this.parameters.length >= 2 ? this.parameters[1].stageParameter().computedNumberValue(t) : 0;
            }
        }, i.prototype.endIndexValue = function(t) {
            return this.parameters.length < 3 ? 0 : this.parameters[2].stageParameter().computedNumberValue(t);
        }, i.key = "HSParameterBlock", i;
    }(a.HSBlock);
    function v(t, e) {
        if ("number" == typeof t && "number" == typeof e) {
            var i = t, r = e;
            return Math.abs(i - r) <= Number.EPSILON;
        }
        return t.toString() === e.toString();
    }
    function m(t, e) {
        if ("number" == typeof t && "number" == typeof e) return t < e;
        var i = t.toString(), r = e.toString();
        return -1 === i.localeCompare(r);
    }
    function T(t, e) {
        if ("number" == typeof t && "number" == typeof e) return t > e;
        var i = t.toString(), r = e.toString();
        return 1 === i.localeCompare(r);
    }
    e.HSParameterBlock = b, window.HSParameterBlock = b, window.MAX_FLOAT = e.MAX_FLOAT;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(5), a = i(2), s = i(12), c = i(13), u = i(10), h = i(57), l = i(26), p = i(0), d = i(16);
    e.SCRIPT_ID_KEY = "abilityID";
    var S = function(t) {
        function i(e) {
            var i = t.call(this, e) || this;
            return i.type = p.HSBlockType.Rule, i;
        }
        return n(i, t), i.prototype.stageRule = function(t) {
            return new h.HSStageRule(this, t);
        }, i.prototype.stageRules = function(t) {
            return [ this.stageRule(t) ];
        }, i.prototype.parseJSON = function(i) {
            if (void 0 === i && (i = {}), this.context.version < a.HSProjectVersion.CUSTOM_WHENS) this.parseLowerThanCustomWhensJSON(i); else {
                var r = this.context.findWithObjectID("HSScript", i[e.SCRIPT_ID_KEY]);
                r ? (t.prototype.parseJSON.call(this, i), this.childBlock() ? (this.objectID = i.id, 
                this.script = r) : this.context.deleteObject(this)) : this.context.deleteObject(this);
            }
        }, i.prototype.parseLowerThanCustomWhensJSON = function(i) {
            void 0 === i && (i = {});
            var r = this.context.findWithObjectID("HSScript", i[e.SCRIPT_ID_KEY]), n = this.context.findWithObjectID("HSObject", i[o.OBJECT_ID_KEY]);
            n && r ? (this.context.version < a.HSProjectVersion.V14 && this.parseLowerThanV14JSON(i, n), 
            t.prototype.parseJSON.call(this, i), this.childBlock() ? (this.script = r, n.willChangeCostume = n.canChangeCostume() && r.containsChangeCostume(), 
            n.addRule(this)) : this.context.deleteObject(this)) : this.context.deleteObject(this);
        }, i.prototype.parseLowerThanV14JSON = function(t, e) {
            var i = t.eventType, r = p.blockTypeForLegacyEventType(i), n = new u.HSParameterBlock(this.context);
            n.type = r;
            var o = new s.HSParameter(this.context);
            switch (this.parameters = [ o ], o.childBlock = n, r) {
              case p.HSBlockType.EventOperatorTap:
              case p.HSBlockType.EventOperatorHold:
                this.addObjectToEventOperator(n, e);
                break;

              case p.HSBlockType.EventOperatorBump:
              case p.HSBlockType.EventOperatorIsTouching:
              case p.HSBlockType.EventOperatorIsNotTouching:
                this.addObjectsToBumps(n, e, t);
            }
        }, i.prototype.addObjectToEventOperator = function(t, e) {
            var i = new l.HSEventParameterBlock(this.context);
            i.object = e;
            var r = new s.HSParameter(this.context);
            r.type = d.HSParameterType.HSObject, r.childBlock = i, t.parameters = [ r ];
        }, i.prototype.addObjectsToBumps = function(t, e, i) {
            var r = new l.HSEventParameterBlock(this.context);
            r.object = e;
            var n = new l.HSEventParameterBlock(this.context);
            n.object = this.context.findWithObjectID("HSObject", i.collisionReceiverObject);
            var o = new s.HSParameter(this.context);
            o.type = d.HSParameterType.HSObject, o.childBlock = r;
            var a = new s.HSParameter(this.context);
            a.type = d.HSParameterType.HSObject, a.childBlock = n, t.parameters = [ o, a ];
        }, i.prototype.firstObject = function() {
            return this.childBlock() && this.childBlock().parameters.length > 0 ? this.childBlock().parameters[0].childBlock.object : null;
        }, i.prototype.firstParam = function() {
            return this.parameters[0];
        }, i.prototype.childBlock = function() {
            return this.firstParam().childBlock;
        }, i.prototype.eventType = function() {
            return this.childBlock().type;
        }, i.prototype.eventParameterBlocks = function() {
            var t = [];
            return this.childBlock() && this.childBlock().parameters.forEach(function(e) {
                e.childBlock && t.push(e.childBlock);
            }), t;
        }, i.prototype.paramsBlock = function() {
            if (this.childBlock().parameters[0]) return this.childBlock().parameters[0].childBlock;
        }, i.prototype.matchesEvent = function(t) {
            return this.childBlock().type === t;
        }, i.prototype.conditionIsTrue = function(t) {
            return this.childBlock().computedBooleanValue(t);
        }, i.key = "HSRule", i;
    }(c.HSBlock);
    e.HSRule = S, window.HSRule = S, window.SCRIPT_ID_KEY = e.SCRIPT_ID_KEY;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(7), a = i(2), s = i(9), c = i(8), u = i(24), h = i(25), l = i(26), p = i(10), d = i(27), S = i(16);
    e.VALUE_KEY = "value", e.CHILD_BLOCK_KEY = "datum", e.VARIABLE_KEY = "variable", 
    e.PARAMETER_TYPE_KEY = "type";
    var f = function(t) {
        function i() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return n(i, t), i.prototype.stageParameter = function() {
            return new u.HSStageParameter(this.value, this.childBlock);
        }, i.prototype.parseJSON = function(t) {
            if (void 0 === t && (t = {}), this.value = t[e.VALUE_KEY], this.type = t[e.PARAMETER_TYPE_KEY], 
            this.type === S.HSParameterType.Object && t[e.CHILD_BLOCK_KEY]) {
                var i = t[e.CHILD_BLOCK_KEY];
                if (i.customObject) {
                    var r = a.HSProjectContext.customObjectMap.get(i.customObject);
                    this.childBlock = r, d.HSImageTextureFactory.instance.prefetchImage(r);
                }
                this.value = i.text ? i.text : i.type;
            } else if (t[e.CHILD_BLOCK_KEY] && t[e.CHILD_BLOCK_KEY].variable) this.setChildBlockToVariableIfPossible(t[e.CHILD_BLOCK_KEY]); else if (t[e.CHILD_BLOCK_KEY]) {
                var n = new p.HSParameterBlock(this.context);
                n.parseJSON(t[e.CHILD_BLOCK_KEY]), this.childBlock = n;
            } else t[e.VARIABLE_KEY] && (this.setChildBlockToVariableIfPossible(t), this.setChildBlockToTraitIfPossible(t), 
            this.setChildBlockToEventParameterIfPossible(t));
        }, i.prototype.toString = function() {
            return s.SourceFormatter.paramToSrc(this);
        }, i.prototype.setChildBlockToVariableIfPossible = function(t) {
            var i = t[e.VARIABLE_KEY];
            if (this.context.findWithObjectID(h.HSVariablePrototype.key, i)) {
                var r = new c.HSVariable(this.context);
                r.parseJSON(t), this.childBlock = r;
            }
        }, i.prototype.setChildBlockToTraitIfPossible = function(t) {
            var i = t[e.VARIABLE_KEY], r = this.context.findWithObjectID(p.HSParameterBlock.key, i);
            r && (this.childBlock = r);
        }, i.prototype.setChildBlockToEventParameterIfPossible = function(t) {
            var i = t[e.VARIABLE_KEY], r = this.context.findWithObjectID(l.HSEventParameterBlock.key, i);
            r && (this.childBlock = r);
        }, i.key = "HSParameter", i;
    }(o.HSManagedObject);
    e.HSParameter = f, window.HSParameter = f, window.VALUE_KEY = e.VALUE_KEY, window.CHILD_BLOCK_KEY = e.CHILD_BLOCK_KEY, 
    window.VARIABLE_KEY = e.VARIABLE_KEY, window.PARAMETER_TYPE_KEY = e.PARAMETER_TYPE_KEY;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o, a = i(7), s = i(12), c = i(9), u = i(0);
    e.BLOCK_TYPE_KEY = "type", e.PARAMETERS_KEY = "parameters", e.PARAMS_KEY = "params", 
    function(t) {
        t[t.Method = 0] = "Method", t[t.Control = 1] = "Control", t[t.ConditionalControl = 2] = "ConditionalControl", 
        t[t.Variable = 3] = "Variable";
    }(o = e.HSBlockClass || (e.HSBlockClass = {}));
    var h = function(t) {
        function i() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.parameters = [], e.isControl = !1, e;
        }
        return n(i, t), i.prototype.parseJSON = function(t) {
            var i = this;
            void 0 === t && (t = {}), this.type = this.type || parseInt(t[e.BLOCK_TYPE_KEY]), 
            (t[e.PARAMETERS_KEY] || t[e.PARAMS_KEY] || []).forEach(function(t) {
                var e = new s.HSParameter(i.context);
                e.parseJSON(t), i.parameters.push(e);
            });
        }, i.prototype.stageParameters = function() {
            return this.parameters.map(function(t) {
                return t.stageParameter();
            });
        }, i.prototype.toString = function() {
            return c.SourceFormatter.blockToSrc(this);
        }, i.blockClassForDict = function(t) {
            switch (void 0 === t && (t = {}), t[e.BLOCK_TYPE_KEY]) {
              case u.HSBlockType.Repeat:
              case u.HSBlockType.LeaveATrail:
              case u.HSBlockType.RepeatForever:
              case u.HSBlockType.Ability:
                return o.Control;

              case u.HSBlockType.CheckOnceIf:
              case u.HSBlockType.CheckIfElse:
                return o.ConditionalControl;
            }
            return o.Method;
        }, i.key = "HSBlock", i;
    }(a.HSManagedObject);
    e.HSBlock = h, window.HSBlockClass = o, window.HSBlock = h, window.BLOCK_TYPE_KEY = e.BLOCK_TYPE_KEY, 
    window.PARAMETERS_KEY = e.PARAMETERS_KEY, window.PARAMS_KEY = e.PARAMS_KEY;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(8), n = i(17), o = i(0), a = function() {
        function t(e) {
            this.stageScenes = e.scenes.map(function(t) {
                return t.stageScene();
            }), this.version = e.context.version, this.activeStageScene = this.stageScenes[0], 
            r.HSVariable.globalScope = {}, t.sharedInstance = this;
        }
        return t.prototype.changeScene = function(t) {
            var e = this.stageScenes.find(function(e) {
                return e.name === t;
            });
            e && (n.HopscotchDrawingContext.shouldClear = !0, this.activeStageScene = e, this.activeStageScene.activateAllRulesForEventType(o.HSBlockType.EventOperatorStart));
        }, t.prototype.activateAllRulesForEventType = function(t) {
            this.activeStageScene.activateAllRulesForEventType(t);
        }, t.prototype.executeAllActiveRules = function() {
            this.activeStageScene.executeAllActiveRules();
        }, t.prototype.animationTick = function(t) {
            this.activeStageScene.animationTick(t);
        }, t.prototype.receiveClickEvent = function(t, e) {
            this.activeStageScene.receiveClickEvent(t, e);
        }, t.prototype.receiveTouchDownEvent = function(t, e) {
            this.activeStageScene.receiveTouchDownEvent(t, e);
        }, t.prototype.receiveTouchMoveEvent = function(t, e) {
            this.activeStageScene.receiveTouchMoveEvent(t, e);
        }, t.prototype.receiveTouchUpEvent = function(t, e) {
            this.activeStageScene.receiveTouchUpEvent(t, e);
        }, t;
    }();
    e.HSStageProject = a, window.HSStageProject = a;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(2), n = i(22), o = i(1), a = i(60), s = i(4), c = i(23), u = i(38), h = i(29), l = i(14), p = i(28), d = i(0), S = i(18);
    i(64);
    var f = i(37);
    function g(t) {
        var e = new XMLHttpRequest();
        e.open("GET", "https://d2j12ek52gvmx9.cloudfront.net/emojis/d83d-de0e.png", !0), 
        e.onreadystatechange = function() {
            4 === e.readyState && t(200 === e.status);
        }, e.onerror = function() {
            t(!1);
        }, e.send(null);
    }
    window.addEventListener("load", function() {
        for (var t = document.querySelectorAll("hopscotch-player"), i = t.length; --i >= 0; ) window.main = e.main = new y(t[i]), 
        window.addEventListener("resize", function() {
            return o.HSApp.sendToApp("resize", "true");
        });
    }), e.hsCanLoadEmojis = g, window.addEventListener("error", function(t) {
        var i = e.main.projectData.uuid;
        return console.error("ERROR", t, "uuid", i), o.HSApp.sendToApp("error", JSON.stringify(t) + ";uuid: " + i), 
        !1;
    });
    var y = function() {
        function t(e) {
            this.root = e, this.context = new r.HSProjectContext(), this.isMaximized = !1, this.hasDrawn = !1, 
            this.setiOSStageSizeIfNecessary();
            var i = document.getElementById("project_data")//, n = e.dataset.projectJson || i && i.getAttribute("data");
			var n = JSON.stringify(AE_MOD.projectData); //AE_MOD - This sets the project data
            n && (this.load(JSON.parse(n)), o.HSApp.sendToApp("playerState", "loaded")), this.setSizeFromDataAttrs(), 
            this.background = this.createCanvas("background"), this.screenshot = this.createCanvas("screenshot"), 
            this.canvas = this.createCanvas("foreground"), window.gliEmbedDebug ? this.renderer = new PIXI.WebGLRenderer(s.HSStageScene.stageWidth, s.HSStageScene.stageHeight, {
                resolution: t.dpi,
                transparent: !0,
                view: this.canvas
            }) : this.renderer = PIXI.autoDetectRenderer(s.HSStageScene.stageWidth, s.HSStageScene.stageHeight, {
                resolution: t.dpi,
                backgroundColor: null,
                transparent: !0,
                view: this.canvas
            }), this.screenshotRenderer = new PIXI.CanvasRenderer(s.HSStageScene.stageWidth, s.HSStageScene.stageHeight, {
                resolution: t.dpi,
                backgroundColor: null,
                transparent: !0,
                view: this.screenshot
            });
            var a = document.getElementById("play_container");
            a && (a.style.width = "100%", a.style.height = "100%");
            var c = this.drawBackground.bind(this);
            try {
                this.visualContext = new p.HSVisualContext(this.background, c);
            } catch (t) {
                console.log("No gl found in this context: ", t);
            }
        }
        return t.prototype.setSizeFromDataAttrs = function() {
            this.resizeRoot(+this.root.getAttribute("width"), +this.root.getAttribute("height"));
        }, t.prototype.createCanvas = function(t) {
            var e = document.createElement("canvas");
            return e.setAttribute("name", t), e.style.background = "transparent", e.style.position = "absolute", 
            e.style.top = "0", e.style.left = "0", e.style.width = "100%", e.style.height = "100%", 
            this.root.appendChild(e), e;
        }, t.prototype.resizeScreen = function() { //AE_MOD
			main.resizeRoot(window.innerWidth, window.innerHeight);
		}, t.prototype.toggleFullscreen = function() {
            this.isFullscreen() ? this.exitFullscreen() : this.enterFullscreen(window.innerWidth, window.innerHeight);
        }, t.prototype.isFullscreen = function() {
            return !!document.fullscreenElement || (!!document.webkitFullscreenElement || (!!document.mozFullScreenElement || (!!document.msFullScreenElement || this.isMaximized)));
        }, t.prototype.enterFullscreen = function(t, e) {
            f.CollisionManagerDebug.ENABLED || this.enterFullscreenAction(this.root, t, e);
        }, t.prototype.enterFullscreenAction = function(t, e, i) {
            var r = e || window.innerWidth, n = i || window.innerHeight;
            this.resizeRoot(r, n);
            var o = t.parentElement;
            if (o.requestFullscreen) o.requestFullscreen(); else if (o.mozRequestFullScreen) o.mozRequestFullScreen(); else if (o.webkitRequestFullscreen) o.webkitRequestFullscreen(); else if (o.msRequestFullscreen) o.parent.msRequestFullscreen(); else {
                this.isMaximized = !0, this.resizeRoot(r, n), this.root.style.position = "absolute", 
                this.centerOnScreen(r, n);
                for (var a = 0; a < document.body.children.length; a++) document.body.children[a].style.visibility = "hidden";
                document.body.style.backgroundColor = "black", this.root.style.visibility = "visible", 
                document.dispatchEvent(new Event("fullscreenchange"));
            }
        }, t.prototype.exitFullscreen = function() {
            if (this.setSizeFromDataAttrs(), document.exitFullscreen) document.exitFullscreen(); else if (document.msExitFullscreen) document.msExitFullscreen(); else if (document.mozCancelFullScreen) document.mozCancelFullScreen(); else if (document.webkitExitFullscreen) document.webkitExitFullscreen(); else {
                this.isMaximized = !1, this.root.style.position = "", this.root.style.top = "", 
                this.root.style.left = "";
                for (var t = 0; t < document.body.children.length; t++) document.body.children[t].style.visibility = "";
                document.body.style.backgroundColor = "", this.root.style.visibility = "", document.dispatchEvent(new Event("fullscreenchange"));
            }
        }, t.prototype.resizeRoot = function(t, e) {
            void 0 === t && (t = this._oldWidth), void 0 === e && (e = this._oldHeight), this._oldWidth = t, 
            this._oldHeight = e;
            var i = s.HSStageScene.stageWidth, r = s.HSStageScene.stageHeight;
            t || e ? t && !e ? e = t * r / i : !t && e && (t = e * i / r) : (t = window.innerWidth - 20, 
            e = window.innerHeight - 250), i > r ? this.resizeRootLandscape(t, e, i, r) : this.resizeRootPortrait(t, e, i, r);
        }, t.prototype.resizeRootLandscape = function(e, i, r, n) {
            var o = Math.min(i / n, e / r), a = Math.max(Math.floor(r * o), t.MIN_STAGE_WIDTH), s = a * (n / r);
            this.root.style.width = Math.floor(a) + "px", this.root.style.height = Math.floor(s) + "px", 
            this.isMaximized && this.centerOnScreen(e, i);
        }, t.prototype.resizeRootPortrait = function(t, e, i, r) {
            var n = Math.min(e / r, t / i), o = Math.floor(r * n), a = o * (i / r);
            this.root.style.width = Math.floor(a) + "px", this.root.style.height = Math.floor(o) + "px", 
            this.isMaximized && this.centerOnScreen(t, e);
        }, t.prototype.centerOnScreen = function(t, i) {
            var r = t || window.innerWidth, n = i || window.innerHeight;
            this.root.style.top = Math.floor((n - e.main.root.offsetHeight) / 2) + "px", this.root.style.left = Math.floor((r - e.main.root.offsetWidth) / 2) + "px";
        }, t.prototype.load = function(t) {
            this.projectData = t, o.HSApp.initUserVariables(this.uuid, this.editedAt), this.context = new r.HSProjectContext(), 
            this.project = new h.HSProject(this.context, t), u.HSSoundManager.sharedInstance = new u.HSSoundManager(this.context.allSoundNames());
        }, t.prototype.mute = function() {
            u.HSSoundManager.sharedInstance.mute();
        }, t.prototype.unmute = function() {
            u.HSSoundManager.sharedInstance.unmute();
        }, t.prototype.isMuted = function() {
            return u.HSSoundManager.sharedInstance.isMuted;
        }, t.prototype.setiOSStageSizeIfNecessary = function() {
            if ("container" === this.root.getAttribute("stage-size")) {
                var t = this.root.getBoundingClientRect();
                s.HSStageScene.stageWidth = t.width, s.HSStageScene.stageHeight = t.height;
            }
        }, t.prototype.willPlay = function(t) {
            window.project_error && (window.project_error.style.display = "none"), t && this.load(t), 
            this.stageProject = new l.HSStageProject(this.project), this.stageProject.activateAllRulesForEventType(d.HSBlockType.EventOperatorStart), 
            this.stageProject.executeAllActiveRules(), this.hasDrawn || this.prepareForFirstPlay(), 
            this.registerEventCallbacks();
        }, t.prototype.prepareForFirstPlay = function() {
            var t = this, e = [], i = this.renderer;
            this.stageProject.activeStageScene.stageObjects.forEach(function(t) {
                var r = t.view.buildAllTextures().then(function(t) {
                    for (var e = 0; e < t.length; e++) i.bindTexture && i.bindTexture(t[e]);
                });
                e.push(r);
            }), Promise.all(e).then(function() {
                t.hasDrawn = !0, o.HSApp.sendToApp("playerState", "ready");
            }).catch(function(t) {
                setTimeout(function() {
                    throw "error building initial textures " + JSON.stringify(t);
                });
            });
        }, t.prototype.startProject = function() {
            o.HSApp.reset(), this.animationTick();
        }, t.prototype.play = function(e) {
            var i = this;
            g(function(r) {
                r || (t.HS_EMOJI_HOST = location.protocol + "//d2j12ek52gvmx9.cloudfront.net/emojis"), 
                i.resetStage(), i.willPlay(e), i.startProject();
            });
        }, t.prototype.resetStage = function() {
            this.animationFrameReq && (this.visualContext.drawingContext.clearBackground(), 
            window.cancelAnimationFrame(this.animationFrameReq), this.animationFrameReq = null);
        }, t.prototype.drawBackground = function() {
            var t = this;
            if (c.DEBUG_DRAW_BOUNDING_BOXES) {
                var e = this.background;
                this.visualContext.drawingContext.bgContext.clearRect(0, 0, e.width, e.height);
            }
            this.stageProject.activeStageScene.stageObjects.forEach(function(e) {
                e.drawPath(t.visualContext.drawingContext);
            });
        }, t.prototype.registerEventCallbacks = function() {
            var t = this;
            (this.project.context.hasAccelerometerEvent() || this.project.context.hasAccelerometerTrait()) && n.HSAccelerometerManager.startAccelerometerUpdates(), 
            this.listeners && this.listeners.unregister(), this.listeners = a.UIRegisterEventCallbacks(this.root, {
                pointerDown: function(e) {
                    t.stageProject && (t.stageProject.receiveClickEvent(e, t.visualContext.collisionContext), 
                    t.stageProject.receiveTouchDownEvent(e, t.visualContext.collisionContext));
                },
                pointerUp: function(e) {
                    t.stageProject && t.stageProject.receiveTouchUpEvent(e, t.visualContext.collisionContext);
                },
                pointerDrag: function(e) {
                    t.stageProject && t.stageProject.receiveTouchMoveEvent(e, t.visualContext.collisionContext);
                },
                pointerCancel: function(e) {
                    t.stageProject && t.stageProject.receiveTouchUpEvent(e, t.visualContext.collisionContext);
                }
            });
        }, t.prototype.animationTick = function() {
            this.stageProject.animationTick(this.visualContext.collisionContext), this.renderer.render(this.stageProject.activeStageScene.container), 
            this.visualContext.drawingContext.renderFrame(), this.showPrompts(), this.requestNextFrame();
        }, t.prototype.showPrompts = function() {
            var t, e, i = s.HSStageScene.promptsToExecute[0];
            null === (t = i) || void 0 === t || t.execute(), (null === (e = i) || void 0 === e ? void 0 : e.isDone) && s.HSStageScene.promptsToExecute.shift();
        }, t.prototype.requestNextFrame = function() {
            var t = this;
            this.animationFrameReq = window.requestAnimationFrame(function(e) {
                o.HSApp.isRunning ? t.animationTick() : t.requestNextFrame();
            });
        }, t.prototype.takeScreenshot = function() {
            this.screenshotRenderer.render(this.stageProject.activeStageScene.container), this.screenshot.style.zIndex = "99999", 
            this.canvas.style.opacity = "0", this.screenshot.style.opacity = "1", setTimeout(o.HSApp.sendToApp.bind(void 0, "screenshot", "done"), 400);
        }, t.prototype.releaseScreenshot = function() {
            this.screenshot.style.zIndex = "-99999", this.canvas.style.opacity = "1", this.screenshot.style.opacity = "0";
        }, Object.defineProperty(t.prototype, "uuid", {
            get: function() {
                return this.projectData.uuid || "";
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "editedAt", {
            get: function() {
                return this.projectData.edited_at || "";
            },
            enumerable: !0,
            configurable: !0
        }), t.HS_EMOJI_HOST = "", t.currentPlayerName = "Guest", t.MIN_STAGE_WIDTH = 210, 
        t.dpi = Math.min(window.devicePixelRatio, 2), t;
    }();
    e.HSMain = y, window.HSMain = y, window.Vec2 = S.Vec2;
}, function(t, e, i) {
    "use strict";
    var r;
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), function(t) {
        t[t.Default = 42] = "Default", t[t.LineWidth = 43] = "LineWidth", t[t.LineColor = 44] = "LineColor", 
        t[t.RandomLow = 45] = "RandomLow", t[t.RandomHigh = 46] = "RandomHigh", t[t.Variable = 47] = "Variable", 
        t[t.VariableValue = 48] = "VariableValue", t[t.Conditional = 49] = "Conditional", 
        t[t.HSObject = 50] = "HSObject", t[t.Sound = 51] = "Sound", t[t.Event = 52] = "Event", 
        t[t.SetText = 53] = "SetText", t[t.Object = 54] = "Object", t[t.TextOnly = 55] = "TextOnly", 
        t[t.Scene = 56] = "Scene";
    }(r = e.HSParameterType || (e.HSParameterType = {})), window.HSParameterType = r;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(4), n = i(15), o = function() {
        function t(t, e, i) {
            this.bgCanvas = t, this.drawBackground = e, this.visualContext = i, this.bgContext = this.layerFromCanvas2d(t), 
            this.clearBackground();
        }
        return t.prototype.layerFromCanvas2d = function(t) {
            var e = this.canvasWidth(), i = this.canvasHeight();
            t.width = e, t.height = i;
            var r = t.getContext("2d");
            return r && (r.translate(0, i), r.scale(n.HSMain.dpi, -1 * n.HSMain.dpi)), r;
        }, t.prototype.canvasWidth = function() {
            return r.HSStageScene.stageWidth * n.HSMain.dpi;
        }, t.prototype.canvasHeight = function() {
            return r.HSStageScene.stageHeight * n.HSMain.dpi;
        }, t.prototype.renderFrame = function() {
            t.shouldClear && (this.clearBackground(), t.shouldClear = !1), this.drawBackground();
        }, t.prototype.clearBackground = function() {
            this.bgContext && (this.bgContext.fillStyle = "white", this.bgContext.fillRect(0, 0, this.bgCanvas.width, this.bgCanvas.height));
        }, t.prototype.drawLine = function(t, e) {
            var i = this.bgContext;
            i.beginPath(), i.moveTo.apply(i, [ t.point.x, t.point.y ]), t.point.x === e.point.x && t.point.y === e.point.y ? (i.fillStyle = e.colorReference.drawingColor, 
            i.arc(e.point.x, e.point.y, e.radius, 0, 2 * Math.PI), i.fill()) : (i.lineWidth = 2 * e.radius, 
            i.lineCap = "round", i.strokeStyle = e.colorReference.drawingColor, i.lineTo.apply(i, [ e.point.x, e.point.y ]), 
            i.stroke());
        }, t.shouldClear = !1, t.MAX_TEXTURE_SIDE_LENGTH = 1024, t;
    }();
    e.HopscotchDrawingContext = o, window.HopscotchDrawingContext = o;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = Float32Array || Array, n = function() {
        function t(t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), this.inner = new r(2), this.inner[0] = t, 
            this.inner[1] = e;
        }
        return Object.defineProperty(t.prototype, 0, {
            get: function() {
                return this.inner[0];
            },
            set: function(t) {
                this.inner[0] = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, 1, {
            get: function() {
                return this.inner[1];
            },
            set: function(t) {
                this.inner[1] = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "x", {
            get: function() {
                return this.inner[0];
            },
            set: function(t) {
                this.inner[0] = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "y", {
            get: function() {
                return this.inner[1];
            },
            set: function(t) {
                this.inner[1] = t;
            },
            enumerable: !0,
            configurable: !0
        }), t.subtract = function(t, e, i) {
            return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t;
        }, t.prototype.subtract = function(e, i) {
            return this.inner = t.subtract(this.inner, e.inner, i.inner), this;
        }, t.len = function(t) {
            var e = t[0], i = t[1];
            return Math.sqrt(e * e + i * i);
        }, t.prototype.len = function() {
            return t.len(this.inner);
        }, t.dot = function(t, e) {
            return t[0] * e[0] + t[1] * e[1];
        }, t.prototype.dot = function(e) {
            return t.dot(this.inner, e.inner);
        }, t.prototype.toString = function() {
            return "Vec2(" + this.inner[0] + ", " + this.inner[1] + ")";
        }, t;
    }();
    e.Vec2 = n;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(7), a = i(40), s = i(11), c = i(13), u = i(33), h = i(62), l = i(41), p = i(0);
    e.BLOCKS_KEY = "blocks";
    var d = function(t) {
        function i() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.blocks = [], e;
        }
        return n(i, t), i.prototype.stageScript = function() {
            return new h.HSStageScript(this);
        }, i.prototype.addObjectIDFromJSON = function(t) {
            void 0 === t && (t = {}), this.objectID = t[s.SCRIPT_ID_KEY];
        }, i.prototype.isImmediatelyRecursive = function() {
            return this.blocks.length > 0 && this.blocks[0].scripts && this.blocks[0].scripts[0] === this || !this.firstMethod(0);
        }, i.prototype.firstMethod = function(t) {
            if (t > 30) return null;
            var e = this.blocks[0];
            return e ? e.isControl ? e.scripts[0] ? e.scripts[0].firstMethod(t + 1) : null : e : this;
        }, i.prototype.containsChangeCostume = function(t) {
            void 0 === t && (t = {});
            for (var e = 0; e < this.blocks.length; e++) {
                var i = this.blocks[e];
                if (i.type === p.HSBlockType.ChangeCostume) return !0;
                var r = i;
                if (r.scripts) for (var n = 0; n < r.scripts.length; n++) {
                    var o = r.scripts[n], a = o.objectID;
                    if (!t[a] && (t[a] = !0, o.containsChangeCostume(t))) return !0;
                }
            }
            return !1;
        }, i.prototype.parseJSON = function(t) {
            var i = this;
            void 0 === t && (t = {}), (t[e.BLOCKS_KEY] || []).forEach(function(t) {
                var e;
                switch (c.HSBlock.blockClassForDict(t)) {
                  case c.HSBlockClass.Control:
                    e = new u.HSControlBlock(i.context);
                    break;

                  case c.HSBlockClass.Method:
                    e = new l.HSMethodBlock(i.context);
                    break;

                  case c.HSBlockClass.ConditionalControl:
                    e = new a.HSConditionalControl(i.context);
                }
                e.parseJSON(t), i.blocks.push(e);
            });
        }, i.key = "HSScript", i;
    }(o.HSManagedObject);
    e.HSScript = d, window.HSScript = d, window.BLOCKS_KEY = e.BLOCKS_KEY;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o, a = i(1), s = i(15), c = i(21), u = i(3), h = function() {
        this.width = 0;
    };
    e.HSLineBox = h, function(t) {
        t[t.center = 1] = "center", t[t.left = 2] = "left";
    }(o = e.HSTextJustify || (e.HSTextJustify = {}));
    var l = function() {
        function t(t, e) {
            return this.text = t, this.kind = e, e === c.HSTextNodeKind.emoji ? new p(t) : e === c.HSTextNodeKind.geometricShape ? new d(t) : void 0;
        }
        return t.prototype.prevWhitespace = function() {
            return this.kind === c.HSTextNodeKind.whitespace ? this : this.kind !== c.HSTextNodeKind.newline && this.prev ? this.prev.prevWhitespace() : null;
        }, t.prototype.tail = function() {
            return this.next ? this.next.tail() : this;
        }, t.concat = function(t, e) {
            if (t) {
                var i = t.tail();
                i.next = e, e && (e.prev = i);
            }
            return t || e;
        }, t.prototype.concat = function(e) {
            return t.concat(this, e);
        }, t.prototype.replace = function(t) {
            t.prev = this.prev, t.prev && (t.prev.next = t);
            var e = t.tail();
            return e.next = this.next, e.next && (e.next.prev = e), t;
        }, t.prototype.flow = function(e, i, r) {
            r = r || o.center;
            var n = this, a = {
                width: 0,
                height: 0
            };
            function s() {
                var i = n.x + n.measure(e).width, r = n.y + t.LINE_HEIGHT;
                a = {
                    width: Math.max(i, a.width),
                    height: r
                }, n = n.next;
            }
            for (;n; ) {
                var u = n.measure(e);
                if (n.prev) {
                    var l = n.prev.measure(e).width;
                    n.x = n.prev.x + l, n.y = n.prev.y, n.lineBox = n.prev.lineBox;
                } else n.x = 0, n.y = 0, n.lineBox = new h();
                if (n.lineBox.width = n.x + u.width, n.kind === c.HSTextNodeKind.newline) n.y += t.LINE_HEIGHT, 
                n.x = 0, n.lineBox = new h(), s(); else if (n.x + u.width > i) {
                    var p = n.prevWhitespace();
                    if (p) {
                        var d = new t("\n", c.HSTextNodeKind.newline);
                        n = p.replace(d);
                    } else n = n.replace(n.forceLineBreak(e, i));
                } else s();
            }
            return r === o.center && this.center(a), a;
        }, t.prototype.center = function(t) {
            this.x += (t.width - this.lineBox.width) / 2, this.next && this.next.center(t);
        }, t.prototype.measure = function(t) {
            return this.kind === c.HSTextNodeKind.newline ? {
                width: 0
            } : t.measureText(this.text);
        }, t.prototype.allNodes = function() {
            return (this.next ? this.next.allNodes() : []).concat(this);
        }, t.prototype.draw = function(t) {
            return Promise.all(this.allNodes().map(function(e) {
                return e.drawNode(t);
            }));
        }, t.prototype.drawNode = function(t) {
            return t.fillText(this.text, this.x, this.y), null;
        }, t.prototype.forceLineBreak = function(e, i) {
            for (var r = "", n = this.text, o = 0; o !== n.length; ++o) {
                var a = r + n[o];
                if (e.measureText(a).width > i) {
                    var s = t.parse(r).head, u = new t("\n", c.HSTextNodeKind.newline);
                    s.concat(u);
                    var h = new t(this.text.substr(r.length), this.kind);
                    return u.concat(h), s;
                }
                r = a;
            }
            return this;
        }, t.prototype.toString = function() {
            return this.text + (this.next ? this.next.toString() : "");
        }, t.fromString = function(e) {
            return t.parse(e).head;
        }, t.parse = function(e) {
            var i, r;
            return c.HSTokenizer.tokenize(e).forEach(function(e) {
                var n = new t(e.text, e.kind);
                t.concat(i, n), i = n, r || (r = i);
            }), {
                head: r,
                tail: i
            };
        }, t.MAX_LINE_WIDTH = 600, t.LINE_HEIGHT = 55, t;
    }();
    e.HSTextNode = l;
    var p = function(t) {
        function e(e) {
            var i = t.call(this, e, null) || this;
            return i.kind = c.HSTextNodeKind.emoji, i;
        }
        return n(e, t), e.prototype.drawNode = function(i) {
            var r = this;
            return e.getImage({
                text: this.text,
                color: u.HSColor.hsbStringFromRgbString(i.fillStyle)
            }).then(function(t) {
                var n = a.isIOSApp() ? t.width : e.WIDTH, o = a.isIOSApp() ? t.height : e.HEIGHT;
                i.drawImage(t, r.x, r.y, n, o);
            }).catch(function(e) {
                return t.prototype.drawNode.call(r, i);
            });
        }, e.getImageInfo = function(t) {
            return a.isIOSApp() ? a.requestTextureFromApp({
                type: "emoji",
                props: t
            }).then(function(t) {
                return {
                    dataURI: t.dataURI,
                    scaleFactor: window.devicePixelRatio
                };
            }) : Promise.resolve({
                dataURI: a.emoji.getImage(t.text),
                scaleFactor: 1
            });
        }, e.getImage = function(t) {
            return this.getImageInfo(t).then(function(t) {
                var e = t.dataURI;
                return s.HSMain.HS_EMOJI_HOST && (e = e.replace("/assets", s.HSMain.HS_EMOJI_HOST)), 
                a.getImageFromUri(e).then(function(e) {
                    return e.width /= t.scaleFactor, e.height /= t.scaleFactor, e;
                });
            });
        }, e.prototype.measure = function(t) {
            return {
                width: e.WIDTH
            };
        }, e.prototype.forceLineBreak = function(t, i) {
            var r = l.fromString("\n"), n = new e(this.text);
            return r.concat(n), r;
        }, e.HEIGHT = 40, e.WIDTH = 40, e;
    }(l);
    e.HSEmojiTextNode = p;
    var d = function(t) {
        function e(e) {
            var i = t.call(this, e, null) || this;
            return i.kind = c.HSTextNodeKind.geometricShape, i.kind = c.HSTextNodeKind.geometricShape, 
            i;
        }
        return n(e, t), e.prototype.drawNode = function(t) {
            var i = t.font, r = +t.font.match(/^\d*/), n = Math.round(r * this.getScaleFactor()), o = this.measure(t).width;
            t.font = n + "px " + e.FONT_FAMILIES.join(", ");
            var a = t.measureText(this.text).width;
            return t.fillText(this.text, this.x + (o - a) / 2, this.y + o - a + 1.5), t.font = i, 
            Promise.resolve(null);
        }, e.prototype.getScaleFactor = function() {
            return "■" === this.text ? .85 : .81;
        }, e.prototype.measure = function(t) {
            var i = t.font, r = +t.font.match(/^\d*/);
            t.font = r + "px " + e.FONT_FAMILIES.join(", ");
            var n = t.measureText(this.text);
            return t.font = i, n;
        }, e.FONT_FAMILIES = [ "Avenir-Book", "STIXGeneral", "sans-serif" ], e;
    }(l);
    e.HSGeometricShapeTextNode = d, window.HSLineBox = h, window.HSTextJustify = o, 
    window.HSTextNode = l, window.HSEmojiTextNode = p, window.HSGeometricShapeTextNode = d;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r, n = i(1);
    !function(t) {
        t[t.text = 0] = "text", t[t.whitespace = 1] = "whitespace", t[t.newline = 2] = "newline", 
        t[t.emoji = 3] = "emoji", t[t.geometricShape = 4] = "geometricShape";
    }(r = e.HSTextNodeKind || (e.HSTextNodeKind = {}));
    var o = function(t, e) {
        this.text = t, this.kind = e;
    };
    e.HSToken = o;
    var a = function() {
        function t() {}
        return t.hasDrawableTokens = function(e) {
            return null != e && /\S/.test(e) && !t.ONLY_VARIATION_SELECTORS.test(e);
        }, t.tokenize = function(e) {
            if (this.tokenizedStringsCache.has(e)) return this.tokenizedStringsCache.get(e);
            var i, a = [], s = 0, c = null;
            for (i = 0; i < e.length; i++) if (" " === e[i] || "	" === e[i]) c !== r.whitespace && (i > s && a.push(new o(e.substring(s, i), c)), 
            s = i, c = r.whitespace); else if ("\n" === e[i]) i > s && c !== r.whitespace && a.push(new o(e.substring(s, i), c)), 
            s = i, c = r.newline; else if (t.ZERO_WIDTH_JOINER.test(e[i]) && c === r.emoji) {
                if (i += 1, this.isEmojiStartIndex(e, i)) {
                    var u = e.slice(i, i + 5).match(n.emoji.regex);
                    u && u[0] && (i += u[0].length - 1);
                }
            } else if (t.ONLY_VARIATION_SELECTORS.test(e[i]) && c !== r.text) {
                if (i > s) {
                    var h = i;
                    c === r.emoji && (h = i + 1), a.push(new o(e.substring(s, h), c));
                }
                s = i + 1, c = null;
            } else if (this.isEmojiStartIndex(e, i)) {
                i > s && a.push(new o(e.substring(s, i), c)), s = i, c = r.emoji;
                var l = 5;
                this.isUnicodeEmojiStartIndex(e, i) && (l = 2);
                var p = e.slice(i, i + l), d = t.emojiMatch(p);
                if (d) i += p.indexOf(d[0]) + (d[0].length - 1);
            } else !n.iOS && t.GEOMETRIC_SHAPES.test(e[i]) ? (i > s && a.push(new o(e.substring(s, i), c)), 
            s = i, c = r.geometricShape) : c !== r.text && (i > s && a.push(new o(e.substring(s, i), c)), 
            s = i, c = r.text);
            return i > s && null !== c && a.push(new o(e.substring(s, i), c)), this.clearTokenCacheIfNecessary(), 
            this.tokenizedStringsCache.set(e, a), a;
        }, t.clearTokenCacheIfNecessary = function() {
            this.tokenizedStringsCache.size > 30 && this.tokenizedStringsCache.delete(this.tokenizedStringsCache.keys().next().value);
        }, t.isEmojiStartIndex = function(e, i) {
            var r = e.slice(i, i + 5);
            return t.startsWithEmojiRegex.test(r) || t.secondCharIsSurrogate.test(r);
        }, t.isUnicodeEmojiStartIndex = function(e, i) {
            var r = e.slice(i, i + 5);
            return !(t.startsWithEmojiRegex.test(r) || t.fitzRegex.test(r));
        }, t.emojiMatch = function(e) {
            return e.match(n.emoji.regex) || e.match(t.secondCharIsSurrogate);
        }, t.rangeOfFirstEmojiStartingAtIndex = function(t, e) {
            var i = t.slice(e, e + 7).match(/[\ufe00-\ufe0f\u200d\u2640]$/);
            return 0 === i.length ? e : t.indexOf(i[0]) + 1;
        }, t.ONLY_VARIATION_SELECTORS = /^[\ufe00-\ufe0f]*$/, t.ZERO_WIDTH_JOINER = /[\u200d]/, 
        t.GEOMETRIC_SHAPES = /[\u25A0-\u25CF\u25E0-\u25E1\u25E6-\u25FF]/, t.tokenizedStringsCache = new Map(), 
        t.highSurrogates = "�-�", t.lowSurrogates = String.fromCharCode(56320) + "-" + String.fromCharCode(57343), 
        t.surrogateRegex = RegExp("[" + t.lowSurrogates + t.highSurrogates + "]"), t.secondCharIsSurrogate = RegExp("^.[" + t.lowSurrogates + "]"), 
        t.startsWithEmojiRegex = RegExp("^" + n.emoji.regex.source), t.fitzpatricks = String.fromCharCode(55356) + "[" + String.fromCharCode(57088) + "-" + String.fromCharCode(57343) + "]", 
        t.fitzRegex = RegExp("" + t.fitzpatricks), t;
    }();
    e.HSTokenizer = a, window.HSTextNodeKind = r, window.HSToken = o, window.HSTokenizer = a;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(1), n = function() {
        function t() {}
        return t.accelerometerFromIOSApp = function(t, e) {
            this.listener(t), this.isShakingFromApp = e;
        }, t.listener = function(t) {
            var e = t.accelerationIncludingGravity, i = Math.hypot(e.x, e.y, e.z) || 9.8, n = Math.round(100 * e.x / i), o = Math.round(100 * e.y / i), a = window.orientation;
            null == a || -90 === a ? (this.tiltUp = n, this.tiltRight = o) : 90 === a ? (this.tiltUp = -n, 
            this.tiltRight = -o) : 0 === a ? (this.tiltUp = -o, this.tiltRight = n) : (this.tiltUp = o, 
            this.tiltRight = -n), this.tiltDown = -this.tiltUp, this.tiltLeft = -this.tiltRight, 
            r.isIOSApp() || this.updateShakeData(t.acceleration.x, t.acceleration.y, t.acceleration.z);
        }, t.startAccelerometerUpdates = function() {
            "DeviceMotionEvent" in window && !this.isListening && ("function" == typeof DeviceMotionEvent.requestPermission ? this.enableIOS13Accelerometer() : this.enableAccelerometer());
        }, t.enableIOS13Accelerometer = function() {
            this.isListening || r.isIOSApp() || window.addEventListener("touchend", t.deviceRequestPermissionIOS13);
        }, t.enableAccelerometer = function() {
            this.isListening || (this.isListening = !0, window.addEventListener("devicemotion", this.listener.bind(this), !1));
        }, t.tiltDirection = function() {
            if (!this.tiltRight || !this.tiltUp) return null;
            return r.hs_direction(this.tiltRight, this.tiltUp, 30);
        }, t.updateShakeData = function(e, i, r) {
            this.xAccelerations.push(e), this.yAccelerations.push(i), this.zAccelerations.push(r), 
            this.xAccelerations.length > t.SHAKE_MEMORY_COUNT && this.xAccelerations.shift(), 
            this.yAccelerations.length > t.SHAKE_MEMORY_COUNT && this.yAccelerations.shift(), 
            this.zAccelerations.length > t.SHAKE_MEMORY_COUNT && this.zAccelerations.shift();
        }, t.isShaking = function() {
            return r.isIOSApp() ? this.isShakingFromApp : [ this.xAccelerations, this.yAccelerations, this.zAccelerations ].some(function(e) {
                return Math.abs(r.mean(e)) < t.SUDDEN_ACCEL_THRESHOLD && r.variance(e) > t.SHAKE_SENSITIVITY;
            });
        }, t.isListening = !1, t.isShakingFromApp = !1, t.tiltUp = 0, t.tiltDown = 0, t.tiltLeft = 0, 
        t.tiltRight = 0, t.deviceRequestPermissionIOS13 = function() {
            DeviceMotionEvent.requestPermission().then(function(e) {
                "granted" === e && (t.enableAccelerometer(), window.removeEventListener("touchend", t.deviceRequestPermissionIOS13));
            }).catch(console.error);
        }, t.xAccelerations = [], t.yAccelerations = [], t.zAccelerations = [], t.SHAKE_MEMORY_COUNT = 10, 
        t.SHAKE_SENSITIVITY = 60, t.SUDDEN_ACCEL_THRESHOLD = 2, t;
    }();
    e.HSAccelerometerManager = n, window.HSAccelerometerManager = n;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(34), n = i(5), o = i(1), a = i(21), s = i(4), c = i(44), u = i(35), h = i(20), l = i(17), p = i(48), d = i(49), S = i(6), f = i(53), g = i(0), y = i(3), b = i(18);
    e.BASE_SPEED = 400, e.BASE_STEP_SIZE = 10, e.EDGE_OF_SCREEN_OBJECT_ID = "zzzEdge", 
    e.DEBUG_DRAW_BOUNDING_BOXES = !1;
    var v = function() {
        function t(i, n, o, a, s, c, l, p, f, g, y) {
            var b = this;
            void 0 === g && (g = 1), void 0 === y && (y = 1), this.x = i, this.y = n, this.text = o, 
            this.type = a, this.baseObjectScale = s, this.fontSize = c, this.objectID = l, this.imageName = p, 
            this.willChangeCostume = f, this.originalWidth = g, this.originalHeight = y, this.createOrder = -1, 
            this._animationNumber = 0, this.sizePercentWidth = 100, this.sizePercentHeight = 100, 
            this.headingInDegrees = 0, this.speed = e.BASE_SPEED, this.invisibilityPercent = 0, 
            this.isFlipped = !1, this.drawingRadius = null, this.drawingColor = null, this.penDown = !1, 
            this.creationTick = null, this.relatedCollisionRules = new Set(), this.collisionImageFactory = new d.HSCollisionImageFactory(), 
            this.stageRules = [], this.cloneIndex = 0, this.zIndex = 0, this.isAlive = !0, this.resetTextSize = function() {
                var t = h.HSTextNode.fromString(b.text), e = b.view.canvas;
                if (e) {
                    if (t) {
                        var i = t.flow(e.getContext("2d"), h.HSTextNode.MAX_LINE_WIDTH), r = i.width, n = i.height;
                        b.originalWidth = r, b.originalHeight = n, b.collisionObject = null;
                    }
                } else b.view.onTextureBuild = b.resetTextSize;
            }, t.initEdges(), this.createOrder = ++t.OBJECTS_CREATED, this.color = this.colorForType(a), 
            this.stageObjectID = t.uniqueIdCounter++, this.type === S.HSObjectType.text ? this.text = o : this.text = null, 
            this.pathDrawer = new r.HSPathDrawer(this.currentPoint()), this.view = new u.HSView(this.viewProps());
        }
        return t.initEdges = function() {
            t.initiatedEdgeOfScreen || (t.initiatedEdgeOfScreen = !0, t.edgeOfScreenObject = new t(0, 0, "", S.HSObjectType.edgeOfScreen, 1, 80, e.EDGE_OF_SCREEN_OBJECT_ID, null, !1));
        }, t.prototype.setWidth = function(t) {
            0 === t && (t = .01), t && (this.sizePercentWidth = t / this.originalWidth * (1 / this.baseScale()) * 100);
        }, t.prototype.setHeight = function(t) {
            0 === t && (t = .01), t && (this.sizePercentHeight = t / this.originalHeight * (1 / this.baseScale()) * 100);
        }, t.prototype.width = function() {
            return this.view.textureExists ? this.view.width() : Math.round(this.originalWidth * this.baseScale());
        }, t.prototype.height = function() {
            return this.view.textureExists ? this.view.height() : Math.round(this.originalHeight * this.baseScale());
        }, t.prototype.colorForType = function(t) {
            return this.type === S.HSObjectType.text ? y.HSColor.rgbTextColor : this.isShape() ? y.HSColor.rgbTextColor : y.HSColor.rgbWhiteColor;
        }, t.prototype.originalObject = function(t) {
            var e = t.findWithObjectID(n.HSObject.key, this.objectID);
            return e ? e.stageObject() : null;
        }, t.prototype.baseScale = function() {
            return this.isFullSizeShape() ? .5 : 1;
        }, t.prototype.isFullSizeShape = function() {
            return S.hsIsFullSizeShape(this.type);
        }, t.prototype.isShape = function() {
            return S.hsIsShapeType(this.type);
        }, t.prototype.update = function() {
            this.isAlive && this.view.update(this.viewProps());
        }, t.prototype.viewProps = function() {
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
        }, t.prototype.imageForCollision = function() {
            return this.collisionImageFactory.image(this.view.imageSource());
        }, t.prototype.boundingBox = function() {
            this._boundingBox || (this._boundingBox = new p.HSBoundingBox());
            var t = this.view.bounds();
            return this._boundingBox.update(this.x, this.y, t.width / 2, t.height / 2), this._boundingBox;
        }, t.prototype.drawPath = function(t) {
            this.pathDrawer.drawDiff(t);
        }, t.prototype.isBlankTextObject = function() {
            return this.type === S.HSObjectType.text && !this.shouldDrawText();
        }, t.prototype.shouldDrawText = function() {
            return a.HSTokenizer.hasDrawableTokens(this.text);
        }, t.prototype.canDrawCharacter = function() {
            return this.type !== S.HSObjectType.text;
        }, t.prototype.canDrawImage = function() {
            return !!this.imageName;
        }, t.prototype.opacity = function() {
            return .01 * Math.max(100 - this.invisibilityPercent, 0);
        }, t.prototype.clear = function() {
            l.HopscotchDrawingContext.shouldClear = !0;
        }, t.prototype.maxStepSize = function() {
            var t = this.speed / e.BASE_SPEED * e.BASE_STEP_SIZE;
            return Math.abs(t) >= 1 ? t : Math.sign(t);
        }, t.prototype.headingInRadians = function() {
            return this.headingInDegrees * Math.PI / 180;
        }, t.prototype.changeXBy = function(t) {
            this.x += t, this.moveToWithinBoundary(), this.pathDrawer.addPoint(this.currentPoint(), this.penDown);
        }, t.prototype.changeYBy = function(t) {
            this.y += t, this.moveToWithinBoundary(), this.pathDrawer.addPoint(this.currentPoint(), this.penDown);
        }, t.prototype.setPosition = function(t, e) {
            this.x = t, this.y = e, this.pathDrawer.addPoint(this.currentPoint(), this.penDown);
        }, t.prototype.setOrigin = function(t, e) {
            this.setPosition(t + .5 * this.width(), e + .5 * this.height());
        }, t.prototype.rotateBy = function(e) {
            this.headingInDegrees = t.normalizeHeading(this.headingInDegrees + e * this.multiplier());
        }, t.prototype.moveBy = function(t) {
            this.x += this.multiplier() * Math.cos(this.headingInRadians()) * t, this.y += this.multiplier() * Math.sin(this.headingInRadians()) * t, 
            this.moveToWithinBoundary(), this.pathDrawer.addPoint(this.currentPoint(), this.penDown);
        }, t.prototype.setText = function(t, e) {
            this.text = t, this.color = e, this.type = S.HSObjectType.text, this.resetTextSize();
        }, t.prototype.setCharacter = function(t) {
            this.type = t, this.color = this.colorForType(t), this._animationNumber = 0, this.text = null, 
            this.imageName = null, f.HSOBJECT_SIZES[t] && (this.originalWidth = f.HSOBJECT_SIZES[t].width, 
            this.originalHeight = f.HSOBJECT_SIZES[t].height);
        }, t.prototype.setImage = function(t) {
            this.type = S.HSObjectType.image, this.color = this.colorForType(S.HSObjectType.image), 
            this._animationNumber = 0, this.text = null, t && (this.imageName = t.fileName, 
            this.originalWidth = t.width, this.originalHeight = t.height);
        }, t.prototype.changePose = function() {
            this.isShape() || this._animationNumber++;
        }, t.prototype.animationNumber = function() {
            return this._animationNumber % 4;
        }, t.prototype.bringToFront = function() {
            this.bringToFrontFunction(this);
        }, t.prototype.sendToBack = function() {
            this.sendToBackFunction(this);
        }, t.prototype.clone = function(t) {
            this.cloneFunction(this, t);
        }, t.prototype.addToDestroyQueue = function() {
            this.isAlive = !1, this.destroyFunction(this);
        }, t.prototype.queueEventMessage = function(t) {
            this.broadcastMessageFunction(t);
        }, t.prototype.destroy = function() {
            this.view = null, this.stageRules = [];
        }, t.prototype.isInvisible = function() {
            return this.invisibilityPercent >= 100;
        }, t.prototype.deepCopy = function(e, i) {
            var r = new t(i.x, i.y, i.text, i.type, i.context.baseObjectScale, i.context.fontSize, i.objectID, i.fileName(), i.willChangeCostume, this.originalWidth, this.originalHeight);
            return r.stageRules = this.stageRules.map(function(t) {
                return t.deepCopy(r);
            }), r;
        }, t.prototype.break = function() {
            this.stageRules.forEach(function(t) {
                return t.break();
            });
        }, t.normalizeHeading = function(t) {
            return (t % 360 + 360) % 360;
        }, t.prototype.currentPoint = function() {
            return new r.HSLinePoint(new b.Vec2(this.x, this.y), this.drawingRadius, this);
        }, t.prototype.moveToWithinBoundary = function() {
            this.x = Math.min(this.x, s.HSStageScene.stageWidth), this.x = Math.max(this.x, 0), 
            this.y = Math.min(this.y, s.HSStageScene.stageHeight), this.y = Math.max(this.y, 0);
        }, t.prototype.multiplier = function() {
            return this.isFlipped ? -1 : 1;
        }, t.prototype.activateAllStageRulesForEventType = function(t, e) {
            this.allStageRulesForEventTypeAndObject(t, e).forEach(function(t) {
                return t.activate();
            });
        }, t.prototype.allStageRulesForEventTypeAndObject = function(t, e) {
            return this.allStageRulesForEventType(t).filter(function(t) {
                return t.matchesFirstObject(e);
            });
        }, t.prototype.allStageRulesForEventType = function(t) {
            return this.stageRules.filter(function(e) {
                return e.matchesEvent(t);
            });
        }, t.prototype.allPossibleCollisionPairs = function() {
            var t = this.allStageRulesForEventType(g.HSBlockType.EventOperatorIsTouching), e = this.allStageRulesForEventType(g.HSBlockType.EventOperatorIsNotTouching), i = this.allStageRulesForEventType(g.HSBlockType.EventOperatorBump);
            return t.concat(e).concat(i).reduce(function(t, e) {
                return t.concat(e.collisionPairs());
            }, []);
        }, t.prototype.executeActiveRules = function() {
            for (var t = this.stageRules, e = t.length, i = 0; i !== e; ++i) t[i].conditionIsTrue(this) && (t[i].hasBlocksToExecute() || (t[i].isActive = !1), 
            t[i].activate()), t[i].execute(this);
        }, t.prototype.executeBlock = function(e) {
            var i, r, n, a, u, h, l = e.firstIntegerValue(this), p = e.parameters;
            switch (e.type) {
              case g.HSBlockType.Move:
                this.moveBy(l);
                break;

              case g.HSBlockType.SetPosition:
                this.setPosition(p[0].computedNumberValue(this), p[1].computedNumberValue(this));
                break;

              case g.HSBlockType.SetSize:
                if (null === (i = p[0]) || void 0 === i ? void 0 : i.isSet(this)) {
                    var d = null === (r = p[0]) || void 0 === r ? void 0 : r.computedValue(this);
                    "number" == typeof d && (this.sizePercentWidth = d, this.sizePercentHeight = d);
                }
                break;

              case g.HSBlockType.Grow:
                n = Math.max(100 + l, 0), this.sizePercentWidth *= .01 * n, this.sizePercentHeight *= .01 * n;
                break;

              case g.HSBlockType.Scale:
                this.sizePercentWidth *= .01 * l, this.sizePercentHeight *= .01 * l;
                break;

              case g.HSBlockType.Shrink:
                n = Math.max(100 - l, 0), a = this.sizePercentWidth * n * .01, this.sizePercentWidth = Math.max(a, 1e-7), 
                a = this.sizePercentHeight * n * .01, this.sizePercentHeight = Math.max(a, 1e-7);
                break;

              case g.HSBlockType.SetHeading:
                this.headingInDegrees = t.normalizeHeading(l);
                break;

              case g.HSBlockType.ChangeX:
                this.changeXBy(l);
                break;

              case g.HSBlockType.ChangeY:
                this.changeYBy(l);
                break;

              case g.HSBlockType.Rotate:
                this.rotateBy(l);
                break;

              case g.HSBlockType.ChangeSpeed:
                this.speed = l;
                break;

              case g.HSBlockType.SetInvisibility:
                this.invisibilityPercent = l;
                break;

              case g.HSBlockType.Flip:
                this.isFlipped = !this.isFlipped;
                break;

              case g.HSBlockType.StrokeColor:
                this.drawingColor = p[0].computedColorString(this);
                break;

              case g.HSBlockType.StrokeWidth:
                this.drawingRadius = l / 2;
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
                h = y.HSColor.rgbTextColor, p.length >= 2 && (h = p[1].computedColorString(this)), 
                this.setText(p[0].computedStringValue(this), h);
                break;

              case g.HSBlockType.SetTextToInput:
                s.HSStageScene.promptsToExecute.push(new c.HSStagePrompt(this, e));
                break;

              case g.HSBlockType.SetVariable:
                (u = p[0].variable()) && (u.isSkillComplete() && 1 === p[1].computedValue(this) && o.HSApp.sendToApp("hsSkillComplete", "1"), 
                u.setValue(p[1].computedValue(this), this));
                break;

              case g.HSBlockType.SaveInput:
                s.HSStageScene.promptsToExecute.push(new c.HSStagePrompt(this, e));
                break;

              case g.HSBlockType.ChangeVariable:
                if (u = p[0].variable()) {
                    var f = u.computedNumberValue(this) + p[1].computedNumberValue(this);
                    u.setValue(f, this);
                }
                break;

              case g.HSBlockType.BringToFront:
                this.bringToFront();
                break;

              case g.HSBlockType.SendToBack:
                this.sendToBack();
                break;

              case g.HSBlockType.SetImage:
                p[0].computedObjectType() === S.HSObjectType.text ? this.setText(p[0].value, y.HSColor.rgbTextColor) : p[0].computedObjectType() === S.HSObjectType.image ? this.setImage(p[0].childBlock) : this.setCharacter(p[0].computedObjectType());
                break;

              case g.HSBlockType.SetColor:
                this.color = p[0].computedColorString(this);
                break;

              case g.HSBlockType.SetWidthAndHeight:
                p[0].isSet(this) && this.setWidth(p[0].computedNumberValue(this)), p[1].isSet(this) && this.setHeight(p[1].computedNumberValue(this));
                break;

              case g.HSBlockType.SetZIndex:
                var b = p[0].computedNumberValue(this);
                b !== this.zIndex && (this.zIndex = b, s.HSStageScene.dirtySort = !0);
                break;

              case g.HSBlockType.SetOriginXY:
                this.setOrigin(p[0].computedNumberValue(this), p[1].computedNumberValue(this));
                break;

              case g.HSBlockType.SetCenterXY:
                this.setPosition(p[0].computedNumberValue(this), p[1].computedNumberValue(this));
				break;
				
			  case HSBlockType.None: //AE_MOD
				if (/^_ae_webplayer_action:/g.test(p[0].value)){
					AE_MOD.webplayer_action(p[0].value.split('_ae_webplayer_action:')[1], (p[1]?.computedValue(this)),this);
				}
				break;
            }
        }, Object.defineProperty(t.prototype, "originX", {
            get: function() {
                return this.x - .5 * this.width();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "originY", {
            get: function() {
                return this.y - .5 * this.height();
            },
            enumerable: !0,
            configurable: !0
        }), t.OBJECTS_CREATED = 0, t.uniqueIdCounter = 0, t.initiatedEdgeOfScreen = !1, 
        t;
    }();
    e.HSStageObject = v, window.HSStageObject = v, window.BASE_SPEED = e.BASE_SPEED, 
    window.BASE_STEP_SIZE = e.BASE_STEP_SIZE, window.EDGE_OF_SCREEN_OBJECT_ID = e.EDGE_OF_SCREEN_OBJECT_ID, 
    window.DEBUG_DRAW_BOUNDING_BOXES = e.DEBUG_DRAW_BOUNDING_BOXES;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(8), n = i(9), o = i(6), a = i(0), s = i(3), c = function() {
        function t(t, e) {
            void 0 === e && (e = null), this.value = t, this.childBlock = e;
        }
        return t.prototype.variable = function() {
            return this.childBlock && this.childBlock.type === a.HSBlockType.Variable ? this.childBlock : null;
        }, t.prototype.computedStringValue = function(t) {
            return this.childBlock ? this.childBlock.computedStringValue(t) : r.HSVariable.parseValue(this.value).toString();
        }, t.prototype.computedObjectType = function() {
            return this.childBlock ? o.HSObjectType.image : "string" == typeof this.value ? o.HSObjectType.text : this.value;
        }, t.prototype.isSet = function(t) {
            return null !== this.value || null != this.childBlockValue(t);
        }, t.prototype.computedBooleanValue = function(t) {
            var e = this.computedValue(t);
            return "0" !== e && !!e;
        }, t.prototype.computedValue = function(t) {
            var e = this.childBlockValue(t);
            return null != e ? e : r.HSVariable.parseValue(this.value);
        }, t.prototype.computedNumberValue = function(t) {
            return r.HSVariable.parseNumberFrom(this.computedValue(t));
        }, t.prototype.computedColorString = function(t) {
            return this.childBlock ? this.childBlock.computedColorString(t) : s.HSColor.rgbStringFromHSBString(this.computedStringValue(t));
        }, t.prototype.toString = function() {
            return n.SourceFormatter.stageParamToSrc(this.value, this.childBlock);
        }, t.prototype.childBlockValue = function(t) {
            return this.childBlock ? this.childBlock.computedValue(t) : null;
        }, t;
    }();
    e.HSStageParameter = c, window.HSStageParameter = c;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(7), a = i(0), s = i(1);
    e.OBJECT_ID_STRING_KEY = "objectIdString";
    var c = function(t) {
        function i(e) {
            return t.call(this, e) || this;
        }
        return n(i, t), i.prototype.parseJSON = function(t) {
            void 0 === t && (t = {}), this.objectID = t[e.OBJECT_ID_STRING_KEY], this.name = t.name, 
            this.type = t.type || a.HSBlockType.Object, this.initialValue = this.getInitialValue();
        }, i.prototype.getInitialValue = function() {
            return this.type !== a.HSBlockType.User ? "0" : s.HSApp.initialUserVariables[this.objectID] || "0";
        }, i.key = "HSVariablePrototype", i;
    }(o.HSManagedObject);
    e.HSVariablePrototype = c, window.HSVariablePrototype = c;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(5), a = i(10);
    e.EVENT_PARAMETER_OBJECT_ID_KEY = "id", e.EVENT_PARAMETER_TYPE_KEY = "blockType", 
    e.EVENT_PARAMETER_OBJECT_KEY = "objectID";
    var s = function(t) {
        function i() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return n(i, t), i.prototype.parseJSON = function(i) {
            void 0 === i && (i = {}), t.prototype.parseJSON.call(this, i), this.objectID = i[e.EVENT_PARAMETER_OBJECT_ID_KEY], 
            this.type = i[e.EVENT_PARAMETER_TYPE_KEY];
            var r = this.context.findWithObjectID(o.HSObject.key, i[e.EVENT_PARAMETER_OBJECT_KEY]);
            this.object = r;
        }, i.key = "HSEventParameterBlock", i;
    }(a.HSParameterBlock);
    e.HSEventParameterBlock = s, window.HSEventParameterBlock = s;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(1), n = function() {
        function t() {
            this.prefetchedImageCache = new Map();
        }
        return t.prototype.build = function(t, e) {
            var i = this.prefetchedImageCache.get(e.imageName);
            return i ? i.then(function(t) {
                return PIXI.Texture.from(t);
            }) : Promise.reject(null);
        }, t.prototype.buildAll = function(t, e) {
            return this.build(t, e).then(function(t) {
                return [ t ];
            });
        }, t.prototype.prefetchImage = function(t) {
            var e = this;
            if (t && !this.prefetchedImageCache.get(t.fileName)) {
                var i = this.getImageUrl(t.fileName).then(r.getImageFromUri).then(function(i) {
                    return e.resizeImage(i, t.width, t.height);
                });
                this.prefetchedImageCache.set(t.fileName, i);
            }
        }, t.prototype.resizeImage = function(t, e, i) {
            return t.width = e, t.height = i, Promise.resolve(t);
        }, t.prototype.getImageUrl = function(t) {
            return Object.prototype.hasOwnProperty.call(window, "BASE_IMAGE_URL") ? (!/^\w{0,8}(?::\/)?\//.test(t)?this.getImageUrlFromBaseUrl(t):Promise.resolve(t)) /* AE_MOD custom custom */ : this.getImageUrlFromApp(t);
        }, t.prototype.getImageUrlFromBaseUrl = function(t) {
            return Promise.resolve(BASE_IMAGE_URL + t);
        }, t.prototype.getImageUrlFromApp = function(t) {
            return r.requestTextureFromApp({
                fileName: t
            }).then(function(t) {
                return t.dataURI;
            });
        }, t.instance = new t(), t;
    }();
    e.HSImageTextureFactory = n, window.HSImageTextureFactory = n;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(50), n = i(17), o = function() {
        function t(t, e) {
            this.backgroundCanvas = t, this.drawingContext = new n.HopscotchDrawingContext(t, e, this), 
            this.collisionContext = new r.HSCollisionContext();
        }
        return t.collisionResolution = 64, t;
    }();
    e.HSVisualContext = o, window.HSVisualContext = o;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(7), a = i(2), s = i(5), c = i(39), u = i(11), h = i(19), l = i(25), p = i(26), d = i(10), S = i(63);
    e.OBJECTS_KEY = "objects", e.RULES_KEY = "rules", e.VARIABLES_KEY = "variables", 
    e.TRAITS_KEY = "traits", e.EVENT_PARAMETERS_KEY = "eventParameters", e.SCRIPTS_KEY = "abilities", 
    e.SCENES_KEY = "scenes";
    var f = function(t) {
        function i(i, r) {
            void 0 === r && (r = {});
            var n = t.call(this, i) || this;
            return n.context.parseJSON(r), n.parseObjectDictionaries(r[e.OBJECTS_KEY], r[e.SCENES_KEY]), 
            n.parseVariableDictionaries(r[e.VARIABLES_KEY]), n.parseTraitsDictionaries(r[e.TRAITS_KEY]), 
            n.parseEventParameters(r[e.EVENT_PARAMETERS_KEY]), n.parseScriptDictionaries(r[e.SCRIPTS_KEY]), 
            n.parseRulesDictionaries(r[e.RULES_KEY]), n.importCustomRules(r.customRules), n.context.version >= a.HSProjectVersion.CUSTOM_WHENS && n.addRulesToObjects(r[e.OBJECTS_KEY]), 
            n.parseScenesDictionaries(r[e.SCENES_KEY]), n;
        }
        return n(i, t), i.prototype.parseEventParameters = function(t) {
            var e = this;
            void 0 === t && (t = []), t && t.forEach(function(t, i, r) {
                new p.HSEventParameterBlock(e.context).parseJSON(t);
            });
        }, i.prototype.parseVariableDictionaries = function(t) {
            if (void 0 === t && (t = []), t) {
                var e = this.context;
                t.forEach(function(t, i, r) {
                    new l.HSVariablePrototype(e).parseJSON(t);
                });
            }
        }, i.prototype.parseTraitsDictionaries = function(t) {
            if (void 0 === t && (t = []), t) {
                var e = this.context;
                t.forEach(function(t, i, r) {
                    new d.HSParameterBlock(e).parseJSON(t);
                });
            }
        }, i.prototype.parseObjectDictionaries = function(t, i) {
            void 0 === t && (t = []), void 0 === i && (i = []);
            var r = [];
            i.length && (r = i.map(function(t) {
                return null === t[e.OBJECTS_KEY] ? [] : t[e.OBJECTS_KEY];
            }).reduce(function(t, e) {
                return t.concat(e);
            }));
            var n = this.context;
            t.forEach(function(t, e, o) {
                i.length > 0 && !r.includes(t.objectID) || new s.HSObject(n).parseJSON(t);
            });
        }, i.prototype.addRulesToObjects = function(t) {
            void 0 === t && (t = []);
            for (var e = this.context, i = function(t) {
                var i = e.findWithObjectID(s.HSObject.key, t.objectID);
                if (!t.rules || !i || !i.rules) return "continue";
                var r = i.canChangeCostume(), n = !1, o = t.rules.map(function(t) {
                    var i = e.findWithObjectID(u.HSRule.key, t);
                    return !n && r && i && i.script.containsChangeCostume() && (n = !0), i || e.findWithObjectID(S.HSCustomRule.key, t);
                });
                i.rules = o.filter(function(t) {
                    return !!t;
                }), i.willChangeCostume = n;
            }, r = 0, n = t; r < n.length; r++) {
                i(n[r]);
            }
        }, i.prototype.importCustomRules = function(t) {
            void 0 === t && (t = []);
            var e = this.context;
            t instanceof Array || (t = []), t.forEach(function(t, i, r) {
                new S.HSCustomRule(e).parseJSON(t);
            }), t.forEach(function(t, i, r) {
                e.findWithObjectID(S.HSCustomRule.key, t.id).addRulesFromJSON(t);
            });
        }, i.prototype.parseScriptDictionaries = function(t) {
            void 0 === t && (t = []);
            for (var e = [], i = 0; i < t.length; i++) {
                var r = new h.HSScript(this.context);
                e.push(r), r.addObjectIDFromJSON(t[i]);
            }
            for (i = 0; i < e.length; i++) {
                (r = e[i]).parseJSON(t[i]);
            }
        }, i.prototype.parseRulesDictionaries = function(t) {
            void 0 === t && (t = []);
            var e = this.context;
            t.forEach(function(t, i, r) {
                new u.HSRule(e).parseJSON(t);
            });
        }, i.prototype.parseScenesDictionaries = function(t) {
            if (void 0 === t && (t = []), t.length > 0) {
                var e = this.context;
                this.scenes = t.map(function(t) {
                    var i = new c.HSScene(e);
                    return i.parseJSON(t), i;
                });
            } else {
                var i = new c.HSScene(this.context);
                i.parseJSON(), this.scenes = [ i ];
            }
        }, i;
    }(o.HSManagedObject);
    e.HSProject = f, window.HSProject = f, window.OBJECTS_KEY = e.OBJECTS_KEY, window.RULES_KEY = e.RULES_KEY, 
    window.VARIABLES_KEY = e.VARIABLES_KEY, window.TRAITS_KEY = e.TRAITS_KEY, window.EVENT_PARAMETERS_KEY = e.EVENT_PARAMETERS_KEY, 
    window.SCRIPTS_KEY = e.SCRIPTS_KEY, window.SCENES_KEY = e.SCENES_KEY;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(31), n = i(9), o = i(32), a = i(24), s = i(0), c = function() {
        function t(t, e, i) {
            void 0 === i && (i = []), this.type = t, this.scripts = e, this.parameters = i, 
            this.isImmediate = !1;
        }
        return t.prototype.integerValue = function(t) {
            switch (this.type) {
              case s.HSBlockType.Repeat:
                return Math.round(this.firstParameterValue(t));

              case s.HSBlockType.RepeatForever:
                return 1 / 0;

              default:
                return 0;
            }
        }, t.prototype.script = function(t) {
            switch (this.type) {
              case s.HSBlockType.CheckOnceIf:
              case s.HSBlockType.CheckIfElse:
                return this.parameters[0].computedBooleanValue(t) ? this.trueScript() : this.falseScript();

              default:
                return this.trueScript();
            }
        }, t.prototype.trueScript = function() {
            return this.scripts[0].stageScript();
        }, t.prototype.falseScript = function() {
            return this.scripts[1].stageScript();
        }, t.prototype.toString = function() {
            return n.SourceFormatter.stageControlToSrc(this);
        }, t.prototype.firstParameterValue = function(t) {
            return this.parameters.length > 0 ? this.parameters[0].computedNumberValue(t) : 0;
        }, t.prototype.executableForStepSize = function(t, e) {
            switch (this.type) {
              case s.HSBlockType.Repeat:
              case s.HSBlockType.RepeatForever:
                return this.executableForRepeat(t, e);

              case s.HSBlockType.LeaveATrail:
                return this.executableForLeaveATrail(t, e);

              case s.HSBlockType.CheckOnceIf:
              case s.HSBlockType.CheckIfElse:
              case s.HSBlockType.Ability:
                return this.scripts[0].isImmediatelyRecursive() ? new r.HSExecutable([], []) : this.script(e).executableForStepSize(t, e);
            }
        }, t.prototype.executableForRepeat = function(t, e) {
            switch (this.integerValue(e)) {
              case 0:
                return new r.HSExecutable([], []);

              case 1:
                return this.script(e).executableForStepSize(t, e);

              default:
                return this.executableWithRepeatOnTheEnd(t, e);
            }
        }, t.prototype.executableForLeaveATrail = function(t, e) {
            var i = this.script(e).executableForStepSize(t, e), n = [ new o.HSStageMethod(s.HSBlockType.PenDown) ];
            this.parameters[0] && n.push(new o.HSStageMethod(s.HSBlockType.StrokeColor, [ this.parameters[0] ])), 
            this.parameters[1] && n.push(new o.HSStageMethod(s.HSBlockType.StrokeWidth, [ this.parameters[1] ]));
            var a = new o.HSStageMethod(s.HSBlockType.PenUp);
            return new r.HSExecutable(n.concat(i.blocksToExecuteNow), i.blocksToExecuteLater.concat(a));
        }, t.prototype.executableWithRepeatOnTheEnd = function(e, i) {
            var r = this.script(i).executableForStepSize(e, i), n = this.integerValue(i) - 1, o = new a.HSStageParameter("" + n), s = new t(this.type, this.scripts, [ o ]), c = r.blocksToExecuteLater;
            return c.push(s), r.newWithNewBlocksToExecuteLater(c);
        }, t;
    }();
    e.HSStageControl = c, window.HSStageControl = c;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(9), n = i(14), o = i(38), a = i(0), s = i(1), c = function() {
        function t(t, e) {
            this.blocksToExecuteNow = t, this.blocksToExecuteLater = e, this.isImmediate = !1;
        }
        return t.prototype.newWithNewBlocksToExecuteLater = function(e) {
            return new t(this.blocksToExecuteNow, e);
        }, t.prototype.execute = function(t) {
            var e = this;
            this.blocksToExecuteNow.forEach(function(i) {
                return e.executeBlock(i, t);
            });
        }, t.prototype.toString = function() {
            return r.SourceFormatter.executableToSrc(this);
        }, t.prototype.executeBlock = function(t, e) {
            var i = t.parameters;
            switch (t.type) {
              case a.HSBlockType.PlaySoundSeconds:
              case a.HSBlockType.PlaySound:

				function notePath (val) {
					//AE_MOD find path of note
					var isCustom = (!/^((low-|high)?[a-zA-Z](sharp|flat)?|clickPlayable|alert|car|chaChing|check|clang|crash|dash|doorbell|drip|fail|footsteps|laser|pop|schoolBell|spring|vibrate|trophy|aliens|bubbles|crickets|meow|rain|roar|tweet|wind|woof|ahhh|cheer|eating|heartbeat|laugh|news|talking|bass|chord|clap|gong|snare)$/.test(val));
					var ins = (/^(low-|high)?[a-zA-Z](sharp|flat)?$/.test(val)) ? ({"-1": "", "0": "new/", "1": "guitar/", "2": "8-bit/"})[(i[2])?i[2].computedStringValue(b):'0'] : ((isCustom)?"custom/":"");
					return (!isCustom && !!getPref && getPref("old_sounds")) ? "" : ins;
				}
                var r = o.HSSoundManager.sharedInstance//, c = i[0].computedStringValue(e);
				var c = notePath(i[0].computedStringValue(e)) + i[0].computedStringValue(e);
                r.play(c);
                break;

              case a.HSBlockType.MakeAClone:
                var u = 1;
                i[0] && (u = i[0].computedNumberValue(e)), e.clone(u);
                break;

              case a.HSBlockType.Destroy:
                e.addToDestroyQueue();
                break;

              case a.HSBlockType.ChangeX:
              case a.HSBlockType.ChangeY:
              case a.HSBlockType.Move:
              case a.HSBlockType.Rotate:
                var h = e.x, l = e.y, p = e.headingInDegrees;
                e.executeBlock(t), e.x === h && e.y === l && e.headingInDegrees === p && this.blocksToExecuteLater.shift();
                break;

              case a.HSBlockType.ChangeScene:
                n.HSStageProject.sharedInstance.changeScene(i[0].computedStringValue(e));
                break;

              case a.HSBlockType.BroadcastMessage:
                var d = i[0].computedStringValue(e);
                d && e.queueEventMessage(d);
                break;

              case a.HSBlockType.RequestSeeds:
                !function(t, e) {
                    var i = t[0], r = t[1].variable();
                    if (!r || 1 === r.computedNumberValue(e)) return;
                    var n = r.getPublicName();
                    if (!n) return;
                    var o = Math.max(0, Math.floor(i.computedNumberValue(e)));
                    !function(t, e, i) {
                        if (!s.isIOSApp()) return void (confirm('This project is using a feature only available in the Hopscotch iOS App. Tap "OK" to download it!') && window.open("https://apps.apple.com/us/app/hopscotch-make-games/id617098629", "_self"));
                        s.HSApp.sendToApp("product:purchase", JSON.stringify({
                            variableID: t,
                            variableName: e,
                            seeds: i
                        }));
                    }(r.objectID, n, o);
                }(i, e);
                break;

              default:
				try {
					e.executeBlock(t);
				} catch (E) {
					//AE_MOD
					//Errors do not catch these blocks: Play Sound, CLone, Destroy, Change X, Change Y, Move, Rotate, Change Scene, Broadcast Message
					console.groupCollapsed("%cBlock Execution Error","color:white;font-weight:900;display:block;background-color:red;border:2px solid salmon;padding:2px 4px;");
					console.log("Block Code:", t);
					console.log("Active Object UUID: " + e.objectID);
					e.stageRules.forEach(r=>{
						if (r.isActive) console.log("Active Rule Type: " + r.eventBlock.parameterBlock.type);
					});
					console.groupEnd();
					throw E;
				}
            }
        }, t;
    }();
    e.HSExecutable = c, window.HSExecutable = c;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(31), n = i(9), o = i(24), a = i(0), s = i(4), c = i(1), u = function() {
        function t(t, e) {
            void 0 === e && (e = []), this.type = t, this.parameters = e, this.id = c.hs_random_id(), 
            this.isImmediate = [ a.HSBlockType.PenDown, a.HSBlockType.StrokeColor, a.HSBlockType.StrokeWidth, a.HSBlockType.PenUp, a.HSBlockType.SetVariable, a.HSBlockType.ChangeVariable ].includes(t);
        }
        return t.prototype.isOverStepSize = function(t, e) {
            return this.usesStepSize() && Math.abs(this.firstIntegerValue(e)) > t;
        }, t.prototype.isWaitBlock = function() {
            return this.type === a.HSBlockType.Wait || this.type === a.HSBlockType.WaitSeconds;
        }, t.prototype.isFinishedTimestampBlock = function(t) {
            return this.type === a.HSBlockType.WaitTilTimestamp && this.firstIntegerValue(t) <= Date.now();
        }, t.prototype.isUnfinishedTimestampBlock = function(t) {
            return this.type === a.HSBlockType.WaitTilTimestamp && this.firstIntegerValue(t) > Date.now();
        }, t.prototype.usesStepSize = function() {
            return -1 !== [ a.HSBlockType.ChangeX, a.HSBlockType.ChangeY, a.HSBlockType.Move, a.HSBlockType.Rotate ].indexOf(this.type);
        }, t.prototype.firstIntegerValue = function(t) {
            var e;
            return (null === (e = this.parameters[0]) || void 0 === e ? void 0 : e.computedNumberValue(t)) || 0;
        }, t.prototype.calculateValueMinusOneStep = function(t, e) {
            return this.isOverStepSize(t, e) ? this.signOfFirstValue(e) * (Math.abs(this.firstIntegerValue(e)) - Math.abs(t)) : 0;
        }, t.prototype.executableForStepSize = function(e, i) {
            if (this.isWaitBlock()) {
                var n = this.getWaitMilliseconds(i), s = Date.now() + n;
                return new t(a.HSBlockType.WaitTilTimestamp, [ new o.HSStageParameter(s + "") ]).executableForStepSize(e, i);
            }
            return new r.HSExecutable(this.blocksToExecuteNow(e, i), this.blocksToExecuteLater(e, i));
        }, t.prototype.getWaitMilliseconds = function(t) {
            if (!this.isWaitBlock()) return 0;
            var e = this.firstIntegerValue(t);
            return this.type === a.HSBlockType.WaitSeconds ? 1e3 * e : e;
        }, t.prototype.blocksToExecuteNow = function(e, i) {
            if (this.type === a.HSBlockType.WaitTilTimestamp) return [];
            if (!this.isOverStepSize(e, i)) return [ this ];
            var r = new o.HSStageParameter("" + e * this.signOfFirstValue(i));
            return [ new t(this.type, [ r ]) ];
        }, t.prototype.toString = function() {
            return n.SourceFormatter.stageMethodToSrc(this);
        }, t.prototype.signOfFirstValue = function(t) {
            var e = this.firstIntegerValue(t);
            return e / Math.abs(e);
        }, t.prototype.isPromptDone = function() {
            var t, e, i = (null === (t = this.parameters[0]) || void 0 === t ? void 0 : t.value) || "-1";
            return null === (e = s.HSStageScene.promptsToExecute.find(function(t) {
                return t.id === i;
            })) || void 0 === e ? void 0 : e.isDone;
        }, t.prototype.blocksToExecuteLater = function(e, i) {
            switch (this.type) {
              case a.HSBlockType.WaitTilTimestamp:
                return this.firstIntegerValue(i) > Date.now() ? [ this ] : [];

              case a.HSBlockType.ChangeX:
              case a.HSBlockType.Ability:
              case a.HSBlockType.ChangeY:
              case a.HSBlockType.AnyObject:
              case a.HSBlockType.Move:
              case a.HSBlockType.Rotate:
                var r = this.calculateValueMinusOneStep(e, i), n = new o.HSStageParameter("" + r);
                return [ new t(this.type, [ n ]) ];

              case a.HSBlockType.WaitUntilInputIsDone:
                return this.isPromptDone() ? [] : [ this ];

              case a.HSBlockType.SaveInput:
              case a.HSBlockType.SetTextToInput:
                return [ new t(a.HSBlockType.WaitUntilInputIsDone, [ new o.HSStageParameter(this.id) ]) ];

              case a.HSBlockType.PlaySound:
                return [ new t(a.HSBlockType.Wait, [ new o.HSStageParameter(this.parameters[1].computedValue(i) + "") ]) ];

              case a.HSBlockType.PlaySoundSeconds:
                return [ new t(a.HSBlockType.WaitSeconds, [ new o.HSStageParameter(this.parameters[1].computedValue(i) + "") ]) ];

              default:
                return [];
            }
        }, t;
    }();
    e.HSStageMethod = u, window.HSStageMethod = u;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(30), a = i(11), s = i(13), c = i(19);
    e.CONTROL_SCRIPT_KEY = "controlScript";
    var u = function(t) {
        function i() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.scripts = [], e.isControl = !0, e;
        }
        return n(i, t), i.prototype.stageBlock = function() {
            var t = this.scripts[0] || new c.HSScript(this.context);
            return new o.HSStageControl(this.type, [ t ], this.stageParameters());
        }, i.prototype.parseJSON = function(i) {
            void 0 === i && (i = {}), t.prototype.parseJSON.call(this, i);
            var r = (i[e.CONTROL_SCRIPT_KEY] || [])[a.SCRIPT_ID_KEY] || "", n = this.context.findWithObjectID("HSScript", r);
            this.scripts.push(n || new c.HSScript(this.context));
        }, i.key = "HSControlBlock", i;
    }(s.HSBlock);
    e.HSControlBlock = u, window.HSControlBlock = u;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(1), n = function() {
        function t(e, i, n) {
            this.point = e, this.radius = i, this.colorReference = n, this.point.x = r.clamp(e.x, -t.MAX_POINT_VALUE, t.MAX_POINT_VALUE), 
            this.point.y = r.clamp(e.y, -t.MAX_POINT_VALUE, t.MAX_POINT_VALUE);
            var o = Math.ceil(2 * i) / 2;
            this.radius = o < 0 ? .5 : r.clamp(o, 0, t.MAX_POINT_VALUE);
        }
        return t.prototype.clone = function() {
            return new t(this.point, this.radius, this.colorReference);
        }, t.MAX_POINT_VALUE = 1e4, t;
    }();
    e.HSLinePoint = n;
    var o = function() {
        function t(t) {
            this.currentPoint = t, this.shouldDraw = !1;
        }
        return t.prototype.drawDiff = function(t) {
            this.shouldDrawPath() && (this.currentPoint.radius && t.drawLine(this.previousPointWithRadiusAndColor(), this.currentPoint), 
            this.shouldDraw = !1);
        }, t.prototype.shouldDrawPath = function() {
            return this.shouldDraw && this.currentPoint && this.previousPoint;
        }, t.prototype.previousPointWithRadiusAndColor = function() {
            var t = this.previousPoint.clone();
            return t.colorReference = this.currentPoint.colorReference, t.radius = this.currentPoint.radius, 
            t;
        }, t.prototype.addPoint = function(t, e) {
            e ? (this.shouldDraw = !0, this.previousPoint = this.currentPoint, this.currentPoint = t) : (this.currentPoint = t, 
            this.shouldDraw = !1);
        }, t;
    }();
    e.HSPathDrawer = o, window.HSLinePoint = n, window.HSPathDrawer = o;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(21), n = i(1), o = i(46), a = i(27), s = i(47), c = i(6), u = i(3), h = function() {
        function t(t) {
            this.props = t, this.sprite = new PIXI.Sprite(), this.canvas = null, this.textureExists = !1, 
            this.onTextureBuild = null, this.buildTexture(), this.update(this.props);
        }
        return t.prototype.factory = function() {
            return this.shouldDrawText() ? o.HSTextTextureFactory.instance : this.canDrawImage() ? a.HSImageTextureFactory.instance : s.HSCharacterTextureFactory.instance;
        }, t.prototype.imageSource = function() {
            return this.sprite ? this.sprite.texture.baseTexture.source : null;
        }, t.prototype.bounds = function() {
            if (this.sprite) return this.sprite.getBounds();
        }, t.prototype.width = function() {
            return this.sprite.texture.baseTexture.width * this.sprite.scale.x;
        }, t.prototype.height = function() {
            return this.sprite.texture.baseTexture.height * this.sprite.scale.y;
        }, t.prototype.shouldDrawText = function() {
            return r.HSTokenizer.hasDrawableTokens(this.props.text);
        }, t.prototype.canDrawImage = function() {
            return !!this.props.imageName;
        }, t.prototype.buildTexture = function() {
            var t = this;
            this.createCanvasIfNeeded();
            var e = this;
            return this.hasEmoji = !!this.shouldDrawText() && n.hasEmoji(this.props.text), this.factory().build(this.canvas, this.props).then(function(i) {
                return i === e.sprite.texture ? i : (i.baseTexture === e.sprite.texture.baseTexture && e.sprite.texture.destroy(), 
                t.shouldDrawText() && i.update(), e.sprite.texture = i, e.sprite.anchor.x = .5, 
                e.sprite.anchor.y = .5, e.originalWidth = e.sprite.texture.baseTexture.width, e.originalHeight = e.sprite.texture.baseTexture.height, 
                e.textureExists = !0, e.onBuildCallback(), i);
            }).catch(function(t) {
                n.log("error in building texture", t, e.props);
            });
        }, t.prototype.onBuildCallback = function() {
            var t = this.onTextureBuild;
            this.onTextureBuild = null, t && t();
        }, t.prototype.createCanvasIfNeeded = function() {
            this.canvas || this.shouldDrawText() && (this.canvas = document.createElement("canvas"));
        }, t.prototype.buildAllTextures = function() {
            return this.factory().buildAll(this.canvas, this.props);
        }, t.prototype.getOriginalScale = function(t, e, i) {
            return isNaN(t) ? i === c.HSObjectType.text ? 1 / o.HSTextTextureFactory.scaleUp() : 1 : t / e;
        }, t.prototype.getSpriteScale = function(t, e, i, r, n, o) {
            void 0 === o && (o = !1);
            var a = this.getOriginalScale(e, t, n), s = i * r * .01 * this.scaleForObjectType(n), c = Math.abs(s), u = s / c, h = Math.min(c, 1024) * u * a;
            return Math.round(t * h) / t * (o ? -1 : 1);
        }, t.prototype.update = function(t) {
            var e = this.props;
            if (this.props = t, this.needsNewTexture(e) && this.buildTexture(), this.textureExists) {
                var i = this.sprite.texture.baseTexture.width, r = this.sprite.texture.baseTexture.height;
                this.sprite.scale.x = this.getSpriteScale(i, t.originalWidth, t.baseObjectScale, t.sizePercentWidth, this.props.type, t.isFlipped), 
                this.sprite.scale.y = this.getSpriteScale(r, t.originalHeight, t.baseObjectScale, t.sizePercentHeight, this.props.type, !1), 
                this.sprite.position.x = Math.round(t.x), this.sprite.position.y = Math.round(t.stageHeight - t.y), 
                this.sprite.alpha = t.opacity, this.sprite.rotation = -1 * t.headingInRadians;
                var n = t.color;
                this.hasEmoji && (n = u.HSColor.rgbWhiteColor), this.sprite.tint = u.HSColor.hexToTint(n);
            }
        }, t.prototype.needsNewTexture = function(t) {
            return t.text !== this.props.text || this.quantizedScaleY(t) !== this.quantizedScaleY(this.props) || this.quantizedScaleX(t) !== this.quantizedScaleX(this.props) || t.animationNumber !== this.props.animationNumber || t.type !== this.props.type || t.imageName !== this.props.imageName || t.color !== this.props.color && !n.onlyEmoji(t.text) && n.hasEmoji(t.text);
        }, t.prototype.quantizedScaleY = function(t) {
            var e = t.sizePercentHeight || 100;
            return Math.ceil(.01 * e);
        }, t.prototype.quantizedScaleX = function(t) {
            var e = t.sizePercentWidth || 100;
            return Math.ceil(.01 * e);
        }, t.prototype.scaleForObjectType = function(t) {
            return t === c.HSObjectType.hexagon ? 1.05 : 1;
        }, t.xmlSerializer = new XMLSerializer(), t.svgCache = {}, t;
    }();
    e.HSView = h, window.HSView = h;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(6), n = i(51), o = i(52), a = i(37), s = function() {
        function t() {
            this.cache = {}, this.tempRect = new PIXI.Rectangle(), this.currentTime = Date.now(), 
            this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), 
            this.ctx.imageSmoothingEnabled = !1, this.debug = new a.CollisionManagerDebug();
        }
        return t.prototype.tick = function(t) {
            this.currentTime = Date.now(), this.cleanCache(), this.debug.draw(t, this.getCollisionObjectFrom.bind(this));
        }, t.prototype.collisionId = function(t) {
            var e;
            return t.type === r.HSObjectType.text ? "text_" + t.text : null === (e = t.view.sprite.texture.baseTexture.imageUrl) || void 0 === e ? void 0 : e.replace(/hsScale=\".\"/g, "");
        }, t.prototype.collisionInfo = function(t) {
            var e = this.collisionId(t);
            if (!e) return null;
            if (this.cache[e]) return this.cache[e];
            var i = t.view.sprite, r = i.texture.baseTexture, n = r.source, o = r.width, a = r.height;
            if (!n || !o || !a) return null;
            var s = i.texture.baseTexture.resolution;
            this.canvas.width = o, this.canvas.height = a, this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), 
            this.ctx.drawImage(n, 0, 0, o * s, a * s, 0, 0, o, a);
            var c = this.createCollisionInfo();
            return this.cache[e] = c, c;
        }, t.prototype.createCollisionInfo = function() {
            for (var e = this.canvas.width, i = this.canvas.height, r = this.ctx.getImageData(0, 0, e, i).data, o = Number.MAX_SAFE_INTEGER, a = Number.MAX_SAFE_INTEGER, s = Number.MIN_SAFE_INTEGER, c = Number.MIN_SAFE_INTEGER, u = t.PIXEL_OFFSET, h = new Uint8ClampedArray(e * i / u | 0), l = 3; l < r.length; l += 4 * u) {
                var p = l / 4 | 0;
                if (0 !== r[l]) {
                    h[p / u | 0] = 255;
                    var d = p % e, S = p / e | 0;
                    d < o && (o = d), d > s && (s = d), S < a && (a = S), S > c && (c = S);
                }
            }
            return new n.CollisionInfo(h, 0 | e, 0 | i, 0 | o, 0 | a, 0 | s, 0 | c);
        }, t.prototype.cleanCache = function() {
            for (var t in this.cache) this.cache[t].readyToDrop(this.currentTime) && delete this.cache[t];
        }, t.prototype.createCollisionObject = function(t) {
            var e = this.collisionInfo(t);
            if (e) {
                e.updateDropTime(this.currentTime);
                var i = t.view.sprite, r = new o.CollisionObject(i, e);
                return t.collisionObject = r, r;
            }
        }, t.prototype.areSpritesLoaded = function(t, e) {
            return t.view.sprite.texture.baseTexture.hasLoaded && e.view.sprite.texture.baseTexture.hasLoaded;
        }, t.prototype.getCollisionObjectFrom = function(t) {
            return t.collisionObject && this.cache[this.collisionId(t)] ? (t.collisionObject.info.updateDropTime(this.currentTime), 
            t.collisionObject) : this.createCollisionObject(t);
        }, t.prototype.existsCollisionBetweenStageObjects = function(t, e) {
            if (!this.areSpritesLoaded(t, e)) return !1;
            var i = this.getCollisionObjectFrom(t), r = this.getCollisionObjectFrom(e);
            return !(!i || !r) && this.existsCollisionBetween(i, r);
        }, t.prototype.existsCollisionBetween = function(t, e) {
            return t !== e && (!!function(t, e) {
                return c(t.sprite.getBounds(), e.sprite.getBounds());
            }(t, e) && (!!function(t, e) {
                return c(t.getMaskBounds(), e.getMaskBounds());
            }(t, e) && this.existsMaskCollision(t, e)));
        }, t.prototype.existsMaskCollision = function(t, e) {
            var i, r, n, o, s, c, u, h = t.getMaskBounds(), l = e.getMaskBounds(), p = (i = h, 
            r = l, n = this.tempRect, o = Math.max(i.x, r.x), s = Math.max(i.y, r.y), c = Math.min(i.x + i.width, r.x + r.width), 
            u = Math.min(i.y + i.height, r.y + r.height), n.x = o, n.y = s, n.width = c - o, 
            n.height = u - s, n), d = 0 | p.x, S = 0 | p.y, f = d + p.width | 0, g = S + p.height | 0;
            return a.CollisionManagerDebug.ENABLED ? this.debug.checkCollision(t, e, d, S, f, g) : !!this.intersectionCoverMoreThan(.5, p, h, l) || this.checkCollision(t, e, d, S, f, g);
        }, t.prototype.intersectionCoverMoreThan = function(t, e, i, r) {
            var n = e.width * e.height, o = i.width * i.height * t, a = r.width * r.height * t;
            return o > a ? n > o : n > a;
        }, t.prototype.checkCollision = function(t, e, i, r, n, o) {
            for (var a = i; a < n; a++) for (var s = r; s < o; s++) if (t.hit(a, s) && e.hit(a, s)) return !0;
            return !1;
        }, t.PIXEL_OFFSET = 2, t;
    }();
    function c(t, e) {
        return !(t.x >= e.x + e.width || e.x >= t.x + t.width) && !(t.y >= e.y + e.height || e.y >= t.y + t.height);
    }
    e.CollisionManager = s, window.CollisionManager = s;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        function t() {
            if (t.ENABLED) {
                this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d");
                var e = document.getElementsByName("foreground")[0];
                this.canvas.width = e.width / window.devicePixelRatio, this.canvas.height = e.height / window.devicePixelRatio, 
                this.canvas.style.position = "absolute", this.canvas.style.top = "0px", this.canvas.style.left = "0px", 
                this.canvas.style.pointerEvents = "none", this.canvas.style.width = "100%", this.canvas.style.height = "100%", 
                document.body.getElementsByTagName("hopscotch-player")[0].append(this.canvas);
            }
        }
        return t.prototype.draw = function(e, i) {
            var r = this;
            t.ENABLED && (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), e.forEach(function(t) {
                if (t.view.sprite.texture.baseTexture.hasLoaded) {
                    var e = i(t);
                    e && r.drawCollisionObject(e);
                }
            }));
        }, t.prototype.drawCollisionObject = function(e) {
            var i, r, o;
            t.ENABLED && (i = e, r = this.ctx, n((o = i.sprite.getBounds()).x, o.y, o.width, o.height, "#ffff00", r), 
            function(t, e) {
                var i = t.getMaskBounds();
                n(i.x, i.y, i.width, i.height, "#ff0000", e);
            }(e, this.ctx), function(t, e) {
                e.fillStyle = "#0000ff", e.beginPath();
                for (var i = t.sprite.getBounds(), r = i.left; r < i.right; r++) for (var n = i.top; n < i.bottom; n++) {
                    t.hit(r, n) && e.rect(r, n, 1, 1);
                }
                e.fill(), e.closePath();
            }(e, this.ctx));
        }, t.prototype.checkCollision = function(e, i, r, o, a, s) {
            return !!t.ENABLED && (n(r, o, a - r, s - o, "#0000ff", this.ctx), function(t, e, i, r, n, o, a) {
                var s = !1;
                t.fillStyle = "#00ff00", t.beginPath();
                for (var c = r; c < o; c++) for (var u = n; u < a; u++) {
                    e.hit(c, u) && i.hit(c, u) && (s = !0, t.rect(c, u, 1, 1));
                }
                return t.fill(), t.closePath(), s;
            }(this.ctx, e, i, r, o, a, s));
        }, t.ENABLED = !1, t;
    }();
    function n(t, e, i, r, n, o) {
        o.beginPath(), o.globalAlpha = .5, o.lineWidth = 2, o.strokeStyle = n, o.rect(t, e, i, r), 
        o.stroke(), o.globalAlpha = 1, o.closePath();
    }
    e.CollisionManagerDebug = r;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(61);
    e.AudioContext = window.AudioContext || window.webkitAudioContext;
    var n = function() {
        function t(e) {
            var i = this;
            this.sounds = {}, this.context = t.audioContext, this.isMuted = !1, e.forEach(function(t) {
                i.sounds[t] = new r.HSSound(t, i.context);
            }), t.hasUnlockListener || (t.hasUnlockListener = !0, this.eventListenerFunc = function() {
                var t = i.context.createBufferSource();
                t.buffer = i.context.createBuffer(1, 1, 22050), t.connect(i.context.destination), 
                t.start(0), window.removeEventListener("touchstart", i.eventListenerFunc), window.removeEventListener("touchend", i.eventListenerFunc);
            }, window.addEventListener("touchstart", this.eventListenerFunc), window.addEventListener("touchend", this.eventListenerFunc));
        }
        return t.prototype.play = function(t) {
            this.sounds[t] && !this.isMuted && this.sounds[t].play();
        }, t.prototype.mute = function() {
            this.isMuted || Object.values(this.sounds).forEach(function(t) {
                return t.stop();
            }), this.isMuted = !0;
        }, t.prototype.unmute = function() {
            this.isMuted = !1;
        }, t.audioContext = new e.AudioContext(), t.hasUnlockListener = !1, t;
    }();
    e.HSSoundManager = n, window.HSSoundManager = n;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(7), a = i(4), s = i(5), c = i(29), u = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.objects = [], e;
        }
        return n(e, t), e.prototype.parseJSON = function(t) {
            var e = this;
            void 0 === t && (t = {}), t[c.OBJECTS_KEY] && t[c.OBJECTS_KEY].length > 0 ? this.objects = t[c.OBJECTS_KEY].map(function(t) {
                return e.context.findWithObjectID(s.HSObject.key, t);
            }) : t[c.OBJECTS_KEY] && 0 === t[c.OBJECTS_KEY].length ? this.objects = [] : this.objects = this.context.findAllForClassName(s.HSObject.key), 
            this.name = t.name;
        }, e.prototype.stageScene = function() {
            return new a.HSStageScene(this);
        }, e.key = "HSScene", e;
    }(o.HSManagedObject);
    e.HSScene = u, window.HSScene = u;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(11), a = i(30), s = i(33), c = i(19);
    e.FALSE_SCRIPT_KEY = "controlFalseScript";
    var u = function(t) {
        function i() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return n(i, t), i.prototype.parseJSON = function(i) {
            void 0 === i && (i = {}), t.prototype.parseJSON.call(this, i);
            var r = (i[e.FALSE_SCRIPT_KEY] || [])[o.SCRIPT_ID_KEY] || "", n = this.context.findWithObjectID("HSScript", r);
            this.scripts.push(n || new c.HSScript(this.context));
        }, i.prototype.stageBlock = function() {
            var t = this.trueScript(), e = this.falseScript();
            return new a.HSStageControl(this.type, [ t, e ], this.stageParameters());
        }, i.prototype.trueScript = function() {
            return this.scripts[0];
        }, i.prototype.falseScript = function() {
            return this.scripts[1];
        }, i.key = "HSConditionalControl", i;
    }(s.HSControlBlock);
    e.HSConditionalControl = u, window.HSConditionalControl = u;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(32), a = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return n(e, t), e.prototype.stageBlock = function() {
            return this._stageBlock || (this._stageBlock = new o.HSStageMethod(this.type, this.stageParameters())), 
            this._stageBlock;
        }, e.key = "HSMethodBlock", e;
    }(i(13).HSBlock);
    e.HSMethodBlock = a, window.HSMethodBlock = a;
}, function(t, e, i) {
    i(43), t.exports = i(15);
}, function(t, e, i) {
    var r;
    !function t(e, i, n) {
        function o(s, c) {
            if (!i[s]) {
                if (!e[s]) {
                    if (!c && ("function" == typeof r && r)) return r(s, !0);
                    if (a) return a(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u;
                }
                var h = i[s] = {
                    exports: {}
                };
                e[s][0].call(h.exports, function(t) {
                    var i = e[s][1][t];
                    return o(i || t);
                }, h, h.exports, t, e, i, n);
            }
            return i[s].exports;
        }
        for (var a = "function" == typeof r && r, s = 0; s < n.length; s++) o(n[s]);
        return o;
    }({
        1: [ function(t, e, i) {
            (function(e) {
                var r = t("path");
                function n(t) {
                    t = t.replace(/[\ufe00-\ufe0f]/g, "");
                    for (var e = [], r = 0; r < t.length; r++) e.push(("0000" + t.charCodeAt(r).toString(16)).slice(-4));
                    return i.basePath.replace(/\/$/, "") + "/" + e.join("-") + ".png";
                }
                i.imageDir = r.join(e, "images"), i.basePath = i.imageDir, i.regex = t("./regex"), 
                i.nativeSupport = function() {
                    if ("undefined" == typeof document) return !1;
                    var t = document.createElement("canvas");
                    if (!t.getContext) return !1;
                    var e = t.getContext("2d");
                    return e.textBaseline = "top", e.font = "32px sans-serif", e.fillText("😃", 0, 0), 
                    0 !== e.getImageData(16, 16, 1, 1).data[0];
                }();
                var o = new RegExp("^(" + i.regex.toString().slice(1, -2) + ")$");
                i.getImage = function(t) {
                    return o.test(t) ? n(t) : null;
                }, i.replace = function(t) {
                    return t = "" + t, i.nativeSupport ? t : t.replace(i.regex, function(t) {
                        return '<img class="emoji" src="' + n(t) + '" alt="' + t + '">';
                    });
                };
            }).call(this, "/");
        }, {
            "./regex": 3,
            path: 4
        } ],
        2: [ function(t, e, i) {
            window.emoji = window.emoji || t("./index.js");
        }, {
            "./index.js": 1
        } ],
        3: [ function(t, e, i) {
            e.exports = /(\uD83C[\uDDE6-\uDDFF])?(\u00a9|\u00ae|[\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2640\u2642\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303d\u3297\u3299]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|[#*0-9]\uFE0F\u20E3)\uFE0F?(\ud83c[\udffb-\udfff])?(\u200d(\u00a9|\u00ae|\u2695\uFE0F|\uD83C\uDF93|\uD83C\uDFEB|\u2696\uFE0F|\uD83C\uDF3E|\uD83C\uDF73|\uD83D\uDD27|\uD83C\uDFED|\uD83D\uDCBC|\uD83D\uDD2C|\uD83D\uDCBB|\uD83C\uDFA4|\uD83C\uDFA8|\u2708\uFE0F|\uD83D\uDE80|\uD83D\uDC8B|\uD83D\uDE92|\u2764\uFE0F|\uD83D\uDC66|\uD83D\uDC67|\uD83D\uDC68|\uD83D\uDC69|\uD83D\uDC6A|\uD83D\uDC91|\u2640|\u2642|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|[#*0-9]\uFE0F\u20E3)\uFE0F?)*/g;
        }, {} ],
        4: [ function(t, e, i) {
            (function(t) {
                function e(t, e) {
                    for (var i = 0, r = t.length - 1; r >= 0; r--) {
                        var n = t[r];
                        "." === n ? t.splice(r, 1) : ".." === n ? (t.splice(r, 1), i++) : i && (t.splice(r, 1), 
                        i--);
                    }
                    if (e) for (;i--; i) t.unshift("..");
                    return t;
                }
                var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, n = function(t) {
                    return r.exec(t).slice(1);
                };
                function o(t, e) {
                    if (t.filter) return t.filter(e);
                    for (var i = [], r = 0; r < t.length; r++) e(t[r], r, t) && i.push(t[r]);
                    return i;
                }
                i.resolve = function() {
                    for (var i = "", r = !1, n = arguments.length - 1; n >= -1 && !r; n--) {
                        var a = n >= 0 ? arguments[n] : t.cwd();
                        if ("string" != typeof a) throw new TypeError("Arguments to path.resolve must be strings");
                        a && (i = a + "/" + i, r = "/" === a.charAt(0));
                    }
                    return (r ? "/" : "") + (i = e(o(i.split("/"), function(t) {
                        return !!t;
                    }), !r).join("/")) || ".";
                }, i.normalize = function(t) {
                    var r = i.isAbsolute(t), n = "/" === a(t, -1);
                    return (t = e(o(t.split("/"), function(t) {
                        return !!t;
                    }), !r).join("/")) || r || (t = "."), t && n && (t += "/"), (r ? "/" : "") + t;
                }, i.isAbsolute = function(t) {
                    return "/" === t.charAt(0);
                }, i.join = function() {
                    var t = Array.prototype.slice.call(arguments, 0);
                    return i.normalize(o(t, function(t, e) {
                        if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                        return t;
                    }).join("/"));
                }, i.relative = function(t, e) {
                    function r(t) {
                        for (var e = 0; e < t.length && "" === t[e]; e++) ;
                        for (var i = t.length - 1; i >= 0 && "" === t[i]; i--) ;
                        return e > i ? [] : t.slice(e, i - e + 1);
                    }
                    t = i.resolve(t).substr(1), e = i.resolve(e).substr(1);
                    for (var n = r(t.split("/")), o = r(e.split("/")), a = Math.min(n.length, o.length), s = a, c = 0; c < a; c++) if (n[c] !== o[c]) {
                        s = c;
                        break;
                    }
                    var u = [];
                    for (c = s; c < n.length; c++) u.push("..");
                    return (u = u.concat(o.slice(s))).join("/");
                }, i.sep = "/", i.delimiter = ":", i.dirname = function(t) {
                    var e = n(t), i = e[0], r = e[1];
                    return i || r ? (r && (r = r.substr(0, r.length - 1)), i + r) : ".";
                }, i.basename = function(t, e) {
                    var i = n(t)[2];
                    return e && i.substr(-1 * e.length) === e && (i = i.substr(0, i.length - e.length)), 
                    i;
                }, i.extname = function(t) {
                    return n(t)[3];
                };
                var a = "b" === "ab".substr(-1) ? function(t, e, i) {
                    return t.substr(e, i);
                } : function(t, e, i) {
                    return e < 0 && (e = t.length + e), t.substr(e, i);
                };
            }).call(this, t("_process"));
        }, {
            _process: 5
        } ],
        5: [ function(t, e, i) {
            var r, n = e.exports = {}, o = [], a = !1, s = -1;
            function c() {
                a = !1, r.length ? o = r.concat(o) : s = -1, o.length && u();
            }
            function u() {
                if (!a) {
                    var t = setTimeout(c);
                    a = !0;
                    for (var e = o.length; e; ) {
                        for (r = o, o = []; ++s < e; ) r && r[s].run();
                        s = -1, e = o.length;
                    }
                    r = null, a = !1, clearTimeout(t);
                }
            }
            function h(t, e) {
                this.fun = t, this.array = e;
            }
            function l() {}
            n.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                o.push(new h(t, e)), 1 !== o.length || a || setTimeout(u, 0);
            }, h.prototype.run = function() {
                this.fun.apply(null, this.array);
            }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", 
            n.versions = {}, n.on = l, n.addListener = l, n.once = l, n.off = l, n.removeListener = l, 
            n.removeAllListeners = l, n.emit = l, n.binding = function(t) {
                throw new Error("process.binding is not supported");
            }, n.cwd = function() {
                return "/";
            }, n.chdir = function(t) {
                throw new Error("process.chdir is not supported");
            }, n.umask = function() {
                return 0;
            };
        }, {} ]
    }, {}, [ 2 ]);
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(8), n = i(0), o = i(3), a = i(1), s = function() {
        function t(e, i) {
            var r;
            this.object = e, this.isOnScreen = !1, t.enableAntiSpam(), this.type = i.type, this.id = i.id, 
            this.parameters = i.parameters, this.promptText = (null === (r = i.parameters[1]) || void 0 === r ? void 0 : r.computedStringValue(e)) || "Type here", 
			this.placeholderText = (i.parameters[2]&& i.parameters[2].computedStringValue())||"";
            this.view = new u(this.promptText, this.placeholderText);
        }
        return t.enableAntiSpam = function() {
            null === t.antiSpam && (t.antiSpam = new h());
        }, t.prototype.execute = function() {
            this.displayIfNeeded(), this.checkValue();
        }, t.prototype.checkSpam = function(t) {
            this.antiSpam.check(t);
        }, t.prototype.checkValue = function() {
            var t, e;
            if (!this.doesNotNeedToBeChecked()) switch (this.checkSpam(this.view.isSpam), this.type) {
              case n.HSBlockType.SaveInput:
                var i = null === (t = this.parameters[0]) || void 0 === t ? void 0 : t.variable();
                if (!i) return;
                i.setValue(this.view.value, this.object);
                break;

              case n.HSBlockType.SetTextToInput:
                var a = (null === (e = this.parameters[0]) || void 0 === e ? void 0 : e.computedColorString(this.object)) || o.HSColor.rgbTextColor;
                this.object.setText(r.HSVariable.parseValue(this.view.value).toString(), a);
            }
        }, t.prototype.displayIfNeeded = function() {
            this.needsToBeDisplayed() && (this.isOnScreen = !0, this.view.show(t.antiSpam.askIfNextIsSpam));
        }, t.prototype.doesNotNeedToBeChecked = function() {
            return this.isOnScreen && !this.view.isDone;
        }, t.prototype.needsToBeDisplayed = function() {
            var t, e = this.type === n.HSBlockType.SaveInput && (null === (t = this.parameters[0]) || void 0 === t ? void 0 : t.variable()), i = this.type === n.HSBlockType.SetTextToInput;
            return !this.isSpam && !this.isOnScreen && (e || i) && !this.isDone;
        }, Object.defineProperty(t.prototype, "isDone", {
            get: function() {
                return this.view.isDone;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "antiSpam", {
            get: function() {
                return t.antiSpam;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isSpam", {
            get: function() {
                return this.antiSpam.dontShowPrompts;
            },
            enumerable: !0,
            configurable: !0
        }), t.antiSpam = null, t;
    }();
    function c(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    }
    e.HSStagePrompt = s;
    var u = function() {
        function t(t, tu /* AE_MOD CUSTOM PLACEHOLDER */) {
            void 0 === t && (t = "Type here"), this.text = t, this.isSpam = !1, this.isDone = !1, 
            this.appValue = "", this.createHTMLView(t, tu /* AE_MOD CUSTOM PLACEHOLDER */);
        }
        return t.prototype.createHTMLView = function(t, tu /* AE_MOD CUSTOM PLACEHOLDER */) {
            var e = this;
            if (!a.isIOSApp()) {
                var i = document.createElement("div");
                i.id = "hs_parent_div" + a.hs_random_id(), c(i.style, {
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
                }), r.innerText = t, this.div.appendChild(r);
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
                var o = document.createElement("a");
                c(o.style, {
                    fontFamily: "Avenir, sans-serif",
                    display: "block",
                    position: "relative",
                    textAlign: "center",
                    padding: "10px 40px 10px 40px",
                    background: "#1dd8be",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.8em",
                    borderRadius: "19px",
                    width: "120px",
                    margin: "10px auto -1px",
                    cursor: "pointer",
					userSelect: "none",
					webkitUserSelect: "none"
                }), o.innerText = "OK";
                var s = !a.isIOSApp() && "ontouchstart" in document.documentElement ? "touchstart" : "click";
                o.addEventListener(s, function() {
                    e.isDone = !0, e.hide();
                }), n.addEventListener(s, function(t) {
                    return n.focus();
                }), n.addEventListener("keyup", function(t) {
                    13 === t.keyCode && (t.preventDefault(), o.click());
                }), this.btn = o, this.div.appendChild(o);
            }
        }, t.prototype.show = function(t) {
            this.showAppPromptIfNecessary(t), this.showBrowserPromptIfNecessary();
        }, t.prototype.showBrowserPromptIfNecessary = function() {
            a.isIOSApp() || (document.getElementById("ae-hs-player").appendChild(this.div), /*this.input.value = "",*/ this.input.focus());
        }, t.prototype.showAppPromptIfNecessary = function(t) {
            var e = this;
            a.isIOSApp() && (a.HSApp.sendToApp("input_prompt" + (t ? ":spam" : ""), this.text), 
            a.HSApp.readFromAppOnce("input_prompt", function(t) {
                e.readInputFromIOSApp(t, !1);
            }), t && a.HSApp.readFromAppOnce("input_prompt:spam", function(t) {
                e.readInputFromIOSApp(t, !0);
            }));
        }, t.prototype.readInputFromIOSApp = function(t, e) {
            this.appValue = t, this.isDone = !0, this.isSpam = e;
        }, t.prototype.hide = function() {
            a.isIOSApp() || this.div.remove();
        }, t.prototype.isFilled = function() {
            return "" !== this.value;
        }, Object.defineProperty(t.prototype, "value", {
            get: function() {
                return a.isIOSApp() ? this.appValue : this.input.value;
            },
            enumerable: !0,
            configurable: !0
        }), t;
    }();
    e.PromptView = u;
    var h = function() {
        function t() {
            var t = this;
            this.minTimeBeforeSpam = 1600, this.timeBeforeCheck = 2200, this.count = 0, this.lastTime = 0, 
            this.elapsed = 0, this.askIfNextIsSpam = !1, this.dontShowPrompts = !1, this.reset = function() {
                t.count = 0, t.elapsed = 0, t.lastTime = 0, t.askIfNextIsSpam = !1, t.dontShowPrompts = !1;
            }, a.HSApp.addResetCallback("antispam", this.reset);
        }
        return t.prototype.check = function(t) {
            t && (this.dontShowPrompts = !0), this.checkElapsedTime(), this.lastTime = Date.now(), 
            this.askIfNextIsSpam = this.askUserIfNextIsSpam();
        }, t.prototype.checkElapsedTime = function() {
            if (0 !== this.lastTime) {
                var t = this.lastTime, e = Date.now() - t;
                this.elapsed += e, this.count += 1;
            }
        }, t.prototype.askUserIfNextIsSpam = function() {
            if (this.elapsed <= this.timeBeforeCheck) return !1;
            var t = this.elapsed, e = this.count;
            return this.elapsed = 0, this.count = 0, t / e <= this.minTimeBeforeSpam;
        }, t;
    }();
    window.HSStagePrompt = s, window.PromptView = u;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(2), n = i(0), o = i(8), a = function() {
        function t(t) {
            this.parameterBlock = t;
        }
        return t.prototype.matchesStageObject = function(t, e) {
            var i = this.stageObjects(e), o = i[0];
            if (!o && !t) return !0;
            var a = this.parameterBlocks() && this.parameterBlocks().length > 0 && this.parameterBlocks()[0].type === n.HSBlockType.AnyObject;
            return this.parameterBlock.context.version < r.HSProjectVersion.ADD_SELF && !a ? o && t && o.objectID === t.objectID : i.includes(t);
        }, t.prototype.stageObjects = function(t) {
            return this.parameterBlocks().reduce(function(e, i) {
                return e.concat(i.stageObjects(t));
            }, []);
        }, t.prototype.parameterBlocks = function() {
            return this.parameterBlock.parameters.filter(function(t) {
                return null != t.childBlock;
            }).map(function(t) {
                return t.childBlock;
            });
        }, t.prototype.parameterBlockStringValues = function(t) {
            return this.parameterBlock.parameters.map(function(e) {
                return function(t, e) {
                    var i, r = (null === (i = t.childBlock) || void 0 === i ? void 0 : i.computedValue(e)) || t.value || "";
                    return o.HSVariable.parseValue(r).toString();
                }(e, t);
            });
        }, t;
    }();
    e.HSStageParameterBlock = a, window.HSStageParameterBlock = a;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(20), n = i(17), o = i(1), a = i(3), s = function() {
        function t() {}
        return t.setFont = function(e, i) {
            e.font = i / 2 + "px " + t.FONT_FAMILIES.join(", "), e.textAlign = "left", e.textBaseline = "top";
        }, t.prototype.key = function(t) {
            return JSON.stringify({
                text: t.text,
                color: t.color
            });
        }, t.prototype.buildAll = function(t, e) {
            return this.build(t, e).then(function(t) {
                return [ t ];
            }).catch(function(t) {
                return [];
            });
        }, t.prototype.build = function(t, e) {
            var i = r.HSTextNode.fromString(e.text);
            if (!i) return Promise.reject(null);
            if (!(t = this.canvas(t, e, i))) return Promise.reject(null);
            var n = t.getContext("2d");
            return i.draw(n).then(function(e) {
                return PIXI.Texture.fromCanvas(t);
            });
        }, t.scaleUp = function() {
            return n.HopscotchDrawingContext.MAX_TEXTURE_SIDE_LENGTH / r.HSTextNode.MAX_LINE_WIDTH;
        }, t.prototype.canvas = function(e, i, n) {
            var s = e.getContext("2d");
            t.setFont(s, i.fontSize);
            var c = i.text, u = a.HSColor.rgbWhiteColor;
            o.hasEmoji(c) && (u = i.color);
            var h = n.flow(s, r.HSTextNode.MAX_LINE_WIDTH);
            if (0 === h.width || 0 === h.height) return null;
            var l = t.scaleUp();
            return e.width = Math.min(h.width * l, 4096), e.height = Math.min(h.height * l, 4096), 
            t.setFont(s, i.fontSize), s.scale(l, l), s.fillStyle = a.HSColor.rgbStringFromHSBString(u), 
            e;
        }, t.FONT_FAMILIES = [ "Avenir-Book", "Hiragino Sans", "sans-serif", "AppleSymbols" ], 
        t.instance = new t(), t.textureCache = {}, t;
    }();
    e.HSTextTextureFactory = s, window.HSTextTextureFactory = s;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(35), n = i(6), o = i(3), a = function() {
        function t() {}
        return t.prototype.build = function(t, e) {
            return Promise.resolve(this._build(e));
        }, t.prototype._build = function(t) {
            var e = document.getElementById(this.imageID(t)), i = this.quantizedScale(e, t), r = this.svgString(e, t), n = PIXI.Texture.fromImage(r, !1, PIXI.SCALE_MODES.LINEAR, i);
            return n.baseTexture.resolution = i, n;
        }, t.prototype.quantizedScale = function(t, e) {
            var i = 1, r = 4;
            if (t) {
                var n = parseFloat(t.getAttribute("width")) || e.originalWidth, o = parseFloat(t.getAttribute("height")) || e.originalHeight;
                i = Math.max(e.originalWidth / n, e.originalHeight / o) * e.baseObjectScale, r = Math.floor(1024 / n);
            }
            var a = Math.abs(e.sizePercentWidth), s = Math.abs(e.sizePercentHeight), c = Math.max(a, s), u = Math.max(Math.ceil(.01 * c), 1) * i;
            return Math.min(u, r);
        }, t.prototype.buildAll = function(t, e) {
            for (var i = [], r = e.willChangeCostume ? 4 : 1, n = 0; n < r; n++) e.animationNumber = n, 
            i.push(this._build(e));
            return Promise.resolve(i);
        }, t.prototype.imageID = function(t) {
            var e = t.type || 0, i = n.HSObjectType[e];
            return i[0].toUpperCase() + i.slice(1) + t.animationNumber + ".svg";
        }, t.prototype.svgString = function(t, e) {
            var i = "";
            if (t) {
                t.style.fill = o.HSColor.rgbWhiteColor;
                var n = this.quantizedScale(t, e);
                t.setAttribute("hsScale", "" + n), i = r.HSView.xmlSerializer.serializeToString(t);
            }
            return "data:image/svg+xml;charset=utf8," + i;
        }, t.instance = new t(), t;
    }();
    e.HSCharacterTextureFactory = a, window.HSCharacterTextureFactory = a;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(34), n = i(3), o = i(18), a = function() {
        function t(t, e, i, r) {
            void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), 
            this.centerX = t, this.centerY = e, this.halfWidth = i, this.halfHeight = r, this.vertices = [ new o.Vec2(), new o.Vec2(), new o.Vec2(), new o.Vec2() ], 
            this.update(t, e, i, r);
        }
        return t.prototype.update = function(t, e, i, r) {
            this.halfWidth = i, this.halfHeight = r, this.centerX = t, this.centerY = e, this.vertices[0].x = t - this.halfWidth, 
            this.vertices[0].y = e - this.halfHeight, this.vertices[1].x = t + this.halfWidth, 
            this.vertices[1].y = e - this.halfHeight, this.vertices[2].x = t + this.halfWidth, 
            this.vertices[2].y = e + this.halfHeight, this.vertices[3].x = t - this.halfWidth, 
            this.vertices[3].y = e + this.halfHeight;
        }, t.prototype.width = function() {
            return 2 * this.halfWidth;
        }, t.prototype.height = function() {
            return 2 * this.halfHeight;
        }, t.prototype.minX = function() {
            return this.vertices[0].x;
        }, t.prototype.minY = function() {
            return this.vertices[0].y;
        }, t.prototype.maxX = function() {
            return this.vertices[2].x;
        }, t.prototype.maxY = function() {
            return this.vertices[2].y;
        }, t.prototype.draw = function(t) {
            var e = n.HSColor.rgb(0, 0, 0), i = this.vertices.map(function(t) {
                return new r.HSLinePoint(t, 1, {
                    drawingColor: e
                });
            });
            i.forEach(function(e, r) {
                t.drawLine(e, i[(r + 1) % i.length]);
            });
        }, t.prototype.containsPoint = function(t, e) {
            this.pointTestVecs || (this.pointTestVecs = [ new o.Vec2(), new o.Vec2(), new o.Vec2() ]);
            var i = new o.Vec2(t, e), r = this.vertices[0], n = this.vertices[1], a = this.vertices[3], s = this.pointTestVecs[0].subtract(n, r), c = this.pointTestVecs[1].subtract(a, r), u = this.pointTestVecs[2].subtract(i, r), h = u.dot(s) / s.len(), l = u.dot(c) / c.len();
            return h > 0 && h < s.len() && l > 0 && l < c.len();
        }, t.prototype.area = function() {
            return this.width() * this.height();
        }, t.prototype.overlapsWithOtherBoundingBox = function(t) {
            return this.maxX() > t.minX() && this.minX() < t.maxX() && this.maxY() > t.minY() && this.minY() < t.maxY();
        }, t.prototype.intersectionRectWithOtherBoundingBox = function(e) {
            if (this.surroundingBox || (this.surroundingBox = new t()), !this.overlapsWithOtherBoundingBox(e)) return t.zero;
            var i = this.minX(), r = this.minY(), n = this.maxX(), o = this.maxY(), a = e.minX(), s = e.minY(), c = e.maxX(), u = e.maxY(), h = Math.max(i, a), l = Math.max(r, s), p = Math.min(n, c), d = Math.min(o, u), S = .5 * (h + p), f = .5 * (l + d), g = .5 * (p - h), y = .5 * (d - l);
            return this.surroundingBox.update(S, f, g, y), this.surroundingBox;
        }, t.zero = new t(), t;
    }();
    e.HSBoundingBox = a, window.HSBoundingBox = a;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(28);
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
        function t() {}
        return t.prototype.image = function(t) {
            if (this._image) return this._image;
            if (!t) return null;
            var e = document.createElement("canvas"), i = e.getContext("2d"), n = t.unscaledWidth(), o = t.unscaledHeight(), a = r.HSVisualContext.collisionResolution, s = this.getScaledImageDimensions({
                width: n,
                height: o
            }, Math.pow(a, 2)), c = s.width, u = s.height;
            return e.width = c, e.height = u, i.drawImage(t, 0, 0, n, o, 0, 0, c, u), this._image = e, 
            e;
        }, t.prototype.getScaledImageDimensions = function(t, e) {
            var i = Math.max(Math.sqrt(t.width * t.height / e), 1);
            return {
                width: Math.round(t.width / i),
                height: Math.round(t.height / i)
            };
        }, t;
    }();
    e.HSCollisionImageFactory = n, window.HSCollisionImageFactory = n;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(4), n = i(28), o = i(6), a = i(36);
    e.makeDebugCanvas = function(t, e) {
        var i = document.createElement("canvas");
        return i.style.position = "fixed", i.style.top = t + "px", i.style.left = e + "px", 
        i.style.border = "1px solid blue", i.style.zIndex = "99999", document.body.appendChild(i), 
        i.width = n.HSVisualContext.collisionResolution, i.height = n.HSVisualContext.collisionResolution, 
        i;
    };
    var s = function() {
        function t() {
            this.numberOfPixelCollisions = 0, this.manager = new a.CollisionManager(), this.canvas1 = document.createElement("canvas"), 
            this.canvas2 = document.createElement("canvas");
        }
        return t.prototype.hitTest = function(t, e, i) {
            if (t.isInvisible()) return !1;
            var r = this.boundingBoxForObject(t);
            if (r.containsPoint(e, i)) {
                if (t.type === o.HSObjectType.text) return !0;
                var n = this.generatePixelTestData(this.canvas1, t, r, r), a = n.width / (r.maxX() - r.minX()), s = n.height / (r.maxY() - r.minY()), c = (e - r.minX()) * a, u = n.height - (i - r.minY()) * s;
                return e = Math.round(c), i = Math.round(u), this.pixelCoordinateHasAlpha(e, i, n);
            }
            return !1;
        }, t.prototype.tick = function(t) {
            this.manager.tick(Array.from(t));
        }, t.prototype.collisionTest = function(t, e) {
            return e.type === o.HSObjectType.edgeOfScreen ? this.objectIsTouchingEdgeOfScreen(t) : t.type === o.HSObjectType.edgeOfScreen ? this.objectIsTouchingEdgeOfScreen(e) : this.objectsAreColliding(t, e);
        }, t.prototype.objectsAreColliding = function(t, e) {
            return this.manager.existsCollisionBetweenStageObjects(t, e);
        }, t.prototype.objectIsTouchingEdgeOfScreen = function(t) {
            var e = this.boundingBoxForObject(t);
            if (0 === e.area()) return !1;
            var i = e.centerX, n = e.centerY;
            return i <= 0 || i >= r.HSStageScene.stageWidth || n <= 0 || n >= r.HSStageScene.stageHeight;
        }, t.prototype.pixelCoordinateHasAlpha = function(t, e, i) {
            var r = 4 * (e * i.width + t) + 3;
            return i.data[r] > 0;
        }, t.prototype.boundingBoxForObject = function(t) {
            return t.boundingBox();
        }, t.prototype.generatePixelTestData = function(t, e, i, r) {
            var n = (t = this.prepareCanvasForPixelTest(t, e, i, r)).getContext("2d"), o = t.width / i.width(), a = t.height / i.height(), s = Math.round((r.minX() - i.minX()) * o), c = Math.round((i.maxY() - r.maxY()) * a), u = Math.max(Math.ceil((r.maxX() - r.minX()) * o), 1), h = Math.max(Math.ceil((r.maxY() - r.minY()) * a), 1);
            return n.getImageData(s, c, u, h);
        }, t.prototype.prepareCanvasForPixelTest = function(t, e, i, r) {
            var n = e.imageForCollision();
            if (!n) return t;
            var o = function(t, e, i) {
                var r = Math.cos(i), n = Math.sin(i);
                return n < 0 && (n = -n), r < 0 && (r = -r), {
                    width: e * n + t * r,
                    height: e * r + t * n
                };
            }(Math.ceil(n.width * i.halfWidth / i.halfWidth), Math.ceil(n.height * i.halfHeight / i.halfHeight), e.headingInRadians());
            t.width = Math.ceil(o.width), t.height = Math.ceil(o.height);
            var a = t.getContext("2d");
            a.imageSmoothingEnabled = !1, a.oImageSmoothingEnabled = !1, a.msImageSmoothingEnabled = !1, 
            a.mozImageSmoothingEnabled = !1, a.webkitImageSmoothingEnabled = !1, a.clearRect(0, 0, t.width, t.height);
            var s = t.width / 2, c = t.height / 2;
            return a.translate(s, c), a.rotate(-e.headingInRadians()), e.isFlipped && a.scale(-1, 1), 
            n.width * n.height == 0 ? t : (a.drawImage(n, -n.width / 2, -n.height / 2), a.setTransform(1, 0, 0, 1, 0, 0), 
            t);
        }, t.PIXEL_TESTING_THRESHOLD = 10, t;
    }();
    e.HSCollisionContext = s, window.HSCollisionContext = s;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(36), n = function() {
        function t(t, e, i, r, n, o, a) {
            this.mask = t, this.width = e, this.height = i, this.minX = r, this.minY = n, this.maxX = o, 
            this.maxY = a, this.lastUse = Date.now();
        }
        return t.prototype.updateDropTime = function(t) {
            this.lastUse = t;
        }, t.prototype.readyToDrop = function(e) {
            return e - this.lastUse > t.DROP_TIME;
        }, t.prototype.hit = function(t, e) {
            return !(t < 0 || t >= this.width) && (!(e < 0 || e >= this.height) && (t = t / r.CollisionManager.PIXEL_OFFSET | 0, 
            e = e / r.CollisionManager.PIXEL_OFFSET | 0, 0 !== this.mask[e * this.width + t]));
        }, t.DROP_TIME = 1e4, t;
    }();
    e.CollisionInfo = n, window.CollisionInfo = n;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        function t(t, e) {
            this.sprite = t, this.info = e, this.localTempPoint = new PIXI.Point(), this.outputPoints = [ new PIXI.Point(), new PIXI.Point(), new PIXI.Point(), new PIXI.Point() ], 
            this.tempPoints = [ new PIXI.Point(), new PIXI.Point(), new PIXI.Point(), new PIXI.Point() ], 
            this.tempRect = new PIXI.Rectangle(), this.outputPoint = new PIXI.Point();
        }
        return t.prototype.hit = function(t, e) {
            this.outputPoint.set(t, e);
            var i = this.sprite.toLocal(this.outputPoint, this.sprite.parent, this.localTempPoint);
            return i.x += (1 - this.sprite.anchor.x) * (this.sprite.width / Math.abs(this.sprite.scale.x)), 
            i.y += (1 - this.sprite.anchor.y) * (this.sprite.height / this.sprite.scale.y), 
            this.info.hit(i.x, i.y);
        }, t.prototype.getMaskBounds = function() {
            var t = this.sprite.getLocalBounds(), e = t.left + this.info.minX, i = t.top + this.info.minY, r = t.right - (this.info.width - this.info.maxX), n = t.bottom - (this.info.height - this.info.maxY);
            this.tempPoints[0].set(e, i), this.tempPoints[1].set(r, i), this.tempPoints[2].set(r, n), 
            this.tempPoints[3].set(e, n);
            var o = [ this.sprite.toGlobal(this.tempPoints[0], this.outputPoints[0]), this.sprite.toGlobal(this.tempPoints[1], this.outputPoints[1]), this.sprite.toGlobal(this.tempPoints[2], this.outputPoints[2]), this.sprite.toGlobal(this.tempPoints[3], this.outputPoints[3]) ], a = Number.MAX_SAFE_INTEGER, s = Number.MAX_SAFE_INTEGER, c = Number.MIN_SAFE_INTEGER, u = Number.MIN_SAFE_INTEGER;
            o.forEach(function(t) {
                var e = t.x, i = t.y;
                e < a && (a = e), e > c && (c = e), i < s && (s = i), i > u && (u = i);
            });
            var h = c - a, l = u - s;
            return this.tempRect.x = a, this.tempRect.y = s, this.tempRect.width = h, this.tempRect.height = l, 
            this.tempRect;
        }, t;
    }();
    e.CollisionObject = r, window.CollisionObject = r;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(6);
    e.HSOBJECT_SIZES = {}, e.HSOBJECT_SIZES[r.HSObjectType.text] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.monkey] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.octopus] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.gorilla] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.cupcake] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.bear] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.dino] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.frog] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.greenman] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.mustache] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.spacepod] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.zombieBear] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.ghoulopus] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.bats] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.frankenrilla] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.jodyWitch] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.cauldron] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.pumpkin] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.broom] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.lantern] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.parrotFlying] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.mandrill] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.mosquito] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.missChief] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.venus] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.jeepers] = {
        width: 390,
        height: 390
    }, e.HSOBJECT_SIZES[r.HSObjectType.banyan] = {
        width: 600,
        height: 600
    }, e.HSOBJECT_SIZES[r.HSObjectType.stargirl] = {
        width: 172.5,
        height: 172.5
    }, e.HSOBJECT_SIZES[r.HSObjectType.astro] = {
        width: 187.5,
        height: 187.5
    }, e.HSOBJECT_SIZES[r.HSObjectType.chillanna] = {
        width: 172.5,
        height: 172.5
    }, e.HSOBJECT_SIZES[r.HSObjectType.robo] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.raccoon] = {
        width: 172.5,
        height: 172.5
    }, e.HSOBJECT_SIZES[r.HSObjectType.bird] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.square] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.circle] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.hexagon] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.triangle] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.rightTriangle] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.rectangle] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.heart] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.star] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.arch] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.parallelogram] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.squiggle] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.donut] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.tetrisZ] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.tetrisT] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.tetrisL] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.corner] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.flower] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.threeProngedBoomerang] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.squishedBox] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.bead] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.chevron] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.xShape] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.tetrisLine] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.toucan] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.anteater] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.crocodile] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.sloth] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.iguana] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.hut] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.penguin] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.winterQueen] = {
        width: 225,
        height: 225
    }, e.HSOBJECT_SIZES[r.HSObjectType.shyYeti] = {
        width: 300,
        height: 300
    }, e.HSOBJECT_SIZES[r.HSObjectType.deer] = {
        width: 255,
        height: 255
    }, e.HSOBJECT_SIZES[r.HSObjectType.elf] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.snowGlobe] = {
        width: 450,
        height: 450
    }, e.HSOBJECT_SIZES[r.HSObjectType.polarbear] = {
        width: 300,
        height: 300
    }, e.HSOBJECT_SIZES[r.HSObjectType.sleigh] = {
        width: 300,
        height: 300
    }, e.HSOBJECT_SIZES[r.HSObjectType.mistletoe] = {
        width: 129,
        height: 129
    }, e.HSOBJECT_SIZES[r.HSObjectType.snowMan] = {
        width: 225,
        height: 225
    }, e.HSOBJECT_SIZES[r.HSObjectType.snowflake] = {
        width: 45,
        height: 45
    }, e.HSOBJECT_SIZES[r.HSObjectType.tetrisTFullSize] = {
        width: 150,
        height: 100
    }, e.HSOBJECT_SIZES[r.HSObjectType.rectangleFullSize] = {
        width: 150,
        height: 112.5
    }, e.HSOBJECT_SIZES[r.HSObjectType.archFullSize] = {
        width: 150,
        height: 75
    }, e.HSOBJECT_SIZES[r.HSObjectType.rightTriangleFullSize] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.tetrisLFullSize] = {
        width: 150,
        height: 100
    }, e.HSOBJECT_SIZES[r.HSObjectType.roundedSquareFullSize] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.roundedRightTriangleFullSize] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.squishedBoxFullSize] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.starFullSize] = {
        width: 150,
        height: 142.66
    }, e.HSOBJECT_SIZES[r.HSObjectType.parallelogramTallFullSize] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.arrowRoundedFullSize] = {
        width: 106.07,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.hexagonFullSize] = {
        width: 150,
        height: 129.9
    }, e.HSOBJECT_SIZES[r.HSObjectType.squiggleFullSize] = {
        width: 150,
        height: 69.64
    }, e.HSOBJECT_SIZES[r.HSObjectType.squareFullSize] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.chevronFullSize] = {
        width: 150,
        height: 129.9
    }, e.HSOBJECT_SIZES[r.HSObjectType.flowerFullSize] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.heartFullSize] = {
        width: 150,
        height: 126.77
    }, e.HSOBJECT_SIZES[r.HSObjectType.parallelogramWideFullSize] = {
        width: 150,
        height: 75
    }, e.HSOBJECT_SIZES[r.HSObjectType.beadFullSize] = {
        width: 150,
        height: 76.95
    }, e.HSOBJECT_SIZES[r.HSObjectType.triangleFullSize] = {
        width: 150,
        height: 129.9
    }, e.HSOBJECT_SIZES[r.HSObjectType.xFullSize] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.donutFullSize] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.tetrisZFullSize] = {
        width: 150,
        height: 100
    }, e.HSOBJECT_SIZES[r.HSObjectType.tetrisLineFullSize] = {
        width: 200,
        height: 50
    }, e.HSOBJECT_SIZES[r.HSObjectType.fanbladeFullSize] = {
        width: 150,
        height: 137.26
    }, e.HSOBJECT_SIZES[r.HSObjectType.cornerFullSize] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.circleFullSize] = {
        width: 150,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.tetrisTV3] = {
        width: 150,
        height: 100
    }, e.HSOBJECT_SIZES[r.HSObjectType.rectangleV3] = {
        width: 150,
        height: 100
    }, e.HSOBJECT_SIZES[r.HSObjectType.archV3] = {
        width: 150,
        height: 75
    }, e.HSOBJECT_SIZES[r.HSObjectType.tetrisLV3] = {
        width: 150,
        height: 100
    }, e.HSOBJECT_SIZES[r.HSObjectType.starV3] = {
        width: 150,
        height: 143
    }, e.HSOBJECT_SIZES[r.HSObjectType.arrowRoundedV3] = {
        width: 106,
        height: 150
    }, e.HSOBJECT_SIZES[r.HSObjectType.hexagonV3] = {
        width: 150,
        height: 130
    }, e.HSOBJECT_SIZES[r.HSObjectType.squiggleV3] = {
        width: 150,
        height: 70
    }, e.HSOBJECT_SIZES[r.HSObjectType.chevronV3] = {
        width: 150,
        height: 130
    }, e.HSOBJECT_SIZES[r.HSObjectType.heartV3] = {
        width: 150,
        height: 127
    }, e.HSOBJECT_SIZES[r.HSObjectType.parallelogramWideV3] = {
        width: 150,
        height: 75
    }, e.HSOBJECT_SIZES[r.HSObjectType.beadV3] = {
        width: 150,
        height: 77
    }, e.HSOBJECT_SIZES[r.HSObjectType.triangleV3] = {
        width: 150,
        height: 130
    }, e.HSOBJECT_SIZES[r.HSObjectType.tetrisZV3] = {
        width: 150,
        height: 100
    }, e.HSOBJECT_SIZES[r.HSObjectType.fanbladeV3] = {
        width: 150,
        height: 137
    }, e.HSOBJECT_SIZES[r.HSObjectType.crocodileJaws] = {
        width: 288,
        height: 164
    }, e.HSOBJECT_SIZES[r.HSObjectType.lanternFullSize] = {
        width: 48,
        height: 84
    }, window.HSOBJECT_SIZES = e.HSOBJECT_SIZES;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(14), n = i(2), o = i(55), a = i(0), s = function() {
        function t() {
            this.stageObjects = [], this.currentCollisions = new o.HSCollisionPairCollection([]), 
            this._stageObjectCache = new Set(), this._stageRulesCache = null, this._objectsToDestroy = [];
        }
        return t.prototype.addToDestroyQueue = function(t) {
            this._objectsToDestroy.push(t);
        }, t.prototype.cleanDestroyQueue = function() {
            for (var t; t = this._objectsToDestroy.pop(); ) this.destroy(t);
        }, t.prototype.destroy = function(t) {
            this._removeRulesForObject(t), this.stageObjects.remove(t), this._stageObjectCache.delete(t), 
            t.destroy(), this._collisionPairs = null;
        }, t.prototype._removeRulesForObject = function(t) {
            var e = this.stageRulesCache();
            for (var i in e) 0 !== e[i].length && (e[i] = e[i].filter(function(e) {
                return !e.isCurrentObject(t);
            }));
        }, t.prototype.activateAllRulesForEventType = function(t) {
            this.stageObjects.forEach(function(e) {
                return e.activateAllStageRulesForEventType(t);
            });
        }, t.prototype.allPossibleCollisionPairs = function() {
            var t = this;
            return this._collisionPairs || (this._collisionPairs = new o.HSCollisionPairCollection(), 
            this.stageObjects.forEach(function(e) {
                return t.addCollisionPairsForStageObject(e);
            })), this._collisionPairs;
        }, t.prototype.addCollisionPairsForStageObject = function(t) {
            if (this._collisionPairs) {
                var e = Array.from(t.relatedCollisionRules).map(function(t) {
                    return t.collisionPairs();
                }).reduce(function(t, e) {
                    return t.concat(e);
                }, []).filter(function(t) {
                    var e = t.stageObject1, i = t.stageObject2;
                    return e && e.isAlive && i && i.isAlive;
                });
                this._collisionPairs.add(e), this._collisionPairs.add(t.allPossibleCollisionPairs());
            }
        }, t.prototype.allStageRulesForEventType = function(t) {
            var e = this, i = this.stageRulesCache();
            return this.stageObjects.filter(function(t) {
                return !e._stageObjectCache.has(t);
            }).forEach(function(t) {
                e.cacheRulesForStageObject(t);
            }), i[t];
        }, t.prototype.stageRulesCache = function() {
            if (this._stageRulesCache) return this._stageRulesCache;
            this._stageRulesCache = {};
            for (var t = Object.keys(a.HSBlockType).filter(function(t) {
                return "string" == typeof t;
            }), e = 0; e < t.length; e++) this._stageRulesCache[t[e]] = [];
            return this._stageRulesCache;
        }, t.prototype.cacheRulesForStageObject = function(t) {
            var e = this.stageRulesCache(), i = t.stageRules;
            this._stageObjectCache.add(t), i.forEach(function(t) {
                return e[t.eventType()].push(t);
            });
        }, t.prototype.activateCurrentCollisionRules = function() {
            var t, e = this, i = r.HSStageProject.sharedInstance.version < n.HSProjectVersion.WEBPLAYER_IN_APP;
            i && (t = this.bumpingCollisions ? this.bumpingCollisions.copy() : new o.HSCollisionPairCollection([])), 
            this.allTouchingRules().forEach(function(r) {
                var n = r.collisionPairs().find(function(t) {
                    return e.currentCollisions.contains(t);
                });
                n && (r.activate(), i && t.add([ n ]));
            }), this.allNotTouchingRules().forEach(function(t) {
                t.collisionPairs().find(function(t) {
                    return e.currentCollisions.contains(t);
                }) || t.activate();
            }), this.allBumpRules().forEach(function(r) {
                if (i) {
                    var n = r.collisionPairs().filter(function(t) {
                        return e.currentCollisions.contains(t);
                    });
                    t.intersects(n) && r.activate(), t.add(n.slice(0, 1));
                } else e.bumpingCollisions.intersects(r.collisionPairs()) && r.activate();
            });
        }, t.prototype.allNotTouchingRules = function() {
            return this.allStageRulesForEventType(a.HSBlockType.EventOperatorIsNotTouching);
        }, t.prototype.allTouchingRules = function() {
            return this.allStageRulesForEventType(a.HSBlockType.EventOperatorIsTouching);
        }, t.prototype.allBumpRules = function() {
            return this.allStageRulesForEventType(a.HSBlockType.EventOperatorBump);
        }, t.prototype.executeAllActiveRules = function() {
            for (var t = this.stageObjects, e = t.length, i = 0; i < e; ++i) void 0 !== t[i] && t[i].executeActiveRules();
        }, t.prototype.activateAllRulesForEventWithObjects = function(t, e) {
            var i = this.allStageRulesForEventType(t);
            e.forEach(function(t) {
                i.forEach(function(e) {
                    e.activateIfMatchesFirstObject(t);
                });
            });
        }, t;
    }();
    e.HSRuleActivator = s, window.HSRuleActivator = s;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        function t(t) {
            void 0 === t && (t = []), this.pairMap = new Map(), this.add(t);
        }
        return t.prototype.add = function(t) {
            var e = this;
            t.forEach(function(t) {
                return e.addOne(t);
            });
        }, t.prototype.filter = function(e) {
            return new t(this.toArray().filter(e));
        }, t.prototype.contains = function(t) {
            return this.pairMap.has(t.uniqueKey);
        }, t.prototype.without = function(t) {
            return this.filter(function(e) {
                return !t.contains(e);
            });
        }, t.prototype.addOne = function(t) {
            this.pairMap.set(t.uniqueKey, t);
        }, t.prototype.toArray = function() {
            return Array.from(this.pairMap.values());
        }, t.prototype.intersects = function(t) {
            var e = this;
            return t.some(function(t) {
                return e.contains(t);
            });
        }, t.prototype.copy = function() {
            return new t(Array.from(this));
        }, t.prototype.forEach = function(t) {
            return this.pairMap.forEach(function(e) {
                return t(e);
            });
        }, t.prototype[Symbol.iterator] = function() {
            return this.pairMap.values();
        }, t.prototype.length = function() {
            return this.pairMap.size;
        }, t;
    }();
    e.HSCollisionPairCollection = r, window.HSCollisionPairCollection = r;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        function t() {
            this.nodeMap = new Map(), this.headNode = new n(), this.length = 0, this.headNode.next = this.headNode, 
            this.headNode.previous = this.headNode;
        }
        return t.prototype.setNewOrder = function(t) {
            var e = this, i = t(Array.from(this.nodeMap.keys()));
            i.forEach(function(t) {
                return e.remove(t);
            }), i.forEach(function(t) {
                return e.push(t);
            });
        }, t.prototype.push = function(t) {
            if (!this.includes(t)) {
                var e = new n(t);
                e.next = this.headNode, e.previous = this.headNode.previous, e.previous.next = e, 
                this.headNode.previous = e, this.nodeMap.set(t, e), this.length++;
            }
        }, t.prototype.unshift = function(t) {
            if (!this.includes(t)) {
                var e = new n(t);
                e.next = this.headNode.next, e.previous = this.headNode, e.next.previous = e, this.headNode.next = e, 
                this.nodeMap.set(t, e), this.length++;
            }
        }, t.prototype.remove = function(t) {
            var e = this.nodeMap.get(t);
            e && (e.previous.next = e.next, e.next.previous = e.previous, this.nodeMap.delete(t), 
            this.length--);
        }, t.prototype.includes = function(t) {
            return this.nodeMap.has(t);
        }, t.prototype[Symbol.iterator] = function() {
            return new o(this.headNode);
        }, t.prototype.getReverseIterator = function() {
            return new o(this.headNode, !0);
        }, t.prototype.forEach = function(t) {
            var e = this, i = 0;
            this[Symbol.iterator]().forEach(function(r) {
                return t(r, i++, e);
            });
        }, t.prototype.forEachRight = function(t) {
            var e = this, i = this.length - 1;
            this.getReverseIterator().forEach(function(r) {
                return t(r, i--, e);
            });
        }, t.prototype.find = function(t) {
            var e = this, i = 0;
            return this[Symbol.iterator]().find(function(r) {
                return t(r, i++, e);
            });
        }, t.prototype.findLast = function(t) {
            var e = this, i = this.length - 1;
            return this.getReverseIterator().find(function(r) {
                return t(r, i--, e);
            });
        }, t;
    }();
    e.HSLinkedList = r;
    var n = function(t) {
        void 0 === t && (t = null), this.value = t, this.next = this, this.previous = this;
    };
    e.HSLinkedListNode = n;
    var o = function() {
        function t(t, e) {
            void 0 === e && (e = !1), this.headNode = t, this.isReversed = e, this.currentNode = t;
        }
        return t.prototype.next = function() {
            var t = this.isReversed ? this.currentNode.previous : this.currentNode.next;
            return t !== this.headNode ? (this.currentNode = t, {
                value: this.currentNode.value,
                done: !1
            }) : {
                value: void 0,
                done: !0
            };
        }, t.prototype.forEach = function(t) {
            for (var e = this.next(); !e.done; ) t(e.value), e = this.next();
        }, t.prototype.find = function(t) {
            for (var e = this.next(); !e.done; ) {
                if (t(e.value)) return e.value;
                e = this.next();
            }
        }, t.prototype[Symbol.iterator] = function() {
            return this;
        }, t;
    }();
    e.HSLinkedListIterator = o, window.HSLinkedList = r;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(14), n = i(2), o = i(58), a = i(0), s = i(1), c = function() {
        function t(t, e) {
            var i = this;
            this.rule = t, this.currentObject = e, this.isActive = !1, this._collisionPairs = [], 
            this.numFirstParamObjects = 0, this.numSecondParamObjects = 0, this.activateIfEqualsEventMessage = function(t) {
                var e;
                t.trim() === (null === (e = i.eventBlock.parameterBlockStringValues(i.currentObject)[0]) || void 0 === e ? void 0 : e.trim()) && i.activate();
            }, this.activateIfMatchesEventMessage = function(t) {
                var e, r = t.trim(), n = null === (e = i.eventBlock.parameterBlockStringValues()[0]) || void 0 === e ? void 0 : e.trim();
                s.checkMatches(r, n) && i.activate();
            }, this.stageScript = this.rule.script.stageScript(), this.eventBlock = this.rule.childBlock().stageParameterBlock();
        }
        return t.prototype.reset = function() {
            this.stageScript.reset();
        }, t.prototype.activate = function() {
            this.isActive || (this.reset(), this.isActive = !0);
        }, t.prototype.activateIfMatchesFirstObject = function(t) {
            this.matchesFirstObject(t) && this.activate();
        }, t.prototype.activateIfNotPressed = function(t) {
            this.isPressed(t) || this.activate();
        }, t.prototype.isPressed = function(t) {
            var e = this;
            return t.currentlyPressedObjects.some(function(t) {
                return e.matchesATap(t);
            });
        }, t.prototype.matchesATap = function(t) {
            var e = this;
            return t.some(function(t) {
                return e.matchesFirstObject(t);
            });
        }, t.prototype.break = function() {
            this.isActive = !1, this.reset();
        }, t.prototype.collisionPairs = function() {
            var t = this, e = this.eventBlock.parameterBlocks()[0], i = this.eventBlock.parameterBlocks()[1], r = this.stageObjectsForParameter(e), n = this.stageObjectsForParameter(i);
            if (this._collisionPairs && this.numFirstParamObjects === r.length && this.numSecondParamObjects === n.length) return this._collisionPairs;
            var a = r.slice(this.numFirstParamObjects), s = n.slice(this.numSecondParamObjects), c = r.slice(0, this.numFirstParamObjects);
            return a.forEach(function(e) {
                n.filter(function(t) {
                    return t !== e;
                }).forEach(function(i) {
                    t._collisionPairs.push(new o.HSCollisionPair(e, i)), e.relatedCollisionRules.add(t), 
                    i.relatedCollisionRules.add(t);
                });
            }), c.forEach(function(e) {
                s.filter(function(t) {
                    return t !== e;
                }).forEach(function(i) {
                    t._collisionPairs.push(new o.HSCollisionPair(e, i));
                });
            }), this.numFirstParamObjects = r.length, this.numSecondParamObjects = n.length, 
            this._collisionPairs;
        }, t.prototype.stageObjectsForParameter = function(t) {
            try {
                return t.type === a.HSBlockType.AnyObject ? r.HSStageProject.sharedInstance.activeStageScene.stageObjects : this.rule.context.version < n.HSProjectVersion.ADD_SELF && t.type === a.HSBlockType.Object && t.object ? t.object.allStageObjects() : t.stageObjects(this.currentObject);
            } catch (t) {}
            return [];
        }, t.prototype.eventType = function() {
            return this.rule.eventType();
        }, t.prototype.matchesEvent = function(t) {
            return this.eventType() === t;
        }, t.prototype.matchesFirstObject = function(t) {
            return this.eventBlock.matchesStageObject(t, this.currentObject);
        }, t.prototype.execute = function(t) {
            this.isExecutable() ? (this.stageScript.isImmediate && (this.isActive = !1), this.stageScript.execute(t)) : this.isActive = !1;
        }, t.prototype.isExecutable = function() {
            return this.isValid() && this.isActive && this.hasBlocksToExecute();
        }, t.prototype.hasBlocksToExecute = function() {
            return this.stageScript.blocks.length > 0;
        }, t.prototype.isValid = function() {
            return null != this.stageScript;
        }, t.prototype.conditionIsTrue = function(t) {
            return this.rule.conditionIsTrue(t);
        }, t.prototype.deepCopy = function(e) {
            var i = new t(this.rule, e);
            return i.stageScript = this.stageScript.deepCopy(), i;
        }, t.prototype.isCurrentObject = function(t) {
            return this.currentObject === t;
        }, t;
    }();
    e.HSStageRule = c, window.HSStageRule = c;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        function t(t, e) {
            this.isOverlapping = !1, this.wasOverlapping = !1;
            var i = this.getSortedPair(t, e);
            this.stageObject1 = i[0], this.stageObject2 = i[1], this.uniqueKey = this.stageObject1.stageObjectID + "_" + this.stageObject2.stageObjectID;
        }
        return t.prototype.getSortedPair = function(t, e) {
            return t.stageObjectID < e.stageObjectID ? [ t, e ] : [ e, t ];
        }, t.prototype.collisionTest = function(t) {
            return !!this.canCollide() && t.collisionTest(this.stageObject1, this.stageObject2);
        }, t.prototype.isVisible = function() {
            return !this.stageObject1.isInvisible() && !this.stageObject2.isInvisible();
        }, t.prototype.canCollide = function() {
            return this.isVisible() && this.isAlive();
        }, t.prototype.isAlive = function() {
            return this.stageObject1.isAlive && this.stageObject2.isAlive;
        }, t.prototype.update = function(t) {
            this.wasOverlapping = this.isOverlapping, this.isOverlapping = this.collisionTest(t);
        }, t.prototype.isTouching = function() {
            return this.isOverlapping;
        }, t.prototype.isBumping = function() {
            return this.isTouching() && !this.wasOverlapping;
        }, t;
    }();
    e.HSCollisionPair = r, window.HSCollisionPair = r;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = function() {
        function t(t, e, i) {
            this.fileName = t, this.width = e, this.height = i;
        }
        return t.prototype.computedValue = function() {
            return 0;
        }, t;
    }();
    e.HSCustomObject = r, window.HSCustomObject = r;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(4), n = i(18), o = function(t, e, i) {
        void 0 === i && (i = 0), this.id = i, this.id = i;
        var o = t.target, a = o.clientWidth, s = o.clientHeight;
        this.point = new n.Vec2(e[0] * r.HSStageScene.stageWidth / a, r.HSStageScene.stageHeight - e[1] * r.HSStageScene.stageHeight / s);
    };
    e.UIPointerEvent = o;
    var a = function() {
        function t(t) {
            this.listeners = t;
        }
        return t.prototype.unregister = function() {
            this.listeners.forEach(function(t) {
                return t.unregister();
            });
        }, t;
    }();
    e.UIEventListeners = a;
    var s = function() {
        function t(t, e, i) {
            this.element = t, this.eventType = e, this.callback = i, t.addEventListener(e, i);
        }
        return t.prototype.unregister = function() {
            this.element.removeEventListener(this.eventType, this.callback);
        }, t;
    }();
    e.UIEventListener = s, e.UIRegisterEventCallbacks = function(t, e) {
        function i(t, e, i) {
            return new s(t, e, function(t) {
                t.preventDefault(), i(t);
            });
        }
        function r(t, e, r) {
            return i(t, e, function(t) {
                var e = [ t.offsetX, t.offsetY ], i = new o(t, e);
                r(i);
            });
        }
        function n(t, e, r) {
            return i(t, e, function(t) {
                return function(t, e) {
                    var i = t.target.getBoundingClientRect();
                    Array.from(t.changedTouches).forEach(function(t) {
                        e(new o(t, [ t.clientX - i.left, t.clientY - i.top ], t.identifier));
                    });
                }(t, r);
            });
        }
        var c = !1;
        return new a([ r(t, "mousedown", function(t) {
            c && e.pointerUp(t), c = !0, e.pointerDown(t);
        }), r(t, "mousemove", function(t) {
            c && e.pointerDrag(t);
        }), r(window, "mouseup", function(t) {
            e.pointerUp(t), c = !1;
        }), n(t, "touchstart", e.pointerDown), n(t, "touchmove", e.pointerDrag), n(t/* AE_MOD player > window prevention */, "touchend", e.pointerUp), n(window, "touchcancel", e.pointerCancel) ]);
    }, window.UIPointerEvent = o, window.UIEventListeners = a, window.UIEventListener = s;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(1), n = function() {
        function t(e, i) {
            var r = this;
            this.name = e, this.context = i, this.sources = new Set(), t.soundCache.has(e) || t.soundCache.set(e, new Promise(function(t, e) {
                var i = new XMLHttpRequest();
                i.open("GET", r.url(), !0), i.responseType = "arraybuffer", i.onload = function() {
                    i.status >= 200 && i.status < 300 ? r.context.decodeAudioData(i.response, t, function() {}) : e(i);
                }, i.onerror = e, i.send();
            })), t.soundCache.get(e).then(function(t) {
                return r.buffer = t;
            });
        }
        return t.prototype.play = function() {
            var t = this;
            if (r.isIOSApp()) r.HSApp.sendToApp("sound", this.name); else if (this.buffer) {
                var e = this.context.createBufferSource();
                e.buffer = this.buffer, e.connect(this.context.destination), e.start(0), this.sources.add(e), 
                e.onended = function() {
                    return t.sources.delete(e);
                };
            }
        }, t.prototype.stop = function() {
            this.sources.forEach(function(t) {
                return t.stop();
            }), this.sources.clear();
        }, t.prototype.url = function() {
            return "https://awesome-e.github.io/hs-tools/play-project/hopscotch-sounds/" /*AE_MOD Self-host sounds  "https://d2jeqdlsh5ay24.cloudfront.net/"*/ + this.name + ".mp3";
        }, t.soundCache = new Map(), t;
    }();
    e.HSSound = n, window.HSSound = n;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(8), n = i(30), o = i(32), a = i(31), s = i(9), c = i(0), u = function() {
        function t(t) {
            this.script = t, this.reset();
        }
        return t.prototype.reset = function() {
            this.blocks = this.script.blocks.map(function(t) {
                return t.stageBlock();
            }), this.isImmediate = this.blocks.every(function(t) {
                return t.isImmediate;
            });
        }, t.prototype.execute = function(t) {
            var e = this.executableForStepSize(t.maxStepSize(), t);
            e.execute(t), this.blocks = e.blocksToExecuteLater, this.isImmediate = this.blocks.every(function(t) {
                return t.isImmediate;
            });
        }, t.prototype.blockIsVariable = function(t) {
            return t === c.HSBlockType.SetVariable || t === c.HSBlockType.ChangeVariable;
        }, t.prototype.doesBlockAffectExecutionOrder = function(t) {
            return !!this.isControlBlock(t) && (!this.blockIsEmpty(t) && (!!this.blockHasAScriptThatContainsVariables(t) || this.blockUsesVariable(t)));
        }, t.prototype.blockHasAScriptThatContainsVariables = function(t) {
            if (!this.blockHasScriptWithoutParameters(t)) return !1;
            for (var e = 0; e < t.scripts.length; e++) {
                var i = t.scripts[e];
                if (this.scriptUsesVariable(i)) return !0;
            }
        }, t.prototype.blockHasScriptWithoutParameters = function(t) {
            return !this.blockHasParameters(t) && this.blockHasScripts(t);
        }, t.prototype.blockIsEmpty = function(t) {
            return !this.blockHasParameters(t) && !this.blockHasScripts(t);
        }, t.prototype.blockHasParameters = function(t) {
            return t.parameters && t.parameters.length;
        }, t.prototype.blockHasScripts = function(t) {
            return t.scripts && t.scripts.length;
        }, t.prototype.isControlBlock = function(t) {
            return t && t instanceof n.HSStageControl;
        }, t.prototype.scriptUsesVariable = function(t) {
            for (var e = 0; e < t.blocks.length; e++) {
                var i = t.blocks[e];
                if (this.blockUsesVariable(i)) return !0;
            }
            return !1;
        }, t.prototype.blockUsesVariable = function(t) {
            if (!t) return !1;
            for (var e = t.parameters || [], i = 0; i < e.length; i++) {
                var n = e[i].childBlock;
                if (n instanceof r.HSVariable || this.blockUsesVariable(n)) return !0;
            }
            return !1;
        }, t.prototype.executableForStepSize = function(t, e) {
            var i = this;
            if (!this.blocks.length) return new a.HSExecutable([], []);
            for (var r = this.blocks.slice().reverse(), n = r.pop(), s = [], c = function(t) {
                if (!t) return !1;
                var n = i.blockIsVariable(t.type) && i.doesBlockAffectExecutionOrder(r.length ? r[r.length - 1] : null), a = t.isImmediate, s = t instanceof o.HSStageMethod && t.isFinishedTimestampBlock(e);
                return !n && (a || s);
            }; c(n); ) s.push(n), n = r.pop();
            if (!n) return new a.HSExecutable(s, []);
            var u = n.executableForStepSize(t, e);
            return new a.HSExecutable(s.concat(u.blocksToExecuteNow), u.blocksToExecuteLater.concat(r.reverse()));
        }, t.prototype.deepCopy = function() {
            return new t(this.script);
        }, t.prototype.toString = function() {
            return s.SourceFormatter.blocksToSrc(this.blocks);
        }, t;
    }();
    e.HSStageScript = u, window.HSStageScript = u;
}, function(t, e, i) {
    "use strict";
    var r, n = this && this.__extends || (r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        })(t, e);
    }, function(t, e) {
        function i() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, 
        new i());
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(7), a = i(11), s = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this;
        }
        return n(e, t), e.prototype.parseJSON = function(t) {
            void 0 === t && (t = {}), this.name = t.name, this.objectID = t.id, this.addRulesFromJSON(t);
        }, e.prototype.addRulesFromJSON = function(t) {
            void 0 === t && (t = {});
            var i = this.context;
            this.rules = t.rules.map(function(t) {
                var r = i.findWithObjectID(a.HSRule.key, t);
                return r || (r = i.findWithObjectID(e.key, t)), r;
            }).filter(function(t) {
                return !!t;
            });
        }, e.prototype.stageRules = function(t) {
            var e = this;
            return this.rules.reduce(function(i, r) {
                return r === e ? i : i.concat(r.stageRules(t));
            }, []);
        }, e.key = "HSCustomRule", e;
    }(o.HSManagedObject);
    e.HSCustomRule = s, window.HSCustomRule = s;
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = i(2), n = i(40), o = i(39), a = i(19), s = i(11), c = i(5), u = i(33), h = i(29), l = i(12), p = i(10), d = i(41), S = i(6), f = i(0), g = i(8), y = function() {
        function t() {
            this.context = new r.HSProjectContext(), this.scene = this.buildScene(), this.project = new h.HSProject(this.context), 
            this.project.scenes = [ this.scene ];
        }
        return t.prototype.buildDemoScene = function() {
            this.buildObject(S.HSObjectType.octopus, "", 400, 200);
            for (var t = this.buildObject(S.HSObjectType.chillanna, "", 400, 350), e = "Hello World \n", i = 0; i < 100; i++) e += "😈";
            return this.buildObject(S.HSObjectType.text, e, 350, 200), this.buildOnStartRule(t), 
            this.scene.parseJSON(), this.scene;
        }, t.prototype.buildScene = function() {
            var t = new o.HSScene(this.context);
            return t.parseJSON({}), t;
        }, t.prototype.buildObject = function(t, e, i, r) {
            void 0 === t && (t = S.HSObjectType.monkey), void 0 === e && (e = ""), void 0 === i && (i = 750), 
            void 0 === r && (r = 500);
            var n = new c.HSObject(this.scene.context);
            return n.type = t, n.text = e, n.x = i, n.y = r, n.objectID = Math.floor(Math.random() * Math.pow(2, 32)).toString(16), 
            n;
        }, t.prototype.buildObjectWithRule = function() {
            var t = this.buildObject();
            this.buildOnStartRule(t);
            return t;
        }, t.prototype.buildOnStartRule = function(t, e) {
            var i = this.context;
            e || (e = this.buildScript()), t || (t = this.buildObject(S.HSObjectType.monkey));
            var r = new s.HSRule(i);
            r.script = e, t.addRule(r);
            var n = new l.HSParameter(i), o = new p.HSParameterBlock(i);
            return o.type = f.HSBlockType.EventOperatorStart, n.childBlock = o, r.parameters = [ n ], 
            r.parameters[0].childBlock.parameters[0] = new l.HSParameter(r.context), r.parameters[0].childBlock.parameters[0].childBlock = new p.HSParameterBlock(r.context), 
            r;
        }, t.prototype.buildTapRule = function(t, e) {
            return this.buildRule(f.HSBlockType.EventOperatorTap, t, e);
        }, t.prototype.buildMessageMatchesRule = function(t) {
            var e = this.context, i = this.buildScript(), r = this.buildObject(S.HSObjectType.monkey), n = new s.HSRule(e);
            n.script = i, r.addRule(n);
            var o = new l.HSParameter(e), a = new p.HSParameterBlock(e);
            a.type = f.HSBlockType.EventOperatorMessageMatches, o.childBlock = a, n.parameters = [ o ], 
            n.parameters[0].childBlock.parameters[0] = new l.HSParameter(n.context);
            var c = new g.HSVariable(n.context);
            return c.setValue(t, null), n.parameters[0].childBlock.parameters[0].childBlock = c, 
            n;
        }, t.prototype.buildHeardMessageRule = function(t) {
            var e = this.context, i = this.buildScript(), r = this.buildObject(S.HSObjectType.monkey), n = new s.HSRule(e);
            n.script = i, r.addRule(n);
            var o = new l.HSParameter(e), a = new p.HSParameterBlock(e);
            a.type = f.HSBlockType.EventOperatorHearMessage, o.childBlock = a, n.parameters = [ o ], 
            n.parameters[0].childBlock.parameters[0] = new l.HSParameter(n.context);
            var c = new g.HSVariable(n.context);
            return c.setValue(t, null), n.parameters[0].childBlock.parameters[0].childBlock = c, 
            n;
        }, t.prototype.buildHeardMessageRuleWithSelfVar = function(t) {
            var e = this.context, i = this.buildScript(), r = this.buildObject(S.HSObjectType.monkey), n = new s.HSRule(e);
            n.script = i, r.addRule(n);
            var o = new l.HSParameter(e), a = new p.HSParameterBlock(e);
            a.type = f.HSBlockType.EventOperatorHearMessage, o.childBlock = a, n.parameters = [ o ], 
            n.parameters[0].childBlock.parameters[0] = new l.HSParameter(n.context);
            var c = new g.HSVariable(n.context);
            return c.blockType = f.HSBlockType.Self, c.setValue(t, null), n.parameters[0].childBlock.parameters[0].childBlock = c, 
            {
                rule: n,
                variable: c
            };
        }, t.prototype.buildRule = function(t, e, i) {
            var r = this.context;
            i || (i = this.buildScript()), e || (e = this.buildObject(S.HSObjectType.monkey));
            var n = new s.HSRule(r);
            n.script = i, e.addRule(n);
            var o = new l.HSParameter(r), a = new p.HSParameterBlock(r);
            return a.type = t, o.childBlock = a, n.parameters = [ o ], n;
        }, t.prototype.buildScript = function() {
            return this.buildScript3();
        }, t.prototype.buildRecursiveScript = function() {
            var t = new a.HSScript(this.context);
            return t.blocks = [ this.buildControlBlock(f.HSBlockType.Ability, [ "" ], t) ], 
            t;
        }, t.prototype.buildEmptyScript = function() {
            var t = new a.HSScript(this.context);
            return t.blocks = [], t;
        }, t.prototype.buildScript3 = function() {
            var t = this.context, e = new a.HSScript(t);
            return e.blocks = [ this.buildControlBlock(f.HSBlockType.Repeat, [ "100" ], this.buildScript4()) ], 
            e;
        }, t.prototype.buildScript4 = function() {
            var t = this.context, e = new a.HSScript(t);
            return e.blocks = [ this.buildMethodBlock(f.HSBlockType.SetInvisibility, [ "90" ]), this.buildMethodBlock(f.HSBlockType.ChangeSpeed, [ "1600" ]), this.buildMethodBlock(f.HSBlockType.StrokeColor, [ "HSB(74, 100, 100)" ]), this.buildMethodBlock(f.HSBlockType.StrokeWidth, [ "30" ]), this.buildMethodBlock(f.HSBlockType.PenDown, []), this.buildMethodBlock(f.HSBlockType.Move, [ "200" ]), this.buildMethodBlock(f.HSBlockType.PenUp, []), this.buildMethodBlock(f.HSBlockType.Rotate, [ "135" ]), this.buildMethodBlock(f.HSBlockType.Move, [ "200" ]), this.buildMethodBlock(f.HSBlockType.Rotate, [ "145" ]) ], 
            e;
        }, t.prototype.buildScript2 = function() {
            var t = this.context, e = new a.HSScript(t);
            return e.blocks = [ this.buildMethodBlock(f.HSBlockType.ChangeSpeed, [ "1000" ]), this.buildMethodBlock(f.HSBlockType.Move, [ "100" ]), this.buildMethodBlock(f.HSBlockType.Rotate, [ "30" ]), this.buildMethodBlock(f.HSBlockType.Move, [ "150" ]), this.buildMethodBlock(f.HSBlockType.ChangeSpeed, [ "100" ]), this.buildMethodBlock(f.HSBlockType.Rotate, [ "60" ]), this.buildMethodBlock(f.HSBlockType.Move, [ "200" ]) ], 
            e;
        }, t.prototype.buildScript1 = function() {
            var t = this.context, e = new a.HSScript(t);
            return e.blocks = [ this.buildMethodBlock(f.HSBlockType.Grow, [ "200" ]), this.buildMethodBlock(f.HSBlockType.Shrink, [ "50" ]) ], 
            e;
        }, t.prototype.buildScript0 = function() {
            for (var t = this.context, e = new a.HSScript(t), i = [ this.buildMethodBlock(f.HSBlockType.SetPosition, [ "200", "200" ]) ], r = 0; r < 50; r++) i.push(this.buildMethodBlock(f.HSBlockType.Move, [ "200" ]));
            return i.push(this.buildMethodBlock(f.HSBlockType.SetSize, [ "200" ])), e.blocks = i, 
            e;
        }, t.prototype.buildMethodBlock = function(t, e) {
            void 0 === t && (t = f.HSBlockType.Move), void 0 === e && (e = []);
            this.context;
            var i = this.parametersFromValues(e), r = new d.HSMethodBlock(this.context);
            return r.type = t, r.parameters = i, r;
        }, t.prototype.parametersFromValues = function(t) {
            var e = this, i = [];
            return t.forEach(function(t, r, n) {
                var o = new l.HSParameter(e.context);
                t instanceof g.HSVariable ? o.childBlock = t : o.value = t, i.push(o);
            }), i;
        }, t.prototype.buildControlBlock = function(t, e, i) {
            void 0 === t && (t = f.HSBlockType.Repeat), void 0 === e && (e = []), i || (i = this.buildScript1());
            var r = this.parametersFromValues(e), n = new u.HSControlBlock(this.context);
            return n.type = t, n.parameters = r, n.scripts = [ i ], n;
        }, t.prototype.buildConditionalControlBlock = function(t, e, i) {
            void 0 === t && (t = f.HSBlockType.CheckOnceIf), void 0 === e && (e = []), i || (i = this.buildScript1());
            var r = this.parametersFromValues(e), o = new n.HSConditionalControl(this.context);
            return o.type = t, o.parameters = r, o.scripts = [ i ], o;
        }, t;
    }();
    e.HSManagedObjectFactory = y, window.HSManagedObjectFactory = y;
}, function(t, e, i) {
    "use strict";
    function r(t, e) {
        (function(t) {
            return "string" == typeof t && t.includes(".") && 1 === parseFloat(t);
        })(t) && (t = "100%");
        var i = function(t) {
            return "string" == typeof t && t.includes("%");
        }(t);
        return t = 360 === e ? t : Math.min(e, Math.max(0, parseFloat(t))), i && (t = parseInt(String(t * e), 10) / 100), 
        Math.abs(t - e) < 1e-6 ? 1 : t = 360 === e ? (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t % e / parseFloat(String(e));
    }
    function n(t) {
        return Math.min(1, Math.max(0, t));
    }
    function o(t) {
        return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
    }
    function a(t) {
        return t <= 1 ? 100 * Number(t) + "%" : t;
    }
    function s(t) {
        return 1 === t.length ? "0" + t : String(t);
    }
    function c(t, e, i) {
        t = r(t, 255), e = r(e, 255), i = r(i, 255);
        var n = Math.max(t, e, i), o = Math.min(t, e, i), a = 0, s = 0, c = (n + o) / 2;
        if (n === o) s = 0, a = 0; else {
            var u = n - o;
            switch (s = c > .5 ? u / (2 - n - o) : u / (n + o), n) {
              case t:
                a = (e - i) / u + (e < i ? 6 : 0);
                break;

              case e:
                a = (i - t) / u + 2;
                break;

              case i:
                a = (t - e) / u + 4;
            }
            a /= 6;
        }
        return {
            h: a,
            s: s,
            l: c
        };
    }
    function u(t, e, i) {
        t = r(t, 255), e = r(e, 255), i = r(i, 255);
        var n = Math.max(t, e, i), o = Math.min(t, e, i), a = 0, s = n, c = n - o, u = 0 === n ? 0 : c / n;
        if (n === o) a = 0; else {
            switch (n) {
              case t:
                a = (e - i) / c + (e < i ? 6 : 0);
                break;

              case e:
                a = (i - t) / c + 2;
                break;

              case i:
                a = (t - e) / c + 4;
            }
            a /= 6;
        }
        return {
            h: a,
            s: u,
            v: s
        };
    }
    function h(t, e, i, r) {
        var n = [ s(Math.round(t).toString(16)), s(Math.round(e).toString(16)), s(Math.round(i).toString(16)) ];
        return r && n[0].charAt(0) === n[0].charAt(1) && n[1].charAt(0) === n[1].charAt(1) && n[2].charAt(0) === n[2].charAt(1) ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0) : n.join("");
    }
    function l(t, e, i, r) {
        return [ s(p(r)), s(Math.round(t).toString(16)), s(Math.round(e).toString(16)), s(Math.round(i).toString(16)) ].join("");
    }
    function p(t) {
        return Math.round(255 * parseFloat(t)).toString(16);
    }
    function d(t) {
        return S(t) / 255;
    }
    function S(t) {
        return parseInt(t, 16);
    }
    i.r(e);
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
    function g(t) {
        var e, i, n, s = {
            r: 0,
            g: 0,
            b: 0
        }, c = 1, u = null, h = null, l = null, p = !1, d = !1;
        return "string" == typeof t && (t = T(t)), "object" == typeof t && (H(t.r) && H(t.g) && H(t.b) ? (e = t.r, 
        i = t.g, n = t.b, s = {
            r: 255 * r(e, 255),
            g: 255 * r(i, 255),
            b: 255 * r(n, 255)
        }, p = !0, d = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : H(t.h) && H(t.s) && H(t.v) ? (u = a(t.s), 
        h = a(t.v), s = function(t, e, i) {
            t = 6 * r(t, 360), e = r(e, 100), i = r(i, 100);
            var n = Math.floor(t), o = t - n, a = i * (1 - e), s = i * (1 - o * e), c = i * (1 - (1 - o) * e), u = n % 6;
            return {
                r: 255 * [ i, s, a, a, c, i ][u],
                g: 255 * [ c, i, i, s, a, a ][u],
                b: 255 * [ a, a, c, i, i, s ][u]
            };
        }(t.h, u, h), p = !0, d = "hsv") : H(t.h) && H(t.s) && H(t.l) && (u = a(t.s), l = a(t.l), 
        s = function(t, e, i) {
            var n, o, a;
            function s(t, e, i) {
                return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * i * (e - t) : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
            }
            if (t = r(t, 360), e = r(e, 100), i = r(i, 100), 0 === e) o = i, a = i, n = i; else {
                var c = i < .5 ? i * (1 + e) : i + e - i * e, u = 2 * i - c;
                n = s(u, c, t + 1 / 3), o = s(u, c, t), a = s(u, c, t - 1 / 3);
            }
            return {
                r: 255 * n,
                g: 255 * o,
                b: 255 * a
            };
        }(t.h, u, l), p = !0, d = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (c = t.a)), 
        c = o(c), {
            ok: p,
            format: t.format || d,
            r: Math.min(255, Math.max(s.r, 0)),
            g: Math.min(255, Math.max(s.g, 0)),
            b: Math.min(255, Math.max(s.b, 0)),
            a: c
        };
    }
    var y = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)", b = "[\\s|\\(]+(" + y + ")[,|\\s]+(" + y + ")[,|\\s]+(" + y + ")\\s*\\)?", v = "[\\s|\\(]+(" + y + ")[,|\\s]+(" + y + ")[,|\\s]+(" + y + ")[,|\\s]+(" + y + ")\\s*\\)?", m = {
        CSS_UNIT: new RegExp(y),
        rgb: new RegExp("rgb" + b),
        rgba: new RegExp("rgba" + v),
        hsl: new RegExp("hsl" + b),
        hsla: new RegExp("hsla" + v),
        hsv: new RegExp("hsv" + b),
        hsva: new RegExp("hsva" + v),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
    function T(t) {
        if (0 === (t = t.trim().toLowerCase()).length) return !1;
        var e = !1;
        if (f[t]) t = f[t], e = !0; else if ("transparent" === t) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
        var i = m.rgb.exec(t);
        return i ? {
            r: i[1],
            g: i[2],
            b: i[3]
        } : (i = m.rgba.exec(t)) ? {
            r: i[1],
            g: i[2],
            b: i[3],
            a: i[4]
        } : (i = m.hsl.exec(t)) ? {
            h: i[1],
            s: i[2],
            l: i[3]
        } : (i = m.hsla.exec(t)) ? {
            h: i[1],
            s: i[2],
            l: i[3],
            a: i[4]
        } : (i = m.hsv.exec(t)) ? {
            h: i[1],
            s: i[2],
            v: i[3]
        } : (i = m.hsva.exec(t)) ? {
            h: i[1],
            s: i[2],
            v: i[3],
            a: i[4]
        } : (i = m.hex8.exec(t)) ? {
            r: S(i[1]),
            g: S(i[2]),
            b: S(i[3]),
            a: d(i[4]),
            format: e ? "name" : "hex8"
        } : (i = m.hex6.exec(t)) ? {
            r: S(i[1]),
            g: S(i[2]),
            b: S(i[3]),
            format: e ? "name" : "hex"
        } : (i = m.hex4.exec(t)) ? {
            r: S(i[1] + i[1]),
            g: S(i[2] + i[2]),
            b: S(i[3] + i[3]),
            a: d(i[4] + i[4]),
            format: e ? "name" : "hex8"
        } : !!(i = m.hex3.exec(t)) && {
            r: S(i[1] + i[1]),
            g: S(i[2] + i[2]),
            b: S(i[3] + i[3]),
            format: e ? "name" : "hex"
        };
    }
    function H(t) {
        return Boolean(m.CSS_UNIT.exec(String(t)));
    }
    var O = function() {
        function t(e, i) {
            if (void 0 === e && (e = ""), void 0 === i && (i = {}), e instanceof t) return e;
            this.originalInput = e;
            var r = g(e);
            this.originalInput = e, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, 
            this.roundA = Math.round(100 * this.a) / 100, this.format = i.format || r.format, 
            this.gradientType = i.gradientType, this.r < 1 && (this.r = Math.round(this.r)), 
            this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), 
            this.isValid = r.ok;
        }
        return t.prototype.isDark = function() {
            return this.getBrightness() < 128;
        }, t.prototype.isLight = function() {
            return !this.isDark();
        }, t.prototype.getBrightness = function() {
            var t = this.toRgb();
            return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
        }, t.prototype.getLuminance = function() {
            var t = this.toRgb(), e = t.r / 255, i = t.g / 255, r = t.b / 255;
            return .2126 * (e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .7152 * (i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)) + .0722 * (r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4));
        }, t.prototype.getAlpha = function() {
            return this.a;
        }, t.prototype.setAlpha = function(t) {
            return this.a = o(t), this.roundA = Math.round(100 * this.a) / 100, this;
        }, t.prototype.toHsv = function() {
            var t = u(this.r, this.g, this.b);
            return {
                h: 360 * t.h,
                s: t.s,
                v: t.v,
                a: this.a
            };
        }, t.prototype.toHsvString = function() {
            var t = u(this.r, this.g, this.b), e = Math.round(360 * t.h), i = Math.round(100 * t.s), r = Math.round(100 * t.v);
            return 1 === this.a ? "hsv(" + e + ", " + i + "%, " + r + "%)" : "hsva(" + e + ", " + i + "%, " + r + "%, " + this.roundA + ")";
        }, t.prototype.toHsl = function() {
            var t = c(this.r, this.g, this.b);
            return {
                h: 360 * t.h,
                s: t.s,
                l: t.l,
                a: this.a
            };
        }, t.prototype.toHslString = function() {
            var t = c(this.r, this.g, this.b), e = Math.round(360 * t.h), i = Math.round(100 * t.s), r = Math.round(100 * t.l);
            return 1 === this.a ? "hsl(" + e + ", " + i + "%, " + r + "%)" : "hsla(" + e + ", " + i + "%, " + r + "%, " + this.roundA + ")";
        }, t.prototype.toHex = function(t) {
            return void 0 === t && (t = !1), h(this.r, this.g, this.b, t);
        }, t.prototype.toHexString = function(t) {
            return void 0 === t && (t = !1), "#" + this.toHex(t);
        }, t.prototype.toHex8 = function(t) {
            return void 0 === t && (t = !1), function(t, e, i, r, n) {
                var o = [ s(Math.round(t).toString(16)), s(Math.round(e).toString(16)), s(Math.round(i).toString(16)), s(p(r)) ];
                return n && o[0].charAt(0) === o[0].charAt(1) && o[1].charAt(0) === o[1].charAt(1) && o[2].charAt(0) === o[2].charAt(1) && o[3].charAt(0) === o[3].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
            }(this.r, this.g, this.b, this.a, t);
        }, t.prototype.toHex8String = function(t) {
            return void 0 === t && (t = !1), "#" + this.toHex8(t);
        }, t.prototype.toRgb = function() {
            return {
                r: Math.round(this.r),
                g: Math.round(this.g),
                b: Math.round(this.b),
                a: this.a
            };
        }, t.prototype.toRgbString = function() {
            var t = Math.round(this.r), e = Math.round(this.g), i = Math.round(this.b);
            return 1 === this.a ? "rgb(" + t + ", " + e + ", " + i + ")" : "rgba(" + t + ", " + e + ", " + i + ", " + this.roundA + ")";
        }, t.prototype.toPercentageRgb = function() {
            var t = function(t) {
                return Math.round(100 * r(t, 255)) + "%";
            };
            return {
                r: t(this.r),
                g: t(this.g),
                b: t(this.b),
                a: this.a
            };
        }, t.prototype.toPercentageRgbString = function() {
            var t = function(t) {
                return Math.round(100 * r(t, 255));
            };
            return 1 === this.a ? "rgb(" + t(this.r) + "%, " + t(this.g) + "%, " + t(this.b) + "%)" : "rgba(" + t(this.r) + "%, " + t(this.g) + "%, " + t(this.b) + "%, " + this.roundA + ")";
        }, t.prototype.toName = function() {
            if (0 === this.a) return "transparent";
            if (this.a < 1) return !1;
            for (var t = "#" + h(this.r, this.g, this.b, !1), e = 0, i = Object.keys(f); e < i.length; e++) {
                var r = i[e];
                if (f[r] === t) return r;
            }
            return !1;
        }, t.prototype.toString = function(t) {
            var e = Boolean(t);
            t = t || this.format;
            var i = !1, r = this.a < 1 && this.a >= 0;
            return e || !r || !t.startsWith("hex") && "name" !== t ? ("rgb" === t && (i = this.toRgbString()), 
            "prgb" === t && (i = this.toPercentageRgbString()), "hex" !== t && "hex6" !== t || (i = this.toHexString()), 
            "hex3" === t && (i = this.toHexString(!0)), "hex4" === t && (i = this.toHex8String(!0)), 
            "hex8" === t && (i = this.toHex8String()), "name" === t && (i = this.toName()), 
            "hsl" === t && (i = this.toHslString()), "hsv" === t && (i = this.toHsvString()), 
            i || this.toHexString()) : "name" === t && 0 === this.a ? this.toName() : this.toRgbString();
        }, t.prototype.clone = function() {
            return new t(this.toString());
        }, t.prototype.lighten = function(e) {
            void 0 === e && (e = 10);
            var i = this.toHsl();
            return i.l += e / 100, i.l = n(i.l), new t(i);
        }, t.prototype.brighten = function(e) {
            void 0 === e && (e = 10);
            var i = this.toRgb();
            return i.r = Math.max(0, Math.min(255, i.r - Math.round(-e / 100 * 255))), i.g = Math.max(0, Math.min(255, i.g - Math.round(-e / 100 * 255))), 
            i.b = Math.max(0, Math.min(255, i.b - Math.round(-e / 100 * 255))), new t(i);
        }, t.prototype.darken = function(e) {
            void 0 === e && (e = 10);
            var i = this.toHsl();
            return i.l -= e / 100, i.l = n(i.l), new t(i);
        }, t.prototype.tint = function(t) {
            return void 0 === t && (t = 10), this.mix("white", t);
        }, t.prototype.shade = function(t) {
            return void 0 === t && (t = 10), this.mix("black", t);
        }, t.prototype.desaturate = function(e) {
            void 0 === e && (e = 10);
            var i = this.toHsl();
            return i.s -= e / 100, i.s = n(i.s), new t(i);
        }, t.prototype.saturate = function(e) {
            void 0 === e && (e = 10);
            var i = this.toHsl();
            return i.s += e / 100, i.s = n(i.s), new t(i);
        }, t.prototype.greyscale = function() {
            return this.desaturate(100);
        }, t.prototype.spin = function(e) {
            var i = this.toHsl(), r = (i.h + e) % 360;
            return i.h = r < 0 ? 360 + r : r, new t(i);
        }, t.prototype.mix = function(e, i) {
            void 0 === i && (i = 50);
            var r = this.toRgb(), n = new t(e).toRgb(), o = i / 100;
            return new t({
                r: (n.r - r.r) * o + r.r,
                g: (n.g - r.g) * o + r.g,
                b: (n.b - r.b) * o + r.b,
                a: (n.a - r.a) * o + r.a
            });
        }, t.prototype.analogous = function(e, i) {
            void 0 === e && (e = 6), void 0 === i && (i = 30);
            var r = this.toHsl(), n = 360 / i, o = [ this ];
            for (r.h = (r.h - (n * e >> 1) + 720) % 360; --e; ) r.h = (r.h + n) % 360, o.push(new t(r));
            return o;
        }, t.prototype.complement = function() {
            var e = this.toHsl();
            return e.h = (e.h + 180) % 360, new t(e);
        }, t.prototype.monochromatic = function(e) {
            void 0 === e && (e = 6);
            for (var i = this.toHsv(), r = i.h, n = i.s, o = i.v, a = [], s = 1 / e; e--; ) a.push(new t({
                h: r,
                s: n,
                v: o
            })), o = (o + s) % 1;
            return a;
        }, t.prototype.splitcomplement = function() {
            var e = this.toHsl(), i = e.h;
            return [ this, new t({
                h: (i + 72) % 360,
                s: e.s,
                l: e.l
            }), new t({
                h: (i + 216) % 360,
                s: e.s,
                l: e.l
            }) ];
        }, t.prototype.triad = function() {
            return this.polyad(3);
        }, t.prototype.tetrad = function() {
            return this.polyad(4);
        }, t.prototype.polyad = function(e) {
            for (var i = this.toHsl(), r = i.h, n = [ this ], o = 360 / e, a = 1; a < e; a++) n.push(new t({
                h: (r + a * o) % 360,
                s: i.s,
                l: i.l
            }));
            return n;
        }, t.prototype.equals = function(e) {
            return this.toRgbString() === new t(e).toRgbString();
        }, t;
    }();
    function E(t, e) {
        return void 0 === t && (t = ""), void 0 === e && (e = {}), new O(t, e);
    }
    function w(t, e) {
        var i = new O(t), r = new O(e);
        return (Math.max(i.getLuminance(), r.getLuminance()) + .05) / (Math.min(i.getLuminance(), r.getLuminance()) + .05);
    }
    function _(t, e, i) {
        void 0 === i && (i = {
            level: "AA",
            size: "small"
        });
        var r = w(t, e);
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
    function k(t, e, i) {
        void 0 === i && (i = {
            includeFallbackColors: !1,
            level: "AA",
            size: "small"
        });
        for (var r = null, n = 0, o = i.includeFallbackColors, a = i.level, s = i.size, c = 0, u = e; c < u.length; c++) {
            var h = u[c], l = w(t, h);
            l > n && (n = l, r = new O(h));
        }
        return _(t, r, {
            level: a,
            size: s
        }) || !o ? r : (i.includeFallbackColors = !1, k(t, [ "#fff", "#000" ], i));
    }
    function B(t, e) {
        var i = new O(t), r = "#" + l(i.r, i.g, i.b, i.a), n = r, o = i.gradientType ? "GradientType = 1, " : "";
        if (e) {
            var a = new O(e);
            n = "#" + l(a.r, a.g, a.b, a.a);
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + o + "startColorstr=" + r + ",endColorstr=" + n + ")";
    }
    function x(t, e) {
        var i = {
            r: a(t.r),
            g: a(t.g),
            b: a(t.b)
        };
        return void 0 !== t.a && (i.a = Number(t.a)), new O(i, e);
    }
    function C() {
        return new O({
            r: Math.random(),
            g: Math.random(),
            b: Math.random()
        });
    }
    function j(t) {
        if (void 0 === t && (t = {}), void 0 !== t.count && null !== t.count) {
            var e = t.count, i = [];
            for (t.count = void 0; e > i.length; ) t.count = null, t.seed && (t.seed += 1), 
            i.push(j(t));
            return t.count = e, i;
        }
        var r = function(t, e) {
            var i = P(function(t) {
                var e = parseInt(t, 10);
                if (!Number.isNaN(e) && e < 360 && e > 0) return [ e, e ];
                if ("string" == typeof t) {
                    var i = R.find(function(e) {
                        return e.name === t;
                    });
                    if (i) {
                        var r = M(i);
                        if (r.hueRange) return r.hueRange;
                    }
                    var n = new O(t);
                    if (n.isValid) {
                        var o = n.toHsv().h;
                        return [ o, o ];
                    }
                }
                return [ 0, 360 ];
            }(t), e);
            i < 0 && (i = 360 + i);
            return i;
        }(t.hue, t.seed), n = function(t, e) {
            if ("monochrome" === e.hue) return 0;
            if ("random" === e.luminosity) return P([ 0, 100 ], e.seed);
            var i = I(t).saturationRange, r = i[0], n = i[1];
            switch (e.luminosity) {
              case "bright":
                r = 55;
                break;

              case "dark":
                r = n - 10;
                break;

              case "light":
                n = 55;
            }
            return P([ r, n ], e.seed);
        }(r, t), o = {
            h: r,
            s: n,
            v: function(t, e, i) {
                var r = function(t, e) {
                    for (var i = I(t).lowerBounds, r = 0; r < i.length - 1; r++) {
                        var n = i[r][0], o = i[r][1], a = i[r + 1][0], s = i[r + 1][1];
                        if (e >= n && e <= a) {
                            var c = (s - o) / (a - n);
                            return c * e + (o - c * n);
                        }
                    }
                    return 0;
                }(t, e), n = 100;
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
                return P([ r, n ], i.seed);
            }(r, n, t)
        };
        return void 0 !== t.alpha && (o.a = t.alpha), new O(o);
    }
    function I(t) {
        t >= 334 && t <= 360 && (t -= 360);
        for (var e = 0, i = R; e < i.length; e++) {
            var r = M(i[e]);
            if (r.hueRange && t >= r.hueRange[0] && t <= r.hueRange[1]) return r;
        }
        throw Error("Color not found");
    }
    function P(t, e) {
        if (void 0 === e) return Math.floor(t[0] + Math.random() * (t[1] + 1 - t[0]));
        var i = t[1] || 1, r = t[0] || 0, n = (e = (9301 * e + 49297) % 233280) / 233280;
        return Math.floor(r + n * (i - r));
    }
    function M(t) {
        var e = t.lowerBounds[0][0], i = t.lowerBounds[t.lowerBounds.length - 1][0], r = t.lowerBounds[t.lowerBounds.length - 1][1], n = t.lowerBounds[0][1];
        return {
            name: t.name,
            hueRange: t.hueRange,
            lowerBounds: t.lowerBounds,
            saturationRange: [ e, i ],
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
    i.d(e, "TinyColor", function() {
        return O;
    }), i.d(e, "tinycolor", function() {
        return E;
    }), i.d(e, "names", function() {
        return f;
    }), i.d(e, "readability", function() {
        return w;
    }), i.d(e, "isReadable", function() {
        return _;
    }), i.d(e, "mostReadable", function() {
        return k;
    }), i.d(e, "toMsFilter", function() {
        return B;
    }), i.d(e, "fromRatio", function() {
        return x;
    }), i.d(e, "legacyRandom", function() {
        return C;
    }), i.d(e, "inputToRGB", function() {
        return g;
    }), i.d(e, "stringInputToObject", function() {
        return T;
    }), i.d(e, "isValidCSSUnit", function() {
        return H;
    }), i.d(e, "random", function() {
        return j;
    }), i.d(e, "bounds", function() {
        return R;
    });
    e.default = E;
} ]);
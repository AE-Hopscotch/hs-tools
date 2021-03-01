function sendToApp(a, b, c) {
    void 0 === c && (c = "hopscotch");
    var d = window.webkit;
    if (d && d.messageHandlers) {
        d.messageHandlers[c].postMessage((e = {}, e[a] = b, e));
        var e;
    }
}

function hasEmoji(a) {
    var b = /[\uD800-\uDBFF\uDC00-\uDFFF]/;
    return null != a && "" !== a && (b.test(a) || RegExp("" + emoji.regex.source).test(a));
}

function onlyEmoji(a) {
    return null != a && "" !== a && RegExp("^(" + emoji.regex.source + ")+$").test(a);
}

function requestTextureFromApp(a, b) {
    if (void 0 === b && (b = JSON.stringify(a)), !appRequestCache.get(b)) {
        var c = appRequestCounter++;
        appRequestCache.set(b, new Promise(function(b) {
            appRequestCallbacks[c] = b, window.webkit.messageHandlers.renderer.postMessage(Object.assign({}, a, {
                replyTo: "appRequestCallbacks[" + c + "]"
            }));
        }).then(function(a) {
            return delete appRequestCallbacks[c], a;
        }));
    }
    return appRequestCache.get(b);
}

function log() {
    for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
    console.log.apply(console, arguments), sendToApp("log", Array.prototype.join.call(arguments, " "));
}

function clamp(a, b, c) {
    var d = Math.max(b, a);
    return Math.min(d, c);
}

function mean(a) {
    return a.reduce(function(a, b) {
        return a + b;
    }, 0) / a.length;
}

function variance(a) {
    var b = mean(a);
    return a.reduce(function(a, c) {
        return a + Math.pow(c - b, 2);
    }, 0) / a.length;
}

function findLast(a, b) {
    for (var c = a.length - 1; c >= 0; c--) if (b(a[c], c, a)) return a[c];
}

function benchmarkStart() {
    startTime = performance.now();
}

function benchmarkEnd() {
    var a = performance.now();
    if (benchmarks.length >= 100) {
        for (var b = 0, c = 0; c < benchmarks.length; c++) b += benchmarks[c];
        var d = document.getElementById("time").innerText;
        d.length > 130 && (d = d.substring(50, 130));
        var e = Math.round(b / benchmarks.length * 1e3) / 1e3;
        document.getElementById("time").innerText = d + " " + e + "ms", benchmarks = [];
    }
    var f = a - startTime;
    benchmarks.push(f);
}

function makeDebugCanvas(a, b) {
    var c = document.createElement("canvas");
    return c.style.position = "fixed", c.style.top = a + "px", c.style.left = b + "px", 
    c.style.border = "1px solid blue", c.style.zIndex = "99999", document.body.appendChild(c), 
    c.width = HSVisualContext.collisionResolution, c.height = HSVisualContext.collisionResolution, 
    c;
}

function hs_plane(a, b) {
    return Math.abs(a) >= Math.abs(b) ? HSPlane.horizontal : HSPlane.vertical;
}

function hs_magnitude(a, b) {
    return Math.abs(a) < b ? HSMagnitude.none : a > 0 ? HSMagnitude.positive : HSMagnitude.negative;
}

function hs_direction(a, b, c) {
    var d, e = hs_plane(a, b);
    switch (e) {
      case HSPlane.horizontal:
        d = hs_magnitude(a, c);
        break;

      case HSPlane.vertical:
        d = hs_magnitude(b, c);
    }
    return hs_directionForMagnitudeAndPlane(d, e);
}

function hs_directionForMagnitudeAndPlane(a, b) {
    switch (a) {
      case HSMagnitude.positive:
        switch (b) {
          case HSPlane.horizontal:
            return HSDirection.right;

          case HSPlane.vertical:
            return HSDirection.up;
        }

      case HSMagnitude.negative:
        switch (b) {
          case HSPlane.horizontal:
            return HSDirection.left;

          case HSPlane.vertical:
            return HSDirection.down;
        }

      case HSMagnitude.none:
        return null;
    }
}

function isFullscreen() {
    return !!document.fullscreenElement || (!!document.webkitFullscreenElement || (!!document.mozFullScreenElement || (!!document.msFullScreenElement || main.isMaximized)));
}

function enterFullscreen(a, b, c) {
    var d = b || window.innerWidth, e = c || window.innerHeight;
    if (main.resizeRoot(d, e), a = a, a.requestFullscreen) a.requestFullscreen(); else if (a.mozRequestFullScreen) a.mozRequestFullScreen(); else if (a.webkitRequestFullscreen) a.webkitRequestFullscreen(); else if (a.msRequestFullscreen) a.msRequestFullscreen(); else {
        main.isMaximized = !0, main.resizeRoot(d, e), main.root.style.position = "absolute", 
        main.centerOnScreen(d, e);
        for (var f = 0; f < document.body.children.length; f++) document.body.children[f].style.visibility = "hidden";
        document.body.style.backgroundColor = "black", main.root.style.visibility = "visible", 
        document.dispatchEvent(new Event("fullscreenchange"));
    }
}

function exitFullscreen() {
    if (main.setSizeFromDataAttrs(), document.exitFullscreen) document.exitFullscreen(); else if (document.msExitFullscreen) document.msExitFullscreen(); else if (document.mozCancelFullScreen) document.mozCancelFullScreen(); else if (document.webkitExitFullscreen) document.webkitExitFullscreen(); else {
        main.isMaximized = !1, main.root.style.position = "", main.root.style.top = "", 
        main.root.style.left = "";
        for (var a = 0; a < document.body.children.length; a++) document.body.children[a].style.visibility = "";
        document.body.style.backgroundColor = "", main.root.style.visibility = "", document.dispatchEvent(new Event("fullscreenchange"));
    }
}

function getImageFromUri(a) {
    var b = new Image();
    return a.startsWith("data:") || (b.crossOrigin = "Anonymous"), new Promise(function(c, d) {
        b.onload = function() {
            return c(b);
        }, b.onerror = d, b.src = a.replace(/-?200d/g, "");
    });
}

function degreesToRadians(a) {
    return a * Math.PI / 180;
}

function radiansToDegrees(a) {
    return a / Math.PI * 180;
}

function isIOSApp() {
    return iOSApp || !!window.HS_IS_IOS_APP;
}

function blockTypeForLegacyEventType(a) {
    switch (a) {
      case HSEventType.HSEventOnStart:
        return HSBlockType.EventOperatorStart;

      case HSEventType.HSEventShake:
        return HSBlockType.EventOperatorShake;

      case HSEventType.HSEventTiltUp:
        return HSBlockType.EventOperatorTiltUp;

      case HSEventType.HSEventTiltDown:
        return HSBlockType.EventOperatorTiltDown;

      case HSEventType.HSEventTiltRight:
        return HSBlockType.EventOperatorTiltRight;

      case HSEventType.HSEventTiltLeft:
        return HSBlockType.EventOperatorTiltLeft;

      case HSEventType.HSEventTapStage:
      case HSEventType.HSEventTouchedObject:
        return HSBlockType.EventOperatorTap;

      case HSEventType.HSEventLoudNoise:
        return HSBlockType.EventOperatorLoudNoise;

      case HSEventType.HSEventCollision:
        return HSBlockType.EventOperatorIsTouching;

      case HSEventType.HSEventHeldObject:
        return HSBlockType.EventOperatorHold;

      case HSEventType.HSEventEnteredWorld:
        return HSBlockType.EventOperatorEnterTheWorld;
    }
    return HSBlockType.EventOperatorStart;
}

function hsIsShapeType(a) {
    var b = hsIsFullSizeShape(a);
    return a > HSObjectType.HS_END_OF_CHARACTERS && a < HSObjectType.HS_END_OF_SHAPES || b;
}

function hsIsFullSizeShape(a) {
    return a >= HSObjectType.roundedSquareFullSize && a < HSObjectType.HS_END_OF_FULL_SIZE_SHAPES;
}

function hsCanLoadEmojis(a) {
    var b = new XMLHttpRequest();
    b.open("GET", "https://d2j12ek52gvmx9.cloudfront.net/emojis/d83d-de0e.png", !0), 
    b.onreadystatechange = function() {
        4 == b.readyState && a(200 === b.status);
    }, b.onerror = function() {
        a(!1);
    }, b.send(null);
}

function UIRegisterEventCallbacks(a, b) {
    function c(a, b, c) {
        return new UIEventListener(a, b, function(a) {
            a.preventDefault(), c(a);
        });
    }
    function d(a, b) {
        var c = a.target.getBoundingClientRect();
        Array.from(a.changedTouches).forEach(function(a) {
            b(new UIPointerEvent(a, [ a.clientX - c.left, a.clientY - c.top ], a.identifier));
        });
    }
    function e(a, b, d) {
        return c(a, b, function(a) {
            var b = [ a.offsetX, a.offsetY ], c = new UIPointerEvent(a, b);
            d(c);
        });
    }
    function f(a, b, e) {
        return c(a, b, function(a) {
            return d(a, e);
        });
    }
    var g = !1;
    return new UIEventListeners([ e(a, "mousedown", function(a) {
        g && b.pointerUp(a), g = !0, b.pointerDown(a);
    }), e(a, "mousemove", function(a) {
        g && b.pointerDrag(a);
    }), e(window, "mouseup", function(a) {
        b.pointerUp(a), g = !1;
    }), f(a, "touchstart", b.pointerDown), f(a, "touchmove", b.pointerDrag), f(window, "touchend", b.pointerUp), f(window, "touchcancel", b.pointerCancel) ]);
}

!function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j;
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c || a);
            }, k, k.exports, a, b, c, d);
        }
        return c[g].exports;
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e;
}({
    1: [ function(a, b, c) {
        (function(b) {
            "use strict";
            function c(a, b, c) {
                a[b] || Object[d](a, b, {
                    writable: !0,
                    configurable: !0,
                    value: c
                });
            }
            if (a(295), a(296), a(2), b._babelPolyfill) throw new Error("only one instance of babel-polyfill is allowed");
            b._babelPolyfill = !0;
            var d = "defineProperty";
            c(String.prototype, "padLeft", "".padStart), c(String.prototype, "padRight", "".padEnd), 
            "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(a) {
                [][a] && c(Array, a, Function.call.bind([][a]));
            });
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {
        2: 2,
        295: 295,
        296: 296
    } ],
    2: [ function(a, b, c) {
        a(119), b.exports = a(23).RegExp.escape;
    }, {
        119: 119,
        23: 23
    } ],
    3: [ function(a, b, c) {
        b.exports = function(a) {
            if ("function" != typeof a) throw TypeError(a + " is not a function!");
            return a;
        };
    }, {} ],
    4: [ function(a, b, c) {
        var d = a(18);
        b.exports = function(a, b) {
            if ("number" != typeof a && "Number" != d(a)) throw TypeError(b);
            return +a;
        };
    }, {
        18: 18
    } ],
    5: [ function(a, b, c) {
        var d = a(117)("unscopables"), e = Array.prototype;
        void 0 == e[d] && a(40)(e, d, {}), b.exports = function(a) {
            e[d][a] = !0;
        };
    }, {
        117: 117,
        40: 40
    } ],
    6: [ function(a, b, c) {
        b.exports = function(a, b, c, d) {
            if (!(a instanceof b) || void 0 !== d && d in a) throw TypeError(c + ": incorrect invocation!");
            return a;
        };
    }, {} ],
    7: [ function(a, b, c) {
        var d = a(49);
        b.exports = function(a) {
            if (!d(a)) throw TypeError(a + " is not an object!");
            return a;
        };
    }, {
        49: 49
    } ],
    8: [ function(a, b, c) {
        "use strict";
        var d = a(109), e = a(105), f = a(108);
        b.exports = [].copyWithin || function(a, b) {
            var c = d(this), g = f(c.length), h = e(a, g), i = e(b, g), j = arguments.length > 2 ? arguments[2] : void 0, k = Math.min((void 0 === j ? g : e(j, g)) - i, g - h), l = 1;
            for (i < h && h < i + k && (l = -1, i += k - 1, h += k - 1); k-- > 0; ) i in c ? c[h] = c[i] : delete c[h], 
            h += l, i += l;
            return c;
        };
    }, {
        105: 105,
        108: 108,
        109: 109
    } ],
    9: [ function(a, b, c) {
        "use strict";
        var d = a(109), e = a(105), f = a(108);
        b.exports = function(a) {
            for (var b = d(this), c = f(b.length), g = arguments.length, h = e(g > 1 ? arguments[1] : void 0, c), i = g > 2 ? arguments[2] : void 0, j = void 0 === i ? c : e(i, c); j > h; ) b[h++] = a;
            return b;
        };
    }, {
        105: 105,
        108: 108,
        109: 109
    } ],
    10: [ function(a, b, c) {
        var d = a(37);
        b.exports = function(a, b) {
            var c = [];
            return d(a, !1, c.push, c, b), c;
        };
    }, {
        37: 37
    } ],
    11: [ function(a, b, c) {
        var d = a(107), e = a(108), f = a(105);
        b.exports = function(a) {
            return function(b, c, g) {
                var h, i = d(b), j = e(i.length), k = f(g, j);
                if (a && c != c) {
                    for (;j > k; ) if ((h = i[k++]) != h) return !0;
                } else for (;j > k; k++) if ((a || k in i) && i[k] === c) return a || k || 0;
                return !a && -1;
            };
        };
    }, {
        105: 105,
        107: 107,
        108: 108
    } ],
    12: [ function(a, b, c) {
        var d = a(25), e = a(45), f = a(109), g = a(108), h = a(15);
        b.exports = function(a, b) {
            var c = 1 == a, i = 2 == a, j = 3 == a, k = 4 == a, l = 6 == a, m = 5 == a || l, n = b || h;
            return function(b, h, o) {
                for (var p, q, r = f(b), s = e(r), t = d(h, o, 3), u = g(s.length), v = 0, w = c ? n(b, u) : i ? n(b, 0) : void 0; u > v; v++) if ((m || v in s) && (p = s[v], 
                q = t(p, v, r), a)) if (c) w[v] = q; else if (q) switch (a) {
                  case 3:
                    return !0;

                  case 5:
                    return p;

                  case 6:
                    return v;

                  case 2:
                    w.push(p);
                } else if (k) return !1;
                return l ? -1 : j || k ? k : w;
            };
        };
    }, {
        108: 108,
        109: 109,
        15: 15,
        25: 25,
        45: 45
    } ],
    13: [ function(a, b, c) {
        var d = a(3), e = a(109), f = a(45), g = a(108);
        b.exports = function(a, b, c, h, i) {
            d(b);
            var j = e(a), k = f(j), l = g(j.length), m = i ? l - 1 : 0, n = i ? -1 : 1;
            if (c < 2) for (;;) {
                if (m in k) {
                    h = k[m], m += n;
                    break;
                }
                if (m += n, i ? m < 0 : l <= m) throw TypeError("Reduce of empty array with no initial value");
            }
            for (;i ? m >= 0 : l > m; m += n) m in k && (h = b(h, k[m], m, j));
            return h;
        };
    }, {
        108: 108,
        109: 109,
        3: 3,
        45: 45
    } ],
    14: [ function(a, b, c) {
        var d = a(49), e = a(47), f = a(117)("species");
        b.exports = function(a) {
            var b;
            return e(a) && (b = a.constructor, "function" != typeof b || b !== Array && !e(b.prototype) || (b = void 0), 
            d(b) && null === (b = b[f]) && (b = void 0)), void 0 === b ? Array : b;
        };
    }, {
        117: 117,
        47: 47,
        49: 49
    } ],
    15: [ function(a, b, c) {
        var d = a(14);
        b.exports = function(a, b) {
            return new (d(a))(b);
        };
    }, {
        14: 14
    } ],
    16: [ function(a, b, c) {
        "use strict";
        var d = a(3), e = a(49), f = a(44), g = [].slice, h = {}, i = function(a, b, c) {
            if (!(b in h)) {
                for (var d = [], e = 0; e < b; e++) d[e] = "a[" + e + "]";
                h[b] = Function("F,a", "return new F(" + d.join(",") + ")");
            }
            return h[b](a, c);
        };
        b.exports = Function.bind || function(a) {
            var b = d(this), c = g.call(arguments, 1), h = function() {
                var d = c.concat(g.call(arguments));
                return this instanceof h ? i(b, d.length, d) : f(b, d, a);
            };
            return e(b.prototype) && (h.prototype = b.prototype), h;
        };
    }, {
        3: 3,
        44: 44,
        49: 49
    } ],
    17: [ function(a, b, c) {
        var d = a(18), e = a(117)("toStringTag"), f = "Arguments" == d(function() {
            return arguments;
        }()), g = function(a, b) {
            try {
                return a[b];
            } catch (a) {}
        };
        b.exports = function(a) {
            var b, c, h;
            return void 0 === a ? "Undefined" : null === a ? "Null" : "string" == typeof (c = g(b = Object(a), e)) ? c : f ? d(b) : "Object" == (h = d(b)) && "function" == typeof b.callee ? "Arguments" : h;
        };
    }, {
        117: 117,
        18: 18
    } ],
    18: [ function(a, b, c) {
        var d = {}.toString;
        b.exports = function(a) {
            return d.call(a).slice(8, -1);
        };
    }, {} ],
    19: [ function(a, b, c) {
        "use strict";
        var d = a(67).f, e = a(66), f = a(86), g = a(25), h = a(6), i = a(27), j = a(37), k = a(53), l = a(55), m = a(91), n = a(28), o = a(62).fastKey, p = n ? "_s" : "size", q = function(a, b) {
            var c, d = o(b);
            if ("F" !== d) return a._i[d];
            for (c = a._f; c; c = c.n) if (c.k == b) return c;
        };
        b.exports = {
            getConstructor: function(a, b, c, k) {
                var l = a(function(a, d) {
                    h(a, l, b, "_i"), a._i = e(null), a._f = void 0, a._l = void 0, a[p] = 0, void 0 != d && j(d, c, a[k], a);
                });
                return f(l.prototype, {
                    clear: function() {
                        for (var a = this, b = a._i, c = a._f; c; c = c.n) c.r = !0, c.p && (c.p = c.p.n = void 0), 
                        delete b[c.i];
                        a._f = a._l = void 0, a[p] = 0;
                    },
                    "delete": function(a) {
                        var b = this, c = q(b, a);
                        if (c) {
                            var d = c.n, e = c.p;
                            delete b._i[c.i], c.r = !0, e && (e.n = d), d && (d.p = e), b._f == c && (b._f = d), 
                            b._l == c && (b._l = e), b[p]--;
                        }
                        return !!c;
                    },
                    forEach: function(a) {
                        h(this, l, "forEach");
                        for (var b, c = g(a, arguments.length > 1 ? arguments[1] : void 0, 3); b = b ? b.n : this._f; ) for (c(b.v, b.k, this); b && b.r; ) b = b.p;
                    },
                    has: function(a) {
                        return !!q(this, a);
                    }
                }), n && d(l.prototype, "size", {
                    get: function() {
                        return i(this[p]);
                    }
                }), l;
            },
            def: function(a, b, c) {
                var d, e, f = q(a, b);
                return f ? f.v = c : (a._l = f = {
                    i: e = o(b, !0),
                    k: b,
                    v: c,
                    p: d = a._l,
                    n: void 0,
                    r: !1
                }, a._f || (a._f = f), d && (d.n = f), a[p]++, "F" !== e && (a._i[e] = f)), a;
            },
            getEntry: q,
            setStrong: function(a, b, c) {
                k(a, b, function(a, b) {
                    this._t = a, this._k = b, this._l = void 0;
                }, function() {
                    for (var a = this, b = a._k, c = a._l; c && c.r; ) c = c.p;
                    return a._t && (a._l = c = c ? c.n : a._t._f) ? "keys" == b ? l(0, c.k) : "values" == b ? l(0, c.v) : l(0, [ c.k, c.v ]) : (a._t = void 0, 
                    l(1));
                }, c ? "entries" : "values", !c, !0), m(b);
            }
        };
    }, {
        25: 25,
        27: 27,
        28: 28,
        37: 37,
        53: 53,
        55: 55,
        6: 6,
        62: 62,
        66: 66,
        67: 67,
        86: 86,
        91: 91
    } ],
    20: [ function(a, b, c) {
        var d = a(17), e = a(10);
        b.exports = function(a) {
            return function() {
                if (d(this) != a) throw TypeError(a + "#toJSON isn't generic");
                return e(this);
            };
        };
    }, {
        10: 10,
        17: 17
    } ],
    21: [ function(a, b, c) {
        "use strict";
        var d = a(86), e = a(62).getWeak, f = a(7), g = a(49), h = a(6), i = a(37), j = a(12), k = a(39), l = j(5), m = j(6), n = 0, o = function(a) {
            return a._l || (a._l = new p());
        }, p = function() {
            this.a = [];
        }, q = function(a, b) {
            return l(a.a, function(a) {
                return a[0] === b;
            });
        };
        p.prototype = {
            get: function(a) {
                var b = q(this, a);
                if (b) return b[1];
            },
            has: function(a) {
                return !!q(this, a);
            },
            set: function(a, b) {
                var c = q(this, a);
                c ? c[1] = b : this.a.push([ a, b ]);
            },
            "delete": function(a) {
                var b = m(this.a, function(b) {
                    return b[0] === a;
                });
                return ~b && this.a.splice(b, 1), !!~b;
            }
        }, b.exports = {
            getConstructor: function(a, b, c, f) {
                var j = a(function(a, d) {
                    h(a, j, b, "_i"), a._i = n++, a._l = void 0, void 0 != d && i(d, c, a[f], a);
                });
                return d(j.prototype, {
                    "delete": function(a) {
                        if (!g(a)) return !1;
                        var b = e(a);
                        return !0 === b ? o(this).delete(a) : b && k(b, this._i) && delete b[this._i];
                    },
                    has: function(a) {
                        if (!g(a)) return !1;
                        var b = e(a);
                        return !0 === b ? o(this).has(a) : b && k(b, this._i);
                    }
                }), j;
            },
            def: function(a, b, c) {
                var d = e(f(b), !0);
                return !0 === d ? o(a).set(b, c) : d[a._i] = c, a;
            },
            ufstore: o
        };
    }, {
        12: 12,
        37: 37,
        39: 39,
        49: 49,
        6: 6,
        62: 62,
        7: 7,
        86: 86
    } ],
    22: [ function(a, b, c) {
        "use strict";
        var d = a(38), e = a(32), f = a(87), g = a(86), h = a(62), i = a(37), j = a(6), k = a(49), l = a(34), m = a(54), n = a(92), o = a(43);
        b.exports = function(a, b, c, p, q, r) {
            var s = d[a], t = s, u = q ? "set" : "add", v = t && t.prototype, w = {}, x = function(a) {
                var b = v[a];
                f(v, a, "delete" == a ? function(a) {
                    return !(r && !k(a)) && b.call(this, 0 === a ? 0 : a);
                } : "has" == a ? function(a) {
                    return !(r && !k(a)) && b.call(this, 0 === a ? 0 : a);
                } : "get" == a ? function(a) {
                    return r && !k(a) ? void 0 : b.call(this, 0 === a ? 0 : a);
                } : "add" == a ? function(a) {
                    return b.call(this, 0 === a ? 0 : a), this;
                } : function(a, c) {
                    return b.call(this, 0 === a ? 0 : a, c), this;
                });
            };
            if ("function" == typeof t && (r || v.forEach && !l(function() {
                new t().entries().next();
            }))) {
                var y = new t(), z = y[u](r ? {} : -0, 1) != y, A = l(function() {
                    y.has(1);
                }), B = m(function(a) {
                    new t(a);
                }), C = !r && l(function() {
                    for (var a = new t(), b = 5; b--; ) a[u](b, b);
                    return !a.has(-0);
                });
                B || (t = b(function(b, c) {
                    j(b, t, a);
                    var d = o(new s(), b, t);
                    return void 0 != c && i(c, q, d[u], d), d;
                }), t.prototype = v, v.constructor = t), (A || C) && (x("delete"), x("has"), q && x("get")), 
                (C || z) && x(u), r && v.clear && delete v.clear;
            } else t = p.getConstructor(b, a, q, u), g(t.prototype, c), h.NEED = !0;
            return n(t, a), w[a] = t, e(e.G + e.W + e.F * (t != s), w), r || p.setStrong(t, a, q), 
            t;
        };
    }, {
        32: 32,
        34: 34,
        37: 37,
        38: 38,
        43: 43,
        49: 49,
        54: 54,
        6: 6,
        62: 62,
        86: 86,
        87: 87,
        92: 92
    } ],
    23: [ function(a, b, c) {
        var d = b.exports = {
            version: "2.4.0"
        };
        "number" == typeof __e && (__e = d);
    }, {} ],
    24: [ function(a, b, c) {
        "use strict";
        var d = a(67), e = a(85);
        b.exports = function(a, b, c) {
            b in a ? d.f(a, b, e(0, c)) : a[b] = c;
        };
    }, {
        67: 67,
        85: 85
    } ],
    25: [ function(a, b, c) {
        var d = a(3);
        b.exports = function(a, b, c) {
            if (d(a), void 0 === b) return a;
            switch (c) {
              case 1:
                return function(c) {
                    return a.call(b, c);
                };

              case 2:
                return function(c, d) {
                    return a.call(b, c, d);
                };

              case 3:
                return function(c, d, e) {
                    return a.call(b, c, d, e);
                };
            }
            return function() {
                return a.apply(b, arguments);
            };
        };
    }, {
        3: 3
    } ],
    26: [ function(a, b, c) {
        "use strict";
        var d = a(7), e = a(110);
        b.exports = function(a) {
            if ("string" !== a && "number" !== a && "default" !== a) throw TypeError("Incorrect hint");
            return e(d(this), "number" != a);
        };
    }, {
        110: 110,
        7: 7
    } ],
    27: [ function(a, b, c) {
        b.exports = function(a) {
            if (void 0 == a) throw TypeError("Can't call method on  " + a);
            return a;
        };
    }, {} ],
    28: [ function(a, b, c) {
        b.exports = !a(34)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, {
        34: 34
    } ],
    29: [ function(a, b, c) {
        var d = a(49), e = a(38).document, f = d(e) && d(e.createElement);
        b.exports = function(a) {
            return f ? e.createElement(a) : {};
        };
    }, {
        38: 38,
        49: 49
    } ],
    30: [ function(a, b, c) {
        b.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, {} ],
    31: [ function(a, b, c) {
        var d = a(76), e = a(73), f = a(77);
        b.exports = function(a) {
            var b = d(a), c = e.f;
            if (c) for (var g, h = c(a), i = f.f, j = 0; h.length > j; ) i.call(a, g = h[j++]) && b.push(g);
            return b;
        };
    }, {
        73: 73,
        76: 76,
        77: 77
    } ],
    32: [ function(a, b, c) {
        var d = a(38), e = a(23), f = a(40), g = a(87), h = a(25), i = function(a, b, c) {
            var j, k, l, m, n = a & i.F, o = a & i.G, p = a & i.S, q = a & i.P, r = a & i.B, s = o ? d : p ? d[b] || (d[b] = {}) : (d[b] || {}).prototype, t = o ? e : e[b] || (e[b] = {}), u = t.prototype || (t.prototype = {});
            o && (c = b);
            for (j in c) k = !n && s && void 0 !== s[j], l = (k ? s : c)[j], m = r && k ? h(l, d) : q && "function" == typeof l ? h(Function.call, l) : l, 
            s && g(s, j, l, a & i.U), t[j] != l && f(t, j, m), q && u[j] != l && (u[j] = l);
        };
        d.core = e, i.F = 1, i.G = 2, i.S = 4, i.P = 8, i.B = 16, i.W = 32, i.U = 64, i.R = 128, 
        b.exports = i;
    }, {
        23: 23,
        25: 25,
        38: 38,
        40: 40,
        87: 87
    } ],
    33: [ function(a, b, c) {
        var d = a(117)("match");
        b.exports = function(a) {
            var b = /./;
            try {
                "/./"[a](b);
            } catch (c) {
                try {
                    return b[d] = !1, !"/./"[a](b);
                } catch (a) {}
            }
            return !0;
        };
    }, {
        117: 117
    } ],
    34: [ function(a, b, c) {
        b.exports = function(a) {
            try {
                return !!a();
            } catch (a) {
                return !0;
            }
        };
    }, {} ],
    35: [ function(a, b, c) {
        "use strict";
        var d = a(40), e = a(87), f = a(34), g = a(27), h = a(117);
        b.exports = function(a, b, c) {
            var i = h(a), j = c(g, i, ""[a]), k = j[0], l = j[1];
            f(function() {
                var b = {};
                return b[i] = function() {
                    return 7;
                }, 7 != ""[a](b);
            }) && (e(String.prototype, a, k), d(RegExp.prototype, i, 2 == b ? function(a, b) {
                return l.call(a, this, b);
            } : function(a) {
                return l.call(a, this);
            }));
        };
    }, {
        117: 117,
        27: 27,
        34: 34,
        40: 40,
        87: 87
    } ],
    36: [ function(a, b, c) {
        "use strict";
        var d = a(7);
        b.exports = function() {
            var a = d(this), b = "";
            return a.global && (b += "g"), a.ignoreCase && (b += "i"), a.multiline && (b += "m"), 
            a.unicode && (b += "u"), a.sticky && (b += "y"), b;
        };
    }, {
        7: 7
    } ],
    37: [ function(a, b, c) {
        var d = a(25), e = a(51), f = a(46), g = a(7), h = a(108), i = a(118), j = {}, k = {}, c = b.exports = function(a, b, c, l, m) {
            var n, o, p, q, r = m ? function() {
                return a;
            } : i(a), s = d(c, l, b ? 2 : 1), t = 0;
            if ("function" != typeof r) throw TypeError(a + " is not iterable!");
            if (f(r)) {
                for (n = h(a.length); n > t; t++) if ((q = b ? s(g(o = a[t])[0], o[1]) : s(a[t])) === j || q === k) return q;
            } else for (p = r.call(a); !(o = p.next()).done; ) if ((q = e(p, s, o.value, b)) === j || q === k) return q;
        };
        c.BREAK = j, c.RETURN = k;
    }, {
        108: 108,
        118: 118,
        25: 25,
        46: 46,
        51: 51,
        7: 7
    } ],
    38: [ function(a, b, c) {
        var d = b.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = d);
    }, {} ],
    39: [ function(a, b, c) {
        var d = {}.hasOwnProperty;
        b.exports = function(a, b) {
            return d.call(a, b);
        };
    }, {} ],
    40: [ function(a, b, c) {
        var d = a(67), e = a(85);
        b.exports = a(28) ? function(a, b, c) {
            return d.f(a, b, e(1, c));
        } : function(a, b, c) {
            return a[b] = c, a;
        };
    }, {
        28: 28,
        67: 67,
        85: 85
    } ],
    41: [ function(a, b, c) {
        b.exports = a(38).document && document.documentElement;
    }, {
        38: 38
    } ],
    42: [ function(a, b, c) {
        b.exports = !a(28) && !a(34)(function() {
            return 7 != Object.defineProperty(a(29)("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    }, {
        28: 28,
        29: 29,
        34: 34
    } ],
    43: [ function(a, b, c) {
        var d = a(49), e = a(90).set;
        b.exports = function(a, b, c) {
            var f, g = b.constructor;
            return g !== c && "function" == typeof g && (f = g.prototype) !== c.prototype && d(f) && e && e(a, f), 
            a;
        };
    }, {
        49: 49,
        90: 90
    } ],
    44: [ function(a, b, c) {
        b.exports = function(a, b, c) {
            var d = void 0 === c;
            switch (b.length) {
              case 0:
                return d ? a() : a.call(c);

              case 1:
                return d ? a(b[0]) : a.call(c, b[0]);

              case 2:
                return d ? a(b[0], b[1]) : a.call(c, b[0], b[1]);

              case 3:
                return d ? a(b[0], b[1], b[2]) : a.call(c, b[0], b[1], b[2]);

              case 4:
                return d ? a(b[0], b[1], b[2], b[3]) : a.call(c, b[0], b[1], b[2], b[3]);
            }
            return a.apply(c, b);
        };
    }, {} ],
    45: [ function(a, b, c) {
        var d = a(18);
        b.exports = Object("z").propertyIsEnumerable(0) ? Object : function(a) {
            return "String" == d(a) ? a.split("") : Object(a);
        };
    }, {
        18: 18
    } ],
    46: [ function(a, b, c) {
        var d = a(56), e = a(117)("iterator"), f = Array.prototype;
        b.exports = function(a) {
            return void 0 !== a && (d.Array === a || f[e] === a);
        };
    }, {
        117: 117,
        56: 56
    } ],
    47: [ function(a, b, c) {
        var d = a(18);
        b.exports = Array.isArray || function(a) {
            return "Array" == d(a);
        };
    }, {
        18: 18
    } ],
    48: [ function(a, b, c) {
        var d = a(49), e = Math.floor;
        b.exports = function(a) {
            return !d(a) && isFinite(a) && e(a) === a;
        };
    }, {
        49: 49
    } ],
    49: [ function(a, b, c) {
        b.exports = function(a) {
            return "object" == typeof a ? null !== a : "function" == typeof a;
        };
    }, {} ],
    50: [ function(a, b, c) {
        var d = a(49), e = a(18), f = a(117)("match");
        b.exports = function(a) {
            var b;
            return d(a) && (void 0 !== (b = a[f]) ? !!b : "RegExp" == e(a));
        };
    }, {
        117: 117,
        18: 18,
        49: 49
    } ],
    51: [ function(a, b, c) {
        var d = a(7);
        b.exports = function(a, b, c, e) {
            try {
                return e ? b(d(c)[0], c[1]) : b(c);
            } catch (b) {
                var f = a.return;
                throw void 0 !== f && d(f.call(a)), b;
            }
        };
    }, {
        7: 7
    } ],
    52: [ function(a, b, c) {
        "use strict";
        var d = a(66), e = a(85), f = a(92), g = {};
        a(40)(g, a(117)("iterator"), function() {
            return this;
        }), b.exports = function(a, b, c) {
            a.prototype = d(g, {
                next: e(1, c)
            }), f(a, b + " Iterator");
        };
    }, {
        117: 117,
        40: 40,
        66: 66,
        85: 85,
        92: 92
    } ],
    53: [ function(a, b, c) {
        "use strict";
        var d = a(58), e = a(32), f = a(87), g = a(40), h = a(39), i = a(56), j = a(52), k = a(92), l = a(74), m = a(117)("iterator"), n = !([].keys && "next" in [].keys()), o = function() {
            return this;
        };
        b.exports = function(a, b, c, p, q, r, s) {
            j(c, b, p);
            var t, u, v, w = function(a) {
                if (!n && a in A) return A[a];
                switch (a) {
                  case "keys":
                  case "values":
                    return function() {
                        return new c(this, a);
                    };
                }
                return function() {
                    return new c(this, a);
                };
            }, x = b + " Iterator", y = "values" == q, z = !1, A = a.prototype, B = A[m] || A["@@iterator"] || q && A[q], C = B || w(q), D = q ? y ? w("entries") : C : void 0, E = "Array" == b ? A.entries || B : B;
            if (E && (v = l(E.call(new a()))) !== Object.prototype && (k(v, x, !0), d || h(v, m) || g(v, m, o)), 
            y && B && "values" !== B.name && (z = !0, C = function() {
                return B.call(this);
            }), d && !s || !n && !z && A[m] || g(A, m, C), i[b] = C, i[x] = o, q) if (t = {
                values: y ? C : w("values"),
                keys: r ? C : w("keys"),
                entries: D
            }, s) for (u in t) u in A || f(A, u, t[u]); else e(e.P + e.F * (n || z), b, t);
            return t;
        };
    }, {
        117: 117,
        32: 32,
        39: 39,
        40: 40,
        52: 52,
        56: 56,
        58: 58,
        74: 74,
        87: 87,
        92: 92
    } ],
    54: [ function(a, b, c) {
        var d = a(117)("iterator"), e = !1;
        try {
            var f = [ 7 ][d]();
            f.return = function() {
                e = !0;
            }, Array.from(f, function() {
                throw 2;
            });
        } catch (a) {}
        b.exports = function(a, b) {
            if (!b && !e) return !1;
            var c = !1;
            try {
                var f = [ 7 ], g = f[d]();
                g.next = function() {
                    return {
                        done: c = !0
                    };
                }, f[d] = function() {
                    return g;
                }, a(f);
            } catch (a) {}
            return c;
        };
    }, {
        117: 117
    } ],
    55: [ function(a, b, c) {
        b.exports = function(a, b) {
            return {
                value: b,
                done: !!a
            };
        };
    }, {} ],
    56: [ function(a, b, c) {
        b.exports = {};
    }, {} ],
    57: [ function(a, b, c) {
        var d = a(76), e = a(107);
        b.exports = function(a, b) {
            for (var c, f = e(a), g = d(f), h = g.length, i = 0; h > i; ) if (f[c = g[i++]] === b) return c;
        };
    }, {
        107: 107,
        76: 76
    } ],
    58: [ function(a, b, c) {
        b.exports = !1;
    }, {} ],
    59: [ function(a, b, c) {
        var d = Math.expm1;
        b.exports = !d || d(10) > 22025.465794806718 || d(10) < 22025.465794806718 || -2e-17 != d(-2e-17) ? function(a) {
            return 0 == (a = +a) ? a : a > -1e-6 && a < 1e-6 ? a + a * a / 2 : Math.exp(a) - 1;
        } : d;
    }, {} ],
    60: [ function(a, b, c) {
        b.exports = Math.log1p || function(a) {
            return (a = +a) > -1e-8 && a < 1e-8 ? a - a * a / 2 : Math.log(1 + a);
        };
    }, {} ],
    61: [ function(a, b, c) {
        b.exports = Math.sign || function(a) {
            return 0 == (a = +a) || a != a ? a : a < 0 ? -1 : 1;
        };
    }, {} ],
    62: [ function(a, b, c) {
        var d = a(114)("meta"), e = a(49), f = a(39), g = a(67).f, h = 0, i = Object.isExtensible || function() {
            return !0;
        }, j = !a(34)(function() {
            return i(Object.preventExtensions({}));
        }), k = function(a) {
            g(a, d, {
                value: {
                    i: "O" + ++h,
                    w: {}
                }
            });
        }, l = function(a, b) {
            if (!e(a)) return "symbol" == typeof a ? a : ("string" == typeof a ? "S" : "P") + a;
            if (!f(a, d)) {
                if (!i(a)) return "F";
                if (!b) return "E";
                k(a);
            }
            return a[d].i;
        }, m = function(a, b) {
            if (!f(a, d)) {
                if (!i(a)) return !0;
                if (!b) return !1;
                k(a);
            }
            return a[d].w;
        }, n = function(a) {
            return j && o.NEED && i(a) && !f(a, d) && k(a), a;
        }, o = b.exports = {
            KEY: d,
            NEED: !1,
            fastKey: l,
            getWeak: m,
            onFreeze: n
        };
    }, {
        114: 114,
        34: 34,
        39: 39,
        49: 49,
        67: 67
    } ],
    63: [ function(a, b, c) {
        var d = a(149), e = a(32), f = a(94)("metadata"), g = f.store || (f.store = new (a(255))()), h = function(a, b, c) {
            var e = g.get(a);
            if (!e) {
                if (!c) return;
                g.set(a, e = new d());
            }
            var f = e.get(b);
            if (!f) {
                if (!c) return;
                e.set(b, f = new d());
            }
            return f;
        }, i = function(a, b, c) {
            var d = h(b, c, !1);
            return void 0 !== d && d.has(a);
        }, j = function(a, b, c) {
            var d = h(b, c, !1);
            return void 0 === d ? void 0 : d.get(a);
        }, k = function(a, b, c, d) {
            h(c, d, !0).set(a, b);
        }, l = function(a, b) {
            var c = h(a, b, !1), d = [];
            return c && c.forEach(function(a, b) {
                d.push(b);
            }), d;
        }, m = function(a) {
            return void 0 === a || "symbol" == typeof a ? a : String(a);
        }, n = function(a) {
            e(e.S, "Reflect", a);
        };
        b.exports = {
            store: g,
            map: h,
            has: i,
            get: j,
            set: k,
            keys: l,
            key: m,
            exp: n
        };
    }, {
        149: 149,
        255: 255,
        32: 32,
        94: 94
    } ],
    64: [ function(a, b, c) {
        var d = a(38), e = a(104).set, f = d.MutationObserver || d.WebKitMutationObserver, g = d.process, h = d.Promise, i = "process" == a(18)(g);
        b.exports = function() {
            var a, b, c, j = function() {
                var d, e;
                for (i && (d = g.domain) && d.exit(); a; ) {
                    e = a.fn, a = a.next;
                    try {
                        e();
                    } catch (d) {
                        throw a ? c() : b = void 0, d;
                    }
                }
                b = void 0, d && d.enter();
            };
            if (i) c = function() {
                g.nextTick(j);
            }; else if (f) {
                var k = !0, l = document.createTextNode("");
                new f(j).observe(l, {
                    characterData: !0
                }), c = function() {
                    l.data = k = !k;
                };
            } else if (h && h.resolve) {
                var m = h.resolve();
                c = function() {
                    m.then(j);
                };
            } else c = function() {
                e.call(d, j);
            };
            return function(d) {
                var e = {
                    fn: d,
                    next: void 0
                };
                b && (b.next = e), a || (a = e, c()), b = e;
            };
        };
    }, {
        104: 104,
        18: 18,
        38: 38
    } ],
    65: [ function(a, b, c) {
        "use strict";
        var d = a(76), e = a(73), f = a(77), g = a(109), h = a(45), i = Object.assign;
        b.exports = !i || a(34)(function() {
            var a = {}, b = {}, c = Symbol(), d = "abcdefghijklmnopqrst";
            return a[c] = 7, d.split("").forEach(function(a) {
                b[a] = a;
            }), 7 != i({}, a)[c] || Object.keys(i({}, b)).join("") != d;
        }) ? function(a, b) {
            for (var c = g(a), i = arguments.length, j = 1, k = e.f, l = f.f; i > j; ) for (var m, n = h(arguments[j++]), o = k ? d(n).concat(k(n)) : d(n), p = o.length, q = 0; p > q; ) l.call(n, m = o[q++]) && (c[m] = n[m]);
            return c;
        } : i;
    }, {
        109: 109,
        34: 34,
        45: 45,
        73: 73,
        76: 76,
        77: 77
    } ],
    66: [ function(a, b, c) {
        var d = a(7), e = a(68), f = a(30), g = a(93)("IE_PROTO"), h = function() {}, i = function() {
            var b, c = a(29)("iframe"), d = f.length;
            for (c.style.display = "none", a(41).appendChild(c), c.src = "javascript:", b = c.contentWindow.document, 
            b.open(), b.write("<script>document.F=Object</script>"), b.close(), i = b.F; d--; ) delete i.prototype[f[d]];
            return i();
        };
        b.exports = Object.create || function(a, b) {
            var c;
            return null !== a ? (h.prototype = d(a), c = new h(), h.prototype = null, c[g] = a) : c = i(), 
            void 0 === b ? c : e(c, b);
        };
    }, {
        29: 29,
        30: 30,
        41: 41,
        68: 68,
        7: 7,
        93: 93
    } ],
    67: [ function(a, b, c) {
        var d = a(7), e = a(42), f = a(110), g = Object.defineProperty;
        c.f = a(28) ? Object.defineProperty : function(a, b, c) {
            if (d(a), b = f(b, !0), d(c), e) try {
                return g(a, b, c);
            } catch (a) {}
            if ("get" in c || "set" in c) throw TypeError("Accessors not supported!");
            return "value" in c && (a[b] = c.value), a;
        };
    }, {
        110: 110,
        28: 28,
        42: 42,
        7: 7
    } ],
    68: [ function(a, b, c) {
        var d = a(67), e = a(7), f = a(76);
        b.exports = a(28) ? Object.defineProperties : function(a, b) {
            e(a);
            for (var c, g = f(b), h = g.length, i = 0; h > i; ) d.f(a, c = g[i++], b[c]);
            return a;
        };
    }, {
        28: 28,
        67: 67,
        7: 7,
        76: 76
    } ],
    69: [ function(a, b, c) {
        b.exports = a(58) || !a(34)(function() {
            var b = Math.random();
            __defineSetter__.call(null, b, function() {}), delete a(38)[b];
        });
    }, {
        34: 34,
        38: 38,
        58: 58
    } ],
    70: [ function(a, b, c) {
        var d = a(77), e = a(85), f = a(107), g = a(110), h = a(39), i = a(42), j = Object.getOwnPropertyDescriptor;
        c.f = a(28) ? j : function(a, b) {
            if (a = f(a), b = g(b, !0), i) try {
                return j(a, b);
            } catch (a) {}
            if (h(a, b)) return e(!d.f.call(a, b), a[b]);
        };
    }, {
        107: 107,
        110: 110,
        28: 28,
        39: 39,
        42: 42,
        77: 77,
        85: 85
    } ],
    71: [ function(a, b, c) {
        var d = a(107), e = a(72).f, f = {}.toString, g = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], h = function(a) {
            try {
                return e(a);
            } catch (a) {
                return g.slice();
            }
        };
        b.exports.f = function(a) {
            return g && "[object Window]" == f.call(a) ? h(a) : e(d(a));
        };
    }, {
        107: 107,
        72: 72
    } ],
    72: [ function(a, b, c) {
        var d = a(75), e = a(30).concat("length", "prototype");
        c.f = Object.getOwnPropertyNames || function(a) {
            return d(a, e);
        };
    }, {
        30: 30,
        75: 75
    } ],
    73: [ function(a, b, c) {
        c.f = Object.getOwnPropertySymbols;
    }, {} ],
    74: [ function(a, b, c) {
        var d = a(39), e = a(109), f = a(93)("IE_PROTO"), g = Object.prototype;
        b.exports = Object.getPrototypeOf || function(a) {
            return a = e(a), d(a, f) ? a[f] : "function" == typeof a.constructor && a instanceof a.constructor ? a.constructor.prototype : a instanceof Object ? g : null;
        };
    }, {
        109: 109,
        39: 39,
        93: 93
    } ],
    75: [ function(a, b, c) {
        var d = a(39), e = a(107), f = a(11)(!1), g = a(93)("IE_PROTO");
        b.exports = function(a, b) {
            var c, h = e(a), i = 0, j = [];
            for (c in h) c != g && d(h, c) && j.push(c);
            for (;b.length > i; ) d(h, c = b[i++]) && (~f(j, c) || j.push(c));
            return j;
        };
    }, {
        107: 107,
        11: 11,
        39: 39,
        93: 93
    } ],
    76: [ function(a, b, c) {
        var d = a(75), e = a(30);
        b.exports = Object.keys || function(a) {
            return d(a, e);
        };
    }, {
        30: 30,
        75: 75
    } ],
    77: [ function(a, b, c) {
        c.f = {}.propertyIsEnumerable;
    }, {} ],
    78: [ function(a, b, c) {
        var d = a(32), e = a(23), f = a(34);
        b.exports = function(a, b) {
            var c = (e.Object || {})[a] || Object[a], g = {};
            g[a] = b(c), d(d.S + d.F * f(function() {
                c(1);
            }), "Object", g);
        };
    }, {
        23: 23,
        32: 32,
        34: 34
    } ],
    79: [ function(a, b, c) {
        var d = a(76), e = a(107), f = a(77).f;
        b.exports = function(a) {
            return function(b) {
                for (var c, g = e(b), h = d(g), i = h.length, j = 0, k = []; i > j; ) f.call(g, c = h[j++]) && k.push(a ? [ c, g[c] ] : g[c]);
                return k;
            };
        };
    }, {
        107: 107,
        76: 76,
        77: 77
    } ],
    80: [ function(a, b, c) {
        var d = a(72), e = a(73), f = a(7), g = a(38).Reflect;
        b.exports = g && g.ownKeys || function(a) {
            var b = d.f(f(a)), c = e.f;
            return c ? b.concat(c(a)) : b;
        };
    }, {
        38: 38,
        7: 7,
        72: 72,
        73: 73
    } ],
    81: [ function(a, b, c) {
        var d = a(38).parseFloat, e = a(102).trim;
        b.exports = 1 / d(a(103) + "-0") != -1 / 0 ? function(a) {
            var b = e(String(a), 3), c = d(b);
            return 0 === c && "-" == b.charAt(0) ? -0 : c;
        } : d;
    }, {
        102: 102,
        103: 103,
        38: 38
    } ],
    82: [ function(a, b, c) {
        var d = a(38).parseInt, e = a(102).trim, f = a(103), g = /^[\-+]?0[xX]/;
        b.exports = 8 !== d(f + "08") || 22 !== d(f + "0x16") ? function(a, b) {
            var c = e(String(a), 3);
            return d(c, b >>> 0 || (g.test(c) ? 16 : 10));
        } : d;
    }, {
        102: 102,
        103: 103,
        38: 38
    } ],
    83: [ function(a, b, c) {
        "use strict";
        var d = a(84), e = a(44), f = a(3);
        b.exports = function() {
            for (var a = f(this), b = arguments.length, c = Array(b), g = 0, h = d._, i = !1; b > g; ) (c[g] = arguments[g++]) === h && (i = !0);
            return function() {
                var d, f = this, g = arguments.length, j = 0, k = 0;
                if (!i && !g) return e(a, c, f);
                if (d = c.slice(), i) for (;b > j; j++) d[j] === h && (d[j] = arguments[k++]);
                for (;g > k; ) d.push(arguments[k++]);
                return e(a, d, f);
            };
        };
    }, {
        3: 3,
        44: 44,
        84: 84
    } ],
    84: [ function(a, b, c) {
        b.exports = a(38);
    }, {
        38: 38
    } ],
    85: [ function(a, b, c) {
        b.exports = function(a, b) {
            return {
                enumerable: !(1 & a),
                configurable: !(2 & a),
                writable: !(4 & a),
                value: b
            };
        };
    }, {} ],
    86: [ function(a, b, c) {
        var d = a(87);
        b.exports = function(a, b, c) {
            for (var e in b) d(a, e, b[e], c);
            return a;
        };
    }, {
        87: 87
    } ],
    87: [ function(a, b, c) {
        var d = a(38), e = a(40), f = a(39), g = a(114)("src"), h = Function.toString, i = ("" + h).split("toString");
        a(23).inspectSource = function(a) {
            return h.call(a);
        }, (b.exports = function(a, b, c, h) {
            var j = "function" == typeof c;
            j && (f(c, "name") || e(c, "name", b)), a[b] !== c && (j && (f(c, g) || e(c, g, a[b] ? "" + a[b] : i.join(String(b)))), 
            a === d ? a[b] = c : h ? a[b] ? a[b] = c : e(a, b, c) : (delete a[b], e(a, b, c)));
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[g] || h.call(this);
        });
    }, {
        114: 114,
        23: 23,
        38: 38,
        39: 39,
        40: 40
    } ],
    88: [ function(a, b, c) {
        b.exports = function(a, b) {
            var c = b === Object(b) ? function(a) {
                return b[a];
            } : b;
            return function(b) {
                return String(b).replace(a, c);
            };
        };
    }, {} ],
    89: [ function(a, b, c) {
        b.exports = Object.is || function(a, b) {
            return a === b ? 0 !== a || 1 / a == 1 / b : a != a && b != b;
        };
    }, {} ],
    90: [ function(a, b, c) {
        var d = a(49), e = a(7), f = function(a, b) {
            if (e(a), !d(b) && null !== b) throw TypeError(b + ": can't set as prototype!");
        };
        b.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(b, c, d) {
                try {
                    d = a(25)(Function.call, a(70).f(Object.prototype, "__proto__").set, 2), d(b, []), 
                    c = !(b instanceof Array);
                } catch (a) {
                    c = !0;
                }
                return function(a, b) {
                    return f(a, b), c ? a.__proto__ = b : d(a, b), a;
                };
            }({}, !1) : void 0),
            check: f
        };
    }, {
        25: 25,
        49: 49,
        7: 7,
        70: 70
    } ],
    91: [ function(a, b, c) {
        "use strict";
        var d = a(38), e = a(67), f = a(28), g = a(117)("species");
        b.exports = function(a) {
            var b = d[a];
            f && b && !b[g] && e.f(b, g, {
                configurable: !0,
                get: function() {
                    return this;
                }
            });
        };
    }, {
        117: 117,
        28: 28,
        38: 38,
        67: 67
    } ],
    92: [ function(a, b, c) {
        var d = a(67).f, e = a(39), f = a(117)("toStringTag");
        b.exports = function(a, b, c) {
            a && !e(a = c ? a : a.prototype, f) && d(a, f, {
                configurable: !0,
                value: b
            });
        };
    }, {
        117: 117,
        39: 39,
        67: 67
    } ],
    93: [ function(a, b, c) {
        var d = a(94)("keys"), e = a(114);
        b.exports = function(a) {
            return d[a] || (d[a] = e(a));
        };
    }, {
        114: 114,
        94: 94
    } ],
    94: [ function(a, b, c) {
        var d = a(38), e = d["__core-js_shared__"] || (d["__core-js_shared__"] = {});
        b.exports = function(a) {
            return e[a] || (e[a] = {});
        };
    }, {
        38: 38
    } ],
    95: [ function(a, b, c) {
        var d = a(7), e = a(3), f = a(117)("species");
        b.exports = function(a, b) {
            var c, g = d(a).constructor;
            return void 0 === g || void 0 == (c = d(g)[f]) ? b : e(c);
        };
    }, {
        117: 117,
        3: 3,
        7: 7
    } ],
    96: [ function(a, b, c) {
        var d = a(34);
        b.exports = function(a, b) {
            return !!a && d(function() {
                b ? a.call(null, function() {}, 1) : a.call(null);
            });
        };
    }, {
        34: 34
    } ],
    97: [ function(a, b, c) {
        var d = a(106), e = a(27);
        b.exports = function(a) {
            return function(b, c) {
                var f, g, h = String(e(b)), i = d(c), j = h.length;
                return i < 0 || i >= j ? a ? "" : void 0 : (f = h.charCodeAt(i), f < 55296 || f > 56319 || i + 1 === j || (g = h.charCodeAt(i + 1)) < 56320 || g > 57343 ? a ? h.charAt(i) : f : a ? h.slice(i, i + 2) : g - 56320 + (f - 55296 << 10) + 65536);
            };
        };
    }, {
        106: 106,
        27: 27
    } ],
    98: [ function(a, b, c) {
        var d = a(50), e = a(27);
        b.exports = function(a, b, c) {
            if (d(b)) throw TypeError("String#" + c + " doesn't accept regex!");
            return String(e(a));
        };
    }, {
        27: 27,
        50: 50
    } ],
    99: [ function(a, b, c) {
        var d = a(32), e = a(34), f = a(27), g = /"/g, h = function(a, b, c, d) {
            var e = String(f(a)), h = "<" + b;
            return "" !== c && (h += " " + c + '="' + String(d).replace(g, "&quot;") + '"'), 
            h + ">" + e + "</" + b + ">";
        };
        b.exports = function(a, b) {
            var c = {};
            c[a] = b(h), d(d.P + d.F * e(function() {
                var b = ""[a]('"');
                return b !== b.toLowerCase() || b.split('"').length > 3;
            }), "String", c);
        };
    }, {
        27: 27,
        32: 32,
        34: 34
    } ],
    100: [ function(a, b, c) {
        var d = a(108), e = a(101), f = a(27);
        b.exports = function(a, b, c, g) {
            var h = String(f(a)), i = h.length, j = void 0 === c ? " " : String(c), k = d(b);
            if (k <= i || "" == j) return h;
            var l = k - i, m = e.call(j, Math.ceil(l / j.length));
            return m.length > l && (m = m.slice(0, l)), g ? m + h : h + m;
        };
    }, {
        101: 101,
        108: 108,
        27: 27
    } ],
    101: [ function(a, b, c) {
        "use strict";
        var d = a(106), e = a(27);
        b.exports = function(a) {
            var b = String(e(this)), c = "", f = d(a);
            if (f < 0 || f == 1 / 0) throw RangeError("Count can't be negative");
            for (;f > 0; (f >>>= 1) && (b += b)) 1 & f && (c += b);
            return c;
        };
    }, {
        106: 106,
        27: 27
    } ],
    102: [ function(a, b, c) {
        var d = a(32), e = a(27), f = a(34), g = a(103), h = "[" + g + "]", i = "​", j = RegExp("^" + h + h + "*"), k = RegExp(h + h + "*$"), l = function(a, b, c) {
            var e = {}, h = f(function() {
                return !!g[a]() || i[a]() != i;
            }), j = e[a] = h ? b(m) : g[a];
            c && (e[c] = j), d(d.P + d.F * h, "String", e);
        }, m = l.trim = function(a, b) {
            return a = String(e(a)), 1 & b && (a = a.replace(j, "")), 2 & b && (a = a.replace(k, "")), 
            a;
        };
        b.exports = l;
    }, {
        103: 103,
        27: 27,
        32: 32,
        34: 34
    } ],
    103: [ function(a, b, c) {
        b.exports = "	\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff";
    }, {} ],
    104: [ function(a, b, c) {
        var d, e, f, g = a(25), h = a(44), i = a(41), j = a(29), k = a(38), l = k.process, m = k.setImmediate, n = k.clearImmediate, o = k.MessageChannel, p = 0, q = {}, r = function() {
            var a = +this;
            if (q.hasOwnProperty(a)) {
                var b = q[a];
                delete q[a], b();
            }
        }, s = function(a) {
            r.call(a.data);
        };
        m && n || (m = function(a) {
            for (var b = [], c = 1; arguments.length > c; ) b.push(arguments[c++]);
            return q[++p] = function() {
                h("function" == typeof a ? a : Function(a), b);
            }, d(p), p;
        }, n = function(a) {
            delete q[a];
        }, "process" == a(18)(l) ? d = function(a) {
            l.nextTick(g(r, a, 1));
        } : o ? (e = new o(), f = e.port2, e.port1.onmessage = s, d = g(f.postMessage, f, 1)) : k.addEventListener && "function" == typeof postMessage && !k.importScripts ? (d = function(a) {
            k.postMessage(a + "", "*");
        }, k.addEventListener("message", s, !1)) : d = "onreadystatechange" in j("script") ? function(a) {
            i.appendChild(j("script")).onreadystatechange = function() {
                i.removeChild(this), r.call(a);
            };
        } : function(a) {
            setTimeout(g(r, a, 1), 0);
        }), b.exports = {
            set: m,
            clear: n
        };
    }, {
        18: 18,
        25: 25,
        29: 29,
        38: 38,
        41: 41,
        44: 44
    } ],
    105: [ function(a, b, c) {
        var d = a(106), e = Math.max, f = Math.min;
        b.exports = function(a, b) {
            return a = d(a), a < 0 ? e(a + b, 0) : f(a, b);
        };
    }, {
        106: 106
    } ],
    106: [ function(a, b, c) {
        var d = Math.ceil, e = Math.floor;
        b.exports = function(a) {
            return isNaN(a = +a) ? 0 : (a > 0 ? e : d)(a);
        };
    }, {} ],
    107: [ function(a, b, c) {
        var d = a(45), e = a(27);
        b.exports = function(a) {
            return d(e(a));
        };
    }, {
        27: 27,
        45: 45
    } ],
    108: [ function(a, b, c) {
        var d = a(106), e = Math.min;
        b.exports = function(a) {
            return a > 0 ? e(d(a), 9007199254740991) : 0;
        };
    }, {
        106: 106
    } ],
    109: [ function(a, b, c) {
        var d = a(27);
        b.exports = function(a) {
            return Object(d(a));
        };
    }, {
        27: 27
    } ],
    110: [ function(a, b, c) {
        var d = a(49);
        b.exports = function(a, b) {
            if (!d(a)) return a;
            var c, e;
            if (b && "function" == typeof (c = a.toString) && !d(e = c.call(a))) return e;
            if ("function" == typeof (c = a.valueOf) && !d(e = c.call(a))) return e;
            if (!b && "function" == typeof (c = a.toString) && !d(e = c.call(a))) return e;
            throw TypeError("Can't convert object to primitive value");
        };
    }, {
        49: 49
    } ],
    111: [ function(a, b, c) {
        "use strict";
        if (a(28)) {
            var d = a(58), e = a(38), f = a(34), g = a(32), h = a(113), i = a(112), j = a(25), k = a(6), l = a(85), m = a(40), n = a(86), o = a(106), p = a(108), q = a(105), r = a(110), s = a(39), t = a(89), u = a(17), v = a(49), w = a(109), x = a(46), y = a(66), z = a(74), A = a(72).f, B = a(118), C = a(114), D = a(117), E = a(12), F = a(11), G = a(95), H = a(130), I = a(56), J = a(54), K = a(91), L = a(9), M = a(8), N = a(67), O = a(70), P = N.f, Q = O.f, R = e.RangeError, S = e.TypeError, T = e.Uint8Array, U = Array.prototype, V = i.ArrayBuffer, W = i.DataView, X = E(0), Y = E(2), Z = E(3), $ = E(4), _ = E(5), aa = E(6), ba = F(!0), ca = F(!1), da = H.values, ea = H.keys, fa = H.entries, ga = U.lastIndexOf, ha = U.reduce, ia = U.reduceRight, ja = U.join, ka = U.sort, la = U.slice, ma = U.toString, na = U.toLocaleString, oa = D("iterator"), pa = D("toStringTag"), qa = C("typed_constructor"), ra = C("def_constructor"), sa = h.CONSTR, ta = h.TYPED, ua = h.VIEW, va = E(1, function(a, b) {
                return Ba(G(a, a[ra]), b);
            }), wa = f(function() {
                return 1 === new T(new Uint16Array([ 1 ]).buffer)[0];
            }), xa = !!T && !!T.prototype.set && f(function() {
                new T(1).set({});
            }), ya = function(a, b) {
                if (void 0 === a) throw S("Wrong length!");
                var c = +a, d = p(a);
                if (b && !t(c, d)) throw R("Wrong length!");
                return d;
            }, za = function(a, b) {
                var c = o(a);
                if (c < 0 || c % b) throw R("Wrong offset!");
                return c;
            }, Aa = function(a) {
                if (v(a) && ta in a) return a;
                throw S(a + " is not a typed array!");
            }, Ba = function(a, b) {
                if (!(v(a) && qa in a)) throw S("It is not a typed array constructor!");
                return new a(b);
            }, Ca = function(a, b) {
                return Da(G(a, a[ra]), b);
            }, Da = function(a, b) {
                for (var c = 0, d = b.length, e = Ba(a, d); d > c; ) e[c] = b[c++];
                return e;
            }, Ea = function(a, b, c) {
                P(a, b, {
                    get: function() {
                        return this._d[c];
                    }
                });
            }, Fa = function(a) {
                var b, c, d, e, f, g, h = w(a), i = arguments.length, k = i > 1 ? arguments[1] : void 0, l = void 0 !== k, m = B(h);
                if (void 0 != m && !x(m)) {
                    for (g = m.call(h), d = [], b = 0; !(f = g.next()).done; b++) d.push(f.value);
                    h = d;
                }
                for (l && i > 2 && (k = j(k, arguments[2], 2)), b = 0, c = p(h.length), e = Ba(this, c); c > b; b++) e[b] = l ? k(h[b], b) : h[b];
                return e;
            }, Ga = function() {
                for (var a = 0, b = arguments.length, c = Ba(this, b); b > a; ) c[a] = arguments[a++];
                return c;
            }, Ha = !!T && f(function() {
                na.call(new T(1));
            }), Ia = function() {
                return na.apply(Ha ? la.call(Aa(this)) : Aa(this), arguments);
            }, Ja = {
                copyWithin: function(a, b) {
                    return M.call(Aa(this), a, b, arguments.length > 2 ? arguments[2] : void 0);
                },
                every: function(a) {
                    return $(Aa(this), a, arguments.length > 1 ? arguments[1] : void 0);
                },
                fill: function(a) {
                    return L.apply(Aa(this), arguments);
                },
                filter: function(a) {
                    return Ca(this, Y(Aa(this), a, arguments.length > 1 ? arguments[1] : void 0));
                },
                find: function(a) {
                    return _(Aa(this), a, arguments.length > 1 ? arguments[1] : void 0);
                },
                findIndex: function(a) {
                    return aa(Aa(this), a, arguments.length > 1 ? arguments[1] : void 0);
                },
                forEach: function(a) {
                    X(Aa(this), a, arguments.length > 1 ? arguments[1] : void 0);
                },
                indexOf: function(a) {
                    return ca(Aa(this), a, arguments.length > 1 ? arguments[1] : void 0);
                },
                includes: function(a) {
                    return ba(Aa(this), a, arguments.length > 1 ? arguments[1] : void 0);
                },
                join: function(a) {
                    return ja.apply(Aa(this), arguments);
                },
                lastIndexOf: function(a) {
                    return ga.apply(Aa(this), arguments);
                },
                map: function(a) {
                    return va(Aa(this), a, arguments.length > 1 ? arguments[1] : void 0);
                },
                reduce: function(a) {
                    return ha.apply(Aa(this), arguments);
                },
                reduceRight: function(a) {
                    return ia.apply(Aa(this), arguments);
                },
                reverse: function() {
                    for (var a, b = this, c = Aa(b).length, d = Math.floor(c / 2), e = 0; e < d; ) a = b[e], 
                    b[e++] = b[--c], b[c] = a;
                    return b;
                },
                some: function(a) {
                    return Z(Aa(this), a, arguments.length > 1 ? arguments[1] : void 0);
                },
                sort: function(a) {
                    return ka.call(Aa(this), a);
                },
                subarray: function(a, b) {
                    var c = Aa(this), d = c.length, e = q(a, d);
                    return new (G(c, c[ra]))(c.buffer, c.byteOffset + e * c.BYTES_PER_ELEMENT, p((void 0 === b ? d : q(b, d)) - e));
                }
            }, Ka = function(a, b) {
                return Ca(this, la.call(Aa(this), a, b));
            }, La = function(a) {
                Aa(this);
                var b = za(arguments[1], 1), c = this.length, d = w(a), e = p(d.length), f = 0;
                if (e + b > c) throw R("Wrong length!");
                for (;f < e; ) this[b + f] = d[f++];
            }, Ma = {
                entries: function() {
                    return fa.call(Aa(this));
                },
                keys: function() {
                    return ea.call(Aa(this));
                },
                values: function() {
                    return da.call(Aa(this));
                }
            }, Na = function(a, b) {
                return v(a) && a[ta] && "symbol" != typeof b && b in a && String(+b) == String(b);
            }, Oa = function(a, b) {
                return Na(a, b = r(b, !0)) ? l(2, a[b]) : Q(a, b);
            }, Pa = function(a, b, c) {
                return !(Na(a, b = r(b, !0)) && v(c) && s(c, "value")) || s(c, "get") || s(c, "set") || c.configurable || s(c, "writable") && !c.writable || s(c, "enumerable") && !c.enumerable ? P(a, b, c) : (a[b] = c.value, 
                a);
            };
            sa || (O.f = Oa, N.f = Pa), g(g.S + g.F * !sa, "Object", {
                getOwnPropertyDescriptor: Oa,
                defineProperty: Pa
            }), f(function() {
                ma.call({});
            }) && (ma = na = function() {
                return ja.call(this);
            });
            var Qa = n({}, Ja);
            n(Qa, Ma), m(Qa, oa, Ma.values), n(Qa, {
                slice: Ka,
                set: La,
                constructor: function() {},
                toString: ma,
                toLocaleString: Ia
            }), Ea(Qa, "buffer", "b"), Ea(Qa, "byteOffset", "o"), Ea(Qa, "byteLength", "l"), 
            Ea(Qa, "length", "e"), P(Qa, pa, {
                get: function() {
                    return this[ta];
                }
            }), b.exports = function(a, b, c, i) {
                i = !!i;
                var j = a + (i ? "Clamped" : "") + "Array", l = "Uint8Array" != j, n = "get" + a, o = "set" + a, q = e[j], r = q || {}, s = q && z(q), t = !q || !h.ABV, w = {}, x = q && q.prototype, B = function(a, c) {
                    var d = a._d;
                    return d.v[n](c * b + d.o, wa);
                }, C = function(a, c, d) {
                    var e = a._d;
                    i && (d = (d = Math.round(d)) < 0 ? 0 : d > 255 ? 255 : 255 & d), e.v[o](c * b + e.o, d, wa);
                }, D = function(a, b) {
                    P(a, b, {
                        get: function() {
                            return B(this, b);
                        },
                        set: function(a) {
                            return C(this, b, a);
                        },
                        enumerable: !0
                    });
                };
                t ? (q = c(function(a, c, d, e) {
                    k(a, q, j, "_d");
                    var f, g, h, i, l = 0, n = 0;
                    if (v(c)) {
                        if (!(c instanceof V || "ArrayBuffer" == (i = u(c)) || "SharedArrayBuffer" == i)) return ta in c ? Da(q, c) : Fa.call(q, c);
                        f = c, n = za(d, b);
                        var o = c.byteLength;
                        if (void 0 === e) {
                            if (o % b) throw R("Wrong length!");
                            if ((g = o - n) < 0) throw R("Wrong length!");
                        } else if ((g = p(e) * b) + n > o) throw R("Wrong length!");
                        h = g / b;
                    } else h = ya(c, !0), g = h * b, f = new V(g);
                    for (m(a, "_d", {
                        b: f,
                        o: n,
                        l: g,
                        e: h,
                        v: new W(f)
                    }); l < h; ) D(a, l++);
                }), x = q.prototype = y(Qa), m(x, "constructor", q)) : J(function(a) {
                    new q(null), new q(a);
                }, !0) || (q = c(function(a, c, d, e) {
                    k(a, q, j);
                    var f;
                    return v(c) ? c instanceof V || "ArrayBuffer" == (f = u(c)) || "SharedArrayBuffer" == f ? void 0 !== e ? new r(c, za(d, b), e) : void 0 !== d ? new r(c, za(d, b)) : new r(c) : ta in c ? Da(q, c) : Fa.call(q, c) : new r(ya(c, l));
                }), X(s !== Function.prototype ? A(r).concat(A(s)) : A(r), function(a) {
                    a in q || m(q, a, r[a]);
                }), q.prototype = x, d || (x.constructor = q));
                var E = x[oa], F = !!E && ("values" == E.name || void 0 == E.name), G = Ma.values;
                m(q, qa, !0), m(x, ta, j), m(x, ua, !0), m(x, ra, q), (i ? new q(1)[pa] == j : pa in x) || P(x, pa, {
                    get: function() {
                        return j;
                    }
                }), w[j] = q, g(g.G + g.W + g.F * (q != r), w), g(g.S, j, {
                    BYTES_PER_ELEMENT: b,
                    from: Fa,
                    of: Ga
                }), "BYTES_PER_ELEMENT" in x || m(x, "BYTES_PER_ELEMENT", b), g(g.P, j, Ja), K(j), 
                g(g.P + g.F * xa, j, {
                    set: La
                }), g(g.P + g.F * !F, j, Ma), g(g.P + g.F * (x.toString != ma), j, {
                    toString: ma
                }), g(g.P + g.F * f(function() {
                    new q(1).slice();
                }), j, {
                    slice: Ka
                }), g(g.P + g.F * (f(function() {
                    return [ 1, 2 ].toLocaleString() != new q([ 1, 2 ]).toLocaleString();
                }) || !f(function() {
                    x.toLocaleString.call([ 1, 2 ]);
                })), j, {
                    toLocaleString: Ia
                }), I[j] = F ? E : G, d || F || m(x, oa, G);
            };
        } else b.exports = function() {};
    }, {
        105: 105,
        106: 106,
        108: 108,
        109: 109,
        11: 11,
        110: 110,
        112: 112,
        113: 113,
        114: 114,
        117: 117,
        118: 118,
        12: 12,
        130: 130,
        17: 17,
        25: 25,
        28: 28,
        32: 32,
        34: 34,
        38: 38,
        39: 39,
        40: 40,
        46: 46,
        49: 49,
        54: 54,
        56: 56,
        58: 58,
        6: 6,
        66: 66,
        67: 67,
        70: 70,
        72: 72,
        74: 74,
        8: 8,
        85: 85,
        86: 86,
        89: 89,
        9: 9,
        91: 91,
        95: 95
    } ],
    112: [ function(a, b, c) {
        "use strict";
        var d = a(38), e = a(28), f = a(58), g = a(113), h = a(40), i = a(86), j = a(34), k = a(6), l = a(106), m = a(108), n = a(72).f, o = a(67).f, p = a(9), q = a(92), r = d.ArrayBuffer, s = d.DataView, t = d.Math, u = d.RangeError, v = d.Infinity, w = r, x = t.abs, y = t.pow, z = t.floor, A = t.log, B = t.LN2, C = e ? "_b" : "buffer", D = e ? "_l" : "byteLength", E = e ? "_o" : "byteOffset", F = function(a, b, c) {
            var d, e, f, g = Array(c), h = 8 * c - b - 1, i = (1 << h) - 1, j = i >> 1, k = 23 === b ? y(2, -24) - y(2, -77) : 0, l = 0, m = a < 0 || 0 === a && 1 / a < 0 ? 1 : 0;
            for (a = x(a), a != a || a === v ? (e = a != a ? 1 : 0, d = i) : (d = z(A(a) / B), 
            a * (f = y(2, -d)) < 1 && (d--, f *= 2), a += d + j >= 1 ? k / f : k * y(2, 1 - j), 
            a * f >= 2 && (d++, f /= 2), d + j >= i ? (e = 0, d = i) : d + j >= 1 ? (e = (a * f - 1) * y(2, b), 
            d += j) : (e = a * y(2, j - 1) * y(2, b), d = 0)); b >= 8; g[l++] = 255 & e, e /= 256, 
            b -= 8) ;
            for (d = d << b | e, h += b; h > 0; g[l++] = 255 & d, d /= 256, h -= 8) ;
            return g[--l] |= 128 * m, g;
        }, G = function(a, b, c) {
            var d, e = 8 * c - b - 1, f = (1 << e) - 1, g = f >> 1, h = e - 7, i = c - 1, j = a[i--], k = 127 & j;
            for (j >>= 7; h > 0; k = 256 * k + a[i], i--, h -= 8) ;
            for (d = k & (1 << -h) - 1, k >>= -h, h += b; h > 0; d = 256 * d + a[i], i--, h -= 8) ;
            if (0 === k) k = 1 - g; else {
                if (k === f) return d ? NaN : j ? -v : v;
                d += y(2, b), k -= g;
            }
            return (j ? -1 : 1) * d * y(2, k - b);
        }, H = function(a) {
            return a[3] << 24 | a[2] << 16 | a[1] << 8 | a[0];
        }, I = function(a) {
            return [ 255 & a ];
        }, J = function(a) {
            return [ 255 & a, a >> 8 & 255 ];
        }, K = function(a) {
            return [ 255 & a, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255 ];
        }, L = function(a) {
            return F(a, 52, 8);
        }, M = function(a) {
            return F(a, 23, 4);
        }, N = function(a, b, c) {
            o(a.prototype, b, {
                get: function() {
                    return this[c];
                }
            });
        }, O = function(a, b, c, d) {
            var e = +c, f = l(e);
            if (e != f || f < 0 || f + b > a[D]) throw u("Wrong index!");
            var g = a[C]._b, h = f + a[E], i = g.slice(h, h + b);
            return d ? i : i.reverse();
        }, P = function(a, b, c, d, e, f) {
            var g = +c, h = l(g);
            if (g != h || h < 0 || h + b > a[D]) throw u("Wrong index!");
            for (var i = a[C]._b, j = h + a[E], k = d(+e), m = 0; m < b; m++) i[j + m] = k[f ? m : b - m - 1];
        }, Q = function(a, b) {
            k(a, r, "ArrayBuffer");
            var c = +b, d = m(c);
            if (c != d) throw u("Wrong length!");
            return d;
        };
        if (g.ABV) {
            if (!j(function() {
                new r();
            }) || !j(function() {
                new r(.5);
            })) {
                r = function(a) {
                    return new w(Q(this, a));
                };
                for (var R, S = r.prototype = w.prototype, T = n(w), U = 0; T.length > U; ) (R = T[U++]) in r || h(r, R, w[R]);
                f || (S.constructor = r);
            }
            var V = new s(new r(2)), W = s.prototype.setInt8;
            V.setInt8(0, 2147483648), V.setInt8(1, 2147483649), !V.getInt8(0) && V.getInt8(1) || i(s.prototype, {
                setInt8: function(a, b) {
                    W.call(this, a, b << 24 >> 24);
                },
                setUint8: function(a, b) {
                    W.call(this, a, b << 24 >> 24);
                }
            }, !0);
        } else r = function(a) {
            var b = Q(this, a);
            this._b = p.call(Array(b), 0), this[D] = b;
        }, s = function(a, b, c) {
            k(this, s, "DataView"), k(a, r, "DataView");
            var d = a[D], e = l(b);
            if (e < 0 || e > d) throw u("Wrong offset!");
            if (c = void 0 === c ? d - e : m(c), e + c > d) throw u("Wrong length!");
            this[C] = a, this[E] = e, this[D] = c;
        }, e && (N(r, "byteLength", "_l"), N(s, "buffer", "_b"), N(s, "byteLength", "_l"), 
        N(s, "byteOffset", "_o")), i(s.prototype, {
            getInt8: function(a) {
                return O(this, 1, a)[0] << 24 >> 24;
            },
            getUint8: function(a) {
                return O(this, 1, a)[0];
            },
            getInt16: function(a) {
                var b = O(this, 2, a, arguments[1]);
                return (b[1] << 8 | b[0]) << 16 >> 16;
            },
            getUint16: function(a) {
                var b = O(this, 2, a, arguments[1]);
                return b[1] << 8 | b[0];
            },
            getInt32: function(a) {
                return H(O(this, 4, a, arguments[1]));
            },
            getUint32: function(a) {
                return H(O(this, 4, a, arguments[1])) >>> 0;
            },
            getFloat32: function(a) {
                return G(O(this, 4, a, arguments[1]), 23, 4);
            },
            getFloat64: function(a) {
                return G(O(this, 8, a, arguments[1]), 52, 8);
            },
            setInt8: function(a, b) {
                P(this, 1, a, I, b);
            },
            setUint8: function(a, b) {
                P(this, 1, a, I, b);
            },
            setInt16: function(a, b) {
                P(this, 2, a, J, b, arguments[2]);
            },
            setUint16: function(a, b) {
                P(this, 2, a, J, b, arguments[2]);
            },
            setInt32: function(a, b) {
                P(this, 4, a, K, b, arguments[2]);
            },
            setUint32: function(a, b) {
                P(this, 4, a, K, b, arguments[2]);
            },
            setFloat32: function(a, b) {
                P(this, 4, a, M, b, arguments[2]);
            },
            setFloat64: function(a, b) {
                P(this, 8, a, L, b, arguments[2]);
            }
        });
        q(r, "ArrayBuffer"), q(s, "DataView"), h(s.prototype, g.VIEW, !0), c.ArrayBuffer = r, 
        c.DataView = s;
    }, {
        106: 106,
        108: 108,
        113: 113,
        28: 28,
        34: 34,
        38: 38,
        40: 40,
        58: 58,
        6: 6,
        67: 67,
        72: 72,
        86: 86,
        9: 9,
        92: 92
    } ],
    113: [ function(a, b, c) {
        for (var d, e = a(38), f = a(40), g = a(114), h = g("typed_array"), i = g("view"), j = !(!e.ArrayBuffer || !e.DataView), k = j, l = 0, m = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); l < 9; ) (d = e[m[l++]]) ? (f(d.prototype, h, !0), 
        f(d.prototype, i, !0)) : k = !1;
        b.exports = {
            ABV: j,
            CONSTR: k,
            TYPED: h,
            VIEW: i
        };
    }, {
        114: 114,
        38: 38,
        40: 40
    } ],
    114: [ function(a, b, c) {
        var d = 0, e = Math.random();
        b.exports = function(a) {
            return "Symbol(".concat(void 0 === a ? "" : a, ")_", (++d + e).toString(36));
        };
    }, {} ],
    115: [ function(a, b, c) {
        var d = a(38), e = a(23), f = a(58), g = a(116), h = a(67).f;
        b.exports = function(a) {
            var b = e.Symbol || (e.Symbol = f ? {} : d.Symbol || {});
            "_" == a.charAt(0) || a in b || h(b, a, {
                value: g.f(a)
            });
        };
    }, {
        116: 116,
        23: 23,
        38: 38,
        58: 58,
        67: 67
    } ],
    116: [ function(a, b, c) {
        c.f = a(117);
    }, {
        117: 117
    } ],
    117: [ function(a, b, c) {
        var d = a(94)("wks"), e = a(114), f = a(38).Symbol, g = "function" == typeof f;
        (b.exports = function(a) {
            return d[a] || (d[a] = g && f[a] || (g ? f : e)("Symbol." + a));
        }).store = d;
    }, {
        114: 114,
        38: 38,
        94: 94
    } ],
    118: [ function(a, b, c) {
        var d = a(17), e = a(117)("iterator"), f = a(56);
        b.exports = a(23).getIteratorMethod = function(a) {
            if (void 0 != a) return a[e] || a["@@iterator"] || f[d(a)];
        };
    }, {
        117: 117,
        17: 17,
        23: 23,
        56: 56
    } ],
    119: [ function(a, b, c) {
        var d = a(32), e = a(88)(/[\\^$*+?.()|[\]{}]/g, "\\$&");
        d(d.S, "RegExp", {
            escape: function(a) {
                return e(a);
            }
        });
    }, {
        32: 32,
        88: 88
    } ],
    120: [ function(a, b, c) {
        var d = a(32);
        d(d.P, "Array", {
            copyWithin: a(8)
        }), a(5)("copyWithin");
    }, {
        32: 32,
        5: 5,
        8: 8
    } ],
    121: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(12)(4);
        d(d.P + d.F * !a(96)([].every, !0), "Array", {
            every: function(a) {
                return e(this, a, arguments[1]);
            }
        });
    }, {
        12: 12,
        32: 32,
        96: 96
    } ],
    122: [ function(a, b, c) {
        var d = a(32);
        d(d.P, "Array", {
            fill: a(9)
        }), a(5)("fill");
    }, {
        32: 32,
        5: 5,
        9: 9
    } ],
    123: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(12)(2);
        d(d.P + d.F * !a(96)([].filter, !0), "Array", {
            filter: function(a) {
                return e(this, a, arguments[1]);
            }
        });
    }, {
        12: 12,
        32: 32,
        96: 96
    } ],
    124: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(12)(6), f = "findIndex", g = !0;
        f in [] && Array(1)[f](function() {
            g = !1;
        }), d(d.P + d.F * g, "Array", {
            findIndex: function(a) {
                return e(this, a, arguments.length > 1 ? arguments[1] : void 0);
            }
        }), a(5)(f);
    }, {
        12: 12,
        32: 32,
        5: 5
    } ],
    125: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(12)(5), f = !0;
        "find" in [] && Array(1).find(function() {
            f = !1;
        }), d(d.P + d.F * f, "Array", {
            find: function(a) {
                return e(this, a, arguments.length > 1 ? arguments[1] : void 0);
            }
        }), a(5)("find");
    }, {
        12: 12,
        32: 32,
        5: 5
    } ],
    126: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(12)(0), f = a(96)([].forEach, !0);
        d(d.P + d.F * !f, "Array", {
            forEach: function(a) {
                return e(this, a, arguments[1]);
            }
        });
    }, {
        12: 12,
        32: 32,
        96: 96
    } ],
    127: [ function(a, b, c) {
        "use strict";
        var d = a(25), e = a(32), f = a(109), g = a(51), h = a(46), i = a(108), j = a(24), k = a(118);
        e(e.S + e.F * !a(54)(function(a) {
            Array.from(a);
        }), "Array", {
            from: function(a) {
                var b, c, e, l, m = f(a), n = "function" == typeof this ? this : Array, o = arguments.length, p = o > 1 ? arguments[1] : void 0, q = void 0 !== p, r = 0, s = k(m);
                if (q && (p = d(p, o > 2 ? arguments[2] : void 0, 2)), void 0 == s || n == Array && h(s)) for (b = i(m.length), 
                c = new n(b); b > r; r++) j(c, r, q ? p(m[r], r) : m[r]); else for (l = s.call(m), 
                c = new n(); !(e = l.next()).done; r++) j(c, r, q ? g(l, p, [ e.value, r ], !0) : e.value);
                return c.length = r, c;
            }
        });
    }, {
        108: 108,
        109: 109,
        118: 118,
        24: 24,
        25: 25,
        32: 32,
        46: 46,
        51: 51,
        54: 54
    } ],
    128: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(11)(!1), f = [].indexOf, g = !!f && 1 / [ 1 ].indexOf(1, -0) < 0;
        d(d.P + d.F * (g || !a(96)(f)), "Array", {
            indexOf: function(a) {
                return g ? f.apply(this, arguments) || 0 : e(this, a, arguments[1]);
            }
        });
    }, {
        11: 11,
        32: 32,
        96: 96
    } ],
    129: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Array", {
            isArray: a(47)
        });
    }, {
        32: 32,
        47: 47
    } ],
    130: [ function(a, b, c) {
        "use strict";
        var d = a(5), e = a(55), f = a(56), g = a(107);
        b.exports = a(53)(Array, "Array", function(a, b) {
            this._t = g(a), this._i = 0, this._k = b;
        }, function() {
            var a = this._t, b = this._k, c = this._i++;
            return !a || c >= a.length ? (this._t = void 0, e(1)) : "keys" == b ? e(0, c) : "values" == b ? e(0, a[c]) : e(0, [ c, a[c] ]);
        }, "values"), f.Arguments = f.Array, d("keys"), d("values"), d("entries");
    }, {
        107: 107,
        5: 5,
        53: 53,
        55: 55,
        56: 56
    } ],
    131: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(107), f = [].join;
        d(d.P + d.F * (a(45) != Object || !a(96)(f)), "Array", {
            join: function(a) {
                return f.call(e(this), void 0 === a ? "," : a);
            }
        });
    }, {
        107: 107,
        32: 32,
        45: 45,
        96: 96
    } ],
    132: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(107), f = a(106), g = a(108), h = [].lastIndexOf, i = !!h && 1 / [ 1 ].lastIndexOf(1, -0) < 0;
        d(d.P + d.F * (i || !a(96)(h)), "Array", {
            lastIndexOf: function(a) {
                if (i) return h.apply(this, arguments) || 0;
                var b = e(this), c = g(b.length), d = c - 1;
                for (arguments.length > 1 && (d = Math.min(d, f(arguments[1]))), d < 0 && (d = c + d); d >= 0; d--) if (d in b && b[d] === a) return d || 0;
                return -1;
            }
        });
    }, {
        106: 106,
        107: 107,
        108: 108,
        32: 32,
        96: 96
    } ],
    133: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(12)(1);
        d(d.P + d.F * !a(96)([].map, !0), "Array", {
            map: function(a) {
                return e(this, a, arguments[1]);
            }
        });
    }, {
        12: 12,
        32: 32,
        96: 96
    } ],
    134: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(24);
        d(d.S + d.F * a(34)(function() {
            function a() {}
            return !(Array.of.call(a) instanceof a);
        }), "Array", {
            of: function() {
                for (var a = 0, b = arguments.length, c = new ("function" == typeof this ? this : Array)(b); b > a; ) e(c, a, arguments[a++]);
                return c.length = b, c;
            }
        });
    }, {
        24: 24,
        32: 32,
        34: 34
    } ],
    135: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(13);
        d(d.P + d.F * !a(96)([].reduceRight, !0), "Array", {
            reduceRight: function(a) {
                return e(this, a, arguments.length, arguments[1], !0);
            }
        });
    }, {
        13: 13,
        32: 32,
        96: 96
    } ],
    136: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(13);
        d(d.P + d.F * !a(96)([].reduce, !0), "Array", {
            reduce: function(a) {
                return e(this, a, arguments.length, arguments[1], !1);
            }
        });
    }, {
        13: 13,
        32: 32,
        96: 96
    } ],
    137: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(41), f = a(18), g = a(105), h = a(108), i = [].slice;
        d(d.P + d.F * a(34)(function() {
            e && i.call(e);
        }), "Array", {
            slice: function(a, b) {
                var c = h(this.length), d = f(this);
                if (b = void 0 === b ? c : b, "Array" == d) return i.call(this, a, b);
                for (var e = g(a, c), j = g(b, c), k = h(j - e), l = Array(k), m = 0; m < k; m++) l[m] = "String" == d ? this.charAt(e + m) : this[e + m];
                return l;
            }
        });
    }, {
        105: 105,
        108: 108,
        18: 18,
        32: 32,
        34: 34,
        41: 41
    } ],
    138: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(12)(3);
        d(d.P + d.F * !a(96)([].some, !0), "Array", {
            some: function(a) {
                return e(this, a, arguments[1]);
            }
        });
    }, {
        12: 12,
        32: 32,
        96: 96
    } ],
    139: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(3), f = a(109), g = a(34), h = [].sort, i = [ 1, 2, 3 ];
        d(d.P + d.F * (g(function() {
            i.sort(void 0);
        }) || !g(function() {
            i.sort(null);
        }) || !a(96)(h)), "Array", {
            sort: function(a) {
                return void 0 === a ? h.call(f(this)) : h.call(f(this), e(a));
            }
        });
    }, {
        109: 109,
        3: 3,
        32: 32,
        34: 34,
        96: 96
    } ],
    140: [ function(a, b, c) {
        a(91)("Array");
    }, {
        91: 91
    } ],
    141: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Date", {
            now: function() {
                return new Date().getTime();
            }
        });
    }, {
        32: 32
    } ],
    142: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(34), f = Date.prototype.getTime, g = function(a) {
            return a > 9 ? a : "0" + a;
        };
        d(d.P + d.F * (e(function() {
            return "0385-07-25T07:06:39.999Z" != new Date(-5e13 - 1).toISOString();
        }) || !e(function() {
            new Date(NaN).toISOString();
        })), "Date", {
            toISOString: function() {
                if (!isFinite(f.call(this))) throw RangeError("Invalid time value");
                var a = this, b = a.getUTCFullYear(), c = a.getUTCMilliseconds(), d = b < 0 ? "-" : b > 9999 ? "+" : "";
                return d + ("00000" + Math.abs(b)).slice(d ? -6 : -4) + "-" + g(a.getUTCMonth() + 1) + "-" + g(a.getUTCDate()) + "T" + g(a.getUTCHours()) + ":" + g(a.getUTCMinutes()) + ":" + g(a.getUTCSeconds()) + "." + (c > 99 ? c : "0" + g(c)) + "Z";
            }
        });
    }, {
        32: 32,
        34: 34
    } ],
    143: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(109), f = a(110);
        d(d.P + d.F * a(34)(function() {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                toISOString: function() {
                    return 1;
                }
            });
        }), "Date", {
            toJSON: function(a) {
                var b = e(this), c = f(b);
                return "number" != typeof c || isFinite(c) ? b.toISOString() : null;
            }
        });
    }, {
        109: 109,
        110: 110,
        32: 32,
        34: 34
    } ],
    144: [ function(a, b, c) {
        var d = a(117)("toPrimitive"), e = Date.prototype;
        d in e || a(40)(e, d, a(26));
    }, {
        117: 117,
        26: 26,
        40: 40
    } ],
    145: [ function(a, b, c) {
        var d = Date.prototype, e = d.toString, f = d.getTime;
        new Date(NaN) + "" != "Invalid Date" && a(87)(d, "toString", function() {
            var a = f.call(this);
            return a === a ? e.call(this) : "Invalid Date";
        });
    }, {
        87: 87
    } ],
    146: [ function(a, b, c) {
        var d = a(32);
        d(d.P, "Function", {
            bind: a(16)
        });
    }, {
        16: 16,
        32: 32
    } ],
    147: [ function(a, b, c) {
        "use strict";
        var d = a(49), e = a(74), f = a(117)("hasInstance"), g = Function.prototype;
        f in g || a(67).f(g, f, {
            value: function(a) {
                if ("function" != typeof this || !d(a)) return !1;
                if (!d(this.prototype)) return a instanceof this;
                for (;a = e(a); ) if (this.prototype === a) return !0;
                return !1;
            }
        });
    }, {
        117: 117,
        49: 49,
        67: 67,
        74: 74
    } ],
    148: [ function(a, b, c) {
        var d = a(67).f, e = a(85), f = a(39), g = Function.prototype, h = /^\s*function ([^ (]*)/, i = Object.isExtensible || function() {
            return !0;
        };
        "name" in g || a(28) && d(g, "name", {
            configurable: !0,
            get: function() {
                try {
                    var a = this, b = ("" + a).match(h)[1];
                    return f(a, "name") || !i(a) || d(a, "name", e(5, b)), b;
                } catch (a) {
                    return "";
                }
            }
        });
    }, {
        28: 28,
        39: 39,
        67: 67,
        85: 85
    } ],
    149: [ function(a, b, c) {
        "use strict";
        var d = a(19);
        b.exports = a(22)("Map", function(a) {
            return function() {
                return a(this, arguments.length > 0 ? arguments[0] : void 0);
            };
        }, {
            get: function(a) {
                var b = d.getEntry(this, a);
                return b && b.v;
            },
            set: function(a, b) {
                return d.def(this, 0 === a ? 0 : a, b);
            }
        }, d, !0);
    }, {
        19: 19,
        22: 22
    } ],
    150: [ function(a, b, c) {
        var d = a(32), e = a(60), f = Math.sqrt, g = Math.acosh;
        d(d.S + d.F * !(g && 710 == Math.floor(g(Number.MAX_VALUE)) && g(1 / 0) == 1 / 0), "Math", {
            acosh: function(a) {
                return (a = +a) < 1 ? NaN : a > 94906265.62425156 ? Math.log(a) + Math.LN2 : e(a - 1 + f(a - 1) * f(a + 1));
            }
        });
    }, {
        32: 32,
        60: 60
    } ],
    151: [ function(a, b, c) {
        function d(a) {
            return isFinite(a = +a) && 0 != a ? a < 0 ? -d(-a) : Math.log(a + Math.sqrt(a * a + 1)) : a;
        }
        var e = a(32), f = Math.asinh;
        e(e.S + e.F * !(f && 1 / f(0) > 0), "Math", {
            asinh: d
        });
    }, {
        32: 32
    } ],
    152: [ function(a, b, c) {
        var d = a(32), e = Math.atanh;
        d(d.S + d.F * !(e && 1 / e(-0) < 0), "Math", {
            atanh: function(a) {
                return 0 == (a = +a) ? a : Math.log((1 + a) / (1 - a)) / 2;
            }
        });
    }, {
        32: 32
    } ],
    153: [ function(a, b, c) {
        var d = a(32), e = a(61);
        d(d.S, "Math", {
            cbrt: function(a) {
                return e(a = +a) * Math.pow(Math.abs(a), 1 / 3);
            }
        });
    }, {
        32: 32,
        61: 61
    } ],
    154: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Math", {
            clz32: function(a) {
                return (a >>>= 0) ? 31 - Math.floor(Math.log(a + .5) * Math.LOG2E) : 32;
            }
        });
    }, {
        32: 32
    } ],
    155: [ function(a, b, c) {
        var d = a(32), e = Math.exp;
        d(d.S, "Math", {
            cosh: function(a) {
                return (e(a = +a) + e(-a)) / 2;
            }
        });
    }, {
        32: 32
    } ],
    156: [ function(a, b, c) {
        var d = a(32), e = a(59);
        d(d.S + d.F * (e != Math.expm1), "Math", {
            expm1: e
        });
    }, {
        32: 32,
        59: 59
    } ],
    157: [ function(a, b, c) {
        var d = a(32), e = a(61), f = Math.pow, g = f(2, -52), h = f(2, -23), i = f(2, 127) * (2 - h), j = f(2, -126), k = function(a) {
            return a + 1 / g - 1 / g;
        };
        d(d.S, "Math", {
            fround: function(a) {
                var b, c, d = Math.abs(a), f = e(a);
                return d < j ? f * k(d / j / h) * j * h : (b = (1 + h / g) * d, c = b - (b - d), 
                c > i || c != c ? f * (1 / 0) : f * c);
            }
        });
    }, {
        32: 32,
        61: 61
    } ],
    158: [ function(a, b, c) {
        var d = a(32), e = Math.abs;
        d(d.S, "Math", {
            hypot: function(a, b) {
                for (var c, d, f = 0, g = 0, h = arguments.length, i = 0; g < h; ) c = e(arguments[g++]), 
                i < c ? (d = i / c, f = f * d * d + 1, i = c) : c > 0 ? (d = c / i, f += d * d) : f += c;
                return i === 1 / 0 ? 1 / 0 : i * Math.sqrt(f);
            }
        });
    }, {
        32: 32
    } ],
    159: [ function(a, b, c) {
        var d = a(32), e = Math.imul;
        d(d.S + d.F * a(34)(function() {
            return -5 != e(4294967295, 5) || 2 != e.length;
        }), "Math", {
            imul: function(a, b) {
                var c = +a, d = +b, e = 65535 & c, f = 65535 & d;
                return 0 | e * f + ((65535 & c >>> 16) * f + e * (65535 & d >>> 16) << 16 >>> 0);
            }
        });
    }, {
        32: 32,
        34: 34
    } ],
    160: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Math", {
            log10: function(a) {
                return Math.log(a) / Math.LN10;
            }
        });
    }, {
        32: 32
    } ],
    161: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Math", {
            log1p: a(60)
        });
    }, {
        32: 32,
        60: 60
    } ],
    162: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Math", {
            log2: function(a) {
                return Math.log(a) / Math.LN2;
            }
        });
    }, {
        32: 32
    } ],
    163: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Math", {
            sign: a(61)
        });
    }, {
        32: 32,
        61: 61
    } ],
    164: [ function(a, b, c) {
        var d = a(32), e = a(59), f = Math.exp;
        d(d.S + d.F * a(34)(function() {
            return -2e-17 != !Math.sinh(-2e-17);
        }), "Math", {
            sinh: function(a) {
                return Math.abs(a = +a) < 1 ? (e(a) - e(-a)) / 2 : (f(a - 1) - f(-a - 1)) * (Math.E / 2);
            }
        });
    }, {
        32: 32,
        34: 34,
        59: 59
    } ],
    165: [ function(a, b, c) {
        var d = a(32), e = a(59), f = Math.exp;
        d(d.S, "Math", {
            tanh: function(a) {
                var b = e(a = +a), c = e(-a);
                return b == 1 / 0 ? 1 : c == 1 / 0 ? -1 : (b - c) / (f(a) + f(-a));
            }
        });
    }, {
        32: 32,
        59: 59
    } ],
    166: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Math", {
            trunc: function(a) {
                return (a > 0 ? Math.floor : Math.ceil)(a);
            }
        });
    }, {
        32: 32
    } ],
    167: [ function(a, b, c) {
        "use strict";
        var d = a(38), e = a(39), f = a(18), g = a(43), h = a(110), i = a(34), j = a(72).f, k = a(70).f, l = a(67).f, m = a(102).trim, n = d.Number, o = n, p = n.prototype, q = "Number" == f(a(66)(p)), r = "trim" in String.prototype, s = function(a) {
            var b = h(a, !1);
            if ("string" == typeof b && b.length > 2) {
                b = r ? b.trim() : m(b, 3);
                var c, d, e, f = b.charCodeAt(0);
                if (43 === f || 45 === f) {
                    if (88 === (c = b.charCodeAt(2)) || 120 === c) return NaN;
                } else if (48 === f) {
                    switch (b.charCodeAt(1)) {
                      case 66:
                      case 98:
                        d = 2, e = 49;
                        break;

                      case 79:
                      case 111:
                        d = 8, e = 55;
                        break;

                      default:
                        return +b;
                    }
                    for (var g, i = b.slice(2), j = 0, k = i.length; j < k; j++) if ((g = i.charCodeAt(j)) < 48 || g > e) return NaN;
                    return parseInt(i, d);
                }
            }
            return +b;
        };
        if (!n(" 0o1") || !n("0b1") || n("+0x1")) {
            n = function(a) {
                var b = arguments.length < 1 ? 0 : a, c = this;
                return c instanceof n && (q ? i(function() {
                    p.valueOf.call(c);
                }) : "Number" != f(c)) ? g(new o(s(b)), c, n) : s(b);
            };
            for (var t, u = a(28) ? j(o) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), v = 0; u.length > v; v++) e(o, t = u[v]) && !e(n, t) && l(n, t, k(o, t));
            n.prototype = p, p.constructor = n, a(87)(d, "Number", n);
        }
    }, {
        102: 102,
        110: 110,
        18: 18,
        28: 28,
        34: 34,
        38: 38,
        39: 39,
        43: 43,
        66: 66,
        67: 67,
        70: 70,
        72: 72,
        87: 87
    } ],
    168: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Number", {
            EPSILON: Math.pow(2, -52)
        });
    }, {
        32: 32
    } ],
    169: [ function(a, b, c) {
        var d = a(32), e = a(38).isFinite;
        d(d.S, "Number", {
            isFinite: function(a) {
                return "number" == typeof a && e(a);
            }
        });
    }, {
        32: 32,
        38: 38
    } ],
    170: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Number", {
            isInteger: a(48)
        });
    }, {
        32: 32,
        48: 48
    } ],
    171: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Number", {
            isNaN: function(a) {
                return a != a;
            }
        });
    }, {
        32: 32
    } ],
    172: [ function(a, b, c) {
        var d = a(32), e = a(48), f = Math.abs;
        d(d.S, "Number", {
            isSafeInteger: function(a) {
                return e(a) && f(a) <= 9007199254740991;
            }
        });
    }, {
        32: 32,
        48: 48
    } ],
    173: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Number", {
            MAX_SAFE_INTEGER: 9007199254740991
        });
    }, {
        32: 32
    } ],
    174: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Number", {
            MIN_SAFE_INTEGER: -9007199254740991
        });
    }, {
        32: 32
    } ],
    175: [ function(a, b, c) {
        var d = a(32), e = a(81);
        d(d.S + d.F * (Number.parseFloat != e), "Number", {
            parseFloat: e
        });
    }, {
        32: 32,
        81: 81
    } ],
    176: [ function(a, b, c) {
        var d = a(32), e = a(82);
        d(d.S + d.F * (Number.parseInt != e), "Number", {
            parseInt: e
        });
    }, {
        32: 32,
        82: 82
    } ],
    177: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(106), f = a(4), g = a(101), h = 1..toFixed, i = Math.floor, j = [ 0, 0, 0, 0, 0, 0 ], k = "Number.toFixed: incorrect invocation!", l = function(a, b) {
            for (var c = -1, d = b; ++c < 6; ) d += a * j[c], j[c] = d % 1e7, d = i(d / 1e7);
        }, m = function(a) {
            for (var b = 6, c = 0; --b >= 0; ) c += j[b], j[b] = i(c / a), c = c % a * 1e7;
        }, n = function() {
            for (var a = 6, b = ""; --a >= 0; ) if ("" !== b || 0 === a || 0 !== j[a]) {
                var c = String(j[a]);
                b = "" === b ? c : b + g.call("0", 7 - c.length) + c;
            }
            return b;
        }, o = function(a, b, c) {
            return 0 === b ? c : b % 2 == 1 ? o(a, b - 1, c * a) : o(a * a, b / 2, c);
        }, p = function(a) {
            for (var b = 0, c = a; c >= 4096; ) b += 12, c /= 4096;
            for (;c >= 2; ) b += 1, c /= 2;
            return b;
        };
        d(d.P + d.F * (!!h && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== 0xde0b6b3a7640080.toFixed(0)) || !a(34)(function() {
            h.call({});
        })), "Number", {
            toFixed: function(a) {
                var b, c, d, h, i = f(this, k), j = e(a), q = "", r = "0";
                if (j < 0 || j > 20) throw RangeError(k);
                if (i != i) return "NaN";
                if (i <= -1e21 || i >= 1e21) return String(i);
                if (i < 0 && (q = "-", i = -i), i > 1e-21) if (b = p(i * o(2, 69, 1)) - 69, c = b < 0 ? i * o(2, -b, 1) : i / o(2, b, 1), 
                c *= 4503599627370496, (b = 52 - b) > 0) {
                    for (l(0, c), d = j; d >= 7; ) l(1e7, 0), d -= 7;
                    for (l(o(10, d, 1), 0), d = b - 1; d >= 23; ) m(1 << 23), d -= 23;
                    m(1 << d), l(1, 1), m(2), r = n();
                } else l(0, c), l(1 << -b, 0), r = n() + g.call("0", j);
                return j > 0 ? (h = r.length, r = q + (h <= j ? "0." + g.call("0", j - h) + r : r.slice(0, h - j) + "." + r.slice(h - j))) : r = q + r, 
                r;
            }
        });
    }, {
        101: 101,
        106: 106,
        32: 32,
        34: 34,
        4: 4
    } ],
    178: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(34), f = a(4), g = 1..toPrecision;
        d(d.P + d.F * (e(function() {
            return "1" !== g.call(1, void 0);
        }) || !e(function() {
            g.call({});
        })), "Number", {
            toPrecision: function(a) {
                var b = f(this, "Number#toPrecision: incorrect invocation!");
                return void 0 === a ? g.call(b) : g.call(b, a);
            }
        });
    }, {
        32: 32,
        34: 34,
        4: 4
    } ],
    179: [ function(a, b, c) {
        var d = a(32);
        d(d.S + d.F, "Object", {
            assign: a(65)
        });
    }, {
        32: 32,
        65: 65
    } ],
    180: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Object", {
            create: a(66)
        });
    }, {
        32: 32,
        66: 66
    } ],
    181: [ function(a, b, c) {
        var d = a(32);
        d(d.S + d.F * !a(28), "Object", {
            defineProperties: a(68)
        });
    }, {
        28: 28,
        32: 32,
        68: 68
    } ],
    182: [ function(a, b, c) {
        var d = a(32);
        d(d.S + d.F * !a(28), "Object", {
            defineProperty: a(67).f
        });
    }, {
        28: 28,
        32: 32,
        67: 67
    } ],
    183: [ function(a, b, c) {
        var d = a(49), e = a(62).onFreeze;
        a(78)("freeze", function(a) {
            return function(b) {
                return a && d(b) ? a(e(b)) : b;
            };
        });
    }, {
        49: 49,
        62: 62,
        78: 78
    } ],
    184: [ function(a, b, c) {
        var d = a(107), e = a(70).f;
        a(78)("getOwnPropertyDescriptor", function() {
            return function(a, b) {
                return e(d(a), b);
            };
        });
    }, {
        107: 107,
        70: 70,
        78: 78
    } ],
    185: [ function(a, b, c) {
        a(78)("getOwnPropertyNames", function() {
            return a(71).f;
        });
    }, {
        71: 71,
        78: 78
    } ],
    186: [ function(a, b, c) {
        var d = a(109), e = a(74);
        a(78)("getPrototypeOf", function() {
            return function(a) {
                return e(d(a));
            };
        });
    }, {
        109: 109,
        74: 74,
        78: 78
    } ],
    187: [ function(a, b, c) {
        var d = a(49);
        a(78)("isExtensible", function(a) {
            return function(b) {
                return !!d(b) && (!a || a(b));
            };
        });
    }, {
        49: 49,
        78: 78
    } ],
    188: [ function(a, b, c) {
        var d = a(49);
        a(78)("isFrozen", function(a) {
            return function(b) {
                return !d(b) || !!a && a(b);
            };
        });
    }, {
        49: 49,
        78: 78
    } ],
    189: [ function(a, b, c) {
        var d = a(49);
        a(78)("isSealed", function(a) {
            return function(b) {
                return !d(b) || !!a && a(b);
            };
        });
    }, {
        49: 49,
        78: 78
    } ],
    190: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Object", {
            is: a(89)
        });
    }, {
        32: 32,
        89: 89
    } ],
    191: [ function(a, b, c) {
        var d = a(109), e = a(76);
        a(78)("keys", function() {
            return function(a) {
                return e(d(a));
            };
        });
    }, {
        109: 109,
        76: 76,
        78: 78
    } ],
    192: [ function(a, b, c) {
        var d = a(49), e = a(62).onFreeze;
        a(78)("preventExtensions", function(a) {
            return function(b) {
                return a && d(b) ? a(e(b)) : b;
            };
        });
    }, {
        49: 49,
        62: 62,
        78: 78
    } ],
    193: [ function(a, b, c) {
        var d = a(49), e = a(62).onFreeze;
        a(78)("seal", function(a) {
            return function(b) {
                return a && d(b) ? a(e(b)) : b;
            };
        });
    }, {
        49: 49,
        62: 62,
        78: 78
    } ],
    194: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Object", {
            setPrototypeOf: a(90).set
        });
    }, {
        32: 32,
        90: 90
    } ],
    195: [ function(a, b, c) {
        "use strict";
        var d = a(17), e = {};
        e[a(117)("toStringTag")] = "z", e + "" != "[object z]" && a(87)(Object.prototype, "toString", function() {
            return "[object " + d(this) + "]";
        }, !0);
    }, {
        117: 117,
        17: 17,
        87: 87
    } ],
    196: [ function(a, b, c) {
        var d = a(32), e = a(81);
        d(d.G + d.F * (parseFloat != e), {
            parseFloat: e
        });
    }, {
        32: 32,
        81: 81
    } ],
    197: [ function(a, b, c) {
        var d = a(32), e = a(82);
        d(d.G + d.F * (parseInt != e), {
            parseInt: e
        });
    }, {
        32: 32,
        82: 82
    } ],
    198: [ function(a, b, c) {
        "use strict";
        var d, e, f, g = a(58), h = a(38), i = a(25), j = a(17), k = a(32), l = a(49), m = a(3), n = a(6), o = a(37), p = a(95), q = a(104).set, r = a(64)(), s = h.TypeError, t = h.process, u = h.Promise, t = h.process, v = "process" == j(t), w = function() {}, x = !!function() {
            try {
                var b = u.resolve(1), c = (b.constructor = {})[a(117)("species")] = function(a) {
                    a(w, w);
                };
                return (v || "function" == typeof PromiseRejectionEvent) && b.then(w) instanceof c;
            } catch (a) {}
        }(), y = function(a, b) {
            return a === b || a === u && b === f;
        }, z = function(a) {
            var b;
            return !(!l(a) || "function" != typeof (b = a.then)) && b;
        }, A = function(a) {
            return y(u, a) ? new B(a) : new e(a);
        }, B = e = function(a) {
            var b, c;
            this.promise = new a(function(a, d) {
                if (void 0 !== b || void 0 !== c) throw s("Bad Promise constructor");
                b = a, c = d;
            }), this.resolve = m(b), this.reject = m(c);
        }, C = function(a) {
            try {
                a();
            } catch (a) {
                return {
                    error: a
                };
            }
        }, D = function(a, b) {
            if (!a._n) {
                a._n = !0;
                var c = a._c;
                r(function() {
                    for (var d = a._v, e = 1 == a._s, f = 0; c.length > f; ) !function(b) {
                        var c, f, g = e ? b.ok : b.fail, h = b.resolve, i = b.reject, j = b.domain;
                        try {
                            g ? (e || (2 == a._h && G(a), a._h = 1), !0 === g ? c = d : (j && j.enter(), c = g(d), 
                            j && j.exit()), c === b.promise ? i(s("Promise-chain cycle")) : (f = z(c)) ? f.call(c, h, i) : h(c)) : i(d);
                        } catch (a) {
                            i(a);
                        }
                    }(c[f++]);
                    a._c = [], a._n = !1, b && !a._h && E(a);
                });
            }
        }, E = function(a) {
            q.call(h, function() {
                var b, c, d, e = a._v;
                if (F(a) && (b = C(function() {
                    v ? t.emit("unhandledRejection", e, a) : (c = h.onunhandledrejection) ? c({
                        promise: a,
                        reason: e
                    }) : (d = h.console) && d.error && d.error("Unhandled promise rejection", e);
                }), a._h = v || F(a) ? 2 : 1), a._a = void 0, b) throw b.error;
            });
        }, F = function(a) {
            if (1 == a._h) return !1;
            for (var b, c = a._a || a._c, d = 0; c.length > d; ) if (b = c[d++], b.fail || !F(b.promise)) return !1;
            return !0;
        }, G = function(a) {
            q.call(h, function() {
                var b;
                v ? t.emit("rejectionHandled", a) : (b = h.onrejectionhandled) && b({
                    promise: a,
                    reason: a._v
                });
            });
        }, H = function(a) {
            var b = this;
            b._d || (b._d = !0, b = b._w || b, b._v = a, b._s = 2, b._a || (b._a = b._c.slice()), 
            D(b, !0));
        }, I = function(a) {
            var b, c = this;
            if (!c._d) {
                c._d = !0, c = c._w || c;
                try {
                    if (c === a) throw s("Promise can't be resolved itself");
                    (b = z(a)) ? r(function() {
                        var d = {
                            _w: c,
                            _d: !1
                        };
                        try {
                            b.call(a, i(I, d, 1), i(H, d, 1));
                        } catch (a) {
                            H.call(d, a);
                        }
                    }) : (c._v = a, c._s = 1, D(c, !1));
                } catch (a) {
                    H.call({
                        _w: c,
                        _d: !1
                    }, a);
                }
            }
        };
        x || (u = function(a) {
            n(this, u, "Promise", "_h"), m(a), d.call(this);
            try {
                a(i(I, this, 1), i(H, this, 1));
            } catch (a) {
                H.call(this, a);
            }
        }, d = function(a) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, 
            this._n = !1;
        }, d.prototype = a(86)(u.prototype, {
            then: function(a, b) {
                var c = A(p(this, u));
                return c.ok = "function" != typeof a || a, c.fail = "function" == typeof b && b, 
                c.domain = v ? t.domain : void 0, this._c.push(c), this._a && this._a.push(c), this._s && D(this, !1), 
                c.promise;
            },
            "catch": function(a) {
                return this.then(void 0, a);
            }
        }), B = function() {
            var a = new d();
            this.promise = a, this.resolve = i(I, a, 1), this.reject = i(H, a, 1);
        }), k(k.G + k.W + k.F * !x, {
            Promise: u
        }), a(92)(u, "Promise"), a(91)("Promise"), f = a(23).Promise, k(k.S + k.F * !x, "Promise", {
            reject: function(a) {
                var b = A(this);
                return (0, b.reject)(a), b.promise;
            }
        }), k(k.S + k.F * (g || !x), "Promise", {
            resolve: function(a) {
                if (a instanceof u && y(a.constructor, this)) return a;
                var b = A(this);
                return (0, b.resolve)(a), b.promise;
            }
        }), k(k.S + k.F * !(x && a(54)(function(a) {
            u.all(a).catch(w);
        })), "Promise", {
            all: function(a) {
                var b = this, c = A(b), d = c.resolve, e = c.reject, f = C(function() {
                    var c = [], f = 0, g = 1;
                    o(a, !1, function(a) {
                        var h = f++, i = !1;
                        c.push(void 0), g++, b.resolve(a).then(function(a) {
                            i || (i = !0, c[h] = a, --g || d(c));
                        }, e);
                    }), --g || d(c);
                });
                return f && e(f.error), c.promise;
            },
            race: function(a) {
                var b = this, c = A(b), d = c.reject, e = C(function() {
                    o(a, !1, function(a) {
                        b.resolve(a).then(c.resolve, d);
                    });
                });
                return e && d(e.error), c.promise;
            }
        });
    }, {
        104: 104,
        117: 117,
        17: 17,
        23: 23,
        25: 25,
        3: 3,
        32: 32,
        37: 37,
        38: 38,
        49: 49,
        54: 54,
        58: 58,
        6: 6,
        64: 64,
        86: 86,
        91: 91,
        92: 92,
        95: 95
    } ],
    199: [ function(a, b, c) {
        var d = a(32), e = a(3), f = a(7), g = (a(38).Reflect || {}).apply, h = Function.apply;
        d(d.S + d.F * !a(34)(function() {
            g(function() {});
        }), "Reflect", {
            apply: function(a, b, c) {
                var d = e(a), i = f(c);
                return g ? g(d, b, i) : h.call(d, b, i);
            }
        });
    }, {
        3: 3,
        32: 32,
        34: 34,
        38: 38,
        7: 7
    } ],
    200: [ function(a, b, c) {
        var d = a(32), e = a(66), f = a(3), g = a(7), h = a(49), i = a(34), j = a(16), k = (a(38).Reflect || {}).construct, l = i(function() {
            function a() {}
            return !(k(function() {}, [], a) instanceof a);
        }), m = !i(function() {
            k(function() {});
        });
        d(d.S + d.F * (l || m), "Reflect", {
            construct: function(a, b) {
                f(a), g(b);
                var c = arguments.length < 3 ? a : f(arguments[2]);
                if (m && !l) return k(a, b, c);
                if (a == c) {
                    switch (b.length) {
                      case 0:
                        return new a();

                      case 1:
                        return new a(b[0]);

                      case 2:
                        return new a(b[0], b[1]);

                      case 3:
                        return new a(b[0], b[1], b[2]);

                      case 4:
                        return new a(b[0], b[1], b[2], b[3]);
                    }
                    var d = [ null ];
                    return d.push.apply(d, b), new (j.apply(a, d))();
                }
                var i = c.prototype, n = e(h(i) ? i : Object.prototype), o = Function.apply.call(a, n, b);
                return h(o) ? o : n;
            }
        });
    }, {
        16: 16,
        3: 3,
        32: 32,
        34: 34,
        38: 38,
        49: 49,
        66: 66,
        7: 7
    } ],
    201: [ function(a, b, c) {
        var d = a(67), e = a(32), f = a(7), g = a(110);
        e(e.S + e.F * a(34)(function() {
            Reflect.defineProperty(d.f({}, 1, {
                value: 1
            }), 1, {
                value: 2
            });
        }), "Reflect", {
            defineProperty: function(a, b, c) {
                f(a), b = g(b, !0), f(c);
                try {
                    return d.f(a, b, c), !0;
                } catch (a) {
                    return !1;
                }
            }
        });
    }, {
        110: 110,
        32: 32,
        34: 34,
        67: 67,
        7: 7
    } ],
    202: [ function(a, b, c) {
        var d = a(32), e = a(70).f, f = a(7);
        d(d.S, "Reflect", {
            deleteProperty: function(a, b) {
                var c = e(f(a), b);
                return !(c && !c.configurable) && delete a[b];
            }
        });
    }, {
        32: 32,
        7: 7,
        70: 70
    } ],
    203: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(7), f = function(a) {
            this._t = e(a), this._i = 0;
            var b, c = this._k = [];
            for (b in a) c.push(b);
        };
        a(52)(f, "Object", function() {
            var a, b = this, c = b._k;
            do {
                if (b._i >= c.length) return {
                    value: void 0,
                    done: !0
                };
            } while (!((a = c[b._i++]) in b._t));
            return {
                value: a,
                done: !1
            };
        }), d(d.S, "Reflect", {
            enumerate: function(a) {
                return new f(a);
            }
        });
    }, {
        32: 32,
        52: 52,
        7: 7
    } ],
    204: [ function(a, b, c) {
        var d = a(70), e = a(32), f = a(7);
        e(e.S, "Reflect", {
            getOwnPropertyDescriptor: function(a, b) {
                return d.f(f(a), b);
            }
        });
    }, {
        32: 32,
        7: 7,
        70: 70
    } ],
    205: [ function(a, b, c) {
        var d = a(32), e = a(74), f = a(7);
        d(d.S, "Reflect", {
            getPrototypeOf: function(a) {
                return e(f(a));
            }
        });
    }, {
        32: 32,
        7: 7,
        74: 74
    } ],
    206: [ function(a, b, c) {
        function d(a, b) {
            var c, h, k = arguments.length < 3 ? a : arguments[2];
            return j(a) === k ? a[b] : (c = e.f(a, b)) ? g(c, "value") ? c.value : void 0 !== c.get ? c.get.call(k) : void 0 : i(h = f(a)) ? d(h, b, k) : void 0;
        }
        var e = a(70), f = a(74), g = a(39), h = a(32), i = a(49), j = a(7);
        h(h.S, "Reflect", {
            get: d
        });
    }, {
        32: 32,
        39: 39,
        49: 49,
        7: 7,
        70: 70,
        74: 74
    } ],
    207: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Reflect", {
            has: function(a, b) {
                return b in a;
            }
        });
    }, {
        32: 32
    } ],
    208: [ function(a, b, c) {
        var d = a(32), e = a(7), f = Object.isExtensible;
        d(d.S, "Reflect", {
            isExtensible: function(a) {
                return e(a), !f || f(a);
            }
        });
    }, {
        32: 32,
        7: 7
    } ],
    209: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Reflect", {
            ownKeys: a(80)
        });
    }, {
        32: 32,
        80: 80
    } ],
    210: [ function(a, b, c) {
        var d = a(32), e = a(7), f = Object.preventExtensions;
        d(d.S, "Reflect", {
            preventExtensions: function(a) {
                e(a);
                try {
                    return f && f(a), !0;
                } catch (a) {
                    return !1;
                }
            }
        });
    }, {
        32: 32,
        7: 7
    } ],
    211: [ function(a, b, c) {
        var d = a(32), e = a(90);
        e && d(d.S, "Reflect", {
            setPrototypeOf: function(a, b) {
                e.check(a, b);
                try {
                    return e.set(a, b), !0;
                } catch (a) {
                    return !1;
                }
            }
        });
    }, {
        32: 32,
        90: 90
    } ],
    212: [ function(a, b, c) {
        function d(a, b, c) {
            var i, m, n = arguments.length < 4 ? a : arguments[3], o = f.f(k(a), b);
            if (!o) {
                if (l(m = g(a))) return d(m, b, c, n);
                o = j(0);
            }
            return h(o, "value") ? !(!1 === o.writable || !l(n)) && (i = f.f(n, b) || j(0), 
            i.value = c, e.f(n, b, i), !0) : void 0 !== o.set && (o.set.call(n, c), !0);
        }
        var e = a(67), f = a(70), g = a(74), h = a(39), i = a(32), j = a(85), k = a(7), l = a(49);
        i(i.S, "Reflect", {
            set: d
        });
    }, {
        32: 32,
        39: 39,
        49: 49,
        67: 67,
        7: 7,
        70: 70,
        74: 74,
        85: 85
    } ],
    213: [ function(a, b, c) {
        var d = a(38), e = a(43), f = a(67).f, g = a(72).f, h = a(50), i = a(36), j = d.RegExp, k = j, l = j.prototype, m = /a/g, n = /a/g, o = new j(m) !== m;
        if (a(28) && (!o || a(34)(function() {
            return n[a(117)("match")] = !1, j(m) != m || j(n) == n || "/a/i" != j(m, "i");
        }))) {
            j = function(a, b) {
                var c = this instanceof j, d = h(a), f = void 0 === b;
                return !c && d && a.constructor === j && f ? a : e(o ? new k(d && !f ? a.source : a, b) : k((d = a instanceof j) ? a.source : a, d && f ? i.call(a) : b), c ? this : l, j);
            };
            for (var p = g(k), q = 0; p.length > q; ) !function(a) {
                a in j || f(j, a, {
                    configurable: !0,
                    get: function() {
                        return k[a];
                    },
                    set: function(b) {
                        k[a] = b;
                    }
                });
            }(p[q++]);
            l.constructor = j, j.prototype = l, a(87)(d, "RegExp", j);
        }
        a(91)("RegExp");
    }, {
        117: 117,
        28: 28,
        34: 34,
        36: 36,
        38: 38,
        43: 43,
        50: 50,
        67: 67,
        72: 72,
        87: 87,
        91: 91
    } ],
    214: [ function(a, b, c) {
        a(28) && "g" != /./g.flags && a(67).f(RegExp.prototype, "flags", {
            configurable: !0,
            get: a(36)
        });
    }, {
        28: 28,
        36: 36,
        67: 67
    } ],
    215: [ function(a, b, c) {
        a(35)("match", 1, function(a, b, c) {
            return [ function(c) {
                "use strict";
                var d = a(this), e = void 0 == c ? void 0 : c[b];
                return void 0 !== e ? e.call(c, d) : new RegExp(c)[b](String(d));
            }, c ];
        });
    }, {
        35: 35
    } ],
    216: [ function(a, b, c) {
        a(35)("replace", 2, function(a, b, c) {
            return [ function(d, e) {
                "use strict";
                var f = a(this), g = void 0 == d ? void 0 : d[b];
                return void 0 !== g ? g.call(d, f, e) : c.call(String(f), d, e);
            }, c ];
        });
    }, {
        35: 35
    } ],
    217: [ function(a, b, c) {
        a(35)("search", 1, function(a, b, c) {
            return [ function(c) {
                "use strict";
                var d = a(this), e = void 0 == c ? void 0 : c[b];
                return void 0 !== e ? e.call(c, d) : new RegExp(c)[b](String(d));
            }, c ];
        });
    }, {
        35: 35
    } ],
    218: [ function(a, b, c) {
        a(35)("split", 2, function(b, c, d) {
            "use strict";
            var e = a(50), f = d, g = [].push, h = "length";
            if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[h] || 2 != "ab".split(/(?:ab)*/)[h] || 4 != ".".split(/(.?)(.?)/)[h] || ".".split(/()()/)[h] > 1 || "".split(/.?/)[h]) {
                var i = void 0 === /()??/.exec("")[1];
                d = function(a, b) {
                    var c = String(this);
                    if (void 0 === a && 0 === b) return [];
                    if (!e(a)) return f.call(c, a, b);
                    var d, j, k, l, m, n = [], o = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (a.sticky ? "y" : ""), p = 0, q = void 0 === b ? 4294967295 : b >>> 0, r = new RegExp(a.source, o + "g");
                    for (i || (d = new RegExp("^" + r.source + "$(?!\\s)", o)); (j = r.exec(c)) && !((k = j.index + j[0][h]) > p && (n.push(c.slice(p, j.index)), 
                    !i && j[h] > 1 && j[0].replace(d, function() {
                        for (m = 1; m < arguments[h] - 2; m++) void 0 === arguments[m] && (j[m] = void 0);
                    }), j[h] > 1 && j.index < c[h] && g.apply(n, j.slice(1)), l = j[0][h], p = k, n[h] >= q)); ) r.lastIndex === j.index && r.lastIndex++;
                    return p === c[h] ? !l && r.test("") || n.push("") : n.push(c.slice(p)), n[h] > q ? n.slice(0, q) : n;
                };
            } else "0".split(void 0, 0)[h] && (d = function(a, b) {
                return void 0 === a && 0 === b ? [] : f.call(this, a, b);
            });
            return [ function(a, e) {
                var f = b(this), g = void 0 == a ? void 0 : a[c];
                return void 0 !== g ? g.call(a, f, e) : d.call(String(f), a, e);
            }, d ];
        });
    }, {
        35: 35,
        50: 50
    } ],
    219: [ function(a, b, c) {
        "use strict";
        a(214);
        var d = a(7), e = a(36), f = a(28), g = /./.toString, h = function(b) {
            a(87)(RegExp.prototype, "toString", b, !0);
        };
        a(34)(function() {
            return "/a/b" != g.call({
                source: "a",
                flags: "b"
            });
        }) ? h(function() {
            var a = d(this);
            return "/".concat(a.source, "/", "flags" in a ? a.flags : !f && a instanceof RegExp ? e.call(a) : void 0);
        }) : "toString" != g.name && h(function() {
            return g.call(this);
        });
    }, {
        214: 214,
        28: 28,
        34: 34,
        36: 36,
        7: 7,
        87: 87
    } ],
    220: [ function(a, b, c) {
        "use strict";
        var d = a(19);
        b.exports = a(22)("Set", function(a) {
            return function() {
                return a(this, arguments.length > 0 ? arguments[0] : void 0);
            };
        }, {
            add: function(a) {
                return d.def(this, a = 0 === a ? 0 : a, a);
            }
        }, d);
    }, {
        19: 19,
        22: 22
    } ],
    221: [ function(a, b, c) {
        "use strict";
        a(99)("anchor", function(a) {
            return function(b) {
                return a(this, "a", "name", b);
            };
        });
    }, {
        99: 99
    } ],
    222: [ function(a, b, c) {
        "use strict";
        a(99)("big", function(a) {
            return function() {
                return a(this, "big", "", "");
            };
        });
    }, {
        99: 99
    } ],
    223: [ function(a, b, c) {
        "use strict";
        a(99)("blink", function(a) {
            return function() {
                return a(this, "blink", "", "");
            };
        });
    }, {
        99: 99
    } ],
    224: [ function(a, b, c) {
        "use strict";
        a(99)("bold", function(a) {
            return function() {
                return a(this, "b", "", "");
            };
        });
    }, {
        99: 99
    } ],
    225: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(97)(!1);
        d(d.P, "String", {
            codePointAt: function(a) {
                return e(this, a);
            }
        });
    }, {
        32: 32,
        97: 97
    } ],
    226: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(108), f = a(98), g = "".endsWith;
        d(d.P + d.F * a(33)("endsWith"), "String", {
            endsWith: function(a) {
                var b = f(this, a, "endsWith"), c = arguments.length > 1 ? arguments[1] : void 0, d = e(b.length), h = void 0 === c ? d : Math.min(e(c), d), i = String(a);
                return g ? g.call(b, i, h) : b.slice(h - i.length, h) === i;
            }
        });
    }, {
        108: 108,
        32: 32,
        33: 33,
        98: 98
    } ],
    227: [ function(a, b, c) {
        "use strict";
        a(99)("fixed", function(a) {
            return function() {
                return a(this, "tt", "", "");
            };
        });
    }, {
        99: 99
    } ],
    228: [ function(a, b, c) {
        "use strict";
        a(99)("fontcolor", function(a) {
            return function(b) {
                return a(this, "font", "color", b);
            };
        });
    }, {
        99: 99
    } ],
    229: [ function(a, b, c) {
        "use strict";
        a(99)("fontsize", function(a) {
            return function(b) {
                return a(this, "font", "size", b);
            };
        });
    }, {
        99: 99
    } ],
    230: [ function(a, b, c) {
        var d = a(32), e = a(105), f = String.fromCharCode, g = String.fromCodePoint;
        d(d.S + d.F * (!!g && 1 != g.length), "String", {
            fromCodePoint: function(a) {
                for (var b, c = [], d = arguments.length, g = 0; d > g; ) {
                    if (b = +arguments[g++], e(b, 1114111) !== b) throw RangeError(b + " is not a valid code point");
                    c.push(b < 65536 ? f(b) : f(55296 + ((b -= 65536) >> 10), b % 1024 + 56320));
                }
                return c.join("");
            }
        });
    }, {
        105: 105,
        32: 32
    } ],
    231: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(98);
        d(d.P + d.F * a(33)("includes"), "String", {
            includes: function(a) {
                return !!~e(this, a, "includes").indexOf(a, arguments.length > 1 ? arguments[1] : void 0);
            }
        });
    }, {
        32: 32,
        33: 33,
        98: 98
    } ],
    232: [ function(a, b, c) {
        "use strict";
        a(99)("italics", function(a) {
            return function() {
                return a(this, "i", "", "");
            };
        });
    }, {
        99: 99
    } ],
    233: [ function(a, b, c) {
        "use strict";
        var d = a(97)(!0);
        a(53)(String, "String", function(a) {
            this._t = String(a), this._i = 0;
        }, function() {
            var a, b = this._t, c = this._i;
            return c >= b.length ? {
                value: void 0,
                done: !0
            } : (a = d(b, c), this._i += a.length, {
                value: a,
                done: !1
            });
        });
    }, {
        53: 53,
        97: 97
    } ],
    234: [ function(a, b, c) {
        "use strict";
        a(99)("link", function(a) {
            return function(b) {
                return a(this, "a", "href", b);
            };
        });
    }, {
        99: 99
    } ],
    235: [ function(a, b, c) {
        var d = a(32), e = a(107), f = a(108);
        d(d.S, "String", {
            raw: function(a) {
                for (var b = e(a.raw), c = f(b.length), d = arguments.length, g = [], h = 0; c > h; ) g.push(String(b[h++])), 
                h < d && g.push(String(arguments[h]));
                return g.join("");
            }
        });
    }, {
        107: 107,
        108: 108,
        32: 32
    } ],
    236: [ function(a, b, c) {
        var d = a(32);
        d(d.P, "String", {
            repeat: a(101)
        });
    }, {
        101: 101,
        32: 32
    } ],
    237: [ function(a, b, c) {
        "use strict";
        a(99)("small", function(a) {
            return function() {
                return a(this, "small", "", "");
            };
        });
    }, {
        99: 99
    } ],
    238: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(108), f = a(98), g = "".startsWith;
        d(d.P + d.F * a(33)("startsWith"), "String", {
            startsWith: function(a) {
                var b = f(this, a, "startsWith"), c = e(Math.min(arguments.length > 1 ? arguments[1] : void 0, b.length)), d = String(a);
                return g ? g.call(b, d, c) : b.slice(c, c + d.length) === d;
            }
        });
    }, {
        108: 108,
        32: 32,
        33: 33,
        98: 98
    } ],
    239: [ function(a, b, c) {
        "use strict";
        a(99)("strike", function(a) {
            return function() {
                return a(this, "strike", "", "");
            };
        });
    }, {
        99: 99
    } ],
    240: [ function(a, b, c) {
        "use strict";
        a(99)("sub", function(a) {
            return function() {
                return a(this, "sub", "", "");
            };
        });
    }, {
        99: 99
    } ],
    241: [ function(a, b, c) {
        "use strict";
        a(99)("sup", function(a) {
            return function() {
                return a(this, "sup", "", "");
            };
        });
    }, {
        99: 99
    } ],
    242: [ function(a, b, c) {
        "use strict";
        a(102)("trim", function(a) {
            return function() {
                return a(this, 3);
            };
        });
    }, {
        102: 102
    } ],
    243: [ function(a, b, c) {
        "use strict";
        var d = a(38), e = a(39), f = a(28), g = a(32), h = a(87), i = a(62).KEY, j = a(34), k = a(94), l = a(92), m = a(114), n = a(117), o = a(116), p = a(115), q = a(57), r = a(31), s = a(47), t = a(7), u = a(107), v = a(110), w = a(85), x = a(66), y = a(71), z = a(70), A = a(67), B = a(76), C = z.f, D = A.f, E = y.f, F = d.Symbol, G = d.JSON, H = G && G.stringify, I = n("_hidden"), J = n("toPrimitive"), K = {}.propertyIsEnumerable, L = k("symbol-registry"), M = k("symbols"), N = k("op-symbols"), O = Object.prototype, P = "function" == typeof F, Q = d.QObject, R = !Q || !Q.prototype || !Q.prototype.findChild, S = f && j(function() {
            return 7 != x(D({}, "a", {
                get: function() {
                    return D(this, "a", {
                        value: 7
                    }).a;
                }
            })).a;
        }) ? function(a, b, c) {
            var d = C(O, b);
            d && delete O[b], D(a, b, c), d && a !== O && D(O, b, d);
        } : D, T = function(a) {
            var b = M[a] = x(F.prototype);
            return b._k = a, b;
        }, U = P && "symbol" == typeof F.iterator ? function(a) {
            return "symbol" == typeof a;
        } : function(a) {
            return a instanceof F;
        }, V = function(a, b, c) {
            return a === O && V(N, b, c), t(a), b = v(b, !0), t(c), e(M, b) ? (c.enumerable ? (e(a, I) && a[I][b] && (a[I][b] = !1), 
            c = x(c, {
                enumerable: w(0, !1)
            })) : (e(a, I) || D(a, I, w(1, {})), a[I][b] = !0), S(a, b, c)) : D(a, b, c);
        }, W = function(a, b) {
            t(a);
            for (var c, d = r(b = u(b)), e = 0, f = d.length; f > e; ) V(a, c = d[e++], b[c]);
            return a;
        }, X = function(a, b) {
            return void 0 === b ? x(a) : W(x(a), b);
        }, Y = function(a) {
            var b = K.call(this, a = v(a, !0));
            return !(this === O && e(M, a) && !e(N, a)) && (!(b || !e(this, a) || !e(M, a) || e(this, I) && this[I][a]) || b);
        }, Z = function(a, b) {
            if (a = u(a), b = v(b, !0), a !== O || !e(M, b) || e(N, b)) {
                var c = C(a, b);
                return !c || !e(M, b) || e(a, I) && a[I][b] || (c.enumerable = !0), c;
            }
        }, $ = function(a) {
            for (var b, c = E(u(a)), d = [], f = 0; c.length > f; ) e(M, b = c[f++]) || b == I || b == i || d.push(b);
            return d;
        }, _ = function(a) {
            for (var b, c = a === O, d = E(c ? N : u(a)), f = [], g = 0; d.length > g; ) !e(M, b = d[g++]) || c && !e(O, b) || f.push(M[b]);
            return f;
        };
        P || (F = function() {
            if (this instanceof F) throw TypeError("Symbol is not a constructor!");
            var a = m(arguments.length > 0 ? arguments[0] : void 0), b = function(c) {
                this === O && b.call(N, c), e(this, I) && e(this[I], a) && (this[I][a] = !1), S(this, a, w(1, c));
            };
            return f && R && S(O, a, {
                configurable: !0,
                set: b
            }), T(a);
        }, h(F.prototype, "toString", function() {
            return this._k;
        }), z.f = Z, A.f = V, a(72).f = y.f = $, a(77).f = Y, a(73).f = _, f && !a(58) && h(O, "propertyIsEnumerable", Y, !0), 
        o.f = function(a) {
            return T(n(a));
        }), g(g.G + g.W + g.F * !P, {
            Symbol: F
        });
        for (var aa = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ba = 0; aa.length > ba; ) n(aa[ba++]);
        for (var aa = B(n.store), ba = 0; aa.length > ba; ) p(aa[ba++]);
        g(g.S + g.F * !P, "Symbol", {
            "for": function(a) {
                return e(L, a += "") ? L[a] : L[a] = F(a);
            },
            keyFor: function(a) {
                if (U(a)) return q(L, a);
                throw TypeError(a + " is not a symbol!");
            },
            useSetter: function() {
                R = !0;
            },
            useSimple: function() {
                R = !1;
            }
        }), g(g.S + g.F * !P, "Object", {
            create: X,
            defineProperty: V,
            defineProperties: W,
            getOwnPropertyDescriptor: Z,
            getOwnPropertyNames: $,
            getOwnPropertySymbols: _
        }), G && g(g.S + g.F * (!P || j(function() {
            var a = F();
            return "[null]" != H([ a ]) || "{}" != H({
                a: a
            }) || "{}" != H(Object(a));
        })), "JSON", {
            stringify: function(a) {
                if (void 0 !== a && !U(a)) {
                    for (var b, c, d = [ a ], e = 1; arguments.length > e; ) d.push(arguments[e++]);
                    return b = d[1], "function" == typeof b && (c = b), !c && s(b) || (b = function(a, b) {
                        if (c && (b = c.call(this, a, b)), !U(b)) return b;
                    }), d[1] = b, H.apply(G, d);
                }
            }
        }), F.prototype[J] || a(40)(F.prototype, J, F.prototype.valueOf), l(F, "Symbol"), 
        l(Math, "Math", !0), l(d.JSON, "JSON", !0);
    }, {
        107: 107,
        110: 110,
        114: 114,
        115: 115,
        116: 116,
        117: 117,
        28: 28,
        31: 31,
        32: 32,
        34: 34,
        38: 38,
        39: 39,
        40: 40,
        47: 47,
        57: 57,
        58: 58,
        62: 62,
        66: 66,
        67: 67,
        7: 7,
        70: 70,
        71: 71,
        72: 72,
        73: 73,
        76: 76,
        77: 77,
        85: 85,
        87: 87,
        92: 92,
        94: 94
    } ],
    244: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(113), f = a(112), g = a(7), h = a(105), i = a(108), j = a(49), k = a(38).ArrayBuffer, l = a(95), m = f.ArrayBuffer, n = f.DataView, o = e.ABV && k.isView, p = m.prototype.slice, q = e.VIEW;
        d(d.G + d.W + d.F * (k !== m), {
            ArrayBuffer: m
        }), d(d.S + d.F * !e.CONSTR, "ArrayBuffer", {
            isView: function(a) {
                return o && o(a) || j(a) && q in a;
            }
        }), d(d.P + d.U + d.F * a(34)(function() {
            return !new m(2).slice(1, void 0).byteLength;
        }), "ArrayBuffer", {
            slice: function(a, b) {
                if (void 0 !== p && void 0 === b) return p.call(g(this), a);
                for (var c = g(this).byteLength, d = h(a, c), e = h(void 0 === b ? c : b, c), f = new (l(this, m))(i(e - d)), j = new n(this), k = new n(f), o = 0; d < e; ) k.setUint8(o++, j.getUint8(d++));
                return f;
            }
        }), a(91)("ArrayBuffer");
    }, {
        105: 105,
        108: 108,
        112: 112,
        113: 113,
        32: 32,
        34: 34,
        38: 38,
        49: 49,
        7: 7,
        91: 91,
        95: 95
    } ],
    245: [ function(a, b, c) {
        var d = a(32);
        d(d.G + d.W + d.F * !a(113).ABV, {
            DataView: a(112).DataView
        });
    }, {
        112: 112,
        113: 113,
        32: 32
    } ],
    246: [ function(a, b, c) {
        a(111)("Float32", 4, function(a) {
            return function(b, c, d) {
                return a(this, b, c, d);
            };
        });
    }, {
        111: 111
    } ],
    247: [ function(a, b, c) {
        a(111)("Float64", 8, function(a) {
            return function(b, c, d) {
                return a(this, b, c, d);
            };
        });
    }, {
        111: 111
    } ],
    248: [ function(a, b, c) {
        a(111)("Int16", 2, function(a) {
            return function(b, c, d) {
                return a(this, b, c, d);
            };
        });
    }, {
        111: 111
    } ],
    249: [ function(a, b, c) {
        a(111)("Int32", 4, function(a) {
            return function(b, c, d) {
                return a(this, b, c, d);
            };
        });
    }, {
        111: 111
    } ],
    250: [ function(a, b, c) {
        a(111)("Int8", 1, function(a) {
            return function(b, c, d) {
                return a(this, b, c, d);
            };
        });
    }, {
        111: 111
    } ],
    251: [ function(a, b, c) {
        a(111)("Uint16", 2, function(a) {
            return function(b, c, d) {
                return a(this, b, c, d);
            };
        });
    }, {
        111: 111
    } ],
    252: [ function(a, b, c) {
        a(111)("Uint32", 4, function(a) {
            return function(b, c, d) {
                return a(this, b, c, d);
            };
        });
    }, {
        111: 111
    } ],
    253: [ function(a, b, c) {
        a(111)("Uint8", 1, function(a) {
            return function(b, c, d) {
                return a(this, b, c, d);
            };
        });
    }, {
        111: 111
    } ],
    254: [ function(a, b, c) {
        a(111)("Uint8", 1, function(a) {
            return function(b, c, d) {
                return a(this, b, c, d);
            };
        }, !0);
    }, {
        111: 111
    } ],
    255: [ function(a, b, c) {
        "use strict";
        var d, e = a(12)(0), f = a(87), g = a(62), h = a(65), i = a(21), j = a(49), k = g.getWeak, l = Object.isExtensible, m = i.ufstore, n = {}, o = function(a) {
            return function() {
                return a(this, arguments.length > 0 ? arguments[0] : void 0);
            };
        }, p = {
            get: function(a) {
                if (j(a)) {
                    var b = k(a);
                    return !0 === b ? m(this).get(a) : b ? b[this._i] : void 0;
                }
            },
            set: function(a, b) {
                return i.def(this, a, b);
            }
        }, q = b.exports = a(22)("WeakMap", o, p, i, !0, !0);
        7 != new q().set((Object.freeze || Object)(n), 7).get(n) && (d = i.getConstructor(o), 
        h(d.prototype, p), g.NEED = !0, e([ "delete", "has", "get", "set" ], function(a) {
            var b = q.prototype, c = b[a];
            f(b, a, function(b, e) {
                if (j(b) && !l(b)) {
                    this._f || (this._f = new d());
                    var f = this._f[a](b, e);
                    return "set" == a ? this : f;
                }
                return c.call(this, b, e);
            });
        }));
    }, {
        12: 12,
        21: 21,
        22: 22,
        49: 49,
        62: 62,
        65: 65,
        87: 87
    } ],
    256: [ function(a, b, c) {
        "use strict";
        var d = a(21);
        a(22)("WeakSet", function(a) {
            return function() {
                return a(this, arguments.length > 0 ? arguments[0] : void 0);
            };
        }, {
            add: function(a) {
                return d.def(this, a, !0);
            }
        }, d, !1, !0);
    }, {
        21: 21,
        22: 22
    } ],
    257: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(11)(!0);
        d(d.P, "Array", {
            includes: function(a) {
                return e(this, a, arguments.length > 1 ? arguments[1] : void 0);
            }
        }), a(5)("includes");
    }, {
        11: 11,
        32: 32,
        5: 5
    } ],
    258: [ function(a, b, c) {
        var d = a(32), e = a(64)(), f = a(38).process, g = "process" == a(18)(f);
        d(d.G, {
            asap: function(a) {
                var b = g && f.domain;
                e(b ? b.bind(a) : a);
            }
        });
    }, {
        18: 18,
        32: 32,
        38: 38,
        64: 64
    } ],
    259: [ function(a, b, c) {
        var d = a(32), e = a(18);
        d(d.S, "Error", {
            isError: function(a) {
                return "Error" === e(a);
            }
        });
    }, {
        18: 18,
        32: 32
    } ],
    260: [ function(a, b, c) {
        var d = a(32);
        d(d.P + d.R, "Map", {
            toJSON: a(20)("Map")
        });
    }, {
        20: 20,
        32: 32
    } ],
    261: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Math", {
            iaddh: function(a, b, c, d) {
                var e = a >>> 0, f = b >>> 0, g = c >>> 0;
                return f + (d >>> 0) + ((e & g | (e | g) & ~(e + g >>> 0)) >>> 31) | 0;
            }
        });
    }, {
        32: 32
    } ],
    262: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Math", {
            imulh: function(a, b) {
                var c = +a, d = +b, e = 65535 & c, f = 65535 & d, g = c >> 16, h = d >> 16, i = (g * f >>> 0) + (e * f >>> 16);
                return g * h + (i >> 16) + ((e * h >>> 0) + (65535 & i) >> 16);
            }
        });
    }, {
        32: 32
    } ],
    263: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Math", {
            isubh: function(a, b, c, d) {
                var e = a >>> 0, f = b >>> 0, g = c >>> 0;
                return f - (d >>> 0) - ((~e & g | ~(e ^ g) & e - g >>> 0) >>> 31) | 0;
            }
        });
    }, {
        32: 32
    } ],
    264: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "Math", {
            umulh: function(a, b) {
                var c = +a, d = +b, e = 65535 & c, f = 65535 & d, g = c >>> 16, h = d >>> 16, i = (g * f >>> 0) + (e * f >>> 16);
                return g * h + (i >>> 16) + ((e * h >>> 0) + (65535 & i) >>> 16);
            }
        });
    }, {
        32: 32
    } ],
    265: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(109), f = a(3), g = a(67);
        a(28) && d(d.P + a(69), "Object", {
            __defineGetter__: function(a, b) {
                g.f(e(this), a, {
                    get: f(b),
                    enumerable: !0,
                    configurable: !0
                });
            }
        });
    }, {
        109: 109,
        28: 28,
        3: 3,
        32: 32,
        67: 67,
        69: 69
    } ],
    266: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(109), f = a(3), g = a(67);
        a(28) && d(d.P + a(69), "Object", {
            __defineSetter__: function(a, b) {
                g.f(e(this), a, {
                    set: f(b),
                    enumerable: !0,
                    configurable: !0
                });
            }
        });
    }, {
        109: 109,
        28: 28,
        3: 3,
        32: 32,
        67: 67,
        69: 69
    } ],
    267: [ function(a, b, c) {
        var d = a(32), e = a(79)(!0);
        d(d.S, "Object", {
            entries: function(a) {
                return e(a);
            }
        });
    }, {
        32: 32,
        79: 79
    } ],
    268: [ function(a, b, c) {
        var d = a(32), e = a(80), f = a(107), g = a(70), h = a(24);
        d(d.S, "Object", {
            getOwnPropertyDescriptors: function(a) {
                for (var b, c = f(a), d = g.f, i = e(c), j = {}, k = 0; i.length > k; ) h(j, b = i[k++], d(c, b));
                return j;
            }
        });
    }, {
        107: 107,
        24: 24,
        32: 32,
        70: 70,
        80: 80
    } ],
    269: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(109), f = a(110), g = a(74), h = a(70).f;
        a(28) && d(d.P + a(69), "Object", {
            __lookupGetter__: function(a) {
                var b, c = e(this), d = f(a, !0);
                do {
                    if (b = h(c, d)) return b.get;
                } while (c = g(c));
            }
        });
    }, {
        109: 109,
        110: 110,
        28: 28,
        32: 32,
        69: 69,
        70: 70,
        74: 74
    } ],
    270: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(109), f = a(110), g = a(74), h = a(70).f;
        a(28) && d(d.P + a(69), "Object", {
            __lookupSetter__: function(a) {
                var b, c = e(this), d = f(a, !0);
                do {
                    if (b = h(c, d)) return b.set;
                } while (c = g(c));
            }
        });
    }, {
        109: 109,
        110: 110,
        28: 28,
        32: 32,
        69: 69,
        70: 70,
        74: 74
    } ],
    271: [ function(a, b, c) {
        var d = a(32), e = a(79)(!1);
        d(d.S, "Object", {
            values: function(a) {
                return e(a);
            }
        });
    }, {
        32: 32,
        79: 79
    } ],
    272: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(38), f = a(23), g = a(64)(), h = a(117)("observable"), i = a(3), j = a(7), k = a(6), l = a(86), m = a(40), n = a(37), o = n.RETURN, p = function(a) {
            return null == a ? void 0 : i(a);
        }, q = function(a) {
            var b = a._c;
            b && (a._c = void 0, b());
        }, r = function(a) {
            return void 0 === a._o;
        }, s = function(a) {
            r(a) || (a._o = void 0, q(a));
        }, t = function(a, b) {
            j(a), this._c = void 0, this._o = a, a = new u(this);
            try {
                var c = b(a), d = c;
                null != c && ("function" == typeof c.unsubscribe ? c = function() {
                    d.unsubscribe();
                } : i(c), this._c = c);
            } catch (b) {
                return void a.error(b);
            }
            r(this) && q(this);
        };
        t.prototype = l({}, {
            unsubscribe: function() {
                s(this);
            }
        });
        var u = function(a) {
            this._s = a;
        };
        u.prototype = l({}, {
            next: function(a) {
                var b = this._s;
                if (!r(b)) {
                    var c = b._o;
                    try {
                        var d = p(c.next);
                        if (d) return d.call(c, a);
                    } catch (a) {
                        try {
                            s(b);
                        } finally {
                            throw a;
                        }
                    }
                }
            },
            error: function(a) {
                var b = this._s;
                if (r(b)) throw a;
                var c = b._o;
                b._o = void 0;
                try {
                    var d = p(c.error);
                    if (!d) throw a;
                    a = d.call(c, a);
                } catch (a) {
                    try {
                        q(b);
                    } finally {
                        throw a;
                    }
                }
                return q(b), a;
            },
            complete: function(a) {
                var b = this._s;
                if (!r(b)) {
                    var c = b._o;
                    b._o = void 0;
                    try {
                        var d = p(c.complete);
                        a = d ? d.call(c, a) : void 0;
                    } catch (a) {
                        try {
                            q(b);
                        } finally {
                            throw a;
                        }
                    }
                    return q(b), a;
                }
            }
        });
        var v = function(a) {
            k(this, v, "Observable", "_f")._f = i(a);
        };
        l(v.prototype, {
            subscribe: function(a) {
                return new t(a, this._f);
            },
            forEach: function(a) {
                var b = this;
                return new (f.Promise || e.Promise)(function(c, d) {
                    i(a);
                    var e = b.subscribe({
                        next: function(b) {
                            try {
                                return a(b);
                            } catch (a) {
                                d(a), e.unsubscribe();
                            }
                        },
                        error: d,
                        complete: c
                    });
                });
            }
        }), l(v, {
            from: function(a) {
                var b = "function" == typeof this ? this : v, c = p(j(a)[h]);
                if (c) {
                    var d = j(c.call(a));
                    return d.constructor === b ? d : new b(function(a) {
                        return d.subscribe(a);
                    });
                }
                return new b(function(b) {
                    var c = !1;
                    return g(function() {
                        if (!c) {
                            try {
                                if (n(a, !1, function(a) {
                                    if (b.next(a), c) return o;
                                }) === o) return;
                            } catch (a) {
                                if (c) throw a;
                                return void b.error(a);
                            }
                            b.complete();
                        }
                    }), function() {
                        c = !0;
                    };
                });
            },
            of: function() {
                for (var a = 0, b = arguments.length, c = Array(b); a < b; ) c[a] = arguments[a++];
                return new ("function" == typeof this ? this : v)(function(a) {
                    var b = !1;
                    return g(function() {
                        if (!b) {
                            for (var d = 0; d < c.length; ++d) if (a.next(c[d]), b) return;
                            a.complete();
                        }
                    }), function() {
                        b = !0;
                    };
                });
            }
        }), m(v.prototype, h, function() {
            return this;
        }), d(d.G, {
            Observable: v
        }), a(91)("Observable");
    }, {
        117: 117,
        23: 23,
        3: 3,
        32: 32,
        37: 37,
        38: 38,
        40: 40,
        6: 6,
        64: 64,
        7: 7,
        86: 86,
        91: 91
    } ],
    273: [ function(a, b, c) {
        var d = a(63), e = a(7), f = d.key, g = d.set;
        d.exp({
            defineMetadata: function(a, b, c, d) {
                g(a, b, e(c), f(d));
            }
        });
    }, {
        63: 63,
        7: 7
    } ],
    274: [ function(a, b, c) {
        var d = a(63), e = a(7), f = d.key, g = d.map, h = d.store;
        d.exp({
            deleteMetadata: function(a, b) {
                var c = arguments.length < 3 ? void 0 : f(arguments[2]), d = g(e(b), c, !1);
                if (void 0 === d || !d.delete(a)) return !1;
                if (d.size) return !0;
                var i = h.get(b);
                return i.delete(c), !!i.size || h.delete(b);
            }
        });
    }, {
        63: 63,
        7: 7
    } ],
    275: [ function(a, b, c) {
        var d = a(220), e = a(10), f = a(63), g = a(7), h = a(74), i = f.keys, j = f.key, k = function(a, b) {
            var c = i(a, b), f = h(a);
            if (null === f) return c;
            var g = k(f, b);
            return g.length ? c.length ? e(new d(c.concat(g))) : g : c;
        };
        f.exp({
            getMetadataKeys: function(a) {
                return k(g(a), arguments.length < 2 ? void 0 : j(arguments[1]));
            }
        });
    }, {
        10: 10,
        220: 220,
        63: 63,
        7: 7,
        74: 74
    } ],
    276: [ function(a, b, c) {
        var d = a(63), e = a(7), f = a(74), g = d.has, h = d.get, i = d.key, j = function(a, b, c) {
            if (g(a, b, c)) return h(a, b, c);
            var d = f(b);
            return null !== d ? j(a, d, c) : void 0;
        };
        d.exp({
            getMetadata: function(a, b) {
                return j(a, e(b), arguments.length < 3 ? void 0 : i(arguments[2]));
            }
        });
    }, {
        63: 63,
        7: 7,
        74: 74
    } ],
    277: [ function(a, b, c) {
        var d = a(63), e = a(7), f = d.keys, g = d.key;
        d.exp({
            getOwnMetadataKeys: function(a) {
                return f(e(a), arguments.length < 2 ? void 0 : g(arguments[1]));
            }
        });
    }, {
        63: 63,
        7: 7
    } ],
    278: [ function(a, b, c) {
        var d = a(63), e = a(7), f = d.get, g = d.key;
        d.exp({
            getOwnMetadata: function(a, b) {
                return f(a, e(b), arguments.length < 3 ? void 0 : g(arguments[2]));
            }
        });
    }, {
        63: 63,
        7: 7
    } ],
    279: [ function(a, b, c) {
        var d = a(63), e = a(7), f = a(74), g = d.has, h = d.key, i = function(a, b, c) {
            if (g(a, b, c)) return !0;
            var d = f(b);
            return null !== d && i(a, d, c);
        };
        d.exp({
            hasMetadata: function(a, b) {
                return i(a, e(b), arguments.length < 3 ? void 0 : h(arguments[2]));
            }
        });
    }, {
        63: 63,
        7: 7,
        74: 74
    } ],
    280: [ function(a, b, c) {
        var d = a(63), e = a(7), f = d.has, g = d.key;
        d.exp({
            hasOwnMetadata: function(a, b) {
                return f(a, e(b), arguments.length < 3 ? void 0 : g(arguments[2]));
            }
        });
    }, {
        63: 63,
        7: 7
    } ],
    281: [ function(a, b, c) {
        var d = a(63), e = a(7), f = a(3), g = d.key, h = d.set;
        d.exp({
            metadata: function(a, b) {
                return function(c, d) {
                    h(a, b, (void 0 !== d ? e : f)(c), g(d));
                };
            }
        });
    }, {
        3: 3,
        63: 63,
        7: 7
    } ],
    282: [ function(a, b, c) {
        var d = a(32);
        d(d.P + d.R, "Set", {
            toJSON: a(20)("Set")
        });
    }, {
        20: 20,
        32: 32
    } ],
    283: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(97)(!0);
        d(d.P, "String", {
            at: function(a) {
                return e(this, a);
            }
        });
    }, {
        32: 32,
        97: 97
    } ],
    284: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(27), f = a(108), g = a(50), h = a(36), i = RegExp.prototype, j = function(a, b) {
            this._r = a, this._s = b;
        };
        a(52)(j, "RegExp String", function() {
            var a = this._r.exec(this._s);
            return {
                value: a,
                done: null === a
            };
        }), d(d.P, "String", {
            matchAll: function(a) {
                if (e(this), !g(a)) throw TypeError(a + " is not a regexp!");
                var b = String(this), c = "flags" in i ? String(a.flags) : h.call(a), d = new RegExp(a.source, ~c.indexOf("g") ? c : "g" + c);
                return d.lastIndex = f(a.lastIndex), new j(d, b);
            }
        });
    }, {
        108: 108,
        27: 27,
        32: 32,
        36: 36,
        50: 50,
        52: 52
    } ],
    285: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(100);
        d(d.P, "String", {
            padEnd: function(a) {
                return e(this, a, arguments.length > 1 ? arguments[1] : void 0, !1);
            }
        });
    }, {
        100: 100,
        32: 32
    } ],
    286: [ function(a, b, c) {
        "use strict";
        var d = a(32), e = a(100);
        d(d.P, "String", {
            padStart: function(a) {
                return e(this, a, arguments.length > 1 ? arguments[1] : void 0, !0);
            }
        });
    }, {
        100: 100,
        32: 32
    } ],
    287: [ function(a, b, c) {
        "use strict";
        a(102)("trimLeft", function(a) {
            return function() {
                return a(this, 1);
            };
        }, "trimStart");
    }, {
        102: 102
    } ],
    288: [ function(a, b, c) {
        "use strict";
        a(102)("trimRight", function(a) {
            return function() {
                return a(this, 2);
            };
        }, "trimEnd");
    }, {
        102: 102
    } ],
    289: [ function(a, b, c) {
        a(115)("asyncIterator");
    }, {
        115: 115
    } ],
    290: [ function(a, b, c) {
        a(115)("observable");
    }, {
        115: 115
    } ],
    291: [ function(a, b, c) {
        var d = a(32);
        d(d.S, "System", {
            global: a(38)
        });
    }, {
        32: 32,
        38: 38
    } ],
    292: [ function(a, b, c) {
        for (var d = a(130), e = a(87), f = a(38), g = a(40), h = a(56), i = a(117), j = i("iterator"), k = i("toStringTag"), l = h.Array, m = [ "NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList" ], n = 0; n < 5; n++) {
            var o, p = m[n], q = f[p], r = q && q.prototype;
            if (r) {
                r[j] || g(r, j, l), r[k] || g(r, k, p), h[p] = l;
                for (o in d) r[o] || e(r, o, d[o], !0);
            }
        }
    }, {
        117: 117,
        130: 130,
        38: 38,
        40: 40,
        56: 56,
        87: 87
    } ],
    293: [ function(a, b, c) {
        var d = a(32), e = a(104);
        d(d.G + d.B, {
            setImmediate: e.set,
            clearImmediate: e.clear
        });
    }, {
        104: 104,
        32: 32
    } ],
    294: [ function(a, b, c) {
        var d = a(38), e = a(32), f = a(44), g = a(83), h = d.navigator, i = !!h && /MSIE .\./.test(h.userAgent), j = function(a) {
            return i ? function(b, c) {
                return a(f(g, [].slice.call(arguments, 2), "function" == typeof b ? b : Function(b)), c);
            } : a;
        };
        e(e.G + e.B + e.F * i, {
            setTimeout: j(d.setTimeout),
            setInterval: j(d.setInterval)
        });
    }, {
        32: 32,
        38: 38,
        44: 44,
        83: 83
    } ],
    295: [ function(a, b, c) {
        a(243), a(180), a(182), a(181), a(184), a(186), a(191), a(185), a(183), a(193), 
        a(192), a(188), a(189), a(187), a(179), a(190), a(194), a(195), a(146), a(148), 
        a(147), a(197), a(196), a(167), a(177), a(178), a(168), a(169), a(170), a(171), 
        a(172), a(173), a(174), a(175), a(176), a(150), a(151), a(152), a(153), a(154), 
        a(155), a(156), a(157), a(158), a(159), a(160), a(161), a(162), a(163), a(164), 
        a(165), a(166), a(230), a(235), a(242), a(233), a(225), a(226), a(231), a(236), 
        a(238), a(221), a(222), a(223), a(224), a(227), a(228), a(229), a(232), a(234), 
        a(237), a(239), a(240), a(241), a(141), a(143), a(142), a(145), a(144), a(129), 
        a(127), a(134), a(131), a(137), a(139), a(126), a(133), a(123), a(138), a(121), 
        a(136), a(135), a(128), a(132), a(120), a(122), a(125), a(124), a(140), a(130), 
        a(213), a(219), a(214), a(215), a(216), a(217), a(218), a(198), a(149), a(220), 
        a(255), a(256), a(244), a(245), a(250), a(253), a(254), a(248), a(251), a(249), 
        a(252), a(246), a(247), a(199), a(200), a(201), a(202), a(203), a(206), a(204), 
        a(205), a(207), a(208), a(209), a(210), a(212), a(211), a(257), a(283), a(286), 
        a(285), a(287), a(288), a(284), a(289), a(290), a(268), a(271), a(267), a(265), 
        a(266), a(269), a(270), a(260), a(282), a(291), a(259), a(261), a(263), a(262), 
        a(264), a(273), a(274), a(276), a(275), a(278), a(277), a(279), a(280), a(281), 
        a(258), a(272), a(294), a(293), a(292), b.exports = a(23);
    }, {
        120: 120,
        121: 121,
        122: 122,
        123: 123,
        124: 124,
        125: 125,
        126: 126,
        127: 127,
        128: 128,
        129: 129,
        130: 130,
        131: 131,
        132: 132,
        133: 133,
        134: 134,
        135: 135,
        136: 136,
        137: 137,
        138: 138,
        139: 139,
        140: 140,
        141: 141,
        142: 142,
        143: 143,
        144: 144,
        145: 145,
        146: 146,
        147: 147,
        148: 148,
        149: 149,
        150: 150,
        151: 151,
        152: 152,
        153: 153,
        154: 154,
        155: 155,
        156: 156,
        157: 157,
        158: 158,
        159: 159,
        160: 160,
        161: 161,
        162: 162,
        163: 163,
        164: 164,
        165: 165,
        166: 166,
        167: 167,
        168: 168,
        169: 169,
        170: 170,
        171: 171,
        172: 172,
        173: 173,
        174: 174,
        175: 175,
        176: 176,
        177: 177,
        178: 178,
        179: 179,
        180: 180,
        181: 181,
        182: 182,
        183: 183,
        184: 184,
        185: 185,
        186: 186,
        187: 187,
        188: 188,
        189: 189,
        190: 190,
        191: 191,
        192: 192,
        193: 193,
        194: 194,
        195: 195,
        196: 196,
        197: 197,
        198: 198,
        199: 199,
        200: 200,
        201: 201,
        202: 202,
        203: 203,
        204: 204,
        205: 205,
        206: 206,
        207: 207,
        208: 208,
        209: 209,
        210: 210,
        211: 211,
        212: 212,
        213: 213,
        214: 214,
        215: 215,
        216: 216,
        217: 217,
        218: 218,
        219: 219,
        220: 220,
        221: 221,
        222: 222,
        223: 223,
        224: 224,
        225: 225,
        226: 226,
        227: 227,
        228: 228,
        229: 229,
        23: 23,
        230: 230,
        231: 231,
        232: 232,
        233: 233,
        234: 234,
        235: 235,
        236: 236,
        237: 237,
        238: 238,
        239: 239,
        240: 240,
        241: 241,
        242: 242,
        243: 243,
        244: 244,
        245: 245,
        246: 246,
        247: 247,
        248: 248,
        249: 249,
        250: 250,
        251: 251,
        252: 252,
        253: 253,
        254: 254,
        255: 255,
        256: 256,
        257: 257,
        258: 258,
        259: 259,
        260: 260,
        261: 261,
        262: 262,
        263: 263,
        264: 264,
        265: 265,
        266: 266,
        267: 267,
        268: 268,
        269: 269,
        270: 270,
        271: 271,
        272: 272,
        273: 273,
        274: 274,
        275: 275,
        276: 276,
        277: 277,
        278: 278,
        279: 279,
        280: 280,
        281: 281,
        282: 282,
        283: 283,
        284: 284,
        285: 285,
        286: 286,
        287: 287,
        288: 288,
        289: 289,
        290: 290,
        291: 291,
        292: 292,
        293: 293,
        294: 294
    } ],
    296: [ function(a, b, c) {
        (function(a) {
            !function(a) {
                "use strict";
                function c(a, b, c, d) {
                    var f = b && b.prototype instanceof e ? b : e, g = Object.create(f.prototype), h = new m(d || []);
                    return g._invoke = j(a, c, h), g;
                }
                function d(a, b, c) {
                    try {
                        return {
                            type: "normal",
                            arg: a.call(b, c)
                        };
                    } catch (a) {
                        return {
                            type: "throw",
                            arg: a
                        };
                    }
                }
                function e() {}
                function f() {}
                function g() {}
                function h(a) {
                    [ "next", "throw", "return" ].forEach(function(b) {
                        a[b] = function(a) {
                            return this._invoke(b, a);
                        };
                    });
                }
                function i(a) {
                    function b(c, e, f, g) {
                        var h = d(a[c], a, e);
                        if ("throw" !== h.type) {
                            var i = h.arg, j = i.value;
                            return j && "object" == typeof j && r.call(j, "__await") ? Promise.resolve(j.__await).then(function(a) {
                                b("next", a, f, g);
                            }, function(a) {
                                b("throw", a, f, g);
                            }) : Promise.resolve(j).then(function(a) {
                                i.value = a, f(i);
                            }, g);
                        }
                        g(h.arg);
                    }
                    function c(a, c) {
                        function d() {
                            return new Promise(function(d, e) {
                                b(a, c, d, e);
                            });
                        }
                        return e = e ? e.then(d, d) : d();
                    }
                    "object" == typeof process && process.domain && (b = process.domain.bind(b));
                    var e;
                    this._invoke = c;
                }
                function j(a, b, c) {
                    var e = x;
                    return function(f, g) {
                        if (e === z) throw new Error("Generator is already running");
                        if (e === A) {
                            if ("throw" === f) throw g;
                            return o();
                        }
                        for (;;) {
                            var h = c.delegate;
                            if (h) {
                                if ("return" === f || "throw" === f && h.iterator[f] === p) {
                                    c.delegate = null;
                                    var i = h.iterator.return;
                                    if (i) {
                                        var j = d(i, h.iterator, g);
                                        if ("throw" === j.type) {
                                            f = "throw", g = j.arg;
                                            continue;
                                        }
                                    }
                                    if ("return" === f) continue;
                                }
                                var j = d(h.iterator[f], h.iterator, g);
                                if ("throw" === j.type) {
                                    c.delegate = null, f = "throw", g = j.arg;
                                    continue;
                                }
                                f = "next", g = p;
                                var k = j.arg;
                                if (!k.done) return e = y, k;
                                c[h.resultName] = k.value, c.next = h.nextLoc, c.delegate = null;
                            }
                            if ("next" === f) c.sent = c._sent = g; else if ("throw" === f) {
                                if (e === x) throw e = A, g;
                                c.dispatchException(g) && (f = "next", g = p);
                            } else "return" === f && c.abrupt("return", g);
                            e = z;
                            var j = d(a, b, c);
                            if ("normal" === j.type) {
                                e = c.done ? A : y;
                                var k = {
                                    value: j.arg,
                                    done: c.done
                                };
                                if (j.arg !== B) return k;
                                c.delegate && "next" === f && (g = p);
                            } else "throw" === j.type && (e = A, f = "throw", g = j.arg);
                        }
                    };
                }
                function k(a) {
                    var b = {
                        tryLoc: a[0]
                    };
                    1 in a && (b.catchLoc = a[1]), 2 in a && (b.finallyLoc = a[2], b.afterLoc = a[3]), 
                    this.tryEntries.push(b);
                }
                function l(a) {
                    var b = a.completion || {};
                    b.type = "normal", delete b.arg, a.completion = b;
                }
                function m(a) {
                    this.tryEntries = [ {
                        tryLoc: "root"
                    } ], a.forEach(k, this), this.reset(!0);
                }
                function n(a) {
                    if (a) {
                        var b = a[t];
                        if (b) return b.call(a);
                        if ("function" == typeof a.next) return a;
                        if (!isNaN(a.length)) {
                            var c = -1, d = function b() {
                                for (;++c < a.length; ) if (r.call(a, c)) return b.value = a[c], b.done = !1, b;
                                return b.value = p, b.done = !0, b;
                            };
                            return d.next = d;
                        }
                    }
                    return {
                        next: o
                    };
                }
                function o() {
                    return {
                        value: p,
                        done: !0
                    };
                }
                var p, q = Object.prototype, r = q.hasOwnProperty, s = "function" == typeof Symbol ? Symbol : {}, t = s.iterator || "@@iterator", u = s.toStringTag || "@@toStringTag", v = "object" == typeof b, w = a.regeneratorRuntime;
                if (w) return void (v && (b.exports = w));
                w = a.regeneratorRuntime = v ? b.exports : {}, w.wrap = c;
                var x = "suspendedStart", y = "suspendedYield", z = "executing", A = "completed", B = {}, C = {};
                C[t] = function() {
                    return this;
                };
                var D = Object.getPrototypeOf, E = D && D(D(n([])));
                E && E !== q && r.call(E, t) && (C = E);
                var F = g.prototype = e.prototype = Object.create(C);
                f.prototype = F.constructor = g, g.constructor = f, g[u] = f.displayName = "GeneratorFunction", 
                w.isGeneratorFunction = function(a) {
                    var b = "function" == typeof a && a.constructor;
                    return !!b && (b === f || "GeneratorFunction" === (b.displayName || b.name));
                }, w.mark = function(a) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(a, g) : (a.__proto__ = g, u in a || (a[u] = "GeneratorFunction")), 
                    a.prototype = Object.create(F), a;
                }, w.awrap = function(a) {
                    return {
                        __await: a
                    };
                }, h(i.prototype), w.AsyncIterator = i, w.async = function(a, b, d, e) {
                    var f = new i(c(a, b, d, e));
                    return w.isGeneratorFunction(b) ? f : f.next().then(function(a) {
                        return a.done ? a.value : f.next();
                    });
                }, h(F), F[u] = "Generator", F.toString = function() {
                    return "[object Generator]";
                }, w.keys = function(a) {
                    var b = [];
                    for (var c in a) b.push(c);
                    return b.reverse(), function c() {
                        for (;b.length; ) {
                            var d = b.pop();
                            if (d in a) return c.value = d, c.done = !1, c;
                        }
                        return c.done = !0, c;
                    };
                }, w.values = n, m.prototype = {
                    constructor: m,
                    reset: function(a) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = p, this.done = !1, this.delegate = null, 
                        this.tryEntries.forEach(l), !a) for (var b in this) "t" === b.charAt(0) && r.call(this, b) && !isNaN(+b.slice(1)) && (this[b] = p);
                    },
                    stop: function() {
                        this.done = !0;
                        var a = this.tryEntries[0], b = a.completion;
                        if ("throw" === b.type) throw b.arg;
                        return this.rval;
                    },
                    dispatchException: function(a) {
                        function b(b, d) {
                            return f.type = "throw", f.arg = a, c.next = b, !!d;
                        }
                        if (this.done) throw a;
                        for (var c = this, d = this.tryEntries.length - 1; d >= 0; --d) {
                            var e = this.tryEntries[d], f = e.completion;
                            if ("root" === e.tryLoc) return b("end");
                            if (e.tryLoc <= this.prev) {
                                var g = r.call(e, "catchLoc"), h = r.call(e, "finallyLoc");
                                if (g && h) {
                                    if (this.prev < e.catchLoc) return b(e.catchLoc, !0);
                                    if (this.prev < e.finallyLoc) return b(e.finallyLoc);
                                } else if (g) {
                                    if (this.prev < e.catchLoc) return b(e.catchLoc, !0);
                                } else {
                                    if (!h) throw new Error("try statement without catch or finally");
                                    if (this.prev < e.finallyLoc) return b(e.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(a, b) {
                        for (var c = this.tryEntries.length - 1; c >= 0; --c) {
                            var d = this.tryEntries[c];
                            if (d.tryLoc <= this.prev && r.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                                var e = d;
                                break;
                            }
                        }
                        e && ("break" === a || "continue" === a) && e.tryLoc <= b && b <= e.finallyLoc && (e = null);
                        var f = e ? e.completion : {};
                        return f.type = a, f.arg = b, e ? this.next = e.finallyLoc : this.complete(f), B;
                    },
                    complete: function(a, b) {
                        if ("throw" === a.type) throw a.arg;
                        "break" === a.type || "continue" === a.type ? this.next = a.arg : "return" === a.type ? (this.rval = a.arg, 
                        this.next = "end") : "normal" === a.type && b && (this.next = b);
                    },
                    finish: function(a) {
                        for (var b = this.tryEntries.length - 1; b >= 0; --b) {
                            var c = this.tryEntries[b];
                            if (c.finallyLoc === a) return this.complete(c.completion, c.afterLoc), l(c), B;
                        }
                    },
                    "catch": function(a) {
                        for (var b = this.tryEntries.length - 1; b >= 0; --b) {
                            var c = this.tryEntries[b];
                            if (c.tryLoc === a) {
                                var d = c.completion;
                                if ("throw" === d.type) {
                                    var e = d.arg;
                                    l(c);
                                }
                                return e;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(a, b, c) {
                        return this.delegate = {
                            iterator: n(a),
                            resultName: b,
                            nextLoc: c
                        }, B;
                    }
                };
            }("object" == typeof a ? a : "object" == typeof window ? window : "object" == typeof self ? self : this);
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {} ]
}, {}, [ 1 ]), function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j;
            }
            var k = c[g] = {
                exports: {}
            };
            b[g][0].call(k.exports, function(a) {
                var c = b[g][1][a];
                return e(c || a);
            }, k, k.exports, a, b, c, d);
        }
        return c[g].exports;
    }
    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e;
}({
    1: [ function(a, b, c) {
        (function(b) {
            function d(a) {
                a = a.replace(/[\ufe00-\ufe0f]/g, "");
                for (var b = [], d = 0; d < a.length; d++) b.push(("0000" + a.charCodeAt(d).toString(16)).slice(-4));
                return c.basePath.replace(/\/$/, "") + "/" + b.join("-") + ".png";
            }
            var e = a("path");
            c.imageDir = e.join(b, "images"), c.basePath = c.imageDir, c.regex = a("./regex"), 
            c.nativeSupport = function() {
                if ("undefined" == typeof document) return !1;
                var a = document.createElement("canvas");
                if (!a.getContext) return !1;
                var b = a.getContext("2d");
                return b.textBaseline = "top", b.font = "32px sans-serif", b.fillText("😃", 0, 0), 
                0 !== b.getImageData(16, 16, 1, 1).data[0];
            }();
            var f = new RegExp("^(" + c.regex.toString().slice(1, -2) + ")$");
            c.getImage = function(a) {
                return f.test(a) ? d(a) : null;
            }, c.replace = function(a) {
                return a = "" + a, c.nativeSupport ? a : a.replace(c.regex, function(a) {
                    return '<img class="emoji" src="' + d(a) + '" alt="' + a + '">';
                });
            };
        }).call(this, "/");
    }, {
        "./regex": 3,
        path: 4
    } ],
    2: [ function(a, b, c) {
        window.emoji = window.emoji || a("./index.js");
    }, {
        "./index.js": 1
    } ],
    3: [ function(a, b, c) {
        b.exports = /(\uD83C[\uDDE6-\uDDFF])?(\u00a9|\u00ae|[\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2640\u2642\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303d\u3297\u3299]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|[#*0-9]\uFE0F\u20E3)\uFE0F?(\ud83c[\udffb-\udfff])?(\u200d(\u00a9|\u00ae|\u2695\uFE0F|\uD83C\uDF93|\uD83C\uDFEB|\u2696\uFE0F|\uD83C\uDF3E|\uD83C\uDF73|\uD83D\uDD27|\uD83C\uDFED|\uD83D\uDCBC|\uD83D\uDD2C|\uD83D\uDCBB|\uD83C\uDFA4|\uD83C\uDFA8|\u2708\uFE0F|\uD83D\uDE80|\uD83D\uDC8B|\uD83D\uDE92|\u2764\uFE0F|\uD83D\uDC66|\uD83D\uDC67|\uD83D\uDC68|\uD83D\uDC69|\uD83D\uDC6A|\uD83D\uDC91|\u2640|\u2642|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]|[#*0-9]\uFE0F\u20E3)\uFE0F?)*/g;
    }, {} ],
    4: [ function(a, b, c) {
        (function(a) {
            function b(a, b) {
                for (var c = 0, d = a.length - 1; d >= 0; d--) {
                    var e = a[d];
                    "." === e ? a.splice(d, 1) : ".." === e ? (a.splice(d, 1), c++) : c && (a.splice(d, 1), 
                    c--);
                }
                if (b) for (;c--; c) a.unshift("..");
                return a;
            }
            function d(a, b) {
                if (a.filter) return a.filter(b);
                for (var c = [], d = 0; d < a.length; d++) b(a[d], d, a) && c.push(a[d]);
                return c;
            }
            var e = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, f = function(a) {
                return e.exec(a).slice(1);
            };
            c.resolve = function() {
                for (var c = "", e = !1, f = arguments.length - 1; f >= -1 && !e; f--) {
                    var g = f >= 0 ? arguments[f] : a.cwd();
                    if ("string" != typeof g) throw new TypeError("Arguments to path.resolve must be strings");
                    g && (c = g + "/" + c, e = "/" === g.charAt(0));
                }
                return c = b(d(c.split("/"), function(a) {
                    return !!a;
                }), !e).join("/"), (e ? "/" : "") + c || ".";
            }, c.normalize = function(a) {
                var e = c.isAbsolute(a), f = "/" === g(a, -1);
                return a = b(d(a.split("/"), function(a) {
                    return !!a;
                }), !e).join("/"), a || e || (a = "."), a && f && (a += "/"), (e ? "/" : "") + a;
            }, c.isAbsolute = function(a) {
                return "/" === a.charAt(0);
            }, c.join = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return c.normalize(d(a, function(a, b) {
                    if ("string" != typeof a) throw new TypeError("Arguments to path.join must be strings");
                    return a;
                }).join("/"));
            }, c.relative = function(a, b) {
                function d(a) {
                    for (var b = 0; b < a.length && "" === a[b]; b++) ;
                    for (var c = a.length - 1; c >= 0 && "" === a[c]; c--) ;
                    return b > c ? [] : a.slice(b, c - b + 1);
                }
                a = c.resolve(a).substr(1), b = c.resolve(b).substr(1);
                for (var e = d(a.split("/")), f = d(b.split("/")), g = Math.min(e.length, f.length), h = g, i = 0; i < g; i++) if (e[i] !== f[i]) {
                    h = i;
                    break;
                }
                for (var j = [], i = h; i < e.length; i++) j.push("..");
                return j = j.concat(f.slice(h)), j.join("/");
            }, c.sep = "/", c.delimiter = ":", c.dirname = function(a) {
                var b = f(a), c = b[0], d = b[1];
                return c || d ? (d && (d = d.substr(0, d.length - 1)), c + d) : ".";
            }, c.basename = function(a, b) {
                var c = f(a)[2];
                return b && c.substr(-1 * b.length) === b && (c = c.substr(0, c.length - b.length)), 
                c;
            }, c.extname = function(a) {
                return f(a)[3];
            };
            var g = "b" === "ab".substr(-1) ? function(a, b, c) {
                return a.substr(b, c);
            } : function(a, b, c) {
                return b < 0 && (b = a.length + b), a.substr(b, c);
            };
        }).call(this, a("_process"));
    }, {
        _process: 5
    } ],
    5: [ function(a, b, c) {
        function d() {
            k = !1, h.length ? j = h.concat(j) : l = -1, j.length && e();
        }
        function e() {
            if (!k) {
                var a = setTimeout(d);
                k = !0;
                for (var b = j.length; b; ) {
                    for (h = j, j = []; ++l < b; ) h && h[l].run();
                    l = -1, b = j.length;
                }
                h = null, k = !1, clearTimeout(a);
            }
        }
        function f(a, b) {
            this.fun = a, this.array = b;
        }
        function g() {}
        var h, i = b.exports = {}, j = [], k = !1, l = -1;
        i.nextTick = function(a) {
            var b = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
            j.push(new f(a, b)), 1 !== j.length || k || setTimeout(e, 0);
        }, f.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", 
        i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, 
        i.removeAllListeners = g, i.emit = g, i.binding = function(a) {
            throw new Error("process.binding is not supported");
        }, i.cwd = function() {
            return "/";
        }, i.chdir = function(a) {
            throw new Error("process.chdir is not supported");
        }, i.umask = function() {
            return 0;
        };
    }, {} ]
}, {}, [ 2 ]), function(a, b) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = b(); else if ("function" == typeof define && define.amd) define(b); else {
        var c = b();
        for (var d in c) ("object" == typeof exports ? exports : a)[d] = c[d];
    }
}(this, function() {
    return function(a) {
        function b(d) {
            if (c[d]) return c[d].exports;
            var e = c[d] = {
                exports: {},
                id: d,
                loaded: !1
            };
            return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports;
        }
        var c = {};
        return b.m = a, b.c = c, b.p = "", b(0);
    }([ function(a, b, c) {
        b.glMatrix = c(1), b.mat2 = c(2), b.mat2d = c(3), b.mat3 = c(4), b.mat4 = c(5), 
        b.quat = c(6), b.vec2 = c(9), b.vec3 = c(7), b.vec4 = c(8);
    }, function(a, b, c) {
        var d = {};
        d.EPSILON = 1e-6, d.ARRAY_TYPE = "undefined" != typeof Float32Array ? Float32Array : Array, 
        d.RANDOM = Math.random, d.setMatrixArrayType = function(a) {
            GLMAT_ARRAY_TYPE = a;
        };
        var e = Math.PI / 180;
        d.toRadian = function(a) {
            return a * e;
        }, a.exports = d;
    }, function(a, b, c) {
        var d = c(1), e = {};
        e.create = function() {
            var a = new d.ARRAY_TYPE(4);
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a;
        }, e.clone = function(a) {
            var b = new d.ARRAY_TYPE(4);
            return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b;
        }, e.copy = function(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a;
        }, e.identity = function(a) {
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a;
        }, e.transpose = function(a, b) {
            if (a === b) {
                var c = b[1];
                a[1] = b[2], a[2] = c;
            } else a[0] = b[0], a[1] = b[2], a[2] = b[1], a[3] = b[3];
            return a;
        }, e.invert = function(a, b) {
            var c = b[0], d = b[1], e = b[2], f = b[3], g = c * f - e * d;
            return g ? (g = 1 / g, a[0] = f * g, a[1] = -d * g, a[2] = -e * g, a[3] = c * g, 
            a) : null;
        }, e.adjoint = function(a, b) {
            var c = b[0];
            return a[0] = b[3], a[1] = -b[1], a[2] = -b[2], a[3] = c, a;
        }, e.determinant = function(a) {
            return a[0] * a[3] - a[2] * a[1];
        }, e.multiply = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = b[3], h = c[0], i = c[1], j = c[2], k = c[3];
            return a[0] = d * h + f * i, a[1] = e * h + g * i, a[2] = d * j + f * k, a[3] = e * j + g * k, 
            a;
        }, e.mul = e.multiply, e.rotate = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = b[3], h = Math.sin(c), i = Math.cos(c);
            return a[0] = d * i + f * h, a[1] = e * i + g * h, a[2] = d * -h + f * i, a[3] = e * -h + g * i, 
            a;
        }, e.scale = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = b[3], h = c[0], i = c[1];
            return a[0] = d * h, a[1] = e * h, a[2] = f * i, a[3] = g * i, a;
        }, e.fromRotation = function(a, b) {
            var c = Math.sin(b), d = Math.cos(b);
            return a[0] = d, a[1] = c, a[2] = -c, a[3] = d, a;
        }, e.fromScaling = function(a, b) {
            return a[0] = b[0], a[1] = 0, a[2] = 0, a[3] = b[1], a;
        }, e.str = function(a) {
            return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
        }, e.frob = function(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2));
        }, e.LDU = function(a, b, c, d) {
            return a[2] = d[2] / d[0], c[0] = d[0], c[1] = d[1], c[3] = d[3] - a[2] * c[1], 
            [ a, b, c ];
        }, a.exports = e;
    }, function(a, b, c) {
        var d = c(1), e = {};
        e.create = function() {
            var a = new d.ARRAY_TYPE(6);
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a[4] = 0, a[5] = 0, a;
        }, e.clone = function(a) {
            var b = new d.ARRAY_TYPE(6);
            return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], 
            b;
        }, e.copy = function(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[4] = b[4], a[5] = b[5], 
            a;
        }, e.identity = function(a) {
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a[4] = 0, a[5] = 0, a;
        }, e.invert = function(a, b) {
            var c = b[0], d = b[1], e = b[2], f = b[3], g = b[4], h = b[5], i = c * f - d * e;
            return i ? (i = 1 / i, a[0] = f * i, a[1] = -d * i, a[2] = -e * i, a[3] = c * i, 
            a[4] = (e * h - f * g) * i, a[5] = (d * g - c * h) * i, a) : null;
        }, e.determinant = function(a) {
            return a[0] * a[3] - a[1] * a[2];
        }, e.multiply = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = b[3], h = b[4], i = b[5], j = c[0], k = c[1], l = c[2], m = c[3], n = c[4], o = c[5];
            return a[0] = d * j + f * k, a[1] = e * j + g * k, a[2] = d * l + f * m, a[3] = e * l + g * m, 
            a[4] = d * n + f * o + h, a[5] = e * n + g * o + i, a;
        }, e.mul = e.multiply, e.rotate = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = b[3], h = b[4], i = b[5], j = Math.sin(c), k = Math.cos(c);
            return a[0] = d * k + f * j, a[1] = e * k + g * j, a[2] = d * -j + f * k, a[3] = e * -j + g * k, 
            a[4] = h, a[5] = i, a;
        }, e.scale = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = b[3], h = b[4], i = b[5], j = c[0], k = c[1];
            return a[0] = d * j, a[1] = e * j, a[2] = f * k, a[3] = g * k, a[4] = h, a[5] = i, 
            a;
        }, e.translate = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = b[3], h = b[4], i = b[5], j = c[0], k = c[1];
            return a[0] = d, a[1] = e, a[2] = f, a[3] = g, a[4] = d * j + f * k + h, a[5] = e * j + g * k + i, 
            a;
        }, e.fromRotation = function(a, b) {
            var c = Math.sin(b), d = Math.cos(b);
            return a[0] = d, a[1] = c, a[2] = -c, a[3] = d, a[4] = 0, a[5] = 0, a;
        }, e.fromScaling = function(a, b) {
            return a[0] = b[0], a[1] = 0, a[2] = 0, a[3] = b[1], a[4] = 0, a[5] = 0, a;
        }, e.fromTranslation = function(a, b) {
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 1, a[4] = b[0], a[5] = b[1], a;
        }, e.str = function(a) {
            return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
        }, e.frob = function(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1);
        }, a.exports = e;
    }, function(a, b, c) {
        var d = c(1), e = {};
        e.create = function() {
            var a = new d.ARRAY_TYPE(9);
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 1, a[5] = 0, a[6] = 0, a[7] = 0, 
            a[8] = 1, a;
        }, e.fromMat4 = function(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[4], a[4] = b[5], a[5] = b[6], 
            a[6] = b[8], a[7] = b[9], a[8] = b[10], a;
        }, e.clone = function(a) {
            var b = new d.ARRAY_TYPE(9);
            return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], 
            b[6] = a[6], b[7] = a[7], b[8] = a[8], b;
        }, e.copy = function(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[4] = b[4], a[5] = b[5], 
            a[6] = b[6], a[7] = b[7], a[8] = b[8], a;
        }, e.identity = function(a) {
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 1, a[5] = 0, a[6] = 0, a[7] = 0, 
            a[8] = 1, a;
        }, e.transpose = function(a, b) {
            if (a === b) {
                var c = b[1], d = b[2], e = b[5];
                a[1] = b[3], a[2] = b[6], a[3] = c, a[5] = b[7], a[6] = d, a[7] = e;
            } else a[0] = b[0], a[1] = b[3], a[2] = b[6], a[3] = b[1], a[4] = b[4], a[5] = b[7], 
            a[6] = b[2], a[7] = b[5], a[8] = b[8];
            return a;
        }, e.invert = function(a, b) {
            var c = b[0], d = b[1], e = b[2], f = b[3], g = b[4], h = b[5], i = b[6], j = b[7], k = b[8], l = k * g - h * j, m = -k * f + h * i, n = j * f - g * i, o = c * l + d * m + e * n;
            return o ? (o = 1 / o, a[0] = l * o, a[1] = (-k * d + e * j) * o, a[2] = (h * d - e * g) * o, 
            a[3] = m * o, a[4] = (k * c - e * i) * o, a[5] = (-h * c + e * f) * o, a[6] = n * o, 
            a[7] = (-j * c + d * i) * o, a[8] = (g * c - d * f) * o, a) : null;
        }, e.adjoint = function(a, b) {
            var c = b[0], d = b[1], e = b[2], f = b[3], g = b[4], h = b[5], i = b[6], j = b[7], k = b[8];
            return a[0] = g * k - h * j, a[1] = e * j - d * k, a[2] = d * h - e * g, a[3] = h * i - f * k, 
            a[4] = c * k - e * i, a[5] = e * f - c * h, a[6] = f * j - g * i, a[7] = d * i - c * j, 
            a[8] = c * g - d * f, a;
        }, e.determinant = function(a) {
            var b = a[0], c = a[1], d = a[2], e = a[3], f = a[4], g = a[5], h = a[6], i = a[7], j = a[8];
            return b * (j * f - g * i) + c * (-j * e + g * h) + d * (i * e - f * h);
        }, e.multiply = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = b[3], h = b[4], i = b[5], j = b[6], k = b[7], l = b[8], m = c[0], n = c[1], o = c[2], p = c[3], q = c[4], r = c[5], s = c[6], t = c[7], u = c[8];
            return a[0] = m * d + n * g + o * j, a[1] = m * e + n * h + o * k, a[2] = m * f + n * i + o * l, 
            a[3] = p * d + q * g + r * j, a[4] = p * e + q * h + r * k, a[5] = p * f + q * i + r * l, 
            a[6] = s * d + t * g + u * j, a[7] = s * e + t * h + u * k, a[8] = s * f + t * i + u * l, 
            a;
        }, e.mul = e.multiply, e.translate = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = b[3], h = b[4], i = b[5], j = b[6], k = b[7], l = b[8], m = c[0], n = c[1];
            return a[0] = d, a[1] = e, a[2] = f, a[3] = g, a[4] = h, a[5] = i, a[6] = m * d + n * g + j, 
            a[7] = m * e + n * h + k, a[8] = m * f + n * i + l, a;
        }, e.rotate = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = b[3], h = b[4], i = b[5], j = b[6], k = b[7], l = b[8], m = Math.sin(c), n = Math.cos(c);
            return a[0] = n * d + m * g, a[1] = n * e + m * h, a[2] = n * f + m * i, a[3] = n * g - m * d, 
            a[4] = n * h - m * e, a[5] = n * i - m * f, a[6] = j, a[7] = k, a[8] = l, a;
        }, e.scale = function(a, b, c) {
            var d = c[0], e = c[1];
            return a[0] = d * b[0], a[1] = d * b[1], a[2] = d * b[2], a[3] = e * b[3], a[4] = e * b[4], 
            a[5] = e * b[5], a[6] = b[6], a[7] = b[7], a[8] = b[8], a;
        }, e.fromTranslation = function(a, b) {
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 1, a[5] = 0, a[6] = b[0], 
            a[7] = b[1], a[8] = 1, a;
        }, e.fromRotation = function(a, b) {
            var c = Math.sin(b), d = Math.cos(b);
            return a[0] = d, a[1] = c, a[2] = 0, a[3] = -c, a[4] = d, a[5] = 0, a[6] = 0, a[7] = 0, 
            a[8] = 1, a;
        }, e.fromScaling = function(a, b) {
            return a[0] = b[0], a[1] = 0, a[2] = 0, a[3] = 0, a[4] = b[1], a[5] = 0, a[6] = 0, 
            a[7] = 0, a[8] = 1, a;
        }, e.fromMat2d = function(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = 0, a[3] = b[2], a[4] = b[3], a[5] = 0, a[6] = b[4], 
            a[7] = b[5], a[8] = 1, a;
        }, e.fromQuat = function(a, b) {
            var c = b[0], d = b[1], e = b[2], f = b[3], g = c + c, h = d + d, i = e + e, j = c * g, k = d * g, l = d * h, m = e * g, n = e * h, o = e * i, p = f * g, q = f * h, r = f * i;
            return a[0] = 1 - l - o, a[3] = k - r, a[6] = m + q, a[1] = k + r, a[4] = 1 - j - o, 
            a[7] = n - p, a[2] = m - q, a[5] = n + p, a[8] = 1 - j - l, a;
        }, e.normalFromMat4 = function(a, b) {
            var c = b[0], d = b[1], e = b[2], f = b[3], g = b[4], h = b[5], i = b[6], j = b[7], k = b[8], l = b[9], m = b[10], n = b[11], o = b[12], p = b[13], q = b[14], r = b[15], s = c * h - d * g, t = c * i - e * g, u = c * j - f * g, v = d * i - e * h, w = d * j - f * h, x = e * j - f * i, y = k * p - l * o, z = k * q - m * o, A = k * r - n * o, B = l * q - m * p, C = l * r - n * p, D = m * r - n * q, E = s * D - t * C + u * B + v * A - w * z + x * y;
            return E ? (E = 1 / E, a[0] = (h * D - i * C + j * B) * E, a[1] = (i * A - g * D - j * z) * E, 
            a[2] = (g * C - h * A + j * y) * E, a[3] = (e * C - d * D - f * B) * E, a[4] = (c * D - e * A + f * z) * E, 
            a[5] = (d * A - c * C - f * y) * E, a[6] = (p * x - q * w + r * v) * E, a[7] = (q * u - o * x - r * t) * E, 
            a[8] = (o * w - p * u + r * s) * E, a) : null;
        }, e.str = function(a) {
            return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
        }, e.frob = function(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
        }, a.exports = e;
    }, function(a, b, c) {
        var d = c(1), e = {};
        e.create = function() {
            var a = new d.ARRAY_TYPE(16);
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, 
            a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, 
            a;
        }, e.clone = function(a) {
            var b = new d.ARRAY_TYPE(16);
            return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b[4] = a[4], b[5] = a[5], 
            b[6] = a[6], b[7] = a[7], b[8] = a[8], b[9] = a[9], b[10] = a[10], b[11] = a[11], 
            b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] = a[15], b;
        }, e.copy = function(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[4] = b[4], a[5] = b[5], 
            a[6] = b[6], a[7] = b[7], a[8] = b[8], a[9] = b[9], a[10] = b[10], a[11] = b[11], 
            a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15], a;
        }, e.identity = function(a) {
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, 
            a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, 
            a;
        }, e.transpose = function(a, b) {
            if (a === b) {
                var c = b[1], d = b[2], e = b[3], f = b[6], g = b[7], h = b[11];
                a[1] = b[4], a[2] = b[8], a[3] = b[12], a[4] = c, a[6] = b[9], a[7] = b[13], a[8] = d, 
                a[9] = f, a[11] = b[14], a[12] = e, a[13] = g, a[14] = h;
            } else a[0] = b[0], a[1] = b[4], a[2] = b[8], a[3] = b[12], a[4] = b[1], a[5] = b[5], 
            a[6] = b[9], a[7] = b[13], a[8] = b[2], a[9] = b[6], a[10] = b[10], a[11] = b[14], 
            a[12] = b[3], a[13] = b[7], a[14] = b[11], a[15] = b[15];
            return a;
        }, e.invert = function(a, b) {
            var c = b[0], d = b[1], e = b[2], f = b[3], g = b[4], h = b[5], i = b[6], j = b[7], k = b[8], l = b[9], m = b[10], n = b[11], o = b[12], p = b[13], q = b[14], r = b[15], s = c * h - d * g, t = c * i - e * g, u = c * j - f * g, v = d * i - e * h, w = d * j - f * h, x = e * j - f * i, y = k * p - l * o, z = k * q - m * o, A = k * r - n * o, B = l * q - m * p, C = l * r - n * p, D = m * r - n * q, E = s * D - t * C + u * B + v * A - w * z + x * y;
            return E ? (E = 1 / E, a[0] = (h * D - i * C + j * B) * E, a[1] = (e * C - d * D - f * B) * E, 
            a[2] = (p * x - q * w + r * v) * E, a[3] = (m * w - l * x - n * v) * E, a[4] = (i * A - g * D - j * z) * E, 
            a[5] = (c * D - e * A + f * z) * E, a[6] = (q * u - o * x - r * t) * E, a[7] = (k * x - m * u + n * t) * E, 
            a[8] = (g * C - h * A + j * y) * E, a[9] = (d * A - c * C - f * y) * E, a[10] = (o * w - p * u + r * s) * E, 
            a[11] = (l * u - k * w - n * s) * E, a[12] = (h * z - g * B - i * y) * E, a[13] = (c * B - d * z + e * y) * E, 
            a[14] = (p * t - o * v - q * s) * E, a[15] = (k * v - l * t + m * s) * E, a) : null;
        }, e.adjoint = function(a, b) {
            var c = b[0], d = b[1], e = b[2], f = b[3], g = b[4], h = b[5], i = b[6], j = b[7], k = b[8], l = b[9], m = b[10], n = b[11], o = b[12], p = b[13], q = b[14], r = b[15];
            return a[0] = h * (m * r - n * q) - l * (i * r - j * q) + p * (i * n - j * m), a[1] = -(d * (m * r - n * q) - l * (e * r - f * q) + p * (e * n - f * m)), 
            a[2] = d * (i * r - j * q) - h * (e * r - f * q) + p * (e * j - f * i), a[3] = -(d * (i * n - j * m) - h * (e * n - f * m) + l * (e * j - f * i)), 
            a[4] = -(g * (m * r - n * q) - k * (i * r - j * q) + o * (i * n - j * m)), a[5] = c * (m * r - n * q) - k * (e * r - f * q) + o * (e * n - f * m), 
            a[6] = -(c * (i * r - j * q) - g * (e * r - f * q) + o * (e * j - f * i)), a[7] = c * (i * n - j * m) - g * (e * n - f * m) + k * (e * j - f * i), 
            a[8] = g * (l * r - n * p) - k * (h * r - j * p) + o * (h * n - j * l), a[9] = -(c * (l * r - n * p) - k * (d * r - f * p) + o * (d * n - f * l)), 
            a[10] = c * (h * r - j * p) - g * (d * r - f * p) + o * (d * j - f * h), a[11] = -(c * (h * n - j * l) - g * (d * n - f * l) + k * (d * j - f * h)), 
            a[12] = -(g * (l * q - m * p) - k * (h * q - i * p) + o * (h * m - i * l)), a[13] = c * (l * q - m * p) - k * (d * q - e * p) + o * (d * m - e * l), 
            a[14] = -(c * (h * q - i * p) - g * (d * q - e * p) + o * (d * i - e * h)), a[15] = c * (h * m - i * l) - g * (d * m - e * l) + k * (d * i - e * h), 
            a;
        }, e.determinant = function(a) {
            var b = a[0], c = a[1], d = a[2], e = a[3], f = a[4], g = a[5], h = a[6], i = a[7], j = a[8], k = a[9], l = a[10], m = a[11], n = a[12], o = a[13], p = a[14], q = a[15];
            return (b * g - c * f) * (l * q - m * p) - (b * h - d * f) * (k * q - m * o) + (b * i - e * f) * (k * p - l * o) + (c * h - d * g) * (j * q - m * n) - (c * i - e * g) * (j * p - l * n) + (d * i - e * h) * (j * o - k * n);
        }, e.multiply = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = b[3], h = b[4], i = b[5], j = b[6], k = b[7], l = b[8], m = b[9], n = b[10], o = b[11], p = b[12], q = b[13], r = b[14], s = b[15], t = c[0], u = c[1], v = c[2], w = c[3];
            return a[0] = t * d + u * h + v * l + w * p, a[1] = t * e + u * i + v * m + w * q, 
            a[2] = t * f + u * j + v * n + w * r, a[3] = t * g + u * k + v * o + w * s, t = c[4], 
            u = c[5], v = c[6], w = c[7], a[4] = t * d + u * h + v * l + w * p, a[5] = t * e + u * i + v * m + w * q, 
            a[6] = t * f + u * j + v * n + w * r, a[7] = t * g + u * k + v * o + w * s, t = c[8], 
            u = c[9], v = c[10], w = c[11], a[8] = t * d + u * h + v * l + w * p, a[9] = t * e + u * i + v * m + w * q, 
            a[10] = t * f + u * j + v * n + w * r, a[11] = t * g + u * k + v * o + w * s, t = c[12], 
            u = c[13], v = c[14], w = c[15], a[12] = t * d + u * h + v * l + w * p, a[13] = t * e + u * i + v * m + w * q, 
            a[14] = t * f + u * j + v * n + w * r, a[15] = t * g + u * k + v * o + w * s, a;
        }, e.mul = e.multiply, e.translate = function(a, b, c) {
            var d, e, f, g, h, i, j, k, l, m, n, o, p = c[0], q = c[1], r = c[2];
            return b === a ? (a[12] = b[0] * p + b[4] * q + b[8] * r + b[12], a[13] = b[1] * p + b[5] * q + b[9] * r + b[13], 
            a[14] = b[2] * p + b[6] * q + b[10] * r + b[14], a[15] = b[3] * p + b[7] * q + b[11] * r + b[15]) : (d = b[0], 
            e = b[1], f = b[2], g = b[3], h = b[4], i = b[5], j = b[6], k = b[7], l = b[8], 
            m = b[9], n = b[10], o = b[11], a[0] = d, a[1] = e, a[2] = f, a[3] = g, a[4] = h, 
            a[5] = i, a[6] = j, a[7] = k, a[8] = l, a[9] = m, a[10] = n, a[11] = o, a[12] = d * p + h * q + l * r + b[12], 
            a[13] = e * p + i * q + m * r + b[13], a[14] = f * p + j * q + n * r + b[14], a[15] = g * p + k * q + o * r + b[15]), 
            a;
        }, e.scale = function(a, b, c) {
            var d = c[0], e = c[1], f = c[2];
            return a[0] = b[0] * d, a[1] = b[1] * d, a[2] = b[2] * d, a[3] = b[3] * d, a[4] = b[4] * e, 
            a[5] = b[5] * e, a[6] = b[6] * e, a[7] = b[7] * e, a[8] = b[8] * f, a[9] = b[9] * f, 
            a[10] = b[10] * f, a[11] = b[11] * f, a[12] = b[12], a[13] = b[13], a[14] = b[14], 
            a[15] = b[15], a;
        }, e.rotate = function(a, b, c, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D = e[0], E = e[1], F = e[2], G = Math.sqrt(D * D + E * E + F * F);
            return Math.abs(G) < d.EPSILON ? null : (G = 1 / G, D *= G, E *= G, F *= G, f = Math.sin(c), 
            g = Math.cos(c), h = 1 - g, i = b[0], j = b[1], k = b[2], l = b[3], m = b[4], n = b[5], 
            o = b[6], p = b[7], q = b[8], r = b[9], s = b[10], t = b[11], u = D * D * h + g, 
            v = E * D * h + F * f, w = F * D * h - E * f, x = D * E * h - F * f, y = E * E * h + g, 
            z = F * E * h + D * f, A = D * F * h + E * f, B = E * F * h - D * f, C = F * F * h + g, 
            a[0] = i * u + m * v + q * w, a[1] = j * u + n * v + r * w, a[2] = k * u + o * v + s * w, 
            a[3] = l * u + p * v + t * w, a[4] = i * x + m * y + q * z, a[5] = j * x + n * y + r * z, 
            a[6] = k * x + o * y + s * z, a[7] = l * x + p * y + t * z, a[8] = i * A + m * B + q * C, 
            a[9] = j * A + n * B + r * C, a[10] = k * A + o * B + s * C, a[11] = l * A + p * B + t * C, 
            b !== a && (a[12] = b[12], a[13] = b[13], a[14] = b[14], a[15] = b[15]), a);
        }, e.rotateX = function(a, b, c) {
            var d = Math.sin(c), e = Math.cos(c), f = b[4], g = b[5], h = b[6], i = b[7], j = b[8], k = b[9], l = b[10], m = b[11];
            return b !== a && (a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a[12] = b[12], 
            a[13] = b[13], a[14] = b[14], a[15] = b[15]), a[4] = f * e + j * d, a[5] = g * e + k * d, 
            a[6] = h * e + l * d, a[7] = i * e + m * d, a[8] = j * e - f * d, a[9] = k * e - g * d, 
            a[10] = l * e - h * d, a[11] = m * e - i * d, a;
        }, e.rotateY = function(a, b, c) {
            var d = Math.sin(c), e = Math.cos(c), f = b[0], g = b[1], h = b[2], i = b[3], j = b[8], k = b[9], l = b[10], m = b[11];
            return b !== a && (a[4] = b[4], a[5] = b[5], a[6] = b[6], a[7] = b[7], a[12] = b[12], 
            a[13] = b[13], a[14] = b[14], a[15] = b[15]), a[0] = f * e - j * d, a[1] = g * e - k * d, 
            a[2] = h * e - l * d, a[3] = i * e - m * d, a[8] = f * d + j * e, a[9] = g * d + k * e, 
            a[10] = h * d + l * e, a[11] = i * d + m * e, a;
        }, e.rotateZ = function(a, b, c) {
            var d = Math.sin(c), e = Math.cos(c), f = b[0], g = b[1], h = b[2], i = b[3], j = b[4], k = b[5], l = b[6], m = b[7];
            return b !== a && (a[8] = b[8], a[9] = b[9], a[10] = b[10], a[11] = b[11], a[12] = b[12], 
            a[13] = b[13], a[14] = b[14], a[15] = b[15]), a[0] = f * e + j * d, a[1] = g * e + k * d, 
            a[2] = h * e + l * d, a[3] = i * e + m * d, a[4] = j * e - f * d, a[5] = k * e - g * d, 
            a[6] = l * e - h * d, a[7] = m * e - i * d, a;
        }, e.fromTranslation = function(a, b) {
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, 
            a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = b[0], a[13] = b[1], a[14] = b[2], 
            a[15] = 1, a;
        }, e.fromScaling = function(a, b) {
            return a[0] = b[0], a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = b[1], a[6] = 0, 
            a[7] = 0, a[8] = 0, a[9] = 0, a[10] = b[2], a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, 
            a[15] = 1, a;
        }, e.fromRotation = function(a, b, c) {
            var e, f, g, h = c[0], i = c[1], j = c[2], k = Math.sqrt(h * h + i * i + j * j);
            return Math.abs(k) < d.EPSILON ? null : (k = 1 / k, h *= k, i *= k, j *= k, e = Math.sin(b), 
            f = Math.cos(b), g = 1 - f, a[0] = h * h * g + f, a[1] = i * h * g + j * e, a[2] = j * h * g - i * e, 
            a[3] = 0, a[4] = h * i * g - j * e, a[5] = i * i * g + f, a[6] = j * i * g + h * e, 
            a[7] = 0, a[8] = h * j * g + i * e, a[9] = i * j * g - h * e, a[10] = j * j * g + f, 
            a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a);
        }, e.fromXRotation = function(a, b) {
            var c = Math.sin(b), d = Math.cos(b);
            return a[0] = 1, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = d, a[6] = c, a[7] = 0, 
            a[8] = 0, a[9] = -c, a[10] = d, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, 
            a;
        }, e.fromYRotation = function(a, b) {
            var c = Math.sin(b), d = Math.cos(b);
            return a[0] = d, a[1] = 0, a[2] = -c, a[3] = 0, a[4] = 0, a[5] = 1, a[6] = 0, a[7] = 0, 
            a[8] = c, a[9] = 0, a[10] = d, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, 
            a;
        }, e.fromZRotation = function(a, b) {
            var c = Math.sin(b), d = Math.cos(b);
            return a[0] = d, a[1] = c, a[2] = 0, a[3] = 0, a[4] = -c, a[5] = d, a[6] = 0, a[7] = 0, 
            a[8] = 0, a[9] = 0, a[10] = 1, a[11] = 0, a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, 
            a;
        }, e.fromRotationTranslation = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = b[3], h = d + d, i = e + e, j = f + f, k = d * h, l = d * i, m = d * j, n = e * i, o = e * j, p = f * j, q = g * h, r = g * i, s = g * j;
            return a[0] = 1 - (n + p), a[1] = l + s, a[2] = m - r, a[3] = 0, a[4] = l - s, a[5] = 1 - (k + p), 
            a[6] = o + q, a[7] = 0, a[8] = m + r, a[9] = o - q, a[10] = 1 - (k + n), a[11] = 0, 
            a[12] = c[0], a[13] = c[1], a[14] = c[2], a[15] = 1, a;
        }, e.fromRotationTranslationScale = function(a, b, c, d) {
            var e = b[0], f = b[1], g = b[2], h = b[3], i = e + e, j = f + f, k = g + g, l = e * i, m = e * j, n = e * k, o = f * j, p = f * k, q = g * k, r = h * i, s = h * j, t = h * k, u = d[0], v = d[1], w = d[2];
            return a[0] = (1 - (o + q)) * u, a[1] = (m + t) * u, a[2] = (n - s) * u, a[3] = 0, 
            a[4] = (m - t) * v, a[5] = (1 - (l + q)) * v, a[6] = (p + r) * v, a[7] = 0, a[8] = (n + s) * w, 
            a[9] = (p - r) * w, a[10] = (1 - (l + o)) * w, a[11] = 0, a[12] = c[0], a[13] = c[1], 
            a[14] = c[2], a[15] = 1, a;
        }, e.fromRotationTranslationScaleOrigin = function(a, b, c, d, e) {
            var f = b[0], g = b[1], h = b[2], i = b[3], j = f + f, k = g + g, l = h + h, m = f * j, n = f * k, o = f * l, p = g * k, q = g * l, r = h * l, s = i * j, t = i * k, u = i * l, v = d[0], w = d[1], x = d[2], y = e[0], z = e[1], A = e[2];
            return a[0] = (1 - (p + r)) * v, a[1] = (n + u) * v, a[2] = (o - t) * v, a[3] = 0, 
            a[4] = (n - u) * w, a[5] = (1 - (m + r)) * w, a[6] = (q + s) * w, a[7] = 0, a[8] = (o + t) * x, 
            a[9] = (q - s) * x, a[10] = (1 - (m + p)) * x, a[11] = 0, a[12] = c[0] + y - (a[0] * y + a[4] * z + a[8] * A), 
            a[13] = c[1] + z - (a[1] * y + a[5] * z + a[9] * A), a[14] = c[2] + A - (a[2] * y + a[6] * z + a[10] * A), 
            a[15] = 1, a;
        }, e.fromQuat = function(a, b) {
            var c = b[0], d = b[1], e = b[2], f = b[3], g = c + c, h = d + d, i = e + e, j = c * g, k = d * g, l = d * h, m = e * g, n = e * h, o = e * i, p = f * g, q = f * h, r = f * i;
            return a[0] = 1 - l - o, a[1] = k + r, a[2] = m - q, a[3] = 0, a[4] = k - r, a[5] = 1 - j - o, 
            a[6] = n + p, a[7] = 0, a[8] = m + q, a[9] = n - p, a[10] = 1 - j - l, a[11] = 0, 
            a[12] = 0, a[13] = 0, a[14] = 0, a[15] = 1, a;
        }, e.frustum = function(a, b, c, d, e, f, g) {
            var h = 1 / (c - b), i = 1 / (e - d), j = 1 / (f - g);
            return a[0] = 2 * f * h, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 * f * i, 
            a[6] = 0, a[7] = 0, a[8] = (c + b) * h, a[9] = (e + d) * i, a[10] = (g + f) * j, 
            a[11] = -1, a[12] = 0, a[13] = 0, a[14] = g * f * 2 * j, a[15] = 0, a;
        }, e.perspective = function(a, b, c, d, e) {
            var f = 1 / Math.tan(b / 2), g = 1 / (d - e);
            return a[0] = f / c, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = f, a[6] = 0, 
            a[7] = 0, a[8] = 0, a[9] = 0, a[10] = (e + d) * g, a[11] = -1, a[12] = 0, a[13] = 0, 
            a[14] = 2 * e * d * g, a[15] = 0, a;
        }, e.perspectiveFromFieldOfView = function(a, b, c, d) {
            var e = Math.tan(b.upDegrees * Math.PI / 180), f = Math.tan(b.downDegrees * Math.PI / 180), g = Math.tan(b.leftDegrees * Math.PI / 180), h = Math.tan(b.rightDegrees * Math.PI / 180), i = 2 / (g + h), j = 2 / (e + f);
            return a[0] = i, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = j, a[6] = 0, a[7] = 0, 
            a[8] = -(g - h) * i * .5, a[9] = (e - f) * j * .5, a[10] = d / (c - d), a[11] = -1, 
            a[12] = 0, a[13] = 0, a[14] = d * c / (c - d), a[15] = 0, a;
        }, e.ortho = function(a, b, c, d, e, f, g) {
            var h = 1 / (b - c), i = 1 / (d - e), j = 1 / (f - g);
            return a[0] = -2 * h, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = -2 * i, a[6] = 0, 
            a[7] = 0, a[8] = 0, a[9] = 0, a[10] = 2 * j, a[11] = 0, a[12] = (b + c) * h, a[13] = (e + d) * i, 
            a[14] = (g + f) * j, a[15] = 1, a;
        }, e.lookAt = function(a, b, c, f) {
            var g, h, i, j, k, l, m, n, o, p, q = b[0], r = b[1], s = b[2], t = f[0], u = f[1], v = f[2], w = c[0], x = c[1], y = c[2];
            return Math.abs(q - w) < d.EPSILON && Math.abs(r - x) < d.EPSILON && Math.abs(s - y) < d.EPSILON ? e.identity(a) : (m = q - w, 
            n = r - x, o = s - y, p = 1 / Math.sqrt(m * m + n * n + o * o), m *= p, n *= p, 
            o *= p, g = u * o - v * n, h = v * m - t * o, i = t * n - u * m, p = Math.sqrt(g * g + h * h + i * i), 
            p ? (p = 1 / p, g *= p, h *= p, i *= p) : (g = 0, h = 0, i = 0), j = n * i - o * h, 
            k = o * g - m * i, l = m * h - n * g, p = Math.sqrt(j * j + k * k + l * l), p ? (p = 1 / p, 
            j *= p, k *= p, l *= p) : (j = 0, k = 0, l = 0), a[0] = g, a[1] = j, a[2] = m, a[3] = 0, 
            a[4] = h, a[5] = k, a[6] = n, a[7] = 0, a[8] = i, a[9] = l, a[10] = o, a[11] = 0, 
            a[12] = -(g * q + h * r + i * s), a[13] = -(j * q + k * r + l * s), a[14] = -(m * q + n * r + o * s), 
            a[15] = 1, a);
        }, e.str = function(a) {
            return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
        }, e.frob = function(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
        }, a.exports = e;
    }, function(a, b, c) {
        var d = c(1), e = c(4), f = c(7), g = c(8), h = {};
        h.create = function() {
            var a = new d.ARRAY_TYPE(4);
            return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a;
        }, h.rotationTo = function() {
            var a = f.create(), b = f.fromValues(1, 0, 0), c = f.fromValues(0, 1, 0);
            return function(d, e, g) {
                var i = f.dot(e, g);
                return i < -.999999 ? (f.cross(a, b, e), f.length(a) < 1e-6 && f.cross(a, c, e), 
                f.normalize(a, a), h.setAxisAngle(d, a, Math.PI), d) : i > .999999 ? (d[0] = 0, 
                d[1] = 0, d[2] = 0, d[3] = 1, d) : (f.cross(a, e, g), d[0] = a[0], d[1] = a[1], 
                d[2] = a[2], d[3] = 1 + i, h.normalize(d, d));
            };
        }(), h.setAxes = function() {
            var a = e.create();
            return function(b, c, d, e) {
                return a[0] = d[0], a[3] = d[1], a[6] = d[2], a[1] = e[0], a[4] = e[1], a[7] = e[2], 
                a[2] = -c[0], a[5] = -c[1], a[8] = -c[2], h.normalize(b, h.fromMat3(b, a));
            };
        }(), h.clone = g.clone, h.fromValues = g.fromValues, h.copy = g.copy, h.set = g.set, 
        h.identity = function(a) {
            return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 1, a;
        }, h.setAxisAngle = function(a, b, c) {
            c *= .5;
            var d = Math.sin(c);
            return a[0] = d * b[0], a[1] = d * b[1], a[2] = d * b[2], a[3] = Math.cos(c), a;
        }, h.add = g.add, h.multiply = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = b[3], h = c[0], i = c[1], j = c[2], k = c[3];
            return a[0] = d * k + g * h + e * j - f * i, a[1] = e * k + g * i + f * h - d * j, 
            a[2] = f * k + g * j + d * i - e * h, a[3] = g * k - d * h - e * i - f * j, a;
        }, h.mul = h.multiply, h.scale = g.scale, h.rotateX = function(a, b, c) {
            c *= .5;
            var d = b[0], e = b[1], f = b[2], g = b[3], h = Math.sin(c), i = Math.cos(c);
            return a[0] = d * i + g * h, a[1] = e * i + f * h, a[2] = f * i - e * h, a[3] = g * i - d * h, 
            a;
        }, h.rotateY = function(a, b, c) {
            c *= .5;
            var d = b[0], e = b[1], f = b[2], g = b[3], h = Math.sin(c), i = Math.cos(c);
            return a[0] = d * i - f * h, a[1] = e * i + g * h, a[2] = f * i + d * h, a[3] = g * i - e * h, 
            a;
        }, h.rotateZ = function(a, b, c) {
            c *= .5;
            var d = b[0], e = b[1], f = b[2], g = b[3], h = Math.sin(c), i = Math.cos(c);
            return a[0] = d * i + e * h, a[1] = e * i - d * h, a[2] = f * i + g * h, a[3] = g * i - f * h, 
            a;
        }, h.calculateW = function(a, b) {
            var c = b[0], d = b[1], e = b[2];
            return a[0] = c, a[1] = d, a[2] = e, a[3] = Math.sqrt(Math.abs(1 - c * c - d * d - e * e)), 
            a;
        }, h.dot = g.dot, h.lerp = g.lerp, h.slerp = function(a, b, c, d) {
            var e, f, g, h, i, j = b[0], k = b[1], l = b[2], m = b[3], n = c[0], o = c[1], p = c[2], q = c[3];
            return f = j * n + k * o + l * p + m * q, f < 0 && (f = -f, n = -n, o = -o, p = -p, 
            q = -q), 1 - f > 1e-6 ? (e = Math.acos(f), g = Math.sin(e), h = Math.sin((1 - d) * e) / g, 
            i = Math.sin(d * e) / g) : (h = 1 - d, i = d), a[0] = h * j + i * n, a[1] = h * k + i * o, 
            a[2] = h * l + i * p, a[3] = h * m + i * q, a;
        }, h.sqlerp = function() {
            var a = h.create(), b = h.create();
            return function(c, d, e, f, g, i) {
                return h.slerp(a, d, g, i), h.slerp(b, e, f, i), h.slerp(c, a, b, 2 * i * (1 - i)), 
                c;
            };
        }(), h.invert = function(a, b) {
            var c = b[0], d = b[1], e = b[2], f = b[3], g = c * c + d * d + e * e + f * f, h = g ? 1 / g : 0;
            return a[0] = -c * h, a[1] = -d * h, a[2] = -e * h, a[3] = f * h, a;
        }, h.conjugate = function(a, b) {
            return a[0] = -b[0], a[1] = -b[1], a[2] = -b[2], a[3] = b[3], a;
        }, h.length = g.length, h.len = h.length, h.squaredLength = g.squaredLength, h.sqrLen = h.squaredLength, 
        h.normalize = g.normalize, h.fromMat3 = function(a, b) {
            var c, d = b[0] + b[4] + b[8];
            if (d > 0) c = Math.sqrt(d + 1), a[3] = .5 * c, c = .5 / c, a[0] = (b[5] - b[7]) * c, 
            a[1] = (b[6] - b[2]) * c, a[2] = (b[1] - b[3]) * c; else {
                var e = 0;
                b[4] > b[0] && (e = 1), b[8] > b[3 * e + e] && (e = 2);
                var f = (e + 1) % 3, g = (e + 2) % 3;
                c = Math.sqrt(b[3 * e + e] - b[3 * f + f] - b[3 * g + g] + 1), a[e] = .5 * c, c = .5 / c, 
                a[3] = (b[3 * f + g] - b[3 * g + f]) * c, a[f] = (b[3 * f + e] + b[3 * e + f]) * c, 
                a[g] = (b[3 * g + e] + b[3 * e + g]) * c;
            }
            return a;
        }, h.str = function(a) {
            return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
        }, a.exports = h;
    }, function(a, b, c) {
        var d = c(1), e = {};
        e.create = function() {
            var a = new d.ARRAY_TYPE(3);
            return a[0] = 0, a[1] = 0, a[2] = 0, a;
        }, e.clone = function(a) {
            var b = new d.ARRAY_TYPE(3);
            return b[0] = a[0], b[1] = a[1], b[2] = a[2], b;
        }, e.fromValues = function(a, b, c) {
            var e = new d.ARRAY_TYPE(3);
            return e[0] = a, e[1] = b, e[2] = c, e;
        }, e.copy = function(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a;
        }, e.set = function(a, b, c, d) {
            return a[0] = b, a[1] = c, a[2] = d, a;
        }, e.add = function(a, b, c) {
            return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a[2] = b[2] + c[2], a;
        }, e.subtract = function(a, b, c) {
            return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a[2] = b[2] - c[2], a;
        }, e.sub = e.subtract, e.multiply = function(a, b, c) {
            return a[0] = b[0] * c[0], a[1] = b[1] * c[1], a[2] = b[2] * c[2], a;
        }, e.mul = e.multiply, e.divide = function(a, b, c) {
            return a[0] = b[0] / c[0], a[1] = b[1] / c[1], a[2] = b[2] / c[2], a;
        }, e.div = e.divide, e.min = function(a, b, c) {
            return a[0] = Math.min(b[0], c[0]), a[1] = Math.min(b[1], c[1]), a[2] = Math.min(b[2], c[2]), 
            a;
        }, e.max = function(a, b, c) {
            return a[0] = Math.max(b[0], c[0]), a[1] = Math.max(b[1], c[1]), a[2] = Math.max(b[2], c[2]), 
            a;
        }, e.scale = function(a, b, c) {
            return a[0] = b[0] * c, a[1] = b[1] * c, a[2] = b[2] * c, a;
        }, e.scaleAndAdd = function(a, b, c, d) {
            return a[0] = b[0] + c[0] * d, a[1] = b[1] + c[1] * d, a[2] = b[2] + c[2] * d, a;
        }, e.distance = function(a, b) {
            var c = b[0] - a[0], d = b[1] - a[1], e = b[2] - a[2];
            return Math.sqrt(c * c + d * d + e * e);
        }, e.dist = e.distance, e.squaredDistance = function(a, b) {
            var c = b[0] - a[0], d = b[1] - a[1], e = b[2] - a[2];
            return c * c + d * d + e * e;
        }, e.sqrDist = e.squaredDistance, e.length = function(a) {
            var b = a[0], c = a[1], d = a[2];
            return Math.sqrt(b * b + c * c + d * d);
        }, e.len = e.length, e.squaredLength = function(a) {
            var b = a[0], c = a[1], d = a[2];
            return b * b + c * c + d * d;
        }, e.sqrLen = e.squaredLength, e.negate = function(a, b) {
            return a[0] = -b[0], a[1] = -b[1], a[2] = -b[2], a;
        }, e.inverse = function(a, b) {
            return a[0] = 1 / b[0], a[1] = 1 / b[1], a[2] = 1 / b[2], a;
        }, e.normalize = function(a, b) {
            var c = b[0], d = b[1], e = b[2], f = c * c + d * d + e * e;
            return f > 0 && (f = 1 / Math.sqrt(f), a[0] = b[0] * f, a[1] = b[1] * f, a[2] = b[2] * f), 
            a;
        }, e.dot = function(a, b) {
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
        }, e.cross = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = c[0], h = c[1], i = c[2];
            return a[0] = e * i - f * h, a[1] = f * g - d * i, a[2] = d * h - e * g, a;
        }, e.lerp = function(a, b, c, d) {
            var e = b[0], f = b[1], g = b[2];
            return a[0] = e + d * (c[0] - e), a[1] = f + d * (c[1] - f), a[2] = g + d * (c[2] - g), 
            a;
        }, e.hermite = function(a, b, c, d, e, f) {
            var g = f * f, h = g * (2 * f - 3) + 1, i = g * (f - 2) + f, j = g * (f - 1), k = g * (3 - 2 * f);
            return a[0] = b[0] * h + c[0] * i + d[0] * j + e[0] * k, a[1] = b[1] * h + c[1] * i + d[1] * j + e[1] * k, 
            a[2] = b[2] * h + c[2] * i + d[2] * j + e[2] * k, a;
        }, e.bezier = function(a, b, c, d, e, f) {
            var g = 1 - f, h = g * g, i = f * f, j = h * g, k = 3 * f * h, l = 3 * i * g, m = i * f;
            return a[0] = b[0] * j + c[0] * k + d[0] * l + e[0] * m, a[1] = b[1] * j + c[1] * k + d[1] * l + e[1] * m, 
            a[2] = b[2] * j + c[2] * k + d[2] * l + e[2] * m, a;
        }, e.random = function(a, b) {
            b = b || 1;
            var c = 2 * d.RANDOM() * Math.PI, e = 2 * d.RANDOM() - 1, f = Math.sqrt(1 - e * e) * b;
            return a[0] = Math.cos(c) * f, a[1] = Math.sin(c) * f, a[2] = e * b, a;
        }, e.transformMat4 = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = c[3] * d + c[7] * e + c[11] * f + c[15];
            return g = g || 1, a[0] = (c[0] * d + c[4] * e + c[8] * f + c[12]) / g, a[1] = (c[1] * d + c[5] * e + c[9] * f + c[13]) / g, 
            a[2] = (c[2] * d + c[6] * e + c[10] * f + c[14]) / g, a;
        }, e.transformMat3 = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2];
            return a[0] = d * c[0] + e * c[3] + f * c[6], a[1] = d * c[1] + e * c[4] + f * c[7], 
            a[2] = d * c[2] + e * c[5] + f * c[8], a;
        }, e.transformQuat = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = c[0], h = c[1], i = c[2], j = c[3], k = j * d + h * f - i * e, l = j * e + i * d - g * f, m = j * f + g * e - h * d, n = -g * d - h * e - i * f;
            return a[0] = k * j + n * -g + l * -i - m * -h, a[1] = l * j + n * -h + m * -g - k * -i, 
            a[2] = m * j + n * -i + k * -h - l * -g, a;
        }, e.rotateX = function(a, b, c, d) {
            var e = [], f = [];
            return e[0] = b[0] - c[0], e[1] = b[1] - c[1], e[2] = b[2] - c[2], f[0] = e[0], 
            f[1] = e[1] * Math.cos(d) - e[2] * Math.sin(d), f[2] = e[1] * Math.sin(d) + e[2] * Math.cos(d), 
            a[0] = f[0] + c[0], a[1] = f[1] + c[1], a[2] = f[2] + c[2], a;
        }, e.rotateY = function(a, b, c, d) {
            var e = [], f = [];
            return e[0] = b[0] - c[0], e[1] = b[1] - c[1], e[2] = b[2] - c[2], f[0] = e[2] * Math.sin(d) + e[0] * Math.cos(d), 
            f[1] = e[1], f[2] = e[2] * Math.cos(d) - e[0] * Math.sin(d), a[0] = f[0] + c[0], 
            a[1] = f[1] + c[1], a[2] = f[2] + c[2], a;
        }, e.rotateZ = function(a, b, c, d) {
            var e = [], f = [];
            return e[0] = b[0] - c[0], e[1] = b[1] - c[1], e[2] = b[2] - c[2], f[0] = e[0] * Math.cos(d) - e[1] * Math.sin(d), 
            f[1] = e[0] * Math.sin(d) + e[1] * Math.cos(d), f[2] = e[2], a[0] = f[0] + c[0], 
            a[1] = f[1] + c[1], a[2] = f[2] + c[2], a;
        }, e.forEach = function() {
            var a = e.create();
            return function(b, c, d, e, f, g) {
                var h, i;
                for (c || (c = 3), d || (d = 0), i = e ? Math.min(e * c + d, b.length) : b.length, 
                h = d; h < i; h += c) a[0] = b[h], a[1] = b[h + 1], a[2] = b[h + 2], f(a, a, g), 
                b[h] = a[0], b[h + 1] = a[1], b[h + 2] = a[2];
                return b;
            };
        }(), e.angle = function(a, b) {
            var c = e.fromValues(a[0], a[1], a[2]), d = e.fromValues(b[0], b[1], b[2]);
            e.normalize(c, c), e.normalize(d, d);
            var f = e.dot(c, d);
            return f > 1 ? 0 : Math.acos(f);
        }, e.str = function(a) {
            return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
        }, a.exports = e;
    }, function(a, b, c) {
        var d = c(1), e = {};
        e.create = function() {
            var a = new d.ARRAY_TYPE(4);
            return a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0, a;
        }, e.clone = function(a) {
            var b = new d.ARRAY_TYPE(4);
            return b[0] = a[0], b[1] = a[1], b[2] = a[2], b[3] = a[3], b;
        }, e.fromValues = function(a, b, c, e) {
            var f = new d.ARRAY_TYPE(4);
            return f[0] = a, f[1] = b, f[2] = c, f[3] = e, f;
        }, e.copy = function(a, b) {
            return a[0] = b[0], a[1] = b[1], a[2] = b[2], a[3] = b[3], a;
        }, e.set = function(a, b, c, d, e) {
            return a[0] = b, a[1] = c, a[2] = d, a[3] = e, a;
        }, e.add = function(a, b, c) {
            return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a[2] = b[2] + c[2], a[3] = b[3] + c[3], 
            a;
        }, e.subtract = function(a, b, c) {
            return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a[2] = b[2] - c[2], a[3] = b[3] - c[3], 
            a;
        }, e.sub = e.subtract, e.multiply = function(a, b, c) {
            return a[0] = b[0] * c[0], a[1] = b[1] * c[1], a[2] = b[2] * c[2], a[3] = b[3] * c[3], 
            a;
        }, e.mul = e.multiply, e.divide = function(a, b, c) {
            return a[0] = b[0] / c[0], a[1] = b[1] / c[1], a[2] = b[2] / c[2], a[3] = b[3] / c[3], 
            a;
        }, e.div = e.divide, e.min = function(a, b, c) {
            return a[0] = Math.min(b[0], c[0]), a[1] = Math.min(b[1], c[1]), a[2] = Math.min(b[2], c[2]), 
            a[3] = Math.min(b[3], c[3]), a;
        }, e.max = function(a, b, c) {
            return a[0] = Math.max(b[0], c[0]), a[1] = Math.max(b[1], c[1]), a[2] = Math.max(b[2], c[2]), 
            a[3] = Math.max(b[3], c[3]), a;
        }, e.scale = function(a, b, c) {
            return a[0] = b[0] * c, a[1] = b[1] * c, a[2] = b[2] * c, a[3] = b[3] * c, a;
        }, e.scaleAndAdd = function(a, b, c, d) {
            return a[0] = b[0] + c[0] * d, a[1] = b[1] + c[1] * d, a[2] = b[2] + c[2] * d, a[3] = b[3] + c[3] * d, 
            a;
        }, e.distance = function(a, b) {
            var c = b[0] - a[0], d = b[1] - a[1], e = b[2] - a[2], f = b[3] - a[3];
            return Math.sqrt(c * c + d * d + e * e + f * f);
        }, e.dist = e.distance, e.squaredDistance = function(a, b) {
            var c = b[0] - a[0], d = b[1] - a[1], e = b[2] - a[2], f = b[3] - a[3];
            return c * c + d * d + e * e + f * f;
        }, e.sqrDist = e.squaredDistance, e.length = function(a) {
            var b = a[0], c = a[1], d = a[2], e = a[3];
            return Math.sqrt(b * b + c * c + d * d + e * e);
        }, e.len = e.length, e.squaredLength = function(a) {
            var b = a[0], c = a[1], d = a[2], e = a[3];
            return b * b + c * c + d * d + e * e;
        }, e.sqrLen = e.squaredLength, e.negate = function(a, b) {
            return a[0] = -b[0], a[1] = -b[1], a[2] = -b[2], a[3] = -b[3], a;
        }, e.inverse = function(a, b) {
            return a[0] = 1 / b[0], a[1] = 1 / b[1], a[2] = 1 / b[2], a[3] = 1 / b[3], a;
        }, e.normalize = function(a, b) {
            var c = b[0], d = b[1], e = b[2], f = b[3], g = c * c + d * d + e * e + f * f;
            return g > 0 && (g = 1 / Math.sqrt(g), a[0] = c * g, a[1] = d * g, a[2] = e * g, 
            a[3] = f * g), a;
        }, e.dot = function(a, b) {
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
        }, e.lerp = function(a, b, c, d) {
            var e = b[0], f = b[1], g = b[2], h = b[3];
            return a[0] = e + d * (c[0] - e), a[1] = f + d * (c[1] - f), a[2] = g + d * (c[2] - g), 
            a[3] = h + d * (c[3] - h), a;
        }, e.random = function(a, b) {
            return b = b || 1, a[0] = d.RANDOM(), a[1] = d.RANDOM(), a[2] = d.RANDOM(), a[3] = d.RANDOM(), 
            e.normalize(a, a), e.scale(a, a, b), a;
        }, e.transformMat4 = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = b[3];
            return a[0] = c[0] * d + c[4] * e + c[8] * f + c[12] * g, a[1] = c[1] * d + c[5] * e + c[9] * f + c[13] * g, 
            a[2] = c[2] * d + c[6] * e + c[10] * f + c[14] * g, a[3] = c[3] * d + c[7] * e + c[11] * f + c[15] * g, 
            a;
        }, e.transformQuat = function(a, b, c) {
            var d = b[0], e = b[1], f = b[2], g = c[0], h = c[1], i = c[2], j = c[3], k = j * d + h * f - i * e, l = j * e + i * d - g * f, m = j * f + g * e - h * d, n = -g * d - h * e - i * f;
            return a[0] = k * j + n * -g + l * -i - m * -h, a[1] = l * j + n * -h + m * -g - k * -i, 
            a[2] = m * j + n * -i + k * -h - l * -g, a[3] = b[3], a;
        }, e.forEach = function() {
            var a = e.create();
            return function(b, c, d, e, f, g) {
                var h, i;
                for (c || (c = 4), d || (d = 0), i = e ? Math.min(e * c + d, b.length) : b.length, 
                h = d; h < i; h += c) a[0] = b[h], a[1] = b[h + 1], a[2] = b[h + 2], a[3] = b[h + 3], 
                f(a, a, g), b[h] = a[0], b[h + 1] = a[1], b[h + 2] = a[2], b[h + 3] = a[3];
                return b;
            };
        }(), e.str = function(a) {
            return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
        }, a.exports = e;
    }, function(a, b, c) {
        var d = c(1), e = {};
        e.create = function() {
            var a = new d.ARRAY_TYPE(2);
            return a[0] = 0, a[1] = 0, a;
        }, e.clone = function(a) {
            var b = new d.ARRAY_TYPE(2);
            return b[0] = a[0], b[1] = a[1], b;
        }, e.fromValues = function(a, b) {
            var c = new d.ARRAY_TYPE(2);
            return c[0] = a, c[1] = b, c;
        }, e.copy = function(a, b) {
            return a[0] = b[0], a[1] = b[1], a;
        }, e.set = function(a, b, c) {
            return a[0] = b, a[1] = c, a;
        }, e.add = function(a, b, c) {
            return a[0] = b[0] + c[0], a[1] = b[1] + c[1], a;
        }, e.subtract = function(a, b, c) {
            return a[0] = b[0] - c[0], a[1] = b[1] - c[1], a;
        }, e.sub = e.subtract, e.multiply = function(a, b, c) {
            return a[0] = b[0] * c[0], a[1] = b[1] * c[1], a;
        }, e.mul = e.multiply, e.divide = function(a, b, c) {
            return a[0] = b[0] / c[0], a[1] = b[1] / c[1], a;
        }, e.div = e.divide, e.min = function(a, b, c) {
            return a[0] = Math.min(b[0], c[0]), a[1] = Math.min(b[1], c[1]), a;
        }, e.max = function(a, b, c) {
            return a[0] = Math.max(b[0], c[0]), a[1] = Math.max(b[1], c[1]), a;
        }, e.scale = function(a, b, c) {
            return a[0] = b[0] * c, a[1] = b[1] * c, a;
        }, e.scaleAndAdd = function(a, b, c, d) {
            return a[0] = b[0] + c[0] * d, a[1] = b[1] + c[1] * d, a;
        }, e.distance = function(a, b) {
            var c = b[0] - a[0], d = b[1] - a[1];
            return Math.sqrt(c * c + d * d);
        }, e.dist = e.distance, e.squaredDistance = function(a, b) {
            var c = b[0] - a[0], d = b[1] - a[1];
            return c * c + d * d;
        }, e.sqrDist = e.squaredDistance, e.length = function(a) {
            var b = a[0], c = a[1];
            return Math.sqrt(b * b + c * c);
        }, e.len = e.length, e.squaredLength = function(a) {
            var b = a[0], c = a[1];
            return b * b + c * c;
        }, e.sqrLen = e.squaredLength, e.negate = function(a, b) {
            return a[0] = -b[0], a[1] = -b[1], a;
        }, e.inverse = function(a, b) {
            return a[0] = 1 / b[0], a[1] = 1 / b[1], a;
        }, e.normalize = function(a, b) {
            var c = b[0], d = b[1], e = c * c + d * d;
            return e > 0 && (e = 1 / Math.sqrt(e), a[0] = b[0] * e, a[1] = b[1] * e), a;
        }, e.dot = function(a, b) {
            return a[0] * b[0] + a[1] * b[1];
        }, e.cross = function(a, b, c) {
            var d = b[0] * c[1] - b[1] * c[0];
            return a[0] = a[1] = 0, a[2] = d, a;
        }, e.lerp = function(a, b, c, d) {
            var e = b[0], f = b[1];
            return a[0] = e + d * (c[0] - e), a[1] = f + d * (c[1] - f), a;
        }, e.random = function(a, b) {
            b = b || 1;
            var c = 2 * d.RANDOM() * Math.PI;
            return a[0] = Math.cos(c) * b, a[1] = Math.sin(c) * b, a;
        }, e.transformMat2 = function(a, b, c) {
            var d = b[0], e = b[1];
            return a[0] = c[0] * d + c[2] * e, a[1] = c[1] * d + c[3] * e, a;
        }, e.transformMat2d = function(a, b, c) {
            var d = b[0], e = b[1];
            return a[0] = c[0] * d + c[2] * e + c[4], a[1] = c[1] * d + c[3] * e + c[5], a;
        }, e.transformMat3 = function(a, b, c) {
            var d = b[0], e = b[1];
            return a[0] = c[0] * d + c[3] * e + c[6], a[1] = c[1] * d + c[4] * e + c[7], a;
        }, e.transformMat4 = function(a, b, c) {
            var d = b[0], e = b[1];
            return a[0] = c[0] * d + c[4] * e + c[12], a[1] = c[1] * d + c[5] * e + c[13], a;
        }, e.forEach = function() {
            var a = e.create();
            return function(b, c, d, e, f, g) {
                var h, i;
                for (c || (c = 2), d || (d = 0), i = e ? Math.min(e * c + d, b.length) : b.length, 
                h = d; h < i; h += c) a[0] = b[h], a[1] = b[h + 1], f(a, a, g), b[h] = a[0], b[h + 1] = a[1];
                return b;
            };
        }(), e.str = function(a) {
            return "vec2(" + a[0] + ", " + a[1] + ")";
        }, a.exports = e;
    } ]);
}), function() {
    function a(c, d) {
        if (c = c || "", d = d || {}, c instanceof a) return c;
        if (!(this instanceof a)) return new a(c, d);
        var e = b(c);
        this._originalInput = c, this._r = e.r, this._g = e.g, this._b = e.b, this._a = e.a, 
        this._roundA = M(100 * this._a) / 100, this._format = d.format || e.format, this._gradientType = d.gradientType, 
        this._r < 1 && (this._r = M(this._r)), this._g < 1 && (this._g = M(this._g)), this._b < 1 && (this._b = M(this._b)), 
        this._ok = e.ok, this._tc_id = K++;
    }
    function b(a) {
        var b = {
            r: 0,
            g: 0,
            b: 0
        }, d = 1, f = !1, h = !1;
        return "string" == typeof a && (a = G(a)), "object" == typeof a && (a.hasOwnProperty("r") && a.hasOwnProperty("g") && a.hasOwnProperty("b") ? (b = c(a.r, a.g, a.b), 
        f = !0, h = "%" === String(a.r).substr(-1) ? "prgb" : "rgb") : a.hasOwnProperty("h") && a.hasOwnProperty("s") && a.hasOwnProperty("v") ? (a.s = D(a.s), 
        a.v = D(a.v), b = g(a.h, a.s, a.v), f = !0, h = "hsv") : a.hasOwnProperty("h") && a.hasOwnProperty("s") && a.hasOwnProperty("l") && (a.s = D(a.s), 
        a.l = D(a.l), b = e(a.h, a.s, a.l), f = !0, h = "hsl"), a.hasOwnProperty("a") && (d = a.a)), 
        d = w(d), {
            ok: f,
            format: a.format || h,
            r: N(255, O(b.r, 0)),
            g: N(255, O(b.g, 0)),
            b: N(255, O(b.b, 0)),
            a: d
        };
    }
    function c(a, b, c) {
        return {
            r: 255 * x(a, 255),
            g: 255 * x(b, 255),
            b: 255 * x(c, 255)
        };
    }
    function d(a, b, c) {
        a = x(a, 255), b = x(b, 255), c = x(c, 255);
        var d, e, f = O(a, b, c), g = N(a, b, c), h = (f + g) / 2;
        if (f == g) d = e = 0; else {
            var i = f - g;
            switch (e = h > .5 ? i / (2 - f - g) : i / (f + g), f) {
              case a:
                d = (b - c) / i + (b < c ? 6 : 0);
                break;

              case b:
                d = (c - a) / i + 2;
                break;

              case c:
                d = (a - b) / i + 4;
            }
            d /= 6;
        }
        return {
            h: d,
            s: e,
            l: h
        };
    }
    function e(a, b, c) {
        function d(a, b, c) {
            return c < 0 && (c += 1), c > 1 && (c -= 1), c < 1 / 6 ? a + 6 * (b - a) * c : c < .5 ? b : c < 2 / 3 ? a + (b - a) * (2 / 3 - c) * 6 : a;
        }
        var e, f, g;
        if (a = x(a, 360), b = x(b, 100), c = x(c, 100), 0 === b) e = f = g = c; else {
            var h = c < .5 ? c * (1 + b) : c + b - c * b, i = 2 * c - h;
            e = d(i, h, a + 1 / 3), f = d(i, h, a), g = d(i, h, a - 1 / 3);
        }
        return {
            r: 255 * e,
            g: 255 * f,
            b: 255 * g
        };
    }
    function f(a, b, c) {
        a = x(a, 255), b = x(b, 255), c = x(c, 255);
        var d, e, f = O(a, b, c), g = N(a, b, c), h = f, i = f - g;
        if (e = 0 === f ? 0 : i / f, f == g) d = 0; else {
            switch (f) {
              case a:
                d = (b - c) / i + (b < c ? 6 : 0);
                break;

              case b:
                d = (c - a) / i + 2;
                break;

              case c:
                d = (a - b) / i + 4;
            }
            d /= 6;
        }
        return {
            h: d,
            s: e,
            v: h
        };
    }
    function g(a, b, c) {
        a = 6 * x(a, 360), b = x(b, 100), c = x(c, 100);
        var d = L.floor(a), e = a - d, f = c * (1 - b), g = c * (1 - e * b), h = c * (1 - (1 - e) * b), i = d % 6;
        return {
            r: 255 * [ c, g, f, f, h, c ][i],
            g: 255 * [ h, c, c, g, f, f ][i],
            b: 255 * [ f, f, h, c, c, g ][i]
        };
    }
    function h(a, b, c, d) {
        var e = [ C(M(a).toString(16)), C(M(b).toString(16)), C(M(c).toString(16)) ];
        return d && e[0].charAt(0) == e[0].charAt(1) && e[1].charAt(0) == e[1].charAt(1) && e[2].charAt(0) == e[2].charAt(1) ? e[0].charAt(0) + e[1].charAt(0) + e[2].charAt(0) : e.join("");
    }
    function i(a, b, c, d) {
        return [ C(E(d)), C(M(a).toString(16)), C(M(b).toString(16)), C(M(c).toString(16)) ].join("");
    }
    function j(b, c) {
        c = 0 === c ? 0 : c || 10;
        var d = a(b).toHsl();
        return d.s -= c / 100, d.s = y(d.s), a(d);
    }
    function k(b, c) {
        c = 0 === c ? 0 : c || 10;
        var d = a(b).toHsl();
        return d.s += c / 100, d.s = y(d.s), a(d);
    }
    function l(b) {
        return a(b).desaturate(100);
    }
    function m(b, c) {
        c = 0 === c ? 0 : c || 10;
        var d = a(b).toHsl();
        return d.l += c / 100, d.l = y(d.l), a(d);
    }
    function n(b, c) {
        c = 0 === c ? 0 : c || 10;
        var d = a(b).toRgb();
        return d.r = O(0, N(255, d.r - M(-c / 100 * 255))), d.g = O(0, N(255, d.g - M(-c / 100 * 255))), 
        d.b = O(0, N(255, d.b - M(-c / 100 * 255))), a(d);
    }
    function o(b, c) {
        c = 0 === c ? 0 : c || 10;
        var d = a(b).toHsl();
        return d.l -= c / 100, d.l = y(d.l), a(d);
    }
    function p(b, c) {
        var d = a(b).toHsl(), e = (M(d.h) + c) % 360;
        return d.h = e < 0 ? 360 + e : e, a(d);
    }
    function q(b) {
        var c = a(b).toHsl();
        return c.h = (c.h + 180) % 360, a(c);
    }
    function r(b) {
        var c = a(b).toHsl(), d = c.h;
        return [ a(b), a({
            h: (d + 120) % 360,
            s: c.s,
            l: c.l
        }), a({
            h: (d + 240) % 360,
            s: c.s,
            l: c.l
        }) ];
    }
    function s(b) {
        var c = a(b).toHsl(), d = c.h;
        return [ a(b), a({
            h: (d + 90) % 360,
            s: c.s,
            l: c.l
        }), a({
            h: (d + 180) % 360,
            s: c.s,
            l: c.l
        }), a({
            h: (d + 270) % 360,
            s: c.s,
            l: c.l
        }) ];
    }
    function t(b) {
        var c = a(b).toHsl(), d = c.h;
        return [ a(b), a({
            h: (d + 72) % 360,
            s: c.s,
            l: c.l
        }), a({
            h: (d + 216) % 360,
            s: c.s,
            l: c.l
        }) ];
    }
    function u(b, c, d) {
        c = c || 6, d = d || 30;
        var e = a(b).toHsl(), f = 360 / d, g = [ a(b) ];
        for (e.h = (e.h - (f * c >> 1) + 720) % 360; --c; ) e.h = (e.h + f) % 360, g.push(a(e));
        return g;
    }
    function v(b, c) {
        c = c || 6;
        for (var d = a(b).toHsv(), e = d.h, f = d.s, g = d.v, h = [], i = 1 / c; c--; ) h.push(a({
            h: e,
            s: f,
            v: g
        })), g = (g + i) % 1;
        return h;
    }
    function w(a) {
        return a = parseFloat(a), (isNaN(a) || a < 0 || a > 1) && (a = 1), a;
    }
    function x(a, b) {
        A(a) && (a = "100%");
        var c = B(a);
        return a = N(b, O(0, parseFloat(a))), c && (a = parseInt(a * b, 10) / 100), L.abs(a - b) < 1e-6 ? 1 : a % b / parseFloat(b);
    }
    function y(a) {
        return N(1, O(0, a));
    }
    function z(a) {
        return parseInt(a, 16);
    }
    function A(a) {
        return "string" == typeof a && -1 != a.indexOf(".") && 1 === parseFloat(a);
    }
    function B(a) {
        return "string" == typeof a && -1 != a.indexOf("%");
    }
    function C(a) {
        return 1 == a.length ? "0" + a : "" + a;
    }
    function D(a) {
        return a <= 1 && (a = 100 * a + "%"), a;
    }
    function E(a) {
        return Math.round(255 * parseFloat(a)).toString(16);
    }
    function F(a) {
        return z(a) / 255;
    }
    function G(a) {
        a = a.replace(I, "").replace(J, "").toLowerCase();
        var b = !1;
        if (Q[a]) a = Q[a], b = !0; else if ("transparent" == a) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
        var c;
        return (c = S.rgb.exec(a)) ? {
            r: c[1],
            g: c[2],
            b: c[3]
        } : (c = S.rgba.exec(a)) ? {
            r: c[1],
            g: c[2],
            b: c[3],
            a: c[4]
        } : (c = S.hsl.exec(a)) ? {
            h: c[1],
            s: c[2],
            l: c[3]
        } : (c = S.hsla.exec(a)) ? {
            h: c[1],
            s: c[2],
            l: c[3],
            a: c[4]
        } : (c = S.hsv.exec(a)) ? {
            h: c[1],
            s: c[2],
            v: c[3]
        } : (c = S.hsva.exec(a)) ? {
            h: c[1],
            s: c[2],
            v: c[3],
            a: c[4]
        } : (c = S.hex8.exec(a)) ? {
            a: F(c[1]),
            r: z(c[2]),
            g: z(c[3]),
            b: z(c[4]),
            format: b ? "name" : "hex8"
        } : (c = S.hex6.exec(a)) ? {
            r: z(c[1]),
            g: z(c[2]),
            b: z(c[3]),
            format: b ? "name" : "hex"
        } : !!(c = S.hex3.exec(a)) && {
            r: z(c[1] + "" + c[1]),
            g: z(c[2] + "" + c[2]),
            b: z(c[3] + "" + c[3]),
            format: b ? "name" : "hex"
        };
    }
    function H(a) {
        var b, c;
        return a = a || {
            level: "AA",
            size: "small"
        }, b = (a.level || "AA").toUpperCase(), c = (a.size || "small").toLowerCase(), "AA" !== b && "AAA" !== b && (b = "AA"), 
        "small" !== c && "large" !== c && (c = "small"), {
            level: b,
            size: c
        };
    }
    var I = /^[\s,#]+/, J = /\s+$/, K = 0, L = Math, M = L.round, N = L.min, O = L.max, P = L.random;
    a.prototype = {
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
            var a = this.toRgb();
            return (299 * a.r + 587 * a.g + 114 * a.b) / 1e3;
        },
        getLuminance: function() {
            var a, b, c, d, e, f, g = this.toRgb();
            return a = g.r / 255, b = g.g / 255, c = g.b / 255, d = a <= .03928 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4), 
            e = b <= .03928 ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4), f = c <= .03928 ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4), 
            .2126 * d + .7152 * e + .0722 * f;
        },
        setAlpha: function(a) {
            return this._a = w(a), this._roundA = M(100 * this._a) / 100, this;
        },
        toHsv: function() {
            var a = f(this._r, this._g, this._b);
            return {
                h: 360 * a.h,
                s: a.s,
                v: a.v,
                a: this._a
            };
        },
        toHsvString: function() {
            var a = f(this._r, this._g, this._b), b = M(360 * a.h), c = M(100 * a.s), d = M(100 * a.v);
            return 1 == this._a ? "hsv(" + b + ", " + c + "%, " + d + "%)" : "hsva(" + b + ", " + c + "%, " + d + "%, " + this._roundA + ")";
        },
        toHsl: function() {
            var a = d(this._r, this._g, this._b);
            return {
                h: 360 * a.h,
                s: a.s,
                l: a.l,
                a: this._a
            };
        },
        toHslString: function() {
            var a = d(this._r, this._g, this._b), b = M(360 * a.h), c = M(100 * a.s), e = M(100 * a.l);
            return 1 == this._a ? "hsl(" + b + ", " + c + "%, " + e + "%)" : "hsla(" + b + ", " + c + "%, " + e + "%, " + this._roundA + ")";
        },
        toHex: function(a) {
            return h(this._r, this._g, this._b, a);
        },
        toHexString: function(a) {
            return "#" + this.toHex(a);
        },
        toHex8: function() {
            return i(this._r, this._g, this._b, this._a);
        },
        toHex8String: function() {
            return "#" + this.toHex8();
        },
        toRgb: function() {
            return {
                r: M(this._r),
                g: M(this._g),
                b: M(this._b),
                a: this._a
            };
        },
        toRgbString: function() {
            return 1 == this._a ? "rgb(" + M(this._r) + ", " + M(this._g) + ", " + M(this._b) + ")" : "rgba(" + M(this._r) + ", " + M(this._g) + ", " + M(this._b) + ", " + this._roundA + ")";
        },
        toPercentageRgb: function() {
            return {
                r: M(100 * x(this._r, 255)) + "%",
                g: M(100 * x(this._g, 255)) + "%",
                b: M(100 * x(this._b, 255)) + "%",
                a: this._a
            };
        },
        toPercentageRgbString: function() {
            return 1 == this._a ? "rgb(" + M(100 * x(this._r, 255)) + "%, " + M(100 * x(this._g, 255)) + "%, " + M(100 * x(this._b, 255)) + "%)" : "rgba(" + M(100 * x(this._r, 255)) + "%, " + M(100 * x(this._g, 255)) + "%, " + M(100 * x(this._b, 255)) + "%, " + this._roundA + ")";
        },
        toName: function() {
            return 0 === this._a ? "transparent" : !(this._a < 1) && (R[h(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function(b) {
            var c = "#" + i(this._r, this._g, this._b, this._a), d = c, e = this._gradientType ? "GradientType = 1, " : "";
            if (b) {
                d = a(b).toHex8String();
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + e + "startColorstr=" + c + ",endColorstr=" + d + ")";
        },
        toString: function(a) {
            var b = !!a;
            a = a || this._format;
            var c = !1, d = this._a < 1 && this._a >= 0;
            return b || !d || "hex" !== a && "hex6" !== a && "hex3" !== a && "name" !== a ? ("rgb" === a && (c = this.toRgbString()), 
            "prgb" === a && (c = this.toPercentageRgbString()), "hex" !== a && "hex6" !== a || (c = this.toHexString()), 
            "hex3" === a && (c = this.toHexString(!0)), "hex8" === a && (c = this.toHex8String()), 
            "name" === a && (c = this.toName()), "hsl" === a && (c = this.toHslString()), "hsv" === a && (c = this.toHsvString()), 
            c || this.toHexString()) : "name" === a && 0 === this._a ? this.toName() : this.toRgbString();
        },
        _applyModification: function(a, b) {
            var c = a.apply(null, [ this ].concat([].slice.call(b)));
            return this._r = c._r, this._g = c._g, this._b = c._b, this.setAlpha(c._a), this;
        },
        lighten: function() {
            return this._applyModification(m, arguments);
        },
        brighten: function() {
            return this._applyModification(n, arguments);
        },
        darken: function() {
            return this._applyModification(o, arguments);
        },
        desaturate: function() {
            return this._applyModification(j, arguments);
        },
        saturate: function() {
            return this._applyModification(k, arguments);
        },
        greyscale: function() {
            return this._applyModification(l, arguments);
        },
        spin: function() {
            return this._applyModification(p, arguments);
        },
        _applyCombination: function(a, b) {
            return a.apply(null, [ this ].concat([].slice.call(b)));
        },
        analogous: function() {
            return this._applyCombination(u, arguments);
        },
        complement: function() {
            return this._applyCombination(q, arguments);
        },
        monochromatic: function() {
            return this._applyCombination(v, arguments);
        },
        splitcomplement: function() {
            return this._applyCombination(t, arguments);
        },
        triad: function() {
            return this._applyCombination(r, arguments);
        },
        tetrad: function() {
            return this._applyCombination(s, arguments);
        }
    }, a.fromRatio = function(b, c) {
        if ("object" == typeof b) {
            var d = {};
            for (var e in b) b.hasOwnProperty(e) && (d[e] = "a" === e ? b[e] : D(b[e]));
            b = d;
        }
        return a(b, c);
    }, a.equals = function(b, c) {
        return !(!b || !c) && a(b).toRgbString() == a(c).toRgbString();
    }, a.random = function() {
        return a.fromRatio({
            r: P(),
            g: P(),
            b: P()
        });
    }, a.mix = function(b, c, d) {
        d = 0 === d ? 0 : d || 50;
        var e, f = a(b).toRgb(), g = a(c).toRgb(), h = d / 100, i = 2 * h - 1, j = g.a - f.a;
        e = i * j == -1 ? i : (i + j) / (1 + i * j), e = (e + 1) / 2;
        var k = 1 - e;
        return a({
            r: g.r * e + f.r * k,
            g: g.g * e + f.g * k,
            b: g.b * e + f.b * k,
            a: g.a * h + f.a * (1 - h)
        });
    }, a.readability = function(b, c) {
        var d = a(b), e = a(c);
        return (Math.max(d.getLuminance(), e.getLuminance()) + .05) / (Math.min(d.getLuminance(), e.getLuminance()) + .05);
    }, a.isReadable = function(b, c, d) {
        var e, f, g = a.readability(b, c);
        switch (f = !1, e = H(d), e.level + e.size) {
          case "AAsmall":
          case "AAAlarge":
            f = g >= 4.5;
            break;

          case "AAlarge":
            f = g >= 3;
            break;

          case "AAAsmall":
            f = g >= 7;
        }
        return f;
    }, a.mostReadable = function(b, c, d) {
        var e, f, g, h, i = null, j = 0;
        d = d || {}, f = d.includeFallbackColors, g = d.level, h = d.size;
        for (var k = 0; k < c.length; k++) (e = a.readability(b, c[k])) > j && (j = e, i = a(c[k]));
        return a.isReadable(b, i, {
            level: g,
            size: h
        }) || !f ? i : (d.includeFallbackColors = !1, a.mostReadable(b, [ "#fff", "#000" ], d));
    };
    var Q = a.names = {
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
    }, R = a.hexNames = function(a) {
        var b = {};
        for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
        return b;
    }(Q), S = function() {
        var a = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)", b = "[\\s|\\(]+(" + a + ")[,|\\s]+(" + a + ")[,|\\s]+(" + a + ")\\s*\\)?", c = "[\\s|\\(]+(" + a + ")[,|\\s]+(" + a + ")[,|\\s]+(" + a + ")[,|\\s]+(" + a + ")\\s*\\)?";
        return {
            rgb: new RegExp("rgb" + b),
            rgba: new RegExp("rgba" + c),
            hsl: new RegExp("hsl" + b),
            hsla: new RegExp("hsla" + c),
            hsv: new RegExp("hsv" + b),
            hsva: new RegExp("hsva" + c),
            hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
    }();
    "undefined" != typeof module && module.exports ? module.exports = a : "function" == typeof define && define.amd ? define(function() {
        return a;
    }) : window.tinycolor = a;
}();

var appRequestCounter = 0, appRequestCallbacks = {}, appRequestCache = new Map(), benchmarks = [], startTime = 0, HSPlane;

!function(a) {
    a[a.horizontal = 0] = "horizontal", a[a.vertical = 1] = "vertical";
}(HSPlane || (HSPlane = {}));

var HSMagnitude;

!function(a) {
    a[a.positive = 0] = "positive", a[a.negative = 1] = "negative", a[a.none = 2] = "none";
}(HSMagnitude || (HSMagnitude = {}));

var HSDirection;

!function(a) {
    a[a.up = 0] = "up", a[a.down = 1] = "down", a[a.left = 2] = "left", a[a.right = 3] = "right";
}(HSDirection || (HSDirection = {})), Array.prototype.remove = function(a) {
    var b = this.indexOf(a);
    void 0 !== b && this.splice(b, 1);
};

var iOS = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent), iOSApp = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), HSManagedObject = function() {
    function a(a) {
        this.context = a, this.description = this.constructor.name, a.insertObject(this);
    }
    return a;
}();

HSManagedObject.key = "HSManagedObject";

var HSBlockType;

!function(a) {
    a[a.WaitTilTimestamp = 19] = "WaitTilTimestamp", a[a.None = 22] = "None", a[a.Move = 23] = "Move", 
    a[a.Rotate = 24] = "Rotate", a[a.ChangeX = 27] = "ChangeX", a[a.ChangeY = 28] = "ChangeY", 
    a[a.Scale = 29] = "Scale", a[a.Clear = 30] = "Clear", a[a.StrokeWidth = 31] = "StrokeWidth", 
    a[a.StrokeColor = 32] = "StrokeColor", a[a.ChangeCostume = 33] = "ChangeCostume", 
    a[a.ChangeSpeed = 34] = "ChangeSpeed", a[a.Wait = 35] = "Wait", a[a.SetOpacity = 36] = "SetOpacity", 
    a[a.PenDown = 37] = "PenDown", a[a.PenUp = 38] = "PenUp", a[a.SetHeading = 39] = "SetHeading", 
    a[a.SetText = 40] = "SetText", a[a.SetPosition = 41] = "SetPosition", a[a.SendToBack = 42] = "SendToBack", 
    a[a.BringToFront = 43] = "BringToFront", a[a.ChangeVariable = 44] = "ChangeVariable", 
    a[a.SetVariable = 45] = "SetVariable", a[a.MoveWithTrail = 46] = "MoveWithTrail", 
    a[a.SetInvisibility = 47] = "SetInvisibility", a[a.Grow = 48] = "Grow", a[a.Shrink = 49] = "Shrink", 
    a[a.Flip = 50] = "Flip", a[a.SetSize = 51] = "SetSize", a[a.PlaySound = 52] = "PlaySound", 
    a[a.MakeAClone = 53] = "MakeAClone", a[a.SetColor = 54] = "SetColor", a[a.Destroy = 55] = "Destroy", 
    a[a.SetImage = 56] = "SetImage", a[a.SetWidthAndHeight = 57] = "SetWidthAndHeight", 
    a[a.SetZIndex = 58] = "SetZIndex", a[a.WaitSeconds = 61] = "WaitSeconds", a[a.PlaySoundSeconds = 62] = "PlaySoundSeconds", 
    a[a.LeaveATrail = 26] = "LeaveATrail", a[a.Repeat = 120] = "Repeat", a[a.RepeatForever = 121] = "RepeatForever", 
    a[a.CheckOnceIf = 122] = "CheckOnceIf", a[a.Ability = 123] = "Ability", a[a.CheckIfElse = 124] = "CheckIfElse", 
    a[a.ChangeScene = 125] = "ChangeScene", a[a.Random = 233] = "Random", a[a.XPos = 234] = "XPos", 
    a[a.YPos = 235] = "YPos", a[a.Random110 = 236] = "Random110", a[a.Random1100 = 237] = "Random1100", 
    a[a.Random11000 = 238] = "Random11000", a[a.Variable = 239] = "Variable", a[a.ConditionalOperatorEquals = 1e3] = "ConditionalOperatorEquals", 
    a[a.ConditionalOperatorNotEquals = 1001] = "ConditionalOperatorNotEquals", a[a.ConditionalOperatorLessThan = 1002] = "ConditionalOperatorLessThan", 
    a[a.ConditionalOperatorGreaterThan = 1003] = "ConditionalOperatorGreaterThan", a[a.ConditionalOperatorAnd = 1004] = "ConditionalOperatorAnd", 
    a[a.ConditionalOperatorOr = 1005] = "ConditionalOperatorOr", a[a.ConditionalOperatorGreaterThanOrEqualTo = 1006] = "ConditionalOperatorGreaterThanOrEqualTo", 
    a[a.ConditionalOperatorLessThanOrEqualTo = 1007] = "ConditionalOperatorLessThanOrEqualTo", 
    a[a.HS_END_OF_CONDITIONAL_OPERATORS = 1008] = "HS_END_OF_CONDITIONAL_OPERATORS", 
    a[a.TraitRotation = 2e3] = "TraitRotation", a[a.TraitXPosition = 2001] = "TraitXPosition", 
    a[a.TraitYPosition = 2002] = "TraitYPosition", a[a.TraitInvisibility = 2003] = "TraitInvisibility", 
    a[a.TraitSize = 2004] = "TraitSize", a[a.TraitSpeed = 2005] = "TraitSpeed", a[a.TraitCloneIndex = 2006] = "TraitCloneIndex", 
    a[a.TraitTotalClones = 2007] = "TraitTotalClones", a[a.TraitWidth = 2008] = "TraitWidth", 
    a[a.TraitHeight = 2009] = "TraitHeight", a[a.TraitZIndex = 2010] = "TraitZIndex", 
    a[a.HS_END_OF_OBJECT_TRAITS = 2011] = "HS_END_OF_OBJECT_TRAITS", a[a.StageTraitWidth = 3e3] = "StageTraitWidth", 
    a[a.StageTraitHeight = 3001] = "StageTraitHeight", a[a.StageTraitTiltUp = 3002] = "StageTraitTiltUp", 
    a[a.StageTraitTiltDown = 3003] = "StageTraitTiltDown", a[a.StageTraitTiltLeft = 3004] = "StageTraitTiltLeft", 
    a[a.StageTraitTiltRight = 3005] = "StageTraitTiltRight", a[a.StageTraitLastTouchX = 3006] = "StageTraitLastTouchX", 
    a[a.StageTraitLastTouchY = 3007] = "StageTraitLastTouchY", a[a.StageTraitTotalObjects = 3008] = "StageTraitTotalObjects", 
    a[a.HS_END_OF_STAGE_TRAITS = 3009] = "HS_END_OF_STAGE_TRAITS", a[a.MathOperatorAdd = 4e3] = "MathOperatorAdd", 
    a[a.MathOperatorSubtract = 4001] = "MathOperatorSubtract", a[a.MathOperatorMultiply = 4002] = "MathOperatorMultiply", 
    a[a.MathOperatorDivide = 4003] = "MathOperatorDivide", a[a.MathOperatorRandom = 4004] = "MathOperatorRandom", 
    a[a.MathOperatorPower = 4005] = "MathOperatorPower", a[a.MathOperatorSquareRoot = 4006] = "MathOperatorSquareRoot", 
    a[a.MathOperatorSine = 4007] = "MathOperatorSine", a[a.MathOperatorCosine = 4008] = "MathOperatorCosine", 
    a[a.MathOperatorRound = 4009] = "MathOperatorRound", a[a.MathOperatorAbs = 4010] = "MathOperatorAbs", 
    a[a.MathOperatorModulo = 4011] = "MathOperatorModulo", a[a.MathOperatorTangent = 4012] = "MathOperatorTangent", 
    a[a.MathOperatorInverseSine = 4013] = "MathOperatorInverseSine", a[a.MathOperatorInverseCosine = 4014] = "MathOperatorInverseCosine", 
    a[a.MathOperatorInverseTangent = 4015] = "MathOperatorInverseTangent", a[a.MathOperatorMaximum = 4016] = "MathOperatorMaximum", 
    a[a.MathOperatorMinimum = 4017] = "MathOperatorMinimum", a[a.MathOperatorFloor = 4018] = "MathOperatorFloor", 
    a[a.MathOperatorCeiling = 4019] = "MathOperatorCeiling", a[a.HS_END_OF_MATH_OPERATORS = 4020] = "HS_END_OF_MATH_OPERATORS", 
    a[a.ColorOperatorRandom = 5e3] = "ColorOperatorRandom", a[a.ColorOperatorRGB = 5001] = "ColorOperatorRGB", 
    a[a.ColorOperatorHSB = 5002] = "ColorOperatorHSB", a[a.HS_END_OF_COLOR_OPERATORS = 5003] = "HS_END_OF_COLOR_OPERATORS", 
    a[a.Rule = 6e3] = "Rule", a[a.RulePreview = 6001] = "RulePreview", a[a.EventOperatorStart = 7e3] = "EventOperatorStart", 
    a[a.EventOperatorTap = 7001] = "EventOperatorTap", a[a.EventOperatorIsTouching = 7002] = "EventOperatorIsTouching", 
    a[a.EventOperatorHold = 7003] = "EventOperatorHold", a[a.EventOperatorTiltRight = 7004] = "EventOperatorTiltRight", 
    a[a.EventOperatorTiltLeft = 7005] = "EventOperatorTiltLeft", a[a.EventOperatorTiltUp = 7006] = "EventOperatorTiltUp", 
    a[a.EventOperatorTiltDown = 7007] = "EventOperatorTiltDown", a[a.EventOperatorLoudNoise = 7008] = "EventOperatorLoudNoise", 
    a[a.EventOperatorShake = 7009] = "EventOperatorShake", a[a.EventOperatorBump = 7010] = "EventOperatorBump", 
    a[a.EventOperatorSwipeRight = 7011] = "EventOperatorSwipeRight", a[a.EventOperatorSwipeLeft = 7012] = "EventOperatorSwipeLeft", 
    a[a.EventOperatorSwipeUp = 7013] = "EventOperatorSwipeUp", a[a.EventOperatorSwipeDown = 7014] = "EventOperatorSwipeDown", 
    a[a.EventOperatorEnterTheWorld = 7015] = "EventOperatorEnterTheWorld", a[a.EventOperatorTiltRightEditor = 7016] = "EventOperatorTiltRightEditor", 
    a[a.EventOperatorTiltLeftEditor = 7017] = "EventOperatorTiltLeftEditor", a[a.EventOperatorTiltUpEditor = 7018] = "EventOperatorTiltUpEditor", 
    a[a.EventOperatorTiltDownEditor = 7019] = "EventOperatorTiltDownEditor", a[a.EventOperatorNotPressed = 7020] = "EventOperatorNotPressed", 
    a[a.EventOperatorGamePlaying = 7021] = "EventOperatorGamePlaying", a[a.EventOperatorTouchEnds = 7022] = "EventOperatorTouchEnds", 
    a[a.HS_END_OF_EVENT_OPERATORS = 7023] = "HS_END_OF_EVENT_OPERATORS", a[a.Object = 8e3] = "Object", 
    a[a.AnyObject = 8001] = "AnyObject", a[a.ScreenEdge = 8002] = "ScreenEdge", a[a.Device = 8003] = "Device", 
    a[a.Self = 8004] = "Self", a[a.OriginalObject = 8005] = "OriginalObject", a[a.HS_END_OF_EVENT_PARAMETER_BLOCKS = 8006] = "HS_END_OF_EVENT_PARAMETER_BLOCKS";
}(HSBlockType || (HSBlockType = {}));

var HSEventType;

!function(a) {
    a[a.HSEventOnStart = 1239] = "HSEventOnStart", a[a.HSEventTouchedObject = 1240] = "HSEventTouchedObject", 
    a[a.HSEventTapStage = 1241] = "HSEventTapStage", a[a.HSEventShake = 1242] = "HSEventShake", 
    a[a.HSEventTiltRight = 1243] = "HSEventTiltRight", a[a.HSEventTiltLeft = 1244] = "HSEventTiltLeft", 
    a[a.HSEventTiltDown = 1245] = "HSEventTiltDown", a[a.HSEventTiltUp = 1246] = "HSEventTiltUp", 
    a[a.HSEventLoudNoise = 1247] = "HSEventLoudNoise", a[a.HSEventCollision = 1248] = "HSEventCollision", 
    a[a.HSEventHeldObject = 1249] = "HSEventHeldObject", a[a.HSEventEnteredWorld = 1250] = "HSEventEnteredWorld";
}(HSEventType || (HSEventType = {}));

var HSObjectType;

!function(a) {
    a[a.monkey = 0] = "monkey", a[a.text = 1] = "text", a[a.octopus = 2] = "octopus", 
    a[a.gorilla = 3] = "gorilla", a[a.cupcake = 4] = "cupcake", a[a.bear = 5] = "bear", 
    a[a.dino = 6] = "dino", a[a.frog = 7] = "frog", a[a.greenman = 8] = "greenman", 
    a[a.mustache = 9] = "mustache", a[a.spacepod = 10] = "spacepod", a[a.zombieBear = 11] = "zombieBear", 
    a[a.ghoulopus = 12] = "ghoulopus", a[a.bats = 13] = "bats", a[a.frankenrilla = 14] = "frankenrilla", 
    a[a.jodyWitch = 15] = "jodyWitch", a[a.cauldron = 16] = "cauldron", a[a.pumpkin = 17] = "pumpkin", 
    a[a.broom = 18] = "broom", a[a.lantern = 19] = "lantern", a[a.parrotFlying = 20] = "parrotFlying", 
    a[a.mandrill = 21] = "mandrill", a[a.mosquito = 22] = "mosquito", a[a.missChief = 23] = "missChief", 
    a[a.venus = 24] = "venus", a[a.jeepers = 25] = "jeepers", a[a.banyan = 26] = "banyan", 
    a[a.stargirl = 27] = "stargirl", a[a.astro = 28] = "astro", a[a.chillanna = 29] = "chillanna", 
    a[a.robo = 30] = "robo", a[a.raccoon = 31] = "raccoon", a[a.bird = 32] = "bird", 
    a[a.HS_END_OF_CHARACTERS = 33] = "HS_END_OF_CHARACTERS", a[a.square = 34] = "square", 
    a[a.circle = 35] = "circle", a[a.hexagon = 36] = "hexagon", a[a.triangle = 37] = "triangle", 
    a[a.rightTriangle = 38] = "rightTriangle", a[a.rectangle = 39] = "rectangle", a[a.heart = 40] = "heart", 
    a[a.star = 41] = "star", a[a.arch = 42] = "arch", a[a.parallelogram = 43] = "parallelogram", 
    a[a.squiggle = 44] = "squiggle", a[a.donut = 45] = "donut", a[a.tetrisZ = 46] = "tetrisZ", 
    a[a.tetrisT = 47] = "tetrisT", a[a.tetrisL = 48] = "tetrisL", a[a.corner = 49] = "corner", 
    a[a.flower = 50] = "flower", a[a.threeProngedBoomerang = 51] = "threeProngedBoomerang", 
    a[a.squishedBox = 52] = "squishedBox", a[a.bead = 53] = "bead", a[a.chevron = 54] = "chevron", 
    a[a.xShape = 55] = "xShape", a[a.tetrisLine = 56] = "tetrisLine", a[a.HS_END_OF_SHAPES = 57] = "HS_END_OF_SHAPES", 
    a[a.toucan = 58] = "toucan", a[a.anteater = 59] = "anteater", a[a.crocodile = 60] = "crocodile", 
    a[a.sloth = 61] = "sloth", a[a.iguana = 62] = "iguana", a[a.hut = 63] = "hut", a[a.penguin = 64] = "penguin", 
    a[a.winterQueen = 65] = "winterQueen", a[a.shyYeti = 66] = "shyYeti", a[a.deer = 67] = "deer", 
    a[a.elf = 68] = "elf", a[a.snowGlobe = 69] = "snowGlobe", a[a.polarbear = 70] = "polarbear", 
    a[a.sleigh = 71] = "sleigh", a[a.mistletoe = 72] = "mistletoe", a[a.snowMan = 73] = "snowMan", 
    a[a.snowflake = 74] = "snowflake", a[a.roundedSquareFullSize = 100] = "roundedSquareFullSize", 
    a[a.squareFullSize = 101] = "squareFullSize", a[a.circleFullSize = 102] = "circleFullSize", 
    a[a.hexagonFullSize = 103] = "hexagonFullSize", a[a.triangleFullSize = 104] = "triangleFullSize", 
    a[a.rightTriangleFullSize = 105] = "rightTriangleFullSize", a[a.rectangleFullSize = 106] = "rectangleFullSize", 
    a[a.heartFullSize = 107] = "heartFullSize", a[a.starFullSize = 108] = "starFullSize", 
    a[a.archFullSize = 109] = "archFullSize", a[a.parallelogramTallFullSize = 110] = "parallelogramTallFullSize", 
    a[a.squiggleFullSize = 111] = "squiggleFullSize", a[a.donutFullSize = 112] = "donutFullSize", 
    a[a.tetrisZFullSize = 113] = "tetrisZFullSize", a[a.tetrisTFullSize = 114] = "tetrisTFullSize", 
    a[a.tetrisLFullSize = 115] = "tetrisLFullSize", a[a.cornerFullSize = 116] = "cornerFullSize", 
    a[a.flowerFullSize = 117] = "flowerFullSize", a[a.fanbladeFullSize = 118] = "fanbladeFullSize", 
    a[a.squishedBoxFullSize = 119] = "squishedBoxFullSize", a[a.roundedRightTriangleFullSize = 120] = "roundedRightTriangleFullSize", 
    a[a.arrowRoundedFullSize = 121] = "arrowRoundedFullSize", a[a.beadFullSize = 122] = "beadFullSize", 
    a[a.parallelogramWideFullSize = 123] = "parallelogramWideFullSize", a[a.chevronFullSize = 124] = "chevronFullSize", 
    a[a.xFullSize = 125] = "xFullSize", a[a.tetrisLineFullSize = 126] = "tetrisLineFullSize", 
    a[a.hexagonV3 = 150] = "hexagonV3", a[a.triangleV3 = 151] = "triangleV3", a[a.rectangleV3 = 152] = "rectangleV3", 
    a[a.heartV3 = 153] = "heartV3", a[a.starV3 = 154] = "starV3", a[a.archV3 = 155] = "archV3", 
    a[a.squiggleV3 = 156] = "squiggleV3", a[a.tetrisZV3 = 157] = "tetrisZV3", a[a.tetrisTV3 = 158] = "tetrisTV3", 
    a[a.tetrisLV3 = 159] = "tetrisLV3", a[a.fanbladeV3 = 160] = "fanbladeV3", a[a.arrowRoundedV3 = 161] = "arrowRoundedV3", 
    a[a.beadV3 = 162] = "beadV3", a[a.parallelogramWideV3 = 163] = "parallelogramWideV3", 
    a[a.chevronV3 = 164] = "chevronV3", a[a.HS_END_OF_FULL_SIZE_SHAPES = 165] = "HS_END_OF_FULL_SIZE_SHAPES", 
    a[a.HS_NUMBER_OF_OBJECTS = 166] = "HS_NUMBER_OF_OBJECTS", a[a.image = 2e3] = "image", 
    a[a.nil = 1e4] = "nil", a[a.edgeOfScreen = 3e4] = "edgeOfScreen";
}(HSObjectType || (HSObjectType = {}));

var HSOBJECT_SIZES = {};

HSOBJECT_SIZES[HSObjectType.text] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.octopus] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.gorilla] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.cupcake] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.bear] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.dino] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.frog] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.greenman] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.mustache] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.spacepod] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.zombieBear] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.ghoulopus] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.bats] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.frankenrilla] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.jodyWitch] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.cauldron] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.pumpkin] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.broom] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.lantern] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.parrotFlying] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.mandrill] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.mosquito] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.missChief] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.venus] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.jeepers] = {
    width: 390,
    height: 390
}, HSOBJECT_SIZES[HSObjectType.banyan] = {
    width: 600,
    height: 600
}, HSOBJECT_SIZES[HSObjectType.stargirl] = {
    width: 172.5,
    height: 172.5
}, HSOBJECT_SIZES[HSObjectType.astro] = {
    width: 187.5,
    height: 187.5
}, HSOBJECT_SIZES[HSObjectType.chillanna] = {
    width: 172.5,
    height: 172.5
}, HSOBJECT_SIZES[HSObjectType.robo] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.raccoon] = {
    width: 172.5,
    height: 172.5
}, HSOBJECT_SIZES[HSObjectType.bird] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.square] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.circle] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.hexagon] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.triangle] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.rightTriangle] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.rectangle] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.heart] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.star] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.arch] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.parallelogram] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.squiggle] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.donut] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.tetrisZ] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.tetrisT] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.tetrisL] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.corner] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.flower] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.threeProngedBoomerang] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.squishedBox] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.bead] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.chevron] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.xShape] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.tetrisLine] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.toucan] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.anteater] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.crocodile] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.sloth] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.iguana] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.hut] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.penguin] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.winterQueen] = {
    width: 225,
    height: 225
}, HSOBJECT_SIZES[HSObjectType.shyYeti] = {
    width: 300,
    height: 300
}, HSOBJECT_SIZES[HSObjectType.deer] = {
    width: 255,
    height: 255
}, HSOBJECT_SIZES[HSObjectType.elf] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.snowGlobe] = {
    width: 450,
    height: 450
}, HSOBJECT_SIZES[HSObjectType.polarbear] = {
    width: 300,
    height: 300
}, HSOBJECT_SIZES[HSObjectType.sleigh] = {
    width: 300,
    height: 300
}, HSOBJECT_SIZES[HSObjectType.mistletoe] = {
    width: 129,
    height: 129
}, HSOBJECT_SIZES[HSObjectType.snowMan] = {
    width: 225,
    height: 225
}, HSOBJECT_SIZES[HSObjectType.snowflake] = {
    width: 45,
    height: 45
}, HSOBJECT_SIZES[HSObjectType.tetrisTFullSize] = {
    width: 150,
    height: 100
}, HSOBJECT_SIZES[HSObjectType.rectangleFullSize] = {
    width: 150,
    height: 112.5
}, HSOBJECT_SIZES[HSObjectType.archFullSize] = {
    width: 150,
    height: 75
}, HSOBJECT_SIZES[HSObjectType.rightTriangleFullSize] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.tetrisLFullSize] = {
    width: 150,
    height: 100
}, HSOBJECT_SIZES[HSObjectType.roundedSquareFullSize] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.roundedRightTriangleFullSize] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.squishedBoxFullSize] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.starFullSize] = {
    width: 150,
    height: 142.66
}, HSOBJECT_SIZES[HSObjectType.parallelogramTallFullSize] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.arrowRoundedFullSize] = {
    width: 106.07,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.hexagonFullSize] = {
    width: 150,
    height: 129.9
}, HSOBJECT_SIZES[HSObjectType.squiggleFullSize] = {
    width: 150,
    height: 69.64
}, HSOBJECT_SIZES[HSObjectType.squareFullSize] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.chevronFullSize] = {
    width: 150,
    height: 129.9
}, HSOBJECT_SIZES[HSObjectType.flowerFullSize] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.heartFullSize] = {
    width: 150,
    height: 126.77
}, HSOBJECT_SIZES[HSObjectType.parallelogramWideFullSize] = {
    width: 150,
    height: 75
}, HSOBJECT_SIZES[HSObjectType.beadFullSize] = {
    width: 150,
    height: 76.95
}, HSOBJECT_SIZES[HSObjectType.triangleFullSize] = {
    width: 150,
    height: 129.9
}, HSOBJECT_SIZES[HSObjectType.xFullSize] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.donutFullSize] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.tetrisZFullSize] = {
    width: 150,
    height: 100
}, HSOBJECT_SIZES[HSObjectType.tetrisLineFullSize] = {
    width: 200,
    height: 50
}, HSOBJECT_SIZES[HSObjectType.fanbladeFullSize] = {
    width: 150,
    height: 137.26
}, HSOBJECT_SIZES[HSObjectType.cornerFullSize] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.circleFullSize] = {
    width: 150,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.tetrisTV3] = {
    width: 150,
    height: 100
}, HSOBJECT_SIZES[HSObjectType.rectangleV3] = {
    width: 150,
    height: 100
}, HSOBJECT_SIZES[HSObjectType.archV3] = {
    width: 150,
    height: 75
}, HSOBJECT_SIZES[HSObjectType.tetrisLV3] = {
    width: 150,
    height: 100
}, HSOBJECT_SIZES[HSObjectType.starV3] = {
    width: 150,
    height: 143
}, HSOBJECT_SIZES[HSObjectType.arrowRoundedV3] = {
    width: 106,
    height: 150
}, HSOBJECT_SIZES[HSObjectType.hexagonV3] = {
    width: 150,
    height: 130
}, HSOBJECT_SIZES[HSObjectType.squiggleV3] = {
    width: 150,
    height: 70
}, HSOBJECT_SIZES[HSObjectType.chevronV3] = {
    width: 150,
    height: 130
}, HSOBJECT_SIZES[HSObjectType.heartV3] = {
    width: 150,
    height: 127
}, HSOBJECT_SIZES[HSObjectType.parallelogramWideV3] = {
    width: 150,
    height: 75
}, HSOBJECT_SIZES[HSObjectType.beadV3] = {
    width: 150,
    height: 77
}, HSOBJECT_SIZES[HSObjectType.triangleV3] = {
    width: 150,
    height: 130
}, HSOBJECT_SIZES[HSObjectType.tetrisZV3] = {
    width: 150,
    height: 100
}, HSOBJECT_SIZES[HSObjectType.fanbladeV3] = {
    width: 150,
    height: 137
};

var __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, BLOCK_TYPE_KEY = "type", PARAMETERS_KEY = "parameters", PARAMS_KEY = "params", HSBlockClass;

!function(a) {
    a[a.Method = 0] = "Method", a[a.Control = 1] = "Control", a[a.ConditionalControl = 2] = "ConditionalControl", 
    a[a.Variable = 3] = "Variable";
}(HSBlockClass || (HSBlockClass = {}));

var HSBlock = function(a) {
    function b() {
        var b = a.apply(this, arguments) || this;
        return b.parameters = [], b.isControl = !1, b;
    }
    return __extends(b, a), b.prototype.parseJSON = function(a) {
        var b = this;
        void 0 === a && (a = {}), this.type = this.type || parseInt(a[BLOCK_TYPE_KEY]), 
        (a[PARAMETERS_KEY] || a[PARAMS_KEY] || []).forEach(function(a) {
            var c = new HSParameter(b.context);
            c.parseJSON(a), b.parameters.push(c);
        });
    }, b.prototype.stageParameters = function() {
        return this.parameters.map(function(a) {
            return a.stageParameter();
        });
    }, b.prototype.toString = function() {
        return SourceFormatter.blockToSrc(this);
    }, b.blockClassForDict = function(a) {
        switch (void 0 === a && (a = {}), a[BLOCK_TYPE_KEY]) {
          case HSBlockType.Repeat:
          case HSBlockType.LeaveATrail:
          case HSBlockType.RepeatForever:
          case HSBlockType.Ability:
            return HSBlockClass.Control;

          case HSBlockType.CheckOnceIf:
          case HSBlockType.CheckIfElse:
            return HSBlockClass.ConditionalControl;
        }
        return HSBlockClass.Method;
    }, b;
}(HSManagedObject);

HSBlock.key = "HSBlock";

var __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, CONTROL_SCRIPT_KEY = "controlScript", HSControlBlock = function(a) {
    function b() {
        var b = a.apply(this, arguments) || this;
        return b.scripts = [], b.isControl = !0, b;
    }
    return __extends(b, a), b.prototype.stageBlock = function() {
        var a = this.scripts[0] || new HSScript(this.context);
        return new HSStageControl(this.type, [ a ], this.stageParameters());
    }, b.prototype.parseJSON = function(b) {
        void 0 === b && (b = {}), a.prototype.parseJSON.call(this, b);
        var c = b[CONTROL_SCRIPT_KEY] || [], d = c[SCRIPT_ID_KEY] || "", e = this.context.findWithObjectID("HSScript", d);
        this.scripts.push(e || new HSScript(this.context));
    }, b;
}(HSBlock);

HSControlBlock.key = "HSControlBlock";

var __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, TRAIT_OBJECT_ID_KEY = "HSTraitObjectIDKey", TRAIT_ID_KEY = "HSTraitIDKey", TRAIT_TYPE_KEY = "HSTraitTypeKey", MAX_FLOAT = 3.4028234663852886e38, HSParameterBlock = function(a) {
    function b() {
        return a.apply(this, arguments) || this;
    }
    return __extends(b, a), b.prototype.parseJSON = function(b) {
        void 0 === b && (b = {}), a.prototype.parseJSON.call(this, b), b[TRAIT_ID_KEY] && this.parseTrait(b);
    }, b.prototype.stageParameterBlock = function() {
        return new HSStageParameterBlock(this);
    }, b.prototype.matchesObject = function(a) {
        return this.object ? this.object === a : !a;
    }, b.prototype.parseTrait = function(a) {
        this.object = this.context.findWithObjectID(HSObject.key, a[TRAIT_OBJECT_ID_KEY]), 
        this.objectID = a[TRAIT_ID_KEY], this.type = a[TRAIT_TYPE_KEY], this.objectReferenceType = a.HSTraitObjectParameterTypeKey;
    }, b.prototype.computedValue = function(a) {
        var b = this.stageObjects(a)[0];
        switch (this.type) {
          case HSBlockType.Random110:
          case HSBlockType.Random1100:
          case HSBlockType.Random11000:
          case HSBlockType.MathOperatorRandom:
          case HSBlockType.Random:
            var c = this.secondParameterValue(a), d = this.firstParameterValue(a);
            return Math.floor(Math.random() * (c - d + 1)) + d;

		  case HSBlockType.None: //AE_MOD
			if (/^_ae_webplayer_action:/g.test(this.parameters[0].value)){
				return AE_MOD.webplayer_action(this.parameters[0].value.split('_ae_webplayer_action:')[1], ((this.parameters[1])?this.secondParameterValue(a):undefined),this);
			}
			return 0;

          case HSBlockType.MathOperatorAdd:
            return this.secondParameterValue(a) + this.firstParameterValue(a);

          case HSBlockType.MathOperatorSubtract:
            return this.firstParameterValue(a) - this.secondParameterValue(a);

          case HSBlockType.MathOperatorMultiply:
            return this.firstParameterValue(a) * this.secondParameterValue(a);

          case HSBlockType.MathOperatorDivide:
            var e = this.secondParameterValue(a);
            return 0 === e ? 0 : this.firstParameterValue(a) / e;

          case HSBlockType.MathOperatorSine:
            return Math.sin(degreesToRadians(this.firstParameterValue(a)));

          case HSBlockType.MathOperatorCosine:
            return Math.cos(degreesToRadians(this.firstParameterValue(a)));

          case HSBlockType.MathOperatorTangent:
            return Math.tan(degreesToRadians(this.firstParameterValue(a)));

          case HSBlockType.MathOperatorInverseSine:
            return radiansToDegrees(Math.asin(this.firstParameterValue(a)) || 0);

          case HSBlockType.MathOperatorInverseCosine:
            return radiansToDegrees(Math.acos(this.firstParameterValue(a)) || 0);

          case HSBlockType.MathOperatorInverseTangent:
            return radiansToDegrees(Math.atan(this.firstParameterValue(a)) || 0);

          case HSBlockType.MathOperatorMaximum:
            return Math.max(this.firstParameterValue(a), this.secondParameterValue(a));

          case HSBlockType.MathOperatorMinimum:
            return Math.min(this.firstParameterValue(a), this.secondParameterValue(a));

          case HSBlockType.MathOperatorSquareRoot:
            return Math.sqrt(this.firstParameterValue(a));

          case HSBlockType.MathOperatorPower:
            return Math.pow(this.firstParameterValue(a), this.secondParameterValue(a));

          case HSBlockType.MathOperatorRound:
            return Math.round(this.firstParameterValue(a));

          case HSBlockType.MathOperatorFloor:
            return Math.floor(this.firstParameterValue(a));

          case HSBlockType.MathOperatorCeiling:
            return Math.ceil(this.firstParameterValue(a));

          case HSBlockType.MathOperatorAbs:
            return Math.abs(this.firstParameterValue(a));

          case HSBlockType.MathOperatorModulo:
            var e = this.secondParameterValue(a);
            return 0 === e ? 0 : this.firstParameterValue(a) % e;

          case HSBlockType.ConditionalOperatorEquals:
          case HSBlockType.ConditionalOperatorLessThan:
          case HSBlockType.ConditionalOperatorGreaterThan:
          case HSBlockType.ConditionalOperatorGreaterThanOrEqualTo:
          case HSBlockType.ConditionalOperatorLessThanOrEqualTo:
          case HSBlockType.ConditionalOperatorNotEquals:
          case HSBlockType.ConditionalOperatorAnd:
          case HSBlockType.ConditionalOperatorOr:
            return this.computedBooleanValue(a) ? 1 : 0;

          case HSBlockType.TraitXPosition:
            return b ? Math.round(b.x) : 0;

          case HSBlockType.TraitYPosition:
            return b ? Math.round(b.y) : 0;

          case HSBlockType.TraitWidth:
            return b ? b.width() : 0;

          case HSBlockType.TraitHeight:
            return b ? b.height() : 0;

          case HSBlockType.TraitZIndex:
            return b ? b.zIndex : 0;

          case HSBlockType.TraitRotation:
            return b ? b.headingInDegrees : 0;

          case HSBlockType.TraitSpeed:
            return b ? b.speed : 0;

          case HSBlockType.TraitCloneIndex:
            return b ? b.cloneIndex : 0;

          case HSBlockType.TraitTotalClones:
            if (!b) return 0;
            return this.context.findWithObjectID(HSObject.key, b.objectID).allStageObjects().length;

          case HSBlockType.StageTraitTotalObjects:
            return HSStageProject.sharedInstance.activeStageScene.stageObjects.length;

          case HSBlockType.TraitInvisibility:
            return b ? b.invisibilityPercent : 0;

          case HSBlockType.TraitSize:
            return this.computedSizePercent(a);

          case HSBlockType.StageTraitLastTouchX:
            return HSStageProject.sharedInstance.activeStageScene.lastTouchX;

          case HSBlockType.StageTraitLastTouchY:
            return HSStageProject.sharedInstance.activeStageScene.lastTouchY;

          case HSBlockType.StageTraitTiltUp:
            return HSAccelerometerManager.tiltUp;

          case HSBlockType.StageTraitTiltDown:
            return HSAccelerometerManager.tiltDown;

          case HSBlockType.StageTraitTiltLeft:
            return HSAccelerometerManager.tiltLeft;

          case HSBlockType.StageTraitTiltRight:
            return HSAccelerometerManager.tiltRight;

          case HSBlockType.StageTraitWidth:
            return HSStageScene.stageWidth;

          case HSBlockType.StageTraitHeight:
            return HSStageScene.stageHeight;

          case HSBlockType.EventOperatorGamePlaying:
            return 1;

          default:
            return null;
        }
    }, b.prototype.computedSizePercent = function(a) {
        var b = this.stageObjects(a)[0];
        switch (this.whichSizeShouldIUse(b)) {
          case "minimum":
            return Math.min(b.sizePercentHeight, b.sizePercentWidth);

          case "height":
            return b.sizePercentHeight;

          case "width":
            return b.sizePercentWidth;
        }
    }, b.prototype.whichSizeShouldIUse = function(a) {
        var b = Math.abs(a.sizePercentHeight), c = Math.abs(a.sizePercentWidth);
        return b === c ? "minimum" : b > c ? "height" : "width";
    }, b.prototype.computedColorString = function(a) {
        switch (this.type) {
          case HSBlockType.ColorOperatorRandom:
            return HSColor.randomColor();

          case HSBlockType.ColorOperatorRGB:
            return HSColor.rgb(this.firstParameterValue(a) % 256, this.secondParameterValue(a) % 256, this.parameters[2].stageParameter().computedValue(a) % 256);

          case HSBlockType.ColorOperatorHSB:
            return HSColor.hsb(this.firstParameterValue(a) % 361, this.secondParameterValue(a) % 101, this.parameters[2].stageParameter().computedValue(a) % 101);

          default:
            var b = HSColor.rgbStringFromNumericColor(this.computedStringValue(a));
            return null == b ? HSColor.rgbTextColor : b;
        }
    }, b.prototype.computedStringValue = function(a) {
        var b = this.computedValue(a);
        return null === b ? null : b > MAX_FLOAT ? "inf" : b < -MAX_FLOAT ? "-inf" : 0 === b ? 1 / b > 0 ? "0" : "-0" : (Math.round(1e6 * b) / 1e6).toString();
    }, b.prototype.roundTo5Decimals = function(a) {
        return a ? Math.round(1e5 * a) / 1e5 : a;
    }, b.prototype.computedBooleanValue = function(a) {
        function b() {
            return Math.abs(f - g) <= e;
        }
        function c() {
            return f < g;
        }
        function d() {
            return f > g;
        }
        var e = Number.EPSILON, f = this.roundTo5Decimals(this.firstParameterValue(a)), g = this.roundTo5Decimals(this.secondParameterValue(a));
        switch (this.type) {
          case HSBlockType.ConditionalOperatorEquals:
            return b();

          case HSBlockType.ConditionalOperatorLessThan:
            return c() && !b();

          case HSBlockType.ConditionalOperatorLessThanOrEqualTo:
            return b() || c();

          case HSBlockType.ConditionalOperatorGreaterThan:
            return d() && !b();

          case HSBlockType.ConditionalOperatorGreaterThanOrEqualTo:
            return b() || d();

          case HSBlockType.ConditionalOperatorNotEquals:
            return !b();

          case HSBlockType.ConditionalOperatorAnd:
            return !(!this.firstParameterValue(a) || !this.secondParameterValue(a));

          case HSBlockType.ConditionalOperatorOr:
            return !(!this.firstParameterValue(a) && !this.secondParameterValue(a));

          case HSBlockType.EventOperatorGamePlaying:
            return !0;

          default:
            return !1;
        }
    }, b.prototype.usesOriginalObject = function() {
        return this.type === HSBlockType.OriginalObject || this.objectReferenceType == HSBlockType.OriginalObject;
    }, b.prototype.stageObjects = function(a) {
        return this.type === HSBlockType.Self ? [ a ] : this.usesOriginalObject() ? [ a.originalObject(this.context) ] : this.object ? this.context.version >= HSProjectVersion.ADD_SELF ? this.object.allStageObjects() : [ this.object.stageObject(a) ] : this.type === HSBlockType.ScreenEdge ? [ HSStageObject.edgeOfScreenObject ] : this.type === HSBlockType.AnyObject ? HSStageProject.sharedInstance.activeStageScene.stageObjects : this.type >= HSBlockType.TraitRotation && this.type < HSBlockType.HS_END_OF_OBJECT_TRAITS ? [ a ] : [];
    }, b.prototype.firstParameterValue = function(a) {
        switch (this.type) {
          case HSBlockType.Random110:
          case HSBlockType.Random1100:
          case HSBlockType.Random11000:
            return 1;

          default:
            if (this.parameters.length > 0) return this.parameters[0].stageParameter().computedValue(a);
            if (HSBlockType[this.type] === HSBlockType[HSBlockType.Random110]) return 0;
        }
    }, b.prototype.secondParameterValue = function(a) {
        switch (this.type) {
          case HSBlockType.Random110:
            return 10;

          case HSBlockType.Random1100:
            return 100;

          case HSBlockType.Random11000:
            return 1e3;

          default:
            return this.parameters.length >= 2 ? this.parameters[1].stageParameter().computedValue(a) : 0;
        }
    }, b;
}(HSBlock);

HSParameterBlock.key = "HSParameterBlock", emoji.basePath = "https://d2j12ek52gvmx9.cloudfront.net/emojis/" /*AE_MOD - fix emojis "/assets"*/;

var HSTextNodeKind;

!function(a) {
    a[a.text = 0] = "text", a[a.whitespace = 1] = "whitespace", a[a.newline = 2] = "newline", 
    a[a.emoji = 3] = "emoji", a[a.geometricShape = 4] = "geometricShape";
}(HSTextNodeKind || (HSTextNodeKind = {}));

var HSToken = function() {
    function a(a, b) {
        this.text = a, this.kind = b;
    }
    return a;
}(), HSTokenizer = function() {
    function a() {}
    return a.hasDrawableTokens = function(b) {
        return null != b && /\S/.test(b) && !a.ONLY_VARIATION_SELECTORS.test(b);
    }, a.tokenize = function(b) {
        if (this.tokenizedStringsCache.has(b)) return this.tokenizedStringsCache.get(b);
        for (var c = [], d = 0, e = 0, f = null; d < b.length; d++) if (" " === b[d] || "	" === b[d]) f !== HSTextNodeKind.whitespace && (d > e && c.push(new HSToken(b.substring(e, d), f)), 
        e = d, f = HSTextNodeKind.whitespace); else if ("\n" === b[d]) d > e && f !== HSTextNodeKind.whitespace && c.push(new HSToken(b.substring(e, d), f)), 
        e = d, f = HSTextNodeKind.newline; else if (a.ZERO_WIDTH_JOINER.test(b[d]) && f === HSTextNodeKind.emoji) {
            if (d += 1, this.isEmojiStartIndex(b, d)) {
                var g = b.slice(d, d + 5).match(emoji.regex);
                g && g[0] && (d += g[0].length - 1);
            }
        } else if (a.ONLY_VARIATION_SELECTORS.test(b[d]) && f !== HSTextNodeKind.text) {
            if (d > e) {
                var h = d;
                f === HSTextNodeKind.emoji && (h = d + 1), c.push(new HSToken(b.substring(e, h), f));
            }
            e = d + 1, f = null;
        } else if (this.isEmojiStartIndex(b, d)) {
            d > e && c.push(new HSToken(b.substring(e, d), f)), e = d, f = HSTextNodeKind.emoji;
            var i = 5;
            this.isUnicodeEmojiStartIndex(b, d) && (i = 2);
            var j = b.slice(d, d + i), k = a.emojiMatch(j);
            if (k) {
                var l = j.indexOf(k[0]), m = k[0].length - 1;
                d += l + m;
            }
        } else !iOS && a.GEOMETRIC_SHAPES.test(b[d]) ? (d > e && c.push(new HSToken(b.substring(e, d), f)), 
        e = d, f = HSTextNodeKind.geometricShape) : f !== HSTextNodeKind.text && (d > e && c.push(new HSToken(b.substring(e, d), f)), 
        e = d, f = HSTextNodeKind.text);
        return d > e && null !== f && c.push(new HSToken(b.substring(e, d), f)), this.clearTokenCacheIfNecessary(), 
        this.tokenizedStringsCache.set(b, c), c;
    }, a.clearTokenCacheIfNecessary = function() {
        this.tokenizedStringsCache.size > 30 && this.tokenizedStringsCache.delete(this.tokenizedStringsCache.keys().next().value);
    }, a.isEmojiStartIndex = function(b, c) {
        var d = b.slice(c, c + 5);
        return a.startsWithEmojiRegex.test(d) || a.secondCharIsSurrogate.test(d);
    }, a.isUnicodeEmojiStartIndex = function(b, c) {
        var d = b.slice(c, c + 5);
        return !(a.startsWithEmojiRegex.test(d) || a.fitzRegex.test(d));
    }, a.emojiMatch = function(b) {
        return b.match(emoji.regex) || b.match(a.secondCharIsSurrogate);
    }, a.rangeOfFirstEmojiStartingAtIndex = function(a, b) {
        var c = /[\ufe00-\ufe0f\u200d\u2640]$/, d = a.slice(b, b + 7).match(c);
        return 0 === d.length ? b : a.indexOf(d[0]) + 1;
    }, a;
}();

HSTokenizer.ONLY_VARIATION_SELECTORS = /^[\ufe00-\ufe0f]*$/, HSTokenizer.ZERO_WIDTH_JOINER = /[\u200d]/, 
HSTokenizer.GEOMETRIC_SHAPES = /[\u25A0-\u25CF\u25E0-\u25E1\u25E6-\u25FF]/, HSTokenizer.tokenizedStringsCache = new Map(), 
HSTokenizer.surrogateRegex = RegExp("[" + HSTokenizer.lowSurrogates + HSTokenizer.highSurrogates + "]"), 
HSTokenizer.highSurrogates = "�-�", HSTokenizer.lowSurrogates = String.fromCharCode(56320) + "-" + String.fromCharCode(57343), 
HSTokenizer.secondCharIsSurrogate = RegExp("^.[" + HSTokenizer.lowSurrogates + "]"), 
HSTokenizer.startsWithEmojiRegex = RegExp("^" + emoji.regex.source), HSTokenizer.fitzpatricks = String.fromCharCode(55356) + "[" + String.fromCharCode(57088) + "-" + String.fromCharCode(57343) + "]", 
HSTokenizer.fitzRegex = RegExp("" + HSTokenizer.fitzpatricks);

var HSRuleActivator = function() {
    function a() {
        this.stageObjects = [], this.currentCollisions = new HSCollisionPairCollection([]), 
        this._stageObjectCache = new Set(), this._stageRulesCache = null;
    }
    return a.prototype.destroy = function(a) {
        this._stageObjectCache.delete(a), this._removeRulesForObject(a);
    }, a.prototype._removeRulesForObject = function(a) {
        var b = this.stageRulesCache();
        for (var c in b) 0 !== b[c].length && (b[c] = b[c].filter(function(b) {
            return !b.isCurrentObject(a);
        }));
    }, a.prototype.activateAllRulesForEventType = function(a) {
        this.stageObjects.forEach(function(b) {
            return b.activateAllStageRulesForEventType(a);
        });
    }, a.prototype.allPossibleCollisionPairs = function() {
        var a = this;
        return this._collisionPairs || (this._collisionPairs = new HSCollisionPairCollection(), 
        this.stageObjects.forEach(function(b) {
            return a.addCollisionPairsForStageObject(b);
        })), this._collisionPairs;
    }, a.prototype.addCollisionPairsForStageObject = function(a) {
        this._collisionPairs && (this._collisionPairs.add(Array.from(a.relatedCollisionRules).map(function(a) {
            return a.collisionPairs();
        }).reduce(function(a, b) {
            return a.concat(b);
        }, [])), this._collisionPairs.add(a.allPossibleCollisionPairs()));
    }, a.prototype.allStageRulesForEventType = function(a) {
        var b = this, c = this.stageRulesCache();
        return this.stageObjects.filter(function(a) {
            return !b._stageObjectCache.has(a);
        }).forEach(function(a) {
            b.cacheRulesForStageObject(a);
        }), c[a];
    }, a.prototype.stageRulesCache = function() {
        if (this._stageRulesCache) return this._stageRulesCache;
        this._stageRulesCache = {};
        for (var a = Object.keys(HSBlockType).filter(function(a) {
            return "string" == typeof a;
        }), b = 0; b < a.length; b++) this._stageRulesCache[a[b]] = [];
        return this._stageRulesCache;
    }, a.prototype.cacheRulesForStageObject = function(a) {
        var b = this.stageRulesCache(), c = a.stageRules;
        this._stageObjectCache.add(a), c.forEach(function(a) {
            return b[a.eventType()].push(a);
        });
    }, a.prototype.activateCurrentCollisionRules = function() {
        var a, b = this, c = HSStageProject.sharedInstance.version < HSProjectVersion.WEBPLAYER_IN_APP;
        c && (a = this.bumpingCollisions ? this.bumpingCollisions.copy() : new HSCollisionPairCollection([])), 
        this.allTouchingRules().forEach(function(d) {
            var e = d.collisionPairs().find(function(a) {
                return b.currentCollisions.contains(a);
            });
            e && (d.activate(), c && a.add([ e ]));
        }), this.allBumpRules().forEach(function(d) {
            if (c) {
                var e = d.collisionPairs().filter(function(a) {
                    return b.currentCollisions.contains(a);
                });
                a.intersects(e) && d.activate(), a.add(e.slice(0, 1));
            } else b.bumpingCollisions.intersects(d.collisionPairs()) && d.activate();
        });
    }, a.prototype.allTouchingRules = function() {
        return this.allStageRulesForEventType(HSBlockType.EventOperatorIsTouching);
    }, a.prototype.allBumpRules = function() {
        return this.allStageRulesForEventType(HSBlockType.EventOperatorBump);
    }, a.prototype.executeAllActiveRules = function() {
        for (var a = this.stageObjects, b = a.length, c = 0; c < b; ++c) void 0 !== a[c] && a[c].executeActiveRules();
    }, a.prototype.activateAllRulesForEventWithObjects = function(a, b) {
        var c = this.allStageRulesForEventType(a);
        b.forEach(function(a) {
            c.forEach(function(b) {
                b.activateIfMatchesFirstObject(a);
            });
        });
    }, a;
}(), HSStageMethod = function() {
    function a(a, b) {
        void 0 === b && (b = []), this.type = a, this.parameters = b, this.isImmediate = [ HSBlockType.PenDown, HSBlockType.StrokeColor, HSBlockType.StrokeWidth, HSBlockType.PenUp, HSBlockType.SetVariable, HSBlockType.ChangeVariable ].includes(a);
    }
    return a.prototype.isOverStepSize = function(a, b) {
        return this.usesStepSize() && Math.abs(this.firstIntegerValue(b)) > a;
    }, a.prototype.isWaitBlock = function() {
        return this.type === HSBlockType.Wait || this.type === HSBlockType.WaitSeconds;
    }, a.prototype.isFinishedTimestampBlock = function(a) {
        return this.type === HSBlockType.WaitTilTimestamp && this.firstIntegerValue(a) <= Date.now();
    }, a.prototype.isUnfinishedTimestampBlock = function(a) {
        return this.type === HSBlockType.WaitTilTimestamp && this.firstIntegerValue(a) > Date.now();
    }, a.prototype.usesStepSize = function() {
        return -1 !== [ HSBlockType.ChangeX, HSBlockType.ChangeY, HSBlockType.Move, HSBlockType.Rotate ].indexOf(this.type);
    }, a.prototype.firstIntegerValue = function(a) {
        return this.parameters.length > 0 ? this.parameters[0].computedValue(a) : null;
    }, a.prototype.calculateValueMinusOneStep = function(a, b) {
        return this.isOverStepSize(a, b) ? this.signOfFirstValue(b) * (Math.abs(this.firstIntegerValue(b)) - Math.abs(a)) : 0;
    }, a.prototype.executableForStepSize = function(b, c) {
        if (this.isWaitBlock()) {
            var d = this.getWaitMilliseconds(c), e = Date.now() + d;
            return new a(HSBlockType.WaitTilTimestamp, [ new HSStageParameter(e + "") ]).executableForStepSize(b, c);
        }
        return new HSExecutable(this.blocksToExecuteNow(b, c), this.blocksToExecuteLater(b, c));
    }, a.prototype.getWaitMilliseconds = function(a) {
        if (!this.isWaitBlock()) return 0;
        var b = this.firstIntegerValue(a);
        return this.type === HSBlockType.WaitSeconds ? 1e3 * b : b;
    }, a.prototype.blocksToExecuteNow = function(b, c) {
        if (this.type === HSBlockType.WaitTilTimestamp) return [];
        if (!this.isOverStepSize(b, c)) return [ this ];
        var d = new HSStageParameter("" + b * this.signOfFirstValue(c));
        return [ new a(this.type, [ d ]) ];
    }, a.prototype.toString = function() {
        return SourceFormatter.stageMethodToSrc(this);
    }, a.prototype.signOfFirstValue = function(a) {
        var b = this.firstIntegerValue(a);
        return b / Math.abs(b);
    }, a.prototype.blocksToExecuteLater = function(b, c) {
        if (this.isUnfinishedTimestampBlock(c)) return [ this ];
        if (this.type === HSBlockType.PlaySound) return [ new a(HSBlockType.Wait, [ new HSStageParameter(this.parameters[1].computedValue(c) + "") ]) ];
        if (this.type === HSBlockType.PlaySoundSeconds) return [ new a(HSBlockType.WaitSeconds, [ new HSStageParameter(this.parameters[1].computedValue(c) + "") ]) ];
        if (!this.usesStepSize()) return [];
        var d = this.calculateValueMinusOneStep(b, c), e = new HSStageParameter("" + d);
        return [ new a(this.type, [ e ]) ];
    }, a;
}(), __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, HSStageScene = function(a) {
    function b(c) {
        var d = a.call(this) || this;
        return d.scene = c, d.renderList = new HSLinkedList(), d.pointers = [], d.currentlyPressedObjects = [], 
        d.tickCount = 0, d.container = new PIXI.Container(), c.objects.forEach(function(a) {
            a.rebuildStageObject(), d.addStageObject(a.stageObject());
        }), d.lastTouchX = b.stageWidth / 2, d.lastTouchY = b.stageHeight / 2, d.name = c.name, 
        d;
    }
    return __extends(b, a), b.prototype.addStageObject = function(a) {
        a.bringToFrontFunction = this.bringToFront.bind(this), a.sendToBackFunction = this.sendToBack.bind(this), 
        a.cloneFunction = this.clone.bind(this), a.destroyFunction = this.destroy.bind(this), 
        this.stageObjects.push(a), this.renderList.push(a);
    }, b.prototype.animationTick = function(a) {
        var c = this;
        b.dirtySort && (b.dirtySort = !1, this.sortRenderList()), this.container.removeChildren(), 
        this.renderList.forEach(function(a) {
            a.update(), a.view.sprite && c.container.addChild(a.view.sprite);
        }), this.collisionTest(a), this.activateRules(), this.executeRules(), this.tickCount++;
    }, b.prototype.collisionTest = function(a) {
        if (a) {
            a.numberOfPixelCollisions = 0;
            var b = this.allPossibleCollisionPairs();
            b.forEach(function(b) {
                return b.update(a);
            }), this.currentCollisions = b.filter(function(a) {
                return a.isTouching();
            }), this.bumpingCollisions = this.currentCollisions.filter(function(a) {
                return a.isBumping();
            });
        }
    }, b.prototype.activateRules = function() {
        var a = this;
        this.touchIsDown && this.currentlyPressedObjects.forEach(function(b) {
            a.activateAllRulesForEventWithObjects(HSBlockType.EventOperatorHold, b);
        }), this.scene.context.hasAccelerometerEvent() && (this.activateTiltRules(), this.activateShakeRules()), 
        this.activateAllNotPressedRules(), this.activateCurrentCollisionRules();
    }, b.prototype.activateAllNotPressedRules = function() {
        var a = this;
        this.allStageRulesForEventType(HSBlockType.EventOperatorNotPressed).forEach(function(b) {
            b.activateIfNotPressed(a);
        });
    }, b.prototype.executeRules = function() {
        this.executeAllActiveRules();
    }, b.prototype.receiveClickEvent = function(a, b) {
        this.setTouchPosition(a, b);
        var c = a.point, d = c[0], e = c[1], f = this.stageObjectsToReceiveTouchInRange(d, e, b);
        this.activateAllRulesForEventWithObjects(HSBlockType.EventOperatorTap, f), this.activateAllRulesForEventWithObjects(HSBlockType.EventOperatorHold, f);
        var g = this.indexOfPointer(a.id);
        this.currentlyPressedObjects[g] = f;
    }, b.prototype.addPointer = function(a) {
        var b = this.indexOfPointer(a.id);
        if (-1 !== b) return this.pointers[b];
        var c = this.getPointerData(a);
        return this.pointers.push(c), c;
    }, b.prototype.receiveTouchDownEvent = function(a, b) {
        this.setTouchPosition(a, b);
    }, b.prototype.receiveTouchMoveEvent = function(a, b) {
        this.touchIsDown && (this.setTouchPosition(a, b), this.calculateSwipeEvents(this.getPointerFrom(a.id), b));
    }, b.prototype.receiveTouchUpEvent = function(a, b) {
        var c = this.indexOfPointer(a.id);
        this.removePointer(a.id), this.currentlyPressedObjects.splice(c, 1), this.activateAllRulesForEventType(HSBlockType.EventOperatorTouchEnds);
    }, b.prototype.getPointerData = function(a) {
        var b = a.point, c = b[0], d = b[1];
        return {
            id: a.id,
            downX: c,
            downY: d,
            lastX: c,
            lastY: d
        };
    }, b.prototype.removePointer = function(a) {
        var b = this.indexOfPointer(a);
        -1 !== b && this.pointers.splice(b, 1);
    }, b.prototype.indexOfPointer = function(a) {
        for (var b = 0; b < this.pointers.length; b++) if (this.pointers[b].id === a) return b;
        return -1;
    }, b.prototype.getPointerFrom = function(a) {
        var b = this.indexOfPointer(a);
        return -1 !== b ? this.pointers[b] : null;
    }, b.prototype.calculateSwipeEvents = function(a, b) {
        var c = this.horizontalSwipeForPoint(a), d = this.verticalSwipeForPoint(a), e = this.directionForSwipe(c, d);
        if (e) {
            var f = this.stageObjectsToReceiveTouchInRange(a.downX, a.downY, b);
            this.activateAllRulesForEventWithObjects(e, f), a.downX = null, a.downY = null;
        }
    }, b.prototype.directionForSwipe = function(a, b) {
        switch (hs_direction(a, b, 10)) {
          case HSDirection.up:
            return HSBlockType.EventOperatorSwipeUp;

          case HSDirection.down:
            return HSBlockType.EventOperatorSwipeDown;

          case HSDirection.left:
            return HSBlockType.EventOperatorSwipeLeft;

          case HSDirection.right:
            return HSBlockType.EventOperatorSwipeRight;

          default:
            return null;
        }
    }, b.prototype.horizontalSwipeForPoint = function(a) {
        return a.downX ? a.lastX - a.downX : 0;
    }, b.prototype.verticalSwipeForPoint = function(a) {
        return a.downY ? a.lastY - a.downY : 0;
    }, b.prototype.setTouchPosition = function(a, b) {
        var c = this.getPointerFrom(a.id) || this.addPointer(a), d = a.point, e = d[0], f = d[1];
        return c.lastX = e, c.lastY = f, this.isTheLastPointer(a.id) && (this.lastTouchX = e, 
        this.lastTouchY = f), c;
    }, b.prototype.isTheLastPointer = function(a) {
        return this.indexOfPointer(a) === this.pointers.length - 1;
    }, b.prototype.firstStageObjectWithinRange = function(a, b, c) {
        return this.renderList.findLast(function(d) {
            return c.hitTest(d, a, b);
        });
    }, b.prototype.stageObjectsToReceiveTouchInRange = function(a, b, c) {
        var d = this.firstStageObjectWithinRange(a, b, c);
        return d ? [ d, null ] : [ null ];
    }, b.prototype.bringToFront = function(a) {
        this.renderList.remove(a), this.renderList.push(a);
    }, b.prototype.sendToBack = function(a) {
        this.renderList.remove(a), this.renderList.unshift(a);
    }, b.prototype.sortRenderList = function() {
        this.renderList.setNewOrder(function(a) {
            var b = [];
            return a.forEach(function(a) {
                var c = a.zIndex || 0;
                b[c] || (b[c] = []), b[c].push(a);
            }), b = b.filter(function(a) {
                return !!a;
            }), b.forEach(function(a) {
                a.sort(function(a, b) {
                    return a.createOrder - b.createOrder;
                });
            }), b.reduce(function(a, b) {
                return a.concat(b);
            }, []);
        });
    }, b.prototype.break = function() {
        this.stageObjects.forEach(function(a) {
            return a.break();
        });
    }, b.prototype.destroy = function(b) {
        a.prototype.destroy.call(this, b), this.stageObjects.remove(b), this.renderList.remove(b), 
        this.scene.context.findWithObjectID(HSObject.key, b.objectID).removeStageObject(b);
    }, b.prototype.clone = function(a, c) {
        if (void 0 === c && (c = 1), !(this.stageObjects.length >= b.MAX_CLONES)) {
            c = Math.min(b.MAX_CLONES - this.stageObjects.length, c);
            for (var d = this.scene.context, e = d.findWithObjectID(HSObject.key, a.objectID), f = 0; f < c; f++) {
                var g = a.deepCopy(d.version, e);
                g.creationTick = this.tickCount, e.addStageObject(g), g.relatedCollisionRules = a.relatedCollisionRules, 
                this.addStageObject(g), this.cacheRulesForStageObject(g), this.addCollisionPairsForStageObject(g), 
                g.activateAllStageRulesForEventType(HSBlockType.EventOperatorEnterTheWorld);
            }
        }
    }, b.prototype.activateTiltRules = function() {
        var a, b = HSAccelerometerManager.tiltDirection();
        switch (b) {
          case HSDirection.up:
            a = HSBlockType.EventOperatorTiltUp;
            break;

          case HSDirection.down:
            a = HSBlockType.EventOperatorTiltDown;
            break;

          case HSDirection.left:
            a = HSBlockType.EventOperatorTiltLeft;
            break;

          case HSDirection.right:
            a = HSBlockType.EventOperatorTiltRight;
            break;

          default:
            a = HSBlockType.None;
        }
        this.activateAllRulesForEventType(a);
    }, b.prototype.activateShakeRules = function() {
        HSAccelerometerManager.isShaking() && this.activateAllRulesForEventType(HSBlockType.EventOperatorShake);
    }, Object.defineProperty(b.prototype, "touchIsDown", {
        get: function() {
            return 0 !== this.pointers.length;
        },
        enumerable: !0,
        configurable: !0
    }), b;
}(HSRuleActivator);

HSStageScene.dirtySort = !1, HSStageScene.stageHeight = 768, HSStageScene.stageWidth = 1024, 
HSStageScene.MAX_CLONES = 4096;

var HSCharacterTextureFactory = function() {
    function a() {}
    return a.prototype.build = function(a, b) {
        return Promise.resolve(this._build(b));
    }, a.prototype._build = function(a) {
        var b = document.getElementById(this.imageID(a)), c = this.quantizedScale(b, a), d = this.svgString(b, a), e = PIXI.Texture.fromImage(d, !1, PIXI.SCALE_MODES.LINEAR, c);
        return e.baseTexture.resolution = c, e;
    }, a.prototype.quantizedScale = function(a, b) {
        var c = 4;
        a && (c = Math.floor(1024 / parseInt(a.getAttribute("width"))));
        var d = Math.abs(b.sizePercentWidth), e = Math.abs(b.sizePercentHeight), f = Math.max(d, e);
        return Math.min(Math.max(Math.ceil(.01 * f), 1), c);
    }, a.prototype.buildAll = function(a, b) {
        for (var c = [], d = b.willChangeCostume ? 4 : 1, e = 0; e < d; e++) b.animationNumber = e, 
        c.push(this._build(b));
        return Promise.resolve(c);
    }, a.prototype.imageID = function(a) {
        var b = a.type || 0, c = HSObjectType[b];
        return c[0].toUpperCase() + c.slice(1) + a.animationNumber + ".svg";
    }, a.prototype.svgString = function(a, b) {
        var c = "";
        if (a) {
            a.style.fill = HSColor.rgbWhiteColor;
            var d = this.quantizedScale(a, b);
            a.setAttribute("hsScale", "" + d), c = HSView.xmlSerializer.serializeToString(a);
        }
        return "data:image/svg+xml;charset=utf8," + c;
    }, a;
}();

HSCharacterTextureFactory.instance = new HSCharacterTextureFactory();

var HSTextTextureFactory = function() {
    function a() {}
    return a.setFont = function(b, c) {
        b.font = c / 2 + "px " + a.FONT_FAMILIES.join(", "), b.textAlign = "left", b.textBaseline = "top";
    }, a.prototype.key = function(a) {
        return JSON.stringify({
            text: a.text,
            color: a.color
        });
    }, a.prototype.buildAll = function(a, b) {
        return this.build(a, b).then(function(a) {
            return [ a ];
        }).catch(function(a) {
            return [];
        });
    }, a.prototype.build = function(a, b) {
        var c = HSTextNode.fromString(b.text);
        if (!c) return Promise.reject(null);
        var a = this.canvas(a, b, c);
        if (!a) return Promise.reject(null);
        var d = a.getContext("2d");
        return c.draw(d).then(function(b) {
            return PIXI.Texture.fromCanvas(a);
        });
    }, a.scaleUp = function() {
        return HopscotchDrawingContext.MAX_TEXTURE_SIDE_LENGTH / HSTextNode.MAX_LINE_WIDTH;
    }, a.prototype.canvas = function(b, c, d) {
        var e = b.getContext("2d");
        a.setFont(e, c.fontSize);
        var f = c.text, g = HSColor.rgbWhiteColor;
        hasEmoji(f) && (g = c.color);
        var h = d.flow(e, HSTextNode.MAX_LINE_WIDTH);
        if (0 === h.width || 0 === h.height) return null;
        var i = a.scaleUp();
        return b.width = Math.min(h.width * i, 4096), b.height = Math.min(h.height * i, 4096), 
        a.setFont(e, c.fontSize), e.scale(i, i), e.fillStyle = HSColor.rgbStringFromHSBString(g), 
        b;
    }, a;
}();

HSTextTextureFactory.FONT_FAMILIES = [ "Avenir-Book", "Hiragino Sans", "sans-serif", "AppleSymbols" ], 
HSTextTextureFactory.instance = new HSTextTextureFactory(), HSTextTextureFactory.textureCache = {};

var HSImageTextureFactory = function() {
    function a() {
        this.prefetchedImageCache = new Map();
    }
    return a.prototype.build = function(a, b) {
        var c = this.prefetchedImageCache.get(b.imageName);
        return c ? c.then(function(a) {
            return PIXI.Texture.from(a);
        }) : Promise.reject(null);
    }, a.prototype.buildAll = function(a, b) {
        return this.build(a, b).then(function(a) {
            return [ a ];
        });
    }, a.prototype.prefetchImage = function(a) {
        var b = this;
        if (a && !this.prefetchedImageCache.get(a.fileName)) {
            var c = this.getImageUrl(a.fileName).then(getImageFromUri).then(function(c) {
                return b.resizeImage(c, a.width, a.height);
            });
            this.prefetchedImageCache.set(a.fileName, c);
        }
    }, a.prototype.resizeImage = function(a, b, c) {
        return a.width = b, a.height = c, Promise.resolve(a);
    }, a.prototype.getImageUrl = function(a) {
        return Object.prototype.hasOwnProperty.call(window, "BASE_IMAGE_URL") ? (!/^\w{0,8}(?::\/)?\//.test(a)?this.getImageUrlFromBaseUrl(a):Promise.resolve(a)) /* AE_MOD custom custom */ : this.getImageUrlFromApp(a);
    }, a.prototype.getImageUrlFromBaseUrl = function(a) {
        return Promise.resolve(BASE_IMAGE_URL + a);
    }, a.prototype.getImageUrlFromApp = function(a) {
        return requestTextureFromApp({
            fileName: a
        }).then(function(a) {
            return a.dataURI;
        });
    }, a;
}();

HSImageTextureFactory.instance = new HSImageTextureFactory();

var HSView = function() {
    function a(a) {
        this.props = a, this.sprite = new PIXI.Sprite(), this.canvas = null, this.textureExists = !1, 
        this.buildTexture(), this.update(this.props);
    }
    return a.prototype.factory = function() {
        return this.shouldDrawText() ? HSTextTextureFactory.instance : this.canDrawImage() ? HSImageTextureFactory.instance : HSCharacterTextureFactory.instance;
    }, a.prototype.imageSource = function() {
        return this.sprite ? this.sprite.texture.baseTexture.source : null;
    }, a.prototype.bounds = function() {
        if (this.sprite) return this.sprite.getBounds();
    }, a.prototype.width = function() {
        return this.sprite.texture.baseTexture.width * this.sprite.scale.x;
    }, a.prototype.height = function() {
        return this.sprite.texture.baseTexture.height * this.sprite.scale.y;
    }, a.prototype.shouldDrawText = function() {
        return HSTokenizer.hasDrawableTokens(this.props.text);
    }, a.prototype.canDrawImage = function() {
        return !!this.props.imageName;
    }, a.prototype.buildTexture = function() {
        var a = this;
        this.createCanvasIfNeeded();
        var b = this;
        return this.hasEmoji = !!this.shouldDrawText() && hasEmoji(this.props.text), this.factory().build(this.canvas, this.props).then(function(c) {
            return c === b.sprite.texture ? c : (c.baseTexture === b.sprite.texture.baseTexture && b.sprite.texture.destroy(), 
            a.shouldDrawText() && c.update(), b.sprite.texture = c, b.sprite.anchor.x = .5, 
            b.sprite.anchor.y = .5, b.originalWidth = b.sprite.texture.baseTexture.width, b.originalHeight = b.sprite.texture.baseTexture.height, 
            b.textureExists = !0, c);
        }).catch(function(a) {
            log("error in building texture", a, b.props);
        });
    }, a.prototype.createCanvasIfNeeded = function() {
        this.canvas || this.shouldDrawText() && (this.canvas = document.createElement("canvas"));
    }, a.prototype.buildAllTextures = function() {
        return this.factory().buildAll(this.canvas, this.props);
    }, a.prototype.imageScale = function() {
        if (this.canDrawImage() && this.sprite.texture.baseTexture.source) {
            return this.sprite.texture.baseTexture.source.width / this.sprite.texture.baseTexture.width;
        }
        return 1;
    }, a.prototype.update = function(a) {
        var b = this.props;
        if (this.props = a, this.needsNewTexture(b) && this.buildTexture(), this.sprite && this.sprite.texture && this.sprite.texture.baseTexture) {
            var c = a.baseObjectScale * a.sizePercentWidth * .01 * this.scaleForObjectType(this.props.type) * this.imageScale(), d = Math.abs(c), e = c / d;
            c = Math.min(d, 1024) * e;
            var f = a.baseObjectScale * a.sizePercentHeight * .01 * this.scaleForObjectType(this.props.type) * this.imageScale(), g = Math.abs(f), e = f / g;
            f = Math.min(g, 1024) * e;
            var h = a.isFlipped ? -1 : 1, i = this.sprite.texture.baseTexture.width, j = this.sprite.texture.baseTexture.height;
            this.sprite.scale.x = Math.round(i * c) / i * h, this.sprite.scale.y = Math.round(j * f) / j, 
            this.sprite.position.x = Math.round(a.x), this.sprite.position.y = Math.round(a.stageHeight - a.y), 
            this.sprite.alpha = a.opacity, this.sprite.rotation = -1 * a.headingInRadians;
            var k = a.color;
            this.hasEmoji && (k = HSColor.rgbWhiteColor), this.sprite.tint = HSColor.hexToTint(k);
        }
    }, a.prototype.needsNewTexture = function(a) {
        return a.text !== this.props.text || this.quantizedScaleY(a) !== this.quantizedScaleY(this.props) || this.quantizedScaleX(a) !== this.quantizedScaleX(this.props) || a.animationNumber !== this.props.animationNumber || a.type !== this.props.type || a.imageName !== this.props.imageName || a.color !== this.props.color && !onlyEmoji(a.text) && hasEmoji(a.text);
    }, a.prototype.quantizedScaleY = function(a) {
        var b = a.sizePercentHeight || 100;
        return Math.ceil(.01 * b);
    }, a.prototype.quantizedScaleX = function(a) {
        var b = a.sizePercentWidth || 100;
        return Math.ceil(.01 * b);
    }, a.prototype.scaleForObjectType = function(a) {
        if (this.shouldDrawText()) return 1 / HSTextTextureFactory.scaleUp();
        switch (a) {
          case HSObjectType.hexagon:
            return 1.05;

          default:
            return 1;
        }
    }, a;
}();

HSView.xmlSerializer = new XMLSerializer(), HSView.svgCache = {}, HTMLCanvasElement.prototype.unscaledWidth = function() {
    return this.width;
}, HTMLCanvasElement.prototype.unscaledHeight = function() {
    return this.height;
}, HTMLImageElement.prototype.unscaledWidth = function() {
    return this.naturalWidth;
}, HTMLImageElement.prototype.unscaledHeight = function() {
    return this.naturalHeight;
};

var HSCollisionImageFactory = function() {
    function a() {}
    return a.prototype.image = function(a) {
        if (this._image) return this._image;
        if (!a) return null;
        var b = document.createElement("canvas"), c = b.getContext("2d"), d = a.unscaledWidth(), e = a.unscaledHeight(), f = HSVisualContext.collisionResolution, g = this.getScaledImageDimensions({
            width: d,
            height: e
        }, Math.pow(f, 2)), h = g.width, i = g.height;
        return b.width = h, b.height = i, c.drawImage(a, 0, 0, d, e, 0, 0, h, i), this._image = b, 
        b;
    }, a.prototype.getScaledImageDimensions = function(a, b) {
        var c = Math.max(Math.sqrt(a.width * a.height / b), 1);
        return {
            width: Math.round(a.width / c),
            height: Math.round(a.height / c)
        };
    }, a;
}(), HSManagedObjectFactory = function() {
    function a() {
        this.context = new HSProjectContext(), this.scene = this.buildScene(), this.project = new HSProject(this.context), 
        this.project.scenes = [ this.scene ];
    }
    return a.prototype.buildDemoScene = function() {
        for (var a = this.buildObject(HSObjectType.octopus, "", 400, 200), a = this.buildObject(HSObjectType.chillanna, "", 400, 350), b = "Hello World \n", c = 0; c < 100; c++) b += "😈";
        this.buildObject(HSObjectType.text, b, 350, 200), this.buildOnStartRule(a);
        return this.scene.parseJSON(), this.scene;
    }, a.prototype.buildScene = function() {
        var a = new HSScene(this.context);
        return a.parseJSON({}), a;
    }, a.prototype.buildObject = function(a, b, c, d) {
        void 0 === a && (a = HSObjectType.monkey), void 0 === b && (b = ""), void 0 === c && (c = 750), 
        void 0 === d && (d = 500);
        var e = new HSObject(this.scene.context);
        return e.type = a, e.text = b, e.x = c, e.y = d, e.objectID = Math.floor(Math.random() * Math.pow(2, 32)).toString(16), 
        e;
    }, a.prototype.buildObjectWithRule = function() {
        var a = this.buildObject();
        this.buildOnStartRule(a);
        return a;
    }, a.prototype.buildOnStartRule = function(a, b) {
        var c = this.context;
        b || (b = this.buildScript()), a || (a = this.buildObject(HSObjectType.monkey));
        var d = new HSRule(c);
        d.script = b, a.addRule(d);
        var e = new HSParameter(c), f = new HSParameterBlock(c);
        return f.type = HSBlockType.EventOperatorStart, e.childBlock = f, d.parameters = [ e ], 
        d.parameters[0].childBlock.parameters[0] = new HSParameter(d.context), d.parameters[0].childBlock.parameters[0].childBlock = new HSParameterBlock(d.context), 
        d;
    }, a.prototype.buildTapRule = function(a, b) {
        return this.buildRule(HSBlockType.EventOperatorTap, a, b);
    }, a.prototype.buildRule = function(a, b, c) {
        var d = this.context;
        c || (c = this.buildScript()), b || (b = this.buildObject(HSObjectType.monkey));
        var e = new HSRule(d);
        e.script = c, b.addRule(e);
        var f = new HSParameter(d), g = new HSParameterBlock(d);
        return g.type = a, f.childBlock = g, e.parameters = [ f ], e;
    }, a.prototype.buildScript = function() {
        return this.buildScript3();
    }, a.prototype.buildRecursiveScript = function() {
        var a = new HSScript(this.context);
        return a.blocks = [ this.buildControlBlock(HSBlockType.Ability, [ "" ], a) ], a;
    }, a.prototype.buildEmptyScript = function() {
        var a = new HSScript(this.context);
        return a.blocks = [], a;
    }, a.prototype.buildScript3 = function() {
        var a = this.context, b = new HSScript(a), c = [ this.buildControlBlock(HSBlockType.Repeat, [ "100" ], this.buildScript4()) ];
        return b.blocks = c, b;
    }, a.prototype.buildScript4 = function() {
        var a = this.context, b = new HSScript(a), c = [ this.buildMethodBlock(HSBlockType.SetInvisibility, [ "90" ]), this.buildMethodBlock(HSBlockType.ChangeSpeed, [ "1600" ]), this.buildMethodBlock(HSBlockType.StrokeColor, [ "HSB(74, 100, 100)" ]), this.buildMethodBlock(HSBlockType.StrokeWidth, [ "30" ]), this.buildMethodBlock(HSBlockType.PenDown, []), this.buildMethodBlock(HSBlockType.Move, [ "200" ]), this.buildMethodBlock(HSBlockType.PenUp, []), this.buildMethodBlock(HSBlockType.Rotate, [ "135" ]), this.buildMethodBlock(HSBlockType.Move, [ "200" ]), this.buildMethodBlock(HSBlockType.Rotate, [ "145" ]) ];
        return b.blocks = c, b;
    }, a.prototype.buildScript2 = function() {
        var a = this.context, b = new HSScript(a), c = [ this.buildMethodBlock(HSBlockType.ChangeSpeed, [ "1000" ]), this.buildMethodBlock(HSBlockType.Move, [ "100" ]), this.buildMethodBlock(HSBlockType.Rotate, [ "30" ]), this.buildMethodBlock(HSBlockType.Move, [ "150" ]), this.buildMethodBlock(HSBlockType.ChangeSpeed, [ "100" ]), this.buildMethodBlock(HSBlockType.Rotate, [ "60" ]), this.buildMethodBlock(HSBlockType.Move, [ "200" ]) ];
        return b.blocks = c, b;
    }, a.prototype.buildScript1 = function() {
        var a = this.context, b = new HSScript(a), c = [ this.buildMethodBlock(HSBlockType.Grow, [ "200" ]), this.buildMethodBlock(HSBlockType.Shrink, [ "50" ]) ];
        return b.blocks = c, b;
    }, a.prototype.buildScript0 = function() {
        for (var a = this.context, b = new HSScript(a), c = [ this.buildMethodBlock(HSBlockType.SetPosition, [ "200", "200" ]) ], d = 0; d < 50; d++) c.push(this.buildMethodBlock(HSBlockType.Move, [ "200" ]));
        return c.push(this.buildMethodBlock(HSBlockType.SetSize, [ "200" ])), b.blocks = c, 
        b;
    }, a.prototype.buildMethodBlock = function(a, b) {
        void 0 === a && (a = HSBlockType.Move), void 0 === b && (b = []);
        var c = (this.context, this.parametersFromValues(b)), d = new HSMethodBlock(this.context);
        return d.type = a, d.parameters = c, d;
    }, a.prototype.parametersFromValues = function(a) {
        var b = this, c = [];
        return a.forEach(function(a, d, e) {
            var f = new HSParameter(b.context);
            f.value = a, c.push(f);
        }), c;
    }, a.prototype.buildControlBlock = function(a, b, c) {
        void 0 === a && (a = HSBlockType.Repeat), void 0 === b && (b = []), c || (c = this.buildScript1());
        var d = this.parametersFromValues(b), e = new HSControlBlock(this.context);
        return e.type = a, e.parameters = d, e.scripts = [ c ], e;
    }, a.prototype.buildConditionalControlBlock = function(a, b, c) {
        void 0 === a && (a = HSBlockType.CheckOnceIf), void 0 === b && (b = []), c || (c = this.buildScript1());
        var d = this.parametersFromValues(b), e = new HSConditionalControl(this.context);
        return e.type = a, e.parameters = d, e.scripts = [ c ], e;
    }, a;
}(), HSAccelerometerManager = function() {
    function a() {}
    return a.accelerometerFromIOSApp = function(a, b) {
        this.listener(a), this.isShakingFromApp = b;
    }, a.listener = function(a) {
        var b = a.accelerationIncludingGravity, c = Math.hypot(b.x, b.y, b.z) || 9.8, d = Math.round(100 * b.x / c), e = Math.round(100 * b.y / c), f = window.orientation;
        null === f || void 0 === f || -90 === f ? (this.tiltUp = d, this.tiltRight = e) : 90 === f ? (this.tiltUp = -d, 
        this.tiltRight = -e) : 0 === f ? (this.tiltUp = -e, this.tiltRight = d) : (this.tiltUp = e, 
        this.tiltRight = -d), this.tiltDown = -this.tiltUp, this.tiltLeft = -this.tiltRight, 
        isIOSApp() || this.updateShakeData(a.acceleration.x, a.acceleration.y, a.acceleration.z);
    }, a.startAccelerometerUpdates = function() {
        "DeviceMotionEvent" in window && !this.isListening && ("function" == typeof DeviceMotionEvent.requestPermission ? this.enableIOS13Accelerometer() : this.enableAccelerometer());
    }, a.enableIOS13Accelerometer = function() {
        this.isListening || isIOSApp() || window.addEventListener("touchend", a.deviceRequestPermissionIOS13);
    }, a.enableAccelerometer = function() {
        this.isListening || (this.isListening = !0, window.addEventListener("devicemotion", this.listener.bind(this), !1));
    }, a.tiltDirection = function() {
        if (!this.tiltRight || !this.tiltUp) return null;
        return hs_direction(this.tiltRight, this.tiltUp, 30);
    }, a.updateShakeData = function(b, c, d) {
        this.xAccelerations.push(b), this.yAccelerations.push(c), this.zAccelerations.push(d), 
        this.xAccelerations.length > a.SHAKE_MEMORY_COUNT && this.xAccelerations.shift(), 
        this.yAccelerations.length > a.SHAKE_MEMORY_COUNT && this.yAccelerations.shift(), 
        this.zAccelerations.length > a.SHAKE_MEMORY_COUNT && this.zAccelerations.shift();
    }, a.isShaking = function() {
        return isIOSApp() ? this.isShakingFromApp : [ this.xAccelerations, this.yAccelerations, this.zAccelerations ].some(function(b) {
            return Math.abs(mean(b)) < a.SUDDEN_ACCEL_THRESHOLD && variance(b) > a.SHAKE_SENSITIVITY;
        });
    }, a;
}();

HSAccelerometerManager.isListening = !1, HSAccelerometerManager.tiltUp = 0, HSAccelerometerManager.tiltDown = 0, 
HSAccelerometerManager.tiltLeft = 0, HSAccelerometerManager.tiltRight = 0, HSAccelerometerManager.isShakingFromApp = !1, 
HSAccelerometerManager.deviceRequestPermissionIOS13 = function() {
    DeviceMotionEvent.requestPermission().then(function(a) {
        "granted" === a && (HSAccelerometerManager.enableAccelerometer(), window.removeEventListener("touchend", HSAccelerometerManager.deviceRequestPermissionIOS13));
    }).catch(console.error);
}, HSAccelerometerManager.xAccelerations = [], HSAccelerometerManager.yAccelerations = [], 
HSAccelerometerManager.zAccelerations = [], HSAccelerometerManager.SHAKE_MEMORY_COUNT = 10, 
HSAccelerometerManager.SHAKE_SENSITIVITY = 60, HSAccelerometerManager.SUDDEN_ACCEL_THRESHOLD = 2;

var _this = this, main;

window.addEventListener("load", function() {
    for (var a = document.querySelectorAll("hopscotch-player"), b = a.length; --b >= 0; ) {
        var c = new HSMain(a[b]);
        main = c, window.addEventListener("resize", function() {
            return sendToApp("resize", "true");
        });
    }
}), window.addEventListener("error", function(a) {
    return sendToApp("error", JSON.stringify(a) + ";uuid: " + _this.projectData.uuid), 
    !1;
});

var HSMain = function() {
    function a(b) {
        this.root = b, this.context = new HSProjectContext(), this.isMaximized = !1, this.hasDrawn = !1, 
        this.setiOSStageSizeIfNecessary();
        var c = document.getElementById("project_data");//, d = b.dataset.projectJson || c && c.getAttribute("data");
		var d = JSON.stringify(AE_MOD.projectData); //AE_MOD - This sets the project data
        d && (this.load(JSON.parse(d)), sendToApp("playerState", "loaded")), this.setSizeFromDataAttrs(), 
        this.background = this.createCanvas("background"), this.screenshot = this.createCanvas("screenshot"), 
        this.canvas = this.createCanvas("foreground"), window.gliEmbedDebug ? this.renderer = new PIXI.WebGLRenderer(HSStageScene.stageWidth, HSStageScene.stageHeight, {
            resolution: a.dpi,
            transparent: !0,
            view: this.canvas
        }) : this.renderer = PIXI.autoDetectRenderer(HSStageScene.stageWidth, HSStageScene.stageHeight, {
            resolution: a.dpi,
            backgroundColor: null,
            transparent: !0,
            view: this.canvas
        }), this.screenshotRenderer = new PIXI.CanvasRenderer(HSStageScene.stageWidth, HSStageScene.stageHeight, {
            resolution: a.dpi,
            backgroundColor: null,
            transparent: !0,
            view: this.screenshot
        });
        var e = document.getElementById("play_container");
        e && (e.style.width = "100%", e.style.height = "100%");
        var f = this.drawBackground.bind(this);
        try {
            this.visualContext = new HSVisualContext(this.background, f);
        } catch (a) {
            console.log("No gl found in this context: ", a);
        }
    }
    return a.prototype.setSizeFromDataAttrs = function() {
        this.resizeRoot(+this.root.getAttribute("width"), +this.root.getAttribute("height"));
    }, a.prototype.createCanvas = function(a) {
        var b = document.createElement("canvas");
        return b.setAttribute("name", a), b.style.background = "transparent", b.style.position = "absolute", 
        b.style.top = "0", b.style.left = "0", b.style.width = "100%", b.style.height = "100%", 
        this.root.appendChild(b), b;
    }, a.prototype.resizeScreen = function() { //AE_MOD
		main.resizeRoot(window.innerWidth, window.innerHeight);
    }, a.prototype.toggleFullscreen = function() {
        isFullscreen() ? this.exitFullscreen() : this.enterFullscreen(window.innerWidth, window.innerHeight);
    }, a.prototype.enterFullscreen = function(a, b) {
        HSCollisionContext.DEBUG || this.enterFullscreenAction(this.root, a, b);
    }, a.prototype.enterFullscreenAction = function(a, b, c) {
        var d = b || window.innerWidth, e = c || window.innerHeight;
        this.resizeRoot(d, e);
        var f = a.parentElement;
        if (f.requestFullscreen) f.requestFullscreen(); else if (f.mozRequestFullScreen) f.mozRequestFullScreen(); else if (f.webkitRequestFullscreen) f.webkitRequestFullscreen(); else if (f.msRequestFullscreen) f.parent.msRequestFullscreen(); else {
            this.isMaximized = !0, this.resizeRoot(d, e), this.root.style.position = "absolute", 
            this.centerOnScreen(d, e);
            for (var g = 0; g < document.body.children.length; g++) document.body.children[g].style.visibility = "hidden";
            document.body.style.backgroundColor = "black", this.root.style.visibility = "visible", 
            document.dispatchEvent(new Event("fullscreenchange"));
        }
    }, a.prototype.exitFullscreen = function() {
        exitFullscreen();
    }, a.prototype.resizeRoot = function(a, b) {
        void 0 === a && (a = this._oldWidth), void 0 === b && (b = this._oldHeight), this._oldWidth = a, 
        this._oldHeight = b;
        var c = HSStageScene.stageWidth, d = HSStageScene.stageHeight;
        a || b ? a && !b ? b = a * d / c : !a && b && (a = b * c / d) : (a = window.innerWidth - 20, 
        b = window.innerHeight - 250), c > d ? this.resizeRootLandscape(a, b, c, d) : this.resizeRootPortrait(a, b, c, d);
    }, a.prototype.resizeRootLandscape = function(b, c, d, e) {
        var f = Math.min(c / e, b / d), g = Math.max(Math.floor(d * f), a.MIN_STAGE_WIDTH), h = g * (e / d);
        this.root.style.width = Math.floor(g) + "px", this.root.style.height = Math.floor(h) + "px", 
        this.isMaximized && this.centerOnScreen(b, c);
    }, a.prototype.resizeRootPortrait = function(a, b, c, d) {
        var e = Math.min(b / d, a / c), f = Math.floor(d * e), g = f * (c / d);
        this.root.style.width = Math.floor(g) + "px", this.root.style.height = Math.floor(f) + "px", 
        this.isMaximized && this.centerOnScreen(a, b);
    }, a.prototype.centerOnScreen = function(a, b) {
        var c = a || window.innerWidth, d = b || window.innerHeight;
        this.root.style.top = Math.floor((d - main.root.offsetHeight) / 2) + "px", this.root.style.left = Math.floor((c - main.root.offsetWidth) / 2) + "px";
    }, a.prototype.load = function(a) {
        this.projectData = a, this.context = new HSProjectContext(), this.project = new HSProject(this.context, a), 
        HSSoundManager.sharedInstance = new HSSoundManager(this.context.allSoundNames());
    }, a.prototype.mute = function() {
        HSSoundManager.sharedInstance.mute();
    }, a.prototype.unmute = function() {
        HSSoundManager.sharedInstance.unmute();
    }, a.prototype.isMuted = function() {
        return HSSoundManager.sharedInstance.isMuted;
    }, a.prototype.setiOSStageSizeIfNecessary = function() {
        if ("container" === this.root.getAttribute("stage-size")) {
            var a = this.root.getBoundingClientRect();
            HSStageScene.stageWidth = a.width, HSStageScene.stageHeight = a.height;
        }
    }, a.prototype.willPlay = function(a) {
        window.project_error && (window.project_error.style.display = "none"), a && this.load(a), 
        this.stageProject = new HSStageProject(this.project), this.stageProject.activateAllRulesForEventType(HSBlockType.EventOperatorStart), 
        this.stageProject.executeAllActiveRules(), this.hasDrawn || this.prepareForFirstPlay(), 
        this.registerEventCallbacks();
    }, a.prototype.prepareForFirstPlay = function() {
        var a = this, b = [], c = this.renderer;
        this.stageProject.activeStageScene.stageObjects.forEach(function(a) {
            var d = a.view.buildAllTextures().then(function(a) {
                for (var b = 0; b < a.length; b++) c.bindTexture && c.bindTexture(a[b]);
            });
            b.push(d);
        }), Promise.all(b).then(function() {
            a.hasDrawn = !0, sendToApp("playerState", "ready");
        }).catch(function(a) {
            setTimeout(function() {
                throw "error building initial textures " + JSON.stringify(a);
            });
        });
    }, a.prototype.startProject = function() {
        this.animationTick();
    }, a.prototype.play = function(b) {
        var c = this;
        hsCanLoadEmojis(function(d) {
            d || (a.HS_EMOJI_HOST = location.protocol + "//d2j12ek52gvmx9.cloudfront.net/emojis"), 
            c.resetStage(), c.willPlay(b), c.startProject();
        });
    }, a.prototype.resetStage = function() {
        this.animationFrameReq && (this.visualContext.drawingContext.clearBackground(), 
        window.cancelAnimationFrame(this.animationFrameReq), this.animationFrameReq = null);
    }, a.prototype.drawBackground = function() {
        var a = this;
        if (DEBUG_DRAW_BOUNDING_BOXES) {
            var b = this.background;
            this.visualContext.drawingContext.bgContext.clearRect(0, 0, b.width, b.height);
        }
        this.stageProject.activeStageScene.stageObjects.forEach(function(b) {
            b.drawPath(a.visualContext.drawingContext);
        });
    }, a.prototype.registerEventCallbacks = function() {
        var a = this;
        (this.project.context.hasAccelerometerEvent() || this.project.context.hasAccelerometerTrait()) && HSAccelerometerManager.startAccelerometerUpdates(), 
        this.listeners && this.listeners.unregister(), this.listeners = UIRegisterEventCallbacks(this.root, {
            pointerDown: function(b) {
                a.stageProject && (a.stageProject.receiveClickEvent(b, a.visualContext.collisionContext), 
                a.stageProject.receiveTouchDownEvent(b, a.visualContext.collisionContext));
            },
            pointerUp: function(b) {
                a.stageProject && a.stageProject.receiveTouchUpEvent(b, a.visualContext.collisionContext);
            },
            pointerDrag: function(b) {
                a.stageProject && a.stageProject.receiveTouchMoveEvent(b, a.visualContext.collisionContext);
            },
            pointerCancel: function(b) {
                a.stageProject && a.stageProject.receiveTouchUpEvent(b, a.visualContext.collisionContext);
            }
        });
    }, a.prototype.animationTick = function() {
        this.stageProject.animationTick(this.visualContext.collisionContext), this.renderer.render(this.stageProject.activeStageScene.container), 
        this.visualContext.drawingContext.renderFrame(), this.requestNextFrame();
    }, a.prototype.requestNextFrame = function() {
        var a = this;
        this.animationFrameReq = window.requestAnimationFrame(function(b) {
            a.animationTick();
        });
    }, a.prototype.takeScreenshot = function() {
        this.screenshotRenderer.render(this.stageProject.activeStageScene.container), this.screenshot.style.zIndex = "99999", 
        this.canvas.style.opacity = "0", this.screenshot.style.opacity = "1", setTimeout(sendToApp.bind(void 0, "screenshot", "done"), 400);
    }, a.prototype.releaseScreenshot = function() {
        this.screenshot.style.zIndex = "-99999", this.canvas.style.opacity = "1", this.screenshot.style.opacity = "0";
    }, a;
}();

HSMain.HS_EMOJI_HOST = "", HSMain.MIN_STAGE_WIDTH = 210, HSMain.dpi = Math.min(window.devicePixelRatio, 2);

var __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, FALSE_SCRIPT_KEY = "controlFalseScript", HSConditionalControl = function(a) {
    function b() {
        return a.apply(this, arguments) || this;
    }
    return __extends(b, a), b.prototype.parseJSON = function(b) {
        void 0 === b && (b = {}), a.prototype.parseJSON.call(this, b);
        var c = b[FALSE_SCRIPT_KEY] || [], d = c[SCRIPT_ID_KEY] || "", e = this.context.findWithObjectID("HSScript", d);
        this.scripts.push(e || new HSScript(this.context));
    }, b.prototype.stageBlock = function() {
        var a = this.trueScript(), b = this.falseScript();
        return new HSStageControl(this.type, [ a, b ], this.stageParameters());
    }, b.prototype.trueScript = function() {
        return this.scripts[0];
    }, b.prototype.falseScript = function() {
        return this.scripts[1];
    }, b;
}(HSControlBlock);

HSConditionalControl.key = "HSConditionalControl";

var __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, EVENT_PARAMETER_OBJECT_ID_KEY = "id", EVENT_PARAMETER_TYPE_KEY = "blockType", EVENT_PARAMETER_OBJECT_KEY = "objectID", HSEventParameterBlock = function(a) {
    function b() {
        return a.apply(this, arguments) || this;
    }
    return __extends(b, a), b.prototype.parseJSON = function(b) {
        void 0 === b && (b = {}), a.prototype.parseJSON.call(this, b), this.objectID = b[EVENT_PARAMETER_OBJECT_ID_KEY], 
        this.type = b[EVENT_PARAMETER_TYPE_KEY];
        var c = this.context.findWithObjectID(HSObject.key, b[EVENT_PARAMETER_OBJECT_KEY]);
        this.object = c;
    }, b;
}(HSParameterBlock);

HSEventParameterBlock.key = "HSEventParameterBlock";

var __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, HSMethodBlock = function(a) {
    function b() {
        return a.apply(this, arguments) || this;
    }
    return __extends(b, a), b.prototype.stageBlock = function() {
        return this._stageBlock || (this._stageBlock = new HSStageMethod(this.type, this.stageParameters())), 
        this._stageBlock;
    }, b;
}(HSBlock);

HSMethodBlock.key = "HSMethodBlock";

var __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, HSVariable = function(a) {
    function b(b) {
        var c = a.call(this, b) || this;
        return c.type = HSBlockType.Variable, c;
    }
    return __extends(b, a), b.prototype.parseJSON = function(c) {
        void 0 === c && (c = {}), a.prototype.parseJSON.call(this, c), this.blockType = c.type, 
        c.object && (this.object = this.context.findWithObjectID(HSObject.key, c.object)), 
        this.type = HSBlockType.Variable;
        var d = this.context.findWithObjectID(HSVariablePrototype.key, c[VARIABLE_KEY]);
        d.name === b.skillComplete ? this.name = d.name : this.object && this.context.version < HSProjectVersion.ADD_SELF ? this.name = "_hs_" + this.object.objectID + "_" + d.name : this.name = "_hs_" + d.name;
    }, b.prototype.isSkillComplete = function() {
        return this.name === b.skillComplete;
    }, b.prototype.computedValue = function(a) {
        return this._object(a)[this.name] || 0;
    }, b.prototype.setValue = function(a, b) {
        this._object(b)[this.name] = a;
    }, b.prototype._object = function(a) {
        return this.context.version < HSProjectVersion.ADD_SELF || this.blockType === HSBlockType.Device ? b.globalScope : this.blockType === HSBlockType.Object && this.object ? this.object.stageObject() : this.blockType === HSBlockType.OriginalObject ? a.originalObject(this.context) : a;
    }, b;
}(HSParameterBlock);

HSVariable.globalScope = {}, HSVariable.key = "HSVariable", HSVariable.skillComplete = "hsSkillComplete";

var HSCustomObject = function() {
    function a(a, b, c) {
        this.fileName = a, this.width = b, this.height = c;
    }
    return a.prototype.computedValue = function() {
        return 0;
    }, a;
}(), __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, HSCustomRule = function(a) {
    function b() {
        return a.apply(this, arguments) || this;
    }
    return __extends(b, a), b.prototype.parseJSON = function(a) {
        void 0 === a && (a = {}), this.name = a.name, this.objectID = a.id, this.addRulesFromJSON(a);
    }, b.prototype.addRulesFromJSON = function(a) {
        void 0 === a && (a = {});
        var c = this.context;
        this.rules = a.rules.map(function(a) {
            var d = c.findWithObjectID(HSRule.key, a);
            return d || (d = c.findWithObjectID(b.key, a)), d;
        }).filter(function(a) {
            return !!a;
        });
    }, b.prototype.stageRules = function(a) {
        var b = this;
        return this.rules.reduce(function(c, d) {
            return d === b ? c : c.concat(d.stageRules(a));
        }, []);
    }, b;
}(HSManagedObject);

HSCustomRule.key = "HSCustomRule";

var __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, OBJECT_ID_KEY = "objectID", X_POSITION_KEY = "xPosition", Y_POSITION_KEY = "yPosition", TEXT_KEY = "text", TYPE_KEY = "type", IMAGE_ID_KEY = "customObjectID", HSObject = function(a) {
    function b() {
        var b = a.apply(this, arguments) || this;
        return b.rules = [], b.heading = 0, b.customObject = null, b.willChangeCostume = !1, 
        b._stageObjects = [], b.mostRecentCloneCache = new Map(), b;
    }
    return __extends(b, a), b.prototype.stageObject = function(a) {
        return this._stageObjects.length || this.rebuildStageObject(), a && a.objectID === this.objectID ? a : a && null != a.creationTick ? this.mostRecentCloneBeforeTimestamp(a.creationTick) : this.context.version < HSProjectVersion.ADD_SELF ? this.mostRecentClone() : this.originalStageObject();
    }, b.prototype.rebuildStageObject = function() {
        var a = new HSStageObject(this.x, this.y, this.text, this.type, this.context.baseObjectScale, this.context.fontSize, this.objectID, this.fileName(), this.willChangeCostume);
        a.originalWidth = this.width, a.originalHeight = this.height, this.latestCloneIndex = 1, 
        a.stageRules = this.rules.reduce(function(b, c) {
            return c ? b.concat(c.stageRules(a)) : b;
        }, []), this._stageObjects = [ a ], this.mostRecentCloneCache = new Map();
    }, b.prototype.parseJSON = function(a) {
        void 0 === a && (a = {}), this.x = parseFloat(a[X_POSITION_KEY]), this.y = parseFloat(a[Y_POSITION_KEY]), 
        this.text = a[TEXT_KEY], this.type = a[TYPE_KEY], this.width = parseFloat(a.width), 
        this.height = parseFloat(a.height), this.objectID = a[OBJECT_ID_KEY], this.customObject = HSProjectContext.customObjectMap.get(a[IMAGE_ID_KEY]), 
        this.customObject && HSImageTextureFactory.instance.prefetchImage(this.customObject);
    }, b.prototype.fileName = function() {
        if (this.customObject) return this.customObject.fileName;
    }, b.prototype.addRule = function(a) {
        this.rules.push(a);
    }, b.prototype.allStageObjects = function() {
        return this._stageObjects;
    }, b.prototype.addStageObject = function(a) {
        this.latestCloneIndex++, this.allStageObjects().push(a), a.cloneIndex = this.latestCloneIndex;
    }, b.prototype.removeStageObject = function(a) {
        this._stageObjects.remove(a);
    }, b.prototype.mostRecentClone = function() {
        var a = this.allStageObjects();
        return a[a.length - 1];
    }, b.prototype.originalStageObject = function() {
        return this.allStageObjects()[0];
    }, b.prototype.mostRecentCloneBeforeTimestamp = function(a) {
        return this.mostRecentCloneCache.has(a) || this.mostRecentCloneCache.set(a, findLast(this.allStageObjects(), function(b) {
            return b.creationTick <= a;
        })), this.mostRecentCloneCache.get(a);
    }, b.prototype.canChangeCostume = function() {
        return this.type !== HSObjectType.text && (!hsIsShapeType(this.type) && !(this.type > HSObjectType.HS_NUMBER_OF_OBJECTS));
    }, b;
}(HSManagedObject);

HSObject.key = "HSObject";

var __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, VALUE_KEY = "value", CHILD_BLOCK_KEY = "datum", VARIABLE_KEY = "variable", PARAMETER_TYPE_KEY = "type", HSParameter = function(a) {
    function b() {
        return a.apply(this, arguments) || this;
    }
    return __extends(b, a), b.prototype.stageParameter = function() {
        return new HSStageParameter(this.value, this.childBlock);
    }, b.prototype.parseJSON = function(a) {
        if (void 0 === a && (a = {}), this.value = a[VALUE_KEY], this.type = a[PARAMETER_TYPE_KEY], 
        this.type === HSParameterType.Object && a[CHILD_BLOCK_KEY]) {
            var b = a[CHILD_BLOCK_KEY];
            if (b.customObject) {
                var c = HSProjectContext.customObjectMap.get(b.customObject);
                this.childBlock = c, HSImageTextureFactory.instance.prefetchImage(c);
            }
            this.value = b.text ? b.text : b.type;
        } else if (a[CHILD_BLOCK_KEY] && a[CHILD_BLOCK_KEY].variable) this.setChildBlockToVariableIfPossible(a[CHILD_BLOCK_KEY]); else if (a[CHILD_BLOCK_KEY]) {
            var d = new HSParameterBlock(this.context);
            d.parseJSON(a[CHILD_BLOCK_KEY]), this.childBlock = d;
        } else a[VARIABLE_KEY] && (this.setChildBlockToVariableIfPossible(a), this.setChildBlockToTraitIfPossible(a), 
        this.setChildBlockToEventParameterIfPossible(a));
    }, b.prototype.toString = function() {
        return SourceFormatter.paramToSrc(this);
    }, b.prototype.setChildBlockToVariableIfPossible = function(a) {
        var b = a[VARIABLE_KEY];
        if (this.context.findWithObjectID(HSVariablePrototype.key, b)) {
            var c = new HSVariable(this.context);
            c.parseJSON(a), this.childBlock = c;
        }
    }, b.prototype.setChildBlockToTraitIfPossible = function(a) {
        var b = a[VARIABLE_KEY], c = this.context.findWithObjectID(HSParameterBlock.key, b);
        c && (this.childBlock = c);
    }, b.prototype.setChildBlockToEventParameterIfPossible = function(a) {
        var b = a[VARIABLE_KEY], c = this.context.findWithObjectID(HSEventParameterBlock.key, b);
        c && (this.childBlock = c);
    }, b;
}(HSManagedObject);

HSParameter.key = "HSParameter";

var HSParameterType;

!function(a) {
    a[a.Default = 42] = "Default", a[a.LineWidth = 43] = "LineWidth", a[a.LineColor = 44] = "LineColor", 
    a[a.RandomLow = 45] = "RandomLow", a[a.RandomHigh = 46] = "RandomHigh", a[a.Variable = 47] = "Variable", 
    a[a.VariableValue = 48] = "VariableValue", a[a.Conditional = 49] = "Conditional", 
    a[a.HSObject = 50] = "HSObject", a[a.Sound = 51] = "Sound", a[a.Event = 52] = "Event", 
    a[a.SetText = 53] = "SetText", a[a.Object = 54] = "Object", a[a.TextOnly = 55] = "TextOnly", 
    a[a.Scene = 56] = "Scene";
}(HSParameterType || (HSParameterType = {}));

var __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, OBJECTS_KEY = "objects", RULES_KEY = "rules", VARIABLES_KEY = "variables", TRAITS_KEY = "traits", EVENT_PARAMETERS_KEY = "eventParameters", SCRIPTS_KEY = "abilities", SCENES_KEY = "scenes", HSProject = function(a) {
    function b(b, c) {
        void 0 === c && (c = {});
        var d = a.call(this, b) || this;
        return d.context.parseJSON(c), d.parseObjectDictionaries(c[OBJECTS_KEY], c[SCENES_KEY]), 
        d.parseVariableDictionaries(c[VARIABLES_KEY]), d.parseTraitsDictionaries(c[TRAITS_KEY]), 
        d.parseEventParameters(c[EVENT_PARAMETERS_KEY]), d.parseScriptDictionaries(c[SCRIPTS_KEY]), 
        d.parseRulesDictionaries(c[RULES_KEY]), d.importCustomRules(c.customRules), d.context.version >= HSProjectVersion.CUSTOM_WHENS && d.addRulesToObjects(c[OBJECTS_KEY]), 
        d.parseScenesDictionaries(c[SCENES_KEY]), d;
    }
    return __extends(b, a), b.prototype.parseEventParameters = function(a) {
        var b = this;
        void 0 === a && (a = []), a && a.forEach(function(a, c, d) {
            new HSEventParameterBlock(b.context).parseJSON(a);
        });
    }, b.prototype.parseVariableDictionaries = function(a) {
        if (void 0 === a && (a = []), a) {
            var b = this.context;
            a.forEach(function(a, c, d) {
                new HSVariablePrototype(b).parseJSON(a);
            });
        }
    }, b.prototype.parseTraitsDictionaries = function(a) {
        if (void 0 === a && (a = []), a) {
            var b = this.context;
            a.forEach(function(a, c, d) {
                new HSParameterBlock(b).parseJSON(a);
            });
        }
    }, b.prototype.parseObjectDictionaries = function(a, b) {
        if (void 0 === a && (a = []), void 0 === b && (b = []), b.length > 0) var c = b.map(function(a) {
            return null === a[OBJECTS_KEY] ? [] : a[OBJECTS_KEY];
        }).reduce(function(a, b) {
            return a.concat(b);
        });
        var d = this.context;
        a.forEach(function(a, e, f) {
            if (!(b.length > 0) || c.includes(a.objectID)) {
                new HSObject(d).parseJSON(a);
            }
        });
    }, b.prototype.addRulesToObjects = function(a) {
        void 0 === a && (a = []);
        for (var b = this.context, c = 0, d = a; c < d.length; c++) {
            var e = d[c], f = b.findWithObjectID(HSObject.key, e.objectID);
            if (e.rules && f && f.rules) {
                var g = f.canChangeCostume(), h = !1, i = e.rules.map(function(a) {
                    var c = b.findWithObjectID(HSRule.key, a);
                    return !h && g && c && c.script.containsChangeCostume() && (h = !0), c || b.findWithObjectID(HSCustomRule.key, a);
                });
                f.rules = i.filter(function(a) {
                    return !!a;
                }), f.willChangeCostume = h;
            }
        }
    }, b.prototype.importCustomRules = function(a) {
        void 0 === a && (a = []);
        var b = this.context;
        a instanceof Array || (a = []), a.forEach(function(a, c, d) {
            new HSCustomRule(b).parseJSON(a);
        }), a.forEach(function(a, c, d) {
            b.findWithObjectID(HSCustomRule.key, a.id).addRulesFromJSON(a);
        });
    }, b.prototype.parseScriptDictionaries = function(a) {
        void 0 === a && (a = []);
        for (var b = [], c = 0; c < a.length; c++) {
            var d = new HSScript(this.context);
            b.push(d), d.addObjectIDFromJSON(a[c]);
        }
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.parseJSON(a[c]);
        }
    }, b.prototype.parseRulesDictionaries = function(a) {
        void 0 === a && (a = []);
        var b = this.context;
        a.forEach(function(a, c, d) {
            new HSRule(b).parseJSON(a);
        });
    }, b.prototype.parseScenesDictionaries = function(a) {
        if (void 0 === a && (a = []), a.length > 0) {
            var b = this.context;
            this.scenes = a.map(function(a) {
                var c = new HSScene(b);
                return c.parseJSON(a), c;
            });
        } else {
            var c = new HSScene(this.context);
            c.parseJSON(), this.scenes = [ c ];
        }
    }, b;
}(HSManagedObject), VERSION_KEY = "version", CUSTOM_OBJECTS_KEY = "customObjects", SCALE_KEY = "baseObjectScale", FONT_SIZE_KEY = "fontSize", STAGE_SIZE = "stageSize", HSProjectVersion;

!function(a) {
    a[a.V13 = 13] = "V13", a[a.V14 = 14] = "V14", a[a.V15 = 15] = "V15", a[a.V16 = 16] = "V16", 
    a[a.V17 = 17] = "V17", a[a.V18 = 18] = "V18", a[a.V19 = 19] = "V19", a[a.V24 = 24] = "V24", 
    a[a.WEBPLAYER_IN_APP = 25] = "WEBPLAYER_IN_APP", a[a.ADD_SELF = 26] = "ADD_SELF", 
    a[a.CUSTOM_WHENS = 28] = "CUSTOM_WHENS";
}(HSProjectVersion || (HSProjectVersion = {}));

var HSProjectContext = function() {
    function a() {
        this.projectObjects = {}, this.version = HSProjectVersion.CUSTOM_WHENS, this.baseObjectScale = 1, 
        this.fontSize = 80, this._hasAccelerometerEvent = null, this._hasAccelerometerTrait = null;
    }
    return a.prototype.findAllForClassName = function(a) {
        return this.projectObjects[a] ? this.projectObjects[a] : [];
    }, a.prototype.findWithObjectID = function(a, b) {
        return this.findAllForClassName(a).find(function(a) {
            return a.objectID === b;
        });
    }, a.prototype.insertObject = function(a) {
        var b = Object.getPrototypeOf(a).constructor.key;
        this.projectObjects[b] ? this.projectObjects[b].push(a) : this.projectObjects[b] = [ a ];
    }, a.prototype.deleteObject = function(a) {
        var b = Object.getPrototypeOf(a).constructor.key, c = this.projectObjects[b].indexOf(a);
        c > -1 && this.projectObjects[b].splice(c, 1);
    }, a.prototype.parseJSON = function(b) {
        if (void 0 === b && (b = {}), this.version = b[VERSION_KEY] || HSProjectVersion.V14, 
        this.baseObjectScale = b[SCALE_KEY] || 1, this.fontSize = b[FONT_SIZE_KEY] || 80, 
        HSEmojiTextNode.WIDTH = this.fontSize / 2, HSEmojiTextNode.HEIGHT = this.fontSize / 2, 
        HSTextNode.LINE_HEIGHT = this.fontSize < 80 ? 49 : 55, this.version >= HSProjectVersion.V19) {
            var c = b[STAGE_SIZE];
            c && (HSStageScene.stageWidth = c.width, HSStageScene.stageHeight = c.height, HSTextNode.MAX_LINE_WIDTH = Math.min(HSTextNode.MAX_LINE_WIDTH, c.width));
        }
        Array.isArray(b[CUSTOM_OBJECTS_KEY]) && b[CUSTOM_OBJECTS_KEY].forEach(function(b) {
            var c = new HSCustomObject(b.fileName, b.size.width, b.size.height);
            a.customObjectMap.set(b.id, c);
        });
    }, a.prototype.allSoundNames = function() {
        for (var a = this.findAllForClassName(HSParameter.key), b = [], c = 0; c < a.length; c++) {
            var d = a[c];
			//AE_MOD Load multiple sounds
			if (d.type === HSParameterType.Sound && -1 === b.indexOf(d.value)) {
				var isCustom = (!/^((low-|high)?[a-zA-Z](sharp|flat)?|clickPlayable|alert|car|chaChing|check|clang|crash|dash|doorbell|drip|fail|footsteps|laser|pop|schoolBell|spring|vibrate|trophy|aliens|bubbles|crickets|meow|rain|roar|tweet|wind|woof|ahhh|cheer|eating|heartbeat|laugh|news|talking|bass|chord|clap|gong|snare)$/.test(d.value));
				b.push(((isCustom) ? "custom/":"") + d.value);
				if (!isCustom && !!getPref && !getPref("old_sounds") && /^(low-|high)?[a-gA-G](sharp|flat)?$/.test(d.value)) {
					b.push("new/" + d.value, "guitar/" + d.value, "8-bit/" + d.value);
				}
			}
        }
        return b;
    }, a.prototype.hasAccelerometerEvent = function() {
        if (null != this._hasAccelerometerEvent) return this._hasAccelerometerEvent;
        for (var a = this.findAllForClassName(HSRule.key), b = 0; b < a.length; b++) switch (a[b].eventType()) {
          case HSBlockType.EventOperatorTiltUp:
          case HSBlockType.EventOperatorTiltDown:
          case HSBlockType.EventOperatorTiltLeft:
          case HSBlockType.EventOperatorTiltRight:
          case HSBlockType.EventOperatorShake:
            return this._hasAccelerometerEvent = !0;
        }
        return !1;
    }, a.prototype.hasAccelerometerTrait = function() {
        if (null != this._hasAccelerometerTrait) return this._hasAccelerometerTrait;
        for (var a = this.findAllForClassName(HSParameterBlock.key), b = 0; b < a.length; b++) switch (a[b].type) {
          case HSBlockType.StageTraitTiltUp:
          case HSBlockType.StageTraitTiltDown:
          case HSBlockType.StageTraitTiltLeft:
          case HSBlockType.StageTraitTiltRight:
            return this._hasAccelerometerEvent = !0;
        }
        return !1;
    }, a;
}();

HSProjectContext.customObjectMap = new Map();

var __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, SCRIPT_ID_KEY = "abilityID", OBJECT_ID_KEY = "objectID", HSRule = function(a) {
    function b(b) {
        var c = a.call(this, b) || this;
        return c.type = HSBlockType.Rule, c;
    }
    return __extends(b, a), b.prototype.stageRule = function(a) {
        return new HSStageRule(this, a);
    }, b.prototype.stageRules = function(a) {
        return [ this.stageRule(a) ];
    }, b.prototype.parseJSON = function(b) {
        if (void 0 === b && (b = {}), this.context.version < HSProjectVersion.CUSTOM_WHENS) return void this.parseLowerThanCustomWhensJSON(b);
        var c = this.context.findWithObjectID("HSScript", b[SCRIPT_ID_KEY]);
        c ? (a.prototype.parseJSON.call(this, b), this.childBlock() ? (this.objectID = b.id, 
        this.script = c) : this.context.deleteObject(this)) : this.context.deleteObject(this);
    }, b.prototype.parseLowerThanCustomWhensJSON = function(b) {
        void 0 === b && (b = {});
        var c = this.context.findWithObjectID("HSScript", b[SCRIPT_ID_KEY]), d = this.context.findWithObjectID("HSObject", b[OBJECT_ID_KEY]);
        d && c ? (this.context.version < HSProjectVersion.V14 && this.parseLowerThanV14JSON(b, d), 
        a.prototype.parseJSON.call(this, b), this.childBlock() ? (this.script = c, d.willChangeCostume = d.canChangeCostume() && c.containsChangeCostume(), 
        d.addRule(this)) : this.context.deleteObject(this)) : this.context.deleteObject(this);
    }, b.prototype.parseLowerThanV14JSON = function(a, b) {
        var c = a.eventType, d = blockTypeForLegacyEventType(c), e = new HSParameterBlock(this.context);
        e.type = d;
        var f = new HSParameter(this.context);
        switch (this.parameters = [ f ], f.childBlock = e, d) {
          case HSBlockType.EventOperatorTap:
          case HSBlockType.EventOperatorHold:
            this.addObjectToEventOperator(e, b);
            break;

          case HSBlockType.EventOperatorBump:
          case HSBlockType.EventOperatorIsTouching:
            this.addObjectsToBumps(e, b, a);
        }
    }, b.prototype.addObjectToEventOperator = function(a, b) {
        var c = new HSEventParameterBlock(this.context);
        c.object = b;
        var d = new HSParameter(this.context);
        d.type = HSParameterType.HSObject, d.childBlock = c, a.parameters = [ d ];
    }, b.prototype.addObjectsToBumps = function(a, b, c) {
        var d = new HSEventParameterBlock(this.context);
        d.object = b;
        var e = new HSEventParameterBlock(this.context);
        e.object = this.context.findWithObjectID("HSObject", c.collisionReceiverObject);
        var f = new HSParameter(this.context);
        f.type = HSParameterType.HSObject, f.childBlock = d;
        var g = new HSParameter(this.context);
        g.type = HSParameterType.HSObject, g.childBlock = e, a.parameters = [ f, g ];
    }, b.prototype.firstObject = function() {
        return this.childBlock() && this.childBlock().parameters.length > 0 ? this.childBlock().parameters[0].childBlock.object : null;
    }, b.prototype.firstParam = function() {
        return this.parameters[0];
    }, b.prototype.childBlock = function() {
        return this.firstParam().childBlock;
    }, b.prototype.eventType = function() {
        return this.childBlock().type;
    }, b.prototype.eventParameterBlocks = function() {
        var a = [];
        return this.childBlock() && this.childBlock().parameters.forEach(function(b) {
            b.childBlock && a.push(b.childBlock);
        }), a;
    }, b.prototype.paramsBlock = function() {
        if (this.childBlock().parameters[0]) return this.childBlock().parameters[0].childBlock;
    }, b.prototype.matchesEvent = function(a) {
        return this.childBlock().type === a;
    }, b.prototype.conditionIsTrue = function(a) {
        return this.childBlock().computedBooleanValue(a);
    }, b;
}(HSBlock);

HSRule.key = "HSRule";

var __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, HSScene = function(a) {
    function b() {
        var b = a.apply(this, arguments) || this;
        return b.objects = [], b;
    }
    return __extends(b, a), b.prototype.parseJSON = function(a) {
        var b = this;
        void 0 === a && (a = {}), a[OBJECTS_KEY] && a[OBJECTS_KEY].length > 0 ? this.objects = a[OBJECTS_KEY].map(function(a) {
            return b.context.findWithObjectID(HSObject.key, a);
        }) : a[OBJECTS_KEY] && 0 === a[OBJECTS_KEY].length ? this.objects = [] : this.objects = this.context.findAllForClassName(HSObject.key), 
        this.name = a.name;
    }, b.prototype.stageScene = function() {
        return new HSStageScene(this);
    }, b;
}(HSManagedObject);

HSScene.key = "HSScene";

var __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, SCRIPT_ID_KEY = "abilityID", BLOCKS_KEY = "blocks", HSScript = function(a) {
    function b() {
        var b = a.apply(this, arguments) || this;
        return b.blocks = [], b;
    }
    return __extends(b, a), b.prototype.stageScript = function() {
        return new HSStageScript(this);
    }, b.prototype.addObjectIDFromJSON = function(a) {
        void 0 === a && (a = {}), this.objectID = a[SCRIPT_ID_KEY];
    }, b.prototype.isImmediatelyRecursive = function() {
        return this.blocks.length > 0 && this.blocks[0].scripts && this.blocks[0].scripts[0] === this || !this.firstMethod(0);
    }, b.prototype.firstMethod = function(a) {
        if (a > 30) return null;
        var b = this.blocks[0];
        if (!b) return this;
        if (b.isControl) {
            if (b.scripts[0]) {
                return b.scripts[0].firstMethod(a + 1);
            }
            return null;
        }
        return b;
    }, b.prototype.containsChangeCostume = function(a) {
        void 0 === a && (a = {});
        for (var b = 0; b < this.blocks.length; b++) {
            var c = this.blocks[b];
            if (c.type === HSBlockType.ChangeCostume) return !0;
            var d = c;
            if (d.scripts) for (var e = 0; e < d.scripts.length; e++) {
                var f = d.scripts[e], g = f.objectID;
                if (!a[g] && (a[g] = !0, f.containsChangeCostume(a))) return !0;
            }
        }
        return !1;
    }, b.prototype.parseJSON = function(a) {
        var b = this;
        void 0 === a && (a = {}), (a[BLOCKS_KEY] || []).forEach(function(a) {
            var c;
            switch (HSBlock.blockClassForDict(a)) {
              case HSBlockClass.Control:
                c = new HSControlBlock(b.context);
                break;

              case HSBlockClass.Method:
                c = new HSMethodBlock(b.context);
                break;

              case HSBlockClass.ConditionalControl:
                c = new HSConditionalControl(b.context);
            }
            c.parseJSON(a), b.blocks.push(c);
        });
    }, b;
}(HSManagedObject);

HSScript.key = "HSScript";

var HSSound = function() {
    function a(b, c) {
        var d = this;
        this.name = b, this.context = c, this.sources = new Set(), a.soundCache.has(b) || a.soundCache.set(b, new Promise(function(a, b) {
            var c = new XMLHttpRequest();
            c.open("GET", d.url(), !0), c.responseType = "arraybuffer", c.onload = function() {
                c.status >= 200 && c.status < 300 ? d.context.decodeAudioData(c.response, a, function() {}) : b(c);
            }, c.onerror = b, c.send();
        })), a.soundCache.get(b).then(function(a) {
            return d.buffer = a;
        });
    }
    return a.prototype.play = function() {
        var a = this;
        if (isIOSApp()) sendToApp("sound", this.name); else if (this.buffer) {
            var b = this.context.createBufferSource();
            b.buffer = this.buffer, b.connect(this.context.destination), b.start(0), this.sources.add(b), 
            b.onended = function() {
                return a.sources.delete(b);
            };
        }
    }, a.prototype.stop = function() {
        this.sources.forEach(function(a) {
            return a.stop();
        }), this.sources.clear();
    }, a.prototype.url = function() {
        return "https://awesome-e.github.io/hs-tools/play-project/hopscotch-sounds/" /*AE_MOD Self-host sounds  "https://d2jeqdlsh5ay24.cloudfront.net/"*/ + this.name + ".mp3";
    }, a;
}();

HSSound.soundCache = new Map();

var AudioContext = window.AudioContext || window.webkitAudioContext, HSSoundManager = function() {
    function a(b) {
        var c = this;
        this.sounds = {}, this.context = a.audioContext, this.isMuted = !1, b.forEach(function(a) {
            c.sounds[a] = new HSSound(a, c.context);
        }), a.hasUnlockListener || (a.hasUnlockListener = !0, this.eventListenerFunc = function() {
            var a = c.context.createBufferSource();
            a.buffer = c.context.createBuffer(1, 1, 22050), a.connect(c.context.destination), 
            a.start(0), window.removeEventListener("touchstart", c.eventListenerFunc), window.removeEventListener("touchend", c.eventListenerFunc), /* AE_MOD */ window.removeEventListener("click", c.eventListenerFunc);
        }, window.addEventListener("touchstart", this.eventListenerFunc), window.addEventListener("touchend", this.eventListenerFunc), /* AE_MOD FIX SAFARI WEB EXPLORER AUDIO */ window.addEventListener("click", this.eventListenerFunc));
    }
    return a.prototype.play = function(a) {
        this.sounds[a] && !this.isMuted && this.sounds[a].play();
    }, a.prototype.mute = function() {
        this.isMuted || Object.values(this.sounds).forEach(function(a) {
            return a.stop();
        }), this.isMuted = !0;
    }, a.prototype.unmute = function() {
        this.isMuted = !1;
    }, a;
}();

HSSoundManager.audioContext = new AudioContext(), HSSoundManager.hasUnlockListener = !1;

var __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, OBJECT_ID_STRING_KEY = "objectIdString", HSVariablePrototype = function(a) {
    function b(b) {
        return a.call(this, b) || this;
    }
    return __extends(b, a), b.prototype.parseJSON = function(a) {
        void 0 === a && (a = {}), this.objectID = a[OBJECT_ID_STRING_KEY], this.name = a.name, 
        this.type = a.type || HSBlockType.Object;
    }, b;
}(HSManagedObject);

HSVariablePrototype.key = "HSVariablePrototype";

var UIPointerEvent = function() {
    function a(a, b, c) {
        void 0 === c && (c = 0), this.id = c, this.id = c;
        var d = a.target, e = d.clientWidth, f = d.clientHeight;
        this.point = [ b[0] * HSStageScene.stageWidth / e, HSStageScene.stageHeight - b[1] * HSStageScene.stageHeight / f ];
    }
    return a;
}(), UIEventListeners = function() {
    function a(a) {
        this.listeners = a;
    }
    return a.prototype.unregister = function() {
        this.listeners.forEach(function(a) {
            return a.unregister();
        });
    }, a;
}(), UIEventListener = function() {
    function a(a, b, c) {
        this.element = a, this.eventType = b, this.callback = c, a.addEventListener(b, c);
    }
    return a.prototype.unregister = function() {
        this.element.removeEventListener(this.eventType, this.callback);
    }, a;
}(), SourceFormatter = function() {
    function a() {}
    return a.blocksToSrc = function(a) {
        return a.join(", ");
    }, a.blockToSrc = function(a) {
        return HSBlockType[a.type] + "(" + a.parameters.join(", ") + ")";
    }, a.paramToSrc = function(a) {
        return HSParameterType[a.type] + ": " + a.value;
    }, a.stageParamToSrc = function(a, b) {
        return a + (b ? "...\n" + b.toString() : "");
    }, a.stageControlToSrc = function(a) {
        var b = HSBlockType[a.type] + "(" + a.parameters.join(", ") + ")";
        return a.scripts.length > 0 && (b += " { ", b += a.scripts.map(function(a) {
            return a.toString();
        }).join(" } ")), b;
    }, a.stageMethodToSrc = function(a) {
        return HSBlockType[a.type] + "(" + a.parameters.join(", ") + ")";
    }, a.executableToSrc = function(a) {
        return "NOW {" + a.blocksToExecuteNow.map(function(a) {
            return a.toString();
        }).join(", ") + "}; LATER {" + a.blocksToExecuteLater.map(function(a) {
            return a.toString();
        }).join(", ") + "}";
    }, a;
}(), HSCollisionPair = function() {
    function a(a, b) {
        this.isOverlapping = !1, this.wasOverlapping = !1;
        var c = this.getSortedPair(a, b);
        this.stageObject1 = c[0], this.stageObject2 = c[1], this.uniqueKey = this.stageObject1.stageObjectID + "_" + this.stageObject2.stageObjectID;
    }
    return a.prototype.getSortedPair = function(a, b) {
        return a.stageObjectID < b.stageObjectID ? [ a, b ] : [ b, a ];
    }, a.prototype.collisionTest = function(a) {
        return !!this.isVisible() && a.collisionTest(this.stageObject1, this.stageObject2);
    }, a.prototype.isVisible = function() {
        return !this.stageObject1.isInvisible() && !this.stageObject2.isInvisible();
    }, a.prototype.update = function(a) {
        this.wasOverlapping = this.isOverlapping, this.isOverlapping = this.collisionTest(a);
    }, a.prototype.isTouching = function() {
        return this.isOverlapping;
    }, a.prototype.isBumping = function() {
        return this.isTouching() && !this.wasOverlapping;
    }, a;
}(), HSCollisionPairCollection = function() {
    function a(a) {
        void 0 === a && (a = []), this.pairMap = new Map(), this.add(a);
    }
    return a.prototype.add = function(a) {
        var b = this;
        a.forEach(function(a) {
            return b.addOne(a);
        });
    }, a.prototype.filter = function(b) {
        return new a(this.toArray().filter(b));
    }, a.prototype.contains = function(a) {
        return this.pairMap.has(a.uniqueKey);
    }, a.prototype.without = function(a) {
        return this.filter(function(b) {
            return !a.contains(b);
        });
    }, a.prototype.addOne = function(a) {
        this.pairMap.set(a.uniqueKey, a);
    }, a.prototype.toArray = function() {
        return Array.from(this.pairMap.values());
    }, a.prototype.intersects = function(a) {
        var b = this;
        return a.some(function(a) {
            return b.contains(a);
        });
    }, a.prototype.copy = function() {
        return new a(Array.from(this));
    }, a.prototype.forEach = function(a) {
        return this.pairMap.forEach(function(b) {
            return a(b);
        });
    }, a.prototype[Symbol.iterator] = function() {
        return this.pairMap.values();
    }, a.prototype.length = function() {
        return this.pairMap.size;
    }, a;
}(), HSColor = function() {
    function a() {}
    return a.textColor = function() {
        return a.rgbTextColor;
    }, a.randomColor = function() {
        var b = a.RGBAColors.length, c = Math.floor(Math.random() * (b - 1));
        return a.RGBAColors[c];
    }, a.rgb = function(a, b, c) {
        return "rgb(" + Math.round(a) + ", " + Math.round(b) + ", " + Math.round(c) + ")";
    }, a.hexColor = function(a) {
        return tinycolor(a).toHex();
    }, a.hexToTint = function(b) {
        return void 0 === this._colorMap.get(b) && this._colorMap.set(b, parseInt(a.hexColor(b), 16)), 
        this._colorMap.get(b);
    }, a.hsb = function(b, c, d) {
        return a.convertHSBStringToRGBAString("HSB(" + b + ", " + c + "%, " + d + "%)");
    }, a.rgbStringFromHSBString = function(b) {
        var c = a.hsbRGBAColorMaps[b];
        return c || (c = a.convertHSBStringToRGBAString(b)), c;
    }, a.hsbStringFromRgbString = function(a) {
        var b = tinycolor(a).toHsv();
        return "HSB(" + Math.round(b.h) + "," + Math.round(100 * b.s) + "," + Math.round(100 * b.v) + ")";
    }, a.rgbStringFromNumericColor = function(b) {
        var c = parseFloat(b);
        if (!isNaN(c)) {
            var d = Math.abs(Math.round(c) % a.RGBAColors.length);
            return a.RGBAColors[d];
        }
        return null;
    }, a.convertHSBStringToTinyColor = function(a) {
        var b = a.replace("B", "V");
        return tinycolor(b);
    }, a.convertHSBStringToRGBAString = function(a) {
        return this.convertHSBStringToTinyColor(a).toRgbString();
    }, a.convertHSBStringToRGB = function(a) {
        var b = this.convertHSBStringToTinyColor(a), c = b.toRgb();
        return vec4.fromValues(c.r / 255, c.g / 255, c.b / 255, 1);
    }, a;
}();

HSColor.RGBAColors = [ "rgb(100, 48, 112)", "rgb(134, 77, 209)", "rgb(168, 177, 255)", "rgb(215, 163, 227)", "rgb(255, 179, 207)", "rgb(232, 84, 96)", "rgb(214, 24, 100)", "rgb(212, 8, 29)", "rgb(255, 119, 0)", "rgb(250, 204, 0)", "rgb(255, 233, 38)", "rgb(159, 245, 165)", "rgb(134, 196, 63)", "rgb(64, 143, 50)", "rgb(86, 214, 186)", "rgb(140, 219, 255)", "rgb(10, 169, 209)", "rgb(39, 138, 219)", "rgb(29, 60, 117)", "rgb(77, 77, 77)", "rgb(51, 41, 50)", "rgb(122, 67, 29)", "rgb(204, 204, 204)", "rgb(255, 255, 255)", "rgb(250,220,186)", "rgb(225,187,146)", "rgb(192,143,101)", "rgb(156,100,57)", "rgb(89,69,56)" ], 
HSColor.hsbRGBAColorMaps = {
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
}, HSColor.rgbWhiteColor = "rgb(255, 255, 255)", HSColor.rgbTextColor = "rgb(0,0,0)", 
HSColor._colorMap = new Map();

var HSExecutable = function() {
    function a(a, b) {
        this.blocksToExecuteNow = a, this.blocksToExecuteLater = b, this.isImmediate = !1;
    }
    return a.prototype.newWithNewBlocksToExecuteLater = function(b) {
        return new a(this.blocksToExecuteNow, b);
    }, a.prototype.execute = function(a) {
        var b = this;
        this.blocksToExecuteNow.forEach(function(c) {
            return b.executeBlock(c, a);
        });
    }, a.prototype.toString = function() {
        return SourceFormatter.executableToSrc(this);
    }, a.prototype.executeBlock = function(a, b) {
        var c = (a.firstIntegerValue(b), a.parameters);
        switch (a.type) {
          case HSBlockType.PlaySoundSeconds:
          case HSBlockType.PlaySound:
			function notePath (val) {
				//AE_MOD find path of note
				var isCustom = (!/^((low-|high)?[a-zA-Z](sharp|flat)?|clickPlayable|alert|car|chaChing|check|clang|crash|dash|doorbell|drip|fail|footsteps|laser|pop|schoolBell|spring|vibrate|trophy|aliens|bubbles|crickets|meow|rain|roar|tweet|wind|woof|ahhh|cheer|eating|heartbeat|laugh|news|talking|bass|chord|clap|gong|snare)$/.test(val));
				var ins = (/^(low-|high)?[a-zA-Z](sharp|flat)?$/.test(val)) ? ({"-1": "", "0": "new/", "1": "guitar/", "2": "8-bit/"})[(c[2])?c[2].computedStringValue(b):'0'] : ((isCustom)?"custom/":"");
				return (!isCustom && !!getPref && getPref("old_sounds")) ? "" : ins;
			}
            var d = HSSoundManager.sharedInstance, e = notePath(c[0].computedStringValue(b)) + c[0].computedStringValue(b);//e = c[0].computedStringValue(b);
            d.play(e);
            break;

          case HSBlockType.MakeAClone:
            var f = 1;
            c[0] && (f = c[0].computedValue(b)), b.clone(f);
            break;

          case HSBlockType.Destroy:
            b.destroy();
            break;

          case HSBlockType.ChangeX:
          case HSBlockType.ChangeY:
          case HSBlockType.Move:
          case HSBlockType.Rotate:
            var g = b.x, h = b.y, i = b.headingInDegrees;
            b.executeBlock(a), b.x === g && b.y === h && b.headingInDegrees === i && this.blocksToExecuteLater.shift();
            break;

          case HSBlockType.ChangeScene:
            HSStageProject.sharedInstance.changeScene(c[0].computedStringValue(b));
            break;

          default:
			try {
				b.executeBlock(a);
			} catch (E) {
				//AE_MOD
				//Errors do not catch these blocks: Play Sound, CLone, Destroy, Change X, Change Y, Move, Rotate, Change Scene, Broadcast Message
				console.groupCollapsed("%cBlock Execution Error","color:white;font-weight:900;display:block;background-color:red;border:2px solid salmon;padding:2px 4px;");
				console.log("Block Code:", a);
				console.log("Active Object UUID: " + b.objectID);
				b.stageRules.forEach(r=>{
					if (r.isActive) console.log("Active Rule Type: " + r.eventBlock.parameterBlock.type);
				});
				console.groupEnd();
				throw E;
			}
        }
    }, a;
}(), HSLinkedList = function() {
    function a() {
        this.nodeMap = new Map(), this.headNode = new HSLinkedListNode(), this.length = 0, 
        this.headNode.next = this.headNode, this.headNode.previous = this.headNode;
    }
    return a.prototype.setNewOrder = function(a) {
        var b = this, c = a(Array.from(this.nodeMap.keys()));
        c.forEach(function(a) {
            return b.remove(a);
        }), c.forEach(function(a) {
            return b.push(a);
        });
    }, a.prototype.push = function(a) {
        if (!this.includes(a)) {
            var b = new HSLinkedListNode(a);
            b.next = this.headNode, b.previous = this.headNode.previous, b.previous.next = b, 
            this.headNode.previous = b, this.nodeMap.set(a, b), this.length++;
        }
    }, a.prototype.unshift = function(a) {
        if (!this.includes(a)) {
            var b = new HSLinkedListNode(a);
            b.next = this.headNode.next, b.previous = this.headNode, b.next.previous = b, this.headNode.next = b, 
            this.nodeMap.set(a, b), this.length++;
        }
    }, a.prototype.remove = function(a) {
        var b = this.nodeMap.get(a);
        b && (b.previous.next = b.next, b.next.previous = b.previous, this.nodeMap.delete(a), 
        this.length--);
    }, a.prototype.includes = function(a) {
        return this.nodeMap.has(a);
    }, a.prototype[Symbol.iterator] = function() {
        return new HSLinkedListIterator(this.headNode);
    }, a.prototype.getReverseIterator = function() {
        return new HSLinkedListIterator(this.headNode, !0);
    }, a.prototype.forEach = function(a) {
        var b = this, c = 0;
        this[Symbol.iterator]().forEach(function(d) {
            return a(d, c++, b);
        });
    }, a.prototype.forEachRight = function(a) {
        var b = this, c = this.length - 1;
        this.getReverseIterator().forEach(function(d) {
            return a(d, c--, b);
        });
    }, a.prototype.find = function(a) {
        var b = this, c = 0;
        return this[Symbol.iterator]().find(function(d) {
            return a(d, c++, b);
        });
    }, a.prototype.findLast = function(a) {
        var b = this, c = this.length - 1;
        return this.getReverseIterator().find(function(d) {
            return a(d, c--, b);
        });
    }, a;
}(), HSLinkedListNode = function() {
    function a(a) {
        void 0 === a && (a = null), this.value = a, this.next = this, this.previous = this;
    }
    return a;
}(), HSLinkedListIterator = function() {
    function a(a, b) {
        void 0 === b && (b = !1), this.headNode = a, this.isReversed = b, this.currentNode = a;
    }
    return a.prototype.next = function() {
        var a = this.isReversed ? this.currentNode.previous : this.currentNode.next;
        return a !== this.headNode ? (this.currentNode = a, {
            value: this.currentNode.value,
            done: !1
        }) : {
            value: void 0,
            done: !0
        };
    }, a.prototype.forEach = function(a) {
        for (var b = this.next(); !b.done; ) a(b.value), b = this.next();
    }, a.prototype.find = function(a) {
        for (var b = this.next(); !b.done; ) {
            if (a(b.value)) return b.value;
            b = this.next();
        }
    }, a.prototype[Symbol.iterator] = function() {
        return this;
    }, a;
}(), HSLinePoint = function() {
    function a(b, c, d) {
        this.point = b, this.radius = c, this.colorReference = d, this.point[0] = clamp(b[0], -a.MAX_POINT_VALUE, a.MAX_POINT_VALUE), 
        this.point[1] = clamp(b[1], -a.MAX_POINT_VALUE, a.MAX_POINT_VALUE);
        var e = Math.ceil(2 * c) / 2;
        this.radius = e < 0 ? .5 : clamp(e, 0, a.MAX_POINT_VALUE);
    }
    return a.prototype.clone = function() {
        return new a(this.point, this.radius, this.colorReference);
    }, a;
}();

HSLinePoint.MAX_POINT_VALUE = 1e4;

var HSPathDrawer = function() {
    function a(a) {
        this.currentPoint = a, this.shouldDraw = !1;
    }
    return a.prototype.drawDiff = function(a) {
        this.shouldDrawPath() && (this.currentPoint.radius && a.drawLine(this.previousPointWithRadiusAndColor(), this.currentPoint), 
        this.shouldDraw = !1);
    }, a.prototype.shouldDrawPath = function() {
        return this.shouldDraw && this.currentPoint && this.previousPoint;
    }, a.prototype.previousPointWithRadiusAndColor = function() {
        var a = this.previousPoint.clone();
        return a.colorReference = this.currentPoint.colorReference, a.radius = this.currentPoint.radius, 
        a;
    }, a.prototype.addPoint = function(a, b) {
        b ? (this.shouldDraw = !0, this.previousPoint = this.currentPoint, this.currentPoint = a) : (this.currentPoint = a, 
        this.shouldDraw = !1);
    }, a;
}(), HSStageControl = function() {
    function a(a, b, c) {
        void 0 === c && (c = []), this.type = a, this.scripts = b, this.parameters = c, 
        this.isImmediate = !1;
    }
    return a.prototype.integerValue = function(a) {
        switch (this.type) {
          case HSBlockType.Repeat:
            return Math.round(this.firstParameterValue(a));

          case HSBlockType.RepeatForever:
            return 1 / 0;

          default:
            return 0;
        }
    }, a.prototype.script = function(a) {
        switch (this.type) {
          case HSBlockType.CheckOnceIf:
          case HSBlockType.CheckIfElse:
            return this.parameters[0].computedValue(a) ? this.trueScript() : this.falseScript();

          default:
            return this.trueScript();
        }
    }, a.prototype.trueScript = function() {
        return this.scripts[0].stageScript();
    }, a.prototype.falseScript = function() {
        return this.scripts[1].stageScript();
    }, a.prototype.toString = function() {
        return SourceFormatter.stageControlToSrc(this);
    }, a.prototype.firstParameterValue = function(a) {
        return this.parameters.length > 0 ? this.parameters[0].computedValue(a) : 0;
    }, a.prototype.executableForStepSize = function(a, b) {
        switch (this.type) {
          case HSBlockType.Repeat:
          case HSBlockType.RepeatForever:
            return this.executableForRepeat(a, b);

          case HSBlockType.LeaveATrail:
            return this.executableForLeaveATrail(a, b);

          case HSBlockType.CheckOnceIf:
          case HSBlockType.CheckIfElse:
          case HSBlockType.Ability:
            return this.scripts[0].isImmediatelyRecursive() ? new HSExecutable([], []) : this.script(b).executableForStepSize(a, b);
        }
    }, a.prototype.executableForRepeat = function(a, b) {
        switch (this.integerValue(b)) {
          case 0:
            return new HSExecutable([], []);

          case 1:
            return this.script(b).executableForStepSize(a, b);

          default:
            return this.executableWithRepeatOnTheEnd(a, b);
        }
    }, a.prototype.executableForLeaveATrail = function(a, b) {
        var c = this.script(b).executableForStepSize(a, b), d = [ new HSStageMethod(HSBlockType.PenDown) ];
        this.parameters[0] && d.push(new HSStageMethod(HSBlockType.StrokeColor, [ this.parameters[0] ])), 
        this.parameters[1] && d.push(new HSStageMethod(HSBlockType.StrokeWidth, [ this.parameters[1] ]));
        var e = new HSStageMethod(HSBlockType.PenUp);
        return new HSExecutable(d.concat(c.blocksToExecuteNow), c.blocksToExecuteLater.concat(e));
    }, a.prototype.executableWithRepeatOnTheEnd = function(b, c) {
        var d = this.script(c).executableForStepSize(b, c), e = this.integerValue(c) - 1, f = new HSStageParameter("" + e), g = new a(this.type, this.scripts, [ f ]), h = d.blocksToExecuteLater;
        return h.push(g), d.newWithNewBlocksToExecuteLater(h);
    }, a;
}(), BASE_SPEED = 400, BASE_STEP_SIZE = 10, EDGE_OF_SCREEN_OBJECT_ID = "zzzEdge", DEBUG_DRAW_BOUNDING_BOXES = !1, HSStageObject = function() {
    function a(b, c, d, e, f, g, h, i, j) {
        this.x = b, this.y = c, this.text = d, this.type = e, this.baseObjectScale = f, 
        this.fontSize = g, this.objectID = h, this.imageName = i, this.willChangeCostume = j, 
        this.createOrder = -1, this._animationNumber = 0, this.sizePercentWidth = 100, this.sizePercentHeight = 100, 
        this.headingInDegrees = 0, this.speed = BASE_SPEED, this.invisibilityPercent = 0, 
        this.isFlipped = !1, this.drawingRadius = null, this.drawingColor = null, this.penDown = !1, 
        this.creationTick = null, this.relatedCollisionRules = new Set(), this.collisionImageFactory = new HSCollisionImageFactory(), 
        this.stageRules = [], this.cloneIndex = 1, this.zIndex = 0, this.createOrder = ++a.OBJECTS_CREATED, 
        this.color = this.colorForType(e), this.stageObjectID = a.uniqueIdCounter++, this.type === HSObjectType.text ? this.text = d : this.text = null, 
        this.pathDrawer = new HSPathDrawer(this.currentPoint()), this.view = new HSView(this.viewProps());
    }
    return a.prototype.setWidth = function(a) {
        0 === a && (a = .01), a && (this.sizePercentWidth = a / this.originalWidth * (1 / this.baseScale()) * 100);
    }, a.prototype.setHeight = function(a) {
        0 === a && (a = .01), a && (this.sizePercentHeight = a / this.originalHeight * (1 / this.baseScale()) * 100);
    }, a.prototype.width = function() {
        return this.view.textureExists ? this.view.width() : this.originalWidth;
    }, a.prototype.height = function() {
        return this.view.textureExists ? this.view.height() : this.originalHeight;
    }, a.prototype.colorForType = function(a) {
        return this.type === HSObjectType.text ? HSColor.rgbTextColor : this.isShape() ? HSColor.rgbTextColor : HSColor.rgbWhiteColor;
    }, a.prototype.originalObject = function(a) {
        var b = a.findWithObjectID(HSObject.key, this.objectID);
        return b ? b.stageObject() : null;
    }, a.prototype.baseScale = function() {
        return this.shouldDrawText() ? 1 : this.isFullSizeShape() ? .5 : this.isShape() ? 1 : this.canDrawImage() ? 1 : this.baseObjectScale;
    }, a.prototype.isFullSizeShape = function() {
        return hsIsFullSizeShape(this.type);
    }, a.prototype.isShape = function() {
        return hsIsShapeType(this.type);
    }, a.prototype.update = function() {
        this.view.update(this.viewProps());
    }, a.prototype.viewProps = function() {
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
            stageHeight: HSStageScene.stageHeight
        };
    }, a.prototype.imageForCollision = function() {
        return this.collisionImageFactory.image(this.view.imageSource());
    }, a.prototype.boundingBox = function() {
        this._boundingBox || (this._boundingBox = new HSBoundingBox());
        var a = this.view.bounds();
        return this._boundingBox.update(this.x, this.y, a.width / 2, a.height / 2), this._boundingBox;
    }, a.prototype.drawPath = function(a) {
        this.pathDrawer.drawDiff(a);
    }, a.prototype.isBlankTextObject = function() {
        return this.type === HSObjectType.text && !this.shouldDrawText();
    }, a.prototype.shouldDrawText = function() {
        return HSTokenizer.hasDrawableTokens(this.text);
    }, a.prototype.canDrawCharacter = function() {
        return this.type !== HSObjectType.text;
    }, a.prototype.canDrawImage = function() {
        return !!this.imageName;
    }, a.prototype.opacity = function() {
        return .01 * Math.max(100 - this.invisibilityPercent, 0);
    }, a.prototype.clear = function() {
        HopscotchDrawingContext.shouldClear = !0;
    }, a.prototype.maxStepSize = function() {
        var a = this.speed / BASE_SPEED * BASE_STEP_SIZE;
        return Math.abs(a) >= 1 ? a : Math.sign(a);
    }, a.prototype.headingInRadians = function() {
        return this.headingInDegrees * Math.PI / 180;
    }, a.prototype.changeXBy = function(a) {
        this.x += a, this.moveToWithinBoundary(), this.pathDrawer.addPoint(this.currentPoint(), this.penDown);
    }, a.prototype.changeYBy = function(a) {
        this.y += a, this.moveToWithinBoundary(), this.pathDrawer.addPoint(this.currentPoint(), this.penDown);
    }, a.prototype.setPosition = function(a, b) {
        this.x = a, this.y = b, this.pathDrawer.addPoint(this.currentPoint(), this.penDown);
    }, a.prototype.rotateBy = function(b) {
        this.headingInDegrees = a.normalizeHeading(this.headingInDegrees + b * this.multiplier());
    }, a.prototype.moveBy = function(a) {
        this.x += this.multiplier() * Math.cos(this.headingInRadians()) * a, this.y += this.multiplier() * Math.sin(this.headingInRadians()) * a, 
        this.moveToWithinBoundary(), this.pathDrawer.addPoint(this.currentPoint(), this.penDown);
    }, a.prototype.setText = function(a, b) {
        this.text = a, this.color = b;
        var c = HSTextNode.fromString(a), d = this.view.canvas;
        if (d && c) {
            var e = c.flow(d.getContext("2d"), HSTextNode.MAX_LINE_WIDTH);
            this.originalWidth = e.width, this.originalHeight = e.height;
        }
    }, a.prototype.setCharacter = function(a) {
        this.type = a, this.color = this.colorForType(a), this._animationNumber = 0, this.text = null, 
        this.imageName = null, HSOBJECT_SIZES[a] && (this.originalWidth = HSOBJECT_SIZES[a].width, 
        this.originalHeight = HSOBJECT_SIZES[a].height);
    }, a.prototype.setImage = function(a) {
        this.type = HSObjectType.image, this.color = this.colorForType(HSObjectType.image), 
        this._animationNumber = 0, this.text = null, a && (this.imageName = a.fileName, 
        this.originalWidth = a.width, this.originalHeight = a.height);
    }, a.prototype.changePose = function() {
        this.isShape() || this._animationNumber++;
    }, a.prototype.animationNumber = function() {
        return this._animationNumber % 4;
    }, a.prototype.bringToFront = function() {
        this.bringToFrontFunction(this);
    }, a.prototype.sendToBack = function() {
        this.sendToBackFunction(this);
    }, a.prototype.clone = function(a) {
        this.cloneFunction(this, a);
    }, a.prototype.destroy = function() {
        this.view = null, this.stageRules = [], this.destroyFunction(this);
    }, a.prototype.isInvisible = function() {
        return this.invisibilityPercent >= 100;
    }, a.prototype.deepCopy = function(b, c) {
        var d = new a(c.x, c.y, c.text, c.type, c.context.baseObjectScale, c.context.fontSize, c.objectID, c.fileName(), c.willChangeCostume);
        return d.stageRules = this.stageRules.map(function(a) {
            return a.deepCopy(d);
        }), d.originalWidth = this.originalWidth, d.originalHeight = this.originalHeight, 
        d;
    }, a.prototype.break = function() {
        this.stageRules.forEach(function(a) {
            return a.break();
        });
    }, a.normalizeHeading = function(a) {
        return (a % 360 + 360) % 360;
    }, a.prototype.currentPoint = function() {
        return new HSLinePoint([ this.x, this.y ], this.drawingRadius, this);
    }, a.prototype.moveToWithinBoundary = function() {
        this.x = Math.min(this.x, HSStageScene.stageWidth), this.x = Math.max(this.x, 0), 
        this.y = Math.min(this.y, HSStageScene.stageHeight), this.y = Math.max(this.y, 0);
    }, a.prototype.multiplier = function() {
        return this.isFlipped ? -1 : 1;
    }, a.prototype.activateAllStageRulesForEventType = function(a, b) {
        this.allStageRulesForEventTypeAndObject(a, b).forEach(function(a) {
            return a.activate();
        });
    }, a.prototype.allStageRulesForEventTypeAndObject = function(a, b) {
        return this.allStageRulesForEventType(a).filter(function(a) {
            return a.matchesFirstObject(b);
        });
    }, a.prototype.allStageRulesForEventType = function(a) {
        return this.stageRules.filter(function(b) {
            return b.matchesEvent(a);
        });
    }, a.prototype.allPossibleCollisionPairs = function() {
        return this.allStageRulesForEventType(HSBlockType.EventOperatorIsTouching).concat(this.allStageRulesForEventType(HSBlockType.EventOperatorBump)).reduce(function(a, b) {
            return a.concat(b.collisionPairs());
        }, []);
    }, a.prototype.executeActiveRules = function() {
        for (var a = this.stageRules, b = a.length, c = 0; c !== b; ++c) a[c].conditionIsTrue(this) && (a[c].hasBlocksToExecute() || (a[c].isActive = !1), 
        a[c].activate()), a[c].execute(this);
    }, a.prototype.executeBlock = function(b) {
        var c = b.firstIntegerValue(this), d = b.parameters;
        switch (b.type) {
          case HSBlockType.Move:
            this.moveBy(c);
            break;

          case HSBlockType.SetPosition:
            this.setPosition(d[0].computedValue(this), d[1].computedValue(this));
            break;

          case HSBlockType.SetSize:
            this.sizePercentWidth = c, this.sizePercentHeight = c;
            break;

          case HSBlockType.Grow:
            var e = Math.max(100 + c, 0);
            this.sizePercentWidth *= .01 * e, this.sizePercentHeight *= .01 * e;
            break;

          case HSBlockType.Scale:
            this.sizePercentWidth *= .01 * c, this.sizePercentHeight *= .01 * c;
            break;

          case HSBlockType.Shrink:
            var e = Math.max(100 - c, 0), f = this.sizePercentWidth * e * .01;
            this.sizePercentWidth = Math.max(f, 1e-7);
            var f = this.sizePercentHeight * e * .01;
            this.sizePercentHeight = Math.max(f, 1e-7);
            break;

          case HSBlockType.SetHeading:
            this.headingInDegrees = a.normalizeHeading(c);
            break;

          case HSBlockType.ChangeX:
            this.changeXBy(c);
            break;

          case HSBlockType.ChangeY:
            this.changeYBy(c);
            break;

          case HSBlockType.Rotate:
            this.rotateBy(c);
            break;

          case HSBlockType.ChangeSpeed:
            this.speed = c;
            break;

          case HSBlockType.SetInvisibility:
            this.invisibilityPercent = c;
            break;

          case HSBlockType.Flip:
            this.isFlipped = !this.isFlipped;
            break;

          case HSBlockType.StrokeColor:
            this.drawingColor = d[0].computedColorString(this);
            break;

          case HSBlockType.StrokeWidth:
            this.drawingRadius = c / 2;
            break;

          case HSBlockType.Clear:
            this.clear();
            break;

          case HSBlockType.PenDown:
            this.penDown = !0;
            break;

          case HSBlockType.PenUp:
            this.penDown = !1;
            break;

          case HSBlockType.ChangeCostume:
            this.changePose();
            break;

          case HSBlockType.SetText:
            var g = HSColor.rgbTextColor;
            d.length >= 2 && (g = d[1].computedColorString(this)), this.setText(d[0].computedStringValue(this), g);
            break;

          case HSBlockType.SetVariable:
            var h = d[0].variable();
            h && (h.isSkillComplete() && 1 === d[1].computedValue(this) && sendToApp("hsSkillComplete", "1"), 
            h.setValue(d[1].computedValue(this), this));
            break;

          case HSBlockType.ChangeVariable:
            var h = d[0].variable();
            if (h) {
                var i = h.computedValue(this), j = d[1].computedValue(this), k = i + j;
                h.setValue(k, this);
            }
            break;

          case HSBlockType.BringToFront:
            this.bringToFront();
            break;

          case HSBlockType.SendToBack:
            this.sendToBack();
            break;

          case HSBlockType.SetImage:
            d[0].computedObjectType() === HSObjectType.text ? this.setText(d[0].value, HSColor.rgbTextColor) : d[0].computedObjectType() === HSObjectType.image ? this.setImage(d[0].childBlock) : this.setCharacter(d[0].computedObjectType());
            break;

          case HSBlockType.SetColor:
            this.color = d[0].computedColorString(this);
            break;

          case HSBlockType.SetWidthAndHeight:
            this.setWidth(d[0].computedValue(this)), this.setHeight(d[1].computedValue(this));
            break;

          case HSBlockType.SetZIndex:
            var l = d[0].computedValue(this);
            l !== this.zIndex && (this.zIndex = l, HSStageScene.dirtySort = !0);
			break;
			
          case HSBlockType.None: //AE_MOD
			if (/^_ae_webplayer_action:/g.test(d[0].value)){
				AE_MOD.webplayer_action(d[0].value.split('_ae_webplayer_action:')[1], ((d[1])?d[1].computedValue(this):undefined),this);
			}
			break;
        }
    }, a;
}();

HSStageObject.OBJECTS_CREATED = 0, HSStageObject.uniqueIdCounter = 0, HSStageObject.edgeOfScreenObject = new HSStageObject(0, 0, "", HSObjectType.edgeOfScreen, 1, 80, EDGE_OF_SCREEN_OBJECT_ID, null, !1);

var HSStageParameter = function() {
    function a(a, b) {
        void 0 === b && (b = null), this.value = a, this.childBlock = b;
    }
    return a.prototype.variable = function() {
        if (this.childBlock && this.childBlock.type === HSBlockType.Variable) return this.childBlock;
    }, a.prototype.computedStringValue = function(a) {
        return this.childBlock ? this.childBlock.computedStringValue(a) : this.value.toString();
    }, a.prototype.computedObjectType = function() {
        return this.childBlock ? HSObjectType.image : "string" == typeof this.value ? HSObjectType.text : this.value;
    }, a.prototype.computedValue = function(a) {
        var b = this.childBlockValue(a);
        return null != b ? b : this.numberValue();
    }, a.prototype.computedColorString = function(a) {
        return this.childBlock ? this.childBlock.computedColorString(a) : HSColor.rgbStringFromHSBString(this.computedStringValue(a));
    }, a.prototype.toString = function() {
        return SourceFormatter.stageParamToSrc(this.value, this.childBlock);
    }, a.prototype.childBlockValue = function(a) {
        return this.childBlock ? this.childBlock.computedValue(a) : null;
    }, a.prototype.numberValue = function() {
        var a = parseFloat(this.value);
        return Number.isFinite(a) ? a : null;
    }, a;
}(), HSStageParameterBlock = function() {
    function a(a) {
        this.parameterBlock = a;
    }
    return a.prototype.matchesStageObject = function(a, b) {
        var c = this.stageObjects(b), d = c[0];
        if (!d && !a) return !0;
        var e = this.parameterBlocks() && this.parameterBlocks().length > 0 && this.parameterBlocks()[0].type === HSBlockType.AnyObject;
        return this.parameterBlock.context.version < HSProjectVersion.ADD_SELF && !e ? d && a && d.objectID === a.objectID : c.includes(a);
    }, a.prototype.stageObjects = function(a) {
        return this.parameterBlocks().reduce(function(b, c) {
            return b.concat(c.stageObjects(a));
        }, []);
    }, a.prototype.parameterBlocks = function() {
        return this.parameterBlock.parameters.filter(function(a) {
            return null != a.childBlock;
        }).map(function(a) {
            return a.childBlock;
        });
    }, a;
}(), HSStageProject = function() {
    function a(b) {
        this.stageScenes = b.scenes.map(function(a) {
            return a.stageScene();
        }), this.version = b.context.version, this.activeStageScene = this.stageScenes[0], 
        HSVariable.globalScope = {}, a.sharedInstance = this;
    }
    return a.prototype.changeScene = function(a) {
        var b = this.stageScenes.find(function(b) {
            return b.name === a;
        });
        b && (HopscotchDrawingContext.shouldClear = !0, this.activeStageScene = b, this.activeStageScene.activateAllRulesForEventType(HSBlockType.EventOperatorStart));
    }, a.prototype.activateAllRulesForEventType = function(a) {
        this.activeStageScene.activateAllRulesForEventType(a);
    }, a.prototype.executeAllActiveRules = function() {
        this.activeStageScene.executeAllActiveRules();
    }, a.prototype.animationTick = function(a) {
        this.activeStageScene.animationTick(a);
    }, a.prototype.receiveClickEvent = function(a, b) {
        this.activeStageScene.receiveClickEvent(a, b);
    }, a.prototype.receiveTouchDownEvent = function(a, b) {
        this.activeStageScene.receiveTouchDownEvent(a, b);
    }, a.prototype.receiveTouchMoveEvent = function(a, b) {
        this.activeStageScene.receiveTouchMoveEvent(a, b);
    }, a.prototype.receiveTouchUpEvent = function(a, b) {
        this.activeStageScene.receiveTouchUpEvent(a, b);
    }, a;
}(), HSStageRule = function() {
    function a(a, b) {
        this.rule = a, this.currentObject = b, this.isActive = !1, this._collisionPairs = [], 
        this.numFirstParamObjects = 0, this.numSecondParamObjects = 0, this.stageScript = this.rule.script.stageScript(), 
        this.eventBlock = this.rule.childBlock().stageParameterBlock();
    }
    return a.prototype.reset = function() {
        this.stageScript.reset();
    }, a.prototype.activate = function() {
        this.isActive || (this.reset(), this.isActive = !0);
    }, a.prototype.activateIfMatchesFirstObject = function(a) {
        this.matchesFirstObject(a) && this.activate();
    }, a.prototype.activateIfNotPressed = function(a) {
        this.isPressed(a) || this.activate();
    }, a.prototype.isPressed = function(a) {
        var b = this;
        return a.currentlyPressedObjects.some(function(a) {
            return b.matchesATap(a);
        });
    }, a.prototype.matchesATap = function(a) {
        var b = this;
        return a.some(function(a) {
            return b.matchesFirstObject(a);
        });
    }, a.prototype.break = function() {
        this.isActive = !1, this.reset();
    }, a.prototype.collisionPairs = function() {
        var a = this, b = this.eventBlock.parameterBlocks()[0], c = this.eventBlock.parameterBlocks()[1], d = this.stageObjectsForParameter(b), e = this.stageObjectsForParameter(c);
        if (this._collisionPairs && this.numFirstParamObjects === d.length && this.numSecondParamObjects === e.length) return this._collisionPairs;
        var f = d.slice(this.numFirstParamObjects), g = e.slice(this.numSecondParamObjects), h = d.slice(0, this.numFirstParamObjects);
        return f.forEach(function(b) {
            e.filter(function(a) {
                return a !== b;
            }).forEach(function(c) {
                a._collisionPairs.push(new HSCollisionPair(b, c)), b.relatedCollisionRules.add(a), 
                c.relatedCollisionRules.add(a);
            });
        }), h.forEach(function(b) {
            g.filter(function(a) {
                return a !== b;
            }).forEach(function(c) {
                a._collisionPairs.push(new HSCollisionPair(b, c));
            });
        }), this.numFirstParamObjects = d.length, this.numSecondParamObjects = e.length, 
        this._collisionPairs;
    }, a.prototype.stageObjectsForParameter = function(a) {
        try {
            return a.type === HSBlockType.AnyObject ? HSStageProject.sharedInstance.activeStageScene.stageObjects : this.rule.context.version < HSProjectVersion.ADD_SELF && a.type === HSBlockType.Object && a.object ? a.object.allStageObjects() : a.stageObjects(this.currentObject);
        } catch (a) {}
        return [];
    }, a.prototype.eventType = function() {
        return this.rule.eventType();
    }, a.prototype.matchesEvent = function(a) {
        return this.eventType() === a;
    }, a.prototype.matchesFirstObject = function(a) {
        return this.eventBlock.matchesStageObject(a, this.currentObject);
    }, a.prototype.execute = function(a) {
        this.isExecutable() ? (this.stageScript.isImmediate && (this.isActive = !1), this.stageScript.execute(a)) : this.isActive = !1;
    }, a.prototype.isExecutable = function() {
        return this.isValid() && this.isActive && this.hasBlocksToExecute();
    }, a.prototype.hasBlocksToExecute = function() {
        return this.stageScript.blocks.length > 0;
    }, a.prototype.isValid = function() {
        return null != this.stageScript;
    }, a.prototype.conditionIsTrue = function(a) {
        return this.rule.conditionIsTrue(a);
    }, a.prototype.deepCopy = function(b) {
        var c = new a(this.rule, b);
        return c.stageScript = this.stageScript.deepCopy(), c;
    }, a.prototype.isCurrentObject = function(a) {
        return this.currentObject === a;
    }, a;
}(), HSStageScript = function() {
    function a(a) {
        this.script = a, this.reset();
    }
    return a.prototype.reset = function() {
        this.blocks = this.script.blocks.map(function(a) {
            return a.stageBlock();
        }), this.isImmediate = this.blocks.every(function(a) {
            return a.isImmediate;
        });
    }, a.prototype.execute = function(a) {
        var b = this.executableForStepSize(a.maxStepSize(), a);
        b.execute(a), this.blocks = b.blocksToExecuteLater, this.isImmediate = this.blocks.every(function(a) {
            return a.isImmediate;
        });
    }, a.prototype.blockIsVariable = function(a) {
        return a === HSBlockType.SetVariable || a === HSBlockType.ChangeVariable;
    }, a.prototype.doesBlockAffectExecutionOrder = function(a) {
        return !!this.isControlBlock(a) && (!this.blockIsEmpty(a) && (!!this.blockHasAScriptThatContainsVariables(a) || this.blockUsesVariable(a)));
    }, a.prototype.blockHasAScriptThatContainsVariables = function(a) {
        if (!this.blockHasScriptWithoutParameters(a)) return !1;
        for (var b = 0; b < a.scripts.length; b++) {
            var c = a.scripts[b];
            if (this.scriptUsesVariable(c)) return !0;
        }
    }, a.prototype.blockHasScriptWithoutParameters = function(a) {
        return !this.blockHasParameters(a) && this.blockHasScripts(a);
    }, a.prototype.blockIsEmpty = function(a) {
        return !this.blockHasParameters(a) && !this.blockHasScripts(a);
    }, a.prototype.blockHasParameters = function(a) {
        return a.parameters && a.parameters.length;
    }, a.prototype.blockHasScripts = function(a) {
        return a.scripts && a.scripts.length;
    }, a.prototype.isControlBlock = function(a) {
        return a && a instanceof HSStageControl;
    }, a.prototype.scriptUsesVariable = function(a) {
        for (var b = 0; b < a.blocks.length; b++) {
            var c = a.blocks[b];
            if (this.blockUsesVariable(c)) return !0;
        }
        return !1;
    }, a.prototype.blockUsesVariable = function(a) {
        if (!a) return !1;
        for (var b = a.parameters || [], c = 0; c < b.length; c++) {
            var d = b[c].childBlock;
            if (d instanceof HSVariable || this.blockUsesVariable(d)) return !0;
        }
        return !1;
    }, a.prototype.executableForStepSize = function(a, b) {
        var c = this;
        if (!this.blocks.length) return new HSExecutable([], []);
        for (var d = this.blocks.slice().reverse(), e = d.pop(), f = [], g = function() {
            return d.length ? d[d.length - 1] : null;
        }; function(a) {
            if (!a) return !1;
            var d = c.blockIsVariable(a.type) && c.doesBlockAffectExecutionOrder(g()), e = a.isImmediate, f = a instanceof HSStageMethod && a.isFinishedTimestampBlock(b);
            return !d && (e || f);
        }(e); ) f.push(e), e = d.pop();
        if (!e) return new HSExecutable(f, []);
        var h = e.executableForStepSize(a, b);
        return new HSExecutable(f.concat(h.blocksToExecuteNow), h.blocksToExecuteLater.concat(d.reverse()));
    }, a.prototype.deepCopy = function() {
        return new a(this.script);
    }, a.prototype.toString = function() {
        return SourceFormatter.blocksToSrc(this.blocks);
    }, a;
}(), HSVisualContext = function() {
    function a(a, b) {
        this.backgroundCanvas = a, this.drawingContext = new HopscotchDrawingContext(a, b, this), 
        this.collisionContext = new HSCollisionContext();
    }
    return a;
}();

HSVisualContext.collisionResolution = 64;

var HopscotchDrawingContext = function() {
    function a(a, b, c) {
        this.bgCanvas = a, this.drawBackground = b, this.visualContext = c, this.bgContext = this.layerFromCanvas2d(a), 
        this.clearBackground();
    }
    return a.prototype.layerFromCanvas2d = function(a) {
        var b = this.canvasWidth(), c = this.canvasHeight();
        a.width = b, a.height = c;
        var d = a.getContext("2d");
        return d && (d.translate(0, c), d.scale(1 * HSMain.dpi, -1 * HSMain.dpi)), d;
    }, a.prototype.canvasWidth = function() {
        return HSStageScene.stageWidth * HSMain.dpi;
    }, a.prototype.canvasHeight = function() {
        return HSStageScene.stageHeight * HSMain.dpi;
    }, a.prototype.renderFrame = function() {
        a.shouldClear && (this.clearBackground(), a.shouldClear = !1), this.drawBackground();
    }, a.prototype.clearBackground = function() {
        this.bgContext && (this.bgContext.fillStyle = "white", this.bgContext.fillRect(0, 0, this.bgCanvas.width, this.bgCanvas.height));
    }, a.prototype.drawLine = function(a, b) {
        var c = this.bgContext;
        c.beginPath(), c.moveTo.apply(c, a.point), a.point[0] === b.point[0] && a.point[1] === b.point[1] ? (c.fillStyle = b.colorReference.drawingColor, 
        c.arc(b.point[0], b.point[1], b.radius, 0, 2 * Math.PI), c.fill()) : (c.lineWidth = 2 * b.radius, 
        c.lineCap = "round", c.strokeStyle = b.colorReference.drawingColor, c.lineTo.apply(c, b.point), 
        c.stroke());
    }, a;
}();

HopscotchDrawingContext.shouldClear = !1, HopscotchDrawingContext.MAX_TEXTURE_SIDE_LENGTH = 1024;

var HSBoundingBox = function() {
    function a(a, b, c, d) {
        void 0 === a && (a = 0), void 0 === b && (b = 0), void 0 === c && (c = 0), void 0 === d && (d = 0), 
        this.centerX = a, this.centerY = b, this.halfWidth = c, this.halfHeight = d, this.vertices = [ vec2.create(), vec2.create(), vec2.create(), vec2.create() ], 
        this.update(a, b, c, d);
    }
    return a.prototype.update = function(a, b, c, d) {
        this.halfWidth = c, this.halfHeight = d, this.centerX = a, this.centerY = b, this.vertices[0][0] = a - this.halfWidth, 
        this.vertices[0][1] = b - this.halfHeight, this.vertices[1][0] = a + this.halfWidth, 
        this.vertices[1][1] = b - this.halfHeight, this.vertices[2][0] = a + this.halfWidth, 
        this.vertices[2][1] = b + this.halfHeight, this.vertices[3][0] = a - this.halfWidth, 
        this.vertices[3][1] = b + this.halfHeight;
    }, a.prototype.width = function() {
        return 2 * this.halfWidth;
    }, a.prototype.height = function() {
        return 2 * this.halfHeight;
    }, a.prototype.minX = function() {
        return this.vertices[0][0];
    }, a.prototype.minY = function() {
        return this.vertices[0][1];
    }, a.prototype.maxX = function() {
        return this.vertices[2][0];
    }, a.prototype.maxY = function() {
        return this.vertices[2][1];
    }, a.prototype.draw = function(a) {
        var b = HSColor.rgb(0, 0, 0), c = this.vertices.map(function(a) {
            return new HSLinePoint(a, 1, {
                drawingColor: b
            });
        });
        c.forEach(function(b, d) {
            a.drawLine(b, c[(d + 1) % c.length]);
        });
    }, a.prototype.containsPoint = function(a, b) {
        this.pointTestVecs || (this.pointTestVecs = [ vec2.create(), vec2.create(), vec2.create() ]);
        var c = vec2.fromValues(a, b), d = this.vertices[0], e = this.vertices[1], f = this.vertices[3], g = vec2.subtract(this.pointTestVecs[0], e, d), h = vec2.subtract(this.pointTestVecs[1], f, d), i = vec2.subtract(this.pointTestVecs[2], c, d), j = vec2.dot(i, g) / vec2.length(g), k = vec2.dot(i, h) / vec2.length(h);
        return j > 0 && j < vec2.length(g) && k > 0 && k < vec2.length(h);
    }, a.prototype.area = function() {
        return this.width() * this.height();
    }, a.prototype.overlapsWithOtherBoundingBox = function(a) {
        return this.maxX() > a.minX() && this.minX() < a.maxX() && this.maxY() > a.minY() && this.minY() < a.maxY();
    }, a.prototype.intersectionRectWithOtherBoundingBox = function(b) {
        if (this.surroundingBox || (this.surroundingBox = new a()), !this.overlapsWithOtherBoundingBox(b)) return a.zero;
        var c = this.minX(), d = this.minY(), e = this.maxX(), f = this.maxY(), g = b.minX(), h = b.minY(), i = b.maxX(), j = b.maxY(), k = Math.max(c, g), l = Math.max(d, h), m = Math.min(e, i), n = Math.min(f, j), o = .5 * (k + m), p = .5 * (l + n), q = .5 * (m - k), r = .5 * (n - l);
        return this.surroundingBox.update(o, p, q, r), this.surroundingBox;
    }, a;
}();

HSBoundingBox.zero = new HSBoundingBox();

var HSCollisionContext = function() {
    function a() {
        this.numberOfPixelCollisions = 0, this.debugTwoObjects = function() {
            function b(a, b, c, d, e) {
                e(a, b, c, d);
            }
            function c(a, b) {
                var c = b.imageForCollision(), d = c.width > 2 * h || c.height > 2 * h ? 2 * h / Math.max(c.width, c.height) : 1;
                a.width = Math.ceil(c.width * d), a.height = Math.ceil(c.height * d);
                var e = a.getContext("2d");
                c && (e.clearRect(0, 0, a.width, a.height), e.drawImage(c, 0, 0, c.width, c.height, 0, 0, a.width, a.height));
            }
            if (a.DEBUG) var d = makeDebugCanvas.apply(this, a.DEBUG_VIEW_OBJECT1_POS), e = (d.getContext("2d"), 
            makeDebugCanvas.apply(this, a.DEBUG_VIEW_OBJECT2_POS)), f = (e.getContext("2d"), 
            makeDebugCanvas.apply(this, a.DEBUG_VIEW_OBJECT3_POS)), g = (f.getContext("2d"), 
            makeDebugCanvas.apply(this, a.DEBUG_VIEW_OBJECT4_POS)), h = (g.getContext("2d"), 
            HSVisualContext.collisionResolution);
            return a.DEBUG ? function(a, h, i, j) {
                c(d, a), c(e, h);
                var k = this.boundingBoxForObject(a), l = this.boundingBoxForObject(h);
                b(f, a, k, i, j), b(g, h, l, i, j);
            } : function(a, b, c) {};
        }(), this.canvas1 = document.createElement("canvas"), this.canvas2 = document.createElement("canvas");
    }
    return a.prototype.hitTest = function(a, b, c) {
        if (a.isInvisible()) return !1;
        var d = this.boundingBoxForObject(a);
        if (d.containsPoint(b, c)) {
            if (a.type === HSObjectType.text) return !0;
            var e = this.generatePixelTestData(this.canvas1, a, d, d), f = e.width / (d.maxX() - d.minX()), g = e.height / (d.maxY() - d.minY()), h = (b - d.minX()) * f, i = e.height - (c - d.minY()) * g, b = Math.round(h), c = Math.round(i);
            return this.pixelCoordinateHasAlpha(b, c, e);
        }
        return !1;
    }, a.prototype.collisionTest = function(a, b) {
        return b.type === HSObjectType.edgeOfScreen ? this.objectIsTouchingEdgeOfScreen(a) : a.type === HSObjectType.edgeOfScreen ? this.objectIsTouchingEdgeOfScreen(b) : this.objectsAreColliding(a, b);
    }, a.prototype.objectsAreColliding = function(b, c) {
        var d = this.boundingBoxForObject(b), e = this.boundingBoxForObject(c);
        if (0 === d.area() || 0 === e.area()) return !1;
        var f = this.intersectionBoxBetweenTwoBoxes(d, e);
        return !!this.bigEnoughCollisionIntersectionTest(b, c, d, e, f) || !!this.boundingBoxIntersectionTest(f) && (a.DEBUG && this.debugTwoObjects(b, c, f, this.prepareCanvasForPixelTest), 
        this.pixelTest(b, d, c, e, f));
    }, a.prototype.pixelTest = function(b, c, d, e, f) {
        if (this.numberOfPixelCollisions >= a.PIXEL_TESTING_THRESHOLD) return !0;
        this.numberOfPixelCollisions += 1;
        var g = this.generatePixelTestData(this.canvas1, b, c, f), h = this.generatePixelTestData(this.canvas2, d, e, f);
        return this.testPixelData(g, h);
    }, a.prototype.objectIsTouchingEdgeOfScreen = function(a) {
        var b = this.boundingBoxForObject(a);
        if (0 === b.area()) return !1;
        var c = b.centerX, d = b.centerY;
        return c <= 0 || c >= HSStageScene.stageWidth || d <= 0 || d >= HSStageScene.stageHeight;
    }, a.prototype.testPixelData = function(b, c) {
        if (!b || !c) return !1;
        var d = b, e = c;
        b.width < c.width && (d = c, e = b);
        var f = null, g = null;
        if (a.DEBUG) {
            this._debugCanvas || (this._debugCanvas = makeDebugCanvas.apply(this, a.DEBUG_VIEW_INTERSECTION_POS)), 
            f = this._debugCanvas, g = f.getContext("2d");
            var h = d.width, i = d.height;
            f.width = h, f.height = i;
            var j = Math.min(5 * h, 400), k = Math.min(5 * i, 400);
            f.style.width = j + "px", f.style.height = k + "px";
        }
        for (var l = e.width / d.width, m = e.height / d.height, n = !1, o = 1; o < d.height - 1; o++) for (var p = 1; p < d.width - 1; p++) {
            var q = Math.round(p * l), r = Math.round(o * m);
            if (f) this.pixelCoordinateHasAlpha(p, o, d) ? this.pixelCoordinateHasAlpha(q, r, e) ? (g.fillStyle = "white", 
            n = !0) : g.fillStyle = "red" : this.pixelCoordinateHasAlpha(q, r, e) ? g.fillStyle = "blue" : g.fillStyle = "black", 
            g.fillRect(p, o, 1, 1); else if (this.pixelCoordinateHasAlpha(p, o, d) && this.pixelCoordinateHasAlpha(q, r, e)) return !0;
        }
        return n;
    }, a.prototype.pixelCoordinateHasAlpha = function(a, b, c) {
        var d = 4 * (b * c.width + a) + 3;
        return c.data[d] > 0;
    }, a.prototype.intersectionBoxBetweenTwoBoxes = function(a, b) {
        return a.intersectionRectWithOtherBoundingBox(b);
    }, a.prototype.bigEnoughCollisionIntersectionTest = function(a, b, c, d, e) {
        var f = .4;
        a.type > HSObjectType.HS_END_OF_CHARACTERS && (f = .7);
        var g = .4;
        b.type > HSObjectType.HS_END_OF_CHARACTERS && (g = .7);
        var h = e.area();
        return h > f * c.area() && h > g * d.area();
    }, a.prototype.boundingBoxIntersectionTest = function(a) {
        return a.halfWidth > 0 && a.halfHeight > 0;
    }, a.prototype.boundingBoxForObject = function(a) {
        return a.boundingBox();
    }, a.prototype.generatePixelTestData = function(a, b, c, d) {
        a = this.prepareCanvasForPixelTest(a, b, c, d);
        var e = a.getContext("2d"), f = a.width / c.width(), g = a.height / c.height(), h = Math.round((d.minX() - c.minX()) * f), i = Math.round((c.maxY() - d.maxY()) * g), j = Math.max(Math.ceil((d.maxX() - d.minX()) * f), 1), k = Math.max(Math.ceil((d.maxY() - d.minY()) * g), 1);
        return e.getImageData(h, i, j, k);
    }, a.prototype.prepareCanvasForPixelTest = function(a, b, c, d) {
        var e = b.imageForCollision();
        if (!e) return a;
        var f = Math.ceil(e.width * c.halfWidth / c.halfWidth), g = Math.ceil(e.height * c.halfHeight / c.halfHeight), h = function(a, b, c) {
            var d = Math.cos(c), e = Math.sin(c);
            return e < 0 && (e = -e), d < 0 && (d = -d), {
                width: b * e + a * d,
                height: b * d + a * e
            };
        }(f, g, b.headingInRadians());
        a.width = Math.ceil(h.width), a.height = Math.ceil(h.height);
        var i = a.getContext("2d");
        i.imageSmoothingEnabled = !1, i.oImageSmoothingEnabled = !1, i.msImageSmoothingEnabled = !1, 
        i.mozImageSmoothingEnabled = !1, i.webkitImageSmoothingEnabled = !1, i.clearRect(0, 0, a.width, a.height);
        var j = a.width / 2, k = a.height / 2;
        return i.translate(j, k), i.rotate(-b.headingInRadians()), b.isFlipped && i.scale(-1, 1), 
        e.width * e.height == 0 ? a : (i.drawImage(e, -e.width / 2, -e.height / 2), i.setTransform(1, 0, 0, 1, 0, 0), 
        a);
    }, a;
}();

HSCollisionContext.DEBUG = !1, HSCollisionContext.PIXEL_TESTING_THRESHOLD = 10, 
HSCollisionContext.DEBUG_VIEW_OBJECT1_POS = [ 10, 0 ], HSCollisionContext.DEBUG_VIEW_OBJECT2_POS = [ 200, 0 ], 
HSCollisionContext.DEBUG_VIEW_OBJECT3_POS = [ 10, 200 ], HSCollisionContext.DEBUG_VIEW_OBJECT4_POS = [ 200, 200 ], 
HSCollisionContext.DEBUG_VIEW_INTERSECTION_POS = [ 300, 0 ];

var __extends = this && this.__extends || function(a, b) {
    function c() {
        this.constructor = a;
    }
    for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
    a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c());
}, HSLineBox = function() {
    function a() {
        this.width = 0;
    }
    return a;
}(), HSTextJustify;

!function(a) {
    a[a.center = 1] = "center", a[a.left = 2] = "left";
}(HSTextJustify || (HSTextJustify = {}));

var HSTextNode = function() {
    function a(a, b) {
        return this.text = a, this.kind = b, b === HSTextNodeKind.emoji ? new HSEmojiTextNode(a) : b === HSTextNodeKind.geometricShape ? new HSGeometricShapeTextNode(a) : void 0;
    }
    return a.prototype.prevWhitespace = function() {
        return this.kind === HSTextNodeKind.whitespace ? this : this.kind !== HSTextNodeKind.newline && this.prev ? this.prev.prevWhitespace() : null;
    }, a.prototype.tail = function() {
        return this.next ? this.next.tail() : this;
    }, a.concat = function(a, b) {
        if (a) {
            var c = a.tail();
            c.next = b, b && (b.prev = c);
        }
        return a || b;
    }, a.prototype.concat = function(b) {
        return a.concat(this, b);
    }, a.prototype.replace = function(a) {
        a.prev = this.prev, a.prev && (a.prev.next = a);
        var b = a.tail();
        return b.next = this.next, b.next && (b.next.prev = b), a;
    }, a.prototype.flow = function(b, c, d) {
        function e() {
            var c = f.x + f.measure(b).width, d = f.y + a.LINE_HEIGHT;
            g = {
                width: Math.max(c, g.width),
                height: d
            }, f = f.next;
        }
        d = d || HSTextJustify.center;
        for (var f = this, g = {
            width: 0,
            height: 0
        }; f; ) {
            var h = f.measure(b);
            if (f.prev) {
                var i = f.prev.measure(b).width;
                f.x = f.prev.x + i, f.y = f.prev.y, f.lineBox = f.prev.lineBox;
            } else f.x = 0, f.y = 0, f.lineBox = new HSLineBox();
            switch (f.lineBox.width = f.x + h.width, f.kind) {
              case HSTextNodeKind.newline:
                f.y += a.LINE_HEIGHT, f.x = 0, f.lineBox = new HSLineBox(), e();
                break;

              default:
                if (f.x + h.width > c) {
                    var j = f.prevWhitespace();
                    if (j) {
                        var k = new a("\n", HSTextNodeKind.newline);
                        f = j.replace(k);
                    } else f = f.replace(f.forceLineBreak(b, c));
                } else e();
            }
        }
        return d === HSTextJustify.center && this.center(g), g;
    }, a.prototype.center = function(a) {
        this.x += (a.width - this.lineBox.width) / 2, this.next && this.next.center(a);
    }, a.prototype.measure = function(a) {
        return this.kind === HSTextNodeKind.newline ? {
            width: 0
        } : a.measureText(this.text);
    }, a.prototype.allNodes = function() {
        return (this.next ? this.next.allNodes() : []).concat(this);
    }, a.prototype.draw = function(a) {
        return Promise.all(this.allNodes().map(function(b) {
            return b.drawNode(a);
        }));
    }, a.prototype.drawNode = function(a) {
        return a.fillText(this.text, this.x, this.y), null;
    }, a.prototype.forceLineBreak = function(b, c) {
        for (var d = "", e = this.text, f = 0; f !== e.length; ++f) {
            var g = d + e[f];
            if (b.measureText(g).width > c) {
                var h = a.parse(d).head, i = new a("\n", HSTextNodeKind.newline);
                h.concat(i);
                var j = new a(this.text.substr(d.length), this.kind);
                return i.concat(j), h;
            }
            d = g;
        }
        return this;
    }, a.prototype.toString = function() {
        return this.text + (this.next ? this.next.toString() : "");
    }, a.fromString = function(b) {
        return a.parse(b).head;
    }, a.parse = function(b) {
        var c, d;
        return HSTokenizer.tokenize(b).forEach(function(b) {
            var e = new a(b.text, b.kind);
            a.concat(c, e), c = e, d || (d = c);
        }), {
            head: d,
            tail: c
        };
    }, a;
}();

HSTextNode.MAX_LINE_WIDTH = 600, HSTextNode.LINE_HEIGHT = 55;

var HSEmojiTextNode = function(a) {
    function b(b) {
        var c = a.call(this, b, null) || this;
        return c.kind = HSTextNodeKind.emoji, c;
    }
    return __extends(b, a), b.prototype.drawNode = function(c) {
        var d = this;
        return b.getImage({
            text: this.text,
            color: HSColor.hsbStringFromRgbString(c.fillStyle)
        }).then(function(a) {
            var e = isIOSApp() ? a.width : b.WIDTH, f = isIOSApp() ? a.height : b.HEIGHT;
            c.drawImage(a, d.x, d.y, e, f);
        }).catch(function(b) {
            return a.prototype.drawNode.call(d, c);
        });
    }, b.getImageInfo = function(a) {
        return isIOSApp() ? requestTextureFromApp({
            type: "emoji",
            props: a
        }).then(function(a) {
            return {
                dataURI: a.dataURI,
                scaleFactor: window.devicePixelRatio
            };
        }) : Promise.resolve({
            dataURI: emoji.getImage(a.text),
            scaleFactor: 1
        });
    }, b.getImage = function(a) {
        return this.getImageInfo(a).then(function(a) {
            var b = a.dataURI;
            return HSMain.HS_EMOJI_HOST && (b = b.replace("/assets", HSMain.HS_EMOJI_HOST)), 
            getImageFromUri(b).then(function(b) {
                return b.width /= a.scaleFactor, b.height /= a.scaleFactor, b;
            });
        });
    }, b.prototype.measure = function(a) {
        return {
            width: b.WIDTH
        };
    }, b.prototype.forceLineBreak = function(a, c) {
        var d = HSTextNode.fromString("\n"), e = new b(this.text);
        return d.concat(e), d;
    }, b;
}(HSTextNode);

HSEmojiTextNode.HEIGHT = 40, HSEmojiTextNode.WIDTH = 40;

var HSGeometricShapeTextNode = function(a) {
    function b(b) {
        var c = a.call(this, b, null) || this;
        return c.kind = HSTextNodeKind.geometricShape, c.kind = HSTextNodeKind.geometricShape, 
        c;
    }
    return __extends(b, a), b.prototype.drawNode = function(a) {
        var c = a.font, d = +a.font.match(/^\d*/), e = Math.round(d * this.getScaleFactor()), f = this.measure(a).width;
        a.font = e + "px " + b.FONT_FAMILIES.join(", ");
        var g = a.measureText(this.text).width;
        return a.fillText(this.text, this.x + (f - g) / 2, this.y + f - g + 1.5), a.font = c, 
        Promise.resolve(null);
    }, b.prototype.getScaleFactor = function() {
        return "■" === this.text ? .85 : .81;
    }, b.prototype.measure = function(a) {
        var c = a.font, d = +a.font.match(/^\d*/);
        a.font = d + "px " + b.FONT_FAMILIES.join(", ");
        var e = a.measureText(this.text);
        return a.font = c, e;
    }, b;
}(HSTextNode);

HSGeometricShapeTextNode.FONT_FAMILIES = [ "Avenir-Book", "STIXGeneral", "sans-serif" ];
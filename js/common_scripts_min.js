/*!
 * Bootstrap v5.2.2 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e()
}(this, function() {
    "use strict";
    let t = 1e6,
        e = 1e3,
        i = "transitionend",
        s = t => null == t ? `${t}` : Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),
        n = e => {
            do e += Math.floor(Math.random() * t); while (document.getElementById(e));
            return e
        },
        o = t => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null
            }
            return e
        },
        r = t => {
            let e = o(t);
            return e && document.querySelector(e) ? e : null
        },
        a = t => {
            let e = o(t);
            return e ? document.querySelector(e) : null
        },
        l = t => {
            if (!t) return 0;
            let {
                transitionDuration: i,
                transitionDelay: s
            } = window.getComputedStyle(t), n = Number.parseFloat(i), o = Number.parseFloat(s);
            return n || o ? (i = i.split(",")[0], s = s.split(",")[0], (Number.parseFloat(i) + Number.parseFloat(s)) * e) : 0
        },
        h = t => {
            t.dispatchEvent(new Event(i))
        },
        c = t => !!t && "object" == typeof t && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        u = t => c(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
        d = t => {
            if (!c(t) || 0 === t.getClientRects().length) return !1;
            let e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                i = t.closest("details:not([open])");
            if (!i) return e;
            if (i !== t) {
                let s = t.closest("summary");
                if (s && s.parentNode !== i || null === s) return !1
            }
            return e
        },
        p = t => !!(!t || t.nodeType !== Node.ELEMENT_NODE || t.classList.contains("disabled")) || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        f = t => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                let e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? f(t.parentNode) : null
        },
        g = () => {},
        m = t => {
            t.offsetHeight
        },
        v = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
        b = [],
        y = t => {
            "loading" === document.readyState ? (b.length || document.addEventListener("DOMContentLoaded", () => {
                for (let t of b) t()
            }), b.push(t)) : t()
        },
        w = () => "rtl" === document.documentElement.dir,
        _ = t => {
            y(() => {
                let e = v();
                if (e) {
                    let i = t.NAME,
                        s = e.fn[i];
                    e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = s, t.jQueryInterface)
                }
            })
        },
        x = t => {
            "function" == typeof t && t()
        },
        C = (t, e, s = !0) => {
            if (!s) {
                x(t);
                return
            }
            let n = 5,
                o = l(e) + n,
                r = !1,
                a = ({
                    target: s
                }) => {
                    s === e && (r = !0, e.removeEventListener(i, a), x(t))
                };
            e.addEventListener(i, a), setTimeout(() => {
                r || h(e)
            }, o)
        },
        k = (t, e, i, s) => {
            let n = t.length,
                o = t.indexOf(e);
            return -1 === o ? !i && s ? t[n - 1] : t[0] : (o += i ? 1 : -1, s && (o = (o + n) % n), t[Math.max(0, Math.min(o, n - 1))])
        },
        D = /[^.]*(?=\..*)\.|.*/,
        A = /\..*/,
        S = /::\d+$/,
        T = {},
        F = 1,
        P = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        I = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function E(t, e) {
        return e && `${e}::${F++}` || t.uidEvent || F++
    }

    function z(t) {
        let e = E(t);
        return t.uidEvent = e, T[e] = T[e] || {}, T[e]
    }

    function M(t, e) {
        return function i(s) {
            return Y(s, {
                delegateTarget: t
            }), i.oneOff && j.off(t, s.type, e), e.apply(t, [s])
        }
    }

    function O(t, e, i) {
        return function s(n) {
            let o = t.querySelectorAll(e);
            for (let {
                    target: r
                } = n; r && r !== this; r = r.parentNode)
                for (let a of o)
                    if (a === r) return Y(n, {
                        delegateTarget: r
                    }), s.oneOff && j.off(t, n.type, e, i), i.apply(r, [n])
        }
    }

    function L(t, e, i = null) {
        return Object.values(t).find(t => t.callable === e && t.delegationSelector === i)
    }

    function H(t, e, i) {
        let s = "string" == typeof e,
            n = s ? i : e || i,
            o = q(t);
        return I.has(o) || (o = t), [s, n, o]
    }

    function N(t, e, i, s, n) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = H(e, i, s);
        if (e in P) {
            let l = t => function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
            };
            r = l(r)
        }
        let h = z(t),
            c = h[a] || (h[a] = {}),
            u = L(c, r, o ? i : null);
        if (u) {
            u.oneOff = u.oneOff && n;
            return
        }
        let d = E(r, e.replace(D, "")),
            p = o ? O(t, i, r) : M(t, r);
        p.delegationSelector = o ? i : null, p.callable = r, p.oneOff = n, p.uidEvent = d, c[d] = p, t.addEventListener(a, p, o)
    }

    function W(t, e, i, s, n) {
        let o = L(e[i], s, n);
        o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent])
    }

    function R(t, e, i, s) {
        let n = e[i] || {};
        for (let o of Object.keys(n))
            if (o.includes(s)) {
                let r = n[o];
                W(t, e, i, r.callable, r.delegationSelector)
            }
    }

    function q(t) {
        return P[t = t.replace(A, "")] || t
    }
    let j = {
        on(t, e, i, s) {
            N(t, e, i, s, !1)
        },
        one(t, e, i, s) {
            N(t, e, i, s, !0)
        },
        off(t, e, i, s) {
            if ("string" != typeof e || !t) return;
            let [n, o, r] = H(e, i, s), a = r !== e, l = z(t), h = l[r] || {}, c = e.startsWith(".");
            if (void 0 !== o) {
                if (!Object.keys(h).length) return;
                W(t, l, r, o, n ? i : null);
                return
            }
            if (c)
                for (let u of Object.keys(l)) R(t, l, u, e.slice(1));
            for (let d of Object.keys(h)) {
                let p = d.replace(S, "");
                if (!a || e.includes(p)) {
                    let f = h[d];
                    W(t, l, r, f.callable, f.delegationSelector)
                }
            }
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t) return null;
            let s = v(),
                n = q(e),
                o = e !== n,
                r = null,
                a = !0,
                l = !0,
                h = !1;
            o && s && (r = s.Event(e, i), s(t).trigger(r), a = !r.isPropagationStopped(), l = !r.isImmediatePropagationStopped(), h = r.isDefaultPrevented());
            let c = new Event(e, {
                bubbles: a,
                cancelable: !0
            });
            return c = Y(c, i), h && c.preventDefault(), l && t.dispatchEvent(c), c.defaultPrevented && r && r.preventDefault(), c
        }
    };

    function Y(t, e) {
        for (let [i, s] of Object.entries(e || {})) try {
            t[i] = s
        } catch (n) {
            Object.defineProperty(t, i, {
                configurable: !0,
                get: () => s
            })
        }
        return t
    }
    let B = new Map,
        V = {
            set(t, e, i) {
                B.has(t) || B.set(t, new Map);
                let s = B.get(t);
                if (!s.has(e) && 0 !== s.size) {
                    console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
                    return
                }
                s.set(e, i)
            },
            get: (t, e) => B.has(t) && B.get(t).get(e) || null,
            remove(t, e) {
                if (!B.has(t)) return;
                let i = B.get(t);
                i.delete(e), 0 === i.size && B.delete(t)
            }
        };

    function K(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t))
        } catch (e) {
            return t
        }
    }

    function X(t) {
        return t.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`)
    }
    let U = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${X(e)}`, i)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${X(e)}`)
        },
        getDataAttributes(t) {
            if (!t) return {};
            let e = {},
                i = Object.keys(t.dataset).filter(t => t.startsWith("bs") && !t.startsWith("bsConfig"));
            for (let s of i) {
                let n = s.replace(/^bs/, "");
                e[n = n.charAt(0).toLowerCase() + n.slice(1, n.length)] = K(t.dataset[s])
            }
            return e
        },
        getDataAttribute: (t, e) => K(t.getAttribute(`data-bs-${X(e)}`))
    };
    class Q {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }
        _configAfterMerge(t) {
            return t
        }
        _mergeConfigObj(t, e) {
            let i = c(e) ? U.getDataAttribute(e, "config") : {};
            return { ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...c(e) ? U.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            }
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (let i of Object.keys(e)) {
                let n = e[i],
                    o = t[i],
                    r = c(o) ? "element" : s(o);
                if (!RegExp(n).test(r)) throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`)
            }
        }
    }
    let Z = "5.2.2";
    class G extends Q {
        constructor(t, e) {
            if (super(), !(t = u(t))) return;
            this._element = t, this._config = this._getConfig(e), V.set(this._element, this.constructor.DATA_KEY, this)
        }
        dispose() {
            for (let t of (V.remove(this._element, this.constructor.DATA_KEY), j.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this))) this[t] = null
        }
        _queueCallback(t, e, i = !0) {
            C(t, e, i)
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }
        static getInstance(t) {
            return V.get(u(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }
        static get VERSION() {
            return Z
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`
        }
    }
    let J = (t, e = "hide") => {
            let i = `click.dismiss${t.EVENT_KEY}`,
                s = t.NAME;
            j.on(document, i, `[data-bs-dismiss="${s}"]`, function(i) {
                if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), p(this)) return;
                let n = a(this) || this.closest(`.${s}`),
                    o = t.getOrCreateInstance(n);
                o[e]()
            })
        },
        tt = "alert",
        te = "bs.alert",
        ti = `.${te}`,
        ts = `close${ti}`,
        tn = `closed${ti}`,
        to = "fade",
        tr = "show";
    class ta extends G {
        static get NAME() {
            return tt
        }
        close() {
            let t = j.trigger(this._element, ts);
            if (t.defaultPrevented) return;
            this._element.classList.remove(tr);
            let e = this._element.classList.contains(to);
            this._queueCallback(() => this._destroyElement(), this._element, e)
        }
        _destroyElement() {
            this._element.remove(), j.trigger(this._element, tn), this.dispose()
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let e = ta.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    J(ta, "close"), _(ta);
    let tl = "button",
        th = "bs.button",
        tc = `.${th}`,
        tu = ".data-api",
        td = "active",
        tp = '[data-bs-toggle="button"]',
        tf = `click${tc}${tu}`;
    class tg extends G {
        static get NAME() {
            return tl
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle(td))
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let e = tg.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            })
        }
    }
    j.on(document, tf, tp, t => {
        t.preventDefault();
        let e = t.target.closest(tp),
            i = tg.getOrCreateInstance(e);
        i.toggle()
    }), _(tg);
    let tm = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
            parents(t, e) {
                let i = [],
                    s = t.parentNode.closest(e);
                for (; s;) i.push(s), s = s.parentNode.closest(e);
                return i
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling
                }
                return []
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling
                }
                return []
            },
            focusableChildren(t) {
                let e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(t => `${t}:not([tabindex^="-"])`).join(",");
                return this.find(e, t).filter(t => !p(t) && d(t))
            }
        },
        tv = "swipe",
        t8 = ".bs.swipe",
        tb = `touchstart${t8}`,
        t$ = `touchmove${t8}`,
        ty = `touchend${t8}`,
        tw = `pointerdown${t8}`,
        t_ = `pointerup${t8}`,
        tx = "touch",
        tC = "pen",
        tk = "pointer-event",
        tD = 40,
        tA = {
            endCallback: null,
            leftCallback: null,
            rightCallback: null
        },
        tS = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)"
        };
    class tT extends Q {
        constructor(t, e) {
            if (super(), this._element = t, !t || !tT.isSupported()) return;
            this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents()
        }
        static get Default() {
            return tA
        }
        static get DefaultType() {
            return tS
        }
        static get NAME() {
            return tv
        }
        dispose() {
            j.off(this._element, t8)
        }
        _start(t) {
            if (!this._supportPointerEvents) {
                this._deltaX = t.touches[0].clientX;
                return
            }
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), x(this._config.endCallback)
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            let t = Math.abs(this._deltaX);
            if (t <= tD) return;
            let e = t / this._deltaX;
            this._deltaX = 0, e && x(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
            this._supportPointerEvents ? (j.on(this._element, tw, t => this._start(t)), j.on(this._element, t_, t => this._end(t)), this._element.classList.add(tk)) : (j.on(this._element, tb, t => this._start(t)), j.on(this._element, t$, t => this._move(t)), j.on(this._element, ty, t => this._end(t)))
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && (t.pointerType === tC || t.pointerType === tx)
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
        }
    }
    let tF = "carousel",
        tP = "bs.carousel",
        tI = `.${tP}`,
        tE = ".data-api",
        tz = "ArrowLeft",
        tM = "ArrowRight",
        tO = 500,
        t0 = "next",
        tL = "prev",
        tH = "left",
        t9 = "right",
        tN = `slide${tI}`,
        tW = `slid${tI}`,
        tR = `keydown${tI}`,
        tq = `mouseenter${tI}`,
        tj = `mouseleave${tI}`,
        t3 = `dragstart${tI}`,
        tY = `load${tI}${tE}`,
        tB = `click${tI}${tE}`,
        t1 = "carousel",
        t7 = "active",
        tV = "slide",
        t5 = "carousel-item-end",
        tK = "carousel-item-start",
        tX = "carousel-item-next",
        tU = "carousel-item-prev",
        t2 = ".active",
        t6 = ".carousel-item",
        t4 = t2 + t6,
        tQ = ".carousel-item img",
        tZ = ".carousel-indicators",
        tG = "[data-bs-slide], [data-bs-slide-to]",
        tJ = '[data-bs-ride="carousel"]',
        et = {
            [tz]: t9,
            [tM]: tH
        },
        ee = {
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0
        },
        ei = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean"
        };
    class es extends G {
        constructor(t, e) {
            super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = tm.findOne(tZ, this._element), this._addEventListeners(), this._config.ride === t1 && this.cycle()
        }
        static get Default() {
            return ee
        }
        static get DefaultType() {
            return ei
        }
        static get NAME() {
            return tF
        }
        next() {
            this._slide(t0)
        }
        nextWhenVisible() {
            !document.hidden && d(this._element) && this.next()
        }
        prev() {
            this._slide(tL)
        }
        pause() {
            this._isSliding && h(this._element), this._clearInterval()
        }
        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval)
        }
        _maybeEnableCycle() {
            if (this._config.ride) {
                if (this._isSliding) {
                    j.one(this._element, tW, () => this.cycle());
                    return
                }
                this.cycle()
            }
        }
        to(t) {
            let e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) {
                j.one(this._element, tW, () => this.to(t));
                return
            }
            let i = this._getItemIndex(this._getActive());
            if (i === t) return;
            let s = t > i ? t0 : tL;
            this._slide(s, e[t])
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval, t
        }
        _addEventListeners() {
            this._config.keyboard && j.on(this._element, tR, t => this._keydown(t)), "hover" === this._config.pause && (j.on(this._element, tq, () => this.pause()), j.on(this._element, tj, () => this._maybeEnableCycle())), this._config.touch && tT.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (let t of tm.find(tQ, this._element)) j.on(t, t3, t => t.preventDefault());
            let e = () => {
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), tO + this._config.interval))
                },
                i = {
                    leftCallback: () => this._slide(this._directionToOrder(tH)),
                    rightCallback: () => this._slide(this._directionToOrder(t9)),
                    endCallback: e
                };
            this._swipeHelper = new tT(this._element, i)
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            let e = et[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t)
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            let e = tm.findOne(t2, this._indicatorsElement);
            e.classList.remove(t7), e.removeAttribute("aria-current");
            let i = tm.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(t7), i.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            let t = this._activeElement || this._getActive();
            if (!t) return;
            let e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            let i = this._getActive(),
                s = t === t0,
                n = e || k(this._getItems(), i, s, this._config.wrap);
            if (n === i) return;
            let o = this._getItemIndex(n),
                r = e => j.trigger(this._element, e, {
                    relatedTarget: n,
                    direction: this._orderToDirection(t),
                    from: this._getItemIndex(i),
                    to: o
                }),
                a = r(tN);
            if (a.defaultPrevented || !i || !n) return;
            let l = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = n;
            let h = s ? tK : t5,
                c = s ? tX : tU;
            n.classList.add(c), m(n), i.classList.add(h), n.classList.add(h);
            let u = () => {
                n.classList.remove(h, c), n.classList.add(t7), i.classList.remove(t7, c, h), this._isSliding = !1, r(tW)
            };
            this._queueCallback(u, i, this._isAnimated()), l && this.cycle()
        }
        _isAnimated() {
            return this._element.classList.contains(tV)
        }
        _getActive() {
            return tm.findOne(t4, this._element)
        }
        _getItems() {
            return tm.find(t6, this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null)
        }
        _directionToOrder(t) {
            return w() ? t === tH ? tL : t0 : t === tH ? t0 : tL
        }
        _orderToDirection(t) {
            return w() ? t === tL ? tH : t9 : t === tL ? t9 : tH
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let e = es.getOrCreateInstance(this, t);
                if ("number" == typeof t) {
                    e.to(t);
                    return
                }
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    j.on(document, tB, tG, function(t) {
        let e = a(this);
        if (!e || !e.classList.contains(t1)) return;
        t.preventDefault();
        let i = es.getOrCreateInstance(e),
            s = this.getAttribute("data-bs-slide-to");
        if (s) {
            i.to(s), i._maybeEnableCycle();
            return
        }
        if ("next" === U.getDataAttribute(this, "slide")) {
            i.next(), i._maybeEnableCycle();
            return
        }
        i.prev(), i._maybeEnableCycle()
    }), j.on(window, tY, () => {
        let t = tm.find(tJ);
        for (let e of t) es.getOrCreateInstance(e)
    }), _(es);
    let en = "collapse",
        eo = "bs.collapse",
        er = `.${eo}`,
        ea = ".data-api",
        el = `show${er}`,
        eh = `shown${er}`,
        ec = `hide${er}`,
        eu = `hidden${er}`,
        ed = `click${er}${ea}`,
        ep = "show",
        ef = "collapse",
        eg = "collapsing",
        em = "collapsed",
        ev = `:scope .${ef} .${ef}`,
        e8 = "collapse-horizontal",
        eb = "width",
        e$ = "height",
        ey = ".collapse.show, .collapse.collapsing",
        ew = '[data-bs-toggle="collapse"]',
        e_ = {
            parent: null,
            toggle: !0
        },
        ex = {
            parent: "(null|element)",
            toggle: "boolean"
        };
    class eC extends G {
        constructor(t, e) {
            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
            let i = tm.find(ew);
            for (let s of i) {
                let n = r(s),
                    o = tm.find(n).filter(t => t === this._element);
                null !== n && o.length && this._triggerArray.push(s)
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }
        static get Default() {
            return e_
        }
        static get DefaultType() {
            return ex
        }
        static get NAME() {
            return en
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(ey).filter(t => t !== this._element).map(t => eC.getOrCreateInstance(t, {
                    toggle: !1
                }))), t.length && t[0]._isTransitioning) return;
            let e = j.trigger(this._element, el);
            if (e.defaultPrevented) return;
            for (let i of t) i.hide();
            let s = this._getDimension();
            this._element.classList.remove(ef), this._element.classList.add(eg), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            let n = () => {
                    this._isTransitioning = !1, this._element.classList.remove(eg), this._element.classList.add(ef, ep), this._element.style[s] = "", j.trigger(this._element, eh)
                },
                o = s[0].toUpperCase() + s.slice(1),
                r = `scroll${o}`;
            this._queueCallback(n, this._element, !0), this._element.style[s] = `${this._element[r]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            let t = j.trigger(this._element, ec);
            if (t.defaultPrevented) return;
            let e = this._getDimension();
            for (let i of (this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, m(this._element), this._element.classList.add(eg), this._element.classList.remove(ef, ep), this._triggerArray)) {
                let s = a(i);
                s && !this._isShown(s) && this._addAriaAndCollapsedClass([i], !1)
            }
            this._isTransitioning = !0;
            let n = () => {
                this._isTransitioning = !1, this._element.classList.remove(eg), this._element.classList.add(ef), j.trigger(this._element, eu)
            };
            this._element.style[e] = "", this._queueCallback(n, this._element, !0)
        }
        _isShown(t = this._element) {
            return t.classList.contains(ep)
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle), t.parent = u(t.parent), t
        }
        _getDimension() {
            return this._element.classList.contains(e8) ? eb : e$
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            let t = this._getFirstLevelChildren(ew);
            for (let e of t) {
                let i = a(e);
                i && this._addAriaAndCollapsedClass([e], this._isShown(i))
            }
        }
        _getFirstLevelChildren(t) {
            let e = tm.find(ev, this._config.parent);
            return tm.find(t, this._config.parent).filter(t => !e.includes(t))
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length)
                for (let i of t) i.classList.toggle(em, !e), i.setAttribute("aria-expanded", e)
        }
        static jQueryInterface(t) {
            let e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function() {
                let i = eC.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw TypeError(`No method named "${t}"`);
                    i[t]()
                }
            })
        }
    }
    j.on(document, ed, ew, function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        let e = r(this),
            i = tm.find(e);
        for (let s of i) eC.getOrCreateInstance(s, {
            toggle: !1
        }).toggle()
    }), _(eC);
    var ek = "top",
        eD = "bottom",
        eA = "right",
        eS = "left",
        eT = "auto",
        eF = [ek, eD, eA, eS],
        eP = "start",
        eI = "end",
        eE = "clippingParents",
        ez = "viewport",
        eM = "popper",
        eO = "reference",
        e0 = eF.reduce(function(t, e) {
            return t.concat([e + "-" + eP, e + "-" + eI])
        }, []),
        eL = [].concat(eF, [eT]).reduce(function(t, e) {
            return t.concat([e, e + "-" + eP, e + "-" + eI])
        }, []),
        eH = "beforeRead",
        e9 = "read",
        eN = "afterRead",
        eW = "beforeMain",
        eR = "main",
        eq = "afterMain",
        ej = "beforeWrite",
        e3 = "write",
        eY = "afterWrite",
        eB = [eH, e9, eN, eW, eR, eq, ej, e3, eY];

    function e1(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function e7(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window
        }
        return t
    }

    function eV(t) {
        var e = e7(t).Element;
        return t instanceof e || t instanceof Element
    }

    function e5(t) {
        var e = e7(t).HTMLElement;
        return t instanceof e || t instanceof HTMLElement
    }

    function eK(t) {
        if ("undefined" == typeof ShadowRoot) return !1;
        var e = e7(t).ShadowRoot;
        return t instanceof e || t instanceof ShadowRoot
    }

    function eX(t) {
        var e = t.state;
        Object.keys(e.elements).forEach(function(t) {
            var i = e.styles[t] || {},
                s = e.attributes[t] || {},
                n = e.elements[t];
            e5(n) && e1(n) && (Object.assign(n.style, i), Object.keys(s).forEach(function(t) {
                var e = s[t];
                !1 === e ? n.removeAttribute(t) : n.setAttribute(t, !0 === e ? "" : e)
            }))
        })
    }

    function eU(t) {
        var e = t.state,
            i = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
        return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
            function() {
                Object.keys(e.elements).forEach(function(t) {
                    var s = e.elements[t],
                        n = e.attributes[t] || {},
                        o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function(t, e) {
                            return t[e] = "", t
                        }, {});
                    e5(s) && e1(s) && (Object.assign(s.style, o), Object.keys(n).forEach(function(t) {
                        s.removeAttribute(t)
                    }))
                })
            }
    }
    let e2 = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: eX,
        effect: eU,
        requires: ["computeStyles"]
    };

    function e6(t) {
        return t.split("-")[0]
    }
    var e4 = Math.max,
        eQ = Math.min,
        eZ = Math.round;

    function eG() {
        var t = navigator.userAgentData;
        return null != t && t.brands ? t.brands.map(function(t) {
            return t.brand + "/" + t.version
        }).join(" ") : navigator.userAgent
    }

    function eJ() {
        return !/^((?!chrome|android).)*safari/i.test(eG())
    }

    function it(t, e, i) {
        void 0 === e && (e = !1), void 0 === i && (i = !1);
        var s = t.getBoundingClientRect(),
            n = 1,
            o = 1;
        e && e5(t) && (n = t.offsetWidth > 0 && eZ(s.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && eZ(s.height) / t.offsetHeight || 1);
        var r = (eV(t) ? e7(t) : window).visualViewport,
            a = !eJ() && i,
            l = (s.left + (a && r ? r.offsetLeft : 0)) / n,
            h = (s.top + (a && r ? r.offsetTop : 0)) / o,
            c = s.width / n,
            u = s.height / o;
        return {
            width: c,
            height: u,
            top: h,
            right: l + c,
            bottom: h + u,
            left: l,
            x: l,
            y: h
        }
    }

    function ie(t) {
        var e = it(t),
            i = t.offsetWidth,
            s = t.offsetHeight;
        return 1 >= Math.abs(e.width - i) && (i = e.width), 1 >= Math.abs(e.height - s) && (s = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: s
        }
    }

    function ii(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && eK(i)) {
            var s = e;
            do {
                if (s && t.isSameNode(s)) return !0;
                s = s.parentNode || s.host
            } while (s)
        }
        return !1
    }

    function is(t) {
        return e7(t).getComputedStyle(t)
    }

    function io(t) {
        return ["table", "td", "th"].indexOf(e1(t)) >= 0
    }

    function ir(t) {
        return ((eV(t) ? t.ownerDocument : t.document) || window.document).documentElement
    }

    function ia(t) {
        return "html" === e1(t) ? t : t.assignedSlot || t.parentNode || (eK(t) ? t.host : null) || ir(t)
    }

    function il(t) {
        return e5(t) && "fixed" !== is(t).position ? t.offsetParent : null
    }

    function ih(t) {
        var e = /firefox/i.test(eG());
        if (/Trident/i.test(eG()) && e5(t) && "fixed" === is(t).position) return null;
        var i = ia(t);
        for (eK(i) && (i = i.host); e5(i) && 0 > ["html", "body"].indexOf(e1(i));) {
            var s = is(i);
            if ("none" !== s.transform || "none" !== s.perspective || "paint" === s.contain || -1 !== ["transform", "perspective"].indexOf(s.willChange) || e && "filter" === s.willChange || e && s.filter && "none" !== s.filter) return i;
            i = i.parentNode
        }
        return null
    }

    function ic(t) {
        for (var e = e7(t), i = il(t); i && io(i) && "static" === is(i).position;) i = il(i);
        return i && ("html" === e1(i) || "body" === e1(i) && "static" === is(i).position) ? e : i || ih(t) || e
    }

    function iu(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }

    function id(t, e, i) {
        return e4(t, eQ(e, i))
    }

    function ip(t, e, i) {
        var s = id(t, e, i);
        return s > i ? i : s
    }

    function ig() {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    }

    function im(t) {
        return Object.assign({}, ig(), t)
    }

    function iv(t, e) {
        return e.reduce(function(e, i) {
            return e[i] = t, e
        }, {})
    }
    var i8 = function t(e, i) {
        return im("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, i.rects, {
            placement: i.placement
        })) : e) ? e : iv(e, eF))
    };

    function ib(t) {
        var e, i = t.state,
            s = t.name,
            n = t.options,
            o = i.elements.arrow,
            r = i.modifiersData.popperOffsets,
            a = e6(i.placement),
            l = iu(a),
            h = [eS, eA].indexOf(a) >= 0 ? "height" : "width";
        if (o && r) {
            var c = i8(n.padding, i),
                u = ie(o),
                d = "y" === l ? ek : eS,
                p = "y" === l ? eD : eA,
                f = i.rects.reference[h] + i.rects.reference[l] - r[l] - i.rects.popper[h],
                g = r[l] - i.rects.reference[l],
                m = ic(o),
                v = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
                b = f / 2 - g / 2,
                y = c[d],
                w = v - u[h] - c[p],
                _ = v / 2 - u[h] / 2 + b,
                x = id(y, _, w),
                C = l;
            i.modifiersData[s] = ((e = {})[C] = x, e.centerOffset = x - _, e)
        }
    }

    function i$(t) {
        var e = t.state,
            i = t.options.element,
            s = void 0 === i ? "[data-popper-arrow]" : i;
        null != s && ("string" != typeof s || (s = e.elements.popper.querySelector(s))) && ii(e.elements.popper, s) && (e.elements.arrow = s)
    }
    let iy = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: ib,
        effect: i$,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };

    function iw(t) {
        return t.split("-")[1]
    }
    var i_ = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

    function ix(t) {
        var e = t.x,
            i = t.y,
            s = window.devicePixelRatio || 1;
        return {
            x: eZ(e * s) / s || 0,
            y: eZ(i * s) / s || 0
        }
    }

    function iC(t) {
        var e, i, s = t.popper,
            n = t.popperRect,
            o = t.placement,
            r = t.variation,
            a = t.offsets,
            l = t.position,
            h = t.gpuAcceleration,
            c = t.adaptive,
            u = t.roundOffsets,
            d = t.isFixed,
            p = a.x,
            f = void 0 === p ? 0 : p,
            g = a.y,
            m = void 0 === g ? 0 : g,
            v = "function" == typeof u ? u({
                x: f,
                y: m
            }) : {
                x: f,
                y: m
            };
        f = v.x, m = v.y;
        var b = a.hasOwnProperty("x"),
            y = a.hasOwnProperty("y"),
            w = eS,
            _ = ek,
            x = window;
        if (c) {
            var C = ic(s),
                k = "clientHeight",
                D = "clientWidth";
            C === e7(s) && (C = ir(s), "static" !== is(C).position && "absolute" === l && (k = "scrollHeight", D = "scrollWidth")), (o === ek || (o === eS || o === eA) && r === eI) && (_ = eD, m -= (d && C === x && x.visualViewport ? x.visualViewport.height : C[k]) - n.height, m *= h ? 1 : -1), (o === eS || (o === ek || o === eD) && r === eI) && (w = eA, f -= (d && C === x && x.visualViewport ? x.visualViewport.width : C[D]) - n.width, f *= h ? 1 : -1)
        }
        var A = Object.assign({
                position: l
            }, c && i_),
            S = !0 === u ? ix({
                x: f,
                y: m
            }) : {
                x: f,
                y: m
            };
        return (f = S.x, m = S.y, h) ? Object.assign({}, A, ((i = {})[_] = y ? "0" : "", i[w] = b ? "0" : "", i.transform = 1 >= (x.devicePixelRatio || 1) ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", i)) : Object.assign({}, A, ((e = {})[_] = y ? m + "px" : "", e[w] = b ? f + "px" : "", e.transform = "", e))
    }

    function ik(t) {
        var e = t.state,
            i = t.options,
            s = i.gpuAcceleration,
            n = void 0 === s || s,
            o = i.adaptive,
            r = void 0 === o || o,
            a = i.roundOffsets,
            l = void 0 === a || a,
            h = {
                placement: e6(e.placement),
                variation: iw(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: n,
                isFixed: "fixed" === e.options.strategy
            };
        null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, iC(Object.assign({}, h, {
            offsets: e.modifiersData.popperOffsets,
            position: e.options.strategy,
            adaptive: r,
            roundOffsets: l
        })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, iC(Object.assign({}, h, {
            offsets: e.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l
        })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-placement": e.placement
        })
    }
    let iD = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: ik,
        data: {}
    };
    var iA = {
        passive: !0
    };

    function iS(t) {
        var e = t.state,
            i = t.instance,
            s = t.options,
            n = s.scroll,
            o = void 0 === n || n,
            r = s.resize,
            a = void 0 === r || r,
            l = e7(e.elements.popper),
            h = [].concat(e.scrollParents.reference, e.scrollParents.popper);
        return o && h.forEach(function(t) {
                t.addEventListener("scroll", i.update, iA)
            }), a && l.addEventListener("resize", i.update, iA),
            function() {
                o && h.forEach(function(t) {
                    t.removeEventListener("scroll", i.update, iA)
                }), a && l.removeEventListener("resize", i.update, iA)
            }
    }
    let iT = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function t() {},
        effect: iS,
        data: {}
    };
    var iF = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

    function iP(t) {
        return t.replace(/left|right|bottom|top/g, function(t) {
            return iF[t]
        })
    }
    var iI = {
        start: "end",
        end: "start"
    };

    function iE(t) {
        return t.replace(/start|end/g, function(t) {
            return iI[t]
        })
    }

    function iz(t) {
        var e, i = e7(t);
        return {
            scrollLeft: i.pageXOffset,
            scrollTop: i.pageYOffset
        }
    }

    function iM(t) {
        return it(ir(t)).left + iz(t).scrollLeft
    }

    function iO(t, e) {
        var i = e7(t),
            s = ir(t),
            n = i.visualViewport,
            o = s.clientWidth,
            r = s.clientHeight,
            a = 0,
            l = 0;
        if (n) {
            o = n.width, r = n.height;
            var h = eJ();
            (h || !h && "fixed" === e) && (a = n.offsetLeft, l = n.offsetTop)
        }
        return {
            width: o,
            height: r,
            x: a + iM(t),
            y: l
        }
    }

    function i0(t) {
        var e, i = ir(t),
            s = iz(t),
            n = null == (e = t.ownerDocument) ? void 0 : e.body,
            o = e4(i.scrollWidth, i.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
            r = e4(i.scrollHeight, i.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
            a = -s.scrollLeft + iM(t),
            l = -s.scrollTop;
        return "rtl" === is(n || i).direction && (a += e4(i.clientWidth, n ? n.clientWidth : 0) - o), {
            width: o,
            height: r,
            x: a,
            y: l
        }
    }

    function iL(t) {
        var e = is(t),
            i = e.overflow,
            s = e.overflowX,
            n = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + n + s)
    }

    function iH(t) {
        return ["html", "body", "#document"].indexOf(e1(t)) >= 0 ? t.ownerDocument.body : e5(t) && iL(t) ? t : iH(ia(t))
    }

    function i9(t, e) {
        void 0 === e && (e = []);
        var i, s = iH(t),
            n = s === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = e7(s),
            r = n ? [o].concat(o.visualViewport || [], iL(s) ? s : []) : s,
            a = e.concat(r);
        return n ? a : a.concat(i9(ia(r)))
    }

    function iN(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }

    function iW(t, e) {
        var i = it(t, !1, "fixed" === e);
        return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i
    }

    function iR(t, e, i) {
        return e === ez ? iN(iO(t, i)) : eV(e) ? iW(e, i) : iN(i0(ir(t)))
    }

    function iq(t) {
        var e = i9(ia(t)),
            i = ["absolute", "fixed"].indexOf(is(t).position) >= 0 && e5(t) ? ic(t) : t;
        return eV(i) ? e.filter(function(t) {
            return eV(t) && ii(t, i) && "body" !== e1(t)
        }) : []
    }

    function ij(t, e, i, s) {
        var n = [].concat("clippingParents" === e ? iq(t) : [].concat(e), [i]),
            o = n[0],
            r = n.reduce(function(e, i) {
                var n = iR(t, i, s);
                return e.top = e4(n.top, e.top), e.right = eQ(n.right, e.right), e.bottom = eQ(n.bottom, e.bottom), e.left = e4(n.left, e.left), e
            }, iR(t, o, s));
        return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
    }

    function i3(t) {
        var e, i = t.reference,
            s = t.element,
            n = t.placement,
            o = n ? e6(n) : null,
            r = n ? iw(n) : null,
            a = i.x + i.width / 2 - s.width / 2,
            l = i.y + i.height / 2 - s.height / 2;
        switch (o) {
            case ek:
                e = {
                    x: a,
                    y: i.y - s.height
                };
                break;
            case eD:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case eA:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case eS:
                e = {
                    x: i.x - s.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                }
        }
        var h = o ? iu(o) : null;
        if (null != h) {
            var c = "y" === h ? "height" : "width";
            switch (r) {
                case eP:
                    e[h] = e[h] - (i[c] / 2 - s[c] / 2);
                    break;
                case eI:
                    e[h] = e[h] + (i[c] / 2 - s[c] / 2)
            }
        }
        return e
    }

    function iY(t, e) {
        void 0 === e && (e = {});
        var i = e,
            s = i.placement,
            n = void 0 === s ? t.placement : s,
            o = i.strategy,
            r = void 0 === o ? t.strategy : o,
            a = i.boundary,
            l = void 0 === a ? eE : a,
            h = i.rootBoundary,
            c = void 0 === h ? ez : h,
            u = i.elementContext,
            d = void 0 === u ? eM : u,
            p = i.altBoundary,
            f = void 0 !== p && p,
            g = i.padding,
            m = void 0 === g ? 0 : g,
            v = im("number" != typeof m ? m : iv(m, eF)),
            b = d === eM ? eO : eM,
            y = t.rects.popper,
            w = t.elements[f ? b : d],
            _ = ij(eV(w) ? w : w.contextElement || ir(t.elements.popper), l, c, r),
            x = it(t.elements.reference),
            C = i3({
                reference: x,
                element: y,
                strategy: "absolute",
                placement: n
            }),
            k = iN(Object.assign({}, y, C)),
            D = d === eM ? k : x,
            A = {
                top: _.top - D.top + v.top,
                bottom: D.bottom - _.bottom + v.bottom,
                left: _.left - D.left + v.left,
                right: D.right - _.right + v.right
            },
            S = t.modifiersData.offset;
        if (d === eM && S) {
            var T = S[n];
            Object.keys(A).forEach(function(t) {
                var e = [eA, eD].indexOf(t) >= 0 ? 1 : -1,
                    i = [ek, eD].indexOf(t) >= 0 ? "y" : "x";
                A[t] += T[i] * e
            })
        }
        return A
    }

    function iB(t, e) {
        void 0 === e && (e = {});
        var i = e,
            s = i.placement,
            n = i.boundary,
            o = i.rootBoundary,
            r = i.padding,
            a = i.flipVariations,
            l = i.allowedAutoPlacements,
            h = void 0 === l ? eL : l,
            c = iw(s),
            u = c ? a ? e0 : e0.filter(function(t) {
                return iw(t) === c
            }) : eF,
            d = u.filter(function(t) {
                return h.indexOf(t) >= 0
            });
        0 === d.length && (d = u);
        var p = d.reduce(function(e, i) {
            return e[i] = iY(t, {
                placement: i,
                boundary: n,
                rootBoundary: o,
                padding: r
            })[e6(i)], e
        }, {});
        return Object.keys(p).sort(function(t, e) {
            return p[t] - p[e]
        })
    }

    function i1(t) {
        if (e6(t) === eT) return [];
        var e = iP(t);
        return [iE(t), e, iE(e)]
    }

    function i7(t) {
        var e = t.state,
            i = t.options,
            s = t.name;
        if (!e.modifiersData[s]._skip) {
            for (var n, o, r = i.mainAxis, a = void 0 === r || r, l = i.altAxis, h = void 0 === l || l, c = i.fallbackPlacements, u = i.padding, d = i.boundary, p = i.rootBoundary, f = i.altBoundary, g = i.flipVariations, m = void 0 === g || g, v = i.allowedAutoPlacements, b = e.options.placement, y = e6(b) === b, w = [b].concat(c || (y || !m ? [iP(b)] : i1(b))).reduce(function(t, i) {
                    return t.concat(e6(i) === eT ? iB(e, {
                        placement: i,
                        boundary: d,
                        rootBoundary: p,
                        padding: u,
                        flipVariations: m,
                        allowedAutoPlacements: v
                    }) : i)
                }, []), _ = e.rects.reference, x = e.rects.popper, C = new Map, k = !0, D = w[0], A = 0; A < w.length; A++) {
                var S = w[A],
                    T = e6(S),
                    F = iw(S) === eP,
                    P = [ek, eD].indexOf(T) >= 0,
                    I = P ? "width" : "height",
                    E = iY(e, {
                        placement: S,
                        boundary: d,
                        rootBoundary: p,
                        altBoundary: f,
                        padding: u
                    }),
                    z = P ? F ? eA : eS : F ? eD : ek;
                _[I] > x[I] && (z = iP(z));
                var M = iP(z),
                    O = [];
                if (a && O.push(E[T] <= 0), h && O.push(E[z] <= 0, E[M] <= 0), O.every(function(t) {
                        return t
                    })) {
                    D = S, k = !1;
                    break
                }
                C.set(S, O)
            }
            if (k)
                for (var L = m ? 3 : 1, H = function t(e) {
                        var i = w.find(function(t) {
                            var i = C.get(t);
                            if (i) return i.slice(0, e).every(function(t) {
                                return t
                            })
                        });
                        if (i) return D = i, "break"
                    }, N = L; N > 0 && "break" !== H(N); N--);
            e.placement !== D && (e.modifiersData[s]._skip = !0, e.placement = D, e.reset = !0)
        }
    }
    let iV = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: i7,
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function i5(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        }
    }

    function iK(t) {
        return [ek, eA, eD, eS].some(function(e) {
            return t[e] >= 0
        })
    }

    function iX(t) {
        var e = t.state,
            i = t.name,
            s = e.rects.reference,
            n = e.rects.popper,
            o = e.modifiersData.preventOverflow,
            r = iY(e, {
                elementContext: "reference"
            }),
            a = iY(e, {
                altBoundary: !0
            }),
            l = i5(r, s),
            h = i5(a, n, o),
            c = iK(l),
            u = iK(h);
        e.modifiersData[i] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: h,
            isReferenceHidden: c,
            hasPopperEscaped: u
        }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": c,
            "data-popper-escaped": u
        })
    }
    let iU = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: iX
    };

    function i2(t, e, i) {
        var s = e6(t),
            n = [eS, ek].indexOf(s) >= 0 ? -1 : 1,
            o = "function" == typeof i ? i(Object.assign({}, e, {
                placement: t
            })) : i,
            r = o[0],
            a = o[1];
        return r = r || 0, a = (a || 0) * n, [eS, eA].indexOf(s) >= 0 ? {
            x: a,
            y: r
        } : {
            x: r,
            y: a
        }
    }

    function i6(t) {
        var e = t.state,
            i = t.options,
            s = t.name,
            n = i.offset,
            o = void 0 === n ? [0, 0] : n,
            r = eL.reduce(function(t, i) {
                return t[i] = i2(i, e.rects, o), t
            }, {}),
            a = r[e.placement],
            l = a.x,
            h = a.y;
        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += h), e.modifiersData[s] = r
    }
    let i4 = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: i6
    };

    function iQ(t) {
        var e = t.state,
            i = t.name;
        e.modifiersData[i] = i3({
            reference: e.rects.reference,
            element: e.rects.popper,
            strategy: "absolute",
            placement: e.placement
        })
    }
    let iZ = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: iQ,
        data: {}
    };

    function iG(t) {
        return "x" === t ? "y" : "x"
    }

    function iJ(t) {
        var e = t.state,
            i = t.options,
            s = t.name,
            n = i.mainAxis,
            o = void 0 === n || n,
            r = i.altAxis,
            a = void 0 !== r && r,
            l = i.boundary,
            h = i.rootBoundary,
            c = i.altBoundary,
            u = i.padding,
            d = i.tether,
            p = void 0 === d || d,
            f = i.tetherOffset,
            g = void 0 === f ? 0 : f,
            m = iY(e, {
                boundary: l,
                rootBoundary: h,
                padding: u,
                altBoundary: c
            }),
            v = e6(e.placement),
            b = iw(e.placement),
            y = !b,
            w = iu(v),
            _ = iG(w),
            x = e.modifiersData.popperOffsets,
            C = e.rects.reference,
            k = e.rects.popper,
            D = "function" == typeof g ? g(Object.assign({}, e.rects, {
                placement: e.placement
            })) : g,
            A = "number" == typeof D ? {
                mainAxis: D,
                altAxis: D
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, D),
            S = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
            T = {
                x: 0,
                y: 0
            };
        if (x) {
            if (o) {
                var F, P = "y" === w ? ek : eS,
                    I = "y" === w ? eD : eA,
                    E = "y" === w ? "height" : "width",
                    z = x[w],
                    M = z + m[P],
                    O = z - m[I],
                    L = p ? -k[E] / 2 : 0,
                    H = b === eP ? C[E] : k[E],
                    N = b === eP ? -k[E] : -C[E],
                    W = e.elements.arrow,
                    R = p && W ? ie(W) : {
                        width: 0,
                        height: 0
                    },
                    q = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : ig(),
                    j = q[P],
                    Y = q[I],
                    B = id(0, C[E], R[E]),
                    V = y ? C[E] / 2 - L - B - j - A.mainAxis : H - B - j - A.mainAxis,
                    K = y ? -C[E] / 2 + L + B + Y + A.mainAxis : N + B + Y + A.mainAxis,
                    X = e.elements.arrow && ic(e.elements.arrow),
                    U = X ? "y" === w ? X.clientTop || 0 : X.clientLeft || 0 : 0,
                    Q = null != (F = null == S ? void 0 : S[w]) ? F : 0,
                    Z = z + V - Q - U,
                    G = z + K - Q,
                    J = id(p ? eQ(M, Z) : M, z, p ? e4(O, G) : O);
                x[w] = J, T[w] = J - z
            }
            if (a) {
                var tt, te = "x" === w ? ek : eS,
                    ti = "x" === w ? eD : eA,
                    ts = x[_],
                    tn = "y" === _ ? "height" : "width",
                    to = ts + m[te],
                    tr = ts - m[ti],
                    ta = -1 !== [ek, eS].indexOf(v),
                    tl = null != (tt = null == S ? void 0 : S[_]) ? tt : 0,
                    th = ta ? to : ts - C[tn] - k[tn] - tl + A.altAxis,
                    tc = ta ? ts + C[tn] + k[tn] - tl - A.altAxis : tr,
                    tu = p && ta ? ip(th, ts, tc) : id(p ? th : to, ts, p ? tc : tr);
                x[_] = tu, T[_] = tu - ts
            }
            e.modifiersData[s] = T
        }
    }
    let st = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: iJ,
        requiresIfExists: ["offset"]
    };

    function se(t) {
        return {
            scrollLeft: t.scrollLeft,
            scrollTop: t.scrollTop
        }
    }

    function si(t) {
        return t !== e7(t) && e5(t) ? se(t) : iz(t)
    }

    function ss(t) {
        var e = t.getBoundingClientRect(),
            i = eZ(e.width) / t.offsetWidth || 1,
            s = eZ(e.height) / t.offsetHeight || 1;
        return 1 !== i || 1 !== s
    }

    function sn(t, e, i) {
        void 0 === i && (i = !1);
        var s = e5(e),
            n = e5(e) && ss(e),
            o = ir(e),
            r = it(t, n, i),
            a = {
                scrollLeft: 0,
                scrollTop: 0
            },
            l = {
                x: 0,
                y: 0
            };
        return (s || !s && !i) && (("body" !== e1(e) || iL(o)) && (a = si(e)), e5(e) ? (l = it(e, !0), l.x += e.clientLeft, l.y += e.clientTop) : o && (l.x = iM(o))), {
            x: r.left + a.scrollLeft - l.x,
            y: r.top + a.scrollTop - l.y,
            width: r.width,
            height: r.height
        }
    }

    function so(t) {
        var e = new Map,
            i = new Set,
            s = [];

        function n(t) {
            i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                if (!i.has(t)) {
                    var s = e.get(t);
                    s && n(s)
                }
            }), s.push(t)
        }
        return t.forEach(function(t) {
            e.set(t.name, t)
        }), t.forEach(function(t) {
            i.has(t.name) || n(t)
        }), s
    }

    function sr(t) {
        var e = so(t);
        return eB.reduce(function(t, i) {
            return t.concat(e.filter(function(t) {
                return t.phase === i
            }))
        }, [])
    }

    function sa(t) {
        var e;
        return function() {
            return e || (e = new Promise(function(i) {
                Promise.resolve().then(function() {
                    e = void 0, i(t())
                })
            })), e
        }
    }

    function sl(t) {
        var e = t.reduce(function(t, e) {
            var i = t[e.name];
            return t[e.name] = i ? Object.assign({}, i, e, {
                options: Object.assign({}, i.options, e.options),
                data: Object.assign({}, i.data, e.data)
            }) : e, t
        }, {});
        return Object.keys(e).map(function(t) {
            return e[t]
        })
    }
    var sh = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function sc() {
        for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
        return !e.some(function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        })
    }

    function su(t) {
        void 0 === t && (t = {});
        var e = t,
            i = e.defaultModifiers,
            s = void 0 === i ? [] : i,
            n = e.defaultOptions,
            o = void 0 === n ? sh : n;
        return function t(e, i, n) {
            void 0 === n && (n = o);
            var r = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, sh, o),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: i
                    },
                    attributes: {},
                    styles: {}
                },
                a = [],
                l = !1,
                h = {
                    state: r,
                    setOptions: function t(n) {
                        var a = "function" == typeof n ? n(r.options) : n;
                        u(), r.options = Object.assign({}, o, r.options, a), r.scrollParents = {
                            reference: eV(e) ? i9(e) : e.contextElement ? i9(e.contextElement) : [],
                            popper: i9(i)
                        };
                        var l = sr(sl([].concat(s, r.options.modifiers)));
                        return r.orderedModifiers = l.filter(function(t) {
                            return t.enabled
                        }), c(), h.update()
                    },
                    forceUpdate: function t() {
                        if (!l) {
                            var e = r.elements,
                                i = e.reference,
                                s = e.popper;
                            if (sc(i, s)) {
                                r.rects = {
                                    reference: sn(i, ic(s), "fixed" === r.options.strategy),
                                    popper: ie(s)
                                }, r.reset = !1, r.placement = r.options.placement, r.orderedModifiers.forEach(function(t) {
                                    return r.modifiersData[t.name] = Object.assign({}, t.data)
                                });
                                for (var n = 0; n < r.orderedModifiers.length; n++) {
                                    if (!0 === r.reset) {
                                        r.reset = !1, n = -1;
                                        continue
                                    }
                                    var o = r.orderedModifiers[n],
                                        a = o.fn,
                                        c = o.options,
                                        u = void 0 === c ? {} : c,
                                        d = o.name;
                                    "function" == typeof a && (r = a({
                                        state: r,
                                        options: u,
                                        name: d,
                                        instance: h
                                    }) || r)
                                }
                            }
                        }
                    },
                    update: sa(function() {
                        return new Promise(function(t) {
                            h.forceUpdate(), t(r)
                        })
                    }),
                    destroy: function t() {
                        u(), l = !0
                    }
                };
            if (!sc(e, i)) return h;

            function c() {
                r.orderedModifiers.forEach(function(t) {
                    var e = t.name,
                        i = t.options,
                        s = void 0 === i ? {} : i,
                        n = t.effect;
                    if ("function" == typeof n) {
                        var o = n({
                                state: r,
                                name: e,
                                instance: h,
                                options: s
                            }),
                            l = function t() {};
                        a.push(o || l)
                    }
                })
            }

            function u() {
                a.forEach(function(t) {
                    return t()
                }), a = []
            }
            return h.setOptions(n).then(function(t) {
                !l && n.onFirstUpdate && n.onFirstUpdate(t)
            }), h
        }
    }
    var sd = su(),
        sp = [iT, iZ, iD, e2],
        sf = su({
            defaultModifiers: sp
        }),
        sg = [iT, iZ, iD, e2, i4, iV, st, iy, iU],
        sm = su({
            defaultModifiers: sg
        });
    let sv = Object.freeze(Object.defineProperty({
            __proto__: null,
            popperGenerator: su,
            detectOverflow: iY,
            createPopperBase: sd,
            createPopper: sm,
            createPopperLite: sf,
            top: ek,
            bottom: eD,
            right: eA,
            left: eS,
            auto: eT,
            basePlacements: eF,
            start: eP,
            end: eI,
            clippingParents: eE,
            viewport: ez,
            popper: eM,
            reference: eO,
            variationPlacements: e0,
            placements: eL,
            beforeRead: eH,
            read: e9,
            afterRead: eN,
            beforeMain: eW,
            main: eR,
            afterMain: eq,
            beforeWrite: ej,
            write: e3,
            afterWrite: eY,
            modifierPhases: eB,
            applyStyles: e2,
            arrow: iy,
            computeStyles: iD,
            eventListeners: iT,
            flip: iV,
            hide: iU,
            offset: i4,
            popperOffsets: iZ,
            preventOverflow: st
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        s8 = "dropdown",
        sb = "bs.dropdown",
        s$ = `.${sb}`,
        sy = ".data-api",
        sw = "Escape",
        s_ = "Tab",
        sx = "ArrowUp",
        sC = "ArrowDown",
        sk = 2,
        sD = `hide${s$}`,
        sA = `hidden${s$}`,
        sS = `show${s$}`,
        sT = `shown${s$}`,
        sF = `click${s$}${sy}`,
        sP = `keydown${s$}${sy}`,
        sI = `keyup${s$}${sy}`,
        sE = "show",
        sz = "dropup",
        sM = "dropend",
        sO = "dropstart",
        s0 = "dropup-center",
        sL = "dropdown-center",
        sH = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        s9 = `${sH}.${sE}`,
        sN = ".dropdown-menu",
        sW = ".navbar",
        sR = ".navbar-nav",
        sq = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        sj = w() ? "top-end" : "top-start",
        s3 = w() ? "top-start" : "top-end",
        sY = w() ? "bottom-end" : "bottom-start",
        sB = w() ? "bottom-start" : "bottom-end",
        s1 = w() ? "left-start" : "right-start",
        s7 = w() ? "right-start" : "left-start",
        sV = "top",
        s5 = "bottom",
        sK = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle"
        },
        sX = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)"
        };
    class sU extends G {
        constructor(t, e) {
            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = tm.next(this._element, sN)[0] || tm.prev(this._element, sN)[0] || tm.findOne(sN, this._parent), this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return sK
        }
        static get DefaultType() {
            return sX
        }
        static get NAME() {
            return s8
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (p(this._element) || this._isShown()) return;
            let t = {
                    relatedTarget: this._element
                },
                e = j.trigger(this._element, sS, t);
            if (!e.defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(sR))
                    for (let i of [].concat(...document.body.children)) j.on(i, "mouseover", g);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(sE), this._element.classList.add(sE), j.trigger(this._element, sT, t)
            }
        }
        hide() {
            if (p(this._element) || !this._isShown()) return;
            let t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _completeHide(t) {
            let e = j.trigger(this._element, sD, t);
            if (!e.defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                    for (let i of [].concat(...document.body.children)) j.off(i, "mouseover", g);
                this._popper && this._popper.destroy(), this._menu.classList.remove(sE), this._element.classList.remove(sE), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), j.trigger(this._element, sA, t)
            }
        }
        _getConfig(t) {
            if ("object" == typeof(t = super._getConfig(t)).reference && !c(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw TypeError(`${s8.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper() {
            if (void 0 === sv) throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : c(this._config.reference) ? t = u(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            let e = this._getPopperConfig();
            this._popper = sm(t, this._menu, e)
        }
        _isShown() {
            return this._menu.classList.contains(sE)
        }
        _getPlacement() {
            let t = this._parent;
            if (t.classList.contains(sM)) return s1;
            if (t.classList.contains(sO)) return s7;
            if (t.classList.contains(s0)) return sV;
            if (t.classList.contains(sL)) return s5;
            let e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains(sz) ? e ? s3 : sj : e ? sB : sY
        }
        _detectNavbar() {
            return null !== this._element.closest(sW)
        }
        _getOffset() {
            let {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
            let t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (U.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), { ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem({
            key: t,
            target: e
        }) {
            let i = tm.find(sq, this._menu).filter(t => d(t));
            i.length && k(i, e, t === sC, !i.includes(e)).focus()
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let e = sU.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
        static clearMenus(t) {
            if (t.button === sk || "keyup" === t.type && t.key !== s_) return;
            let e = tm.find(s9);
            for (let i of e) {
                let s = sU.getInstance(i);
                if (!s || !1 === s._config.autoClose) continue;
                let n = t.composedPath(),
                    o = n.includes(s._menu);
                if (n.includes(s._element) || "inside" === s._config.autoClose && !o || "outside" === s._config.autoClose && o || s._menu.contains(t.target) && ("keyup" === t.type && t.key === s_ || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                let r = {
                    relatedTarget: s._element
                };
                "click" === t.type && (r.clickEvent = t), s._completeHide(r)
            }
        }
        static dataApiKeydownHandler(t) {
            let e = /input|textarea/i.test(t.target.tagName),
                i = t.key === sw,
                s = [sx, sC].includes(t.key);
            if (!s && !i || e && !i) return;
            t.preventDefault();
            let n = this.matches(sH) ? this : tm.prev(this, sH)[0] || tm.next(this, sH)[0] || tm.findOne(sH, t.delegateTarget.parentNode),
                o = sU.getOrCreateInstance(n);
            if (s) {
                t.stopPropagation(), o.show(), o._selectMenuItem(t);
                return
            }
            o._isShown() && (t.stopPropagation(), o.hide(), n.focus())
        }
    }
    j.on(document, sP, sH, sU.dataApiKeydownHandler), j.on(document, sP, sN, sU.dataApiKeydownHandler), j.on(document, sF, sU.clearMenus), j.on(document, sI, sU.clearMenus), j.on(document, sF, sH, function(t) {
        t.preventDefault(), sU.getOrCreateInstance(this).toggle()
    }), _(sU);
    let s2 = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        s6 = ".sticky-top",
        s4 = "padding-right",
        sQ = "margin-right";
    class sZ {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            let t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            let t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, s4, e => e + t), this._setElementAttributes(s2, s4, e => e + t), this._setElementAttributes(s6, sQ, e => e - t)
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, s4), this._resetElementAttributes(s2, s4), this._resetElementAttributes(s6, sQ)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, i) {
            let s = this.getWidth(),
                n = t => {
                    if (t !== this._element && window.innerWidth > t.clientWidth + s) return;
                    this._saveInitialAttribute(t, e);
                    let n = window.getComputedStyle(t).getPropertyValue(e);
                    t.style.setProperty(e, `${i(Number.parseFloat(n))}px`)
                };
            this._applyManipulationCallback(t, n)
        }
        _saveInitialAttribute(t, e) {
            let i = t.style.getPropertyValue(e);
            i && U.setDataAttribute(t, e, i)
        }
        _resetElementAttributes(t, e) {
            let i = t => {
                let i = U.getDataAttribute(t, e);
                if (null === i) {
                    t.style.removeProperty(e);
                    return
                }
                U.removeDataAttribute(t, e), t.style.setProperty(e, i)
            };
            this._applyManipulationCallback(t, i)
        }
        _applyManipulationCallback(t, e) {
            if (c(t)) {
                e(t);
                return
            }
            for (let i of tm.find(t, this._element)) e(i)
        }
    }
    let sG = "backdrop",
        sJ = "fade",
        nt = "show",
        ne = `mousedown.bs.${sG}`,
        ni = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: !1,
            isVisible: !0,
            rootElement: "body"
        },
        ns = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)"
        };
    class nn extends Q {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }
        static get Default() {
            return ni
        }
        static get DefaultType() {
            return ns
        }
        static get NAME() {
            return sG
        }
        show(t) {
            if (!this._config.isVisible) {
                x(t);
                return
            }
            this._append();
            let e = this._getElement();
            this._config.isAnimated && m(e), e.classList.add(nt), this._emulateAnimation(() => {
                x(t)
            })
        }
        hide(t) {
            if (!this._config.isVisible) {
                x(t);
                return
            }
            this._getElement().classList.remove(nt), this._emulateAnimation(() => {
                this.dispose(), x(t)
            })
        }
        dispose() {
            this._isAppended && (j.off(this._element, ne), this._element.remove(), this._isAppended = !1)
        }
        _getElement() {
            if (!this._element) {
                let t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add(sJ), this._element = t
            }
            return this._element
        }
        _configAfterMerge(t) {
            return t.rootElement = u(t.rootElement), t
        }
        _append() {
            if (this._isAppended) return;
            let t = this._getElement();
            this._config.rootElement.append(t), j.on(t, ne, () => {
                x(this._config.clickCallback)
            }), this._isAppended = !0
        }
        _emulateAnimation(t) {
            C(t, this._getElement(), this._config.isAnimated)
        }
    }
    let no = "focustrap",
        nr = "bs.focustrap",
        na = `.${nr}`,
        nl = `focusin${na}`,
        nh = `keydown.tab${na}`,
        nc = "Tab",
        nu = "forward",
        nd = "backward",
        np = {
            autofocus: !0,
            trapElement: null
        },
        nf = {
            autofocus: "boolean",
            trapElement: "element"
        };
    class ng extends Q {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
        }
        static get Default() {
            return np
        }
        static get DefaultType() {
            return nf
        }
        static get NAME() {
            return no
        }
        activate() {
            !this._isActive && (this._config.autofocus && this._config.trapElement.focus(), j.off(document, na), j.on(document, nl, t => this._handleFocusin(t)), j.on(document, nh, t => this._handleKeydown(t)), this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1, j.off(document, na))
        }
        _handleFocusin(t) {
            let {
                trapElement: e
            } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            let i = tm.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === nd ? i[i.length - 1].focus() : i[0].focus()
        }
        _handleKeydown(t) {
            t.key === nc && (this._lastTabNavDirection = t.shiftKey ? nd : nu)
        }
    }
    let nm = "modal",
        nv = "bs.modal",
        n8 = `.${nv}`,
        nb = ".data-api",
        n$ = "Escape",
        ny = `hide${n8}`,
        nw = `hidePrevented${n8}`,
        n_ = `hidden${n8}`,
        nx = `show${n8}`,
        nC = `shown${n8}`,
        nk = `resize${n8}`,
        nD = `click.dismiss${n8}`,
        nA = `mousedown.dismiss${n8}`,
        nS = `keydown.dismiss${n8}`,
        nT = `click${n8}${nb}`,
        nF = "modal-open",
        nP = "fade",
        nI = "show",
        nE = "modal-static",
        nz = ".modal.show",
        nM = ".modal-dialog",
        nO = ".modal-body",
        n0 = '[data-bs-toggle="modal"]',
        nL = {
            backdrop: !0,
            focus: !0,
            keyboard: !0
        },
        nH = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean"
        };
    class n9 extends G {
        constructor(t, e) {
            super(t, e), this._dialog = tm.findOne(nM, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new sZ, this._addEventListeners()
        }
        static get Default() {
            return nL
        }
        static get DefaultType() {
            return nH
        }
        static get NAME() {
            return nm
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown || this._isTransitioning) return;
            let e = j.trigger(this._element, nx, {
                relatedTarget: t
            });
            !e.defaultPrevented && (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(nF), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)))
        }
        hide() {
            if (!this._isShown || this._isTransitioning) return;
            let t = j.trigger(this._element, ny);
            !t.defaultPrevented && (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(nI), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()))
        }
        dispose() {
            for (let t of [window, this._dialog]) j.off(t, n8);
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new nn({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new ng({
                trapElement: this._element
            })
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            let e = tm.findOne(nO, this._dialog);
            e && (e.scrollTop = 0), m(this._element), this._element.classList.add(nI);
            let i = () => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, j.trigger(this._element, nC, {
                    relatedTarget: t
                })
            };
            this._queueCallback(i, this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            j.on(this._element, nS, t => {
                if (t.key === n$) {
                    if (this._config.keyboard) {
                        t.preventDefault(), this.hide();
                        return
                    }
                    this._triggerBackdropTransition()
                }
            }), j.on(window, nk, () => {
                this._isShown && !this._isTransitioning && this._adjustDialog()
            }), j.on(this._element, nA, t => {
                j.one(this._element, nD, e => {
                    if (this._element === t.target && this._element === e.target) {
                        if ("static" === this._config.backdrop) {
                            this._triggerBackdropTransition();
                            return
                        }
                        this._config.backdrop && this.hide()
                    }
                })
            })
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
                document.body.classList.remove(nF), this._resetAdjustments(), this._scrollBar.reset(), j.trigger(this._element, n_)
            })
        }
        _isAnimated() {
            return this._element.classList.contains(nP)
        }
        _triggerBackdropTransition() {
            let t = j.trigger(this._element, nw);
            if (t.defaultPrevented) return;
            let e = this._element.scrollHeight > document.documentElement.clientHeight,
                i = this._element.style.overflowY;
            !("hidden" === i || this._element.classList.contains(nE)) && (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(nE), this._queueCallback(() => {
                this._element.classList.remove(nE), this._queueCallback(() => {
                    this._element.style.overflowY = i
                }, this._dialog)
            }, this._dialog), this._element.focus())
        }
        _adjustDialog() {
            let t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
            if (i && !t) {
                let s = w() ? "paddingLeft" : "paddingRight";
                this._element.style[s] = `${e}px`
            }
            if (!i && t) {
                let n = w() ? "paddingRight" : "paddingLeft";
                this._element.style[n] = `${e}px`
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                let i = n9.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            })
        }
    }
    j.on(document, nT, n0, function(t) {
        let e = a(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), j.one(e, nx, t => {
            !t.defaultPrevented && j.one(e, n_, () => {
                d(this) && this.focus()
            })
        });
        let i = tm.findOne(nz);
        i && n9.getInstance(i).hide();
        let s = n9.getOrCreateInstance(e);
        s.toggle(this)
    }), J(n9), _(n9);
    let nN = "offcanvas",
        nW = "bs.offcanvas",
        nR = `.${nW}`,
        nq = ".data-api",
        nj = `load${nR}${nq}`,
        n3 = "Escape",
        nY = "show",
        nB = "showing",
        n1 = "hiding",
        n7 = "offcanvas-backdrop",
        nV = ".offcanvas.show",
        n5 = `show${nR}`,
        nK = `shown${nR}`,
        nX = `hide${nR}`,
        nU = `hidePrevented${nR}`,
        n2 = `hidden${nR}`,
        n6 = `resize${nR}`,
        n4 = `click${nR}${nq}`,
        nQ = `keydown.dismiss${nR}`,
        nZ = '[data-bs-toggle="offcanvas"]',
        nG = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        nJ = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean"
        };
    class ot extends G {
        constructor(t, e) {
            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }
        static get Default() {
            return nG
        }
        static get DefaultType() {
            return nJ
        }
        static get NAME() {
            return nN
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            if (this._isShown) return;
            let e = j.trigger(this._element, n5, {
                relatedTarget: t
            });
            if (e.defaultPrevented) return;
            this._isShown = !0, this._backdrop.show(), this._config.scroll || new sZ().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(nB);
            let i = () => {
                (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(nY), this._element.classList.remove(nB), j.trigger(this._element, nK, {
                    relatedTarget: t
                })
            };
            this._queueCallback(i, this._element, !0)
        }
        hide() {
            if (!this._isShown) return;
            let t = j.trigger(this._element, nX);
            if (t.defaultPrevented) return;
            this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(n1), this._backdrop.hide();
            let e = () => {
                this._element.classList.remove(nY, n1), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new sZ().reset(), j.trigger(this._element, n2)
            };
            this._queueCallback(e, this._element, !0)
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        _initializeBackDrop() {
            let t = () => {
                    if ("static" === this._config.backdrop) {
                        j.trigger(this._element, nU);
                        return
                    }
                    this.hide()
                },
                e = Boolean(this._config.backdrop);
            return new nn({
                className: n7,
                isVisible: e,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: e ? t : null
            })
        }
        _initializeFocusTrap() {
            return new ng({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            j.on(this._element, nQ, t => {
                if (t.key === n3) {
                    if (!this._config.keyboard) {
                        j.trigger(this._element, nU);
                        return
                    }
                    this.hide()
                }
            })
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let e = ot.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    j.on(document, n4, nZ, function(t) {
        let e = a(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), p(this)) return;
        j.one(e, n2, () => {
            d(this) && this.focus()
        });
        let i = tm.findOne(nV);
        i && i !== e && ot.getInstance(i).hide();
        let s = ot.getOrCreateInstance(e);
        s.toggle(this)
    }), j.on(window, nj, () => {
        for (let t of tm.find(nV)) ot.getOrCreateInstance(t).show()
    }), j.on(window, n6, () => {
        for (let t of tm.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && ot.getOrCreateInstance(t).hide()
    }), J(ot), _(ot);
    let oe = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        oi = /^aria-[\w-]*$/i,
        os = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        on = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        oo = (t, e) => {
            let i = t.nodeName.toLowerCase();
            return e.includes(i) ? !oe.has(i) || Boolean(os.test(t.nodeValue) || on.test(t.nodeValue)) : e.filter(t => t instanceof RegExp).some(t => t.test(i))
        },
        or = {
            "*": ["class", "dir", "id", "lang", "role", oi],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        };

    function oa(t, e, i) {
        if (!t.length) return t;
        if (i && "function" == typeof i) return i(t);
        let s = new window.DOMParser,
            n = s.parseFromString(t, "text/html"),
            o = [].concat(...n.body.querySelectorAll("*"));
        for (let r of o) {
            let a = r.nodeName.toLowerCase();
            if (!Object.keys(e).includes(a)) {
                r.remove();
                continue
            }
            let l = [].concat(...r.attributes),
                h = [].concat(e["*"] || [], e[a] || []);
            for (let c of l) oo(c, h) || r.removeAttribute(c.nodeName)
        }
        return n.body.innerHTML
    }
    let ol = "TemplateFactory",
        oh = {
            allowList: or,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>"
        },
        oc = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string"
        },
        ou = {
            entry: "(string|element|function|null)",
            selector: "(string|element)"
        };
    class od extends Q {
        constructor(t) {
            super(), this._config = this._getConfig(t)
        }
        static get Default() {
            return oh
        }
        static get DefaultType() {
            return oc
        }
        static get NAME() {
            return ol
        }
        getContent() {
            return Object.values(this._config.content).map(t => this._resolvePossibleFunction(t)).filter(Boolean)
        }
        hasContent() {
            return this.getContent().length > 0
        }
        changeContent(t) {
            return this._checkContent(t), this._config.content = { ...this._config.content,
                ...t
            }, this
        }
        toHtml() {
            let t = document.createElement("div");
            for (let [e, i] of (t.innerHTML = this._maybeSanitize(this._config.template), Object.entries(this._config.content))) this._setContent(t, i, e);
            let s = t.children[0],
                n = this._resolvePossibleFunction(this._config.extraClass);
            return n && s.classList.add(...n.split(" ")), s
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content)
        }
        _checkContent(t) {
            for (let [e, i] of Object.entries(t)) super._typeCheckConfig({
                selector: e,
                entry: i
            }, ou)
        }
        _setContent(t, e, i) {
            let s = tm.findOne(i, t);
            if (s) {
                if (!(e = this._resolvePossibleFunction(e))) {
                    s.remove();
                    return
                }
                if (c(e)) {
                    this._putElementInTemplate(u(e), s);
                    return
                }
                if (this._config.html) {
                    s.innerHTML = this._maybeSanitize(e);
                    return
                }
                s.textContent = e
            }
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? oa(t, this._config.allowList, this._config.sanitizeFn) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t(this) : t
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) {
                e.innerHTML = "", e.append(t);
                return
            }
            e.textContent = t.textContent
        }
    }
    let op = "tooltip",
        of = new Set(["sanitize", "allowList", "sanitizeFn"]),
        og = "fade",
        om = "modal",
        ov = "show",
        o8 = ".tooltip-inner",
        ob = `.${om}`,
        o$ = "hide.bs.modal",
        oy = "hover",
        ow = "focus",
        o_ = "click",
        ox = "manual",
        oC = "hide",
        ok = "hidden",
        oD = "show",
        oA = "shown",
        oS = "inserted",
        oT = "click",
        oF = "focusin",
        oP = "focusout",
        oI = "mouseenter",
        oE = "mouseleave",
        oz = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: w() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: w() ? "right" : "left"
        },
        oM = {
            allowList: or,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 0],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus"
        },
        oO = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string"
        };
    class o0 extends G {
        constructor(t, e) {
            if (void 0 === sv) throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
        }
        static get Default() {
            return oM
        }
        static get DefaultType() {
            return oO
        }
        static get NAME() {
            return op
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle() {
            if (this._isEnabled) {
                if (this._activeTrigger.click = !this._activeTrigger.click, this._isShown()) {
                    this._leave();
                    return
                }
                this._enter()
            }
        }
        dispose() {
            clearTimeout(this._timeout), j.off(this._element.closest(ob), o$, this._hideModalHandler), this.tip && this.tip.remove(), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
        }
        show() {
            if ("none" === this._element.style.display) throw Error("Please use show on visible elements");
            if (!(this._isWithContent() && this._isEnabled)) return;
            let t = j.trigger(this._element, this.constructor.eventName(oD)),
                e = f(this._element),
                i = (e || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !i) return;
            this.tip && (this.tip.remove(), this.tip = null);
            let s = this._getTipElement();
            this._element.setAttribute("aria-describedby", s.getAttribute("id"));
            let {
                container: n
            } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(s), j.trigger(this._element, this.constructor.eventName(oS))), this._popper ? this._popper.update() : this._popper = this._createPopper(s), s.classList.add(ov), "ontouchstart" in document.documentElement)
                for (let o of [].concat(...document.body.children)) j.on(o, "mouseover", g);
            let r = () => {
                j.trigger(this._element, this.constructor.eventName(oA)), !1 === this._isHovered && this._leave(), this._isHovered = !1
            };
            this._queueCallback(r, this.tip, this._isAnimated())
        }
        hide() {
            if (!this._isShown()) return;
            let t = j.trigger(this._element, this.constructor.eventName(oC));
            if (t.defaultPrevented) return;
            let e = this._getTipElement();
            if (e.classList.remove(ov), "ontouchstart" in document.documentElement)
                for (let i of [].concat(...document.body.children)) j.off(i, "mouseover", g);
            this._activeTrigger[o_] = !1, this._activeTrigger[ow] = !1, this._activeTrigger[oy] = !1, this._isHovered = null;
            let s = () => {
                !this._isWithActiveTrigger() && (this._isHovered || e.remove(), this._element.removeAttribute("aria-describedby"), j.trigger(this._element, this.constructor.eventName(ok)), this._disposePopper())
            };
            this._queueCallback(s, this.tip, this._isAnimated())
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
        }
        _createTipElement(t) {
            let e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(og, ov), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            let i = n(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(og), e
        }
        setContent(t) {
            this._newContent = t, this._isShown() && (this._disposePopper(), this.show())
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new od({ ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory
        }
        _getContentForTemplate() {
            return {
                [o8]: this._getTitle()
            }
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(og)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(ov)
        }
        _createPopper(t) {
            let e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement,
                i = oz[e.toUpperCase()];
            return sm(this._element, t, this._getPopperConfig(i))
        }
        _getOffset() {
            let {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map(t => Number.parseInt(t, 10)) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }
        _getPopperConfig(t) {
            let e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: t => {
                        this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                    }
                }]
            };
            return { ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _setListeners() {
            let t = this._config.trigger.split(" ");
            for (let e of t)
                if ("click" === e) j.on(this._element, this.constructor.eventName(oT), this._config.selector, t => {
                    let e = this._initializeOnDelegatedTarget(t);
                    e.toggle()
                });
                else if (e !== ox) {
                let i = e === oy ? this.constructor.eventName(oI) : this.constructor.eventName(oF),
                    s = e === oy ? this.constructor.eventName(oE) : this.constructor.eventName(oP);
                j.on(this._element, i, this._config.selector, t => {
                    let e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? ow : oy] = !0, e._enter()
                }), j.on(this._element, s, this._config.selector, t => {
                    let e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? ow : oy] = e._element.contains(t.relatedTarget), e._leave()
                })
            }
            this._hideModalHandler = () => {
                this._element && this.hide()
            }, j.on(this._element.closest(ob), o$, this._hideModalHandler)
        }
        _fixTitle() {
            let t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"))
        }
        _enter() {
            if (this._isShown() || this._isHovered) {
                this._isHovered = !0;
                return
            }
            this._isHovered = !0, this._setTimeout(() => {
                this._isHovered && this.show()
            }, this._config.delay.show)
        }
        _leave() {
            !this._isWithActiveTrigger() && (this._isHovered = !1, this._setTimeout(() => {
                this._isHovered || this.hide()
            }, this._config.delay.hide))
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(t) {
            let e = U.getDataAttributes(this._element);
            for (let i of Object.keys(e)) of .has(i) && delete e[i];
            return t = { ...e,
                ..."object" == typeof t && t ? t : {}
            }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : u(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t
        }
        _getDelegateConfig() {
            let t = {};
            for (let e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t.selector = !1, t.trigger = "manual", t
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null)
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let e = o0.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    _(o0);
    let oL = "popover",
        oH = ".popover-header",
        o9 = ".popover-body",
        oN = { ...o0.Default,
            content: "",
            offset: [0, 8],
            placement: "right",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click"
        },
        oW = { ...o0.DefaultType,
            content: "(null|string|element|function)"
        };
    class oR extends o0 {
        static get Default() {
            return oN
        }
        static get DefaultType() {
            return oW
        }
        static get NAME() {
            return oL
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                [oH]: this._getTitle(),
                [o9]: this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let e = oR.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    _(oR);
    let oq = "scrollspy",
        oj = "bs.scrollspy",
        o3 = `.${oj}`,
        oY = ".data-api",
        oB = `activate${o3}`,
        o1 = `click${o3}`,
        o7 = `load${o3}${oY}`,
        oV = "dropdown-item",
        o5 = "active",
        oK = '[data-bs-spy="scroll"]',
        oX = "[href]",
        oU = ".nav, .list-group",
        o2 = ".nav-link",
        o6 = ".nav-item",
        o4 = ".list-group-item",
        oQ = `${o2}, ${o6} > ${o2}, ${o4}`,
        oZ = ".dropdown",
        oG = ".dropdown-toggle",
        oJ = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null,
            threshold: [.1, .5, 1]
        },
        rt = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array"
        };
    class re extends G {
        constructor(t, e) {
            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh()
        }
        static get Default() {
            return oJ
        }
        static get DefaultType() {
            return rt
        }
        static get NAME() {
            return oq
        }
        refresh() {
            for (let t of (this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver(), this._observableSections.values())) this._observer.observe(t)
        }
        dispose() {
            this._observer.disconnect(), super.dispose()
        }
        _configAfterMerge(t) {
            return t.target = u(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map(t => Number.parseFloat(t))), t
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (j.off(this._config.target, o1), j.on(this._config.target, o1, oX, t => {
                let e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    let i = this._rootElement || window,
                        s = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo) {
                        i.scrollTo({
                            top: s,
                            behavior: "smooth"
                        });
                        return
                    }
                    i.scrollTop = s
                }
            }))
        }
        _getNewObserver() {
            let t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver(t => this._observerCallback(t), t)
        }
        _observerCallback(t) {
            let e = t => this._targetLinks.get(`#${t.target.id}`),
                i = t => {
                    this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t))
                },
                s = (this._rootElement || document.documentElement).scrollTop,
                n = s >= this._previousScrollData.parentScrollTop;
            for (let o of (this._previousScrollData.parentScrollTop = s, t)) {
                if (!o.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(e(o));
                    continue
                }
                let r = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (n && r) {
                    if (i(o), !s) return;
                    continue
                }
                n || r || i(o)
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            let t = tm.find(oX, this._config.target);
            for (let e of t) {
                if (!e.hash || p(e)) continue;
                let i = tm.findOne(e.hash, this._element);
                d(i) && (this._targetLinks.set(e.hash, e), this._observableSections.set(e.hash, i))
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(o5), this._activateParents(t), j.trigger(this._element, oB, {
                relatedTarget: t
            }))
        }
        _activateParents(t) {
            if (t.classList.contains(oV)) {
                tm.findOne(oG, t.closest(oZ)).classList.add(o5);
                return
            }
            for (let e of tm.parents(t, oU))
                for (let i of tm.prev(e, oQ)) i.classList.add(o5)
        }
        _clearActiveClass(t) {
            t.classList.remove(o5);
            let e = tm.find(`${oX}.${o5}`, t);
            for (let i of e) i.classList.remove(o5)
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let e = re.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    j.on(window, o7, () => {
        for (let t of tm.find(oK)) re.getOrCreateInstance(t)
    }), _(re);
    let ri = "tab",
        rs = "bs.tab",
        rn = `.${rs}`,
        ro = `hide${rn}`,
        rr = `hidden${rn}`,
        ra = `show${rn}`,
        rl = `shown${rn}`,
        rh = `click${rn}`,
        rc = `keydown${rn}`,
        ru = `load${rn}`,
        rd = "ArrowLeft",
        rp = "ArrowRight",
        rf = "ArrowUp",
        rg = "ArrowDown",
        rm = "active",
        rv = "fade",
        r8 = "show",
        rb = "dropdown",
        r$ = ".dropdown-toggle",
        ry = ".dropdown-menu",
        rw = ":not(.dropdown-toggle)",
        r_ = '.list-group, .nav, [role="tablist"]',
        rx = ".nav-item, .list-group-item",
        rC = `.nav-link${rw}, .list-group-item${rw}, [role="tab"]${rw}`,
        rk = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        rD = `${rC}, ${rk}`,
        rA = `.${rm}[data-bs-toggle="tab"], .${rm}[data-bs-toggle="pill"], .${rm}[data-bs-toggle="list"]`;
    class rS extends G {
        constructor(t) {
            if (super(t), this._parent = this._element.closest(r_), !this._parent) return;
            this._setInitialAttributes(this._parent, this._getChildren()), j.on(this._element, rc, t => this._keydown(t))
        }
        static get NAME() {
            return ri
        }
        show() {
            let t = this._element;
            if (this._elemIsActive(t)) return;
            let e = this._getActiveElem(),
                i = e ? j.trigger(e, ro, {
                    relatedTarget: t
                }) : null,
                s = j.trigger(t, ra, {
                    relatedTarget: e
                });
            !s.defaultPrevented && (!i || !i.defaultPrevented) && (this._deactivate(e, t), this._activate(t, e))
        }
        _activate(t, e) {
            if (!t) return;
            t.classList.add(rm), this._activate(a(t));
            let i = () => {
                if ("tab" !== t.getAttribute("role")) {
                    t.classList.add(r8);
                    return
                }
                t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), j.trigger(t, rl, {
                    relatedTarget: e
                })
            };
            this._queueCallback(i, t, t.classList.contains(rv))
        }
        _deactivate(t, e) {
            if (!t) return;
            t.classList.remove(rm), t.blur(), this._deactivate(a(t));
            let i = () => {
                if ("tab" !== t.getAttribute("role")) {
                    t.classList.remove(r8);
                    return
                }
                t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), j.trigger(t, rr, {
                    relatedTarget: e
                })
            };
            this._queueCallback(i, t, t.classList.contains(rv))
        }
        _keydown(t) {
            if (![rd, rp, rf, rg].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            let e = [rp, rg].includes(t.key),
                i = k(this._getChildren().filter(t => !p(t)), t.target, e, !0);
            i && (i.focus({
                preventScroll: !0
            }), rS.getOrCreateInstance(i).show())
        }
        _getChildren() {
            return tm.find(rD, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find(t => this._elemIsActive(t)) || null
        }
        _setInitialAttributes(t, e) {
            for (let i of (this._setAttributeIfNotExists(t, "role", "tablist"), e)) this._setInitialAttributesOnChild(i)
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            let e = this._elemIsActive(t),
                i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
        }
        _setInitialAttributesOnTargetPanel(t) {
            let e = a(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`))
        }
        _toggleDropDown(t, e) {
            let i = this._getOuterElement(t);
            if (!i.classList.contains(rb)) return;
            let s = (t, s) => {
                let n = tm.findOne(t, i);
                n && n.classList.toggle(s, e)
            };
            s(r$, rm), s(ry, r8), i.setAttribute("aria-expanded", e)
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i)
        }
        _elemIsActive(t) {
            return t.classList.contains(rm)
        }
        _getInnerElement(t) {
            return t.matches(rD) ? t : tm.findOne(rD, t)
        }
        _getOuterElement(t) {
            return t.closest(rx) || t
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let e = rS.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw TypeError(`No method named "${t}"`);
                    e[t]()
                }
            })
        }
    }
    j.on(document, rh, rk, function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), !p(this) && rS.getOrCreateInstance(this).show()
    }), j.on(window, ru, () => {
        for (let t of tm.find(rA)) rS.getOrCreateInstance(t)
    }), _(rS);
    let rT = "toast",
        rF = "bs.toast",
        rP = `.${rF}`,
        rI = `mouseover${rP}`,
        rE = `mouseout${rP}`,
        rz = `focusin${rP}`,
        rM = `focusout${rP}`,
        rO = `hide${rP}`,
        r0 = `hidden${rP}`,
        rL = `show${rP}`,
        rH = `shown${rP}`,
        r9 = "fade",
        rN = "hide",
        rW = "show",
        rR = "showing",
        rq = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        rj = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class r3 extends G {
        constructor(t, e) {
            super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }
        static get Default() {
            return rj
        }
        static get DefaultType() {
            return rq
        }
        static get NAME() {
            return rT
        }
        show() {
            let t = j.trigger(this._element, rL);
            if (t.defaultPrevented) return;
            this._clearTimeout(), this._config.animation && this._element.classList.add(r9);
            let e = () => {
                this._element.classList.remove(rR), j.trigger(this._element, rH), this._maybeScheduleHide()
            };
            this._element.classList.remove(rN), m(this._element), this._element.classList.add(rW, rR), this._queueCallback(e, this._element, this._config.animation)
        }
        hide() {
            if (!this.isShown()) return;
            let t = j.trigger(this._element, rO);
            if (t.defaultPrevented) return;
            let e = () => {
                this._element.classList.add(rN), this._element.classList.remove(rR, rW), j.trigger(this._element, r0)
            };
            this._element.classList.add(rR), this._queueCallback(e, this._element, this._config.animation)
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(rW), super.dispose()
        }
        isShown() {
            return this._element.classList.contains(rW)
        }
        _maybeScheduleHide() {
            this._config.autohide && !this._hasMouseInteraction && !this._hasKeyboardInteraction && (this._timeout = setTimeout(() => {
                this.hide()
            }, this._config.delay))
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e
            }
            if (e) {
                this._clearTimeout();
                return
            }
            let i = t.relatedTarget;
            !(this._element === i || this._element.contains(i)) && this._maybeScheduleHide()
        }
        _setListeners() {
            j.on(this._element, rI, t => this._onInteraction(t, !0)), j.on(this._element, rE, t => this._onInteraction(t, !1)), j.on(this._element, rz, t => this._onInteraction(t, !0)), j.on(this._element, rM, t => this._onInteraction(t, !1))
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let e = r3.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            })
        }
    }
    J(r3), _(r3);
    let rY = {
        Alert: ta,
        Button: tg,
        Carousel: es,
        Collapse: eC,
        Dropdown: sU,
        Modal: n9,
        Offcanvas: ot,
        Popover: oR,
        ScrollSpy: re,
        Tab: rS,
        Toast: r3,
        Tooltip: o0
    };
    return rY
}),
function(t, e, i, s) {
    function n(e, i) {
        this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
            this._handlers[i] = t.proxy(this[i], this)
        }, this)), t.each(n.Plugins, t.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), t.each(n.Workers, t.proxy(function(e, i) {
            this._pipe.push({
                filter: i.filter,
                run: t.proxy(i.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    n.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, n.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, n.Type = {
        Event: "event",
        State: "state"
    }, n.Plugins = {}, n.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                s = this.settings.rtl,
                n = {
                    width: "auto",
                    "margin-left": s ? e : "",
                    "margin-right": s ? "" : e
                };
            i || this.$stage.children().css(n), t.css = n
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                s = this._items.length,
                n = !this.settings.autoWidth,
                o = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; s--;) i = this._mergers[s], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[s] = n ? e * i : this._items[s].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = [],
                i = this._items,
                s = this.settings,
                n = Math.max(2 * s.items, 4),
                o = 2 * Math.ceil(i.length / 2),
                r = s.loop && i.length ? s.rewind ? n : Math.max(n, o) : 0,
                a = "",
                l = "";
            for (r /= 2; r--;) e.push(this.normalize(e.length / 2, !0)), a += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l;
            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, n = 0, o = []; ++i < e;) s = o[i - 1] || 0, o.push(s + (n = this._widths[this.relative(i)] + this.settings.margin) * t);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                s = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], s.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, s.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, s, n = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o,
                a = r + this.width() * n,
                l = [];
            for (i = 0, s = this._coordinates.length; i < s; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], n.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var e, i, n;
            e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s, n = this.$element.children(i).width(), e.length && n <= 0 && this.preloadAutoWidthImages(e)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, n.prototype.setup = function() {
        var e = this.viewport(),
            i = this.options.responsive,
            s = -1,
            n = null;
        i ? (t.each(i, function(t) {
            t <= e && t > s && (s = Number(t))
        }), "function" == typeof(n = t.extend({}, this.options, i[s])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + s))) : n = t.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: n
            }
        }), this._breakpoint = s, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, n.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, n.prototype.prepare = function(e) {
        var i = this.trigger("prepare", {
            content: e
        });
        return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
            content: i.data
        }), i.data
    }, n.prototype.update = function() {
        for (var e = 0, i = this._pipe.length, s = t.proxy(function(t) {
                return this[t]
            }, this._invalidated), n = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, s).length > 0) && this._pipe[e].run(n), e++;
        this._invalidated = {}, this.is("valid") || this.enter("valid")
    }, n.prototype.width = function(t) {
        switch (t = t || n.Width.Default) {
            case n.Width.Inner:
            case n.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, n.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, n.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, n.prototype.onResize = function() {
        return !!(this._items.length && this._width !== this.$element.width() && this.$element.is(":visible")) && ((this.enter("resizing"), this.trigger("resize").isDefaultPrevented()) ? (this.leave("resizing"), !1) : void(this.invalidate("width"), this.refresh(), this.leave("resizing"), this.trigger("resized")))
    }, n.prototype.registerEventHandlers = function() {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }, n.prototype.onDragStart = function(e) {
        var s = null;
        3 !== e.which && (t.support.transform ? s = {
            x: (s = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === s.length ? 12 : 4],
            y: s[16 === s.length ? 13 : 5]
        } : (s = this.$stage.position(), s = {
            x: this.settings.rtl ? s.left + this.$stage.width() - this.width() + this.settings.margin : s.left,
            y: s.top
        }), this.is("animating") && (t.support.transform ? this.animate(s.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = t(e.target), this._drag.stage.start = s, this._drag.stage.current = s, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
            var s = this.difference(this._drag.pointer, this.pointer(e));
            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), !(Math.abs(s.x) < Math.abs(s.y) && this.is("valid")) && (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, n.prototype.onDragMove = function(t) {
        var e = null,
            i = null,
            s = null,
            n = this.difference(this._drag.pointer, this.pointer(t)),
            o = this.difference(this._drag.stage.start, n);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), s = this.settings.pullDrag ? -1 * n.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + s), i + s)), this._drag.stage.current = o, this.animate(o.x))
    }, n.prototype.onDragEnd = function(e) {
        var s = this.difference(this._drag.pointer, this.pointer(e)),
            n = this._drag.stage.current,
            o = s.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== s.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== s.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(s.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, n.prototype.closest = function(e, i) {
        var s = -1,
            n = 30,
            o = this.width(),
            r = this.coordinates();
        return this.settings.freeDrag || t.each(r, t.proxy(function(t, a) {
            return "left" === i && e > a - n && e < a + n ? s = t : "right" === i && e > a - o - n && e < a - o + n ? s = t + 1 : this.op(e, "<", a) && this.op(e, ">", r[t + 1] || a - o) && (s = "left" === i ? t + 1 : t), -1 === s
        }, this)), !this.settings.loop && (this.op(e, ">", r[this.minimum()]) ? s = e = this.minimum() : this.op(e, "<", r[this.maximum()]) && (s = e = this.maximum())), s
    }, n.prototype.animate = function(e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : i ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }, n.prototype.is = function(t) {
        return this._states.current[t] && this._states.current[t] > 0
    }, n.prototype.current = function(t) {
        if (t === s) return this._current;
        if (0 !== this._items.length) {
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                s !== e.data && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }
    }, n.prototype.invalidate = function(e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
            return e
        })
    }, n.prototype.reset = function(t) {
        s !== (t = this.normalize(t)) && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, n.prototype.normalize = function(t, e) {
        var i = this._items.length,
            n = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = s : (t < 0 || t >= i + n) && (t = ((t - n / 2) % i + i) % i + n / 2), t
    }, n.prototype.relative = function(t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, n.prototype.maximum = function(t) {
        var e, i, s, n = this.settings,
            o = this._coordinates.length;
        if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
        else if (n.autoWidth || n.merge) {
            for (e = this._items.length, i = this._items[--e].width(), s = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > s););
            o = e + 1
        } else o = n.center ? this._items.length - 1 : this._items.length - n.items;
        return t && (o -= this._clones.length / 2), Math.max(o, 0)
    }, n.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, n.prototype.items = function(t) {
        return t === s ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, n.prototype.mergers = function(t) {
        return t === s ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, n.prototype.clones = function(e) {
        var i = this._clones.length / 2,
            n = i + this._items.length,
            o = function(t) {
                return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2
            };
        return e === s ? t.map(this._clones, function(t, e) {
            return o(e)
        }) : t.map(this._clones, function(t, i) {
            return t === e ? o(i) : null
        })
    }, n.prototype.speed = function(t) {
        return t !== s && (this._speed = t), this._speed
    }, n.prototype.coordinates = function(e) {
        var i, n = 1,
            o = e - 1;
        return e === s ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (n = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * n) : i = this._coordinates[o] || 0, i = Math.ceil(i))
    }, n.prototype.duration = function(t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, n.prototype.to = function(t, e) {
        var i = this.current(),
            s = null,
            n = t - this.relative(i),
            o = (n > 0) - (n < 0),
            r = this._items.length,
            a = this.minimum(),
            l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r), (s = (((t = i + n) - a) % r + r) % r + a) !== t && s - n <= l && s - n > 0 && (i = s - n, t = s, this.reset(i))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
    }, n.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, n.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, n.prototype.onTransitionEnd = function(t) {
        if (t !== s && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, n.prototype.viewport = function() {
        var s;
        if (this.options.responsiveBaseElement !== e) s = t(this.options.responsiveBaseElement).width();
        else if (e.innerWidth) s = e.innerWidth;
        else if (i.documentElement && i.documentElement.clientWidth) s = i.documentElement.clientWidth;
        else throw "Can not detect viewport width.";
        return s
    }, n.prototype.replace = function(e) {
        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, n.prototype.add = function(e, i) {
        var n = this.relative(this._current);
        i = i === s ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
            content: e,
            position: i
        }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
            content: e,
            position: i
        })
    }, n.prototype.remove = function(t) {
        s !== (t = this.normalize(t, !0)) && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, n.prototype.preloadAutoWidthImages = function(e) {
        e.each(t.proxy(function(e, i) {
            this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) {
                i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, n.prototype.destroy = function() {
        for (var s in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[s].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, n.prototype.op = function(t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
            case "<":
                return s ? t > i : t < i;
            case ">":
                return s ? t < i : t > i;
            case ">=":
                return s ? t <= i : t >= i;
            case "<=":
                return s ? t >= i : t <= i
        }
    }, n.prototype.on = function(t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, n.prototype.off = function(t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, n.prototype.trigger = function(e, i, s, o, r) {
        var a = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            l = t.camelCase(t.grep(["on", e, s], function(t) {
                return t
            }).join("-").toLowerCase()),
            h = t.Event([e, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
                relatedTarget: this
            }, a, i));
        return !this._supress[e] && (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(h)
        }), this.register({
            type: n.Type.Event,
            name: e
        }), this.$element.trigger(h), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, h)), h
    }, n.prototype.enter = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            s === this._states.current[e] && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, n.prototype.leave = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e]--
        }, this))
    }, n.prototype.register = function(e) {
        if (e.type === n.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                var i = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function(t) {
                    return i && i.apply && (!t.namespace || -1 === t.namespace.indexOf("owl")) ? i.apply(this, arguments) : t.namespace && t.namespace.indexOf("owl") > -1
                }, t.event.special[e.name].owl = !0
            }
        } else e.type === n.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, s) {
            return t.inArray(i, this._states.tags[e.name]) === s
        }, this)))
    }, n.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, n.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, n.prototype.pointer = function(t) {
        var i = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i
    }, n.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }, n.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, t.fn.owlCarousel = function(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var s = t(this),
                o = s.data("owl.carousel");
            o || (o = new n(this, "object" == typeof e && e), s.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                o.register({
                    type: n.Type.Event,
                    name: i
                }), o.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, o))
            })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i)
        })
    }, t.fn.owlCarousel.Constructor = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, n.prototype.watch = function() {
        !this._interval && (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, n.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, n.prototype.destroy = function() {
        var t, i;
        for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var i = this._core.settings, s = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && -1 * s || 0, o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + n, r = this._core.clones().length, a = t.proxy(function(t, e) {
                            this.load(e)
                        }, this); n++ < s;) this.load(r / 2 + this._core.relative(o)), r && t.each(this._core.clones(this._core.relative(o)), a), o++
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        lazyLoad: !1
    }, n.prototype.load = function(i) {
        var s = this._core.$stage.children().eq(i),
            n = s && s.find(".owl-lazy");
        !(!n || t.inArray(s.get(0), this._loaded) > -1) && (n.each(t.proxy(function(i, s) {
            var n, o = t(s),
                r = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
            this._core.trigger("load", {
                element: o,
                url: r
            }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                o.css("opacity", 1), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this)).attr("src", r) : ((n = new Image).onload = t.proxy(function() {
                o.css({
                    "background-image": "url(" + r + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: o,
                    url: r
                }, "lazy")
            }, this), n.src = r)
        }, this)), this._loaded.push(s.get(0)))
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Lazy = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, n.prototype.update = function() {
        var e = this._core._current,
            i = e + this._core.settings.items,
            s = this._core.$stage.children().toArray().slice(e, i),
            n = [],
            o = 0;
        t.each(s, function(e, i) {
            n.push(t(i).height())
        }), o = Math.max.apply(null, n), this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                }
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    n.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, n.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            n = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (r) {
            if ((s = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
            else if (s[3].indexOf("vimeo") > -1) i = "vimeo";
            else if (s[3].indexOf("vzaar") > -1) i = "vzaar";
            else throw Error("Video URL not supported.");
            s = s[6]
        } else throw Error("Missing video URL.");
        this._videos[r] = {
            type: i,
            id: s,
            width: n,
            height: o
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, n.prototype.thumbnail = function(e, i) {
        var s, n, o, r = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            a = e.find("img"),
            l = "src",
            h = "",
            c = this._core.settings,
            u = function(t) {
                n = '<div class="owl-video-play-icon"></div>', s = c.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(s), e.after(n)
            };
        if (e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (l = "data-src", h = "owl-lazy"), a.length) return u(a.attr(l)), a.remove(), !1;
        "youtube" === i.type ? u(o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg") : "vimeo" === i.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                u(o = t[0].thumbnail_large)
            }
        }) : "vzaar" === i.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                u(o = t.framegrab_url)
            }
        })
    }, n.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, n.prototype.play = function(e) {
        var i, s = t(e.target).closest("." + this._core.settings.itemClass),
            n = this._videos[s.attr("data-video")],
            o = n.width || "100%",
            r = n.height || this._core.$stage.height();
        !this._playing && (this._core.enter("playing"), this._core.trigger("play", null, "video"), s = this._core.items(this._core.relative(s.index())), this._core.reset(s.index()), "youtube" === n.type ? i = '<iframe width="' + o + '" height="' + r + '" src="//www.youtube.com/embed/' + n.id + "?autoplay=1&v=" + n.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === n.type ? i = '<iframe src="//player.vimeo.com/video/' + n.id + '?autoplay=1" width="' + o + '" height="' + r + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === n.type && (i = '<iframe frameborder="0"height="' + r + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + n.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(s.find(".owl-video")), this._playing = s.addClass("owl-video-playing"))
    }, n.prototype.isInFullScreen = function() {
        var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Video = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = s, this.next = s, this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": t.proxy(function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    n.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, n.prototype.swap = function() {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, i = t.proxy(this.clear, this),
                s = this.core.$stage.children().eq(this.previous),
                n = this.core.$stage.children().eq(this.next),
                o = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
            this.core.current() !== this.previous && (r && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), s.one(t.support.animation.end, i).css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(r)), o && n.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
        }
    }, n.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Animate = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = function(e) {
        this._core = e, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, i) {
                t.namespace && this.play(e, i)
            }, this),
            "stop.owl.autoplay": t.proxy(function(t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, n.Defaults, this._core.options)
    };
    n.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, n.prototype.play = function(t, e) {
        this._paused = !1, !this._core.is("rotating") && (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, n.prototype._getNextTimeout = function(s, n) {
        return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function() {
            !(this._paused || this._core.is("busy") || this._core.is("interacting")) && !i.hidden && this._core.next(n || this._core.settings.autoplaySpeed)
        }, this), s || this._core.settings.autoplayTimeout)
    }, n.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }, n.prototype.stop = function() {
        this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, n.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.autoplay = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    "use strict";
    var n = function(e) {
        this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    n.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, n.prototype.initialize = function() {
        var e, i = this._core.settings;
        for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function(e) {
                var s = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(s, i.dotsSpeed)
            }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
    }, n.prototype.destroy = function() {
        var t, e, i, s;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, n.prototype.update = function() {
        var t, e, i, s = this._core.clones().length / 2,
            n = s + this._core.items().length,
            o = this._core.maximum(!0),
            r = this._core.settings,
            a = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
        if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
            for (this._pages = [], t = s, e = 0, i = 0; t < n; t++) {
                if (e >= a || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(o, t - s),
                            end: t - s + a - 1
                        }), Math.min(o, t - s) === o) break;
                    e = 0, ++i
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, n.prototype.draw = function() {
        var e, i = this._core.settings,
            s = this._core.items().length <= i.items,
            n = this._core.relative(this._core.current()),
            o = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || s), i.nav && (this._controls.$previous.toggleClass("disabled", !o && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || s), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }, n.prototype.onTrigger = function(e) {
        var i = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, n.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function(t, i) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }, n.prototype.getPosition = function(e) {
        var i, s, n = this._core.settings;
        return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), s = this._pages.length, e ? ++i : --i, i = this._pages[(i % s + s) % s].start) : (i = this._core.relative(this._core.current()), s = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
    }, n.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }, n.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }, n.prototype.to = function(e, i, s) {
        var n;
        !s && this._pages.length ? (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
    }, t.fn.owlCarousel.Constructor.Plugins.Navigation = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    "use strict";
    var n = function(i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": t.proxy(function(i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    i && (this._hashes[i] = e.content)
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(i) {
                if (i.namespace && "position" === i.property.name) {
                    var s = this._core.items(this._core.relative(this._core.current())),
                        n = t.map(this._hashes, function(t, e) {
                            return t === s ? e : null
                        }).join();
                    n && e.location.hash.slice(1) !== n && (e.location.hash = n)
                }
            }, this)
        }, this._core.options = t.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
            var i = e.location.hash.substring(1),
                s = this._core.$stage.children(),
                n = this._hashes[i] && s.index(this._hashes[i]);
            void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
        }, this))
    };
    n.Defaults = {
        URLhashListener: !1
    }, n.prototype.destroy = function() {
        var i, s;
        for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (s in Object.getOwnPropertyNames(this)) "function" != typeof this[s] && (this[s] = null)
    }, t.fn.owlCarousel.Constructor.Plugins.Hash = n
}(window.Zepto || window.jQuery, window, document),
function(t, e, i, s) {
    var n = t("<support>").get(0).style,
        o = "Webkit Moz O ms".split(" "),
        r = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        a = {
            csstransforms: function() {
                return !!l("transform")
            },
            csstransforms3d: function() {
                return !!l("perspective")
            },
            csstransitions: function() {
                return !!l("transition")
            },
            cssanimations: function() {
                return !!l("animation")
            }
        };

    function l(e, i) {
        var s = !1,
            r = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + o.join(r + " ") + r).split(" "), function(t, e) {
            if (void 0 !== n[e]) return s = !i || e, !1
        }), s
    }

    function h(t) {
        return l(t, !0)
    }
    a.csstransitions() && (t.support.transition = new String(h("transition")), t.support.transition.end = r.transition.end[t.support.transition]), a.cssanimations() && (t.support.animation = new String(h("animation")), t.support.animation.end = r.animation.end[t.support.animation]), a.csstransforms() && (t.support.transform = new String(h("transform")), t.support.transform3d = a.csstransforms3d())
}(window.Zepto || window.jQuery, window, document),
/*! jQuery UI - v1.8.22 - 2012-07-24
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.effects.core.js, jquery.effects.blind.js, jquery.effects.bounce.js, jquery.effects.clip.js, jquery.effects.drop.js, jquery.effects.explode.js, jquery.effects.fade.js, jquery.effects.fold.js, jquery.effects.highlight.js, jquery.effects.pulsate.js, jquery.effects.scale.js, jquery.effects.shake.js, jquery.effects.slide.js, jquery.effects.transfer.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.position.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.tabs.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
function(t, e) {
    function i(e, i) {
        var n = e.nodeName.toLowerCase();
        if ("area" === n) {
            var o, r = e.parentNode,
                a = r.name;
            return !!e.href && !!a && "map" === r.nodeName.toLowerCase() && !!(o = t("img[usemap=#" + a + "]")[0]) && s(o)
        }
        return (/input|select|textarea|button|object/.test(n) ? !e.disabled : "a" == n && e.href || i) && s(e)
    }

    function s(e) {
        return !t(e).parents().andSelf().filter(function() {
            return "hidden" === t.curCSS(this, "visibility") || t.expr.filters.hidden(this)
        }).length
    }
    t.ui = t.ui || {}, t.ui.version || (t.extend(t.ui, {
        version: "1.8.22",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), t.fn.extend({
        propAttr: t.fn.prop || t.fn.attr,
        _focus: t.fn.focus,
        focus: function(e, i) {
            return "number" == typeof e ? this.each(function() {
                var s = this;
                setTimeout(function() {
                    t(s).focus(), i && i.call(s)
                }, e)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var e;
            return e = t.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(t.curCSS(this, "position", 1)) && /(auto|scroll)/.test(t.curCSS(this, "overflow", 1) + t.curCSS(this, "overflow-y", 1) + t.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(t.curCSS(this, "overflow", 1) + t.curCSS(this, "overflow-y", 1) + t.curCSS(this, "overflow-x", 1))
            }).eq(0), /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        },
        zIndex: function(i) {
            if (i !== e) return this.css("zIndex", i);
            if (this.length)
                for (var s, n, o = t(this[0]); o.length && o[0] !== document;) {
                    if (("absolute" === (s = o.css("position")) || "relative" === s || "fixed" === s) && (n = parseInt(o.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                    o = o.parent()
                }
            return 0
        },
        disableSelection: function() {
            return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(i, s) {
        function n(e, i, s, n) {
            return t.each(o, function() {
                i -= parseFloat(t.curCSS(e, "padding" + this, !0)) || 0, s && (i -= parseFloat(t.curCSS(e, "border" + this + "Width", !0)) || 0), n && (i -= parseFloat(t.curCSS(e, "margin" + this, !0)) || 0)
            }), i
        }
        var o = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
            r = s.toLowerCase(),
            a = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
        t.fn["inner" + s] = function(i) {
            return i === e ? a["inner" + s].call(this) : this.each(function() {
                t(this).css(r, n(this, i) + "px")
            })
        }, t.fn["outer" + s] = function(e, i) {
            return "number" != typeof e ? a["outer" + s].call(this, e) : this.each(function() {
                t(this).css(r, n(this, e, !0, i) + "px")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        }) : function(e, i, s) {
            return !!t.data(e, s[3])
        },
        focusable: function(e) {
            return i(e, !isNaN(t.attr(e, "tabindex")))
        },
        tabbable: function(e) {
            var s = t.attr(e, "tabindex"),
                n = isNaN(s);
            return (n || s >= 0) && i(e, !n)
        }
    }), t(function() {
        var e = document.body,
            i = e.appendChild(i = document.createElement("div"));
        i.offsetHeight, t.extend(i.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), t.support.minHeight = 100 === i.offsetHeight, t.support.selectstart = "onselectstart" in i, e.removeChild(i).style.display = "none"
    }), t.curCSS || (t.curCSS = t.css), t.extend(t.ui, {
        plugin: {
            add: function(e, i, s) {
                var n = t.ui[e].prototype;
                for (var o in s) n.plugins[o] = n.plugins[o] || [], n.plugins[o].push([i, s[o]])
            },
            call: function(t, e, i) {
                var s = t.plugins[e];
                if (s && t.element[0].parentNode)
                    for (var n = 0; n < s.length; n++) t.options[s[n][0]] && s[n][1].apply(t.element, i)
            }
        },
        contains: function(t, e) {
            return document.compareDocumentPosition ? 16 & t.compareDocumentPosition(e) : t !== e && t.contains(e)
        },
        hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop",
                n = !1;
            return e[s] > 0 || (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
        },
        isOverAxis: function(t, e, i) {
            return t > e && t < e + i
        },
        isOver: function(e, i, s, n, o, r) {
            return t.ui.isOverAxis(e, s, o) && t.ui.isOverAxis(i, n, r)
        }
    }))
}(jQuery),
function(t, e) {
    if (t.cleanData) {
        var i = t.cleanData;
        t.cleanData = function(e) {
            for (var s, n = 0; null != (s = e[n]); n++) try {
                t(s).triggerHandler("remove")
            } catch (o) {}
            i(e)
        }
    } else {
        var s = t.fn.remove;
        t.fn.remove = function(e, i) {
            return this.each(function() {
                return i || (!e || t.filter(e, [this]).length) && t("*", this).add([this]).each(function() {
                    try {
                        t(this).triggerHandler("remove")
                    } catch (e) {}
                }), s.call(t(this), e, i)
            })
        }
    }
    t.widget = function(e, i, s) {
        var n, o = e.split(".")[0];
        n = o + "-" + (e = e.split(".")[1]), s || (s = i, i = t.Widget), t.expr[":"][n] = function(i) {
            return !!t.data(i, e)
        }, t[o] = t[o] || {}, t[o][e] = function(t, e) {
            arguments.length && this._createWidget(t, e)
        };
        var r = new i;
        r.options = t.extend(!0, {}, r.options), t[o][e].prototype = t.extend(!0, r, {
            namespace: o,
            widgetName: e,
            widgetEventPrefix: t[o][e].prototype.widgetEventPrefix || e,
            widgetBaseClass: n
        }, s), t.widget.bridge(e, t[o][e])
    }, t.widget.bridge = function(i, s) {
        t.fn[i] = function(n) {
            var o = "string" == typeof n,
                r = Array.prototype.slice.call(arguments, 1),
                a = this;
            return n = !o && r.length ? t.extend.apply(null, [!0, n].concat(r)) : n, o && "_" === n.charAt(0) || (o ? this.each(function() {
                var s = t.data(this, i),
                    o = s && t.isFunction(s[n]) ? s[n].apply(s, r) : s;
                if (o !== s && o !== e) return a = o, !1
            }) : this.each(function() {
                var e = t.data(this, i);
                e ? e.option(n || {})._init() : t.data(this, i, new s(n, this))
            })), a
        }
    }, t.Widget = function(t, e) {
        arguments.length && this._createWidget(t, e)
    }, t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function(e, i) {
            t.data(i, this.widgetName, this), this.element = t(i), this.options = t.extend(!0, {}, this.options, this._getCreateOptions(), e);
            var s = this;
            this.element.bind("remove." + this.widgetName, function() {
                s.destroy()
            }), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function() {
            return t.metadata && t.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var n = i;
            if (0 === arguments.length) return t.extend({}, this.options);
            if ("string" == typeof i) {
                if (s === e) return this.options[i];
                (n = {})[i] = s
            }
            return this._setOptions(n), this
        },
        _setOptions: function(e) {
            var i = this;
            return t.each(e, function(t, e) {
                i._setOption(t, e)
            }), this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && this.widget()[e ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", e), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _trigger: function(e, i, s) {
            var n, o, r = this.options[e];
            if (s = s || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(r) && !1 === r.call(this.element[0], i, s) || i.isDefaultPrevented())
        }
    }
}(jQuery),
function(t, e) {
    var i = !1;
    t(document).mouseup(function(t) {
        i = !1
    }), t.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(i) {
                if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!i) {
                this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var s = this,
                    n = 1 == e.which,
                    o = "string" == typeof this.options.cancel && !!e.target.nodeName && t(e.target).closest(this.options.cancel).length;
                return !(n && !o && this._mouseCapture(e)) || ((this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted)) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return s._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return s._mouseUp(t)
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), i = !0, !0))
            }
        },
        _mouseMove: function(e) {
            return !t.browser.msie || document.documentMode >= 9 || e.button ? this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted) : this._mouseUp(e)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target == this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function(t) {
            return this.mouseDelayMet
        },
        _mouseStart: function(t) {},
        _mouseDrag: function(t) {},
        _mouseStop: function(t) {},
        _mouseCapture: function(t) {
            return !0
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.draggable", t.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function() {
            "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        destroy: function() {
            if (this.element.data("draggable")) return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return !(this.helper || i.disabled || t(e.target).is(".ui-resizable-handle")) && (this.handle = this._getHandle(e), !!this.handle && (i.iframeFix && t(!0 === i.iframeFix ? "iframe" : i.iframeFix).each(function() {
                t('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(t(this).offset()).appendTo("body")
            }), !0))
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _mouseDrag: function(e, i) {
            if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (!1 === this._trigger("drag", e, s)) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = !1;
            t.ui.ddmanager && !this.options.dropBehaviour && (i = t.ui.ddmanager.drop(this, e)), this.dropped && (i = this.dropped, this.dropped = !1);
            for (var s = this.element[0], n = !1; s && (s = s.parentNode);) s == document && (n = !0);
            if (!n && "original" === this.options.helper) return !1;
            if ("invalid" == this.options.revert && !i || "valid" == this.options.revert && i || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, i)) {
                var o = this;
                t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    !1 !== o._trigger("stop", e) && o._clear()
                })
            } else !1 !== this._trigger("stop", e) && this._clear();
            return !1
        },
        _mouseUp: function(e) {
            return !0 === this.options.iframeFix && t("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(e) {
            var i = !this.options.handle || !t(this.options.handle, this.element).length;
            return t(this.options.handle, this.element).find("*").andSelf().each(function() {
                this == e.target && (i = !0)
            }), i
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" == i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" == i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] == this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.browser.msie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" == this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e = this.options;
            if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = ["document" == e.containment ? 0 : t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == e.containment ? 0 : t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == e.containment ? 0 : t(window).scrollLeft()) + t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == e.containment ? 0 : t(window).scrollTop()) + (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || e.containment.constructor == Array) e.containment.constructor == Array && (this.containment = e.containment);
            else {
                var i = t(e.containment),
                    s = i[0];
                if (!s) return;
                i.offset();
                var n = "hidden" != t(s).css("overflow");
                this.containment = [(parseInt(t(s).css("borderLeftWidth"), 10) || 0) + (parseInt(t(s).css("paddingLeft"), 10) || 0), (parseInt(t(s).css("borderTopWidth"), 10) || 0) + (parseInt(t(s).css("paddingTop"), 10) || 0), (n ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(t(s).css("borderLeftWidth"), 10) || 0) - (parseInt(t(s).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (n ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(t(s).css("borderTopWidth"), 10) || 0) - (parseInt(t(s).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i
            }
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" == e ? 1 : -1,
                n = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - (t.browser.safari && t.browser.version < 526 && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s),
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - (t.browser.safari && t.browser.version < 526 && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s)
            }
        },
        _generatePosition: function(e) {
            var i, s = this.options,
                n = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(n[0].tagName),
                r = e.pageX,
                a = e.pageY;
            if (this.originalPosition) {
                if (this.containment) {
                    if (this.relative_container) {
                        var l = this.relative_container.offset();
                        i = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]
                    } else i = this.containment;
                    e.pageX - this.offset.click.left < i[0] && (r = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (a = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (r = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (a = i[3] + this.offset.click.top)
                }
                if (s.grid) {
                    var h = s.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1] : this.originalPageY;
                    a = i && (h - this.offset.click.top < i[1] || h - this.offset.click.top > i[3]) ? h - this.offset.click.top < i[1] ? h + s.grid[1] : h - s.grid[1] : h;
                    var c = s.grid[0] ? this.originalPageX + Math.round((r - this.originalPageX) / s.grid[0]) * s.grid[0] : this.originalPageX;
                    r = i && (c - this.offset.click.left < i[0] || c - this.offset.click.left > i[2]) ? c - this.offset.click.left < i[0] ? c + s.grid[0] : c - s.grid[0] : c
                }
            }
            return {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (t.browser.safari && t.browser.version < 526 && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()),
                left: r - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (t.browser.safari && t.browser.version < 526 && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft())
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" == e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function(t) {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.extend(t.ui.draggable, {
        version: "1.8.22"
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i) {
            var s = t(this).data("draggable"),
                n = s.options,
                o = t.extend({}, i, {
                    item: s.element
                });
            s.sortables = [], t(n.connectToSortable).each(function() {
                var i = t.data(this, "sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", e, o))
            })
        },
        stop: function(e, i) {
            var s = t(this).data("draggable"),
                n = t.extend({}, i, {
                    item: s.element
                });
            t.each(s.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" == s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
            })
        },
        drag: function(e, i) {
            var s = t(this).data("draggable"),
                n = this;
            t.each(s.sortables, function(o) {
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i) {
            var s = t("body"),
                n = t(this).data("draggable").options;
            s.css("cursor") && (n._cursor = s.css("cursor")), s.css("cursor", n.cursor)
        },
        stop: function(e, i) {
            var s = t(this).data("draggable").options;
            s._cursor && t("body").css("cursor", s._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i) {
            var s = t(i.helper),
                n = t(this).data("draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
        },
        stop: function(e, i) {
            var s = t(this).data("draggable").options;
            s._opacity && t(i.helper).css("opacity", s._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function(e, i) {
            var s = t(this).data("draggable");
            s.scrollParent[0] != document && "HTML" != s.scrollParent[0].tagName && (s.overflowOffset = s.scrollParent.offset())
        },
        drag: function(e, i) {
            var s = t(this).data("draggable"),
                n = s.options,
                o = !1;
            s.scrollParent[0] != document && "HTML" != s.scrollParent[0].tagName ? ((!n.axis || "x" != n.axis) && (s.overflowOffset.top + s.scrollParent[0].offsetHeight - e.pageY < n.scrollSensitivity ? s.scrollParent[0].scrollTop = o = s.scrollParent[0].scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (s.scrollParent[0].scrollTop = o = s.scrollParent[0].scrollTop - n.scrollSpeed)), (!n.axis || "y" != n.axis) && (s.overflowOffset.left + s.scrollParent[0].offsetWidth - e.pageX < n.scrollSensitivity ? s.scrollParent[0].scrollLeft = o = s.scrollParent[0].scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (s.scrollParent[0].scrollLeft = o = s.scrollParent[0].scrollLeft - n.scrollSpeed))) : ((!n.axis || "x" != n.axis) && (e.pageY - t(document).scrollTop() < n.scrollSensitivity ? o = t(document).scrollTop(t(document).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < n.scrollSensitivity && (o = t(document).scrollTop(t(document).scrollTop() + n.scrollSpeed))), (!n.axis || "y" != n.axis) && (e.pageX - t(document).scrollLeft() < n.scrollSensitivity ? o = t(document).scrollLeft(t(document).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < n.scrollSensitivity && (o = t(document).scrollLeft(t(document).scrollLeft() + n.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function(e, i) {
            var s = t(this).data("draggable"),
                n = s.options;
            s.snapElements = [], t(n.snap.constructor != String ? n.snap.items || ":data(draggable)" : n.snap).each(function() {
                var e = t(this),
                    i = e.offset();
                this != s.element[0] && s.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(e, i) {
            for (var s = t(this).data("draggable"), n = s.options, o = n.snapTolerance, r = i.offset.left, a = r + s.helperProportions.width, l = i.offset.top, h = l + s.helperProportions.height, c = s.snapElements.length - 1; c >= 0; c--) {
                var u = s.snapElements[c].left,
                    d = u + s.snapElements[c].width,
                    p = s.snapElements[c].top,
                    f = p + s.snapElements[c].height;
                if (!(u - o < r && r < d + o && p - o < l && l < f + o || u - o < r && r < d + o && p - o < h && h < f + o || u - o < a && a < d + o && p - o < l && l < f + o || u - o < a && a < d + o && p - o < h && h < f + o)) {
                    s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
                        snapItem: s.snapElements[c].item
                    })), s.snapElements[c].snapping = !1;
                    continue
                }
                if ("inner" != n.snapMode) {
                    var g = Math.abs(p - h) <= o,
                        m = Math.abs(f - l) <= o,
                        v = Math.abs(u - a) <= o,
                        b = Math.abs(d - r) <= o;
                    g && (i.position.top = s._convertPositionTo("relative", {
                        top: p - s.helperProportions.height,
                        left: 0
                    }).top - s.margins.top), m && (i.position.top = s._convertPositionTo("relative", {
                        top: f,
                        left: 0
                    }).top - s.margins.top), v && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: u - s.helperProportions.width
                    }).left - s.margins.left), b && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: d
                    }).left - s.margins.left)
                }
                var y = g || m || v || b;
                if ("outer" != n.snapMode) {
                    var g = Math.abs(p - l) <= o,
                        m = Math.abs(f - h) <= o,
                        v = Math.abs(u - r) <= o,
                        b = Math.abs(d - a) <= o;
                    g && (i.position.top = s._convertPositionTo("relative", {
                        top: p,
                        left: 0
                    }).top - s.margins.top), m && (i.position.top = s._convertPositionTo("relative", {
                        top: f - s.helperProportions.height,
                        left: 0
                    }).top - s.margins.top), v && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: u
                    }).left - s.margins.left), b && (i.position.left = s._convertPositionTo("relative", {
                        top: 0,
                        left: d - s.helperProportions.width
                    }).left - s.margins.left)
                }!s.snapElements[c].snapping && (g || m || v || b || y) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
                    snapItem: s.snapElements[c].item
                })), s.snapElements[c].snapping = g || m || v || b || y
            }
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function(e, i) {
            var s = t(this).data("draggable").options,
                n = t.makeArray(t(s.stack)).sort(function(e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
            if (n.length) {
                var o = parseInt(n[0].style.zIndex) || 0;
                t(n).each(function(t) {
                    this.style.zIndex = o + t
                }), this[0].style.zIndex = o + n.length
            }
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i) {
            var s = t(i.helper),
                n = t(this).data("draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
        },
        stop: function(e, i) {
            var s = t(this).data("draggable").options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex)
        }
    })
}(jQuery),
function(t, e) {
    t.widget("ui.droppable", {
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function() {
            var e = this.options,
                i = e.accept;
            this.isover = 0, this.isout = 1, this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, t.ui.ddmanager.droppables[e.scope] = t.ui.ddmanager.droppables[e.scope] || [], t.ui.ddmanager.droppables[e.scope].push(this), e.addClasses && this.element.addClass("ui-droppable")
        },
        destroy: function() {
            for (var e = t.ui.ddmanager.droppables[this.options.scope], i = 0; i < e.length; i++) e[i] == this && e.splice(i, 1);
            return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this
        },
        _setOption: function(e, i) {
            "accept" == e && (this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            }), t.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var s = i || t.ui.ddmanager.current;
            if (!s || (s.currentItem || s.element)[0] == this.element[0]) return !1;
            var n = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                var e = t.data(this, "droppable");
                if (e.options.greedy && !e.options.disabled && e.options.scope == s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {
                        offset: e.element.offset()
                    }), e.options.tolerance)) return n = !0, !1
            }), !n && !!this.accept.call(this.element[0], s.currentItem || s.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element)
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        }
    }), t.extend(t.ui.droppable, {
        version: "1.8.22"
    }), t.ui.intersect = function(e, i, s) {
        if (!i.offset) return !1;
        var n = (e.positionAbs || e.position.absolute).left,
            o = n + e.helperProportions.width,
            r = (e.positionAbs || e.position.absolute).top,
            a = r + e.helperProportions.height,
            l = i.offset.left,
            h = l + i.proportions.width,
            c = i.offset.top,
            u = c + i.proportions.height;
        switch (s) {
            case "fit":
                return l <= n && o <= h && c <= r && a <= u;
            case "intersect":
                return l < n + e.helperProportions.width / 2 && o - e.helperProportions.width / 2 < h && c < r + e.helperProportions.height / 2 && a - e.helperProportions.height / 2 < u;
            case "pointer":
                var d = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left,
                    p = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top;
                return t.ui.isOver(p, d, c, l, i.proportions.height, i.proportions.width);
            case "touch":
                return (r >= c && r <= u || a >= c && a <= u || r < c && a > u) && (n >= l && n <= h || o >= l && o <= h || n < l && o > h);
            default:
                return !1
        }
    }, t.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(e, i) {
            var s = t.ui.ddmanager.droppables[e.options.scope] || [],
                n = i ? i.type : null,
                o = (e.currentItem || e.element).find(":data(droppable)").andSelf();
            g: for (var r = 0; r < s.length; r++)
                if (!s[r].options.disabled && (!e || s[r].accept.call(s[r].element[0], e.currentItem || e.element))) {
                    for (var a = 0; a < o.length; a++)
                        if (o[a] == s[r].element[0]) {
                            s[r].proportions.height = 0;
                            continue g
                        }
                    s[r].visible = "none" != s[r].element.css("display"), s[r].visible && ("mousedown" == n && s[r]._activate.call(s[r], i), s[r].offset = s[r].element.offset(), s[r].proportions = {
                        width: s[r].element[0].offsetWidth,
                        height: s[r].element[0].offsetHeight
                    })
                }
        },
        drop: function(e, i) {
            var s = !1;
            return t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, i)))
            }), s
        },
        dragStart: function(e, i) {
            e.element.parents(":not(body,html)").bind("scroll.droppable", function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n = t.ui.intersect(e, this, this.options.tolerance),
                        o = n || 1 != this.isover ? n && 0 == this.isover ? "isover" : null : "isout";
                    if (o) {
                        if (this.options.greedy) {
                            var r = this.element.parents(":data(droppable):eq(0)");
                            r.length && ((s = t.data(r[0], "droppable")).greedyChild = "isover" == o ? 1 : 0)
                        }
                        s && "isover" == o && (s.isover = 0, s.isout = 1, s._out.call(s, i)), this[o] = 1, this["isout" == o ? "isover" : "isout"] = 0, this["isover" == o ? "_over" : "_out"].call(this, i), s && "isout" == o && (s.isout = 0, s.isover = 1, s._over.call(s, i))
                    }
                }
            })
        },
        dragStop: function(e, i) {
            e.element.parents(":not(body,html)").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }
}(jQuery),
function(t, e) {
    t.widget("ui.resizable", t.ui.mouse, {
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function() {
            var e = this,
                i = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!i.aspectRatio,
                    aspectRatio: i.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = i.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor == String) {
                "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var s = this.handles.split(",");
                this.handles = {};
                for (var n = 0; n < s.length; n++) {
                    var o = t.trim(s[n]),
                        r = t('<div class="ui-resizable-handle ui-resizable-' + o + '"></div>');
                    r.css({
                        zIndex: i.zIndex
                    }), "se" == o && r.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[o] = ".ui-resizable-" + o, this.element.append(r)
                }
            }
            this._renderAxis = function(e) {
                for (var i in e = e || this.element, this.handles) {
                    if (this.handles[i].constructor == String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var s = t(this.handles[i], this.element),
                            n = 0;
                        n = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth();
                        var o = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
                        e.css(o, n), this._proportionallyResize()
                    }
                    if (!t(this.handles[i]).length) continue
                }
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                if (!e.resizing) {
                    if (this.className) var t = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    e.axis = t && t[1] ? t[1] : "se"
                }
            }), i.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").hover(function() {
                i.disabled || (t(this).removeClass("ui-resizable-autohide"), e._handles.show())
            }, function() {
                !i.disabled && (e.resizing || (t(this).addClass("ui-resizable-autohide"), e._handles.hide()))
            })), this._mouseInit()
        },
        destroy: function() {
            this._mouseDestroy();
            var e = function(e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                e(this.element);
                var i = this.element;
                i.after(this.originalElement.css({
                    position: i.css("position"),
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: i.css("top"),
                    left: i.css("left")
                })).remove()
            }
            return this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), this
        },
        _mouseCapture: function(e) {
            var i = !1;
            for (var s in this.handles) t(this.handles[s])[0] == e.target && (i = !0);
            return !this.options.disabled && i
        },
        _mouseStart: function(e) {
            var s = this.options,
                n = this.element.position(),
                o = this.element;
            this.resizing = !0, this.documentScroll = {
                top: t(document).scrollTop(),
                left: t(document).scrollLeft()
            }, (o.is(".ui-draggable") || /absolute/.test(o.css("position"))) && o.css({
                position: "absolute",
                top: n.top,
                left: n.left
            }), this._renderProxy();
            var r = i(this.helper.css("left")),
                a = i(this.helper.css("top"));
            s.containment && (r += t(s.containment).scrollLeft() || 0, a += t(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: r,
                top: a
            }, this.size = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            } : {
                width: o.width(),
                height: o.height()
            }, this.originalSize = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            } : {
                width: o.width(),
                height: o.height()
            }, this.originalPosition = {
                left: r,
                top: a
            }, this.sizeDiff = {
                width: o.outerWidth() - o.width(),
                height: o.outerHeight() - o.height()
            }, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            var l = t(".ui-resizable-" + this.axis).css("cursor");
            return t("body").css("cursor", "auto" == l ? this.axis + "-resize" : l), o.addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function(e) {
            var i = this.helper,
                s = (this.options, this.originalMousePosition),
                n = this.axis,
                o = e.pageX - s.left || 0,
                r = e.pageY - s.top || 0,
                a = this._change[n];
            if (!a) return !1;
            var l = a.apply(this, [e, o, r]);
            return t.browser.msie && t.browser.version, this.sizeDiff, this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (l = this._updateRatio(l, e)), l = this._respectSize(l, e), this._propagate("resize", e), i.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(l), this._trigger("resize", e, this.ui()), !1
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i = this.options,
                s = this;
            if (this._helper) {
                var n = this._proportionallyResizeElements,
                    o = n.length && /textarea/i.test(n[0].nodeName),
                    r = o && t.ui.hasScroll(n[0], "left") ? 0 : s.sizeDiff.height,
                    a = o ? 0 : s.sizeDiff.width,
                    l = {
                        width: s.helper.width() - a,
                        height: s.helper.height() - r
                    },
                    h = parseInt(s.element.css("left"), 10) + (s.position.left - s.originalPosition.left) || null,
                    c = parseInt(s.element.css("top"), 10) + (s.position.top - s.originalPosition.top) || null;
                i.animate || this.element.css(t.extend(l, {
                    top: c,
                    left: h
                })), s.helper.height(s.size.height), s.helper.width(s.size.width), this._helper && !i.animate && this._proportionallyResize()
            }
            return t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, n, o, r, a = this.options;
            r = {
                minWidth: s(a.minWidth) ? a.minWidth : 0,
                maxWidth: s(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: s(a.minHeight) ? a.minHeight : 0,
                maxHeight: s(a.maxHeight) ? a.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = r.minHeight * this.aspectRatio, n = r.minWidth / this.aspectRatio, i = r.maxHeight * this.aspectRatio, o = r.maxWidth / this.aspectRatio, e > r.minWidth && (r.minWidth = e), n > r.minHeight && (r.minHeight = n), i < r.maxWidth && (r.maxWidth = i), o < r.maxHeight && (r.maxHeight = o)), this._vBoundaries = r
        },
        _updateCache: function(t) {
            this.options, this.offset = this.helper.offset(), s(t.left) && (this.position.left = t.left), s(t.top) && (this.position.top = t.top), s(t.height) && (this.size.height = t.height), s(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t, e) {
            this.options;
            var i = this.position,
                n = this.size,
                o = this.axis;
            return s(t.height) ? t.width = t.height * this.aspectRatio : s(t.width) && (t.height = t.width / this.aspectRatio), "sw" == o && (t.left = i.left + (n.width - t.width), t.top = null), "nw" == o && (t.top = i.top + (n.height - t.height), t.left = i.left + (n.width - t.width)), t
        },
        _respectSize: function(t, e) {
            this.helper;
            var i = this._vBoundaries,
                n = (this._aspectRatio || e.shiftKey, this.axis),
                o = s(t.width) && i.maxWidth && i.maxWidth < t.width,
                r = s(t.height) && i.maxHeight && i.maxHeight < t.height,
                a = s(t.width) && i.minWidth && i.minWidth > t.width,
                l = s(t.height) && i.minHeight && i.minHeight > t.height;
            a && (t.width = i.minWidth), l && (t.height = i.minHeight), o && (t.width = i.maxWidth), r && (t.height = i.maxHeight);
            var h = this.originalPosition.left + this.originalSize.width,
                c = this.position.top + this.size.height,
                u = /sw|nw|w/.test(n),
                d = /nw|ne|n/.test(n);
            a && u && (t.left = h - i.minWidth), o && u && (t.left = h - i.maxWidth), l && d && (t.top = c - i.minHeight), r && d && (t.top = c - i.maxHeight);
            var p = !t.width && !t.height;
            return p && !t.left && t.top ? t.top = null : p && !t.top && t.left && (t.left = null), t
        },
        _proportionallyResize: function() {
            if (this.options, this._proportionallyResizeElements.length)
                for (var e = this.helper || this.element, i = 0; i < this._proportionallyResizeElements.length; i++) {
                    var s = this._proportionallyResizeElements[i];
                    if (!this.borderDif) {
                        var n = [s.css("borderTopWidth"), s.css("borderRightWidth"), s.css("borderBottomWidth"), s.css("borderLeftWidth")],
                            o = [s.css("paddingTop"), s.css("paddingRight"), s.css("paddingBottom"), s.css("paddingLeft")];
                        this.borderDif = t.map(n, function(t, e) {
                            var i = parseInt(t, 10) || 0,
                                s = parseInt(o[e], 10) || 0;
                            return i + s
                        })
                    }!(t.browser.msie && (t(e).is(":hidden") || t(e).parents(":hidden").length)) && s.css({
                        height: e.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: e.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            if (this.elementOffset = e.offset(), this._helper) {
                this.helper = this.helper || t('<div style="overflow:hidden;"></div>');
                var s = t.browser.msie && t.browser.version < 7,
                    n = s ? 1 : 0,
                    o = s ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + o,
                    height: this.element.outerHeight() + o,
                    position: "absolute",
                    left: this.elementOffset.left - n + "px",
                    top: this.elementOffset.top - n + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        },
        _change: {
            e: function(t, e, i) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e, i) {
                this.options;
                var s = this.originalSize;
                return {
                    left: this.originalPosition.left + e,
                    width: s.width - e
                }
            },
            n: function(t, e, i) {
                this.options;
                var s = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            sw: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            },
            ne: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            nw: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" != e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.extend(t.ui.resizable, {
        version: "1.8.22"
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function(e, i) {
            var s = t(this).data("resizable").options,
                n = function(e) {
                    t(e).each(function() {
                        var e = t(this);
                        e.data("resizable-alsoresize", {
                            width: parseInt(e.width(), 10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10)
                        })
                    })
                };
            "object" != typeof s.alsoResize || s.alsoResize.parentNode ? n(s.alsoResize) : s.alsoResize.length ? (s.alsoResize = s.alsoResize[0], n(s.alsoResize)) : t.each(s.alsoResize, function(t) {
                n(t)
            })
        },
        resize: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                o = s.originalSize,
                r = s.originalPosition,
                a = {
                    height: s.size.height - o.height || 0,
                    width: s.size.width - o.width || 0,
                    top: s.position.top - r.top || 0,
                    left: s.position.left - r.left || 0
                },
                l = function(e, s) {
                    t(e).each(function() {
                        var e = t(this),
                            n = t(this).data("resizable-alsoresize"),
                            o = {},
                            r = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        t.each(r, function(t, e) {
                            var i = (n[e] || 0) + (a[e] || 0);
                            i && i >= 0 && (o[e] = i || null)
                        }), e.css(o)
                    })
                };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? l(n.alsoResize) : t.each(n.alsoResize, function(t, e) {
                l(t, e)
            })
        },
        stop: function(e, i) {
            t(this).removeData("resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                o = s._proportionallyResizeElements,
                r = o.length && /textarea/i.test(o[0].nodeName),
                a = r && t.ui.hasScroll(o[0], "left") ? 0 : s.sizeDiff.height,
                l = r ? 0 : s.sizeDiff.width,
                h = {
                    width: s.size.width - l,
                    height: s.size.height - a
                },
                c = parseInt(s.element.css("left"), 10) + (s.position.left - s.originalPosition.left) || null,
                u = parseInt(s.element.css("top"), 10) + (s.position.top - s.originalPosition.top) || null;
            s.element.animate(t.extend(h, u && c ? {
                top: u,
                left: c
            } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function() {
                    var i = {
                        width: parseInt(s.element.css("width"), 10),
                        height: parseInt(s.element.css("height"), 10),
                        top: parseInt(s.element.css("top"), 10),
                        left: parseInt(s.element.css("left"), 10)
                    };
                    o && o.length && t(o[0]).css({
                        width: i.width,
                        height: i.height
                    }), s._updateCache(i), s._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function(e, s) {
            var n = t(this).data("resizable"),
                o = n.options,
                r = n.element,
                a = o.containment,
                l = a instanceof t ? a.get(0) : /parent/.test(a) ? r.parent().get(0) : a;
            if (l) {
                if (n.containerElement = t(l), /document/.test(a) || a == document) n.containerOffset = {
                    left: 0,
                    top: 0
                }, n.containerPosition = {
                    left: 0,
                    top: 0
                }, n.parentData = {
                    element: t(document),
                    left: 0,
                    top: 0,
                    width: t(document).width(),
                    height: t(document).height() || document.body.parentNode.scrollHeight
                };
                else {
                    var h = t(l),
                        c = [];
                    t(["Top", "Right", "Left", "Bottom"]).each(function(t, e) {
                        c[t] = i(h.css("padding" + e))
                    }), n.containerOffset = h.offset(), n.containerPosition = h.position(), n.containerSize = {
                        height: h.innerHeight() - c[3],
                        width: h.innerWidth() - c[1]
                    };
                    var u = n.containerOffset,
                        d = n.containerSize.height,
                        p = n.containerSize.width,
                        f = t.ui.hasScroll(l, "left") ? l.scrollWidth : p,
                        g = t.ui.hasScroll(l) ? l.scrollHeight : d;
                    n.parentData = {
                        element: l,
                        left: u.left,
                        top: u.top,
                        width: f,
                        height: g
                    }
                }
            }
        },
        resize: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                o = (s.containerSize, s.containerOffset),
                r = (s.size, s.position),
                a = s._aspectRatio || e.shiftKey,
                l = {
                    top: 0,
                    left: 0
                },
                h = s.containerElement;
            h[0] != document && /static/.test(h.css("position")) && (l = o), r.left < (s._helper ? o.left : 0) && (s.size.width = s.size.width + (s._helper ? s.position.left - o.left : s.position.left - l.left), a && (s.size.height = s.size.width / s.aspectRatio), s.position.left = n.helper ? o.left : 0), r.top < (s._helper ? o.top : 0) && (s.size.height = s.size.height + (s._helper ? s.position.top - o.top : s.position.top), a && (s.size.width = s.size.height * s.aspectRatio), s.position.top = s._helper ? o.top : 0), s.offset.left = s.parentData.left + s.position.left, s.offset.top = s.parentData.top + s.position.top;
            var c = Math.abs((s._helper, s.offset.left - l.left + s.sizeDiff.width)),
                u = Math.abs((s._helper ? s.offset.top - l.top : s.offset.top - o.top) + s.sizeDiff.height),
                d = s.containerElement.get(0) == s.element.parent().get(0),
                p = /relative|absolute/.test(s.containerElement.css("position"));
            d && p && (c -= s.parentData.left), c + s.size.width >= s.parentData.width && (s.size.width = s.parentData.width - c, a && (s.size.height = s.size.width / s.aspectRatio)), u + s.size.height >= s.parentData.height && (s.size.height = s.parentData.height - u, a && (s.size.width = s.size.height * s.aspectRatio))
        },
        stop: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                o = (s.position, s.containerOffset),
                r = s.containerPosition,
                a = s.containerElement,
                l = t(s.helper),
                h = l.offset(),
                c = l.outerWidth() - s.sizeDiff.width,
                u = l.outerHeight() - s.sizeDiff.height;
            s._helper && !n.animate && /relative/.test(a.css("position")) && t(this).css({
                left: h.left - r.left - o.left,
                width: c,
                height: u
            }), s._helper && !n.animate && /static/.test(a.css("position")) && t(this).css({
                left: h.left - r.left - o.left,
                width: c,
                height: u
            })
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                o = s.size;
            s.ghost = s.originalElement.clone(), s.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: o.height,
                width: o.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof n.ghost ? n.ghost : ""), s.ghost.appendTo(s.helper)
        },
        resize: function(e, i) {
            var s = t(this).data("resizable");
            s.options, s.ghost && s.ghost.css({
                position: "relative",
                height: s.size.height,
                width: s.size.width
            })
        },
        stop: function(e, i) {
            var s = t(this).data("resizable");
            s.options, s.ghost && s.helper && s.helper.get(0).removeChild(s.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function(e, i) {
            var s = t(this).data("resizable"),
                n = s.options,
                o = s.size,
                r = s.originalSize,
                a = s.originalPosition,
                l = s.axis;
            n._aspectRatio || e.shiftKey, n.grid = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid;
            var h = Math.round((o.width - r.width) / (n.grid[0] || 1)) * (n.grid[0] || 1),
                c = Math.round((o.height - r.height) / (n.grid[1] || 1)) * (n.grid[1] || 1);
            /^(se|s|e)$/.test(l) ? (s.size.width = r.width + h, s.size.height = r.height + c) : /^(ne)$/.test(l) ? (s.size.width = r.width + h, s.size.height = r.height + c, s.position.top = a.top - c) : /^(sw)$/.test(l) ? (s.size.width = r.width + h, s.size.height = r.height + c, s.position.left = a.left - h) : (s.size.width = r.width + h, s.size.height = r.height + c, s.position.top = a.top - c, s.position.left = a.left - h)
        }
    });
    var i = function(t) {
            return parseInt(t, 10) || 0
        },
        s = function(t) {
            return !isNaN(parseInt(t, 10))
        }
}(jQuery),
function(t, e) {
    t.widget("ui.selectable", t.ui.mouse, {
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function() {
            var e, i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                (e = t(i.options.filter, i.element[0])).addClass("ui-selectee"), e.each(function() {
                    var e = t(this),
                        i = e.offset();
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: i.left,
                        top: i.top,
                        right: i.left + e.outerWidth(),
                        bottom: i.top + e.outerHeight(),
                        startselected: !1,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
        },
        destroy: function() {
            return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this
        },
        _mouseStart: function(e) {
            var i = this;
            if (this.opos = [e.pageX, e.pageY], !this.options.disabled) {
                var s = this.options;
                this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                    left: e.clientX,
                    top: e.clientY,
                    width: 0,
                    height: 0
                }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var s = t.data(this, "selectable-item");
                    s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
                        unselecting: s.element
                    }))
                }), t(e.target).parents().andSelf().each(function() {
                    var s = t.data(this, "selectable-item");
                    if (s) {
                        var n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected");
                        return s.$element.removeClass(n ? "ui-unselecting" : "ui-selected").addClass(n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
                            selecting: s.element
                        }) : i._trigger("unselecting", e, {
                            unselecting: s.element
                        }), !1
                    }
                })
            }
        },
        _mouseDrag: function(e) {
            var i = this;
            if (this.dragged = !0, !this.options.disabled) {
                var s = this.options,
                    n = this.opos[0],
                    o = this.opos[1],
                    r = e.pageX,
                    a = e.pageY;
                if (n > r) {
                    var l = r;
                    r = n, n = l
                }
                if (o > a) {
                    var l = a;
                    a = o, o = l
                }
                return this.helper.css({
                    left: n,
                    top: o,
                    width: r - n,
                    height: a - o
                }), this.selectees.each(function() {
                    var l = t.data(this, "selectable-item");
                    if (l && l.element != i.element[0]) {
                        var h = !1;
                        "touch" == s.tolerance ? h = !(l.left > r || l.right < n || l.top > a || l.bottom < o) : "fit" == s.tolerance && (h = l.left > n && l.right < r && l.top > o && l.bottom < a), h ? (l.selected && (l.$element.removeClass("ui-selected"), l.selected = !1), l.unselecting && (l.$element.removeClass("ui-unselecting"), l.unselecting = !1), l.selecting || (l.$element.addClass("ui-selecting"), l.selecting = !0, i._trigger("selecting", e, {
                            selecting: l.element
                        }))) : (l.selecting && ((e.metaKey || e.ctrlKey) && l.startselected ? (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.$element.addClass("ui-selected"), l.selected = !0) : (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.startselected && (l.$element.addClass("ui-unselecting"), l.unselecting = !0), i._trigger("unselecting", e, {
                            unselecting: l.element
                        }))), !l.selected || e.metaKey || e.ctrlKey || l.startselected || (l.$element.removeClass("ui-selected"), l.selected = !1, l.$element.addClass("ui-unselecting"), l.unselecting = !0, i._trigger("unselecting", e, {
                            unselecting: l.element
                        })))
                    }
                }), !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, this.options, t(".ui-unselecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
                    unselected: s.element
                })
            }), t(".ui-selecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                    selected: s.element
                })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), t.extend(t.ui.selectable, {
        version: "1.8.22"
    })
}(jQuery),
function(t, e) {
    t.widget("ui.sortable", t.ui.mouse, {
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = !!this.items.length && ("x" === t.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display"))), this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        destroy: function() {
            t.Widget.prototype.destroy.call(this), this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget()[i ? "addClass" : "removeClass"]("ui-sortable-disabled")) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(e, i) {
            var s = this;
            if (this.reverting || this.options.disabled || "static" == this.options.type) return !1;
            this._refreshItems(e);
            var n = null,
                o = this;
            if (t(e.target).parents().each(function() {
                    if (t.data(this, s.widgetName + "-item") == o) return n = t(this), !1
                }), t.data(e.target, s.widgetName + "-item") == o && (n = t(e.target)), !n) return !1;
            if (this.options.handle && !i) {
                var r = !1;
                if (t(this.options.handle, n).find("*").andSelf().each(function() {
                        this == e.target && (r = !0)
                    }), !r) return !1
            }
            return this.currentItem = n, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function(e, i, s) {
            var n = this.options,
                o = this;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), n.containment && this._setContainment(), n.cursor && (t("body").css("cursor") && (this._storedCursor = t("body").css("cursor")), t("body").css("cursor", n.cursor)), n.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", n.opacity)), n.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", n.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (var r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", e, o._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            if (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                var i = this.options,
                    s = !1;
                this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop + i.scrollSpeed : e.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = s = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft + i.scrollSpeed : e.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = s = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (e.pageY - t(document).scrollTop() < i.scrollSensitivity ? s = t(document).scrollTop(t(document).scrollTop() - i.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < i.scrollSensitivity && (s = t(document).scrollTop(t(document).scrollTop() + i.scrollSpeed)), e.pageX - t(document).scrollLeft() < i.scrollSensitivity ? s = t(document).scrollLeft(t(document).scrollLeft() - i.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < i.scrollSensitivity && (s = t(document).scrollLeft(t(document).scrollLeft() + i.scrollSpeed))), !1 !== s && t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)
            }
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (var n = this.items.length - 1; n >= 0; n--) {
                var o = this.items[n],
                    r = o.item[0],
                    a = this._intersectsWithPointer(o);
                if (a && r != this.currentItem[0] && this.placeholder[1 == a ? "next" : "prev"]()[0] != r && !t.ui.contains(this.placeholder[0], r) && ("semi-dynamic" != this.options.type || !t.ui.contains(this.element[0], r))) {
                    if (this.direction = 1 == a ? "down" : "up", "pointer" == this.options.tolerance || this._intersectsWithSides(o)) this._rearrange(e, o);
                    else break;
                    this._trigger("change", e, this._uiHash());
                    break
                }
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this,
                        n = s.placeholder.offset();
                    s.reverting = !0, t(this.helper).animate({
                        left: n.left - this.offset.parent.left - s.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: n.top - this.offset.parent.top - s.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            var e = this;
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var i = this.containers.length - 1; i >= 0; i--) this.containers[i]._trigger("deactivate", null, e._uiHash(this)), this.containers[i].containerCache.over && (this.containers[i]._trigger("out", null, e._uiHash(this)), this.containers[i].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                s = this.positionAbs.top,
                n = s + this.helperProportions.height,
                o = t.left,
                r = o + t.width,
                a = t.top,
                l = a + t.height,
                h = this.offset.click.top,
                c = this.offset.click.left,
                u = s + h > a && s + h < l && e + c > o && e + c < r;
            return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? u : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function(e) {
            var i = "x" === this.options.axis || t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                s = "y" === this.options.axis || t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                n = i && s,
                o = this._getDragVerticalDirection(),
                r = this._getDragHorizontalDirection();
            return !!n && (this.floating ? r && "right" == r || "down" == o ? 2 : 1 : o && ("down" == o ? 2 : 1))
        },
        _intersectsWithSides: function(e) {
            var i = t.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                s = t.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                n = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" == o && s || "left" == o && !s : n && ("down" == n && i || "up" == n && !i)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 != t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 != t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor == String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            var i = [],
                s = [],
                n = this._connectWith();
            if (n && e)
                for (var o = n.length - 1; o >= 0; o--)
                    for (var r = t(n[o]), a = r.length - 1; a >= 0; a--) {
                        var l = t.data(r[a], this.widgetName);
                        l && l != this && !l.options.disabled && s.push([t.isFunction(l.options.items) ? l.options.items.call(l.element) : t(l.options.items, l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), l])
                    }
            s.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var o = s.length - 1; o >= 0; o--) s[o][0].each(function() {
                i.push(this)
            });
            return t(i)
        },
        _removeCurrentsFromItems: function() {
            for (var t = this.currentItem.find(":data(" + this.widgetName + "-item)"), e = 0; e < this.items.length; e++)
                for (var i = 0; i < t.length; i++) t[i] == this.items[e].item[0] && this.items.splice(e, 1)
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i = this.items,
                s = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                n = this._connectWith();
            if (n && this.ready)
                for (var o = n.length - 1; o >= 0; o--)
                    for (var r = t(n[o]), a = r.length - 1; a >= 0; a--) {
                        var l = t.data(r[a], this.widgetName);
                        l && l != this && !l.options.disabled && (s.push([t.isFunction(l.options.items) ? l.options.items.call(l.element[0], e, {
                            item: this.currentItem
                        }) : t(l.options.items, l.element), l]), this.containers.push(l))
                    }
            for (var o = s.length - 1; o >= 0; o--)
                for (var h = s[o][1], c = s[o][0], a = 0, u = c.length; a < u; a++) {
                    var d = t(c[a]);
                    d.data(this.widgetName + "-item", h), i.push({
                        item: d,
                        instance: h,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
        },
        refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var i = this.items.length - 1; i >= 0; i--) {
                var s = this.items[i];
                if (s.instance == this.currentContainer || !this.currentContainer || s.item[0] == this.currentItem[0]) {
                    var n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item;
                    e || (s.width = n.outerWidth(), s.height = n.outerHeight());
                    var o = n.offset();
                    s.left = o.left, s.top = o.top
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (var i = this.containers.length - 1; i >= 0; i--) {
                    var o = this.containers[i].element.offset();
                    this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight()
                }
            return this
        },
        _createPlaceholder: function(e) {
            var i = e || this,
                s = i.options;
            if (!s.placeholder || s.placeholder.constructor == String) {
                var n = s.placeholder;
                s.placeholder = {
                    element: function() {
                        var e = t(document.createElement(i.currentItem[0].nodeName)).addClass(n || i.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return n || (e.style.visibility = "hidden"), e
                    },
                    update: function(t, e) {
                        (!n || s.forcePlaceholderSize) && (e.height() || e.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                    }
                }
            }
            i.placeholder = t(s.placeholder.element.call(i.element, i.currentItem)), i.currentItem.after(i.placeholder), s.placeholder.update(i, i.placeholder)
        },
        _contactContainers: function(e) {
            for (var i = null, s = null, n = this.containers.length - 1; n >= 0; n--)
                if (!t.ui.contains(this.currentItem[0], this.containers[n].element[0])) {
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (i && t.ui.contains(this.containers[n].element[0], i.element[0])) continue;
                        i = this.containers[n], s = n
                    } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", e, this._uiHash(this)), this.containers[n].containerCache.over = 0)
                }
            if (i) {
                if (1 === this.containers.length) this.containers[s]._trigger("over", e, this._uiHash(this)), this.containers[s].containerCache.over = 1;
                else if (this.currentContainer != this.containers[s]) {
                    for (var o = 1e4, r = null, a = this.positionAbs[this.containers[s].floating ? "left" : "top"], l = this.items.length - 1; l >= 0; l--)
                        if (t.ui.contains(this.containers[s].element[0], this.items[l].item[0])) {
                            var h = this.containers[s].floating ? this.items[l].item.offset().left : this.items[l].item.offset().top;
                            Math.abs(h - a) < o && (o = Math.abs(h - a), r = this.items[l], this.direction = h - a > 0 ? "down" : "up")
                        }
                    if (!r && !this.options.dropOnEmpty) return;
                    this.currentContainer = this.containers[s], r ? this._rearrange(e, r, null, !0) : this._rearrange(e, null, this.containers[s].element, !0), this._trigger("change", e, this._uiHash()), this.containers[s]._trigger("change", e, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[s]._trigger("over", e, this._uiHash(this)), this.containers[s].containerCache.over = 1
                }
            }
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" != i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), ("" == s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), ("" == s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && t.browser.msie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" == this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e = this.options;
            if ("parent" == e.containment && (e.containment = this.helper[0].parentNode), ("document" == e.containment || "window" == e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" == e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" == e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(e.containment)) {
                var i = t(e.containment)[0],
                    s = t(e.containment).offset(),
                    n = "hidden" != t(i).css("overflow");
                this.containment = [s.left + (parseInt(t(i).css("borderLeftWidth"), 10) || 0) + (parseInt(t(i).css("paddingLeft"), 10) || 0) - this.margins.left, s.top + (parseInt(t(i).css("borderTopWidth"), 10) || 0) + (parseInt(t(i).css("paddingTop"), 10) || 0) - this.margins.top, s.left + (n ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t(i).css("borderLeftWidth"), 10) || 0) - (parseInt(t(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, s.top + (n ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t(i).css("borderTopWidth"), 10) || 0) - (parseInt(t(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" == e ? 1 : -1,
                n = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - (t.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s),
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - (t.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s)
            }
        },
        _generatePosition: function(e) {
            var i = this.options,
                s = "absolute" != this.cssPosition || this.scrollParent[0] != document && t.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                n = /(html|body)/i.test(s[0].tagName);
            "relative" == this.cssPosition && (this.scrollParent[0] == document || this.scrollParent[0] == this.offsetParent[0]) && (this.offset.relative = this._getRelativeOffset());
            var o = e.pageX,
                r = e.pageY;
            if (this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), i.grid)) {
                var a = this.originalPageY + Math.round((r - this.originalPageY) / i.grid[1]) * i.grid[1];
                r = this.containment && (a - this.offset.click.top < this.containment[1] || a - this.offset.click.top > this.containment[3]) ? a - this.offset.click.top < this.containment[1] ? a + i.grid[1] : a - i.grid[1] : a;
                var l = this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0];
                o = this.containment && (l - this.offset.click.left < this.containment[0] || l - this.offset.click.left > this.containment[2]) ? l - this.offset.click.left < this.containment[0] ? l + i.grid[0] : l - i.grid[0] : l
            }
            return {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (t.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (t.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this,
                o = this.counter;
            window.setTimeout(function() {
                o == n.counter && n.refreshPositions(!s)
            }, 0)
        },
        _clear: function(e, i) {
            this.reverting = !1;
            var s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                for (var n in this._storedCSS)("auto" == this._storedCSS[n] || "static" == this._storedCSS[n]) && (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            if (this.fromOutside && !i && s.push(function(t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), (this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !i && s.push(function(t) {
                    this._trigger("update", t, this._uiHash())
                }), !t.ui.contains(this.element[0], this.currentItem[0])) {
                i || s.push(function(t) {
                    this._trigger("remove", t, this._uiHash())
                });
                for (var n = this.containers.length - 1; n >= 0; n--) t.ui.contains(this.containers[n].element[0], this.currentItem[0]) && !i && (s.push((function(t) {
                    return function(e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }).call(this, this.containers[n])), s.push((function(t) {
                    return function(e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }).call(this, this.containers[n])))
            }
            for (var n = this.containers.length - 1; n >= 0; n--) i || s.push((function(t) {
                return function(e) {
                    t._trigger("deactivate", e, this._uiHash(this))
                }
            }).call(this, this.containers[n])), this.containers[n].containerCache.over && (s.push((function(t) {
                return function(e) {
                    t._trigger("out", e, this._uiHash(this))
                }
            }).call(this, this.containers[n])), this.containers[n].containerCache.over = 0);
            if (this._storedCursor && t("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!i) {
                    this._trigger("beforeStop", e, this._uiHash());
                    for (var n = 0; n < s.length; n++) s[n].call(this, e);
                    this._trigger("stop", e, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (i || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
                for (var n = 0; n < s.length; n++) s[n].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    }), t.extend(t.ui.sortable, {
        version: "1.8.22"
    })
}(jQuery), jQuery.effects || function(t, e) {
        function i(e) {
            var i;
            return e && e.constructor == Array && 3 == e.length ? e : (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e)) ? [parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10)] : (i = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(e)) ? [2.55 * parseFloat(i[1]), 2.55 * parseFloat(i[2]), 2.55 * parseFloat(i[3])] : (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e)) ? [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16)] : (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(e)) ? [parseInt(i[1] + i[1], 16), parseInt(i[2] + i[2], 16), parseInt(i[3] + i[3], 16)] : (i = /rgba\(0, 0, 0, 0\)/.exec(e)) ? h.transparent : h[t.trim(e).toLowerCase()]
        }

        function s(e, s) {
            var n;
            do {
                if ("" != (n = (t.curCSS || t.css)(e, s)) && "transparent" != n || t.nodeName(e, "body")) break;
                s = "backgroundColor"
            } while (e = e.parentNode);
            return i(n)
        }

        function n() {
            var t, e, i = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
                s = {};
            if (i && i.length && i[0] && i[i[0]])
                for (var n = i.length; n--;) "string" == typeof i[t = i[n]] && (s[e = t.replace(/\-(\w)/g, function(t, e) {
                    return e.toUpperCase()
                })] = i[t]);
            else
                for (t in i) "string" == typeof i[t] && (s[t] = i[t]);
            return s
        }

        function o(e) {
            var i, s;
            for (i in e)(null == (s = e[i]) || t.isFunction(s) || i in u || /scrollbar/.test(i) || !/color/i.test(i) && isNaN(parseFloat(s))) && delete e[i];
            return e
        }

        function r(t, e) {
            var i, s = {
                _: 0
            };
            for (i in e) t[i] != e[i] && (s[i] = e[i]);
            return s
        }

        function a(e, i, s, n) {
            return "object" == typeof e && (n = i, s = null, e = (i = e).effect), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i = i || {}, s = s || i.duration, s = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, n = n || i.complete, [e, i, s, n]
        }

        function l(e) {
            return !e || "number" == typeof e || !!t.fx.speeds[e] || "string" == typeof e && !t.effects[e]
        }
        t.effects = {}, t.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(e, n) {
            t.fx.step[n] = function(t) {
                t.colorInit || (t.start = s(t.elem, n), t.end = i(t.end), t.colorInit = !0), t.elem.style[n] = "rgb(" + Math.max(Math.min(parseInt(t.pos * (t.end[0] - t.start[0]) + t.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(t.pos * (t.end[1] - t.start[1]) + t.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(t.pos * (t.end[2] - t.start[2]) + t.start[2], 10), 255), 0) + ")"
            }
        });
        var h = {
                aqua: [0, 255, 255],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                black: [0, 0, 0],
                blue: [0, 0, 255],
                brown: [165, 42, 42],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgrey: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkviolet: [148, 0, 211],
                fuchsia: [255, 0, 255],
                gold: [255, 215, 0],
                green: [0, 128, 0],
                indigo: [75, 0, 130],
                khaki: [240, 230, 140],
                lightblue: [173, 216, 230],
                lightcyan: [224, 255, 255],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                navy: [0, 0, 128],
                olive: [128, 128, 0],
                orange: [255, 165, 0],
                pink: [255, 192, 203],
                purple: [128, 0, 128],
                violet: [128, 0, 128],
                red: [255, 0, 0],
                silver: [192, 192, 192],
                white: [255, 255, 255],
                yellow: [255, 255, 0],
                transparent: [255, 255, 255]
            },
            c = ["add", "remove", "toggle"],
            u = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        t.effects.animateClass = function(e, i, s, a) {
            return t.isFunction(s) && (a = s, s = null), this.queue(function() {
                var l, h = t(this),
                    u = h.attr("style") || " ",
                    d = o(n.call(this)),
                    p = h.attr("class") || "";
                t.each(c, function(t, i) {
                    e[i] && h[i + "Class"](e[i])
                }), l = o(n.call(this)), h.attr("class", p), h.animate(r(d, l), {
                    queue: !1,
                    duration: i,
                    easing: s,
                    complete: function() {
                        t.each(c, function(t, i) {
                            e[i] && h[i + "Class"](e[i])
                        }), "object" == typeof h.attr("style") ? (h.attr("style").cssText = "", h.attr("style").cssText = u) : h.attr("style", u), a && a.apply(this, arguments), t.dequeue(this)
                    }
                })
            })
        }, t.fn.extend({
            _addClass: t.fn.addClass,
            addClass: function(e, i, s, n) {
                return i ? t.effects.animateClass.apply(this, [{
                    add: e
                }, i, s, n]) : this._addClass(e)
            },
            _removeClass: t.fn.removeClass,
            removeClass: function(e, i, s, n) {
                return i ? t.effects.animateClass.apply(this, [{
                    remove: e
                }, i, s, n]) : this._removeClass(e)
            },
            _toggleClass: t.fn.toggleClass,
            toggleClass: function(i, s, n, o, r) {
                return "boolean" == typeof s || s === e ? n ? t.effects.animateClass.apply(this, [s ? {
                    add: i
                } : {
                    remove: i
                }, n, o, r]) : this._toggleClass(i, s) : t.effects.animateClass.apply(this, [{
                    toggle: i
                }, s, n, o])
            },
            switchClass: function(e, i, s, n, o) {
                return t.effects.animateClass.apply(this, [{
                    add: i,
                    remove: e
                }, s, n, o])
            }
        }), t.extend(t.effects, {
            version: "1.8.22",
            save: function(t, e) {
                for (var i = 0; i < e.length; i++) null !== e[i] && t.data("ec.storage." + e[i], t[0].style[e[i]])
            },
            restore: function(t, e) {
                for (var i = 0; i < e.length; i++) null !== e[i] && t.css(e[i], t.data("ec.storage." + e[i]))
            },
            setMode: function(t, e) {
                return "toggle" == e && (e = t.is(":hidden") ? "show" : "hide"), e
            },
            getBaseline: function(t, e) {
                var i, s;
                switch (t[0]) {
                    case "top":
                        i = 0;
                        break;
                    case "middle":
                        i = .5;
                        break;
                    case "bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height
                }
                switch (t[1]) {
                    case "left":
                        s = 0;
                        break;
                    case "center":
                        s = .5;
                        break;
                    case "right":
                        s = 1;
                        break;
                    default:
                        s = t[1] / e.width
                }
                return {
                    x: s,
                    y: i
                }
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {
                        width: e.outerWidth(!0),
                        height: e.outerHeight(!0),
                        float: e.css("float")
                    },
                    s = t("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    n = document.activeElement;
                try {
                    n.id
                } catch (o) {
                    n = document.body
                }
                return e.wrap(s), (e[0] === n || t.contains(e[0], n)) && t(n).focus(), s = e.parent(), "static" == e.css("position") ? (s.css({
                    position: "relative"
                }), e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each(["top", "left", "bottom", "right"], function(t, s) {
                    i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), s.css(i).show()
            },
            removeWrapper: function(e) {
                var i, s = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") ? (i = e.parent().replaceWith(e), (e[0] === s || t.contains(e[0], s)) && t(s).focus(), i) : e
            },
            setTransition: function(e, i, s, n) {
                return n = n || {}, t.each(i, function(t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (n[i] = o[0] * s + o[1])
                }), n
            }
        }), t.fn.extend({
            effect: function(e, i, s, n) {
                var o = a.apply(this, arguments),
                    r = {
                        options: o[1],
                        duration: o[2],
                        callback: o[3]
                    },
                    l = r.options.mode,
                    h = t.effects[e];
                return t.fx.off || !h ? l ? this[l](r.duration, r.callback) : this.each(function() {
                    r.callback && r.callback.call(this)
                }) : h.call(this, r)
            },
            _show: t.fn.show,
            show: function(t) {
                if (l(t)) return this._show.apply(this, arguments);
                var e = a.apply(this, arguments);
                return e[1].mode = "show", this.effect.apply(this, e)
            },
            _hide: t.fn.hide,
            hide: function(t) {
                if (l(t)) return this._hide.apply(this, arguments);
                var e = a.apply(this, arguments);
                return e[1].mode = "hide", this.effect.apply(this, e)
            },
            __toggle: t.fn.toggle,
            toggle: function(e) {
                if (l(e) || "boolean" == typeof e || t.isFunction(e)) return this.__toggle.apply(this, arguments);
                var i = a.apply(this, arguments);
                return i[1].mode = "toggle", this.effect.apply(this, i)
            },
            cssUnit: function(e) {
                var i = this.css(e),
                    s = [];
                return t.each(["em", "px", "%", "pt"], function(t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                }), s
            }
        }), t.easing.jswing = t.easing.swing, t.extend(t.easing, {
            def: "easeOutQuad",
            swing: function(e, i, s, n, o) {
                return t.easing[t.easing.def](e, i, s, n, o)
            },
            easeInQuad: function(t, e, i, s, n) {
                return s * (e /= n) * e + i
            },
            easeOutQuad: function(t, e, i, s, n) {
                return -s * (e /= n) * (e - 2) + i
            },
            easeInOutQuad: function(t, e, i, s, n) {
                return (e /= n / 2) < 1 ? s / 2 * e * e + i : -s / 2 * (--e * (e - 2) - 1) + i
            },
            easeInCubic: function(t, e, i, s, n) {
                return s * (e /= n) * e * e + i
            },
            easeOutCubic: function(t, e, i, s, n) {
                return s * ((e = e / n - 1) * e * e + 1) + i
            },
            easeInOutCubic: function(t, e, i, s, n) {
                return (e /= n / 2) < 1 ? s / 2 * e * e * e + i : s / 2 * ((e -= 2) * e * e + 2) + i
            },
            easeInQuart: function(t, e, i, s, n) {
                return s * (e /= n) * e * e * e + i
            },
            easeOutQuart: function(t, e, i, s, n) {
                return -s * ((e = e / n - 1) * e * e * e - 1) + i
            },
            easeInOutQuart: function(t, e, i, s, n) {
                return (e /= n / 2) < 1 ? s / 2 * e * e * e * e + i : -s / 2 * ((e -= 2) * e * e * e - 2) + i
            },
            easeInQuint: function(t, e, i, s, n) {
                return s * (e /= n) * e * e * e * e + i
            },
            easeOutQuint: function(t, e, i, s, n) {
                return s * ((e = e / n - 1) * e * e * e * e + 1) + i
            },
            easeInOutQuint: function(t, e, i, s, n) {
                return (e /= n / 2) < 1 ? s / 2 * e * e * e * e * e + i : s / 2 * ((e -= 2) * e * e * e * e + 2) + i
            },
            easeInSine: function(t, e, i, s, n) {
                return -s * Math.cos(e / n * (Math.PI / 2)) + s + i
            },
            easeOutSine: function(t, e, i, s, n) {
                return s * Math.sin(e / n * (Math.PI / 2)) + i
            },
            easeInOutSine: function(t, e, i, s, n) {
                return -s / 2 * (Math.cos(Math.PI * e / n) - 1) + i
            },
            easeInExpo: function(t, e, i, s, n) {
                return 0 == e ? i : s * Math.pow(2, 10 * (e / n - 1)) + i
            },
            easeOutExpo: function(t, e, i, s, n) {
                return e == n ? i + s : s * (-Math.pow(2, -10 * e / n) + 1) + i
            },
            easeInOutExpo: function(t, e, i, s, n) {
                return 0 == e ? i : e == n ? i + s : (e /= n / 2) < 1 ? s / 2 * Math.pow(2, 10 * (e - 1)) + i : s / 2 * (-Math.pow(2, -10 * --e) + 2) + i
            },
            easeInCirc: function(t, e, i, s, n) {
                return -s * (Math.sqrt(1 - (e /= n) * e) - 1) + i
            },
            easeOutCirc: function(t, e, i, s, n) {
                return s * Math.sqrt(1 - (e = e / n - 1) * e) + i
            },
            easeInOutCirc: function(t, e, i, s, n) {
                return (e /= n / 2) < 1 ? -s / 2 * (Math.sqrt(1 - e * e) - 1) + i : s / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
            },
            easeInElastic: function(t, e, i, s, n) {
                var o = 1.70158,
                    r = 0,
                    a = s;
                if (0 == e) return i;
                if (1 == (e /= n)) return i + s;
                if (r || (r = .3 * n), a < Math.abs(s)) {
                    a = s;
                    var o = r / 4
                } else var o = r / (2 * Math.PI) * Math.asin(s / a);
                return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - o) * 2 * Math.PI / r)) + i
            },
            easeOutElastic: function(t, e, i, s, n) {
                var o = 1.70158,
                    r = 0,
                    a = s;
                if (0 == e) return i;
                if (1 == (e /= n)) return i + s;
                if (r || (r = .3 * n), a < Math.abs(s)) {
                    a = s;
                    var o = r / 4
                } else var o = r / (2 * Math.PI) * Math.asin(s / a);
                return a * Math.pow(2, -10 * e) * Math.sin((e * n - o) * 2 * Math.PI / r) + s + i
            },
            easeInOutElastic: function(t, e, i, s, n) {
                var o = 1.70158,
                    r = 0,
                    a = s;
                if (0 == e) return i;
                if (2 == (e /= n / 2)) return i + s;
                if (r || (r = .3 * n * 1.5), a < Math.abs(s)) {
                    a = s;
                    var o = r / 4
                } else var o = r / (2 * Math.PI) * Math.asin(s / a);
                return e < 1 ? -.5 * a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - o) * 2 * Math.PI / r) + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - o) * 2 * Math.PI / r) * .5 + s + i
            },
            easeInBack: function(t, i, s, n, o, r) {
                return r == e && (r = 1.70158), n * (i /= o) * i * ((r + 1) * i - r) + s
            },
            easeOutBack: function(t, i, s, n, o, r) {
                return r == e && (r = 1.70158), n * ((i = i / o - 1) * i * ((r + 1) * i + r) + 1) + s
            },
            easeInOutBack: function(t, i, s, n, o, r) {
                return r == e && (r = 1.70158), (i /= o / 2) < 1 ? n / 2 * i * i * (((r *= 1.525) + 1) * i - r) + s : n / 2 * ((i -= 2) * i * (((r *= 1.525) + 1) * i + r) + 2) + s
            },
            easeInBounce: function(e, i, s, n, o) {
                return n - t.easing.easeOutBounce(e, o - i, 0, n, o) + s
            },
            easeOutBounce: function(t, e, i, s, n) {
                return (e /= n) < 1 / 2.75 ? 7.5625 * s * e * e + i : e < 2 / 2.75 ? s * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : e < 2.5 / 2.75 ? s * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : s * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
            },
            easeInOutBounce: function(e, i, s, n, o) {
                return i < o / 2 ? .5 * t.easing.easeInBounce(e, 2 * i, 0, n, o) + s : .5 * t.easing.easeOutBounce(e, 2 * i - o, 0, n, o) + .5 * n + s
            }
        })
    }(jQuery),
    function(t, e) {
        t.effects.blind = function(e) {
            return this.queue(function() {
                var i = t(this),
                    s = ["position", "top", "bottom", "left", "right"],
                    n = t.effects.setMode(i, e.options.mode || "hide"),
                    o = e.options.direction || "vertical";
                t.effects.save(i, s), i.show();
                var r = t.effects.createWrapper(i).css({
                        overflow: "hidden"
                    }),
                    a = "vertical" == o ? "height" : "width",
                    l = "vertical" == o ? r.height() : r.width();
                "show" == n && r.css(a, 0);
                var h = {};
                h[a] = "show" == n ? l : 0, r.animate(h, e.duration, e.options.easing, function() {
                    "hide" == n && i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(i[0], arguments), i.dequeue()
                })
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.bounce = function(e) {
            return this.queue(function() {
                var i = t(this),
                    s = ["position", "top", "bottom", "left", "right"],
                    n = t.effects.setMode(i, e.options.mode || "effect"),
                    o = e.options.direction || "up",
                    r = e.options.distance || 20,
                    a = e.options.times || 5,
                    l = e.duration || 250;
                /show|hide/.test(n) && s.push("opacity"), t.effects.save(i, s), i.show(), t.effects.createWrapper(i);
                var h = "up" == o || "down" == o ? "top" : "left",
                    c = "up" == o || "left" == o ? "pos" : "neg",
                    r = e.options.distance || ("top" == h ? i.outerHeight(!0) / 3 : i.outerWidth(!0) / 3);
                if ("show" == n && i.css("opacity", 0).css(h, "pos" == c ? -r : r), "hide" == n && (r /= 2 * a), "hide" != n && a--, "show" == n) {
                    var u = {
                        opacity: 1
                    };
                    u[h] = ("pos" == c ? "+=" : "-=") + r, i.animate(u, l / 2, e.options.easing), r /= 2, a--
                }
                for (var d = 0; d < a; d++) {
                    var p = {},
                        f = {};
                    p[h] = ("pos" == c ? "-=" : "+=") + r, f[h] = ("pos" == c ? "+=" : "-=") + r, i.animate(p, l / 2, e.options.easing).animate(f, l / 2, e.options.easing), r = "hide" == n ? 2 * r : r / 2
                }
                if ("hide" == n) {
                    var u = {
                        opacity: 0
                    };
                    u[h] = ("pos" == c ? "-=" : "+=") + r, i.animate(u, l / 2, e.options.easing, function() {
                        i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments)
                    })
                } else {
                    var p = {},
                        f = {};
                    p[h] = ("pos" == c ? "-=" : "+=") + r, f[h] = ("pos" == c ? "+=" : "-=") + r, i.animate(p, l / 2, e.options.easing).animate(f, l / 2, e.options.easing, function() {
                        t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments)
                    })
                }
                i.queue("fx", function() {
                    i.dequeue()
                }), i.dequeue()
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.clip = function(e) {
            return this.queue(function() {
                var i = t(this),
                    s = ["position", "top", "bottom", "left", "right", "height", "width"],
                    n = t.effects.setMode(i, e.options.mode || "hide"),
                    o = e.options.direction || "vertical";
                t.effects.save(i, s), i.show();
                var r = t.effects.createWrapper(i).css({
                        overflow: "hidden"
                    }),
                    a = "IMG" == i[0].tagName ? r : i,
                    l = {
                        size: "vertical" == o ? "height" : "width",
                        position: "vertical" == o ? "top" : "left"
                    },
                    h = "vertical" == o ? a.height() : a.width();
                "show" == n && (a.css(l.size, 0), a.css(l.position, h / 2));
                var c = {};
                c[l.size] = "show" == n ? h : 0, c[l.position] = "show" == n ? 0 : h / 2, a.animate(c, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.options.easing,
                    complete: function() {
                        "hide" == n && i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(i[0], arguments), i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.drop = function(e) {
            return this.queue(function() {
                var i = t(this),
                    s = ["position", "top", "bottom", "left", "right", "opacity"],
                    n = t.effects.setMode(i, e.options.mode || "hide"),
                    o = e.options.direction || "left";
                t.effects.save(i, s), i.show(), t.effects.createWrapper(i);
                var r = "up" == o || "down" == o ? "top" : "left",
                    a = "up" == o || "left" == o ? "pos" : "neg",
                    l = e.options.distance || ("top" == r ? i.outerHeight(!0) / 2 : i.outerWidth(!0) / 2);
                "show" == n && i.css("opacity", 0).css(r, "pos" == a ? -l : l);
                var h = {
                    opacity: "show" == n ? 1 : 0
                };
                h[r] = ("show" == n ? "pos" == a ? "+=" : "-=" : "pos" == a ? "-=" : "+=") + l, i.animate(h, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.options.easing,
                    complete: function() {
                        "hide" == n && i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments), i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.explode = function(e) {
            return this.queue(function() {
                var i = e.options.pieces ? Math.round(Math.sqrt(e.options.pieces)) : 3,
                    s = e.options.pieces ? Math.round(Math.sqrt(e.options.pieces)) : 3;
                e.options.mode = "toggle" == e.options.mode ? t(this).is(":visible") ? "hide" : "show" : e.options.mode;
                var n = t(this).show().css("visibility", "hidden"),
                    o = n.offset();
                o.top -= parseInt(n.css("marginTop"), 10) || 0, o.left -= parseInt(n.css("marginLeft"), 10) || 0;
                for (var r = n.outerWidth(!0), a = n.outerHeight(!0), l = 0; l < i; l++)
                    for (var h = 0; h < s; h++) n.clone().appendTo("body").wrap("<div></div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -h * (r / s),
                        top: -l * (a / i)
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: r / s,
                        height: a / i,
                        left: o.left + h * (r / s) + ("show" == e.options.mode ? (h - Math.floor(s / 2)) * (r / s) : 0),
                        top: o.top + l * (a / i) + ("show" == e.options.mode ? (l - Math.floor(i / 2)) * (a / i) : 0),
                        opacity: "show" == e.options.mode ? 0 : 1
                    }).animate({
                        left: o.left + h * (r / s) + ("show" == e.options.mode ? 0 : (h - Math.floor(s / 2)) * (r / s)),
                        top: o.top + l * (a / i) + ("show" == e.options.mode ? 0 : (l - Math.floor(i / 2)) * (a / i)),
                        opacity: "show" == e.options.mode ? 1 : 0
                    }, e.duration || 500);
                setTimeout(function() {
                    "show" == e.options.mode ? n.css({
                        visibility: "visible"
                    }) : n.css({
                        visibility: "visible"
                    }).hide(), e.callback && e.callback.apply(n[0]), n.dequeue(), t("div.ui-effects-explode").remove()
                }, e.duration || 500)
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.fade = function(e) {
            return this.queue(function() {
                var i = t(this),
                    s = t.effects.setMode(i, e.options.mode || "hide");
                i.animate({
                    opacity: s
                }, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.options.easing,
                    complete: function() {
                        e.callback && e.callback.apply(this, arguments), i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.fold = function(e) {
            return this.queue(function() {
                var i = t(this),
                    s = ["position", "top", "bottom", "left", "right"],
                    n = t.effects.setMode(i, e.options.mode || "hide"),
                    o = e.options.size || 15,
                    r = !!e.options.horizFirst,
                    a = e.duration ? e.duration / 2 : t.fx.speeds._default / 2;
                t.effects.save(i, s), i.show();
                var l = t.effects.createWrapper(i).css({
                        overflow: "hidden"
                    }),
                    h = "show" == n != r,
                    c = h ? ["width", "height"] : ["height", "width"],
                    u = h ? [l.width(), l.height()] : [l.height(), l.width()],
                    d = /([0-9]+)%/.exec(o);
                d && (o = parseInt(d[1], 10) / 100 * u["hide" == n ? 0 : 1]), "show" == n && l.css(r ? {
                    height: 0,
                    width: o
                } : {
                    height: o,
                    width: 0
                });
                var p = {},
                    f = {};
                p[c[0]] = "show" == n ? u[0] : o, f[c[1]] = "show" == n ? u[1] : 0, l.animate(p, a, e.options.easing).animate(f, a, e.options.easing, function() {
                    "hide" == n && i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(i[0], arguments), i.dequeue()
                })
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.highlight = function(e) {
            return this.queue(function() {
                var i = t(this),
                    s = ["backgroundImage", "backgroundColor", "opacity"],
                    n = t.effects.setMode(i, e.options.mode || "show"),
                    o = {
                        backgroundColor: i.css("backgroundColor")
                    };
                "hide" == n && (o.opacity = 0), t.effects.save(i, s), i.show().css({
                    backgroundImage: "none",
                    backgroundColor: e.options.color || "#ffff99"
                }).animate(o, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.options.easing,
                    complete: function() {
                        "hide" == n && i.hide(), t.effects.restore(i, s), "show" != n || t.support.opacity || this.style.removeAttribute("filter"), e.callback && e.callback.apply(this, arguments), i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.pulsate = function(e) {
            return this.queue(function() {
                var i = t(this),
                    s = t.effects.setMode(i, e.options.mode || "show"),
                    n = 2 * (e.options.times || 5) - 1,
                    o = e.duration ? e.duration / 2 : t.fx.speeds._default / 2,
                    r = i.is(":visible"),
                    a = 0;
                r || (i.css("opacity", 0).show(), a = 1), ("hide" == s && r || "show" == s && !r) && n--;
                for (var l = 0; l < n; l++) i.animate({
                    opacity: a
                }, o, e.options.easing), a = (a + 1) % 2;
                i.animate({
                    opacity: a
                }, o, e.options.easing, function() {
                    0 == a && i.hide(), e.callback && e.callback.apply(this, arguments)
                }), i.queue("fx", function() {
                    i.dequeue()
                }).dequeue()
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.puff = function(e) {
            return this.queue(function() {
                var i = t(this),
                    s = t.effects.setMode(i, e.options.mode || "hide"),
                    n = parseInt(e.options.percent, 10) || 150,
                    o = n / 100,
                    r = {
                        height: i.height(),
                        width: i.width()
                    };
                t.extend(e.options, {
                    fade: !0,
                    mode: s,
                    percent: "hide" == s ? n : 100,
                    from: "hide" == s ? r : {
                        height: r.height * o,
                        width: r.width * o
                    }
                }), i.effect("scale", e.options, e.duration, e.callback), i.dequeue()
            })
        }, t.effects.scale = function(e) {
            return this.queue(function() {
                var i = t(this),
                    s = t.extend(!0, {}, e.options),
                    n = t.effects.setMode(i, e.options.mode || "effect"),
                    o = parseInt(e.options.percent, 10) || (0 == parseInt(e.options.percent, 10) ? 0 : "hide" == n ? 0 : 100),
                    r = e.options.direction || "both",
                    a = e.options.origin;
                "effect" != n && (s.origin = a || ["middle", "center"], s.restore = !0);
                var l = {
                    height: i.height(),
                    width: i.width()
                };
                i.from = e.options.from || ("show" == n ? {
                    height: 0,
                    width: 0
                } : l);
                var h = {
                    y: "horizontal" != r ? o / 100 : 1,
                    x: "vertical" != r ? o / 100 : 1
                };
                i.to = {
                    height: l.height * h.y,
                    width: l.width * h.x
                }, e.options.fade && ("show" == n && (i.from.opacity = 0, i.to.opacity = 1), "hide" == n && (i.from.opacity = 1, i.to.opacity = 0)), s.from = i.from, s.to = i.to, s.mode = n, i.effect("size", s, e.duration, e.callback), i.dequeue()
            })
        }, t.effects.size = function(e) {
            return this.queue(function() {
                var i = t(this),
                    s = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                    n = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                    o = ["width", "height", "overflow"],
                    r = ["fontSize"],
                    a = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                    l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                    h = t.effects.setMode(i, e.options.mode || "effect"),
                    c = e.options.restore || !1,
                    u = e.options.scale || "both",
                    d = e.options.origin,
                    p = {
                        height: i.height(),
                        width: i.width()
                    };
                if (i.from = e.options.from || p, i.to = e.options.to || p, d) {
                    var f = t.effects.getBaseline(d, p);
                    i.from.top = (p.height - i.from.height) * f.y, i.from.left = (p.width - i.from.width) * f.x, i.to.top = (p.height - i.to.height) * f.y, i.to.left = (p.width - i.to.width) * f.x
                }
                var g = {
                    from: {
                        y: i.from.height / p.height,
                        x: i.from.width / p.width
                    },
                    to: {
                        y: i.to.height / p.height,
                        x: i.to.width / p.width
                    }
                };
                ("box" == u || "both" == u) && (g.from.y != g.to.y && (s = s.concat(a), i.from = t.effects.setTransition(i, a, g.from.y, i.from), i.to = t.effects.setTransition(i, a, g.to.y, i.to)), g.from.x != g.to.x && (s = s.concat(l), i.from = t.effects.setTransition(i, l, g.from.x, i.from), i.to = t.effects.setTransition(i, l, g.to.x, i.to))), ("content" == u || "both" == u) && g.from.y != g.to.y && (s = s.concat(r), i.from = t.effects.setTransition(i, r, g.from.y, i.from), i.to = t.effects.setTransition(i, r, g.to.y, i.to)), t.effects.save(i, c ? s : n), i.show(), t.effects.createWrapper(i), i.css("overflow", "hidden").css(i.from), ("content" == u || "both" == u) && (a = a.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), o = s.concat(a).concat(l), i.find("*[width]").each(function() {
                    var i = t(this);
                    c && t.effects.save(i, o);
                    var s = {
                        height: i.height(),
                        width: i.width()
                    };
                    i.from = {
                        height: s.height * g.from.y,
                        width: s.width * g.from.x
                    }, i.to = {
                        height: s.height * g.to.y,
                        width: s.width * g.to.x
                    }, g.from.y != g.to.y && (i.from = t.effects.setTransition(i, a, g.from.y, i.from), i.to = t.effects.setTransition(i, a, g.to.y, i.to)), g.from.x != g.to.x && (i.from = t.effects.setTransition(i, l, g.from.x, i.from), i.to = t.effects.setTransition(i, l, g.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.options.easing, function() {
                        c && t.effects.restore(i, o)
                    })
                })), i.animate(i.to, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.options.easing,
                    complete: function() {
                        0 === i.to.opacity && i.css("opacity", i.from.opacity), "hide" == h && i.hide(), t.effects.restore(i, c ? s : n), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments), i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.shake = function(e) {
            return this.queue(function() {
                var i = t(this),
                    s = ["position", "top", "bottom", "left", "right"],
                    n = (t.effects.setMode(i, e.options.mode || "effect"), e.options.direction || "left"),
                    o = e.options.distance || 20,
                    r = e.options.times || 3,
                    a = e.duration || e.options.duration || 140;
                t.effects.save(i, s), i.show(), t.effects.createWrapper(i);
                var l = "up" == n || "down" == n ? "top" : "left",
                    h = "up" == n || "left" == n ? "pos" : "neg",
                    c = {},
                    u = {},
                    d = {};
                c[l] = ("pos" == h ? "-=" : "+=") + o, u[l] = ("pos" == h ? "+=" : "-=") + 2 * o, d[l] = ("pos" == h ? "-=" : "+=") + 2 * o, i.animate(c, a, e.options.easing);
                for (var p = 1; p < r; p++) i.animate(u, a, e.options.easing).animate(d, a, e.options.easing);
                i.animate(u, a, e.options.easing).animate(c, a / 2, e.options.easing, function() {
                    t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments)
                }), i.queue("fx", function() {
                    i.dequeue()
                }), i.dequeue()
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.slide = function(e) {
            return this.queue(function() {
                var i = t(this),
                    s = ["position", "top", "bottom", "left", "right"],
                    n = t.effects.setMode(i, e.options.mode || "show"),
                    o = e.options.direction || "left";
                t.effects.save(i, s), i.show(), t.effects.createWrapper(i).css({
                    overflow: "hidden"
                });
                var r = "up" == o || "down" == o ? "top" : "left",
                    a = "up" == o || "left" == o ? "pos" : "neg",
                    l = e.options.distance || ("top" == r ? i.outerHeight(!0) : i.outerWidth(!0));
                "show" == n && i.css(r, "pos" == a ? isNaN(l) ? "-" + l : -l : l);
                var h = {};
                h[r] = ("show" == n ? "pos" == a ? "+=" : "-=" : "pos" == a ? "-=" : "+=") + l, i.animate(h, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.options.easing,
                    complete: function() {
                        "hide" == n && i.hide(), t.effects.restore(i, s), t.effects.removeWrapper(i), e.callback && e.callback.apply(this, arguments), i.dequeue()
                    }
                })
            })
        }
    }(jQuery),
    function(t, e) {
        t.effects.transfer = function(e) {
            return this.queue(function() {
                var i = t(this),
                    s = t(e.options.to),
                    n = s.offset(),
                    o = {
                        top: n.top,
                        left: n.left,
                        height: s.innerHeight(),
                        width: s.innerWidth()
                    },
                    r = i.offset(),
                    a = t('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(e.options.className).css({
                        top: r.top,
                        left: r.left,
                        height: i.innerHeight(),
                        width: i.innerWidth(),
                        position: "absolute"
                    }).animate(o, e.duration, e.options.easing, function() {
                        a.remove(), e.callback && e.callback.apply(i[0], arguments), i.dequeue()
                    })
            })
        }
    }(jQuery),
    function(t, e) {
        t.widget("ui.accordion", {
            options: {
                active: 0,
                animated: "slide",
                autoHeight: !0,
                clearStyle: !1,
                collapsible: !1,
                event: "click",
                fillSpace: !1,
                header: "> li > :first-child,> :not(li):even",
                icons: {
                    header: "ui-icon-triangle-1-e",
                    headerSelected: "ui-icon-triangle-1-s"
                },
                navigation: !1,
                navigationFilter: function() {
                    return this.href.toLowerCase() === location.href.toLowerCase()
                }
            },
            _create: function() {
                var e = this,
                    i = e.options;
                if (e.running = 0, e.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"), e.headers = e.element.find(i.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function() {
                        i.disabled || t(this).addClass("ui-state-hover")
                    }).bind("mouseleave.accordion", function() {
                        i.disabled || t(this).removeClass("ui-state-hover")
                    }).bind("focus.accordion", function() {
                        i.disabled || t(this).addClass("ui-state-focus")
                    }).bind("blur.accordion", function() {
                        i.disabled || t(this).removeClass("ui-state-focus")
                    }), e.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"), i.navigation) {
                    var s = e.element.find("a").filter(i.navigationFilter).eq(0);
                    if (s.length) {
                        var n = s.closest(".ui-accordion-header");
                        n.length ? e.active = n : e.active = s.closest(".ui-accordion-content").prev()
                    }
                }
                e.active = e._findActive(e.active || i.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), e.active.next().addClass("ui-accordion-content-active"), e._createIcons(), e.resize(), e.element.attr("role", "tablist"), e.headers.attr("role", "tab").bind("keydown.accordion", function(t) {
                    return e._keydown(t)
                }).next().attr("role", "tabpanel"), e.headers.not(e.active || "").attr({
                    "aria-expanded": "false",
                    "aria-selected": "false",
                    tabIndex: -1
                }).next().hide(), e.active.length ? e.active.attr({
                    "aria-expanded": "true",
                    "aria-selected": "true",
                    tabIndex: 0
                }) : e.headers.eq(0).attr("tabIndex", 0), t.browser.safari || e.headers.find("a").attr("tabIndex", -1), i.event && e.headers.bind(i.event.split(" ").join(".accordion ") + ".accordion", function(t) {
                    e._clickHandler.call(e, t, this), t.preventDefault()
                })
            },
            _createIcons: function() {
                var e = this.options;
                e.icons && (t("<span></span>").addClass("ui-icon " + e.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(e.icons.header).toggleClass(e.icons.headerSelected), this.element.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons")
            },
            destroy: function() {
                var e = this.options;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons();
                var i = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
                return (e.autoHeight || e.fillHeight) && i.css("height", ""), t.Widget.prototype.destroy.call(this)
            },
            _setOption: function(e, i) {
                t.Widget.prototype._setOption.apply(this, arguments), "active" == e && this.activate(i), "icons" == e && (this._destroyIcons(), i && this._createIcons()), "disabled" == e && this.headers.add(this.headers.next())[i ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
            },
            _keydown: function(e) {
                if (!this.options.disabled && !e.altKey && !e.ctrlKey) {
                    var i = t.ui.keyCode,
                        s = this.headers.length,
                        n = this.headers.index(e.target),
                        o = !1;
                    switch (e.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            o = this.headers[(n + 1) % s];
                            break;
                        case i.LEFT:
                        case i.UP:
                            o = this.headers[(n - 1 + s) % s];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._clickHandler({
                                target: e.target
                            }, e.target), e.preventDefault()
                    }
                    return !o || (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), !1)
                }
            },
            resize: function() {
                var e, i = this.options;
                if (i.fillSpace) {
                    if (t.browser.msie) {
                        var s = this.element.parent().css("overflow");
                        this.element.parent().css("overflow", "hidden")
                    }
                    e = this.element.parent().height(), t.browser.msie && this.element.parent().css("overflow", s), this.headers.each(function() {
                        e -= t(this).outerHeight(!0)
                    }), this.headers.next().each(function() {
                        t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                    }).css("overflow", "auto")
                } else i.autoHeight && (e = 0, this.headers.next().each(function() {
                    e = Math.max(e, t(this).height("").height())
                }).height(e));
                return this
            },
            activate: function(t) {
                this.options.active = t;
                var e = this._findActive(t)[0];
                return this._clickHandler({
                    target: e
                }, e), this
            },
            _findActive: function(e) {
                return e ? "number" == typeof e ? this.headers.filter(":eq(" + e + ")") : this.headers.not(this.headers.not(e)) : !1 === e ? t([]) : this.headers.filter(":eq(0)")
            },
            _clickHandler: function(e, i) {
                var s = this.options;
                if (!s.disabled) {
                    if (!e.target) {
                        if (!s.collapsible) return;
                        this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(s.icons.headerSelected).addClass(s.icons.header), this.active.next().addClass("ui-accordion-content-active");
                        var n = this.active.next(),
                            o = {
                                options: s,
                                newHeader: t([]),
                                oldHeader: s.active,
                                newContent: t([]),
                                oldContent: n
                            },
                            r = this.active = t([]);
                        this._toggle(r, n, o);
                        return
                    }
                    var a = t(e.currentTarget || i),
                        l = a[0] === this.active[0];
                    if (s.active = (!s.collapsible || !l) && this.headers.index(a), !this.running && (s.collapsible || !l)) {
                        var h = this.active,
                            r = a.next(),
                            n = this.active.next(),
                            o = {
                                options: s,
                                newHeader: l && s.collapsible ? t([]) : a,
                                oldHeader: this.active,
                                newContent: l && s.collapsible ? t([]) : r,
                                oldContent: n
                            },
                            c = this.headers.index(this.active[0]) > this.headers.index(a[0]);
                        this.active = l ? t([]) : a, this._toggle(r, n, o, l, c), h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(s.icons.headerSelected).addClass(s.icons.header), l || (a.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(s.icons.header).addClass(s.icons.headerSelected), a.next().addClass("ui-accordion-content-active"))
                    }
                }
            },
            _toggle: function(e, i, s, n, o) {
                var r = this,
                    a = r.options;
                r.toShow = e, r.toHide = i, r.data = s;
                var l = function() {
                    if (r) return r._completed.apply(r, arguments)
                };
                if (r._trigger("changestart", null, r.data), r.running = 0 === i.size() ? e.size() : i.size(), a.animated) {
                    var h = {};
                    h = a.collapsible && n ? {
                        toShow: t([]),
                        toHide: i,
                        complete: l,
                        down: o,
                        autoHeight: a.autoHeight || a.fillSpace
                    } : {
                        toShow: e,
                        toHide: i,
                        complete: l,
                        down: o,
                        autoHeight: a.autoHeight || a.fillSpace
                    }, a.proxied || (a.proxied = a.animated), a.proxiedDuration || (a.proxiedDuration = a.duration), a.animated = t.isFunction(a.proxied) ? a.proxied(h) : a.proxied, a.duration = t.isFunction(a.proxiedDuration) ? a.proxiedDuration(h) : a.proxiedDuration;
                    var c = t.ui.accordion.animations,
                        u = a.duration,
                        d = a.animated;
                    !d || c[d] || t.easing[d] || (d = "slide"), c[d] || (c[d] = function(t) {
                        this.slide(t, {
                            easing: d,
                            duration: u || 700
                        })
                    }), c[d](h)
                } else a.collapsible && n ? e.toggle() : (i.hide(), e.show()), l(!0);
                i.prev().attr({
                    "aria-expanded": "false",
                    "aria-selected": "false",
                    tabIndex: -1
                }).blur(), e.prev().attr({
                    "aria-expanded": "true",
                    "aria-selected": "true",
                    tabIndex: 0
                }).focus()
            },
            _completed: function(t) {
                this.running = t ? 0 : --this.running, this.running || (this.options.clearStyle && this.toShow.add(this.toHide).css({
                    height: "",
                    overflow: ""
                }), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data))
            }
        }), t.extend(t.ui.accordion, {
            version: "1.8.22",
            animations: {
                slide: function(e, i) {
                    if (!(e = t.extend({
                            easing: "swing",
                            duration: 300
                        }, e, i)).toHide.size()) {
                        e.toShow.animate({
                            height: "show",
                            paddingTop: "show",
                            paddingBottom: "show"
                        }, e);
                        return
                    }
                    if (!e.toShow.size()) {
                        e.toHide.animate({
                            height: "hide",
                            paddingTop: "hide",
                            paddingBottom: "hide"
                        }, e);
                        return
                    }
                    var s, n = e.toShow.css("overflow"),
                        o = 0,
                        r = {},
                        a = {},
                        l = ["height", "paddingTop", "paddingBottom"],
                        h = e.toShow;
                    s = h[0].style.width, h.width(h.parent().width() - parseFloat(h.css("paddingLeft")) - parseFloat(h.css("paddingRight")) - (parseFloat(h.css("borderLeftWidth")) || 0) - (parseFloat(h.css("borderRightWidth")) || 0)), t.each(l, function(i, s) {
                        a[s] = "hide";
                        var n = ("" + t.css(e.toShow[0], s)).match(/^([\d+-.]+)(.*)$/);
                        r[s] = {
                            value: n[1],
                            unit: n[2] || "px"
                        }
                    }), e.toShow.css({
                        height: 0,
                        overflow: "hidden"
                    }).show(), e.toHide.filter(":hidden").each(e.complete).end().filter(":visible").animate(a, {
                        step: function(t, i) {
                            "height" == i.prop && (o = i.end - i.start == 0 ? 0 : (i.now - i.start) / (i.end - i.start)), e.toShow[0].style[i.prop] = o * r[i.prop].value + r[i.prop].unit
                        },
                        duration: e.duration,
                        easing: e.easing,
                        complete: function() {
                            e.autoHeight || e.toShow.css("height", ""), e.toShow.css({
                                width: s,
                                overflow: n
                            }), e.complete()
                        }
                    })
                },
                bounceslide: function(t) {
                    this.slide(t, {
                        easing: t.down ? "easeOutBounce" : "swing",
                        duration: t.down ? 1e3 : 200
                    })
                }
            }
        })
    }(jQuery),
    function(t, e) {
        var i = 0;
        t.widget("ui.autocomplete", {
            options: {
                appendTo: "body",
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null
            },
            pending: 0,
            _create: function() {
                var e, i = this,
                    s = this.element[0].ownerDocument;
                this.isMultiLine = this.element.is("textarea"), this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                    role: "textbox",
                    "aria-autocomplete": "list",
                    "aria-haspopup": "true"
                }).bind("keydown.autocomplete", function(s) {
                    if (!(i.options.disabled || i.element.propAttr("readOnly"))) {
                        e = !1;
                        var n = t.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                i._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                i._move("nextPage", s);
                                break;
                            case n.UP:
                                i._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                i._keyEvent("next", s);
                                break;
                            case n.ENTER:
                            case n.NUMPAD_ENTER:
                                i.menu.active && (e = !0, s.preventDefault());
                            case n.TAB:
                                if (!i.menu.active) return;
                                i.menu.select(s);
                                break;
                            case n.ESCAPE:
                                i.element.val(i.term), i.close(s);
                                break;
                            default:
                                clearTimeout(i.searching), i.searching = setTimeout(function() {
                                    i.term != i.element.val() && (i.selectedItem = null, i.search(null, s))
                                }, i.options.delay)
                        }
                    }
                }).bind("keypress.autocomplete", function(t) {
                    e && (e = !1, t.preventDefault())
                }).bind("focus.autocomplete", function() {
                    i.options.disabled || (i.selectedItem = null, i.previous = i.element.val())
                }).bind("blur.autocomplete", function(t) {
                    i.options.disabled || (clearTimeout(i.searching), i.closing = setTimeout(function() {
                        i.close(t), i._change(t)
                    }, 150))
                }), this._initSource(), this.menu = t("<ul></ul>").addClass("ui-autocomplete").appendTo(t(this.options.appendTo || "body", s)[0]).mousedown(function(e) {
                    var s = i.menu.element[0];
                    t(e.target).closest(".ui-menu-item").length || setTimeout(function() {
                        t(document).one("mousedown", function(e) {
                            e.target === i.element[0] || e.target === s || t.ui.contains(s, e.target) || i.close()
                        })
                    }, 1), setTimeout(function() {
                        clearTimeout(i.closing)
                    }, 13)
                }).menu({
                    focus: function(t, e) {
                        var s = e.item.data("item.autocomplete");
                        !1 !== i._trigger("focus", t, {
                            item: s
                        }) && /^key/.test(t.originalEvent.type) && i.element.val(s.value)
                    },
                    selected: function(t, e) {
                        var n = e.item.data("item.autocomplete"),
                            o = i.previous;
                        i.element[0] !== s.activeElement && (i.element.focus(), i.previous = o, setTimeout(function() {
                            i.previous = o, i.selectedItem = n
                        }, 1)), !1 !== i._trigger("select", t, {
                            item: n
                        }) && i.element.val(n.value), i.term = i.element.val(), i.close(t), i.selectedItem = n
                    },
                    blur: function(t, e) {
                        i.menu.element.is(":visible") && i.element.val() !== i.term && i.element.val(i.term)
                    }
                }).zIndex(this.element.zIndex() + 1).css({
                    top: 0,
                    left: 0
                }).hide().data("menu"), t.fn.bgiframe && this.menu.element.bgiframe(), i.beforeunloadHandler = function() {
                    i.element.removeAttr("autocomplete")
                }, t(window).bind("beforeunload", i.beforeunloadHandler)
            },
            destroy: function() {
                this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), t(window).unbind("beforeunload", this.beforeunloadHandler), t.Widget.prototype.destroy.call(this)
            },
            _setOption: function(e, i) {
                t.Widget.prototype._setOption.apply(this, arguments), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(t(i || "body", this.element[0].ownerDocument)[0]), "disabled" === e && i && this.xhr && this.xhr.abort()
            },
            _initSource: function() {
                var e, i, s = this;
                t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
                    s(t.ui.autocomplete.filter(e, i.term))
                }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
                    s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                        url: i,
                        data: e,
                        dataType: "json",
                        success: function(t, e) {
                            n(t)
                        },
                        error: function() {
                            n([])
                        }
                    })
                }) : this.source = this.options.source
            },
            search: function(t, e) {
                return (t = null != t ? t : this.element.val(), this.term = this.element.val(), t.length < this.options.minLength) ? this.close(e) : (clearTimeout(this.closing), !1 !== this._trigger("search", e)) ? this._search(t) : void 0
            },
            _search: function(t) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({
                    term: t
                }, this._response())
            },
            _response: function() {
                var t = this,
                    e = ++i;
                return function(s) {
                    e === i && t.__response(s), t.pending--, t.pending || t.element.removeClass("ui-autocomplete-loading")
                }
            },
            __response: function(t) {
                !this.options.disabled && t && t.length ? (t = this._normalize(t), this._suggest(t), this._trigger("open")) : this.close()
            },
            close: function(t) {
                clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", t))
            },
            _change: function(t) {
                this.previous !== this.element.val() && this._trigger("change", t, {
                    item: this.selectedItem
                })
            },
            _normalize: function(e) {
                return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                    return "string" == typeof e ? {
                        label: e,
                        value: e
                    } : t.extend({
                        label: e.label || e.value,
                        value: e.value || e.label
                    }, e)
                })
            },
            _suggest: function(e) {
                var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
                this._renderMenu(i, e), this.menu.deactivate(), this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next(new t.Event("mouseover"))
            },
            _resizeMenu: function() {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(e, i) {
                var s = this;
                t.each(i, function(t, i) {
                    s._renderItem(e, i)
                })
            },
            _renderItem: function(e, i) {
                return t("<li></li>").data("item.autocomplete", i).append(t("<a></a>").text(i.label)).appendTo(e)
            },
            _move: function(t, e) {
                if (!this.menu.element.is(":visible")) {
                    this.search(null, e);
                    return
                }
                if (this.menu.first() && /^previous/.test(t) || this.menu.last() && /^next/.test(t)) {
                    this.element.val(this.term), this.menu.deactivate();
                    return
                }
                this.menu[t](e)
            },
            widget: function() {
                return this.menu.element
            },
            _keyEvent: function(t, e) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
            }
        }), t.extend(t.ui.autocomplete, {
            escapeRegex: function(t) {
                return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
            },
            filter: function(e, i) {
                var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                return t.grep(e, function(t) {
                    return s.test(t.label || t.value || t)
                })
            }
        })
    }(jQuery),
    function(t) {
        t.widget("ui.menu", {
            _create: function() {
                var e = this;
                this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                    role: "listbox",
                    "aria-activedescendant": "ui-active-menuitem"
                }).click(function(i) {
                    t(i.target).closest(".ui-menu-item a").length && (i.preventDefault(), e.select(i))
                }), this.refresh()
            },
            refresh: function() {
                var e = this;
                this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function(i) {
                    e.activate(i, t(this).parent())
                }).mouseleave(function() {
                    e.deactivate()
                })
            },
            activate: function(t, e) {
                if (this.deactivate(), this.hasScroll()) {
                    var i = e.offset().top - this.element.offset().top,
                        s = this.element.scrollTop(),
                        n = this.element.height();
                    i < 0 ? this.element.scrollTop(s + i) : i >= n && this.element.scrollTop(s + i - n + e.height())
                }
                this.active = e.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", t, {
                    item: e
                })
            },
            deactivate: function() {
                this.active && (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null)
            },
            next: function(t) {
                this.move("next", ".ui-menu-item:first", t)
            },
            previous: function(t) {
                this.move("prev", ".ui-menu-item:last", t)
            },
            first: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            last: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            move: function(t, e, i) {
                if (!this.active) {
                    this.activate(i, this.element.children(e));
                    return
                }
                var s = this.active[t + "All"](".ui-menu-item").eq(0);
                s.length ? this.activate(i, s) : this.activate(i, this.element.children(e))
            },
            nextPage: function(e) {
                if (this.hasScroll()) {
                    if (!this.active || this.last()) {
                        this.activate(e, this.element.children(".ui-menu-item:first"));
                        return
                    }
                    var i = this.active.offset().top,
                        s = this.element.height(),
                        n = this.element.children(".ui-menu-item").filter(function() {
                            var e = t(this).offset().top - i - s + t(this).height();
                            return e < 10 && e > -10
                        });
                    n.length || (n = this.element.children(".ui-menu-item:last")), this.activate(e, n)
                } else this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
            },
            previousPage: function(e) {
                if (this.hasScroll()) {
                    if (!this.active || this.first()) {
                        this.activate(e, this.element.children(".ui-menu-item:last"));
                        return
                    }
                    var i = this.active.offset().top,
                        s = this.element.height(),
                        n = this.element.children(".ui-menu-item").filter(function() {
                            var e = t(this).offset().top - i + s - t(this).height();
                            return e < 10 && e > -10
                        });
                    n.length || (n = this.element.children(".ui-menu-item:first")), this.activate(e, n)
                } else this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
            },
            hasScroll: function() {
                return this.element.height() < this.element[t.fn.prop ? "prop" : "attr"]("scrollHeight")
            },
            select: function(t) {
                this._trigger("selected", t, {
                    item: this.active
                })
            }
        })
    }(jQuery),
    function(t, e) {
        var i, s, n, o, r = "ui-button ui-widget ui-state-default ui-corner-all",
            a = "ui-state-hover ui-state-active ",
            l = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            h = function() {
                var e = t(this).find(":ui-button");
                setTimeout(function() {
                    e.button("refresh")
                }, 1)
            },
            c = function(e) {
                var i = e.name,
                    s = e.form,
                    n = t([]);
                return i && (n = s ? t(s).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function() {
                    return !this.form
                })), n
            };
        t.widget("ui.button", {
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset.button").bind("reset.button", h), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.propAttr("disabled") : this.element.propAttr("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                var e = this,
                    a = this.options,
                    l = "checkbox" === this.type || "radio" === this.type,
                    u = "ui-state-hover" + (l ? "" : " ui-state-active"),
                    d = "ui-state-focus";
                null === a.label && (a.label = this.buttonElement.html()), this.buttonElement.addClass(r).attr("role", "button").bind("mouseenter.button", function() {
                    a.disabled || (t(this).addClass("ui-state-hover"), this === i && t(this).addClass("ui-state-active"))
                }).bind("mouseleave.button", function() {
                    a.disabled || t(this).removeClass(u)
                }).bind("click.button", function(t) {
                    a.disabled && (t.preventDefault(), t.stopImmediatePropagation())
                }), this.element.bind("focus.button", function() {
                    e.buttonElement.addClass(d)
                }).bind("blur.button", function() {
                    e.buttonElement.removeClass(d)
                }), l && (this.element.bind("change.button", function() {
                    o || e.refresh()
                }), this.buttonElement.bind("mousedown.button", function(t) {
                    a.disabled || (o = !1, s = t.pageX, n = t.pageY)
                }).bind("mouseup.button", function(t) {
                    a.disabled || s === t.pageX && n === t.pageY || (o = !0)
                })), "checkbox" === this.type ? this.buttonElement.bind("click.button", function() {
                    if (a.disabled || o) return !1;
                    t(this).toggleClass("ui-state-active"), e.buttonElement.attr("aria-pressed", e.element[0].checked)
                }) : "radio" === this.type ? this.buttonElement.bind("click.button", function() {
                    if (a.disabled || o) return !1;
                    t(this).addClass("ui-state-active"), e.buttonElement.attr("aria-pressed", "true");
                    var i = e.element[0];
                    c(i).not(i).map(function() {
                        return t(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown.button", function() {
                    if (a.disabled) return !1;
                    t(this).addClass("ui-state-active"), i = this, t(document).one("mouseup", function() {
                        i = null
                    })
                }).bind("mouseup.button", function() {
                    if (a.disabled) return !1;
                    t(this).removeClass("ui-state-active")
                }).bind("keydown.button", function(e) {
                    if (a.disabled) return !1;
                    (e.keyCode == t.ui.keyCode.SPACE || e.keyCode == t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active")
                }).bind("keyup.button", function() {
                    t(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                    e.keyCode === t.ui.keyCode.SPACE && t(this).click()
                })), this._setOption("disabled", a.disabled), this._resetButton()
            },
            _determineButtonType: function() {
                if (this.element.is(":checkbox") ? this.type = "checkbox" : this.element.is(":radio") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", "checkbox" === this.type || "radio" === this.type) {
                    var t = this.element.parents().filter(":last"),
                        e = "label[for='" + this.element.attr("id") + "']";
                    this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible");
                    var i = this.element.is(":checked");
                    i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", i)
                } else this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(r + " " + a + " " + l).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title"), t.Widget.prototype.destroy.call(this)
            },
            _setOption: function(e, i) {
                if (t.Widget.prototype._setOption.apply(this, arguments), "disabled" === e) {
                    i ? this.element.propAttr("disabled", !0) : this.element.propAttr("disabled", !1);
                    return
                }
                this._resetButton()
            },
            refresh: function() {
                var e = this.element.is(":disabled");
                e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? c(this.element[0]).each(function() {
                    t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if ("input" === this.type) {
                    this.options.label && this.element.val(this.options.label);
                    return
                }
                var e = this.buttonElement.removeClass(l),
                    i = t("<span></span>", this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                    s = this.options.icons,
                    n = s.primary && s.secondary,
                    o = [];
                s.primary || s.secondary ? (this.options.text && o.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (o.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", i))) : o.push("ui-button-text-only"), e.addClass(o.join(" "))
            }
        }), t.widget("ui.buttonset", {
            options: {
                items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(e, i) {
                "disabled" === e && this.buttons.button("option", e, i), t.Widget.prototype._setOption.apply(this, arguments)
            },
            refresh: function() {
                var e = "rtl" === this.element.css("direction");
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                    return t(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            destroy: function() {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                    return t(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), t.Widget.prototype.destroy.call(this)
            }
        })
    }(jQuery),
    function($, undefined) {
        function Datepicker() {
            this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
        }

        function bindHover(t) {
            var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.bind("mouseout", function(t) {
                var i = $(t.target).closest(e);
                i.length && i.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
            }).bind("mouseover", function(i) {
                var s = $(i.target).closest(e);
                !$.datepicker._isDisabledDatepicker(instActive.inline ? t.parent()[0] : instActive.input[0]) && s.length && (s.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), s.addClass("ui-state-hover"), s.hasClass("ui-datepicker-prev") && s.addClass("ui-datepicker-prev-hover"), s.hasClass("ui-datepicker-next") && s.addClass("ui-datepicker-next-hover"))
            })
        }

        function extendRemove(t, e) {
            for (var i in $.extend(t, e), e)(null == e[i] || undefined == e[i]) && (t[i] = e[i]);
            return t
        }

        function isArray(t) {
            return t && ($.browser.safari && "object" == typeof t && t.length || t.constructor && t.constructor.toString().match(/\Array\(\)/))
        }
        $.extend($.ui, {
            datepicker: {
                version: "1.8.22"
            }
        });
        var instActive, PROP_NAME = "datepicker",
            dpuuid = (new Date).getTime();
        $.extend(Datepicker.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            log: function() {
                this.debug && console.log.apply("", arguments)
            },
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(t) {
                return extendRemove(this._defaults, t || {}), this
            },
            _attachDatepicker: function(target, settings) {
                var inlineSettings = null;
                for (var attrName in this._defaults) {
                    var attrValue = target.getAttribute("date:" + attrName);
                    if (attrValue) {
                        inlineSettings = inlineSettings || {};
                        try {
                            inlineSettings[attrName] = eval(attrValue)
                        } catch (err) {
                            inlineSettings[attrName] = attrValue
                        }
                    }
                }
                var nodeName = target.nodeName.toLowerCase(),
                    inline = "div" == nodeName || "span" == nodeName;
                target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
                var inst = this._newInst($(target), inline);
                inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
            },
            _newInst: function(t, e) {
                return {
                    id: t[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: e,
                    dpDiv: e ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
                }
            },
            _connectDatepicker: function(t, e) {
                var i = $(t);
                e.append = $([]), e.trigger = $([]), !i.hasClass(this.markerClassName) && (this._attachments(i, e), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(t, i, s) {
                    e.settings[i] = s
                }).bind("getData.datepicker", function(t, i) {
                    return this._get(e, i)
                }), this._autoSize(e), $.data(t, PROP_NAME, e), e.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function(t, e) {
                var i = this._get(e, "appendText"),
                    s = this._get(e, "isRTL");
                e.append && e.append.remove(), i && (e.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), t[s ? "before" : "after"](e.append)), t.unbind("focus", this._showDatepicker), e.trigger && e.trigger.remove();
                var n = this._get(e, "showOn");
                if (("focus" == n || "both" == n) && t.focus(this._showDatepicker), "button" == n || "both" == n) {
                    var o = this._get(e, "buttonText"),
                        r = this._get(e, "buttonImage");
                    e.trigger = $(this._get(e, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                        src: r,
                        alt: o,
                        title: o
                    }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == r ? o : $("<img/>").attr({
                        src: r,
                        alt: o,
                        title: o
                    }))), t[s ? "before" : "after"](e.trigger), e.trigger.click(function() {
                        return $.datepicker._datepickerShowing && $.datepicker._lastInput == t[0] ? $.datepicker._hideDatepicker() : ($.datepicker._datepickerShowing && $.datepicker._lastInput != t[0] && $.datepicker._hideDatepicker(), $.datepicker._showDatepicker(t[0])), !1
                    })
                }
            },
            _autoSize: function(t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e = new Date(2009, 11, 20),
                        i = this._get(t, "dateFormat");
                    if (i.match(/[DM]/)) {
                        var s = function(t) {
                            for (var e = 0, i = 0, s = 0; s < t.length; s++) t[s].length > e && (e = t[s].length, i = s);
                            return i
                        };
                        e.setMonth(s(this._get(t, i.match(/MM/) ? "monthNames" : "monthNamesShort"))), e.setDate(s(this._get(t, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - e.getDay())
                    }
                    t.input.attr("size", this._formatDate(t, e).length)
                }
            },
            _inlineDatepicker: function(t, e) {
                var i = $(t);
                i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv).bind("setData.datepicker", function(t, i, s) {
                    e.settings[i] = s
                }).bind("getData.datepicker", function(t, i) {
                    return this._get(e, i)
                }), $.data(t, PROP_NAME, e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(t, e, i, s, n) {
                var o = this._dialogInst;
                if (!o) {
                    this.uuid += 1;
                    var r = "dp" + this.uuid;
                    this._dialogInput = $('<input type="text" id="' + r + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), (o = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, $.data(this._dialogInput[0], PROP_NAME, o)
                }
                if (extendRemove(o.settings, s || {}), e = e && e.constructor == Date ? this._formatDate(o, e) : e, this._dialogInput.val(e), this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null, !this._pos) {
                    var a = document.documentElement.clientWidth,
                        l = document.documentElement.clientHeight,
                        h = document.documentElement.scrollLeft || document.body.scrollLeft,
                        c = document.documentElement.scrollTop || document.body.scrollTop;
                    this._pos = [a / 2 - 100 + h, l / 2 - 150 + c]
                }
                return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), o.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, o), this
            },
            _destroyDatepicker: function(t) {
                var e = $(t),
                    i = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                    var s = t.nodeName.toLowerCase();
                    $.removeData(t, PROP_NAME), "input" == s ? (i.append.remove(), i.trigger.remove(), e.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == s || "span" == s) && e.removeClass(this.markerClassName).empty()
                }
            },
            _enableDatepicker: function(t) {
                var e = $(t),
                    i = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                    var s = t.nodeName.toLowerCase();
                    if ("input" == s) t.disabled = !1, i.trigger.filter("button").each(function() {
                        this.disabled = !1
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    });
                    else if ("div" == s || "span" == s) {
                        var n = e.children("." + this._inlineClass);
                        n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
                    }
                    this._disabledInputs = $.map(this._disabledInputs, function(e) {
                        return e == t ? null : e
                    })
                }
            },
            _disableDatepicker: function(t) {
                var e = $(t),
                    i = $.data(t, PROP_NAME);
                if (e.hasClass(this.markerClassName)) {
                    var s = t.nodeName.toLowerCase();
                    if ("input" == s) t.disabled = !0, i.trigger.filter("button").each(function() {
                        this.disabled = !0
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    });
                    else if ("div" == s || "span" == s) {
                        var n = e.children("." + this._inlineClass);
                        n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
                    }
                    this._disabledInputs = $.map(this._disabledInputs, function(e) {
                        return e == t ? null : e
                    }), this._disabledInputs[this._disabledInputs.length] = t
                }
            },
            _isDisabledDatepicker: function(t) {
                if (!t) return !1;
                for (var e = 0; e < this._disabledInputs.length; e++)
                    if (this._disabledInputs[e] == t) return !0;
                return !1
            },
            _getInst: function(t) {
                try {
                    return $.data(t, PROP_NAME)
                } catch (e) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(t, e, i) {
                var s = this._getInst(t);
                if (2 == arguments.length && "string" == typeof e) return "defaults" == e ? $.extend({}, $.datepicker._defaults) : s ? "all" == e ? $.extend({}, s.settings) : this._get(s, e) : null;
                var n = e || {};
                if ("string" == typeof e && ((n = {})[e] = i), s) {
                    this._curInst == s && this._hideDatepicker();
                    var o = this._getDateDatepicker(t, !0),
                        r = this._getMinMaxDate(s, "min"),
                        a = this._getMinMaxDate(s, "max");
                    extendRemove(s.settings, n), null !== r && undefined !== n.dateFormat && undefined === n.minDate && (s.settings.minDate = this._formatDate(s, r)), null !== a && undefined !== n.dateFormat && undefined === n.maxDate && (s.settings.maxDate = this._formatDate(s, a)), this._attachments($(t), s), this._autoSize(s), this._setDate(s, o), this._updateAlternate(s), this._updateDatepicker(s)
                }
            },
            _changeDatepicker: function(t, e, i) {
                this._optionDatepicker(t, e, i)
            },
            _refreshDatepicker: function(t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
            },
            _doKeyDown: function(t) {
                var e = $.datepicker._getInst(t.target),
                    i = !0,
                    s = e.dpDiv.is(".ui-datepicker-rtl");
                if (e._keyEvent = !0, $.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        $.datepicker._hideDatepicker(), i = !1;
                        break;
                    case 13:
                        var n = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", e.dpDiv);
                        n[0] && $.datepicker._selectDay(t.target, e.selectedMonth, e.selectedYear, n[0]);
                        var o = $.datepicker._get(e, "onSelect");
                        if (o) {
                            var r = $.datepicker._formatDate(e);
                            o.apply(e.input ? e.input[0] : null, [r, e])
                        } else $.datepicker._hideDatepicker();
                        return !1;
                    case 27:
                        $.datepicker._hideDatepicker();
                        break;
                    case 33:
                        $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 34:
                        $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && $.datepicker._clearDate(t.target), i = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && $.datepicker._gotoToday(t.target), i = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, s ? 1 : -1, "D"), i = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, -7, "D"), i = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, s ? -1 : 1, "D"), i = t.ctrlKey || t.metaKey, t.originalEvent.altKey && $.datepicker._adjustDate(t.target, t.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && $.datepicker._adjustDate(t.target, 7, "D"), i = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        i = !1
                } else 36 == t.keyCode && t.ctrlKey ? $.datepicker._showDatepicker(this) : i = !1;
                i && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function(t) {
                var e = $.datepicker._getInst(t.target);
                if ($.datepicker._get(e, "constrainInput")) {
                    var i = $.datepicker._possibleChars($.datepicker._get(e, "dateFormat")),
                        s = String.fromCharCode(undefined == t.charCode ? t.keyCode : t.charCode);
                    return t.ctrlKey || t.metaKey || s < " " || !i || i.indexOf(s) > -1
                }
            },
            _doKeyUp: function(t) {
                var e = $.datepicker._getInst(t.target);
                if (e.input.val() != e.lastVal) try {
                    $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, $.datepicker._getFormatConfig(e)) && ($.datepicker._setDateFromField(e), $.datepicker._updateAlternate(e), $.datepicker._updateDatepicker(e))
                } catch (i) {
                    $.datepicker.log(i)
                }
                return !0
            },
            _showDatepicker: function(t) {
                if ("input" != (t = t.target || t).nodeName.toLowerCase() && (t = $("input", t.parentNode)[0]), !$.datepicker._isDisabledDatepicker(t) && $.datepicker._lastInput != t) {
                    var e = $.datepicker._getInst(t);
                    $.datepicker._curInst && $.datepicker._curInst != e && ($.datepicker._curInst.dpDiv.stop(!0, !0), e && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                    var i = $.datepicker._get(e, "beforeShow"),
                        s = i ? i.apply(t, [t, e]) : {};
                    if (!1 !== s) {
                        extendRemove(e.settings, s), e.lastVal = null, $.datepicker._lastInput = t, $.datepicker._setDateFromField(e), $.datepicker._inDialog && (t.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(t), $.datepicker._pos[1] += t.offsetHeight);
                        var n = !1;
                        $(t).parents().each(function() {
                            return !(n |= "fixed" == $(this).css("position"))
                        }), n && $.browser.opera && ($.datepicker._pos[0] -= document.documentElement.scrollLeft, $.datepicker._pos[1] -= document.documentElement.scrollTop);
                        var o = {
                            left: $.datepicker._pos[0],
                            top: $.datepicker._pos[1]
                        };
                        if ($.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
                                position: "absolute",
                                display: "block",
                                top: "-1000px"
                            }), $.datepicker._updateDatepicker(e), o = $.datepicker._checkOffset(e, o, n), e.dpDiv.css({
                                position: $.datepicker._inDialog && $.blockUI ? "static" : n ? "fixed" : "absolute",
                                display: "none",
                                left: o.left + "px",
                                top: o.top + "px"
                            }), !e.inline) {
                            var r = $.datepicker._get(e, "showAnim"),
                                a = $.datepicker._get(e, "duration"),
                                l = function() {
                                    var t = e.dpDiv.find("iframe.ui-datepicker-cover");
                                    if (t.length) {
                                        var i = $.datepicker._getBorders(e.dpDiv);
                                        t.css({
                                            left: -i[0],
                                            top: -i[1],
                                            width: e.dpDiv.outerWidth(),
                                            height: e.dpDiv.outerHeight()
                                        })
                                    }
                                };
                            e.dpDiv.zIndex($(t).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects[r] ? e.dpDiv.show(r, $.datepicker._get(e, "showOptions"), a, l) : e.dpDiv[r || "show"](r ? a : null, l), r && a || l(), e.input.is(":visible") && !e.input.is(":disabled") && e.input.focus(), $.datepicker._curInst = e
                        }
                    }
                }
            },
            _updateDatepicker: function(t) {
                var e = this;
                e.maxRows = 4;
                var i = $.datepicker._getBorders(t.dpDiv);
                instActive = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                var s = t.dpDiv.find("iframe.ui-datepicker-cover");
                s.length && s.css({
                    left: -i[0],
                    top: -i[1],
                    width: t.dpDiv.outerWidth(),
                    height: t.dpDiv.outerHeight()
                }), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var n = this._getNumberOfMonths(t),
                    o = n[1],
                    r = 17;
                if (t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", r * o + "em"), t.dpDiv[(1 != n[0] || 1 != n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t == $.datepicker._curInst && $.datepicker._datepickerShowing && t.input && t.input.is(":visible") && !t.input.is(":disabled") && t.input[0] != document.activeElement && t.input.focus(), t.yearshtml) {
                    var a = t.yearshtml;
                    setTimeout(function() {
                        a === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), a = t.yearshtml = null
                    }, 0)
                }
            },
            _getBorders: function(t) {
                var e = function(t) {
                    return ({
                        thin: 1,
                        medium: 2,
                        thick: 3
                    })[t] || t
                };
                return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
            },
            _checkOffset: function(t, e, i) {
                var s = t.dpDiv.outerWidth(),
                    n = t.dpDiv.outerHeight(),
                    o = t.input ? t.input.outerWidth() : 0,
                    r = t.input ? t.input.outerHeight() : 0,
                    a = document.documentElement.clientWidth + (i ? 0 : $(document).scrollLeft()),
                    l = document.documentElement.clientHeight + (i ? 0 : $(document).scrollTop());
                return e.left -= this._get(t, "isRTL") ? s - o : 0, e.left -= i && e.left == t.input.offset().left ? $(document).scrollLeft() : 0, e.top -= i && e.top == t.input.offset().top + r ? $(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + s > a && a > s ? Math.abs(e.left + s - a) : 0), e.top -= Math.min(e.top, e.top + n > l && l > n ? Math.abs(n + r) : 0), e
            },
            _findPos: function(t) {
                for (var e = this._getInst(t), i = this._get(e, "isRTL"); t && ("hidden" == t.type || 1 != t.nodeType || $.expr.filters.hidden(t));) t = t[i ? "previousSibling" : "nextSibling"];
                var s = $(t).offset();
                return [s.left, s.top]
            },
            _hideDatepicker: function(t) {
                var e = this._curInst;
                if (e && (!t || e == $.data(t, PROP_NAME)) && this._datepickerShowing) {
                    var i = this._get(e, "showAnim"),
                        s = this._get(e, "duration"),
                        n = function() {
                            $.datepicker._tidyDialog(e)
                        };
                    $.effects && $.effects[i] ? e.dpDiv.hide(i, $.datepicker._get(e, "showOptions"), s, n) : e.dpDiv["slideDown" == i ? "slideUp" : "fadeIn" == i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1;
                    var o = this._get(e, "onClose");
                    o && o.apply(e.input ? e.input[0] : null, [e.input ? e.input.val() : "", e]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
                }
            },
            _tidyDialog: function(t) {
                t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(t) {
                if ($.datepicker._curInst) {
                    var e = $(t.target),
                        i = $.datepicker._getInst(e[0]);
                    (e[0].id != $.datepicker._mainDivId && 0 == e.parents("#" + $.datepicker._mainDivId).length && !e.hasClass($.datepicker.markerClassName) && !e.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || e.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != i) && $.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(t, e, i) {
                var s = $(t),
                    n = this._getInst(s[0]);
                this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, e + ("M" == i ? this._get(n, "showCurrentAtPos") : 0), i), this._updateDatepicker(n))
            },
            _gotoToday: function(t) {
                var e = $(t),
                    i = this._getInst(e[0]);
                if (this._get(i, "gotoCurrent") && i.currentDay) i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear;
                else {
                    var s = new Date;
                    i.selectedDay = s.getDate(), i.drawMonth = i.selectedMonth = s.getMonth(), i.drawYear = i.selectedYear = s.getFullYear()
                }
                this._notifyChange(i), this._adjustDate(e)
            },
            _selectMonthYear: function(t, e, i) {
                var s = $(t),
                    n = this._getInst(s[0]);
                n["selected" + ("M" == i ? "Month" : "Year")] = n["draw" + ("M" == i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(s)
            },
            _selectDay: function(t, e, i, s) {
                var n = $(t);
                if (!($(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(n[0]))) {
                    var o = this._getInst(n[0]);
                    o.selectedDay = o.currentDay = $("a", s).html(), o.selectedMonth = o.currentMonth = e, o.selectedYear = o.currentYear = i, this._selectDate(t, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear))
                }
            },
            _clearDate: function(t) {
                var e = $(t);
                this._getInst(e[0]), this._selectDate(e, "")
            },
            _selectDate: function(t, e) {
                var i = $(t),
                    s = this._getInst(i[0]);
                e = null != e ? e : this._formatDate(s), s.input && s.input.val(e), this._updateAlternate(s);
                var n = this._get(s, "onSelect");
                n ? n.apply(s.input ? s.input[0] : null, [e, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(t) {
                var e = this._get(t, "altField");
                if (e) {
                    var i = this._get(t, "altFormat") || this._get(t, "dateFormat"),
                        s = this._getDate(t),
                        n = this.formatDate(i, s, this._getFormatConfig(t));
                    $(e).each(function() {
                        $(this).val(n)
                    })
                }
            },
            noWeekends: function(t) {
                var e = t.getDay();
                return [e > 0 && e < 6, ""]
            },
            iso8601Week: function(t) {
                var e = new Date(t.getTime());
                e.setDate(e.getDate() + 4 - (e.getDay() || 7));
                var i = e.getTime();
                return e.setMonth(0), e.setDate(1), Math.floor(Math.round((i - e) / 864e5) / 7) + 1
            },
            parseDate: function(t, e, i) {
                if (null == t || null == e) throw "Invalid arguments";
                if ("" == (e = "object" == typeof e ? e.toString() : e + "")) return null;
                var s = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                s = "string" != typeof s ? s : (new Date).getFullYear() % 100 + parseInt(s, 10);
                for (var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, a = (i ? i.monthNames : null) || this._defaults.monthNames, l = -1, h = -1, c = -1, u = -1, d = !1, p = function(e) {
                        var i = b + 1 < t.length && t.charAt(b + 1) == e;
                        return i && b++, i
                    }, f = function(t) {
                        var i = p(t),
                            s = "@" == t ? 14 : "!" == t ? 20 : "y" == t && i ? 4 : "o" == t ? 3 : 2,
                            n = RegExp("^\\d{1," + s + "}"),
                            o = e.substring(v).match(n);
                        if (!o) throw "Missing number at position " + v;
                        return v += o[0].length, parseInt(o[0], 10)
                    }, g = function(t, i, s) {
                        var n = $.map(p(t) ? s : i, function(t, e) {
                                return [
                                    [e, t]
                                ]
                            }).sort(function(t, e) {
                                return -(t[1].length - e[1].length)
                            }),
                            o = -1;
                        if ($.each(n, function(t, i) {
                                var s = i[1];
                                if (e.substr(v, s.length).toLowerCase() == s.toLowerCase()) return o = i[0], v += s.length, !1
                            }), -1 != o) return o + 1;
                        throw "Unknown name at position " + v
                    }, m = function() {
                        if (e.charAt(v) != t.charAt(b)) throw "Unexpected literal at position " + v;
                        v++
                    }, v = 0, b = 0; b < t.length; b++)
                    if (d) "'" != t.charAt(b) || p("'") ? m() : d = !1;
                    else switch (t.charAt(b)) {
                        case "d":
                            c = f("d");
                            break;
                        case "D":
                            g("D", n, o);
                            break;
                        case "o":
                            u = f("o");
                            break;
                        case "m":
                            h = f("m");
                            break;
                        case "M":
                            h = g("M", r, a);
                            break;
                        case "y":
                            l = f("y");
                            break;
                        case "@":
                            var y = new Date(f("@"));
                            l = y.getFullYear(), h = y.getMonth() + 1, c = y.getDate();
                            break;
                        case "!":
                            var y = new Date((f("!") - this._ticksTo1970) / 1e4);
                            l = y.getFullYear(), h = y.getMonth() + 1, c = y.getDate();
                            break;
                        case "'":
                            p("'") ? m() : d = !0;
                            break;
                        default:
                            m()
                    }
                if (v < e.length) throw "Extra/unparsed characters found in date: " + e.substring(v);
                if (-1 == l ? l = (new Date).getFullYear() : l < 100 && (l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l <= s ? 0 : -100)), u > -1)
                    for (h = 1, c = u;;) {
                        var w = this._getDaysInMonth(l, h - 1);
                        if (c <= w) break;
                        h++, c -= w
                    }
                var y = this._daylightSavingAdjust(new Date(l, h - 1, c));
                if (y.getFullYear() != l || y.getMonth() + 1 != h || y.getDate() != c) throw "Invalid date";
                return y
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 864e9,
            formatDate: function(t, e, i) {
                if (!e) return "";
                var s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    n = (i ? i.dayNames : null) || this._defaults.dayNames,
                    o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    r = (i ? i.monthNames : null) || this._defaults.monthNames,
                    a = function(e) {
                        var i = d + 1 < t.length && t.charAt(d + 1) == e;
                        return i && d++, i
                    },
                    l = function(t, e, i) {
                        var s = "" + e;
                        if (a(t))
                            for (; s.length < i;) s = "0" + s;
                        return s
                    },
                    h = function(t, e, i, s) {
                        return a(t) ? s[e] : i[e]
                    },
                    c = "",
                    u = !1;
                if (e)
                    for (var d = 0; d < t.length; d++)
                        if (u) "'" != t.charAt(d) || a("'") ? c += t.charAt(d) : u = !1;
                        else switch (t.charAt(d)) {
                            case "d":
                                c += l("d", e.getDate(), 2);
                                break;
                            case "D":
                                c += h("D", e.getDay(), s, n);
                                break;
                            case "o":
                                c += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                c += l("m", e.getMonth() + 1, 2);
                                break;
                            case "M":
                                c += h("M", e.getMonth(), o, r);
                                break;
                            case "y":
                                c += a("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                                break;
                            case "@":
                                c += e.getTime();
                                break;
                            case "!":
                                c += 1e4 * e.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                a("'") ? c += "'" : u = !0;
                                break;
                            default:
                                c += t.charAt(d)
                        }
                return c
            },
            _possibleChars: function(t) {
                for (var e = "", i = !1, s = function(e) {
                        var i = n + 1 < t.length && t.charAt(n + 1) == e;
                        return i && n++, i
                    }, n = 0; n < t.length; n++)
                    if (i) "'" != t.charAt(n) || s("'") ? e += t.charAt(n) : i = !1;
                    else switch (t.charAt(n)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            e += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            s("'") ? e += "'" : i = !0;
                            break;
                        default:
                            e += t.charAt(n)
                    }
                return e
            },
            _get: function(t, e) {
                return undefined !== t.settings[e] ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function(t, e) {
                if (t.input.val() != t.lastVal) {
                    var i, s, n = this._get(t, "dateFormat"),
                        o = t.lastVal = t.input ? t.input.val() : null;
                    i = s = this._getDefaultDate(t);
                    var r = this._getFormatConfig(t);
                    try {
                        i = this.parseDate(n, o, r) || s
                    } catch (a) {
                        this.log(a), o = e ? "" : o
                    }
                    t.selectedDay = i.getDate(), t.drawMonth = t.selectedMonth = i.getMonth(), t.drawYear = t.selectedYear = i.getFullYear(), t.currentDay = o ? i.getDate() : 0, t.currentMonth = o ? i.getMonth() : 0, t.currentYear = o ? i.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function(t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function(t, e, i) {
                var s = function(t) {
                        var e = new Date;
                        return e.setDate(e.getDate() + t), e
                    },
                    n = function(e) {
                        try {
                            return $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), e, $.datepicker._getFormatConfig(t))
                        } catch (i) {}
                        for (var s = (e.toLowerCase().match(/^c/) ? $.datepicker._getDate(t) : null) || new Date, n = s.getFullYear(), o = s.getMonth(), r = s.getDate(), a = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(e); l;) {
                            switch (l[2] || "d") {
                                case "d":
                                case "D":
                                    r += parseInt(l[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    r += 7 * parseInt(l[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    o += parseInt(l[1], 10), r = Math.min(r, $.datepicker._getDaysInMonth(n, o));
                                    break;
                                case "y":
                                case "Y":
                                    n += parseInt(l[1], 10), r = Math.min(r, $.datepicker._getDaysInMonth(n, o))
                            }
                            l = a.exec(e)
                        }
                        return new Date(n, o, r)
                    },
                    o = null == e || "" === e ? i : "string" == typeof e ? n(e) : "number" == typeof e ? isNaN(e) ? i : s(e) : new Date(e.getTime());
                return (o = o && "Invalid Date" == o.toString() ? i : o) && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
            },
            _daylightSavingAdjust: function(t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function(t, e, i) {
                var s = !e,
                    n = t.selectedMonth,
                    o = t.selectedYear,
                    r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), n == t.selectedMonth && o == t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
            },
            _getDate: function(t) {
                return !t.currentYear || t.input && "" == t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
            },
            _attachHandlers: function(t) {
                var e = this._get(t, "stepMonths"),
                    i = "#" + t.id;
                t.dpDiv.find("[data-handler]").map(function() {
                    var t = {
                        prev: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, -e, "M")
                        },
                        next: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._adjustDate(i, +e, "M")
                        },
                        hide: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker()
                        },
                        today: function() {
                            window["DP_jQuery_" + dpuuid].datepicker._gotoToday(i)
                        },
                        selectDay: function() {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function() {
                            return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    $(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(t) {
                var e = new Date;
                e = this._daylightSavingAdjust(new Date(e.getFullYear(), e.getMonth(), e.getDate()));
                var i = this._get(t, "isRTL"),
                    s = this._get(t, "showButtonPanel"),
                    n = this._get(t, "hideIfNoPrevNext"),
                    o = this._get(t, "navigationAsDateFormat"),
                    r = this._getNumberOfMonths(t),
                    a = this._get(t, "showCurrentAtPos"),
                    l = this._get(t, "stepMonths"),
                    h = 1 != r[0] || 1 != r[1],
                    c = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    u = this._getMinMaxDate(t, "min"),
                    d = this._getMinMaxDate(t, "max"),
                    p = t.drawMonth - a,
                    f = t.drawYear;
                if (p < 0 && (p += 12, f--), d) {
                    var g = this._daylightSavingAdjust(new Date(d.getFullYear(), d.getMonth() - r[0] * r[1] + 1, d.getDate()));
                    for (g = u && g < u ? u : g; this._daylightSavingAdjust(new Date(f, p, 1)) > g;) --p < 0 && (p = 11, f--)
                }
                t.drawMonth = p, t.drawYear = f;
                var m = this._get(t, "prevText");
                m = o ? this.formatDate(m, this._daylightSavingAdjust(new Date(f, p - l, 1)), this._getFormatConfig(t)) : m;
                var v = this._canAdjustMonth(t, -1, f, p) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>" : n ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>",
                    b = this._get(t, "nextText");
                b = o ? this.formatDate(b, this._daylightSavingAdjust(new Date(f, p + l, 1)), this._getFormatConfig(t)) : b;
                var y = this._canAdjustMonth(t, 1, f, p) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + b + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + b + "</span></a>" : n ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + b + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + b + "</span></a>",
                    w = this._get(t, "currentText"),
                    _ = this._get(t, "gotoCurrent") && t.currentDay ? c : e;
                w = o ? this.formatDate(w, _, this._getFormatConfig(t)) : w;
                var x = t.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(t, "closeText") + "</button>",
                    C = s ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? x : "") + (this._isInRange(t, _) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + w + "</button>" : "") + (i ? "" : x) + "</div>" : "",
                    k = parseInt(this._get(t, "firstDay"), 10);
                k = isNaN(k) ? 0 : k;
                for (var D = this._get(t, "showWeek"), A = this._get(t, "dayNames"), S = (this._get(t, "dayNamesShort"), this._get(t, "dayNamesMin")), T = this._get(t, "monthNames"), F = this._get(t, "monthNamesShort"), P = this._get(t, "beforeShowDay"), I = this._get(t, "showOtherMonths"), E = this._get(t, "selectOtherMonths"), z = (this._get(t, "calculateWeek") || this.iso8601Week, this._getDefaultDate(t)), M = "", O = 0; O < r[0]; O++) {
                    var L = "";
                    this.maxRows = 4;
                    for (var H = 0; H < r[1]; H++) {
                        var N = this._daylightSavingAdjust(new Date(f, p, t.selectedDay)),
                            W = " ui-corner-all",
                            R = "";
                        if (h) {
                            if (R += '<div class="ui-datepicker-group', r[1] > 1) switch (H) {
                                case 0:
                                    R += " ui-datepicker-group-first", W = " ui-corner-" + (i ? "right" : "left");
                                    break;
                                case r[1] - 1:
                                    R += " ui-datepicker-group-last", W = " ui-corner-" + (i ? "left" : "right");
                                    break;
                                default:
                                    R += " ui-datepicker-group-middle", W = ""
                            }
                            R += '">'
                        }
                        R += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + W + '">' + (/all|left/.test(W) && 0 == O ? i ? y : v : "") + (/all|right/.test(W) && 0 == O ? i ? v : y : "") + this._generateMonthYearHeader(t, p, f, u, d, O > 0 || H > 0, T, F) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                        for (var q = D ? '<th class="ui-datepicker-week-col">' + this._get(t, "weekHeader") + "</th>" : "", j = 0; j < 7; j++) {
                            var Y = (j + k) % 7;
                            q += "<th" + ((j + k + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + A[Y] + '">' + S[Y] + "</span></th>"
                        }
                        R += q + "</tr></thead><tbody>";
                        var B = this._getDaysInMonth(f, p);
                        f == t.selectedYear && p == t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, B));
                        var V = (this._getFirstDayOfMonth(f, p) - k + 7) % 7,
                            K = Math.ceil((V + B) / 7),
                            X = h && this.maxRows > K ? this.maxRows : K;
                        this.maxRows = X;
                        for (var U = this._daylightSavingAdjust(new Date(f, p, 1 - V)), Q = 0; Q < X; Q++) {
                            R += "<tr>";
                            for (var Z = D ? '<td class="ui-datepicker-week-col">' + this._get(t, "calculateWeek")(U) + "</td>" : "", j = 0; j < 7; j++) {
                                var G = P ? P.apply(t.input ? t.input[0] : null, [U]) : [!0, ""],
                                    J = U.getMonth() != p,
                                    tt = J && !E || !G[0] || u && U < u || d && U > d;
                                Z += '<td class="' + ((j + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (J ? " ui-datepicker-other-month" : "") + (U.getTime() == N.getTime() && p == t.selectedMonth && t._keyEvent || z.getTime() == U.getTime() && z.getTime() == N.getTime() ? " " + this._dayOverClass : "") + (tt ? " " + this._unselectableClass + " ui-state-disabled" : "") + (J && !I ? "" : " " + G[1] + (U.getTime() == c.getTime() ? " " + this._currentClass : "") + (U.getTime() == e.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!J || I) && G[2] ? ' title="' + G[2] + '"' : "") + (tt ? "" : ' data-handler="selectDay" data-event="click" data-month="' + U.getMonth() + '" data-year="' + U.getFullYear() + '"') + ">" + (J && !I ? "&#xa0;" : tt ? '<span class="ui-state-default">' + U.getDate() + "</span>" : '<a class="ui-state-default' + (U.getTime() == e.getTime() ? " ui-state-highlight" : "") + (U.getTime() == c.getTime() ? " ui-state-active" : "") + (J ? " ui-priority-secondary" : "") + '" href="#">' + U.getDate() + "</a>") + "</td>", U.setDate(U.getDate() + 1), U = this._daylightSavingAdjust(U)
                            }
                            R += Z + "</tr>"
                        }++p > 11 && (p = 0, f++), R += "</tbody></table>" + (h ? "</div>" + (r[0] > 0 && H == r[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), L += R
                    }
                    M += L
                }
                return M += C + ($.browser.msie && 7 > parseInt($.browser.version, 10) && !t.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), t._keyEvent = !1, M
            },
            _generateMonthYearHeader: function(t, e, i, s, n, o, r, a) {
                var l = this._get(t, "changeMonth"),
                    h = this._get(t, "changeYear"),
                    c = this._get(t, "showMonthAfterYear"),
                    u = '<div class="ui-datepicker-title">',
                    d = "";
                if (o || !l) d += '<span class="ui-datepicker-month">' + r[e] + "</span>";
                else {
                    var p = s && s.getFullYear() == i,
                        f = n && n.getFullYear() == i;
                    d += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                    for (var g = 0; g < 12; g++)(!p || g >= s.getMonth()) && (!f || g <= n.getMonth()) && (d += '<option value="' + g + '"' + (g == e ? ' selected="selected"' : "") + ">" + a[g] + "</option>");
                    d += "</select>"
                }
                if (c || (u += d + (!o && l && h ? "" : "&#xa0;")), !t.yearshtml) {
                    if (t.yearshtml = "", o || !h) u += '<span class="ui-datepicker-year">' + i + "</span>";
                    else {
                        var m = this._get(t, "yearRange").split(":"),
                            v = (new Date).getFullYear(),
                            b = function(t) {
                                var e = t.match(/c[+-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+-].*/) ? v + parseInt(t, 10) : parseInt(t, 10);
                                return isNaN(e) ? v : e
                            },
                            y = b(m[0]),
                            w = Math.max(y, b(m[1] || ""));
                        for (y = s ? Math.max(y, s.getFullYear()) : y, w = n ? Math.min(w, n.getFullYear()) : w, t.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; y <= w; y++) t.yearshtml += '<option value="' + y + '"' + (y == i ? ' selected="selected"' : "") + ">" + y + "</option>";
                        t.yearshtml += "</select>", u += t.yearshtml, t.yearshtml = null
                    }
                }
                return u += this._get(t, "yearSuffix"), c && (u += (!o && l && h ? "" : "&#xa0;") + d), u += "</div>"
            },
            _adjustInstDate: function(t, e, i) {
                var s = t.drawYear + ("Y" == i ? e : 0),
                    n = t.drawMonth + ("M" == i ? e : 0),
                    o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" == i ? e : 0),
                    r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
                t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" == i || "Y" == i) && this._notifyChange(t)
            },
            _restrictMinMax: function(t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    s = this._getMinMaxDate(t, "max"),
                    n = i && e < i ? i : e;
                return s && n > s ? s : n
            },
            _notifyChange: function(t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function(t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function(t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function(t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function(t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function(t, e, i, s) {
                var n = this._getNumberOfMonths(t),
                    o = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1));
                return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
            },
            _isInRange: function(t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    s = this._getMinMaxDate(t, "max");
                return (!i || e.getTime() >= i.getTime()) && (!s || e.getTime() <= s.getTime())
            },
            _getFormatConfig: function(t) {
                var e = this._get(t, "shortYearCutoff");
                return {
                    shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function(t, e, i, s) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
            }
        }), $.fn.datepicker = function(t) {
            if (!this.length) return this;
            $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv), $.datepicker.initialized = !0);
            var e = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "isDisabled" != t && "getDate" != t && "widget" != t ? "option" == t && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e)) : this.each(function() {
                "string" == typeof t ? $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this].concat(e)) : $.datepicker._attachDatepicker(this, t)
            }) : $.datepicker["_" + t + "Datepicker"].apply($.datepicker, [this[0]].concat(e))
        }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.8.22", window["DP_jQuery_" + dpuuid] = $
    }(jQuery),
    function(t, e) {
        var i = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
            s = {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            n = {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            },
            o = t.attrFn || {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0,
                click: !0
            };
        t.widget("ui.dialog", {
            options: {
                autoOpen: !0,
                buttons: {},
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: !1,
                maxWidth: !1,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    collision: "fit",
                    using: function(e) {
                        var i = t(this).css(e).offset().top;
                        i < 0 && t(this).css("top", e.top - i)
                    }
                },
                resizable: !0,
                show: null,
                stack: !0,
                title: "",
                width: 300,
                zIndex: 1e3
            },
            _create: function() {
                this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
                var e = this,
                    s = e.options,
                    n = s.title || "&#160;",
                    o = t.ui.dialog.getTitleId(e.element),
                    r = (e.uiDialog = t("<div></div>")).appendTo(document.body).hide().addClass(i + s.dialogClass).css({
                        zIndex: s.zIndex
                    }).attr("tabIndex", -1).css("outline", 0).keydown(function(i) {
                        s.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === t.ui.keyCode.ESCAPE && (e.close(i), i.preventDefault())
                    }).attr({
                        role: "dialog",
                        "aria-labelledby": o
                    }).mousedown(function(t) {
                        e.moveToTop(!1, t)
                    }),
                    a = (e.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(r), (e.uiDialogTitlebar = t("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(r)),
                    l = t('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function() {
                        l.addClass("ui-state-hover")
                    }, function() {
                        l.removeClass("ui-state-hover")
                    }).focus(function() {
                        l.addClass("ui-state-focus")
                    }).blur(function() {
                        l.removeClass("ui-state-focus")
                    }).click(function(t) {
                        return e.close(t), !1
                    }).appendTo(a);
                (e.uiDialogTitlebarCloseText = t("<span></span>")).addClass("ui-icon ui-icon-closethick").text(s.closeText).appendTo(l), t("<span></span>").addClass("ui-dialog-title").attr("id", o).html(n).prependTo(a), t.isFunction(s.beforeclose) && !t.isFunction(s.beforeClose) && (s.beforeClose = s.beforeclose), a.find("*").add(a).disableSelection(), s.draggable && t.fn.draggable && e._makeDraggable(), s.resizable && t.fn.resizable && e._makeResizable(), e._createButtons(s.buttons), e._isOpen = !1, t.fn.bgiframe && r.bgiframe()
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            destroy: function() {
                var t = this;
                return t.overlay && t.overlay.destroy(), t.uiDialog.hide(), t.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), t.uiDialog.remove(), t.originalTitle && t.element.attr("title", t.originalTitle), t
            },
            widget: function() {
                return this.uiDialog
            },
            close: function(e) {
                var i, s, n = this;
                if (!1 !== n._trigger("beforeClose", e)) return n.overlay && n.overlay.destroy(), n.uiDialog.unbind("keypress.ui-dialog"), n._isOpen = !1, n.options.hide ? n.uiDialog.hide(n.options.hide, function() {
                    n._trigger("close", e)
                }) : (n.uiDialog.hide(), n._trigger("close", e)), t.ui.dialog.overlay.resize(), n.options.modal && (i = 0, t(".ui-dialog").each(function() {
                    this !== n.uiDialog[0] && (s = t(this).css("z-index"), isNaN(s) || (i = Math.max(i, s)))
                }), t.ui.dialog.maxZ = i), n
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function(e, i) {
                var s, n = this,
                    o = n.options;
                return (!o.modal || e) && (o.stack || o.modal) ? (o.zIndex > t.ui.dialog.maxZ && (t.ui.dialog.maxZ = o.zIndex), n.overlay && (t.ui.dialog.maxZ += 1, n.overlay.$el.css("z-index", t.ui.dialog.overlay.maxZ = t.ui.dialog.maxZ)), s = {
                    scrollTop: n.element.scrollTop(),
                    scrollLeft: n.element.scrollLeft()
                }, t.ui.dialog.maxZ += 1, n.uiDialog.css("z-index", t.ui.dialog.maxZ), n.element.attr(s), n._trigger("focus", i), n) : n._trigger("focus", i)
            },
            open: function() {
                if (!this._isOpen) {
                    var e = this,
                        i = e.options,
                        s = e.uiDialog;
                    return e.overlay = i.modal ? new t.ui.dialog.overlay(e) : null, e._size(), e._position(i.position), s.show(i.show), e.moveToTop(!0), i.modal && s.bind("keydown.ui-dialog", function(e) {
                        if (e.keyCode === t.ui.keyCode.TAB) {
                            var i = t(":tabbable", this),
                                s = i.filter(":first"),
                                n = i.filter(":last");
                            if (e.target === n[0] && !e.shiftKey) return s.focus(1), !1;
                            if (e.target === s[0] && e.shiftKey) return n.focus(1), !1
                        }
                    }), t(e.element.find(":tabbable").get().concat(s.find(".ui-dialog-buttonpane :tabbable").get().concat(s.get()))).eq(0).focus(), e._isOpen = !0, e._trigger("open"), e
                }
            },
            _createButtons: function(e) {
                var i = this,
                    s = !1,
                    n = t("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                    r = t("<div></div>").addClass("ui-dialog-buttonset").appendTo(n);
                i.uiDialog.find(".ui-dialog-buttonpane").remove(), "object" == typeof e && null !== e && t.each(e, function() {
                    return s = !0, !1
                }), s && (t.each(e, function(e, s) {
                    s = t.isFunction(s) ? {
                        click: s,
                        text: e
                    } : s;
                    var n = t('<button type="button"></button>').click(function() {
                        s.click.apply(i.element[0], arguments)
                    }).appendTo(r);
                    t.each(s, function(t, e) {
                        "click" !== t && (t in o ? n[t](e) : n.attr(t, e))
                    }), t.fn.button && n.button()
                }), n.appendTo(i.uiDialog))
            },
            _makeDraggable: function() {
                function e(t) {
                    return {
                        position: t.position,
                        offset: t.offset
                    }
                }
                var i, s = this,
                    n = s.options,
                    o = t(document);
                s.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(o, r) {
                        i = "auto" === n.height ? "auto" : t(this).height(), t(this).height(t(this).height()).addClass("ui-dialog-dragging"), s._trigger("dragStart", o, e(r))
                    },
                    drag: function(t, i) {
                        s._trigger("drag", t, e(i))
                    },
                    stop: function(r, a) {
                        n.position = [a.position.left - o.scrollLeft(), a.position.top - o.scrollTop()], t(this).removeClass("ui-dialog-dragging").height(i), s._trigger("dragStop", r, e(a)), t.ui.dialog.overlay.resize()
                    }
                })
            },
            _makeResizable: function(e) {
                function i(t) {
                    return {
                        originalPosition: t.originalPosition,
                        originalSize: t.originalSize,
                        position: t.position,
                        size: t.size
                    }
                }
                e = void 0 === e ? this.options.resizable : e;
                var s = this,
                    n = s.options,
                    o = s.uiDialog.css("position"),
                    r = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
                s.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: s.element,
                    maxWidth: n.maxWidth,
                    maxHeight: n.maxHeight,
                    minWidth: n.minWidth,
                    minHeight: s._minHeight(),
                    handles: r,
                    start: function(e, n) {
                        t(this).addClass("ui-dialog-resizing"), s._trigger("resizeStart", e, i(n))
                    },
                    resize: function(t, e) {
                        s._trigger("resize", t, i(e))
                    },
                    stop: function(e, o) {
                        t(this).removeClass("ui-dialog-resizing"), n.height = t(this).height(), n.width = t(this).width(), s._trigger("resizeStop", e, i(o)), t.ui.dialog.overlay.resize()
                    }
                }).css("position", o).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
            },
            _minHeight: function() {
                var t = this.options;
                return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
            },
            _position: function(e) {
                var i, s = [],
                    n = [0, 0];
                e ? (("string" == typeof e || "object" == typeof e && "0" in e) && (1 === (s = e.split ? e.split(" ") : [e[0], e[1]]).length && (s[1] = s[0]), t.each(["left", "top"], function(t, e) {
                    +s[t] === s[t] && (n[t] = s[t], s[t] = e)
                }), e = {
                    my: s.join(" "),
                    at: s.join(" "),
                    offset: n.join(" ")
                }), e = t.extend({}, t.ui.dialog.prototype.options.position, e)) : e = t.ui.dialog.prototype.options.position, (i = this.uiDialog.is(":visible")) || this.uiDialog.show(), this.uiDialog.css({
                    top: 0,
                    left: 0
                }).position(t.extend({ of: window
                }, e)), i || this.uiDialog.hide()
            },
            _setOptions: function(e) {
                var i = this,
                    o = {},
                    r = !1;
                t.each(e, function(t, e) {
                    i._setOption(t, e), t in s && (r = !0), t in n && (o[t] = e)
                }), r && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", o)
            },
            _setOption: function(e, s) {
                var n = this,
                    o = n.uiDialog;
                switch (e) {
                    case "beforeclose":
                        e = "beforeClose";
                        break;
                    case "buttons":
                        n._createButtons(s);
                        break;
                    case "closeText":
                        n.uiDialogTitlebarCloseText.text("" + s);
                        break;
                    case "dialogClass":
                        o.removeClass(n.options.dialogClass).addClass(i + s);
                        break;
                    case "disabled":
                        s ? o.addClass("ui-dialog-disabled") : o.removeClass("ui-dialog-disabled");
                        break;
                    case "draggable":
                        var r = o.is(":data(draggable)");
                        r && !s && o.draggable("destroy"), !r && s && n._makeDraggable();
                        break;
                    case "position":
                        n._position(s);
                        break;
                    case "resizable":
                        var a = o.is(":data(resizable)");
                        a && !s && o.resizable("destroy"), a && "string" == typeof s && o.resizable("option", "handles", s), a || !1 === s || n._makeResizable(s);
                        break;
                    case "title":
                        t(".ui-dialog-title", n.uiDialogTitlebar).html("" + (s || "&#160;"))
                }
                t.Widget.prototype._setOption.apply(n, arguments)
            },
            _size: function() {
                var e, i, s = this.options,
                    n = this.uiDialog.is(":visible");
                if (this.element.show().css({
                        width: "auto",
                        minHeight: 0,
                        height: 0
                    }), s.minWidth > s.width && (s.width = s.minWidth), e = this.uiDialog.css({
                        height: "auto",
                        width: s.width
                    }).height(), i = Math.max(0, s.minHeight - e), "auto" === s.height) {
                    if (t.support.minHeight) this.element.css({
                        minHeight: i,
                        height: "auto"
                    });
                    else {
                        this.uiDialog.show();
                        var o = this.element.css("height", "auto").height();
                        n || this.uiDialog.hide(), this.element.height(Math.max(o, i))
                    }
                } else this.element.height(Math.max(s.height - e, 0));
                this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            }
        }), t.extend(t.ui.dialog, {
            version: "1.8.22",
            uuid: 0,
            maxZ: 0,
            getTitleId: function(t) {
                var e = t.attr("id");
                return e || (this.uuid += 1, e = this.uuid), "ui-dialog-title-" + e
            },
            overlay: function(e) {
                this.$el = t.ui.dialog.overlay.create(e)
            }
        }), t.extend(t.ui.dialog.overlay, {
            instances: [],
            oldInstances: [],
            maxZ: 0,
            events: t.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(t) {
                return t + ".dialog-overlay"
            }).join(" "),
            create: function(e) {
                0 === this.instances.length && (setTimeout(function() {
                    t.ui.dialog.overlay.instances.length && t(document).bind(t.ui.dialog.overlay.events, function(e) {
                        if (t(e.target).zIndex() < t.ui.dialog.overlay.maxZ) return !1
                    })
                }, 1), t(document).bind("keydown.dialog-overlay", function(i) {
                    e.options.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === t.ui.keyCode.ESCAPE && (e.close(i), i.preventDefault())
                }), t(window).bind("resize.dialog-overlay", t.ui.dialog.overlay.resize));
                var i = (this.oldInstances.pop() || t("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                    width: this.width(),
                    height: this.height()
                });
                return t.fn.bgiframe && i.bgiframe(), this.instances.push(i), i
            },
            destroy: function(e) {
                var i = t.inArray(e, this.instances); - 1 != i && this.oldInstances.push(this.instances.splice(i, 1)[0]), 0 === this.instances.length && t([document, window]).unbind(".dialog-overlay"), e.remove();
                var s = 0;
                t.each(this.instances, function() {
                    s = Math.max(s, this.css("z-index"))
                }), this.maxZ = s
            },
            height: function() {
                var e, i;
                return t.browser.msie && t.browser.version < 7 ? (e = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)) < (i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight)) ? t(window).height() + "px" : e + "px" : t(document).height() + "px"
            },
            width: function() {
                var e, i;
                return t.browser.msie ? (e = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth)) < (i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth)) ? t(window).width() + "px" : e + "px" : t(document).width() + "px"
            },
            resize: function() {
                var e = t([]);
                t.each(t.ui.dialog.overlay.instances, function() {
                    e = e.add(this)
                }), e.css({
                    width: 0,
                    height: 0
                }).css({
                    width: t.ui.dialog.overlay.width(),
                    height: t.ui.dialog.overlay.height()
                })
            }
        }), t.extend(t.ui.dialog.overlay.prototype, {
            destroy: function() {
                t.ui.dialog.overlay.destroy(this.$el)
            }
        })
    }(jQuery),
    function(t, e) {
        t.ui = t.ui || {};
        var i = /left|center|right/,
            s = /top|center|bottom/,
            n = "center",
            o = {},
            r = t.fn.position,
            a = t.fn.offset;
        t.fn.position = function(e) {
                if (!e || !e.of) return r.apply(this, arguments);
                e = t.extend({}, e);
                var a, l, h, c = t(e.of),
                    u = c[0],
                    d = (e.collision || "flip").split(" "),
                    p = e.offset ? e.offset.split(" ") : [0, 0];
                return 9 === u.nodeType ? (a = c.width(), l = c.height(), h = {
                    top: 0,
                    left: 0
                }) : u.setTimeout ? (a = c.width(), l = c.height(), h = {
                    top: c.scrollTop(),
                    left: c.scrollLeft()
                }) : u.preventDefault ? (e.at = "left top", a = l = 0, h = {
                    top: e.of.pageY,
                    left: e.of.pageX
                }) : (a = c.outerWidth(), l = c.outerHeight(), h = c.offset()), t.each(["my", "at"], function() {
                    var t = (e[this] || "").split(" ");
                    1 === t.length && (t = i.test(t[0]) ? t.concat([n]) : s.test(t[0]) ? [n].concat(t) : [n, n]), t[0] = i.test(t[0]) ? t[0] : n, t[1] = s.test(t[1]) ? t[1] : n, e[this] = t
                }), 1 === d.length && (d[1] = d[0]), p[0] = parseInt(p[0], 10) || 0, 1 === p.length && (p[1] = p[0]), p[1] = parseInt(p[1], 10) || 0, "right" === e.at[0] ? h.left += a : e.at[0] === n && (h.left += a / 2), "bottom" === e.at[1] ? h.top += l : e.at[1] === n && (h.top += l / 2), h.left += p[0], h.top += p[1], this.each(function() {
                    var i, s = t(this),
                        r = s.outerWidth(),
                        c = s.outerHeight(),
                        u = parseInt(t.curCSS(this, "marginLeft", !0)) || 0,
                        f = parseInt(t.curCSS(this, "marginTop", !0)) || 0,
                        g = r + u + (parseInt(t.curCSS(this, "marginRight", !0)) || 0),
                        m = c + f + (parseInt(t.curCSS(this, "marginBottom", !0)) || 0),
                        v = t.extend({}, h);
                    "right" === e.my[0] ? v.left -= r : e.my[0] === n && (v.left -= r / 2), "bottom" === e.my[1] ? v.top -= c : e.my[1] === n && (v.top -= c / 2), o.fractions || (v.left = Math.round(v.left), v.top = Math.round(v.top)), i = {
                        left: v.left - u,
                        top: v.top - f
                    }, t.each(["left", "top"], function(s, n) {
                        t.ui.position[d[s]] && t.ui.position[d[s]][n](v, {
                            targetWidth: a,
                            targetHeight: l,
                            elemWidth: r,
                            elemHeight: c,
                            collisionPosition: i,
                            collisionWidth: g,
                            collisionHeight: m,
                            offset: p,
                            my: e.my,
                            at: e.at
                        })
                    }), t.fn.bgiframe && s.bgiframe(), s.offset(t.extend(v, {
                        using: e.using
                    }))
                })
            }, t.ui.position = {
                fit: {
                    left: function(e, i) {
                        var s = t(window),
                            n = i.collisionPosition.left + i.collisionWidth - s.width() - s.scrollLeft();
                        e.left = n > 0 ? e.left - n : Math.max(e.left - i.collisionPosition.left, e.left)
                    },
                    top: function(e, i) {
                        var s = t(window),
                            n = i.collisionPosition.top + i.collisionHeight - s.height() - s.scrollTop();
                        e.top = n > 0 ? e.top - n : Math.max(e.top - i.collisionPosition.top, e.top)
                    }
                },
                flip: {
                    left: function(e, i) {
                        if (i.at[0] !== n) {
                            var s = t(window),
                                o = i.collisionPosition.left + i.collisionWidth - s.width() - s.scrollLeft(),
                                r = "left" === i.my[0] ? -i.elemWidth : "right" === i.my[0] ? i.elemWidth : 0,
                                a = "left" === i.at[0] ? i.targetWidth : -i.targetWidth,
                                l = -2 * i.offset[0];
                            e.left += i.collisionPosition.left < 0 ? r + a + l : o > 0 ? r + a + l : 0
                        }
                    },
                    top: function(e, i) {
                        if (i.at[1] !== n) {
                            var s = t(window),
                                o = i.collisionPosition.top + i.collisionHeight - s.height() - s.scrollTop(),
                                r = "top" === i.my[1] ? -i.elemHeight : "bottom" === i.my[1] ? i.elemHeight : 0,
                                a = "top" === i.at[1] ? i.targetHeight : -i.targetHeight,
                                l = -2 * i.offset[1];
                            e.top += i.collisionPosition.top < 0 ? r + a + l : o > 0 ? r + a + l : 0
                        }
                    }
                }
            }, t.offset.setOffset || (t.offset.setOffset = function(e, i) {
                /static/.test(t.curCSS(e, "position")) && (e.style.position = "relative");
                var s = t(e),
                    n = s.offset(),
                    o = parseInt(t.curCSS(e, "top", !0), 10) || 0,
                    r = parseInt(t.curCSS(e, "left", !0), 10) || 0,
                    a = {
                        top: i.top - n.top + o,
                        left: i.left - n.left + r
                    };
                "using" in i ? i.using.call(e, a) : s.css(a)
            }, t.fn.offset = function(e) {
                var i = this[0];
                return i && i.ownerDocument ? e ? t.isFunction(e) ? this.each(function(i) {
                    t(this).offset(e.call(this, i, t(this).offset()))
                }) : this.each(function() {
                    t.offset.setOffset(this, e)
                }) : a.call(this) : null
            }),
            function() {
                var e, i, s, n, r, a = document.getElementsByTagName("body")[0],
                    l = document.createElement("div");
                for (var h in e = document.createElement(a ? "div" : "body"), s = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    }, a && t.extend(s, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    }), s) e.style[h] = s[h];
                e.appendChild(l), (i = a || document.documentElement).insertBefore(e, i.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", n = t(l).offset(function(t, e) {
                    return e
                }).offset(), e.innerHTML = "", i.removeChild(e), r = n.top + n.left + (a ? 2e3 : 0), o.fractions = r > 21 && r < 22
            }()
    }(jQuery),
    function(t, e) {
        t.widget("ui.progressbar", {
            options: {
                value: 0,
                max: 100
            },
            min: 0,
            _create: function() {
                this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._value()
                }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
            },
            destroy: function() {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), t.Widget.prototype.destroy.apply(this, arguments)
            },
            value: function(t) {
                return void 0 === t ? this._value() : (this._setOption("value", t), this)
            },
            _setOption: function(e, i) {
                "value" === e && (this.options.value = i, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), t.Widget.prototype._setOption.apply(this, arguments)
            },
            _value: function() {
                var t = this.options.value;
                return "number" != typeof t && (t = 0), Math.min(this.options.max, Math.max(this.min, t))
            },
            _percentage: function() {
                return 100 * this._value() / this.options.max
            },
            _refreshValue: function() {
                var t = this.value(),
                    e = this._percentage();
                this.oldValue !== t && (this.oldValue = t, this._trigger("change")), this.valueDiv.toggle(t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(e.toFixed(0) + "%"), this.element.attr("aria-valuenow", t)
            }
        }), t.extend(t.ui.progressbar, {
            version: "1.8.22"
        })
    }(jQuery),
    function(t, e) {
        var i = 5;
        t.widget("ui.slider", t.ui.mouse, {
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null
            },
            _create: function() {
                var e = this,
                    s = this.options,
                    n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                    r = s.values && s.values.length || 1,
                    a = [];
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (s.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = t([]), s.range && (!0 === s.range && (s.values || (s.values = [this._valueMin(), this._valueMin()]), s.values.length && 2 !== s.values.length && (s.values = [s.values[0], s.values[0]])), this.range = t("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === s.range || "max" === s.range ? " ui-slider-range-" + s.range : "")));
                for (var l = n.length; l < r; l += 1) a.push(o);
                this.handles = n.add(t(a.join("")).appendTo(e.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(t) {
                    t.preventDefault()
                }).hover(function() {
                    s.disabled || t(this).addClass("ui-state-hover")
                }, function() {
                    t(this).removeClass("ui-state-hover")
                }).focus(function() {
                    s.disabled ? t(this).blur() : (t(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), t(this).addClass("ui-state-focus"))
                }).blur(function() {
                    t(this).removeClass("ui-state-focus")
                }), this.handles.each(function(e) {
                    t(this).data("index.ui-slider-handle", e)
                }), this.handles.keydown(function(s) {
                    var n, o, r, a, l = t(this).data("index.ui-slider-handle");
                    if (!e.options.disabled) {
                        switch (s.keyCode) {
                            case t.ui.keyCode.HOME:
                            case t.ui.keyCode.END:
                            case t.ui.keyCode.PAGE_UP:
                            case t.ui.keyCode.PAGE_DOWN:
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.RIGHT:
                            case t.ui.keyCode.DOWN:
                            case t.ui.keyCode.LEFT:
                                if (s.preventDefault(), !e._keySliding && (e._keySliding = !0, t(this).addClass("ui-state-active"), !1 === (n = e._start(s, l)))) return
                        }
                        switch (a = e.options.step, o = r = e.options.values && e.options.values.length ? e.values(l) : e.value(), s.keyCode) {
                            case t.ui.keyCode.HOME:
                                r = e._valueMin();
                                break;
                            case t.ui.keyCode.END:
                                r = e._valueMax();
                                break;
                            case t.ui.keyCode.PAGE_UP:
                                r = e._trimAlignValue(o + (e._valueMax() - e._valueMin()) / i);
                                break;
                            case t.ui.keyCode.PAGE_DOWN:
                                r = e._trimAlignValue(o - (e._valueMax() - e._valueMin()) / i);
                                break;
                            case t.ui.keyCode.UP:
                            case t.ui.keyCode.RIGHT:
                                if (o === e._valueMax()) return;
                                r = e._trimAlignValue(o + a);
                                break;
                            case t.ui.keyCode.DOWN:
                            case t.ui.keyCode.LEFT:
                                if (o === e._valueMin()) return;
                                r = e._trimAlignValue(o - a)
                        }
                        e._slide(s, l, r)
                    }
                }).keyup(function(i) {
                    var s = t(this).data("index.ui-slider-handle");
                    e._keySliding && (e._keySliding = !1, e._stop(i, s), e._change(i, s), t(this).removeClass("ui-state-active"))
                }), this._refreshValue(), this._animateOff = !1
            },
            destroy: function() {
                return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
            },
            _mouseCapture: function(e) {
                var i, s, n, o, r, a, l, h, c, u = this.options;
                return !u.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), i = {
                    x: e.pageX,
                    y: e.pageY
                }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, r = this, this.handles.each(function(e) {
                    var i = Math.abs(s - r.values(e));
                    n > i && (n = i, o = t(this), a = e)
                }), !0 === u.range && this.values(1) === u.min && (a += 1, o = t(this.handles[a])), !1 !== (l = this._start(e, a)) && (this._mouseSliding = !0, r._handleIndex = a, o.addClass("ui-state-active").focus(), h = o.offset(), c = !t(e.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = c ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - h.left - o.width() / 2,
                    top: e.pageY - h.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
            },
            _mouseStart: function(t) {
                return !0
            },
            _mouseDrag: function(t) {
                var e = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function(t) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(t) {
                var e, i, s, n, o;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / e) > 1 && (s = 1), s < 0 && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
            },
            _start: function(t, e) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
            },
            _slide: function(t, e, i) {
                var s, n, o;
                this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === e && i > s || 1 === e && i < s) && (i = s), i !== this.values(e) && ((n = this.values())[e] = i, o = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i,
                    values: n
                }), s = this.values(e ? 0 : 1), !1 !== o && this.values(e, i, !0))) : i !== this.value() && !1 !== (o = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i
                })) && this.value(i)
            },
            _stop: function(t, e) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
            },
            _change: function(t, e) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {
                        handle: this.handles[e],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("change", t, i)
                }
            },
            value: function(t) {
                if (arguments.length) {
                    this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0);
                    return
                }
                return this._value()
            },
            values: function(e, i) {
                var s, n, o;
                if (arguments.length > 1) {
                    this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e);
                    return
                }
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
                for (s = this.options.values, n = arguments[0], o = 0; o < s.length; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
                this._refreshValue()
            },
            _setOption: function(e, i) {
                var s, n = 0;
                switch (t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
                    case "disabled":
                        i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
                        break;
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), s = 0; s < n; s += 1) this._change(null, s);
                        this._animateOff = !1
                }
            },
            _value: function() {
                var t = this.options.value;
                return this._trimAlignValue(t)
            },
            _values: function(t) {
                var e, i, s;
                if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                for (s = 0, i = this.options.values.slice(); s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            },
            _trimAlignValue: function(t) {
                if (t <= this._valueMin()) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    s = t - i;
                return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var e, i, s, n, o, r = this.options.range,
                    a = this.options,
                    l = this,
                    h = !this._animateOff && a.animate,
                    c = {};
                this.options.values && this.options.values.length ? this.handles.each(function(s, n) {
                    e = (l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = e + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                        left: e + "%"
                    }, a.animate), 1 === s && l.range[h ? "animate" : "css"]({
                        width: e - i + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                        bottom: e + "%"
                    }, a.animate), 1 === s && l.range[h ? "animate" : "css"]({
                        height: e - i + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    }))), i = e
                }) : (s = this.value(), n = this._valueMin(), e = (o = this._valueMax()) !== n ? (s - n) / (o - n) * 100 : 0, c["horizontal" === l.orientation ? "left" : "bottom"] = e + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    width: e + "%"
                }, a.animate), "max" === r && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
                    width: 100 - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    height: e + "%"
                }, a.animate), "max" === r && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
                    height: 100 - e + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))
            }
        }), t.extend(t.ui.slider, {
            version: "1.8.22"
        })
    }(jQuery),
    function(t, e) {
        function i() {
            return ++n
        }

        function s() {
            return ++o
        }
        var n = 0,
            o = 0;
        t.widget("ui.tabs", {
            options: {
                add: null,
                ajaxOptions: null,
                cache: !1,
                cookie: null,
                collapsible: !1,
                disable: null,
                disabled: [],
                enable: null,
                event: "click",
                fx: null,
                idPrefix: "ui-tabs-",
                load: null,
                panelTemplate: "<div></div>",
                remove: null,
                select: null,
                show: null,
                spinner: "<em>Loading&#8230;</em>",
                tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
            },
            _create: function() {
                this._tabify(!0)
            },
            _setOption: function(t, e) {
                "selected" == t ? this.options.collapsible && e == this.options.selected || this.select(e) : (this.options[t] = e, this._tabify())
            },
            _tabId: function(t) {
                return t.title && t.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + i()
            },
            _sanitizeSelector: function(t) {
                return t.replace(/:/g, "\\:")
            },
            _cookie: function() {
                var e = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + s());
                return t.cookie.apply(null, [e].concat(t.makeArray(arguments)))
            },
            _ui: function(t, e) {
                return {
                    tab: t,
                    panel: e,
                    index: this.anchors.index(t)
                }
            },
            _cleanup: function() {
                this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function() {
                    var e = t(this);
                    e.html(e.data("label.tabs")).removeData("label.tabs")
                })
            },
            _tabify: function(i) {
                function s(e, i) {
                    e.css("display", ""), !t.support.opacity && i.opacity && e[0].style.removeAttribute("filter")
                }
                var n, o, r = this,
                    a = this.options,
                    l = /^#.+/;
                this.list = this.element.find("ol,ul").eq(0), this.lis = t(" > li:has(a[href])", this.list), this.anchors = this.lis.map(function() {
                    return t("a", this)[0]
                }), this.panels = t([]), this.anchors.each(function(e, i) {
                    var s, n = t(i).attr("href"),
                        o = n.split("#")[0];
                    if (o && (o === location.toString().split("#")[0] || (s = t("base")[0]) && o === s.href) && (n = i.hash, i.href = n), l.test(n)) r.panels = r.panels.add(r.element.find(r._sanitizeSelector(n)));
                    else if (n && "#" !== n) {
                        t.data(i, "href.tabs", n), t.data(i, "load.tabs", n.replace(/#.*$/, ""));
                        var h = r._tabId(i);
                        i.href = "#" + h;
                        var c = r.element.find("#" + h);
                        c.length || (c = t(a.panelTemplate).attr("id", h).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(r.panels[e - 1] || r.list)).data("destroy.tabs", !0), r.panels = r.panels.add(c)
                    } else a.disabled.push(e)
                }), i ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), a.selected === e ? (location.hash && this.anchors.each(function(t, e) {
                    if (e.hash == location.hash) return a.selected = t, !1
                }), "number" != typeof a.selected && a.cookie && (a.selected = parseInt(r._cookie(), 10)), "number" != typeof a.selected && this.lis.filter(".ui-tabs-selected").length && (a.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), a.selected = a.selected || (this.lis.length ? 0 : -1)) : null === a.selected && (a.selected = -1), a.selected = a.selected >= 0 && this.anchors[a.selected] || a.selected < 0 ? a.selected : 0, a.disabled = t.unique(a.disabled.concat(t.map(this.lis.filter(".ui-state-disabled"), function(t, e) {
                    return r.lis.index(t)
                }))).sort(), -1 != t.inArray(a.selected, a.disabled) && a.disabled.splice(t.inArray(a.selected, a.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), a.selected >= 0 && this.anchors.length && (r.element.find(r._sanitizeSelector(r.anchors[a.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(a.selected).addClass("ui-tabs-selected ui-state-active"), r.element.queue("tabs", function() {
                    r._trigger("show", null, r._ui(r.anchors[a.selected], r.element.find(r._sanitizeSelector(r.anchors[a.selected].hash))[0]))
                }), this.load(a.selected)), t(window).bind("unload", function() {
                    r.lis.add(r.anchors).unbind(".tabs"), r.lis = r.anchors = r.panels = null
                })) : a.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[a.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), a.cookie && this._cookie(a.selected, a.cookie);
                for (var h, c = 0; h = this.lis[c]; c++) t(h)[-1 == t.inArray(c, a.disabled) || t(h).hasClass("ui-tabs-selected") ? "removeClass" : "addClass"]("ui-state-disabled");
                if (!1 === a.cache && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs"), "mouseover" !== a.event) {
                    var u = function(t, e) {
                            e.is(":not(.ui-state-disabled)") && e.addClass("ui-state-" + t)
                        },
                        d = function(t, e) {
                            e.removeClass("ui-state-" + t)
                        };
                    this.lis.bind("mouseover.tabs", function() {
                        u("hover", t(this))
                    }), this.lis.bind("mouseout.tabs", function() {
                        d("hover", t(this))
                    }), this.anchors.bind("focus.tabs", function() {
                        u("focus", t(this).closest("li"))
                    }), this.anchors.bind("blur.tabs", function() {
                        d("focus", t(this).closest("li"))
                    })
                }
                a.fx && (t.isArray(a.fx) ? (n = a.fx[0], o = a.fx[1]) : n = o = a.fx);
                var p = o ? function(e, i) {
                        t(e).closest("li").addClass("ui-tabs-selected ui-state-active"), i.hide().removeClass("ui-tabs-hide").animate(o, o.duration || "normal", function() {
                            s(i, o), r._trigger("show", null, r._ui(e, i[0]))
                        })
                    } : function(e, i) {
                        t(e).closest("li").addClass("ui-tabs-selected ui-state-active"), i.removeClass("ui-tabs-hide"), r._trigger("show", null, r._ui(e, i[0]))
                    },
                    f = n ? function(t, e) {
                        e.animate(n, n.duration || "normal", function() {
                            r.lis.removeClass("ui-tabs-selected ui-state-active"), e.addClass("ui-tabs-hide"), s(e, n), r.element.dequeue("tabs")
                        })
                    } : function(t, e, i) {
                        r.lis.removeClass("ui-tabs-selected ui-state-active"), e.addClass("ui-tabs-hide"), r.element.dequeue("tabs")
                    };
                this.anchors.bind(a.event + ".tabs", function() {
                    var e = this,
                        i = t(e).closest("li"),
                        s = r.panels.filter(":not(.ui-tabs-hide)"),
                        n = r.element.find(r._sanitizeSelector(e.hash));
                    if (i.hasClass("ui-tabs-selected") && !a.collapsible || i.hasClass("ui-state-disabled") || i.hasClass("ui-state-processing") || r.panels.filter(":animated").length || !1 === r._trigger("select", null, r._ui(this, n[0]))) return this.blur(), !1;
                    if (a.selected = r.anchors.index(this), r.abort(), a.collapsible) {
                        if (i.hasClass("ui-tabs-selected")) return a.selected = -1, a.cookie && r._cookie(a.selected, a.cookie), r.element.queue("tabs", function() {
                            f(e, s)
                        }).dequeue("tabs"), this.blur(), !1;
                        if (!s.length) return a.cookie && r._cookie(a.selected, a.cookie), r.element.queue("tabs", function() {
                            p(e, n)
                        }), r.load(r.anchors.index(this)), this.blur(), !1
                    }
                    if (a.cookie && r._cookie(a.selected, a.cookie), n.length) s.length && r.element.queue("tabs", function() {
                        f(e, s)
                    }), r.element.queue("tabs", function() {
                        p(e, n)
                    }), r.load(r.anchors.index(this));
                    else throw "jQuery UI Tabs: Mismatching fragment identifier.";
                    t.browser.msie && this.blur()
                }), this.anchors.bind("click.tabs", function() {
                    return !1
                })
            },
            _getIndex: function(t) {
                return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
            },
            destroy: function() {
                var e = this.options;
                return this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each(function() {
                    var e = t.data(this, "href.tabs");
                    e && (this.href = e);
                    var i = t(this).unbind(".tabs");
                    t.each(["href", "load", "cache"], function(t, e) {
                        i.removeData(e + ".tabs")
                    })
                }), this.lis.unbind(".tabs").add(this.panels).each(function() {
                    t.data(this, "destroy.tabs") ? t(this).remove() : t(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
                }), e.cookie && this._cookie(null, e.cookie), this
            },
            add: function(i, s, n) {
                n === e && (n = this.anchors.length);
                var o = this,
                    r = this.options,
                    a = t(r.tabTemplate.replace(/#\{href\}/g, i).replace(/#\{label\}/g, s)),
                    l = i.indexOf("#") ? this._tabId(t("a", a)[0]) : i.replace("#", "");
                a.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
                var h = o.element.find("#" + l);
                return h.length || (h = t(r.panelTemplate).attr("id", l).data("destroy.tabs", !0)), h.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), n >= this.lis.length ? (a.appendTo(this.list), h.appendTo(this.list[0].parentNode)) : (a.insertBefore(this.lis[n]), h.insertBefore(this.panels[n])), r.disabled = t.map(r.disabled, function(t, e) {
                    return t >= n ? ++t : t
                }), this._tabify(), 1 == this.anchors.length && (r.selected = 0, a.addClass("ui-tabs-selected ui-state-active"), h.removeClass("ui-tabs-hide"), this.element.queue("tabs", function() {
                    o._trigger("show", null, o._ui(o.anchors[0], o.panels[0]))
                }), this.load(0)), this._trigger("add", null, this._ui(this.anchors[n], this.panels[n])), this
            },
            remove: function(e) {
                e = this._getIndex(e);
                var i = this.options,
                    s = this.lis.eq(e).remove(),
                    n = this.panels.eq(e).remove();
                return s.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(e + (e + 1 < this.anchors.length ? 1 : -1)), i.disabled = t.map(t.grep(i.disabled, function(t, i) {
                    return t != e
                }), function(t, i) {
                    return t >= e ? --t : t
                }), this._tabify(), this._trigger("remove", null, this._ui(s.find("a")[0], n[0])), this
            },
            enable: function(e) {
                e = this._getIndex(e);
                var i = this.options;
                if (-1 != t.inArray(e, i.disabled)) return this.lis.eq(e).removeClass("ui-state-disabled"), i.disabled = t.grep(i.disabled, function(t, i) {
                    return t != e
                }), this._trigger("enable", null, this._ui(this.anchors[e], this.panels[e])), this
            },
            disable: function(t) {
                t = this._getIndex(t);
                var e = this.options;
                return t != e.selected && (this.lis.eq(t).addClass("ui-state-disabled"), e.disabled.push(t), e.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[t], this.panels[t]))), this
            },
            select: function(t) {
                if (-1 == (t = this._getIndex(t))) {
                    if (!this.options.collapsible || -1 == this.options.selected) return this;
                    t = this.options.selected
                }
                return this.anchors.eq(t).trigger(this.options.event + ".tabs"), this
            },
            load: function(e) {
                e = this._getIndex(e);
                var i = this,
                    s = this.options,
                    n = this.anchors.eq(e)[0],
                    o = t.data(n, "load.tabs");
                if (this.abort(), !o || 0 !== this.element.queue("tabs").length && t.data(n, "cache.tabs")) {
                    this.element.dequeue("tabs");
                    return
                }
                if (this.lis.eq(e).addClass("ui-state-processing"), s.spinner) {
                    var r = t("span", n);
                    r.data("label.tabs", r.html()).html(s.spinner)
                }
                return this.xhr = t.ajax(t.extend({}, s.ajaxOptions, {
                    url: o,
                    success: function(o, r) {
                        i.element.find(i._sanitizeSelector(n.hash)).html(o), i._cleanup(), s.cache && t.data(n, "cache.tabs", !0), i._trigger("load", null, i._ui(i.anchors[e], i.panels[e]));
                        try {
                            s.ajaxOptions.success(o, r)
                        } catch (a) {}
                    },
                    error: function(t, o, r) {
                        i._cleanup(), i._trigger("load", null, i._ui(i.anchors[e], i.panels[e]));
                        try {
                            s.ajaxOptions.error(t, o, e, n)
                        } catch (a) {}
                    }
                })), i.element.dequeue("tabs"), this
            },
            abort: function() {
                return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this
            },
            url: function(t, e) {
                return this.anchors.eq(t).removeData("cache.tabs").data("load.tabs", e), this
            },
            length: function() {
                return this.anchors.length
            }
        }), t.extend(t.ui.tabs, {
            version: "1.8.22"
        }), t.extend(t.ui.tabs.prototype, {
            rotation: null,
            rotate: function(t, e) {
                var i = this,
                    s = this.options,
                    n = i._rotate || (i._rotate = function(e) {
                        clearTimeout(i.rotation), i.rotation = setTimeout(function() {
                            var t = s.selected;
                            i.select(++t < i.anchors.length ? t : 0)
                        }, t), e && e.stopPropagation()
                    }),
                    o = i._unrotate || (i._unrotate = e ? function(t) {
                        n()
                    } : function(t) {
                        t.clientX && i.rotate(null)
                    });
                return t ? (this.element.bind("tabsshow", n), this.anchors.bind(s.event + ".tabs", o), n()) : (clearTimeout(i.rotation), this.element.unbind("tabsshow", n), this.anchors.unbind(s.event + ".tabs", o), delete this._rotate, delete this._unrotate), this
            }
        })
    }(jQuery),
    function(t, e) {
        var i = 0,
            s = {},
            n = {},
            o = Array.prototype.slice,
            r = function(e) {
                return t.isArray(e) ? e : [e]
            },
            a = "id",
            l = "form",
            h = "disabled",
            c = "wizard",
            u = "default",
            d = "number",
            p = "object",
            f = "string",
            g = "boolean",
            m = "afterBackward",
            v = "afterDestroy",
            b = "afterForward",
            y = "afterSelect",
            w = "beforeBackward",
            _ = "beforeDestroy",
            x = "beforeForward",
            C = "beforeSelect";
        t.each("branch form header step wrapper".split(" "), function() {
            s[this] = "." + (n[this] = c + "-" + this)
        }), t.widget("kf." + c, {
            version: "1.0.0",
            options: {
                animations: {
                    show: {
                        options: {
                            duration: 0
                        },
                        properties: {
                            opacity: "show"
                        }
                    },
                    hide: {
                        options: {
                            duration: 0
                        },
                        properties: {
                            opacity: "hide"
                        }
                    }
                },
                backward: ".backward",
                branches: ".branch",
                disabled: !1,
                enableSubmit: !1,
                forward: ".forward",
                header: ":header:first",
                initialStep: 0,
                stateAttribute: "data-state",
                stepClasses: {
                    current: "current",
                    exclude: "exclude",
                    stop: "stop",
                    submit: "submit",
                    unidirectional: "unidirectional"
                },
                steps: ".step",
                submit: ":submit",
                transitions: {},
                unidirectional: !1,
                afterBackward: null,
                afterDestroy: null,
                afterForward: null,
                afterSelect: null,
                beforeBackward: null,
                beforeDestroy: null,
                beforeForward: null,
                beforeSelect: null,
                create: null
            },
            _create: function() {
                var e, o, h = this,
                    d = h.options,
                    p = h.element,
                    f = p.find(d.steps).eq(0).parent();
                p[0].elements ? e = p : (e = p.find(l)).length || (e = p.closest(l)), (o = p.find(d.header)).length || (o = e.find(d.header)), h.elements = {
                    form: e.addClass(n.form),
                    submit: e.find(d.submit),
                    forward: e.find(d.forward),
                    backward: e.find(d.backward),
                    header: o.addClass(n.header),
                    steps: p.find(d.steps).hide().addClass(n.step),
                    branches: p.find(d.branches).add(f).addClass(n.branch),
                    stepsWrapper: f.addClass(n.wrapper),
                    wizard: p.addClass(c)
                }, f.attr(a) || f.attr(a, c + "-" + ++i), h.elements.forward.click(function(t) {
                    t.preventDefault(), h.forward(t)
                }), h.elements.backward.click(function(t) {
                    t.preventDefault(), h.backward(t)
                }), h._currentState = {
                    branchesActivated: [],
                    stepsActivated: []
                }, h._stepCount = h.elements.steps.length, h._lastStepIndex = h._stepCount - 1, h._branchLabels = [], h.elements.steps.each(function(e) {
                    h._branchLabels[e] = t(this).parent().attr(a)
                }), h._excludesFilter = function() {
                    return !t(this).hasClass(d.stepClasses.exclude)
                }, d.transitions[u] || (d.transitions[u] = function(t) {
                    return h.stepIndex(t.nextAll(s.step))
                }), h.select.apply(h, r(d.initialStep))
            },
            _fastForward: function(i, s, n) {
                var o = 0,
                    r = this,
                    a = r._currentState.stepIndex,
                    l = [a];
                t.isFunction(s) && (n = s, s = e),
                    function e() {
                        r._transition(a, function(h, c) {
                            if (-1 === (a = r.stepIndex(h, c))) throw Error('[_fastForward]: Invalid step "' + h + '"');
                            if (t.inArray(a, l) >= 0) throw Error('[_fastForward]: Recursion detected on step "' + h + '"');
                            l.push(a), a === r._lastStepIndex || (s ? ++o : a) === i ? n.call(r, a, l) : e()
                        })
                    }()
            },
            _find: function(e, i, s) {
                var n, o, a, l, h, c = [],
                    u = i instanceof jQuery ? i : t(i);

                function g(t, e) {
                    if (e === l) return n = e, !1
                }
                if (null !== e && u.length)
                    for (o = 0, a = (e = r(e)).length; o < a; o++) n = null, (h = typeof(l = e[o])) === d ? n = u.get(l) : h === f ? n = document.getElementById(l.replace("#", "")) : h === p && (l instanceof jQuery && l.length && (l = l[0]), l.nodeType && u.each(g)), n && c.push(n);
                return !1 === s ? c : t(c)
            },
            _move: function(i, s, n, o, r) {
                var a = this,
                    l = a._currentState;

                function h(i, s) {
                    r.call(a, i, t.isArray(o) ? o : !1 !== o ? s : e)
                }
                typeof s === g && (r = o, o = n, n = s, s = e), !0 === n ? i > 0 ? a._fastForward(i, n, h) : r.call(a, l.stepsActivated[Math.max(0, i + (l.stepsActivated.length - 1))]) : -1 !== (i = a.stepIndex(i, s)) && (i > l.stepIndex ? a._fastForward(i, h) : h.call(a, i))
            },
            _state: function(e, i) {
                if (!this.isValidStepIndex(e)) return null;
                this.options;
                var n = t.extend(!0, {}, this._currentState);
                i = r(i || e), n.step = this.elements.steps.eq(e), n.branch = n.step.parent(), n.branchStepCount = n.branch.children(s.step).length, n.isMovingForward = e > n.stepIndex, n.stepIndexInBranch = n.branch.children(s.step).index(n.step);
                for (var o, a, l, h = 0, c = i.length; h < c; h++) e = i[h], o = this._branchLabels[e], !n.stepIndex || n.stepIndex < e ? 0 > t.inArray(e, n.stepsActivated) && (n.stepsActivated.push(e), 0 > t.inArray(o, n.branchesActivated) && n.branchesActivated.push(o)) : n.stepIndex > e && (a = t.inArray(o, n.branchesActivated) + 1, l = t.inArray(e, n.stepsActivated) + 1, a > 0 && n.branchesActivated.splice(a, n.branchesActivated.length - 1), l > 0 && n.stepsActivated.splice(l, n.stepsActivated.length - 1)), n.stepIndex = e, n.branchLabel = o;
                return n.stepsComplete = Math.max(0, this._find(n.stepsActivated, this.elements.steps).filter(this._excludesFilter).length - 1), n.stepsPossible = Math.max(0, this._find(n.branchesActivated, this.elements.branches).children(s.step).filter(this._excludesFilter).length - 1), t.extend(n, {
                    branchLabel: this._branchLabels[e],
                    isFirstStep: 0 === e,
                    isFirstStepInBranch: 0 === n.stepIndexInBranch,
                    isLastStep: e === this._lastStepIndex,
                    isLastStepInBranch: n.stepIndexInBranch === n.branchStepCount - 1,
                    percentComplete: 100 * n.stepsComplete / n.stepsPossible,
                    stepsRemaining: n.stepsPossible - n.stepsComplete
                }), n
            },
            _transition: function(i, s, n) {
                var a = this;
                t.isFunction(i) ? (n = i, i = a._currentState.stepIndex, s = e) : t.isFunction(s) && (n = s, s = e);
                var l, h = a.options,
                    c = a.step(i, s),
                    d = c.attr(h.stateAttribute),
                    p = d ? h.transitions[d] : h.transitions[u];
                return e !== (l = t.isFunction(p) ? p.call(a, c, function() {
                    return n.apply(a, o.call(arguments))
                }) : d) && !1 !== l && n.apply(a, r(l)), l
            },
            _update: function(e, i) {
                var s = this._currentState,
                    n = this.options;
                if (s.step) {
                    if (n.disabled || !i || i.stepIndex === s.stepIndex || !this._trigger(C, e, i) || i.isMovingForward && !this._trigger(x, e, i) || !i.isMovingForward && !this._trigger(w, e, i)) return;
                    s.step.removeClass(n.stepClasses.current).animate(n.animations.hide.properties, t.extend({}, n.animations.hide.options))
                }
                this._currentState = i, i.step.addClass(n.stepClasses.current).animate(n.animations.show.properties, t.extend({}, n.animations.show.options)), i.isFirstStep || n.unidirectional || i.step.hasClass(n.stepClasses.unidirectional) ? this.elements.backward.attr(h, !0) : this.elements.backward.removeAttr(h), i.isLastStepInBranch && !i.step.attr(n.stateAttribute) || i.step.hasClass(n.stepClasses.stop) ? this.elements.forward.attr(h, !0) : this.elements.forward.removeAttr(h), n.enableSubmit || i.step.hasClass(n.stepClasses.submit) ? this.elements.submit.removeAttr(h) : this.elements.submit.attr(h, !0), s.step && (this._trigger(y, e, i), this._trigger(i.isMovingForward ? b : m, e, i))
            },
            backward: function(t, i) {
                typeof t === d && (i = t, t = e), i === e && (i = 1), !this._currentState.isFirstStep && typeof i === d && this._move(-i, !0, !1, function(e, i) {
                    this._update(t, this._state(e, i))
                })
            },
            branch: function(t) {
                return arguments.length ? this._find(t, this.elements.branches) : this._currentState.branch
            },
            branches: function(t) {
                return arguments.length ? this.branch(t).children(s.branch) : this.elements.branches
            },
            branchesActivated: function() {
                return this._find(this._currentState.branchesActivated, this.elements.branches)
            },
            destroy: function() {
                var e = this.elements;
                this._trigger(_, null, this.state()) && (this.element.removeClass(c), e.form.removeClass(n.form), e.header.removeClass(n.header), e.steps.show().removeClass(n.step), e.stepsWrapper.removeClass(n.wrapper), e.branches.removeClass(n.branch), t.Widget.prototype.destroy.call(this), this._trigger(v))
            },
            form: function() {
                return this.elements.form
            },
            forward: function(t, i, s) {
                typeof t === d && (s = i, i = t, t = e), i === e && (i = 1), !this._currentState.isLastStep && typeof i === d && this._move(i, !0, s, function(e, i) {
                    this._update(t, this._state(e, i))
                })
            },
            isValidStep: function(t, e) {
                return this.isValidStepIndex(this.stepIndex(t, e))
            },
            isValidStepIndex: function(t) {
                return typeof t === d && t >= 0 && t <= this._lastStepIndex
            },
            stepCount: function() {
                return this._stepCount
            },
            select: function(i, s, n, o, r) {
                i instanceof t.Event || (r = o, o = n, n = s, s = i, i = e), s !== e && (t.isArray(s) ? (r = o, o = n, n = s[1], s = s[0]) : typeof n === g ? (r = o, o = n, n = e) : t.isArray(n) && (r = n, n = e), this._move(s, n, o, r, function(t, e) {
                    this._update(i, this._state(t, e))
                }))
            },
            state: function(i, s, n) {
                return arguments.length ? (t.isArray(i) ? (n = s, s = i[1], i = i[0]) : t.isArray(s) && (n = s, s = e), this._state(this.stepIndex(i, s), n)) : this._currentState
            },
            step: function(i, s) {
                var o;
                return arguments.length ? (t.isArray(i) && (s = i[1], i = i[0]), typeof i === d ? o = this._find(i, s !== e ? this.steps(s) : this.elements.steps) : (o = this._find(i, this.elements.steps.add(this.elements.branches))) && o.hasClass(n.branch) && (o = this._find(s || 0, this.steps(o))), o) : this._currentState.step
            },
            stepIndex: function(i, n, o) {
                var r;
                return arguments.length ? (t.isArray(i) ? (o = n, n = i[1], i = i[0]) : typeof n === g && (o = n, n = e), (r = this.step(i, n)) ? (o ? r.siblings(s.step).andSelf() : this.elements.steps).index(r) : -1) : this._currentState.stepIndex
            },
            steps: function(t) {
                return arguments.length ? this.branch(t).children(s.step) : this.elements.steps
            },
            stepsActivated: function() {
                return this._find(this._currentState.stepsActivated, this.elements.steps)
            },
            submit: function() {
                this.elements.form.submit()
            }
        })
    }(jQuery),
    function(t) {
        t.extend(t.fn, {
            validate: function(e) {
                if (!this.length) {
                    e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
                    return
                }
                var i = t.data(this[0], "validator");
                return i || (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                    i.settings.submitHandler && (i.submitButton = e.target), t(e.target).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
                }), this.submit(function(e) {
                    function s() {
                        var s;
                        return !i.settings.submitHandler || (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && s.remove(), !1)
                    }
                    return (i.settings.debug && e.preventDefault(), i.cancelSubmit) ? (i.cancelSubmit = !1, s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : s() : (i.focusInvalid(), !1)
                }))), i
            },
            valid: function() {
                if (t(this[0]).is("form")) return this.validate().form();
                var e = !0,
                    i = t(this[0].form).validate();
                return this.each(function() {
                    e = e && i.element(this)
                }), e
            },
            removeAttrs: function(e) {
                var i = {},
                    s = this;
                return t.each(e.split(/\s/), function(t, e) {
                    i[e] = s.attr(e), s.removeAttr(e)
                }), i
            },
            rules: function(e, i) {
                var s = this[0];
                if (e) {
                    var n = t.data(s.form, "validator").settings,
                        o = n.rules,
                        r = t.validator.staticRules(s);
                    switch (e) {
                        case "add":
                            t.extend(r, t.validator.normalizeRule(i)), delete r.messages, o[s.name] = r, i.messages && (n.messages[s.name] = t.extend(n.messages[s.name], i.messages));
                            break;
                        case "remove":
                            if (!i) return delete o[s.name], r;
                            var a = {};
                            return t.each(i.split(/\s/), function(t, e) {
                                a[e] = r[e], delete r[e]
                            }), a
                    }
                }
                var l = t.validator.normalizeRules(t.extend({}, t.validator.classRules(s), t.validator.attributeRules(s), t.validator.dataRules(s), t.validator.staticRules(s)), s);
                if (l.required) {
                    var h = l.required;
                    delete l.required, l = t.extend({
                        required: h
                    }, l)
                }
                return l
            }
        }), t.extend(t.expr[":"], {
            blank: function(e) {
                return !t.trim("" + t(e).val())
            },
            filled: function(e) {
                return !!t.trim("" + t(e).val())
            },
            unchecked: function(e) {
                return !t(e).prop("checked")
            }
        }), t.validator = function(e, i) {
            this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
        }, t.validator.format = function(e, i) {
            return 1 === arguments.length ? function() {
                var i = t.makeArray(arguments);
                return i.unshift(e), t.validator.format.apply(this, i)
            } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
                e = e.replace(RegExp("\\{" + t + "\\}", "g"), function() {
                    return i
                })
            }), e)
        }, t.extend(t.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "span",
                focusInvalid: !0,
                errorContainer: t([]),
                errorLabelContainer: t([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(t, e) {
                    this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
                },
                onfocusout: function(t, e) {
                    !this.checkable(t) && (t.name in this.submitted || !this.optional(t)) && this.element(t)
                },
                onkeyup: function(t, e) {
                    (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
                },
                onclick: function(t, e) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function(e, i, s) {
                    "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
                },
                unhighlight: function(e, i, s) {
                    "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
                }
            },
            setDefaults: function(e) {
                t.extend(t.validator.defaults, e)
            },
            messages: {
                required: "Required",
                remote: "Please fix this field.",
                email: "Wrong email.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: t.validator.format("Please enter no more than {0} characters."),
                minlength: t.validator.format("Please enter at least {0} characters."),
                rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
                range: t.validator.format("Please enter a value between {0} and {1}."),
                max: t.validator.format("Please enter a value less than or equal to {0}."),
                min: t.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var e = this.groups = {};
                    t.each(this.settings.groups, function(i, s) {
                        "string" == typeof s && (s = s.split(/\s/)), t.each(s, function(t, s) {
                            e[s] = i
                        })
                    });
                    var i = this.settings.rules;

                    function s(e) {
                        var i = t.data(this[0].form, "validator"),
                            s = "on" + e.type.replace(/^validate/, "");
                        i && i.settings[s] && i.settings[s].call(i, this[0], e)
                    }
                    t.each(i, function(e, s) {
                        i[e] = t.validator.normalizeRule(s)
                    }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", s).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", s), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function(e) {
                    e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
                    var i = !1 !== this.check(e);
                    return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
                },
                showErrors: function(e) {
                    if (e) {
                        for (var i in t.extend(this.errorMap, e), this.errorList = [], e) this.errorList.push({
                            message: e[i],
                            element: this.findByName(i)[0]
                        });
                        this.successList = t.grep(this.successList, function(t) {
                            return !(t.name in e)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(t) {
                    var e = 0;
                    for (var i in t) e++;
                    return e
                },
                hideErrors: function() {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
                },
                findLastActive: function() {
                    var e = this.lastActive;
                    return e && 1 === t.grep(this.errorList, function(t) {
                        return t.element.name === e.name
                    }).length && e
                },
                elements: function() {
                    var e = this,
                        i = {};
                    return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                        return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in i) && !!e.objectLength(t(this).rules()) && (i[this.name] = !0, !0)
                    })
                },
                clean: function(e) {
                    return t(e)[0]
                },
                errors: function() {
                    var e = this.settings.errorClass.replace(" ", ".");
                    return t(this.settings.errorElement + "." + e, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                elementValue: function(e) {
                    var i = t(e).attr("type"),
                        s = t(e).val();
                    return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof s ? s.replace(/\r/g, "") : s
                },
                check: function(e) {
                    e = this.validationTargetFor(this.clean(e));
                    var i, s = t(e).rules(),
                        n = !1,
                        o = this.elementValue(e);
                    for (var r in s) {
                        var a = {
                            method: r,
                            parameters: s[r]
                        };
                        try {
                            if (i = t.validator.methods[r].call(this, o, e, a.parameters), "dependency-mismatch" === i) {
                                n = !0;
                                continue
                            }
                            if (n = !1, "pending" === i) {
                                this.toHide = this.toHide.not(this.errorsFor(e));
                                return
                            }
                            if (!i) return this.formatAndAdd(e, a), !1
                        } catch (l) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + a.method + "' method.", l), l
                        }
                    }
                    if (!n) return this.objectLength(s) && this.successList.push(e), !0
                },
                customDataMessage: function(e, i) {
                    return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
                },
                customMessage: function(t, e) {
                    var i = this.settings.messages[t];
                    return i && (i.constructor === String ? i : i[e])
                },
                findDefined: function() {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t]
                },
                defaultMessage: function(e, i) {
                    return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
                },
                formatAndAdd: function(e, i) {
                    var s = this.defaultMessage(e, i.method),
                        n = /\$?\{(\d+)\}/g;
                    "function" == typeof s ? s = s.call(this, i.parameters, e) : n.test(s) && (s = t.validator.format(s.replace(n, "{$1}"), i.parameters)), this.errorList.push({
                        message: s,
                        element: e
                    }), this.errorMap[e.name] = s, this.submitted[e.name] = s
                },
                addWrapper: function(t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function() {
                    var t, e;
                    for (t = 0; this.errorList[t]; t++) {
                        var i = this.errorList[t];
                        this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message)
                    }
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return t(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(e, i) {
                    var s = this.errorsFor(e);
                    s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
                },
                errorsFor: function(e) {
                    var i = this.idOrName(e);
                    return this.errors().filter(function() {
                        return t(this).attr("for") === i
                    })
                },
                idOrName: function(t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                },
                validationTargetFor: function(t) {
                    return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
                },
                checkable: function(t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function(e) {
                    return t(this.currentForm).find("[name='" + e + "']")
                },
                getLength: function(e, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return t("option:selected", i).length;
                        case "input":
                            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                    }
                    return e.length
                },
                depend: function(t, e) {
                    return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
                },
                dependTypes: {
                    boolean: function(t, e) {
                        return t
                    },
                    string: function(e, i) {
                        return !!t(e, i.form).length
                    },
                    function: function(t, e) {
                        return t(e)
                    }
                },
                optional: function(e) {
                    var i = this.elementValue(e);
                    return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
                },
                startRequest: function(t) {
                    this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
                },
                stopRequest: function(e, i) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(e) {
                    return t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(e, i) {
                e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
            },
            classRules: function(e) {
                var i = {},
                    s = t(e).attr("class");
                return s && t.each(s.split(" "), function() {
                    this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
                }), i
            },
            attributeRules: function(e) {
                var i, s = {},
                    n = t(e),
                    o = n[0].getAttribute("type");
                for (var r in t.validator.methods) "required" === r ? ("" === (i = n.get(0).getAttribute(r)) && (i = !0), i = !!i) : i = n.attr(r), /min|max/.test(r) && (null === o || /number|range|text/.test(o)) && (i = Number(i)), i ? s[r] = i : o === r && "range" !== o && (s[r] = !0);
                return s.maxlength && /-1|2147483647|524288/.test(s.maxlength) && delete s.maxlength, s
            },
            dataRules: function(e) {
                var i, s, n = {},
                    o = t(e);
                for (i in t.validator.methods) void 0 !== (s = o.data("rule-" + i.toLowerCase())) && (n[i] = s);
                return n
            },
            staticRules: function(e) {
                var i = {},
                    s = t.data(e.form, "validator");
                return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}), i
            },
            normalizeRules: function(e, i) {
                return t.each(e, function(s, n) {
                    if (!1 === n) {
                        delete e[s];
                        return
                    }
                    if (n.param || n.depends) {
                        var o = !0;
                        switch (typeof n.depends) {
                            case "string":
                                o = !!t(n.depends, i.form).length;
                                break;
                            case "function":
                                o = n.depends.call(i, i)
                        }
                        o ? e[s] = void 0 === n.param || n.param : delete e[s]
                    }
                }), t.each(e, function(s, n) {
                    e[s] = t.isFunction(n) ? n(i) : n
                }), t.each(["minlength", "maxlength"], function() {
                    e[this] && (e[this] = Number(e[this]))
                }), t.each(["rangelength", "range"], function() {
                    var i;
                    e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
                }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
            },
            normalizeRule: function(e) {
                if ("string" == typeof e) {
                    var i = {};
                    t.each(e.split(/\s/), function() {
                        i[this] = !0
                    }), e = i
                }
                return e
            },
            addMethod: function(e, i, s) {
                t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
            },
            methods: {
                required: function(e, i, s) {
                    if (!this.depend(s, i)) return "dependency-mismatch";
                    if ("select" === i.nodeName.toLowerCase()) {
                        var n = t(i).val();
                        return n && n.length > 0
                    }
                    return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
                },
                email: function(t, e) {
                    return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
                },
                url: function(t, e) {
                    return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
                },
                date: function(t, e) {
                    return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
                },
                dateISO: function(t, e) {
                    return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
                },
                number: function(t, e) {
                    return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                },
                digits: function(t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                creditcard: function(t, e) {
                    if (this.optional(e)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(t)) return !1;
                    var i = 0,
                        s = 0,
                        n = !1;
                    t = t.replace(/\D/g, "");
                    for (var o = t.length - 1; o >= 0; o--) s = parseInt(t.charAt(o), 10), n && (s *= 2) > 9 && (s -= 9), i += s, n = !n;
                    return i % 10 == 0
                },
                minlength: function(e, i, s) {
                    var n = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                    return this.optional(i) || n >= s
                },
                maxlength: function(e, i, s) {
                    var n = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                    return this.optional(i) || n <= s
                },
                rangelength: function(e, i, s) {
                    var n = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                    return this.optional(i) || n >= s[0] && n <= s[1]
                },
                min: function(t, e, i) {
                    return this.optional(e) || t >= i
                },
                max: function(t, e, i) {
                    return this.optional(e) || t <= i
                },
                range: function(t, e, i) {
                    return this.optional(e) || t >= i[0] && t <= i[1]
                },
                equalTo: function(e, i, s) {
                    var n = t(s);
                    return this.settings.onfocusout && n.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        t(i).valid()
                    }), e === n.val()
                },
                remote: function(e, i, s) {
                    if (this.optional(i)) return "dependency-mismatch";
                    var n = this.previousValue(i);
                    if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), n.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = n.message, s = "string" == typeof s && {
                            url: s
                        } || s, n.old === e) return n.valid;
                    n.old = e;
                    var o = this;
                    this.startRequest(i);
                    var r = {};
                    return r[i.name] = e, t.ajax(t.extend(!0, {
                        url: s,
                        mode: "abort",
                        port: "validate" + i.name,
                        dataType: "json",
                        data: r,
                        success: function(s) {
                            o.settings.messages[i.name].remote = n.originalMessage;
                            var r = !0 === s || "true" === s;
                            if (r) {
                                var a = o.formSubmitted;
                                o.prepareElement(i), o.formSubmitted = a, o.successList.push(i), delete o.invalid[i.name], o.showErrors()
                            } else {
                                var l = {},
                                    h = s || o.defaultMessage(i, "remote");
                                l[i.name] = n.message = t.isFunction(h) ? h(e) : h, o.invalid[i.name] = !0, o.showErrors(l)
                            }
                            n.valid = r, o.stopRequest(i, r)
                        }
                    }, s)), "pending"
                }
            }
        }), t.format = t.validator.format
    }(jQuery),
    function(t) {
        var e = {};
        if (t.ajaxPrefilter) t.ajaxPrefilter(function(t, i, s) {
            var n = t.port;
            "abort" === t.mode && (e[n] && e[n].abort(), e[n] = s)
        });
        else {
            var i = t.ajax;
            t.ajax = function(s) {
                var n = ("mode" in s ? s : t.ajaxSettings).mode,
                    o = ("port" in s ? s : t.ajaxSettings).port;
                return "abort" === n ? (e[o] && e[o].abort(), e[o] = i.apply(this, arguments), e[o]) : i.apply(this, arguments)
            }
        }
    }(jQuery),
    function(t) {
        t.extend(t.fn, {
            validateDelegate: function(e, i, s) {
                return this.bind(i, function(i) {
                    var n = t(i.target);
                    if (n.is(e)) return s.apply(n, arguments)
                })
            }
        })
    }(jQuery),
    /*!
     * iCheck v1.0.2, http://git.io/arlzeA
     * ===================================
     * Powerful jQuery and Zepto plugin for checkboxes and radio buttons customization
     *
     * (c) 2013 Damir Sultanov, http://fronteed.com
     * MIT Licensed
     */
    function(t) {
        var e = "iCheck",
            i = e + "-helper",
            s = "checkbox",
            n = "radio",
            o = "checked",
            r = "un" + o,
            a = "disabled",
            l = "determinate",
            h = "in" + l,
            c = "update",
            u = "type",
            d = "click",
            p = "touchbegin.i touchend.i",
            f = "addClass",
            g = "removeClass",
            m = "trigger",
            v = "label",
            b = "cursor",
            y = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);

        function w(t, e, i) {
            var s = t[0],
                r = /er/.test(i) ? h : /bl/.test(i) ? a : o,
                d = i == c ? {
                    checked: s[o],
                    disabled: s[a],
                    indeterminate: "true" == t.attr(h) || "false" == t.attr(l)
                } : s[r];
            if (/^(ch|di|in)/.test(i) && !d) _(t, r);
            else if (/^(un|en|de)/.test(i) && d) x(t, r);
            else if (i == c)
                for (var p in d) d[p] ? _(t, p, !0) : x(t, p, !0);
            else e && "toggle" != i || (e || t[m]("ifClicked"), d ? s[u] !== n && x(t, r) : _(t, r))
        }

        function _(s, c, d) {
            var p = s[0],
                m = s.parent(),
                v = c == o,
                y = c == h,
                w = c == a,
                _ = y ? l : v ? r : "enabled",
                C = k(s, _ + D(p[u])),
                S = k(s, c + D(p[u]));
            if (!0 !== p[c]) {
                if (!d && c == o && p[u] == n && p.name) {
                    var T = s.closest("form"),
                        F = 'input[name="' + p.name + '"]';
                    (F = T.length ? T.find(F) : t(F)).each(function() {
                        this !== p && t(this).data(e) && x(t(this), c)
                    })
                }
                y ? (p[c] = !0, p[o] && x(s, o, "force")) : (d || (p[c] = !0), v && p[h] && x(s, h, !1)), A(s, v, c, d)
            }
            p[a] && k(s, b, !0) && m.find("." + i).css(b, "default"), m[f](S || k(s, c) || ""), m.attr("role") && !y && m.attr("aria-" + (w ? a : o), "true"), m[g](C || k(s, _) || "")
        }

        function x(t, e, s) {
            var n = t[0],
                c = t.parent(),
                d = e == o,
                p = e == h,
                m = e == a,
                v = p ? l : d ? r : "enabled",
                y = k(t, v + D(n[u])),
                w = k(t, e + D(n[u]));
            !1 !== n[e] && ((p || !s || "force" == s) && (n[e] = !1), A(t, d, v, s)), !n[a] && k(t, b, !0) && c.find("." + i).css(b, "pointer"), c[g](w || k(t, e) || ""), c.attr("role") && !p && c.attr("aria-" + (m ? a : o), "false"), c[f](y || k(t, v) || "")
        }

        function C(i, s) {
            i.data(e) && (i.parent().html(i.attr("style", i.data(e).s || "")), s && i[m](s), i.off(".i").unwrap(), t(v + '[for="' + i[0].id + '"]').add(i.closest(v)).off(".i"))
        }

        function k(t, i, s) {
            if (t.data(e)) return t.data(e).o[i + (s ? "" : "Class")]
        }

        function D(t) {
            return t.charAt(0).toUpperCase() + t.slice(1)
        }

        function A(t, e, i, s) {
            s || (e && t[m]("ifToggled"), t[m]("ifChanged")[m]("if" + D(i)))
        }
        t.fn[e] = function(r, l) {
            var b = 'input[type="' + s + '"], input[type="' + n + '"]',
                k = t(),
                D = function(e) {
                    e.each(function() {
                        var e = t(this);
                        k = e.is(b) ? k.add(e) : k.add(e.find(b))
                    })
                };
            if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(r)) return r = r.toLowerCase(), D(this), k.each(function() {
                var e = t(this);
                "destroy" == r ? C(e, "ifDestroyed") : w(e, !0, r), t.isFunction(l) && l()
            });
            if ("object" != typeof r && r) return this;
            var A = t.extend({
                    checkedClass: o,
                    disabledClass: a,
                    indeterminateClass: h,
                    labelHover: !0
                }, r),
                S = A.handle,
                T = A.hoverClass || "hover",
                F = A.focusClass || "focus",
                P = A.activeClass || "active",
                I = !!A.labelHover,
                E = A.labelHoverClass || "hover",
                z = 0 | ("" + A.increaseArea).replace("%", "");
            return (S == s || S == n) && (b = 'input[type="' + S + '"]'), z < -50 && (z = -50), D(this), k.each(function() {
                var r = t(this);
                C(r);
                var l, h = this,
                    b = h.id,
                    k = -z + "%",
                    D = 100 + 2 * z + "%",
                    S = {
                        position: "absolute",
                        top: k,
                        left: k,
                        display: "block",
                        width: D,
                        height: D,
                        margin: 0,
                        padding: 0,
                        background: "#fff",
                        border: 0,
                        opacity: 0
                    },
                    M = y ? {
                        position: "absolute",
                        visibility: "hidden"
                    } : z ? S : {
                        position: "absolute",
                        opacity: 0
                    },
                    O = h[u] == s ? A.checkboxClass || "i" + s : A.radioClass || "i" + n,
                    L = t(v + '[for="' + b + '"]').add(r.closest(v)),
                    H = !!A.aria,
                    N = e + "-" + Math.random().toString(36).substr(2, 6),
                    W = '<div class="' + O + '" ' + (H ? 'role="' + h[u] + '" ' : "");
                H && L.each(function() {
                    W += 'aria-labelledby="', this.id ? W += this.id : (this.id = N, W += N), W += '"'
                }), W = r.wrap(W + "/>")[m]("ifCreated").parent().append(A.insert), l = t('<ins class="' + i + '"/>').css(S).appendTo(W), r.data(e, {
                    o: A,
                    s: r.attr("style")
                }).css(M), A.inheritClass && W[f](h.className || ""), A.inheritID && b && W.attr("id", e + "-" + b), "static" == W.css("position") && W.css("position", "relative"), w(r, !0, c), L.length && L.on(d + ".i mouseover.i mouseout.i " + p, function(e) {
                    var i = e[u],
                        s = t(this);
                    if (!h[a]) {
                        if (i == d) {
                            if (t(e.target).is("a")) return;
                            w(r, !1, !0)
                        } else I && (/ut|nd/.test(i) ? (W[g](T), s[g](E)) : (W[f](T), s[f](E)));
                        e.stopPropagation()
                    }
                }), r.on(d + ".i focus.i blur.i keyup.i keydown.i keypress.i", function(t) {
                    var e = t[u],
                        i = t.keyCode;
                    return e != d && ("keydown" == e && 32 == i ? (h[u] == n && h[o] || (h[o] ? x(r, o) : _(r, o)), !1) : void("keyup" == e && h[u] == n ? h[o] || _(r, o) : /us|ur/.test(e) && W["blur" == e ? g : f](F)))
                }), l.on(d + " mousedown mouseup mouseover mouseout " + p, function(t) {
                    var e = t[u],
                        i = /wn|up/.test(e) ? P : T;
                    h[a] || (e == d ? w(r, !1, !0) : (/wn|er|in/.test(e) ? W[f](i) : W[g](i + " " + P), L.length && I && i == T && L[/ut|nd/.test(e) ? g : f](E)), t.stopPropagation())
                })
            })
        }
    }(window.jQuery || window.Zepto),
    function(t, e, i, s) {
        function n(e, i) {
            var o = this;
            "object" == typeof i && (delete i.refresh, delete i.render, t.extend(this, i)), this.$element = t(e), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
            var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
            if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), ("top" == r[0] || "bottom" == r[0] || "left" == r[1] || "right" == r[1]) && (r = [r[1], r[0]]), s !== this.positionX && (r[0] = this.positionX.toLowerCase()), s !== this.positionY && (r[1] = this.positionY.toLowerCase()), o.positionX = r[0], o.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (isNaN(parseInt(this.positionX)) ? this.positionX = "center" : this.positionX = parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (isNaN(parseInt(this.positionY)) ? this.positionY = "center" : this.positionY = parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
                backgroundImage: "url(" + this.imageSrc + ")",
                backgroundSize: "cover",
                backgroundPosition: this.position
            }), this;
            if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
                backgroundImage: "url(" + this.imageSrc + ")",
                backgroundSize: "cover",
                backgroundPosition: this.position
            }), this;
            this.$mirror = t("<div />").prependTo(this.mirrorContainer);
            var a = this.$element.find(">.parallax-slider"),
                l = !1;
            0 == a.length ? this.$slider = t("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), l = !0), this.$mirror.addClass("parallax-mirror").css({
                visibility: "hidden",
                zIndex: this.zIndex,
                position: "fixed",
                top: 0,
                left: 0,
                overflow: "hidden"
            }), this.$slider.addClass("parallax-slider").one("load", function() {
                o.naturalHeight && o.naturalWidth || (o.naturalHeight = this.naturalHeight || this.height || 1, o.naturalWidth = this.naturalWidth || this.width || 1), o.aspectRatio = o.naturalWidth / o.naturalHeight, n.isSetup || n.setup(), n.sliders.push(o), n.isFresh = !1, n.requestRender()
            }), l || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load")
        }

        function o(s) {
            return this.each(function() {
                var o = t(this),
                    r = "object" == typeof s && s;
                this == e || this == i || o.is("body") ? n.configure(r) : o.data("px.parallax") ? "object" == typeof s && t.extend(o.data("px.parallax"), r) : (r = t.extend({}, o.data(), r), o.data("px.parallax", new n(this, r))), "string" == typeof s && ("destroy" == s ? n.destroy(this) : n[s]())
            })
        }(function() {
            for (var t = 0, i = ["ms", "moz", "webkit", "o"], s = 0; s < i.length && !e.requestAnimationFrame; ++s) e.requestAnimationFrame = e[i[s] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[i[s] + "CancelAnimationFrame"] || e[i[s] + "CancelRequestAnimationFrame"];
            e.requestAnimationFrame || (e.requestAnimationFrame = function(i) {
                var s = new Date().getTime(),
                    n = Math.max(0, 16 - (s - t)),
                    o = e.setTimeout(function() {
                        i(s + n)
                    }, n);
                return t = s + n, o
            }), e.cancelAnimationFrame || (e.cancelAnimationFrame = function(t) {
                clearTimeout(t)
            })
        })(), t.extend(n.prototype, {
            speed: .2,
            bleed: 0,
            zIndex: -100,
            iosFix: !0,
            androidFix: !0,
            position: "center",
            overScrollFix: !1,
            mirrorContainer: "body",
            refresh: function() {
                this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
                var t, e = n.winHeight,
                    i = n.docHeight,
                    s = Math.min(this.boxOffsetTop, i - e),
                    o = Math.max(this.boxOffsetTop + this.boxHeight - e, 0),
                    r = this.boxHeight + (s - o) * (1 - this.speed) | 0,
                    a = (this.boxOffsetTop - s) * (1 - this.speed) | 0;
                r * this.aspectRatio >= this.boxWidth ? (this.imageWidth = r * this.aspectRatio | 0, this.imageHeight = r, this.offsetBaseTop = a, t = this.imageWidth - this.boxWidth, "left" == this.positionX ? this.offsetLeft = 0 : "right" == this.positionX ? this.offsetLeft = -t : isNaN(this.positionX) ? this.offsetLeft = -t / 2 | 0 : this.offsetLeft = Math.max(this.positionX, -t)) : (this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0, t = this.imageHeight - r, "top" == this.positionY ? this.offsetBaseTop = a : "bottom" == this.positionY ? this.offsetBaseTop = a - t : isNaN(this.positionY) ? this.offsetBaseTop = a - t / 2 | 0 : this.offsetBaseTop = a + Math.max(this.positionY, -t))
            },
            render: function() {
                var t = n.scrollTop,
                    e = n.scrollLeft,
                    i = this.overScrollFix ? n.overScroll : 0,
                    s = t + n.winHeight;
                this.boxOffsetBottom > t && this.boxOffsetTop <= s ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - e, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
                    transform: "translate3d(" + this.mirrorLeft + "px, " + (this.mirrorTop - i) + "px, 0px)",
                    visibility: this.visibility,
                    height: this.boxHeight,
                    width: this.boxWidth
                }), this.$slider.css({
                    transform: "translate3d(" + this.offsetLeft + "px, " + this.offsetTop + "px, 0px)",
                    position: "absolute",
                    height: this.imageHeight,
                    width: this.imageWidth,
                    maxWidth: "none"
                })
            }
        }), t.extend(n, {
            scrollTop: 0,
            scrollLeft: 0,
            winHeight: 0,
            winWidth: 0,
            docHeight: 1073741824,
            docWidth: 1073741824,
            sliders: [],
            isReady: !1,
            isFresh: !1,
            isBusy: !1,
            setup: function() {
                if (!this.isReady) {
                    var s = this,
                        o = t(i),
                        r = t(e),
                        a = function() {
                            n.winHeight = r.height(), n.winWidth = r.width(), n.docHeight = o.height(), n.docWidth = o.width()
                        },
                        l = function() {
                            var t = r.scrollTop(),
                                e = n.docHeight - n.winHeight,
                                i = n.docWidth - n.winWidth;
                            n.scrollTop = Math.max(0, Math.min(e, t)), n.scrollLeft = Math.max(0, Math.min(i, r.scrollLeft())), n.overScroll = Math.max(t - e, Math.min(t, 0))
                        };
                    r.on("resize.px.parallax load.px.parallax", function() {
                        a(), s.refresh(), n.isFresh = !1, n.requestRender()
                    }).on("scroll.px.parallax load.px.parallax", function() {
                        l(), n.requestRender()
                    }), a(), l(), this.isReady = !0;
                    var h = -1;
                    c()
                }

                function c() {
                    if (h == e.pageYOffset) return e.requestAnimationFrame(c), !1;
                    h = e.pageYOffset, s.render(), e.requestAnimationFrame(c)
                }
            },
            configure: function(e) {
                "object" == typeof e && (delete e.refresh, delete e.render, t.extend(this.prototype, e))
            },
            refresh: function() {
                t.each(this.sliders, function() {
                    this.refresh()
                }), this.isFresh = !0
            },
            render: function() {
                this.isFresh || this.refresh(), t.each(this.sliders, function() {
                    this.render()
                })
            },
            requestRender: function() {
                var t = this;
                t.render(), t.isBusy = !1
            },
            destroy: function(i) {
                var s, o = t(i).data("px.parallax");
                for (o.$mirror.remove(), s = 0; s < this.sliders.length; s += 1) this.sliders[s] == o && this.sliders.splice(s, 1);
                t(i).data("px.parallax", !1), 0 === this.sliders.length && (t(e).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, n.isSetup = !1)
            }
        });
        var r = t.fn.parallax;
        t.fn.parallax = o, t.fn.parallax.Constructor = n, t.fn.parallax.noConflict = function() {
            return t.fn.parallax = r, this
        }, t(function() {
            t('[data-parallax="scroll"]').parallax()
        })
    }(jQuery, window, document),
    function(t) {
        var e = function(e, s) {
            if (this.element = t(e), this.format = i.parseFormat(s.format || this.element.data("date-format") || "mm.dd.yyyy"), this.picker = t(i.template).appendTo("body").on({
                    click: t.proxy(this.click, this)
                }), this.isInput = this.element.is("input"), this.component = !!this.element.is(".date") && this.element.find(".add-on"), this.isInput ? this.element.on({
                    focus: t.proxy(this.show, this),
                    keyup: t.proxy(this.update, this)
                }) : this.component ? this.component.on("click", t.proxy(this.show, this)) : this.element.on("click", t.proxy(this.show, this)), this.minViewMode = s.minViewMode || this.element.data("date-minviewmode") || 0, "string" == typeof this.minViewMode) switch (this.minViewMode) {
                case "months":
                    this.minViewMode = 1;
                    break;
                case "years":
                    this.minViewMode = 2;
                    break;
                default:
                    this.minViewMode = 0
            }
            if (this.viewMode = s.viewMode || this.element.data("date-viewmode") || 0, "string" == typeof this.viewMode) switch (this.viewMode) {
                case "months":
                    this.viewMode = 1;
                    break;
                case "years":
                    this.viewMode = 2;
                    break;
                default:
                    this.viewMode = 0
            }
            this.startViewMode = this.viewMode, this.weekStart = s.weekStart || this.element.data("date-weekstart") || 0, this.weekEnd = 0 === this.weekStart ? 6 : this.weekStart - 1, this.onRender = s.onRender, this.fillDow(), this.fillMonths(), this.update(), this.showMode()
        };
        e.prototype = {
            constructor: e,
            show: function(e) {
                this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.place(), t(window).on("resize", t.proxy(this.place, this)), e && (e.stopPropagation(), e.preventDefault()), this.isInput;
                var i = this;
                t(document).on("mousedown", function(e) {
                    0 == t(e.target).closest(".datepicker").length && i.hide()
                }), this.element.trigger({
                    type: "show",
                    date: this.date
                })
            },
            hide: function() {
                this.picker.hide(), t(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || t(document).off("mousedown", this.hide), this.element.trigger({
                    type: "hide",
                    date: this.date
                })
            },
            set: function() {
                var t = i.formatDate(this.date, this.format);
                this.isInput ? this.element.prop("value", t) : (this.component && this.element.find("input").prop("value", t), this.element.data("date", t))
            },
            setValue: function(t) {
                "string" == typeof t ? this.date = i.parseDate(t, this.format) : this.date = new Date(t), this.set(), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill()
            },
            place: function() {
                var t = this.component ? this.component.offset() : this.element.offset();
                this.picker.css({
                    top: t.top + this.height,
                    left: t.left
                })
            },
            update: function(t) {
                this.date = i.parseDate("string" == typeof t ? t : this.isInput ? this.element.prop("value") : this.element.data("date"), this.format), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill()
            },
            fillDow: function() {
                for (var t = this.weekStart, e = "<tr>"; t < this.weekStart + 7;) e += '<th class="dow">' + i.dates.daysMin[t++ % 7] + "</th>";
                e += "</tr>", this.picker.find(".datepicker-days thead").append(e)
            },
            fillMonths: function() {
                for (var t = "", e = 0; e < 12;) t += '<span class="month">' + i.dates.monthsShort[e++] + "</span>";
                this.picker.find(".datepicker-months td").append(t)
            },
            fill: function() {
                var t, e, s, n = new Date(this.viewDate),
                    o = n.getFullYear(),
                    r = n.getMonth(),
                    a = this.date.valueOf();
                this.picker.find(".datepicker-days th:eq(1)").text(i.dates.months[r] + " " + o);
                var l = new Date(o, r - 1, 28, 0, 0, 0, 0),
                    h = i.getDaysInMonth(l.getFullYear(), l.getMonth());
                l.setDate(h), l.setDate(h - (l.getDay() - this.weekStart + 7) % 7);
                var c = new Date(l);
                c.setDate(c.getDate() + 42), c = c.valueOf();
                for (var u = []; l.valueOf() < c;) l.getDay() === this.weekStart && u.push("<tr>"), t = this.onRender(l), e = l.getFullYear(), (s = l.getMonth()) < r && e === o || e < o ? t += " old" : (s > r && e === o || e > o) && (t += " new"), l.valueOf() === a && (t += " active"), u.push('<td class="day ' + t + '">' + l.getDate() + "</td>"), l.getDay() === this.weekEnd && u.push("</tr>"), l.setDate(l.getDate() + 1);
                this.picker.find(".datepicker-days tbody").empty().append(u.join(""));
                var d = this.date.getFullYear(),
                    p = this.picker.find(".datepicker-months").find("th:eq(1)").text(o).end().find("span").removeClass("active");
                d === o && p.eq(this.date.getMonth()).addClass("active"), u = "", o = 10 * parseInt(o / 10, 10);
                var f = this.picker.find(".datepicker-years").find("th:eq(1)").text(o + "-" + (o + 9)).end().find("td");
                o -= 1;
                for (var g = -1; g < 11; g++) u += '<span class="year' + (-1 === g || 10 === g ? " old" : "") + (d === o ? " active" : "") + '">' + o + "</span>", o += 1;
                f.html(u)
            },
            click: function(e) {
                e.stopPropagation(), e.preventDefault();
                var s = t(e.target).closest("span, td, th");
                if (1 === s.length) switch (s[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (s[0].className) {
                            case "prev":
                            case "next":
                                this.viewDate["set" + i.modes[this.viewMode].navFnc].call(this.viewDate, this.viewDate["get" + i.modes[this.viewMode].navFnc].call(this.viewDate) + i.modes[this.viewMode].navStep * ("prev" === s[0].className ? -1 : 1)), this.fill(), this.set()
                        }
                        break;
                    case "span":
                        if (s.is(".month")) {
                            var n = s.parent().find("span").index(s);
                            this.viewDate.setMonth(n)
                        } else {
                            var o = parseInt(s.text(), 10) || 0;
                            this.viewDate.setFullYear(o)
                        }
                        0 !== this.viewMode && (this.date = new Date(this.viewDate), this.element.trigger({
                            type: "changeDate",
                            date: this.date,
                            viewMode: i.modes[this.viewMode].clsName
                        })), this.showMode(-1), this.fill(), this.set();
                        break;
                    case "td":
                        if (s.is(".day") && !s.is(".disabled")) {
                            var r = parseInt(s.text(), 10) || 1,
                                n = this.viewDate.getMonth();
                            s.is(".old") ? n -= 1 : s.is(".new") && (n += 1);
                            var o = this.viewDate.getFullYear();
                            this.date = new Date(o, n, r, 0, 0, 0, 0), this.viewDate = new Date(o, n, Math.min(28, r), 0, 0, 0, 0), this.fill(), this.set(), this.element.trigger({
                                type: "changeDate",
                                date: this.date,
                                viewMode: i.modes[this.viewMode].clsName
                            })
                        }
                }
            },
            mousedown: function(t) {
                t.stopPropagation(), t.preventDefault()
            },
            showMode: function(t) {
                t && (this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + t))), this.picker.find(">div").hide().filter(".datepicker-" + i.modes[this.viewMode].clsName).show()
            }
        }, t.fn.datepicker = function(i, s) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("datepicker"),
                    r = "object" == typeof i && i;
                o || n.data("datepicker", o = new e(this, t.extend({}, t.fn.datepicker.defaults, r))), "string" == typeof i && o[i](s)
            })
        }, t.fn.datepicker.defaults = {
            onRender: function(t) {
                return ""
            }
        }, t.fn.datepicker.Constructor = e;
        var i = {
            modes: [{
                clsName: "days",
                navFnc: "Month",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "FullYear",
                navStep: 10
            }],
            dates: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
            isLeapYear: function(t) {
                return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
            },
            getDaysInMonth: function(t, e) {
                return [31, i.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
            },
            parseFormat: function(t) {
                var e = t.match(/[.\/\-\s].*?/),
                    i = t.split(/\W+/);
                if (!e || !i || 0 === i.length) throw Error("Invalid date format.");
                return {
                    separator: e,
                    parts: i
                }
            },
            parseDate: function(t, e) {
                var i, s = t.split(e.separator),
                    t = new Date;
                if (t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), s.length === e.parts.length) {
                    for (var n = t.getFullYear(), o = t.getDate(), r = t.getMonth(), a = 0, l = e.parts.length; a < l; a++) switch (i = parseInt(s[a], 10) || 1, e.parts[a]) {
                        case "dd":
                        case "d":
                            o = i, t.setDate(i);
                            break;
                        case "mm":
                        case "m":
                            r = i - 1, t.setMonth(i - 1);
                            break;
                        case "yy":
                            n = 2e3 + i, t.setFullYear(2e3 + i);
                            break;
                        case "yyyy":
                            n = i, t.setFullYear(i)
                    }
                    t = new Date(n, r, o, 0, 0, 0)
                }
                return t
            },
            formatDate: function(t, e) {
                var i = {
                    d: t.getDate(),
                    m: t.getMonth() + 1,
                    yy: t.getFullYear().toString().substring(2),
                    yyyy: t.getFullYear()
                };
                i.dd = (i.d < 10 ? "0" : "") + i.d, i.mm = (i.m < 10 ? "0" : "") + i.m;
                for (var t = [], s = 0, n = e.parts.length; s < n; s++) t.push(i[e.parts[s]]);
                return t.join(e.separator)
            },
            headTemplate: '<thead><tr><th class="prev"></th><th colspan="5" class="switch"></th><th class="next"></th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
        };
        i.template = '<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">' + i.headTemplate + '<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">' + i.headTemplate + i.contTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + i.headTemplate + i.contTemplate + "</table></div></div>"
    }(window.jQuery), jQuery(document).ready(function() {
        $(".qtyplus").click(function(t) {
            t.preventDefault(), fieldName = $(this).attr("name");
            var e = parseInt($("input[name=" + fieldName + "]").val());
            isNaN(e) ? $("input[name=" + fieldName + "]").val(1) : $("input[name=" + fieldName + "]").val(e + 1)
        }), $(".qtyminus").click(function(t) {
            t.preventDefault(), fieldName = $(this).attr("name");
            var e = parseInt($("input[name=" + fieldName + "]").val());
            !isNaN(e) && e > 0 ? $("input[name=" + fieldName + "]").val(e - 1) : $("input[name=" + fieldName + "]").val(0)
        })
    });
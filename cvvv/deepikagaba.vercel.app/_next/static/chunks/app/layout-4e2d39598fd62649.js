(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    5916: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 5967)),
        Promise.resolve().then(r.t.bind(r, 4310, 23)),
        Promise.resolve().then(r.t.bind(r, 347, 23)),
        Promise.resolve().then(r.bind(r, 4458)),
        Promise.resolve().then(r.bind(r, 6825));
    },
    4458: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => p });
      var a = r(5155),
        n = r(8173),
        o = r.n(n),
        s = r(319),
        l = r(4057);
      let i = (0, l.A)("X", [
          ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
          ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
        ]),
        d = (0, l.A)("Menu", [
          ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
          ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
          ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
        ]);
      var c = r(6535),
        m = r(8482),
        u = r(7113),
        h = r(2115);
      function f() {
        let [e, t] = (0, h.useState)(!1),
          { theme: r, setTheme: n } = (0, u.D)();
        return ((0, h.useEffect)(() => t(!0), []), e)
          ? (0, a.jsx)("button", {
              onClick: () => {
                let e = "dark" === r ? "light" : "dark";
                "dark" === e
                  ? document.documentElement.classList.add("dark")
                  : document.documentElement.classList.remove("dark"),
                  n(e);
              },
              className:
                "p-2 rounded-full hover:bg-foreground/10 transition-colors",
              "aria-label": "Toggle theme",
              children:
                "dark" === r
                  ? (0, a.jsx)(c.A, { className: "w-5 h-5" })
                  : (0, a.jsx)(m.A, { className: "w-5 h-5" }),
            })
          : null;
      }
      let p = () => {
        let [e, t] = (0, h.useState)(!1),
          r = [
            { id: "about", label: "About", delay: "0.1s" },
            { id: "experience", label: "Experience", delay: "0.2s" },
            { id: "skills", label: "Skills", delay: "0.3s" },
            { id: "contact", label: "Contact", delay: "0.4s" },
          ],
          n = (e) => {
            let t = document.getElementById(e);
            if (t) {
              let e = t.getBoundingClientRect().top + window.pageYOffset - 64;
              window.scrollTo({ top: e, behavior: "smooth" });
            }
            l();
          },
          l = () => {
            t(!1);
          };
        return (0, a.jsx)("nav", {
          className:
            "fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-foreground/10",
          children: (0, a.jsxs)("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl",
            children: [
              (0, a.jsxs)("div", {
                className: "flex justify-between h-16 items-center",
                children: [
                  (0, a.jsxs)(o(), {
                    href: "/",
                    className:
                      "font-bold text-xl flex items-center gap-2 hover-lift",
                    children: [
                      (0, a.jsx)("span", {
                        className:
                          "w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center animate-bounce-in",
                        children: "GS",
                      }),
                      (0, a.jsx)("span", {
                        className: "animate-fade-in",
                        style: { animationDelay: "0.2s" },
                        children: "Deepika Gaba",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "hidden sm:flex items-center space-x-8",
                    children: [
                      r.map((e) =>
                        (0, a.jsx)(
                          "button",
                          {
                            onClick: () => n(e.id),
                            className:
                              "hover:text-foreground/80 hover-lift animate-fade-in",
                            style: { animationDelay: e.delay },
                            children: e.label,
                          },
                          e.id
                        )
                      ),
                      (0, a.jsxs)("a", {
                        href: "https://drive.google.com/uc?export=download&id=1OYBD8r-lN81qLX9KZLXY9ziImia0EoCH",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover-lift animate-fade-in",
                        style: { animationDelay: "0.6s" },
                        children: [
                          (0, a.jsx)(s.A, { className: "w-4 h-4" }),
                          (0, a.jsx)("span", { children: "CV" }),
                        ],
                      }),
                      (0, a.jsx)(f, {}),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-4 sm:hidden",
                    children: [
                      (0, a.jsx)(f, {}),
                      (0, a.jsx)("button", {
                        onClick: () => {
                          t(!e);
                        },
                        className: "p-2 rounded-lg hover:bg-foreground/10",
                        "aria-label": "Toggle menu",
                        children: e
                          ? (0, a.jsx)(i, { className: "w-6 h-6" })
                          : (0, a.jsx)(d, { className: "w-6 h-6" }),
                      }),
                    ],
                  }),
                ],
              }),
              e &&
                (0, a.jsx)("div", {
                  className: "sm:hidden",
                  children: (0, a.jsxs)("div", {
                    className:
                      "flex flex-col space-y-4 px-4 py-6 bg-background/80 backdrop-blur-sm border-t border-foreground/10",
                    children: [
                      r.map((e) =>
                        (0, a.jsx)(
                          "button",
                          {
                            onClick: () => n(e.id),
                            className:
                              "hover:text-foreground/80 animate-slide-in-right text-left",
                            style: { animationDelay: e.delay },
                            children: e.label,
                          },
                          e.id
                        )
                      ),
                      (0, a.jsxs)("a", {
                        href: "https://drive.google.com/uc?export=download&id=1OYBD8r-lN81qLX9KZLXY9ziImia0EoCH",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 w-fit animate-slide-in-right",
                        style: { animationDelay: "0.6s" },
                        children: [
                          (0, a.jsx)(s.A, { className: "w-4 h-4" }),
                          (0, a.jsx)("span", { children: "Download CV" }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          }),
        });
      };
    },
    6825: (e, t, r) => {
      "use strict";
      r.d(t, { ThemeProvider: () => o });
      var a = r(5155),
        n = r(7113);
      function o(e) {
        let { children: t, ...r } = e;
        return (0, a.jsx)(n.N, { ...r, children: t });
      }
    },
    347: () => {},
    4310: (e) => {
      e.exports = {
        style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: "normal" },
        className: "__className_4d318d",
      };
    },
    5967: (e, t, r) => {
      "use strict";
      r.d(t, { Analytics: () => i });
      var a = r(2115),
        n = () => {
          window.va ||
            (window.va = function () {
              for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
              (window.vaq = window.vaq || []).push(t);
            });
        };
      function o() {
        return "undefined" != typeof window;
      }
      function s() {
        return "production";
      }
      function l() {
        return "development" === ((o() ? window.vam : s()) || "production");
      }
      function i(e) {
        return (
          (0, a.useEffect)(() => {
            var t;
            e.beforeSend &&
              (null == (t = window.va) ||
                t.call(window, "beforeSend", e.beforeSend));
          }, [e.beforeSend]),
          (0, a.useEffect)(() => {
            !(function () {
              var e;
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { debug: !0 };
              if (!o()) return;
              (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "auto";
                if ("auto" === e) {
                  window.vam = s();
                  return;
                }
                window.vam = e;
              })(t.mode),
                n(),
                t.beforeSend &&
                  (null == (e = window.va) ||
                    e.call(window, "beforeSend", t.beforeSend));
              let r =
                t.scriptSrc ||
                (l()
                  ? "https://va.vercel-scripts.com/v1/script.debug.js"
                  : "/_vercel/insights/script.js");
              if (document.head.querySelector('script[src*="'.concat(r, '"]')))
                return;
              let a = document.createElement("script");
              (a.src = r),
                (a.defer = !0),
                (a.dataset.sdkn =
                  "@vercel/analytics" +
                  (t.framework ? "/".concat(t.framework) : "")),
                (a.dataset.sdkv = "1.4.1"),
                t.disableAutoTrack && (a.dataset.disableAutoTrack = "1"),
                t.endpoint && (a.dataset.endpoint = t.endpoint),
                t.dsn && (a.dataset.dsn = t.dsn),
                (a.onerror = () => {
                  let e = l()
                    ? "Please check if any ad blockers are enabled and try again."
                    : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                  console.log(
                    "[Vercel Web Analytics] Failed to load script from "
                      .concat(r, ". ")
                      .concat(e)
                  );
                }),
                l() && !1 === t.debug && (a.dataset.debug = "false"),
                document.head.appendChild(a);
            })({
              framework: e.framework || "react",
              ...(void 0 !== e.route && { disableAutoTrack: !0 }),
              ...e,
            });
          }, []),
          (0, a.useEffect)(() => {
            e.route &&
              e.path &&
              (function (e) {
                var t;
                let { route: r, path: a } = e;
                null == (t = window.va) ||
                  t.call(window, "pageview", { route: r, path: a });
              })({ route: e.route, path: e.path });
          }, [e.route, e.path]),
          null
        );
      }
    },
    4057: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => i });
      var a = r(2115);
      let n = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        o = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return t
            .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
            .join(" ")
            .trim();
        };
      var s = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let l = (0, a.forwardRef)((e, t) => {
          let {
            color: r = "currentColor",
            size: n = 24,
            strokeWidth: l = 2,
            absoluteStrokeWidth: i,
            className: d = "",
            children: c,
            iconNode: m,
            ...u
          } = e;
          return (0, a.createElement)(
            "svg",
            {
              ref: t,
              ...s,
              width: n,
              height: n,
              stroke: r,
              strokeWidth: i ? (24 * Number(l)) / Number(n) : l,
              className: o("lucide", d),
              ...u,
            },
            [
              ...m.map((e) => {
                let [t, r] = e;
                return (0, a.createElement)(t, r);
              }),
              ...(Array.isArray(c) ? c : [c]),
            ]
          );
        }),
        i = (e, t) => {
          let r = (0, a.forwardRef)((r, s) => {
            let { className: i, ...d } = r;
            return (0, a.createElement)(l, {
              ref: s,
              iconNode: t,
              className: o("lucide-".concat(n(e)), i),
              ...d,
            });
          });
          return (r.displayName = "".concat(e)), r;
        };
    },
    319: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      let a = (0, r(4057).A)("Download", [
        [
          "path",
          { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" },
        ],
        ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
        ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
      ]);
    },
    8482: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      let a = (0, r(4057).A)("Moon", [
        ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
      ]);
    },
    6535: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      let a = (0, r(4057).A)("Sun", [
        ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
        ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
        ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
      ]);
    },
    7113: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => c, N: () => m });
      var a = r(2115),
        n = (e, t, r, a, n, o, s, l) => {
          let i = document.documentElement,
            d = ["light", "dark"];
          function c(t) {
            (Array.isArray(e) ? e : [e]).forEach((e) => {
              let r = "class" === e,
                a = r && o ? n.map((e) => o[e] || e) : n;
              r
                ? (i.classList.remove(...a), i.classList.add(t))
                : i.setAttribute(e, t);
            }),
              l && d.includes(t) && (i.style.colorScheme = t);
          }
          if (a) c(a);
          else
            try {
              let e = localStorage.getItem(t) || r,
                a =
                  s && "system" === e
                    ? window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? "dark"
                      : "light"
                    : e;
              c(a);
            } catch (e) {}
        },
        o = ["light", "dark"],
        s = "(prefers-color-scheme: dark)",
        l = "undefined" == typeof window,
        i = a.createContext(void 0),
        d = { setTheme: (e) => {}, themes: [] },
        c = () => {
          var e;
          return null != (e = a.useContext(i)) ? e : d;
        },
        m = (e) =>
          a.useContext(i)
            ? a.createElement(a.Fragment, null, e.children)
            : a.createElement(h, { ...e }),
        u = ["light", "dark"],
        h = (e) => {
          let {
              forcedTheme: t,
              disableTransitionOnChange: r = !1,
              enableSystem: n = !0,
              enableColorScheme: l = !0,
              storageKey: d = "theme",
              themes: c = u,
              defaultTheme: m = n ? "system" : "light",
              attribute: h = "data-theme",
              value: g,
              children: v,
              nonce: w,
              scriptProps: x,
            } = e,
            [k, j] = a.useState(() => p(d, m)),
            [A, N] = a.useState(() => p(d)),
            S = g ? Object.values(g) : c,
            E = a.useCallback(
              (e) => {
                let t = e;
                if (!t) return;
                "system" === e && n && (t = b());
                let a = g ? g[t] : t,
                  s = r ? y(w) : null,
                  i = document.documentElement,
                  d = (e) => {
                    "class" === e
                      ? (i.classList.remove(...S), a && i.classList.add(a))
                      : e.startsWith("data-") &&
                        (a ? i.setAttribute(e, a) : i.removeAttribute(e));
                  };
                if ((Array.isArray(h) ? h.forEach(d) : d(h), l)) {
                  let e = o.includes(m) ? m : null,
                    r = o.includes(t) ? t : e;
                  i.style.colorScheme = r;
                }
                null == s || s();
              },
              [w]
            ),
            C = a.useCallback(
              (e) => {
                let t = "function" == typeof e ? e(k) : e;
                j(t);
                try {
                  localStorage.setItem(d, t);
                } catch (e) {}
              },
              [k]
            ),
            T = a.useCallback(
              (e) => {
                N(b(e)), "system" === k && n && !t && E("system");
              },
              [k, t]
            );
          a.useEffect(() => {
            let e = window.matchMedia(s);
            return e.addListener(T), T(e), () => e.removeListener(T);
          }, [T]),
            a.useEffect(() => {
              let e = (e) => {
                e.key === d && (e.newValue ? j(e.newValue) : C(m));
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [C]),
            a.useEffect(() => {
              E(null != t ? t : k);
            }, [t, k]);
          let L = a.useMemo(
            () => ({
              theme: k,
              setTheme: C,
              forcedTheme: t,
              resolvedTheme: "system" === k ? A : k,
              themes: n ? [...c, "system"] : c,
              systemTheme: n ? A : void 0,
            }),
            [k, C, t, A, n, c]
          );
          return a.createElement(
            i.Provider,
            { value: L },
            a.createElement(f, {
              forcedTheme: t,
              storageKey: d,
              attribute: h,
              enableSystem: n,
              enableColorScheme: l,
              defaultTheme: m,
              value: g,
              themes: c,
              nonce: w,
              scriptProps: x,
            }),
            v
          );
        },
        f = a.memo((e) => {
          let {
              forcedTheme: t,
              storageKey: r,
              attribute: o,
              enableSystem: s,
              enableColorScheme: l,
              defaultTheme: i,
              value: d,
              themes: c,
              nonce: m,
              scriptProps: u,
            } = e,
            h = JSON.stringify([o, r, i, t, c, d, s, l]).slice(1, -1);
          return a.createElement("script", {
            ...u,
            suppressHydrationWarning: !0,
            nonce: "undefined" == typeof window ? m : "",
            dangerouslySetInnerHTML: {
              __html: "(".concat(n.toString(), ")(").concat(h, ")"),
            },
          });
        }),
        p = (e, t) => {
          let r;
          if (!l) {
            try {
              r = localStorage.getItem(e) || void 0;
            } catch (e) {}
            return r || t;
          }
        },
        y = (e) => {
          let t = document.createElement("style");
          return (
            e && t.setAttribute("nonce", e),
            t.appendChild(
              document.createTextNode(
                "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(t),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(t);
                }, 1);
            }
          );
        },
        b = (e) => (
          e || (e = window.matchMedia(s)), e.matches ? "dark" : "light"
        );
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [834, 173, 441, 517, 358], () => t(5916)), (_N_E = e.O());
  },
]);

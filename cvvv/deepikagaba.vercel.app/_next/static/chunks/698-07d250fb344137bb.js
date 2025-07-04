"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [698],
  {
    5565: (t, e, i) => {
      i.d(e, { default: () => r.a });
      var n = i(4146),
        r = i.n(n);
    },
    7970: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let n = i(306),
        r = i(9955),
        s = i(5155),
        o = r._(i(2115)),
        a = n._(i(7650)),
        l = n._(i(6107)),
        u = i(666),
        h = i(1159),
        d = i(3621);
      i(2363);
      let c = i(3576),
        p = n._(i(5514)),
        m = i(5353),
        f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        };
      function v(t, e, i, n, r, s, o) {
        let a = null == t ? void 0 : t.src;
        t &&
          t["data-loaded-src"] !== a &&
          ((t["data-loaded-src"] = a),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (("empty" !== e && r(!0), null == i ? void 0 : i.current)) {
                  let e = new Event("load");
                  Object.defineProperty(e, "target", {
                    writable: !1,
                    value: t,
                  });
                  let n = !1,
                    r = !1;
                  i.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => r,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), e.preventDefault();
                    },
                    stopPropagation: () => {
                      (r = !0), e.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(t);
              }
            }));
      }
      function g(t) {
        return o.use ? { fetchPriority: t } : { fetchpriority: t };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let y = (0, o.forwardRef)((t, e) => {
        let {
            src: i,
            srcSet: n,
            sizes: r,
            height: a,
            width: l,
            decoding: u,
            className: h,
            style: d,
            fetchPriority: c,
            placeholder: p,
            loading: f,
            unoptimized: y,
            fill: x,
            onLoadRef: w,
            onLoadingCompleteRef: b,
            setBlurComplete: P,
            setShowAltText: S,
            sizesInput: T,
            onLoad: A,
            onError: M,
            ...E
          } = t,
          C = (0, o.useCallback)(
            (t) => {
              t && (M && (t.src = t.src), t.complete && v(t, p, w, b, P, y, T));
            },
            [i, p, w, b, P, M, y, T]
          ),
          k = (0, m.useMergedRef)(e, C);
        return (0, s.jsx)("img", {
          ...E,
          ...g(c),
          loading: f,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": x ? "fill" : "1",
          className: h,
          style: d,
          sizes: r,
          srcSet: n,
          src: i,
          ref: k,
          onLoad: (t) => {
            v(t.currentTarget, p, w, b, P, y, T);
          },
          onError: (t) => {
            S(!0), "empty" !== p && P(!0), M && M(t);
          },
        });
      });
      function x(t) {
        let { isAppRouter: e, imgAttributes: i } = t,
          n = {
            as: "image",
            imageSrcSet: i.srcSet,
            imageSizes: i.sizes,
            crossOrigin: i.crossOrigin,
            referrerPolicy: i.referrerPolicy,
            ...g(i.fetchPriority),
          };
        return e && a.default.preload
          ? (a.default.preload(i.src, n), null)
          : (0, s.jsx)(l.default, {
              children: (0, s.jsx)(
                "link",
                { rel: "preload", href: i.srcSet ? void 0 : i.src, ...n },
                "__nimg-" + i.src + i.srcSet + i.sizes
              ),
            });
      }
      let w = (0, o.forwardRef)((t, e) => {
        let i = (0, o.useContext)(c.RouterContext),
          n = (0, o.useContext)(d.ImageConfigContext),
          r = (0, o.useMemo)(() => {
            var t;
            let e = f || n || h.imageConfigDefault,
              i = [...e.deviceSizes, ...e.imageSizes].sort((t, e) => t - e),
              r = e.deviceSizes.sort((t, e) => t - e),
              s = null == (t = e.qualities) ? void 0 : t.sort((t, e) => t - e);
            return { ...e, allSizes: i, deviceSizes: r, qualities: s };
          }, [n]),
          { onLoad: a, onLoadingComplete: l } = t,
          m = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          m.current = a;
        }, [a]);
        let v = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          v.current = l;
        }, [l]);
        let [g, w] = (0, o.useState)(!1),
          [b, P] = (0, o.useState)(!1),
          { props: S, meta: T } = (0, u.getImgProps)(t, {
            defaultLoader: p.default,
            imgConf: r,
            blurComplete: g,
            showAltText: b,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(y, {
              ...S,
              unoptimized: T.unoptimized,
              placeholder: T.placeholder,
              fill: T.fill,
              onLoadRef: m,
              onLoadingCompleteRef: v,
              setBlurComplete: w,
              setShowAltText: P,
              sizesInput: t.sizes,
              ref: e,
            }),
            T.priority
              ? (0, s.jsx)(x, { isAppRouter: !i, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5353: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let n = i(2115);
      function r(t, e) {
        let i = (0, n.useRef)(() => {}),
          r = (0, n.useRef)(() => {});
        return (0, n.useMemo)(
          () =>
            t && e
              ? (n) => {
                  null === n
                    ? (i.current(), r.current())
                    : ((i.current = s(t, n)), (r.current = s(e, n)));
                }
              : t || e,
          [t, e]
        );
      }
      function s(t, e) {
        if ("function" != typeof t)
          return (
            (t.current = e),
            () => {
              t.current = null;
            }
          );
        {
          let i = t(e);
          return "function" == typeof i ? i : () => t(null);
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    3003: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = i(306)._(i(2115)).default.createContext({});
    },
    675: (t, e) => {
      function i(t) {
        let {
          ampFirst: e = !1,
          hybrid: i = !1,
          hasQuery: n = !1,
        } = void 0 === t ? {} : t;
        return e || (i && n);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    666: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        i(2363);
      let n = i(5859),
        r = i(1159);
      function s(t) {
        return void 0 !== t.default;
      }
      function o(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function a(t, e) {
        var i, a;
        let l,
          u,
          h,
          {
            src: d,
            sizes: c,
            unoptimized: p = !1,
            priority: m = !1,
            loading: f,
            className: v,
            quality: g,
            width: y,
            height: x,
            fill: w = !1,
            style: b,
            overrideSrc: P,
            onLoad: S,
            onLoadingComplete: T,
            placeholder: A = "empty",
            blurDataURL: M,
            fetchPriority: E,
            decoding: C = "async",
            layout: k,
            objectFit: V,
            objectPosition: D,
            lazyBoundary: j,
            lazyRoot: R,
            ...L
          } = t,
          { imgConf: F, showAltText: O, blurComplete: B, defaultLoader: I } = e,
          _ = F || r.imageConfigDefault;
        if ("allSizes" in _) l = _;
        else {
          let t = [..._.deviceSizes, ..._.imageSizes].sort((t, e) => t - e),
            e = _.deviceSizes.sort((t, e) => t - e),
            n = null == (i = _.qualities) ? void 0 : i.sort((t, e) => t - e);
          l = { ..._, allSizes: t, deviceSizes: e, qualities: n };
        }
        if (void 0 === I)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let U = L.loader || I;
        delete L.loader, delete L.srcSet;
        let N = "__next_img_default" in U;
        if (N) {
          if ("custom" === l.loader)
            throw Error(
              'Image with src "' +
                d +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let t = U;
          U = (e) => {
            let { config: i, ...n } = e;
            return t(n);
          };
        }
        if (k) {
          "fill" === k && (w = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[k];
          t && (b = { ...b, ...t });
          let e = { responsive: "100vw", fill: "100vw" }[k];
          e && !c && (c = e);
        }
        let z = "",
          $ = o(y),
          W = o(x);
        if ((a = d) && "object" == typeof a && (s(a) || void 0 !== a.src)) {
          let t = s(d) ? d.default : d;
          if (!t.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(t)
            );
          if (!t.height || !t.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(t)
            );
          if (
            ((u = t.blurWidth),
            (h = t.blurHeight),
            (M = M || t.blurDataURL),
            (z = t.src),
            !w)
          ) {
            if ($ || W) {
              if ($ && !W) {
                let e = $ / t.width;
                W = Math.round(t.height * e);
              } else if (!$ && W) {
                let e = W / t.height;
                $ = Math.round(t.width * e);
              }
            } else ($ = t.width), (W = t.height);
          }
        }
        let H = !m && ("lazy" === f || void 0 === f);
        (!(d = "string" == typeof d ? d : z) ||
          d.startsWith("data:") ||
          d.startsWith("blob:")) &&
          ((p = !0), (H = !1)),
          l.unoptimized && (p = !0),
          N &&
            !l.dangerouslyAllowSVG &&
            d.split("?", 1)[0].endsWith(".svg") &&
            (p = !0);
        let q = o(g),
          Y = Object.assign(
            w
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: V,
                  objectPosition: D,
                }
              : {},
            O ? {} : { color: "transparent" },
            b
          ),
          K =
            B || "empty" === A
              ? null
              : "blur" === A
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: $,
                  heightInt: W,
                  blurWidth: u,
                  blurHeight: h,
                  blurDataURL: M || "",
                  objectFit: Y.objectFit,
                }) +
                '")'
              : 'url("' + A + '")',
          X = K
            ? {
                backgroundSize: Y.objectFit || "cover",
                backgroundPosition: Y.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: K,
              }
            : {},
          G = (function (t) {
            let {
              config: e,
              src: i,
              unoptimized: n,
              width: r,
              quality: s,
              sizes: o,
              loader: a,
            } = t;
            if (n) return { src: i, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (t, e, i) {
                let { deviceSizes: n, allSizes: r } = t;
                if (i) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let n; (n = t.exec(i)); n) e.push(parseInt(n[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: r.filter((e) => e >= n[0] * t),
                      kind: "w",
                    };
                  }
                  return { widths: r, kind: "w" };
                }
                return "number" != typeof e
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [e, 2 * e].map(
                            (t) => r.find((e) => e >= t) || r[r.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(e, r, o),
              h = l.length - 1;
            return {
              sizes: o || "w" !== u ? o : "100vw",
              srcSet: l
                .map(
                  (t, n) =>
                    a({ config: e, src: i, quality: s, width: t }) +
                    " " +
                    ("w" === u ? t : n + 1) +
                    u
                )
                .join(", "),
              src: a({ config: e, src: i, quality: s, width: l[h] }),
            };
          })({
            config: l,
            src: d,
            unoptimized: p,
            width: $,
            quality: q,
            sizes: c,
            loader: U,
          });
        return {
          props: {
            ...L,
            loading: H ? "lazy" : f,
            fetchPriority: E,
            width: $,
            height: W,
            decoding: C,
            className: v,
            style: { ...Y, ...X },
            sizes: G.sizes,
            srcSet: G.srcSet,
            src: P || G.src,
          },
          meta: { unoptimized: p, priority: m, placeholder: A, fill: w },
        };
      }
    },
    6107: (t, e, i) => {
      var n = i(2818);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return v;
          },
          defaultHead: function () {
            return c;
          },
        });
      let r = i(306),
        s = i(9955),
        o = i(5155),
        a = s._(i(2115)),
        l = r._(i(1172)),
        u = i(3003),
        h = i(1147),
        d = i(675);
      function c(t) {
        void 0 === t && (t = !1);
        let e = [(0, o.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          t ||
            e.push(
              (0, o.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          e
        );
      }
      function p(t, e) {
        return "string" == typeof e || "number" == typeof e
          ? t
          : e.type === a.default.Fragment
          ? t.concat(
              a.default.Children.toArray(e.props.children).reduce(
                (t, e) =>
                  "string" == typeof e || "number" == typeof e
                    ? t
                    : t.concat(e),
                []
              )
            )
          : t.concat(e);
      }
      i(2363);
      let m = ["name", "httpEquiv", "charSet", "itemProp"];
      function f(t, e) {
        let { inAmpMode: i } = e;
        return t
          .reduce(p, [])
          .reverse()
          .concat(c(i).reverse())
          .filter(
            (function () {
              let t = new Set(),
                e = new Set(),
                i = new Set(),
                n = {};
              return (r) => {
                let s = !0,
                  o = !1;
                if (
                  r.key &&
                  "number" != typeof r.key &&
                  r.key.indexOf("$") > 0
                ) {
                  o = !0;
                  let e = r.key.slice(r.key.indexOf("$") + 1);
                  t.has(e) ? (s = !1) : t.add(e);
                }
                switch (r.type) {
                  case "title":
                  case "base":
                    e.has(r.type) ? (s = !1) : e.add(r.type);
                    break;
                  case "meta":
                    for (let t = 0, e = m.length; t < e; t++) {
                      let e = m[t];
                      if (r.props.hasOwnProperty(e)) {
                        if ("charSet" === e) i.has(e) ? (s = !1) : i.add(e);
                        else {
                          let t = r.props[e],
                            i = n[e] || new Set();
                          ("name" !== e || !o) && i.has(t)
                            ? (s = !1)
                            : (i.add(t), (n[e] = i));
                        }
                      }
                    }
                }
                return s;
              };
            })()
          )
          .reverse()
          .map((t, e) => {
            let r = t.key || e;
            if (
              n.env.__NEXT_OPTIMIZE_FONTS &&
              !i &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((e) => t.props.href.startsWith(e))
            ) {
              let e = { ...(t.props || {}) };
              return (
                (e["data-href"] = e.href),
                (e.href = void 0),
                (e["data-optimized-fonts"] = !0),
                a.default.cloneElement(t, e)
              );
            }
            return a.default.cloneElement(t, { key: r });
          });
      }
      let v = function (t) {
        let { children: e } = t,
          i = (0, a.useContext)(u.AmpStateContext),
          n = (0, a.useContext)(h.HeadManagerContext);
        return (0, o.jsx)(l.default, {
          reduceComponentsToState: f,
          headManager: n,
          inAmpMode: (0, d.isInAmpMode)(i),
          children: e,
        });
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5859: (t, e) => {
      function i(t) {
        let {
            widthInt: e,
            heightInt: i,
            blurWidth: n,
            blurHeight: r,
            blurDataURL: s,
            objectFit: o,
          } = t,
          a = n ? 40 * n : e,
          l = r ? 40 * r : i,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === o
            ? "xMidYMid"
            : "cover" === o
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          s +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    3621: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(306)._(i(2115)),
        r = i(1159),
        s = n.default.createContext(r.imageConfigDefault);
    },
    1159: (t, e) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          VALID_LOADERS: function () {
            return i;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          qualities: void 0,
          unoptimized: !1,
        };
    },
    4146: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = i(306),
        r = i(666),
        s = i(7970),
        o = n._(i(5514));
      function a(t) {
        let { props: e } = (0, r.getImgProps)(t, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0,
          },
        });
        for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
        return { props: e };
      }
      let l = s.Image;
    },
    5514: (t, e) => {
      function i(t) {
        var e;
        let { config: i, src: n, width: r, quality: s } = t,
          o =
            s ||
            (null == (e = i.qualities)
              ? void 0
              : e.reduce((t, e) =>
                  Math.abs(e - 75) < Math.abs(t - 75) ? e : t
                )) ||
            75;
        return (
          i.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          r +
          "&q=" +
          o +
          (n.startsWith("/_next/static/media/"), "")
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (i.__next_img_default = !0);
      let n = i;
    },
    3576: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = i(306)._(i(2115)).default.createContext(null);
    },
    1172: (t, e, i) => {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = i(2115),
        r = "undefined" == typeof window,
        s = r ? () => {} : n.useLayoutEffect,
        o = r ? () => {} : n.useEffect;
      function a(t) {
        let { headManager: e, reduceComponentsToState: i } = t;
        function a() {
          if (e && e.mountedInstances) {
            let r = n.Children.toArray(
              Array.from(e.mountedInstances).filter(Boolean)
            );
            e.updateHead(i(r, t));
          }
        }
        if (r) {
          var l;
          null == e || null == (l = e.mountedInstances) || l.add(t.children),
            a();
        }
        return (
          s(() => {
            var i;
            return (
              null == e ||
                null == (i = e.mountedInstances) ||
                i.add(t.children),
              () => {
                var i;
                null == e ||
                  null == (i = e.mountedInstances) ||
                  i.delete(t.children);
              }
            );
          }),
          s(
            () => (
              e && (e._pendingUpdate = a),
              () => {
                e && (e._pendingUpdate = a);
              }
            )
          ),
          o(
            () => (
              e &&
                e._pendingUpdate &&
                (e._pendingUpdate(), (e._pendingUpdate = null)),
              () => {
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    8209: (t, e, i) => {
      let n;
      function r(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      function s(t, e, i, n) {
        if (
          "function" == typeof e ||
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [r, s] = (function (t) {
            let e = [{}, {}];
            return (
              null == t ||
                t.values.forEach((t, i) => {
                  (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
                }),
              e
            );
          })(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        return e;
      }
      function o(t, e, i) {
        let n = t.getProps();
        return s(n, e, void 0 !== i ? i : n.custom, t);
      }
      function a(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      i.d(e, { P: () => sm });
      let l = a(() => void 0 !== window.ScrollTimeline);
      class u {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        get finished() {
          return Promise.all(
            this.animations.map((t) => ("finished" in t ? t.finished : t))
          );
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t, e) {
          let i = this.animations.map((i) =>
            l() && i.attachTimeline
              ? i.attachTimeline(t)
              : "function" == typeof e
              ? e(i)
              : void 0
          );
          return () => {
            i.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      class h extends u {
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
      }
      function d(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      function c(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      function p(t) {
        return "function" == typeof t;
      }
      function m(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let f = (t) => Array.isArray(t) && "number" == typeof t[0],
        v = { linearEasing: void 0 },
        g = (function (t, e) {
          let i = a(t);
          return () => {
            var t;
            return null !== (t = v[e]) && void 0 !== t ? t : i();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        y = (t, e, i) => {
          let n = e - t;
          return 0 === n ? 1 : (i - t) / n;
        },
        x = (t, e, i = 10) => {
          let n = "",
            r = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < r; e++) n += t(y(0, r - 1, e)) + ", ";
          return `linear(${n.substring(0, n.length - 2)})`;
        },
        w = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        b = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: w([0, 0.65, 0.55, 1]),
          circOut: w([0.55, 0, 1, 0.45]),
          backIn: w([0.31, 0.01, 0.66, -0.59]),
          backOut: w([0.33, 1.53, 0.69, 0.99]),
        },
        P = { x: !1, y: !1 };
      function S(t, e) {
        let i = (function (t, e, i) {
            if (t instanceof Element) return [t];
            if ("string" == typeof t) {
              let e = document.querySelectorAll(t);
              return e ? Array.from(e) : [];
            }
            return Array.from(t);
          })(t),
          n = new AbortController();
        return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function T(t) {
        return !("touch" === t.pointerType || P.x || P.y);
      }
      let A = (t, e) => !!e && (t === e || A(t, e.parentElement)),
        M = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary,
        E = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        C = new WeakSet();
      function k(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function V(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let D = (t, e) => {
        let i = t.currentTarget;
        if (!i) return;
        let n = k(() => {
          if (C.has(i)) return;
          V(i, "down");
          let t = k(() => {
            V(i, "up");
          });
          i.addEventListener("keyup", t, e),
            i.addEventListener("blur", () => V(i, "cancel"), e);
        });
        i.addEventListener("keydown", n, e),
          i.addEventListener(
            "blur",
            () => i.removeEventListener("keydown", n),
            e
          );
      };
      function j(t) {
        return M(t) && !(P.x || P.y);
      }
      let R = (t) => 1e3 * t,
        L = (t) => t / 1e3,
        F = (t) => t,
        O = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        B = new Set(O),
        I = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...O,
        ]),
        _ = (t) => Array.isArray(t),
        U = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        N = (t) => (_(t) ? t[t.length - 1] || 0 : t),
        z = { skipAnimations: !1, useManualTiming: !1 },
        $ = [
          "read",
          "resolveKeyframes",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        W = { value: null, addProjectionMetrics: null };
      function H(t, e) {
        let i = !1,
          n = !0,
          r = { delta: 0, timestamp: 0, isProcessing: !1 },
          s = () => (i = !0),
          o = $.reduce(
            (t, i) => (
              (t[i] = (function (t, e) {
                let i = new Set(),
                  n = new Set(),
                  r = !1,
                  s = !1,
                  o = new WeakSet(),
                  a = { delta: 0, timestamp: 0, isProcessing: !1 },
                  l = 0;
                function u(e) {
                  o.has(e) && (h.schedule(e), t()), l++, e(a);
                }
                let h = {
                  schedule: (t, e = !1, s = !1) => {
                    let a = s && r ? i : n;
                    return e && o.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    n.delete(t), o.delete(t);
                  },
                  process: (t) => {
                    if (((a = t), r)) {
                      s = !0;
                      return;
                    }
                    (r = !0),
                      ([i, n] = [n, i]),
                      i.forEach(u),
                      e && W.value && W.value.frameloop[e].push(l),
                      (l = 0),
                      i.clear(),
                      (r = !1),
                      s && ((s = !1), h.process(t));
                  },
                };
                return h;
              })(s, e ? i : void 0)),
              t
            ),
            {}
          ),
          {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: h,
            render: d,
            postRender: c,
          } = o,
          p = () => {
            let s = z.useManualTiming ? r.timestamp : performance.now();
            (i = !1),
              z.useManualTiming ||
                (r.delta = n
                  ? 1e3 / 60
                  : Math.max(Math.min(s - r.timestamp, 40), 1)),
              (r.timestamp = s),
              (r.isProcessing = !0),
              a.process(r),
              l.process(r),
              u.process(r),
              h.process(r),
              d.process(r),
              c.process(r),
              (r.isProcessing = !1),
              i && e && ((n = !1), t(p));
          },
          m = () => {
            (i = !0), (n = !0), r.isProcessing || t(p);
          };
        return {
          schedule: $.reduce((t, e) => {
            let n = o[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || m(), n.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < $.length; e++) o[$[e]].cancel(t);
          },
          state: r,
          steps: o,
        };
      }
      let {
        schedule: q,
        cancel: Y,
        state: K,
        steps: X,
      } = H(
        "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : F,
        !0
      );
      function G() {
        n = void 0;
      }
      let Z = {
        now: () => (
          void 0 === n &&
            Z.set(
              K.isProcessing || z.useManualTiming
                ? K.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(G);
        },
      };
      function J(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function Q(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class tt {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return J(this.subscriptions, t), () => Q(this.subscriptions, t);
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let te = (t) => !isNaN(parseFloat(t)),
        ti = { current: void 0 };
      class tn {
        constructor(t, e = {}) {
          (this.version = "12.4.1"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = Z.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = Z.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = te(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new tt());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  q.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return ti.current && ti.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = Z.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function tr(t, e) {
        return new tn(t, e);
      }
      let ts = (t) => !!(t && t.getVelocity);
      function to(t, e) {
        let i = t.getValue("willChange");
        if (ts(i) && i.add) return i.add(e);
      }
      let ta = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        tl = "data-" + ta("framerAppearId"),
        tu = { current: !1 },
        th = (t, e, i) =>
          (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function td(t, e, i, n) {
        if (t === e && i === n) return F;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do
              (s = th((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : th(r(t), e, n));
      }
      let tc = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        tp = (t) => (e) => 1 - t(1 - e),
        tm = td(0.33, 1.53, 0.69, 0.99),
        tf = tp(tm),
        tv = tc(tf),
        tg = (t) =>
          (t *= 2) < 1 ? 0.5 * tf(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        ty = (t) => 1 - Math.sin(Math.acos(t)),
        tx = tp(ty),
        tw = tc(ty),
        tb = (t) => /^0[^.\s]+$/u.test(t),
        tP = (t, e, i) => (i > e ? e : i < t ? t : i),
        tS = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        tT = { ...tS, transform: (t) => tP(0, 1, t) },
        tA = { ...tS, default: 1 },
        tM = (t) => Math.round(1e5 * t) / 1e5,
        tE = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tC =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tk = (t, e) => (i) =>
          !!(
            ("string" == typeof i && tC.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        tV = (t, e, i) => (n) => {
          if ("string" != typeof n) return n;
          let [r, s, o, a] = n.match(tE);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        tD = (t) => tP(0, 255, t),
        tj = { ...tS, transform: (t) => Math.round(tD(t)) },
        tR = {
          test: tk("rgb", "red"),
          parse: tV("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            tj.transform(t) +
            ", " +
            tj.transform(e) +
            ", " +
            tj.transform(i) +
            ", " +
            tM(tT.transform(n)) +
            ")",
        },
        tL = {
          test: tk("#"),
          parse: function (t) {
            let e = "",
              i = "",
              n = "",
              r = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (r = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (r = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (n += n),
                  (r += r)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1,
              }
            );
          },
          transform: tR.transform,
        },
        tF = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        tO = tF("deg"),
        tB = tF("%"),
        tI = tF("px"),
        t_ = tF("vh"),
        tU = tF("vw"),
        tN = {
          ...tB,
          parse: (t) => tB.parse(t) / 100,
          transform: (t) => tB.transform(100 * t),
        },
        tz = {
          test: tk("hsl", "hue"),
          parse: tV("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            tB.transform(tM(e)) +
            ", " +
            tB.transform(tM(i)) +
            ", " +
            tM(tT.transform(n)) +
            ")",
        },
        t$ = {
          test: (t) => tR.test(t) || tL.test(t) || tz.test(t),
          parse: (t) =>
            tR.test(t) ? tR.parse(t) : tz.test(t) ? tz.parse(t) : tL.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
              ? tR.transform(t)
              : tz.transform(t),
        },
        tW =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tH = "number",
        tq = "color",
        tY =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function tK(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          r = [],
          s = 0,
          o = e
            .replace(
              tY,
              (t) => (
                t$.test(t)
                  ? (n.color.push(s), r.push(tq), i.push(t$.parse(t)))
                  : t.startsWith("var(")
                  ? (n.var.push(s), r.push("var"), i.push(t))
                  : (n.number.push(s), r.push(tH), i.push(parseFloat(t))),
                ++s,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: o, indexes: n, types: r };
      }
      function tX(t) {
        return tK(t).values;
      }
      function tG(t) {
        let { split: e, types: i } = tK(t),
          n = e.length;
        return (t) => {
          let r = "";
          for (let s = 0; s < n; s++)
            if (((r += e[s]), void 0 !== t[s])) {
              let e = i[s];
              e === tH
                ? (r += tM(t[s]))
                : e === tq
                ? (r += t$.transform(t[s]))
                : (r += t[s]);
            }
          return r;
        };
      }
      let tZ = (t) => ("number" == typeof t ? 0 : t),
        tJ = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(tE)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(tW)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: tX,
          createTransformer: tG,
          getAnimatableNone: function (t) {
            let e = tX(t);
            return tG(t)(e.map(tZ));
          },
        },
        tQ = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function t0(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(tE) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = tQ.has(e) ? 1 : 0;
        return n !== i && (s *= 100), e + "(" + s + r + ")";
      }
      let t1 = /\b([a-z-]*)\(.*?\)/gu,
        t2 = {
          ...tJ,
          getAnimatableNone: (t) => {
            let e = t.match(t1);
            return e ? e.map(t0).join(" ") : t;
          },
        },
        t5 = { ...tS, transform: Math.round },
        t3 = {
          borderWidth: tI,
          borderTopWidth: tI,
          borderRightWidth: tI,
          borderBottomWidth: tI,
          borderLeftWidth: tI,
          borderRadius: tI,
          radius: tI,
          borderTopLeftRadius: tI,
          borderTopRightRadius: tI,
          borderBottomRightRadius: tI,
          borderBottomLeftRadius: tI,
          width: tI,
          maxWidth: tI,
          height: tI,
          maxHeight: tI,
          top: tI,
          right: tI,
          bottom: tI,
          left: tI,
          padding: tI,
          paddingTop: tI,
          paddingRight: tI,
          paddingBottom: tI,
          paddingLeft: tI,
          margin: tI,
          marginTop: tI,
          marginRight: tI,
          marginBottom: tI,
          marginLeft: tI,
          backgroundPositionX: tI,
          backgroundPositionY: tI,
          rotate: tO,
          rotateX: tO,
          rotateY: tO,
          rotateZ: tO,
          scale: tA,
          scaleX: tA,
          scaleY: tA,
          scaleZ: tA,
          skew: tO,
          skewX: tO,
          skewY: tO,
          distance: tI,
          translateX: tI,
          translateY: tI,
          translateZ: tI,
          x: tI,
          y: tI,
          z: tI,
          perspective: tI,
          transformPerspective: tI,
          opacity: tT,
          originX: tN,
          originY: tN,
          originZ: tI,
          zIndex: t5,
          size: tI,
          fillOpacity: tT,
          strokeOpacity: tT,
          numOctaves: t5,
        },
        t6 = {
          ...t3,
          color: t$,
          backgroundColor: t$,
          outlineColor: t$,
          fill: t$,
          stroke: t$,
          borderColor: t$,
          borderTopColor: t$,
          borderRightColor: t$,
          borderBottomColor: t$,
          borderLeftColor: t$,
          filter: t2,
          WebkitFilter: t2,
        },
        t4 = (t) => t6[t];
      function t9(t, e) {
        let i = t4(t);
        return (
          i !== t2 && (i = tJ),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let t7 = new Set(["auto", "none", "0"]),
        t8 = (t) => t === tS || t === tI,
        et = (t, e) => parseFloat(t.split(", ")[e]),
        ee =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return et(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? et(e[1], t) : 0;
            }
          },
        ei = new Set(["x", "y", "z"]),
        en = O.filter((t) => !ei.has(t)),
        er = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: ee(4, 13),
          y: ee(5, 14),
        };
      (er.translateX = er.x), (er.translateY = er.y);
      let es = new Set(),
        eo = !1,
        ea = !1;
      function el() {
        if (ea) {
          let t = Array.from(es).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                en.forEach((i) => {
                  let n = t.getValue(i);
                  void 0 !== n &&
                    (e.push([i, n.get()]),
                    n.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (ea = !1), (eo = !1), es.forEach((t) => t.complete()), es.clear();
      }
      function eu() {
        es.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (ea = !0);
        });
      }
      class eh {
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (es.add(this),
                eo || ((eo = !0), q.read(eu), q.resolveKeyframes(el)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            es.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), es.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let ed = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        ec = (t) => (e) => "string" == typeof e && e.startsWith(t),
        ep = ec("--"),
        em = ec("var(--"),
        ef = (t) => !!em(t) && ev.test(t.split("/*")[0].trim()),
        ev =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        eg = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        ey = (t) => (e) => e.test(t),
        ex = [
          tS,
          tI,
          tB,
          tO,
          tU,
          t_,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        ew = (t) => ex.find(ey(t));
      class eb extends eh {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && ef((n = n.trim()))) {
              let r = (function t(e, i, n = 1) {
                F(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [r, s] = (function (t) {
                  let e = eg.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${null != i ? i : n}`, r];
                })(e);
                if (!r) return;
                let o = window.getComputedStyle(i).getPropertyValue(r);
                if (o) {
                  let t = o.trim();
                  return ed(t) ? parseFloat(t) : t;
                }
                return ef(s) ? t(s, i, n + 1) : s;
              })(n, e.current);
              void 0 !== r && (t[i] = r),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !I.has(i) || 2 !== t.length))
            return;
          let [n, r] = t,
            s = ew(n),
            o = ew(r);
          if (s !== o) {
            if (t8(s) && t8(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            ("number" == typeof (n = t[e])
              ? 0 === n
              : null === n || "none" === n || "0" === n || tb(n)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                "string" == typeof e &&
                  !t7.has(e) &&
                  tK(e).values.length &&
                  (n = t[r]),
                  r++;
              }
              if (n && i) for (let r of e) t[r] = t9(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = er[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            o = n[s];
          (n[s] = er[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      let eP = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (tJ.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        eS = (t) => null !== t;
      function eT(t, { repeat: e, repeatType: i = "loop" }, n) {
        let r = t.filter(eS),
          s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
        return s && void 0 !== n ? n : r[s];
      }
      class eA {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = Z.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (eu(), el()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = Z.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: n,
            velocity: r,
            delay: s,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                o = eP(r, e),
                a = eP(s, e);
              return (
                F(
                  o === a,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || p(i)) && n))
              );
            })(t, i, n, r)
          ) {
            if (tu.current || !s) {
              a && a(eT(t, this.options, e)),
                o && o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      let eM = { layout: 0, mainThread: 0, waapi: 0 },
        eE = (t, e, i) => t + (e - t) * i;
      function eC(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      function ek(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let eV = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        eD = [tL, tR, tz],
        ej = (t) => eD.find((e) => e.test(t));
      function eR(t) {
        let e = ej(t);
        if (
          (F(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tz &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                (r = eC(a, n, t + 1 / 3)),
                  (s = eC(a, n, t)),
                  (o = eC(a, n, t - 1 / 3));
              } else r = s = o = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let eL = (t, e) => {
          let i = eR(t),
            n = eR(e);
          if (!i || !n) return ek(t, e);
          let r = { ...i };
          return (t) => (
            (r.red = eV(i.red, n.red, t)),
            (r.green = eV(i.green, n.green, t)),
            (r.blue = eV(i.blue, n.blue, t)),
            (r.alpha = eE(i.alpha, n.alpha, t)),
            tR.transform(r)
          );
        },
        eF = (t, e) => (i) => e(t(i)),
        eO = (...t) => t.reduce(eF),
        eB = new Set(["none", "hidden"]);
      function eI(t, e) {
        return (i) => eE(t, e, i);
      }
      function e_(t) {
        return "number" == typeof t
          ? eI
          : "string" == typeof t
          ? ef(t)
            ? ek
            : t$.test(t)
            ? eL
            : ez
          : Array.isArray(t)
          ? eU
          : "object" == typeof t
          ? t$.test(t)
            ? eL
            : eN
          : ek;
      }
      function eU(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => e_(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function eN(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = e_(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let ez = (t, e) => {
        let i = tJ.createTransformer(e),
          n = tK(t),
          r = tK(e);
        return n.indexes.var.length === r.indexes.var.length &&
          n.indexes.color.length === r.indexes.color.length &&
          n.indexes.number.length >= r.indexes.number.length
          ? (eB.has(t) && !r.values.length) || (eB.has(e) && !n.values.length)
            ? (function (t, e) {
                return eB.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : eO(
                eU(
                  (function (t, e) {
                    var i;
                    let n = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][r[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (n[s] = l), r[o]++;
                    }
                    return n;
                  })(n, r),
                  r.values
                ),
                i
              )
          : (F(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            ek(t, e));
      };
      function e$(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? eE(t, e, i)
          : e_(t)(t, e);
      }
      function eW(t, e, i) {
        var n, r;
        let s = Math.max(e - 5, 0);
        return (n = i - t(s)), (r = e - s) ? (1e3 / r) * n : 0;
      }
      let eH = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function eq(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let eY = ["duration", "bounce"],
        eK = ["stiffness", "damping", "mass"];
      function eX(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function eG(t = eH.visualDuration, e = eH.bounce) {
        let i;
        let n =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: r, restDelta: s } = n,
          o = n.keyframes[0],
          a = n.keyframes[n.keyframes.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: u,
            damping: h,
            mass: d,
            duration: p,
            velocity: m,
            isResolvedFromDuration: f,
          } = (function (t) {
            let e = {
              velocity: eH.velocity,
              stiffness: eH.stiffness,
              damping: eH.damping,
              mass: eH.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!eX(t, eK) && eX(t, eY)) {
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  n = i * i,
                  r = 2 * tP(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                e = { ...e, mass: eH.mass, stiffness: n, damping: r };
              } else {
                let i = (function ({
                  duration: t = eH.duration,
                  bounce: e = eH.bounce,
                  velocity: i = eH.velocity,
                  mass: n = eH.mass,
                }) {
                  let r, s;
                  F(
                    t <= R(eH.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let o = 1 - e;
                  (o = tP(eH.minDamping, eH.maxDamping, o)),
                    (t = tP(eH.minDuration, eH.maxDuration, L(t))),
                    o < 1
                      ? ((r = (e) => {
                          let n = e * o,
                            r = n * t;
                          return 0.001 - ((n - i) / eq(e, o)) * Math.exp(-r);
                        }),
                        (s = (e) => {
                          let n = e * o * t,
                            s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                            a = Math.exp(-n),
                            l = eq(Math.pow(e, 2), o);
                          return (
                            ((n * i + i - s) *
                              a *
                              (-r(e) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((r = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (s = (e) => t * t * (i - e) * Math.exp(-e * t)));
                  let a = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(r, s, 5 / t);
                  if (((t = R(t)), isNaN(a)))
                    return {
                      stiffness: eH.stiffness,
                      damping: eH.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(a, 2) * n;
                    return {
                      stiffness: e,
                      damping: 2 * o * Math.sqrt(n * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: eH.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...n, velocity: -L(n.velocity || 0) }),
          v = m || 0,
          g = h / (2 * Math.sqrt(u * d)),
          y = a - o,
          w = L(Math.sqrt(u / d)),
          b = 5 > Math.abs(y);
        if (
          (r || (r = b ? eH.restSpeed.granular : eH.restSpeed.default),
          s || (s = b ? eH.restDelta.granular : eH.restDelta.default),
          g < 1)
        ) {
          let t = eq(w, g);
          i = (e) =>
            a -
            Math.exp(-g * w * e) *
              (((v + g * w * y) / t) * Math.sin(t * e) + y * Math.cos(t * e));
        } else if (1 === g)
          i = (t) => a - Math.exp(-w * t) * (y + (v + w * y) * t);
        else {
          let t = w * Math.sqrt(g * g - 1);
          i = (e) => {
            let i = Math.exp(-g * w * e),
              n = Math.min(t * e, 300);
            return (
              a -
              (i * ((v + g * w * y) * Math.sinh(n) + t * y * Math.cosh(n))) / t
            );
          };
        }
        let P = {
          calculatedDuration: (f && p) || null,
          next: (t) => {
            let e = i(t);
            if (f) l.done = t >= p;
            else {
              let n = 0;
              g < 1 && (n = 0 === t ? R(v) : eW(i, t, e));
              let o = Math.abs(n) <= r,
                u = Math.abs(a - e) <= s;
              l.done = o && u;
            }
            return (l.value = l.done ? a : e), l;
          },
          toString: () => {
            let t = Math.min(c(P), 2e4),
              e = x((e) => P.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return P;
      }
      function eZ({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          g = i * e,
          y = p + g,
          x = void 0 === o ? y : o(y);
        x !== y && (g = x - p);
        let w = (t) => -g * Math.exp(-t / n),
          b = (t) => x + w(t),
          P = (t) => {
            let e = w(t),
              i = b(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? x : i);
          },
          S = (t) => {
            f(m.value) &&
              ((d = t),
              (c = eG({
                keyframes: [m.value, v(m.value)],
                velocity: eW(b, t, m.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), P(t), S(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || P(t), m);
            },
          }
        );
      }
      let eJ = td(0.42, 0, 1, 1),
        eQ = td(0, 0, 0.58, 1),
        e0 = td(0.42, 0, 0.58, 1),
        e1 = (t) => Array.isArray(t) && "number" != typeof t[0],
        e2 = {
          linear: F,
          easeIn: eJ,
          easeInOut: e0,
          easeOut: eQ,
          circIn: ty,
          circInOut: tw,
          circOut: tx,
          backIn: tf,
          backInOut: tv,
          backOut: tm,
          anticipate: tg,
        },
        e5 = (t) => {
          if (f(t)) {
            F(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return td(e, i, n, r);
          }
          return "string" == typeof t
            ? (F(void 0 !== e2[t], `Invalid easing type '${t}'`), e2[t])
            : t;
        };
      function e3({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = e1(n) ? n.map(e5) : e5(n),
          s = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: n, mixer: r } = {}) {
            let s = t.length;
            if (
              (F(
                s === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && e[0] === e[1]) return () => e[1];
            let o = t[0] === t[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let a = (function (t, e, i) {
                let n = [],
                  r = i || e$,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = r(t[i], t[i + 1]);
                  e && (s = eO(Array.isArray(e) ? e[i] || F : e, s)), n.push(s);
                }
                return n;
              })(e, n, r),
              l = a.length,
              u = (i) => {
                if (o && i < t[0]) return e[0];
                let n = 0;
                if (l > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++);
                let r = y(t[n], t[n + 1], i);
                return a[n](r);
              };
            return i ? (e) => u(tP(t[0], t[s - 1], e)) : u;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let r = y(0, e, n);
                        t.push(eE(i, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(r)
                ? r
                : e.map(() => r || e0).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = o(e)), (s.done = e >= t), s),
        };
      }
      let e6 = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => q.update(e, !0),
            stop: () => Y(e),
            now: () => (K.isProcessing ? K.timestamp : Z.now()),
          };
        },
        e4 = { decay: eZ, inertia: eZ, tween: e3, keyframes: e3, spring: eG },
        e9 = (t) => t / 100;
      class e7 extends eA {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: n,
              keyframes: r,
            } = this.options,
            s = (null == n ? void 0 : n.KeyframeResolver) || eh;
          (this.resolver = new s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = p(n) ? n : e4[n] || e3;
          l !== e3 &&
            "number" != typeof t[0] &&
            ((e = eO(e9, e$(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration && (u.calculatedDuration = c(u));
          let { calculatedDuration: h } = u,
            d = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: d,
            totalDuration: d * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          eM.mainThread++,
            this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: d,
            repeat: c,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            x = r;
          if (c) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / h))
                  : "mirror" === p && (x = s)),
              (y = tP(0, 1, i) * h);
          }
          let w = g ? { done: !1, value: a[0] } : x.next(y);
          o && (w.value = o(w.value));
          let { done: b } = w;
          g ||
            null === l ||
            (b =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let P =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && b));
          return (
            P && void 0 !== n && (w.value = eT(a, this.options, n)),
            f && f(w.value),
            P && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? L(t.calculatedDuration) : 0;
        }
        get time() {
          return L(this.currentTime);
        }
        set time(t) {
          (t = R(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = L(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = e6, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = n)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel(),
            eM.mainThread--;
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let e8 = new Set(["opacity", "clipPath", "filter", "transform"]),
        it = a(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
        ie = { anticipate: tg, backInOut: tv, circInOut: tw };
      class ii extends eA {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: n,
            keyframes: r,
          } = this.options;
          (this.resolver = new eb(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i;
          let {
            duration: n = 300,
            times: r,
            ease: s,
            type: o,
            motionValue: a,
            name: l,
            startTime: u,
          } = this.options;
          if (!a.owner || !a.owner.current) return !1;
          if (
            ("string" == typeof s && g() && s in ie && (s = ie[s]),
            p((i = this.options).type) ||
              "spring" === i.type ||
              !(function t(e) {
                return !!(
                  ("function" == typeof e && g()) ||
                  !e ||
                  ("string" == typeof e && (e in b || g())) ||
                  f(e) ||
                  (Array.isArray(e) && e.every(t))
                );
              })(i.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: a,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new e7({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (n = h.duration),
              (r = h.times),
              (s = h.ease),
              (o = "keyframes");
          }
          let h = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a = "easeInOut",
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = (function t(e, i) {
              if (e)
                return "function" == typeof e && g()
                  ? x(e, i)
                  : f(e)
                  ? w(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, i) || b.easeOut)
                  : b[e];
            })(a, r);
            Array.isArray(h) && (u.easing = h), W.value && eM.waapi++;
            let d = t.animate(u, {
              delay: n,
              duration: r,
              easing: Array.isArray(h) ? "linear" : h,
              fill: "both",
              iterations: s + 1,
              direction: "reverse" === o ? "alternate" : "normal",
            });
            return (
              W.value &&
                d.finished.finally(() => {
                  eM.waapi--;
                }),
              d
            );
          })(a.owner.current, l, t, {
            ...this.options,
            duration: n,
            times: r,
            ease: s,
          });
          return (
            (h.startTime = null != u ? u : this.calcStartTime()),
            this.pendingTimeline
              ? (m(h, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: i } = this.options;
                  a.set(eT(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: h,
              duration: n,
              times: r,
              type: o,
              ease: s,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return L(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return L(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = R(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return F;
            let { animation: i } = e;
            m(i, t);
          } else this.pendingTimeline = t;
          return F;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: n,
            type: r,
            ease: s,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              h = new e7({
                ...u,
                keyframes: i,
                duration: n,
                type: r,
                ease: s,
                times: o,
                isGenerator: !0,
              }),
              d = R(this.time);
            t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
          return (
            it() &&
            i &&
            e8.has(i) &&
            !a &&
            !l &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      let ir = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        is = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        io = { type: "keyframes", duration: 0.8 },
        ia = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        il = (t, { keyframes: e }) =>
          e.length > 2
            ? io
            : B.has(t)
            ? t.startsWith("scale")
              ? is(e[1])
              : ir
            : ia,
        iu =
          (t, e, i, n = {}, r, s) =>
          (o) => {
            let a = d(n, t) || {},
              l = a.delay || n.delay || 0,
              { elapsed: u = 0 } = n;
            u -= R(l);
            let c = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...a,
              delay: -u,
              onUpdate: (t) => {
                e.set(t), a.onUpdate && a.onUpdate(t);
              },
              onComplete: () => {
                o(), a.onComplete && a.onComplete();
              },
              name: t,
              motionValue: e,
              element: s ? void 0 : r,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: r,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(a) && (c = { ...c, ...il(t, c) }),
              c.duration && (c.duration = R(c.duration)),
              c.repeatDelay && (c.repeatDelay = R(c.repeatDelay)),
              void 0 !== c.from && (c.keyframes[0] = c.from);
            let p = !1;
            if (
              ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
                ((c.duration = 0), 0 !== c.delay || (p = !0)),
              (tu.current || z.skipAnimations) &&
                ((p = !0), (c.duration = 0), (c.delay = 0)),
              p && !s && void 0 !== e.get())
            ) {
              let t = eT(c.keyframes, a);
              if (void 0 !== t)
                return (
                  q.update(() => {
                    c.onUpdate(t), c.onComplete();
                  }),
                  new h([])
                );
            }
            return !s && ii.supports(c) ? new ii(c) : new e7(c);
          };
      function ih(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        var s;
        let {
          transition: a = t.getDefaultTransition(),
          transitionEnd: l,
          ...u
        } = e;
        n && (a = n);
        let h = [],
          c = r && t.animationState && t.animationState.getState()[r];
        for (let e in u) {
          let n = t.getValue(
              e,
              null !== (s = t.latestValues[e]) && void 0 !== s ? s : null
            ),
            r = u[e];
          if (
            void 0 === r ||
            (c &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(c, e))
          )
            continue;
          let o = { delay: i, ...d(a || {}, e) },
            l = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[tl];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, q);
              null !== t && ((o.startTime = t), (l = !0));
            }
          }
          to(t, e),
            n.start(
              iu(
                e,
                n,
                r,
                t.shouldReduceMotion && I.has(e) ? { type: !1 } : o,
                t,
                l
              )
            );
          let p = n.animation;
          p && h.push(p);
        }
        return (
          l &&
            Promise.all(h).then(() => {
              q.update(() => {
                l &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = o(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      let i = N(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, tr(i));
                    }
                  })(t, l);
              });
            }),
          h
        );
      }
      function id(t, e, i = {}) {
        var n;
        let r = o(
            t,
            e,
            "exit" === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (s = i.transitionOverride);
        let a = r ? () => Promise.all(ih(t, r, i)) : () => Promise.resolve(),
          l =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(ic)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              id(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: u } = s;
        if (!u) return Promise.all([a(), l(i.delay)]);
        {
          let [t, e] = "beforeChildren" === u ? [a, l] : [l, a];
          return t().then(() => e());
        }
      }
      function ic(t, e) {
        return t.sortNodePosition(e);
      }
      function ip(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function im(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      let iv = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        ig = ["initial", ...iv],
        iy = ig.length,
        ix = [...iv].reverse(),
        iw = iv.length;
      function ib(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function iP() {
        return {
          animate: ib(!0),
          whileInView: ib(),
          whileHover: ib(),
          whileTap: ib(),
          whileDrag: ib(),
          whileFocus: ib(),
          exit: ib(),
        };
      }
      class iS {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class iT extends iS {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => id(t, e, i)));
                          else if ("string" == typeof e) n = id(t, e, i);
                          else {
                            let r =
                              "function" == typeof e ? o(t, e, i.custom) : e;
                            n = Promise.all(ih(t, r, i));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = iP(),
                  n = !0,
                  s = (e) => (i, n) => {
                    var r;
                    let s = o(
                      t,
                      n,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function a(a) {
                  let { props: l } = t,
                    u =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < iy; t++) {
                          let n = ig[t],
                            r = e.props[n];
                          (im(r) || !1 === r) && (i[n] = r);
                        }
                        return i;
                      })(t.parent) || {},
                    h = [],
                    d = new Set(),
                    c = {},
                    p = 1 / 0;
                  for (let e = 0; e < iw; e++) {
                    var m;
                    let o = ix[e],
                      f = i[o],
                      v = void 0 !== l[o] ? l[o] : u[o],
                      g = im(v),
                      y = o === a ? f.isActive : null;
                    !1 === y && (p = e);
                    let x = v === u[o] && v !== l[o] && g;
                    if (
                      (x && n && t.manuallyAnimateOnMount && (x = !1),
                      (f.protectedKeys = { ...c }),
                      (!f.isActive && null === y) ||
                        (!v && !f.prevProp) ||
                        r(v) ||
                        "boolean" == typeof v)
                    )
                      continue;
                    let w =
                        ((m = f.prevProp),
                        "string" == typeof v
                          ? v !== m
                          : !!Array.isArray(v) && !ip(v, m)),
                      b =
                        w || (o === a && f.isActive && !x && g) || (e > p && g),
                      P = !1,
                      S = Array.isArray(v) ? v : [v],
                      T = S.reduce(s(o), {});
                    !1 === y && (T = {});
                    let { prevResolvedValues: A = {} } = f,
                      M = { ...A, ...T },
                      E = (e) => {
                        (b = !0),
                          d.has(e) && ((P = !0), d.delete(e)),
                          (f.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in M) {
                      let e = T[t],
                        i = A[t];
                      if (!c.hasOwnProperty(t))
                        (_(e) && _(i) ? ip(e, i) : e === i)
                          ? void 0 !== e && d.has(t)
                            ? E(t)
                            : (f.protectedKeys[t] = !0)
                          : null != e
                          ? E(t)
                          : d.add(t);
                    }
                    (f.prevProp = v),
                      (f.prevResolvedValues = T),
                      f.isActive && (c = { ...c, ...T }),
                      n && t.blockInitialAnimation && (b = !1);
                    let C = !(x && w) || P;
                    b &&
                      C &&
                      h.push(
                        ...S.map((t) => ({
                          animation: t,
                          options: { type: o },
                        }))
                      );
                  }
                  if (d.size) {
                    let e = {};
                    if ("boolean" != typeof l.initial) {
                      let i = o(
                        t,
                        Array.isArray(l.initial) ? l.initial[0] : l.initial
                      );
                      i && i.transition && (e.transition = i.transition);
                    }
                    d.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      h.push({ animation: e });
                  }
                  let f = !!h.length;
                  return (
                    n &&
                      (!1 === l.initial || l.initial === l.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (f = !1),
                    (n = !1),
                    f ? e(h) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: a,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let s = a(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = iP()), (n = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          r(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let iA = 0;
      class iM extends iS {
        constructor() {
          super(...arguments), (this.id = iA++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e &&
            !t &&
            n.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          e && e(this.id), t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      function iE(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      function iC(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let ik = (t) => (e) => M(e) && t(e, iC(e));
      function iV(t, e, i, n) {
        return iE(t, e, ik(i), n);
      }
      let iD = (t, e) => Math.abs(t - e);
      class ij {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = iF(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(iD(t.x, e.x) ** 2 + iD(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: n } = t,
                { timestamp: r } = K;
              this.history.push({ ...n, timestamp: r });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = iR(e, this.transformPagePoint)),
                q.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = iF(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : iR(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !M(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = iR(iC(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = K;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, iF(s, this.history)),
            (this.removeListeners = eO(
              iV(this.contextWindow, "pointermove", this.handlePointerMove),
              iV(this.contextWindow, "pointerup", this.handlePointerUp),
              iV(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), Y(this.updatePoint);
        }
      }
      function iR(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function iL(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function iF({ point: t }, e) {
        return {
          point: t,
          delta: iL(t, iO(e)),
          offset: iL(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = iO(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > R(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = L(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function iO(t) {
        return t[t.length - 1];
      }
      function iB(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function iI(t) {
        return t.max - t.min;
      }
      function i_(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = eE(e.min, e.max, t.origin)),
          (t.scale = iI(i) / iI(e)),
          (t.translate = eE(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function iU(t, e, i, n) {
        i_(t.x, e.x, i.x, n ? n.originX : void 0),
          i_(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function iN(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + iI(e));
      }
      function iz(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + iI(e));
      }
      function i$(t, e, i) {
        iz(t.x, e.x, i.x), iz(t.y, e.y, i.y);
      }
      function iW(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function iH(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function iq(t, e, i) {
        return { min: iY(t, e), max: iY(t, i) };
      }
      function iY(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let iK = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        iX = () => ({ x: iK(), y: iK() }),
        iG = () => ({ min: 0, max: 0 }),
        iZ = () => ({ x: iG(), y: iG() });
      function iJ(t) {
        return [t("x"), t("y")];
      }
      function iQ({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function i0(t) {
        return void 0 === t || 1 === t;
      }
      function i1({ scale: t, scaleX: e, scaleY: i }) {
        return !i0(t) || !i0(e) || !i0(i);
      }
      function i2(t) {
        return (
          i1(t) ||
          i5(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function i5(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function i3(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function i6(t, e = 0, i = 1, n, r) {
        (t.min = i3(t.min, e, i, n, r)), (t.max = i3(t.max, e, i, n, r));
      }
      function i4(t, { x: e, y: i }) {
        i6(t.x, e.translate, e.scale, e.originPoint),
          i6(t.y, i.translate, i.scale, i.originPoint);
      }
      function i9(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function i7(t, e, i, n, r = 0.5) {
        let s = eE(t.min, t.max, r);
        i6(t, e, i, s, n);
      }
      function i8(t, e) {
        i7(t.x, e.x, e.scaleX, e.scale, e.originX),
          i7(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function nt(t, e) {
        return iQ(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let ne = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        ni = new WeakMap();
      class nn {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = iZ()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new ij(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(iC(t).point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: r,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    "x" === i || "y" === i
                      ? P[i]
                        ? null
                        : ((P[i] = !0),
                          () => {
                            P[i] = !1;
                          })
                      : P.x || P.y
                      ? null
                      : ((P.x = P.y = !0),
                        () => {
                          P.x = P.y = !1;
                        })),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  iJ((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tB.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        n && (e = iI(n) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && q.postRender(() => r(t, e)),
                  to(this.visualElement, "transform");
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openDragLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                iJ((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: ne(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && q.postRender(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !nr(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? eE(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? eE(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && iB(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: iW(t.x, i, r), y: iW(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: iq(t, "left", "right"), y: iq(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              iJ((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !iB(e)) return !1;
          let n = e.current;
          F(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = nt(t, i),
                { scroll: r } = e;
              return r && (i9(n.x, r.offset.x), i9(n.y, r.offset.y)), n;
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: iH((t = r.layout.layoutBox).x, s.x), y: iH(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = iQ(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            iJ((o) => {
              if (!nr(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            to(this.visualElement, t),
            i.start(iu(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          iJ((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          iJ((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          iJ((e) => {
            let { drag: i } = this.getProps();
            if (!nr(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - eE(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!iB(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          iJ((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = iI(t),
                  r = iI(e);
                return (
                  r > n
                    ? (i = y(e.min, e.max - n, t.min))
                    : n > r && (i = y(t.min, t.max - r, e.min)),
                  tP(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            iJ((e) => {
              if (!nr(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set(eE(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          ni.set(this.visualElement, this);
          let t = iV(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              iB(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            q.read(e);
          let r = iE(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (iJ((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), t(), n(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function nr(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class ns extends iS {
        constructor(t) {
          super(t),
            (this.removeGroupControls = F),
            (this.removeListeners = F),
            (this.controls = new nn(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || F);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let no = (t) => (e, i) => {
        t && q.postRender(() => t(e, i));
      };
      class na extends iS {
        constructor() {
          super(...arguments), (this.removePointerDownListener = F);
        }
        onPointerDown(t) {
          this.session = new ij(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ne(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: no(t),
            onStart: no(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && q.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = iV(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var nl,
        nu,
        nh = i(5155),
        nd = i(2115);
      let nc = (0, nd.createContext)(null),
        np = (0, nd.createContext)({}),
        nm = (0, nd.createContext)({}),
        nf = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function nv(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let ng = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!tI.test(t)) return t;
              t = parseFloat(t);
            }
            let i = nv(t, e.target.x),
              n = nv(t, e.target.y);
            return `${i}% ${n}%`;
          },
        },
        ny = {},
        { schedule: nx, cancel: nw } = H(queueMicrotask, !1);
      class nb extends nd.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          !(function (t) {
            for (let e in t)
              (ny[e] = t[e]), ep(e) && (ny[e].isCSSVariable = !0);
          })(nS),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (nf.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    q.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            nx.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function nP(t) {
        let [e, i] = (function (t = !0) {
            let e = (0, nd.useContext)(nc);
            if (null === e) return [!0, null];
            let { isPresent: i, onExitComplete: n, register: r } = e,
              s = (0, nd.useId)();
            (0, nd.useEffect)(() => {
              t && r(s);
            }, [t]);
            let o = (0, nd.useCallback)(() => t && n && n(s), [s, n, t]);
            return !i && n ? [!1, o] : [!0];
          })(),
          n = (0, nd.useContext)(np);
        return (0, nh.jsx)(nb, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, nd.useContext)(nm),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let nS = {
          borderRadius: {
            ...ng,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: ng,
          borderTopRightRadius: ng,
          borderBottomLeftRadius: ng,
          borderBottomRightRadius: ng,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let n = tJ.parse(t);
              if (n.length > 5) return t;
              let r = tJ.createTransformer(t),
                s = "number" != typeof n[0] ? 1 : 0,
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (n[0 + s] /= o), (n[1 + s] /= a);
              let l = eE(o, a, 0.5);
              return (
                "number" == typeof n[2 + s] && (n[2 + s] /= l),
                "number" == typeof n[3 + s] && (n[3 + s] /= l),
                r(n)
              );
            },
          },
        },
        nT = (t, e) => t.depth - e.depth;
      class nA {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          J(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          Q(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nT),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function nM(t) {
        let e = ts(t) ? t.get() : t;
        return U(e) ? e.toValue() : e;
      }
      let nE = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nC = nE.length,
        nk = (t) => ("string" == typeof t ? parseFloat(t) : t),
        nV = (t) => "number" == typeof t || tI.test(t);
      function nD(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nj = nL(0, 0.5, tx),
        nR = nL(0.5, 0.95, F);
      function nL(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i(y(t, e, n)));
      }
      function nF(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nO(t, e) {
        nF(t.x, e.x), nF(t.y, e.y);
      }
      function nB(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function nI(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function n_(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (
            (tB.test(e) &&
              ((e = parseFloat(e)), (e = eE(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = eE(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = nI(t.min, e, i, a, r)),
            (t.max = nI(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let nU = ["x", "scaleX", "originX"],
        nN = ["y", "scaleY", "originY"];
      function nz(t, e, i, n) {
        n_(t.x, e, nU, i ? i.x : void 0, n ? n.x : void 0),
          n_(t.y, e, nN, i ? i.y : void 0, n ? n.y : void 0);
      }
      function n$(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nW(t) {
        return n$(t.x) && n$(t.y);
      }
      function nH(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function nq(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function nY(t, e) {
        return nq(t.x, e.x) && nq(t.y, e.y);
      }
      function nK(t) {
        return iI(t.x) / iI(t.y);
      }
      function nX(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class nG {
        constructor() {
          this.members = [];
        }
        add(t) {
          J(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (Q(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let nZ = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        nJ = ["", "X", "Y", "Z"],
        nQ = { visibility: "hidden" },
        n0 = 0;
      function n1(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function n2({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = n0++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  W.value &&
                    (nZ.nodes =
                      nZ.calculatedTargetDeltas =
                      nZ.calculatedProjections =
                        0),
                  this.nodes.forEach(n6),
                  this.nodes.forEach(ri),
                  this.nodes.forEach(rn),
                  this.nodes.forEach(n4),
                  W.addProjectionMetrics && W.addProjectionMetrics(nZ);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nA());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new tt()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = Z.now(),
                      n = ({ timestamp: e }) => {
                        let r = e - i;
                        r >= 250 && (Y(n), t(r - 250));
                      };
                    return q.read(n, !0), () => Y(n);
                  })(n, 250)),
                  nf.hasAnimatedSinceResize &&
                    ((nf.hasAnimatedSinceResize = !1), this.nodes.forEach(re));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        ru,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !nY(this.targetLayout, n),
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...d(r, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || re(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              Y(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(rr),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = i.props[tl];
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      q,
                      !(t || i)
                    );
                  }
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(n7);
              return;
            }
            this.isUpdating || this.nodes.forEach(n8),
              (this.isUpdating = !1),
              this.nodes.forEach(rt),
              this.nodes.forEach(n5),
              this.nodes.forEach(n3),
              this.clearAllSnapshots();
            let t = Z.now();
            (K.delta = tP(0, 1e3 / 60, t - K.timestamp)),
              (K.timestamp = t),
              (K.isProcessing = !0),
              X.update.process(K),
              X.preRender.process(K),
              X.render.process(K),
              (K.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), nx.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(n9), this.sharedNodes.forEach(rs);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              q.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            q.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            this.snapshot ||
              !this.instance ||
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                iI(this.snapshot.measuredBox.x) ||
                iI(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = iZ()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !nW(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || i2(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              rc((e = n).x),
              rc(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return iZ();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(rm)
              )
            ) {
              let { scroll: t } = this.root;
              t && (i9(i.x, t.offset.x), i9(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = iZ();
            if (
              (nO(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e],
                { scroll: r, options: s } = n;
              n !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && nO(i, t),
                i9(i.x, r.offset.x),
                i9(i.y, r.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = iZ();
            nO(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                i8(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                i2(n.latestValues) && i8(i, n.latestValues);
            }
            return i2(this.latestValues) && i8(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = iZ();
            nO(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !i2(i.latestValues)) continue;
              i1(i.latestValues) && i.updateSnapshot();
              let n = iZ();
              nO(n, i.measurePageBox()),
                nz(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return i2(this.latestValues) && nz(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== K.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = K.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = iZ()),
                    (this.relativeTargetOrigin = iZ()),
                    i$(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    nO(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = iZ()), (this.targetWithTransforms = iZ())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      iN(i.x, n.x, r.x),
                      iN(i.y, n.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nO(this.target, this.layout.layoutBox),
                      i4(this.target, this.targetDelta))
                    : nO(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = iZ()),
                      (this.relativeTargetOrigin = iZ()),
                      i$(this.relativeTargetOrigin, this.target, t.target),
                      nO(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                W.value && nZ.calculatedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              i1(this.parent.latestValues) ||
              i5(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === K.timestamp && (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            nO(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let r, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = i[a]).projectionDelta;
                  let { visualElement: o } = r.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (n &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      i8(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), i4(t, s)),
                    n && i2(r.latestValues) && i8(t, r.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = iZ()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (nB(this.prevProjectionDelta.x, this.projectionDelta.x),
                nB(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              iU(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                nX(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                nX(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              W.value && nZ.calculatedProjections++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = iX()),
              (this.projectionDelta = iX()),
              (this.projectionDeltaWithTransform = iX());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = iX();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = iZ(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(rl)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (ro(o.x, t.x, n),
                  ro(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, m;
                  i$(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    ra(p.x, m.x, a.x, n),
                    ra(p.y, m.y, a.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (c = i),
                      nH(u.x, c.x) && nH(u.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = iZ()),
                    nO(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = eE(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          nj(n)
                        )),
                        (t.opacityExit = eE(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          nR(n)
                        )))
                      : s &&
                        (t.opacity = eE(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < nC; r++) {
                      let s = `border${nE[r]}Radius`,
                        o = nD(e, s),
                        a = nD(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || nV(o) === nV(a)
                          ? ((t[s] = Math.max(eE(nk(o), nk(a), n), 0)),
                            (tB.test(a) || tB.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = eE(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (Y(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = q.update(() => {
                (nf.hasAnimatedSinceResize = !0),
                  eM.layout++,
                  (this.currentAnimation = (function (t, e, i) {
                    let n = ts(0) ? 0 : tr(0);
                    return n.start(iu("", n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onStop: () => {
                      eM.layout--;
                    },
                    onComplete: () => {
                      eM.layout--,
                        t.onComplete && t.onComplete(),
                        this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                rp(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || iZ();
                let e = iI(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = iI(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              nO(e, i),
                i8(e, r),
                iU(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nG()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && n1("z", t, n, this.animationValues);
            for (let e = 0; e < nJ.length; e++)
              n1(`rotate${nJ[e]}`, t, n, this.animationValues),
                n1(`skew${nJ[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return nQ;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  nM(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    nM(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !i2(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = (function (t, e, i) {
                let n = "",
                  r = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((r || s || o) &&
                    (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: r,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (n = `perspective(${t}px) ${n}`),
                    e && (n += `rotate(${e}deg) `),
                    r && (n += `rotateX(${r}deg) `),
                    s && (n += `rotateY(${s}deg) `),
                    o && (n += `skewX(${o}deg) `),
                    a && (n += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                  n || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            ny)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i, isCSSVariable: r } = ny[t],
                a = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = a;
              } else
                r
                  ? (this.options.visualElement.renderState.vars[t] = a)
                  : (n[t] = a);
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? nM(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(n7),
              this.root.sharedNodes.clear();
          }
        };
      }
      function n5(t) {
        t.updateLayout();
      }
      function n3(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? iJ((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = iI(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : rp(r, i.layoutBox, e) &&
              iJ((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = iI(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = iX();
          iU(o, e, i.layoutBox);
          let a = iX();
          s
            ? iU(a, t.applyTransform(n, !0), i.measuredBox)
            : iU(a, e, i.layoutBox);
          let l = !nW(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = iZ();
                i$(o, i.layoutBox, r.layoutBox);
                let a = iZ();
                i$(a, e, s.layoutBox),
                  nY(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function n6(t) {
        W.value && nZ.nodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function n4(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function n9(t) {
        t.clearSnapshot();
      }
      function n7(t) {
        t.clearMeasurements();
      }
      function n8(t) {
        t.isLayoutDirty = !1;
      }
      function rt(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function re(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function ri(t) {
        t.resolveTargetDelta();
      }
      function rn(t) {
        t.calcProjection();
      }
      function rr(t) {
        t.resetSkewAndRotation();
      }
      function rs(t) {
        t.removeLeadSnapshot();
      }
      function ro(t, e, i) {
        (t.translate = eE(e.translate, 0, i)),
          (t.scale = eE(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function ra(t, e, i, n) {
        (t.min = eE(e.min, i.min, n)), (t.max = eE(e.max, i.max, n));
      }
      function rl(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let ru = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        rh = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        rd = rh("applewebkit/") && !rh("chrome/") ? Math.round : F;
      function rc(t) {
        (t.min = rd(t.min)), (t.max = rd(t.max));
      }
      function rp(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(nK(e) - nK(i))))
        );
      }
      function rm(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let rf = n2({
          attachResizeListener: (t, e) => iE(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        rv = { current: void 0 },
        rg = n2({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!rv.current) {
              let t = new rf({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (rv.current = t);
            }
            return rv.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function ry(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let r = n["onHover" + i];
        r && q.postRender(() => r(e, iC(e)));
      }
      class rx extends iS {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, r, s] = S(t, i),
                o = (t) => {
                  if (!T(t)) return;
                  let { target: i } = t,
                    n = e(i, t);
                  if ("function" != typeof n || !i) return;
                  let s = (t) => {
                    T(t) && (n(t), i.removeEventListener("pointerleave", s));
                  };
                  i.addEventListener("pointerleave", s, r);
                };
              return (
                n.forEach((t) => {
                  t.addEventListener("pointerenter", o, r);
                }),
                s
              );
            })(
              t,
              (t, e) => (
                ry(this.node, e, "Start"), (t) => ry(this.node, t, "End")
              )
            ));
        }
        unmount() {}
      }
      class rw extends iS {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = eO(
            iE(this.node.current, "focus", () => this.onFocus()),
            iE(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      function rb(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let r = n["onTap" + ("End" === i ? "" : i)];
        r && q.postRender(() => r(e, iC(e)));
      }
      class rP extends iS {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, r, s] = S(t, i),
                o = (t) => {
                  let n = t.currentTarget;
                  if (!j(t) || C.has(n)) return;
                  C.add(n);
                  let s = e(n, t),
                    o = (t, e) => {
                      window.removeEventListener("pointerup", a),
                        window.removeEventListener("pointercancel", l),
                        j(t) &&
                          C.has(n) &&
                          (C.delete(n),
                          "function" == typeof s && s(t, { success: e }));
                    },
                    a = (t) => {
                      o(t, i.useGlobalTarget || A(n, t.target));
                    },
                    l = (t) => {
                      o(t, !1);
                    };
                  window.addEventListener("pointerup", a, r),
                    window.addEventListener("pointercancel", l, r);
                };
              return (
                n.forEach((t) => {
                  E.has(t.tagName) ||
                    -1 !== t.tabIndex ||
                    null !== t.getAttribute("tabindex") ||
                    (t.tabIndex = 0),
                    (i.useGlobalTarget ? window : t).addEventListener(
                      "pointerdown",
                      o,
                      r
                    ),
                    t.addEventListener("focus", (t) => D(t, r), r);
                }),
                s
              );
            })(
              t,
              (t, e) => (
                rb(this.node, e, "Start"),
                (t, { success: e }) => rb(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let rS = new WeakMap(),
        rT = new WeakMap(),
        rA = (t) => {
          let e = rS.get(t.target);
          e && e(t);
        },
        rM = (t) => {
          t.forEach(rA);
        },
        rE = { some: 0, all: 1 };
      class rC extends iS {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : rE[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              rT.has(i) || rT.set(i, {});
              let n = rT.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(rM, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              rS.set(t, i),
              n.observe(t),
              () => {
                rS.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let rk = (0, nd.createContext)({ strict: !1 }),
        rV = (0, nd.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        rD = (0, nd.createContext)({});
      function rj(t) {
        return r(t.animate) || ig.some((e) => im(t[e]));
      }
      function rR(t) {
        return !!(rj(t) || t.variants);
      }
      function rL(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let rF = "undefined" != typeof window,
        rO = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        rB = {};
      for (let t in rO) rB[t] = { isEnabled: (e) => rO[t].some((t) => !!e[t]) };
      let rI = Symbol.for("motionComponentSymbol"),
        r_ = rF ? nd.useLayoutEffect : nd.useEffect;
      function rU(t, { layout: e, layoutId: i }) {
        return (
          B.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!ny[t] || "opacity" === t))
        );
      }
      let rN = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        rz = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        r$ = O.length;
      function rW(t, e, i) {
        let { style: n, vars: r, transformOrigin: s } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (B.has(t)) {
            o = !0;
            continue;
          }
          if (ep(t)) {
            r[t] = i;
            continue;
          }
          {
            let e = rN(i, t3[t]);
            t.startsWith("origin") ? ((a = !0), (s[t] = e)) : (n[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (n.transform = (function (t, e, i) {
                  let n = "",
                    r = !0;
                  for (let s = 0; s < r$; s++) {
                    let o = O[s],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (o.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = rN(a, t3[o]);
                      if (!l) {
                        r = !1;
                        let e = rz[o] || o;
                        n += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (n = n.trim()),
                    i ? (n = i(e, r ? "" : n)) : r && (n = "none"),
                    n
                  );
                })(e, t.transform, i))
              : n.transform && (n.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = s;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let rH = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function rq(t, e, i) {
        for (let n in e) ts(e[n]) || rU(n, i) || (t[n] = e[n]);
      }
      let rY = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function rK(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          rY.has(t)
        );
      }
      let rX = (t) => !rK(t);
      try {
        !(function (t) {
          t && (rX = (e) => (e.startsWith("on") ? !rK(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch (t) {}
      let rG = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function rZ(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (rG.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let rJ = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        rQ = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function r0(t, e, i) {
        return "string" == typeof t ? t : tI.transform(e + i * t);
      }
      function r1(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          originX: r,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        d
      ) {
        if ((rW(t, u, d), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: c, style: p, dimensions: m } = t;
        c.transform && (m && (p.transform = c.transform), delete c.transform),
          m &&
            (void 0 !== r || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let n = r0(e, t.x, t.width),
                r = r0(i, t.y, t.height);
              return `${n} ${r}`;
            })(m, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (c.x = e),
          void 0 !== i && (c.y = i),
          void 0 !== n && (c.scale = n),
          void 0 !== o &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? rJ : rQ;
              t[s.offset] = tI.transform(-n);
              let o = tI.transform(e),
                a = tI.transform(i);
              t[s.array] = `${o} ${a}`;
            })(c, o, a, l, !1);
      }
      let r2 = () => ({ ...rH(), attrs: {} }),
        r5 = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        r3 = (t) => (e, i) => {
          let n = (0, nd.useContext)(rD),
            o = (0, nd.useContext)(nc),
            a = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onUpdate: i,
                },
                n,
                o,
                a
              ) {
                let l = {
                  latestValues: (function (t, e, i, n) {
                    let o = {},
                      a = n(t, {});
                    for (let t in a) o[t] = nM(a[t]);
                    let { initial: l, animate: u } = t,
                      h = rj(t),
                      d = rR(t);
                    e &&
                      d &&
                      !h &&
                      !1 !== t.inherit &&
                      (void 0 === l && (l = e.initial),
                      void 0 === u && (u = e.animate));
                    let c = !!i && !1 === i.initial,
                      p = (c = c || !1 === l) ? u : l;
                    if (p && "boolean" != typeof p && !r(p)) {
                      let e = Array.isArray(p) ? p : [p];
                      for (let i = 0; i < e.length; i++) {
                        let n = s(t, e[i]);
                        if (n) {
                          let { transitionEnd: t, transition: e, ...i } = n;
                          for (let t in i) {
                            let e = i[t];
                            if (Array.isArray(e)) {
                              let t = c ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (o[t] = e);
                          }
                          for (let e in t) o[e] = t[e];
                        }
                      }
                    }
                    return o;
                  })(n, o, a, t),
                  renderState: e(),
                };
                return (
                  i &&
                    ((l.onMount = (t) => i({ props: n, current: t, ...l })),
                    (l.onUpdate = (t) => i(t))),
                  l
                );
              })(t, e, n, o);
          return i
            ? a()
            : (function (t) {
                let e = (0, nd.useRef)(null);
                return null === e.current && (e.current = t()), e.current;
              })(a);
        };
      function r6(t, e, i) {
        var n;
        let { style: r } = t,
          s = {};
        for (let o in r)
          (ts(r[o]) ||
            (e.style && ts(e.style[o])) ||
            rU(o, t) ||
            (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (s[o] = r[o]);
        return s;
      }
      let r4 = {
        useVisualState: r3({
          scrapeMotionValuesFromProps: r6,
          createRenderState: rH,
        }),
      };
      function r9(t, e) {
        try {
          e.dimensions =
            "function" == typeof t.getBBox
              ? t.getBBox()
              : t.getBoundingClientRect();
        } catch (t) {
          e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
      }
      function r7(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let r8 = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function st(t, e, i, n) {
        for (let i in (r7(t, e, void 0, n), e.attrs))
          t.setAttribute(r8.has(i) ? i : ta(i), e.attrs[i]);
      }
      function se(t, e, i) {
        let n = r6(t, e, i);
        for (let i in t)
          (ts(t[i]) || ts(e[i])) &&
            (n[
              -1 !== O.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      let si = ["x", "y", "width", "height", "cx", "cy", "r"],
        sn = {
          useVisualState: r3({
            scrapeMotionValuesFromProps: se,
            createRenderState: r2,
            onUpdate: ({
              props: t,
              prevProps: e,
              current: i,
              renderState: n,
              latestValues: r,
            }) => {
              if (!i) return;
              let s = !!t.drag;
              if (!s) {
                for (let t in r)
                  if (B.has(t)) {
                    s = !0;
                    break;
                  }
              }
              if (!s) return;
              let o = !e;
              if (e)
                for (let i = 0; i < si.length; i++) {
                  let n = si[i];
                  t[n] !== e[n] && (o = !0);
                }
              o &&
                q.read(() => {
                  r9(i, n),
                    q.render(() => {
                      r1(n, r, r5(i.tagName), t.transformTemplate), st(i, n);
                    });
                });
            },
          }),
        },
        sr = { current: null },
        ss = { current: !1 },
        so = [...ex, t$, tJ],
        sa = (t) => so.find(ey(t)),
        sl = new WeakMap(),
        su = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class sh {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = eh),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = Z.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), q.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l, onUpdate: u } = s;
          (this.onUpdate = u),
            (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = rj(e)),
            (this.isVariantNode = rR(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: h, ...d } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in d) {
            let e = d[t];
            void 0 !== a[t] && ts(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            sl.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            ss.current ||
              (function () {
                if (((ss.current = !0), rF)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (sr.current = t.matches);
                    t.addListener(e), e();
                  } else sr.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || sr.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          Y(this.notifyUpdate),
          Y(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = B.has(t);
          n && this.onBindTransform && this.onBindTransform();
          let r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && q.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), s(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in rB) {
            let e = rB[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : iZ();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < su.length; e++) {
            let i = su[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let r = e[n],
                s = i[n];
              if (ts(r)) t.addValue(n, r);
              else if (ts(s)) t.addValue(n, tr(r, { owner: t }));
              else if (s !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, tr(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = tr(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && (ed(n) || tb(n))
                ? (n = parseFloat(n))
                : !sa(n) && tJ.test(e) && (n = t9(t, e)),
              this.setBaseTarget(t, ts(n) ? n.get() : n)),
            ts(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let r = s(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (i = r[t]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || ts(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new tt()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class sd extends sh {
        constructor() {
          super(...arguments), (this.KeyframeResolver = eb);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          ts(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class sc extends sd {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = r7);
        }
        readValueFromInstance(t, e) {
          if (B.has(e)) {
            let t = t4(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = (ep(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return nt(t, e);
        }
        build(t, e, i) {
          rW(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return r6(t, e, i);
        }
      }
      class sp extends sd {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = iZ),
            (this.updateDimensions = () => {
              this.current &&
                !this.renderState.dimensions &&
                r9(this.current, this.renderState);
            });
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (B.has(e)) {
            let t = t4(e);
            return (t && t.default) || 0;
          }
          return (e = r8.has(e) ? e : ta(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return se(t, e, i);
        }
        onBindTransform() {
          this.current &&
            !this.renderState.dimensions &&
            q.postRender(this.updateDimensions);
        }
        build(t, e, i) {
          r1(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          st(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = r5(t.tagName)), super.mount(t);
        }
      }
      let sm = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, n) =>
            "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
        });
      })(
        ((nl = {
          animation: { Feature: iT },
          exit: { Feature: iM },
          inView: { Feature: rC },
          tap: { Feature: rP },
          focus: { Feature: rw },
          hover: { Feature: rx },
          pan: { Feature: na },
          drag: { Feature: ns, ProjectionNode: rg, MeasureLayout: nP },
          layout: { ProjectionNode: rg, MeasureLayout: nP },
        }),
        (nu = (t, e) =>
          rZ(t)
            ? new sp(e)
            : new sc(e, { allowProjection: t !== nd.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            var e, i;
            let {
              preloadedFeatures: n,
              createVisualElement: r,
              useRender: s,
              useVisualState: o,
              Component: a,
            } = t;
            function l(t, e) {
              var i;
              let n;
              let l = {
                  ...(0, nd.useContext)(rV),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, nd.useContext)(np).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: u } = l,
                h = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (rj(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || im(e) ? e : void 0,
                        animate: im(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, nd.useContext)(rD));
                  return (0, nd.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [rL(e), rL(i)]
                  );
                })(t),
                d = o(t, u);
              if (!u && rF) {
                (0, nd.useContext)(rk).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = rB;
                  if (!e && !i) return {};
                  let n = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? n.MeasureLayout
                        : void 0,
                    ProjectionNode: n.ProjectionNode,
                  };
                })(l);
                (n = t.MeasureLayout),
                  (h.visualElement = (function (t, e, i, n, r) {
                    var s, o;
                    let { visualElement: a } = (0, nd.useContext)(rD),
                      l = (0, nd.useContext)(rk),
                      u = (0, nd.useContext)(nc),
                      h = (0, nd.useContext)(rV).reducedMotion,
                      d = (0, nd.useRef)(null);
                    (n = n || l.renderer),
                      !d.current &&
                        n &&
                        (d.current = n(t, {
                          visualState: e,
                          parent: a,
                          props: i,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: h,
                        }));
                    let c = d.current,
                      p = (0, nd.useContext)(nm);
                    c &&
                      !c.projection &&
                      r &&
                      ("html" === c.type || "svg" === c.type) &&
                      (function (t, e, i, n) {
                        let {
                          layoutId: r,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: r,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && iB(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: n,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(d.current, i, r, p);
                    let m = (0, nd.useRef)(!1);
                    (0, nd.useInsertionEffect)(() => {
                      c && m.current && c.update(i, u);
                    });
                    let f = i[tl],
                      v = (0, nd.useRef)(
                        !!f &&
                          !(null === (s = window.MotionHandoffIsComplete) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, f)) &&
                          (null === (o = window.MotionHasOptimisedAnimation) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, f))
                      );
                    return (
                      r_(() => {
                        c &&
                          ((m.current = !0),
                          (window.MotionIsMounted = !0),
                          c.updateFeatures(),
                          nx.render(c.render),
                          v.current &&
                            c.animationState &&
                            c.animationState.animateChanges());
                      }),
                      (0, nd.useEffect)(() => {
                        c &&
                          (!v.current &&
                            c.animationState &&
                            c.animationState.animateChanges(),
                          v.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ===
                                (t = window.MotionHandoffMarkAsComplete) ||
                                void 0 === t ||
                                t.call(window, f);
                            }),
                            (v.current = !1)));
                      }),
                      c
                    );
                  })(a, d, l, r, t.ProjectionNode));
              }
              return (0, nh.jsxs)(rD.Provider, {
                value: h,
                children: [
                  n && h.visualElement
                    ? (0, nh.jsx)(n, { visualElement: h.visualElement, ...l })
                    : null,
                  s(
                    a,
                    t,
                    ((i = h.visualElement),
                    (0, nd.useCallback)(
                      (t) => {
                        t && d.onMount && d.onMount(t),
                          i && (t ? i.mount(t) : i.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : iB(e) && (e.current = t));
                      },
                      [i]
                    )),
                    d,
                    u,
                    h.visualElement
                  ),
                ],
              });
            }
            n &&
              (function (t) {
                for (let e in t) rB[e] = { ...rB[e], ...t[e] };
              })(n),
              (l.displayName = "motion.".concat(
                "string" == typeof a
                  ? a
                  : "create(".concat(
                      null !==
                        (i =
                          null !== (e = a.displayName) && void 0 !== e
                            ? e
                            : a.name) && void 0 !== i
                        ? i
                        : "",
                      ")"
                    )
              ));
            let u = (0, nd.forwardRef)(l);
            return (u[rI] = a), u;
          })({
            ...(rZ(t) ? sn : r4),
            preloadedFeatures: nl,
            useRender: (function (t = !1) {
              return (e, i, n, { latestValues: r }, s) => {
                let o = (
                    rZ(e)
                      ? function (t, e, i, n) {
                          let r = (0, nd.useMemo)(() => {
                            let i = r2();
                            return (
                              r1(i, e, r5(n), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            rq(e, t.style, t), (r.style = { ...e, ...r.style });
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i = {},
                            n = (function (t, e) {
                              let i = t.style || {},
                                n = {};
                              return (
                                rq(n, i, t),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, nd.useMemo)(() => {
                                      let i = rH();
                                      return (
                                        rW(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = n),
                            i
                          );
                        }
                  )(i, r, s, e),
                  a = (function (t, e, i) {
                    let n = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (rX(r) ||
                          (!0 === i && rK(r)) ||
                          (!e && !rK(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (n[r] = t[r]);
                    return n;
                  })(i, "string" == typeof e, t),
                  l = e !== nd.Fragment ? { ...a, ...o, ref: n } : {},
                  { children: u } = i,
                  h = (0, nd.useMemo)(() => (ts(u) ? u.get() : u), [u]);
                return (0, nd.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: nu,
            Component: t,
          });
        })
      );
    },
    4057: (t, e, i) => {
      i.d(e, { A: () => l });
      var n = i(2115);
      let r = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        s = function () {
          for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          return e
            .filter((t, e, i) => !!t && "" !== t.trim() && i.indexOf(t) === e)
            .join(" ")
            .trim();
        };
      var o = {
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
      let a = (0, n.forwardRef)((t, e) => {
          let {
            color: i = "currentColor",
            size: r = 24,
            strokeWidth: a = 2,
            absoluteStrokeWidth: l,
            className: u = "",
            children: h,
            iconNode: d,
            ...c
          } = t;
          return (0, n.createElement)(
            "svg",
            {
              ref: e,
              ...o,
              width: r,
              height: r,
              stroke: i,
              strokeWidth: l ? (24 * Number(a)) / Number(r) : a,
              className: s("lucide", u),
              ...c,
            },
            [
              ...d.map((t) => {
                let [e, i] = t;
                return (0, n.createElement)(e, i);
              }),
              ...(Array.isArray(h) ? h : [h]),
            ]
          );
        }),
        l = (t, e) => {
          let i = (0, n.forwardRef)((i, o) => {
            let { className: l, ...u } = i;
            return (0, n.createElement)(a, {
              ref: o,
              iconNode: e,
              className: s("lucide-".concat(r(t)), l),
              ...u,
            });
          });
          return (i.displayName = "".concat(t)), i;
        };
    },
    1680: (t, e, i) => {
      i.d(e, { A: () => n });
      let n = (0, i(4057).A)("CircleAlert", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
        ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
      ]);
    },
    3261: (t, e, i) => {
      i.d(e, { A: () => n });
      let n = (0, i(4057).A)("CircleCheckBig", [
        ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
        ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
      ]);
    },
    4676: (t, e, i) => {
      i.d(e, { A: () => n });
      let n = (0, i(4057).A)("Cloud", [
        [
          "path",
          {
            d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",
            key: "p7xjir",
          },
        ],
      ]);
    },
    2582: (t, e, i) => {
      i.d(e, { A: () => n });
      let n = (0, i(4057).A)("Code", [
        ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
        ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
      ]);
    },
    319: (t, e, i) => {
      i.d(e, { A: () => n });
      let n = (0, i(4057).A)("Download", [
        [
          "path",
          { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" },
        ],
        ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
        ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
      ]);
    },
    3408: (t, e, i) => {
      i.d(e, { A: () => n });
      let n = (0, i(4057).A)("Github", [
        [
          "path",
          {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef",
          },
        ],
        ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
      ]);
    },
    2345: (t, e, i) => {
      i.d(e, { A: () => n });
      let n = (0, i(4057).A)("Linkedin", [
        [
          "path",
          {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f",
          },
        ],
        ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
        ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
      ]);
    },
    2783: (t, e, i) => {
      i.d(e, { A: () => n });
      let n = (0, i(4057).A)("LoaderCircle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
    },
    5548: (t, e, i) => {
      i.d(e, { A: () => n });
      let n = (0, i(4057).A)("Mail", [
        [
          "rect",
          { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
        ],
        [
          "path",
          { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
        ],
      ]);
    },
    8482: (t, e, i) => {
      i.d(e, { A: () => n });
      let n = (0, i(4057).A)("Moon", [
        ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
      ]);
    },
    6535: (t, e, i) => {
      i.d(e, { A: () => n });
      let n = (0, i(4057).A)("Sun", [
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
    2215: (t, e, i) => {
      i.d(e, { A: () => n });
      let n = (0, i(4057).A)("Terminal", [
        ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
        ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
      ]);
    },
    502: (t, e, i) => {
      i.d(e, { A: () => n });
      let n = (0, i(4057).A)("Wrench", [
        [
          "path",
          {
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
            key: "cbrjhi",
          },
        ],
      ]);
    },
    7113: (t, e, i) => {
      i.d(e, { D: () => h, N: () => d });
      var n = i(2115),
        r = (t, e, i, n, r, s, o, a) => {
          let l = document.documentElement,
            u = ["light", "dark"];
          function h(e) {
            (Array.isArray(t) ? t : [t]).forEach((t) => {
              let i = "class" === t,
                n = i && s ? r.map((t) => s[t] || t) : r;
              i
                ? (l.classList.remove(...n), l.classList.add(e))
                : l.setAttribute(t, e);
            }),
              a && u.includes(e) && (l.style.colorScheme = e);
          }
          if (n) h(n);
          else
            try {
              let t = localStorage.getItem(e) || i,
                n =
                  o && "system" === t
                    ? window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? "dark"
                      : "light"
                    : t;
              h(n);
            } catch (t) {}
        },
        s = ["light", "dark"],
        o = "(prefers-color-scheme: dark)",
        a = "undefined" == typeof window,
        l = n.createContext(void 0),
        u = { setTheme: (t) => {}, themes: [] },
        h = () => {
          var t;
          return null != (t = n.useContext(l)) ? t : u;
        },
        d = (t) =>
          n.useContext(l)
            ? n.createElement(n.Fragment, null, t.children)
            : n.createElement(p, { ...t }),
        c = ["light", "dark"],
        p = (t) => {
          let {
              forcedTheme: e,
              disableTransitionOnChange: i = !1,
              enableSystem: r = !0,
              enableColorScheme: a = !0,
              storageKey: u = "theme",
              themes: h = c,
              defaultTheme: d = r ? "system" : "light",
              attribute: p = "data-theme",
              value: y,
              children: x,
              nonce: w,
              scriptProps: b,
            } = t,
            [P, S] = n.useState(() => f(u, d)),
            [T, A] = n.useState(() => f(u)),
            M = y ? Object.values(y) : h,
            E = n.useCallback(
              (t) => {
                let e = t;
                if (!e) return;
                "system" === t && r && (e = g());
                let n = y ? y[e] : e,
                  o = i ? v(w) : null,
                  l = document.documentElement,
                  u = (t) => {
                    "class" === t
                      ? (l.classList.remove(...M), n && l.classList.add(n))
                      : t.startsWith("data-") &&
                        (n ? l.setAttribute(t, n) : l.removeAttribute(t));
                  };
                if ((Array.isArray(p) ? p.forEach(u) : u(p), a)) {
                  let t = s.includes(d) ? d : null,
                    i = s.includes(e) ? e : t;
                  l.style.colorScheme = i;
                }
                null == o || o();
              },
              [w]
            ),
            C = n.useCallback(
              (t) => {
                let e = "function" == typeof t ? t(P) : t;
                S(e);
                try {
                  localStorage.setItem(u, e);
                } catch (t) {}
              },
              [P]
            ),
            k = n.useCallback(
              (t) => {
                A(g(t)), "system" === P && r && !e && E("system");
              },
              [P, e]
            );
          n.useEffect(() => {
            let t = window.matchMedia(o);
            return t.addListener(k), k(t), () => t.removeListener(k);
          }, [k]),
            n.useEffect(() => {
              let t = (t) => {
                t.key === u && (t.newValue ? S(t.newValue) : C(d));
              };
              return (
                window.addEventListener("storage", t),
                () => window.removeEventListener("storage", t)
              );
            }, [C]),
            n.useEffect(() => {
              E(null != e ? e : P);
            }, [e, P]);
          let V = n.useMemo(
            () => ({
              theme: P,
              setTheme: C,
              forcedTheme: e,
              resolvedTheme: "system" === P ? T : P,
              themes: r ? [...h, "system"] : h,
              systemTheme: r ? T : void 0,
            }),
            [P, C, e, T, r, h]
          );
          return n.createElement(
            l.Provider,
            { value: V },
            n.createElement(m, {
              forcedTheme: e,
              storageKey: u,
              attribute: p,
              enableSystem: r,
              enableColorScheme: a,
              defaultTheme: d,
              value: y,
              themes: h,
              nonce: w,
              scriptProps: b,
            }),
            x
          );
        },
        m = n.memo((t) => {
          let {
              forcedTheme: e,
              storageKey: i,
              attribute: s,
              enableSystem: o,
              enableColorScheme: a,
              defaultTheme: l,
              value: u,
              themes: h,
              nonce: d,
              scriptProps: c,
            } = t,
            p = JSON.stringify([s, i, l, e, h, u, o, a]).slice(1, -1);
          return n.createElement("script", {
            ...c,
            suppressHydrationWarning: !0,
            nonce: "undefined" == typeof window ? d : "",
            dangerouslySetInnerHTML: {
              __html: "(".concat(r.toString(), ")(").concat(p, ")"),
            },
          });
        }),
        f = (t, e) => {
          let i;
          if (!a) {
            try {
              i = localStorage.getItem(t) || void 0;
            } catch (t) {}
            return i || e;
          }
        },
        v = (t) => {
          let e = document.createElement("style");
          return (
            t && e.setAttribute("nonce", t),
            e.appendChild(
              document.createTextNode(
                "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
              )
            ),
            document.head.appendChild(e),
            () => {
              window.getComputedStyle(document.body),
                setTimeout(() => {
                  document.head.removeChild(e);
                }, 1);
            }
          );
        },
        g = (t) => (
          t || (t = window.matchMedia(o)), t.matches ? "dark" : "light"
        );
    },
  },
]);

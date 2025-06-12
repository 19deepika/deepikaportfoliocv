(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [39],
  {
    4735: (e, r, s) => {
      Promise.resolve().then(s.bind(s, 6310));
    },
    6310: (e, r, s) => {
      "use strict";
      s.r(r), s.d(r, { default: () => n });
      var t = s(5155);
      function n(e) {
        let { error: r, reset: s } = e;
        return (0, t.jsxs)("div", {
          className:
            "flex flex-col items-center justify-center min-h-screen p-4",
          children: [
            (0, t.jsx)("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Something went wrong!",
            }),
            (0, t.jsx)("p", {
              className: "text-foreground/60 mb-4",
              children: r.message || "An unexpected error occurred",
            }),
            r.digest &&
              (0, t.jsxs)("p", {
                className: "text-sm text-foreground/40 mb-4",
                children: ["Error ID: ", r.digest],
              }),
            (0, t.jsx)("button", {
              onClick: () => s(),
              className:
                "px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90",
              children: "Try again",
            }),
          ],
        });
      }
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    e.O(0, [441, 517, 358], () => r(4735)), (_N_E = e.O());
  },
]);

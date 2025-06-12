(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    1788: (e, i, t) => {
      Promise.resolve().then(t.bind(t, 1550));
    },
    1550: (e, i, t) => {
      "use strict";
      t.d(i, { default: () => v });
      var a = t(5155),
        r = t(2115),
        o = t(8209),
        n = t(7113),
        s = t(5565),
        l = t(2215),
        d = t(2582),
        c = t(4676),
        m = t(502),
        p = t(319),
        x = t(6535),
        u = t(8482),
        h = t(3408),
        g = t(2345),
        y = t(5548),
        f = t(3261),
        b = t(1680),
        w = t(2783);
      let v = () => {
        let [e, i] = (0, r.useState)("hero"),
          [t, v] = (0, r.useState)(!1),
          { theme: j, setTheme: N } = (0, n.D)(),
          [k, P] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          P(!0);
        }, []);
        let [I, A] = (0, r.useState)({ name: "", email: "", message: "" }),
          [L, S] = (0, r.useState)("idle"),
          C = () => {
            N("dark" === j ? "light" : "dark");
          };
        (0, r.useEffect)(() => {
          let e = () => {
            let e = [
                "hero",
                "about",
                "experience",
                "skills",
                "projects",
                "contact",
              ],
              t = e.map((e) => document.getElementById(e)),
              a = 0.5 * window.innerHeight,
              r = "hero";
            for (let i = t.length - 1; i >= 0; i--) {
              let o = t[i];
              if (o) {
                let t = o.getBoundingClientRect();
                if (t.top <= a && t.bottom >= 64) {
                  r = e[i];
                  break;
                }
              }
            }
            window.scrollY < 100
              ? (r = "hero")
              : window.innerHeight + window.scrollY >=
                  document.body.offsetHeight - 150 && (r = "contact"),
              i(r);
          };
          return (
            window.addEventListener("scroll", e, { passive: !0 }),
            e(),
            () => window.removeEventListener("scroll", e)
          );
        }, []);
        let O = [
          {
              category: "Frontend",
              icon: (0, a.jsx)(l.A, { size: 24 }),
              skills: [
                "React",
                "HTML",
                "CSS",
                " JavaScript"
              ],
            },
            {
              category: "Backend",
              icon: (0, a.jsx)(d.A, { size: 24 }),
              skills: [
                " Node.js",
                "Express",
              ],
            },
            {
              category: "Databases",
              icon: (0, a.jsx)(c.A, { size: 24 }),
              skills: [ "MongoDB"],
            },
            {
  category: "Cloud & Tools",
  icon: (0, a.jsx)(m.A, { size: 24 }),
  skills: ["Azure", "Vercel", "Render", "Netlify","Heroku",  "GitHub", "Postman"],
}

          ],  
          V = (e) => {
            let i = document.getElementById(e);
            if (i) {
              let e = i.getBoundingClientRect().top + window.pageYOffset - 64;
              window.scrollTo({ top: e, behavior: "smooth" });
            }
            t && v(!1);
          },
          z = (e) => {
            let { name: i, value: t } = e.target;
            A((e) => ({ ...e, [i]: t })),
              ("success" === L || "error" === L) && S("idle");
          },
          H = async (e) => {
            if (
              (e.preventDefault(),
              S("submitting"),
              !I.name || !I.email || !I.message)
            ) {
              console.error("Form validation failed: Missing fields"),
                S("error"),
                setTimeout(() => S("idle"), 5e3);
              return;
            }
            if (!/\S+@\S+\.\S+/.test(I.email)) {
              console.error("Form validation failed: Invalid email"),
                S("error"),
                setTimeout(() => S("idle"), 5e3);
              return;
            }
            try {
              let e = await fetch("https://formspree.io/f/mkgjaono", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify(I),
              });
              if (e.ok)
                S("success"),
                  A({ name: "", email: "", message: "" }),
                  setTimeout(() => S("idle"), 5e3);
              else {
                let i = await e.json();
                console.error("Formspree submission error:", i),
                  S("error"),
                  setTimeout(() => S("idle"), 7e3);
              }
            } catch (e) {
              console.error("Network or submission error:", e),
                S("error"),
                setTimeout(() => S("idle"), 7e3);
            }
          };
        return (0, a.jsxs)("div", {
          className:
            "min-h-screen font-sans text-foreground bg-background antialiased relative",
          children: [
            (0, a.jsxs)("div", {
              className:
                "fixed inset-0 w-full h-full z-[-1] overflow-hidden pointer-events-none",
              children: [
                (0, a.jsx)(o.P.div, {
                  className:
                    "absolute top-[-20%] right-[-5%] w-[80%] h-[80%] rounded-full bg-primary/10 filter blur-[60px]",
                  animate: {
                    x: [0, -10, 0],
                    y: [0, -15, 0],
                    opacity: [0.3, 0.4, 0.3],
                  },
                  transition: {
                    duration: 15,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                  },
                }),
                (0, a.jsx)(o.P.div, {
                  className:
                    "absolute bottom-[-10%] left-[-5%] w-[70%] h-[70%] rounded-full bg-accent/10 filter blur-[80px]",
                  animate: {
                    x: [0, 15, 0],
                    y: [0, 10, 0],
                    opacity: [0.2, 0.3, 0.2],
                  },
                  transition: {
                    duration: 18,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 2,
                  },
                }),
              ],
            }),
            (0, a.jsxs)("header", {
              className:
                "fixed top-0 w-full z-50 backdrop-blur-md bg-background/70 border-b border-foreground/10",
              children: [
                (0, a.jsxs)("nav", {
                  className:
                    "container mx-auto px-6 py-4 flex justify-between items-center",
                  children: [
                    (0, a.jsxs)(o.P.div, {
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 0.5 },
                      className: "flex items-center gap-2 cursor-pointer",
                      onClick: () =>
                        window.scrollTo({ top: 0, behavior: "smooth" }),
                      children: [
                        (0, a.jsx)(o.P.div, {
                          whileHover: { scale: 1.1, rotate: 10 },
                          className:
                            "w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg",
                          children: "GS",
                        }),
                        (0, a.jsxs)("span", {
                          className:
                            "text-xl font-bold hidden sm:block text-foreground",
                          children: [" ", "Deepika Gaba"],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "hidden md:flex items-center gap-8",
                      children: [
                        [
                          { label: "Home", id: "hero" },
                          { label: "About", id: "about" },
                          { label: "Experience", id: "experience" },
                          { label: "Skills", id: "skills" },
                          { label: "Contact", id: "contact" },
                        ].map((i, t) =>
                          (0, a.jsxs)(
                            o.P.a,
                            {
                              href: "#".concat(i.id),
                              onClick: (e) => {
                                e.preventDefault(), V(i.id);
                              },
                              className:
                                "relative transition-colors duration-200 hover:text-primary ".concat(
                                  e === i.id
                                    ? "text-primary font-medium"
                                    : "text-foreground/70"
                                ),
                              initial: { opacity: 0, y: -10 },
                              animate: { opacity: 1, y: 0 },
                              transition: { duration: 0.3, delay: 0.1 * t },
                              whileHover: { scale: 1.05 },
                              children: [
                                i.label,
                                e === i.id &&
                                  (0, a.jsx)(o.P.span, {
                                    className:
                                      "absolute bottom-[-5px] left-0 w-full h-[2px] bg-primary",
                                    layoutId: "activeSection",
                                    transition: {
                                      type: "spring",
                                      stiffness: 300,
                                      damping: 25,
                                    },
                                  }),
                              ],
                            },
                            i.id
                          )
                        ),
                        (0, a.jsxs)(o.P.a, {
                          href: "https://drive.google.com/uc?export=download&id=1OYBD8r-lN81qLX9KZLXY9ziImia0EoCH",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium",
                          whileHover: {
                            scale: 1.05,
                            boxShadow:
                              "0 4px 12px rgba(var(--color-primary-rgb), 0.3)",
                          },
                          initial: { opacity: 0, y: -10 },
                          animate: { opacity: 1, y: 0 },
                          transition: { duration: 0.3, delay: 0.6 },
                          children: [
                            (0, a.jsx)(p.A, { size: 16 }),
                            (0, a.jsx)("span", { children: "CV" }),
                          ],
                        }),
                        (0, a.jsx)(o.P.button, {
                          onClick: C,
                          className:
                            "w-10 h-10 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-foreground/10 transition-colors",
                          whileHover: { scale: 1.1 },
                          whileTap: { scale: 0.9 },
                          initial: { opacity: 0, y: -10 },
                          animate: { opacity: 1, y: 0 },
                          transition: { duration: 0.3, delay: 0.7 },
                          "aria-label": "Toggle theme",
                          children:
                            k &&
                            ("dark" === j
                              ? (0, a.jsx)(x.A, { size: 20 })
                              : (0, a.jsx)(u.A, { size: 20 })),
                        }),
                      ],
                    }),
                    (0, a.jsx)(o.P.button, {
                      className: "md:hidden text-foreground p-2 z-10",
                      onClick: () => v(!t),
                      whileTap: { scale: 0.9 },
                      "aria-label": "Toggle menu",
                      animate: t ? "open" : "closed",
                      children: (0, a.jsxs)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                          (0, a.jsx)(o.P.path, {
                            variants: {
                              closed: { d: "M 3 6 L 21 6" },
                              open: { d: "M 5 18 L 19 6" },
                            },
                            transition: { duration: 0.3 },
                            strokeLinecap: "round",
                          }),
                          (0, a.jsx)(o.P.path, {
                            d: "M 3 12 L 21 12",
                            variants: {
                              closed: { opacity: 1 },
                              open: { opacity: 0 },
                            },
                            transition: { duration: 0.1 },
                            strokeLinecap: "round",
                          }),
                          (0, a.jsx)(o.P.path, {
                            variants: {
                              closed: { d: "M 3 18 L 21 18" },
                              open: { d: "M 5 6 L 19 18" },
                            },
                            transition: { duration: 0.3 },
                            strokeLinecap: "round",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(o.P.div, {
                  initial: !1,
                  animate: t ? "open" : "closed",
                  variants: {
                    open: {
                      opacity: 1,
                      height: "auto",
                      transition: { duration: 0.3, ease: "easeInOut" },
                    },
                    closed: {
                      opacity: 0,
                      height: 0,
                      transition: { duration: 0.3, ease: "easeInOut" },
                    },
                  },
                  className:
                    "md:hidden bg-background/95 backdrop-blur-md border-t border-foreground/10 overflow-hidden",
                  children: (0, a.jsxs)("div", {
                    className:
                      "container mx-auto px-6 py-4 flex flex-col gap-4",
                    children: [
                      [
                        { label: "Home", id: "hero" },
                        { label: "About", id: "about" },
                        { label: "Experience", id: "experience" },
                        { label: "Skills", id: "skills" },
                        { label: "Contact", id: "contact" },
                      ].map((i) =>
                        (0, a.jsx)(
                          o.P.a,
                          {
                            href: "#".concat(i.id),
                            className: "text-lg py-1 ".concat(
                              e === i.id
                                ? "text-primary font-semibold"
                                : "text-foreground/80 hover:text-primary"
                            ),
                            onClick: (e) => {
                              e.preventDefault(), V(i.id);
                            },
                            whileTap: { scale: 0.95 },
                            children: i.label,
                          },
                          i.id
                        )
                      ),
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center justify-between pt-4 border-t border-foreground/10 mt-2",
                        children: [
                          (0, a.jsxs)(o.P.a, {
                            href: "https://drive.google.com/uc?export=download&id=1OYBD8r-lN81qLX9KZLXY9ziImia0EoCH",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "flex items-center gap-2 w-fit px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium",
                            whileTap: { scale: 0.95 },
                            children: [
                              (0, a.jsx)(p.A, { size: 16 }),
                              (0, a.jsx)("span", { children: "Download CV" }),
                            ],
                          }),
                          (0, a.jsx)(o.P.button, {
                            onClick: C,
                            className:
                              "w-10 h-10 rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-foreground/10 transition-colors",
                            whileHover: { scale: 1.1 },
                            whileTap: { scale: 0.9 },
                            "aria-label": "Toggle theme",
                            children:
                              k &&
                              ("dark" === j
                                ? (0, a.jsx)(x.A, { size: 20 })
                                : (0, a.jsx)(u.A, { size: 20 })),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, a.jsx)("section", {
              id: "hero",
              className:
                "min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden",
              children: (0, a.jsx)("div", {
                className: "container mx-auto px-6 py-8",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row items-center gap-10 md:gap-16",
                  children: [
                    (0, a.jsxs)(o.P.div, {
                      className:
                        "flex-1 md:order-1 w-full text-center md:text-left",
                      initial: { opacity: 0, x: -50 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 0.7, ease: "easeOut" },
                      children: [
                        (0, a.jsxs)(o.P.h1, {
                          className:
                            "text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight text-foreground",
                          initial: { opacity: 0, y: 30 },
                          animate: { opacity: 1, y: 0 },
                          transition: {
                            delay: 0.2,
                            duration: 0.6,
                            ease: "easeOut",
                          },
                          children: [
                            (0, a.jsx)("span", { children: "Hi, I'm " }),
                            (0, a.jsx)("span", {
                              className: "text-primary",
                              children: "Deepika Gaba",
                            }),
                          ],
                        }),
                        (0, a.jsxs)(o.P.div, {
                          className:
                            "relative inline-flex items-center justify-center px-5 py-2 mb-6 bg-primary/10 backdrop-blur-sm text-primary font-semibold rounded-full border border-primary/30 shadow-sm",
                          initial: { opacity: 0, scale: 0.8 },
                          animate: { opacity: 1, scale: 1 },
                          transition: {
                            delay: 0.4,
                            duration: 0.5,
                            type: "spring",
                            stiffness: 150,
                          },
                          whileHover: {
                            scale: 1.03,
                            boxShadow:
                              "0 0 15px rgba(var(--color-primary-rgb), 0.2)",
                            transition: { duration: 0.2 },
                          },
                          children: [
                            (0, a.jsx)("span", {
                              className: "mr-2 text-lg",
                              children: "⚡",
                            }),
                            "Lead Web Developer",
                          ],
                        }),
                        (0, a.jsx)(o.P.p, {
                          className:
                            "text-base sm:text-lg text-foreground/70 mb-8 max-w-xl mx-auto md:mx-0",
                          initial: { opacity: 0, y: 30 },
                          animate: { opacity: 1, y: 0 },
                          transition: {
                            delay: 0.5,
                            duration: 0.6,
                            ease: "easeOut",
                          },
                          children:
                            "Lead Web DeveloperResult-oriented Full Stack Developer with 1.5+ years of experience in building scalable enterprise applications using React, Node.js, Express and MongoDb. Proficient in developing end-to-end solutions, integrating modern frontend frameworks with robust backend systems and APIs. ",
                        }),
                        (0, a.jsx)(o.P.div, {
                          className:
                            "flex flex-wrap justify-center md:justify-start gap-4 mt-8",
                          initial: { opacity: 0, y: 30 },
                          animate: { opacity: 1, y: 0 },
                          transition: {
                            delay: 0.6,
                            duration: 0.6,
                            ease: "easeOut",
                          },
                          children: (0, a.jsx)(o.P.a, {
                            href: "#contact",
                            onClick: (e) => {
                              e.preventDefault(), V("contact");
                            },
                            className:
                              "px-6 py-3 bg-primary text-primary-foreground rounded-full flex items-center gap-2 font-medium shadow-lg shadow-primary/30",
                            whileHover: {
                              scale: 1.05,
                              boxShadow:
                                "0 8px 20px -5px rgba(var(--color-primary-rgb), 0.4)",
                            },
                            whileTap: { scale: 0.95 },
                            children: "Get in touch",
                          }),
                        }),
                        (0, a.jsx)(o.P.div, {
                          className:
                            "flex justify-center md:justify-start gap-5 mt-10",
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          transition: { delay: 0.8, duration: 0.6 },
                          children: [
                            {
                              icon: (0, a.jsx)(h.A, { size: 22 }),
                              url: "https://github.com/19deepika",
                            },
                            {
                              icon: (0, a.jsx)(g.A, { size: 22 }),
                              url: "https://www.linkedin.com/in/deepikagaba",
                            },
                            {
                              icon: (0, a.jsx)(y.A, { size: 22 }),
                              url: "mailto:deepikagaba609@gmail.com",
                            },
                          ].map((e, i) =>
                            (0, a.jsx)(
                              o.P.a,
                              {
                                href: e.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "w-11 h-11 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200",
                                whileHover: { scale: 1.15, rotate: 5 },
                                transition: {
                                  type: "spring",
                                  stiffness: 400,
                                  damping: 15,
                                },
                                children: e.icon,
                              },
                              i
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, a.jsx)(o.P.div, {
                      className:
                        "flex-1 flex justify-center md:order-2 mt-10 md:mt-0",
                      initial: { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1 },
                      transition: {
                        duration: 0.7,
                        delay: 0.3,
                        ease: "easeOut",
                      },
                      children: (0, a.jsxs)(o.P.div, {
                        className: "relative group",
                        animate: { y: [0, -8, 0] },
                        transition: {
                          duration: 4,
                          repeat: 1 / 0,
                          ease: "easeInOut",
                        },
                        children: [
                          (0, a.jsx)(o.P.div, {
                            className:
                              "w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 p-1 shadow-xl shadow-primary/10",
                            whileHover: {
                              scale: 1.03,
                              borderColor:
                                "rgba(var(--color-primary-rgb), 0.5)",
                            },
                            transition: { duration: 0.3 },
                            children: (0, a.jsx)("div", {
                              className:
                                "w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10",
                              children: (0, a.jsx)(s.default, {
                                src:"/deepika.jpg",
                                alt: "Deepika Gaba",
                                width: 320,
                                height: 320,
                                className:
                                  "w-full h-full object-cover object-center",
                                priority: !0,
                              }),
                            }),
                          }),
                          [
                            { 
                              skill: "Node.js",
                              top: "-15px",
                              left: "45%",
                              delay: 0.8,
                            },
                            {
                              skill: "Express",
                              top: "25%",
                              right: "-5px",
                              delay: 0.9,
                            },
                            {
                              skill: " MongoDB",
                              bottom: "25%",
                              right: "-15px",
                              delay: 1,
                            },
                            {
                              skill: "React",
                              bottom: "-15px",
                              left: "45%",
                              delay: 1.1,
                            },
                            {
                              skill: "CSS",
                              top: "25%",
                              left: "-15px",
                              delay: 1.2,
                            },
                            {
                              skill: "Vercel",
                              bottom: "25%",
                              left: "-10px",
                              delay: 1.3,
                            },
                          ].map((e) =>
                            (0, a.jsx)(
                              o.P.div,
                              {
                                className:
                                  "absolute bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-full px-3 py-1 text-xs sm:text-sm font-medium shadow-md text-foreground/80 group-hover:scale-110 transition-transform duration-200",
                                style: {
                                  top: e.top || "auto",
                                  left: e.left || "auto",
                                  right: e.right || "auto",
                                  bottom: e.bottom || "auto",
                                  transform: "translateX("
                                    .concat(
                                      "45%" === e.left ? "-50%" : "0",
                                      ") translateY("
                                    )
                                    .concat(
                                      "-15px" === e.top || "-15px" === e.bottom
                                        ? "-50%"
                                        : "0",
                                      ")"
                                    ),
                                  zIndex: 10,
                                },
                                initial: { opacity: 0, scale: 0 },
                                animate: { opacity: 1, scale: 1 },
                                transition: {
                                  type: "spring",
                                  stiffness: 200,
                                  damping: 15,
                                  delay: e.delay,
                                },
                                children: e.skill,
                              },
                              e.skill
                            )
                          ),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
            (0, a.jsx)("section", {
              id: "about",
              className: "pt-24 pb-20",
              children: (0, a.jsxs)("div", {
                className: "container mx-auto px-6",
                children: [
                  (0, a.jsxs)(o.P.div, {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: { duration: 0.5 },
                    viewport: { once: !0, amount: 0.2 },
                    className: "max-w-3xl mx-auto text-center mb-16",
                    children: [
                      (0, a.jsx)(o.P.h2, {
                        className:
                          "text-3xl md:text-4xl font-bold mb-4 text-foreground",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, ease: "easeOut" },
                        viewport: { once: !0 },
                        children: "About Me",
                      }),
                      (0, a.jsx)(o.P.div, {
                        className: "w-20 h-1 bg-primary mx-auto mb-6",
                        initial: { width: 0 },
                        whileInView: { width: 80 },
                        transition: { duration: 0.5, ease: "easeOut" },
                        viewport: { once: !0 },
                      }),
                      (0, a.jsx)(o.P.p, {
                        className: "text-lg text-foreground/70",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: {
                          delay: 0.2,
                          duration: 0.5,
                          ease: "easeOut",
                        },
                        viewport: { once: !0 },
                        children:
                          "Driving innovation through scalable full-stack web applications.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col md:flex-row gap-12 items-start",
                    children: [
                      (0, a.jsxs)(o.P.div, {
                        className:
                          "flex-1 prose prose-lg max-w-none dark:prose-invert prose-p:text-foreground/80 prose-headings:text-foreground",
                        initial: { opacity: 0, x: -50 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { duration: 0.7, ease: "easeOut" },
                        viewport: { once: !0, amount: 0.2 },
                        children: [
                          (0, a.jsx)("p", {
                            children:
                              "Lead Web DeveloperResult-oriented Full Stack Developer with 1.5+ years of experience in building scalable enterprise applications using React, Node.js, Express and MongoDB. Proficient in developing end-to-end solutions, integrating modern frontend frameworks with robust backend systems and APIs.",
                          }),
                          (0, a.jsx)("p", {
                            children:
                              "Proven track record of rapidly advancing from intern to team lead, delivering innovative solutions across healthcare, legal, and real estate sectors. Passionate about bridging full stack development with practical business applications through efficient development practices.",
                          }),
                          (0, a.jsx)(o.P.div, {
                            className: "mt-10 grid grid-cols-2 gap-6",
                            initial: "hidden",
                            whileInView: "visible",
                            variants: {
                              hidden: { opacity: 0 },
                              visible: {
                                opacity: 1,
                                transition: {
                                  staggerChildren: 0.2,
                                  delayChildren: 0.3,
                                },
                              },
                            },
                            viewport: { once: !0 },
                            children: [
                              { value: "1.5+", label: "Years of experience" },
                              { value: "10+", label: "Projects completed" },
                              { value: "5", label: "Industry sectors" },
                              { value: "5+", label: "Key Technologies" },
                            ].map((e) =>
                              (0, a.jsxs)(
                                o.P.div,
                                {
                                  className:
                                    "flex flex-col items-center text-center md:items-start md:text-left",
                                  variants: {
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                  },
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "text-4xl font-bold text-primary",
                                      children: e.value,
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "text-foreground/60 mt-1 text-sm",
                                      children: e.label,
                                    }),
                                  ],
                                },
                                e.label
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsx)(o.P.div, {
                        className: "flex-1 w-full",
                        initial: { opacity: 0, x: 50 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: {
                          duration: 0.7,
                          delay: 0.1,
                          ease: "easeOut",
                        },
                        viewport: { once: !0, amount: 0.2 },
                        children: (0, a.jsxs)("div", {
                          className:
                            "relative rounded-xl overflow-hidden border border-foreground/10 p-8 bg-background/50 backdrop-blur-md shadow-lg",
                          children: [
                            (0, a.jsx)("h3", {
                              className:
                                "text-2xl font-bold mb-6 text-foreground",
                              children: "Areas of Expertise",
                            }),
                            (0, a.jsx)("ul", {
                              className: "space-y-3",
                              children: [
                                "Full Stack Web Development",
                                "React.js & Angular Frontend Engineering",
                                "Node.js & Express API Integration",
                                " MongoDB",
                                "Full-stack project architecture and deployment",
                                "Deployment on Vercel, Netlify, Render, or Heroku",
                              ].map((e, i) =>
                                (0, a.jsxs)(
                                  o.P.li,
                                  {
                                    className: "flex items-center gap-3",
                                    initial: { opacity: 0, x: 20 },
                                    whileInView: { opacity: 1, x: 0 },
                                    transition: {
                                      delay: 0.1 * i,
                                      duration: 0.4,
                                      ease: "easeOut",
                                    },
                                    viewport: { once: !0 },
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "text-primary flex-shrink-0",
                                        children: (0, a.jsx)("svg", {
                                          width: "16",
                                          height: "16",
                                          viewBox: "0 0 16 16",
                                          fill: "none",
                                          children: (0, a.jsx)("path", {
                                            d: "M13.5 4.5L6.5 11.5L3 8",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                          }),
                                        }),
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "text-foreground/90",
                                        children: e,
                                      }),
                                    ],
                                  },
                                  i
                                )
                              ),
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-primary/5 blur-3xl pointer-events-none",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "absolute -top-10 -left-10 w-36 h-36 rounded-full bg-accent/5 blur-3xl pointer-events-none",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)("section", {
              id: "experience",
              className: "py-20 bg-foreground/5",
              children: (0, a.jsxs)("div", {
                className: "container mx-auto px-6",
                children: [
                  (0, a.jsxs)(o.P.div, {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: { duration: 0.5 },
                    viewport: { once: !0, amount: 0.2 },
                    className: "max-w-3xl mx-auto text-center mb-16",
                    children: [
                      (0, a.jsx)(o.P.h2, {
                        className:
                          "text-3xl md:text-4xl font-bold mb-4 text-foreground",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, ease: "easeOut" },
                        viewport: { once: !0 },
                        children: "Work Experience",
                      }),
                      (0, a.jsx)(o.P.div, {
                        className: "w-20 h-1 bg-primary mx-auto mb-6",
                        initial: { width: 0 },
                        whileInView: { width: 80 },
                        transition: { duration: 0.5, ease: "easeOut" },
                        viewport: { once: !0 },
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "max-w-3xl mx-auto relative",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "absolute left-3 top-2 bottom-6 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent -z-10",
                      }),
                      [
                        {
                          role: "Full Stack Developer",
                          company: "Softflix IT Solutions",
                          period: "Feb 2024 - Present",
                          location: "Mohali",
                          responsibilities: [
                            "Designed and developed scalable web applications using the MERN stack",
    "Implemented secure RESTful APIs with Node.js and Express.js",
    "Built reusable UI components and dynamic forms using React.js",
    "Integrated MongoDB for data storage, aggregation, and performance tuning",
    "Led deployment of full-stack projects on Vercel and Heroku",
    "Collaborated with UI/UX designers to enhance frontend usability and performance",
                          ],
                        },
                        {
                          role: "Full Stack Developer(Intern)",
                          company: "Bright World Infotech Solutions",
                          period: "June 2023- Jan 2024",
                          location: "Mohali",
                          responsibilities: [
                          "Assisted in developing React.js-based dashboards and frontend modules",
    "Created and tested Express.js APIs for CRUD operations",
    "Worked with MongoDB to design schemas and manage application data",
    "Debugged and improved existing Node.js backend services",
    "Learned and applied best practices for full-stack integration and Git workflows",
                          ],
                        },
                      
                      ].map((e, i) =>
                        (0, a.jsxs)(
                          o.P.div,
                          {
                            className: "relative pl-12 pb-10 mb-6",
                            initial: { opacity: 0, y: 50 },
                            whileInView: { opacity: 1, y: 0 },
                            transition: {
                              duration: 0.6,
                              delay: 0.15 * i,
                              ease: "easeOut",
                            },
                            viewport: { once: !0, amount: 0.1 },
                            children: [
                              (0, a.jsx)(o.P.div, {
                                className:
                                  "absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center shadow",
                                whileInView: { scale: [0.5, 1.1, 1] },
                                transition: {
                                  duration: 0.4,
                                  ease: "backOut",
                                  delay: 0.15 * i + 0.2,
                                },
                                viewport: { once: !0 },
                                children: (0, a.jsx)("div", {
                                  className: "w-2 h-2 rounded-full bg-primary",
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className:
                                      "text-xl font-semibold text-foreground",
                                    children: e.role,
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "text-sm text-foreground/60 mt-1 sm:mt-0",
                                    children: e.period,
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "mb-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground/60",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      (0, a.jsxs)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                          " ",
                                          (0, a.jsx)("path", {
                                            d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z",
                                          }),
                                          " ",
                                          (0, a.jsx)("circle", {
                                            cx: "12",
                                            cy: "10",
                                            r: "3",
                                          }),
                                          " ",
                                        ],
                                      }),
                                      (0, a.jsxs)("span", {
                                        children: [
                                          " ",
                                          e.company,
                                          ", ",
                                          e.location,
                                          " ",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex items-center gap-1",
                                    children: [
                                      (0, a.jsxs)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                          " ",
                                          (0, a.jsx)("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "10",
                                          }),
                                          " ",
                                          (0, a.jsx)("polyline", {
                                            points: "12 6 12 12 16 14",
                                          }),
                                          " ",
                                        ],
                                      }),
                                      (0, a.jsx)("span", {
                                        children: e.period,
                                      }),
                                      " ",
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsx)("ul", {
                                className: "space-y-2 text-foreground/80",
                                children: e.responsibilities.map((e, t) =>
                                  (0, a.jsxs)(
                                    o.P.li,
                                    {
                                      className: "flex items-start gap-2",
                                      initial: { opacity: 0, x: 20 },
                                      whileInView: { opacity: 1, x: 0 },
                                      transition: {
                                        delay: 0.15 * i + 0.3 + 0.05 * t,
                                        duration: 0.4,
                                        ease: "easeOut",
                                      },
                                      viewport: { once: !0 },
                                      children: [
                                        (0, a.jsx)("span", {
                                          className:
                                            "text-primary mt-1 flex-shrink-0",
                                          children: "•",
                                        }),
                                        (0, a.jsx)("span", { children: e }),
                                      ],
                                    },
                                    t
                                  )
                                ),
                              }),
                            ],
                          },
                          i
                        )
                      ),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)("section", {
              id: "skills",
              className: "py-20",
              children: (0, a.jsxs)("div", {
                className: "container mx-auto px-6",
                children: [
                  (0, a.jsxs)(o.P.div, {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: { duration: 0.5 },
                    viewport: { once: !0, amount: 0.2 },
                    className: "max-w-3xl mx-auto text-center mb-16",
                    children: [
                      (0, a.jsx)(o.P.h2, {
                        className:
                          "text-3xl md:text-4xl font-bold mb-4 text-foreground",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, ease: "easeOut" },
                        viewport: { once: !0 },
                        children: "Skills & Technologies",
                      }),
                      (0, a.jsx)(o.P.div, {
                        className: "w-20 h-1 bg-primary mx-auto mb-6",
                        initial: { width: 0 },
                        whileInView: { width: 80 },
                        transition: { duration: 0.5, ease: "easeOut" },
                        viewport: { once: !0 },
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: O.map((e, i) =>
                      (0, a.jsxs)(
                        o.P.div,
                        {
                          className:
                            "border border-foreground/10 rounded-xl p-6 bg-foreground/5 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 group",
                          initial: { opacity: 0, y: 50, scale: 0.95 },
                          whileInView: { opacity: 1, y: 0, scale: 1 },
                          transition: {
                            duration: 0.5,
                            delay: 0.1 * i,
                            ease: "easeOut",
                          },
                          viewport: { once: !0, amount: 0.2 },
                          whileHover: {
                            y: -6,
                            boxShadow:
                              "0 12px 25px -10px rgba(var(--color-primary-rgb), 0.15)",
                            borderColor: "rgba(var(--color-primary-rgb), 0.3)",
                          },
                          children: [
                            (0, a.jsxs)("div", {
                              className: "flex items-center gap-4 mb-5",
                              children: [
                                (0, a.jsx)(o.P.div, {
                                  className:
                                    "w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground",
                                  whileHover: { rotate: 8, scale: 1.1 },
                                  children: e.icon,
                                }),
                                (0, a.jsx)("h3", {
                                  className:
                                    "text-xl font-semibold text-foreground",
                                  children: e.category,
                                }),
                              ],
                            }),
                            (0, a.jsx)("ul", {
                              className: "space-y-2.5",
                              children: e.skills.map((e, t) =>
                                (0, a.jsxs)(
                                  o.P.li,
                                  {
                                    className: "flex items-center gap-2.5",
                                    initial: { opacity: 0, x: -15 },
                                    whileInView: { opacity: 1, x: 0 },
                                    transition: {
                                      delay: 0.1 * i + 0.2 + 0.05 * t,
                                      duration: 0.4,
                                      ease: "easeOut",
                                    },
                                    viewport: { once: !0 },
                                    children: [
                                      (0, a.jsx)("span", {
                                        className:
                                          "w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0",
                                      }),
                                      (0, a.jsx)("span", {
                                        className: "text-sm text-foreground/80",
                                        children: e,
                                      }),
                                    ],
                                  },
                                  t
                                )
                              ),
                            }),
                          ],
                        },
                        i
                      )
                    ),
                  }),
                  (0, a.jsxs)(o.P.div, {
                    className: "mt-20 max-w-3xl mx-auto",
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: { duration: 0.5, delay: 0.4 },
                    viewport: { once: !0, amount: 0.2 },
                    children: [
                      (0, a.jsx)("h3", {
                        className:
                          "text-xl font-semibold mb-8 text-center text-foreground",
                        children: "Proficiency Levels ",
                      }),
                      (0, a.jsx)("div", {
                        className: "space-y-5",
                        children: [
                          { skill: "MongoDB & Database Management ", level: 95 },
                          { skill: "React.js Development", level: 90 },
                          { skill: "Full-Stack Application Development", level: 85 },
                          { skill: "Node.js Integration ", level: 90 },
                          { skill: "REST API & DB Management", level: 90 },
                        ].map((e, i) =>
                          (0, a.jsxs)(
                            "div",
                            {
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "flex justify-between text-sm mb-1.5",
                                  children: [
                                    (0, a.jsx)("span", {
                                      className:
                                        "font-medium text-foreground/90",
                                      children: e.skill,
                                    }),
                                    (0, a.jsxs)("span", {
                                      className: "text-foreground/60",
                                      children: [e.level, "%"],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "h-2.5 w-full bg-foreground/10 rounded-full overflow-hidden",
                                  children: (0, a.jsx)(o.P.div, {
                                    className:
                                      "h-full bg-gradient-to-r from-primary to-accent",
                                    initial: { width: 0 },
                                    whileInView: {
                                      width: "".concat(e.level, "%"),
                                    },
                                    transition: {
                                      duration: 1.2,
                                      delay: 0.5 + 0.15 * i,
                                      ease: [0.25, 1, 0.5, 1],
                                    },
                                    viewport: { once: !0 },
                                  }),
                                }),
                              ],
                            },
                            i
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)("section", {
              id: "contact",
              className: "py-20",
              children: (0, a.jsxs)("div", {
                className: "container mx-auto px-6",
                children: [
                  (0, a.jsxs)(o.P.div, {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: { duration: 0.5 },
                    viewport: { once: !0, amount: 0.2 },
                    className: "max-w-3xl mx-auto text-center mb-16",
                    children: [
                      (0, a.jsx)(o.P.h2, {
                        className:
                          "text-3xl md:text-4xl font-bold mb-4 text-foreground",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, ease: "easeOut" },
                        viewport: { once: !0 },
                        children: "Get In Touch",
                      }),
                      (0, a.jsx)(o.P.div, {
                        className: "w-20 h-1 bg-primary mx-auto mb-6",
                        initial: { width: 0 },
                        whileInView: { width: 80 },
                        transition: { duration: 0.5, ease: "easeOut" },
                        viewport: { once: !0 },
                      }),
                      (0, a.jsx)(o.P.p, {
                        className:
                          "text-lg text-foreground/70 max-w-xl mx-auto",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: {
                          delay: 0.2,
                          duration: 0.5,
                          ease: "easeOut",
                        },
                        viewport: { once: !0 },
                        children:
                          "Looking to collaborate on AI/ML projects or discuss opportunities? Feel free to reach out! ",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-stretch",
                    children: [
                      (0, a.jsxs)(o.P.div, {
                        initial: { opacity: 0, x: -50 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { duration: 0.6, ease: "easeOut" },
                        viewport: { once: !0, amount: 0.2 },
                        className:
                          "bg-foreground/5 border border-foreground/10 rounded-xl p-8 backdrop-blur-sm h-full flex flex-col",
                        children: [
                          (0, a.jsx)("h3", {
                            className:
                              "text-2xl font-semibold mb-6 text-foreground",
                            children: "Contact Information",
                          }),
                          (0, a.jsx)("div", {
                            className: "space-y-6 flex-grow",
                            children: [
                              {
                                icon: (0, a.jsx)(y.A, { size: 24 }),
                                label: "Email",
                                value: "deepikagaba609@gmail.com",
                                displayValue: "deepikagaba609@gmail.com",
                                link: "mailto:deepikagaba609@gmail.com",
                              },
                              {
                                icon: (0, a.jsxs)("svg", {
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  children: [
                                    " ",
                                    (0, a.jsx)("path", {
                                      d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
                                    }),
                                    " ",
                                  ],
                                }),
                                label: "Phone",
                                value: "+91 7888548428",
                                displayValue: "Click to reveal",
                                link: "tel:+917888548428",
                              },
                             {
  icon: (0, a.jsx)(g.A, { size: 24 }),
  label: "LinkedIn",
  value: "Connect on LinkedIn",
  displayValue: "Connect on LinkedIn",
  link: "https://www.linkedin.com/in/deepikagaba",  
},
                              {
                                icon: (0, a.jsx)(h.A, { size: 24 }),
                                label: "GitHub",
                                value: "19deepika",
                                displayValue: "View GitHub Profile",
                                link: "https://github.com/19deepika",
                              },
                            ].map((e, i) =>
                              (0, a.jsxs)(
                                o.P.a,
                                {
                                  href: e.link,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "flex items-start gap-4 group",
                                  initial: { opacity: 0, y: 20 },
                                  whileInView: { opacity: 1, y: 0 },
                                  transition: {
                                    duration: 0.4,
                                    delay: 0.1 * i + 0.1,
                                    ease: "easeOut",
                                  },
                                  viewport: { once: !0 },
                                  whileHover: { x: 5 },
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200",
                                      children: e.icon,
                                    }),
                                    (0, a.jsxs)("div", {
                                      children: [
                                        (0, a.jsx)("h4", {
                                          className:
                                            "text-foreground/60 text-sm",
                                          children: e.label,
                                        }),
                                        (0, a.jsx)("p", {
                                          className:
                                            "font-medium text-foreground group-hover:text-primary transition-colors duration-200",
                                          children: e.displayValue,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                i
                              )
                            ),
                          }),
                          (0, a.jsx)(o.P.div, {
                            className: "mt-auto pt-8",
                            initial: { opacity: 0 },
                            whileInView: { opacity: 1 },
                            transition: {
                              duration: 0.5,
                              delay: 0.6,
                              ease: "easeOut",
                            },
                            viewport: { once: !0 },
                            children: (0, a.jsxs)(o.P.a, {
                              href: "https://drive.google.com/uc?export=download&id=1OYBD8r-lN81qLX9KZLXY9ziImia0EoCH",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "flex items-center justify-center gap-2 w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors",
                              whileHover: {
                                scale: 1.03,
                                boxShadow:
                                  "0 8px 20px -5px rgba(var(--color-primary-rgb), 0.4)",
                              },
                              whileTap: { scale: 0.98 },
                              children: [
                                (0, a.jsx)(p.A, { size: 18 }),
                                (0, a.jsx)("span", { children: "Download CV" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)(o.P.div, {
                        initial: { opacity: 0, x: 50 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: {
                          duration: 0.6,
                          delay: 0.1,
                          ease: "easeOut",
                        },
                        viewport: { once: !0, amount: 0.2 },
                        className: "h-full",
                        children: (0, a.jsxs)("div", {
                          className:
                            "bg-foreground/5 border border-foreground/10 rounded-xl p-8 h-full backdrop-blur-sm shadow-lg flex flex-col",
                          children: [
                            (0, a.jsx)("h3", {
                              className:
                                "text-2xl font-semibold mb-6 text-foreground",
                              children: "Send a Message",
                            }),
                            "success" === L &&
                              (0, a.jsxs)(o.P.div, {
                                initial: { opacity: 0, y: -10 },
                                animate: { opacity: 1, y: 0 },
                                className:
                                  "mb-4 p-3 rounded-md bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-600/50 text-green-700 dark:text-green-300 text-sm flex items-center gap-2",
                                children: [
                                  (0, a.jsx)(f.A, { size: 18 }),
                                  " Message sent successfully!",
                                ],
                              }),
                            "error" === L &&
                              (0, a.jsxs)(o.P.div, {
                                initial: { opacity: 0, y: -10 },
                                animate: { opacity: 1, y: 0 },
                                className:
                                  "mb-4 p-3 rounded-md bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-600/50 text-red-700 dark:text-red-300 text-sm flex items-center gap-2",
                                children: [
                                  (0, a.jsx)(b.A, { size: 18 }),
                                  " Oops! Something went wrong. Please try again or use the contact info.",
                                ],
                              }),
                            (0, a.jsxs)("form", {
                              onSubmit: H,
                              className: "space-y-5 flex-grow flex flex-col",
                              children: [
                                (0, a.jsxs)(o.P.div, {
                                  initial: { opacity: 0, y: 15 },
                                  whileInView: { opacity: 1, y: 0 },
                                  transition: {
                                    duration: 0.4,
                                    delay: 0.1,
                                    ease: "easeOut",
                                  },
                                  viewport: { once: !0 },
                                  children: [
                                    (0, a.jsx)("label", {
                                      htmlFor: "name",
                                      className:
                                        "block text-sm font-medium mb-1 text-foreground/80",
                                      children: "Name",
                                    }),
                                    (0, a.jsx)("input", {
                                      type: "text",
                                      id: "name",
                                      name: "name",
                                      value: I.name,
                                      onChange: z,
                                      required: !0,
                                      className:
                                        "w-full px-4 py-2.5 rounded-lg border border-foreground/20 bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200",
                                      placeholder: "Your Name",
                                      disabled: "submitting" === L,
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)(o.P.div, {
                                  initial: { opacity: 0, y: 15 },
                                  whileInView: { opacity: 1, y: 0 },
                                  transition: {
                                    duration: 0.4,
                                    delay: 0.2,
                                    ease: "easeOut",
                                  },
                                  viewport: { once: !0 },
                                  children: [
                                    (0, a.jsx)("label", {
                                      htmlFor: "email",
                                      className:
                                        "block text-sm font-medium mb-1 text-foreground/80",
                                      children: "Email",
                                    }),
                                    (0, a.jsx)("input", {
                                      type: "email",
                                      id: "email",
                                      name: "email",
                                      value: I.email,
                                      onChange: z,
                                      required: !0,
                                      className:
                                        "w-full px-4 py-2.5 rounded-lg border border-foreground/20 bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200",
                                      placeholder: "Your Email Address",
                                      disabled: "submitting" === L,
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)(o.P.div, {
                                  initial: { opacity: 0, y: 15 },
                                  whileInView: { opacity: 1, y: 0 },
                                  transition: {
                                    duration: 0.4,
                                    delay: 0.3,
                                    ease: "easeOut",
                                  },
                                  viewport: { once: !0 },
                                  className: "flex-grow",
                                  children: [
                                    (0, a.jsx)("label", {
                                      htmlFor: "message",
                                      className:
                                        "block text-sm font-medium mb-1 text-foreground/80",
                                      children: "Message",
                                    }),
                                    (0, a.jsx)("textarea", {
                                      id: "message",
                                      name: "message",
                                      value: I.message,
                                      onChange: z,
                                      required: !0,
                                      rows: 5,
                                      className:
                                        "w-full px-4 py-2.5 rounded-lg border border-foreground/20 bg-background/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary h-full min-h-[160px] resize-none transition-colors duration-200",
                                      placeholder: "Your message",
                                      disabled: "submitting" === L,
                                    }),
                                  ],
                                }),
                                (0, a.jsx)(o.P.button, {
                                  type: "submit",
                                  disabled: "submitting" === L,
                                  className:
                                    "w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-auto",
                                  initial: { opacity: 0, y: 20 },
                                  whileInView: { opacity: 1, y: 0 },
                                  transition: {
                                    duration: 0.4,
                                    delay: 0.4,
                                    ease: "easeOut",
                                  },
                                  viewport: { once: !0 },
                                  whileHover: {
                                    scale: "submitting" !== L ? 1.03 : 1,
                                    boxShadow:
                                      "submitting" !== L
                                        ? "0 8px 20px -5px rgba(var(--color-primary-rgb), 0.4)"
                                        : "none",
                                  },
                                  whileTap: {
                                    scale: "submitting" !== L ? 0.98 : 1,
                                  },
                                  children:
                                    "submitting" === L
                                      ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                            " ",
                                            (0, a.jsx)(w.A, {
                                              size: 18,
                                              className: "animate-spin",
                                            }),
                                            " ",
                                            "Sending...",
                                            " ",
                                          ],
                                        })
                                      : "Send Message",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)("footer", {
              className: "py-8 border-t border-foreground/10 mt-10",
              children: (0, a.jsx)("div", {
                className: "container mx-auto px-6",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex flex-col sm:flex-row justify-between items-center gap-4",
                  children: [
                    (0, a.jsx)(o.P.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 0.5 },
                      children: (0, a.jsxs)("p", {
                        className:
                          "text-sm text-foreground/60 text-center sm:text-left",
                        children: [
                          "\xa9 ",
                          new Date().getFullYear(),
                          " Deepika Gaba. All rights reserved.",
                        ],
                      }),
                    }),
                    (0, a.jsx)(o.P.div, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 0.5, delay: 0.2 },
                      className: "flex gap-5",
                      children: [
                        {
                          icon: (0, a.jsx)(h.A, { size: 18 }),
                          url: "https://github.com/19deepika",
                          label: "GitHub",
                        },
                        {
                          icon: (0, a.jsx)(g.A, { size: 18 }),
                          url: "https://www.linkedin.com/in/deepikagaba",
                          label: "LinkedIn",
                        },
                        {
                          icon: (0, a.jsx)(y.A, { size: 18 }),
                          url: "mailto:deepikagaba609@gmail.com",
                          label: "Email",
                        },
                      ].map((e) =>
                        (0, a.jsx)(
                          o.P.a,
                          {
                            href: e.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": e.label,
                            className:
                              "w-9 h-9 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200",
                            whileHover: { scale: 1.15, rotate: 5 },
                            whileTap: { scale: 0.95 },
                            children: e.icon,
                          },
                          e.label
                        )
                      ),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      };
    },
  },
  (e) => {
    var i = (i) => e((e.s = i));
    e.O(0, [698, 441, 517, 358], () => i(1788)), (_N_E = e.O());
  },
]);

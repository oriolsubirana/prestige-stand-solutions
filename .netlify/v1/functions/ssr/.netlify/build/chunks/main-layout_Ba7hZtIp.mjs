import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderHead, d as renderComponent, f as renderSlot, b as createAstro } from './astro/server_Ghf5z1Ma.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function useMediaQuery(query) {
  const getMatches = (query2) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query2).matches;
    }
    return false;
  };
  const [matches, setMatches] = useState(getMatches(query));
  function handleChange() {
    setMatches(getMatches(query));
  }
  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }
    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);
  return matches;
}

const IconNavbar = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "28",
      height: "28",
      viewBox: "0 0 28 28",
      strokeWidth: "2",
      stroke: "#CDA274",
      fill: "none",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      children: [
        /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z" }),
        /* @__PURE__ */ jsx("path", { d: "M3 21v-13l9-4l9 4v13" }),
        /* @__PURE__ */ jsx("path", { d: "M13 13h4v8h-10v-6h6" }),
        /* @__PURE__ */ jsx("path", { d: "M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" })
      ]
    }
  );
};

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");
  const linkStyle = "text-xl leading-6 font-jost text-primary-200";
  const linkStyleLogo = "text-xl leading-6 font-jost text-primary-100 font-bold p-0.5";
  return /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] px-12 xl:px-0 m-auto w-full py-11 flex justify-between items-center", children: [
    /* @__PURE__ */ jsxs("nav", { className: "flex flex-row gap-2", children: [
      /* @__PURE__ */ jsx(IconNavbar, {}),
      /* @__PURE__ */ jsxs("a", { href: "/", className: linkStyleLogo, children: [
        " ",
        "Prestige Stand Solutions"
      ] })
    ] }),
    matches && /* @__PURE__ */ jsxs("nav", { className: "flex flex-row gap-6", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: linkStyle, children: "Home" }),
      /* @__PURE__ */ jsx("a", { href: "/about", className: linkStyle, children: "About Us" }),
      /* @__PURE__ */ jsx("a", { href: "/services", className: linkStyle, children: "Services" }),
      /* @__PURE__ */ jsx("a", { href: "/contact", className: linkStyle, children: "Contact Us" })
    ] }),
    !matches && /* @__PURE__ */ jsxs(
      "div",
      {
        onClick: () => setToggled(!toggled),
        className: "space-y-1 cursor-pointer",
        children: [
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: { rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 },
              className: "block h-0.5 w-8 bg-black"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: { width: toggled ? 0 : 24 },
              className: "block h-0.5 w-6 bg-black"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.span,
            {
              animate: {
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -8 : 0,
                width: toggled ? 32 : 16
              },
              className: "block h-0.5 w-4 bg-black"
            }
          )
        ]
      }
    ),
    toggled && !matches && /* @__PURE__ */ jsxs(
      motion.nav,
      {
        initial: { opacity: 0, x: 25 },
        animate: { opacity: 1, x: 0 },
        className: "flex flex-col fixed h-screen bg-white w-[75%] md:w-[90%] text-black bottom-0 left-0 gap-6 items-center justify-center",
        children: [
          /* @__PURE__ */ jsx("a", { href: "/", className: linkStyle, children: "Home" }),
          /* @__PURE__ */ jsx("a", { href: "/about", className: linkStyle, children: "About Us" }),
          /* @__PURE__ */ jsx("a", { href: "/services", className: linkStyle, children: "Services" }),
          /* @__PURE__ */ jsx("a", { href: "/contact", className: linkStyle, children: "Contact Us" })
        ]
      }
    )
  ] });
};

const linkStyleLogo = "text-xl leading-6 font-jost text-primary-100 font-bold p-0.5";
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "mt-[135px] w-full", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-6 md:grid-cols-2 gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-3 md:col-span-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex", children: [
        /* @__PURE__ */ jsx(IconNavbar, {}),
        /* @__PURE__ */ jsxs("a", { href: "/", className: linkStyleLogo, children: [
          "Prestige Stand Solutions",
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray pt-[18px] pb-[33px]", children: "Transforming Spaces, Captivating Audiences" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("h5", { className: "text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose", children: "Pages" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/about",
            className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray",
            children: "About Us"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/services",
            className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray",
            children: "Services"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/contact",
            className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray",
            children: "Contact Us"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "col-span-1 flex flex-col gap-4", children: [
      /* @__PURE__ */ jsx("h5", { className: "text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose", children: "Contact" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray", children: "contact@prestigestandsolutions.com" }),
        /* @__PURE__ */ jsx("p", { className: "tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray", children: "+34 645 559 047" })
      ] })
    ] })
  ] }) });
};

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="description" content="Prestige Stand Solutions"><meta${addAttribute(title, "title")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body> <main class="bg-main bg-no-repeat bg-cover bg-center"> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/oriolsubiranaperdiguer/workspace/prestige-stand-solutions/src/components/navbar.tsx", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} <!-- All different pages to be rendered here --> ${renderComponent($$result, "Footer", Footer, {})} </main> <p class="tracking-tight text-base text-center border border-gray-300 bg-white py-10 lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
Copyright © Prestige Stand Solutions
</p> </body></html>`;
}, "/Users/oriolsubiranaperdiguer/workspace/prestige-stand-solutions/src/layouts/main-layout.astro", void 0);

export { $$MainLayout as $ };

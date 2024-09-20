/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Ghf5z1Ma.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from '../chunks/main-layout_Ba7hZtIp.mjs';
import 'react/jsx-runtime';
import 'react';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Custom Stand Design",
      text: "Develop unique and eye-catching exhibition stand designs that reflect your brand\u2019s identity and objectives."
    },
    {
      title: "High-Quality Construction",
      text: "Use the finest materials and craftsmanship to construct durable and aesthetically pleasing exhibition stands."
    },
    {
      title: "Full-Service Management",
      text: "Handle all aspects of your exhibition stand project, from initial planning and logistics to on-site support and dismantling."
    },
    {
      title: "Interactive and Technological Integration",
      text: "Incorporate the latest interactive elements and cutting-edge technologies to enhance visitor engagement and showcase your innovations effectively."
    },
    {
      title: "Graphics and Branding Solutions",
      text: "Provide comprehensive graphic design and branding services to ensure your stand communicates your brand message clearly and attractively."
    },
    {
      title: "Post-Event Analysis and Feedback",
      text: "Provide comprehensive graphic design and branding services to ensure your stand communicates your brand message clearly and attractively."
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Prestige Stand Solutions Services", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="w-full h-[20vh] flex justify-center items-end" data-astro-cid-ucd2ps2b> <div class="py-[30px] lg:py-[41px] px-[60px] lg:px-[50px] flex flex-col justify-center items-center bg-white gap-2.5" data-astro-cid-ucd2ps2b> <h1 class="text-[30px] leading-[40px] lg:text-[50px] lg:leading-[62px] font-dm capitalize text-primary-200" data-astro-cid-ucd2ps2b>
Services
</h1> <p class="text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray" data-astro-cid-ucd2ps2b> <a href="/" data-astro-cid-ucd2ps2b>Home</a> / Services
</p> </div> </section>  <section class="lg:max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 lg:gap-y-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[50px] justify-between pb-12" data-astro-cid-ucd2ps2b> ${services.map((service) => {
    return renderTemplate`<div class="w-full col-span-1 max-w-[358px] mx-auto flex rounded-[30px] hover:bg-primary-300 px-5 py-[83px] flex-col justify-center text-center items-center gap-3 md:gap-5" data-astro-cid-ucd2ps2b> <h3 class="text-text-blue font-dm text-[22px] md:text-[25px] leading-loose" data-astro-cid-ucd2ps2b> ${service.title} </h3> <p class="text-base md:text-[22px] tracking-tight font-jost text-text-gray leading-[33px] text-center" data-astro-cid-ucd2ps2b> ${" "} ${service.text} </p> </div>`;
  })} </section> <div class="border border-gray-300" data-astro-cid-ucd2ps2b></div>  ` })} `;
}, "/Users/oriolsubiranaperdiguer/workspace/prestige-stand-solutions/src/pages/services.astro", void 0);

const $$file = "/Users/oriolsubiranaperdiguer/workspace/prestige-stand-solutions/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

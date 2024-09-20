/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Ghf5z1Ma.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from '../chunks/main-layout_Ba7hZtIp.mjs';
import { B as Button, A as ArrowSec } from '../chunks/button_BMEarwLR.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Custom Stand Design",
      text: "Unique and eye-catching designs that reflect your brand\u2019s identity."
    },
    {
      title: "High-Quality Construction",
      text: "Using the finest materials to ensure durability and aesthetics."
    },
    {
      title: "Innovative Solutions",
      text: "Incorporating the latest trends and technologies to enhance your presence."
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Prestige Stand Solutions", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="w-full lg:max-w-[1200px] mx-auto px-12 xl:px-0 flex flex-col-reverse justify-center items-center lg:grid grid-cols-2 gap-[75px] pt-[100px] lg:pt-[20px]" data-astro-cid-j7pv25f6> <div class="flex flex-col gap-8 max-w-[472px] items-center lg:items-start py-6" data-astro-cid-j7pv25f6> <h2 class="text-[30px] text-center capitalize lg:text-left font-dm tracking-wide leading-8 md:leading-[62.50px] md:text-[60px] text-text-blue" data-astro-cid-j7pv25f6>
Welcome to <p class="text-primary-100" data-astro-cid-j7pv25f6>
Prestige Stand Solutions
</p> </h2> <p class="text-base md:text-[22px] text-center lg:text-left tracking-tight font-jost text-text-gray leading-[33px]" data-astro-cid-j7pv25f6>
We specialize in designing and constructing bespoke exhibition
				stands that make a lasting impression.
</p> ${renderComponent($$result2, "Button", Button, { "text": "Contact us", "href": "/contact", "data-astro-cid-j7pv25f6": true })} </div> <div data-astro-cid-j7pv25f6> <img style="border-radius: 50px" src="/index.png" alt="" data-astro-cid-j7pv25f6> </div> </section>   <section class="w-full bg-primary-300 px-12 xl:px-0 mx-auto mt-[100px] lg:mt-[100px] py-[100px] flex flex-col gap-8 lg:gap-10 lg:flex-row px-12 xl:px-0 w-full mx-auto pt-[100px] lg:pt-[100px] justify-between" data-astro-cid-j7pv25f6> ${services.map((service) => {
    return renderTemplate`<div class="w-full max-w-[358px] mx-auto flex flex-col justify-center items-center gap-3 md:gap-5" data-astro-cid-j7pv25f6> <h3 class="text-text-blue font-dm text-[22px] md:text-[25px] leading-loose" data-astro-cid-j7pv25f6> ${service.title} </h3> <p class="text-base md:text-[22px] tracking-tight font-jost text-text-gray leading-[33px] text-center" data-astro-cid-j7pv25f6> ${" "} ${service.text} </p> <a href="/services" class="text-text-gray-200 leading-snug text-lg tracking-tight font-jost font-semibold gap-2 py-4 md:py-8 startCenter" data-astro-cid-j7pv25f6>
Read More ${renderComponent($$result2, "ArrowSec", ArrowSec, { "data-astro-cid-j7pv25f6": true })} </a> </div>`;
  })} </section>     ` })} `;
}, "/Users/oriolsubiranaperdiguer/workspace/prestige-stand-solutions/src/pages/index.astro", void 0);

const $$file = "/Users/oriolsubiranaperdiguer/workspace/prestige-stand-solutions/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

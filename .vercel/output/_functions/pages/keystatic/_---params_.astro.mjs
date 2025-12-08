import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_DomHIFY9.mjs';
import 'piccolore';
import 'react';
import { Keystatic } from '@keystatic/core/ui';
import { jsx } from 'react/jsx-runtime';
export { renderers } from '../../renderers.mjs';

const appSlug = {
  envName: "PUBLIC_KEYSTATIC_GITHUB_APP_SLUG",
  value: undefined                                                
};
function makePage(config) {
  return function Keystatic$1() {
    return /* @__PURE__ */ jsx(Keystatic, {
      config,
      appSlug
    });
  };
}

const $$Astro = createAstro("https://longngo.design");
const prerender = false;
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { params } = Astro2;
  return renderTemplate`${renderComponent($$result, "makePage.component", makePage.component, {})}`;
}, "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/pages/keystatic/[...params].astro", void 0);

const $$file = "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/pages/keystatic/[...params].astro";
const $$url = "/keystatic/[...params]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

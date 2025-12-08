import { m as makeHandler, c as config } from '../../../chunks/keystatic.config_Cbu-IYoy.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const ALL = makeHandler({
  config
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    ALL,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

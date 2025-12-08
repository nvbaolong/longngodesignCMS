import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DomHIFY9.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_DPg_szqq.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Dd7ceYub.mjs';
import { $ as $$Sidebar } from '../../chunks/Sidebar_BgqW7pam.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://longngo.design");
async function getStaticPaths() {
  const projectEntries = await getCollection("projects");
  return projectEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col lg:flex-row gap-6 h-full"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} <div class="flex-1 min-w-0"> <div class="glass-panel rounded-3xl p-8 h-full overflow-y-auto custom-scrollbar"> <article class="max-w-4xl mx-auto"> <div class="mb-8 border-b border-white/10 pb-8"> <span class="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-4"> ${entry.data.category} </span> <h1 class="text-4xl md:text-5xl font-bold mt-2 text-white font-display leading-tight">${entry.data.title}</h1> <p class="text-xl text-white/85 mt-4 leading-relaxed">${entry.data.description}</p> </div> <div class="prose prose-lg prose-invert max-w-none prose-img:rounded-2xl prose-headings:font-display prose-a:text-blue-400"> ${renderComponent($$result2, "Content", Content, {})} </div> </article> </div> </div> </div> ` })}`;
}, "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/pages/projects/[slug].astro", void 0);

const $$file = "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

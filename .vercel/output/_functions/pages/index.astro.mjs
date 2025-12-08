import { b as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_DomHIFY9.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dd7ceYub.mjs';
import 'clsx';
import fs from 'node:fs';
import path from 'node:path';
import { $ as $$Sidebar } from '../chunks/Sidebar_BgqW7pam.mjs';
import { g as getCollection } from '../chunks/_astro_content_DPg_szqq.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://longngo.design");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, description, slug, coverImage, category } = Astro2.props;
  const publicDir = path.join(process.cwd(), "public");
  const imagePath = coverImage ? path.join(publicDir, coverImage) : null;
  const imageExists = imagePath && fs.existsSync(imagePath);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/projects/${slug}`, "href")} class="group block w-full outline-none h-full"> <article class="relative w-full h-full aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/25 ring-1 ring-black/5 group-hover:ring-4 group-hover:ring-white/20"> <div class="w-full h-full relative overflow-hidden bg-gray-200"> ${imageExists ? renderTemplate`<img${addAttribute(coverImage, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105">` : renderTemplate`<div class="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500 flex-col gap-2 p-4 text-center"> <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg> <span class="text-xs font-medium">Image Not Found</span> </div>`} <!-- Vision Pro Style Overlay --> <div class="absolute inset-0 p-5 flex flex-col justify-start bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"> <h3 class="text-xl font-bold font-display text-white leading-tight drop-shadow-md transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"> ${title} </h3> </div> </div> </article> </a>`;
}, "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/components/ProjectCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allProjects = await getCollection("projects");
  const featuredProjects = allProjects.filter((p) => p.data.isFeatured);
  let recentProjects;
  if (featuredProjects.length > 0) {
    recentProjects = featuredProjects.slice(0, 8);
  } else {
    recentProjects = allProjects.slice(0, 8);
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Long Ngo | Product Designer", "description": "Portfolio c\u1EE7a Long Ngo - Product Designer chuy\xEAn gi\u1EA3i quy\u1EBFt c\xE1c v\u1EA5n \u0111\u1EC1 ph\u1EE9c t\u1EA1p b\u1EB1ng giao di\u1EC7n \u0111\u01A1n gi\u1EA3n." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col lg:flex-row gap-6 h-full"> <!-- Left Sidebar --> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} <!-- Right Content Area --> <div class="flex-1 min-w-0"> <div class="glass-panel rounded-3xl p-8 h-full flex flex-col"> <!-- Section Header --> <div class="flex justify-between items-start mb-8"> <div> <h2 class="text-2xl font-bold font-display text-white mb-2">Portfolio Highlights</h2> <p class="text-white/85 text-sm">A collection of my recent projects.</p> </div> <a href="/projects" class="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-medium transition-all flex items-center gap-2 group">
View All
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> <!-- Projects Grid --> <!-- Projects Grid (Vision Pro) --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-y-auto pr-2 custom-scrollbar flex-1 pb-4"> ${recentProjects.map((project) => renderTemplate`<div class="mb-6"> ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": project.data.title, "description": project.data.description, "category": project.data.category, "coverImage": project.data.coverImage, "slug": project.slug })} </div>`)} </div> </div> </div> </div> ` })}`;
}, "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/pages/index.astro", void 0);

const $$file = "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

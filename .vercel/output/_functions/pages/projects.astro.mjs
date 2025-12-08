import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_DomHIFY9.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dd7ceYub.mjs';
import { g as getCollection } from '../chunks/_astro_content_DPg_szqq.mjs';
import fs from 'node:fs';
import path from 'node:path';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allProjects = await getCollection("projects");
  const publicDir = path.join(process.cwd(), "public");
  const projectsWithImages = allProjects.map((project) => {
    const imgPath = project.data.coverImage ? path.join(publicDir, project.data.coverImage) : null;
    const exists = imgPath && fs.existsSync(imgPath);
    return {
      ...project,
      imageExists: exists
    };
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Works | Long Ngo", "description": "Selected works and case studies by Long Ngo.", "data-astro-cid-2hwget37": true }, { "default": async ($$result2) => renderTemplate`  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"> ${maybeRenderHead()}<div class="h-full flex flex-col justify-center items-center relative group w-full overflow-hidden" data-astro-cid-2hwget37> <!-- Navigation Buttons --> <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex justify-between px-4 md:px-12 pointer-events-none" data-astro-cid-2hwget37> <button id="swiper-prev" class="pointer-events-auto w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg group/btn" data-astro-cid-2hwget37> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover/btn:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-2hwget37> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-2hwget37></path> </svg> </button> <button id="swiper-next" class="pointer-events-auto w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg group/btn" data-astro-cid-2hwget37> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover/btn:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-2hwget37> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-2hwget37></path> </svg> </button> </div> <!-- Swiper Container --> <!-- Swiper Container --> <div class="swiper mySwiper w-full h-[85vh] py-12" data-astro-cid-2hwget37> <div class="swiper-wrapper" data-astro-cid-2hwget37> ${projectsWithImages.map((project) => renderTemplate`<div class="swiper-slide w-[160px] md:w-[240px] aspect-[4/5] transition-all duration-500" data-astro-cid-2hwget37> <!-- Main Card Link --> <a${addAttribute(`/projects/${project.slug}`, "href")} class="block w-full h-full relative group/card" data-astro-cid-2hwget37> <!-- Card Inner --> <div class="w-full h-full rounded-[20px] overflow-hidden shadow-2xl bg-gray-900 border border-white/10 relative z-10 transition-transform duration-500 group-hover/card:scale-[1.02]" data-astro-cid-2hwget37> ${project.imageExists ? renderTemplate`<img${addAttribute(project.data.coverImage, "src")}${addAttribute(project.data.title, "alt")} class="w-full h-full object-cover" data-astro-cid-2hwget37>` : renderTemplate`<div class="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-gray-500 gap-2 p-4 text-center" data-astro-cid-2hwget37> <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-2hwget37><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-astro-cid-2hwget37></rect><circle cx="8.5" cy="8.5" r="1.5" data-astro-cid-2hwget37></circle><polyline points="21 15 16 10 5 21" data-astro-cid-2hwget37></polyline></svg> <span class="text-[10px] font-medium" data-astro-cid-2hwget37>Image Not Found</span> </div>`} <!-- Shine Effect --> <div class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" data-astro-cid-2hwget37></div> </div> <!-- Reflection --> <div class="absolute top-[102%] left-0 right-0 h-[50%] bg-gradient-to-b from-white/30 to-transparent transform scale-y-[-1] opacity-40 blur-[2px] mask-image-gradient pointer-events-none" data-astro-cid-2hwget37> ${project.imageExists && renderTemplate`<img${addAttribute(project.data.coverImage, "src")} alt="" class="w-full h-full object-cover opacity-60" data-astro-cid-2hwget37>`} </div> </a> <!-- Floating Control Bar (Vision Pro Style) --> <div class="absolute -bottom-36 left-1/2 -translate-x-1/2 w-[280px] md:w-[320px] opacity-0 swiper-slide-active:opacity-100 transition-all duration-500 delay-150 z-30 translate-y-4 swiper-slide-active:translate-y-0 pointer-events-none swiper-slide-active:pointer-events-auto" data-astro-cid-2hwget37> <div class="glass-panel p-2 pl-3 rounded-[20px] flex items-center gap-3 shadow-2xl bg-black/60 backdrop-blur-2xl border border-white/15 ring-1 ring-white/5" data-astro-cid-2hwget37> <!-- Small Thumbnail --> <div class="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-white/10 flex relative bg-gray-800" data-astro-cid-2hwget37> ${project.imageExists ? renderTemplate`<img${addAttribute(project.data.coverImage, "src")}${addAttribute(project.data.title, "alt")} class="w-full h-full object-cover" data-astro-cid-2hwget37>` : renderTemplate`<div class="w-full h-full flex items-center justify-center text-gray-500" data-astro-cid-2hwget37> <span class="text-[8px]" data-astro-cid-2hwget37>N/A</span> </div>`} </div> <!-- Text Info --> <div class="flex-1 min-w-0 flex flex-col justify-center" data-astro-cid-2hwget37> <h3 class="text-xs font-bold text-white leading-tight truncate" data-astro-cid-2hwget37>${project.data.title}</h3> <p class="text-[10px] text-white/60 font-medium truncate pr-2" data-astro-cid-2hwget37>${project.data.description}</p> </div> <!-- View Detail Button --> <a${addAttribute(`/projects/${project.slug}`, "href")} class="shrink-0 px-4 py-2 rounded-[14px] bg-white text-black text-[10px] font-bold hover:bg-gray-200 transition-colors shadow-lg flex items-center gap-1.5" data-astro-cid-2hwget37>
View
</a> </div> </div> </div>`)} </div> </div> </div> ` })} ${renderScript($$result, "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/pages/projects/index.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/pages/projects/index.astro", void 0);

const $$file = "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

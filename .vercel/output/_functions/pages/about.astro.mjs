import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DomHIFY9.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Dd7ceYub.mjs';
import { $ as $$Sidebar } from '../chunks/Sidebar_BgqW7pam.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Long Ngo", "description": "V\u1EC1 t\xF4i - Long Ngo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col lg:flex-row gap-6 h-full"> ${renderComponent($$result2, "Sidebar", $$Sidebar, {})} <div class="flex-1 min-w-0"> <div class="glass-panel rounded-3xl p-8 h-full"> <section class="max-w-3xl mx-auto"> <h1 class="text-4xl font-bold mb-8 text-white font-display">About Me</h1> <div class="prose prose-lg prose-invert"> <p class="text-white/85">
Xin chào, tôi là Long Ngo. Tôi là một Product Designer với niềm đam mê tạo ra những trải nghiệm số trực quan và hiệu quả.
</p> <p class="text-white/85">
Với kinh nghiệm làm việc trên nhiều dự án phức tạp, tôi tin rằng thiết kế tốt không chỉ là về thẩm mỹ, mà còn là về việc giải quyết vấn đề và mang lại giá trị thực sự cho người dùng.
</p> <p class="text-white/85">
Hiện tại, tôi đang tập trung vào việc xây dựng các hệ thống design system và tối ưu hóa quy trình thiết kế sản phẩm.
</p> </div> </section> </div> </div> </div> ` })}`;
}, "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/pages/about.astro", void 0);

const $$file = "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_DomHIFY9.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_Bczzj1gj.mjs';
import { a as $$Icon } from './BaseLayout_Dd7ceYub.mjs';

const avatarImg = new Proxy({"src":"/_astro/avatar.DK2ls87k.png","width":2048,"height":2048,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/assets/profile/avatar.png";
							}
							
							return target[name];
						}
					});

const figmaIcon = new Proxy({"src":"/_astro/figma.D7456fKe.png","width":43,"height":64,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/assets/profile/figma.png";
							}
							
							return target[name];
						}
					});

const adobeIcon = new Proxy({"src":"/_astro/adobe.CQz8xF5S.png","width":86,"height":64,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/assets/profile/adobe.png";
							}
							
							return target[name];
						}
					});

const splineIcon = new Proxy({"src":"/_astro/spline.ClNam6Mf.png","width":64,"height":64,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/assets/profile/spline.png";
							}
							
							return target[name];
						}
					});

const vibeIcon = new Proxy({"src":"/_astro/vibecoding.BHh5Njrt.png","width":72,"height":64,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/assets/profile/vibecoding.png";
							}
							
							return target[name];
						}
					});

const htmlIcon = new Proxy({"src":"/_astro/html5.LT185cW9.png","width":64,"height":64,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/assets/profile/html5.png";
							}
							
							return target[name];
						}
					});

const blockchainIcon = new Proxy({"src":"/_astro/blockchain.BTFSY4I6.png","width":64,"height":64,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/assets/profile/blockchain.png";
							}
							
							return target[name];
						}
					});

const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const skills = [
    { name: "Figma", icon: figmaIcon, color: "bg-[#2C2C2C]" },
    { name: "Adobe Creative Cloud", icon: adobeIcon, color: "bg-[#2C2C2C]" },
    { name: "Spline 3D", icon: splineIcon, color: "bg-[#2C2C2C]" },
    { name: "Vibe Coding and AI", icon: vibeIcon, color: "bg-[#2C2C2C]" },
    { name: "HTML5 and CSS3", icon: htmlIcon, color: "bg-[#2C2C2C]" },
    { name: "Blockchain and Web3", icon: blockchainIcon, color: "bg-[#2C2C2C]" }
  ];
  const education = [
    { title: "Graduated IUH University", year: "2010", icon: "mdi:school" },
    { title: "Designer at Ananta Digital", year: "Now", icon: "mdi:briefcase" }
  ];
  return renderTemplate`${maybeRenderHead()}<aside class="w-full lg:w-[320px] shrink-0 flex flex-col gap-6 h-full"> <!-- Profile Card --> <div class="glass-panel rounded-3xl p-6 flex flex-col gap-6 h-full"> <div class="flex items-center gap-4"> <div class="w-16 h-16 shrink-0 relative rounded-[4px] overflow-hidden"> <!-- Video Avatar --> <video src="/assets/profile/avatar.mp4"${addAttribute(avatarImg.src, "poster")} autoplay loop muted playsinline class="w-full h-full object-cover pointer-events-none"></video> </div> <div> <h2 class="text-xl font-bold font-display text-white">Long Ngo</h2> <p class="text-sm text-white/85">UI/UX - Product Designer</p> </div> </div> <div class="bg-white/5 rounded-xl p-4 text-xs text-white/85 leading-relaxed border border-white/10">
Delivering user-centric design solutions across <strong class="text-white">Fintech, Edtech, Proptech, E-commerce, Agriculture, Manufacturing</strong>, and <strong class="text-white">AI</strong>. I bridge the gap between complex industry logic and intuitive user interfaces.
</div> <!-- Skills --> <div> <h3 class="text-sm font-semibold text-white mb-4">Skills</h3> <div class="grid grid-cols-3 gap-3"> ${skills.map((skill) => renderTemplate`<div class="flex flex-col items-center gap-2 group"> <div${addAttribute(`w-12 h-12 rounded-full ${skill.color} flex items-center justify-center p-2.5 transition-transform group-hover:scale-110 border border-white/10`, "class")}> ${renderComponent($$result, "Image", $$Image, { "src": skill.icon, "alt": skill.name, "class": "w-full h-full object-contain" })} </div> <span class="text-[10px] text-white/85 text-center leading-tight group-hover:text-white transition-colors">${skill.name}</span> </div>`)} </div> </div> <!-- Education & Career --> <div> <h3 class="text-sm font-semibold text-white mb-4">Education and Career</h3> <div class="flex flex-col gap-3"> ${education.map((item) => renderTemplate`<div class="flex items-center justify-between bg-white/5 rounded-xl p-3 border border-white/10 hover:bg-white/10 transition-colors"> <div class="flex items-center gap-3"> <span class="text-white/70"> ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "size": 20 })} </span> <span class="text-xs font-medium text-gray-200">${item.title}</span> </div> <span class="text-xs text-white/85 font-mono">${item.year}</span> </div>`)} </div> </div> <a href="https://www.longngo.design/_files/ugd/8cd274_4f93ee116a354298be11432d1adc6fb3.pdf" target="_blank" class="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-center text-sm font-semibold text-white transition-all flex items-center justify-center gap-2 group"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path> </svg>
View Full CV
</a> </div> </aside>`;
}, "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/components/Sidebar.astro", void 0);

export { $$Sidebar as $ };

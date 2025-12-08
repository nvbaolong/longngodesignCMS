import { c as createComponent, s as spreadAttributes, u as unescapeHTML, a as renderTemplate, b as createAstro, m as maybeRenderHead, r as renderComponent, e as addAttribute, F as Fragment, d as renderScript, i as renderHead, j as renderSlot } from './astro/server_DomHIFY9.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_Bczzj1gj.mjs';
import 'clsx';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                         */

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const logo = createSvgComponent({"meta":{"src":"/_astro/logo.CMO225-s.svg","width":55,"height":48,"format":"svg"},"attributes":{"width":"55","height":"48","viewBox":"0 0 55 48","fill":"none"},"children":"\n<path d=\"M48.9734 37.7843V23.808C48.4064 23.9222 47.8197 23.8958 47.2655 23.731C46.7114 23.5663 46.2072 23.2684 45.7981 22.864C45.3889 22.4596 45.0875 21.9613 44.9209 21.4136C44.7542 20.8659 44.7275 20.286 44.843 19.7256H30.7046C30.8202 20.286 30.7934 20.8659 30.6268 21.4136C30.4601 21.9613 30.1587 22.4596 29.7496 22.864C29.3404 23.2684 28.8362 23.5663 28.2821 23.731C27.728 23.8958 27.1412 23.9222 26.5742 23.808V37.7843C27.1412 37.6701 27.728 37.6965 28.2821 37.8613C28.8362 38.026 29.3404 38.3239 29.7496 38.7283C30.1587 39.1327 30.4601 39.631 30.6268 40.1787C30.7934 40.7263 30.8202 41.3063 30.7046 41.8667H44.8454\" stroke=\"#DCDCDC\" style=\"stroke:#DCDCDC;stroke:color(display-p3 0.8621 0.8621 0.8621);stroke-opacity:1;\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M30.7742 20.4182C30.7503 21.3201 30.3711 22.1771 29.7172 22.8067C29.0634 23.4362 28.1866 23.7885 27.2738 23.7885C26.361 23.7885 25.4843 23.4362 24.8305 22.8067C24.1766 22.1771 23.7973 21.3201 23.7734 20.4182C23.7765 19.5627 24.1002 18.7386 24.6818 18.105C25.2635 17.4714 26.0621 17.0732 26.9233 16.9872C27.7846 16.9013 28.6475 17.1337 29.3456 17.6396C30.0437 18.1455 30.5274 18.8891 30.7034 19.7268C30.7454 19.9474 30.7742 20.1834 30.7742 20.4182Z\" stroke=\"#DCDCDC\" style=\"stroke:#DCDCDC;stroke:color(display-p3 0.8621 0.8621 0.8621);stroke-opacity:1;\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M51.7742 20.4182C51.7742 21.3358 51.4054 22.2157 50.749 22.8646C50.0925 23.5134 49.2022 23.8779 48.2738 23.8779C47.3455 23.8779 46.4551 23.5134 45.7987 22.8646C45.1422 22.2157 44.7734 21.3358 44.7734 20.4182C44.7734 19.5006 45.1422 18.6206 45.7987 17.9718C46.4551 17.323 47.3455 16.9585 48.2738 16.9585C49.2022 16.9585 50.0925 17.323 50.749 17.9718C51.4054 18.6206 51.7742 19.5006 51.7742 20.4182Z\" stroke=\"#DCDCDC\" style=\"stroke:#DCDCDC;stroke:color(display-p3 0.8621 0.8621 0.8621);stroke-opacity:1;\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M30.7741 41.174C30.7827 41.6336 30.6986 42.0903 30.5266 42.5175C30.3545 42.9446 30.0981 43.3336 29.7723 43.6616C29.4465 43.9897 29.0577 44.2503 28.6288 44.4282C28.1999 44.6061 27.7395 44.6977 27.2743 44.6977C26.8092 44.6977 26.3487 44.6061 25.9198 44.4282C25.4909 44.2503 25.1022 43.9897 24.7764 43.6616C24.4505 43.3336 24.1941 42.9446 24.0221 42.5175C23.8501 42.0903 23.7659 41.6336 23.7745 41.174C23.7915 40.2676 24.1677 39.4041 24.8222 38.7691C25.4767 38.1341 26.3572 37.7783 27.2743 37.7783C28.1915 37.7783 29.072 38.1341 29.7265 38.7691C30.381 39.4041 30.7571 40.2676 30.7741 41.174Z\" stroke=\"#DCDCDC\" style=\"stroke:#DCDCDC;stroke:color(display-p3 0.8621 0.8621 0.8621);stroke-opacity:1;\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M32.9834 24.9702H36.545L41.6018 33.1397H41.6354V24.9702H44.2562V36.7263H40.829L35.6378 28.3576H35.6042V36.7263H32.9834V24.9702Z\" fill=\"white\" style=\"fill:white;fill-opacity:1;\" />\n<path d=\"M52.758 46.7329L53.91 45.586C54.3492 45.1496 54.3216 44.5577 53.8608 44.2624L52.8456 43.6255L50.7876 45.6726L51.4284 46.6831C51.702 47.1196 52.3476 47.1421 52.758 46.7329Z\" stroke=\"#DCDCDC\" style=\"stroke:#DCDCDC;stroke:color(display-p3 0.8621 0.8621 0.8621);stroke-opacity:1;\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M52.841 43.6197L52.9286 42.1324C52.979 41.2998 52.7222 41.008 51.9266 40.9179L48.7634 40.5443C48.0998 40.4672 47.6198 40.9452 47.6978 41.6046L48.0722 44.7524C48.1646 45.5447 48.4526 45.8317 49.2938 45.7487L50.789 45.6633\" stroke=\"#DCDCDC\" style=\"stroke:#DCDCDC;stroke:color(display-p3 0.8621 0.8621 0.8621);stroke-opacity:1;\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M48.1318 40.9819L49.2886 42.1324\" stroke=\"#DCDCDC\" style=\"stroke:#DCDCDC;stroke:color(display-p3 0.8621 0.8621 0.8621);stroke-opacity:1;\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M18.5256 2.50535L14.9736 0.75L11.4216 2.50535H18.5256ZM4.302 27.1111L0.75 25.3557V20.9602L4.302 27.1111Z\" fill=\"#DCDCDC\" style=\"fill:#DCDCDC;fill:color(display-p3 0.8621 0.8621 0.8621);fill-opacity:1;\" />\n<path d=\"M29.1972 7.7714L25.6452 9.52675M29.1972 7.7714L25.6452 6.01605M29.1972 7.7714V12.1669M0.75 7.7714L4.302 6.01605M0.75 7.7714L4.302 9.52675M0.75 7.7714V12.1669M14.9736 32.3771L11.4216 30.6218M14.9736 32.3771L18.5256 30.6218M14.9736 32.3771V27.9816M18.5256 2.50535L14.9736 0.75L11.4216 2.50535H18.5256ZM4.302 27.1111L0.75 25.3557V20.9602L2.526 24.0357L4.302 27.1111Z\" stroke=\"#DCDCDC\" style=\"stroke:#DCDCDC;stroke:color(display-p3 0.8621 0.8621 0.8621);stroke-opacity:1;\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M11.4839 9.55176H14.1047V18.9168H18.9599V21.3079H11.4839V9.55176Z\" fill=\"white\" style=\"fill:white;fill-opacity:1;\" />\n"});

const $$Astro$4 = createAstro("https://longngo.design");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="w-full z-50 py-6"> <div class="glass-panel w-full rounded-2xl px-3 py-3 flex justify-between items-center relative"> <!-- Left: Logo --> <div class="flex-1 flex justify-start"> <a href="/" class="group hover:scale-105 transition-transform"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "Long Ngo Logo", "class": "h-10 w-auto object-contain" })} </a> </div> <!-- Center: Navigation Pills --> <nav class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 bg-black/20 backdrop-blur-md rounded-full p-1.5 border border-white/10"> <a href="/"${addAttribute([
    "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
    Astro2.url.pathname === "/" ? "bg-white text-black shadow-lg shadow-black/5" : "text-white/70 hover:text-white hover:bg-white/10"
  ], "class:list")}> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path> </svg>
Home
</a> <a href="/projects"${addAttribute([
    "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
    Astro2.url.pathname.startsWith("/projects") ? "bg-white text-black shadow-lg shadow-black/5" : "text-white/70 hover:text-white hover:bg-white/10"
  ], "class:list")}> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path> </svg>
My Works
</a> </nav> <!-- Right: Search --> <div class="flex-1 flex justify-end"> <div class="group bg-black/20 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-full flex items-center gap-3 w-64 hover:bg-white/15 hover:border-white/30 transition-all duration-300 focus-within:bg-white focus-within:border-white focus-within:shadow-lg focus-within:shadow-black/5"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/50 group-focus-within:text-black/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> <input type="text" placeholder="Search..." class="bg-transparent border-none outline-none text-sm text-white placeholder-white/50 w-full group-focus-within:text-black group-focus-within:placeholder-black/50 transition-colors"> </div> </div> </div> </header>`;
}, "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/components/Header.astro", void 0);

const icons = {"simple-icons":{"prefix":"simple-icons","icons":{"linkedin":{"body":"<path fill=\"currentColor\" d=\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z\"/>","hidden":true},"behance":{"body":"<path fill=\"currentColor\" d=\"M16.969 16.927a2.56 2.56 0 0 0 1.901.677a2.5 2.5 0 0 0 1.531-.475c.362-.235.636-.584.779-.99h2.585a5.1 5.1 0 0 1-1.9 2.896a5.3 5.3 0 0 1-3.091.88a5.8 5.8 0 0 1-2.284-.433a4.9 4.9 0 0 1-1.723-1.211a5.7 5.7 0 0 1-1.08-1.874a7 7 0 0 1-.383-2.393c-.005-.8.129-1.595.396-2.349a5.31 5.31 0 0 1 5.088-3.604a4.9 4.9 0 0 1 2.376.563c.661.362 1.231.87 1.668 1.485a6.2 6.2 0 0 1 .943 2.133c.194.821.263 1.666.205 2.508h-7.699c-.063.79.184 1.574.688 2.187M6.947 4.084a8 8 0 0 1 1.928.198a4.3 4.3 0 0 1 1.49.638c.418.303.748.711.958 1.182c.241.579.357 1.203.341 1.83a3.5 3.5 0 0 1-.506 1.961a3.7 3.7 0 0 1-1.503 1.287a3.6 3.6 0 0 1 2.027 1.437c.464.747.697 1.615.67 2.494a4.6 4.6 0 0 1-.423 2.032a3.95 3.95 0 0 1-1.163 1.413a5.1 5.1 0 0 1-1.683.807a7 7 0 0 1-1.928.259H0V4.084zm-.235 12.9q.464.006.916-.099a2.2 2.2 0 0 0 .766-.332c.228-.158.411-.371.534-.619c.142-.317.208-.663.191-1.009a2.08 2.08 0 0 0-.642-1.715a2.62 2.62 0 0 0-1.696-.505h-3.54v4.279zm13.635-5.967a2.13 2.13 0 0 0-1.654-.619a2.34 2.34 0 0 0-1.163.259a2.5 2.5 0 0 0-.738.62a2.4 2.4 0 0 0-.396.792q-.111.36-.137.734h4.769a3.24 3.24 0 0 0-.679-1.785zm-13.813-.648a2.25 2.25 0 0 0 1.423-.433c.399-.355.607-.88.56-1.413a1.9 1.9 0 0 0-.178-.891a1.3 1.3 0 0 0-.495-.533a1.85 1.85 0 0 0-.711-.274a4 4 0 0 0-.835-.073H3.241v3.631h3.293zM21.62 5.122h-5.976v1.527h5.976z\"/>"}},"lastModified":1764584984,"width":24,"height":24},"mdi":{"prefix":"mdi","icons":{"school":{"body":"<path fill=\"currentColor\" d=\"M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17z\"/>"},"briefcase":{"body":"<path fill=\"currentColor\" d=\"M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h4V4c0-1.11.89-2 2-2m4 4V4h-4v2z\"/>"},"email":{"body":"<path fill=\"currentColor\" d=\"m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2\"/>"}},"lastModified":1737398331,"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$3 = createAstro("https://longngo.design");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/Users/MAC/Desktop/longngo.design/portfolio-longngo/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"> <div class="flex items-center gap-4 bg-black/20 backdrop-blur-md rounded-full px-6 py-2 border border-white/10 shadow-lg shadow-black/5"> <!-- Copyright --> <span class="text-xs text-white/60 font-medium whitespace-nowrap">
Longngo.design © 2025
</span> <!-- Divider --> <div class="w-px h-3 bg-white/10"></div> <!-- Contact Info --> <div class="flex items-center gap-4 text-xs font-medium text-white/80"> <a href="tel:0935100521" class="hover:text-white transition-colors flex items-center gap-2"> <!-- Vuesax Linear Call --> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" fill="currentColor"></path> </svg>
0935100521
</a> <a href="mailto:nvbaolong@gmail.com" class="hover:text-white transition-colors flex items-center gap-2"> <!-- Filled Email Icon --> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:email", "size": 16 })}
nvbaolong@gmail.com
</a> </div> <!-- Divider --> <div class="w-px h-3 bg-white/10"></div> <!-- Social Icons --> <div class="flex items-center gap-3"> <a href="https://www.linkedin.com/in/long-ngo-97166591/" target="_blank" rel="noopener noreferrer" class="text-white/70 hover:text-white hover:scale-110 transition-all"> ${renderComponent($$result, "Icon", $$Icon, { "name": "simple-icons:linkedin", "size": 16 })} </a> <a href="https://www.behance.net/nvbaolongd849" target="_blank" rel="noopener noreferrer" class="text-white/70 hover:text-white hover:scale-110 transition-all flex items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "simple-icons:behance", "size": 20, "class": "translate-y-[1px]" })} </a> </div> </div> </footer>`;
}, "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://longngo.design");
const $$MetaSEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MetaSEO;
  const { title, description } = Astro2.props;
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}>`;
}, "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/components/MetaSEO.astro", void 0);

const $$Astro$1 = createAstro("https://longngo.design");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/MAC/Desktop/longngo.design/portfolio-longngo/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/MAC/Desktop/longngo.design/portfolio-longngo/node_modules/astro/components/ClientRouter.astro", void 0);

const backgroundImg = new Proxy({"src":"/_astro/background.Cow6K8vT.png","width":1440,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/assets/backgrounds/background.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://longngo.design");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="vi" class="scroll-smooth"> <head>${renderComponent($$result, "MetaSEO", $$MetaSEO, { "title": title, "description": description })}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="bg-[#8C8C8C] text-white relative overflow-x-hidden min-h-screen font-sans antialiased selection:bg-blue-500 selection:text-white"> <!-- Noise Overlay --> <div class="fixed inset-0 z-50 pointer-events-none opacity-[0.05] mix-blend-overlay bg-noise"></div> <!-- Background Image --> <div class="fixed inset-0 -z-10 pointer-events-none overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": backgroundImg, "alt": "Background", "class": "w-full h-full object-cover opacity-100", "width": 1920, "height": 1080 })} <div class="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div> </div> <div class="w-full max-w-[1600px] mx-auto px-4"> ${renderComponent($$result, "Header", $$Header, {})} <main class="w-full pt-8 pb-12 relative z-10 min-h-screen"> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, $$Icon as a };

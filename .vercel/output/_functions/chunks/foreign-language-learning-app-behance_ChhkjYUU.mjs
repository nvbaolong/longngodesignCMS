import { B as createVNode, F as Fragment, ax as __astro_tag_component__ } from './astro/server_DomHIFY9.mjs';
import 'clsx';

const frontmatter = {
  "title": "Foreign Language Learning App",
  "description": "",
  "category": "Design",
  "coverImage": "/images/projects/foreign-language-learning-app-behance/cover.png"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    img: "img",
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: createVNode(_components.img, {
      src: "/images/projects/foreign-language-learning-app-behance/img-1.png",
      alt: "Project Image"
    })
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "src/content/projects/foreign-language-learning-app-behance.mdx";
const file = "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/content/projects/foreign-language-learning-app-behance.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/MAC/Desktop/longngo.design/portfolio-longngo/src/content/projects/foreign-language-learning-app-behance.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };

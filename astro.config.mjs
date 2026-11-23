// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// export default defineConfig({});

import icon from "astro-icon";

// Make photos inside news articles and recipes load only when they scroll
// into view, so phones don't download every photo up front.
function lazyLoadImages() {
  /** @param {any} node */
  const walk = (node) => {
    if (node.type === "element" && node.tagName === "img") {
      node.properties = node.properties || {};
      node.properties.loading ??= "lazy";
      node.properties.decoding ??= "async";
    }
    (node.children || []).forEach(walk);
  };
  return walk;
}

export default defineConfig({
  integrations: [icon()],
  markdown: {
    rehypePlugins: [lazyLoadImages],
  },
});

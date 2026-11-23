// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// export default defineConfig({});

import icon from "astro-icon";

export default defineConfig({
  integrations: [icon()],
});
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://isabellavs.github.io/cv4',
	base: '/cv4',
	integrations: [mdx(), sitemap()],
});

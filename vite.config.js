import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['svelte-fa'] // Add svelte-fa here
	},
	assetsInclude: ['**/*.md'],
	ssr: {
		noExternal: ['svelte-fa'] // Include svelte-fa for server-side rendering
	}
});

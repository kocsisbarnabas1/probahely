import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html

		vite: {
			ssr: {
				noExternal: [/^@Material\//, /^@smui(?:-extra)?\//]
			}
		}
	},

	preprocess: [preprocess({})]
};

export default config;

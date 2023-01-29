import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import babel from 'vite-plugin-babel';

const config: UserConfig = {
	plugins: [babel(), sveltekit()]
};

export default config;

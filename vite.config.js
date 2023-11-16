import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { presetUno } from 'unocss'
import { presetIcons } from 'unocss'

export default defineConfig({
	plugins: [
		UnoCSS({ presets: [presetUno(), presetIcons()] }),
		sveltekit(),
	],
})
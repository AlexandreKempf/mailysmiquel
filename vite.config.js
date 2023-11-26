import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { presetUno, presetIcons, presetWebFonts } from 'unocss'

export default defineConfig({
	plugins: [
		UnoCSS({
			theme: {
				colors: {
					'blue': '#277bc0',
					'orange': '#ffb200',
					'beige': '#fff4cf',
				}
			},
			presets: [presetUno(), presetIcons(), presetWebFonts({
				provider: 'google',
				fonts: {
					sans: 'Inter',
					mono: ['Fira Code', 'Fira Mono:400,700'],
				},
			}
			)]
		}),
		sveltekit(),
	],
})
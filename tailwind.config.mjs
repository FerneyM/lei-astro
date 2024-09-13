/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			margin:{
				non2: '-3.5rem'
			},
			borderRadius: {
				'4lg': '.25rem'
			},
			fontSize: {
				'titlexl': '1.75rem'
			}
		},
	},
	plugins: [],
}

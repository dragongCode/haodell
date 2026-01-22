/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media', 
	theme: {
		extend: {
			colors: {
				theme: {
					bg: 'var(--theme-bg)',
					surface: 'var(--theme-surface)',
					text: 'var(--theme-text)',
					muted: 'var(--theme-muted)',
					border: 'var(--theme-border)',
					accent: 'var(--theme-accent)',
					'accent-hover': 'var(--theme-accent-hover)',
				}
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						maxWidth: '100%',
						color: 'var(--theme-text)',
						a: {
							color: theme('colors.blue.600'),
							'&:hover': {
								color: theme('colors.blue.500'),
							},
						},
						h1: { color: 'var(--theme-text)' },
						h2: { color: 'var(--theme-text)' },
						h3: { color: 'var(--theme-text)' },
						h4: { color: 'var(--theme-text)' },
						strong: { color: 'var(--theme-text)' },
						code: { color: theme('colors.pink.500') },
						blockquote: { borderLeftColor: theme('colors.blue.500') },
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
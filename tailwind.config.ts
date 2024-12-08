import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				Playpen: ['Prompt', 'cursive']
			},

			animation: {
				'spin-slow': 'spin 3s linear infinite',
				blink: 'blink 1.5s step-start infinite'
			},
			keyframes: {
				blink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' }
				}
			}
		}
	},

	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#FF6230',
					secondary: '#FF6230'
				}
			}
		]
	}
} satisfies Config;

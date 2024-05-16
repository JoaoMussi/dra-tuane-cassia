/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			boxShadow: {
				'outer': '2px 0px 10px 2px rgba(0, 0, 0, 0.3)'
			}
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		base: false,
		themes: [
			{
				mytheme: {
					primary: '#9B684D',
					secondary: '#E3BBB1',
					accent: '#F6EDE8',
					neutral: '#000000',
					'base-100': '#F6EDE8',
					info: '#0000ff',
					success: '#00ff00',
					warning: '#00ff00',
					error: '#ff0000',
				},
			},
		],
	},
};

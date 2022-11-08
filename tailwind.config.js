/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			ubuntu: 'Ubuntu, sans-serif',
		},
		extend: {
			animation: {
				'marquee-0': 'marquee 10s linear infinite',
				'marquee-1': 'marquee 15s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translate(0%)' },
					'100%': { transform: 'translate(-100%)' },
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
	],
};

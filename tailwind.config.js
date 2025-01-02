/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: true,
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
	container: {
		center: true,
	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			dark_header: '#2C3743',
			dark_background: '#222D37',
			white_background: '#FAFAFA'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

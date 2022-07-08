/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "rose-noise": "url('../assets/nnnoise.svg')",
                "teal-grain": "url('../assets/gggrain.svg')",
                "teal-surf": "url('../assets/sssurf.svg')",
                "teal-flux": "url('../assets/ffflux.svg')",
                "teal-union": "url('../assets/uuunion.svg')",
                "hero-bg": "url('../assets/teal-cotton.jpg')",
                "hero-socks": "url('../assets/socks-pres.svg')"
            }
        }
    },
    plugins: []
};

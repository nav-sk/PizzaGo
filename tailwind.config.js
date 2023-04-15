/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}", "./public/*.html"],
    theme: {
        extend: {
            // Adding custom colors to Tailwind
            colors: {
                "Navy": "#1e212b",
                "Platinum": "#eaece8",
                "Yellow": "#ffc800",
                "YellowDark": "#e6b400",
                "Orange": "#ff8427",
                "Green": "#202a1f"
            },
            // Adding custom fonts to Tailwind
            fontFamily: {
                "Lobster": 'Lobster',
                "Nunito": 'Nunito'
            }
        },
    },
    plugins: [],
}


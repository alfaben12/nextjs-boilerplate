// tailwind.config.js
module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                "header-img": "url('/header-2.jpg')",
                "cover1-img": "url('/cover-1.jpg')",
                "cover2-img": "url('/cover-2.jpg')",
                "cover3-img": "url('/cover-3.jpg')",
                "cover4-img": "url('/cover-4.jpg')",
                "livesport-img":
                    "url('/laura-chouette-yCdsqWfxJOw-unsplash.jpg')",
                "livesport-small": "url('/tes1.png')",
                "network-logo": "url('/network-logo-bg.png')",
            }),
            colors: {
                "hulu-green": "#69DADB",
                "live-section": "#151516",
            },
            width: {
                300: "300px",
                250: "250px",
                270: "270px",
                200: "200px",
            },
            height: {
                180: "180px",
                500: "500px",
                530: "530px",
                800: "800px",
            },
            inset: {
                160: "160px",
                100: "100px",
            },
            maxWidth: {
                550: "550px",
                1100: "1100px",
            },
        },
        gradientColorStops: (theme) => ({
            ...theme("colors"),
            cstart: "#0f495c",
            cvia: "#0d3640",
            cend: "#08141f",
        }),
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

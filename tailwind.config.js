const plugin = require("tailwindcss/plugin")
const _ = require("lodash");

const gradient = plugin(function({ addUtilities, e, theme, variants }) {
    const gradients = theme("gradients", {})
    const gradientVariants = variants("gradients", [])

    const utilities = _.map(gradients, ([start, end], name) => ({
        [`.bg-gradient-${e(name)}`]: {
            backgroundImage: `linear-gradient(to right, ${start}, ${end})`,
        },
    }))

    addUtilities(utilities, gradientVariants)
})


module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
      },
    purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
    theme: {
        gradients: theme => ({
            primary: [theme("colors.primary"), theme("colors.secondary")],
        }),
        themes: {
            dark: {
                bg: "#111",
                bgalt: "#000",
                "color-default": "#eee",
                "color-1": "#f3d84a",
                "color-2": "#3172b8",
                border: "#718096",
                primary: "#f55555",
                medium: "#222"
            },
        },
        colors: {
            bg: "#fff",
            bgalt: "#f5f5f5",
            "color-default": "#333",
            "color-1": "#195088",
            "color-2": "#262626",
            "color-3": "#f59e46",
            primary: "#f3d84a",
            secondary: "#3172b8",
            link: "#0a71c5",
            medium: "#cfd8dc",
            white: "#fff",
            black: "#000",
            transparent: "rgba(0,0,0,0)",
            error: "#ef5350",
            success: "#8bc34a"
        },
        extend: {
            fontSize: {
                '7xl': '5rem'
            },
            spacing: {
                '1px': '1px',
                '2px': '2px'
            }
        },
    },
    variants: {},
    plugins: [require(`tailwind-theme-switcher`), gradient],
}



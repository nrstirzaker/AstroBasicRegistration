/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue, mjs}'],
    theme: {
        extend: {},
    },
    variants: {
        opacity: ({ after }) => after(['disabled'])
    },
    plugins: [],
}
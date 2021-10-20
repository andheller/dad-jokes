import preprocess from "svelte-preprocess";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import adapter from "@sveltejs/adapter-static";

const warnIgnores = {
    "css-unused-selector": {
        capture: /.*"(.*)"$/,
        ignore: [
            /^\.p\d+/,
            /^\.sm\d+/,
            /^\.md\d+/,
            /^\.lg\d+/,
            /^\.xg\d+/,
            /^\.all\d+/,
            /^\.row(::after)?/,
        ],
    },
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
        postcss: {
            plugins: [tailwind, autoprefixer],
        },
    }),

    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",
        adapter: adapter(),
    },
};

export default config;

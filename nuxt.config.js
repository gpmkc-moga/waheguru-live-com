// https://github.com/kendallstrautman/brevifolia-nuxt-forestry/blob/master/nuxt.config.js
import config from "./content/config.json";
import constants from "./utils/constants";

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "",
        },
      }
    : {};
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ...routerBase,
  // https://nuxtjs.org/docs/directory-structure/dist#the-fallback-property
  generate: {
    fallback: '404.html'
  },
  head: {
    title: constants.waheguruLive,
    titleTemplate:
      `%s${constants.titleExtension}`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:config["main_description"],
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/png", href: "favicon-32x32.png", sizes: "32x32" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/aos.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [    
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    // https://image.nuxtjs.org/
    "@nuxt/image",
    '@nuxtjs/sitemap',
  ],
  

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
    meta: {
      name: constants.waheguruLive,
      description: config["main_description"],
    },
    manifest: {
      name: constants.waheguruLive,
      short_name: constants.waheguruLive,
      description: config["main_description"],
    },

  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // google fonts options: https://google-fonts.nuxtjs.org/options
  googleFonts: {
    families: {
      "Krona+One": [300,400,600],
      Raleway: [500],
      Mitr: [300],
      Roboto: [300,400,600,700],
      "Roboto+Slab": [400, 500],
      Actor: true,
    },
    display: "auto",
  },

  sitemap: {
    hostname: 'https://wahegurulive.com',
    // options
    exclude: [
      '/hukumnama',
      '/live',
    ]
  }
};

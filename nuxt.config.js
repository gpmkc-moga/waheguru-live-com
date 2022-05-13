// https://github.com/kendallstrautman/brevifolia-nuxt-forestry/blob/master/nuxt.config.js
import config from "./content/config.json";
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
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Waheguru Live - Gurdwara Prabh Milne Ka Chao Moga - Bhai Sewa Singh Ji Tarmala",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", 
      content: "Our Mission: To share and experience common love for the inner divine according to teachings of Sahib Shri Guru Granth Sahib Ji.\nAbout Us: BHAI SAHIB BHAI SEWA SINGH JI TARMALA, FOUNDER, UNIVERSITY OF DIVINE STUDIES, MOGA, Bhai Sahib was born on 10th August 1944 at village Bahuliana, Tehsil Chunni in district Lahore. He did his schooling in Abohar and then Giani in 1972 from Punjabi University, Patiala. Bhai Sewa Singh's native village is Tarmala in district Mukatsar, Punjab. In his early childhood he was inspired to imbibe Gurmat by his father S. Kundan Singh and mother Mata Ishar Kaur.\nIn 1978, he took Baptism "Amrit" at the inspiring persuasion of his close associate, Bhai Inderjit Singh Narangwal. His mother was spiritually inclined towards Naam Simran. The holy company of his mother and many other saintly souls laid the solid foundation of spirituality in his early life. With Akal Purkh's grace and through Naam Simran and Sabad-Surat practice, he became enlightened. He preaches and teaches union with Waheguru on the basis of the inspired and the revealed word of Gurbani. Preaching pure Gurmat, he explains techniques that lead to an ultimate union with Waheguru through Naam Simran. His wife Bibi Daljit Kaur is the source of inspiration behind this mission. Many other members of Bhai Sahib's family have been contributing towards the fulfillment of this noble mission.\nBy keeping such as great mission in mind and with the association of inspired Gurmukhs, Bhai Sahib established Sarab Sukh Charitable trust in 2005. Construction of Institute of Divine studies, Gurdwara Prabh Milne Ka Chao was started in Moga.\nOne year and four year courses were started in 2007. The purpose of the courses is to teach the students how to live their life by following Gurmat. By the grace of God and under the direction of a great quote from Gurbani “Recognise whole human race as of one caste,” rays of enlightenment are spreading to each and every corner of the world by this Institute.\nBHAI SAHIB BHAI DALBIR SINGH JI TARMALA, PRESIDENT, UNIVERSITY OF DIVINE STUDIES, MOGA\nWith the grace of Waheguru, Bhai Sahib Bhai Sewa Singh Ji Tarmala established Gurdwara Prabh Milne Ka Chao (University Of Divine Studies) in 2007. In which the idea of selfless service, Naam Simran and Akath Katha continues after Bhai Sahib Bhai Sewa Singh Tarmala merged back in truth on December 06 2012, under the able guidance of their successor, beloved Gurmukh Bhai Sahib Bhai Dalbir Singh Tarmala who is purifying the atmosphere and human hearts continuously with the sounds(sacred hymns) of Gurbani Guru.\nWhile proceeding on the path of devotion, he has experienced the supernatural bliss of union with Waheguru by the grace of Waheguru after receiving entire techniques, methods and secrets of Gurbani from family heritage. According to the sacred Gurbani quote 'Recognise whole human race as of one caste,' Bhai Sahib Bhai Dalbir Singh Tarmala is devoted to propagating Gurmat all the time inspiring the worldly beings to follow Naam Simran and spiritual pathway. He motivates every individual to walk on the path as explained in Gurbani Guru, enlightening the right path for them.\nAvoiding the queries related to the materialistic world Bhai Sahib explains all the obstacles that are yet to come on the path of devotion, as explained in Gurbani Guru, to spiritual seekers in the congregation.\nFortunate are the ones who had a chance to meet Gurmukhs like Bhai Sahib Bhai Sewa Singh Tarmala. Needless to say such opportunities arise only by the grace of Waheguru. Even today one can feel the same spiritual warmth after listening to Gurbani Guru\’s explanations by Bhai Sahib\’s appointed successor, his own image, respected Bhai Dalbir Singh Tarmala. Altogether, his great personality creates a determination in the mind of spiritual seekers to get united with the universal master (Prabh Milne Ka Chao)" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

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
    "@nuxtjs/onesignal",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    // https://image.nuxtjs.org/
    "@nuxt/image",
  ],

  // Options
  oneSignal: {
    // Use CDN
    cdn: true,
    init: {
      appId: config.onesignal_app_id,
      safari_web_id: config.onesignal_app_id_safari,
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true,
      },
      promptOptions: {
        customlink: {
          enabled: true /* Required to use the Custom Link */,
          style: "button" /* Has value of 'button' or 'link' */,
          size: "medium" /* One of 'small', 'medium', or 'large' */,
          color: {
            button:
              "#2c68a7" /* Color of the button background if style = "button" */,
            text: "#FFFFFF" /* Color of the prompt's text */,
          },
          text: {
            subscribe: "Subscribe" /* Prompt's text when not subscribed */,
            unsubscribe: "Unsubscribe" /* Prompt's text when subscribed */,
            explanation:
              "Get daily Hukumnama alerts on website" /* Optional text appearing before the prompt button */,
          },
          unsubscribeEnabled: true /* Controls whether the prompt is visible after subscription */,
        },
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
    icon: {
      /* icon options */
      purpose: "maskable",
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // google fonts options: https://google-fonts.nuxtjs.org/options
  googleFonts: {
    families: {
      "Krona+One": true,
    },
    display: "auto",
  },
};

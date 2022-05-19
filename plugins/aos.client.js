// https://zacheryng.com/nuxt-with-animated-on-scroll/

import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({ 
    disable: 'mobile',
    once: true
  });
};
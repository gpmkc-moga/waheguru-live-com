<template>
  <div class="p-2.5 text-center">
    <div v-if="error.statusCode === 404">
      <nuxt-picture
        format="webp"
        class="flex justify-center w-[70%] mx-auto"
        src="/404.png"
        :alt="constants.s404"
        :title="constants.s404"
      ></nuxt-picture>
    </div>
    <!-- waheguru Ji! -->

    <div
      class="
        font-krona-one font-semibold
        text-[20px]
        md:text-[26px]
        text-[#75423C]
        mt-3
      "
    >
      {{ constants.WaheguruJi }}
    </div>

    <div class="error-text">
      {{
        error.statusCode === 404
          ? constants.pageNotFound
          : constants.anErrorOccurred
      }}
    </div>

    <div class="mt-5 error-text">{{ constants.pleaseFindAllPages }}</div>

    <div class="mt-5 columns-1 md:columns-3 md:gap-2">
      <nuxt-link class="pages-link" to="/hukumnama/today">{{
        constants.dailyHukumnama
      }}</nuxt-link>
      <nuxt-link class="pages-link" to="/index1">{{
        constants.home
      }}</nuxt-link>
      <nuxt-link class="pages-link" to="/about">{{
        constants.about
      }}</nuxt-link>
      <nuxt-link class="pages-link" to="/live/live-radio">{{
        constants.liveRadio
      }}</nuxt-link>
      <nuxt-link class="pages-link" to="/live/live-video">{{
        constants.liveVideo
      }}</nuxt-link>
      <nuxt-link class="pages-link" to="/gallery">{{
        constants.gallery
      }}</nuxt-link>
      <nuxt-link class="pages-link" to="/store">{{
        constants.store
      }}</nuxt-link>
      <nuxt-link class="pages-link" to="/contact">{{
        constants.contact
      }}</nuxt-link>
      <nuxt-link class="pages-link" to="/programs/">{{
        constants.programs
      }}</nuxt-link>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import constants from "~/utils/constants";

export default Vue.extend({
  head() {
    return {
      title:
        this.error.statusCode === 404
          ? constants.pageNotFound
          : constants.anErrorOccurred,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            this.error.statusCode === 404
              ? constants.pageNotFound
              : constants.anErrorOccurred,
        },
      ],
    };
  },
  props: ["error"],
  data() {
    return {
      constants,
    };
  },
});
</script>


<style lang="scss" scoped>
.error-text {
  @apply font-roboto-slab text-[15px] md:text-base;
}

.pages-link {
  @apply flex justify-center font-roboto py-3 px-5 font-semibold text-[15px] md:text-base hover:text-[#DCAD2C];
}
</style>
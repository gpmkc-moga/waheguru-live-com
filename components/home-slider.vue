<template>
  <div>
    <div
      v-if="$fetchState.pending"
      class="aspect-[1546/356] w-full animate-pulse bg-slate-200"
    />
    <p v-else-if="$fetchState.error">Error while getting slides!</p>
    <div v-else class="relative p-2.5">
      <nuxt-picture
        format="webp"
        src="/frame_slider_right.png"
        class="absolute flex justify-end top-2.5 right-2.5 w-full z-10"
      />
      <nuxt-picture
        format="webp"
        src="/frame_slider_left.png"
        class="absolute flex justify-start bottom-2.5 left-2.5 w-full z-10"
      />

      <hooper :settings="hooperSettings">
        <slide
          v-for="(slide, idx) in homeSliderContent.slides"
          :key="idx"
          :index="idx"
          class="relative"
        >
          <div class="aspect-[1546/356] w-full animate-pulse bg-slate-200" />
          <nuxt-picture
            format="webp"
            quality="100"
            class="w-full absolute top-0 left-0 z-10"
            :src="slide.path"
            :alt="slide.description"
          />
        </slide>
        <hooper-navigation slot="hooper-addons">
          <svg
            slot="hooper-prev"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 stroke-white opacity-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <svg
            slot="hooper-next"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 stroke-white opacity-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </hooper-navigation>
      </hooper>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";

export default Vue.extend({
  components: { Hooper, Slide, HooperNavigation },
  props: {
    homeSliderContentParent: {
      type: Object,
      default: null,
      required: false,
    },
  },
  data: () => {
    return {
      homeSliderContent: {},
      hooperSettings: {
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 5000,
        transition: 1000,
      },
    };
  },
  async fetch() {
    if (this.homeSliderContentParent != null) {
      this.homeSliderContent = this.homeSliderContentParent;
    } else {
      this.homeSliderContent = await this.$content("home-slider").fetch();
    }
  },
});
</script>

<style lang="scss">
.hooper {
  height: auto !important;
}
</style>

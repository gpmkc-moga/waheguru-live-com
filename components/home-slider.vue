<template>
  <div>
    <div v-if="$fetchState.pending" class="w-full flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="animate-spin h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    </div>
    <p v-else-if="$fetchState.error">Error while getting slides!</p>
    <div v-else class="relative p-2.5">
      <nuxt-picture
        format="webp"
        src="/fg_frame_right.png"
        class="absolute flex justify-end top-2.5 right-2.5 w-full z-10"
      />
      <nuxt-picture
        format="webp"
        src="/fg_frame_left.png"
        class="absolute flex justify-start bottom-2.5 left-2.5 w-full z-10"
      />

      <hooper :settings="hooperSettings">
        <slide
          v-for="(slide, idx) in homeSliderContent.slides"
          :key="idx"
          :index="idx"
          class="relative"
        >
          <div class="aspect-[1546/356] w-full animate-pulse" />
          <nuxt-picture
            format="webp"
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
    this.homeSliderContent = await this.$content("home-slider").fetch();
  },
});
</script>

<style lang="scss">
.hooper {
  height: auto !important;
}
</style>

<template>
  <div>
    <!-- top bar  -->
    <!-- back button         center title audio gallery -->
    <div class="grid grid-cols-3 p-4 bg-white sticky top-0">
      <!-- https://stackoverflow.com/a/48123669 -->
      <!-- https://stackoverflow.com/a/70965943 -->
      <nuxt-link
        class="
          cursor-pointer
          opacity-70
          inline-flex
          justify-self-start
          items-center
        "
        to="/gallery"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
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
      </nuxt-link>
      <div class="font-roboto-slab text-base md:text-lg text-center p-4">
        {{ constants.audioGallery }}
      </div>
    </div>
    <div class="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      <nuxt-link
        v-for="(album, idx) in audioGalleryContent.albums"
        :key="idx"
        :to="`/gallery/audio/${idx}`"
        class="
          flex flex-col
          h-max
          items-center
          text-center
          rounded
          border border-slate-200
        "
      >
        <nuxt-picture
          format="webp"
          class="w-full"
          :src="album.cover"
          :alt="album.name"
          :title="album.name"
          :img-attrs="{
            class: 'w-full h-auto',
          }"
        />
        <div class="bg-slate-50 w-full p-2">
          <div class="text-base md:text-lg font-roboto-slab">
            {{ album.name }}
          </div>
          <div class="mt-2 text-xs md:text-sm font-roboto">
            {{ album.artist }}
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import constants from "~/utils/constants";

export default Vue.extend({
  layout: "audio-gallery",
  async asyncData(context) {
    const audioGalleryContent = await context.$content("audio-gallery").fetch();
    return {
      audioGalleryContent,
    };
  },
  data() {
    return {
      constants,
    };
  },
});
</script>

<style scoped></style>

<template>
  <div>
    <!-- top bar  -->
    <!-- back button         center title audio gallery -->
    <div class="grid grid-cols-3 p-4 bg-white sticky top-0">
      <!-- https://stackoverflow.com/a/48123669 -->
      <!-- https://stackoverflow.com/a/70965943 -->
      <a
        class="
          cursor-pointer
          opacity-70
          inline-flex
          justify-self-start
          items-center
        "
        @click.prevent="$router.back()"
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
      </a>
      <div class="font-roboto-slab text-base md:text-lg text-center p-4">
        {{ constants.album }}
      </div>
    </div>
    <div class="p-4 flex flex-col md:flex-row">
      <!-- album info -->
      <div
        class="
          sticky
          top-0
          flex flex-col
          h-max
          items-center
          text-center
          rounded
          border border-slate-200
          w-full
          md:w-1/3
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
      </div>
      <!-- album list -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import constants from "~/utils/constants";
import { AudioPlayerMixin } from "~/utils/audio-player";

export default Vue.extend({
  mixins: [AudioPlayerMixin],
  layout: "audio-gallery",
  async asyncData(context) {
    const audioGalleryContent = await context.$content("audio-gallery").fetch();
    const album = audioGalleryContent.albums[context.params.album];
    return {
      album,
    };
  },
  data() {
    return {
      constants,
      selectedTrackIndex: null,
    };
  },
});
</script>

<style scoped></style>

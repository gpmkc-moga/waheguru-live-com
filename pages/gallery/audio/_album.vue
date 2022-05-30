<template>
  <div class="relative">
    <!-- top bar  -->
    <!-- back button         center title audio gallery -->
    <div class="z-20 grid grid-cols-3 p-4 bg-white sticky top-0 items-center">
      <!-- bottom pattern -->
      <div
        class="
          rounded
          absolute
          h-2.5
          bottom-0
          w-full
          inset-x-0
          mx-auto
          bg-[url('/washi.png')]
        "
      />
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
      <div class="font-roboto-slab text-base md:text-lg text-center">
        {{ constants.album }}
      </div>
    </div>
    <div class="mb-[72px] relative p-4 flex flex-col md:flex-row gap-2">
      <!-- album info and share -->

      <div class="md:sticky md:top-[80px] w-full md:w-1/3 h-max">
        <!-- album info -->
        <div
          class="
            flex flex-col
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
        </div>
        <!-- sharing pills -->

        <div class="p-2 flex gap-2 flex-wrap justify-center">
          <span>Share on:</span><br />
          <ShareNetwork
            network="facebook"
            :url="getCurrUrl()"
            :title="`${album.name}-${constants.listenTo}`"
            >Facebook</ShareNetwork
          ><span>messenger</span><span>pinterest</span><span>sms</span
          ><span>telegram</span><span>twitter</span><span>whatsapp</span>
        </div>
      </div>
      <!-- album list -->
      <div
        class="
          flex flex-col
          h-max
          rounded
          border border-slate-200
          w-full
          md:w-2/3
          divide-y divide-site-text
        "
      >
        <div v-if="album.audio_files.length === 0" class="p-2">
          {{ constants.noTracks }}
        </div>
        <div
          v-for="(track, idx) in album.audio_files"
          v-else
          :key="idx"
          class="cursor-pointer font-roboto p-2"
          :class="{
            'cursor-auto bg-site-blue text-white font-bold':
              selectedTrackIndex === idx,
          }"
          @click="selectedTrackIndex = idx"
        >
          <!-- add share and download icon on hover or select -->
          {{ track | filterFileName }}
        </div>
      </div>
    </div>
    <!-- bottom bar -->
    <!-- only visible if any active track is there -->

    <transition name="fade">
      <div
        v-if="!isDisabledPlayPause || !isDisabledStop"
        class="
          flex
          justify-center
          items-center
          gap-2
          fixed
          inset-x-0
          mx-auto
          w-full
          bottom-0
          p-2
          bg-white
        "
      >
        <!-- play/pause -->
        <media-button
          v-if="!isDisabledPlay"
          :title="constants.play"
          svg-path="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          @click.native="handlePlay"
        />
        <media-button
          v-if="!isDisabledPause"
          :title="constants.pause"
          svg-path="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
          @click.native="handlePause"
        />
        <media-button
          v-if="!isDisabledStop"
          :title="constants.stop"
          svg-path="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
          @click.native="selectedTrackIndex = null"
        />
        <a
          v-if="album.allow_downloads"
          class="inline-flex justify-center"
          :href="album.audio_files[selectedTrackIndex]"
          target="_blank"
          rel="noopener noreferrer"
          ><media-button
            :title="constants.download"
            svg-path="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
          />
        </a>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import path from "path-browserify";
import constants from "~/utils/constants";
import { AudioPlayerMixin } from "~/utils/audio-player";

export default Vue.extend({
  filters: {
    filterFileName(value) {
      return path.parse(value).name;
    },
  },
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
  watch: {
    selectedTrackIndex(newValue, oldValue) {
      if (oldValue !== null) {
        this.disposePlayer();
      }
      if (newValue !== null) {
        this.setupSound(this.album.audio_files[newValue], true);
      }
    },
  },
  methods: {
    getCurrUrl() {
      return constants.websiteUrl + this.$route.fullPath;
    },
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  @apply opacity-0;
}
</style>

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

        <div class="text-center">
          <div class="mt-2">{{ constants.shareAlbumOn }}</div>
          <div class="p-2 px-6 flex gap-2 flex-wrap justify-center">
            <share-url-social-link
              color="#1877F2"
              svg-path="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              :share-url="getCurrUrl"
              :share-title="shareTitle"
              share-network="Facebook"
            />
            <share-url-social-link
              color="#00B2FF"
              svg-path="M.001 11.639C.001 4.949 5.241 0 12.001 0S24 4.95 24 11.639c0 6.689-5.24 11.638-12 11.638-1.21 0-2.38-.16-3.47-.46a.96.96 0 00-.64.05l-2.39 1.05a.96.96 0 01-1.35-.85l-.07-2.14a.97.97 0 00-.32-.68A11.39 11.389 0 01.002 11.64zm8.32-2.19l-3.52 5.6c-.35.53.32 1.139.82.75l3.79-2.87c.26-.2.6-.2.87 0l2.8 2.1c.84.63 2.04.4 2.6-.48l3.52-5.6c.35-.53-.32-1.13-.82-.75l-3.79 2.87c-.25.2-.6.2-.86 0l-2.8-2.1a1.8 1.8 0 00-2.61.48z"
              :share-url="getCurrUrl"
              :share-title="shareTitle"
              share-network="Messenger"
            />
            <share-url-social-link
              color="#BD081C"
              svg-path="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
              :share-url="getCurrUrl"
              :share-title="shareTitle"
              share-network="Pinterest"
            />
            <share-url-social-link
              color="#324353"
              svg-path="M25.5 21.121c0 1.066 0.61 1.99 1.5 2.442v0.374c-0.249 0.034-0.503 0.052-0.762 0.052-1.594 0-3.032-0.669-4.048-1.741-0.615 0.164-1.266 0.252-1.94 0.252-3.728 0-6.75-2.686-6.75-6s3.022-6 6.75-6c3.728 0 6.75 2.686 6.75 6 0 1.297-0.463 2.498-1.251 3.48-0.16 0.347-0.249 0.734-0.249 1.141zM12 0c6.526 0 11.836 4.233 11.996 9.504-1.153-0.514-2.428-0.786-3.746-0.786-2.24 0-4.355 0.784-5.956 2.207-1.66 1.476-2.575 3.455-2.575 5.574 0 1.047 0.224 2.060 0.65 2.995-0.123 0.003-0.245 0.005-0.369 0.005-0.636 0-1.261-0.041-1.871-0.118-2.578 2.578-5.654 3.040-8.629 3.108v-0.631c1.606-0.787 3-2.22 3-3.859 0-0.229-0.018-0.453-0.051-0.673-2.714-1.787-4.449-4.518-4.449-7.577 0-5.385 5.373-9.75 12-9.75z"
              :share-url="getCurrUrl"
              :share-title="shareTitle"
              share-network="SMS"
            />
            <share-url-social-link
              color="#26A5E4"
              svg-path="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
              :share-url="getCurrUrl"
              :share-title="shareTitle"
              share-network="Telegram"
            />
            <share-url-social-link
              color="#1DA1F2"
              svg-path="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              :share-url="getCurrUrl"
              :share-title="shareTitle"
              share-network="Twitter"
            />

            <share-url-social-link
              color="#25D366"
              svg-path="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
              :share-url="getCurrUrl"
              :share-title="shareTitle"
              share-network="WhatsApp"
            />
          </div>
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
          divide-y divide-slate-200
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
  head() {
    return {
      title: this.shareTitle,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: this.shareTitle,
        },
      ],
    };
  },
  computed: {
    getCurrUrl() {
      return constants.websiteUrl + this.$route.fullPath;
    },
    shareTitle() {
      return `${this.album.name}-${this.constants.listenTo}`;
    },
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

<template>
  <div class="mb-2.5">
    <tomb-post>
      <template #heading>
        <nuxt-picture
          format="webp"
          class="flex justify-center md:mt-[175px]"
          src="/heading_live_radio.png"
          :alt="constants.headingLiveRadio"
          :title="constants.headingLiveRadio"
          :img-attrs="{
            class: 'w-[68%] md:w-[48%]',
          }"
        />
      </template>
      <template #default>
        <div class="flex flex-col text-center w-max mx-auto">
          <div
            class="p-3 border border-site-text flex items-center justify-center"
          >
            <button
              :class="{
                'disabled opacity-90': loading || errored,
                'animate-pulse': loading,
              }"
              class="flex text-site-dark-gray items-center justify-center"
              @click="handleClick"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-20 w-20"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  :d="radioButtonSvgPath"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div class="p-2 flex justify-center gap-2">
            <a href="https://cast1.asurahosting.com:2199/tunein/gpmkc.pls"
              ><img
                align="absmiddle"
                src="https://cast1.asurahosting.com:2199/system/images/tunein-pls.png"
                border="0"
                alt="Winamp, iTunes"
                title="Winamp, iTunes"
            /></a>
            <a href="https://cast1.asurahosting.com:2199/tunein/gpmkc.asx"
              ><img
                align="absmiddle"
                src="https://cast1.asurahosting.com:2199/system/images/tunein-asx.png"
                border="0"
                alt="Windows Media Player"
                title="Windows Media Player"
            /></a>
            <a href="https://cast1.asurahosting.com:2199/tunein/gpmkc.ram"
              ><img
                align="absmiddle"
                src="https://cast1.asurahosting.com:2199/system/images/tunein-ram.png"
                border="0"
                alt="Real Player"
                title="Real Player"
            /></a>
            <a href="https://cast1.asurahosting.com:2199/tunein/gpmkc.qtl"
              ><img
                align="absmiddle"
                src="https://cast1.asurahosting.com:2199/system/images/tunein-qtl.png"
                border="0"
                alt="QuickTime"
                title="QuickTime"
            /></a>
            <a href="https://cast1.my-control-panel.com/stream/gpmkc/stream.pls"
              ><img
                align="absmiddle"
                src="https://cast1.asurahosting.com:2199/system/images/tunein-web.png"
                border="0"
                alt="Stream Proxy"
                title="Stream Proxy"
            /></a>
          </div>
        </div>
      </template>
    </tomb-post>
    <live-schedule class="mt-[25px]" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import constants from "~/utils/constants";
import { AudioPlayerMixin } from "~/utils/audio-player";

export default Vue.extend({
  mixins: [AudioPlayerMixin],
  data() {
    return {
      constants,
    };
  },
  head() {
    return {
      title: constants.liveRadio,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: constants.liveRadio,
        },
      ],
    };
  },
  computed: {
    radioButtonSvgPath() {
      if (this.errored) {
        return `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z`;
      } else if (this.playing) {
        return `M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z`;
      } else {
        return `M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z`;
      }
    },
  },
  methods: {
    handleClick() {
      if (this.init) {
        this.setupSound(constants.liveRadioStreamURL, true);
      } else if (this.playing) {
        this.disposePlayer();
      } else if (this.errored) {
        this.disposePlayer();
        this.setupSound(constants.liveRadioStreamURL, true);
      }
    },
  },
});
</script>

<style scoped></style>

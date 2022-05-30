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
        <div class="grid grid-cols-2 text-center w-max mx-auto">
          <div
            class="p-3 border border-site-text flex items-center justify-center"
          >
            <button
              :class="{ 'disabled opacity-70': isDisabledPlayPause }"
              class="
                rounded-full
                bg-site-text
                p-3
                text-white
                flex
                items-center
                justify-center
              "
              @click="handlePlayPause"
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                class="w-6 h-6 flex"
                viewBox="0 0 45.974 45.975"
                style="enable-background: new 0 0 45.974 45.975"
                fill="currentColor"
                xml:space="preserve"
              >
                <g>
                  <g>
                    <g>
                      <path
                        d="M9.629,44.68c-1.154,1.16-2.895,1.51-4.407,0.885c-1.513-0.623-2.5-2.1-2.5-3.735V4.043c0-1.637,0.987-3.112,2.5-3.736
                      c1.513-0.625,3.253-0.275,4.407,0.885l17.862,17.951c2.088,2.098,2.088,5.488,0,7.585L9.629,44.68z"
                      />
                    </g>
                    <g>
                      <g>
                        <path
                          d="M38.252,45.975c-2.763,0-5-2.238-5-5V5c0-2.762,2.237-5,5-5c2.762,0,5,2.238,5,5v35.975
                        C43.252,43.736,41.013,45.975,38.252,45.975z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </button>
          </div>
          <div
            class="p-3 border border-site-text flex items-center justify-center"
          >
            <button
              :class="{ 'disabled opacity-70': isDisabledStop }"
              class="
                rounded-full
                bg-site-text
                p-3
                cursor-pointer
                text-white
                flex
                items-center
                justify-center
              "
              @click="handleStop"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 flex"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"
                />
              </svg>
            </button>
          </div>
          <div class="border border-site-text px-3 text-site-text">
            {{ constants.playPause }}
          </div>
          <div class="border border-site-text px-3 text-site-text">
            {{ constants.stop }}
          </div>
          <div
            class="
              border border-site-text
              p-2
              col-span-2
              flex
              justify-center
              gap-2
            "
          >
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
  mounted() {
    this.setupSound(constants.liveRadioStreamURL);
  },
});
</script>

<style scoped></style>

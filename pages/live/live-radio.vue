<template>
  <div class="mb-2.5">
    <tomb-post>
      <template #heading>
        <nuxt-picture
          format="webp"
          class="flex justify-center md:mt-[175px]"
          src="/heading_live_video.jpg"
          :alt="constants.headingLiveVideo"
          :title="constants.headingLiveVideo"
          :img-attrs="{
            class: 'w-[68%] md:w-[48%]',
          }"
        />
      </template>
      <template #default>
        <div class="flex flex-col text-center">
          <div class="cursor-pointer" @click="playSound">Play</div>
          <div class="cursor-pointer" @click="pauseSound">Pause</div>
          <div class="cursor-pointer" @click="stopSound">Stop</div>
        </div>
      </template>
    </tomb-post>
    <live-schedule class="mt-[25px]" />
  </div>
</template>

<script lang="ts">
import { Howl } from "howler";

import Vue from "vue";
import constants from "~/utils/constants";
export default Vue.extend({
  data() {
    return {
      constants,
      sound: null,
    };
  },
  methods: {
    playSound() {
      this.sound = new Howl({
        src: [constants.liveRadioStreamURL],
        html5: true,
      });
      this.sound?.play();
    },
    pauseSound() {
      this.sound?.pause();
    },
    stopSound() {
      this.sound?.stop();
    },
  },
});
</script>

<style scoped></style>

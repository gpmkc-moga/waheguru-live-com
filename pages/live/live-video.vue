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
        <iframe
          class="w-full aspect-video mt-2.5"
          src="https://www.youtube.com/embed/live_stream?channel=UCHHc9uXG4gggMJtyVOMmKvA&amp;autoplay=1&amp;iv_load_policy=3&amp;modestbranding=1&amp;rel=0"
          frameborder="0"
          allow="autoplay; fullscreen"
        ></iframe>
      </template>
    </tomb-post>
    <live-schedule class="mt-[25px]" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import constants from "~/utils/constants";
export default Vue.extend({
  head() {
    return {
      title: constants.liveVideo,
      // meta: [
      //   {
      //     hid: "description",
      //     name: "description",
      //     content: ,
      //     // can get from GurbaniNow api here!
      //     // would be great for Gurbani searches!
      //   },
      // ],
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

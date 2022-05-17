<template>
  <div class="px-2.5">
    <nuxt-picture
      loading="lazy"
      format="webp"
      class="flex justify-center"
      src="/heading_live_schedule.jpg"
      :alt="constants.headingLiveSchedule"
      :title="constants.headingLiveSchedule"
      :img-attrs="{
        class: 'w-[43%] md:w-[30%]',
      }"
    />

    <nuxt-picture
      loading="lazy"
      format="webp"
      class="flex justify-center mt-9"
      src="/text_live_schedule.jpg"
      :img-attrs="{
        class: 'w-full md:w-[90%]',
      }"
    />

    <!-- divider -->
    <div class="my-8 h-[3px] bg-[#FCD77D]" />

    <nuxt-picture
      loading="lazy"
      format="webp"
      class="flex justify-center mt-2.5"
      src="/text_saturday.jpg"
      :img-attrs="{
        class: 'w-[65%] md:w-[55%]',
      }"
    />

    <div class="mt-[26px] mb-4 h-[3px] bg-[#FCD77D]" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import constants from "~/utils/constants";

export default Vue.extend({
  data() {
    return {
      constants,
    };
  },
});
</script>

<style scoped></style>

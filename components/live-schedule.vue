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

    <div
      class="
        text-right
        font-roboto font-bold
        text-base
        md:text-lg
        lg:text-xl
        xl:text-3xl
        mt-8
        w-max
        mx-auto
        inset-0
      "
      data-aos="fade-up"
      v-html="constants.liveSchedule"
    />

    <!-- divider -->
    <div class="my-8 h-[3px] bg-site-yellow-divider" />

    <div
      class="
        text-center
        font-roboto-slab font-medium
        text-base
        md:text-lg
        lg:text-xl
        xl:text-3xl
      "
      data-aos="fade-up"
      v-html="constants.liveScheduleSaturday"
    />

    <div class="mt-[26px] mb-4 h-[3px] bg-site-yellow-divider" />
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

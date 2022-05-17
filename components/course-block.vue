<template>
  <div class="md:basis-1/2 flex flex-col py-2.5 px-[30px]">
    <div class="text-[25px] mb-[1em]" v-html="title" />
    <div
      class="text-[15px] md:text-base mb-[1em] lg:text-base"
      v-html="description"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: null,
      required: true,
    },
    description: {
      type: String,
      default: null,
      required: true,
    },
  },
});
</script>

<style scoped></style>

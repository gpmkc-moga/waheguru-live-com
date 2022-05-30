<template>
  <div
    class="cursor-pointer flex flex-col items-center justify-center text-center"
    :title="title"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-10 w-10"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path fill-rule="evenodd" :d="svgPath" clip-rule="evenodd" />
    </svg>
    <div class="text-xs">{{ title }}</div>
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
    svgPath: {
      type: String,
      default: null,
      required: true,
    },
  },
});
</script>

<style scoped></style>

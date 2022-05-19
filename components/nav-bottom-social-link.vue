<template>
  <a :href="url">
    <div
      class="p-2.5 text-white rounded-full"
      :style="{ 'background-color': color }"
    >
      <svg viewBox="0 0 24 24" class="fill-current w-6 h-6">
        <title>{{ title }}</title>
        <path :d="svgPath"></path>
      </svg>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: null,
      required: true,
    },
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
    url: {
      type: String,
      default: null,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
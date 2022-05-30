<template>
  <ShareNetwork :network="shareNetwork" :url="shareUrl" :title="shareTitle">
    <div
      class="p-2.5 text-white rounded-full"
      :style="{ 'background-color': color }"
    >
      <svg viewBox="0 0 24 24" class="fill-current w-4 h-4">
        <title>{{ shareNetwork }}</title>
        <path :d="svgPath"></path>
      </svg>
    </div>
  </ShareNetwork>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: null,
      required: true,
    },
    svgPath: {
      type: String,
      default: null,
      required: true,
    },
    shareUrl: {
      type: String,
      default: null,
      required: true,
    },
    shareTitle: {
      type: String,
      default: null,
      required: true,
    },
    shareNetwork: {
      type: String,
      default: null,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="flex flex-col md:flex-grow md:flex-row">
    <!-- photo -->
    <nuxt-picture
      format="webp"
      class="flex justify-center p-2.5 md:basis-[36%]"
      :src="photoUrl"
      :title="name"
      :alt="name"
      :img-attrs="{
        class: 'w-1/2 md:w-auto',
      }"
    />
    <div
      class="
        flex flex-col
        text-center
        md:text-left
        p-2.5
        md:basis-[64%] md:self-end md:mb-5
      "
    >
      <!-- title -->
      <div
        class="
          text-[11px]
          xl:text-sm
          font-krona-one
          uppercase
          font-light
          text-site-red
        "
      >
        {{ title }}
      </div>
      <!-- name -->
      <div class="text-base xl:text-xl md:leading-[1.1] font-actor font-medium">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    photoUrl: {
      type: String,
      default: null,
      required: true,
    },
    title: {
      type: String,
      default: null,
      required: true,
    },
    name: {
      type: String,
      default: null,
      required: true,
    },
  },
});
</script>

<style scoped></style>

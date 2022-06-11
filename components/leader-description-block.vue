<template>
  <div
    class="md:max-w-[700px] xl:max-w-[850px] md:mx-auto md:flex"
    :class="{ 'md:flex-row-reverse': reverse }"
  >
    <nuxt-picture
      format="webp"
      class="flex justify-center p-2.5 md:w-[24%] md:justify-end md:self-start"
      :src="photoUrl"
      :alt="name"
      :title="name"
      :img-attrs="{
        class: 'w-1/2 md:w-[90%] md:h-auto',
      }"
    />
    <div
      class="p-2.5 text-center md:w-[76%]"
      :class="{ 'md:text-right': reverse, 'md:text-left': !reverse }"
    >
      <div
        class="
          uppercase
          font-actor
          text-[19px]
          font-medium
          leading-none
          md:mt-[100px]
        "
      >
        {{ name }}
      </div>
      <div
        class="
          mt-2.5
          font-krona-one
          text-site-red text-[13px]
          xl:text-[15px]
          font-light
          uppercase
        "
      >
        {{ title }}
      </div>
      <div class="mt-[3px] font-roboto font-light text-xs uppercase">
        {{ constants.universityTitle }}
      </div>
      <div
        class="
          mt-2.5
          font-roboto font-light
          text-[13px]
          xl:text-[15px]
          leading-normal
          text-justify
        "
        v-html="about"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import constants from "~/utils/constants";

export default Vue.extend({
  props: {
    reverse: {
      type: Boolean,
      default: false,
    },
    photoUrl: {
      type: String,
      default: null,
      required: true,
    },
    name: {
      type: String,
      default: null,
      required: true,
    },
    title: {
      type: String,
      default: null,
      required: true,
    },
    about: {
      type: String,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      constants,
    };
  },
});
</script>

<style scoped></style>

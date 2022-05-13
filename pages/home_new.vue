<template>
  <div>
    <home-slider class="w-full" />

    <!-- hukumnama, programs and founder section -->
    <div class="p-2.5 w-full">
      <!-- hukumnama button -->
      <nuxt-link to="/hukumnama/today">
        <nuxt-picture
          format="webp"
          class="flex justify-center"
          src="/daily_hukumnama.jpg"
          :img-attrs="{
            class:
              'w-1/2 md:w-1/3 hover:scale-110 transition-transform duration-1000',
          }"
        ></nuxt-picture>
      </nuxt-link>
      <!-- upcoming programs heading -->
      <nuxt-picture
        format="webp"
        class="flex justify-center mt-10 lg:mt-20"
        src="/heading_upcoming.png"
        :img-attrs="{
          class: 'w-[62%] md:w-1/2',
        }"
      />
      <!-- programs -->
      <programs-section />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => {
    return {};
  },
  methods: {},
});
</script>

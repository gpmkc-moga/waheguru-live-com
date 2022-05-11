<template>
  <div>
    <home-slider class="w-full" />

    <div class="p-2.5 w-full">
      <!-- hukumnama button -->
      <nuxt-link to="/hukumnama/today">
        <nuxt-picture
          format="webp"
          class="flex justify-center"
          src="daily_hukumnama.jpg"
          :img-attrs="{
            class:
              'w-1/2 md:w-1/3 hover:scale-110 transition-transform duration-1000',
          }"
        ></nuxt-picture>
      </nuxt-link>
    </div>
    <!-- page keeps refreshing in dev mode! -->
    <div v-if="!isDev" class="onesignal-customlink-container"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  asyncData(context) {
    return {
      isDev: context.isDev,
    };
  },
  data: () => {
    return {};
  },
  methods: {},
});
</script>

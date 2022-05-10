<template>
  <client-only placeholder="Loading Slides...">
    <SliderWindow>
      <SliderItem
        v-for="slide in homeSliderContent.slides"
        :key="slide.description"
      >
        <nuxt-picture
          format="webp"
          class="w-full"
          :src="slide.path"
          :alt="slide.description"
        />
      </SliderItem>
    </SliderWindow>
  </client-only>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => {
    return {
      homeSliderContent: {},
    };
  },
  async fetch() {
    this.homeSliderContent = await this.$content("home-slider").fetch();
  },
});
</script>

<style lang="scss" scoped></style>

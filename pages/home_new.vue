<template>
  <div>
    <home-slider
      :home-slider-content-parent="homeSliderContent"
      class="w-full"
    />

    <!-- hukumnama, programs and founder section -->
    <div class="home-tomb-section">
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
        class="flex justify-center mt-14 lg:mt-20 mb-[30px] lg:mb-10"
        src="/heading_upcoming.png"
        :img-attrs="{
          class: 'w-[62%] md:w-1/2',
        }"
      />
      <!-- programs -->
      <programs-grid-home />
      <!-- heading university -->
      <nuxt-picture
        format="webp"
        class="flex justify-center mt-[100px] md:mt-[150px] lg:mt-[175px]"
        src="/heading_university.png"
        :img-attrs="{
          class: 'w-[86%] md:w-[60%]',
        }"
      />
      <!-- bhai sahib and veerji photos -->
      <div class="mt-14 flex flex-col md:flex-row">
        <!-- Bhai sahib block -->
        <photo-block
          photo-url="/photo_bhaisahib.png"
          :title="constants.bhaiSahibTitle"
          :name="constants.bhaiSahibName"
        />
        <photo-block
          photo-url="/photo_veerji.png"
          :title="constants.veerjiTitle"
          :name="constants.veerjiName"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import constants from "~/utils/constants";

export default Vue.extend({
  async asyncData(context) {
    const homeSliderContent = await context.$content("home-slider").fetch();
    const homeSliderContentAny: any = homeSliderContent;
    let metaDescriptionFromSlide = "";
    for (const i in homeSliderContentAny.slides) {
      metaDescriptionFromSlide +=
        homeSliderContentAny.slides[i].description + "\n";
    }
    return {
      homeSliderContent,
      metaDescriptionFromSlide,
    };
  },
  data: () => {
    return {
      constants,
    };
  },
  head() {
    return {
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.metaDescriptionFromSlide,
        },
      ],
    };
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
.home-tomb-section {
  @apply p-2.5 w-full;
  @screen md {
    @apply bg-no-repeat bg-local bg-[length:100%];
    background-image: url("~static/bg_tomb.jpg");
    background-position: 0 334px;
  }
  @screen lg {
    background-position: 0 360px;
  }
}
</style>

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

    <!-- courses section -->

    <div class="courses-section">
      <!-- heading -->
      <div class="text-[25px] uppercase" v-html="constants.ourCourses" />
      <!-- courses -->
      <div class="flex flex-col md:flex-row font-roboto font-light">
        <course-block
          :title="constants.oneYearCourse"
          :description="constants.oneYearCourseDescription"
        />
        <div class="hidden md:block self-stretch m-2.5">
          <div class="w-0.5 bg-black h-full" />
        </div>
        <course-block
          :title="constants.fourYearCourse"
          :description="constants.fourYearCourseDescription"
        />
      </div>
    </div>

    <!-- daily classes section -->
    <div class="flex flex-col mt-[60px] p-2.5">
      <!-- heading we teach -->
      <nuxt-picture
        format="webp"
        class="flex justify-center"
        src="/heading_we_teach.jpg"
        :img-attrs="{
          class: 'w-[35%] md:w-[25%]',
        }"
      />
      <div
        class="
          font-roboto-slab font-medium
          text-center text-[15px]
          md:text-base
          mt-[30px]
          mb-[1.5em]
        "
      >
        {{ constants.dailyClassesHeading }}
      </div>
      <nuxt-picture
        format="webp"
        class="flex justify-center mt-2.5"
        src="/graphic_daily.jpg"
        :img-attrs="{
          class: 'w-full',
        }"
      />
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
.courses-section {
  @apply bg-no-repeat bg-local bg-cover bg-center mt-[60px] relative p-2.5 w-full font-roboto-slab text-center;
  background-image: url("~static/bg_courses.jpg");
}
</style>

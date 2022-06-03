<template>
  <div>
    <home-slider
      :home-slider-content-parent="homeSliderContent"
      class="w-full"
    />

    <!-- hukumnama, programs and founder section -->
    <div class="home-tomb-section">
      <!-- hukumnama button -->
      <div class="w-full text-center">
        <nuxt-link to="/hukumnama/today" class="w-1/2 md:w-1/3 inline-flex">
          <nuxt-picture
            format="webp"
            class="w-full mx-auto inline-flex"
            src="/daily_hukumnama.jpg"
            :alt="constants.readDailyHukumnama"
            :title="constants.readDailyHukumnama"
            :img-attrs="{
              class:
                'w-full hover:scale-110 transition-transform duration-1000',
            }"
          ></nuxt-picture>
        </nuxt-link>
      </div>
      <!-- upcoming programs heading -->
      <nuxt-picture
        format="webp"
        class="flex justify-center mt-14 lg:mt-20 mb-[30px] lg:mb-10"
        src="/heading_upcoming.png"
        :alt="constants.headingUpcoming"
        :title="constants.headingUpcoming"
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
        loading="lazy"
        :alt="constants.headingUniversity"
        :title="constants.headingUniversity"
        :img-attrs="{
          class: 'w-[86%] md:w-[60%]',
        }"
        data-aos="fade-up"
      />
      <!-- bhai sahib and veerji photos -->
      <div class="mt-14 flex flex-col md:flex-row" data-aos="fade-up">
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

    <div class="courses-section" data-aos="fade-up">
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
    <div class="flex flex-col mt-[60px] p-2.5" data-aos="fade-up">
      <!-- heading we teach -->
      <nuxt-picture
        format="webp"
        class="flex justify-center"
        loading="lazy"
        src="/heading_we_teach.jpg"
        :alt="constants.headingWeTeach"
        :title="constants.headingWeTeach"
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
        src="/graphic_daily_classes.jpg"
        loading="lazy"
        :img-attrs="{
          class: 'w-full',
        }"
      />
    </div>
    <!-- online and radio -->
    <div class="flex flex-col mt-[30px] p-2.5" data-aos="fade-up">
      <div class="flex flex-col">
        <!-- title -->
        <div class="font-roboto-slab font-medium text-[19px] text-center">
          {{ constants.joinClasses }}
        </div>
        <!-- icons -->
        <div class="flex justify-center gap-3 mt-4 text-site-dark-gray">
          <nuxt-link
            to="/live/live-video"
            class="p-2 text-white bg-site-dark-gray rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
              />
            </svg>
          </nuxt-link>
          <nuxt-link
            to="/live/live-radio"
            class="p-2 text-white bg-site-dark-gray rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                clip-rule="evenodd"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
    <!-- extra learning section -->
    <div class="flex flex-col mt-[70px] mb-10 p-2.5" data-aos="fade-up">
      <!-- heading extra classes -->
      <nuxt-picture
        format="webp"
        loading="lazy"
        class="flex justify-center"
        src="/heading_extra_learning_classes.jpg"
        :alt="constants.headingExtraClasses"
        :title="constants.headingExtraClasses"
        :img-attrs="{
          class: 'w-[75%] md:w-[55%]',
        }"
      />
      <nuxt-picture
        loading="lazy"
        format="webp"
        class="flex justify-center mt-[30px]"
        src="/graphic_extra_classes.jpg"
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
    const config = await context.$content("config").fetch();
    const homeSliderContentAny: any = homeSliderContent;
    let metaDescriptionFromSlide = "";
    for (const i in homeSliderContentAny.slides) {
      metaDescriptionFromSlide +=
        homeSliderContentAny.slides[i].description + "\n";
    }
    return {
      homeSliderContent,
      metaDescriptionFromSlide,
      config,
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
          content:
            this.metaDescriptionFromSlide +
            "\n\n" +
            this.config.main_description,
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            this.metaDescriptionFromSlide +
            "\n\n" +
            this.config.main_description,
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

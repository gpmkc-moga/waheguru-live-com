<template>
  <div class="mb-2.5">
    <TombPost :hide-frame="true">
      <template>
        <nuxt-picture
          format="webp"
          class="flex justify-center md:mt-[115px] lg:mt-[160px] xl:mt-[190px]"
          src="/heading_our_mission.jpg"
          :alt="constants.headingOurMission"
          :title="constants.headingOurMission"
          :img-attrs="{
            class: 'w-[46%] md:w-[26%]',
          }"
        />

        <p
          class="
            p-2.5
            font-roboto
            text-[13px]
            lg:text-[15px]
            text-center
            mt-[18px]
            mb-[1.5em]
            leading-relaxed
          "
          v-html="constants.ourMissionText"
        />

        <div class="my-4 h-[2px] bg-site-yellow-divider w-[30%] mx-auto" />

        <nuxt-picture
          format="webp"
          class="flex justify-center mt-10"
          src="/heading_about_us.jpg"
          :alt="constants.headingAboutUs"
          :title="constants.headingAboutUs"
          :img-attrs="{
            class: 'w-[37%] md:w-[21%]',
          }"
        />

        <!-- bhai sahib about us section  -->
        <leader-description-block
          class="mt-[50px]"
          photo-url="/photo_bhaisahib.png"
          :name="constants.bhaiSahibName"
          :title="constants.bhaiSahibTitle"
          :about="constants.bhaiSahibAbout"
        />
        <leader-description-block
          data-aos="fade-up"
          class="mt-[30px]"
          photo-url="/photo_veerji.png"
          :name="constants.veerjiName"
          :title="constants.veerjiTitle"
          :about="constants.veerjiAbout"
          :reverse="true"
        />
      </template>
    </TombPost>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import constants from "~/utils/constants";
export default Vue.extend({
  layout: "with-footer-map",
  data() {
    return {
      constants,
    };
  },
  head() {
    return {
      title: constants.about,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: constants.about,
        },
      ],
    };
  },
});
</script>

<style scoped></style>

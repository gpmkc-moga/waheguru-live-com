<template>
  <div class="mb-2.5">
    <TombPost :hideFrame="true">
      <template>
        <nuxt-picture
          format="webp"
          class="flex justify-center md:mt-[115px]"
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
            text-[13px] text-center
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
          photoUrl="/photo_bhaisahib.png"
          :name="constants.bhaiSahibName"
          :title="constants.bhaiSahibTitle"
          :about="constants.bhaiSahibAbout"
        />
        <leader-description-block
          data-aos="fade-up"
          class="mt-[30px]"
          photoUrl="/photo_veerji.png"
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
  head() {
    return {
      title: constants.about,
      // meta: [
      //   {
      //     hid: "description",
      //     name: "description",
      //     content: ,
      //     // can get from GurbaniNow api here!
      //     // would be great for Gurbani searches!
      //   },
      // ],
    };
  },
  layout: "with-footer-map",
  data() {
    return {
      constants,
    };
  },
});
</script>

<style scoped></style>

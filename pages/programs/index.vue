<template>
  <div class="mb-2.5">
    <!-- tomp post component  -->
    <tomb-post>
      <template #heading>
        <nuxt-picture
          format="webp"
          class="flex justify-center md:mt-[150px]"
          src="/heading_programs.jpg"
          :alt="constants.headingPrograms"
          :title="constants.headingPrograms"
          :img-attrs="{
            class: 'w-[37%] lg:w-[26%]',
          }"
        />
      </template>
      <template #default>
        <divider-title
          class="
            md:w-1/2
            mt-2.5
            text-site-gray
            font-roboto-slab font-medium
            text-sm
            md:text-lg
          "
          >Gurdwara Sahib Annual Programs</divider-title
        >
        <programs-grid :with-posters="true" :programs="headquarterPrograms" />

        <divider-title
          class="
            md:w-1/2
            mt-2.5
            text-site-gray
            font-roboto-slab font-medium
            text-sm
            md:text-lg
          "
          >Other Programs</divider-title
        >
        <programs-grid :with-posters="true" :programs="outsidePrograms" />
      </template>
    </tomb-post>

    <contact-phone-widget class="mt-5" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  checkFutureProgram,
  compareProgramsStartDate,
  checkLocation,
} from "~/utils/common_fun";
import constants from "~/utils/constants";

export default Vue.extend({
  async asyncData(context) {
    const programsData = await context.$content("programs").fetch();
    return {
      programsData,
    };
  },
  data() {
    return {
      constants,
    };
  },

  computed: {
    headquarterPrograms() {
      return this.getLocationPrograms(constants.programLocations.headquarters);
    },
    outsidePrograms() {
      return this.getLocationPrograms(constants.programLocations.outside);
    },
  },
  methods: {
    getLocationPrograms(location: string) {
      if (this.programsData.programs) {
        const locationPrograms = this.programsData.programs.filter(
          checkLocation(location)
        );

        // future program_end_date only
        const futurePrograms = locationPrograms.filter(checkFutureProgram);

        // sort this array by start date
        const sortedFuturePrograms = futurePrograms.sort(
          compareProgramsStartDate
        );

        return sortedFuturePrograms;
      }
      return [];
    },
  },
});
</script>

<style scoped lang="scss"></style>

<template>
  <div>
    <div v-if="$fetchState.pending" class="w-full flex justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="animate-spin h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    </div>
    <p v-else-if="$fetchState.error">Error while getting programs!</p>
    <div v-else class="grid grid-cols-1 gap-4 m-4 md:grid-cols-2">
      <program-block
        v-for="(program, idx) in filteredPrograms"
        :key="idx"
        :program="program"
      />
      <!-- view all button -->
      <div
        v-if="filteredPrograms.length > 0"
        class="flex justify-center items-center min-h-[87px]"
        :class="{ 'col-span-2': filteredPrograms.length === 2 }"
      >
        <nuxt-link to="/programs">
          <button
            class="
              bg-site-gray
              border border-site-yellow
              rounded-[1px]
              uppercase
              font-raleway font-medium
              text-white text-sm
              md:text-base
              py-3
              px-6
              mt-2
              md:mt-0
            "
          >
            View All
          </button>
        </nuxt-link>
      </div>
      <div
        v-if="filteredPrograms.length === 0"
        class="col-span-2 text-center md:min-h-[87px]"
      >
        <!-- if no programs -->
        {{ constants.noUpcoming }}
      </div>
      <div
        v-if="filteredPrograms.length < 2"
        class="col-span-2 md:min-h-[87px]"
      >
        <!-- empty row for styling -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import constants from "~/utils/constants";
import {
  checkFutureProgram,
  checkProgramIndexLessThan3,
  compareProgramsStartDate,
} from "~/utils/common_fun";

export default Vue.extend({
  data: () => {
    return {
      programsContent: {},
      constants,
    };
  },
  async fetch() {
    this.programsContent = await this.$content("programs").fetch();
  },
  computed: {
    filteredPrograms() {
      if (this.programsContent.programs) {
        // future program_end_date only
        const futurePrograms =
          this.programsContent.programs.filter(checkFutureProgram);

        // sort this array by start date
        const sortedFuturePrograms = futurePrograms.sort(
          compareProgramsStartDate
        );

        // get only 3 for this page
        const filterPrograms = sortedFuturePrograms.filter(
          checkProgramIndexLessThan3
        );

        return filterPrograms;
      }
      return [];
    },
  },
});
</script>

<style scoped></style>

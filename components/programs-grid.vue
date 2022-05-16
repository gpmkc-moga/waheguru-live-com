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
    <p v-else-if="$fetchState.error">Error while getting slides!</p>
    <div v-else class="grid grid-cols-1 gap-4 m-4 md:grid-cols-2">
      <program-block
        v-for="(program, idx) in filteredPrograms"
        :key="idx"
        :program="program"
      />
      <!-- view all button -->
      <div class="flex justify-center items-center">
        <nuxt-link to="/programs">
          <button
            class="
              bg-site-gray
              border border-site-yellow
              rounded-[1px]
              uppercase
              font-raleway font-medium
              text-white text-base
              md:text-lg
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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  checkFutureProgram,
  checkProgramIndexLessThan3,
  compareProgramsStartDate,
} from "~/plugins/common_fun";

export default Vue.extend({
  data: () => {
    return {
      programsContent: {},
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

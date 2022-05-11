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
    <div v-else>
      <!-- {
      "smagam_location": "Headquarters",
      "smagam_start_date": "2022-08-10T00:00:00+05:30",
      "smagam_address_line_1": "Rauli Road",
      "smagam_address_line_2": "Moga, Punjab",
      "smagam_poster": "",
      "smagam_name": "Janam Diwas Bhai Sewa Singh ji Tarmala 2022",
      "smagam_end_date": "2022-08-11T00:00:00+05:30"
    }, -->
      <div v-for="(program, idx) in programsContent.programs" :key="idx">
        {{ program }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => {
    return {
      programsContent: {},
    };
  },
  async fetch() {
    this.programsContent = await this.$content("programs").fetch();
  },
});
</script>

<style scoped></style>

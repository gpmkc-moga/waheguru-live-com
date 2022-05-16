<template>
  <div>
    <div class="grid grid-cols-1 gap-4 m-4 md:grid-cols-2">
      <program-block
        v-for="(program, idx) in programs"
        :key="idx"
        :with-poster="withPosters"
        :program="program"
      />
      <div
        v-if="programs.length === 0"
        class="col-span-2 text-center md:min-h-[87px]"
      >
        <!-- if no programs -->
        {{ constants.noUpcoming }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import constants from "~/utils/constants";

export default Vue.extend({
  props: {
    programs: {
      type: Array,
      default: null,
      required: true,
    },
    withPosters: {
      type: Boolean,
      default: false,
    },
  },
  data: () => {
    return {
      constants,
    };
  },
});
</script>

<style scoped></style>

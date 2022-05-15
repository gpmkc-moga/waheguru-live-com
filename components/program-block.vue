<template>
  <div class="flex flex-col md:flex-row">
    <!-- {
      "program_location": "Headquarters",
      "program_start_date": "2022-08-10T00:00:00+05:30",
      "program_address_line_1": "Rauli Road",
      "program_address_line_2": "Moga, Punjab",
      "program_poster": "",
      "program_name": "Janam Diwas Bhai Sewa Singh ji Tarmala 2022",
      "program_end_date": "2022-08-11T00:00:00+05:30"
    }, -->

    <!-- date -->
    <div
      class="
        text-center
        leading-[1.1]
        text-white
        md:basis-1/4
        p-2.5
        md:p-3.5
        bg-[#485362]
        font-mitr font-light
        md:flex md:flex-col md:justify-center
        items-center
      "
    >
      <div class="text-[39px]">
        {{ new Date(program.program_start_date).getDate() }}
      </div>
      <div class="text-[13px] uppercase">
        {{
          new Date(program.program_start_date).toLocaleString("default", {
            month: "long",
          })
        }}
      </div>
      <div class="text-[17px]">
        {{ new Date(program.program_start_date).getFullYear() }}
      </div>
    </div>
    <!-- location -->
    <div
      class="
        text-center
        leading-[1.1]
        md:text-left md:basis-3/4
        p-2.5
        md:p-3.5 md:align-middle
        bg-[#FDD76F]
        font-raleway font-medium
        text-[#485362]
        md:flex md:flex-col md:justify-center
        items-center
      "
    >
      <div class="text-[30px]">
        {{ program.program_address_line_1 }}
      </div>
      <div class="text-[17px]">
        {{ program.program_address_line_2 }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    program: {
      type: Object,
      default: null,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>

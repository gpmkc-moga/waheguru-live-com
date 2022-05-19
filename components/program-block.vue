<template>
  <div class="flex flex-col">
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
          leading-[1.1]
          text-white
          md:basis-1/4
          p-1.5
          bg-site-gray
          font-mitr font-light
          flex flex-col
          justify-center
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
          p-1.5
          md:pl-3.5 md:align-middle
          bg-site-yellow
          font-raleway font-medium
          text-site-gray
          flex flex-col
          justify-center
          items-center
          md:items-start
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
    <a
      v-if="withPoster && program.program_poster"
      :href="program.program_poster"
      target="_blank"
    >
      <nuxt-picture
        format="webp"
        class="w-full"
        :src="program.program_poster"
        :img-attrs="{
          class: 'w-full',
        }"
      />
    </a>
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
    withPoster: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped></style>

<template>
  <a :href="`tel:${constants.phoneNumber}`">
    <div
      class="
        bg-site-gray
        py-2.5
        px-4
        relative
        flex flex-col
        md:flex-row md:items-center
        w-max
        rounded
        mx-auto
      "
    >
      <!-- icon -->
      <div
        class="
          bg-white
          rounded
          text-site-gray
          p-0.5
          mb-4
          md:mb-0 md:mr-4
          h-10
          w-10
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
          />
        </svg>
      </div>
      <!-- more info/number -->
      <div class="flex flex-col text-white font-roboto-slab md:text-lg">
        <div class="text-lg md:text-xl">{{ constants.forMoreInfo }}</div>
        <div>{{ constants.phoneNumber }}</div>
      </div>
    </div>
  </a>
</template>

<script>
import constants from "~/utils/constants";
export default {
  data() {
    return {
      constants,
    };
  },
};
</script>

<style lang="scss" scoped></style>

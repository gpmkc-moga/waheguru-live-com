<template>
  <div class="mb-2.5">
    <!-- tomp post component  -->
    <tomb-post>
      <template #heading>
        <nuxt-picture
          format="webp"
          class="flex justify-center md:mt-[150px]"
          src="/heading_programs.jpg"
          :img-attrs="{
            class: 'w-[37%] lg:w-[26%]',
          }"
        />
      </template>
      <template #default>
        <!-- Gurdwara Sahib Annual Programs -->
        <div class="divider-title">Gurdwara Sahib Annual Programs</div>
        <!-- Other Programs -->
        <div class="divider-title">Other Programs</div>
      </template>
    </tomb-post>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped></style>

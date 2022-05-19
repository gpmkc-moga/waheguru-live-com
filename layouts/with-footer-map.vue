<template>
  <div class="max-w-5xl mx-auto inset-x-0">
    <nav-top />

    <Nuxt />

    <!-- navbar bottom -->
    <nav-bottom :withMap="true"></nav-bottom>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped lang="scss"></style>

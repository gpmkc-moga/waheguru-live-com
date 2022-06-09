<template>
  <div class="layout-div-wrapper">
    <div class="layout-div">
      <nav-top />
      <Nuxt />
      <!-- navbar bottom -->
      <nav-bottom :with-map="true"></nav-bottom>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped lang="scss"></style>

<template>
  <div></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  asyncData({ redirect, isDev }) {
    if (isDev) {
      redirect(302, "/index1");
    } else {
      redirect(302, "https://wahegurulive.com/index1");
    }
  },
});
</script>

<style scoped></style>

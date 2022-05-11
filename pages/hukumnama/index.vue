<template>
  <div></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  asyncData({ redirect }) {
    redirect(302, "/hukumnama/today");
  },
});
</script>

<style scoped></style>

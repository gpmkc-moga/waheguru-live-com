<template>
  <div class="flex items-center text-center mx-auto">
    <div class="divider-bar"></div>
    <slot></slot>
    <div class="divider-bar"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.divider-bar {
  @apply flex-grow border-b border-black mx-2.5;
}
</style>

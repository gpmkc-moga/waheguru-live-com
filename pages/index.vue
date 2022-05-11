<template>
  <div>
    <home-slider class="w-full" />
    <!-- page keeps refreshing in dev mode! -->
    <div v-if="!isDev" class="onesignal-customlink-container"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  asyncData(context) {
    return {
      isDev: context.isDev,
    };
  },
  data: () => {
    return {};
  },
  methods: {},
});
</script>

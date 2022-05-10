<template>
  <div>
    <div style="width: 100%; margin: 20px auto; height: 400px">
      <home-slider />
    </div>
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

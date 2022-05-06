<template>
  <div>
    <div>Waheguru Live</div>
    <!-- page keeps refreshing in dev mode! -->
    <div v-if="!isDev" class="onesignal-customlink-container"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
  asyncData(context) {
    return {
      isDev: context.isDev,
    };
  },
  methods: {},
});
</script>

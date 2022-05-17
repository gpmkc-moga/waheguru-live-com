<template>
  <!-- tomp post component  -->
  <div class="p-2.5 tomb-bg">
    <!-- heading -->
    <slot name="heading"></slot>
    <!-- end of heading -->

    <nuxt-picture
      format="webp"
      class="flex justify-center mt-5 mb-2.5"
      src="/frame_post_top.png"
      :img-attrs="{
        class: 'w-4/5',
      }"
    />
    <!-- content  -->
    <slot></slot>
    <!-- end of content -->

    <nuxt-picture
      format="webp"
      class="flex justify-center mt-2.5"
      loading="lazy"
      src="/frame_post_bottom.png"
      :img-attrs="{
        class: 'w-4/5',
      }"
    />
  </div>
  <!-- end of component -->
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
.tomb-bg {
  @screen md {
    @apply bg-no-repeat bg-local bg-[length:100%];
    background-image: url("~static/bg_tomb_about.jpg");
    background-position: 0 -48px;
  }
}
</style>

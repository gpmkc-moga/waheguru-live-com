<template>
  <div class="p-2.5 tomb-hukumnama">
    <!-- heading -->
    <nuxt-picture
      format="webp"
      class="flex justify-center md:mt-[140px]"
      src="/heading_daily_hukumnama.jpg"
      :img-attrs="{
        class: 'w-3/5 md:w-2/5',
      }"
    />
    <nuxt-picture
      format="webp"
      class="flex justify-center mt-5"
      src="/frame_post_top.png"
      :img-attrs="{
        class: 'w-4/5',
      }"
    />
    <!-- hukumnama content  -->

    <div class="ccenter-col-content w-full">
      <!-- hukumnama audio -->

      <audio
        v-if="hukumnamaContent.audio"
        class="mt-4 p-2 md:p-0"
        controls
        controlsList="nodownload"
        :src="hukumnamaContent.audio"
      ></audio>
      <!-- hukumnama photo -->
      <div v-if="hukumnamaContent.photo" id="lightgallery" class="w-full">
        <!-- caveat: https://github.com/nuxt/nuxt.js/issues/4544#issuecomment-451698704 -->
        <a :href="hukumnamaContent.photo" target="_blank">
          <nuxt-picture
            alt="Hukumnama Photo"
            format="webp"
            quality="100"
            class="flex justify-center mt-5 w-full"
            :src="hukumnamaContent.photo"
            :img-attrs="{
              class: 'w-full md:w-auto',
            }"
          />
        </a>
      </div>
    </div>

    <nuxt-picture
      format="webp"
      class="flex justify-center mt-5"
      src="/frame_post_bottom.png"
      :img-attrs="{
        class: 'w-4/5',
      }"
    />
    <!-- page keeps refreshing in dev mode! -->
    <!-- <div
      v-if="!isDev"
      class="ccenter-col-content justify-center onesignal-customlink-container"
    ></div> -->
    <!-- <div
      class="ccenter-col-content justify-center onesignal-customlink-container"
    ></div> -->

    <!-- custom link setup onesignal -->
    <onesignal-subscription-button />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async asyncData(context) {
    const hukumnamaContent = await context.$content("daily-hukumnama").fetch();
    return {
      hukumnamaContent,
      isDev: context.isDev,
    };
  },
  data() {
    return {
      hukumnamaContent: {
        photo: null,
      },
    };
  },
  head() {
    return {
      title: "Today's Hukumnama",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Hukumnama Photo and Audio",
          // can get from GurbaniNow api here!
          // would be great for Gurbani searches!
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.tomb-hukumnama {
  @screen md {
    @apply bg-no-repeat bg-local bg-[length:100%];
    background-image: url("~static/bg_tomb_about.jpg");
    background-position: 0 -48px;
  }
}
.ccenter-col-content {
  @apply flex flex-col
        items-center;
}
</style>

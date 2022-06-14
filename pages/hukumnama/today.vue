<template>
  <div class="mb-2.5">
    <!-- tomp post component  -->
    <tomb-post>
      <template #heading>
        <nuxt-picture
          format="webp"
          class="flex justify-center md:mt-[140px] lg:mt-[190px]"
          src="/heading_daily_hukumnama.jpg"
          :alt="constants.headingDailyHukumnama"
          :title="constants.headingDailyHukumnama"
          :img-attrs="{
            class: 'w-3/5 md:w-2/5',
          }"
        />
      </template>
      <template #default>
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
          <div v-if="hukumnamaContent.photo" class="w-full">
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
      </template>
    </tomb-post>
    <!-- end of component -->

    <!-- custom link setup onesignal -->
    <onesignal-subscription-button />
    <!--  -->
    <!-- <div class="onesignal-customlink-container"></div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import constants from "~/utils/constants";

export default Vue.extend({
  async asyncData(context) {
    const hukumnamaContent = await context.$content("daily-hukumnama").fetch();
    const config = await context.$content("config").fetch();
    return {
      hukumnamaContent,
      config,
      isDev: context.isDev,
    };
  },
  data() {
    return {
      constants,
      hukumnamaContent: {
        photo: null,
      },
    };
  },
  head() {
    return {
      title: constants.dailyHukumnama,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: constants.dailyHukumnama,
        },
        {
          hid: "description",
          name: "description",
          content: this.hukumnamaContent.has_gurbani_description
            ? this.hukumnamaContent.Gurbani
            : this.config.main_description,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.hukumnamaContent.has_gurbani_description
            ? this.hukumnamaContent.Gurbani
            : this.config.main_description,
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.ccenter-col-content {
  @apply flex flex-col
        items-center;
}
</style>

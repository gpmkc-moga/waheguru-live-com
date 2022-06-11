<template>
  <div class="mb-2.5">
    <TombPost :hide-frame="true">
      <template #heading>
        <nuxt-picture
          format="webp"
          class="flex justify-center md:mt-[150px] lg:mt-[230px]"
          src="/heading_contact_us.jpg"
          :alt="constants.headingContactUs"
          :title="constants.headingContactUs"
          :img-attrs="{
            class: 'w-[38%] md:w-[27%]',
          }"
        />
      </template>

      <template>
        <div class="flex flex-col md:flex-row mt-[50px]">
          <div
            class="
              p-2.5
              font-roboto
              text-[15px]
              md:text-base
              xl:text-lg
              md:w-[45%] md:self-center
            "
            v-html="constants.contactInfo"
          />

          <div class="border-site-yellow m-2.5 border-4 md:w-[55%]">
            <iframe
              class="aspect-[600/450] w-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27408.379413802566!2d75.22553636978581!3d30.829337199999983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcbf0f73d225708c3!2sGurdwara%20Prabh%20Milne%20Ka%20Chao!5e0!3m2!1sen!2sin!4v1652873807440!5m2!1sen!2sin"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </template>
    </TombPost>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import constants from "~/utils/constants";

export default Vue.extend({
  data() {
    return {
      constants,
    };
  },
  head() {
    return {
      title: constants.contact,
      meta: [
        {
          hid: "og:title",
          name: "og:title",
          content: constants.contact,
        },
      ],
    };
  },
});
</script>

<style scoped></style>

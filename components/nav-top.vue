<template>
  <div class="nav-top-wrapper">
    <!-- tablet and mobile -->
    <div class="lg:hidden relative">
      <!-- https://www.freecodecamp.org/news/4-reasons-your-z-index-isnt-working-and-how-to-fix-it-coder-coder-6bc05f103e6c/ -->
      <div
        class="z-30 bg-white relative flex flex-col items-center md:flex-row"
      >
        <nuxt-link to="/" class="m-2 w-full md:basis-3/5 flex justify-center">
          <nuxt-picture
            width="366"
            format="webp"
            class="flex w-1/2 justify-center"
            src="/GPMKC_Logo.png"
            :alt="logoAlt"
            :title="logoAlt"
          />
        </nuxt-link>

        <div class="m-2 md:basis-2/5 flex justify-center">
          <div
            class="p-1 bg-slate-100 cursor-pointer rounded"
            @click="isMenuOpen = !isMenuOpen"
          >
            <svg
              v-if="!isMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 stroke-[0.8] fill-site-gray"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-if="isMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 stroke-[2.5] stroke-site-gray"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- slide down menu holder -->
      <div class="z-20 relative w-full h-0">
        <!-- slide down menu -->
        <transition name="slide-down">
          <div
            v-show="isMenuOpen"
            class="top-0 bg-white absolute flex flex-col w-full"
          >
            <nuxt-link to="/about" class="mobile-menu-item z-10"
              >About</nuxt-link
            >
            <nuxt-link to="/" class="mobile-menu-item z-10">Home</nuxt-link>
            <a
              href="/live"
              class="z-10 mobile-menu-item-dropdown"
              @click.prevent="isLiveMenuOpen = !isLiveMenuOpen"
              >Live</a
            >
            <transition name="slide-down">
              <div
                v-show="isLiveMenuOpen"
                class="z-0 relative flex flex-col w-full"
              >
                <nuxt-link to="/live/live-radio" class="mobile-menu-item-sub"
                  >Live Radio</nuxt-link
                >
                <nuxt-link to="/live/live-video" class="mobile-menu-item-sub"
                  >Live Video</nuxt-link
                >
              </div>
            </transition>
            <a
              href="/gallery"
              class="z-10 mobile-menu-item-dropdown"
              @click.prevent="isGalleryMenuOpen = !isGalleryMenuOpen"
              >{{ constants.gallery }}</a
            >
            <transition name="slide-down">
              <div
                v-show="isGalleryMenuOpen"
                class="z-0 relative flex flex-col w-full"
              >
                <a
                  :href="constants.videoGalleryLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mobile-menu-item-sub"
                  >{{ constants.video }}</a
                >
                <a
                  :href="constants.photoGalleryLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mobile-menu-item-sub"
                  >{{ constants.photo }}</a
                >
                <nuxt-link to="/gallery/audio" class="mobile-menu-item-sub">{{
                  constants.audio
                }}</nuxt-link>
                <a
                  :href="constants.instagramGalleryLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mobile-menu-item-sub"
                  >{{ constants.instagram }}</a
                >
              </div>
            </transition>
            <a
              :href="constants.orderOnWhatsAppLink"
              target="_blank"
              rel="noopener noreferrer"
              class="mobile-menu-item"
              >{{ constants.store }}</a
            >
            <nuxt-link to="/contact" class="mobile-menu-item"
              >Contact</nuxt-link
            >
          </div>
        </transition>
      </div>
    </div>
    <!-- desktop -->
    <div class="hidden relative lg:flex items-center">
      <nuxt-link to="/" class="basis-1/4 m-2">
        <nuxt-picture
          format="webp"
          class="block w-full"
          src="/GPMKC_Logo.png"
          :alt="logoAlt"
          :title="logoAlt"
        />
      </nuxt-link>
      <div class="basis-3/4 m-2 flex justify-center items-center">
        <nuxt-link to="/about" class="menu-item">About</nuxt-link>
        <nuxt-link to="/" class="menu-item">Home</nuxt-link>
        <div
          class="h-full flex flex-col"
          @mouseenter="isLiveMenuOpen = true"
          @mouseleave="isLiveMenuOpen = false"
        >
          <a to="/live" class="menu-item-dropdown" @click.prevent="">Live</a>
          <div class="z-20 relative h-0 w-0 overflow-visible">
            <transition name="fade">
              <div
                v-show="isLiveMenuOpen"
                class="bg-white w-max absolute flex flex-col"
              >
                <nuxt-link to="/live/live-radio" class="menu-item-sub"
                  >Live Radio</nuxt-link
                >
                <nuxt-link to="/live/live-video" class="menu-item-sub"
                  >Live Video</nuxt-link
                >
              </div>
            </transition>
          </div>
        </div>
        <div
          class="h-full flex flex-col"
          @mouseenter="isGalleryMenuOpen = true"
          @mouseleave="isGalleryMenuOpen = false"
        >
          <a to="/gallery" class="menu-item-dropdown" @click.prevent="">{{
            constants.gallery
          }}</a>
          <div class="z-20 relative h-0 w-0 overflow-visible">
            <transition name="fade">
              <div
                v-show="isGalleryMenuOpen"
                class="bg-white w-max absolute flex flex-col"
              >
                <a
                  :href="constants.videoGalleryLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="menu-item-sub"
                  >{{ constants.video }}</a
                >
                <a
                  :href="constants.photoGalleryLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="menu-item-sub"
                  >{{ constants.photo }}</a
                >
                <nuxt-link to="/gallery/audio" class="menu-item-sub">{{
                  constants.audio
                }}</nuxt-link>
                <a
                  :href="constants.instagramGalleryLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="menu-item-sub"
                  >{{ constants.instagram }}</a
                >
              </div>
            </transition>
          </div>
        </div>
        <a
          :href="constants.orderOnWhatsAppLink"
          target="_blank"
          rel="noopener noreferrer"
          class="menu-item"
          >{{ constants.store }}</a
        >
        <nuxt-link to="/contact" class="menu-item">Contact</nuxt-link>
      </div>
    </div>
    <!-- popup -->
    <transition name="fade">
      <div v-if="isPopupOpen && popup.image != ''">
        <!-- backdrop -->
        <div
          class="fixed z-50 inset-0 w-screen h-screen bg-black bg-opacity-20"
          @click="isPopupOpen = false"
        />
        <!-- close button -->
        <div
          class="
            text-white
            flex
            justify-center
            items-center
            fixed
            top-0
            right-0
            hover:opacity-70
            z-50
            p-3
            md:p-6
            cursor-pointer
          "
          @click="isPopupOpen = false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <!-- photo frame -->
        <a :href="popup.image" target="_blank" @click="isPopupOpen = false">
          <nuxt-picture
            format="webp"
            class="z-50 w-max h-max fixed inset-0 m-auto"
            :src="popup.image"
            :img-attrs="{
              class: 'max-w-[80vw] max-h-[80vh] object-contain',
            }"
          >
          </nuxt-picture>
        </a>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import constants from "~/utils/constants";

export default Vue.extend({
  data: () => {
    return {
      isMenuOpen: false,
      isLiveMenuOpen: false,
      isGalleryMenuOpen: false,
      isPopupOpen: false,
      logoAlt:
        "Gurdwara Prabh Milne Ka Chao, Moga | Bhai Sewa Singh Ji Tarmala",
      popup: null,
      constants,
    };
  },
  watch: {
    isMenuOpen(value) {
      if (!value) {
        this.isLiveMenuOpen = false;
        this.isGalleryMenuOpen = false;
      }
    },
    // https://stackoverflow.com/a/71685443/10030480
    $route() {
      this.isMenuOpen = false;
    },
  },
  async mounted() {
    this.popup = await this.$content("popup").fetch();
    if (!this.isPopupShown) {
      if (this.popup.image != "") {
        setTimeout(() => {
          this.isPopupOpen = true;
          this.registerPopupShown();
        }, this.popup.timeout * 1000);
      }
    }
  },
  computed: {
    ...mapState([
      // map this.count to store.state.count
      "isPopupShown",
    ]),
  },
  methods: {
    ...mapMutations({
      registerPopupShown: "registerPopupShown",
    }),
  },
});
</script>

<style scoped lang="scss">
.mobile-menu-item {
  @apply cursor-pointer
              p-3
              hover:bg-site-gray hover:text-white
              text-site-gray
              bg-white
              uppercase
              text-[11px]
              text-center
              font-krona-one;
  &.nuxt-link-exact-active {
    @apply bg-site-gray text-white;
  }
  &-sub {
    @extend .mobile-menu-item;
    @apply capitalize;
    &.nuxt-link-exact-active {
      @apply bg-site-gray text-white;
    }
  }
  &-dropdown {
    @extend .mobile-menu-item;
    &.nuxt-link-active {
      @apply bg-site-gray text-white;
    }
  }
}

.menu-item {
  @apply cursor-pointer
  transition-colors
              p-3
              border-b-4
              border-b-transparent
              hover:border-b-yellow-600 
              text-site-gray
              uppercase
              text-[11px]
              font-krona-one;
  &.nuxt-link-exact-active {
    @apply border-b-yellow-600;
  }
  &-sub {
    @extend .menu-item;
    @apply capitalize border-b-0 hover:border-b-0 hover:bg-site-gray hover:text-white
              text-site-gray
              bg-white;
    &.nuxt-link-exact-active {
      @apply bg-site-gray text-white;
    }
  }
  &-dropdown {
    @extend .menu-item;
    &.nuxt-link-active {
      @apply border-b-yellow-600;
    }
  }
}

.slide-down-enter-active,
.slide-down-leave-active {
  @apply transition-transform;
}
.slide-down-enter, .slide-down-leave-to /* .fade-leave-active below version 2.1.8 */ {
  @apply -translate-y-full;
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-700;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  @apply opacity-0;
}
.nav-top-wrapper {
  @apply relative
      lg:px-8 lg:mx-auto lg:sticky lg:top-0
      bg-white
      lg:bg-opacity-80 z-50;
}
</style>

<template>
  <div class="relative lg:max-w-[960px] lg:mx-auto">
    <!-- tablet and mobile -->
    <div class="lg:hidden">
      <!-- https://www.freecodecamp.org/news/4-reasons-your-z-index-isnt-working-and-how-to-fix-it-coder-coder-6bc05f103e6c/ -->
      <div
        class="bg-white z-30 relative flex flex-col items-center md:flex-row"
      >
        <nuxt-link to="/" class="m-2 w-full md:basis-3/5 flex justify-center">
          <nuxt-picture
            width="366"
            format="webp"
            class="flex w-1/2 justify-center"
            src="/GPMKC_Logo.png"
            :alt="logoAlt"
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
              class="h-6 w-6 stroke-[0.8] fill-slate-700"
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
              class="h-6 w-6 stroke-[2.5] stroke-slate-700"
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
            class="top-0 absolute flex flex-col w-screen"
          >
            <nuxt-link
              to="/about"
              class="mobile-menu-item z-10"
              @click.native="isMenuOpen = false"
              >About</nuxt-link
            >
            <nuxt-link
              to="/"
              class="mobile-menu-item z-10"
              @click.native="isMenuOpen = false"
              >Home</nuxt-link
            >
            <a
              class="z-10 mobile-menu-item"
              @click="isLiveMenuOpen = !isLiveMenuOpen"
              >Live</a
            >
            <transition name="slide-down">
              <div
                v-show="isLiveMenuOpen"
                class="z-0 relative flex flex-col w-full"
              >
                <nuxt-link
                  to="/live-radio"
                  class="mobile-menu-item-sub"
                  @click.native="isMenuOpen = false"
                  >Live Radio</nuxt-link
                >
                <nuxt-link
                  to="/live-video"
                  class="mobile-menu-item-sub"
                  @click.native="isMenuOpen = false"
                  >Live Video</nuxt-link
                >
              </div>
            </transition>
            <nuxt-link
              to="/gallery"
              class="mobile-menu-item"
              @click.native="isMenuOpen = false"
              >Gallery</nuxt-link
            >
            <nuxt-link
              to="/store"
              class="mobile-menu-item"
              @click.native="isMenuOpen = false"
              >Store</nuxt-link
            >
            <nuxt-link
              to="/contact"
              class="mobile-menu-item"
              @click.native="isMenuOpen = false"
              >Contact</nuxt-link
            >
          </div>
        </transition>
      </div>
    </div>
    <!-- desktop -->
    <div class="hidden lg:flex items-center bg-white">
      <nuxt-link to="/" class="basis-1/4 m-2">
        <nuxt-picture
          format="webp"
          class="block w-full"
          src="/GPMKC_Logo.png"
          :alt="logoAlt"
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
          <a class="menu-item">Live</a>
          <div class="z-20 relative h-0 w-0 overflow-visible">
            <transition name="fade">
              <div
                v-show="isLiveMenuOpen"
                class="bg-white w-max absolute flex flex-col"
              >
                <nuxt-link to="/live-radio" class="menu-item-sub"
                  >Live Radio</nuxt-link
                >
                <nuxt-link to="/live-video" class="menu-item-sub"
                  >Live Video</nuxt-link
                >
              </div>
            </transition>
          </div>
        </div>
        <nuxt-link to="/gallery" class="menu-item">Gallery</nuxt-link>
        <nuxt-link to="/store" class="menu-item">Store</nuxt-link>
        <nuxt-link to="/contact" class="menu-item">Contact</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => {
    return {
      isMenuOpen: false,
      isLiveMenuOpen: false,
      logoAlt:
        "Gurdwara Prabh Milne Ka Chao, Moga | Bhai Sewa Singh Ji Tarmala",
    };
  },
  watch: {
    isMenuOpen(value) {
      if (!value) {
        this.isLiveMenuOpen = false;
      }
    },
  },
});
</script>

<style scoped lang="scss">
.mobile-menu-item {
  @apply cursor-pointer
              p-3
              hover:bg-slate-700 hover:text-white
              text-slate-700
              bg-white
              uppercase
              text-[11px]
              text-center;
  font-family: "Krona One", sans;
  &-sub {
    @extend .mobile-menu-item;
    @apply capitalize;
  }
}

.menu-item {
  @apply cursor-pointer
  transition-colors
              p-3
              border-b-4
              border-b-transparent
              hover:border-b-yellow-600 
              text-slate-700
              uppercase
              text-[11px];
  font-family: "Krona One", sans;
  &-sub {
    @extend .menu-item;
    @apply capitalize border-b-0 hover:border-b-0 hover:bg-slate-700 hover:text-white
              text-slate-700
              bg-white;
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
</style>

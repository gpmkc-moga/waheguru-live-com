<template>
  <div>
    <!-- navbar top -->
    <div>
      <!-- tablet and mobile -->
      <div class="flex flex-col items-center md:flex-row">
        <img
          class="block w-1/2"
          src="~/assets/GPMKC_Logo.png"
          alt="Gurdwara Prabh Milne Ka Chao, Moga | Bhai Sewa Singh Ji Tarmala"
        />
        <div class="p-2 bg-slate-300 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <!-- desktop -->
      <div class="hidden lg:flex">desktop navbar</div>
    </div>
    <!-- /navbar top -->

    <Nuxt />

    <!-- navbar bottom -->
    <div></div>
  </div>
</template>

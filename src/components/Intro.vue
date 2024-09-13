<template>
  <div
    class="intro pt-20 relative bg-img bg-cover bg-center w-full md:h-[100vh] mini:h-[500px] xs:h-[550px] sm:h-[600px] after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-35 after:z-0"
  >
    <div
      class="container flex flex-col justify-center h-full relative z-10 lg:pl-16 lg:pt-16"
    >
      <h1
        class="intro__title lg:text-[90px] md:text-[80px] sm:text-[70px] xs:text-[40px] mini:text-[40px] mini:text-center md:text-left leading-[110%] font-bold text-white max-w-[800px]"
      >
        ATAEV <br />
        BAHODIR BUILD
      </h1>
      <p
        class="intro__text text-white sm:text-xl mini:text-center md:text-left mini:text-xl mb-10"
      >
        {{ $t("intro.text") }}
      </p>
      <div class="intro__link flex items-center gap-x-4 mini:mx-auto md:mx-0">
        <router-link
          to="/projects"
          class="text-white md:text-lg mini:text-sm border-2 border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition-all duration-500"
          >{{ $t("intro.projects") }}</router-link
        >
        <a
          href="tel:+998338561712"
          class="text-white md:text-lg mini:text-sm border-2 border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition-all duration-500"
          >{{ $t("intro.call") }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

</script>

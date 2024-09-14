<template>
  <div
    id="ataev"
    class="ataev bg-cover bg-left bg-no-repeat xl:h-[600px] lg:h-[500px] py-4 sm:h-[400px] xs:h-[350px] mini:h-[300px]"
  >
    <div class="container">
      <h2
        class="title uppercase text-left text-[#cccccc] lg:text-[28px] sm:text-[22px] mini:text-[18px]"
      >
        ataev bahodir build
      </h2>
      <div
        class="ataev__info xs:max-w-[50%] text-white mt-[3%] ml-[5%] mini:max-w-[80%] mini:m-0"
      >
        <h2
          class="ataev__info-title lg:text-[40px] sm:text-[30px] mini:text-[24px]"
        >
          {{ t("ataev.title") }}
        </h2>
        <p
          class="ataev__info-text text-webkit lg:text-[22px] sm:text-[18px] mini:text-[14px] xs:mt-[5%] xs:mb-[8%] leading-[130%] mini:mb-4 mini:mt-2"
        >
          {{ t("ataev.text") }}
        </p>
        <a
          href=""
          class="ataev__info-link lg:text-[18px] sm:text-[16px] mini:text-[14px] lg:px-8 lg:py-4 sm:px-6 sm:py-3 mini:px-4 mini:py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >{{ t("ataev.link") }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<style>
.ataev {
  background-image: url("../assets/images/ataev.png");
}

.text-webkit {
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

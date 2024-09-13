<template>
  <div class="service lg:py-16 md:py-10 py-6 bg-[#fce8bd]">
    <div class="container">
      <h2 class="title">{{ $t("service.title") }}</h2>
      <div
        class="service__box sm:grid sm:grid-cols-2 sm:gap-4 md:gap-8 md:mt-10 mt-6 sm:mt-6 mini:flex mini:flex-col mini:gap-4 xs:gap-6"
      >
        <div
          v-for="item in service"
          class="service__card bg-[#2c3442] rounded-xl relative md:h-[180px] sm:h-[150px] xs:h-[150px] mini:h-[120px] xs:px-6 xs:py-4 mini:px-4 mini:py-3 flex flex-col justify-center overflow-hidden"
        >
          <p
            class="service__card-text text-white lg:text-[18px] md:text-[17px] sm:text-[16px] md:max-w-[60%] sm:max-w-[70%] mini:max-w-[60%] xs:text-[16px] mini:text-[14px] sm:translate-y-[-20px] z-[1]"
          >
            {{ item.text }}
          </p>
          <img
            :src="item.img"
            alt=""
            class="absolute bottom-0 right-0 md:w-[50%] sm:w-[60%] z-[0] mini:w-[50%]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
const { t } = useI18n();
import service1 from "../assets/images/service.png";
import service2 from "../assets/images/service2.png";
import service3 from "../assets/images/service3.png";
import service4 from "../assets/images/service4.png";

const service = computed(() => [
  {
    text: `${t("service.text1")}`,
    img: service1,
  },
  {
    text: `${t("service.text2")}`,
    img: service2,
  },
  {
    text: `${t("service.text3")}`,
    img: service3,
  },
  {
    text: `${t("service.text4")}`,
    img: service4,
  },
]);
</script>

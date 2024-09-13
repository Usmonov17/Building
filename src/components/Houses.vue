<template>
  <div class="houses">
    <div class="container">
      <h2 class="title md:my-10 sm:my-6 xs:my-5 my-4 leading-none">
        {{ t("houses.title") }}
      </h2>
    </div>
    <div
      class="houses__box max-w-full sm:grid sm:grid-cols-3 mini:flex mini:gap-x-2 sm:gap-x-0 mini:overflow-x-scroll scroll"
    >
      <img
        :src="item.img"
        alt="house"
        v-for="(item, index) in houses"
        :key="index"
        class="houses__img object-cover object-center lg:h-[300px] md:h-[250px] sm:h-[200px] xs:h-[250px] mini:h-[200px] w-full"
      />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
import img1 from "../assets/images/house1.jpg";
import img2 from "../assets/images/house2.jpg";
import img3 from "../assets/images/house3.jpg";
import img4 from "../assets/images/house4.jpg";
import img5 from "../assets/images/house5.jpg";
import img6 from "../assets/images/house6.jpg";

const houses = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
];
</script>

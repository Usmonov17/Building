<template>
  <div class="cooperation lg:py-12 md:py-10 sm:py-8 xs:py-6 mini:py-4">
    <h2 class="title">{{ t("cooperation.title") }}</h2>
    <div
      class="cooperation__box md:mt-10 sm:mt-8 xs:mt-6 mini:mt-4 md:grid md:grid-cols-3 mini:flex mini:overflow-x-auto scroll mini:gap-2 sm:gap-4"
    >
      <img
        v-for="item in cooperation"
        :src="item.img"
        alt=""
        class="mini:flex-shrink-0 mini:max-w-[75%]"
      />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import img1 from "../assets/images/gallery1.jpg";
import img2 from "../assets/images/gallery2.jpg";
import img3 from "../assets/images/gallery3.jpg";
import img4 from "../assets/images/gallery4.jpg";
import img5 from "../assets/images/gallery5.jpg";
import img6 from "../assets/images/gallery6.jpg";
const cooperation = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
];
</script>

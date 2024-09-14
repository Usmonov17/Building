<template>
  <div id="projects" class="projects md:py-8 sm:py-6 mini:py-4">
    <div class="container">
      <h2 class="title lg:my-10 md:mb-8 md:mt-4 sm:mb-3 my-2">
        {{ t("projects.title") }}
      </h2>
      <div
        class="projects__box md:grid md:grid-cols-2 xl:gap-10 lg:gap-6 md:gap-4 md:w-max md:mx-auto scroll sm:gap-x-4 mini:w-full mini:flex mini:gap-x-2 mini:overflow-x-scroll"
      >
        <div
          class="projects__card relative xl:max-w-[480px] xl:h-[300px] lg:max-w-[390px] lg:h-[250px] md:max-w-[350px] md:h-[200px] md:p-5 mini:flex-shrink-0 mini:max-w-[300px] mini:h-[180px] mini:p-4 xs:max-w-[350px] xs:h-[200px] xs:p-5 sm:max-w-[380px] sm:h-[250px] overflow-hidden group after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-black after:opacity-30 after:z-[-2]"
          v-for="(project, index) in projects"
          :key="index"
        >
          <div
            class="h-full translate-y-[80%] group-hover:translate-y-[0%] transition-all duration-500"
          >
            <h3
              class="projects__card-title z-50 text-white md:text-[32px] sm:text-[28px] mini:text-[24px] xs:text-[20px] md:mb-6 sm:mb-4 mini:mb-3 xs:mb-2 tracking-[2px]"
            >
              {{ project.title }}
            </h3>
            <p
              class="projects__card-text z-50 text-white md:text-[20px] sm:text-[18px] mini:text-[16px] xs:text-[14px] leading-[120%] tracking-[1px]"
            >
              {{ project.text }}
            </p>
          </div>
          <img
            :src="project.img"
            alt=""
            class="absolute top-0 left-0 w-full h-full object-cover object-center z-[-3]"
          />
          <div
            class="absolute h-[50%] translate-y-[100%] inset-0 bg-gradient-to-t from-black to-transparent transition-all duration-500 z-[-1]"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import img1 from "../assets/images/project1.webp";
import img2 from "../assets/images/project2.webp";
import img3 from "../assets/images/project3.webp";
import img4 from "../assets/images/project4.webp";
import img5 from "../assets/images/project5.webp";
import img6 from "../assets/images/project6.webp";
import { computed } from "vue";

const projects = computed(() => [
  {
    title: "Magic City",
    text: t("projects.card.text1"),
    img: img1,
  },
  {
    title: "Gardens Residence",
    text: t("projects.card.text2"),
    img: img2,
  },
  {
    title: "Fonon",
    text: t("projects.card.text3"),
    img: img3,
  },
  {
    title: "Invento",
    text: t("projects.card.text4"),
    img: img4,
  },
  {
    title: "Presidential School",
    text: t("projects.card.text5"),
    img: img5,
  },
  {
    title: "Boulevard",
    text: t("projects.card.text6"),
    img: img6,
  },
]);
</script>

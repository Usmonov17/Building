<template>
  <div class="news bg-[#fcf8f3] lg:py-10 md:py-8 sm:py-6 xs:py-5 mini:py-4">
    <div class="container">
      <h2 class="title">{{ t("news.title") }}</h2>
      <div
        class="news__box lg:mt-12 md:mt-10 sm:mt-8 xs:mt-6 mini:mt-4 sm:grid md:grid-cols-2 md:gap-4 lg:gap-10 relative mini:flex mini:flex-col mini:gap-4 mini:w-full mini:justify-center"
      >
        <div
          v-for="cardNews in news"
          :key="cardNews.id"
          class="new__card flex gap-4 overflow-hidden lg:h-[200px] md:h-[180px] sm:h-[150px] sm:max-w-[500px] xs:max-w-full mini:h-[150px] rounded-lg bg-white shadow-2xl relative transition-all duration-500"
          :class="{ 'p-4 pb-10 mini:p-2 mini:pb-4': selectId === cardNews.id }"
        >
          <img
            :src="cardNews.img"
            alt=""
            class="md:w-[40%] md:h-full mini:w-[40%] mini:h-full xs:w-[180px] xs:h-[150px] object-cover transition-all duration-500"
            :class="{ 'translate-x-[-150%]': selectId === cardNews.id }"
          />

          <div
            class="new__card-info h-full transition-all duration-700 overflow-hidden"
          >
            <h3
              class="text-black md:text-[18px] mini:text-[16px] tracking-[0.02em] mb-4 leading-[120%] mt-4 transition-all duration-500"
              :class="{ 'translate-y-[-200%]': selectId === cardNews.id }"
            >
              {{ cardNews.title }}
            </h3>
            <p
              class="md:text-[16px] leading-[150%] text-[#2c3442] tracking-[0.02em] transition-all duration-500 absolute top-[5%] left-[2%] h-[75%] w-[97%] p-2 overflow-y-auto scroll mini:text-[14px]"
              :class="{
                'translate-y-[30%] translate-x-[100%]':
                  selectId !== cardNews.id,
              }"
            >
              {{ cardNews.text }}
            </p>
          </div>
          <button
            class="new__card-link text-white bg-[#2c3442] px-4 py-2 rounded-full md:text-[14px] mini:text-[12px] hover:text-[#2c3442] transition-all duration-300 absolute bottom-2 right-2 after:content-['-->'] after:absolute after:top-[50%] after:left-[50%] after:text-[26px] after:translate-x-[-300%] after:translate-y-[-50%] after:rotate-[90deg] after:font-bold hover:after:translate-x-[-50%] hover:after:rotate-[0deg] after:transition-all after:duration-500 after:text-white"
            @click="changeMore(cardNews.id)"
            :class="{ 'translate-y-[150%]': selectId === cardNews.id }"
          >
            {{ t("news.card.link") }}
          </button>
          <button
            class="new__card-link text-[#2c3442] bg-[#fce8bd] px-2 py-1 rounded-full md:text-[14px] mini:text-[12px] hover:text-[#2c3442] transition-all duration-500 absolute bottom-2 right-2"
            @click="changeMore(cardNews.id)"
            :class="{ 'translate-x-[150%]': selectId !== cardNews.id }"
          >
            {{ t("news.card.linkBack") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const selectId = ref(sessionStorage.getItem("selectId") || null);

const changeMore = (id) => {
  if (selectId.value === id) {
    selectId.value = null;
  } else {
    selectId.value = id;
  }
  sessionStorage.setItem("selectId", selectId.value);
};

import img1 from "../assets/images/news1.jpg";
import img2 from "../assets/images/news2.jpg";
import img3 from "../assets/images/news3.jpg";
import img4 from "../assets/images/news4.jpg";

const news = computed(() => [
  {
    id: 1,
    img: img1,
    title: t("news.card.title1"),
    text: t("news.card.text1"),
  },
  {
    id: 2,
    img: img2,
    title: t("news.card.title2"),
    text: t("news.card.text2"),
  },
  {
    id: 3,
    img: img3,
    title: t("news.card.title3"),
    text: t("news.card.text3"),
  },
  {
    id: 4,
    img: img4,
    title: t("news.card.title4"),
    text: t("news.card.text4"),
  },
]);
</script>

<template>
  <div
    class="company lg:py-[50px] md:py-[40px] xs:py-[30px] mini:py-[20px] relative"
  >
    <img
      src="../assets/images/company.png"
      alt="company"
      class="w-full h-full object-cover object-center absolute top-0 left-0 z-[-1]"
    />
    <div class="container">
      <h2 class="title text-white sm:text-left text-center">
        {{ $t("company.title") }}
      </h2>
      <div
        class="company__box xs:flex mini:grid mini:grid-cols-2 mini:w-max sm:w-full mini:mx-auto md:gap-20 sm:justify-start mini:justify-center sm:gap-10 gap-5 sm:my-8 my-5"
      >
        <div
          class="company__card md:h-[200px] md:max-w-[200px] sm:max-w-[150px] xs:max-w-[100px] flex flex-col items-center mini:justify-center xs:justify-start mini:max-w-[100px] mini:mx-auto"
          v-for="(item, index) in company"
          :key="index"
        >
          <h2
            class="company__count md:text-[50px] sm:text-[32px] xs:text-[30px] text-[25px] font-bold text-white"
            :data-target="item.count"
          >
            0+
          </h2>
          <p
            class="company__text text-white md:text-[20px] sm:text-[16px] xs:text-[16px] mini:text-[14px] leading-[120%] text-center"
          >
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const company = computed(() => [
  { count: 120, text: t("company.text1") },
  { count: 43, text: t("company.text2") },
  { count: 250, text: t("company.text3") },
  { count: 14, text: t("company.text4") },
]);

onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const endValue = parseInt(el.getAttribute("data-target"));
        let startValue = 0;

        const updateCount = () => {
          startValue++;
          el.textContent = `${startValue}+`;

          if (startValue < endValue) {
            requestAnimationFrame(updateCount);
          }
        };
        updateCount();
      }
    });
  });

  document.querySelectorAll(".company__count").forEach((el) => {
    observer.observe(el);
  });
});
</script>

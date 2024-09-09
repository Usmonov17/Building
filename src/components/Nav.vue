<template>
  <div class="nav py-4 fixed top-0 left-0 w-full z-20">
    <div class="container">
      <div
        class="nav__box flex items-center mx-auto w-max xl:gap-[60px] lg:gap-[40px] md:gap-[30px] gap-[20px]"
      >
        <button class="nav__menu hidden">
          <img src="../assets/images/nav_menu.png" alt="" class="w-[30px]" />
        </button>
        <ul
          class="nav__list flex items-center xl:gap-[60px] lg:gap-[40px] md:gap-[30px] gap-[20px]"
        >
          <button class="nav__menu hidden">
            <img
              src="../assets/images/nav_close.png "
              alt=""
              class="w-[30px]"
            />
          </button>
          <li>
            <a href="" class="nav__link">{{ $t("nav_data.info") }}</a>
          </li>
          <li>
            <a href="" class="nav__link">{{ $t("nav_data.about_us") }}</a>
          </li>
          <li>
            <a href="" class="nav__link">{{ $t("nav_data.companies") }}</a>
          </li>
        </ul>
        <div>
          <a href="" class="nav__logo w-[120px] block">
            <img src="../assets/images/logo.png" alt="" />
          </a>
        </div>
        <ul
          class="nav__list flex items-center xl:gap-[60px] lg:gap-[40px] md:gap-[30px] gap-[20px]"
        >
          <li>
            <a href="" class="nav__link">{{ $t("nav_data.advantages") }}</a>
          </li>
          <li>
            <a href="" class="nav__link">{{ $t("nav_data.news") }}</a>
          </li>
          <li>
            <a href="" class="nav__link">{{ $t("nav_data.contact") }}</a>
          </li>
        </ul>
        <div class="nav__lang group relative select-none" @click="isActive">
          <p class="uppercase cursor-pointer text-white">
            {{ locale }}
          </p>
          <div
            :class="[
              'nav__lang-box text-white bg-black py-1 px-3 rounded-md flex flex-col gap-1 items-start absolute top-6 left-[-50%]',
              { flex: active, hidden: !active },
            ]"
          >
            <button @click="changeLang('uz')">UZ</button>
            <button @click="changeLang('ru')">RU</button>
            <button @click="changeLang('en')">EN</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useI18n } from "vue-i18n";
const { locale, t } = useI18n();
const active = ref(false);
const isActive = () => {
  active.value = !active.value;
};
const changeLang = (newLang) => {
  locale.value = newLang;
  localStorage.setItem("locale", newLang);
};

const handleClickOutside = (event) => {
  if (!event.target.closest(".nav__lang")) {
    active.value = false;
  }
};

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", handleClickOutside);
});
</script>

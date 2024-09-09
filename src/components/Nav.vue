<template>
  <nav class="nav py-4 fixed top-0 left-0 w-full z-20">
    <div class="container">
      <div
        class="nav__box flex items-center mx-auto w-full justify-between md:hidden"
      >
        <ul class="nav__list flex items-center gap-[60px] lg:gap-[30px]">
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
          <a href="" class="nav__logo w-[120px] block lg:w-[100px]">
            <img src="../assets/images/logo.png" alt="" />
          </a>
        </div>
        <ul class="nav__list flex items-center gap-[60px] lg:gap-[30px]">
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
      <div
        class="nav__box items-center mx-auto w-full justify-between hidden md:flex"
      >
        <button @click="burger = true">
          <img src="../assets/images/nav_menu.png" alt="" class="w-[30px]" />
        </button>
        <ul
          class="nav__list flex items-center flex-col gap-[20px] absolute top-0 left-0 bg-slate-800 py-10 px-10 transition-all duration-500"
          :class="{ ' translate-x-[-100%]': !burger }"
        >
          <button class="absolute top-3 right-3" @click="burger = false">
            <img src="../assets/images/nav_close.png" alt="" class="w-[30px]" />
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
          <li>
            <a href="" class="nav__link">{{ $t("nav_data.advantages") }}</a>
          </li>
          <li>
            <a href="" class="nav__link">{{ $t("nav_data.news") }}</a>
          </li>
          <li>
            <a href="" class="nav__link">{{ $t("nav_data.contact") }}</a>
          </li>
          <div class="nav__lang select-none text-white flex gap-4 mt-2">
            <button @click="changeLang('uz')">UZ</button>
            <button @click="changeLang('ru')">RU</button>
            <button @click="changeLang('en')">EN</button>
          </div>
        </ul>
        <a href="" class="nav__logo w-[120px] block lg:w-[100px]">
          <img src="../assets/images/logo.png" alt="" />
        </a>
        <a href="tel:+998338561712" class="cursor-pointer">
          <img src="../assets/images/phone.svg" class="w-[30px]" alt="" />
        </a>
      </div>
    </div>
  </nav>
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

const clickOutside = (event) => {
  if (!event.target.closest(".nav__lang")) {
    active.value = false;
  }
};

onMounted(() => {
  window.addEventListener("click", clickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", clickOutside);
});

const burger = ref(false);
</script>

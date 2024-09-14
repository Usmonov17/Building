<template>
  <nav class="nav sm:py-4 fixed top-0 left-0 w-full z-20 mini:py-1 xs:py-2">
    <div class="container">
      <div
        class="nav__box items-center mx-auto w-full justify-between hidden lg:flex lg:gap-6 pl-10"
      >
        <ul class="nav__list flex items-center gap-[30px]">
          <li>
            <a href="#ataev" class="nav__link">{{ $t("nav_data.info") }}</a>
          </li>
          <li>
            <a href="#company" class="nav__link">{{
              $t("nav_data.about_us")
            }}</a>
          </li>
          <li>
            <a href="#projects" class="nav__link">{{
              $t("nav_data.companies")
            }}</a>
          </li>
        </ul>
        <div>
          <a href="#intro" class="nav__logo w-[120px] block">
            <img src="../assets/images/logo.png" alt="" />
          </a>
        </div>
        <ul class="nav__list flex items-center gap-[30px] jus">
          <li>
            <a href="#service" class="nav__link">{{
              $t("nav_data.advantages")
            }}</a>
          </li>
          <li>
            <a href="#news" class="nav__link">{{ $t("nav_data.news") }}</a>
          </li>
          <li>
            <a href="#footer" class="nav__link">{{ $t("nav_data.contact") }}</a>
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
        class="nav__box flex items-center mx-auto w-full justify-between lg:hidden"
      >
        <button @click="burger = true">
          <img
            src="../assets/images/nav_menu.png"
            alt=""
            class="xs:w-[30px] w-[25px]"
          />
        </button>
        <ul
          class="nav__list flex items-center flex-col gap-[15px] xs:gap-[20px] absolute top-0 left-0 bg-[#2c3442] py-5 xs:py-10 px-10 transition-all duration-500 z-50"
          :class="{ ' translate-x-[-100%]': !burger }"
        >
          <button class="absolute top-3 right-3" @click="burger = false">
            <img
              src="../assets/images/nav_close.png"
              alt=""
              class="xs:w-[30px] w-[25px]"
            />
          </button>
          <li>
            <a href="#ataev" class="nav__link">{{ $t("nav_data.info") }}</a>
          </li>
          <li>
            <a href="#company" class="nav__link">{{
              $t("nav_data.about_us")
            }}</a>
          </li>
          <li>
            <a href="#projects" class="nav__link">{{
              $t("nav_data.companies")
            }}</a>
          </li>
          <li>
            <a href="#service" class="nav__link">{{
              $t("nav_data.advantages")
            }}</a>
          </li>
          <li>
            <a href="#news" class="nav__link">{{ $t("nav_data.news") }}</a>
          </li>
          <li>
            <a href="tel:+998908561712" class="nav__link">{{
              $t("nav_data.contact")
            }}</a>
          </li>
          <div class="nav__lang select-none text-white flex gap-4 mt-2">
            <button @click="changeLang('uz')">UZ</button>
            <button @click="changeLang('ru')">RU</button>
            <button @click="changeLang('en')">EN</button>
          </div>
        </ul>
        <a
          href="#intro"
          class="nav__logo w-[100px] block xs:w-[120px] translate-x-[20px]"
        >
          <img src="../assets/images/logo.png" alt="" />
        </a>
        <a href="tel:+998338561712" class="cursor-pointer">
          <img
            src="../assets/images/phone.svg"
            class="w-[25px] xs:w-[30px]"
            alt=""
          />
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
  burger.value = false;
};

const clickOutside = (event) => {
  if (!event.target.closest(".nav__lang")) {
    active.value = false;
  }
  if (!event.target.closest(".nav__box") && burger.value) {
    burger.value = false;
  }
};

onMounted(() => {
  const nav = document.querySelector(".nav");
  const navBg = () => {
    if (window.scrollY >= nav.clientHeight) {
      nav.classList.add("bg-[#202733]", "border-b-[1px]", "border-white");
    } else {
      nav.classList.remove("bg-[#202733]", "border-b-[1px]", "border-white");
    }
  };

  window.addEventListener("click", clickOutside);
  window.addEventListener("scroll", navBg);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", clickOutside);
  window.removeEventListener("scroll", navBg);
});

const burger = ref(false);
</script>

<template>
  <footer class="footer bg-[#fce8bd] lg:p-16 md:p-10 sm:p-8 xs:p-5 mini:p-4">
    <div class="container flex sm:justify-between mini:justify-around">
      <div class="footer__media w-[40%] flex flex-col mini:items-center sm:items-start mini:text-center">
        <img src="../assets/images/dark-logo.png" alt="logo"
          class="lg:w-[160px] md:w-[120px] sm:w-[100px] xs:w-[80px] mini:w-[60px]" />
        <p class="lg:text-2xl md:text-xl sm:text-lg xs:text-base mini:text-sm mt-2 mb-4">Ijtimoiy
          tarmoqlarimizga obuna bo'ling</p>
        <div class="footer__social flex gap-2">
          <a href="#"
            class="sm:w-[40px] sm:h-[40px] mini:w-[30px] mini:h-[30px] bg-[#202733] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:translate-y-[-5px]">
            <img src="../assets/images/insta.svg" alt="instagram"
              class="sm:w-[20px] sm:h-[20px] mini:w-[15px] mini:h-[15px]" />
          </a>
          <a href="#"
            class="sm:w-[40px] sm:h-[40px] mini:w-[30px] mini:h-[30px] bg-[#202733] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:translate-y-[-5px]">
            <img src="../assets/images/facebook.svg" alt="facebook"
              class="sm:w-[20px] sm:h-[20px] mini:w-[15px] mini:h-[15px]" />
          </a>
        </div>
      </div>
      <ul class="footer__list flex flex-col sm:gap-2 mini:text-center sm:text-left">
        <h3
          class="footer__list-title mb-2 lg:text-[22px] md:text-[18px] sm:text-[16px] mini:text-[14px] tracking-[0.04em]">
          Kompaniyamiz</h3>
        <li><a href=""
            class="nav__link text-black lg:text-[20px] md:text-[16px] sm:text-[14px] mini:text-[12px] after:bg-black">Korxonalar</a>
        </li>
        <li><a href=""
            class="nav__link text-black lg:text-[20px] md:text-[16px] sm:text-[14px] mini:text-[12px] after:bg-black">Biz
            haqimizda</a></li>
        <li><a href=""
            class="nav__link text-black lg:text-[20px] md:text-[16px] sm:text-[14px] mini:text-[12px] after:bg-black">Yangiliklar</a>
        </li>
        <li><a href=""
            class="nav__link text-black lg:text-[20px] md:text-[16px] sm:text-[14px] mini:text-[12px] after:bg-black">Biznig
            loyihalarimiz</a></li>
      </ul>
      <ul class="footer__list flex flex-col sm:gap-2 mini:hidden sm:flex">
        <h3
          class="footer__list-title mb-2 lg:text-[22px] md:text-[18px] sm:text-[16px] mini:text-[14px] tracking-[0.04em]">
          Aloqa</h3>
        <li><a href="tel:+998338561712"
            class="nav__link text-black lg:text-[20px] md:text-[16px] sm:text-[14px] mini:text-[12px] after:bg-black">+998
            71 201 01
            01</a></li>
        <li><a href="tel:+998338561712"
            class="nav__link text-black lg:text-[20px] md:text-[16px] sm:text-[14px] mini:text-[12px] after:bg-black">+998
            33 201 01
            01</a></li>
      </ul>
    </div>
  </footer>
</template>

<script setup>

</script>

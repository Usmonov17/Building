<template>
  <div class="bg-[#202733] lg:py-14 md:py-8 sm:py-6 mini:py-4">
    <div class="container">
      <div
        class="contact relative overflow-hidden bg-cover bg-center bg-no-repeat lg:p-10 md:p-8 sm:p-6 mini:p-4 rounded-3xl mini:after:content-[''] mini:after:absolute mini:after:top-0 mini:after:left-0 mini:after:w-full mini:after:h-full mini:after:bg-black mini:after:opacity-50 mini:after:z-[0] sm:after:content-none">
        <h2
          class="title relative z-[1] text-white text-left max-w-[350px] leading-[120%] mini:text-center mini:mx-auto sm:text-left sm:mx-0 mini:text-[20px] xs:text-[24px]">
          {{ $t("contact.title") }}
        </h2>
        <form
          class="flex flex-col md:gap-4 gap-3 md:max-w-[40%] sm:max-w-[50%] mini:max-w-[80%] mini:mx-auto sm:mx-0 md:mt-10 sm:mt-8 mini:mt-6 relative z-[1]"
          @submit.prevent="submitForm">
          <input type="text" :placeholder="$t('contact.name')" required
            class="xs:p-2 rounded-xl text-[#202733] xs:text-[16px] sm:text-[18px] mini:text-[14px] mini:py-1 mini:px-2"
            v-model="formData.name" />
          <input type="tel" :placeholder="$t('contact.phone')" required
            class="xs:p-2 rounded-xl text-[#202733] xs:text-[16px] sm:text-[18px] mini:text-[14px] mini:py-1 mini:px-2"
            v-model="formData.phone" />
          <textarea :placeholder="$t('contact.message')"
            class="xs:p-2 rounded-xl text-[#202733] xs:h-[80px] mini:h-[60px] outline-none resize-none scrollbar-none xs:text-[16px] sm:text-[18px] mini:text-[14px] mini:py-1 mini:px-2"
            v-model="formData.message"></textarea>
          <button type="submit"
            class="btn sm:mt-3 md:text-[18px] border-2 border-white rounded-full text-white py-2 sm:w-[50%] mini:w-[40%] mini:mx-auto sm:mx-0 hover:shadow-[0_0_10px_0_rgba(255,255,255,0.5)] transition-all duration-300 mini:py-1 mini:px-2 xs:py-2 mini:text-[14px] xs:text-[16px] sm:text-[18px]"
            :disabled="loading">
            {{ loading ? $t("contact.sending") : $t("contact.send") }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const formData = ref({
  name: "",
  phone: "",
  message: "",
});

const loading = ref(false);
const submitForm = async () => {
  loading.value = true;
  const token = "7355179055:AAEUm5_onfttMaMoejdjT3BI1zN7gDgsvNE";
  const chat_id = "-1002190363312";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    await axios.post(url, {
      chat_id,
      text: `Name: ${formData.value.name}\nPhone: ${formData.value.phone}\nMessage: ${formData.value.message}`,
    });

    cleanForm();
    toast("Success", {
      theme: "auto",
      type: "success",
      position: "bottom-right",
      autoClose: 3000,
      transition: "slide",
      dangerouslyHTMLString: true,
    });
  } catch (error) {
    toast("Error", {
      theme: "auto",
      type: "error",
      position: "bottom-right",
      autoClose: 3000,
      transition: "slide",
      dangerouslyHTMLString: true,
    });
  }
  loading.value = false;
};
const cleanForm = () => {
  formData.value.name = "";
  formData.value.phone = "";
  formData.value.message = "";
};
</script>
<style>
.contact {
  background-image: url(../assets/images/quiz.png);
}
</style>

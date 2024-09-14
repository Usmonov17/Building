import "./assets/css/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import axios from "axios";
import { ToastifyContainer } from "vue3-toastify";

const app = createApp(App);
app.use(router);
app.use(i18n);
app.config.globalProperties.$axios = axios;
app.use(ToastifyContainer);
app.mount("#app");

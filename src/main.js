import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import i18n from "./i18n";
import SlideUpDown from "vue3-slide-up-down";

const app = createApp(App).use(i18n);
app.config.globalProperties.t = i18n;
app.component("slide-up-down", SlideUpDown);
app.use(store).use(router);
app.mount("#app");
window.Kakao.init("e6cfe9578097ea1dd71ff89bf3cd75d5");
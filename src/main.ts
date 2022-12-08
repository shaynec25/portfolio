import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import i18n from "./i18n";

createApp(App).use(i18n).use(store).use(router).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "vue3-timeline/dist/style.css";
import i18n from "./lang/lang";

createApp(App).use(store).use(router).use(i18n).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import VerticalTimeline from "vue-vertical-timeline";

createApp(App).use(store).use(router).use(VerticalTimeline).mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
<<<<<<< HEAD
import VerticalTimeline from "vue-vertical-timeline";
=======
import "vue3-timeline/dist/style.css";
>>>>>>> 58c911d6eff9d147415cd399dd95979c05fcb689

createApp(App).use(store).use(router).use(VerticalTimeline).mount("#app");

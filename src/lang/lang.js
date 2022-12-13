//lang.js
// import Vue from "vue";
// import VueI18n from "vue-i18n";
import { createI18n } from "vue-i18n";
import tw from "./tw.json";
import en from "./en.json";

// Vue.use(VueI18n);

let locale = "en";
if (localStorage.getItem("set-lang")) {
  locale = localStorage.getItem("set-lang");
}

const messages = {
  tw,
  en,
};

const i18n = createI18n({
  locale,
  messages,
});

export default i18n;

import App from "./App.vue";
import "./style.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./config/routes";

createApp(App).use(createPinia()).use(router).mount("#app");

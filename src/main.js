import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import normalize from "normalize.css";

createApp(App).use(store).use(router).use(normalize).mount("#app");

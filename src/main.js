import { createApp } from "vue";
import router from "./router/index";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle";
import "animate.css";
import "font-awesome/css/font-awesome.css";

createApp(App).use(router).mount("#app");

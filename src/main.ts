import { createApp } from "vue";
import App from "./App.vue";
import "virtual:uno.css";
import "vfonts/Lato.css";
import router from "./routers";

const app = createApp(App);
app.use(router);
app.mount("#app");

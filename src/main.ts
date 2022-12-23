import { createApp } from "vue";
import App from "./App.vue";
import * as echarts from "echarts";
import "./assets/main.css";

const app = createApp(App);
app.config.globalProperties.$echart = echarts;
app.mount("#app");

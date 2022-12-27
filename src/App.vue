<template>
 <div class="px-4 py-3 space-x-4 text-center bg-gray-50 sm:px-6">
  <button
   @click="changeData"
   class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  >
   改变
  </button>
  <button
   @click="restoreData"
   class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  >
   恢复
  </button>
 </div>
 <!-- <button class="bg-blue-500 ring-2 md:ring-4">改变</button>
 <button class="bg-blue-500 ring-2 md:ring-4" @click="restoreData">恢复</button> -->
 <div class="flex flex-wrap h-screen">
  <SjChart
   :options="lineOption"
   width="w-1/3"
   height="h-1/3"
   isClick
   @callbackFun="callbackFun"
  ></SjChart>
  <SjChart :options="pieOption" width="w-2/3" height="h-2/3"></SjChart>
  <SjChart :options="barOption" width="w-1/4" height="h-1/4"></SjChart>
  <SjChart :options="lineOption2" width="w-3/4" height="h-3/4"></SjChart>
  <SjChart :options="scatterOption" width="w-2/5" height="h-2/5"></SjChart>
  <SjChart :options="scatterOption2" width="w-3/5" height="w-3/5"></SjChart>
  <SjChart :options="lineOption2" width="w-full" height="h-full"></SjChart>
 </div>
</template>
<script setup lang="ts">
 import SjChart from "./components/SjCharts/Sj-Chart.vue";
 import { mergeOptions } from "./components/SjCharts/options";
 import type { EChartsOption } from "echarts";
 import { ref, onMounted, onBeforeUnmount } from "vue";
 import _ from "lodash";

 const lineOption = ref<EChartsOption>();
 const pieOption = ref<EChartsOption>();
 const barOption = ref<EChartsOption>();
 const lineOption2 = ref<EChartsOption>();
 const scatterOption = ref<EChartsOption>();
 const scatterOption2 = ref<EChartsOption>();

 // echarts组件的点击抛出事件
 const callbackFun = (obj: any) => {
  console.log(obj, "拿到对象做点你需要的功能");
 };

 const initOptions = () => {
  /*
     传入的初始化数据
   */
  lineOption.value = mergeOptions("line", {
   title: {
    textStyle: {
     fontSize: 28,
    },
   },
   series: [
    {
     type: "line",
     data: [150, 250, 224, 218, 135, 147, 260],
    },
   ],
  });
  pieOption.value = mergeOptions("pie", {
   series: [
    {
     name: "空气污染程度",
     data: [
      { value: 1048, name: "轻度" },
      { value: 735, name: "中度" },
      { value: 580, name: "重度" },
      { value: 484, name: "高度" },
     ],
    },
   ],
  });
  barOption.value = mergeOptions("bar", {
   series: [
    {
     data: [120, 200, 150, 80, 70, 110],
    },
   ],
  });
  lineOption2.value = mergeOptions("line", {
   series: [
    {
     //  type: "line",
     data: [1200, 5125, 224, 218, 500, 147, 260],
    },
    {
     type: "bar",
     data: [800, 1200, 450, 300, 140, 563, 123],
    },
   ],
  });
  scatterOption.value = mergeOptions("scatter", {
   xAxis: {
    data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
   },
   series: [
    {
     data: [100, 150, 220, 180, 250, 300, 290],
    },
   ],
  });
  scatterOption2.value = mergeOptions("scatter", {
   xAxis: {
    data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
   },
   series: [
    {
     data: [100, 150, 220, 180, 250, 300, 290],
    },
    {
     type: "bar",
     data: [150, 100, 230, 200, 220, 290, 320],
    },
   ],
  });
 };

 const changeData = () => {
  /**
   * 点击改变按钮时
   * 1.mergeOptions()=>折线图递归合并的配置项
   * 2.mergeOptions()=>饼图递归合并的配置项
   * 3.mergeOptions()=>柱状图递归合并的配置项
   */
  lineOption.value = mergeOptions("line", {
   title: {
    textStyle: {
     fontSize: 28,
    },
   },
   series: [
    {
     type: "line",
     data: [1200, 25565, 224, 218, 135, 147, 260],
    },
   ],
  });
  pieOption.value = mergeOptions("pie", {
   series: [
    {
     name: "空气污染程度",
     data: [
      { value: 100, name: "轻度" },
      { value: 200, name: "中度" },
      { value: 560, name: "重度" },
      { value: 484, name: "高度" },
     ],
    },
   ],
  });
  barOption.value = mergeOptions("bar", {
   series: [
    {
     data: [50, 100, 120, 60, 70, 200],
    },
   ],
  });
  lineOption2.value = mergeOptions("line", {
   series: [
    {
     //  type: "line",
     data: [800, 1200, 450, 300, 140, 563, 123],
    },
    {
     type: "bar",
     data: [1200, 5125, 224, 218, 500, 147, 260],
    },
   ],
  });
  scatterOption.value = mergeOptions("scatter", {
   xAxis: {
    data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
   },
   series: [
    {
     data: [220, 182, 191, 234, 290, 330, 310],
    },
   ],
  });
  scatterOption2.value = mergeOptions("scatter", {
   xAxis: {
    data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
   },
   series: [
    {
     data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
     type: "bar",
     data: [200, 210, 150, 260, 280, 350, 299],
    },
   ],
  });
 };

 /*-------------------------------------------------------------------- */

 const restoreData = () => {
  initOptions();
 };
 /*------------------------------*/

 const resizeFontSize = _.throttle(() => {
  initOptions();
 }, 600);

 window.addEventListener("resize", resizeFontSize);

 onMounted(() => {
  initOptions(); //调用初始化函数
 });

 onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeFontSize);
 });
</script>

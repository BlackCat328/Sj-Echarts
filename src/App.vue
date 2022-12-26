<template>
 <button @click="changeData">改变</button>
 <button @click="restoreData">恢复</button>
 <div class="flex flex-wrap h-screen">
  <div class="w-1/3 h-1/3">
   <SjChart :options="lineOption"></SjChart>
  </div>
  <div class="w-1/3 h-1/3">
   <SjChart :options="pieOption"></SjChart>
  </div>
  <div class="w-1/3 h-1/3">
   <SjChart :options="barOption"></SjChart>
  </div>
  <div class="w-1/3 h-1/3">
   <SjChart :options="lineOption2"></SjChart>
  </div>
  <div class="w-1/3 h-1/3">
   <SjChart :options="scatterOption"></SjChart>
  </div>
  <div class="w-1/3 h-1/3">
   <SjChart :options="scatterOption2"></SjChart>
  </div>
 </div>
</template>
<script setup lang="ts">
 import SjChart from "./components/SjCharts/Sj-Chart.vue";
 import { mergeOptions } from "./components/SjCharts/options";
 import { ref, onMounted } from "vue";
 const lineOption = ref<object>();
 const pieOption = ref<object>();
 const barOption = ref<object>();
 const lineOption2 = ref<object>();
 const scatterOption = ref<object>();
 const scatterOption2 = ref<object>();
 const changeData = () => {
  /**
   * 点击改变按钮时
   * 1.mergeOptions()=>折线图递归合并的配置项
   * 2.mergeOptions()=>饼图递归合并的配置项
   * 3.mergeOptions()=>柱状图递归合并的配置项
   */
  lineOption.value = mergeOptions("line", {
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
  /**
   * 点击恢复按钮时
   * 1.mergeOptions()=>折线图递归合并的配置项
   * 2.mergeOptions()=>饼图递归合并的配置项
   * 3.mergeOptions()=>柱状图递归合并的配置项
   */
  lineOption.value = mergeOptions("line", {
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
 /*------------------------------*/
 onMounted(() => {
  restoreData(); //调用初始化函数
 });
</script>

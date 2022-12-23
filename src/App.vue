<template>
 <button @click="changeData">改变</button>
 <button @click="restoreData">恢复</button>
 <div class="cnt-charts">
  <SjChart :options="lineOption"></SjChart>
 </div>
 <div class="cnt-charts">
  <SjChart :options="pieOption"></SjChart>
 </div>
 <div class="cnt-charts">
  <SjChart :options="barOption"></SjChart>
 </div>
 <div class="cnt-charts">
  <SjChart :options="lineOption2"></SjChart>
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
     type: "line",
     data: [800, 1200, 450, 300, 140, 563, 123],
    },
    {
     type: "bar",
     data: [1200, 5125, 224, 218, 500, 147, 260],
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
     type: "line",
     data: [1200, 5125, 224, 218, 500, 147, 260],
    },
    {
     type: "bar",
     data: [800, 1200, 450, 300, 140, 563, 123],
    },
   ],
  });
 };
 /*------------------------------*/
 onMounted(() => {
  restoreData(); //调用初始化函数
 });
</script>

<style>
 .cnt-charts {
 }
</style>

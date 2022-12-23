<template>
 <button @click="changeData">改变</button>
 <button @click="restoreData">恢复</button>
 <SjChart :options="lineOption"></SjChart>
 <SjChart :options="pieOption"></SjChart>
 <SjChart :options="barOption"></SjChart>
 <SjChart :options="barOption2"></SjChart>
</template>
<script setup lang="ts">
 import SjChart from "./components/SjCharts/Sj-Chart.vue";
 import { mergeOptions } from "./components/SjCharts/options";
 import { ref, onMounted } from "vue";
 const lineOption = ref<object>();
 const pieOption = ref<object>();
 const barOption = ref<object>();
 const barOption2 = ref<object>();
 const changeData = () => {
  /**
   * 点击改变按钮时
   * 1.getLineOptions()=>折线图递归合并的配置项
   * 2.getPieOptions()=>饼图递归合并的配置项
   * 3.getBarOptions()=>柱状图递归合并的配置项
   */
  lineOption.value = mergeOptions("line", {
   series: [
    {
     data: [1200, 25565, 224, 218, 135, 147, 260],
    },
   ],
  });
  pieOption.value = mergeOptions("pie", {
   series: [
    {
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
  barOption2.value = mergeOptions("bar", {
   series: [
    {
     data: [50, 50, 11, 45, 70, 152],
    },
   ],
  });
 };
 /*------------------------------ */
 const restoreData = () => {
  /**
   * 点击恢复按钮时
   * 1.getLineOptions()=>折线图递归合并的配置项
   * 2.getPieOptions()=>饼图递归合并的配置项
   * 3.getBarOptions()=>柱状图递归合并的配置项
   */
  lineOption.value = mergeOptions("line", {
   series: [
    {
     data: [150, 250, 224, 218, 135, 147, 260],
    },
   ],
  });
  pieOption.value = mergeOptions("pie", {
   series: [
    {
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
  barOption2.value = mergeOptions("bar", {});
 };
 /*------------------------------*/
 onMounted(() => {
  restoreData(); //调用初始化函数
 });
</script>

<style></style>

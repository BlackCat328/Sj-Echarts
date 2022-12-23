<template>
 <div class="container" ref="container"></div>
</template>
<script lang="ts" setup>
 import {
  ref,
  toRefs,
  watch,
  getCurrentInstance,
  onMounted,
  nextTick,
  markRaw,
  onBeforeMount,
 } from "vue";
 const container = ref<HTMLElement>();
 const myChart = ref<any>();
 const { proxy } = getCurrentInstance()!;
 const $echart = (proxy as any).$echart;
 const props = defineProps({
  options: {
   require: true,
   type: Object,
   default: {},
  },
 });
 const { options } = toRefs(props);
 onBeforeMount(() => {
  window.removeEventListener("resize", resizeHandler);
 });
 onMounted(() => {
  myChart.value = markRaw($echart.init(container.value)); //获取echarts实例使用markRaw解除响应式
  myChart.value.setOption(options.value); //设置echarts配置项
  window.onresize = resizeHandler;
  window.addEventListener("resize", resizeHandler); //监听浏览器窗口大小
 });
 const resizeHandler = () => {
  nextTick(() => {
   myChart.value.resize(); //设置图表自适应大小
  });
 };
 watch(
  options,
  (newOptions) => {
   nextTick(() => {
    myChart.value.setOption(newOptions); //监听父组件传入的options,发生变化时从新设置配置项
   });
  },
  { deep: true }
 );
</script>
<style scoped>
 .container {
  width: 100%;
  height: 50vh;
 }
</style>

<template>
 <div class="md:container md:mx-auto w-full h-full">
  <div id="pChart" class="w-full h-full">
   <div id="chart" ref="sjChart" class="w-full h-full" />
  </div>
 </div>
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
  onBeforeUnmount,
 } from "vue";
 const sjChart = ref<HTMLElement>();
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

 // 计算高度宽度
 //  function chartSize(container: any, charts: any) {
 //   function getStyle(el: any, name: string) {
 //    if (window.getComputedStyle) {
 //     return window.getComputedStyle(el, null);
 //    } else {
 //     return el.currentStyle;
 //    }
 //   }
 //   const hi = getStyle(container, "height").height;
 //   const wi = getStyle(container, "width").width;
 //   charts.style.height = hi;
 //  }

 // 自适应高度
 //  const adaptiveHeight = () => {
 //   return chartSize(
 //    document.getElementById("pChart"),
 //    document.getElementById("chart")
 //   );
 //  };

 // 挂载完毕
 onMounted(() => {
  //   adaptiveHeight();
  myChart.value = markRaw($echart.init(sjChart.value)); //获取echarts实例使用markRaw解除响应式
  myChart.value.clear();
  myChart.value.setOption(options.value); //设置echarts配置项
  window.onresize = resizeHandler;
  window.addEventListener("resize", resizeHandler); //监听浏览器窗口大小
 });

 // 设置图表自适应大小
 const resizeHandler = () => {
  nextTick(() => {
   //    adaptiveHeight();
   myChart.value.resize();
  });
 };

 // 监听父组件传入的options,发生变化时从新设置配置项
 watch(
  options,
  (newOptions) => {
   nextTick(() => {
    myChart.value.setOption(newOptions);
   });
  },
  { deep: true }
 );

 // 挂载销毁前移出监听
 onBeforeUnmount(() => {
  $echart.dispose(myChart.value);
  window.removeEventListener("resize", resizeHandler);
 });
</script>

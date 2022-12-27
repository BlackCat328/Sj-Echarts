<template>
 <div class="min-w-30 min-h-25" :class="[sjWidth, sjHeight]">
  <div class="w-full h-full md:container md:mx-auto">
   <div id="chart" ref="sjChart" class="w-full h-full" />
  </div>
 </div>
</template>
<script lang="ts" setup>
 import {
  ref,
  toRefs,
  unref,
  watch,
  getCurrentInstance,
  onMounted,
  onActivated,
  nextTick,
  onBeforeUnmount,
 } from "vue";
 import type { PropType } from "vue";
 import type { ECharts, EChartsOption } from "echarts";

 const sjChart = ref<HTMLCanvasElement | null>(null);
 let myChart: ECharts | null = null;
 const { proxy } = getCurrentInstance()!;
 const $echart = (proxy as any).$echart;
 const props = defineProps({
  options: {
   require: true,
   type: Object as PropType<EChartsOption | undefined>,
   default: {},
  },
  width: {
   type: String as PropType<string>,
   default: "w-1/3",
  },
  height: {
   type: String as PropType<string>,
   default: "h-1/3",
  },
  isClick: {
   type: Boolean as PropType<boolean>,
   default: false,
  },
 });
 const emits = defineEmits(["callbackFun"]);
 const { options } = toRefs(props);
 const { width: sjWidth, height: sjHeight } = props;

 // 挂载完毕
 onMounted(() => {
  // 设置异步，不然图例一开始的宽度不正确。
  nextTick(() => {
   initChart();
  });
 });

 const initChart = (): void => {
  // 初始化echart
  const chartRefWrap = unref(sjChart);
  if (chartRefWrap) {
   myChart = $echart.init(chartRefWrap); //设置echarts配置项
   myChart?.clear();
   // 若图表需要点击事件做些其他功能，在初始化示例时注册图表的点击事件
   if (props.isClick) {
    myChart?.on("click", (params: any) => {
     emits("callbackFun", params);
    });
   }
   myChart?.setOption(props.options as EChartsOption, true);
   window.addEventListener("resize", resizeHandler);
  }
 };

 // 设置图表自适应大小
 const resizeHandler = () => {
  nextTick(() => {
   myChart?.resize();
  });
 };

 // 防止keep-alive之后图表变形
 onActivated(() => {
  nextTick(() => {
   myChart?.resize();
  });
 });

 // 监听父组件传入的options,发生变化时从新设置配置项
 watch(
  options,
  (newOptions: EChartsOption | undefined) => {
   nextTick(() => {
    console.log("newOptions--------------", newOptions);
    myChart?.setOption(newOptions as EChartsOption, true);
   });
  },
  { deep: true }
 );

 // 挂载销毁前移出监听
 onBeforeUnmount(() => {
  $echart.dispose(myChart);
  window.removeEventListener("resize", resizeHandler);
 });
</script>

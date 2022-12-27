import _ from "lodash";
import { toRefs } from "vue";
import type { EChartsOption } from "echarts";

const getLineOptions = (options?: EChartsOption): any => {
 //折线图配置项
 const lineOptions = {
  title: {
   text: "大标题",
  },
  tooltip: {
   trigger: "axis", //设置提示框触发类型为axis
   axisPointer: {
    type: "none",
   },
  },
  xAxis: {
   type: "category", //x轴设置为类目轴
   data: ["x1", "x2", "x3", "x4", "x5", "x6", "x7"],
  },
  yAxis: {
   type: "value", //y轴设置为数值轴
  },
  series: [
   {
    type: "line",
    data: [],
   },
  ],
 };
 //通过merge函数递归的合并默认对象和传入对象
 const opt = _.merge(lineOptions, options);

 return {
  //需要toRefs恢复响应式
  ...toRefs(opt),
 };
};

// 饼图配置项
const getPieOptions = (options?: EChartsOption): any => {
 const pieOptions = {
  color: ["#3ba1ff", "#4fcb74", "#fbd438", "#f04864"], //设置饼图的默认颜色
  title: [
   {
    text: "标题1", //饼图的标题
    subtext: "标题2", //饼图的副标题
    textStyle: {
     fontSize: 12, //设置饼图标题样式
     color: "#999",
    },
    subtextStyle: {
     fontSize: 20, //设置饼图副标题样式
     color: "#000",
    },
    top: "middle", //top居中
    left: "center", //left居中
   },
   {
    text: "大标题",
   },
  ],
  tooltip: {
   trigger: "item", //设置提示框触发类型为item
  },
  legend: {
   orient: "vertical", //设置图例排列方式为垂直
   align: "left",
   right: "5%",
   top: "middle",
   itemGap: 20, //图例间距20
   icon: "circle", //图例的样式为圆角
  },
  series: [
   {
    name: "内容标题",
    type: "pie", //图表类型为饼图
    radius: ["50%", "70%"],
    avoidLabelOverlap: false,
    itemStyle: {
     borderColor: "#fff",
     borderWidth: 2,
    },
    label: {
     show: false,
     position: "center",
    },
    labelLine: {
     show: false,
    },
    data: [],
   },
  ],
 };
 //通过merge函数递归的合并默认对象和传入对象
 const opt = _.merge(pieOptions, options);
 //需要toRefs恢复响应式
 return {
  ...toRefs(opt),
 };
};

// 柱状图配置项
const getBarOptions = (options?: EChartsOption): any => {
 const barOptions = {
  title: {
   text: "柱状图大标题", //设置柱状图默认标题
  },
  tooltip: {
   trigger: "axis", //设置提示框触发类型为axis
   axisPointer: {
    type: "shadow",
   },
  },
  color: ["#3ba1ff"], // 柱子颜色
  xAxis: {
   data: ["x1", "x2", "x3", "x4", "x5", "x6"],
  },
  yAxis: {
   type: "value",
  },
  series: [
   {
    barMaxWidth: 30, //设置柱状图最大宽度为30
    data: [],
    type: "bar",
   },
  ],
 };
 //通过merge函数递归的合并默认对象和传入对象
 const opt = _.merge(barOptions, options);
 //需要toRefs恢复响应式
 return {
  ...toRefs(opt),
 };
};

// 柱状图配置项
const getScatterOptions = (options?: EChartsOption): any => {
 const scatterOptions = {
  title: {
   text: "散点图大标题", //设置柱状图默认标题
  },
  tooltip: {
   trigger: "axis", //设置提示框触发类型为axis
   axisPointer: {
    type: "none",
   },
  },
  xAxis: {
   data: ["x1", "x2", "x3", "x4", "x5", "x6"],
  },
  yAxis: {},
  series: [
   {
    type: "scatter",
    data: [],
   },
  ],
 };
 //通过merge函数递归的合并默认对象和传入对象
 const opt = _.merge(scatterOptions, options);
 //需要toRefs恢复响应式
 return {
  ...toRefs(opt),
 };
};

export { getLineOptions, getPieOptions, getBarOptions, getScatterOptions };

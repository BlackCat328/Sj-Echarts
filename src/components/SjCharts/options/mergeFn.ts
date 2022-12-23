import _ from "lodash";
import { toRefs } from "vue";
const getLineOptions = (options?: object): object => {
 //折线图配置项
 const lineOptions = {
  xAxis: {
   type: "category", //x轴设置为类目轴
   data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
   type: "value", //y轴设置为数值轴
  },
  series: [
   {
    data: [],
    type: "line", //设置图表的类型为折线图
   },
  ],
 };
 //通过merge函数递归的合并默认对象和传入对象
 const opt = _.merge(lineOptions, options);
 //需要toRefs恢复响应式
 return {
  ...toRefs(opt),
 };
};

// 饼图配置项
const getPieOptions = (options?: object): object => {
 const pieOptions = {
  color: ["#3ba1ff", "#4fcb74", "#fbd438", "#f04864"], //设置饼图的默认颜色
  title: [
   {
    text: "检测人数", //饼图的标题
    subtext: "300", //饼图的副标题
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
    text: "散光类型占比",
   },
  ],
  tooltip: {
   trigger: "item", //设置提示框触发类型为item
  },
  legend: {
   orient: "vertical", //设置图例排列方式为垂直
   align: "left",
   right: "15%",
   top: "middle",
   itemGap: 20, //图例间距20
   icon: "circle", //图例的样式为圆角
  },
  series: [
   {
    name: "散光类别占比",
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
const getBarOptions = (options?: object): object => {
 const barOptions = {
  title: {
   text: "观度小学-各年级年度体测平均成绩", //设置柱状图默认标题
  },
  tooltip: {
   trigger: "axis", //设置提示框触发类型为axis
   axisPointer: {
    type: "shadow",
   },
  },
  color: ["#3ba1ff"],
  xAxis: {
   type: "category",
   data: [
    "小学一年级",
    "小学二年级",
    "小学三年级",
    "小学四年级",
    "小学五年级",
    "小学六年级",
   ],
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
export { getLineOptions, getPieOptions, getBarOptions };

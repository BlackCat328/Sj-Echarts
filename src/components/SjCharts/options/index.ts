import _ from "lodash";
import { ChartsType } from "./type";
import type { EChartsOption } from "echarts";

// 配置项
export const mergeOptions = (
 type: string,
 options?: EChartsOption
): EChartsOption => {
 if (options?.title?.textStyle.fontSize) {
  let size = options.title.textStyle.fontSize;
  options.title.textStyle.fontSize = getFontSize(size);
 }
 return ChartsType[type](options);
};

// 标题字体大小自适应
function getFontSize(num: number): any {
 let clientWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
 if (!clientWidth) return;
 let fontSize = (clientWidth * num) / 1920;
 if (fontSize < 16) return 16;
 if (fontSize > 28) return 28;
 return fontSize;
}

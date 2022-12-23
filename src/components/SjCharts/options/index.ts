import { ChartsType } from "./type";

// 配置项
export const mergeOptions = (type: string, options?: object): object => {
 return ChartsType[type](options);
};

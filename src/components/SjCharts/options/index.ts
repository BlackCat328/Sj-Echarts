import { ChartsType } from "./type";

export const mergeOptions = (type: string, options?: object): object => {
 return ChartsType[type](options);
};

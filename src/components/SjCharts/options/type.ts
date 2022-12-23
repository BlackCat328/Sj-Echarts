import { getLineOptions, getPieOptions, getBarOptions } from "./mergeFn";

export type CT = {
 [key: string]: Function;
};

export const ChartsType: CT = {
 bar: getBarOptions,
 line: getLineOptions,
 pie: getPieOptions,
};

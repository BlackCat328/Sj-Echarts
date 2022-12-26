import {
 getLineOptions,
 getPieOptions,
 getBarOptions,
 getScatterOptions,
} from "./mergeFn";

export type CT = {
 [key: string]: Function;
};

export const ChartsType: CT = {
 bar: getBarOptions,
 line: getLineOptions,
 pie: getPieOptions,
 scatter: getScatterOptions,
};

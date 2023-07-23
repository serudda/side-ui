import { CSSProperties } from 'react';
import { Breakpoint, SelectOption } from '@/common';

/**
 * isNullOrUndefined
 * @description - validate if an element is null or undefined
 * @function
 * @param {any} value - Element to validate
 * @return {boolean} Element is null or undefined.
 */
export const isNullOrUndefined = (value: any): boolean => value === undefined || value === null;

/**
 * includeTerm
 * @description - validate if an term text is included into a text
 * @function
 * @param {string} term - some chars to be checked into the text
 * @param {string} text - the text to be checked by the term
 * @return {boolean} Term is included within the text
 */
export const includeTerm = (term: string, text: string) =>
  text.toLowerCase().includes(term.toLocaleLowerCase());

/**
 * hasProp
 * @description - validate if an object has the prop passed arg
 * @function
 * @param {any} obj - Object to validate
 * @param {string} prop - prop's key to check if it belongs to the obj
 * @return {boolean} The obj does has the prop.
 */
export const hasProp = (obj = {}, prop: string): boolean => {
  if (obj === null || typeof obj !== 'object') return false;
  return prop in obj;
};

/**
 * findIndexByFirstChar
 * @description - Find the item's position based on the first char
 * @param {number} startYear - the year when the range starts
 * @param {number} endYear - the year when the range finishs
 * @returns {number}
 */
export const findIndexByFirstChar = (list: Array<SelectOption> = [], char: string): number => {
  return list.findIndex((item) => item.label.toLowerCase().charAt(0) === char);
};

/**
 * setMaxHeightByOptions
 * @description - Set the max height by a list of options
 * @param {SetMaxHeightByOptions} options - the list length, the max amount of options, and max height
 * @returns {CSSProperties}
 */
interface SetMaxHeightByOptions {
  listLength: number;
  maxOptions: number;
  maxHeight: string;
}
export const setMaxHeightByOptions = (options: SetMaxHeightByOptions): CSSProperties => {
  const { listLength, maxOptions, maxHeight } = options;
  const calcHeight = listLength <= maxOptions ? 'auto' : maxHeight;
  return { height: calcHeight };
};

/**
 * getDeviceSize
 * @description - Check the current device size
 * @param {number} width Current device width
 * @returns {Breakpoint}
 */
export const getDeviceSize = (width: number): Breakpoint => {
  if (width < 640) return Breakpoint.xs;
  if (width >= 640 && width < 768) return Breakpoint.sm;
  if (width >= 768 && width < 1024) return Breakpoint.md;
  if (width >= 1024 && width < 1280) return Breakpoint.lg;
  if (width >= 1280 && width < 1536) return Breakpoint.xl;
  return Breakpoint['2xl'];
};

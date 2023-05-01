import { CSSProperties } from 'react';

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

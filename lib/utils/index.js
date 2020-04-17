import { get, isFunction, isPlainObject, merge, reduceRight } from 'lodash';
import { createError, optionError, typeError } from './errors';

const getIn = get;

const utils = {
  createError,
  getIn,
  isFunction,
  isPlainObject,
  merge,
  optionError,
  reduceRight,
  typeError,
};

export {
  createError,
  getIn,
  isFunction,
  isPlainObject,
  merge,
  optionError,
  reduceRight,
  typeError,
};

export default utils;

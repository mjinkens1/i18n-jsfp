import { get, isFunction, isPlainObject, merge, reduceRight } from 'lodash';
import { createError, optionError, typeError } from './errors';
import { getBaseLanguageTag } from './i18n';

const getIn = get;

const utils = {
  createError,
  getIn,
  getBaseLanguageTag,
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
  getBaseLanguageTag,
  isFunction,
  isPlainObject,
  merge,
  optionError,
  reduceRight,
  typeError,
};

export default utils;

import { get, isFunction, isPlainObject, merge, reduceRight } from 'lodash';
import { createError, optionError, typeError } from './errors';
import { getBaseLanguageTag, validateLanguageTag } from './i18n';

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
  validateLanguageTag,
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
  validateLanguageTag,
};

export default utils;

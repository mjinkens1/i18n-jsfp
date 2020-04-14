import { get, isFunction, isPlainObject, merge, reduceRight } from 'lodash';

const PACKAGE_NAME = 'i18n-jsfp';
const createError = message => new Error(`[${PACKAGE_NAME}] ${message}`);
const getBaseLanguageTag = tag => tag.split('-')[0];
const validateLanguageTag = (tag, validTags) => validTags.includes(tag);

const optionError = (property, values) =>
  `The ${property} option must be one of ${values}`;

const typeError = (fieldName, type) =>
  `The value for the ${fieldName} option must be of type ${type}`;

const utils = {
  createError,
  get,
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
  get,
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

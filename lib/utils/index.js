import { get, isFunction, isPlainObject, merge, reduceRight } from 'lodash';

const PACKAGE_NAME = 'i18n-jsfp';

const utils = {
  createError: message => new Error(`[${PACKAGE_NAME}] ${message}`),
  get,
  getBaseLanguageTag: tag => tag.split('-')[0],
  isFunction,
  isPlainObject,
  merge,
  reduceRight,
  validateLanguageTag: (tag, validTags) => {
    return validTags.includes(tag);
  },
};

export default utils;

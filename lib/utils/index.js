import { get, isFunction, isPlainObject, reduceRight } from 'lodash';
import { merge } from 'ramda';
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

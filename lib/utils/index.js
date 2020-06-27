import { get, isFunction, isPlainObject, reduceRight } from 'lodash';
import { compose, last, mergeDeepRight, reduce } from 'ramda';
import { createError, optionError, typeError } from './errors';

// Redux
import { selectState } from '../redux';

const merge = mergeDeepRight;

const getIn = (...args) => {
  return get(...args);
};

const withState = selector => {
  return wrappedFunction => {
    return (...args) => {
      return wrappedFunction(selectState(selector))(...args);
    };
  };
};

export {
  compose,
  createError,
  getIn,
  isFunction,
  isPlainObject,
  last,
  merge,
  optionError,
  reduce,
  reduceRight,
  typeError,
  withState,
};

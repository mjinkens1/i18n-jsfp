import { get, isFunction, isPlainObject, reduceRight } from 'lodash';
import {
  compose,
  filter,
  identity,
  ifElse,
  is,
  last,
  map,
  mergeAll,
  mergeDeepRight,
  reduce,
} from 'ramda';
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
  filter,
  getIn,
  identity,
  ifElse,
  is,
  isFunction,
  isPlainObject,
  last,
  map,
  merge,
  mergeAll,
  optionError,
  reduce,
  reduceRight,
  typeError,
  withState,
};

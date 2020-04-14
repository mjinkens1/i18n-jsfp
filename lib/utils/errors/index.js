const PACKAGE_NAME = 'i18n-jsfp';

const createError = message => {
  return new Error(`[${PACKAGE_NAME}] ${message}`);
};

const optionError = (property, values) => {
  return `The ${property} option must be one of ${values}`;
};

const typeError = (fieldName, type) => {
  return `The value for the ${fieldName} option must be of type ${type}`;
};

export { createError, optionError, typeError };

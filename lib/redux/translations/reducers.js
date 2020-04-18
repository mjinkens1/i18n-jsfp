import actions from './actions';
import produce from 'immer';

// Utils
// import { merge } from '../../utils';
import { merge } from 'ramda';

const { types } = actions;

// Initial state
export const initialState = {
  scopePrefixId: 0,
};

// Reducer functions
const addTranslations = (state, { languageTag, translations }) => {
  const update = merge([state, { [languageTag]: translations }]);
  console.log(JSON.stringify(update));
  return update;
};

const incrementScopePrefixId = state => {
  return merge([state, { scopePrefixId: state.scopePrefixId + 1 }]);
};

const translationsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_TRANSLATIONS:
      return addTranslations(state, payload);

    case types.INCREMENT_SCOPE_PREFIX_ID:
      return incrementScopePrefixId(state);

    default:
      return state;
  }
};

// const addTranslations = (draft, { languageTag, translations }) => {
//   draft = merge(draft, { [languageTag]: translations });
// };

// const incrementScopePrefixId = draft => {
//   draft.scopePrefixId += 1;
// };

// const translationsReducer = (state = initialState, action) =>
//   produce(state, draft => {
//     const { type, payload } = action;

//     switch (type) {
//       case types.ADD_TRANSLATIONS:
//         return addTranslations(draft, payload);

//       case types.INCREMENT_SCOPE_PREFIX_ID:
//         return incrementScopePrefixId(draft);

//       // no default
//     }
//   });

// const addTranslations = (state, { languageTag, translations }) => {
//   return merge({}, state, { [languageTag]: translations });
// };

// const incrementScopePrefixId = state => {
//   return merge({}, state, { scopePrefixId: state.scopePrefixId + 1 });
// };

// const translationsReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case types.ADD_TRANSLATIONS:
//       return addTranslations(state, payload);

//     case types.INCREMENT_SCOPE_PREFIX_ID:
//       return incrementScopePrefixId(state);

//     default:
//       return state;
//   }
// };

export default translationsReducer;

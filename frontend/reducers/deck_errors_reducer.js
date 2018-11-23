import {
  RECEIVE_DECK_ERRORS,
  RECEIVE_DECK,
} from '../actions/deck_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DECK_ERRORS:
      return action.errors;
    case RECEIVE_DECK:
      return [];
    default:
      return state;
  }
};

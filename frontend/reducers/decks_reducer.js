import {
  RECEIVE_DECKS,
  RECEIVE_DECK,
} from '../actions/deck_actions';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return action.payload.decks;
    case RECEIVE_DECK:
      const { deck } = action;
      return Object.assign({}, state, { [deck.id]: deck });
    default:
      return state;
  }
};

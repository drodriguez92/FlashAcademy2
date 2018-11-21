import {
  RECEIVE_CARDS,
  RECEIVE_CARD,
} from '../actions/card_actions';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CARDS:
      return action.payload.cards;
    case RECEIVE_CARD:
      const { card } = action;
      return Object.assign({}, state, { [card.id]: card });
    default:
      return state;
  }
};

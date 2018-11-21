import * as DeckApiUtil from '../util/deck_api_util';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const RECEIVE_DECK = 'RECEIVE_DECK';

 export const receiveDecks = payload => {

  return {
    type: RECEIVE_DECKS,
    payload,
  };
};
 export const receiveDeck = deck => {
  return {
    type: RECEIVE_DECK,
    deck,
  };
};

export const fetchDecks = () => dispatch => {

  return DeckApiUtil.fetchDecks().then(payload => {

    return dispatch(receiveDecks(payload));
  });
};

export const fetchDeck = id => dispatch => {
  return DeckApiUtil.fetchDeck(id).then(deck => {
    return dispatch(receiveDeck(deck));
  });
};

export const createDeck = deck => dispatch => {
  return DeckApiUtil.createDeck(deck).then(response => {
    return dispatch(receiveDeck(response));
  });
};

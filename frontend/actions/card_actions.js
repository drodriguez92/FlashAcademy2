import * as CardApiUtil from '../util/card_api_util';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';

 export const receiveCards = payload => {

  return {
    type: RECEIVE_CARDS,
    payload,
  };
};
 export const receiveCard = card => {
  return {
    type: RECEIVE_CARD,
    card,
  };
};

export const fetchCards = () => dispatch => {

  return CardApiUtil.fetchCards().then(payload => {

    return dispatch(receiveCards(payload));
  });
};

export const fetchCard = id => dispatch => {
  return CardApiUtil.fetchCard(id).then(card => {
    return dispatch(receiveCard(card));
  });
};

export const createCard = card => dispatch => {
  return CardApiUtil.createCard(card).then(response => {
    return dispatch(receiveCard(response));
  });
};

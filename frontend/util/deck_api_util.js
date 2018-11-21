export const fetchDecks = () => {

  return $.ajax({
    url: '/api/decks',
    method: 'GET'
  });
};

export const fetchDeck = id => {
  return $.ajax({
    url: `/api/decks/${id}`,
    method: 'GET'
  });
};

export const createDeck = deck => {
  return $.ajax({
    url: '/api/decks',
    method: 'POST',
    data: { deck }
  });
};

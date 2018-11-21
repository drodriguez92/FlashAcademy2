export const fetchCards = () => {

  return $.ajax({
    url: '/api/cards',
    method: 'GET'
  });
};

export const fetchCard = id => {
  return $.ajax({
    url: `/api/cards/${id}`,
    method: 'GET'
  });
};

export const createCard = card => {
  return $.ajax({
    url: '/api/cards',
    method: 'POST',
    data: { card }
  });
};

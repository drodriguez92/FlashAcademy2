json.cards do
  @cards.each do |card|
    json.set! card.id do
      json.partial! 'api/cards/card', card: card

      json.author do
        json.extract! card.author, :id, :username
      end
    end
  end
end

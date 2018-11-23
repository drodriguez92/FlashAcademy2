json.decks do
  @decks.each do |deck|
    json.set! deck.id do
      json.partial! 'api/decks/deck', deck: deck

      json.author do
        json.extract! deck.author, :id, :username
      end
    end
  end
end

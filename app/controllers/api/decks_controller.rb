class Api::DecksController < ApplicationController
  def create
    @deck = Deck.new(deck_params)

    if @deck.save
      login(@deck)
      render "api/decks/show"
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  private

  def deck_params
    params.require(:deck).permit(:username, :password)
  end
end

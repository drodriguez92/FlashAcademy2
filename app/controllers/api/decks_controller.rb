class Api::DecksController < ApplicationController
  before_action :require_logged_in

 def index
   @decks = Deck.all.includes(:author)
   render :index
 end

 def show
   @deck = Deck.find(params[:id])
   render :show
 end

 def create
   @deck = current_user.decks.new(deck_params)

   if @deck.save
     render :show
   else
     render json: @deck.errors.full_messages, status: 422
   end
 end


 def update
   deck = current_user.Deck.find(params[:id])

   if deck.update(deck_params)
     redirect_to deck_url(deck)
   else
     render json: deck.errors.full_messages, status: 422
   end
 end

 def destroy
   @deck = current_user.Deck.find(params[:id])
   @deck.destroy
   render :show
 end


 private
 def deck_params
   params.require(:deck).permit(:name, :objective)
 end
end

class Api::CardsController < ApplicationController
  before_action :require_logged_in

   def index
     @cards = Card.all.includes(:author)
     render :index
   end

   def show
     @card = Card.find(params[:id])
     render :show
   end

   def new
     @card = Card.new
     render :new
   end

   def create
     @card = current_user.Card.new(card_params)

     if @card.save
       redirect_to card_url(@card)
     else
       flash.now[:errors] = @card.errors.full_messages
       render :new, status: 422
     end
   end

   def edit
     @card = current_user.Card.find(params[:id])
     render :edit
   end

   def update
     card = current_user.Card.find(params[:id])

     if card.update(card_params)
       redirect_to card_url(card)
     else
       flash[:errors] = card.errors.full_messages
       redirect_to edit_card_url(card)
     end
   end

   def destroy
     card = current_user.Card.find(params[:id])
     card.destroy
     redirect_to cards_url
   end



   private
   def card_params
     params.require(:card).permit(:question, :answer)
   end
end

class Api::CardsController < ApplicationController
  before_action :ensure_logged_in

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
     @card = current_user.cards.new(card_params)

     if @card.save
       redirect_to card_url(@card)
     else
       flash.now[:errors] = @card.errors.full_messages
       render :new, status: 422
     end
   end

   def edit
     @card = current_user.cards.find(params[:id])
     render :edit
   end

   def update
     card = current_user.cards.find(params[:id])

     if card.update(card_params)
       redirect_to card_url(card)
     else
       flash[:errors] = card.errors.full_messages
       redirect_to edit_card_url(card)
     end
   end

   def destroy
     card = current_user.cards.find(params[:id])
     card.destroy
     redirect_to cards_url
   end

   def set_cookie
     maybe_cookie = params[:my_cookie]

     if maybe_cookie
       cookies[:my_cookie] = maybe_cookie
       session[:my_cookie] = maybe_cookie
       render plain: "I am setting your cookie: #{cookies[:my_cookie]}"
     else
       render plain: "You must provide a cookie"
     end
   end

   def get_cookie
     my_cookie = cookies[:my_cookie]
     if my_cookie
       render plain: "Here's your cookie: #{my_cookie}, and here's your session #{session[:my_cookie]}"
     else
       render plain: "You haven't set a cookie called :my_cookie yet"
     end
   end

   private
   def card_params
     params.require(:card).permit(:question, :answer)
   end
end

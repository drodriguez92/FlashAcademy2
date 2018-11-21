class Api::DecksController < ApplicationController
  before_action :ensure_logged_in

 def index
   @decks = deck.all.includes(:author)
   render :index
 end

 def show
   @deck = deck.find(params[:id])
   render :show
 end

 def new
   @deck = deck.new
   render :new
 end

 def create
   @deck = current_user.decks.new(deck_params)

   if @deck.save
     redirect_to deck_url(@deck)
   else
     flash.now[:errors] = @deck.errors.full_messages
     render :new, status: 422
   end
 end

 def edit
   @deck = current_user.decks.find(params[:id])
   render :edit
 end

 def update
   deck = current_user.decks.find(params[:id])

   if deck.update(deck_params)
     redirect_to deck_url(deck)
   else
     flash[:errors] = deck.errors.full_messages
     redirect_to edit_deck_url(deck)
   end
 end

 def destroy
   deck = current_user.decks.find(params[:id])
   deck.destroy
   redirect_to decks_url
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
 def deck_params
   params.require(:deck).permit(:name, :objective)
 end
end

require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end


  get '/pokemons' do 
    @pokemons = Pokemon.all
    erb :index
  end

  get '/pokemons/new' do 
    erb :new
  end

  get '/pokemons/:id' do 
    @pokemon = Pokemon.find(params[:id])
    erb :show
  end

  post '/pokemons' do 
    Pokemon.create(params[:pokemon])
    redirect to '/pokemons'
  end

  get '/pokemons/:id/edit' do 
    @pokemon = Pokemon.find(params[:id])
    erb :edit
  end

  patch '/pokemons/:id' do 
    @pokemon = Pokemon.find(params[:id])
    @pokemon.update(params[:pokemon])
    redirect to "/pokemons/#{@pokemon.id}"
  end

  delete '/pokemon/:id' do
    @pokemon = Pokemon.find(params[:id])
    @pokemon.destroy
  end

end

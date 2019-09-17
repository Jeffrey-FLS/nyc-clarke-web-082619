require './config/environment'
require 'pry'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get '/cereals' do
    @cereals = Cereal.all
    erb :index
  end

  get '/cereals/new' do
    erb :new
  end

  get '/cereals/:id' do
    @cereal = Cereal.find(params[:id])
    erb :show
  end

  post '/cereals' do
    Cereal.create(params)
    redirect to '/cereals'
  end

  get '/cereals/:id/edit' do
    @cereal = Cereal.find(params[:id])
    erb :edit
  end

  patch '/cereals/:id' do
    @cereal = Cereal.find(params[:id])

    @cereal.update(params[:cereal])

    redirect to "/cereals/#{@cereal.id}"
  end

  delete '/cereals/:id' do
    @cereal = Cereal.find(params[:id])
    @cereal.destroy

    redirect to '/cereals'
  end


end

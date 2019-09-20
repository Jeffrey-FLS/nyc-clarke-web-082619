Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/pokemons', to: 'pokemons#index'
  get '/pokemons/new', to: 'pokemons#new'
  get '/pokemons/:id', to: 'pokemons#show'
  post '/pokemons', to: 'pokemons#create'
end

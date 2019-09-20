Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'doctors#home'

  resources :doctors
  resources :patients

  resources :appointments, only: [ :index, :new, :create ]
end

Rails.application.routes.draw do
 
  get '/api/greetings/random', to: 'greetings#random'
  #Ex:- :default =>''
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  root to: 'home#index'
end

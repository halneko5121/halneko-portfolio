Rails.application.routes.draw do
  root to: 'homes#index'
  post "/", to: "homes#index"
end

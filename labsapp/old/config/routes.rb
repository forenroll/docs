RailsApp::Application.routes.draw do
  scope $lab_context do
    # to get the lab_context
    require Rails.root.join('config', 'initializers', 'labs.rb')
    get "/", to: 'application#index'
  end
end

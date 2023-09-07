class GreetingsController < ActionController::API
  def random
    greeting = Message.order('RANDOM()').first
    render json: greeting
  end
end

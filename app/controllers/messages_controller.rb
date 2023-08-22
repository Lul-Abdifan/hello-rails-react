class MessagesController < ApplicationController

     def random_message
        random_mes = Message.order("RANDOM()").first
        render json:{message: random_mes}
     end
end

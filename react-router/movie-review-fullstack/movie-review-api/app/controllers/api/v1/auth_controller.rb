class Api::V1::AuthController < ApplicationController
  
    def login
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            render json: user
        else
            render json: {errors: "Username or password not correct."}
        end
    end
  
    
  end
  
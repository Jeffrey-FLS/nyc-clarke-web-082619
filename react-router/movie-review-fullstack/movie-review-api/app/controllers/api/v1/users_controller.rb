class Api::V1::UsersController < ApplicationController
  # def index
  #   @users = User.all

  #   render json: @users, status: :ok
  # end

  # def show
  #   @user = User.find(params[:id])

  #   render json: @user, status: :ok
  # end

  def create
    user = User.create({username: params[:username], password: params[:password]})
    if user.save
      render json: user, status: :ok
    else
      render json: {errors: user.errors.full_messages[0]}
    end
  end

  
end

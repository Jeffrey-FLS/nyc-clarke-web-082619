class PizzasController < ApplicationController
  def index
    @pizzas = Pizza.all

    render json: PizzaSerializer.new(@pizzas).serialized_json

  end
end
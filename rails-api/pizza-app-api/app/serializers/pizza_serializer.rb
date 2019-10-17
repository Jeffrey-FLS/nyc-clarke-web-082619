class PizzaSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :img_url
end

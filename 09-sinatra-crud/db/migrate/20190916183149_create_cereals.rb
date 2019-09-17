class CreateCereals < ActiveRecord::Migration
  def change
    create_table :cereals do |t|
      t.string :name
      t.float  :rating
      t.string :image_url
    end
  end
end

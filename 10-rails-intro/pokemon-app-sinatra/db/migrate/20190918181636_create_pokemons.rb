class CreatePokemons < ActiveRecord::Migration
  def change
    create_table :pokemons do |t|
      t.string :element_type
      t.string :name
      t.string :weakness
      t.string :trainer
    end
  end
end

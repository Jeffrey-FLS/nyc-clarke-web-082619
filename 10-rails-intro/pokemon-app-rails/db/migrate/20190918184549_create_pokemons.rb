class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :element_type
      t.string :weakness
      t.string :trainer

      t.timestamps
    end
  end
end

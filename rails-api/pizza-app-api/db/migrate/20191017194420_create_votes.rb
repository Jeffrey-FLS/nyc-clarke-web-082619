class CreateVotes < ActiveRecord::Migration[6.0]
  def change
    create_table :votes do |t|
      t.integer :pizza_id

      t.timestamps
    end
  end
end

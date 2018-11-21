class CreateDecks < ActiveRecord::Migration[5.2]
  def change
    create_table :decks do |t|
      t.string :name, null: false
      t.text :objective, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
  end
end

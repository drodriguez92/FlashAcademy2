class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :question, null: false
      t.text :answer, null: false
      t.integer :author_id, null: false
      t.integer :deck_id, null: false 
    end
  end
end

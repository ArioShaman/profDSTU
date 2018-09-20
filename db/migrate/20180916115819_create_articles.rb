class CreateArticles < ActiveRecord::Migration[5.1]
    def change
        create_table :articles do |t|
            t.string :title, null: false
            t.string :cover, null: false
            t.string :html_text, null: false

            t.integer :watches, default: 0
            t.timestamps
        end
    end
end

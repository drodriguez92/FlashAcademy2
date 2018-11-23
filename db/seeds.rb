# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Deck.delete_all
User.delete_all

user1 = User.create!(
  username: 'thedog',
  password: 'thedog'
)

Deck.create!(
  name: 'Ruby',
  objective: 'Get better at Ruby',
  author: user1
)

Deck.create!(
  name: 'Javasript',
  objective: 'Get better at Javascript',
  author: user1
)

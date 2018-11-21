# == Schema Information
#
# Table name: decks
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  objective  :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Deck < ApplicationRecord
  validates :name, :objective, presence: true

  has_many :cards,
    foreign_key: :card_id,
    primary_key: :id,
    class_name: :Card

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User
end

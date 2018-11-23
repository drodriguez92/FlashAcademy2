# == Schema Information
#
# Table name: cards
#
#  id        :bigint(8)        not null, primary key
#  question  :string           not null
#  answer    :text             not null
#  author_id :integer          not null
#  deck_id   :integer          not null
#

class Card < ApplicationRecord
  validates :question, :answer, :author_id, :deck_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

  belongs_to :deck,
    foreign_key: :deck_id,
    primary_key: :id,
    class_name: :Deck
end

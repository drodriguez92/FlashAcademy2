# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :decks,
      foreign_key: :author_id,
      primary_key: :id,
      class_name: :Deck

    has_many :cards,
      through: :decks,
      source: :cards

    def self.find_by_credentials(username, password)
      user = User.find_by(username: username)
      return nil unless user && user.is_password?(password)
      user
    end

    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
      generate_unique_session_token
      save!
      self.session_token
    end

    private

    def ensure_session_token
      generate_unique_session_token unless self.session_token
    end

    def new_session_token
      SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
      self.session_token = new_session_token
      while User.find_by(session_token: self.session_token)
        self.session_token = new_session_token
      end
      self.session_token
    end
end

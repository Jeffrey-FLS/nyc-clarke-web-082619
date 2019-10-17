class Pizza < ApplicationRecord
  has_many :votes

  def vote
    self.votes.create
  end
end

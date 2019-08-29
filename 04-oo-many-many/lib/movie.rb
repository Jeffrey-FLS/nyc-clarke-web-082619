class Movie
  attr_reader :title, :duration

  @@all = []

  def initialize(title, duration)
    @title = title
    @duration = duration

    @@all << self
  end

  def reviews
    Review.all.select do |review|
      review.movie == self
    end
  end

  def users
    reviews.map { |review| review.user }
  end

  def self.all
    @@all
  end
end
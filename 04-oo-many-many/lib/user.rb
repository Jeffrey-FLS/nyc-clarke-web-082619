class User
  attr_accessor :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def reviews
    Review.all.select do |review|
      review.user == self
    end
  end

  def movies
    reviews.map do |review|
      review.movie
    end
  end


  def self.all
    @@all
  end
end
require 'pry'

require_relative 'lib/movie'
require_relative 'lib/user'
require_relative 'lib/review'

movie1 = Movie.new("The Matrix", 150)
movie2 = Movie.new("The Matrix Reloaded", 138)
movie3 = Movie.new("The Matrix Revolutions", 129)

user1 = User.new("Neo")
user2 = User.new("Morpheus")
user3 = User.new("Trinity")

review1 = Review.new(user1, movie1, "Bad.")
review2 = Review.new(user1, movie2, "Great, even worse.")
review3 = Review.new(user3, movie1, "Bring back Bill and Ted.")
review4 = Review.new(user2, movie3, "WHOAAAAAAAA 🤯.")
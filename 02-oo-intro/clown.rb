require 'pry'

class Clown
  attr_accessor :name, :height, :shoe_size

  @@clown_jokes = [
    "I’m a big fan of whiteboards. I find them quite re-markable.",
    "How many programmers does it take to change a light bulb?\n\n None – It’s a hardware problem",
    "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
    "In order to understand recursion you must first understand recursion.",
    "Whats the object oriented way to becoming wealthy?\n\n Inheritance.",
    "Changing random stuff until your program works is hacky and bad coding practice but if you do it fast enough it's machine learning and pays 4x current salary. - @smaine"
  ]

  def initialize(name, height = nil, shoe_size = nil)
    @name = name
    @height = height
    @shoe_size = shoe_size
  end

  def tell_joke
    @@clown_jokes.sample
  end

  def some_method
    self
  end

end


clown1 = Clown.new("Bozo", "60 inches", "60 inches")
clown2 = Clown.new("Dodo", "70 inches", "70 inches")
clown3 = Clown.new("Pojo", "80 inches", "80 inches")

binding.pry
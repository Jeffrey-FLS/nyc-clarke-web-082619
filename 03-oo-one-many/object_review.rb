require 'pry'

class Person
  attr_accessor :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def method_name
    self
  end

end

person1 = Person.new("Tommy")

binding.pry
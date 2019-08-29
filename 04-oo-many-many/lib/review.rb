class Review
  attr_reader :user, :movie
  attr_accessor :content

  @@all = []

  def initialize(user, movie, content)
    #belongs_to user
    @user = user
    # belongs_to movie
    @movie = movie
    @content = content

    @@all << self
  end


  def self.all
    @@all
  end

end
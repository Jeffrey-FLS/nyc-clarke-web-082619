require 'pry'

require_relative 'lib/user'
require_relative 'lib/tweet'

user1 = User.new("XxreddarknessxX")
user1.post_tweet("no one understands!!!")

user2 = User.new("urkissesrgolden")
user2.post_tweet("doin' math 📝")

binding.pry
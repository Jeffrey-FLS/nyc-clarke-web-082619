require 'pry'
require 'rest-client'
require 'tty-prompt'

UI = TTY::Prompt.new


system 'clear'
puts "Welcome to Book Looker"
puts "Please input what you wanna search for:"
user_input = gets.chomp

response = RestClient.get "https://www.googleapis.com/books/v1/volumes?q=#{user_input}"
google_books_data = JSON.parse(response.body)

book_titles = google_books_data["items"].map do |book_hash|
  book_hash["volumeInfo"]["title"]
end

book_title = UI.select("Please Select a book you want to learn more about:", book_titles)

puts "Here is some info about your book..."
found_book = google_books_data["items"].find do |book_hash|
  book_hash["volumeInfo"]["title"] == book_title
end

puts found_book["volumeInfo"]["description"]














# google_books_data["items"].each do |book|
#   puts "Title:"
#   puts book["volumeInfo"]["title"]
#   puts "Author(s): #{book["volumeInfo"]["authors"]}"
#   puts "=========================="
#   puts "Description"
#   puts book["volumeInfo"]["description"]

#   puts "\n\n"
# end


# RestClient.get 'https://www.reddit.com/r/Awww'

# response = RestClient.get 'https://www.reddit.com/r/Awww.json'
# reddit_data_hash = JSON.parse(response.body)

# reddit_data_hash["data"]["children"].each do |post|
#   puts post["data"]["title"]
# end
# binding.pry
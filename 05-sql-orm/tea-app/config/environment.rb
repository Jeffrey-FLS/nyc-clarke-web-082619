require 'sqlite3'

DB = SQLite3::Database.new "db/tea.db"

require_relative '../lib/tea'
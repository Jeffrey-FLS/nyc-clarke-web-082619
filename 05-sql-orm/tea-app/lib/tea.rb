class Tea
  attr_accessor :name, :description

  def initialize(name, description)
    @name = name
    @description = description
    DB.execute("INSERT INTO teas (name, description) VALUES ('#{@name}', '#{@description}')")
  end

  def self.all
    DB.execute("SELECT * FROM teas").map do |row|
      Tea.new(row[1], row[2])
    end
  end
end

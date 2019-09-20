class Doctor < ApplicationRecord
  has_many :appointments
  has_many :patients, through: :appointments


  def name_and_specialty
    "#{name} (#{specialty})"
  end
end

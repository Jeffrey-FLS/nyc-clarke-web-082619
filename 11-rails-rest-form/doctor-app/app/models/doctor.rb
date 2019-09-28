class Doctor < ApplicationRecord
  has_many :appointments
  has_many :patients, through: :appointments

  validates :name, presence: true 
  validates :name, uniqueness: { case_sensitive: false }
  validates :specialty, presence: true

  validate :name_has_to_have_md_at_the_end


  def name_and_specialty
    "#{name} (#{specialty})"
  end


  private

  def name_has_to_have_md_at_the_end
    suffix = name.split(' ')[-1]
    if suffix != "M.D."
      errors.add(:name, "You have to have M.D. as a suffix to be a REAL doctor.")
    end
  end
end

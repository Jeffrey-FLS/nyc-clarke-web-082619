class DoctorsController < ApplicationController
  before_action :find_doctor, only: [:show, :edit, :destroy, :update]

  def home
    render :home
  end

  def index
    @doctors = Doctor.all
    render :index
  end

  def show
    render :show
  end

  def new
    @doctor = Doctor.new
    render :new
  end

  def create
    @doctor = Doctor.new(doctor_params)
    if @doctor.save
      redirect_to doctor_path(@doctor)  #"/doctors/#{@doctor.id}"
    else
      flash[:errors] = @doctor.errors.full_messages
      redirect_to new_doctor_path
    end
  end

  def edit
    render :edit
  end

  def update
    @doctor.update(doctor_params)
    redirect_to doctor_path(@doctor)
  end


  def destroy
    @doctor.destroy
    redirect_to doctors_path
  end



  private
  
  def find_doctor
    @doctor = Doctor.find(params[:id])
  end

  def doctor_params
    params.require(:doctor).permit(:name, :specialty)
  end
end

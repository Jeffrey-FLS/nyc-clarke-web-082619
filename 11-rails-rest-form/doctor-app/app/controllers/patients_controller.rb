class PatientsController < ApplicationController

  before_action :find_patient, only: [:show, :edit, :update, :destroy]

  def index
    # show all the patients
    @patients = Patient.all
    render :index
  end

  def show
    # show info about 1 patient
    render :show
  end

  def new
    # show a form to help create a patient
    @patient = Patient.new
    render :new
  end

  def edit
    # show a form to help edit a patient
    render :edit
  end

  def create
    # takes params from the new form
    # creates a patient and saves it using those params
    @patient = Patient.create(patient_params)
    redirect_to patient_path(@patient)
  end

  def update
    # takes params from edit form
    # updates the patient and saves it using those params
    @patient.update(patient_params)
    redirect_to patient_path(@patient)
  end

  def destroy
    # finds a patient and destroys it
    @patient.destroy
    redirect_to patients_path
  end

  private

  def find_patient
    @patient = Patient.find(params[:id])
  end

  def patient_params
    params.require(:patient).permit(:name, :insurance, :age)
  end
end

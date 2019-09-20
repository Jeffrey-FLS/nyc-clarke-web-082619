class AppointmentsController < ApplicationController

  def new
    @doctors = Doctor.all
    @patients = Patient.all
    @appointment = Appointment.new
    render :new
  end

  def create
    Appointment.create(appointment_params)
    redirect_to new_appointment_path
  end

  def appointment_params
    params.require(:appointment).permit(:doctor_id, :patient_id, :illness)
  end
end

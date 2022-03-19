var mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
  appointmentDate: {type:String,required:true},
  place:{type:String,required:true},
  numberOfPeople:{type:Number,required:true}
})

const Appointment = mongoose.model("appointment",appointmentSchema)

module.exports.Appointment = Appointment
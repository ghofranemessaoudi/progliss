const { Appointment } = require("../models/appointmentModel");

module.exports = {
  create: (obj, callbacks) => {
    const app = new Appointment(obj);
    app.save(callbacks);
  },
  read: callbacks => {
    Appointment.find().exec(callbacks);
  },
  delete: (id, callback) => {
    Appointment.findByIdAndRemove({ _id: id }).exec(callback);
  }
};
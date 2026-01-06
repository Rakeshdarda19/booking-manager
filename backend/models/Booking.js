
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  slots: { type: Number, default: 1 }
});

module.exports = mongoose.model('Booking', BookingSchema);

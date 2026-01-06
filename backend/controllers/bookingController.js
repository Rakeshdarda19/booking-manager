
const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  const { name, date, slots } = req.body;
  if (!name || !date) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  const booking = await Booking.create({ name, date, slots });
  res.json(booking);
};

exports.getBookings = async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
};

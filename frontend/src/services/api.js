
import axios from 'axios';

const API = 'http://localhost:4000/api/bookings';

export const getBookings = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const createBooking = async (data) => {
  const res = await axios.post(API, data);
  return res.data;
};

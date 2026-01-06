
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const bookingRoutes = require('./routes/bookingRoutes');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/bookings', bookingRoutes);

app.listen(4000, () => console.log('Server running on port 4000'));

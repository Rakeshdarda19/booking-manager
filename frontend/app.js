import { useEffect, useState } from "react";
import CreateBooking from "./pages/CreateBooking";
import BookingList from "./pages/BookingList";
import { getBookings } from "./services/api";

function App() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    setLoading(true);
    const data = await getBookings();
    setBookings(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <CreateBooking onBookingCreated={fetchBookings} />
      <BookingList bookings={bookings} loading={loading} />
    </div>
  );
}

export default App;

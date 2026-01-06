import { useEffect, useState } from "react";
import { getBookings } from "../services/api";

export default function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBookings()
      .then(setBookings)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center mt-6">Loading bookings...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-4">All Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings yet</p>
      ) : (
        <div className="grid gap-4">
          {bookings.map((b) => (
            <div
              key={b._id}
              className="border p-4 rounded-lg shadow-sm bg-white"
            >
              <p className="font-medium">{b.name}</p>
              <p className="text-sm text-gray-600">Date: {b.date}</p>
              <p className="text-sm text-gray-600">Slots: {b.slots}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

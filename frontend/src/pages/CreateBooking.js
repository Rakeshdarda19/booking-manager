import { useState } from "react";
import { createBooking } from "../services/api";

export default function CreateBooking() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) return setError("Name is required");
    if (!date) return setError("Please select a date");
    if (!slots) return setError("Please select slots");

    try {
      setLoading(true);
      await createBooking({ name, date, slots });

      setName("");
      setDate("");
      setSlots(null);
      alert("Booking created successfully!");
    } catch (err) {
      setError("Failed to create booking. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Create Booking</h2>

      {error && (
        <p className="mb-3 text-sm text-red-600 bg-red-50 p-2 rounded">
          {error}
        </p>
      )}

      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>


        <div>
          <label className="block text-sm font-medium mb-2">Slots</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((s) => (
              <button
                type="button"
                key={s}
                onClick={() => setSlots(s)}
                className={`px-4 py-2 rounded border ${
                  slots === s
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Create Booking"}
        </button>
      </form>
    </div>
  );
}

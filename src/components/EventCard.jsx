function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2">
          {event.title}
        </h2>

        <p className="text-gray-600 mb-2">
          {event.date}
        </p>

        <p className="text-gray-500 mb-4">
          {event.location}
        </p>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default EventCard
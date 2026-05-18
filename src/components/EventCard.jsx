import { Link } from "react-router-dom"

function EventCard({ event }) {
  return (
    <Link to={`/event/${event.id}`}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition hover:-tranblue-y-1 duration-300">

        <img
          src={event.image}
          alt={event.title}
          className="w-full h-56 object-cover"
        />

        <div className="p-5">

          <h2 className="text-2xl font-bold mb-2">
            {event.title}
          </h2>

          <p className="text-blue-600 mb-2">
            {event.date}
          </p>

          <p className="text-blue-500 mb-4">
            {event.location}
          </p>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            View Details
          </button>

        </div>
      </div>
    </Link>
  )
}

export default EventCard
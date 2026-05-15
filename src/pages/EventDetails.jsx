import { useParams } from "react-router-dom"
import events from "../data/events"

function EventDetails() {
  const { id } = useParams()

  const event = events.find(
    (event) => event.id === Number(id)
  )

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Event not found
        </h1>
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

        <img
          src={event.image}
          alt={event.title}
          className="w-full h-[400px] object-cover"
        />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-4">
            {event.title}
          </h1>

          <p className="text-gray-600 mb-2">
            {event.location}
          </p>

          <p className="text-gray-600 mb-6">
            {event.date}
          </p>

          <p className="text-gray-700 leading-7 mb-8">
            {event.description}
          </p>

          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition">
            Book Event
          </button>

        </div>
      </div>
    </section>
  )
}

export default EventDetails
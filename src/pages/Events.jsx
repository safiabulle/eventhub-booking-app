import { useState } from "react"

import EventCard from "../components/EventCard"
import events from "../data/events"

function Events() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesCategory =
      category === "All" ||
      event.category === category

    return matchesSearch && matchesCategory
  })

  return (
    <section className="min-h-screen bg-blue-100 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          Upcoming Events
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-10">

          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="flex-1 border bg-white rounded-xl px-4 py-3"
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="border bg-white rounded-xl px-4 py-3"
          >
            <option value="All">
              All Categories
            </option>

            <option value="Technology">
              Technology
            </option>

            <option value="Business">
              Business
            </option>

            <option value="Entertainment">
              Entertainment
            </option>

            <option value="Adventure">
              Adventure
            </option>

            <option value="Social">
              Social
            </option>

          </select>

        </div>

        {filteredEvents.length === 0 ? (
          <p className="text-center text-blue-600">
            No events found.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
              />
            ))}

          </div>
        )}

      </div>
    </section>
  )
}

export default Events
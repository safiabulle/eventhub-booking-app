import { useState } from "react"
import { useParams } from "react-router-dom"

import events from "../data/events"

import { useAuth } from "../context/AuthContext"

import {
  db,
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "../firebase/firestore"


function EventDetails() {
  const { id } = useParams()

  const { user } = useAuth()

const [loading, setLoading] = useState(false)

  const event = events.find(
    (event) => event.id === Number(id)
  )

  async function handleBooking() {
  if (!user) {
    alert("Please login first")
    return
  }
  setLoading(true)

  try {
    const q = query(
      collection(db, "bookings"),
      where("userId", "==", user.uid),
      where("eventId", "==", event.id)
    )

    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      alert("You already booked this event")
      return
    }

    await addDoc(
      collection(db, "bookings"),
      {
        userId: user.uid,
        userEmail: user.email,
        eventId: event.id,
        title: event.title,
        location: event.location,
        date: event.date,
        image: event.image,
        bookedAt: new Date(),
      }
    )

    alert("Event booked successfully!")

  } catch (error) {
    console.log(error)
    
  }finally {
      setLoading(false)
      }
}

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

          <button
            onClick={handleBooking}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            {loading ? "Booking..." : "Book Event"}
          </button>

        </div>
      </div>
    </section>
  )
}

export default EventDetails
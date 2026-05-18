import {
  useEffect,
  useState,
} from "react"

import { useAuth } from "../context/AuthContext"

import {
  db,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "../firebase/firestore"

function Dashboard() {
  const { user, logout } = useAuth()

  const [bookings, setBookings] = useState([])

  async function fetchBookings() {
    try {
      const q = query(
        collection(db, "bookings"),
        where("userId", "==", user.uid)
      )

      const querySnapshot = await getDocs(q)

      const bookingsData = querySnapshot.docs.map(
        (docItem) => ({
          id: docItem.id,
          ...docItem.data(),
        })
      )

      setBookings(bookingsData)

    } catch (error) {
      console.log(error)
    }
  }

  async function handleDelete(id) {
    try {
      await deleteDoc(doc(db, "bookings", id))

      fetchBookings()

    } catch (error) {
      console.log(error)
    }
  }

  async function handleLogout() {
    try {
      await logout()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user) {
      fetchBookings()
    }
  }, [user])

  return (
    <section className="min-h-screen bg-blue-100 px-6 py-10">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-blue-600 mt-2">
              Welcome back, {user?.email}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-5 py-2 rounded-xl hover:bg-red-600 transition"
          >
            Logout
          </button>

        </div>

        <h2 className="text-2xl font-semibold mb-6">
          My Bookings
        </h2>

        {bookings.length === 0 ? (
          <p className="text-blue-600">
            No bookings yet.
          </p>
        ) : (
          <div className="grid gap-6">

            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-blue-100 rounded-2xl overflow-hidden shadow"
              >

                <img
                  src={booking.image}
                  alt={booking.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-5">

                  <h3 className="text-2xl font-bold mb-2">
                    {booking.title}
                  </h3>

                  <p className="text-blue-600 mb-2">
                     {booking.location}
                  </p>

                  <p className="text-blue-600 mb-4">
                    {booking.date}
                  </p>

                  <button
                    onClick={() =>
                      handleDelete(booking.id)
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                  >
                    Cancel Booking
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  )
}

export default Dashboard
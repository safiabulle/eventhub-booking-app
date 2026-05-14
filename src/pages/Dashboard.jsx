function Dashboard() {
  return (
    <section className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          My Bookings
        </h1>

        <div className="bg-white rounded-2xl shadow-md p-10 text-center">

          <h2 className="text-2xl font-semibold mb-4">
            No bookings yet
          </h2>

          <p className="text-gray-600">
            Your booked events will appear here.
          </p>

        </div>

      </div>
    </section>
  )
}

export default Dashboard
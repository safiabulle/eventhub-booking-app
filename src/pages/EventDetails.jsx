function EventDetails() {
  return (
    <section className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

        <img
          src="https://images.pexels.com/photos/4940642/pexels-photo-4940642.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Event"
          className="w-full h-[400px] object-cover"
        />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-4">
            Tech Conference 2026
          </h1>

          <p className="text-gray-600 mb-2">
             Nairobi, Kenya
          </p>

          <p className="text-gray-600 mb-6">
            June 15, 2026
          </p>

          <p className="text-gray-700 leading-7 mb-8">
            Join industry professionals, developers, and entrepreneurs
            for an exciting technology conference featuring networking,
            innovation showcases, keynote speakers, and career growth opportunities.
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
import { Link } from "react-router-dom"

function Home() {
  return (
    <section className="min-h-screen bg-blue-100 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-6">
            Discover Amazing Events Near You
          </h1>

          <p className="text-lg text-blue-600 mb-8">
            Browse and book conferences, concerts, outdoor adventures,
            networking events, and unforgettable experiences.
          </p>

          <div className="flex gap-4">
            <Link
              to="/events"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Explore Events
            </Link>

            <Link
              to="/register"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div>
          <img
            src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Events"
            className="rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
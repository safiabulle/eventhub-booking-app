import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold text-blue-600"
        >
          EventHub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-blue-700 font-medium">

          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/events" className="hover:text-blue-600">
            Events
          </Link>

          <Link to="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>

          {/*<Link to="/login" className="hover:text-blue-600">
            Login
          </Link>*/}

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-blue-700 font-medium">

          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>

          <Link to="/events" onClick={() => setIsOpen(false)}>
            Events
          </Link>

          <Link to="/dashboard" onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>

          <Link to="/login" onClick={() => setIsOpen(false)}>
            Login
          </Link>

        </div>
      )}

    </nav>
  )
}

export default Navbar
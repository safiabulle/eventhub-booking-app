import EventCard from "../components/EventCard"

function Events() {
  const events = [
  {
    id: 1,
    title: "Tech Conference 2026",
    date: "June 15, 2026",
    location: "Nairobi, Kenya",
    image:
      "https://images.pexels.com/photos/4940642/pexels-photo-4940642.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  {
    id: 2,
    title: "Live Concert Experience",
    date: "July 2, 2026",
    location: "Mombasa, Kenya",
    image:
      "https://images.pexels.com/photos/36675302/pexels-photo-36675302.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  {
    id: 3,
    title: "Business Leadership Summit",
    date: "August 10, 2026",
    location: "Kisumu, Kenya",
    image:
      "https://images.pexels.com/photos/9301303/pexels-photo-9301303.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  {
    id: 4,
    title: "Startup Networking Meetup",
    date: "September 5, 2026",
    location: "Nakuru, Kenya",
    image:
      "https://images.pexels.com/photos/8349427/pexels-photo-8349427.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  {
    id: 5,
    title: "Future Tech Expo",
    date: "October 18, 2026",
    location: "Eldoret, Kenya",
    image:
      "https://images.pexels.com/photos/19012046/pexels-photo-19012046.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },

  {
  id: 6,
  title: "Naivasha Adventure Trip",
  date: "November 12, 2026",
  location: "Naivasha, Kenya",
  image:
    "https://images.pexels.com/photos/8341094/pexels-photo-8341094.jpeg?auto=compress&cs=tinysrgb&w=1200",
},

{
  id: 7,
  title: "Sip and Paint Night",
  date: "December 3, 2026",
  location: "Nairobi, Kenya",
  image:
    "https://images.pexels.com/photos/29246210/pexels-photo-29246210.jpeg?auto=compress&cs=tinysrgb&w=1200",
},

{
  id: 8,
  title: "Mountain Hiking Adventure",
  date: "December 15, 2026",
  location: "Mount Kenya, Kenya",
  image:
    "https://images.pexels.com/photos/33368403/pexels-photo-33368403.jpeg?auto=compress&cs=tinysrgb&w=1200",
},

{
  id: 9,
  title: "Weekend Camping Experience",
  date: "January 8, 2027",
  location: "Nanyuki, Kenya",
  image:
    "https://images.pexels.com/photos/116104/pexels-photo-116104.jpeg?auto=compress&cs=tinysrgb&w=1200",
},
]

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Upcoming Events
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
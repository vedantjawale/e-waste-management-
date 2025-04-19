import { Button } from "@/components/ui/button"
import Link from "next/link"

const timelineEvents = [
  {
    year: 2018,
    title: "Foundation",
    description: "EcoRecycle was founded in Jaipur with a mission to revolutionize waste management in Rajasthan.",
  },
  {
    year: 2019,
    title: "First Facility",
    description: "Opened our first recycling facility in Jaipur and launched doorstep pickup services.",
  },
  {
    year: 2020,
    title: "Innovation",
    description: "Introduced AI-powered sorting technology for more efficient recycling processes.",
  },
  {
    year: 2021,
    title: "Expansion",
    description: "Expanded operations to cover all major areas of Jaipur and surrounding regions.",
  },
  {
    year: 2022,
    title: "Recognition",
    description: "Received award for 'Best Waste Management Company' in Rajasthan.",
  },
  {
    year: 2023,
    title: "Milestone",
    description: "Successfully recycled over 1 million kg of waste and served 100,000+ customers.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <nav className="mb-4">
            <div className="space-x-4">
              <Link href="/" className="text-white hover:text-green-300 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-green-300 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-white hover:text-green-300 transition-colors">
                Services
              </Link>
              <Link href="/request-pickup" className="text-white hover:text-green-300 transition-colors">
                Request Pickup
              </Link>
              <Link href="/locations" className="text-white hover:text-green-300 transition-colors">
                Locations
              </Link>
              <Link href="/faq" className="text-white hover:text-green-300 transition-colors">
                FAQ
              </Link>
            </div>
          </nav>
          <h1 className="text-4xl font-bold mb-4">About EcoRecycle</h1>
          <p className="text-xl">Leading waste management solutions in Jaipur since 2018</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2018, EcoRecycle emerged from a vision to address the growing waste crisis in Rajasthan. What
                started as a small initiative in Jaipur has now grown into one of the region's most trusted waste
                management companies.
              </p>
              <p className="text-gray-600 mb-6">
                Our commitment to environmental sustainability and technological innovation has helped us become a
                leader in responsible waste recycling, serving both individuals and businesses across Jaipur and beyond.
              </p>
              <Link href="/our-story">
                <Button className="bg-green-600 hover:bg-green-700 text-white">Learn More</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={event.year} className="flex gap-8">
                <div className="w-32 text-right">
                  <span className="text-green-600 font-bold">{event.year}</span>
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Environmental Protection</h3>
              <p className="text-gray-600">
                We are committed to reducing the environmental impact of waste through proper recycling and disposal
                methods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Community Education</h3>
              <p className="text-gray-600">
                We actively engage with the community to raise awareness about responsible waste disposal and its
                importance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously invest in new technologies and processes to improve our recycling efficiency and
                effectiveness.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-green-50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
            <p className="text-xl text-gray-600 mb-6">
              Be part of our mission to create a cleaner, greener future for Jaipur
            </p>
            <div className="space-x-4">
              <Link href="/request-pickup">
                <Button className="bg-green-600 hover:bg-green-700 text-white">Schedule a Pickup</Button>
              </Link>
              <Link href="/our-mission">
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


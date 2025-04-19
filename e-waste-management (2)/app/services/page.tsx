"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Trash2, Recycle, Leaf, Calendar, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Trash2,
    title: "General Waste Collection",
    description: "Regular collection and proper disposal of household and commercial waste.",
  },
  {
    icon: Recycle,
    title: "Recycling Services",
    description: "Sorting and recycling of paper, plastic, glass, and metal materials.",
  },
  {
    icon: Leaf,
    title: "Green Waste Management",
    description: "Composting and eco-friendly disposal of organic and garden waste.",
  },
]

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive waste management solutions for a greener future</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                {hoveredService === index && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4">
                    <Link href="/request-pickup" className="text-green-600 font-semibold flex items-center">
                      Schedule Pickup <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Schedule</h3>
              <p className="text-gray-600">Book a pickup time that's convenient for you</p>
            </div>
            <div className="text-center">
              <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pickup</h3>
              <p className="text-gray-600">We'll come to your location to collect your waste</p>
            </div>
            <div className="text-center">
              <Recycle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Recycle</h3>
              <p className="text-gray-600">Your waste is recycled responsibly and sustainably</p>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-green-100 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Recycle?</h2>
            <p className="text-xl mb-6">Schedule a pickup or find a drop-off location near you</p>
            <div className="space-x-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Schedule Pickup
              </Button>
              <Link href="/locations">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  Find Drop-off Locations
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}


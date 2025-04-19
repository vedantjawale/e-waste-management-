"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const mapContainerStyle = {
  width: "100%",
  height: "400px",
}

const center = {
  lat: 26.9124, // Jaipur latitude
  lng: 75.7873, // Jaipur longitude
}

export default function RequestPickupPage() {
  const [selectedLocation, setSelectedLocation] = useState(center)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  const handleMapClick = (event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    })
  }

  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading maps"

  return (
    <div className="min-h-screen bg-silver-100">
      <header className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Request a Pickup</h1>
          <p className="text-xl">Schedule your e-waste collection with ease</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-md p-8"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input type="text" id="name" name="name" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input type="email" id="email" name="email" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <Input type="tel" id="phone" name="phone" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <Textarea id="address" name="address" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="items" className="block text-sm font-medium text-gray-700">
                E-Waste Items
              </label>
              <Textarea
                id="items"
                name="items"
                required
                className="mt-1"
                placeholder="Please list the e-waste items you want to recycle"
              />
            </div>
            <div>
              <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700">
                Preferred Pickup Date
              </label>
              <Input type="date" id="pickup-date" name="pickup-date" required className="mt-1" />
            </div>
            <div>
              <label htmlFor="pickup-time" className="block text-sm font-medium text-gray-700">
                Preferred Pickup Time
              </label>
              <Select id="pickup-time" name="pickup-time" required className="mt-1">
                <SelectTrigger>
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12 PM - 3 PM)</SelectItem>
                  <SelectItem value="evening">Evening (3 PM - 6 PM)</SelectItem>
                  <SelectItem value="night">Night (6 PM - 9 PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
              <GoogleMap mapContainerStyle={mapContainerStyle} zoom={13} center={center} onClick={handleMapClick}>
                <Marker position={selectedLocation} />
              </GoogleMap>
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
              Schedule Pickup
            </Button>
          </form>
        </motion.div>
      </main>
    </div>
  )
}


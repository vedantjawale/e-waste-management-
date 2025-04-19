"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLoadScript, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

const mapContainerStyle = {
  width: "100%",
  height: "600px",
}

const center = {
  lat: 26.9124, // Jaipur latitude
  lng: 75.7873, // Jaipur longitude
}

const locations = [
  {
    id: 1,
    name: "ETCO E-WASTE RECYCLER PVT LTD",
    address: "D-117, Ambabari Cir, Ambabari, Vidyadhar Nagar, Jaipur, Rajasthan 302039",
    lat: 26.9539,
    lng: 75.7849,
    rating: 4.6,
  },
  {
    id: 2,
    name: "ZeroWaste Recycling Private Limited",
    address: "147, Ajmer Rd, Heera Nagar, Tagore Nagar, Jaipur, Rajasthan 302021",
    lat: 26.9121,
    lng: 75.7682,
    rating: 3.7,
  },
  {
    id: 3,
    name: "GPS INTERNATIONAL",
    address: "6, 349, Nangal Rd, Tirupati Vihar, Jhotwara, Jaipur, Rajasthan 302012",
    lat: 26.9234,
    lng: 75.7379,
    rating: 5.0,
  },
  {
    id: 4,
    name: "Hulladek PWL",
    address: "F-142, Sirsi Rd, RIICO Industrial Area, Bindayaka, Jaipur, Rajasthan 302012",
    lat: 26.8854,
    lng: 75.7731,
    rating: 5.0,
  },
  {
    id: 5,
    name: "RaddiDedo | Waste Management Services",
    address: "4/18, Surya Path, opp. to Urmilla Udhyaan, Sector 4, Jawahar Nagar, Jaipur, Rajasthan 302004",
    lat: 26.8921,
    lng: 75.8112,
    rating: 3.8,
  },
]

export default function LocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    // Add fallback behavior if API key is not available
  })

  if (loadError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error loading maps</h2>
          <p className="text-muted-foreground">Please check your internet connection and try again</p>
        </div>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Drop-off Locations</h1>
          <p className="text-xl">Find the nearest e-waste recycling center in Jaipur</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-card rounded-lg shadow-md p-8"
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={center}
            options={{
              styles: [
                { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
                { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
              ],
            }}
          >
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={{ lat: location.lat, lng: location.lng }}
                onClick={() => setSelectedLocation(location)}
              />
            ))}

            {selectedLocation && (
              <InfoWindow
                position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
                onCloseClick={() => setSelectedLocation(null)}
              >
                <div className="p-2">
                  <h3 className="font-bold text-lg">{selectedLocation.name}</h3>
                  <p className="text-sm mb-2">{selectedLocation.address}</p>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1">{selectedLocation.rating}</span>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => {
                      window.open(
                        `https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.lat},${selectedLocation.lng}`,
                        "_blank",
                      )
                    }}
                  >
                    Get Directions
                  </Button>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-bold mb-4">All Locations</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <div key={location.id} className="bg-card rounded-lg shadow-md p-4">
                <h3 className="font-bold text-lg">{location.name}</h3>
                <p className="text-muted-foreground text-sm mb-2">{location.address}</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1">{location.rating}</span>
                </div>
                <Button
                  className="w-full"
                  onClick={() => {
                    window.open(
                      `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`,
                      "_blank",
                    )
                  }}
                >
                  Get Directions
                </Button>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}


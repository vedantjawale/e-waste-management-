"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Recycle, Users, Truck } from "lucide-react"

const ImpactMetrics = () => {
  const [wasteRecycled, setWasteRecycled] = useState(0)
  const [usersServed, setUsersServed] = useState(0)
  const [activeRequests, setActiveRequests] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWasteRecycled((prev) => Math.min(prev + 10, 12456))
      setUsersServed((prev) => Math.min(prev + 1, 980))
      setActiveRequests((prev) => Math.min(prev + 1, 150))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Recycle className="h-12 w-12 text-green-500 mb-2" />
        <h3 className="text-2xl font-bold">{wasteRecycled.toLocaleString()} kg</h3>
        <p className="text-gray-600">E-Waste Recycled</p>
      </motion.div>
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Users className="h-12 w-12 text-green-500 mb-2" />
        <h3 className="text-2xl font-bold">{usersServed.toLocaleString()}+</h3>
        <p className="text-gray-600">Users Served</p>
      </motion.div>
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Truck className="h-12 w-12 text-green-500 mb-2" />
        <h3 className="text-2xl font-bold">{activeRequests.toLocaleString()}+</h3>
        <p className="text-gray-600">Active Pickup Requests</p>
      </motion.div>
    </div>
  )
}

export default ImpactMetrics


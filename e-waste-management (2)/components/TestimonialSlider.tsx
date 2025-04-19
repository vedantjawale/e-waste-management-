"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "IT Professional",
    text: "EcoRecycle made it incredibly easy to dispose of my old office equipment. Their pickup service was prompt and professional!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Environmental Activist",
    text: "I appreciate how EcoRecycle educates the community about responsible e-waste disposal. They're making a real difference in Jaipur!",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Business Owner",
    text: "The staff at the drop-off center were very helpful and knowledgeable. Great experience overall!",
    rating: 5,
  },
  {
    id: 4,
    name: "Meera Agarwal",
    role: "Homemaker",
    text: "Finally found a reliable way to recycle old electronics. Their home pickup service is a game-changer!",
    rating: 4,
  },
  {
    id: 5,
    name: "Suresh Verma",
    role: "School Principal",
    text: "We partnered with EcoRecycle for our school's e-waste awareness campaign. Their team did an excellent job!",
    rating: 5,
  },
]

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-semibold block">{testimonial.name}</span>
                    <span className="text-sm text-gray-500">{testimonial.role}</span>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  )
}

export default TestimonialSlider


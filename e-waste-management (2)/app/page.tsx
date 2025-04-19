import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import TestimonialSlider from "@/components/TestimonialSlider"
import ImpactMetrics from "@/components/ImpactMetrics"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              EcoRecycle
            </Link>
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
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video autoPlay loop muted className="absolute w-full h-full object-cover">
            <source src="/videos/recycling-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
              Revolutionizing Waste Recycling for a Greener Future
            </h1>
            <div className="space-x-4">
              <Link href="/request-pickup">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                  Schedule a Pickup
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/learn-more">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-green-800"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
            <ImpactMetrics />
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
            <TestimonialSlider />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Learn More About Waste Recycling</h2>
            <p className="text-lg mb-8 text-gray-600 max-w-2xl mx-auto">
              Discover how proper waste management can help protect our environment and create a sustainable future for
              generations to come.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Environmental Impact</h3>
                <p className="text-gray-600 mb-4">
                  Learn how waste affects our environment and why proper recycling is crucial.
                </p>
                <Link href="/environmental-impact">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Recycling Process</h3>
                <p className="text-gray-600 mb-4">
                  Understand how we process and recycle various types of waste responsibly.
                </p>
                <Link href="/recycling-process">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Get Involved</h3>
                <p className="text-gray-600 mb-4">Find out how you can contribute to responsible waste management.</p>
                <Link href="/get-involved">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">EcoRecycle</h3>
              <p>Revolutionizing waste management for a sustainable future.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>
              <ul>
                <li>
                  <Link href="/about" className="hover:text-green-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-green-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/request-pickup" className="hover:text-green-300">
                    Request Pickup
                  </Link>
                </li>
                <li>
                  <Link href="/locations" className="hover:text-green-300">
                    Drop-off Locations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p>Email: info@ecorecycle.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: Jaipur, Rajasthan, India</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


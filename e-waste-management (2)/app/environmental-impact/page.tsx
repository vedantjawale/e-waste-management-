import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EnvironmentalImpactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Environmental Impact of Waste</h1>
          <p className="text-xl">Understanding the crucial need for proper waste management</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How Waste Affects Our Environment</h2>
          <p className="text-gray-600 mb-4">Improper disposal of waste has severe consequences for our environment:</p>
          <ul className="list-disc list-inside text-gray-600 mb-8">
            <li>Pollution of soil, water, and air from various types of waste</li>
            <li>Greenhouse gas emissions from decomposing organic waste in landfills</li>
            <li>Depletion of natural resources due to unsustainable consumption patterns</li>
            <li>Harm to wildlife and ecosystems from litter and toxic waste</li>
            <li>Contribution to climate change through increased carbon footprint</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">The Importance of Proper Waste Management</h2>
          <p className="text-gray-600 mb-4">Effective waste management can have significant positive impacts:</p>
          <ul className="list-disc list-inside text-gray-600 mb-8">
            <li>Conservation of natural resources through recycling and reuse</li>
            <li>Reduction in greenhouse gas emissions from landfills</li>
            <li>Protection of ecosystems and wildlife habitats</li>
            <li>Improvement in public health by reducing pollution</li>
            <li>Creation of green jobs in the waste management and recycling sectors</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Our Commitment to Environmental Protection</h2>
          <p className="text-gray-600 mb-4">
            At EcoRecycle, we are dedicated to minimizing the environmental impact of waste:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-8">
            <li>We use eco-friendly recycling processes that minimize pollution</li>
            <li>Our facilities are designed to prevent contamination of soil and water</li>
            <li>We maximize material recovery to reduce the need for new resource extraction</li>
            <li>We educate the community about the importance of responsible waste disposal</li>
            <li>We continuously invest in new technologies to improve our recycling efficiency</li>
          </ul>
          <Link href="/request-pickup">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Schedule a Pickup</Button>
          </Link>
        </section>
      </main>
    </div>
  )
}


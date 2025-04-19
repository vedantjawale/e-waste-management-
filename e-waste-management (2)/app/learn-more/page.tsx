import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Learn More About Waste Recycling</h1>
          <p className="text-xl">Discover the importance of responsible waste management</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Why Waste Recycling Matters</h2>
          <p className="text-gray-600 mb-4">Proper recycling of waste is crucial for several reasons:</p>
          <ul className="list-disc list-inside text-gray-600 mb-8">
            <li>Conserves natural resources by recovering valuable materials</li>
            <li>Reduces landfill space and prevents pollution</li>
            <li>Saves energy in manufacturing new products</li>
            <li>Creates jobs in the recycling and waste management industries</li>
            <li>Helps combat climate change by reducing greenhouse gas emissions</li>
          </ul>
          <Link href="/environmental-impact">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Learn About Environmental Impact</Button>
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Approach to Waste Recycling</h2>
          <p className="text-gray-600 mb-4">
            At EcoRecycle, we use state-of-the-art technology and processes to ensure that waste is recycled responsibly
            and efficiently. Our approach includes:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-8">
            <li>Comprehensive sorting of different types of waste</li>
            <li>Advanced recycling techniques for various materials</li>
            <li>Composting of organic waste</li>
            <li>Proper disposal of non-recyclable materials</li>
            <li>Continuous research into new recycling methods</li>
          </ul>
          <Link href="/recycling-process">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Explore Our Recycling Process</Button>
          </Link>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">How You Can Help</h2>
          <p className="text-gray-600 mb-4">
            Everyone has a role to play in responsible waste management. Here's how you can contribute:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-8">
            <li>Separate your waste into recyclables, compostables, and non-recyclables</li>
            <li>Reduce your overall waste production</li>
            <li>Reuse items when possible instead of disposing of them</li>
            <li>Participate in local recycling programs</li>
            <li>Educate others about the importance of proper waste management</li>
          </ul>
          <Link href="/get-involved">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Get Involved</Button>
          </Link>
        </section>
      </main>
    </div>
  )
}


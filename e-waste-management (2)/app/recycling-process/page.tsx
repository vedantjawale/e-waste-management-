import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RecyclingProcessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Recycling Process</h1>
          <p className="text-xl">How we responsibly manage and recycle waste</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Step-by-Step Recycling Process</h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-4">
            <li>
              <strong>Collection:</strong> We collect waste through our pickup service or drop-off locations.
            </li>
            <li>
              <strong>Sorting:</strong> Waste is sorted into different categories (e.g., paper, plastic, glass,
              organic).
            </li>
            <li>
              <strong>Cleaning:</strong> Recyclable materials are cleaned to remove contaminants.
            </li>
            <li>
              <strong>Processing:</strong> Materials are processed according to their type (e.g., shredding paper,
              melting plastics).
            </li>
            <li>
              <strong>Manufacturing:</strong> Processed materials are used to create new products.
            </li>
            <li>
              <strong>Composting:</strong> Organic waste is turned into nutrient-rich compost.
            </li>
            <li>
              <strong>Energy Recovery:</strong> Non-recyclable waste is used to generate energy where possible.
            </li>
            <li>
              <strong>Responsible Disposal:</strong> Any remaining waste is disposed of in an environmentally
              responsible manner.
            </li>
          </ol>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Technology and Equipment</h2>
          <p className="text-gray-600 mb-4">
            We use state-of-the-art technology to ensure efficient and environmentally friendly recycling:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-8">
            <li>Advanced sorting machines using AI and machine learning</li>
            <li>High-efficiency recycling equipment for various materials</li>
            <li>Anaerobic digesters for biogas production from organic waste</li>
            <li>Emissions control systems to minimize air pollution</li>
            <li>Water treatment facilities to prevent water contamination</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">Our Commitment to Sustainability</h2>
          <p className="text-gray-600 mb-4">
            At EcoRecycle, we're constantly improving our processes to minimize environmental impact:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-8">
            <li>We use renewable energy sources in our recycling facilities</li>
            <li>Our water recycling systems minimize water consumption</li>
            <li>We have a zero-landfill policy for recyclable materials</li>
            <li>We partner with eco-friendly logistics providers for transportation</li>
            <li>We regularly audit our processes to identify areas for improvement</li>
          </ul>
          <Link href="/request-pickup">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Schedule a Pickup</Button>
          </Link>
        </section>
      </main>
    </div>
  )
}


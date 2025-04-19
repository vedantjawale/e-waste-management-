import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl">Join us in our mission for responsible waste management</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How You Can Contribute</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Recycle Your Waste</h3>
              <p className="text-gray-600 mb-4">
                The simplest way to contribute is by properly sorting and recycling your waste. Schedule a pickup or
                visit our drop-off locations to dispose of your waste responsibly.
              </p>
              <Link href="/request-pickup">
                <Button className="bg-green-600 hover:bg-green-700 text-white">Schedule a Pickup</Button>
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Spread Awareness</h3>
              <p className="text-gray-600 mb-4">
                Help us educate others about the importance of proper waste management. Share our resources on social
                media and talk to your friends and family about responsible waste disposal.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Share on Social Media</Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Join our volunteer program and help with community outreach, waste collection drives, and educational
                events. Your time and effort can make a significant impact.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Join Our Volunteer Program</Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Partner with Us</h3>
              <p className="text-gray-600 mb-4">
                If you're a business or organization, partner with us to implement waste management programs in your
                workplace or community. Together, we can make a bigger difference.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Become a Partner</Button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8">The Impact of Your Involvement</h2>
          <p className="text-gray-600 mb-4">By getting involved with EcoRecycle, you're contributing to:</p>
          <ul className="list-disc list-inside text-gray-600 mb-8">
            <li>Reducing the amount of waste in landfills</li>
            <li>Conserving natural resources through recycling and proper waste management</li>
            <li>Protecting the environment from pollution</li>
            <li>Supporting the local economy through green jobs</li>
            <li>Creating a more sustainable future for our community</li>
          </ul>
          <p className="text-gray-600 mb-8">
            Every action, no matter how small, contributes to our collective goal of responsible waste management. Join
            us today and be part of the solution!
          </p>
          <Link href="/request-pickup">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Get Started Now</Button>
          </Link>
        </section>
      </main>
    </div>
  )
}


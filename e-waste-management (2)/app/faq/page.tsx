import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl">Find answers to common questions about waste recycling</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What types of waste do you recycle?</AccordionTrigger>
            <AccordionContent>
              We recycle a wide range of materials including paper, cardboard, plastics, glass, metals, and organic
              waste. We also handle electronic waste, batteries, and other specialized materials. Always check our
              guidelines for the most up-to-date information on what we can recycle.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Why is it important to recycle?</AccordionTrigger>
            <AccordionContent>
              Recycling is crucial because it helps conserve natural resources, reduces pollution, saves energy, cuts
              down on landfill waste, and helps combat climate change. By recycling, we can significantly reduce our
              environmental impact and create a more sustainable future.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do I schedule a pickup for my waste?</AccordionTrigger>
            <AccordionContent>
              You can easily schedule a pickup through our website by clicking on the "Request Pickup" button. Fill out
              the form with your details and preferred pickup time, and we'll arrange for our team to collect your waste
              at your convenience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is there a fee for waste recycling?</AccordionTrigger>
            <AccordionContent>
              Most of our recycling services are free of charge. However, there may be a small fee for certain items or
              large quantities of waste. Please check our pricing page or contact us for specific details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How should I prepare my waste for recycling?</AccordionTrigger>
            <AccordionContent>
              To prepare your waste for recycling, please clean and dry all items, separate different types of
              materials, and follow our guidelines for specific items. For example, flatten cardboard boxes, rinse out
              food containers, and remove caps from bottles. This helps ensure the recycling process is efficient and
              effective.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>What happens to the waste after it's collected?</AccordionTrigger>
            <AccordionContent>
              Collected waste goes through our comprehensive recycling process. This includes sorting, cleaning,
              processing, and transforming materials into new products. Organic waste is composted, while non-recyclable
              items are disposed of responsibly. Our goal is to maximize recycling and minimize landfill waste.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Can businesses use your recycling services?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer waste recycling services for businesses of all sizes. We can provide regular collection
              services, one-time bulk pickups, and even help implement ongoing waste management programs for your
              organization. Contact us for more information on our business services.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>How can I get involved beyond recycling my own waste?</AccordionTrigger>
            <AccordionContent>
              There are several ways to get involved! You can volunteer for our community outreach programs, help
              organize waste collection drives, or partner with us if you're a business owner. Check our "Get Involved"
              page for more information on how you can contribute to our mission of creating a cleaner, greener future.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  )
}


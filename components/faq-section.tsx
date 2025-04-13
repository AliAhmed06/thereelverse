import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "How does the AI voiceover technology work?",
      answer:
        "Our AI voiceover technology uses advanced machine learning algorithms to generate natural-sounding voices. We analyze your content, select the most engaging parts, and create a script that's optimized for short-form video. Then, our AI voices bring your content to life with natural intonation and emphasis.",
    },
    {
      question: "How long does it take to receive my completed reel?",
      answer:
        "Most reels are delivered within 24-48 hours after you approve the voice and style selection. For larger projects or custom requests, the timeline may vary. We always provide an estimated delivery time when you place your order.",
    },
    {
      question: "Can I request revisions to my reel?",
      answer:
        "Yes! We offer revision options with all our packages. If you'd like changes to your reel, simply let us know what adjustments you need, and we'll make the necessary modifications to ensure you're completely satisfied with the final product.",
    },
    {
      question: "What formats will my reels be delivered in?",
      answer:
        "Your reels will be delivered in MP4 format, optimized for social media platforms. We provide versions optimized for Instagram, TikTok, and YouTube Shorts. If you need a specific format or resolution, just let us know in your order.",
    },
    {
      question: "Do you offer custom voice options?",
      answer:
        "Yes, we offer a wide range of voice options to match your brand personality. You can choose from our library of AI voices with different tones, accents, and styles. For enterprise clients, we also offer custom voice creation services.",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Find answers to common questions about our services and process.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium py-6">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

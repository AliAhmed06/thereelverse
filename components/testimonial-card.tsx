import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  quote: string
  rating: number
}

export function TestimonialCard({ name, role, image, quote, rating }: TestimonialCardProps) {
  return (
    <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-background/50 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
              <Image src={image || "/placeholder.svg"} alt={name} width={64} height={64} className="object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>

          <div className="flex mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < rating ? "text-accent fill-accent" : "text-muted"}`} />
            ))}
          </div>

          <blockquote className="flex-grow">
            <p className="italic text-muted-foreground">"{quote}"</p>
          </blockquote>
        </div>
      </CardContent>
    </Card>
  )
}

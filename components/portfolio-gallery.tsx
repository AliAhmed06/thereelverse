"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Film, Play } from "lucide-react"
import Image from "next/image"

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All" },
    { id: "coaching", label: "Coaching" },
    { id: "consulting", label: "Consulting" },
    { id: "personal", label: "Personal Brand" },
  ]

  const portfolioItems = [
    { id: 1, category: "coaching", title: "Business Growth Strategies", client: "Sarah J., Business Coach" },
    { id: 2, category: "consulting", title: "Financial Freedom Plan", client: "Mark T., Financial Consultant" },
    { id: 3, category: "personal", title: "Mindfulness Practices", client: "Leila M., Wellness Influencer" },
    { id: 4, category: "coaching", title: "Leadership Development", client: "James R., Executive Coach" },
    { id: 5, category: "personal", title: "Fitness Transformation", client: "Alex P., Fitness Brand" },
    { id: 6, category: "consulting", title: "Marketing Strategy", client: "Emma S., Marketing Consultant" },
  ]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            className="rounded-full"
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Image
                src={`/placeholder.svg?height=640&width=360&text=Reel+${item.id}`}
                alt={`Portfolio reel ${item.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                <p className="text-white/80 text-sm mb-4">{item.client}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-fit bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Watch Reel
                </Button>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-14 w-14 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-0 transition-opacity border-2 hover:scale-110"
                >
                  <Film className="h-6 w-6 text-primary" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

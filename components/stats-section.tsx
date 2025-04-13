import { Card, CardContent } from "@/components/ui/card"
import { Users, Video, Clock, Award } from "lucide-react"

export function StatsSection() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-none shadow-md bg-background/50 backdrop-blur-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-background/50 backdrop-blur-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">2,500+</div>
                <div className="text-sm text-muted-foreground">Reels Created</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-background/50 backdrop-blur-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">24-48h</div>
                <div className="text-sm text-muted-foreground">Turnaround Time</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-background/50 backdrop-blur-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-sm text-muted-foreground">Client Rating</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

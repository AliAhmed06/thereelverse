import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mic,
  Film,
  FileText,
  Target,
  Clock,
  Headphones,
  Smartphone,
  Users,
  Instagram,
  ArrowRight,
  Play,
  CheckCircle,
  ChevronRight,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StatsSection } from "@/components/stats-section"
import { TestimonialCard } from "@/components/testimonial-card"
import { FaqSection } from "@/components/faq-section"
import { PortfolioGallery } from "@/components/portfolio-gallery"
import { NewsletterSection } from "@/components/newsletter-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10 dark:from-primary/20 dark:via-accent/10 dark:to-background" />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5" />
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    AI-Powered Content Creation
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                    Turn Your Content Into <span className="text-primary">Scroll-Stopping</span> AI Voiceover Reels
                  </h1>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Perfect for coaches, creators, and content pros who want to grow their brand using short-form videos
                  powered by AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-base px-8 rounded-full">
                    <span>Get Started</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="text-base px-8 rounded-full">
                    <Play className="mr-2 h-4 w-4" />
                    <span>Watch Demo</span>
                  </Button>
                </div>
                <div className="flex items-center gap-8 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-background overflow-hidden">
                        <Image
                          src={`/placeholder.svg?height=100&width=100&text=${i}`}
                          alt={`Client ${i}`}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Trusted by 500+ clients</div>
                    <div className="text-muted-foreground">⭐⭐⭐⭐⭐ 4.9/5 rating</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-accent rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative aspect-[9/16] max-w-[320px] mx-auto rounded-2xl overflow-hidden border shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=720&width=405&text=Demo+Reel"
                    alt="Demo reel"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-16 w-16 rounded-full bg-background/80 backdrop-blur-sm border-2 hover:scale-110 transition-transform"
                    >
                      <Play className="h-8 w-8 text-primary" />
                    </Button>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 bg-background rounded-lg p-3 shadow-lg border">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Mic className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-medium">AI Voice</div>
                      <div className="text-xs text-muted-foreground">Natural & Engaging</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -left-4 -top-4 bg-background rounded-lg p-3 shadow-lg border">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Film className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-medium">Reel Creation</div>
                      <div className="text-xs text-muted-foreground">Professional Quality</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-12 border-y bg-muted/30">
          <div className="container">
            <div className="text-center mb-8">
              <p className="text-muted-foreground">Trusted by leading brands and creators</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-8 opacity-70 hover:opacity-100 transition-opacity">
                  <Image
                    src={`/placeholder.svg?height=32&width=120&text=Brand+${i}`}
                    alt={`Brand ${i}`}
                    width={120}
                    height={32}
                    className="h-full w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* What We Do */}
        <section id="what-we-do" className="py-24">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Services
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
              <p className="text-muted-foreground">
                We transform your written content into engaging AI-powered voiceover reels that capture attention and
                drive engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm hover:translate-y-[-5px]">
                <CardContent className="p-8">
                  <div className="rounded-2xl bg-primary/10 w-14 h-14 flex items-center justify-center mb-6">
                    <Mic className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI Voiceovers</h3>
                  <p className="text-muted-foreground mb-6">
                    Lifelike AI voices that sound natural and engaging for your audience.
                  </p>
                  <Link href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm hover:translate-y-[-5px]">
                <CardContent className="p-8">
                  <div className="rounded-2xl bg-primary/10 w-14 h-14 flex items-center justify-center mb-6">
                    <Film className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Reel Creation</h3>
                  <p className="text-muted-foreground mb-6">
                    Professional short-form videos optimized for social media platforms.
                  </p>
                  <Link href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm hover:translate-y-[-5px]">
                <CardContent className="p-8">
                  <div className="rounded-2xl bg-primary/10 w-14 h-14 flex items-center justify-center mb-6">
                    <FileText className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Text-to-Video</h3>
                  <p className="text-muted-foreground mb-6">
                    Convert your blogs, articles, and posts into engaging video content.
                  </p>
                  <Link href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm hover:translate-y-[-5px]">
                <CardContent className="p-8">
                  <div className="rounded-2xl bg-primary/10 w-14 h-14 flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Niche Targeting</h3>
                  <p className="text-muted-foreground mb-6">
                    Tailored content for coaches, consultants, and personal brands.
                  </p>
                  <Link href="#" className="text-primary font-medium inline-flex items-center hover:underline">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Simple Process
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground">
                Our streamlined process makes it easy to transform your content into engaging reels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="absolute top-0 left-1/2 h-full w-px bg-border md:block hidden -translate-x-1/2 z-0" />
                <div className="relative z-10 bg-background p-8 rounded-2xl border shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:translate-y-[-5px]">
                  <div className="rounded-full bg-primary text-primary-foreground w-14 h-14 flex items-center justify-center mb-6 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Send Your Content</h3>
                  <p className="text-muted-foreground">
                    Share your blog post, article, or social media content with us through our simple upload system.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Blog posts</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>LinkedIn articles</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Social media posts</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute top-0 left-1/2 h-full w-px bg-border md:block hidden -translate-x-1/2 z-0" />
                <div className="relative z-10 bg-background p-8 rounded-2xl border shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:translate-y-[-5px]">
                  <div className="rounded-full bg-primary text-primary-foreground w-14 h-14 flex items-center justify-center mb-6 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Choose Voice & Style</h3>
                  <p className="text-muted-foreground">
                    Select from our library of AI voices and visual styles that match your brand identity.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Multiple voice options</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Visual style templates</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Custom branding</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <div className="relative z-10 bg-background p-8 rounded-2xl border shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:translate-y-[-5px]">
                  <div className="rounded-full bg-primary text-primary-foreground w-14 h-14 flex items-center justify-center mb-6 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Receive Your Reel</h3>
                  <p className="text-muted-foreground">
                    Get your professional, ready-to-share reel delivered to your inbox within 24-48 hours.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Fast turnaround</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Download in multiple formats</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Revision options available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-choose-us" className="py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Our Advantage
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
                <p className="text-muted-foreground mb-8">
                  We understand the unique needs of coaches, consultants, and personal brands. Our AI-powered solution
                  delivers exceptional results that help you stand out.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="rounded-2xl bg-primary/10 w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
                      <p className="text-muted-foreground">
                        Get your reels quickly so you can maintain a consistent posting schedule.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="rounded-2xl bg-primary/10 w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <Headphones className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Custom Voice Options</h3>
                      <p className="text-muted-foreground">
                        Choose from a variety of voices that match your brand personality.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="rounded-2xl bg-primary/10 w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Mobile-First Reels</h3>
                      <p className="text-muted-foreground">
                        Optimized for every platform to maximize engagement and reach.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="rounded-2xl bg-primary/10 w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Built for Busy Creators</h3>
                      <p className="text-muted-foreground">
                        Save time and focus on what you do best while we handle your content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-2xl blur-2xl opacity-20"></div>
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=450&text=Feature+1"
                      alt="Feature 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8">
                    <Image
                      src="/placeholder.svg?height=600&width=450&text=Feature+2"
                      alt="Feature 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Client Success
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground">
                Hear from coaches and creators who have transformed their content strategy with our reels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Sarah Johnson"
                role="Business Coach"
                image="/placeholder.svg?height=100&width=100"
                quote="The Reelverse Studios transformed my blog content into engaging reels that have doubled my Instagram engagement. The AI voiceovers sound incredibly natural, and the turnaround time is impressive!"
                rating={5}
              />

              <TestimonialCard
                name="Mark Thompson"
                role="Fitness Consultant"
                image="/placeholder.svg?height=100&width=100"
                quote="As someone who hates being on camera, these AI voiceover reels have been a game-changer for my content strategy. My audience loves the professional quality, and I've seen a significant increase in client inquiries."
                rating={5}
              />

              <TestimonialCard
                name="Leila Martinez"
                role="Life Coach"
                image="/placeholder.svg?height=100&width=100"
                quote="The Reelverse Studios has helped me repurpose my long-form content into bite-sized reels that my audience loves. The custom voice options allowed me to find the perfect match for my brand."
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-24">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Work
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolio</h2>
              <p className="text-muted-foreground">
                Check out some of our recent reels created for coaches and consultants.
              </p>
            </div>

            <PortfolioGallery />
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90 -z-10" />
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5" />
          <div className="container relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Let's Create Your First Reel</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
                Ready to transform your content into engaging AI voiceover reels? Get started today and see the
                difference professional reels can make for your brand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-base px-8 rounded-full">
                  <span>Message Me on Fiverr</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8 rounded-full bg-transparent text-white border-white hover:bg-white/10"
                >
                  <span>Schedule a Call</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Contact Form */}
        <section id="contact" className="py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Get In Touch
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions or ready to get started? Reach out to us and we'll get back to you as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Email Us</h3>
                      <p className="text-muted-foreground">hello@thereelversestudios.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 w-12 h-12 flex-shrink-0 flex items-center justify-center">
                      <Instagram className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Follow Us</h3>
                      <p className="text-muted-foreground">@thereelverse</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="text-xl font-semibold mb-4">Our Office</div>
                    <Image
                      src="/placeholder.svg?height=200&width=400&text=Map"
                      alt="Office location"
                      width={400}
                      height={200}
                      alt="Office location"
                      width={400}
                      height={200}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-background rounded-2xl p-8 shadow-xl border">
                  <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="rounded-lg" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="rounded-lg" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Tell us about your project" rows={4} className="rounded-lg" />
                    </div>

                    <Button type="submit" className="w-full rounded-lg">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

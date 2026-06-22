import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import { 
  AnimatedSection, 
  AnimatedCard, 
  ParticleBackground, 
  AnimatedGradientBackground 
} from "@/components/client-animations"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I care about backend systems that stay clean as they grow — boundaries that hold, workflows that are
                  honest about consistency, and code other engineers can read a year later.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I lead a 5-person team at ITLegend and own the architecture of two live e-commerce platforms across
                  Egypt and Jordan, handling everything from domain modeling to deployment.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  My stack is C# / ASP.NET Core, and my approach is Clean Architecture, DDD, and messaging —
                  patterns that keep complexity manageable as products and teams scale.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Backend Architecture — Clean Architecture, DDD, Modular Monolith
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      CQRS with MediatR & event-driven design with RabbitMQ
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Performance engineering — caching, indexing, query optimization
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Team leadership — code review culture, architecture decisions, mentoring
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Cross-platform clients — Blazor, .NET MAUI
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Senior .NET Developer & Team Lead</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">ITLegend · Cairo, Egypt</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Oct 2023 – Present</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Lead a 5-person backend team and own the architecture of two live e-commerce platforms (Egypt & Jordan).</li>
                  <li>Designed the order workflow as a single atomic transaction with RabbitMQ handling all side-effects asynchronously.</li>
                  <li>Cut an e-learning student dashboard from ~20s to under 4s (300+ concurrent users) via endpoint split, precomputed stats, Redis caching, and targeted indexing.</li>
                  <li>Set and enforce team standards: Clean Architecture, DDD, CQRS, code review process, and architectural decision records.</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Freelance / Contract .NET Developer</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Remote</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2018 – 2023</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Delivered full-stack .NET solutions for multiple clients across various domains.</li>
                  <li>Built and maintained APIs, integrated third-party services, and handled database design and optimization.</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>ITLegend E-Commerce Platforms</CardTitle>
                  <CardDescription>Live platforms across Egypt & Jordan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-blue-600/30" />
                    <span className="relative z-10 text-4xl font-bold text-white opacity-60">🛒</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Architected from scratch. The order workflow runs as a single atomic transaction; RabbitMQ handles
                    all downstream side-effects (notifications, inventory, analytics) asynchronously — so the core
                    order never fails silently because an email did.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["ASP.NET Core", "Clean Architecture", "DDD", "RabbitMQ", "SQL Server"].map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full relative overflow-hidden group" disabled>
                    <span className="relative z-10">Private — Production System</span>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>E-Learning Performance Overhaul</CardTitle>
                  <CardDescription>5× dashboard speed-up under load</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-green-600/30" />
                    <span className="relative z-10 text-4xl font-bold text-white opacity-60">⚡</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Student dashboard response was ~20 s under 300 concurrent users. Diagnosis: one fat endpoint doing
                    too much at runtime. Fix: split by read / write, precompute stats on a schedule, add Redis cache
                    and targeted indexes. Result: under 4 s — more than 5× faster.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["ASP.NET Core", "Redis", "SQL Server", "EF Core", "Performance"].map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full relative overflow-hidden group" disabled>
                    <span className="relative z-10">Private — Production System</span>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2">
                <CardHeader>
                  <CardTitle>Souqna</CardTitle>
                  <CardDescription>Personal project · Modular Monolith marketplace</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 flex items-center justify-center max-h-48">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-pink-600/30" />
                    <span className="relative z-10 text-4xl font-bold text-white opacity-60">🏪</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    A reference architecture for a marketplace built with Modular Monolith, Domain-Driven Design,
                    CQRS via MediatR, and RabbitMQ for cross-module events. Written to be the kind of codebase you
                    can hand to a new engineer and they understand it within a day.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Modular Monolith", "DDD", "CQRS", "MediatR", "RabbitMQ", "C#"].map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-purple-100/50 dark:bg-purple-900/50 hover:bg-purple-200 transition-colors duration-300">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full relative overflow-hidden group" asChild>
                    <a href="https://github.com/alaamuhamed2097" target="_blank" rel="noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      <span className="relative z-10">View on GitHub</span>
                      <span className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2">
                      <span className="text-purple-600 dark:text-purple-300 text-sm font-bold">BE</span>
                    </span>
                    Core Backend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {["C#", "ASP.NET Core", "EF Core", "SQL Server", "REST APIs", "SignalR", "Blazor", ".NET MAUI"].map((s) => (
                      <Badge key={s} variant="secondary" className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">{s}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                      <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">ARCH</span>
                    </span>
                    Architecture & Patterns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {["Clean Architecture", "DDD", "Modular Monolith", "CQRS", "MediatR", "Repository Pattern", "Unit of Work", "Domain Events"].map((s) => (
                      <Badge key={s} variant="secondary" className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors">{s}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection direction="up" delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                      <span className="text-green-600 dark:text-green-300 text-sm font-bold">MSG</span>
                    </span>
                    Messaging & Caching
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {["RabbitMQ", "Redis", "Event-Driven Design", "Async Workflows", "Background Jobs", "Message Queues"].map((s) => (
                      <Badge key={s} variant="secondary" className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">{s}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-2">
                      <span className="text-orange-600 dark:text-orange-300 text-sm font-bold">OPS</span>
                    </span>
                    Infrastructure & Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {["Docker", "Git / GitHub", "Azure (learning)", "Postman", "Performance Profiling", "SQL Indexing"].map((s) => (
                      <Badge key={s} variant="secondary" className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors">{s}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.6}>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">Currently Deepening</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: "Azure", color: "blue" },
                  { label: "Microservices", color: "purple" },
                  { label: "Event Sourcing", color: "green" },
                  { label: "Kubernetes", color: "indigo" },
                ].map(({ label, color }) => (
                  <Badge key={label} variant="outline" className={`px-4 py-2 text-sm bg-${color}-50 dark:bg-${color}-900/20 border-${color}-200 dark:border-${color}-800 hover:bg-${color}-100 dark:hover:bg-${color}-900/40 transition-colors`}>
                    {label}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>
          </AnimatedSection>

          <div className="mb-12">
            <AnimatedSection direction="left" delay={0.2}>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">B.Sc. in Communications & Electronics Engineering</h4>
                    <p className="text-purple-600 dark:text-purple-400">
                      Mansoura University · Mansoura, Egypt
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2016 – 2020</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection direction="right" delay={0.3}>
              <h3 className="text-2xl font-bold mb-6">Certifications & Awards</h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md text-gray-600 dark:text-gray-400 italic">
                No certifications listed yet — add yours when ready.
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="mailto:contact@alaa-mohamed.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      contact@alaa-mohamed.com
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://linkedin.com/in/alaa-mohamed-879966321"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Github className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://github.com/alaamuhamed2097"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out!
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Alaa Mohamed</h2>
              <p className="text-gray-400">Senior .NET Developer · Team Lead</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/alaa-mohamed-879966321"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/alaamuhamed2097"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:contact@alaa-mohamed.com"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Alaa Mohamed. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

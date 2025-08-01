"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, CheckCircle, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

export default function GanderYC24Page() {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="container max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button asChild variant="ghost" className="mb-8">
              <Link href="/#experience">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Experience
              </Link>
            </Button>

            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <Avatar className="h-20 w-20 border-4 border-background bg-white">
                  <AvatarImage 
                    src="/assets/images/gander-logo.svg" 
                    alt="Gander YC24"
                    className="object-contain p-2"
                  />
                </Avatar>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold">Full Stack Developer</h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                <Link href="https://usegander.com/" target="_blank" className="hover:text-primary transition-colors underline decoration-2 underline-offset-4">
                  Gander YC24
                </Link>
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>June - August 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Remote (NYC-based)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>AI Development Team</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {["AI Solutions", "Private Aviation", "React", "Next.js", "TypeScript", "Supabase", "Vercel", "Real-time Systems"].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Content */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Role Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Worked as a Full Stack Developer at Gander YC24, a Y Combinator startup specializing in AI solutions for private aviation. Built cutting-edge applications that revolutionize flight operations, scheduling, and data analytics for the aviation industry.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Developed sophisticated web applications using React and Next.js, integrated real-time data systems with Supabase, and deployed scalable solutions on Vercel. Gained deep expertise in aviation technology and AI-powered business solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Contributions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card>
              <CardHeader>
                <CardTitle>Key Contributions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Built AI-powered web applications for private aviation operations using React and Next.js",
                    "Developed real-time flight data processing systems and user interfaces for aviation analytics",
                    "Integrated Supabase backend solutions for flight scheduling and aircraft management systems",
                    "Implemented responsive dashboards for aviation professionals and flight operators",
                    "Collaborated on AI-driven features for flight optimization and predictive analytics",
                    "Deployed scalable aviation technology solutions using Vercel and modern DevOps practices"
                  ].map((contribution, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm leading-relaxed">{contribution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills & Technologies */}
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Technologies Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Frontend</h4>
                      <div className="flex flex-wrap gap-1">
                        {["React", "Next.js", "TypeScript", "HTML/CSS", "Responsive Design"].map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Backend & Infrastructure</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Node.js", "Supabase", "Vercel", "API Development", "Database Design", "Server Management"].map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Development</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Agile Methodology", "Version Control", "Code Review", "Testing"].map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Experience Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Duration</h4>
                      <p className="text-sm">3 months (Summer 2024)</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Company Type</h4>
                      <p className="text-sm">Y Combinator AI Startup (Private Aviation)</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Work Environment</h4>
                      <p className="text-sm">Remote (NYC-based), Fast-paced AI Development</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Focus Areas</h4>
                      <p className="text-sm">AI solutions, Aviation technology, Real-time systems</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
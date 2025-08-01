"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Play, CheckCircle } from "lucide-react"
import Link from "next/link"


const projectDetails = {
  title: "RTLS Rocketry - GNC Lead",
  description: "Led the development of a Return-To-Launch-Site trajectory control system with real-time course correction capabilities using advanced control algorithms and embedded systems.",
  duration: "8 months",
  role: "GNC (Guidance, Navigation & Control) Lead",
  team: "5 engineers",
  technologies: ["MATLAB", "ESP32", "Kalman Filter", "Monte Carlo", "C++", "Real-time Systems"],
  status: "Completed",
  image: "/assets/images/RTLS rocket.png"
}

const achievements = [
  "Designed and implemented a real-time trajectory control system for return-to-launch-site capability",
  "Developed Kalman filtering algorithms for state estimation and sensor fusion",
  "Conducted Monte Carlo simulations to validate system performance under various conditions", 
  "Integrated ESP32 microcontroller with IMU sensors for real-time guidance",
  "Achieved successful trajectory correction within ±5m accuracy during test flights",
  "Documented complete system architecture and testing protocols"
]

const technicalHighlights = [
  {
    title: "Kalman Filter Implementation",
    description: "Developed advanced state estimation algorithms for real-time position and velocity tracking with sensor fusion capabilities."
  },
  {
    title: "Monte Carlo Analysis", 
    description: "Performed statistical analysis of trajectory variations and system reliability under different environmental conditions."
  },
  {
    title: "Real-time Control System",
    description: "Implemented embedded control system on ESP32 with sub-millisecond response times for trajectory corrections."
  },
  {
    title: "Flight Dynamics Modeling",
    description: "Created comprehensive mathematical models of rocket flight dynamics including drag, thrust, and environmental factors."
  }
]

export default function RTLSRocketryPage() {
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
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <div className="text-center space-y-6">
              <Badge className="text-sm">{projectDetails.status}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">{projectDetails.title}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {projectDetails.description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {projectDetails.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Project Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Led the development of a comprehensive Return-To-Launch-Site trajectory control system with real-time course correction capabilities. This project demonstrates advanced control algorithms and embedded systems integration for autonomous vehicle guidance.
                    </p>
                    <p className="text-muted-foreground">
                      The system integrates Kalman filtering algorithms, Monte Carlo simulations, and real-time embedded control systems to achieve precise trajectory management and landing accuracy.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Key Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-sm leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Duration</h4>
                      <p className="text-sm">{projectDetails.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Role</h4>
                      <p className="text-sm">{projectDetails.role}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Team Size</h4>
                      <p className="text-sm">{projectDetails.team}</p>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <Button asChild className="w-full">
                        <Link href="https://flight-algorithm-visualizer.vercel.app/" target="_blank">
                          <Play className="mr-2 h-4 w-4" />
                          View Visualization Tool
                        </Link>
                      </Button>
                                          <Button asChild className="w-full">
                      <Link href="/assets/docs/rtls-project/rtls-complete-documentation.pdf" target="_blank">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Learn More
                      </Link>
                    </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Stack</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Control Systems</h4>
                      <div className="flex flex-wrap gap-1">
                        {["MATLAB", "Simulink", "Kalman Filter"].map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Embedded Systems</h4>
                      <div className="flex flex-wrap gap-1">
                        {["ESP32", "C++", "Real-time Systems"].map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Analysis</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Monte Carlo", "Statistical Analysis"].map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Technical Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Technical Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{highlight.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
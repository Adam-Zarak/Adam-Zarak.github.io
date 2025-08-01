"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Ship, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AutonomousBoatPage() {
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
              <div className="flex justify-center">
                <div className="p-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full">
                  <Ship className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <Badge className="text-sm">Autonomous Systems</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">Autonomous Boat Development</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Designed and programmed an autonomous navigation system for a self-guided vessel using Arduino and advanced sensor integration.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {["SolidWorks", "Arduino", "Sensors", "Navigation", "GPS", "IMU"].map((tech) => (
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
                      Developed a fully autonomous boat capable of navigating predetermined waypoints while avoiding obstacles in real-time. The project integrates mechanical design, embedded programming, and sensor fusion for reliable maritime navigation.
                    </p>
                    <p className="text-muted-foreground">
                      The system demonstrates advanced autonomous capabilities including path planning, obstacle detection, and adaptive navigation in various water conditions.
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
                    <CardTitle>Technical Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        "Designed 3D hull and propulsion system in SolidWorks",
                        "Implemented GPS-based waypoint navigation system",
                        "Integrated ultrasonic sensors for obstacle detection",
                        "Developed PID control algorithms for precise steering",
                        "Created waterproof electronics housing",
                        "Programmed fail-safe mechanisms for emergency situations"
                      ].map((achievement, index) => (
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
                      <p className="text-sm">4 months</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Team Size</h4>
                      <p className="text-sm">4 engineers</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Role</h4>
                      <p className="text-sm">Lead Developer & Mechanical Designer</p>
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
                    <CardTitle>Components Used</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Hardware</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Arduino Uno", "GPS Module", "IMU Sensor", "Servo Motors"].map((component) => (
                          <Badge key={component} variant="outline" className="text-xs">{component}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Software</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Arduino IDE", "SolidWorks", "C++"].map((software) => (
                          <Badge key={software} variant="outline" className="text-xs">{software}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
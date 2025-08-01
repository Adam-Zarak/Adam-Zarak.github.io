"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Settings, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function RocketErectorPage() {
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
                <div className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
                  <Settings className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <Badge className="text-sm">Structural Engineering</Badge>
              <h1 className="text-4xl md:text-5xl font-bold">Vertical Rocket Erector</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Designed and developed a vertical rocket erector system as part of UCF&apos;s Engineering Mechanics course, applying theoretical principles to practical aerospace applications.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {["AutoCAD", "Structural Analysis", "Engineering Design", "Fabrication", "Steel Construction"].map((tech) => (
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
                      Designed a vertical rocket erector system capable of safely lifting and positioning rockets for launch operations. The project required comprehensive structural analysis, load calculations, and safety factor considerations for aerospace applications.
                    </p>
                    <p className="text-muted-foreground">
                      This academic project combined theoretical engineering principles with practical design constraints, demonstrating proficiency in structural mechanics and CAD design.
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
                    <CardTitle>Engineering Accomplishments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        "Performed comprehensive structural load analysis and calculations",
                        "Designed hydraulic lifting mechanism with precise control systems",
                        "Created detailed CAD drawings and engineering specifications",
                        "Applied safety factors and industry standards for aerospace structures",
                        "Optimized design for material efficiency and cost effectiveness",
                        "Developed assembly sequence and construction documentation"
                      ].map((accomplishment, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <p className="text-sm leading-relaxed">{accomplishment}</p>
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
                    <CardTitle>Project Specifications</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Course</h4>
                      <p className="text-sm">UCF Engineering Mechanics</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Duration</h4>
                      <p className="text-sm">4 months</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Team Size</h4>
                      <p className="text-sm">4 engineers</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Scale</h4>
                      <p className="text-sm">Academic Model</p>
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
                    <CardTitle>Design Considerations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Structural</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Wind Loading", "Seismic Design", "Material Selection"].map((consideration) => (
                          <Badge key={consideration} variant="outline" className="text-xs">{consideration}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Safety</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Factor of Safety", "Emergency Systems", "Redundancy"].map((safety) => (
                          <Badge key={safety} variant="outline" className="text-xs">{safety}</Badge>
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
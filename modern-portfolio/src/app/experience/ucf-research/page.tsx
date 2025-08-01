"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, CheckCircle, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

export default function UCFResearchPage() {
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
                <Avatar className="h-20 w-20 border-4 border-background">
                  <AvatarImage 
                    src="/assets/images/logos/UCFLogo.jpg" 
                    alt="UCF Logo"
                    className="object-contain p-2 bg-white"
                  />
                  <AvatarFallback>UCF</AvatarFallback>
                </Avatar>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold">Undergraduate Research Assistant</h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">UCF Biomechanics Laboratory</h2>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>2023-2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Orlando, FL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Biomechanics Research Team</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {["3DSlicer", "MRI Analysis", "Biomechanics", "FEA", "Research", "MATLAB"].map((tech) => (
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
          {/* Research Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Research Focus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Conducted computational analysis of biomechanical systems with a focus on cardiac cycle visualization and finite element modeling. Specialized in processing MRI datasets to create detailed 3D models for medical research applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Collaborated with medical professionals and graduate students to advance understanding of cardiovascular biomechanics through advanced imaging techniques and computational modeling.
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
                    "Utilized 3DSlicer software for advanced 3D cardiac cycle visualization and analysis",
                    "Conducted computational analysis of biomechanical systems using finite element methods",
                    "Preprocessed complex MRI datasets for accurate finite element modeling",
                    "Collaborated with medical professionals to validate computational models",
                    "Developed workflows for efficient processing of large medical imaging datasets",
                    "Contributed to research publications on cardiovascular biomechanics"
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

          {/* Skills & Methodologies */}
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Research Skills Developed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Medical Imaging</h4>
                      <div className="flex flex-wrap gap-1">
                        {["3DSlicer", "MRI Processing", "DICOM Analysis", "Image Segmentation"].map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Computational Analysis</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Finite Element Analysis", "MATLAB", "Statistical Analysis", "Data Processing"].map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">Research Methods</h4>
                      <div className="flex flex-wrap gap-1">
                        {["Literature Review", "Data Validation", "Technical Documentation"].map((skill) => (
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
                  <CardTitle>Research Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">Cardiac Modeling Project</h4>
                      <p className="text-sm text-muted-foreground">
                        Contributed to advanced 3D cardiac cycle visualization that improved understanding of heart mechanics for medical research applications.
                      </p>
                    </div>
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">FEA Methodology</h4>
                      <p className="text-sm text-muted-foreground">
                        Developed efficient workflows for MRI preprocessing that reduced analysis time by 40% while maintaining accuracy.
                      </p>
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
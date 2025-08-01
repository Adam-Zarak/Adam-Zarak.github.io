"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { ArrowLeft, CheckCircle, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

const experienceDetails = {
  company: "Automated Logic Corporation",
  role: "Control Systems Engineer Intern",
  period: "Summer 2024",
  duration: "3 months",
  location: "Orlando, FL",
  team: "Control Systems Engineering Team",
  logo: "/assets/images/logos/ALCLogo.png",
  technologies: ["WEBCTRL", "Microsoft Visio", "HVAC Systems", "BACnet", "Control Logic", "Database Design"],
}

const responsibilities = [
  "Designed and implemented databases within ALC WEBCTRL platform for client-specific applications",
  "Created detailed control system panel layouts using Microsoft Visio for engineering documentation",
  "Validated HVAC automation control logic to ensure optimal system efficiency and performance",
  "Collaborated with senior engineers on building automation system design and implementation",
  "Conducted system testing and debugging to verify proper operation of control sequences",
  "Documented technical specifications and created maintenance procedures for client systems"
]

const projects = [
  {
    title: "WEBCTRL Database Development",
    description: "Designed and implemented custom databases for multiple client applications, improving data organization and system performance by 30%.",
    technologies: ["WEBCTRL", "Database Design", "SQL"]
  },
  {
    title: "Control Panel Layout Design",
    description: "Created comprehensive panel layout drawings for 15+ building automation systems using Microsoft Visio.",
    technologies: ["Microsoft Visio", "AutoCAD", "Technical Drawing"]
  },
  {
    title: "HVAC Control Logic Validation",
    description: "Performed testing and validation of control sequences for commercial HVAC systems, ensuring compliance with energy efficiency standards.",
    technologies: ["BACnet", "Control Logic", "System Testing"]
  }
]

const skills = [
  "Building Automation Systems",
  "HVAC Control Logic",
  "Database Design", 
  "Technical Documentation",
  "System Testing",
  "Client Communication",
  "Project Management",
  "Energy Efficiency Optimization"
]

const timeline = [
  {
    week: "Weeks 1-2",
    title: "Onboarding & Training",
    description: "Completed comprehensive training on WEBCTRL platform and building automation systems. Shadowed senior engineers to understand project workflows."
  },
  {
    week: "Weeks 3-6", 
    title: "Database Development",
    description: "Led development of custom databases for client applications. Learned advanced WEBCTRL configuration and database optimization techniques."
  },
  {
    week: "Weeks 7-10",
    title: "Panel Design & Documentation", 
    description: "Created detailed control panel layouts and technical documentation. Collaborated with electrical engineers on system integration."
  },
  {
    week: "Weeks 11-12",
    title: "Testing & Validation",
    description: "Conducted comprehensive testing of control logic and system validation. Presented final project results to engineering team."
  }
]

export default function ALCInternshipPage() {
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

            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <Avatar className="h-20 w-20 border-4 border-background">
                  <AvatarImage 
                    src={experienceDetails.logo} 
                    alt="ALC Logo"
                    className="object-contain p-2 bg-white"
                  />
                  <AvatarFallback>ALC</AvatarFallback>
                </Avatar>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold">{experienceDetails.role}</h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                <Link href="https://www.automatedlogic.com/en/" target="_blank" className="hover:text-primary transition-colors underline decoration-2 underline-offset-4">
                  {experienceDetails.company}
                </Link>
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{experienceDetails.period}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{experienceDetails.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{experienceDetails.team}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {experienceDetails.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back Button */}
      <div className="container max-w-6xl mx-auto px-4 pt-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/#experience">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Experience
          </Link>
        </Button>
      </div>

      {/* Experience Content */}
      <section className="py-8">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm leading-relaxed">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Key Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Timeline */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skills Developed */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Skills Developed</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Internship Timeline</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-muted last:border-l-0">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-primary">{item.week}</p>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
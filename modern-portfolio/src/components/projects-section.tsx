"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Rocket, Music, Ship, Settings, Globe } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "RTLS Rocketry - GNC Lead",
    description: "Led the development of a Return-To-Launch-Site trajectory control system with real-time course correction capabilities.",
    icon: Rocket,
    color: "from-red-500 to-orange-500",
    href: "/projects/rtls-rocketry",
    tags: ["MATLAB", "ESP32", "Kalman Filter", "Monte Carlo"],
    featured: true
  },
  {
    title: "Spotify Wrapped Analysis", 
    description: "FastAPI web application analyzing music preferences with GPT integration for dynamic user feedback.",
    icon: Music,
    color: "from-green-500 to-emerald-500",
    href: "/projects/spotify-wrapped",
    tags: ["Python", "FastAPI", "OpenAI", "Data Analysis"],
    featured: true
  },
  {
    title: "Autonomous Boat Development",
    description: "Designed and programmed an autonomous navigation system for a self-guided vessel using Arduino.",
    icon: Ship,
    color: "from-blue-500 to-cyan-500",
    href: "/projects/autonomous-boat",
    tags: ["SolidWorks", "Arduino", "Sensors", "Navigation"],
    featured: false
  },
  {
    title: "Vertical Rocket Erector",
    description: "Designed and developed a vertical rocket erector system as part of UCF&apos;s Engineering Mechanics course, applying theoretical principles to practical aerospace applications.",
    icon: Settings,
    color: "from-purple-500 to-pink-500",
    href: "/projects/rocket-erector",
    tags: ["AutoCAD", "Structural Analysis", "Engineering Design", "Fabrication"],
    featured: false
  }
]

const tools = [
  {
    title: "Flight Algorithm Visualizer",
    description: "Interactive visualization tool for rocket flight algorithms and trajectory analysis. An extension of the RTLS Rocketry project.",
    icon: Globe,
    color: "from-indigo-500 to-purple-500",
    href: "https://flight-algorithm-visualizer.vercel.app/",
    tags: ["React", "Three.js", "WebGL", "Flight Dynamics"],
    external: true
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my work in control systems, autonomous vehicles, and software development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.title}
                          initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-500 border-0 overflow-hidden bg-white rounded-lg">
                <div className={`relative h-64 bg-gradient-to-br ${project.color} flex items-center justify-center rounded-t-lg`}>
                  <project.icon className="h-24 w-24 text-white drop-shadow-lg transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                <div className="p-6 flex flex-col h-[calc(100%-16rem)]">
                  <div className="space-y-2 mb-4">
                    <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button asChild className="w-full group/btn">
                      <Link href={project.href}>
                        <span>Learn More</span>
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {projects.filter(project => !project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <project.icon className="h-16 w-16 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button asChild size="sm" className="w-full">
                    <Link href={project.href}>
                      <span>Learn More</span>
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tools & Visualizations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Tools & Visualizations</h3>
        </motion.div>

        <div className="flex justify-center">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <Card className="w-80 group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className={`relative h-48 bg-gradient-to-br ${tool.color} flex items-center justify-center`}>
                  <tool.icon className="h-16 w-16 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-105" />
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {tool.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {tool.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {tool.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                                      <Button asChild className="w-full group/btn">
                      <Link href={tool.href} target="_blank">
                        <span>Learn More</span>
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
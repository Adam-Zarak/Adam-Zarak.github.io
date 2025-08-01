"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, FileText, Rocket } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <Badge variant="outline" className="text-sm group cursor-pointer relative overflow-hidden">
            <Link href="https://www.systemstech.com/" target="_blank" className="flex items-center space-x-2 hover:text-primary transition-colors relative z-10">
              <svg viewBox="0 0 100 50" className="w-6 h-3">
                <path d="M10 15 L25 10 L40 15 L40 35 L25 40 L10 35 Z" fill="#1E40AF" />
                <path d="M45 10 L60 5 L75 10 L90 15 L90 35 L75 40 L60 45 L45 40 Z" fill="#3B82F6" />
              </svg>
              <span>Now at Systems Technology Inc.</span>
            </Link>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Adam H. Zarak
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
            Mechanical Engineer | Computer Science Minor
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Specializing in Control Systems, GNC, and Autonomous Systems Development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button asChild variant="outline" size="lg" className="group">
            <Link href="/assets/resume/AZResume.pdf" target="_blank">
              <FileText className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              View Resume
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="group"
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Rocket className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            View Projects
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex space-x-4 justify-center items-center"
        >
          <motion.a
            href="https://github.com/Adam-Zarak"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Github className="h-8 w-8" />
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/adamzarak/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-4 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Linkedin className="h-8 w-8" />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
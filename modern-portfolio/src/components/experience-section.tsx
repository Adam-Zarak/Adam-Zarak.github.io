"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle, ExternalLink } from "lucide-react"
import Link from "next/link"

const experiences = [
  {
    company: "Gander YC24",
    role: "Full Stack Developer",
    period: "Summer 2024",
    logo: "/assets/images/gander-logo.svg",
    logoAlt: "Gander YC24",
    href: "/experience/gander-yc24",
    achievements: [
      "Built AI-powered applications for private aviation operations using React and Next.js",
      "Developed real-time data pipelines and user interfaces for flight management systems", 
      "Integrated Supabase backend solutions for aviation data processing and analytics"
    ],
    tags: ["AI Solutions", "React", "Next.js", "Supabase", "Aviation"]
  },
  {
    company: "Automated Logic Corporation",
    role: "Control Systems Engineer Intern",
    period: "Summer 2024",
    logo: "/assets/images/logos/ALCLogo.png",
    logoAlt: "ALC Logo",
    href: "/experience/alc-internship",
    achievements: [
      "Created databases within ALC WEBCTRL for client applications",
      "Designed control system panel layouts using Microsoft Visio", 
      "Validated HVAC automation control logic and system efficiency"
    ],
    tags: ["Control Systems", "WEBCTRL", "HVAC", "Automation"]
  },
  {
    company: "UCF Biomechanics Laboratory",
    role: "Undergraduate Research Assistant", 
    period: "2023-2024",
    logo: "/assets/images/logos/UCFLogo.jpg",
    logoAlt: "UCF Logo",
    href: "/experience/ucf-research",
    achievements: [
      "Utilized 3DSlicer for 3D cardiac cycle visualization",
      "Conducted computational analysis of biomechanical systems",
      "Preprocessed MRI datasets for finite element modeling"
    ],
    tags: ["Research", "3DSlicer", "Biomechanics", "FEA"]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building expertise through hands-on experience in control systems and research.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16 border-2 border-muted">
                        {experience.logo ? (
                          <AvatarImage 
                            src={experience.logo} 
                            alt={experience.logoAlt}
                            className="object-contain p-1 bg-white"
                          />
                        ) : experience.company === "Gander YC24" ? (
                          <div className="w-full h-full flex items-center justify-center bg-white">
                            <svg viewBox="0 0 100 100" className="w-10 h-10">
                              <path d="M20 20 Q50 5 80 20 Q65 50 80 80 Q50 65 20 80 Q35 50 20 20 Z" fill="#4169E1" />
                            </svg>
                          </div>
                        ) : (
                          <AvatarFallback className="text-sm font-semibold">
                            {experience.company.split(" ").map(word => word[0]).join("")}
                          </AvatarFallback>
                        )}
                      </Avatar>
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {experience.role}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium">
                        {experience.company}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {experience.period}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild className="w-full group/btn">
                    <Link href={experience.href}>
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
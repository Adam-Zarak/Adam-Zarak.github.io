"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  GraduationCap, 
  Code, 
  Wrench, 
  Cpu,
  ArrowRight,
  CheckCircle
} from "lucide-react"

const keyPoints = [
  "UCF Mechanical Engineering graduate with a minor in Computer Science, focused on bridging engineering with intelligent systems.",
  "Previously developed control systems during internship at Automated Logic.",
  "Outside of work, I'm usually experimenting in the kitchen, reading something new, or playing tennis with friends."
]

const programmingSkills = [
  "C/C++", "Python", "Java", "MATLAB", "Simulink", "FastAPI", "Git"
]

const mechanicalSkills = [
  "SolidWorks", "ANSYS", "AutoCAD", "FEA", "3DSlicer"
]

const electronicsSkills = [
  "ESP32", "Arduino", "UART/I2C/SPI", "IMU", "Servo Control"
]

const coursework = {
  "Control & Systems": [
    "Vibrations & Control Systems",
    "Engineering Analysis: Dynamics", 
    "Engineering Measurements"
  ],
  "Computer Science": [
    "Data Structures and Algorithms",
    "Object Oriented Programming",
    "Numerical Methods"
  ],
  "Engineering Core": [
    "Linear Circuits",
    "Machine Design", 
    "Statistics in Engineering"
  ]
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating intelligent systems that bridge the gap between mechanical engineering and computer science.
          </p>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                {keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Education and Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5" />
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg">University of Central Florida</h4>
                  <p className="text-muted-foreground">B.S. Mechanical Engineering</p>
                  <p className="text-sm">Minor in Computer Science</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm"><strong>GPA:</strong> 3.6</p>
                    <p className="text-sm"><strong>Graduated:</strong> May 2025</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h4 className="font-semibold mb-4">Relevant Coursework</h4>
                  <div className="space-y-4">
                    {Object.entries(coursework).map(([category, courses]) => (
                      <div key={category}>
                        <h5 className="font-medium text-primary mb-2">{category}</h5>
                        <ul className="space-y-1">
                          {courses.map((course, index) => (
                            <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-3 w-3 text-primary" />
                              <span>{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span>Skills & Technologies</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h5 className="font-medium mb-3 flex items-center space-x-2">
                    <Code className="h-4 w-4" />
                    <span>Programming & Software</span>
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {programmingSkills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-3 flex items-center space-x-2">
                    <Wrench className="h-4 w-4" />
                    <span>Mechanical Systems</span>
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {mechanicalSkills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-3 flex items-center space-x-2">
                    <Cpu className="h-4 w-4" />
                    <span>Electronics & Hardware</span>
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {electronicsSkills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
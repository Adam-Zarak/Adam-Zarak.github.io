"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Adam Zarak</h3>
            <p className="text-sm text-muted-foreground">
              Mechanical Engineer specializing in Control Systems, GNC, and Autonomous Systems Development.
            </p>
            <div className="flex space-x-2">
              <Button asChild variant="ghost" size="icon">
                <Link href="https://www.linkedin.com/in/adamzarak/" target="_blank">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <Link href="https://github.com/Adam-Zarak" target="_blank">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="#about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#experience" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/assets/resume/AZResume.pdf" target="_blank" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Resume
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact</h4>
            <p className="text-sm text-muted-foreground">
              Interested in working together? Let&apos;s connect!
            </p>
            <Button asChild variant="outline" size="sm">
              <Link href="https://www.linkedin.com/in/adamzarak/" target="_blank">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>

        <Separator />
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2025 Adam Zarak. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, TypeScript, and shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  )
}
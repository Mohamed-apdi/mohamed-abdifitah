"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { RealTimeClock } from "@/components/RealTimeClock"
import { Ticker } from "@/components/Ticker"
import { DarkModeToggle } from "@/components/DarkModeToggle"
import { useState, useEffect } from "react"

const socialLinks = [
  {
    label: "Email",
    href: "mailto:maxamedcabdiftaax33@gmail.com",
    value: "maxamedcabdiftaax33@gmail.com",
  },
  {
    label: "Twitter",
    href: "https://x.com/codewithmohaa",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-abdifitaah/",
  },
  {
    label: "GitHub",
    href: "https://github.com/Mohamed-apdi",
  },
]

const experiences = [
  {
    company: "Loranet Technologies PLT",
    period: "October 2024 - Present",
    description: [
      "Software Engineer & Remote Team Lead supporting national infrastructure initiatives including National Intelligent Traffic Monitoring Centre (NITMC), Smart Traffic Light (STL), and Speed Sign Sensor (SSS) systems under Ministry of Works (KKR) and Public Work Department (JKR) Malaysia",
      "Developed major dashboard components for PRESTIJ Integrated Traffic Management System using Next.js, React, and TypeScript",
      "Contributed to Computerized Maintenance Management System (CMMS) development for asset lifecycle management and preventive maintenance features",
      "Worked on Laundritek smart laundry platform developing key dashboard modules and payment gateway integrations",
      "Manage remote development team through daily scrum meetings, task tracking, and blocker resolution"
    ]
  },
  {
    company: "Qoondeye - Personal Finance Management",
    period: "Independent Project",
    description: [
      "Developed comprehensive financial management mobile application with features including Budget Tracking, Multi-Account Management, and Investment Portfolio",
      "Built intelligent notification system for bill reminders and financial goal progress updates",
      "Created advanced analytics dashboard with interactive data visualizations and OCR receipt scanning functionality",
      "Implemented goal-oriented savings system with progress tracking and investment monitoring features"
    ]
  }
];

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="relative flex flex-col items-center min-h-screen font-sans">
      <div
        id="main-container"
        // className="w-full min-h-screen bg-white z-10 px-4 sm:px-6 md:px-8 py-6 sm:py-8 mb-[1500px] transition-all duration-500 ease-in-out shadow-[0_0_20px_rgba(0,0,0,0.1)]"
        className="w-full min-h-screen bg-white dark:bg-gray-900 z-10 px-4 sm:px-6 md:px-8 py-6 sm:py-8 transition-all duration-500 ease-in-out shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      >
        <Card className="border-none bg-transparent mb-8 sm:mb-16 w-full max-w-[400px] mx-auto shadow-none">
          <CardContent className="flex flex-col gap-8 sm:gap-12 p-0 sm:p-4">
            <Header isLoaded={isLoaded} />
            <Description isLoaded={isLoaded} />
            <CTAButtons isLoaded={isLoaded} />
            <Experience isLoaded={isLoaded} experiences={experiences} />
            <SocialLinks isLoaded={isLoaded} links={socialLinks} />
            <ClockWrapper isLoaded={isLoaded} />
          </CardContent>
        </Card>
      </div>
      <Ticker />
    </main>
  )
}

function Header({ isLoaded }: { isLoaded: boolean }) {
  return (
    <header
      className={`flex items-center justify-between transition-all duration-500 ease-out ${
        isLoaded ? "opacity-100 blur-none translate-y-0" : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "100ms" }}
    >
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">Mohamed Abdifitaah</h1>
        <p className="text-sm font-medium text-[#62748e] dark:text-gray-400">Full Stack Developer </p>
      </div>
      <DarkModeToggle />
    </header>
  )
}

function Description({ isLoaded }: { isLoaded: boolean }) {
  return (
    <div
      className={`flex flex-col gap-4 sm:gap-6 transition-all duration-500 ease-out ${
        isLoaded ? "opacity-100 blur-none translate-y-0" : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "200ms" }}
    >
      <div className="flex flex-col gap-4 sm:gap-5">
        <p className="text-sm text-neutral-900 dark:text-gray-100">
          I'm Mohamed Abdifitaah, a Somali Software Engineer & Remote Team Lead based in Malaysia. I specialize in full-stack development using Next.js, React, TypeScript, and React Native, building scalable solutions for government and enterprise clients.
        </p>
        <p className="text-sm text-neutral-900 dark:text-gray-100">
          I lead a talented Somali development team remotely, architecting complex systems including traffic management platforms, mobile applications, focusing on clean code and robust testing practices.
        </p>
      </div>
    </div>
  )
}

function CTAButtons({ isLoaded }: { isLoaded: boolean }) {
  return (
    <div
      className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-2.5 transition-all duration-500 ease-out ${
        isLoaded ? "opacity-100 blur-none translate-y-0" : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "300ms" }}
    >
      <Button
        variant="default"
        onClick={() => {
          const email = 'maxamedcabdiftaax33@gmail.com'
          window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank')
        }}
        className="w-full sm:w-auto inline-flex h-[34px] items-center justify-center gap-2.5 pl-4 pr-3 py-0 bg-[#020618] rounded-[99px] hover:bg-[#020618]/90 text-slate-50"
      >
        <span className="font-medium text-[13px] leading-5 text-slate-50">Send an email</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" className="text-slate-50">
          <title>chevron-right</title>
          <g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor">
            <polyline points="4.25 10.25 8.5 6 4.25 1.75"></polyline>
          </g>
        </svg>
      </Button>
      <Button 
        variant="ghost" 
        className="w-full sm:w-auto gap-2 justify-center sm:justify-start"
        onClick={() => {
          window.open('/mohamed-abdifitah/Mohamed Resume 2025 07.10.25.pdf', '_blank');
        }}
      >
        <span className="h-[13px] w-[13px] rounded-full bg-[#05df7233] flex items-center justify-center overflow-hidden">
          <span className="h-1.5 w-1.5 rounded-full bg-[#05df72] animate-scale-in" />
        </span>
        <span className="text-[13px] leading-5 text-neutral-900 dark:text-gray-100">Resume</span>
      </Button>
    </div>
  )
}

function Experience({ isLoaded, experiences }: { isLoaded: boolean; experiences: Array<{company: string; period: string; description: string[]}> }) {
  return (
    <div
      className={`flex flex-col gap-6 transition-all duration-500 ease-out ${
        isLoaded ? "opacity-100 blur-none translate-y-0" : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "400ms" }}
    >
      <h2 className="text-sm text-neutral-400 dark:text-gray-500 uppercase">EXPERIENCE</h2>
      <div className="flex flex-col gap-6">
        {experiences.map((exp: {company: string; period: string; description: string[]}) => (
          <div key={exp.company} className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-neutral-900 dark:text-gray-100">{exp.company}</span>
              <span className="text-sm text-neutral-500 dark:text-gray-400">{exp.period}</span>
            </div>
            <div className="flex flex-col gap-3 pl-4">
              {exp.description.map((item, index) => (
                <p key={index} className="text-sm text-neutral-700 dark:text-gray-300 leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SocialLinks({ isLoaded, links }: { isLoaded: boolean; links: typeof socialLinks }) {
  return (
    <div
      className={`flex flex-col gap-6 transition-all duration-500 ease-out ${
        isLoaded ? "opacity-100 blur-none translate-y-0" : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "500ms" }}
    >
      <h2 className="text-sm text-neutral-400 dark:text-gray-500 uppercase">LET'S GET IN TOUCH</h2>
      <div className="flex flex-wrap gap-6">
        {links.map((link) => (
          <div key={link.label} className="group">
            {link.label === "Email" ? (
              <button
                onClick={() => navigator.clipboard.writeText(link.value!)}
                className="text-sm text-neutral-900 dark:text-gray-100 hover:text-neutral-600 dark:hover:text-gray-300 transition-colors flex items-center gap-1 group"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            ) : (
              <a
                href={link.href}
                className="text-sm text-neutral-900 dark:text-gray-100 hover:text-neutral-600 dark:hover:text-gray-300 transition-colors flex items-center gap-1 group"
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function ClockWrapper({ isLoaded }: { isLoaded: boolean }) {
  return (
    <div
      className={`flex justify-start w-full transition-all duration-500 ease-out ${
        isLoaded ? "opacity-100 blur-none translate-y-0" : "opacity-0 blur-[4px] translate-y-2"
      }`}
      style={{ transitionDelay: "600ms" }}
    >
      <RealTimeClock />
    </div>
  )
}

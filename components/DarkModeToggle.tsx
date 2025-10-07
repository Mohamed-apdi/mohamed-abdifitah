"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import type { MouseEvent } from "react"

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Current theme:', theme)
    const newTheme = theme === "dark" ? "light" : "dark"
    console.log('Setting theme to:', newTheme)
    setTheme(newTheme)
  }

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="h-9 w-9 p-0 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
      >
        <Sun className="h-4 w-4 text-gray-700 dark:text-gray-300" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="h-9 w-9 p-0 border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
    >
      {theme === "dark" ? (
        <Moon className="h-4 w-4 text-gray-300" />
      ) : (
        <Sun className="h-4 w-4 text-gray-700" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

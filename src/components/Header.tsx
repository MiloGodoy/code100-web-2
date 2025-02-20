"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import Logo from '../../public/8.png'

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between lg:h-24">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <div className="w-[180px] md:w-[220px] lg:w-[250px] relative">
                  <Image
                    src={Logo || "/placeholder.svg"}
                    alt="Code100 Logo"
                    width={250}
                    height={84}
                    style={{ width: '100%', height: 'auto' }}
                    priority
                  />
                </div>
              </Link>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/nosotros"
                  className="text-foreground/60 transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Nosotros
                </Link>
                <Link
                  href="/productos"
                  className="text-foreground/60 transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Productos
                </Link>
                <Link
                  href="/certificados"
                  className="text-foreground/60 transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Certificados
                </Link>
                <Link
                  href="/soporte"
                  className="text-foreground/60 transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Soporte
                </Link>
                <Link
                  href="/repositorio"
                  className="text-foreground/60 transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Repositorio Público
                </Link>
                <Link
                  href="/blog"
                  className="text-foreground/60 transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contacto"
                  className="text-foreground/60 transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Link>
                <Link
                  href="/fundacion"
                  className="text-primary/90 font-semibold transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Fundación Code100
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-[180px] md:w-[220px] lg:w-[250px] relative">
              <Image
                src={Logo || "/placeholder.svg"}
                alt="Code100 Logo"
                width={250}
                height={84}
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 text-sm lg:text-base">
          <Link href="/nosotros" className="text-foreground/60 transition-colors hover:text-foreground">
            Nosotros
          </Link>
          <Link
            href="/productos"
            className="text-foreground/60 transition-colors hover:text-foreground flex items-center gap-0.5"
          >
            Productos
            <ChevronDown className="h-3 w-3" />
          </Link>
          <Link
            href="/certificados"
            className="text-foreground/60 transition-colors hover:text-foreground flex items-center gap-0.5"
          >
            Certificados
            <ChevronDown className="h-3 w-3" />
          </Link>
          <Link
            href="/soporte"
            className="text-foreground/60 transition-colors hover:text-foreground flex items-center gap-0.5"
          >
            Soporte
            <ChevronDown className="h-3 w-3" />
          </Link>
          <Link
            href="/repositorio"
            className="text-foreground/60 transition-colors hover:text-foreground flex items-center gap-0.5"
          >
            Repositorio
            <ChevronDown className="h-3 w-3" />
          </Link>
          <Link href="/blog" className="text-foreground/60 transition-colors hover:text-foreground">
            Blog
          </Link>
          <Link href="/contacto" className="text-foreground/60 transition-colors hover:text-foreground">
            Contacto
          </Link>
          <Link href="/fundacion" className="text-primary/90 font-semibold transition-colors hover:text-primary">
            Fundación Code100
          </Link>
        </nav>
      </div>
    </header>
  )
}
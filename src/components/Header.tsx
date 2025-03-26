"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, FileCheck, FileSpreadsheet, FileText, Files, FilePen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Logo from "../../public/8.png"

const products = [
  {
    title: "Certificado Cualificado de Firma Electrónica",
    description: "Firma Electrónica tipo F1, F2 y F3",
    icon: FileCheck,
    href: "/productos/firma-electronica",
  },
  {
    title: "FUTURA100",
    description: "Facturación Electrónica",
    icon: FileSpreadsheet,
    href: "/productos/futura100",
  },
  {
    title: "TALENTO100",
    description: "Documentos Electrónicos Laborales con Comunicación al MTESS",
    icon: FileText,
    href: "/productos/talento100",
  },
  {
    title: "DataFlow",
    description: "Gestor de firmas electrónicas de documentos",
    icon: Files,
    href: "/productos/dataflow",
  },
  {
    title: "CodeSign",
    description: "Firma masiva de documentos",
    icon: FilePen,
    href: "/productos/codesign",
  },
]

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
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </Link>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/nosotros" className="text-foreground/60 transition-colors hover:text-foreground" onClick={() => setIsOpen(false)} > Nosotros </Link>
                <Link href="/productos" className="text-foreground/60 transition-colors hover:text-foreground" onClick={() => setIsOpen(false)} > Productos </Link>
                {/* <Link href="/certificados" className="text-foreground/60 transition-colors hover:text-foreground" onClick={() => setIsOpen(false)} > Certificados </Link>  */}
                <Link href="/soporte" className="text-foreground/60 transition-colors hover:text-foreground" onClick={() => setIsOpen(false)} > Soporte </Link>
                <Link href="/repositorio-documentos" className="text-foreground/60 transition-colors hover:text-foreground" onClick={() => setIsOpen(false)} > Repositorio </Link> 
                {/* <Link href="/blog" className="text-foreground/60 transition-colors hover:text-foreground" onClick={() => setIsOpen(false)} > Blog </Link>  */}
                <Link href="/contacto" className="text-foreground/60 transition-colors hover:text-foreground" onClick={() => setIsOpen(false)} > Contacto </Link> 
                <Link href="/fundacion" className="text-primary/90 font-semibold transition-colors hover:text-primary" onClick={() => setIsOpen(false)} > Fundación Code100 </Link>
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
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <Link href="/nosotros" className="text-foreground/60 transition-colors hover:text-foreground">
                Nosotros
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground/60 transition-colors hover:text-foreground">
                Productos
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-4">
                  {products.map((product) => (
                    <li key={product.title}>
                      <NavigationMenuLink asChild>
                        <Link href='/productos' className="flex items-start space-x-4 p-3 rounded-lg hover:bg-accent">
                          <div className="bg-gradient-to-br from-amber-400 to-emerald-400 p-2 rounded-lg">
                            <product.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium mb-1">{product.title}</div>
                            <p className="text-sm text-muted-foreground leading-tight">{product.description}</p>
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Other navigation items remain the same */}
            {/* <NavigationMenuItem>
              <Link
                href="/certificados"
                className="text-foreground/60 transition-colors hover:text-foreground flex items-center gap-0.5"
              >
                Certificados
                
              </Link>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link
                href="/soporte"
                className="text-foreground/60 transition-colors hover:text-foreground flex items-center gap-0.5"
              >
                Soporte
                
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/repositorio-documentos"
                className="text-foreground/60 transition-colors hover:text-foreground flex items-center gap-0.5"
              >
                Repositorio
        
              </Link>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <Link
                href="/blog"
                className="text-foreground/60 transition-colors hover:text-foreground flex items-center gap-0.5"
              >
                Blog
                
              </Link>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link
                href="/contacto"
                className="text-foreground/60 transition-colors hover:text-foreground flex items-center gap-0.5"
              >
                Contacto
                
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/fundacion"
                className="text-foreground/60 transition-colors hover:text-foreground flex items-center gap-0.5"
              >
                Fundación Code100
                
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}


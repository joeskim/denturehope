"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation, siteConfig } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/photos/updated_horizontal_logo_horizontal.png"
              alt="DentureHope by Halcyon Dental"
              width={180}
              height={45}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium text-sm tracking-wide transition-colors",
                  isScrolled ? "text-stone-600 hover:text-teal-600" : "text-white/90 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className={cn(
                "flex items-center space-x-2 text-sm font-medium transition-colors",
                isScrolled ? "text-teal-600" : "text-white/90"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.phone}</span>
            </a>
            <Link
              href="#contact"
              className="bg-teal-500 text-white px-7 py-3 rounded-lg font-medium text-sm hover:bg-teal-600 transition-colors shadow-md"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-stone-900 hover:bg-stone-100" : "text-white hover:bg-white/10"
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl mt-2 p-6 border border-stone-100">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-stone-700 font-medium rounded-lg hover:bg-stone-50 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-stone-200">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-teal-500 text-white px-6 py-3 rounded-lg font-medium"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
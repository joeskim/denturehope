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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "font-medium transition-colors hover:text-sky-500",
                  isScrolled ? "text-slate-700" : "text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className={cn(
                "flex items-center space-x-2 font-semibold transition-colors",
                isScrolled ? "text-sky-600 hover:text-sky-700" : "text-white/90"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>{siteConfig.phone}</span>
            </a>
            <Link
              href="#contact"
              className="bg-gradient-to-r from-sky-500 to-amber-400 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isScrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
            )}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl mt-2 p-4 animate-slide-up">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-gradient-to-r from-sky-500 to-amber-400 text-white px-6 py-3 rounded-full font-semibold"
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
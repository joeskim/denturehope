import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/lib/utils";

// Social icons as inline SVG components
const FacebookIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-amber-400 flex items-center justify-center">
                <span className="text-white font-bold text-lg">DH</span>
              </div>
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Helping denture sufferers discover hope through advanced dental implant solutions. 
              Your journey to a confident smile starts here.
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.social.facebook} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors">
                <FacebookIcon />
              </a>
              <a href={siteConfig.social.instagram} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors">
                <InstagramIcon />
              </a>
              <a href={siteConfig.social.twitter} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-400 hover:text-sky-400 transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-slate-400 hover:text-sky-400 transition-colors">About Implants</Link></li>
              <li><Link href="#solutions" className="text-slate-400 hover:text-sky-400 transition-colors">Solutions</Link></li>
              <li><Link href="#chatbot" className="text-slate-400 hover:text-sky-400 transition-colors">Chat with Us</Link></li>
              <li><Link href="#contact" className="text-slate-400 hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Implant Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Implant Solutions</h3>
            <ul className="space-y-3">
              <li><span className="text-slate-400">Single Tooth Implants</span></li>
              <li><span className="text-slate-400">Implant-Supported Dentures</span></li>
              <li><span className="text-slate-400">Full Arch Restoration</span></li>
              <li><span className="text-slate-400">All-on-4® Treatment</span></li>
              <li><span className="text-slate-400">Zygomatic Implants</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">{siteConfig.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="text-slate-400 hover:text-sky-400 transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-slate-400 hover:text-sky-400 transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-sky-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} {siteConfig.clinic}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</Link>
              <Link href="#" className="text-slate-500 hover:text-slate-300 transition-colors">HIPAA Notice</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
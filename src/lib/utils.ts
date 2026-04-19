import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const siteConfig = {
  name: "DentureHope",
  tagline: "Your Path to Dental Freedom",
  clinic: "Halcyon Dental PLLC",
  phone: "331.287.3420",
  email: "info@halcyon.dental",
  address: "1940 W Galena Blvd #11, Aurora, IL 60506",
  hours: "Mon-Fri: 8am-6pm | Sat: 9am-2pm",
  social: {
    facebook: "https://facebook.com/halcyondental",
    instagram: "https://instagram.com/halcyondental",
    twitter: "https://twitter.com/halcyondental",
  },
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About Implants", href: "#about" },
  { name: "Solutions", href: "#solutions" },
  { name: "Chat with Us", href: "#chatbot" },
  { name: "Contact", href: "#contact" },
];
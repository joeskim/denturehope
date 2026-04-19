"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Shield, 
  Heart,
  Sparkles,
  ChevronRight,
  Star,
  Play,
  Users,
  Award,
  Clock,
  MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/utils";
import ContactForm from "@/components/ContactForm";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/photos/confident-smile.png"
            alt="Confident patient with dental implants"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/85 to-stone-900/75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-8"
              >
                <Image
                  src="/photos/updated_horizontal_logo_horizontal.png"
                  alt="DentureHope by Halcyon Dental"
                  width={200}
                  height={50}
                  className="h-12 w-auto"
                  priority
                />
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-teal-500/20 backdrop-blur-sm px-5 py-2 rounded-full border border-teal-400/30"
              >
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span className="text-teal-300 text-sm font-medium tracking-wide">Free consultations available</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight tracking-tight"
              >
                Are you ready to{' '}
                <span className="bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent font-semibold">
                  smile with confidence?
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl text-stone-300 max-w-2xl leading-relaxed font-light"
              >
                Discover advanced dental implant solutions that restore your confidence, 
                comfort, and quality of life.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-start gap-5 pt-4"
              >
                <Link
                  href="#contact"
                  className="group flex items-center space-x-3 bg-teal-500 text-white px-10 py-5 rounded-xl font-medium text-lg hover:bg-teal-400 hover:shadow-xl transition-all duration-300 shadow-lg"
                >
                  <span>Get Your Free Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center space-x-3 text-white hover:text-teal-300 transition-colors py-5 px-4"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium tracking-wide">{siteConfig.phone}</span>
                </a>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-wrap items-center gap-8 pt-8 text-stone-400"
              >
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  <span className="text-sm tracking-wide">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm tracking-wide">10,000+ Happy Patients</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span className="text-sm tracking-wide">Board Certified</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border border-stone-600 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-stone-500 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* LM Bridge Section */}
      <section id="about" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal-600 font-medium tracking-widest uppercase text-sm mb-4">Premium Solution</p>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight">
              The LeClerq-Martinez Implant Bridge
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              While there are implant options for removable dentures, most patients prefer the security and comfort 
              of a fixed implant bridge. Our signature solution is the LeClerq-Martinez Implant Bridge — perfected 
              by Dr. Philippe LeClerq of Paris and his master technician Jean-François Martinez.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left column - Benefits */}
            <div className="space-y-8">
              <div className="bg-stone-50 p-10 rounded-2xl border border-stone-100">
                <h3 className="text-2xl font-medium text-stone-900 mb-8 tracking-tight">Why Choose the LM Bridge?</h3>
                <ul className="space-y-6">
                  {[
                    { title: "Screw-retained framework", desc: "Superior stability with 6-10 implants" },
                    { title: "Individual crown repair", desc: "No expensive temporaries — any dentist can fix a single crown" },
                    { title: "Less tissue shrinkage", desc: "More implants mean bone and gum shrinkage is less of an aesthetic problem" },
                    { title: "Natural feel", desc: "No bulky plastic toward the roof of your mouth" },
                    { title: "Maximum longevity", desc: "Rigid frame connects all implants for lasting results" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <span className="font-medium text-stone-900">{item.title}</span>
                        <span className="text-stone-500"> — {item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-900 p-10 rounded-2xl text-white">
                <h3 className="text-xl font-medium mb-4">Why fly to Europe and pay tens of thousands more?</h3>
                <p className="text-stone-300 mb-6 leading-relaxed">
                  The LM Bridge traditionally costs over $50,000 per arch. We offer this service for 
                  <span className="text-amber-400 font-semibold"> less than half this amount</span> by 
                  streamlining procedures and maintaining an in-house implant laboratory.
                </p>
                <p className="text-3xl font-semibold text-teal-400 tracking-tight">
                  $8,700 per arch — best value in the US
                </p>
              </div>
            </div>

            {/* Right column - Concerns + Warranty */}
            <div className="space-y-8">
              <div className="bg-white border-2 border-stone-200 p-10 rounded-2xl">
                <h3 className="text-xl font-medium text-stone-900 mb-6 tracking-tight">The Problem with 4-Implant Solutions</h3>
                <ul className="space-y-4 text-stone-600">
                  <li className="flex items-start space-x-3">
                    <span className="text-stone-300">—</span>
                    <span>What if one of those implants should fail?</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-stone-300">—</span>
                    <span>What if one of the teeth chips or breaks?</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-stone-300">—</span>
                    <span>What happens when bone and gum shrink dramatically over time?</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-stone-300">—</span>
                    <span>What do patients wear while their bridge is being repaired?</span>
                  </li>
                </ul>
                <p className="mt-6 font-medium text-teal-600">
                  The LeClerq-Martinez Implant Bridge answers all of these problems.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-10 rounded-2xl text-white">
                <h3 className="text-xl font-medium mb-4">Included with Every Restoration</h3>
                <p className="text-teal-100 leading-relaxed">
                  Unlike other providers, we include a <strong>3-year limited warranty</strong> on all final 
                  restorations at no additional cost. The peace of mind from knowing your implant surgery 
                  and reconstruction were done properly is priceless.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="#contact"
              className="inline-flex items-center space-x-3 bg-teal-500 text-white px-10 py-5 rounded-xl font-medium text-lg hover:bg-teal-600 hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Call for Free Consultation: 331.287.3420</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="comparison" className="py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal-600 font-medium tracking-widest uppercase text-sm mb-4">Compare Options</p>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight">
              Full Arch Options Compared
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              We offer multiple solutions to meet your needs and budget. Here&apos;s how they compare.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-stone-900 text-white">
                  <th className="px-8 py-5 text-left font-medium tracking-wide">Attribute</th>
                  <th className="px-6 py-5 text-center font-medium">2 Implant Overdenture</th>
                  <th className="px-6 py-5 text-center font-medium">4 Implant Hybrid</th>
                  <th className="px-6 py-5 text-center bg-teal-600 font-medium">LeClerq-Martinez Bridge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {[
                  { attr: "Eating", values: ["Average", "Excellent", "Excellent"] },
                  { attr: "Esthetics", values: ["Average", "Average", "Excellent"] },
                  { attr: "Speech", values: ["Average", "Above Average", "Excellent"] },
                  { attr: "Durability", values: ["Average", "Average", "Excellent"] },
                  { attr: "Removable?", values: ["Yes", "No", "No"] },
                  { attr: "Repair Costs", values: ["Low to medium", "Medium to high", "Single crown"] },
                  { attr: "Temporization", values: ["None", "Old dentures", "Simple"] },
                  { attr: "Our Fee", values: ["$3,000 - $6,500", "$8,700 per arch", "$8,700 per arch"] },
                  { attr: "Warranty", values: ["Standard", "Standard", "3-Year Included"] },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-stone-50" : "bg-white"}>
                    <td className="px-8 py-5 font-medium text-stone-900">{row.attr}</td>
                    <td className="px-6 py-5 text-center text-stone-600">{row.values[0]}</td>
                    <td className="px-6 py-5 text-center text-stone-600">{row.values[1]}</td>
                    <td className="px-6 py-5 text-center bg-teal-50 font-medium text-teal-700">{row.values[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <p className="text-stone-500 mb-6">
              Individual circumstances may affect which options are available to you.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center space-x-2 text-teal-600 font-medium hover:text-teal-700"
            >
              <Phone className="w-4 h-4" />
              <span>Call 331.287.3420 to discuss your options</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/photos/drkim_about.png"
                alt="Dr. Kim and the Halcyon Dental team"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div>
              <p className="text-teal-600 font-medium tracking-widest uppercase text-sm mb-4">About Us</p>
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-8 tracking-tight">
                Halcyon Dental
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                <p className="text-lg">
                  Halcyon Dental PLLC provides educational resources and advanced dental implant solutions 
                  for those suffering with traditional removable dentures.
                </p>
                <p>
                  We are one of the few dental implant practices in the world to offer the LeClerq-Martinez 
                  Implant Bridge, and we&apos;re the only office in the Midwest with the specialized implant 
                  prostheses manufacturing equipment necessary to provide this premium option.
                </p>
                <p>
                  Our team performs more implant-related procedures every year than most dentists will in 
                  their entire career. We have a dedicated implant and grafting surgical suite.
                </p>
              </div>
              <div className="mt-10 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                  </div>
                  <span className="font-medium text-stone-900">3-year limited warranty on all restorations</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                  </div>
                  <span className="font-medium text-stone-900">In-house implant laboratory</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-teal-600" />
                  </div>
                  <span className="font-medium text-stone-900">Free estimate reviews from other dentists</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-amber-400 font-medium tracking-widest uppercase text-sm mb-4">Simple Process</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              Your Journey to a New Smile
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Free Consultation",
                description: "Virtual or in-person meeting to understand your needs and explore options.",
                icon: MessageCircle,
              },
              {
                step: 2,
                title: "Custom Treatment Plan",
                description: "We create a personalized roadmap based on your goals and budget.",
                icon: Heart,
              },
              {
                step: 3,
                title: "Expert Treatment",
                description: "Our specialists perform your procedure with precision and care.",
                icon: Shield,
              },
              {
                step: 4,
                title: "New Smile Life",
                description: "Walk out with confidence and enjoy the life you deserve.",
                icon: Sparkles,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-400 text-stone-900 font-semibold text-sm flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3 tracking-tight">{item.title}</h3>
                <p className="text-stone-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="#contact"
              className="inline-flex items-center space-x-3 bg-teal-500 text-white px-10 py-5 rounded-xl font-medium text-lg hover:bg-teal-400 hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Start Your Free Consultation</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal-600 font-medium tracking-widest uppercase text-sm mb-4">Patient Stories</p>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 tracking-tight">
              Real Patients, Real Transformations
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "D.J.",
                location: "Aurora, IL",
                treatment: "Upper and lower LM Bridges",
                text: "My overall experience with Halcyon Dental has been wonderful. My first visit was so informative, and Dr. Kim took the time to explain everything. Everything was planned out including the financial arrangements. My dental experience is better now than ever before.",
                rating: 5,
              },
              {
                name: "D.S.",
                location: "Naperville, IL",
                treatment: "Multiple implants and restorations",
                text: "With the amount of surgery and reconstruction that I had to undergo, I would probably not have been able to go through it without sedation. My experience was great. It was very nice, easy, and painless. Dr. Kim's team made me feel relaxed and comfortable throughout the entire process.",
                rating: 5,
              },
              {
                name: "D.M.",
                location: "Elgin, IL",
                treatment: "Full arch restoration",
                text: "I LOVE my teeth!!! Thank you so much. You are all so caring and understanding. It is almost like visiting friends instead of a dental appointment. You have erased many of my fears and given me a reason to smile. You are all wonderful!",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-stone-50 rounded-2xl p-10 border border-stone-100"
              >
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-stone-600 mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="text-sm text-teal-600 font-medium mb-6 tracking-wide">{testimonial.treatment}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white font-medium">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-stone-900">{testimonial.name}</p>
                    <p className="text-sm text-stone-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ChatBot Section */}
      <section id="chatbot" className="py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-teal-600 font-medium tracking-widest uppercase text-sm mb-4">Ask Questions</p>
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight">
                Have Questions?
                <br />
                <span className="bg-gradient-to-r from-teal-500 to-amber-500 bg-clip-text text-transparent">
                  Let Our Assistant Help
                </span>
              </h2>
              <p className="text-xl text-stone-600 mb-10 leading-relaxed">
                Our AI-powered assistant can answer your questions about dental implants, 
                explain your options, and help you determine next steps.
              </p>
              <ul className="space-y-4">
                {[
                  "Learn about different implant procedures",
                  "Understand costs and financing options",
                  "Get answers to common concerns",
                  "Schedule your free consultation",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-teal-500" />
                    <span className="text-lg text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-100">
              <ChatBot />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-teal-600 font-medium tracking-widest uppercase text-sm mb-4">Get Started</p>
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 tracking-tight">
                Ready to Take the{' '}
                <span className="bg-gradient-to-r from-teal-500 to-amber-500 bg-clip-text text-transparent">
                  First Step?
                </span>
              </h2>
              <p className="text-xl text-stone-600 mb-12 leading-relaxed">
                Schedule your free consultation today. No pressure, no obligation — 
                just honest answers about your options.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">Call Us</h3>
                    <a href={`tel:${siteConfig.phone}`} className="text-teal-600 text-xl hover:underline">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">Office Hours</h3>
                    <p className="text-stone-600">{siteConfig.hours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-900 mb-1">Visit Us</h3>
                    <p className="text-stone-600">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 rounded-2xl p-10 border border-stone-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setShowVideoModal(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-10 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-medium text-stone-900 mb-4 tracking-tight">Patient Stories Coming Soon</h3>
            <p className="text-stone-600 mb-8 leading-relaxed">
              We&apos;re working on video testimonials from real patients. Check back soon, or 
              schedule your free consultation to see transformations in person!
            </p>
            <Link
              href="#contact"
              onClick={() => setShowVideoModal(false)}
              className="block w-full text-center bg-teal-500 text-white py-4 rounded-xl font-medium hover:bg-teal-600 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
}
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
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/utils";
import ContactForm from "@/components/ContactForm";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Solid background fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900"></div>
        {/* Background Image with strong overlay */}
        <div className="absolute inset-0">
          <Image
            src="/photos/confident-smile.png"
            alt="Confident patient with dental implants"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-white/90 text-sm font-medium">Free consultations available now</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Say Goodbye to{' '}
              <span className="bg-gradient-to-r from-sky-400 to-amber-400 bg-clip-text text-transparent">
                Denture Discomfort
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Discover advanced dental implant solutions that restore your confidence, 
              comfort, and quality of life. Because you deserve to smile freely.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="#contact"
                className="group flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-amber-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                <span>Get Your Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => setShowVideoModal(true)}
                className="flex items-center space-x-3 text-white/90 hover:text-white transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Play className="w-6 h-6 ml-1" />
                </div>
                <span className="font-medium">Watch Patient Stories</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-12 text-white/60">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span>4.9/5 Patient Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>10,000+ Happy Patients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Board Certified Specialists</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* About/LM Bridge Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              The LeClerq-Martinez Implant Bridge
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              While there are implant options for removable dentures, most patients prefer the security and comfort 
              of a fixed implant bridge. Our signature solution is the LeClerq-Martinez Implant Bridge — perfected 
              by Dr. Philippe LeClerq of Paris, France and his master laboratory technician Jean-François Martinez.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-sky-50 to-amber-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Choose the LM Bridge?</h3>
                <ul className="space-y-4">
                  {[
                    { title: "Screw-retained framework", desc: "Superior stability with 6-10 implants" },
                    { title: "Individual crown repair", desc: "No expensive temporaries — any dentist can fix a single crown" },
                    { title: "Less tissue shrinkage", desc: "More implants mean bone and gum shrinkage is less of an aesthetic problem" },
                    { title: "Natural feel", desc: "No bulky plastic toward the roof of your mouth — taste and feel food properly" },
                    { title: "Maximum longevity", desc: "Rigid frame connects all implants for lasting results" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-sky-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900">{item.title}</span>
                        <span className="text-slate-600"> — {item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">Why fly to Europe and pay tens of thousands more?</h3>
                <p className="text-slate-300 mb-4">
                  The LM Bridge traditionally costs over $50,000 per arch. We offer this service for 
                  <span className="text-amber-400 font-bold"> less than half this amount</span> by 
                  streamlining procedures and maintaining an in-house implant laboratory.
                </p>
                <p className="text-2xl font-bold text-sky-400">
                  $8,700 per arch — best value in the US
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-900 mb-4">The Problem with 4-Implant Solutions</h3>
                <ul className="space-y-3 text-slate-600">
                  <li>• What if one of those implants should fail?</li>
                  <li>• What if one of the teeth chips or breaks?</li>
                  <li>• What happens when bone and gum shrink dramatically over time?</li>
                  <li>• What do patients wear while their bridge is being repaired?</li>
                </ul>
                <p className="mt-4 font-semibold text-sky-600">
                  The LeClerq-Martinez Implant Bridge answers all of these problems.
                </p>
              </div>

              <div className="bg-gradient-to-r from-sky-500 to-amber-400 p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-3">Included with Every Restoration</h3>
                <p className="text-white/90">
                  Unlike other providers, we include a <strong>3-year limited warranty</strong> on all final 
                  restorations at no additional cost. The peace of mind from knowing your implant surgery 
                  and reconstruction were done properly is priceless.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-amber-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Call for Free Consultation: 331.287.3420</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="comparison" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Full Arch Options Compared
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              We offer multiple solutions to meet your needs and budget. Here's how they compare.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Attribute</th>
                    <th className="px-6 py-4 text-center font-semibold">2 Implant Overdenture</th>
                    <th className="px-6 py-4 text-center font-semibold">4 Implant Hybrid</th>
                    <th className="px-6 py-4 text-center bg-sky-600 font-semibold">LeClerq-Martinez Bridge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { attr: "Eating", values: ["Average", "Excellent", "Excellent"] },
                    { attr: "Esthetics", values: ["Average", "Average", "Excellent"] },
                    { attr: "Speech", values: ["Average", "Above Average", "Excellent"] },
                    { attr: "Durability", values: ["Average", "Average", "Excellent"] },
                    { attr: "Removable?", values: ["Yes", "No", "No"] },
                    { attr: "Repair Costs", values: ["Low to medium", "Medium to high", "Limited to single crown"] },
                    { attr: "Temporization", values: ["None", "None or use old dentures", "Simple"] },
                    { attr: "Our Fee", values: ["$3,000 - $6,500", "$8,700 per arch", "$8,700 per arch"] },
                    { attr: "Warranty", values: ["Standard", "Standard", "3-Year Included"] },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-slate-900">{row.attr}</td>
                      <td className="px-6 py-4 text-center text-slate-600">{row.values[0]}</td>
                      <td className="px-6 py-4 text-center text-slate-600">{row.values[1]}</td>
                      <td className="px-6 py-4 text-center bg-sky-50 font-semibold text-sky-700">{row.values[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/dental-office.jpg"
                alt="Modern dental office"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-slate-600 mb-4">
              Individual circumstances may affect which options are available to you. Major bone grafting 
              may be necessary for fixed options.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center space-x-2 text-sky-600 font-semibold hover:text-sky-700"
            >
              <Phone className="w-4 h-4" />
              <span>Call 331.287.3420 to discuss your options</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-sky-500 to-amber-400 bg-clip-text text-transparent">
                  Halcyon Dental
                </span>
              </h2>
              <div className="space-y-6 text-slate-600">
                <p className="text-lg">
                  Halcyon Dental PLLC provides educational resources and advanced dental implant solutions 
                  for those suffering with traditional removable dentures.
                </p>
                <p>
                  We are one of the few dental implant practices in the world to offer the LeClerq-Martinez 
                  Implant Bridge, and we&apos;re the only office in the Midwest with the specialized implant 
                  prostheses manufacturing equipment necessary to provide this premium option at a 
                  significantly lower cost.
                </p>
                <p>
                  Our team performs more implant-related procedures every year than most dentists will in 
                  their entire career. We have a dedicated implant and grafting surgical suite outfitted with 
                  specialized equipment including appropriate monitors for providing IV sedation.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-sky-500" />
                  <span className="font-medium text-slate-900">3-year limited warranty on all restorations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-sky-500" />
                  <span className="font-medium text-slate-900">In-house implant laboratory</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-sky-500" />
                  <span className="font-medium text-slate-900">Free estimate reviews from other dentists</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Your Journey to a New Smile
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We&apos;ve streamlined the process so you can focus on what matters — getting your confidence back.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Free Consultation",
                description: "Virtual or in-person meeting to understand your needs and explore options. No pressure, just answers.",
                icon: MessageCircle,
              },
              {
                step: 2,
                title: "Custom Treatment Plan",
                description: "We create a personalized roadmap based on your goals, budget, and dental health.",
                icon: Heart,
              },
              {
                step: 3,
                title: "Expert Treatment",
                description: "Our board-certified specialists perform your procedure with precision and care.",
                icon: Shield,
              },
              {
                step: 4,
                title: "New Smile Life",
                description: "Walk out with confidence and enjoy the foods, conversations, and smiles you deserve.",
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
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sky-500 to-amber-400 flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-400 text-slate-900 font-bold text-sm flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-amber-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Start Your Free Consultation</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Real Patients, Real Transformations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hear from people who took the first step and never looked back.
            </p>
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
                className="bg-slate-50 rounded-2xl p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="text-sm text-sky-600 font-medium mb-4">{testimonial.treatment}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-amber-400 flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ChatBot Section */}
      <section id="chatbot" className="py-24 bg-gradient-to-br from-sky-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Have Questions?
                <br />
                <span className="bg-gradient-to-r from-sky-500 to-amber-400 bg-clip-text text-transparent">
                  Let Our Assistant Help
                </span>
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Our AI-powered assistant can answer your questions about dental implants, 
                explain your options, and help you determine next steps — all at your convenience.
              </p>
              <ul className="space-y-4">
                {[
                  "Learn about different implant procedures",
                  "Understand costs and financing options",
                  "Get answers to common concerns",
                  "Schedule your free consultation",
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-sky-500" />
                    <span className="text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <ChatBot />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Ready to Take the{' '}
                <span className="bg-gradient-to-r from-sky-500 to-amber-400 bg-clip-text text-transparent">
                  First Step?
                </span>
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Schedule your free consultation today. No pressure, no obligation — 
                just honest answers about your options.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Call Us</h3>
                    <a href={`tel:${siteConfig.phone}`} className="text-sky-600 text-lg hover:underline">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Office Hours</h3>
                    <p className="text-slate-600">{siteConfig.hours}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Visit Us</h3>
                    <p className="text-slate-600">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setShowVideoModal(false)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Patient Stories Coming Soon</h3>
            <p className="text-slate-600 mb-6">
              We&apos;re working on video testimonials from real patients. Check back soon, or 
              schedule your free consultation to see transformations in person!
            </p>
            <button
              onClick={() => setShowVideoModal(false)}
              className="w-full bg-gradient-to-r from-sky-500 to-amber-400 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
            >
              Schedule a Consultation
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

// Add missing imports
import { MapPin } from "lucide-react";
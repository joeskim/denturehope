"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-()+ ]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-teal-600" />
        </div>
        <h3 className="text-2xl font-medium text-stone-900 mb-4">Thank You!</h3>
        <p className="text-stone-600 mb-8 leading-relaxed">
          We&apos;ve received your request and will contact you within 24 hours 
          to schedule your free consultation.
        </p>
        <p className="text-sm text-stone-500">
          Questions? Call us at 331.287.3420
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-5 py-4 rounded-xl border ${
            errors.name ? "border-red-300 focus:ring-red-500" : "border-stone-200 focus:ring-teal-500"
          } focus:outline-none focus:ring-2 transition-colors bg-white`}
          placeholder="Jane Doe"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-5 py-4 rounded-xl border ${
            errors.email ? "border-red-300 focus:ring-red-500" : "border-stone-200 focus:ring-teal-500"
          } focus:outline-none focus:ring-2 transition-colors bg-white`}
          placeholder="jane@example.com"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-5 py-4 rounded-xl border ${
            errors.phone ? "border-red-300 focus:ring-red-500" : "border-stone-200 focus:ring-teal-500"
          } focus:outline-none focus:ring-2 transition-colors bg-white`}
          placeholder="(555) 123-4567"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
          How can we help you? (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-5 py-4 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors resize-none bg-white"
          placeholder="Tell us about your dental concerns or questions..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-teal-500 text-white py-4 rounded-xl font-medium text-lg hover:bg-teal-600 disabled:opacity-70 disabled:cursor-not-allowed transition-colors shadow-md flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>Request Free Consultation</span>
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-center text-sm text-stone-500">
        Your information is secure and will never be shared.
      </p>
    </form>
  );
}
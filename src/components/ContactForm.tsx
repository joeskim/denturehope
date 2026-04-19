"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Please enter a valid email";
    if (!formData.phone.trim()) e.phone = "Phone is required";
    else if (!/^[\d\s\-()+ ]{10,}$/.test(formData.phone)) e.phone = "Please enter a valid phone number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = ev.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  if (isSubmitted) {
    return (
      <div style={{ padding: "32px 4px" }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-primary)",
            marginBottom: 16,
          }}
        >
          — Received
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 36,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--color-ink)",
            margin: 0,
            textWrap: "balance",
          }}
        >
          Thank you. We&rsquo;ll be in touch within one business day.
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            color: "var(--color-ink-soft)",
            marginTop: 20,
            lineHeight: 1.6,
          }}
        >
          If you&rsquo;d rather talk now, call{" "}
          <a href="tel:331.287.3420" style={{ color: "var(--color-ink)", borderBottom: "1px solid var(--color-ink)" }}>
            331.287.3420
          </a>
          .
        </p>
      </div>
    );
  }

  const field = (
    name: keyof FormData,
    label: string,
    type: string,
    placeholder: string,
    textarea = false,
  ) => (
    <label style={{ display: "block" }}>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--color-muted)",
          display: "block",
          marginBottom: 8,
        }}
      >
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          rows={3}
          style={{
            width: "100%",
            padding: "12px 0",
            background: "transparent",
            border: "none",
            borderBottom: `1px solid ${errors[name] ? "#B23A2A" : "var(--color-line)"}`,
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: "var(--color-ink)",
            outline: "none",
            resize: "none",
            lineHeight: 1.5,
          }}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          style={{
            width: "100%",
            padding: "12px 0",
            background: "transparent",
            border: "none",
            borderBottom: `1px solid ${errors[name] ? "#B23A2A" : "var(--color-line)"}`,
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: "var(--color-ink)",
            outline: "none",
          }}
        />
      )}
      {errors[name] && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "#B23A2A",
            marginTop: 6,
            display: "block",
          }}
        >
          {errors[name]}
        </span>
      )}
    </label>
  );

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 28 }}>
      {field("name", "Your name", "text", "Jane Doe")}
      {field("email", "Email", "email", "jane@example.com")}
      {field("phone", "Phone", "tel", "(555) 123-4567")}
      {field("message", "What should we know? (optional)", "text", "Current dentures, questions, timing…", true)}

      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          marginTop: 12,
          padding: "18px 28px",
          background: "var(--color-ink)",
          color: "var(--color-bg)",
          border: "none",
          borderRadius: 2,
          fontFamily: "var(--font-body)",
          fontSize: 15,
          fontWeight: 500,
          letterSpacing: "0.01em",
          cursor: isSubmitting ? "progress" : "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          opacity: isSubmitting ? 0.7 : 1,
        }}
      >
        {isSubmitting ? "Sending…" : "Request a free consultation"}
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>→</span>
      </button>

      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.08em",
          color: "var(--color-muted)",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        We never share your info. No obligation.
      </p>
    </form>
  );
}

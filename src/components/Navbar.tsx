"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "LM Bridge", href: "#lm-bridge" },
  { label: "About", href: "#about" },
  { label: "Stories", href: "#stories" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [w, setW] = useState(1400);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setW(window.innerWidth);
    const on = () => setW(window.innerWidth);
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);

  const isMobile = w < 800;
  const showPhone = w >= 1240;
  const visible = w >= 1240 ? LINKS
    : w >= 1000 ? LINKS.filter(l => ["Solutions", "LM Bridge", "Stories", "FAQ"].includes(l.label))
    : w >= 800 ? LINKS.filter(l => ["LM Bridge", "Stories", "FAQ"].includes(l.label))
    : [];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "var(--color-surface)",
        borderBottom: "1px solid var(--color-line)",
        fontFamily: "var(--font-body)",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 clamp(20px, 3vw, 40px)",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Link
          href="#top"
          style={{ display: "flex", alignItems: "center", flexShrink: 0, textDecoration: "none" }}
        >
          <Image
            src="/photos/updated_horizontal_logo_horizontal.png"
            alt="DentureHope by Halcyon Dental"
            width={180}
            height={45}
            priority
            style={{ height: 36, width: "auto", display: "block" }}
          />
        </Link>

        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: w >= 1240 ? 36 : 28,
              fontSize: 13,
              color: "var(--color-ink-soft)",
              whiteSpace: "nowrap",
              minWidth: 0,
            }}
          >
            {visible.map((l) => (
              <a key={l.label} href={l.href} style={{ color: "inherit", textDecoration: "none" }}>
                {l.label}
              </a>
            ))}
          </div>
        )}

        <div style={{ display: "flex", gap: 16, alignItems: "center", flexShrink: 0 }}>
          {showPhone && (
            <a
              href="tel:331.287.3420"
              style={{
                color: "var(--color-ink-soft)",
                fontSize: 13,
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              331.287.3420
            </a>
          )}
          {!isMobile && (
            <a
              href="#contact"
              style={{
                background: "var(--color-primary)",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: 999,
                fontSize: 13,
                textDecoration: "none",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              Free consult
            </a>
          )}
          {isMobile && (
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              style={{
                background: "transparent",
                border: "none",
                padding: 8,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span style={{ width: 22, height: 1.5, background: "var(--color-ink)", display: "block" }} />
              <span style={{ width: 22, height: 1.5, background: "var(--color-ink)", display: "block" }} />
              <span style={{ width: 22, height: 1.5, background: "var(--color-ink)", display: "block" }} />
            </button>
          )}
        </div>
      </div>

      {isMobile && menuOpen && (
        <div
          style={{
            background: "var(--color-surface)",
            borderTop: "1px solid var(--color-line)",
            padding: "20px clamp(20px, 3vw, 40px) 28px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: "var(--color-ink)",
                  textDecoration: "none",
                  padding: "12px 0",
                  fontSize: 15,
                  borderBottom: "1px solid var(--color-line)",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                background: "var(--color-primary)",
                color: "#fff",
                padding: "12px 20px",
                borderRadius: 999,
                fontSize: 14,
                textDecoration: "none",
                fontWeight: 500,
                flex: 1,
                textAlign: "center",
                minWidth: 140,
              }}
            >
              Free consult
            </a>
            <a
              href="tel:331.287.3420"
              style={{
                color: "var(--color-ink)",
                fontSize: 14,
                textDecoration: "none",
                padding: "12px 20px",
                border: "1px solid var(--color-line)",
                borderRadius: 999,
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.04em",
                textAlign: "center",
                flex: 1,
                minWidth: 140,
              }}
            >
              331.287.3420
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: "var(--color-ink)",
        color: "var(--color-bg)",
        fontFamily: "var(--font-body)",
        borderTop: "1px solid var(--color-ink)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "80px clamp(20px, 3vw, 48px) 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div>
            <Image
              src="/photos/updated_horizontal_logo_horizontal.png"
              alt="DentureHope by Halcyon Dental"
              width={180}
              height={40}
              style={{
                height: 32,
                width: "auto",
                filter: "brightness(0) invert(1)",
                marginBottom: 24,
              }}
            />
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                color: "var(--color-bg)",
                opacity: 0.65,
                maxWidth: 320,
                textWrap: "pretty",
              }}
            >
              Advanced implant dentistry for people tired of their dentures.
              One fixed bridge. No compromises.
            </p>
          </div>

          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-bg)",
                opacity: 0.4,
                marginBottom: 20,
              }}
            >
              Solutions
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12, fontSize: 14 }}>
              <li><Link href="#lm-bridge" style={{ color: "inherit", textDecoration: "none", opacity: 0.85 }}>LeClerq-Martinez Bridge</Link></li>
              <li><Link href="#solutions" style={{ color: "inherit", textDecoration: "none", opacity: 0.85 }}>4-Implant Hybrid</Link></li>
              <li><Link href="#solutions" style={{ color: "inherit", textDecoration: "none", opacity: 0.85 }}>2-Implant Overdenture</Link></li>
              <li><Link href="#financing" style={{ color: "inherit", textDecoration: "none", opacity: 0.85 }}>Financing</Link></li>
            </ul>
          </div>

          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-bg)",
                opacity: 0.4,
                marginBottom: 20,
              }}
            >
              Halcyon Dental
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12, fontSize: 14 }}>
              <li style={{ opacity: 0.85 }}>1940 W Galena Blvd #11</li>
              <li style={{ opacity: 0.85 }}>Aurora, IL 60506</li>
              <li>
                <a href="tel:331.287.3420" style={{ color: "inherit", textDecoration: "none", opacity: 0.85 }}>
                  331.287.3420
                </a>
              </li>
              <li>
                <a href="mailto:info@halcyon.dental" style={{ color: "inherit", textDecoration: "none", opacity: 0.85 }}>
                  info@halcyon.dental
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-bg)",
                opacity: 0.4,
                marginBottom: 20,
              }}
            >
              Hours
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12, fontSize: 14, opacity: 0.85 }}>
              <li>Mon · 8am–5pm</li>
              <li>Tue · 8am–5pm</li>
              <li>Thu · 8am–5pm</li>
              <li style={{ opacity: 0.6 }}>Closed Wed, Fri–Sun</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            paddingTop: 24,
            borderTop: "1px solid rgba(247,244,239,0.12)",
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.08em",
            color: "var(--color-bg)",
            opacity: 0.5,
            textTransform: "uppercase",
          }}
        >
          <span>© {year} Halcyon Dental PLLC</span>
          <span>3-year limited warranty · In-house lab · HIPAA-compliant</span>
        </div>
      </div>
    </footer>
  );
}

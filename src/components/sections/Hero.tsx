import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        background: "var(--color-ink)",
        color: "var(--color-bg)",
        paddingTop: 48,
        paddingBottom: "var(--space-section)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 clamp(20px, 3vw, 40px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
          marginBottom: 56,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        <div style={{ color: "var(--color-accent)" }}>Halcyon&nbsp;/&nbsp;DentureHope</div>
        <div style={{ color: "var(--color-bg)", opacity: 0.6 }}>
          CH. 01 · The problem with dentures →
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(20px, 3vw, 40px)" }}>
        <h1
          className="display"
          style={{
            fontSize: "clamp(56px, 11vw, 180px)",
            lineHeight: 0.88,
            letterSpacing: "-0.035em",
            color: "var(--color-bg)",
            margin: 0,
          }}
        >
          Dentures
          <br />
          <em
            style={{
              color: "var(--color-accent)",
              display: "inline-block",
              paddingLeft: "18vw",
            }}
          >
            don&rsquo;t
          </em>
          <br />
          have to be
          <br />
          <span style={{ color: "var(--color-accent)" }}>forever.</span>
        </h1>

        <div
          className="dh-hero-deck"
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr",
            gap: 40,
            alignItems: "start",
            borderTop: "1px solid rgba(242,239,233,0.12)",
            paddingTop: 32,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginBottom: 16,
              }}
            >
              The alternative
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 18,
                lineHeight: 1.5,
                color: "var(--color-bg)",
                opacity: 0.92,
                margin: 0,
                maxWidth: 460,
                textWrap: "pretty",
              }}
            >
              Our LeClerq-Martinez Bridge is a screw-retained, implant-supported restoration
              — perfected in Paris, delivered in Aurora — at half what European clinics charge.
            </p>
            <div style={{ marginTop: 28, display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
                  background: "var(--color-accent)",
                  color: "var(--color-ink)",
                  padding: "16px 24px",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  fontFamily: "var(--font-body)",
                  borderRadius: 0,
                }}
              >
                Book a free consultation →
              </a>
              <a
                href="tel:331.287.3420"
                style={{
                  color: "var(--color-bg)",
                  fontSize: 13,
                  textDecoration: "none",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.08em",
                  opacity: 0.7,
                }}
              >
                331.287.3420
              </a>
            </div>
          </div>

          <div>
            <div
              style={{
                position: "relative",
                aspectRatio: "3 / 4",
                overflow: "hidden",
                background: "#1a1a1a",
              }}
            >
              <Image
                src="/photos/older-patient-smile.jpg"
                alt="Halcyon Dental patient after LM Bridge restoration"
                fill
                sizes="(max-width: 900px) 100vw, 320px"
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
                priority
              />
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-bg)",
                opacity: 0.5,
                marginTop: 10,
              }}
            >
              PATIENT · D.J., AURORA IL
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-bg)",
                opacity: 0.5,
                marginBottom: 16,
              }}
            >
              Specifications
            </div>
            <div
              style={{
                display: "grid",
                gap: 12,
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "var(--color-bg)",
              }}
            >
              {[
                ["Implants per arch", "6–10"],
                ["Framework", "Titanium, screw-retained"],
                ["Per-arch fee", "$8,700"],
                ["Warranty", "3 years, limited"],
                ["Temporary", "Same-week"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingBottom: 10,
                    borderBottom: "1px solid rgba(242,239,233,0.12)",
                  }}
                >
                  <span style={{ opacity: 0.55 }}>{k}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dh-hero-deck { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

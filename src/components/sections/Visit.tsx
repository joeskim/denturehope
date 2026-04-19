import ContactForm from "@/components/ContactForm";

export default function Visit() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--color-surface)",
        padding: "var(--space-section) 0",
        borderTop: "1px solid var(--color-line)",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(20px, 3vw, 48px)" }}>
        <div
          className="dh-visit-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            border: "1px solid var(--color-line)",
          }}
        >
          <div
            style={{
              padding: "64px clamp(24px, 4vw, 56px)",
              borderRight: "1px solid var(--color-line)",
              background: "var(--color-surface)",
            }}
          >
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              Visit us
            </div>
            <h2
              className="display"
              style={{ fontSize: "clamp(30px, 4vw, 56px)", margin: 0 }}
            >
              1940 W Galena Blvd #11,
              <br />
              Aurora, IL 60506.
            </h2>

            <div
              style={{
                marginTop: 40,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-muted)",
                    marginBottom: 10,
                  }}
                >
                  Hours
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--color-ink-soft)",
                  }}
                >
                  Mon · 8am–5pm
                  <br />
                  Tue · 8am–5pm
                  <br />
                  Thu · 8am–5pm
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-muted)",
                    marginBottom: 10,
                  }}
                >
                  Contact
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--color-ink-soft)",
                  }}
                >
                  <a
                    href="tel:331.287.3420"
                    style={{ color: "inherit", textDecoration: "none", display: "block" }}
                  >
                    331.287.3420
                  </a>
                  <a
                    href="mailto:info@halcyon.dental"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    info@halcyon.dental
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=1940+W+Galena+Blvd+%2311,+Aurora,+IL+60506"
              target="_blank"
              rel="noreferrer"
              style={{
                marginTop: 40,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "var(--color-ink)",
                color: "var(--color-bg)",
                padding: "16px 24px",
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              Open in Google Maps →
            </a>
          </div>

          <div
            style={{
              background: "var(--color-bg)",
              padding: "64px clamp(24px, 4vw, 56px)",
            }}
          >
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              Free consultation
            </div>
            <h3
              className="display"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", margin: "0 0 32px" }}
            >
              No pressure, no obligation. Just honest answers.
            </h3>
            <ContactForm />
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .dh-visit-grid { grid-template-columns: 1fr !important; }
            .dh-visit-grid > div:first-child { border-right: none !important; border-bottom: 1px solid var(--color-line); }
          }
        `}</style>
      </div>
    </section>
  );
}

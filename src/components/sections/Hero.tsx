import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        background: "var(--color-bg)",
        color: "var(--color-ink)",
        paddingTop: 80,
        paddingBottom: 112,
        borderBottom: "1px solid var(--color-line)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(20px, 3vw, 48px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-muted)",
          marginBottom: 64,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div>Halcyon Dental · Est. Aurora, IL</div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          <span>Dental Implant Specialists</span>
          <span style={{ color: "var(--color-primary)" }}>● Accepting new patients</span>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(20px, 3vw, 48px)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 7fr) minmax(0, 5fr)",
          gap: 80,
          alignItems: "end",
        }}
        className="dh-hero-grid"
      >
        <div>
          <div className="eyebrow" style={{ marginBottom: 32 }}>
            A quiet revolution in full-arch dentistry
          </div>

          <h1
            className="display"
            style={{
              fontSize: "clamp(48px, 7.5vw, 104px)",
              lineHeight: 0.98,
              margin: 0,
            }}
          >
            The last set of teeth
            <br />
            you&rsquo;ll ever{" "}
            <em style={{ color: "var(--color-primary)" }}>need.</em>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 19,
              lineHeight: 1.55,
              color: "var(--color-ink-soft)",
              marginTop: 40,
              maxWidth: 540,
              textWrap: "pretty",
            }}
          >
            If dentures have turned eating, speaking, and smiling into daily negotiations —
            the LeClerq-Martinez Implant Bridge ends that. Six to ten implants. One fixed
            bridge. Your life, unchanged by teeth.
          </p>

          <div style={{ marginTop: 40, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                background: "var(--color-ink)",
                color: "var(--color-bg)",
                padding: "18px 28px",
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "0.01em",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-body)",
                borderRadius: 2,
              }}
            >
              Book a free consultation
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>→</span>
            </a>
            <a
              href="tel:331.287.3420"
              style={{
                color: "var(--color-ink)",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: "none",
                fontFamily: "var(--font-body)",
                borderBottom: "1px solid var(--color-ink)",
                paddingBottom: 4,
              }}
            >
              or call 331.287.3420
            </a>
          </div>
        </div>

        <div>
          <div
            style={{
              position: "relative",
              aspectRatio: "4 / 5",
              overflow: "hidden",
              background: "var(--color-line)",
            }}
          >
            <Image
              src="/photos/older-patient-smile.jpg"
              alt="Halcyon Dental patient after LM Bridge restoration"
              fill
              sizes="(max-width: 900px) 100vw, 520px"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
              priority
            />
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.08em",
              color: "var(--color-muted)",
              marginTop: 16,
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <span>PATIENT · D.J., AURORA IL</span>
            <span>RESTORATION · LM BRIDGE × 2</span>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "120px auto 0",
          padding: "0 clamp(20px, 3vw, 48px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: 48,
          borderTop: "1px solid var(--color-line)",
          paddingTop: 40,
        }}
      >
        {[
          { num: "10,000+", label: "Implant procedures performed" },
          { num: "$8,700", label: "Per arch · half the US average" },
          { num: "3-year", label: "Limited warranty, included" },
          { num: "4.9 / 5", label: "Verified patient rating" },
        ].map((s) => (
          <div key={s.label}>
            <div
              className="display"
              style={{ fontSize: 40, color: "var(--color-primary)", lineHeight: 1 }}
            >
              {s.num}
            </div>
            <div
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "var(--color-ink-soft)",
                marginTop: 12,
                lineHeight: 1.4,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .dh-hero-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
      `}</style>
    </section>
  );
}

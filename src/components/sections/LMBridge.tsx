import SectionHeader from "./SectionHeader";

const BENEFITS = [
  ["Screw-retained framework", "Superior stability across 6–10 implants."],
  ["Individual crown repair", "Any competent dentist can replace a single crown — no bridge removal."],
  ["Less tissue shrinkage", "More implants means bone and gum loss is less of an aesthetic problem."],
  ["Natural feel", "No bulky plastic toward the roof of your mouth."],
  ["Maximum longevity", "A rigid titanium frame connects all implants for lasting results."],
];

const CONCERNS = [
  "What if one of those four implants fails?",
  "What if a tooth chips or breaks?",
  "What happens when bone and gum shrink dramatically over time?",
  "What do patients wear while their bridge is being repaired?",
];

export default function LMBridge() {
  return (
    <section
      id="lm-bridge"
      style={{
        background: "var(--color-surface)",
        padding: "112px 0",
        borderTop: "1px solid var(--color-line)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 3vw, 48px)" }}>
        <SectionHeader
          eyebrow="The premium solution"
          title="The LeClerq-Martinez Implant Bridge."
          intro="Perfected by Dr. Philippe LeClerq of Paris and his master technician Jean-François Martinez. Delivered in Aurora at less than half what European clinics charge — with a 3-year limited warranty included."
        />

        <div
          className="dh-lm-grid"
          style={{
            marginTop: 72,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
            alignItems: "start",
          }}
        >
          <div style={{ display: "grid", gap: 32 }}>
            <div
              style={{
                padding: 40,
                background: "var(--color-bg)",
                border: "1px solid var(--color-line)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-primary)",
                  marginBottom: 20,
                }}
              >
                Why choose the LM Bridge
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 20 }}>
                {BENEFITS.map(([title, desc]) => (
                  <li key={title} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 16 }}>
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "var(--color-primary)",
                        marginTop: 9,
                      }}
                    />
                    <div>
                      <div style={{ fontWeight: 500, color: "var(--color-ink)", fontSize: 15 }}>{title}</div>
                      <div
                        style={{
                          color: "var(--color-ink-soft)",
                          fontSize: 14,
                          marginTop: 4,
                          lineHeight: 1.5,
                        }}
                      >
                        {desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                padding: 40,
                background: "var(--color-ink)",
                color: "var(--color-bg)",
              }}
            >
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
                Best value in the US
              </div>
              <div
                className="display"
                style={{ fontSize: "clamp(32px, 3.5vw, 44px)", color: "var(--color-bg)", lineHeight: 1.05 }}
              >
                $8,700 per arch.
              </div>
              <p
                style={{
                  marginTop: 20,
                  fontSize: 15,
                  lineHeight: 1.6,
                  opacity: 0.78,
                  textWrap: "pretty",
                }}
              >
                European clinics list the LM Bridge at $50,000+ per arch. We deliver the same
                restoration at less than half — because our implant laboratory is in-house.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gap: 32 }}>
            <div style={{ padding: 40, border: "1px solid var(--color-line)", background: "var(--color-surface)" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                  marginBottom: 20,
                }}
              >
                The problem with 4-implant hybrids
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 16 }}>
                {CONCERNS.map((q) => (
                  <li
                    key={q}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      gap: 12,
                      color: "var(--color-ink-soft)",
                      fontSize: 15,
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: "var(--color-muted)" }}>—</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
              <p
                style={{
                  marginTop: 28,
                  paddingTop: 20,
                  borderTop: "1px solid var(--color-line)",
                  fontSize: 15,
                  color: "var(--color-primary)",
                  fontWeight: 500,
                }}
              >
                The LM Bridge answers every one of these.
              </p>
            </div>

            <div
              style={{
                padding: 40,
                background: "var(--color-primary-soft)",
                borderLeft: "2px solid var(--color-accent)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-primary)",
                  marginBottom: 12,
                }}
              >
                Included with every restoration
              </div>
              <div style={{ fontSize: 18, lineHeight: 1.55, color: "var(--color-ink)", textWrap: "pretty" }}>
                A <strong>3-year limited warranty</strong> on all final restorations at no
                additional cost. The peace of mind of knowing your surgery and reconstruction
                were done properly — built in.
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .dh-lm-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

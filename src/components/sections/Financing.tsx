const PLANS = [
  { term: "12 months", pmt: "$725 / mo", apr: "0% APR* · qualified applicants" },
  { term: "24 months", pmt: "$395 / mo", apr: "7.9% APR · typical" },
  { term: "60 months", pmt: "$178 / mo", apr: "9.9% APR · extended term" },
];

export default function Financing() {
  return (
    <section
      id="financing"
      style={{ background: "var(--color-ink)", color: "var(--color-bg)", padding: "var(--space-section) 0" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 3vw, 48px)" }}>
        <div
          className="dh-fin-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start" }}
        >
          <div>
            <div
              className="eyebrow"
              style={{ color: "var(--color-accent)", marginBottom: 20 }}
            >
              Financing & payment
            </div>
            <h2
              className="display"
              style={{
                fontSize: "clamp(32px, 4.5vw, 60px)",
                color: "var(--color-bg)",
                margin: 0,
              }}
            >
              Pay monthly, not all at once.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 18,
                lineHeight: 1.55,
                color: "var(--color-bg)",
                opacity: 0.8,
                marginTop: 24,
                textWrap: "pretty",
              }}
            >
              Approval usually takes under 60 seconds and won&rsquo;t ding your credit.
              Below is a typical range for an $8,700 per-arch LM Bridge.
            </p>
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            {PLANS.map((p) => (
              <div
                key={p.term}
                className="dh-fin-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.2fr 1.5fr",
                  alignItems: "center",
                  gap: 24,
                  padding: "28px 32px",
                  background: "rgba(247,244,239,0.03)",
                  border: "1px solid rgba(247,244,239,0.12)",
                  borderRadius: 2,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    letterSpacing: "0.08em",
                    opacity: 0.6,
                    textTransform: "uppercase",
                  }}
                >
                  {p.term}
                </div>
                <div
                  className="display"
                  style={{ fontSize: 32, color: "var(--color-accent)", lineHeight: 1 }}
                >
                  {p.pmt}
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13, opacity: 0.65 }}>
                  {p.apr}
                </div>
              </div>
            ))}
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.06em",
                opacity: 0.4,
                marginTop: 8,
              }}
            >
              *Estimates. Actual terms depend on credit profile & loan partner. Cherry, CareCredit, LendingPoint, Sunbit.
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .dh-fin-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            .dh-fin-row { grid-template-columns: 1fr !important; gap: 8px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

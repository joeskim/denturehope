import Image from "next/image";
import SectionHeader from "./SectionHeader";

const CASES = [
  {
    name: "Dental Fiasco · Close view",
    tx: "Full arch restoration",
    before: "/photos/DF-Before-Close.jpg",
    after: "/photos/DF-After-Close.jpg",
  },
  {
    name: "Dental Fiasco · Occlusal",
    tx: "Upper arch, top-down",
    before: "/photos/DF-Before-Occlusal.jpg",
    after: "/photos/DF-After-Occlusal.jpg",
  },
  {
    name: "Terminal Bite · Occlusal",
    tx: "Full rebuild",
    before: "/photos/TB-Before-Occlusal.jpg",
    after: "/photos/TB-After-Occlusal.jpg",
  },
];

export default function BeforeAfter() {
  return (
    <section
      id="stories"
      style={{
        background: "var(--color-bg)",
        padding: "112px 0",
        borderTop: "1px solid var(--color-line)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 3vw, 48px)" }}>
        <SectionHeader
          eyebrow="Before / After"
          title="Eighteen years of eating around food."
          intro="Every case below is a real Halcyon patient. Final photos are taken at the delivery appointment — no filters, no retouching."
        />

        <div
          className="dh-ba-grid"
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {CASES.map((c) => (
            <div key={c.name}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                <div
                  style={{
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                    background: "var(--color-line)",
                    position: "relative",
                  }}
                >
                  <Image
                    src={c.before}
                    alt={`${c.name} — before`}
                    fill
                    sizes="(max-width: 900px) 50vw, 300px"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 10,
                      top: 10,
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#fff",
                      background: "rgba(0,0,0,0.6)",
                      padding: "4px 8px",
                    }}
                  >
                    Before
                  </div>
                </div>
                <div
                  style={{
                    aspectRatio: "1 / 1",
                    overflow: "hidden",
                    background: "var(--color-line)",
                    position: "relative",
                  }}
                >
                  <Image
                    src={c.after}
                    alt={`${c.name} — after`}
                    fill
                    sizes="(max-width: 900px) 50vw, 300px"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: 10,
                      top: 10,
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#fff",
                      background: "var(--color-primary)",
                      padding: "4px 8px",
                    }}
                  >
                    After
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  color: "var(--color-ink-soft)",
                  marginTop: 16,
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <span>{c.name}</span>
                <span style={{ color: "var(--color-muted)" }}>{c.tx}</span>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) { .dh-ba-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}

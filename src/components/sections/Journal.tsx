import Image from "next/image";

const POSTS = [
  {
    cat: "Education",
    time: "7 min read",
    title: "Why 4 implants isn't always enough — and when it is.",
    cover: "/photos/DF-Lab-Translucency.jpg",
  },
  {
    cat: "Cost",
    time: "4 min read",
    title: "The real price of dental tourism, in plain numbers.",
    cover: "/photos/DF-Frame-Close.jpg",
  },
  {
    cat: "Recovery",
    time: "6 min read",
    title: "A week-by-week guide to healing after implant surgery.",
    cover: "/photos/TB-Frame-Occlusal.jpg",
  },
];

export default function Journal() {
  return (
    <section
      style={{
        background: "var(--color-bg)",
        padding: "var(--space-section) 0",
        borderTop: "1px solid var(--color-line)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 3vw, 48px)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 56,
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              Journal
            </div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4.5vw, 60px)", margin: 0 }}>
              Straight talk about implants.
            </h2>
          </div>
          <a
            href="#"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-ink)",
              textDecoration: "none",
              borderBottom: "1px solid var(--color-ink)",
              paddingBottom: 4,
            }}
          >
            All articles →
          </a>
        </div>

        <div
          className="dh-journal-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}
        >
          {POSTS.map((p) => (
            <a key={p.title} href="#" style={{ textDecoration: "none", color: "inherit", display: "block" }}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "3 / 2",
                  overflow: "hidden",
                  background: "var(--color-line)",
                }}
              >
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 400px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginTop: 20,
                }}
              >
                {p.cat} · {p.time}
              </div>
              <h3
                className="display"
                style={{ fontSize: 24, marginTop: 12, lineHeight: 1.2, color: "var(--color-ink)" }}
              >
                {p.title}
              </h3>
            </a>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) { .dh-journal-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}

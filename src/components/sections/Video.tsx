import SectionHeader from "./SectionHeader";

export default function Video() {
  return (
    <section
      style={{
        background: "var(--color-surface)",
        padding: "var(--space-section) 0",
        borderTop: "1px solid var(--color-line)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 3vw, 48px)" }}>
        <SectionHeader
          eyebrow="In their own words"
          title="A few minutes with the people who've been through it."
          intro="These are unedited conversations with patients — on their first meal out, on going back to work, on what they wish they'd done sooner."
        />

        <div
          className="dh-video-grid"
          style={{
            marginTop: 32,
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 24,
            alignItems: "start",
          }}
        >
          <figure style={{ margin: 0 }}>
            <div
              style={{
                position: "relative",
                aspectRatio: "16 / 9",
                overflow: "hidden",
                background: "var(--color-line)",
              }}
            >
              <video
                src="/photos/halcyondental-fb2.mp4"
                controls
                preload="metadata"
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <figcaption
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
              <span>Featured · Halcyon Dental story</span>
              <span style={{ color: "var(--color-muted)" }}>LM BRIDGE · BOTH ARCHES</span>
            </figcaption>
          </figure>

          <figure style={{ margin: 0 }}>
            <div
              style={{
                position: "relative",
                aspectRatio: "9 / 16",
                overflow: "hidden",
                background: "var(--color-line)",
              }}
            >
              <video
                src="/photos/noodlearms-update.mp4"
                controls
                preload="metadata"
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <figcaption
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
              <span>Short · Patient update</span>
              <span style={{ color: "var(--color-muted)" }}>POST-OP</span>
            </figcaption>
          </figure>
        </div>

        <style>{`
          @media (max-width: 900px) { .dh-video-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
}

import ChatBot from "@/components/ChatBot";

export default function AskAssistant() {
  return (
    <section
      id="about"
      style={{
        background: "var(--color-bg)",
        padding: "112px 0",
        borderTop: "1px solid var(--color-line)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 3vw, 48px)" }}>
        <div
          className="dh-ask-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              Before you pick up the phone
            </div>
            <h2
              className="display"
              style={{ fontSize: "clamp(32px, 4.5vw, 60px)", margin: 0 }}
            >
              Ask anything. <em>We&rsquo;ll answer plainly.</em>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 18,
                lineHeight: 1.6,
                color: "var(--color-ink-soft)",
                marginTop: 24,
                textWrap: "pretty",
              }}
            >
              Cost, timelines, financing, what happens if something chips in year three —
              ask whatever&rsquo;s keeping you up. The assistant pulls from our real
              treatment notes. For anything specific to your case, the consultation is free.
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                marginTop: 40,
                display: "grid",
                gap: 14,
                fontFamily: "var(--font-body)",
                fontSize: 15,
                color: "var(--color-ink-soft)",
              }}
            >
              {[
                "What a full-arch case actually costs, line by line.",
                "Healing timeline and what temporaries look like.",
                "Financing options — and what each approval looks like.",
                "How the LM Bridge compares to 4-implant hybrids.",
              ].map((x) => (
                <li key={x} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 12 }}>
                  <span style={{ color: "var(--color-accent)", fontFamily: "var(--font-mono)" }}>→</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ChatBot />
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) { .dh-ask-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        `}</style>
      </div>
    </section>
  );
}

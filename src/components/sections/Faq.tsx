"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const ITEMS: Array<[string, string]> = [
  [
    "Will it really cost less than half of what I'd pay overseas?",
    "Yes. The LeClerq-Martinez Bridge routinely runs $50,000+ per arch at European clinics. We deliver the same restoration at $8,700 per arch because our implant laboratory is in-house — no third-party labs or middlemen adding margin.",
  ],
  [
    "Is the procedure painful?",
    "Most patients describe it as uneventful. We offer both IV and oral conscious sedation, so the surgical appointment feels like a nap. Soreness afterward typically subsides within a few days, and we stay in close touch during healing.",
  ],
  [
    "How long from first visit to final teeth?",
    "You'll leave surgery day with a fixed temporary. The final bridge is delivered once the implants have integrated — usually 3 to 6 months later, depending on whether grafting was required.",
  ],
  [
    "What happens if a tooth chips in 5 years?",
    "That's precisely why we use the LM design. A single crown can be replaced in a single appointment — any competent dentist can do it — without removing the bridge. With 4-implant hybrids, the whole bridge comes off.",
  ],
  [
    "Do you work with insurance?",
    "We bill most major PPO plans. Since every case is different, we'll confirm coverage and present exact numbers before any treatment begins. We also offer in-house financing.",
  ],
  [
    "I'm only 52 — am I too young for this?",
    "Not at all. Many of our patients are in their 50s. The sooner implants are placed after extractions or denture use, the better the bone retention and aesthetic outcome.",
  ],
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      style={{
        background: "var(--color-bg)",
        padding: "112px 0",
        borderTop: "1px solid var(--color-line)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(20px, 3vw, 48px)" }}>
        <SectionHeader eyebrow="Honest answers" title="Questions we get asked every week." />
        <div style={{ marginTop: 56, borderTop: "1px solid var(--color-line)" }}>
          {ITEMS.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <div key={q} style={{ borderBottom: "1px solid var(--color-line)" }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "28px 0",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 32,
                    color: "var(--color-ink)",
                  }}
                >
                  <span
                    className="display"
                    style={{ fontSize: "clamp(20px, 2.1vw, 28px)", lineHeight: 1.25 }}
                  >
                    {q}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 14,
                      color: "var(--color-accent)",
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? "—" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      paddingBottom: 32,
                      paddingRight: 60,
                      fontFamily: "var(--font-body)",
                      fontSize: 17,
                      lineHeight: 1.6,
                      color: "var(--color-ink-soft)",
                      textWrap: "pretty",
                    }}
                  >
                    {a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

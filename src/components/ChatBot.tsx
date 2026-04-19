"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialResponses = [
  "Happy to help. Is your main concern the cost, the procedure itself, or how long the teeth will last?",
  "Good question. Would you like to know about the LM Bridge, 4-implant hybrid, or 2-implant overdenture?",
  "The free consultation is the fastest way to get exact answers for your case. Want me to pass along your availability?",
];

const knowledgeBase: Record<string, string> = {
  cost: "The LeClerq-Martinez Bridge is $8,700 per arch — roughly half what European clinics charge for the same restoration. 2-implant overdenture starts around $3,000–$6,500 per arch; 4-implant hybrid is also $8,700. Every case is scoped and priced before we start.",
  pain: "Most patients describe the surgical appointment as uneventful. We offer IV and oral conscious sedation, so it feels like a nap. Soreness after typically subsides within a few days.",
  time: "You leave surgery day with a fixed temporary. The final bridge is delivered once implants have integrated — usually 3 to 6 months later, depending on whether grafting was required.",
  "all-on-4":
    "The 4-implant approach works for some cases, but it has tradeoffs — single crown repairs, bone shrinkage, temporization during repairs. The LM Bridge uses 6–10 implants at the same per-arch fee and is engineered around those exact problems.",
  consultation:
    "The free consultation covers a review of your history, an exam, a discussion of goals, all options, and a written treatment plan — no obligation. Call 331.287.3420 or use the form below.",
  insurance:
    "We bill most major PPO plans and offer in-house financing (Cherry, CareCredit, LendingPoint, Sunbit). Approval typically runs under 60 seconds and doesn't hit your credit.",
  "lm bridge":
    "The LeClerq-Martinez Bridge is a fixed, screw-retained restoration — 6–10 implants with individual crowns in a rigid titanium frame. Perfected in Paris by Dr. LeClerq and technician Jean-François Martinez. Delivered in Aurora at roughly half the European price. Includes a 3-year limited warranty.",
  sedation:
    "We offer IV and oral conscious sedation. Most patients have little to no memory of the appointment and we can accomplish more in one sitting.",
  warranty:
    "3-year limited warranty on final restorations, included at no additional cost. Single crowns are repairable without removing the bridge — any competent dentist can do it.",
};

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi — I answer questions about the LM Bridge and other implant options. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const didMount = useRef(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    if (!didMount.current) {
      // First render: jump without scrolling the page.
      el.scrollTop = el.scrollHeight;
      didMount.current = true;
      return;
    }
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const generate = (msg: string) => {
    const lower = msg.toLowerCase();
    for (const [k, v] of Object.entries(knowledgeBase)) if (lower.includes(k)) return v;
    if (lower.match(/schedule|appointment|book/))
      return "Call 331.287.3420, email info@halcyon.dental, or fill in the form below with a time that works.";
    if (lower.match(/^(hi|hello|hey)/))
      return "Hello. Is there a specific concern about dentures or implants I can answer?";
    return initialResponses[Math.floor(Math.random() * initialResponses.length)];
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!input.trim()) return;
    const userMessage = input;
    setInput("");
    setMessages((p) => [...p, { role: "user", content: userMessage }]);
    setIsTyping(true);
    setTimeout(() => {
      setMessages((p) => [...p, { role: "assistant", content: generate(userMessage) }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: 520,
        background: "var(--color-surface)",
        border: "1px solid var(--color-line)",
        fontFamily: "var(--font-body)",
      }}
    >
      <div
        style={{
          padding: "18px 24px",
          borderBottom: "1px solid var(--color-line)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-ink-soft)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--color-primary)",
              display: "inline-block",
            }}
          />
          Assistant · Typically answers in seconds
        </div>
      </div>

      <div ref={listRef} style={{ flex: 1, overflowY: "auto", padding: "24px", display: "flex", flexDirection: "column", gap: 16 }}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              alignSelf: m.role === "user" ? "flex-end" : "flex-start",
              maxWidth: "85%",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                marginBottom: 6,
              }}
            >
              {m.role === "user" ? "You" : "Halcyon"}
            </div>
            <div
              style={{
                padding: "14px 18px",
                background: m.role === "user" ? "var(--color-ink)" : "var(--color-primary-soft)",
                color: m.role === "user" ? "var(--color-bg)" : "var(--color-ink)",
                fontSize: 14,
                lineHeight: 1.55,
                borderRadius: 2,
                whiteSpace: "pre-wrap",
              }}
            >
              {m.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div style={{ alignSelf: "flex-start", display: "flex", gap: 6, padding: "14px 18px" }}>
            {[0, 150, 300].map((d) => (
              <span
                key={d}
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--color-muted)",
                  animation: "dh-bounce 1s infinite",
                  animationDelay: `${d}ms`,
                  display: "inline-block",
                }}
              />
            ))}
            <style jsx>{`
              @keyframes dh-bounce {
                0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
                40% { transform: translateY(-4px); opacity: 1; }
              }
            `}</style>
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          padding: 16,
          borderTop: "1px solid var(--color-line)",
          display: "flex",
          gap: 8,
          alignItems: "stretch",
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about cost, healing, financing…"
          style={{
            flex: 1,
            padding: "14px 16px",
            background: "var(--color-bg)",
            border: "1px solid var(--color-line)",
            borderRadius: 2,
            fontFamily: "var(--font-body)",
            fontSize: 14,
            color: "var(--color-ink)",
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={!input.trim()}
          style={{
            padding: "14px 22px",
            background: input.trim() ? "var(--color-ink)" : "var(--color-line)",
            color: input.trim() ? "var(--color-bg)" : "var(--color-muted)",
            border: "none",
            borderRadius: 2,
            fontFamily: "var(--font-body)",
            fontSize: 14,
            cursor: input.trim() ? "pointer" : "not-allowed",
          }}
        >
          Send →
        </button>
      </form>
    </div>
  );
}

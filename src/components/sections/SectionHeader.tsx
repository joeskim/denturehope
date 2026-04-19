import { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
};

export default function SectionHeader({ eyebrow, title, intro, align = "left" }: Props) {
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === "center" ? 780 : "none",
        margin: align === "center" ? "0 auto" : 0,
      }}
    >
      <div
        className="eyebrow"
        style={{ justifyContent: align === "center" ? "center" : "flex-start", marginBottom: 20 }}
      >
        {eyebrow}
      </div>
      <h2
        className="display"
        style={{
          fontSize: "clamp(32px, 4.5vw, 64px)",
          margin: 0,
        }}
      >
        {title}
      </h2>
      {intro && (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 18,
            lineHeight: 1.55,
            color: "var(--color-ink-soft)",
            marginTop: 24,
            textWrap: "pretty",
          }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

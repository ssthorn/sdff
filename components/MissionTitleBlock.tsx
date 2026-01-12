import React from "react";

type MissionTitleBlockProps = {
  accent: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
};

export default function MissionTitleBlock({
  accent,
  className = "",
  as = "h1",
}: MissionTitleBlockProps) {
  const Heading = as;

  return (
    <section className={`mission-title-section ${className}`.trim()}>
      <Heading className="mission-hero-title">
        San Diego
        <br />
        Independent
        <br />
        <span className="whitespace-nowrap">Film Fest</span>
        <br />
        <span className="mission-hero-accent">{accent}</span>
      </Heading>
    </section>
  );
}

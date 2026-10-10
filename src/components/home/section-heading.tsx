import type { ReactNode } from "react";
export function SectionHeading({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`section-heading ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{children}</h2>
    </div>
  );
}

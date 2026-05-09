import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <div
      className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 ${alignCls}`}
    >
      <div className={`max-w-2xl ${alignCls}`}>
        {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
        <h2 className="display text-4xl md:text-5xl">{title}</h2>
        {intro && (
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            {intro}
          </p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

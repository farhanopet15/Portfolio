import { ReactNode } from "react";

interface SectionProps {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, label, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="relative mx-auto mt-10 max-w-6xl px-6 py-14 border-t border-white/5"
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-[9px] uppercase tracking-[0.25em] text-cyan-400/80">
            {label}
          </p>
          <h2 className="mt-1 text-xl sm:text-2xl font-semibold tracking-[0.08em] text-slate-50">
            {title}
          </h2>
        </div>
        <div className="hidden text-[8px] text-slate-500 sm:block">
          SCROLL • EXPLORE • DEPLOY
        </div>
      </div>
      <div className="text-sm leading-relaxed">{children}</div>
    </section>
  );
}

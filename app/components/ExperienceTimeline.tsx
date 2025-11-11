"use client";

const experience = [
  {
    period: "2025 — Present",
    role: "FullStack Developer",
    company: "PT. Dumbways Indonesia",
    detail:
      "Developed full-stack web applications using Next.js, TailwindCSS, and Node.js with a focus on clean design and optimized performance.",
  },
  {
    period: "2021 — 2022",
    role: "Assistant Legal",
    company: "Government of West Java Province",
    detail:
      "Handled legal documentation, conducted research and analysis, and assisted with legal coordination and communications.",
  },
  {
    period: "2024 — 2025",
    role: "PIC (Person in Charge)",
    company: "PT. Artdeco Sejahtera Abadi",
    detail:
      "Responsible for planning and coordination, communication and reporting, as well as supervision and evaluation of project activities.",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-[8px] top-0 bottom-0 w-px bg-slate-700/50" />

      <ul className="space-y-8 pl-8">
        {experience.map((item, idx) => (
          <li key={idx} className="relative">
            <div className="absolute left-[-4px] top-[3px] h-[6px] w-[8px] rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

            <div className="ml-2">
              <p className="text-[10px] uppercase tracking-[0.18em] text-cyan-400/80 mb-1">
                {item.period}
              </p>
              <p className="text-sm font-semibold text-slate-50 leading-snug">
                {item.role} ·{" "}
                <span className="text-slate-400 font-normal">
                  {item.company}
                </span>
              </p>
              <p className="text-[11px] text-slate-400 mt-1 max-w-2xl leading-relaxed">
                {item.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

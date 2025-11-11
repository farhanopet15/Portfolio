const experience = [
  {
    period: "2025 — Present",
    role: "FullStack Developer",
    company: "PT.Dumbways Indonesia",
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
      <div className="absolute left-1.5 top-0 bottom-0 w-px bg-slate-700/60" />
      <ul className="space-y-6 pl-6">
        {experience.map((item, idx) => (
          <li key={idx} className="relative">
            <div className="absolute -left-2 top-1 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            <p className="text-[9px] uppercase tracking-[0.18em] text-cyan-400/80">
              {item.period}
            </p>
            <p className="text-sm font-semibold text-slate-50 mt-0.5">
              {item.role} ·{" "}
              <span className="text-slate-400 font-normal">{item.company}</span>
            </p>
            <p className="text-[11px] text-slate-400 mt-1 max-w-2xl">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

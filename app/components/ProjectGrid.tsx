const projects = [
  {
    title: "AutoVerse",
    tag: "Real-time Dashboard",
    tech: "Next.js · TypeScript",
    desc: "Data management with interactive visualizations.",
    link: "https://autoverse-fe.vercel.app/",
  },
  {
    title: "Digital Business Card",
    tag: "Secure API Platform",
    tech: "Next.js · Express",
    desc: "A simple and elegant web app for creating digital business cards.",
    link: "https://digital-business-card-fe.vercel.app/",
  },
  {
    title: "NetWorkers",
    tag: "Headless Storefront",
    tech: "Next.js · N8N · Docker",
    desc: "A platform that helps users connect with local workers easily.",
    link: "https://net-workers.netlify.app/",
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {projects.map((p) => (
        <a
          key={p.title}
          href={p.link}
          className="group relative flex flex-col justify-between rounded-2xl border border-white/5 bg-white/2 px-4 py-4 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition"
        >
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="text-[8px] uppercase tracking-[0.18em] text-cyan-400/90">
              {p.tag}
            </span>
            <span className="text-[8px] text-slate-500 group-hover:text-cyan-300 transition">
              View Case →
            </span>
          </div>
          <h3 className="text-sm font-semibold text-slate-50 mb-1">
            {p.title}
          </h3>
          <p className="text-[10px] text-slate-400 mb-2">{p.desc}</p>
          <p className="mt-auto text-[9px] text-slate-500">{p.tech}</p>
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-400/2 to-transparent" />
        </a>
      ))}
    </div>
  );
}

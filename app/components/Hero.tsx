import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] items-center justify-center pt-24 pb-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="relative w-full max-w-md">
          <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-b from-white/5 to-black/90 shadow-[0_0_80px_rgba(0,255,255,0.15)]">
            <Image
              src="/profile.png"
              alt="Neon masked developer silhouette"
              width={600}
              height={800}
              priority
              className="w-full object-cover mix-blend-screen"
            />
          </div>
          <div className="absolute -bottom-4 left-6 rounded-full bg-black/80 px-4 py-1 text-[9px] uppercase tracking-[0.18em] text-cyan-300 border border-cyan-400/40">
            Full Stack Developer
          </div>
        </div>

        <div className="flex max-w-xl flex-col items-center gap-5 text-center lg:items-end lg:text-right">
          <h1 className="text-5xl lg:text-6xl font-semibold tracking-[0.12em]">
            <span className="text-slate-100">Ahmad</span>{" "}
            <span className="text-cyan-400">Farhan Walidain</span>
          </h1>
          <p className="text-[11px] text-slate-300 max-w-md"></p>
          <div className="mt-3 flex flex-wrap justify-center gap-3 lg:justify-end">
            <a
              href="#projects"
              className="px-5 py-2 text-[10px] rounded-full bg-cyan-400 text-black font-semibold tracking-[0.16em] uppercase hover:bg-cyan-300 transition shadow-[0_0_30px_rgba(34,211,238,0.4)]"
            >
              See Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2 text-[10px] rounded-full border border-slate-600 text-slate-200 tracking-[0.14em] uppercase hover:border-cyan-400 hover:text-cyan-300 transition"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

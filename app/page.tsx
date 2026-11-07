import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectGrid from "./components/ProjectGrid";
import ContactSection from "./components/ContactSection";
import CertificatesSection from "./components/CertificatesSection";
import ParticleBackground from "./components/interactive/ParticleBackground";
import SpotlightGlow from "./components/interactive/SpotlightGlow";
import CustomCursor from "./components/interactive/CustomCursor";
import TiltCard from "./components/interactive/TiltCard";
import { 
  Code, 
  Layers, 
  Server, 
  Database, 
  Network, 
  Cloud, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Sparkles,
  GitBranch
} from "lucide-react";

const skillCategories = [
  {
    category: "High-RPM Engines (Backend)",
    icon: Server,
    skills: ["Python", "Golang (Go)", "Ruby", "Node.js", "Express.js"],
    accent: "text-red-400",
  },
  {
    category: "Traffic & Gateways",
    icon: Network,
    skills: ["Kong API Gateway", "Microservices", "REST APIs", "WebSockets", "Event Streaming"],
    accent: "text-rose-400",
  },
  {
    category: "Aerodynamic Frontend",
    icon: Code,
    skills: ["TypeScript", "Next.js 16 (App Router)", "React 19", "Tailwind CSS", "Framer Motion"],
    accent: "text-cyan-400",
  },
  {
    category: "Database Dyno & Storage",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Prisma ORM", "High-Throughput Queries", "Schema Tuning"],
    accent: "text-blue-400",
  },
  {
    category: "Pit Crew DevOps & CI/CD",
    icon: Cloud,
    skills: ["Docker", "Linux / Bash", "Git Flow", "N8N Automation", "Vercel & Netlify"],
    accent: "text-teal-400",
  },
  {
    category: "Braking & Safety Systems",
    icon: ShieldCheck,
    skills: ["Jest & Supertest", "System Security", "Cloudflare", "Compliance & Audit", "Clean Code"],
    accent: "text-amber-400",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030307] text-white selection:bg-cyan-400 selection:text-black overflow-x-hidden">
      {/* Interactive Cursor System */}
      <CustomCursor />

      {/* Interactive Ambient Flashlight & Canvas Particles */}
      <SpotlightGlow />
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section with Automotive x IT Bento Card */}
      <Section id="about" label="Engineering Philosophy" title="IT Architecture × Automotive Precision">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <TiltCard glowColor="rgba(239, 68, 68, 0.15)" className="p-7 border border-white/10 bg-black/40 backdrop-blur-xl h-full flex flex-col justify-between hover:border-red-500/40">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[10px] text-red-300 uppercase tracking-widest font-mono">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Telemetry & Engineering DNA</span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  I am a <span className="text-red-400 font-semibold font-mono">Junior Full Stack Developer</span> at <strong className="text-white">PT. Rasi Solution Mandiri</strong>, combining a relentless passion for high-performance automotive engineering—specifically the legendary <span className="text-red-500 font-bold">Mitsubishi Lancer Evolution IX MR</span>—with modern full-stack web software architecture.
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Just like the twin-scroll turbocharged <strong>4G63 MIVEC</strong> powertrain that delivers instantaneous throttle response without turbo lag, I engineer codebases with zero bloat, sub-100ms API response times via <strong className="text-slate-200">Kong Gateway</strong>, and multi-language horsepower spanning <strong className="text-cyan-300">Python</strong>, <strong className="text-red-400">Ruby</strong>, <strong className="text-sky-300">Golang</strong>, and <strong className="text-indigo-300">Next.js</strong>.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5 text-red-400">
                  <Cpu className="w-4 h-4" /> 4G63 MIVEC Spirit: Zero-Lag Backend
                </span>
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <GitBranch className="w-4 h-4" /> AWD Super AYC: Resilient Microservices
                </span>
              </div>
            </TiltCard>
          </div>

          {/* Quick Metrics with Automotive Telemetry */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            <TiltCard glowColor="rgba(239, 68, 68, 0.2)" className="p-5 border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col justify-center hover:border-red-500/40">
              <div className="flex flex-col gap-1.5">
                <span className="text-3xl font-extrabold text-red-500 font-mono block">8,500 <span className="text-xs text-slate-400">RPM</span></span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300 block font-semibold">
                  High-Throughput Architecture
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                Tuned for peak velocity with Kong API Gateway & Next.js Turbopack.
              </p>
            </TiltCard>

            <TiltCard glowColor="rgba(34, 211, 238, 0.2)" className="p-5 border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col justify-center hover:border-cyan-400/40">
              <div className="flex flex-col gap-1.5">
                <span className="text-3xl font-extrabold text-cyan-400 font-mono block">&lt; 100ms</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300 block font-semibold">
                  Twin-Scroll Zero Turbo Lag
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                Optimized database queries, caching layers, and instant client hydration.
              </p>
            </TiltCard>
          </div>
        </div>
      </Section>

      {/* Core Stack Section with Interactive 3D Bento Cards */}
      <Section id="skills" label="Capabilities" title="Core Architecture & Technologies">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <TiltCard
                key={cat.category}
                glowColor="rgba(34, 211, 238, 0.15)"
                className="p-5 border border-white/10 bg-black/40 backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className={`rounded-lg border border-white/10 bg-black/60 p-2 ${cat.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-100">
                      {cat.category}
                    </h3>
                  </div>

                  <ul className="space-y-1.5">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-xs text-slate-300 font-mono hover:text-cyan-300 transition-colors"
                      >
                        <span className="h-1 w-1 rounded-full bg-cyan-400/80" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] uppercase tracking-widest text-slate-500">
                  <span>Engineered with Precision</span>
                  <Sparkles className="w-3 h-3 text-cyan-400/70" />
                </div>
              </TiltCard>
            );
          })}
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section id="experience" label="Chronicle" title="Professional Experience">
        <ExperienceTimeline />
      </Section>

      {/* Projects Showcase */}
      <Section id="projects" label="Selected Work" title="Featured Projects">
        <ProjectGrid />
      </Section>

      {/* Certificates Section */}
      <Section id="certificate" label="Accreditation" title="Certifications & Diplomas">
        <CertificatesSection />
      </Section>

      {/* Contact Section */}
      <Section id="contact" label="Direct Transmission" title="Initiate Contact">
        <ContactSection />
      </Section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 text-center text-xs text-slate-500 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-slate-400 font-mono text-[11px]">System Online & Operational</span>
          </div>

          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Farhan Opet. Copy Right Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

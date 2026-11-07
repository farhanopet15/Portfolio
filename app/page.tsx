import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectGrid from "./components/ProjectGrid";
import ContactSection from "./components/ContactSection";
import CertificatesSection from "./components/CertificatesSection";
import MatrixBackground from "./components/interactive/MatrixBackground";
import SpotlightGlow from "./components/interactive/SpotlightGlow";
import CustomCursor from "./components/interactive/CustomCursor";
import TiltCard from "./components/interactive/TiltCard";
import { 
  Code, 
  Server, 
  Database, 
  Network, 
  Cloud, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Binary,
  Radio,
  Lock,
  GitBranch
} from "lucide-react";

const skillCategories = [
  {
    category: "// BACKEND_ENGINES",
    icon: Server,
    skills: ["Python", "Golang (Go)", "Ruby", "Node.js", "Express.js"],
    accent: "text-emerald-400",
  },
  {
    category: "// GATEWAYS_&_PROXIES",
    icon: Network,
    skills: ["Kong API Gateway", "Distributed Microservices", "REST APIs", "WebSockets", "Event Streaming"],
    accent: "text-teal-400",
  },
  {
    category: "// CYBER_FRONTEND",
    icon: Code,
    skills: ["TypeScript", "Next.js 16 (App Router)", "React 19", "Tailwind CSS", "Framer Motion"],
    accent: "text-cyan-400",
  },
  {
    category: "// ENCRYPTED_STORAGE",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Prisma ORM", "Query Optimization", "Schema Hardening"],
    accent: "text-emerald-300",
  },
  {
    category: "// CONTAINERS_&_OPS",
    icon: Cloud,
    skills: ["Docker Containers", "Linux / Bash Shell", "Git Architecture", "N8N Automation", "Vercel / Cloudflare"],
    accent: "text-teal-300",
  },
  {
    category: "// INTEGRITY_&_DEFENSE",
    icon: ShieldCheck,
    skills: ["Jest & Supertest", "System Security Auditing", "Auth Security (JWT/OAuth)", "Penetration Diagnostics"],
    accent: "text-green-400",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#030508] text-white selection:bg-emerald-400 selection:text-black overflow-x-hidden font-mono">
      {/* Interactive Cyber Reticle Cursor */}
      <CustomCursor />

      {/* Cyber Ambient Flashlight & Matrix Rain Canvas */}
      <SpotlightGlow />
      <MatrixBackground />

      {/* Navigation Terminal Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section: Cyber Operative Dossier */}
      <Section id="about" label="OPERATIVE_DOSSIER" title="Ahmad Farhan Walidain // PROFILE">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <TiltCard glowColor="rgba(16, 185, 129, 0.15)" className="p-7 border border-emerald-500/20 bg-black/60 backdrop-blur-xl h-full flex flex-col justify-between hover:border-emerald-400/50">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] text-emerald-300 uppercase tracking-widest font-mono">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>IDENTIFIER: FULL_STACK_OPERATIVE</span>
                </div>
                
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-mono">
                  Currently stationed as a <span className="text-emerald-400 font-bold">[Junior Full Stack Developer]</span> at <strong className="text-white">PT. Rasi Solution Mandiri</strong>. My mission centers on engineering zero-vulnerability, high-throughput digital systems that balance military-grade backend performance with immersive cyberpunk frontend interfaces.
                </p>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-mono">
                  With multi-language capability spanning <strong className="text-emerald-300">Python</strong>, <strong className="text-cyan-300">Kong API Gateway</strong>, <strong className="text-rose-300">Ruby</strong>, <strong className="text-sky-300">Golang</strong>, and <strong className="text-teal-300">Next.js 16</strong>, I architect scalable microservices, manage secure API traffic routing, and enforce strict regulatory compliance honed by legal analytical expertise.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-500/15 flex flex-wrap items-center gap-4 text-xs font-mono text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4" /> SEC_LAYER: AES-256 + KONG
                </span>
                <span className="flex items-center gap-1.5">
                  <Binary className="w-4 h-4" /> ZERO-LATENCY PROTOCOLS
                </span>
              </div>
            </TiltCard>
          </div>

          {/* Quick Metrics Telemetry */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            <TiltCard glowColor="rgba(16, 185, 129, 0.2)" className="p-5 border border-emerald-500/20 bg-black/60 backdrop-blur-xl flex flex-col justify-center hover:border-emerald-400/50">
              <div className="flex flex-col gap-1.5">
                <span className="text-3xl font-extrabold text-emerald-400 font-mono block">99.99%</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300 block font-semibold font-mono">
                  SYSTEM_UPTIME_RATE
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed font-mono">
                Fault-tolerant microservice clusters and automated container routing.
              </p>
            </TiltCard>

            <TiltCard glowColor="rgba(6, 182, 212, 0.2)" className="p-5 border border-emerald-500/20 bg-black/60 backdrop-blur-xl flex flex-col justify-center hover:border-cyan-400/50">
              <div className="flex flex-col gap-1.5">
                <span className="text-3xl font-extrabold text-cyan-400 font-mono block">&lt; 50ms</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300 block font-semibold font-mono">
                  PROXY_RESPONSE_TIME
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed font-mono">
                Kong Gateway rate-limiting, edge caching, and optimized database indexing.
              </p>
            </TiltCard>
          </div>
        </div>
      </Section>

      {/* Capabilities Section */}
      <Section id="skills" label="CYBER_CAPABILITIES" title="Core Exploit & Defense Stack">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <TiltCard
                key={cat.category}
                glowColor="rgba(16, 185, 129, 0.15)"
                className="p-5 border border-emerald-500/20 bg-black/60 backdrop-blur-xl flex flex-col justify-between hover:border-emerald-400/50"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className={`rounded border border-emerald-500/30 bg-black/80 p-2 ${cat.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-100">
                      {cat.category}
                    </h3>
                  </div>

                  <ul className="space-y-1.5">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2 text-xs text-slate-300 font-mono hover:text-emerald-300 transition-colors"
                      >
                        <span className="h-1 w-1 rounded-full bg-emerald-400" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-emerald-500/15 flex items-center justify-between text-[9px] uppercase tracking-wider text-emerald-500/70">
                  <span>DEPLOYED // STABLE</span>
                  <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                </div>
              </TiltCard>
            );
          })}
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section id="experience" label="OPERATION_CHRONICLE" title="Mission Experience Logs">
        <ExperienceTimeline />
      </Section>

      {/* Projects Showcase */}
      <Section id="projects" label="DEPLOYED_SYSTEMS" title="Featured Exploits & Platforms">
        <ProjectGrid />
      </Section>

      {/* Certificates Section */}
      <Section id="certificate" label="AUTHENTICATED_KEYS" title="Verified Diplomas & Credentials">
        <CertificatesSection />
      </Section>

      {/* Contact Section */}
      <Section id="contact" label="ENCRYPTED_UPLINK" title="Initiate Secure Transmission">
        <ContactSection />
      </Section>

      {/* Terminal Footer */}
      <footer className="relative z-10 border-t border-emerald-500/20 py-12 text-center text-xs text-slate-500 bg-black/80 backdrop-blur-xl font-mono">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px]">[NODE: ONLINE] // 0xAFW_ROOT</span>
          </div>

          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Ahmad Farhan Walidain. Engineered in the dark with Next.js 16 & Cyber Security Protocols.
          </p>
        </div>
      </footer>
    </main>
  );
}

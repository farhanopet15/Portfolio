import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectGrid from "./components/ProjectGrid";
import ContactSection from "./components/ContactSection";
import CertificatesSection from "./components/CertificatesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-eerie-gradient text-white overflow-x-hidden">
      <Navbar />
      <Hero />

      <Section id="about" label="About" title="Ahmad Farhan Walidain S.H">
        <p className="text-slate-300 max-w-3xl">
          I&apos;m a full stack developer focused on building immersive, dark,
          and futuristic experiences for the web. From high-traffic APIs to
          cinematic landing pages, I design systems that feel smooth, secure,
          and slightly unsettling — in the best possible way.
        </p>
      </Section>

      <Section id="skills" label="Core Stack" title="What I Build With">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-slate-200 text-sm">
          <li className="neon-pill">TypeScript / JavaScript</li>
          <li className="neon-pill">Next.js / React</li>
          <li className="neon-pill">Node.js / Express</li>
          <li className="neon-pill">PostgreSQL / NeonDB / Prisma / Supabase</li>
          <li className="neon-pill">REST / WebSocket</li>
          <li className="neon-pill">Vercel / Docker / CI/CD</li>
        </ul>
      </Section>

      <Section id="experience" label="Experience" title="Timeline">
        <ExperienceTimeline />
      </Section>

      <Section id="projects" label="Selected Work" title="My Projects">
        <ProjectGrid />
      </Section>

      <Section id="certificate" label="" title="Certificate">
        <CertificatesSection />
      </Section>

      <Section id="contact" label="Contact" title="Summon Me">
        <ContactSection />
      </Section>

      <footer className="py-10 text-xs text-center text-slate-500">
        © {new Date().getFullYear()} Farhan Opet . Crafted in the dark.
      </footer>
    </main>
  );
}

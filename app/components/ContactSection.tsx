"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, MessageSquare, Clock } from "lucide-react";
import MagneticButton from "./interactive/MagneticButton";
import TiltCard from "./interactive/TiltCard";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Open mailto fallback with the provided project brief
    setTimeout(() => {
      setStatus("sent");
      const subject = encodeURIComponent(`Project Inquiry from ${formData.name || "Client"}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Brief:\n${formData.message}`
      );
      window.location.href = `mailto:opet.mxcc@gmail.com?subject=${subject}&body=${body}`;
    }, 700);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.8fr,1.2fr] items-start">
      {/* Contact Form with Frosted Glassmorphism */}
      <TiltCard glowColor="rgba(34, 211, 238, 0.15)" className="p-6 border border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mb-5 flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-cyan-400" />
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-100">
            Transmit Signal
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block mb-1.5 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Your Identity / Name
              </label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ahmad Walidain"
                className="w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 text-xs text-slate-100 outline-none transition-all focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              />
            </div>

            <div>
              <label className="block mb-1.5 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                Return Frequency / Email
              </label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="client@enterprise.com"
                className="w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 text-xs text-slate-100 outline-none transition-all focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1.5 text-[10px] uppercase tracking-[0.18em] text-slate-400">
              Transmission Content / Project Brief
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your product requirements, target architecture, and timeline..."
              className="w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 text-xs text-slate-100 outline-none transition-all focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)] resize-none"
            />
          </div>

          <div className="pt-2">
            <MagneticButton>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group relative flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:bg-cyan-300 transition-all disabled:opacity-50"
              >
                {status === "sent" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-black" />
                    <span>Signal Prepared!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    <span>{status === "submitting" ? "Transmitting..." : "Send Transmission"}</span>
                  </>
                )}
              </button>
            </MagneticButton>
          </div>
        </form>
      </TiltCard>

      {/* Direct Channels */}
      <div className="space-y-4">
        <TiltCard glowColor="rgba(34, 211, 238, 0.12)" className="p-5 border border-white/10 bg-black/40 backdrop-blur-xl">
          <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-semibold mb-3">
            Direct Uplinks
          </p>

          <div className="space-y-3">
            <a
              href="mailto:opet.mxcc@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-slate-200 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all group"
            >
              <div className="rounded-lg border border-white/10 bg-black/50 p-2 text-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.5)]">
                <Mail className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-[9px] uppercase tracking-wider text-slate-500">Email Relay</p>
                <p className="font-mono text-cyan-300 text-xs">opet.mxcc@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/farhanopet15"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-slate-200 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all group"
            >
              <div className="rounded-lg border border-white/10 bg-black/50 p-2 text-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.5)]">
                <GithubIcon className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-[9px] uppercase tracking-wider text-slate-500">Code Repository</p>
                <p className="font-mono text-cyan-300 text-xs">github.com/farhanopet15</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/ahmadfarhanwalidain"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-slate-200 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all group"
            >
              <div className="rounded-lg border border-white/10 bg-black/50 p-2 text-cyan-400 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.5)]">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-[9px] uppercase tracking-wider text-slate-500">Professional Network</p>
                <p className="font-mono text-cyan-300 text-xs">linkedin.com/in/ahmadfarhanwalidain</p>
              </div>
            </a>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[10px] text-slate-400">
            <Clock className="w-3.5 h-3.5 text-cyan-400/80" />
            <span>Average response window: &lt; 24 hours</span>
          </div>
        </TiltCard>
      </div>
    </div>
  );
}

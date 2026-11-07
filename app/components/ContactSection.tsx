"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, Clock, ShieldCheck, Radio, MessageCircle } from "lucide-react";
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

  // Read WhatsApp number from env or fallback to 6289646611059
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6289646611059";
  // Ensure formatted without leading 0 for wa.me API
  const cleanNumber = rawNumber.replace(/[^0-9]/g, "").replace(/^0/, "62");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const textPayload = `*TRANS-ID: #NX-UPLINK*\n` +
      `━━━━━━━━━━━━━━━━━━━\n` +
      `*Callsign / Name:* ${formData.name}\n` +
      `*Uplink Email:* ${formData.email}\n\n` +
      `*Payload Brief:*\n${formData.message}\n` +
      `━━━━━━━━━━━━━━━━━━━\n` +
      `_Transmitted via Farhan Opet Cyber Portfolio_`;

    const encodedText = encodeURIComponent(textPayload);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedText}`;

    setTimeout(() => {
      setStatus("sent");
      // Direct dispatch to WhatsApp
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 400);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.8fr,1.2fr] items-start font-mono">
      {/* Terminal Contact Form with Cyber Aesthetics */}
      <TiltCard glowColor="rgba(16, 185, 129, 0.15)" className="p-6 border border-emerald-500/20 bg-black/60 backdrop-blur-xl">
        <div className="mb-5 flex items-center justify-between pb-3 border-b border-emerald-500/20">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              [ TRANSMIT_ENCRYPTED_PAYLOAD ]
            </h3>
          </div>
          <span className="text-[10px] text-slate-500">DISPATCH: WHATSAPP_API</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block mb-1.5 text-[10px] uppercase text-emerald-300">
                &gt; ENTER_CALLSIGN_NAME:
              </label>
              <input
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Agent / Client Name"
                className="w-full rounded bg-black/70 border border-emerald-500/30 px-4 py-3 text-xs text-slate-100 outline-none transition-all focus:border-emerald-400 focus:shadow-[0_0_20px_rgba(16,185,129,0.3)] font-mono"
              />
            </div>

            <div>
              <label className="block mb-1.5 text-[10px] uppercase text-emerald-300">
                &gt; RETURN_UPLINK_EMAIL:
              </label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="operative@domain.com"
                className="w-full rounded bg-black/70 border border-emerald-500/30 px-4 py-3 text-xs text-slate-100 outline-none transition-all focus:border-emerald-400 focus:shadow-[0_0_20px_rgba(16,185,129,0.3)] font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1.5 text-[10px] uppercase text-emerald-300">
              &gt; PAYLOAD_BRIEF / ARCHITECTURE_REQUIREMENTS:
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="State mission parameters, target stack, and delivery timeline..."
              className="w-full rounded bg-black/70 border border-emerald-500/30 px-4 py-3 text-xs text-slate-100 outline-none transition-all focus:border-emerald-400 focus:shadow-[0_0_20px_rgba(16,185,129,0.3)] resize-none font-mono"
            />
          </div>

          <div className="pt-2">
            <MagneticButton>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group relative flex items-center gap-2 rounded bg-emerald-500 px-7 py-3 text-xs font-bold uppercase tracking-wider text-black shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:bg-emerald-400 transition-all disabled:opacity-50"
              >
                {status === "sent" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-black" />
                    <span>OPENING_WHATSAPP...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    <span>{status === "submitting" ? "CONNECTING..." : "> EXECUTE_DISPATCH"}</span>
                  </>
                )}
              </button>
            </MagneticButton>
          </div>
        </form>
      </TiltCard>

      {/* Direct Uplinks */}
      <div className="space-y-4">
        <TiltCard glowColor="rgba(16, 185, 129, 0.12)" className="p-5 border border-emerald-500/20 bg-black/60 backdrop-blur-xl">
          <p className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold mb-3 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>[AUTHENTICATED_CHANNELS]</span>
          </p>

          <div className="space-y-3">
            {/* Direct WhatsApp Channel */}
            <a
              href={`https://wa.me/${cleanNumber}?text=Halo%20Farhan,%20saya%20tertarik%20bekerja%20sama%20dengan%20Anda.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-slate-200 hover:border-emerald-400 hover:bg-emerald-500/20 transition-all group shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              <div className="rounded border border-emerald-500/40 bg-black/80 p-2 text-emerald-400 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.6)]">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-[9px] uppercase tracking-wider text-emerald-300 font-bold">WHATSAPP_DIRECT</p>
                <p className="font-mono text-emerald-400 text-xs">+62 896-4661-1059</p>
              </div>
            </a>

            <a
              href="mailto:opet.mxcc@gmail.com"
              className="flex items-center gap-3 rounded border border-emerald-500/20 bg-black/50 p-3 text-xs text-slate-200 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all group"
            >
              <div className="rounded border border-emerald-500/30 bg-black/80 p-2 text-emerald-400 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.6)]">
                <Mail className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-[9px] uppercase tracking-wider text-slate-500">MAIL_RELAY</p>
                <p className="font-mono text-emerald-300 text-xs">opet.mxcc@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/farhanopet15"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded border border-emerald-500/20 bg-black/50 p-3 text-xs text-slate-200 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all group"
            >
              <div className="rounded border border-emerald-500/30 bg-black/80 p-2 text-emerald-400 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.6)]">
                <GithubIcon className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-[9px] uppercase tracking-wider text-slate-500">SOURCE_REPOSITORY</p>
                <p className="font-mono text-emerald-300 text-xs">github.com/farhanopet15</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/ahmadfarhanwalidain"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded border border-emerald-500/20 bg-black/50 p-3 text-xs text-slate-200 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all group"
            >
              <div className="rounded border border-emerald-500/30 bg-black/80 p-2 text-emerald-400 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.6)]">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div className="truncate">
                <p className="text-[9px] uppercase tracking-wider text-slate-500">PROFESSIONAL_NETWORK</p>
                <p className="font-mono text-emerald-300 text-xs">linkedin.com/in/ahmadfarhanwalidain</p>
              </div>
            </a>
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-500/15 flex items-center gap-2 text-[10px] text-slate-400">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>DIRECT_DISPATCH: INSTANT_RESPONSE</span>
          </div>
        </TiltCard>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useRef, useEffect } from "react";
import { Shield, CornerDownLeft } from "lucide-react";

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export default function TerminalWidget() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "sysinfo",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-emerald-400 font-bold">&gt; KERNEL: NXONE-CYBER-OS v2.6.0</p>
          <p>&gt; OPERATIVE: Ahmad Farhan Walidain, S.H</p>
          <p>&gt; STATION: PT. Rasi Solution Mandiri (Junior Full Stack Developer)</p>
          <p>&gt; STATUS: ALL_SYSTEMS_OPERATIONAL // SEC_LEVEL_0</p>
          <p className="text-slate-400 text-[11px] mt-1">
            Type <span className="text-emerald-300 font-bold">&apos;help&apos;</span> to inspect available commands.
          </p>
        </div>
      ),
    },
  ]);

  const outputContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Only scroll internally inside the terminal box, never scrolling the webpage window
    if (outputContainerRef.current) {
      outputContainerRef.current.scrollTop = outputContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response: React.ReactNode;

    switch (cmd) {
      case "help":
        response = (
          <div className="space-y-1 text-[11px] text-slate-300">
            <p className="text-emerald-400 font-bold">&gt; AVAILABLE CYBER PROTOCOLS:</p>
            <p><span className="text-cyan-300 font-bold">whoami</span> — Display operative background & role</p>
            <p><span className="text-cyan-300 font-bold">skills</span> — Enumerate exploit & defense stack</p>
            <p><span className="text-cyan-300 font-bold">missions</span> — List active & resolved operations</p>
            <p><span className="text-cyan-300 font-bold">projects</span> — Deployed production systems</p>
            <p><span className="text-cyan-300 font-bold">uplink</span> — Direct contact channels</p>
            <p><span className="text-cyan-300 font-bold">clear</span> — Purge terminal log history</p>
          </div>
        );
        break;

      case "whoami":
        response = (
          <div className="text-[11px] text-slate-300 leading-relaxed">
            <p className="text-emerald-400 font-bold">&gt; [OPERATIVE IDENTITY]:</p>
            <p>Ahmad Farhan Walidain, S.H</p>
            <p>Junior Full Stack Developer at PT. Rasi Solution Mandiri (2026 — Present).</p>
            <p className="text-slate-400 mt-1">
              Dual-competency background in full-stack software architecture and legal/regulatory analysis.
            </p>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="text-[11px] text-slate-300 space-y-1">
            <p className="text-emerald-400 font-bold">&gt; [CORE ARCHITECTURE STACK]:</p>
            <p>• Backend: Python, Golang, Ruby, Node.js, Express.js</p>
            <p>• Gateway: Kong API Gateway, Microservices, WebSockets, REST</p>
            <p>• Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS</p>
            <p>• Database: PostgreSQL, MySQL, Prisma ORM</p>
            <p>• DevOps: Docker, Linux/Bash, Git Flow, N8N Automation</p>
          </div>
        );
        break;

      case "missions":
        response = (
          <div className="text-[11px] text-slate-300 space-y-1">
            <p className="text-emerald-400 font-bold">&gt; [OPERATION CHRONICLE]:</p>
            <p className="text-emerald-300">• PT. Rasi Solution Mandiri (2026—Present) — Jr. Full Stack Developer [ACTIVE]</p>
            <p>• PT. Dumbways Indonesia (2025—2026) — FullStack Developer [RESOLVED]</p>
            <p>• PT. Artdeco Sejahtera Abadi (2024—2025) — PIC [COMPLETED]</p>
            <p>• Gov. of West Java Province (2021—2022) — Assistant Legal [COMPLIANCE]</p>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="text-[11px] text-slate-300 space-y-1">
            <p className="text-emerald-400 font-bold">&gt; [DEPLOYED PLATFORMS]:</p>
            <p>1. AutoVerse (Real-Time Intel) ➔ https://autoverse-fe.vercel.app/</p>
            <p>2. Digital Business Card (Encrypted Identity) ➔ https://digital-business-card-fe.vercel.app/</p>
            <p>3. NetWorkers (Network Workflow) ➔ https://net-workers.netlify.app/</p>
          </div>
        );
        break;

      case "uplink":
      case "contact":
        response = (
          <div className="text-[11px] text-slate-300 space-y-1">
            <p className="text-emerald-400 font-bold">&gt; [DIRECT UPLINK CHANNELS]:</p>
            <p>• Email: opet.mxcc@gmail.com</p>
            <p>• GitHub: github.com/farhanopet15</p>
            <p>• LinkedIn: linkedin.com/in/ahmadfarhanwalidain</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "sudo rm -rf /":
      case "rm -rf /":
      case "sudo":
        response = (
          <p className="text-rose-400 font-bold">
            [ACCESS_DENIED]: Root safeguards active. Nice attempt, operative.
          </p>
        );
        break;

      default:
        response = (
          <p className="text-rose-400">
            command not found: &apos;{cmd}&apos;. Type &apos;help&apos; for available protocols.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: input, output: response }]);
    setInput("");
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className="relative overflow-hidden rounded-xl border border-emerald-500/30 bg-black/90 p-4 font-mono shadow-[0_0_40px_rgba(16,185,129,0.15)] text-xs cursor-text"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/20">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-2 text-[10px] text-emerald-400/80 font-bold">
            bash // root@nxone: ~ (tty1)
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-slate-500">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>ENCRYPTED_SHELL</span>
        </div>
      </div>

      {/* Terminal Output Stream */}
      <div ref={outputContainerRef} className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
        {history.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span>root@nxone:~#</span>
              <span className="text-slate-100 font-normal">{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}
      </div>

      {/* Interactive Command Input Line */}
      <form onSubmit={handleCommand} className="mt-3 pt-3 border-t border-emerald-500/20 flex items-center gap-2">
        <span className="text-emerald-400 font-bold">root@nxone:~#</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type 'help' or any command..."
          className="w-full bg-transparent text-emerald-300 outline-none text-xs font-mono placeholder:text-slate-600"
        />
        <button type="submit" aria-label="Submit command" className="text-emerald-400/60 hover:text-emerald-400">
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}

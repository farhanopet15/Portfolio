"use client";

export default function ContactSection() {
  return (
    <div className="grid gap-6 md:grid-cols-[2fr,1.2fr] items-start">
      <form
        className="space-y-3 text-[10px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block mb-1 text-slate-400 uppercase tracking-[0.16em]">
              Name
            </label>
            <input
              className="w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-[10px] text-slate-100 outline-none focus:border-cyan-400/80"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-1 text-slate-400 uppercase tracking-[0.16em]">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-[10px] text-slate-100 outline-none focus:border-cyan-400/80"
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-slate-400 uppercase tracking-[0.16em]">
            Project Brief
          </label>
          <textarea
            rows={4}
            className="w-full rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-[10px] text-slate-100 outline-none focus:border-cyan-400/80 resize-none"
            placeholder="Tell me about the product, stack, and timeline."
          />
        </div>

        <button
          type="submit"
          className="mt-1 rounded-full bg-cyan-400 px-6 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black hover:bg-cyan-300 transition shadow-[0_0_26px_rgba(34,211,238,0.5)]"
        >
          Send Transmission
        </button>
        <p className="text-[8px] text-slate-500 mt-2">
          For real projects, connect this form to your API / email service.
        </p>
      </form>

      <div className="space-y-2 text-[10px] text-slate-300">
        <p className="uppercase tracking-[0.18em] text-cyan-400/80">
          Direct Channels
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:opet.mxcc@gmail.com"
            className="text-cyan-300 hover:text-cyan-200"
          >
            opet.mxcc@gmail.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/farhanopet15"
            className="text-cyan-300 hover:text-cyan-200"
          >
            github.com/farhanopet15
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/ahmadfarhanwalidain"
            className="text-cyan-300 hover:text-cyan-200"
          >
            linkedin.com/in/ahmadfarhanwalidain
          </a>
        </p>
        <p className="mt-4 text-[9px] text-slate-500">
          I usually respond within 24 hours with a clear scope, timeline, and
          technical approach.
        </p>
      </div>
    </div>
  );
}

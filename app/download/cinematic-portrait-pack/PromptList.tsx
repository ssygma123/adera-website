"use client";

import { useState } from "react";
import type { CinematicPrompt } from "@/lib/cinematic-prompts";

export function PromptList({ prompts }: { prompts: CinematicPrompt[] }) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 1500);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId(null), 1500);
    }
  };

  const handleDownloadPdf = async () => {
    setDownloading(true);
    try {
      const { default: jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "pt", format: "a4" });
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 48;
      const contentWidth = pageWidth - margin * 2;
      let y = margin;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.text("Cinematic Portrait Pack", margin, y);
      y += 28;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.setTextColor(110);
      const subtitle = doc.splitTextToSize(
        "15 ChatGPT prompts that turn any selfie into a Hollywood-quality scene. Paste a prompt into ChatGPT, attach your selfie, and let the model do the rest.",
        contentWidth
      );
      doc.text(subtitle, margin, y);
      y += subtitle.length * 14 + 18;
      doc.setTextColor(0);

      prompts.forEach((p, i) => {
        const number = String(i + 1).padStart(2, "0");
        const titleLine = `${number}. ${p.title}`;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(13);
        const titleHeight = 18;

        if (y + titleHeight + 60 > pageHeight - margin) {
          doc.addPage();
          y = margin;
        }
        doc.text(titleLine, margin, y);
        y += titleHeight;

        doc.setFont("helvetica", "italic");
        doc.setFontSize(10);
        doc.setTextColor(120);
        doc.text(p.scene, margin, y);
        y += 14;
        doc.setTextColor(0);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10.5);
        const lines = doc.splitTextToSize(p.prompt, contentWidth);
        for (const line of lines) {
          if (y > pageHeight - margin) {
            doc.addPage();
            y = margin;
          }
          doc.text(line, margin, y);
          y += 14;
        }
        y += 18;
      });

      doc.save("cinematic-portrait-pack.pdf");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div>
      <div className="mb-8 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-zinc-500">
          {prompts.length} prompts · paste into ChatGPT with your selfie
        </p>
        <button
          type="button"
          onClick={handleDownloadPdf}
          disabled={downloading}
          className="btn-gradient disabled:opacity-60"
        >
          <span>{downloading ? "Preparing PDF…" : "Download all as PDF"}</span>
        </button>
      </div>

      <ol className="space-y-4">
        {prompts.map((p, i) => {
          const number = String(i + 1).padStart(2, "0");
          const isCopied = copiedId === p.id;
          return (
            <li
              key={p.id}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition hover:border-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-zinc-500">
                      {number}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                    {p.scene}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(p.id, p.prompt)}
                  aria-label={`Copy prompt ${i + 1}: ${p.title}`}
                  className={`shrink-0 rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                    isCopied
                      ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                      : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {isCopied ? "Copied" : "Copy"}
                </button>
              </div>
              <pre className="mt-4 overflow-x-auto rounded-xl border border-white/5 bg-black/40 p-4 text-sm leading-relaxed text-zinc-200 [white-space:pre-wrap] [word-break:break-word]">
                {p.prompt}
              </pre>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

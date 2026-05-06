"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const interests = [
  { value: "", label: "Select a package…" },
  { value: "ads-starter", label: "Ad Starter — €299" },
  { value: "ads-growth", label: "Ad Growth — €699" },
  { value: "ads-premium", label: "Ad Premium — €1499" },
  { value: "prompts-starter", label: "Prompt Starter Pack — €29" },
  { value: "prompts-pro", label: "Prompt Pro Bundle — €79" },
  { value: "prompts-agency", label: "Prompt Agency Kit — €149" },
  { value: "custom", label: "Something custom" }
];

type Status = "idle" | "submitting" | "ok" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const data = new FormData(e.currentTarget);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      packageInterest: String(data.get("packageInterest") || ""),
      message: String(data.get("message") || "")
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(j?.error ?? "Failed to send. Please try again.");
      }
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send");
    }
  }

  if (status === "ok") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-8 text-center"
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold">Message sent.</h3>
        <p className="mt-2 text-sm text-zinc-400">
          We'll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-6"
        >
          Send another
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Jane Doe" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
        />
      </div>
      <Field label="Company" name="company" placeholder="Acme Inc." />

      <div>
        <label
          htmlFor="packageInterest"
          className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-400"
        >
          Package interest
        </label>
        <select
          id="packageInterest"
          name="packageInterest"
          className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500/50 focus:bg-white/[0.04]"
        >
          {interests.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-400"
        >
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your campaign, timeline, and goals."
          className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500/50 focus:bg-white/[0.04]"
        />
      </div>

      {error && (
        <p className="rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-gradient w-full sm:w-auto"
      >
        <span>{status === "submitting" ? "Sending…" : "Send message"}</span>
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-medium uppercase tracking-wider text-zinc-400"
      >
        {label}
        {required && <span className="text-red-400"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500/50 focus:bg-white/[0.04]"
      />
    </div>
  );
}

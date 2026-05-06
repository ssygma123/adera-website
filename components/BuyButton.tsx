"use client";

import { useState } from "react";

interface BuyButtonProps {
  productId: string;
  label?: string;
  variant?: "gradient" | "primary" | "secondary";
  className?: string;
}

export function BuyButton({
  productId,
  label = "Buy now",
  variant = "gradient",
  className = ""
}: BuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ productId })
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Checkout failed");
      }
      const { url } = (await res.json()) as { url: string };
      window.location.href = url;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
      setLoading(false);
    }
  }

  const cls =
    variant === "gradient"
      ? "btn-gradient"
      : variant === "primary"
        ? "btn-primary"
        : "btn-secondary";

  return (
    <div className="flex flex-col gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className={`${cls} ${className}`}
      >
        <span>{loading ? "Redirecting…" : label}</span>
      </button>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

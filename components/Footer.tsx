import Link from "next/link";

const TIKTOK_URL = "https://tiktok.com/@aderadesign";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
    </svg>
  );
}

const links = {
  agency: [
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" }
  ],
  shop: [
    { href: "/shop?category=ad-copy", label: "Ad Copy" },
    { href: "/shop?category=image", label: "Image Prompts" },
    { href: "/shop?category=video", label: "Video Prompts" },
    { href: "/shop?category=social", label: "Social Media" }
  ]
};

export function Footer() {
  return (
    <footer className="mt-32 border-t border-white/5 bg-background/60">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <span aria-hidden className="block h-6 w-6 rounded-md bg-gradient-brand" />
              <span>adera</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-zinc-400">
              AI advertising & prompt agency. We design AI-generated ads and sell
              battle-tested prompts for teams that ship.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Agency
            </h4>
            <ul className="mt-4 space-y-2">
              {links.agency.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-400 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Shop
            </h4>
            <ul className="mt-4 space-y-2">
              {links.shop.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-400 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-sm text-zinc-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Adera. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Adera on TikTok"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a
              href="https://adera.design"
              className="hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              adera.design
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

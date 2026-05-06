import Link from "next/link";

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
          <p>
            <a
              href="https://adera.design"
              className="hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              adera.design
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

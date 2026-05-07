const TIKTOK_URL = "https://tiktok.com/@aderadesign";

export function TikTokBanner() {
  return (
    <section className="section pt-0">
      <div className="container-x">
        <a
          href={TIKTOK_URL}
          target="_blank"
          rel="noreferrer"
          className="group relative flex flex-col items-start justify-between gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-6 transition hover:border-white/20 sm:flex-row sm:items-center sm:px-8"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, #ff0050 0%, transparent 60%)"
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 70% 70%, #00f2ea 0%, transparent 60%)"
            }}
          />
          <div className="relative flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-white">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                className="h-6 w-6"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
              </svg>
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Follow us on TikTok
              </p>
              <p className="mt-1 text-lg font-semibold text-white sm:text-xl">
                @aderadesign — daily AI ad teardowns &amp; prompt drops
              </p>
            </div>
          </div>
          <span className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition group-hover:border-white/30 group-hover:bg-white/[0.08]">
            Follow
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}

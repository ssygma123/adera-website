import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { cinematicPrompts } from "@/lib/cinematic-prompts";
import { verifyDownloadToken } from "@/lib/download-token";
import { PromptList } from "./PromptList";

export const metadata: Metadata = {
  title: "Your Cinematic Portrait Pack",
  robots: { index: false, follow: false }
};

export default function CinematicPortraitDownloadPage({
  searchParams
}: {
  searchParams: { token?: string };
}) {
  const valid = verifyDownloadToken(
    searchParams.token,
    "prompt-cinematic-portraits"
  );

  if (!valid) {
    redirect("/shop");
  }

  return (
    <>
      <section className="relative pt-24 sm:pt-32">
        <div className="container-x text-center">
          <span className="label-eyebrow">Thank you for your order</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Your <span className="text-gradient">Cinematic Portrait Pack</span>{" "}
            is ready.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Below are all 15 prompts. Copy any of them straight into ChatGPT
            with your selfie attached, or grab the whole set as a PDF for
            offline use. This link is private — bookmark it if you want to
            come back.
          </p>
          <p className="mt-3 text-xs text-zinc-500">
            Tip: works best on ChatGPT with image input enabled (GPT-4o, GPT-5,
            or any model that accepts images and can generate them).
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <PromptList prompts={cinematicPrompts} />
          <div className="mt-16 text-center">
            <Link href="/shop" className="btn-secondary">
              Back to shop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

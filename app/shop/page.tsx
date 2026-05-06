import type { Metadata } from "next";
import { ShopGrid } from "./ShopGrid";

export const metadata: Metadata = {
  title: "Prompt shop",
  description:
    "Individual prompts for AI ads, image generation, video, and social. From €4.99."
};

export default function ShopPage() {
  return (
    <>
      <section className="pt-20 sm:pt-28">
        <div className="container-x text-center">
          <span className="label-eyebrow">Prompt shop</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            Buy individual <span className="text-gradient">prompts</span>.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
            Hand-curated prompts for ad copy, image, video and social. Pay once,
            use forever.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <ShopGrid />
        </div>
      </section>
    </>
  );
}

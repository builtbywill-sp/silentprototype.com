import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import BrandWheel from "@/components/brandwheel";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-serif tracking-tight text-gilt">
          Silent Prototype Holdings
        </h1>
        <p className="mt-4 text-lg text-bone/80 max-w-2xl mx-auto">
          Private capital. Public impact. We build quietly — and own deliberately.
        </p>

        <div className="mt-8">
          <Link
            href="/portfolio"
            aria-label="View Portfolio"
            className="inline-flex items-center rounded-md border border-gilt px-6 py-2 text-sm hover:bg-gilt/10 transition-colors duration-200"
          >
            View Portfolio
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs uppercase tracking-wide text-bone/60">
          <div className="text-bone/60 transition-colors duration-300 hover:text-[var(--gilt)]">Established 2025</div>
          <div className="text-bone/60 transition-colors duration-300 hover:text-[var(--gilt)]">Privately Held</div>
          <div className="text-bone/60 transition-colors duration-300 hover:text-[var(--gilt)]">Multi-Sector</div>
          <div className="text-bone/60 transition-colors duration-300 hover:text-[var(--gilt)]">Legacy Over Noise</div>
        </div>

        <Separator className="my-16 bg-gilt/30" />

        <p className="text-sm text-bone/60 italic">
          We don’t announce - we reveal.
        </p>

        <BrandWheel  />
      </section>

      {/* ABOUT */}
      <section className="py-24 text-center max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-serif tracking-tight text-gilt mb-6">
          About
        </h2>
        <p className="text-bone/80 text-lg leading-relaxed">
          Silent Prototype Holdings is a privately held portfolio dedicated to
          building lasting value across technology, publishing, infrastructure,
          and health. We believe in quiet execution, compounding craftsmanship,
          and building systems that outlast us.
        </p>
      </section>
    </>
  );
}
"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

type Brand = { name: string; href: string; logo: string };

const BRANDS: Brand[] = [
  { name: "The Brown Archives 2", href: "/portfolio?brown-archives", logo: "/logos/the-brown-archives-2.png" },
  { name: "Silent Prototype Labs", href: "/portfolio?splabs", logo: "/logos/silent-prototype-logo.png" },
  { name: "BuiltByWill", href: "/portfolio?builtbywill", logo: "/logos/built-by-will.jpeg" },
  { name: "WroteByEmma", href: "/portfolio?victoria", logo: "/logos/wrote-by-emma.png" },
  { name: "Vega Balm Co.", href: "/portfolio?vega", logo: "/logos/vegabalm-logo.jpeg" },
  { name: "The Brown Archives", href: "/portfolio?brown-archives", logo: "/logos/the-brown-archives.jpeg" },
  { name: "ExportMyTexts", href: "/portfolio?exportmytexts", logo: "/logos/export-my-texts.png" },
  { name: "Habits of the Rich", href: "/portfolio?habits", logo: "/logos/habits-of-the-rich.png" },
  { name: "iExtract", href: "/portfolio?iextract", logo: "/logos/i-extract.png" },
];

// Duplicate for a seamless loop
const ITEMS = [...BRANDS, ...BRANDS];

export default function BrandWheel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = containerRef.current;
    if (!el) return;
    const amount = Math.min(600, el.clientWidth * 0.8);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section aria-label="BrandWheel" className="py-10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif text-2xl text-gilt">Our Brands</h3>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scrollBy(-1)}
            className="rounded border border-gilt/40 px-3 py-1 text-sm text-bone/80 hover:bg-gilt/10"
            aria-label="Scroll brands left"
          >
            ◀
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="rounded border border-gilt/40 px-3 py-1 text-sm text-bone/80 hover:bg-gilt/10"
            aria-label="Scroll brands right"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Scrollable container (manual scroll enabled) */}
      <div className="relative group">
        <div ref={containerRef} className="scroll-container overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Marquee track (moves left continuously) */}
          <div className="flex gap-1.5 w-[200%] animate-[brandmarquee_36s_linear_infinite]">
            {ITEMS.map((b, i) => (
              <Link
                key={`${b.name}-${i}`}
                href={b.href}
                className="relative group min-w-[200px] md:min-w-[260px] shrink-0 rounded-md px-4 py-6 text-center transition-transform duration-300 hover:scale-110"
              >
                <div className="flex justify-center">
                  <Image
                    src={b.logo}
                    alt={`${b.name} logo`}
                    width={128}
                    height={128}
                    className="rounded-full object-contain"
                  />
                </div>
                <div className="absolute left-1/2 bottom-2 -translate-x-1/2 text-xs text-gilt opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {b.name}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* gradient edges (subtle fade) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
      </div>

      <style jsx>{`
        @keyframes brandmarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-[brandmarquee_36s_linear_infinite] { animation: none; }
        }
        /* Scrollbar: hidden by default, show on hover */
        .scroll-container::-webkit-scrollbar { height: 6px; background: transparent; }
        .scroll-container::-webkit-scrollbar-thumb { background-color: transparent; border-radius: 10px; }
        .group:hover .scroll-container::-webkit-scrollbar-thumb { background-color: var(--gilt); }
        .group:hover .scroll-container::-webkit-scrollbar { background-color: rgba(255,255,255,0.1); }
      `}</style>
    </section>
  );
}
"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <div className="font-mono pt-[60px] grid md:grid-cols-2 min-h-screen">
        {/* Left — text */}
        <div className="flex flex-col justify-between p-8 md:p-12">
          <div className="pt-[20vh]">
            <p className="text-[10px] uppercase tracking-widest opacity-40 mb-8">
              Jalen Cheng / About
            </p>
            <p className="text-xs uppercase tracking-wide leading-loose max-w-sm">
              Los Angeles-based photographer and creative director rooted in car
              culture, fashion, and cinematic storytelling.
            </p>
          </div>

          <div className="pb-12">
            <p className="text-[10px] uppercase tracking-widest opacity-40 mb-4">
              On the work
            </p>
            <p className="text-xs uppercase tracking-wide leading-loose max-w-sm opacity-60">
              Every frame is intentional. Every shoot is a story built around
              the culture, not just the subject.
            </p>
          </div>
        </div>

        {/* Right — image */}
        <div className="relative min-h-[60vh] md:min-h-screen">
          <Image
            src="/LA.jpg"
            alt="Jalen Cheng"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* INFO STRIP */}
      <div className="border-t border-black/10 grid grid-cols-2 md:grid-cols-4 text-[10px] uppercase tracking-widest">
        {[
          { label: "Based", value: "Los Angeles, CA" },
          { label: "Role", value: "Photographer + CMO" },
          { label: "Camera", value: "Sony A6700" },
          { label: "Est.", value: "2014" },
        ].map((item) => (
          <div
            key={item.label}
            className="border-r border-black/10 p-6 last:border-r-0"
          >
            <p className="opacity-40 mb-2">{item.label}</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>

      {/* JOURNEY SECTION */}
      <div className="grid md:grid-cols-2 border-t border-black/10">
        {/* Left — image */}
        <div className="relative min-h-[60vh]">
          <Image src="/camera.png" alt="Camera" fill className="object-cover" />
        </div>

        {/* Right — text */}
        <div className="p-8 md:p-16 flex flex-col justify-center gap-12">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest opacity-40">
              01 / The Journey
            </p>
            <p className="text-xs uppercase tracking-wide leading-loose">
              Started at 10 years old when my dad handed me an old Canon.
              Photography became an obsession. A Sony A6400 opened the door to
              filmmaking. Now with the A6700, every shoot still feels like an
              adventure.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest opacity-40">
              02 / The Work
            </p>
            <p className="text-xs uppercase tracking-wide leading-loose">
              Shot campaigns for BLKLST, captured exhaust systems for Function
              Werk, and created visuals for brands that live the lifestyle.
              Currently CMO at Webverry.
            </p>
          </div>

          {/* CTA */}
          <div className="flex gap-3 pt-2">
            <Link
              href="mailto:jalen@webverry.com"
              className="border border-black px-6 py-3 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
            >
              Contact
            </Link>

            <a
              href="https://www.instagram.com/jalencheng"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black px-6 py-3 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-colors flex items-center gap-2"
            >
              Instagram
              <svg width="8" height="8" viewBox="0 0 9 9" fill="none">
                <path
                  d="M1 8L8 1M8 1H2M8 1V7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// ─── Reusable animated heading ───────────────────────────────────────────────
function SplitText({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span
      aria-label={text}
      className={`inline-flex overflow-hidden ${className}`}
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "105%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * 0.04,
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

// ─── Fade-in on scroll ────────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = "",
  y = 24,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Scroll reveal quote — one word lights up at a time ──────────────────────
function RevealWord({
  word,
  progress,
  i,
  total,
}: {
  word: string;
  progress: any;
  i: number;
  total: number;
}) {
  const color = useTransform(
    progress,
    [i / total, (i + 1.5) / total],
    ["rgba(0,0,0,0.07)", "rgba(0,0,0,1)"],
  );
  return (
    <motion.span style={{ color }} className="inline-block">
      {word}
    </motion.span>
  );
}

// ─── Stats strip data ─────────────────────────────────────────────────────────
const stats = [
  { label: "Based", value: "Los Angeles, CA" },
  { label: "Role", value: "Photographer + CMO" },
  { label: "Camera", value: "Sony A6700" },
  { label: "Est.", value: "2014" },
];

// ─── Journey entries ──────────────────────────────────────────────────────────
const journey = [
  {
    index: "01",
    title: "how it started",
    body: "My dad handed me his old Canon when I was 10. I haven't really put a camera down since. Started with photos, got into video, now I do both. Currently shooting on a Sony A6700.",
  },
  {
    index: "02",
    title: "what i've been doing",
    body: "Shot campaigns for BLKLST, exhaust systems for Function Werk, and a handful of other brands I actually respect. Also running creative at Webverry as CMO.",
  },
];

const QUOTE =
  "Viewing my photos is like looking through a window you wish you could've climbed through";

// ─── Page ────────────────────────────────────────────────────────────────────
export default function About() {
  const quoteRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: quoteRef,
    offset: ["start 0.7", "end 0.6"],
  });
  const quoteWords = QUOTE.split(" ");

  return (
    <div className="min-h-screen flex flex-col bg-[#F0E8D8]">
      <Navbar />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section className="grid md:grid-cols-2 min-h-screen pt-20">
        {/* Left — text */}
        <div className="flex flex-col justify-between p-8 md:p-16">
          <div className="pt-[18vh]">
            <motion.p
              className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/30 mb-8"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Jalen Cheng
            </motion.p>

            <h1 className="text-[14vw] md:text-[7vw] font-black uppercase leading-[0.88] tracking-[-0.02em] text-black mb-8">
              <SplitText text="About" delay={0.2} />
            </h1>

            <motion.p
              className="text-xs font-mono uppercase tracking-wide leading-loose max-w-xs text-black/70"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.55,
              }}
            >
              I shoot cars, people, and anything worth remembering. Based in LA.
            </motion.p>
          </div>

          <motion.div
            className="pb-16"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
          >
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-black/30 mb-3">
              On the work
            </p>
            <p className="text-xs font-mono uppercase tracking-wide leading-loose max-w-xs text-black/50">
              I care more about the feeling of a photo than the settings that
              made it.
            </p>
          </motion.div>
        </div>

        {/* Right — image with animated reveal */}
        <div className="relative min-h-[60vh] md:min-h-screen overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <Image
              src="/LA.jpg"
              alt="Jalen Cheng"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Overlay wipe that pulls away */}
          <motion.div
            className="absolute inset-0 bg-[#F0E8D8] z-10 origin-top"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
          />
        </div>
      </section>

      {/* ══ STATS STRIP ══════════════════════════════════════════════════════ */}
      <section className="border-t border-black/[0.08] grid grid-cols-2 md:grid-cols-4">
        {stats.map((item, i) => (
          <FadeIn
            key={item.label}
            delay={0.1 + i * 0.08}
            y={12}
            className="border-r border-black/[0.08] p-6 last:border-r-0"
          >
            <p className="text-[9px] font-mono uppercase tracking-[0.25em] text-black/30 mb-2">
              {item.label}
            </p>
            <p className="text-[11px] font-mono uppercase tracking-wide text-black">
              {item.value}
            </p>
          </FadeIn>
        ))}
      </section>

      {/* ══ JOURNEY ══════════════════════════════════════════════════════════ */}
      <section className="grid md:grid-cols-2 border-t border-black/[0.08]">
        {/* Left — camera image */}
        <div className="relative min-h-[55vh] overflow-hidden">
          <FadeIn delay={0} y={0} className="absolute inset-0">
            <motion.div
              className="relative w-full h-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src="/camera.png"
                alt="Camera"
                fill
                className="object-cover"
              />
            </motion.div>
          </FadeIn>
        </div>

        {/* Right — text */}
        <div className="p-8 md:p-16 flex flex-col justify-center gap-14">
          {journey.map((item, i) => (
            <FadeIn key={item.index} delay={0.1 + i * 0.15} y={20}>
              <div className="space-y-4">
                <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-black/30">
                  {item.index} / {item.title}
                </p>
                <motion.div
                  className="h-px bg-black/10 overflow-hidden"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.2 + i * 0.1,
                  }}
                />
                <p className="text-xs font-mono uppercase tracking-wide leading-loose text-black/60">
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}

          {/* CTA buttons */}
          <FadeIn delay={0.45} y={16} className="flex gap-3 pt-2">
            <Link
              href="mailto:jalen@webverry.com"
              className="relative group border border-black/20 px-6 py-3 text-[9px] font-mono uppercase tracking-[0.2em] overflow-hidden transition-colors duration-300 hover:text-[#F0E8D8]"
            >
              <span className="absolute inset-0 bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
              <span className="relative">Contact</span>
            </Link>

            <a
              href="https://www.instagram.com/jalencheng"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group border border-black/20 px-6 py-3 text-[9px] font-mono uppercase tracking-[0.2em] overflow-hidden transition-colors duration-300 hover:text-[#F0E8D8] flex items-center gap-2"
            >
              <span className="absolute inset-0 bg-black scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
              <span className="relative">Instagram</span>
              <svg
                className="relative"
                width="8"
                height="8"
                viewBox="0 0 9 9"
                fill="none"
              >
                <path
                  d="M1 8L8 1M8 1H2M8 1V7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ══ SCROLL REVEAL QUOTE ══════════════════════════════════════════════ */}
      <section
        ref={quoteRef}
        className="border-t border-black/[0.08] px-6 md:px-16 py-24 overflow-hidden"
      >
        <blockquote className="text-[6vw] md:text-[4vw] font-black uppercase leading-tight tracking-[-0.02em] max-w-5xl flex flex-wrap gap-x-[0.25em] gap-y-[0.1em]">
          {quoteWords.map((word, i) => (
            <RevealWord
              key={i}
              word={word}
              progress={scrollYProgress}
              i={i}
              total={quoteWords.length}
            />
          ))}
        </blockquote>
      </section>

      <Footer />
    </div>
  );
}

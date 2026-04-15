"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type Category = "GRADUATION" | "PORTRAITS" | "TRAVEL";

interface Section {
  id: Category;
  index: string;
  year: string;
  desc: string;
  count: string;
  images: { src: string; alt: string; col: string; row: string }[];
}

const sections: Section[] = [
  {
    id: "GRADUATION",
    index: "01",
    year: "2023 — 2024",
    desc: "Marking the moment where one chapter closes and everything else begins.",
    count: "24",
    images: [
      { src: "/photos/grad1.jpg", alt: "Grad 1", col: "col-span-2", row: "row-span-2" },
      { src: "/photos/grad2.jpg", alt: "Grad 2", col: "col-span-1", row: "row-span-1" },
      { src: "/photos/grad3.jpg", alt: "Grad 3", col: "col-span-1", row: "row-span-1" },
      { src: "/photos/grad4.jpg", alt: "Grad 4", col: "col-span-1", row: "row-span-2" },
      { src: "/photos/grad5.jpg", alt: "Grad 5", col: "col-span-2", row: "row-span-1" },
    ],
  },
  {
    id: "PORTRAITS",
    index: "02",
    year: "2022 — 2025",
    desc: "People caught in the quiet space between performance and presence.",
    count: "38",
    images: [
      { src: "/photos/port1.jpg", alt: "Portrait 1", col: "col-span-1", row: "row-span-2" },
      { src: "/photos/port2.jpg", alt: "Portrait 2", col: "col-span-2", row: "row-span-1" },
      { src: "/photos/port3.jpg", alt: "Portrait 3", col: "col-span-1", row: "row-span-1" },
      { src: "/photos/port4.jpg", alt: "Portrait 4", col: "col-span-1", row: "row-span-1" },
      { src: "/photos/port5.jpg", alt: "Portrait 5", col: "col-span-1", row: "row-span-2" },
      { src: "/photos/port6.jpg", alt: "Portrait 6", col: "col-span-2", row: "row-span-1" },
    ],
  },
  {
    id: "TRAVEL",
    index: "03",
    year: "2021 — 2025",
    desc: "Unfamiliar light. Unfamiliar streets. Familiar feeling of being alive.",
    count: "61",
    images: [
      { src: "/photos/travel1.jpg", alt: "Travel 1", col: "col-span-3", row: "row-span-1" },
      { src: "/photos/travel2.jpg", alt: "Travel 2", col: "col-span-1", row: "row-span-2" },
      { src: "/photos/travel3.jpg", alt: "Travel 3", col: "col-span-2", row: "row-span-1" },
      { src: "/photos/travel4.jpg", alt: "Travel 4", col: "col-span-2", row: "row-span-1" },
      { src: "/photos/travel5.jpg", alt: "Travel 5", col: "col-span-1", row: "row-span-1" },
    ],
  },
];

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
    <span aria-label={text} className={`inline-flex overflow-hidden ${className}`}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "105%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + i * 0.038,
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}

function PhotoCard({
  src,
  alt,
  col,
  row,
  delay,
}: {
  src: string;
  alt: string;
  col: string;
  row: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`${col} ${row} relative overflow-hidden bg-[#D9CFBF] min-h-[140px]`}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={{ scale: 1.025, transition: { duration: 0.4, ease: "easeOut" } }}
    >
      {/* Shimmer that matches bg palette */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D9CFBF] to-[#C8BAA5]" />
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700"
        onLoad={(e) => {
          (e.target as HTMLImageElement).style.opacity = "1";
        }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundColor: "rgba(0,0,0,0)" }}
        whileHover={{ backgroundColor: "rgba(0,0,0,0.07)" }}
        transition={{ duration: 0.35 }}
      />
    </motion.div>
  );
}

function SectionBlock({ section }: { section: Section }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="py-20 border-t border-black/[0.08]">
      {/* Header */}
      <div className="flex items-end justify-between mb-10 px-6 md:px-16">
        <div>
          <motion.span
            className="block text-[10px] font-mono tracking-[0.25em] text-black/30 mb-3 uppercase"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1 }}
          >
            {section.index} — {section.year}
          </motion.span>
          <h2 className="text-[11vw] md:text-[7vw] font-black uppercase tracking-[-0.02em] leading-none text-black">
            {inView && <SplitText text={section.id} delay={0.15} />}
          </h2>
        </div>

        <div className="hidden md:flex flex-col items-end gap-2 pb-1">
          <motion.span
            className="font-mono text-[10px] tracking-widest text-black/25 uppercase"
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.55 }}
          >
            {section.count} frames
          </motion.span>
          <motion.p
            className="text-[11px] text-black/40 text-right max-w-[220px] leading-relaxed"
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.65 }}
          >
            {section.desc}
          </motion.p>
        </div>
      </div>

      {/* Photo grid */}
      <div className="px-6 md:px-16 grid grid-cols-4 auto-rows-[200px] gap-2">
        {section.images.map((img, i) => (
          <PhotoCard
            key={img.src}
            src={img.src}
            alt={img.alt}
            col={img.col}
            row={img.row}
            delay={0.1 + i * 0.07}
          />
        ))}
      </div>

      {/* Mobile desc */}
      <motion.p
        className="md:hidden mt-5 px-6 text-[11px] text-black/40 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
      >
        {section.desc}
      </motion.p>
    </div>
  );
}

export default function PhotosPage() {
  const [active, setActive] = useState<Category | "ALL">("ALL");

  const filters: (Category | "ALL")[] = ["ALL", "GRADUATION", "PORTRAITS", "TRAVEL"];
  const visible =
    active === "ALL" ? sections : sections.filter((s) => s.id === active);

  return (
    // bg matches rest of site, pt-24 clears your fixed navbar, no bottom padding (footer handles it)
    <main className="min-h-screen bg-[#F0E8D8] pt-24">
      <Navbar />
      {/* ── Hero ── */}
      <div className="px-6 md:px-16 pt-16 pb-10">
        <motion.p
          className="text-[10px] font-mono tracking-[0.3em] text-black/30 uppercase mb-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Visual Archive · Jalen Cheng
        </motion.p>

        <div className="overflow-hidden">
          <h1 className="text-[17vw] md:text-[12vw] font-black uppercase leading-[0.88] tracking-[-0.03em] text-black">
            <SplitText text="Photos" delay={0.1} />
          </h1>
        </div>

        {/* Animated rule */}
        <div className="mt-6 h-px bg-black/10 overflow-hidden">
          <motion.div
            className="h-full bg-black/40"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          />
        </div>
      </div>

      {/* ── Filter pills ── */}
      <div className="px-6 md:px-16 mb-2">
        <div className="flex gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="relative px-5 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] rounded-full overflow-hidden border border-black/15 transition-colors duration-200"
            >
              <AnimatePresence>
                {active === f && (
                  <motion.span
                    layoutId="pill"
                    className="absolute inset-0 bg-black rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </AnimatePresence>
              <span
                className={`relative z-10 transition-colors duration-150 ${
                  active === f ? "text-[#F0E8D8]" : "text-black/40"
                }`}
              >
                {f}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Content ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {visible.map((section) => (
            <SectionBlock key={section.id} section={section} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ── Thin bridge above footer ── */}
      <div className="mt-16 px-6 md:px-16 pb-10 border-t border-black/[0.06] flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-widest text-black/20">
          Jalen Cheng · Photography
        </span>
        <span className="text-[10px] font-mono text-black/20">
          {new Date().getFullYear()}
        </span>
      </div>
      <Footer />
    </main>
  );
}
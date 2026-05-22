"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type Category = "GRADUATION" | "PORTRAITS" | "TRAVEL" | "CARS";

interface Section {
  id: Category;
  index: string;
  year: string;
  desc: string;
  count: string;
  images: { src: string; alt: string }[];
}

const sections: Section[] = [
  {
    id: "GRADUATION",
    index: "01",
    year: "2023 — 2024",
    desc: "Marking the moment where one chapter closes and everything else begins.",
    count: "24",
    images: [
      { src: "/photos/grad1.jpg", alt: "Grad 1" },
      { src: "/photos/grad2.jpg", alt: "Grad 2" },
      { src: "/photos/grad3.jpg", alt: "Grad 3" },
      { src: "/photos/grad4.jpg", alt: "Grad 4" },
      { src: "/photos/grad5.jpg", alt: "Grad 5" },
    ],
  },
  {
    id: "PORTRAITS",
    index: "02",
    year: "2022 — 2025",
    desc: "People caught in the quiet space between performance and presence.",
    count: "38",
    images: [
      { src: "/photos/port1.jpg", alt: "Portrait 1" },
      { src: "/photos/port2.jpg", alt: "Portrait 2" },
      { src: "/photos/port3.jpg", alt: "Portrait 3" },
      { src: "/photos/port4.jpg", alt: "Portrait 4" },
      { src: "/photos/port5.jpg", alt: "Portrait 5" },
      { src: "/photos/port6.jpg", alt: "Portrait 6" },
    ],
  },
  {
    id: "TRAVEL",
    index: "03",
    year: "2021 — 2025",
    desc: "Unfamiliar light. Unfamiliar streets. Familiar feeling of being alive.",
    count: "32",
    images: [
      { src: "/photos/travel1.jpg", alt: "Travel 1" },
      { src: "/photos/travel2.jpg", alt: "Travel 2" },
      { src: "/photos/travel3.jpg", alt: "Travel 3" },
      { src: "/photos/travel4.jpg", alt: "Travel 4" },
      { src: "/photos/travel5.jpg", alt: "Travel 5" },
    ],
  },
  {
    id: "CARS",
    index: "04",
    year: "2022 — 2025",
    desc: "Machines built for speed, shot for stillness.",
    count: "32",
    images: [
      { src: "/Visuals/car1.webp", alt: "Cars 1" },
      { src: "/Visuals/car2.webp", alt: "Cars 2" },
      { src: "/Visuals/car3.webp", alt: "Cars 3" },
      { src: "/Visuals/car4.webp", alt: "Cars 4" },
      { src: "/Visuals/car5.webp", alt: "Cars 5" },
      { src: "/Visuals/car6.webp", alt: "Cars 6" },
      { src: "/Visuals/car7.webp", alt: "Cars 7" },
      { src: "/Visuals/car8.webp", alt: "Cars 8" },
      { src: "/Visuals/car9.webp", alt: "Cars 9" },
      { src: "/Visuals/car10.webp", alt: "Cars 10" },
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
  delay,
}: {
  src: string;
  alt: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden bg-[#D9CFBF]"
      style={{ aspectRatio: "4/3" }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={{ scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#D9CFBF] to-[#C8BAA5]" />
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        sizes="(max-width: 768px) 100vw, 50vw"
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

      {/* Photo grid — uniform 2-col layout for all sections */}
      <div className="px-6 md:px-16 grid grid-cols-2 gap-3">
        {section.images.map((img, i) => (
          <PhotoCard key={img.src} src={img.src} alt={img.alt} delay={0.1 + i * 0.06} />
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

  const filters: (Category | "ALL")[] = [
    "ALL",
    "GRADUATION",
    "PORTRAITS",
    "TRAVEL",
    "CARS",
  ];

  const visible =
    active === "ALL" ? sections : sections.filter((s) => s.id === active);

  return (
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
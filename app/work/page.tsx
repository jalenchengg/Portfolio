"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clients, ClientKey } from "@/app/data/clients";
import { layoutPattern } from "@/app/data/patterns";
import FilterColumn from "@/components/Filter/FilterColumn";
import PhotoCard from "@/components/PhotoCard";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// ─── Letter-by-letter heading ─────────────────────────────────────────────────
function SplitText({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span aria-label={text} className="inline-flex overflow-hidden">
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

export default function Page() {
  const [active, setActive] = useState<ClientKey>("blklst");
  const photos = clients[active].photos;
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          MOBILE
      ══════════════════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col min-h-screen bg-[#F0E8D8]">
        <Navbar />

        {/* Mobile hero */}
        <div className="px-4 pt-24 pb-4">
          <motion.p
            className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/30 mb-3"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Selected Work
          </motion.p>
          <h1 className="text-[18vw] font-black uppercase leading-[0.88] tracking-[-0.02em] text-black">
            <SplitText text="Work" delay={0.15} />
          </h1>
          <div className="mt-4 h-px bg-black/10 overflow-hidden">
            <motion.div
              className="h-full bg-black/40"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            />
          </div>
        </div>

        {/* Filter bar + description */}
        <div className="px-4 pt-2">
          <div className="py-2">
            <FilterColumn active={active} setActive={setActive} mobile />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25 }}
              className="py-3 border-t border-black/[0.08]"
            >
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-black/30 mb-1">
                {clients[active].name}
              </p>
              <p className="text-[10px] font-mono uppercase tracking-wide text-black/50 leading-relaxed">
                {clients[active].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Photo strip */}
        <div className="flex items-center py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="flex gap-3 overflow-x-auto overflow-y-hidden px-4 snap-x snap-mandatory scrollbar-none w-full"
              style={{ touchAction: "pan-x" }}
            >
              {photos.map((src, i) => (
                <div
                  key={i}
                  className="shrink-0 w-[80vw] aspect-[4/5] relative overflow-hidden border border-black/[0.08] snap-center"
                >
                  <PhotoCard
                    span={1}
                    aspect="4/5"
                    index={i}
                    src={src}
                    alt={`${active} photo ${i + 1}`}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <Footer />
      </div>

      {/* ══════════════════════════════════════════════════════
          DESKTOP
      ══════════════════════════════════════════════════════ */}
      <div className="hidden md:flex min-h-screen flex-col bg-[#F0E8D8]">
        <Navbar />

        {/* Desktop hero */}
        <div className="px-16 pt-32 pb-8">
          <motion.p
            className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/30 mb-4"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Selected Work
          </motion.p>
          <h1 className="text-[10vw] font-black uppercase leading-[0.88] tracking-[-0.02em] text-black">
            <SplitText text="Work" delay={0.15} />
          </h1>
          <div className="mt-6 h-px bg-black/10 overflow-hidden">
            <motion.div
              className="h-full bg-black/40"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            />
          </div>
        </div>

        {/* Desktop body */}
        <div ref={contentRef} className="flex flex-1 relative">

          {/* Filter sidebar */}
          <motion.div
            className="w-1/4 shrink-0 self-start sticky top-[60px]"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <div className="p-4 pl-16">
              {/* Active client info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="mb-6"
                >
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-black/30 mb-1">
                    {clients[active].name}
                  </p>
                  <p className="text-[10px] font-mono uppercase tracking-wide text-black/50 leading-relaxed max-w-[180px]">
                    {clients[active].description}
                  </p>
                  <div className="mt-3 h-px bg-black/[0.08]" />
                </motion.div>
              </AnimatePresence>

              <FilterColumn active={active} setActive={setActive} />
            </div>
          </motion.div>

          {/* Gallery */}
          <motion.div
            className="flex-1 p-4 pr-16 border-l border-black/[0.08]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
              >
                {layoutPattern.slice(0, photos.length).map((block, i) => (
                  <PhotoCard
                    key={`${active}-${i}`}
                    span={block.span}
                    aspect={block.aspect}
                    index={i}
                    src={photos[i]}
                    alt={`${active} photo ${i + 1}`}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <Footer />
      </div>
    </>
  );
}
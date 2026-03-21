"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clients, ClientKey } from "@/app/data/clients";
import { layoutPattern } from "@/app/data/patterns";
import FilterColumn from "@/components/Filter/FilterColumn";
import PhotoCard from "@/components/PhotoCard";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Page() {
  const [active, setActive] = useState<ClientKey>("blklst");
  const photos = clients[active].photos;
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="md:hidden flex flex-col min-h-screen bg-[#F0E8D8]">
        <Navbar />

        {/* Filter bar + description */}
        <div className="px-4 pt-[60px]">
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
              className="py-3 border-t border-black/10"
            >
              <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-1">
                {clients[active].name}
              </p>
              <p className="text-[10px] uppercase tracking-widest opacity-60 leading-relaxed">
                {clients[active].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Photo strip — only scrolls horizontally */}
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
                  className="shrink-0 w-[80vw] aspect-[4/5] relative overflow-hidden border border-black snap-center"
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

      {/* DESKTOP — normal scrollable layout */}
      <div className="hidden md:flex min-h-screen flex-col">
        <Navbar />

        <div ref={contentRef} className="flex flex-1 pt-[60px] relative">
          {/* Desktop filter */}
          <div className="w-1/4 shrink-0 self-start sticky top-[60px]">
            <div className="p-4">
              <FilterColumn active={active} setActive={setActive} />
            </div>
          </div>

          {/* Desktop gallery */}
          <div className="flex-1 p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
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
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

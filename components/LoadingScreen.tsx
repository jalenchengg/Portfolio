"use client";

import { useState, useEffect } from "react";

/* ── letter-by-letter reveal (CSS transitions, no Framer dep) ── */
function RevealText({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) {
  return (
    <span className="inline-flex overflow-hidden">
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            transform: "translateY(0)",
            opacity: 1,
            transition: `transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay + i * 0.04}s, opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay + i * 0.04}s`,
            animation: `revealUp 0.6s cubic-bezier(0.16,1,0.3,1) ${delay + i * 0.04}s both`,
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

export default function LoadingScreen({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "hold" | "exit">("loading");
  const [wipeUp, setWipeUp] = useState(false);

  /* ── progress 0 → 100 ── */
  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 2400;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const pct = Math.min(100, Math.round(((ts - start) / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase("exit"), 400);
      }
    };

    const timeout = setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, 600);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, []);

  /* ── exit sequence ── */
  useEffect(() => {
    if (phase !== "exit") return;

    const t1 = setTimeout(() => setWipeUp(true), 100);
    const t2 = setTimeout(() => onComplete?.(), 900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [phase, onComplete]);

  return (
    <>
      {/* keyframes for letter reveal */}
      <style>{`
        @keyframes revealUp {
          from { transform: translateY(110%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>

      <div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
        style={{
          transform: wipeUp ? "translateY(-100%)" : "translateY(0)",
          transition: wipeUp
            ? "transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)"
            : "none",
          pointerEvents: phase === "exit" ? "none" : "auto",
        }}
      >
        {/* ── top-left label ── */}
        <div className="absolute top-8 left-8 font-mono text-[10px] tracking-[0.25em] uppercase text-[#F0E8D8]/25">
          <RevealText text="Jalen Cheng" delay={0.2} />
        </div>

        {/* ── top-right label ── */}
        <div className="absolute top-8 right-8 font-mono text-[10px] tracking-[0.25em] uppercase text-[#F0E8D8]/25">
          <RevealText text="Portfolio · 2026" delay={0.3} />
        </div>

        {/* ── center name ── */}
        <div className="text-center mb-12">
          <div className="overflow-hidden mb-1">
            <h1 className="font-black text-[clamp(48px,12vw,140px)] uppercase tracking-[-0.03em] leading-[0.9] text-[#F0E8D8] m-0">
              <RevealText text="JALEN" delay={0.15} />
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="font-black text-[clamp(48px,12vw,140px)] uppercase tracking-[-0.03em] leading-[0.9] text-[#F0E8D8] m-0">
              <RevealText text="CHENG" delay={0.35} />
            </h1>
          </div>

          <div className="mt-4 overflow-hidden">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#F0E8D8]/30 m-0">
              <RevealText text="Photographer · Los Angeles" delay={0.55} />
            </p>
          </div>
        </div>

        {/* ── progress bar ── */}
        <div className="absolute bottom-20 left-8 right-8 max-w-[320px] mx-auto">
          <div className="flex justify-between items-baseline mb-2.5">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#F0E8D8]/20">
              Loading
            </span>
            <span
              className="font-mono text-[32px] font-extralight tracking-tight text-[#F0E8D8]"
              style={{ fontVariantNumeric: "tabular-nums", minWidth: 80, textAlign: "right" }}
            >
              {String(progress).padStart(3, "\u2007")}
            </span>
          </div>

          {/* track */}
          <div className="h-px bg-[#F0E8D8]/10 overflow-hidden rounded-sm">
            <div
              className="h-full bg-[#F0E8D8]"
              style={{
                width: `${progress}%`,
                transition: "width 0.08s linear",
              }}
            />
          </div>
        </div>

        {/* ── bottom label ── */}
        <div className="absolute bottom-8 left-0 right-0 text-center font-mono text-[9px] tracking-[0.3em] uppercase text-[#F0E8D8]/[0.12]">
          <RevealText text="© 2026" delay={0.7} />
        </div>
      </div>
    </>
  );
}
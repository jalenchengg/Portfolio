"use client";

import { useRef, useEffect, useCallback, useState } from "react";

/* ── Types ── */
interface PhotoCard {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  homeX: number;
  homeY: number;
  gridX: number;
  gridY: number;
  rot: number;
  rotV: number;
  restRot: number;
  phase: number;
  driftSpeed: number;
  driftAmpX: number;
  driftAmpY: number;
  src: string;
  alt: string;
  label: string;
  loaded: boolean;
  imgEl: HTMLImageElement | null;
}

interface PhotoDef {
  src: string;
  alt: string;
  label: string;
  w: number;
  h: number;
}

/* ── Config ── */
const CURSOR_REPEL = 200;
const CURSOR_STRENGTH = 3.5;
const CARD_REPEL = 35;
const CARD_STRENGTH = 1.8;
const FRICTION = 0.97;
const CURSOR_LERP = 0.1;
const CENTER_PULL = 0.003;
const CORNER_RADIUS = 6;

/* ── Photo definitions — 16 cards, mixed categories ── */
const PHOTOS: PhotoDef[] = [
  { src: "/Visuals/car1.webp", alt: "Car 1", label: "CARS", w: 145, h: 108 },
  {
    src: "/photos/port1.jpg",
    alt: "Portrait 1",
    label: "PORTRAITS",
    w: 108,
    h: 140,
  },
  {
    src: "/photos/travel1.jpg",
    alt: "Travel 1",
    label: "TRAVEL",
    w: 148,
    h: 98,
  },
  {
    src: "/photos/grad1.jpg",
    alt: "Graduation 1",
    label: "GRADUATION",
    w: 120,
    h: 118,
  },
  { src: "/Visuals/car3.webp", alt: "Car 3", label: "CARS", w: 138, h: 92 },
  {
    src: "/photos/port2.jpg",
    alt: "Portrait 2",
    label: "PORTRAITS",
    w: 105,
    h: 138,
  },
  {
    src: "/photos/travel3.jpg",
    alt: "Travel 3",
    label: "TRAVEL",
    w: 142,
    h: 94,
  },
  {
    src: "/photos/grad2.jpg",
    alt: "Graduation 2",
    label: "GRADUATION",
    w: 115,
    h: 115,
  },
  { src: "/Visuals/car5.webp", alt: "Car 5", label: "CARS", w: 140, h: 100 },
  {
    src: "/photos/port3.jpg",
    alt: "Portrait 3",
    label: "PORTRAITS",
    w: 106,
    h: 135,
  },
  {
    src: "/photos/travel2.jpg",
    alt: "Travel 2",
    label: "TRAVEL",
    w: 135,
    h: 100,
  },
  { src: "/Visuals/car7.webp", alt: "Car 7", label: "CARS", w: 142, h: 96 },
  {
    src: "/photos/port4.jpg",
    alt: "Portrait 4",
    label: "PORTRAITS",
    w: 110,
    h: 142,
  },
  {
    src: "/photos/grad3.jpg",
    alt: "Graduation 3",
    label: "GRADUATION",
    w: 118,
    h: 118,
  },
  {
    src: "/photos/travel4.jpg",
    alt: "Travel 4",
    label: "TRAVEL",
    w: 140,
    h: 95,
  },
  { src: "/Visuals/car9.webp", alt: "Car 9", label: "CARS", w: 136, h: 102 },
];

export default function GravityWall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const photosRef = useRef<PhotoCard[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999, sx: -9999, sy: -9999 });
  const snappedRef = useRef(false);
  const [snapped, setSnapped] = useState(false);
  const timeRef = useRef(0);
  const rafRef = useRef<number>(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  /* ── Preload images ── */
  const preloadImages = useCallback(() => {
    photosRef.current.forEach((p) => {
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        p.imgEl = img;
        p.loaded = true;
      };
      img.src = p.src;
    });
  }, []);

  /* ── Init / resize ── */
  const initPhotos = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const rect = container.getBoundingClientRect();
    const W = rect.width;
    const H = rect.height;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    sizeRef.current = { w: W, h: H };

    const count = PHOTOS.length;
    // Center offset — pull everything up slightly so the cluster
    // sits visually centered accounting for navbar + bottom hint
    const centerY = H * 0.46;
    const centerX = W / 2;

    // Distribute home positions in concentric ellipses
    const innerCount = Math.min(6, count);
    const outerCount = count - innerCount;

    const cols = Math.ceil(Math.sqrt(count * 1.5));
    const rows = Math.ceil(count / cols);

    photosRef.current = PHOTOS.map((def, i) => {
      // Home positions: two rings around center
      let homeX: number, homeY: number;
      if (i < innerCount) {
        const angle = (i / innerCount) * Math.PI * 2 - Math.PI / 2;
        homeX = centerX + Math.cos(angle) * W * 0.18 - def.w / 2;
        homeY = centerY + Math.sin(angle) * H * 0.2 - def.h / 2;
      } else {
        const j = i - innerCount;
        const angle = (j / outerCount) * Math.PI * 2 - Math.PI / 2;
        homeX = centerX + Math.cos(angle) * W * 0.35 - def.w / 2;
        homeY = centerY + Math.sin(angle) * H * 0.35 - def.h / 2;
      }

      // Grid positions for snapped state
      const col = i % cols;
      const row = Math.floor(i / cols);
      const gridPadX = (W - cols * 150) / 2;
      const gridPadY = (H - rows * 130) / 2 - 20;
      const gridX = gridPadX + col * 150 + (150 - def.w) / 2;
      const gridY = gridPadY + row * 130 + (130 - def.h) / 2;

      const restRot = (Math.random() - 0.5) * 6;

      return {
        x: homeX,
        y: homeY,
        vx: 0,
        vy: 0,
        w: def.w,
        h: def.h,
        homeX,
        homeY,
        gridX,
        gridY,
        rot: restRot,
        rotV: 0,
        restRot,
        phase: Math.random() * Math.PI * 2,
        driftSpeed: 0.08 + Math.random() * 0.06,
        driftAmpX: 0.04 + Math.random() * 0.03,
        driftAmpY: 0.03 + Math.random() * 0.025,
        src: def.src,
        alt: def.alt,
        label: def.label,
        loaded: false,
        imgEl: null,
      };
    });

    preloadImages();
  }, [preloadImages]);

  /* ── Physics update ── */
  const update = useCallback(() => {
    const photos = photosRef.current;
    const { w: W, h: H } = sizeRef.current;
    const m = mouseRef.current;
    const isSnapped = snappedRef.current;
    timeRef.current += 0.016;
    const t = timeRef.current;

    // Smooth cursor
    if (m.x > -999) {
      if (m.sx < -999) {
        m.sx = m.x;
        m.sy = m.y;
      }
      m.sx += (m.x - m.sx) * CURSOR_LERP;
      m.sy += (m.y - m.sy) * CURSOR_LERP;
    } else {
      m.sx = -9999;
      m.sy = -9999;
    }

    for (let i = 0; i < photos.length; i++) {
      const p = photos[i];

      if (isSnapped) {
        p.vx += (p.gridX - p.x) * 0.05;
        p.vy += (p.gridY - p.y) * 0.05;
        p.rotV += (0 - p.rot) * 0.05;
      } else {
        // Gentle drift
        p.vx += Math.sin(t * p.driftSpeed + p.phase) * p.driftAmpX;
        p.vy += Math.cos(t * p.driftSpeed * 0.8 + p.phase + 2) * p.driftAmpY;
        // Pull toward home
        p.vx += (p.homeX - p.x) * CENTER_PULL;
        p.vy += (p.homeY - p.y) * CENTER_PULL;
        p.rotV += (p.restRot - p.rot) * 0.005;
      }

      // Cursor repel
      const cx = p.x + p.w / 2;
      const cy = p.y + p.h / 2;

      if (m.sx > -999) {
        const dx = cx - m.sx;
        const dy = cy - m.sy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CURSOR_REPEL && dist > 1) {
          const ease = Math.pow(1 - dist / CURSOR_REPEL, 3);
          p.vx += (dx / dist) * ease * CURSOR_STRENGTH;
          p.vy += (dy / dist) * ease * CURSOR_STRENGTH;
          p.rotV += (dx > 0 ? 1 : -1) * ease * 0.15;
        }
      }

      // Card-to-card repulsion
      for (let j = i + 1; j < photos.length; j++) {
        const q = photos[j];
        const qcx = q.x + q.w / 2;
        const qcy = q.y + q.h / 2;

        const overlapX = p.w / 2 + q.w / 2 + CARD_REPEL - Math.abs(cx - qcx);
        const overlapY = p.h / 2 + q.h / 2 + CARD_REPEL - Math.abs(cy - qcy);

        if (overlapX > 0 && overlapY > 0) {
          const dx = cx - qcx;
          const dy = cy - qcy;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const push =
            (Math.min(overlapX, overlapY) / dist) * CARD_STRENGTH * 0.1;
          p.vx += (dx / dist) * push;
          p.vy += (dy / dist) * push;
          q.vx -= (dx / dist) * push;
          q.vy -= (dy / dist) * push;
        }
      }

      // Apply velocity
      p.vx *= FRICTION;
      p.vy *= FRICTION;
      p.rotV *= 0.95;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.rotV;

      // Soft boundary bounce
      const margin = 5;
      if (p.x < margin) {
        p.x = margin;
        p.vx = Math.abs(p.vx) * 0.2;
      }
      if (p.x > W - p.w - margin) {
        p.x = W - p.w - margin;
        p.vx = -Math.abs(p.vx) * 0.2;
      }
      if (p.y < margin) {
        p.y = margin;
        p.vy = Math.abs(p.vy) * 0.2;
      }
      if (p.y > H - p.h - margin) {
        p.y = H - p.h - margin;
        p.vy = -Math.abs(p.vy) * 0.2;
      }
    }
  }, []);

  /* ── Canvas draw ── */
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const { w: W, h: H } = sizeRef.current;

    ctx.clearRect(0, 0, W, H);

    for (const p of photosRef.current) {
      ctx.save();
      ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
      ctx.rotate((p.rot * Math.PI) / 180);

      // Clip rounded rect
      ctx.beginPath();
      roundRect(ctx, -p.w / 2, -p.h / 2, p.w, p.h, CORNER_RADIUS);
      ctx.closePath();
      ctx.clip();

      // Draw image or placeholder
      if (p.loaded && p.imgEl) {
        const imgRatio = p.imgEl.naturalWidth / p.imgEl.naturalHeight;
        const cardRatio = p.w / p.h;
        let sw: number, sh: number, sx: number, sy: number;
        if (imgRatio > cardRatio) {
          sh = p.imgEl.naturalHeight;
          sw = sh * cardRatio;
          sx = (p.imgEl.naturalWidth - sw) / 2;
          sy = 0;
        } else {
          sw = p.imgEl.naturalWidth;
          sh = sw / cardRatio;
          sx = 0;
          sy = (p.imgEl.naturalHeight - sh) / 2;
        }
        ctx.drawImage(p.imgEl, sx, sy, sw, sh, -p.w / 2, -p.h / 2, p.w, p.h);
      } else {
        ctx.fillStyle = "#C8BAA5";
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      }

      // Subtle border
      ctx.restore();
      ctx.save();
      ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
      ctx.rotate((p.rot * Math.PI) / 180);
      ctx.strokeStyle = "rgba(0,0,0,0.06)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      roundRect(ctx, -p.w / 2, -p.h / 2, p.w, p.h, CORNER_RADIUS);
      ctx.stroke();

      // Category label
      ctx.fillStyle = "rgba(255,255,255,0.7)";
      ctx.font = "500 8px monospace";
      ctx.textAlign = "center";
      ctx.fillText(p.label, 0, p.h / 2 - 7);

      ctx.restore();
    }
  }, []);

  /* ── Animation loop ── */
  const loop = useCallback(() => {
    update();
    draw();
    rafRef.current = requestAnimationFrame(loop);
  }, [update, draw]);

  /* ── Setup ── */
  useEffect(() => {
    initPhotos();
    rafRef.current = requestAnimationFrame(loop);

    const handleResize = () => initPhotos();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [initPhotos, loop]);

  /* ── Mouse handlers ── */
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  };

  const handleMouseLeave = () => {
    mouseRef.current.x = -9999;
    mouseRef.current.y = -9999;
    mouseRef.current.sx = -9999;
    mouseRef.current.sy = -9999;
  };

  const handleClick = () => {
    snappedRef.current = !snappedRef.current;
    setSnapped(snappedRef.current);
  };

  /* ── Touch support ── */
  const handleTouchMove = (e: React.TouchEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || !e.touches[0]) return;
    mouseRef.current.x = e.touches[0].clientX - rect.left;
    mouseRef.current.y = e.touches[0].clientY - rect.top;
  };

  const handleTouchEnd = () => {
    mouseRef.current.x = -9999;
    mouseRef.current.y = -9999;
    mouseRef.current.sx = -9999;
    mouseRef.current.sy = -9999;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-[#F0E8D8] overflow-hidden select-none"
      style={{ cursor: "crosshair" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Canvas layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Bottom hint — only UI text remaining */}
      <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none z-10">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/15">
          {snapped ? "Click to scatter" : "Explore · Click to organize"}
        </p>
      </div>
    </div>
  );
}

/* ── Canvas rounded rect helper ── */
function roundRect(
  c: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  c.moveTo(x + r, y);
  c.lineTo(x + w - r, y);
  c.quadraticCurveTo(x + w, y, x + w, y + r);
  c.lineTo(x + w, y + h - r);
  c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  c.lineTo(x + r, y + h);
  c.quadraticCurveTo(x, y + h, x, y + h - r);
  c.lineTo(x, y + r);
  c.quadraticCurveTo(x, y, x + r, y);
}

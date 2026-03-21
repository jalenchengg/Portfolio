"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  span: number;
  aspect?: string;
  index: number;
  src?: string;
  alt?: string;
};

export default function PhotoCard({ span, aspect, index, src, alt }: Props) {
  const [loaded, setLoaded] = useState(false);

  // col-span-2 only on desktop, always single column on mobile
  const spanClass = span === 2 ? "col-span-2 md:col-span-2" : "col-span-1";

  return (
    <motion.div
      className={`relative overflow-hidden border border-black ${spanClass}`}
      style={aspect ? { aspectRatio: aspect } : { minHeight: "300px" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded || !src ? 1 : 0 }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          className="object-cover"
          priority={index < 3}
          sizes="(max-width: 768px) 50vw, 33vw"
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-[#e8e4da]" />
      )}
    </motion.div>
  );
}
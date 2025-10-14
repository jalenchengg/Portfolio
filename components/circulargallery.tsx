"use client";
import React, { useEffect, useState } from "react";

interface CircularGalleryProps {
  images: string[];
  radius?: number;
  speed?: number;
}

const CircularGallery: React.FC<CircularGalleryProps> = ({
  images,
  radius = 230,
  speed = 40,
}) => {
  const [mounted, setMounted] = useState(false);
  const [currentRadius, setCurrentRadius] = useState(radius);
  const [imageSize, setImageSize] = useState(64);

  useEffect(() => {
    setMounted(true);

    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCurrentRadius(120);
        setImageSize(40);
      } else if (width < 1024) {
        setCurrentRadius(180);
        setImageSize(52);
      } else {
        setCurrentRadius(radius);
        setImageSize(64);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [radius]);

  if (!mounted) return null;

  const total = images.length;

  return (
    <div className="">
      <div
        className="relative"
        style={{
          width: `${currentRadius * 2 + imageSize}px`,
          height: `${currentRadius * 2 + imageSize}px`,
          animation: `spin ${speed}s linear infinite`,
          transformOrigin: "center center",
        }}
      >
        <style jsx>{`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>

        {images.map((src, i) => {
          const deg = (360 / total) * i;
          const rad = (deg * Math.PI) / 180;
          const x = Math.cos(rad) * currentRadius;
          const y = Math.sin(rad) * currentRadius;

          return (
            <img
              key={i}
              src={src}
              alt={`img-${i}`}
              className="absolute rounded-lg object-cover shadow-md"
              style={{
                width: `${imageSize}px`,
                height: `${imageSize}px`,
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`, // no rotate!
              }}
            />
          );
        })}
      </div>
    </div>
    
  );
};

export default CircularGallery;

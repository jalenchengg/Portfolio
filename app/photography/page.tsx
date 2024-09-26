"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gallery = () => {
  const [view, setView] = useState("grid");

  const images = [
    {
      src: "/image1.jpg",
      alt: "Image 1",
      title: "PC_01",
      description: "Laguna Beach / Crescent Bay",
    },
    {
      src: "/image2.jpg",
      alt: "Image 2",
      title: "PC_02",
      description: "Los Angeles | Beaudry Ave",
    },
    {
      src: "/image3.jpg",
      alt: "Image 3",
      title: "PC_03",
      description: "5 fwy / Heading to Bay",
    },
    {
      src: "/image4.jpg",
      alt: "Image 4",
      title: "PC_04",
      description: "Location Unknown",
    },
    {
      src: "/image5.jpg",
      alt: "Image 5",
      title: "PC_05",
      description: "Yosemite / Upper Falls",
    },
    {
      src: "/image6.jpg",
      alt: "Image 6",
      title: "PC_06",
      description: "SpaceX / Falcon 9",
    },
    {
      src: "/image7.jpg",
      alt: "Image 7",
      title: "PC_07",
      description: "Ohtani Home Run / Dodger Stadium",
    },
    {
      src: "/image8.jpg",
      alt: "Image 8",
      title: "PC_08",
      description: "BMW G80 M3 / Car Meet",
    },
    // {
    //   src: "/image9.jpg",
    //   alt: "Image 9",
    //   title: "PC_09",
    //   description: "BMW G80 M3 / Car Meet",
    // },
    {
      src: "/image10.jpg",
      alt: "Image 10",
      title: "PC_10",
      description: "BMW G80 M3 / Car Meet",
    },
  ];

  return (
    <div className="w-full">
      <Navbar />
      <div className="mt-9 pt-6" />
      <div className="mt-8 flex justify-between items-center mb-8 p-4">
        <div>
          <button
            className={`mr-4 ${view === "grid" ? "font-bold" : ""}`}
            onClick={() => setView("grid")}
          >
            GRID
          </button>
          /
          <button
            className={`ml-4 ${view === "list" ? "font-bold" : ""}`}
            onClick={() => setView("list")}
          >
            LIST
          </button>
        </div>
      </div>

      {/* Grid/List Display */}
      <div
        className={`grid gap-4 p-4 ${
          view === "grid" ? "grid-cols-3" : "grid-cols-1"
        }`}
      >
        {images.map((image, index) => (
          <div key={index} className="relative group w-full h-80">
            <Image
              src={image.src}
              alt={image.alt}
              width={1080}
              height={1080}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100">
              <h2 className="text-sm font-bold">{image.title}</h2>
              <p className="text-xs">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;

"use client";

import Navbar from "@/components/navbar";
import CircularGallery from "@/components/circulargallery";
import Footer from "@/components/footer";

export default function Home() {
  const images = Array(12).fill("/m2 main.jpg");

  return (
    <div className=" bg-[#ffffe7]">
      <Navbar />
      <section className="relative flex flex-col items-center justify-center h-screen pt-24">
        <CircularGallery images={images} radius={230} speed={50} />
      </section>
      <Footer />
    </div>
  );
}

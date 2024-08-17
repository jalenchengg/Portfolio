"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col sm:px-6 md:px-16 relative bg-gray-200 min-h-screen">
      <Navbar />
      <main className="w-full md:min-h-screen flex flex-col items-start justify-center mt-24 sm:mt-16 md:mt-24">
        <div className="py-16px md:py-0">
          <h2 className="font-display text-3xl leading-none mb-6">
            <span>Designer &amp; Developer</span>
          </h2>
          <p className="animate-fade text-lg max-w-xs">
            Currently studying computer science @ MTSAC.
          </p>
        </div>
        <div className="flex justify-center md:justify-end px-0 md:px-44 mt-6 md:mt-0">
          <Image
            src="/laview.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
            className="w-72 h-72 md:w-96 md:h-96 object-cover"
          />
        </div>
      </main>
      <div className="relative w-full min-h-screen"></div>
      <Footer />
    </div>
  );
}

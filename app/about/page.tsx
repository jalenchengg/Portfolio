"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col bg-gray-200">
      <Navbar />
      <main className="flex flex-row min-h-screen items-center justify-between md:px-24 pt-13 w-full">
        <div>
          <h2 className="font-display text-3xl mb-6">
            <span>Designer &amp; Developer</span>
          </h2>
          <p className="animate-fade text-lg max-w-xs">
            Currently studying computer science @ UCI.
          </p>
        </div>
        <div className="flex justify-end px-44">
          <Image
            src="/laview.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </main>
      <div className="relativew-full min-h-screen"></div>
      <Footer />
    </div>
  );
}

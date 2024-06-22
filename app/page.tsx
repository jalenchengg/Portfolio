"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Image from "next/image";
// import Colorchange from "@/components/Colorchange";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Navbar />
      {/* <Colorchange /> */}
      {
        <div className="flex items-center justify-center">
          <Image src="/mountain.jpg" alt="mountain" width={1080} height={1080} />
        </div>
      }
      <Footer />
    </main>
  );
}

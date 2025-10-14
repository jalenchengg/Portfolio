"use client";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Frame8() {
  return (
    <section className="relative flex w-full min-h-screen overflow-hidden">
      <Navbar />
      {/* === LEFT SECTION === */}
      <div className="relative flex flex-col justify-center pl-[8vw] pr-[4vw] w-1/2 text-black">
        {/* Rotated side text */}
        <div className="absolute left-6 bottom-0 flex flex-col rotate-[-90deg] origin-left text-[0.75rem] opacity-60 pt-2">
          <span className="font-semibold text-xl">SCROLL</span>
          <span>I PROMISE I’M COOL</span>
        </div>

        {/* Main heading */}
        <div className="max-w-md space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">WHO AM I?</h2>
          <h1 className="text-[6rem] sm:text-[8rem] font-extrabold leading-none tracking-tight">
            JALEN
          </h1>
        </div>
      </div>

      {/* === RIGHT SECTION === */}
      <div className="relative w-1/2 flex items-center justify-center pr-[6vw]">
        {/* Image */}
        <div className="relative w-lg aspect-[2/3] rounded-[2.5rem] overflow-hidden shadow-lg">
          <Image
            src="/LA.jpg"
            alt="Jalen in Los Angeles"
            fill
            className="object-cover rounded-[2.5rem]"
            priority
          />
        </div>
      </div>
    </section>
  );
}

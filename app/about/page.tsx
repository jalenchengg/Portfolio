"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="grid max-w-3xl gap-4 mx-auto md:grid-cols-2 mt-32 justify-center">
        <div className="relative flex justify-center">
          {" "}
          <Image
            src="/image11.jpg"
            alt="Jalen Cheng"
            width={433}
            height={649}
            className="rounded-lg md:w-max w-64"
          />
        </div>
        <div className="text-lg mx-16 md:mx-0 md:text-left text-center">
          I'm Jalen [jay-lin], the creative force behind the designs. Whether
          it's web, UI, product, or editorial work, my passion for design ties
          it all together. I thrive on crafting beautiful digital experiences
          and bringing ideas to life. I take great pride in blending elegance
          with practicality, allowing me to create meaningful digital solutions
          that truly resonate with users. You can explore some of the companies
          I've collaborated with. Fun fact: I'm also a photography enthusiast!
        </div>
        <Footer />
      </div>
    </>
  );
}

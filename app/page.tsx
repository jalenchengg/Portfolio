"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/baseball.jpg"
              alt="yosemite"
              width={920}
              height={1080}
            />
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

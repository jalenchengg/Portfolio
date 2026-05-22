"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/navbar";
import GravityWall from "@/components/GravityWall";
import Footer from "@/components/footer";

export default function Home() {
  const [loading, setLoading] = useState<boolean | null>(null);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("loaderPlayed");
    setLoading(!hasPlayed);
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("loaderPlayed", "true");
    setLoading(false);
  };

  // Avoid flash while checking sessionStorage
  if (loading === null) return null;

  return (
    <>
      {loading && <LoadingScreen onComplete={handleComplete} />}

      <div
        className="min-h-screen bg-[#F0E8D8]"
        style={{
          opacity: loading ? 0 : 1,
          transition: loading === false ? "opacity 0.4s ease 0.1s" : "none",
        }}
      >
        <Navbar />
        <section className="pt-24">
          <GravityWall />
        </section>
        <Footer />
      </div>
    </>
  );
}
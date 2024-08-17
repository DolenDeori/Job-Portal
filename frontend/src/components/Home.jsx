import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <CategoryCarousel />
      <Footer /> */}
    </div>
  );
}

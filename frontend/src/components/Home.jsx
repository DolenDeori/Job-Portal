import React from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import LatestJobs from "./LatestJobs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LatestJobs />
      {/* <CategoryCarousel />
      <Footer /> */}
    </div>
  );
}

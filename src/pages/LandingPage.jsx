import React from "react";
import Hero from "../components/Hero";
import Discover from "../components/Discover";
import Services from "../components/Services";
import ProcessSection from "../components/ProcessSection";
import HeroSection from "../components/HeroSection";
import TimelineSection from "../components/TimelineSection";
import TestimonialsSection from "../components/TestimonialSection";

const LandingPage = () => {
  return (
    <main>
      <Hero />
      <Discover />

      <Services />
      <TimelineSection />
      <ProcessSection />
      <HeroSection />
      <TestimonialsSection />
    </main>
  );
};

export default LandingPage;

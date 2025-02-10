import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import WhyDoulaSection from "./WhyDoulaSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import WhatsAppButton from "./WhatsAppButton";

const Home = () => {
  const handleHeroCtaClick = () => {
    const servicesSection = document.getElementById("services");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-pink-50 pt-[80px]">
      <Header />
      <Hero onCtaClick={handleHeroCtaClick} />
      <WhyDoulaSection />
      <AboutSection />
      <div id="services">
        <ServicesSection />
      </div>
      <TestimonialsSection />
      <WhatsAppButton />
    </div>
  );
};

export default Home;

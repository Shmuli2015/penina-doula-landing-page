import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const handleContactClick = () => {
    window.open(
      "https://wa.me/972584179929?text=Hi Penina, I'm interested in your doula services!",
      "_blank",
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[80px] ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <nav className="flex justify-between items-center">
          <Logo className="h-16 md:h-[60px] transition-transform duration-300 hover:scale-105" />

          <div className="flex gap-8 items-center">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-pink-600 transition-all duration-300 font-heebo text-lg relative after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-pink-600 after:transition-all after:duration-300"
            >
              אודות
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-pink-600 transition-all duration-300 font-heebo text-lg relative after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-pink-600 after:transition-all after:duration-300"
            >
              שירותים
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-pink-600 transition-all duration-300 font-heebo text-lg relative after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-pink-600 after:transition-all after:duration-300"
            >
              המלצות
            </button>
            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-pink-600 hover:bg-pink-700 text-white font-heebo shadow-md hover:shadow-lg transition-all duration-300 text-lg px-6"
            >
              <MessageCircle className="ml-2 h-5 w-5" />
              צרי קשר
            </Button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;

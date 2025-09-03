import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "./ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import Logo from "./Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleContactClick = () => {
    const whatsappText =
      "שלום פנינה, אני מתעניינת בשירותי הדולה שלך!";
    window.open(
      `https://wa.me/972584179929?text=${whatsappText}`,
      "_blank"
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setMenuOpen(false); // Close menu on selection
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[80px] ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-pink-100/50" 
          : "bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto w-full px-6 py-3 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.08, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <Logo className="h-16 md:h-[60px] transition-all duration-500 hover:scale-110 filter drop-shadow-xl hover:drop-shadow-2xl hover:brightness-110" />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          <motion.button
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-pink-600 transition-all duration-500 font-heebo text-lg font-medium relative group after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-pink-500 after:to-pink-600 after:transition-all after:duration-500 after:rounded-full"
          >
            <span className="relative z-10 drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300">אודות</span>
          </motion.button>
          <motion.button
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("services")}
            className="text-gray-700 hover:text-pink-600 transition-all duration-500 font-heebo text-lg font-medium relative group after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-pink-500 after:to-pink-600 after:transition-all after:duration-500 after:rounded-full"
          >
            <span className="relative z-10 drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300">שירותים</span>
          </motion.button>
          <motion.button
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-700 hover:text-pink-600 transition-all duration-500 font-heebo text-lg font-medium relative group after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gradient-to-r after:from-pink-500 after:to-pink-600 after:transition-all after:duration-500 after:rounded-full"
          >
            <span className="relative z-10 drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300">המלצות</span>
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-heebo font-medium shadow-lg hover:shadow-xl transition-all duration-500 text-lg px-8 py-3 rounded-full border-0 backdrop-blur-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <MessageCircle className="ml-2 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10">צרי קשר</span>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-gray-700 focus:outline-none p-2 rounded-full hover:bg-pink-50 transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.div
            animate={{ rotate: menuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
        className={`absolute top-[80px] left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl border-b border-pink-100/50 md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8 px-6">
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-pink-600 text-xl font-heebo font-medium transition-all duration-300 relative group"
          >
            <span className="relative z-10">אודות</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -m-2"></div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("services")}
            className="text-gray-700 hover:text-pink-600 text-xl font-heebo font-medium transition-all duration-300 relative group"
          >
            <span className="relative z-10">שירותים</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -m-2"></div>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-700 hover:text-pink-600 text-xl font-heebo font-medium transition-all duration-300 relative group"
          >
            <span className="relative z-10">המלצות</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -m-2"></div>
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4"
          >
            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-heebo font-medium shadow-lg hover:shadow-xl transition-all duration-500 text-xl px-10 py-4 rounded-full relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <MessageCircle className="ml-2 h-6 w-6 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative z-10">צרי קשר</span>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Hero = ({
  title = "מלווה אותך בדרך הלידה שלך במסירות ומקצועיות",
  subtitle = "שירותי דולה מנוסה המעניקה תמיכה מלאת חמלה לאורך ההריון, הלידה והתקופה שאחרי",
  backgroundImage = "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2670&auto=format&fit=crop",
  ctaText = "צרי קשר",
  onCtaClick = () => {},
}: HeroProps) => {
  return (
    <div className="relative w-full h-[800px] bg-pink-50">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-end text-right">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              damping: 20,
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heebo"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 font-heebo"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              onClick={onCtaClick}
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg font-heebo"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 rotate-180" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

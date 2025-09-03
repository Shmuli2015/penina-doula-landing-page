import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Hero = ({
  title = "חוויית לידה חלומית מתחילה כאן",
  subtitle = "ליווי מקצועי ואוהב מרגע ההריון ועד שבועות הראשונים עם התינוק • תמיכה רגשית וידע מקצועי שיהפכו את הלידה שלך לחוויה מעצימה ובטוחה",
  backgroundImage = "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=2670&auto=format&fit=crop",
  ctaText = "בואי נתחיל את המסע",
  onCtaClick = () => {},
}: HeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full h-[800px] bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300/30 to-purple-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-300/30 to-pink-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Background Image with Enhanced Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 text-pink-300/60"
        variants={floatingVariants}
        animate="animate"
      >
        <Heart className="w-8 h-8" />
      </motion.div>
      <motion.div
        className="absolute top-40 right-40 text-purple-300/60"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-32 text-indigo-300/60"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 4 }}
      >
        <Heart className="w-5 h-5" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-end text-right">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center bg-pink-100/90 backdrop-blur-sm text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 ml-2" />
              <span>ליווי מקצועי ומסור</span>
            </div>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 font-heebo leading-tight"
          >
            <span className="bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
              {title}
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-white/95 mb-10 font-heebo leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={onCtaClick}
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-heebo shadow-2xl border-0 rounded-full transition-all duration-300"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5 rotate-180" />
              </Button>
            </motion.div>
            
            <motion.div 
              className="text-white/80 text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              💜 הצטרפי ל-200+ אמהות מאושרות
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

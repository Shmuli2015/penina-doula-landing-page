import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const whatsappText = "שלום פנינה, אני מתעניינת בשירותי הדולה שלך!";

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-r from-pink-50 to-purple-50"> {/* Gradient background */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-6 drop-shadow-lg"
          >
            שירותי תמיכה בלידה
          </motion.h2>
          <motion.div variants={itemVariants}>
            <Card className="p-8 bg-white rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <b>צעד ראשון ללידה חלומית:</b> צרי קשר עוד היום ונתחיל לתכנן יחד את הדרך שלך
              </p>
              <Button
                size="lg"
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg rounded-md transition duration-300 hover:scale-105"
                onClick={() =>
                  window.open(
                    `https://wa.me/972584179929?text=${whatsappText}`,
                    "_blank"
                  )
                }
              >
                <MessageCircle className="ml-2 h-5 w-5" />
                צרי קשר בוואטסאפ
              </Button>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
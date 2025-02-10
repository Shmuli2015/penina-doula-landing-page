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
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-pink-50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            שירותי תמיכה בלידה
          </h2>
          <Card className="p-8 bg-white">
            <p className="text-lg text-gray-600 mb-8">
              אני מספקת תמיכת דולה מותאמת אישית לאורך ההריון, הלידה והתקופה
              שאחרי. כל לידה היא ייחודית, ואני מתאימה את השירותים שלי לצרכים
              ולהעדפות הספציפיים שלך.
            </p>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg"
              onClick={() =>
                window.open(
                  "https://wa.me/972584179929?text=Hi Penina, I'm interested in your doula services!",
                  "_blank",
                )
              }
            >
              <MessageCircle className="ml-2 h-5 w-5" />
              צרי קשר בוואטסאפ
            </Button>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;

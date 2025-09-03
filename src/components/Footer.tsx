import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-pink-100 border-t border-pink-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-pink-700 font-heebo">
            נבנה ע"י שמואל רוזנברג
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
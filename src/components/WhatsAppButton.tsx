import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppButton = ({
  phoneNumber = import.meta.env.VITE_PHONE_NUMBER,
  message = "שלום פנינה, אני מתעניינת בשירותי הדולה שלך!",
}: WhatsAppButtonProps) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-white rounded-full shadow-lg"
    >
      <Button
        onClick={handleClick}
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600 text-white h-16 w-16 p-0"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    </motion.div>
  );
};

export default WhatsAppButton;

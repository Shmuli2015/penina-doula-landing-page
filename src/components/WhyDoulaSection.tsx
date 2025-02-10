import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { Heart, Shield, Brain, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "תמיכה רגשית רציפה",
    description:
      "נוכחות מרגיעה ותומכת לאורך כל הלידה, מפחיתה מתח וחרדה ומעצימה את תחושת הביטחון שלך",
  },
  {
    icon: Shield,
    title: "לידה קלה וטבעית יותר",
    description:
      "מחקרים מראים שליווי דולה מפחית את הסיכון לניתוח קיסרי ב-50% ומקצר את משך הלידה",
  },
  {
    icon: Brain,
    title: "מומחיות וידע מקצועי",
    description:
      "דולה מספקת לך מידע מבוסס מחקרים, מלווה אותך בקבלת החלטות ומעניקה ביטחון בכל שלב בתהליך",
  },
  {
    icon: Sparkles,
    title: "הקלה טבעית על הכאב",
    description:
      "טכניקות ייחודיות כמו נשימות, תנועה ועיסוי עוזרות לך להתמודד עם הצירים בצורה טבעית ונעימה יותר",
  },
];

const WhyDoulaSection = () => {
  const title = "למה חשוב ללדת עם דולה?";
  const subtitle = "לידה רגועה, מעצימה וטבעית יותר";
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-pink-900 mb-4 font-heebo">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-heebo">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-pink-50 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-pink-100 rounded-full mb-4">
                    <benefit.icon className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-pink-800 mb-3 font-heebo">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 font-heebo">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center items-center text-pink-600 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", bounce: 0.3 }}
        >
          <motion.p
            className="text-lg font-semibold font-heebo"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            ללדת עם דולה כי מגיע לך חוויית לידה טובה, רגועה ומעצימה! 💜
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDoulaSection;

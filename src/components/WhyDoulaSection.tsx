import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { Heart, Shield, Brain, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "תמיכה רגשית רציפה",
    description:
      "נוכחות מרגיעה ותומכת לאורך כל תהליך הלידה, מפחיתה חרדה ומעצימה את חווית הלידה",
  },
  {
    icon: Shield,
    title: "תוצאות לידה משופרות",
    description:
      "מחקרים מראים שנוכחות דולה מפחיתה את הסיכוי לניתוח קיסרי ב-50% ומקצרת את משך הלידה",
  },
  {
    icon: Brain,
    title: "ידע וניסיון מקצועי",
    description:
      "מספקת מידע מבוסס ראיות ועוזרת בקבלת החלטות מושכלות במהלך הלידה",
  },
  {
    icon: Sparkles,
    title: "טכניקות הקלה טבעיות",
    description:
      "שימוש במגוון שיטות להקלה על כאבי לידה, כולל נשימות, תנועה ועיסוי",
  },
];

const WhyDoulaSection = () => {
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
            למה חשוב ללדת עם דולה?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-heebo">
            דולה היא מלווית לידה מקצועית המספקת תמיכה פיזית, רגשית ואינפורמטיבית
            לאורך ההריון, הלידה והתקופה שאחרי
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
      </div>
    </section>
  );
};

export default WhyDoulaSection;

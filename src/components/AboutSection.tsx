import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

interface AboutSectionProps {
  image?: string;
  name?: string;
  bio?: string;
  experience?: string[];
}

const AboutSection = ({
  image = "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?q=80&w=2670&auto=format&fit=crop",
  name = "פנינה רוזנברג",
  bio = "כדולה מסורה עם למעלה מעשור של ניסיון וחובשת חירום מוסמכת, אני מביאה שילוב ייחודי של מומחיות לתמיכה בלידה. הרקע הרפואי שלי כחובשת, יחד עם הניסיון העשיר בליווי לידות, מאפשר לי להעניק תמיכה מקצועית ומקיפה. אני מחויבת להעניק תמיכה מלאת חמלה ומותאמת אישית למשפחות, תוך שילוב של ידע רפואי מעמיק עם גישה הוליסטית ותומכת.",
  experience = [
    "למעלה מ-10 שנות ניסיון בתמיכה בלידה",
    "חובשת חירום מוסמכת עם התמחות בלידות",
    "דולה מוסמכת ללידה ולתקופת אחרי הלידה",
    "ניסיון מעשי בליווי לידות בית כחובשת וכדולה",
    "הכשרה מיוחדת באמצעי נוחות ותנוחות",
  ],
}: AboutSectionProps) => {
  return (
    <section
      id="about"
      className="w-full min-h-[600px] bg-pink-50 py-16 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-12 text-pink-900 font-heebo"
        >
          קצת עליי
        </motion.h2>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-white/80 backdrop-blur hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-medium text-pink-800 mb-4 font-heebo">
                {name}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6 font-heebo">
                {bio}
              </p>

              <div className="space-y-4">
                <h4 className="text-lg font-medium text-pink-800 font-heebo">
                  ניסיון ומומחיות
                </h4>
                <ul className="space-y-2">
                  {experience.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="text-pink-600 ml-2">•</span>
                      <span className="text-gray-700 font-heebo">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

interface AboutSectionProps {
  name?: string;
  bio?: string;
  experience?: string[];
}

const AboutSection = ({
  name = "פנינה רוזנברג",
  bio = "כדולה מסורה וחובשת רפואת חירום באיחוד הצלה, אני מביאה שילוב ייחודי של מומחיות לתמיכה בלידה. הרקע הרפואי שלי כחובשת, יחד עם הניסיון בליווי לידות, מאפשר לי להעניק תמיכה מקצועית ומקיפה. אני מחויבת להעניק תמיכה מלאת חמלה ומותאמת אישית לכל יולדת, תוך שילוב של ידע רפואי עם גישה הוליסטית ותומכת.",
  experience = [
    "בעלת ניסיון בתמיכה בלידה",
    "חובשת רפואת חירום באיחוד הצלה",
    "דולה מוסמכת ללידה",
    "התמחות בהקלה על כאבי לידה",
  ],
}: AboutSectionProps) => {
  return (
    <section id="about" className="w-full py-16 px-6 md:px-12 bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-pink-900 mb-8"
        >
          קצת עליי
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 md:p-8 bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl border border-pink-200">
              <h3 className="text-2xl font-semibold text-pink-800 mb-4">{name}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{bio}</p>

              <div>
                <h4 className="text-lg font-semibold text-pink-800 mb-3">ניסיון ומומחיות</h4>
                <ul className="space-y-2">
                  {experience.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center text-gray-700"
                    >
                      <span className="text-pink-600 ml-2">✔</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import {
  type Testimonial,
  testimonials as defaultTestimonials,
} from "@/data/testimonials";

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const TestimonialsSection = ({
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) => {
  return (
    <section
      id="testimonials"
      className="w-full py-16 bg-pink-50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-pink-800 font-heebo">
          מה אומרות עליי
        </h2>

        <Carousel
          className="w-full max-w-5xl mx-auto relative"
          opts={{
            align: "start",
            loop: true,
            direction: "rtl",
          }}
          dir="rtl"
        >
          <CarouselContent className="-mr-4 ml-4 flex">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pr-6 md:basis-1/2 lg:basis-1/3 flex"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex-1 flex"
                >
                  <Card className="flex-1 bg-white hover:shadow-lg transition-all duration-300 border-2 border-pink-100 flex flex-col">
                    <CardContent className="p-6 flex flex-col items-center text-center flex-1">
                      <div className="mb-1 text-pink-600 text-3xl">❝</div>
                      <blockquote className="mb-4 text-gray-700 flex-1">
                        "{testimonial.quote}"
                      </blockquote>
                      <cite className="font-medium text-pink-700 not-italic">
                        {testimonial.name}
                      </cite>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -left-16 top-1/2 -translate-y-1/2">
            <CarouselPrevious className="relative left-0 h-12 w-12 border-2 border-pink-200 bg-white/80 hover:bg-white" />
          </div>
          <div className="absolute -right-16 top-1/2 -translate-y-1/2">
            <CarouselNext className="relative right-0 h-12 w-12 border-2 border-pink-200 bg-white/80 hover:bg-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
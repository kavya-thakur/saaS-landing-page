import { motion } from "framer-motion";
import React from "react";
import { TESTIMONIALS_CONTENT } from "../constants";
const Testimonials = () => {
  const testimonialVarients = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  return (
    <section id="testimonial">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center mb-12 border-t border-neutral-800"
        >
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
            {TESTIMONIALS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-neutral-400">
            {TESTIMONIALS_CONTENT.sectionDescription}
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{ visible: { staggerChildren: 0.5 } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS_CONTENT.reviews.map((review, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={testimonialVarients}
             className="mt-10 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-neutral-800/50 border border-neutral-900 p-10"
            >
              
              <p className="mt-4 text-neutral-200">{review.review}</p>
              <div className="flex items-center justify-center mt-6">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                    <p className="text-sm font-bold text-white">{review.name}</p>
                    <p className="text-sm text-neutral-400">{review.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

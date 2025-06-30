import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      quote: "The fruit boxes are a lifesaver! So fresh and convenient. It has completely changed my morning routine for the better.",
      rating: 5,
    },
    {
      name: 'Rahul Kumar',
      location: 'Delhi',
      quote: "Impressed with the quality and the variety. The delivery is always on time, and the fruits are delicious. Highly recommend!",
      rating: 5,
    },
    {
      name: 'Anjali Mehta',
      location: 'Bangalore',
      quote: "As a busy professional, Fruit Delight is perfect for me. I get my daily dose of nutrition without any hassle. The subscription is worth every penny.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#FDF8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-brand text-4xl md:text-5xl font-bold text-[#13381A]">
            Loved by Our Customers
          </h2>
          <p className="mt-4 text-lg text-[#13381A]/80 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say about their Fruit Delight experience.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
              className="bg-background rounded-4xl p-8 shadow-soft"
            >
              <span className="inline-flex items-center justify-center bg-[#18492B] rounded-full p-2 shadow-md transition-all duration-300 mb-4">
                <FaQuoteLeft className="h-8 w-8 text-accent/50" />
              </span>
              <p className="text-base text-secondary leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-secondary">{testimonial.location}</div>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span className="inline-flex items-center justify-center bg-[#18492B] rounded-full p-1 shadow-md transition-all duration-300">
                      <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 
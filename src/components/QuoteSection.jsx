import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const QuoteSection = ({ quote }) => {
  if (!quote) return null;

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <FaQuoteLeft className="h-10 w-10 text-accent/30 mx-auto mb-6" />
          <p className="font-brand text-3xl md:text-4xl font-medium text-primary leading-tight">
            "{quote}"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection; 
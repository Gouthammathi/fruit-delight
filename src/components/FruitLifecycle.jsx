import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHandsHelping, FaCut, FaBox, FaTruck, FaHome } from 'react-icons/fa';

const FruitLifecycle = () => {
  const steps = [
    {
      icon: FaLeaf,
      title: 'Sourcing',
      description: 'Handpicked from the best farms.',
    },
    {
      icon: FaHandsHelping,
      title: 'Inspection',
      description: 'Rigorous quality and safety checks.',
    },
    {
      icon: FaCut,
      title: 'Cutting',
      description: 'Expertly cut for perfect pieces.',
    },
    {
      icon: FaBox,
      title: 'Packing',
      description: 'Hygienically packed to seal freshness.',
    },
    {
      icon: FaTruck,
      title: 'Delivery',
      description: 'Dispatched same-day to your door.',
    },
    {
      icon: FaHome,
      title: 'Enjoyment',
      description: 'Ready to eat, hassle-free.',
    },
  ];

  return (
    <section id="lifecycle" className="py-8 sm:py-24 bg-[#FDF8E1]">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-brand text-2xl sm:text-4xl md:text-5xl font-bold text-[#13381A]">
            Our Journey to Your Door
          </h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-[#13381A]/80 max-w-2xl mx-auto">
            We maintain the highest standards of quality and hygiene from farm to doorstep.
          </p>
        </div>

        <div className="mt-8 sm:mt-20">
          <div className="relative">
            {/* Dashed line for large screens */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-transparent">
              <div
                className="h-full w-full border-t-2 border-dashed border-neutral"
                style={{ transform: 'translateY(-50%)' }}
              ></div>
            </div>

            <div className="relative grid gap-8 sm:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.6,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-center"
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-[#18492B] flex items-center justify-center shadow-md transition-all duration-300">
                        <IconComponent className="h-10 w-10 text-accent" />
                      </div>
                    </div>
                    <h3 className="mt-6 text-lg font-bold text-[#13381A]">{step.title}</h3>
                    <p className="mt-1 text-sm text-[#13381A]/80">{step.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FruitLifecycle; 
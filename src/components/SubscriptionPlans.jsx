import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaLeaf, FaCarrot, FaSeedling, FaStar } from 'react-icons/fa';

const SubscriptionPlans = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      name: 'Basic Monthly Package',
      price: '₹2499',
      dailyPrice: '₹129/day',
      features: [
        '4 Types of Fruits',
        '2 Types of Sprouts',
        '1 Vegetable Item',
        'Free Home Delivery',
      ],
      icon: FaLeaf,
      cta: 'Choose Basic',
      popular: false,
    },
    {
      name: 'Premium Monthly Package',
      price: '₹2999',
      features: [
        '4 Types of Fruits',
        '2 Types of Sprouts',
        '2 Types of Dry Fruits',
        '1 Vegetable Item',
        'Customized Box Available',
        'Free Home Delivery',
      ],
      icon: FaStar,
      cta: 'Choose Premium',
      popular: true,
    },
  ];

  return (
    <section id="plans" className="py-12 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="font-brand text-2xl sm:text-4xl md:text-5xl font-bold text-[#FEF8DE]">
            Choose Your Perfect Plan
          </h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-[#FEF8DE]/80 max-w-2xl mx-auto">
            Select a plan that fits your lifestyle. Freshness delivered daily, with a holiday on Sundays.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
              className={`relative rounded-3xl sm:rounded-4xl p-4 sm:p-8 flex flex-col border-2 ${
                plan.popular
                  ? 'bg-primary text-white border-accent shadow-2xl scale-105'
                  : 'bg-[#FDF8E1] text-[#13381A] border-[#FDF8E1] shadow-lg'
              } transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              {plan.popular ? (
                <span className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-accent text-white px-2 py-1 sm:px-4 sm:py-1 rounded-full text-xs font-bold shadow-md">
                  Recommended
                </span>
              ) : (
                <span className="absolute top-2 right-2 sm:top-4 sm:right-4 px-2 py-1 sm:px-4 sm:py-1 rounded-full text-xs font-bold opacity-0">
                  Placeholder
                </span>
              )}

              <div className="flex-grow">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                  <span className="inline-flex items-center justify-center bg-[#18492B] rounded-full p-1 sm:p-2 shadow-md transition-all duration-300">
                    <plan.icon className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                  </span>
                  <h3 className="font-brand text-lg sm:text-3xl font-bold">{plan.name}</h3>
                </div>
                
                <div className="flex items-baseline gap-1 sm:gap-2 mb-2 sm:mb-6">
                  <span className={`text-3xl sm:text-5xl font-bold ${plan.popular ? 'text-white' : 'text-[#13381A]'}`}>{plan.price}</span>
                  <span className={`${plan.popular ? 'text-neutral-light' : 'text-[#13381A]/80'} text-xs sm:text-base`}>/month</span>
                </div>

                <ul className="space-y-2 sm:space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 sm:gap-3">
                      <span className="inline-flex items-center justify-center bg-[#18492B] rounded-full p-0.5 sm:p-1 shadow-md transition-all duration-300">
                        <FaCheckCircle className={`h-4 w-4 sm:h-5 sm:w-5 ${plan.popular ? 'text-accent' : 'text-green-500'}`} />
                      </span>
                      <span className={`${plan.popular ? 'text-neutral-light' : 'text-[#13381A]/80'} text-xs sm:text-base`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full mt-6 sm:mt-8 py-2 sm:py-3 px-4 sm:px-6 font-bold rounded-full transition-colors text-sm sm:text-base ${
                  plan.popular
                    ? 'bg-accent text-white hover:bg-accent-dark'
                    : 'bg-primary text-white hover:bg-primary-dark'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8 sm:mt-12 text-[#FEF8DE]/80 text-xs sm:text-base">
          <p>Delivery Time: Morning 6am to 10am. Sunday Holiday.</p>
          <p>Have questions? <a href="#contact" className="font-bold text-accent hover:underline">Contact us</a> for custom orders.</p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans; 

import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { FiCheck } from 'react-icons/fi';

const pricingData = {
  monthly: [
    { name: 'Starter', price: '$29', features: ['10,000 API Calls', 'Basic Models', 'Email Support'], popular: false },
    { name: 'Pro', price: '$99', features: ['100,000 API Calls', 'Advanced Models', 'Priority Support', 'Early Access'], popular: true },
    { name: 'Enterprise', price: 'Contact Us', features: ['Unlimited API Calls', 'Custom Models', 'Dedicated Support', 'SLA'], popular: false },
  ],
  yearly: [
    { name: 'Starter', price: '$290', features: ['10,000 API Calls', 'Basic Models', 'Email Support'], popular: false },
    { name: 'Pro', price: '$990', features: ['100,000 API Calls', 'Advanced Models', 'Priority Support', 'Early Access'], popular: true },
    { name: 'Enterprise', price: 'Contact Us', features: ['Unlimited API Calls', 'Custom Models', 'Dedicated Support', 'SLA'], popular: false },
  ],
};

const PricingCard: React.FC<typeof pricingData.monthly[0] & { isYearly: boolean }> = ({ name, price, features, popular, isYearly }) => (
  <div className={`relative p-[2px] rounded-xl flex flex-col h-full ${popular ? 'bg-gradient-to-br from-gray-400 to-gray-600' : 'bg-gray-800'}`}>
    <div className="bg-gray-900 p-8 rounded-[10px] flex-grow flex flex-col h-full">
      {popular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gray-200 text-black text-sm font-semibold px-4 py-1 rounded-full">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <div className="flex items-baseline mb-6">
        <span className="text-4xl font-extrabold text-white">{price}</span>
        {price !== 'Contact Us' && <span className="text-gray-300 ml-2">{isYearly ? '/ year' : '/ month'}</span>}
      </div>
      <ul className="space-y-4 text-gray-200 flex-grow mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center">
            <FiCheck className="w-5 h-5 text-gray-400 mr-3" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-auto py-3 rounded-lg font-semibold transition-all duration-300 ${popular ? 'bg-gray-200 text-black hover:bg-gray-300' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`}>
        {price === 'Contact Us' ? 'Contact Sales' : 'Choose Plan'}
      </button>
    </div>
  </div>
);

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const plans = isYearly ? pricingData.yearly : pricingData.monthly;

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Flexible <span className="text-gray-300">Pricing</span> for Teams of All Sizes
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
              Choose the perfect plan to fit your needs and scale as you grow. Get 2 months free with annual billing.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="flex justify-center items-center space-x-4 mb-12">
            <span className={`font-semibold ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={isYearly} onChange={() => setIsYearly(!isYearly)} className="sr-only peer" />
              <div className="w-14 h-8 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gray-500"></div>
            </label>
            <span className={`font-semibold ${isYearly ? 'text-white' : 'text-gray-400'}`}>Yearly (Save 16%)</span>
          </div>
        </AnimatedSection>
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <AnimatedSection key={index}>
              <PricingCard {...plan} isYearly={isYearly} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

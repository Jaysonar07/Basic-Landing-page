
import React from 'react';
import AnimatedSection from './AnimatedSection';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-10 md:p-16 text-center shadow-lg shadow-white/5">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ready to Build the Future?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of innovators and start building with Synergize AI today. No credit card required to get started.
            </p>
            <button className="bg-white text-gray-900 font-bold px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 text-lg">
              Start Your Free Trial
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;

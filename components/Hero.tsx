
import React from 'react';
import IconSphere from './IconSphere';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 pb-10">
      <div className="absolute inset-0 bg-grid-gray-600/10 [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] bg-gray-500/10 rounded-full blur-[180px] animate-pulse"></div>
      </div>
      <div className="container mx-auto px-6 text-center z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <AnimatedSection>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
                Unleash the Power of <span className="text-gray-300">Generative AI</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
                Synergize empowers your creativity and productivity with a suite of intelligent tools designed for the modern creator and developer.
              </p>
              <div className="flex justify-start space-x-4">
                <button className="bg-gray-200 text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gray-200/20">
                  Get Started for Free
                </button>
                <button className="bg-gray-700 text-gray-200 font-semibold px-8 py-3 rounded-lg hover:bg-gray-600 transition-all duration-300">
                  Book a Demo
                </button>
              </div>
            </AnimatedSection>
          </div>
          <div className="relative w-full h-96 md:h-[500px]">
            <IconSphere />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

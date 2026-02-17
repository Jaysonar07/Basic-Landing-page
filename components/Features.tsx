
import React from 'react';
import AnimatedSection from './AnimatedSection';

const featuresData = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="2.5" className="stroke-gray-300" strokeWidth="1.5"/>
        <path d="M16 13.5V6" className="stroke-gray-300" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 26V18.5" className="stroke-gray-300" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18.5 16H26" className="stroke-gray-300" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 16H13.5" className="stroke-gray-300" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22.2218 9.7782L18.0797 13.9203" className="stroke-gray-300" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9.77817 22.2218L13.9203 18.0797" className="stroke-gray-300" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22.2218 22.2218L18.0797 18.0797" className="stroke-gray-300" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9.77817 9.7782L13.9203 13.9203" className="stroke-gray-300" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Advanced AI Models',
    description: 'Leverage state-of-the-art models for unparalleled performance in text generation, analysis, and more.'
  },
  {
    icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 12L7 16.5L11.5 21" className="stroke-gray-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.5 12L25 16.5L20.5 21" className="stroke-gray-300" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    ),
    title: 'Developer Friendly API',
    description: 'Integrate our powerful AI capabilities into your applications with our clean and well-documented REST API.'
  },
  {
    icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 13.012C11.3333 11.012 17.5 11.012 24 13.012" className="stroke-gray-300" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M8 18.5C11.3333 16.5 17.5 16.5 24 18.5" className="stroke-gray-300" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
    ),
    title: 'Natural Language Processing',
    description: 'Understand and generate human-like text for chatbots, content creation, and customer support.'
  },
  {
    icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" y="15" width="18" height="10" rx="1" className="stroke-gray-300" strokeWidth="1.5"/>
            <path d="M9.5 15V12.5C9.5 10.2909 11.2909 8.5 13.5 8.5H18.5C20.7091 8.5 22.5 10.2909 22.5 12.5V15" className="stroke-gray-300" strokeWidth="1.5" />
        </svg>
    ),
    title: 'Enterprise-Grade Security',
    description: 'Your data is protected with industry-leading security protocols and compliance standards.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 21.5L23 21.5" className="stroke-gray-300" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11 18L21 18" className="stroke-gray-300" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M13 14.5L19 14.5" className="stroke-gray-300" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 11L16 11" className="stroke-gray-300" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Scalable Infrastructure',
    description: 'Our platform is built to handle your needs, from small projects to enterprise-level applications.'
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" className="stroke-gray-300"/>
        <circle cx="21" cy="21" r="3" stroke="currentColor" strokeWidth="1.5" className="stroke-gray-300"/>
        <path d="M13.5 13.5L18.5 18.5" stroke="currentColor" strokeWidth="1.5" className="stroke-gray-300"/>
      </svg>
    ),
    title: 'Seamless Integrations',
    description: 'Connect Synergize with your favorite tools and platforms to streamline your workflow.'
  },
];

const FeatureCard: React.FC<typeof featuresData[0]> = ({ icon, title, description }) => (
  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-600 hover:bg-gray-900 transition-all duration-300 transform hover:-translate-y-1">
    <div className="mb-4 w-12 h-12 flex items-center justify-center bg-gray-900 rounded-lg border border-gray-700">
        {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Discover What Makes Us <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Different</span>
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
              Our platform is packed with powerful features to help you build the next generation of AI applications.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <AnimatedSection key={index}>
              <FeatureCard {...feature} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;


import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { FiChevronDown } from 'react-icons/fi';

const faqData = [
  {
    question: "What is Synergize AI?",
    answer: "Synergize AI is a comprehensive platform that provides developers and creators with access to powerful generative AI models through a simple API. It's designed for a wide range of applications, including content creation, chatbots, data analysis, and more."
  },
  {
    question: "Who is this platform for?",
    answer: "Our platform is for developers, startups, and enterprises looking to integrate advanced AI capabilities into their products and services. It's also for content creators, marketers, and researchers who want to leverage AI for enhanced productivity and creativity."
  },
  {
    question: "Can I try it for free?",
    answer: "Yes! We offer a free Starter plan that includes a generous number of API calls per month, so you can explore our basic models and features to see if Synergize is the right fit for your project."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer different levels of support based on your plan. All users have access to our community forums and documentation. Paid plans include email support, and our Pro and Enterprise plans offer priority support with faster response times."
  },
  {
    question: "How is my data handled?",
    answer: "We take data security and privacy very seriously. Your data is encrypted in transit and at rest. We do not use your data to train our models without your explicit consent. Please refer to our Privacy Policy for more details."
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-800 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-white focus:outline-none"
      >
        <span>{question}</span>
        <FiChevronDown className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-gray-300'}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <p className="text-gray-200">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Frequently Asked <span className="text-gray-300">Questions</span>
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
              Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;


import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 md:py-28 bg-black">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              Get In <span className="text-gray-300">Touch</span>
            </h1>
            <p className="text-lg text-gray-300 mt-4 mb-12">
              Have a question, a project idea, or just want to say hello? We'd love to hear from you.
            </p>
          </div>
          <div className="max-w-xl mx-auto bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Full Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500" placeholder="Jane Doe" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500" placeholder="jane.doe@example.com" />
              </div>
              <div className="mb-8">
                <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500" placeholder="Your message..."></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-gray-200 text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gray-200/20">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactPage;


import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 md:py-28 bg-black">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-extrabold text-white">Create Your Account</h1>
              <p className="text-gray-300 mt-2">Start your journey with Synergize AI.</p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800">
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500" placeholder="Jane Doe" />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500" placeholder="you@example.com" />
                </div>
                <div className="mb-6">
                  <label htmlFor="password" className="block text-gray-300 text-sm font-bold mb-2">Password</label>
                  <input type="password" id="password" className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-gray-500" placeholder="••••••••" />
                </div>
                <div>
                  <button type="submit" className="w-full bg-gray-200 text-black font-semibold py-3 rounded-lg hover:bg-gray-300 transition-all duration-300 transform hover:scale-105">
                    Create Account
                  </button>
                </div>
              </form>
               <p className="text-center text-gray-400 text-sm mt-6">
                Already have an account? <Link to="/signin" className="text-gray-200 hover:text-white font-semibold">Sign in</Link>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default SignUpPage;

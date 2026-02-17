
import React, { useState, useEffect } from 'react';

const Logo: React.FC = () => (
  <a href="#" className="flex items-center space-x-2">
    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
    <span className="text-2xl font-bold text-white">Synergize</span>
  </a>
);

const NavLinks: React.FC<{ className?: string; onLinkClick?: () => void }> = ({ className, onLinkClick }) => (
  <nav className={className}>
    <a href="#features" onClick={onLinkClick} className="hover:text-white transition-colors duration-300">Features</a>
    <a href="#testimonials" onClick={onLinkClick} className="hover:text-white transition-colors duration-300">Testimonials</a>
    <a href="#pricing" onClick={onLinkClick} className="hover:text-white transition-colors duration-300">Pricing</a>
    <a href="#faq" onClick={onLinkClick} className="hover:text-white transition-colors duration-300">FAQ</a>
  </nav>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-black/80 backdrop-blur-lg shadow-lg shadow-white/5' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks className="flex items-center space-x-6" />
            <div className="flex items-center space-x-4">
              <button className="text-gray-100 hover:text-white transition-colors duration-300">Sign In</button>
              <button className="bg-gray-200 text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-200 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black/90 backdrop-blur-lg`}>
        <div className="container mx-auto px-6 py-4 flex flex-col items-center space-y-4">
          <NavLinks className="flex flex-col items-center space-y-4" onLinkClick={closeMenu} />
          <div className="flex flex-col items-center space-y-4 pt-4 w-full">
            <button className="w-full py-2 text-gray-100 hover:text-white transition-colors duration-300 text-center">Sign In</button>
            <button className="w-full bg-gray-200 text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-300 transition-all duration-300 text-center">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

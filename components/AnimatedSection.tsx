import React from 'react';
import useInView from '../hooks/useInView';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  // FIX: Removed 'triggerOnce' property. It does not exist on type 'IntersectionObserverInit'.
  // The useInView hook is already implemented to only trigger once.
  const [ref, isInView] = useInView({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

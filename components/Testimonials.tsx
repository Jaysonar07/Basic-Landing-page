
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { FaStar } from 'react-icons/fa';

const testimonialsData = [
  {
    quote: "Synergize has revolutionized our workflow. The API is incredibly robust and easy to integrate. We shipped our new AI features in record time!",
    name: "Jane Doe",
    title: "CTO, Innovate Inc.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    rating: 5,
  },
  {
    quote: "The quality of the text generation is second to none. It's like having a team of expert writers available 24/7. Our content marketing has never been stronger.",
    name: "John Smith",
    title: "Head of Content, Creative Solutions",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    rating: 5,
  },
  {
    quote: "As a solo developer, Synergize gives me the power of a huge AI research team. The scalability is fantastic, and I've been able to handle massive user growth without a hitch.",
    name: "Alex Johnson",
    title: "Founder, DevTools AI",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    rating: 5,
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center">
    {Array.from({ length: rating }).map((_, i) => (
      <FaStar key={i} className="text-yellow-400" />
    ))}
  </div>
);

const TestimonialCard: React.FC<typeof testimonialsData[0]> = ({ quote, name, title, avatar, rating }) => (
  <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 h-full flex flex-col justify-between">
    <div>
      <StarRating rating={rating} />
      <p className="text-gray-200 mt-4 italic">"{quote}"</p>
    </div>
    <div className="flex items-center mt-6">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <p className="font-bold text-white">{name}</p>
        <p className="text-sm text-gray-300">{title}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Trusted by <span className="text-gray-300">Innovators</span> Worldwide
            </h2>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about Synergize.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <AnimatedSection key={index}>
              <TestimonialCard {...testimonial} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

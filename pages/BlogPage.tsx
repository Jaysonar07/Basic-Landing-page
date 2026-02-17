
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const blogPosts = [
  {
    title: 'The Future of Generative AI: Predictions for 2025',
    author: 'Jane Doe',
    date: 'October 26, 2023',
    excerpt: 'Explore the next wave of innovation in artificial intelligence and what it means for developers, creators, and businesses.',
    image: 'https://images.unsplash.com/photo-1677756223220-5d71b8b815c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    title: '5 Ways to Integrate Synergize API into Your Workflow',
    author: 'John Smith',
    date: 'October 22, 2023',
    excerpt: 'Discover practical tips and tricks for leveraging our powerful API to automate tasks, generate content, and boost productivity.',
    image: 'https://images.unsplash.com/photo-1620712943543-2858200f745a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
    {
    title: 'Understanding Natural Language Processing',
    author: 'Alex Johnson',
    date: 'October 18, 2023',
    excerpt: 'A deep dive into the core concepts of NLP and how Synergize is pushing the boundaries of what\'s possible.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              From the <span className="text-gray-300">Blog</span>
            </h1>
            <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
              Insights, tutorials, and updates from the Synergize AI team.
            </p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={index}>
              <div className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2 flex-grow">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="text-sm text-gray-400 mt-auto">
                    <span>{post.author}</span> &middot; <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

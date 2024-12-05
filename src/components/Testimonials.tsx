import React from 'react';
import { Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    quote: "Random has revolutionized how our team collaborates. It's an indispensable tool for our daily operations.",
    author: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    quote: "The efficiency gains we've seen since implementing Random have been remarkable. Highly recommended!",
    author: "Michael Chen",
    role: "CTO at StartupX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  }
];

const Testimonials = () => {
  const headerRef = useScrollAnimation();
  const testimonialsRef = useScrollAnimation();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div ref={headerRef} className="opacity-0">
          <h2 className="text-4xl font-bold text-center mb-4">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their workflow with Random
          </p>
        </div>
        <div ref={testimonialsRef} className="grid md:grid-cols-2 gap-8 opacity-0">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-effect p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02] transform"
            >
              <Quote className="h-8 w-8 text-purple-400 mb-4 animate-glow" />
              <p className="text-gray-600 dark:text-gray-300 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-75 blur animate-glow"></div>
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="relative w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-800 dark:text-gray-200">{testimonial.author}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
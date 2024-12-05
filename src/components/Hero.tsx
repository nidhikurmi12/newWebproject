import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Hero = () => {
  const contentRef = useScrollAnimation();

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent dark:via-gray-900 dark:to-gray-900"></div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div ref={contentRef} className="lg:w-1/2 mb-12 lg:mb-0 opacity-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-700/20 bg-purple-500/10 mb-6">
              <Sparkles className="h-4 w-4 text-purple-400 mr-2 animate-glow" />
              <span className="text-sm text-purple-600">
                Revolutionizing Workflow
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Elevate Your <span className="gradient-text">Ride</span> with
              Random Helmets
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Ride with confidence and style using our cutting-edge bike
              helmets. Engineered for safety, comfort, and performance, they
              redefine your cycling experience.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 transform">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
              <button className="px-8 py-4 rounded-lg border dark:text-zinc-300 border-purple-900/20 bg-purple-500/10 text-purple-800 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 transform">
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:w-1/2  relative animate-float mr-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-30 blur-xl animate-glow"></div>
            <img
              src="https://images.unsplash.com/photo-1551281306-0d52288970ad?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern workspace"
              className="relative rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] object-cover w-full h-[70vh]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

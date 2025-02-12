
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent to-white -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Professional Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Trusted Partner for Home Services
            </h1>
            <p className="text-secondary text-lg md:text-xl">
              Connect with skilled professionals for all your home maintenance and improvement needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center gap-2">
                Book a Service
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-6 py-3 text-secondary hover:text-primary transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative fade-in delay-200">
            <div className="glass-card rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Professional service"
                className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -left-6">
              <div className="glass-card p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">4.9</span>
                  </div>
                  <div>
                    <p className="font-semibold">Excellent Service</p>
                    <p className="text-sm text-secondary">Based on 1000+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

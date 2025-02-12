
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent to-white -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Book and Connect With a Handyperson professionally to solve your tasks
          </h1>
          <p className="text-secondary text-lg md:text-xl mb-8">
            Quick & easy way to get help with your home maintenance and improvement needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="glass-card p-6 rounded-xl text-center fade-in">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-secondary text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: "Book a Task",
    description: "Quick and easy booking process",
    icon: <ArrowRight className="w-6 h-6 text-primary" />,
  },
  {
    title: "Reliable Service",
    description: "Professional and vetted handymen",
    icon: <ArrowRight className="w-6 h-6 text-primary" />,
  },
  {
    title: "Safe & Secure",
    description: "Fully insured services",
    icon: <ArrowRight className="w-6 h-6 text-primary" />,
  },
  {
    title: "Satisfaction Guaranteed",
    description: "100% satisfaction guarantee",
    icon: <ArrowRight className="w-6 h-6 text-primary" />,
  },
];

export default Hero;

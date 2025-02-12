
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent to-white -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Get Free Instant Quotes From Professional Home Service Providers
          </h1>
          <p className="text-secondary text-lg md:text-xl mb-8">
            Fast, reliable, and trusted home services at your fingertips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center gap-2">
              Book Now
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
    title: "Fast Booking",
    description: "Book services in minutes",
    icon: <ArrowRight className="w-6 h-6 text-primary" />,
  },
  {
    title: "Verified Pros",
    description: "All providers are vetted",
    icon: <ArrowRight className="w-6 h-6 text-primary" />,
  },
  {
    title: "Quality Work",
    description: "Satisfaction guaranteed",
    icon: <ArrowRight className="w-6 h-6 text-primary" />,
  },
  {
    title: "24/7 Support",
    description: "Always here to help",
    icon: <ArrowRight className="w-6 h-6 text-primary" />,
  },
];

export default Hero;


import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const serviceCategories = [
    {
      title: "Home Maintenance",
      services: [
        { name: "Plumbing", price: "From $50" },
        { name: "Electrical", price: "From $60" },
        { name: "HVAC", price: "From $80" },
      ],
    },
    {
      title: "Cleaning Services",
      services: [
        { name: "House Cleaning", price: "From $100" },
        { name: "Window Cleaning", price: "From $40" },
        { name: "Carpet Cleaning", price: "From $75" },
      ],
    },
    {
      title: "Outdoor Services",
      services: [
        { name: "Landscaping", price: "From $90" },
        { name: "Lawn Care", price: "From $45" },
        { name: "Pool Maintenance", price: "From $65" },
      ],
    },
  ];

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

        <div className="grid md:grid-cols-4 gap-8 mb-16">
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

        <div className="space-y-12">
          {serviceCategories.map((category, index) => (
            <div key={index} className="fade-in">
              <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {category.services.map((service, serviceIndex) => (
                    <CarouselItem key={serviceIndex} className="md:basis-1/3 lg:basis-1/4">
                      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                        <h4 className="font-semibold mb-2">{service.name}</h4>
                        <p className="text-primary">{service.price}</p>
                        <button className="mt-4 text-sm text-primary hover:text-primary/80 transition-colors">
                          Book Now →
                        </button>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
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

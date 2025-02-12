
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      content: "Outstanding service! The handyman was professional and completed the job perfectly.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      content: "Very reliable and efficient service. Would definitely recommend!",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Property Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content: "Professional, punctual, and high-quality work every time.",
      rating: 5,
    },
  ];

  return (
    <section className="section-padding bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What our Users say about us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="glass-card p-6 rounded-xl fade-in">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-secondary">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

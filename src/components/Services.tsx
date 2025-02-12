
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Handyman Services",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      description: "Professional handyman services for all your home repair needs",
    },
    {
      id: 2,
      title: "Home Maintenance",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "Regular maintenance to keep your home in perfect condition",
    },
  ];

  return (
    <section className="section-padding" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">SERVICES</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-xl fade-in">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

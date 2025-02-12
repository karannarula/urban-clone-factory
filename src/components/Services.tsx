
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Plumbing",
      image: "https://images.unsplash.com/photo-1601509132715-bb3758d0e8be",
      description: "Expert plumbing repairs and installations",
    },
    {
      id: 2,
      title: "Electrical",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a",
      description: "Professional electrical services for your home",
    },
    {
      id: 3,
      title: "Carpentry",
      image: "https://images.unsplash.com/photo-1588544621848-632b1133d11c",
      description: "Custom woodwork and repairs",
    },
    {
      id: 4,
      title: "Painting",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f",
      description: "Interior and exterior painting services",
    },
    {
      id: 5,
      title: "Landscaping",
      image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1",
      description: "Professional lawn care and garden maintenance",
    },
    {
      id: 6,
      title: "HVAC",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780",
      description: "Heating and cooling system services",
    },
    {
      id: 7,
      title: "Roofing",
      image: "https://images.unsplash.com/photo-1632759145351-1d764696e6ea",
      description: "Roof repairs and installations",
    },
    {
      id: 8,
      title: "Cleaning",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
      description: "Professional home cleaning services",
    },
    {
      id: 9,
      title: "Windows",
      image: "https://images.unsplash.com/photo-1574739782594-db4ead022697",
      description: "Window repairs and installations",
    },
  ];

  return (
    <section className="section-padding" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Professional Service Providers</h2>
        <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
          Connecting you with skilled professionals for all your home service needs
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-xl fade-in bg-white shadow-md">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-secondary">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

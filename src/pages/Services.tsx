
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Plumbing",
    "Electrical",
    "Carpentry",
    "Painting",
    "Cleaning",
    "HVAC",
    "Landscaping",
    "Roofing",
    "Flooring",
  ];

  const services = [
    {
      id: 1,
      category: "Plumbing",
      title: "Plumbing Services",
      image: "https://images.unsplash.com/photo-1601509132715-bb3758d0e8be",
      description: "Professional plumbing services including repairs, installations, and maintenance",
      sampleWorks: [
        "Leak Detection and Repair",
        "Pipe Installation",
        "Drain Cleaning",
        "Water Heater Services",
      ],
      price: "From $50/hour",
    },
    {
      id: 2,
      category: "Electrical",
      title: "Electrical Services",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a",
      description: "Comprehensive electrical services for residential and commercial properties",
      sampleWorks: [
        "Wiring Installation",
        "Circuit Breaker Repair",
        "Lighting Installation",
        "Electrical Safety Inspection",
      ],
      price: "From $60/hour",
    },
    {
      id: 3,
      category: "Carpentry",
      title: "Carpentry Services",
      image: "https://images.unsplash.com/photo-1588544621848-632b1133d11c",
      description: "Expert carpentry work for all your woodworking needs",
      sampleWorks: [
        "Custom Cabinetry",
        "Furniture Repair",
        "Door Installation",
        "Deck Construction",
      ],
      price: "From $55/hour",
    },
    {
      id: 4,
      category: "Painting",
      title: "Painting Services",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f",
      description: "Professional painting services for interior and exterior projects",
      sampleWorks: [
        "Interior Painting",
        "Exterior Painting",
        "Wall Texturing",
        "Cabinet Refinishing",
      ],
      price: "From $45/hour",
    },
    {
      id: 5,
      category: "HVAC",
      title: "HVAC Services",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780",
      description: "Complete HVAC solutions for your heating and cooling needs",
      sampleWorks: [
        "AC Installation",
        "Heating System Repair",
        "Duct Cleaning",
        "Maintenance Services",
      ],
      price: "From $70/hour",
    },
  ];

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory.toLowerCase() === "all" || 
      service.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of professional home services
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search services..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory.toLowerCase() === category.toLowerCase() ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 fade-in"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{service.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Sample Works:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {service.sampleWorks.map((work, index) => (
                        <li key={index}>{work}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full mt-6">Book Now</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;

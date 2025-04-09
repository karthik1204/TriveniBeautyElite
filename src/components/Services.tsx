import React, { useState } from 'react';
import { Scissors, Space as Spa, Nut as Cut, HandMetal, Brush, Sparkles, X } from 'lucide-react';

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  // Define service categories with services
  const serviceCategories = [
    {
      name: "Threading Services",
      icon: <Scissors className="h-8 w-8" />,
      services: [
        { name: "Eyebrows (U/L, Chin)", price: 50 },
        { name: "Upper Lip", price: 30 },
        { name: "Chin", price: 30 },
        { name: "Full Face Threading", price: 150 },
        { name: "Other Threading Service 1", price: 50 },
        { name: "Other Threading Service 2", price: 60 },
      ]
    },
    {
      name: "Facials",
      icon: <Spa className="h-8 w-8" />,
      services: [
        { name: "Skin Tightening Facial", price: 1500 },
        { name: "Fairness Glow Facial", price: 1800 },
        { name: "O3+ Whitening Facial", price: 2500 },
        { name: "O3+ Bridal Facial", price: 3100 },
        { name: "Hydra Facial (Starting)", price: 3150 },
        { name: "Hydra Facial (Premium)", price: 3500 },
        { name: "Hydra Facial (Ultra Premium)", price: 5000 },
        { name: "D-Tan Pack", price: 300 },
        { name: "Facial Normal", price: 500 },
        { name: "Mixed Fruit Facial", price: 750 },
        { name: "Wine Facial (Normal)", price: 800 },
        { name: "Chocolate Facial", price: 800 },
        { name: "Herbal Facial", price: 700 },
        { name: "Gold Facial (Normal)", price: 1200 },
        { name: "Gold Facial (NT)", price: 2000 },
        { name: "Diamond Facial", price: 1300 },
      ]
    },
    {
      name: "Manicure & Pedicure",
      icon: <HandMetal className="h-8 w-8" />,
      services: [
        { name: "Manicure", price: 500 },
        { name: "Spa Manicure", price: 600 },
        { name: "Pedicure", price: 500 },
        { name: "Spa Pedicure", price: 600 },
        { name: "Hand Polishing", price: 500 },
        { name: "Leg Polishing", price: 500 },
      ]
    },
    {
      name: "Hair Cutting",
      icon: <Cut className="h-8 w-8" />,
      services: [
        { name: "Straight Cut", price: 150 },
        { name: "U-Cut", price: 250 },
        { name: "V-Cut", price: 300 },
        { name: "Step Cut", price: 499 },
        { name: "Layer Cut", price: 599 },
        { name: "Multi-Layer Cut", price: 699 },
        { name: "Feather Cut", price: 799 },
        { name: "Deep U-Cut", price: 300 },
        { name: "Baby Cut", price: 150 },
      ]
    },
    {
      name: "Henna",
      icon: <Brush className="h-8 w-8" />,
      services: [
        { name: "Black Henna (Scalp)", price: 350 },
        { name: "Red Henna (Staining)", price: 500 },
        { name:"Root Touch Hair Coloring (Basic)",price: 1500},
      ]
    },
    {
      name: "Waxing",
      icon: <Brush className="h-8 w-8" />,
      services: [
        { name: "Under Arm Wax (Normal)", price: 150 },
        { name: "Full Hand Wax (Normal)", price: 350 },
        { name: "Full Leg Wax (Normal)", price: 450 },
        { name: "Full Body Wax", price: 2000 },
      ]
    },
    {
      name: "Hair Treatments",
      icon: <Sparkles className="h-8 w-8" />,
      services: [
        { name: "Oil Massage", price: 350 },
        { name: "Oil Massage (Premium)", price: 500 },
        { name: "Hair Spa (L'Oreal)", price: 1000 },
        { name: "Hair Straightening (Temporary)", price: 400 },
        { name: "Hair Curling (Temporary)", price: 500 },
        { name: "Head Bath (Normal)", price: 100 },
        { name: "Body Spa", price: 2000 },
      ]
    }
  ];

  const openModal = (category) => {
    setCurrentCategory(category);
    setShowAllServices(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowAllServices(false);
    setCurrentCategory(null);
    document.body.style.overflow = 'auto';
  };

  const handleBookService = (service) => {
    const whatsappMessage = encodeURIComponent(
      `Hello! I would like to book the following service:\n\n` +
      `Service: ${service.name}\n` +
      //`Price: ₹${service.price}\n\n` +
      `Please confirm the availability.`
    );
    window.open(`https://wa.me/16292570686?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of professional beauty services designed to enhance your natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all ease-in-out duration-300">
              <div className="bg-gradient-to-r from-pink-600 to-purple-600 py-6 px-4">
                <div className="flex items-center justify-center space-x-3">
                  <div className="text-white">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {category.services.slice(0, 3).map((service, serviceIndex) => (
                    <li key={serviceIndex} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700 font-medium group-hover:text-pink-600 transition-colors">
                          {service.name}
                        </span>
                        <span className="font-semibold text-pink-600">₹{service.price}</span>
                      </div>
                      {service.description && (
                        <p className="text-sm text-gray-500">{service.description}</p>
                      )}
                      <button
                        onClick={() => handleBookService(service)}
                        className="mt-2 w-full py-1.5 bg-pink-50 text-pink-600 rounded-lg text-sm font-medium
                                 hover:bg-pink-100 transition-all duration-300"
                      >
                        Book Now
                      </button>
                    </li>
                  ))}
                </ul>

                {category.services.length > 3 && (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => openModal(category)}
                      className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-600 rounded-full font-semibold hover:bg-pink-200 transition-all duration-300 transform hover:scale-105"
                    >
                      View All Services
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for View All Services */}
        {showAllServices && currentCategory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            ></div>
            <div className="relative bg-white w-[90vw] max-w-6xl max-h-[80vh] rounded-2xl shadow-2xl overflow-hidden animate-modal-slide-up">
              <div className="sticky top-0 bg-gradient-to-r from-pink-600 to-purple-600 p-6 flex justify-between items-center">
                <div className="flex items-center space-x-3 text-white">
                  {currentCategory.icon}
                  <h3 className="text-2xl font-bold">{currentCategory.name}</h3>
                </div>
                <button
                  onClick={closeModal}
                  className="text-white hover:text-pink-200 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="p-8 overflow-y-auto max-h-[calc(80vh-80px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentCategory.services.map((service, index) => (
                    <div 
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-102 border border-gray-100
                               animate-fade-in"
                      style={{
                        animationDelay: `${index * 0.05}s`
                      }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-gray-800">{service.name}</h4>
                        <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold">
                          ₹{service.price}
                        </span>
                      </div>
                      {service.description && (
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      )}
                      <button 
                        onClick={() => handleBookService(service)}
                        className="mt-4 w-full py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium
                                 hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-102"
                      >
                        Book Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;

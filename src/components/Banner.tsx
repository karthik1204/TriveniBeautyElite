import React from 'react';
import { ChevronRight, Sparkles, Star, Heart, Crown } from 'lucide-react';

interface ComboOffer {
  id: number;
  name: string;
  price: number;
  savings: number;
  services: string[];
  image: string;
  icon: React.ReactNode;
}

const comboOffers: ComboOffer[] = [
  {
    id: 1,
    name: "Combo Offer 1",
    price: 1099,
    savings: 150,
    image: "https://images.unsplash.com/photo-1675034743469-4e262c2ff3ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Star className="h-8 w-8 text-yellow-400" />,
    services: [
      "Eyebrows (U/L, Chin)",
      "Clean Up",
      "Face D-Tan Pack",
      "Full Hand Wax"
    ]
  },
  {
    id: 2,
    name: "Combo Offer 2",
    price: 1499,
    savings: 200,
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=800",
    icon: <Heart className="h-8 w-8 text-pink-400" />,
    services: [
      "Eyebrows (U/L, Chin)",
      "Facial (Mixed Fruit)",
      "Face & Neck D-Tan Pack",
      "Full Hand Wax"
    ]
  },
  {
    id: 3,
    name: "Combo Offer 3",
    price: 2999,
    savings: 300,
    image: "https://images.unsplash.com/photo-1629397685944-7073f5589754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
    icon: <Sparkles className="h-8 w-8 text-purple-400" />,
    services: [
      "Eyebrows (U/L, Chin)",
      "Facial (Wine)",
      "Face & Neck D-Tan Pack",
      "Full Hand Wax",
      "half Leg Wax",
      "Pedicure",
      "Manicure",
      "Basic Haircut"
    ]
  },
  {
    id: 4,
    name: "Premium Combo Offer",
    price: 10000,
    savings: 500,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    icon: <Crown className="h-8 w-8 text-yellow-500" />,
    services: [
      "O3+ Bridal Facial",
      "Hydra Facial (Ultra Premium)",
      "Full Body Wax",
      "Oil Massage (Premium)"
    ]
  }
];

const Banner = () => {
  const handleBookPackage = (offer: ComboOffer) => {
    const message = encodeURIComponent(
      `Hello! I would like to book the following package:\n\n` +
      `Package: ${offer.name}\n` +
      `Price: ₹${offer.price}\n` +
      `Services Included:\n${offer.services.map(service => `- ${service}`).join('\n')}\n\n` +
      `Please confirm the availability and schedule an appointment.`
    );
    
    window.open(`https://wa.me/16292570686?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen hero-section overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-radial from-black/30 via-black/50 to-black/70"></div>

      <div className="relative container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center text-white mb-12 slide-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Elevate Your Beauty
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Luxury treatments at Triveni Beauty Elite
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {comboOffers.map((offer, index) => (
            <div
              key={offer.id}
              className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden relative transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="combo-image-container h-40">
                <img
                  src={offer.image}
                  alt={offer.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 rotate-in">
                  {offer.icon}
                </div>
              </div>

              <div className="p-4">
                <div className="text-center mb-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-1 gradient-text">
                    {offer.name}
                  </h2>
                  <div className="flex items-center justify-center gap-2">
                    <Sparkles className="h-4 w-4 text-pink-500 animate-pulse" />
                    <span className="text-2xl font-bold gradient-text">
                      ₹{offer.price}
                    </span>
                    <Sparkles className="h-4 w-4 text-pink-500 animate-pulse" />
                  </div>
                  <div className="mt-1 inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                    Save ₹{offer.savings}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2 text-center gradient-text">
                      Services Included
                    </h3>
                    <ul className="space-y-1.5">
                      {offer.services.map((service, index) => (
                        <li
                          key={index}
                          className="flex items-center bg-white p-1.5 rounded-md shadow-sm hover:shadow-md transition-all duration-300
                                   hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transform hover:scale-105"
                        >
                          <ChevronRight className="h-3 w-3 text-green-500 mr-1.5 flex-shrink-0 service-icon" />
                          <span className="text-gray-700 text-xs">
                            {service}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() => handleBookPackage(offer)}
                      className="btn-primary text-xs py-1.5 px-4"
                    >
                      <span className="relative z-10">Book Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
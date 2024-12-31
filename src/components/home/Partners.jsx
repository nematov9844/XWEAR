import React from 'react';

const partners = [
  {
    name: "Apple",
    logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Samsung",
    logo: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Sony",
    logo: "https://images.unsplash.com/photo-1617727553252-65863c156eb0?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "HP",
    logo: "https://images.unsplash.com/photo-1630794180018-433d915c34ac?auto=format&fit=crop&w=800&q=80"
  }
];

export const Partners = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Bizning hamkorlar</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="w-full h-24 object-contain grayscale hover:grayscale-0 transition-all" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

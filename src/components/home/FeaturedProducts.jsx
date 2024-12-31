import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: "15,999,000 so'm",
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80",
    discount: "15%"
  },
  {
    id: 2,
    name: "MacBook Pro M2",
    price: "25,999,000 so'm",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Samsung Galaxy Watch 6",
    price: "3,999,000 so'm",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80",
    discount: "20%"
  },
  {
    id: 4,
    name: "AirPods Pro",
    price: "2,999,000 so'm",
    image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=800&q=80"
  }
];

export const FeaturedProducts = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Mashhur mahsulotlar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden group">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                {product.discount && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
                    {product.discount} chegirma
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-blue-400 font-bold mb-4">{product.price}</p>
                <div className="flex gap-2">
                  <button onClick={()=>navigate("/product")} className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Sotib olish
                  </button>
                  <button className="p-2 border border-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

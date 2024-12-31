import React from 'react';
import { Smartphone, Laptop, Watch, Tv, Headphones, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { icon: Smartphone, name: "Telefonlar" },
  { icon: Laptop, name: "Noutbuklar" },
  { icon: Watch, name: "Soatlar" },
  { icon: Tv, name: "Televizorlar" },
  { icon: Headphones, name: "Aksessuarlar" },
  { icon: Camera, name: "Kameralar" }
];

export const Categories = () => {
  const navigate = useNavigate()
  return (
    <section className="py-16 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Kategoriyalar</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category, index) => (
            <div onClick={()=> navigate("/product")} key={index} className="flex flex-col items-center p-6 rounded-lg hover:bg-gray-700 transition-all cursor-pointer group">
              <category.icon className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="mt-4 font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

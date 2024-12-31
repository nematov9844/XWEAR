import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative h-[600px] bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="text-white max-w-2xl animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6">Zamonaviy texnologiyalar markazi</h1>
          <p className="text-xl mb-8">Eng so'nggi rusumdagi gadjetlar, noutbuklar va aksessuarlar. Yetkazib berish bepul!</p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-all transform hover:scale-105 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Xarid qilish
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2">
              Batafsil
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Aziz Rahimov",
    role: "Doimiy mijoz",
    comment: "Ajoyib xizmat va sifatli mahsulotlar. Doim bu yerdan xarid qilaman!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Malika Karimova",
    role: "Tadbirkor",
    comment: "Professional xodimlar va qulay narxlar. Tavsiya qilaman!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Jamshid Toshmatov",
    role: "Dasturchi",
    comment: "Zamonaviy texnologiyalar va yaxshi maslahatlar uchun rahmat!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Mijozlarimiz fikrlari</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

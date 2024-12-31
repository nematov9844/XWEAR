import { Mail } from 'lucide-react';

export const Newsletter = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Yangiliklardan xabardor bo'ling</h2>
          <p className="mb-8">Eng so'nggi mahsulotlar va maxsus takliflar haqida birinchilardan bo'lib xabardor bo'ling</p>
          <form className="flex gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email manzilingiz" 
              className="flex-1 px-4 py-2 rounded-lg text-gray-800"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Obuna bo'lish
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

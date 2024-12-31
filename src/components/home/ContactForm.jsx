import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactForm = () => {
  return (
    <section className="py-16 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Biz bilan bog'laning</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Xabar yuborish</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Ismingiz</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Ismingizni kiriting"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Email manzilingiz"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Xabar</label>
                  <textarea 
                    className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    rows="4"
                    placeholder="Xabaringizni yozing"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Yuborish
                </button>
              </form>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Kontakt ma'lumotlari</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300">info@nrstylle.uz</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-gray-300">+998 90 123 45 67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Manzil</p>
                    <p className="text-gray-300">Toshkent shahri, Chilonzor tumani, 1-mavze</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: "iPhone 15 seriyasi: Yangi avlod smartfonlari",
    excerpt: "Apple kompaniyasining eng so'nggi flagman smartfonlari haqida batafsil ma'lumot",
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-15"
  },
  {
    id: 2,
    title: "Gadjetlarni tanlash bo'yicha maslahatlar",
    excerpt: "Smartfon va noutbuklarni tanlashda nimalarga e'tibor berish kerak",
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-10"
  },
  {
    id: 3,
    title: "Texnologiya yangiliklari",
    excerpt: "2024-yilning eng muhim texnologik yangiliklari va trendlari",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    date: "2024-03-05"
  }
];

export const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Yangiliklar va maqolalar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden group cursor-pointer">
              <div className="overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-6">
                <p className="text-blue-400 text-sm mb-2">{blog.date}</p>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-400 mb-4">{blog.excerpt}</p>
                <button className="text-blue-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Batafsil o'qish
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

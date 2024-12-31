import { BlogSection } from "../components/home/BlogSection";
import { Categories } from "../components/home/Categories";
import { ContactForm } from "../components/home/ContactForm";
import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { Hero } from "../components/home/Hero";
import { Newsletter } from "../components/home/Newsletter";
import { Partners } from "../components/home/Partners";
import { Testimonials } from "../components/home/Testimonials";


const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <BlogSection />
      <Partners />
      <ContactForm />
      <Newsletter />
    </div>
  );
};

export default Home;
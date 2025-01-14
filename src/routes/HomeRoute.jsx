import BlogSection from '../pages/Home/components/BlogSection';
import Hero from '../pages/Home/components/Hero';
import Portfolio from '../pages/Home/components/Portfolio';
import Services from '../pages/Home/components/Services';

const HomeRoute = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-12">
      <>
        <Hero />
        <Portfolio />
        <Services />
        <BlogSection />
      </>
    </div>
  );
};

export default HomeRoute;

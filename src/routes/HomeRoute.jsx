import { Routes, Route } from 'react-router-dom';
import BlogSection from '../pages/Home/components/BlogSection';
import Hero from '../pages/Home/components/Hero';
import Portfolio from '../pages/Home/components/Portfolio';
import Services from '../pages/Home/components/Services';

const HomeRoute = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-12">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Portfolio />
              <Services />
              <BlogSection />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default HomeRoute;

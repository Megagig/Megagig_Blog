import Navbar from './components/Navbar';
import HomeRoute from './routes/HomeRoute';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="">
      <Navbar />
      <HomeRoute />
      <Footer />
      {/* <Navbar />
   
      <BeadCrumbs />
      <Introduction />
      <Featured Posts />
      <Post List/>
      <Navbar /> */}
    </div>
  );
};

export default App;

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCarousel } from './components/ProductCarousel';
import { AboutUs } from './components/AboutUs';
import Footer from './components/Footer';
import { OurJourney } from './components/OurJourney';


function home() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <Hero />
      <OurJourney/>
      <ProductCarousel />
      <AboutUs />
      <Footer />
    </div>
  );
}


export default home;
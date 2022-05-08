import React from 'react';
import '../../App.css';
/*import Cards from '../Cards';*/
import HomeCards from '../HomeCards';
import HomeImage from '../HomeImage';
import HeroSection from '../HeroSection';
import ThreePic from '../ThreePic';
import AboutUs from '../AboutUs';
function Home() {
  return (
    <>
      <HomeImage/>
      <HomeCards/>
      <HeroSection />
      <ThreePic/>
      <AboutUs/>
    </>
  );
}

export default Home;

import React from 'react';
import autoImage from '../image/main-auto.png';
import HeroSection from '../components/Hero/HeroSection';
import StagesSection from '../components/Stage/StagesSection';
import GallerySection from '../components/Gallery/GallerySection';
import ReviewSection from '../components/Review/ReviewSection';
import LogisticsSection from '../components/Logistic/LogisticsSection';
import ContactsSection from '../components/Contacts/ContactsSection';
import FinalSection from '../components/Final/FinalSection';
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className='landingPage'>
      
      <HeroSection />
      <StagesSection />
      <GallerySection />
      <ReviewSection />
      <LogisticsSection />
      <ContactsSection />
      <FinalSection />

    </div>
  );
};

export default LandingPage;

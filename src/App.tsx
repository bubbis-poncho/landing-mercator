import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import DataAnalytics from './components/DataAnalytics';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DataFlow from './components/DataFlow';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
  
      <DataAnalytics />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

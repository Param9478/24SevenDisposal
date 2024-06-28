import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OurBins from './components/ourBins';
import SafeSecure from './components/SafeSecure';

function App() {
  return (
    <div>
      {/* Content here */}

      <Header />
      <div className="px-2 sm:px-6 lg:px-0">
        <main>
          <Banner />
          <OurBins />
          <Services />
          <SafeSecure />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

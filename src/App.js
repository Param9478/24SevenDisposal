import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Homepage/Header';
import Footer from './components/Homepage/Footer';
import ContactUs from './components/ContactUs';
import Homepage from './components/Homepage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const contactFormRef = useRef(null);
  const handleScrollToContactForm = () => {
    contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Header />
        <ScrollToTop />
        {/* This ensures the page scrolls to the top on route change */}
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                handleScrollToContactForm={handleScrollToContactForm}
                contactFormRef={contactFormRef}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactUs
                contactFormRef={contactFormRef}
                handleScrollToContactForm={handleScrollToContactForm}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

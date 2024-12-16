import ContactForm from '../ContactForm';
import Banner from './Banner';
import SafeSecure from './SafeSecure';
import Services from './Services';
// import OurBins from './ourBins';
import BinSlider from './ourBins/binSlider';
import Testimonials from './testimonials';

const Homepage = ({ contactFormRef, handleScrollToContactForm }) => {
  return (
    <div>
      <Banner
        title="Safe & Secure Waste Management Solutions"
        content="Providing reliable waste disposal services for residential,
       commercial, and industrial needs."
        handleScrollToContactForm={handleScrollToContactForm}
      />
      <BinSlider />
      <SafeSecure />
      <Services />
      <Testimonials />
      <ContactForm contactFormRef={contactFormRef} />
    </div>
  );
};
export default Homepage;

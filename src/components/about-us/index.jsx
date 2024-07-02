import ContactForm from '../ContactForm';
import Banner from '../Homepage/Banner';
import OurStory from './ourStory';
import OurTeam from './ourTeam';

export default function AboutUs({ contactFormRef, handleScrollToContactForm }) {
  return (
    <div>
      <Banner
        title="About Us"
        content="Reliable Dump Truck Services You Can Trust"
        handleScrollToContactForm={handleScrollToContactForm}
      />
      <OurStory />
      <OurTeam />
      <ContactForm contactFormRef={contactFormRef} />
    </div>
  );
}

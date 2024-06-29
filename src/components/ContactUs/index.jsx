import Banner from '../Homepage/Banner';
import Location from './Location';
import Reservation from './Reservation';
import ContactForm from '../ContactForm';

const ContactUs = ({ contactFormRef, handleScrollToContactForm }) => {
  return (
    <>
      <Banner
        title="Contact Us"
        content="We’d love to hear from you! Please don’t hesitate to reach out to us with any questions, comments, or concerns – we’re here to help."
        imgSrc=""
        css="no-wrap"
        handleScrollToContactForm={handleScrollToContactForm}
      />
      <section
        id="safeSecure"
        className="container mx-auto flex flex-col md:flex-row items-center py-10 text-center "
      >
        <div className="w-full md:w-1/2 md:pr-4">
          <Reservation handleScrollToContactForm={handleScrollToContactForm} />
        </div>
        <div className="w-full md:w-1/2 md:pl-4 mt-4 md:mt-0">
          <Location />
        </div>
      </section>
      <ContactForm contactFormRef={contactFormRef} />
    </>
  );
};

export default ContactUs;

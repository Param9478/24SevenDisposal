import React from 'react';

const ContactForm = ({ contactFormRef }) => {
  return (
    <section
      id="contactForm"
      ref={contactFormRef}
      className="mt-5 py-20 bg-gray-800 text-white px-6"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-5">Contact Us</h2>
        <p className="mb-5 text-sm">
          Have questions or need assistance? Fill out the form below and our
          team will get back to you shortly!
        </p>
        <form name="contact" method="POST" className="max-w-lg mx-auto">
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex flex-wrap mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg outline-none focus:bg-gray-600"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg outline-none focus:bg-gray-600"
                required
              />
            </div>
            <div className="w-full px-2 mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg outline-none focus:bg-gray-600"
                required
              ></textarea>
            </div>
            <div className="w-full px-2 mb-4">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full inline-block transition duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

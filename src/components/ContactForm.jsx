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
        {/* Form with Netlify attributes */}
        <form
          name="contact"
          // method="POST" // Specify POST method for Netlify forms
          // data-netlify="true"
          netlify
          // className="max-w-lg mx-auto"
          // onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact" />{' '}
          {/* Hidden field for Netlify form name */}
          <div className="flex flex-wrap mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <input
                type="text"
                name="name" // Name attribute for form data mapping
                placeholder="Your Name"
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg outline-none focus:bg-gray-600"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <input
                type="email"
                name="email" // Name attribute for form data mapping
                placeholder="Your Email"
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg outline-none focus:bg-gray-600"
              />
            </div>
            <div className="w-full px-2 mb-4">
              <textarea
                name="message" // Name attribute for form data mapping
                placeholder="Your Message"
                rows="4"
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg outline-none focus:bg-gray-600"
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

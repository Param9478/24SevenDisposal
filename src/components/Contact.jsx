import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="mt-20 py-20 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Have questions or need assistance? Fill out the form below and our
          team will get back to you shortly
        </p>
        <form className="max-w-lg mx-auto">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg outline-none focus:bg-gray-600"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg outline-none focus:bg-gray-600"
              />
            </div>
            <div className="w-full px-2 mb-4">
              <textarea
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

export default Contact;

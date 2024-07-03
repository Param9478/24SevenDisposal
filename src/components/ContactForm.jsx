import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = ({ contactFormRef }) => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formValues.firstName.trim())
      tempErrors.firstName = 'First Name is required';
    if (!formValues.lastName.trim())
      tempErrors.lastName = 'Last Name is required';
    if (!formValues.email.trim()) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formValues.email))
      tempErrors.email = 'Email is not valid';
    if (!formValues.phone.trim()) tempErrors.phone = 'Phone number is required';
    return tempErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // If validation passes, proceed with form submission
    try {
      const formData = new FormData(event.target);

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      toast.success('Thank you for your submission', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Clear form values after successful submission
      setFormValues({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });

      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      toast.error(`Error submitting form: ${error.message}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

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
        <form
          name="contact"
          method="POST"
          className="max-w-lg mx-auto"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex flex-wrap mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className={`w-full bg-gray-700 text-white py-2 px-4 rounded-lg outline-none focus:bg-gray-600 ${errors.firstName ? 'border-red-500' : ''}`}
                value={formValues.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className={`w-full bg-gray-700 text-white py-2 px-4 rounded-lg outline-none focus:bg-gray-600 ${errors.lastName ? 'border-red-500' : ''}`}
                value={formValues.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
            <div className="w-full px-2 mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={`w-full bg-gray-700 text-white py-2 px-4 rounded-lg outline-none focus:bg-gray-600 ${errors.email ? 'border-red-500' : ''}`}
                value={formValues.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="w-full px-2 mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className={`w-full bg-gray-700 text-white py-2 px-4 rounded-lg outline-none focus:bg-gray-600 ${errors.phone ? 'border-red-500' : ''}`}
                value={formValues.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
            <div className="w-full px-2 mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg outline-none focus:bg-gray-600"
                value={formValues.message}
                onChange={handleChange}
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
      <ToastContainer />
    </section>
  );
};

export default ContactForm;

import React from 'react';

const Reservation = ({ handleScrollToContactForm }) => {
  const handleCall = () => {
    window.location.href = 'tel:+13653237373';
  };

  return (
    <section className="text-center sm:text-left px-6">
      <h2 className="text-2xl font-bold mb-2">OUR LOCATION</h2>
      <p className="text-lg">26 Beckenham Road Brampton, ON, L6P 2L8</p>

      <p className="mb-3 text-sm text-gray-600 font-light py-3">
        Reserve your bin with 24Seven Disposal for top-notch waste management
        and exceptional service. Call us or fill out the form to book our
        services today!
      </p>

      <div className="flex flex-col sm:items-start items-center space-y-5">
        <button
          onClick={handleScrollToContactForm}
          className="bg-black text-white py-2 px-4 inline-block hover:bg-gray-800 cursor-pointer"
        >
          RESERVE A BIN ONLINE
        </button>
        <div
          onClick={handleCall}
          className="bg-black text-white py-2 px-4 inline-block hover:bg-gray-800 cursor-pointer"
        >
          TELEPHONE RESERVATIONS
        </div>
      </div>
    </section>
  );
};

export default Reservation;

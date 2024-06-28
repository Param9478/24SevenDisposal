import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../../assets/truck8.webp';
import SimpleSlider from './simpleSlicker';
const Component3 = () => {
  return (
    <div>
      <div className="relative ">
        
          <img
            src={bgImage}
            alt="Header Background"
            className="object-cover h-96 w-full brightness-50"
            style={{ objectPosition: 'center 60%' }}
          />
        {/* Text Content */}
        <div className="absolute text-center lg:text-left w-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white flex lg:flex-row flex-col justify-around max-w-7xl">
          <div className="md:w-3/5 sm:w-full lg:m-0 m-auto">
            <h1 className="text-xl md:text-3xl mb-2  w-full">
              Safe & Secure Bins
            </h1>

            <p className="w-full pt-6 m-auto text-light lg:text-sm text-xs">
              At 24Seven Disposal, we are dedicated to providing you with
              reliable and secure bins that prioritize safety and protection.
              Our unwavering commitment to safety ensures your peace of mind
              when it comes to waste disposal. Our bins are meticulously
              designed to safeguard your surroundings, prevent unauthorized
              access, and protect the environment. We offer locked containers
              with a dedicated slot for garbage disposal. Whether for
              residential, commercial, or industrial use, you can trust 24Seven
              Disposal for bins that are not only durable but also uphold
              cleanliness and security standards. Discover a new standard of
              confidence in waste management with 24Seven Disposal’s Safe &
              Secure Bins.
            </p>
          </div>

          <Link to="/" className="lg:my-auto mt-5">
            <button className="sm:text-sm text-xs border border-white p-2 m-auto block hover:bg-white hover:text-black">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-100 py-10 lg:block hidden">
        <div className="lg:w-3/4 sm:w-2/4 mx-auto py-10 p-2">
          <h1 className="text-3xl mb-5">Book Our Bins</h1>
          <SimpleSlider />
        </div>
      </div>
    </div>
  );
};

export default Component3;

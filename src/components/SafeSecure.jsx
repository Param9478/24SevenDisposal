import React from 'react';
import BinPic from '../assets/binDouble.jpg';

const SafeSecure = ({ title, text, imageUrl, altText }) => {
  return (
    <section
      id="safeSecure"
      className="container mx-auto flex flex-col md:flex-row items-center py-20  text-center sm:text-left"
    >
      <div className="md:w-1/2 md:pr-4">
        <h2 className="text-2xl font-bold mb-2">Safe & Secure Bins</h2>
        <p className="text-base">
          At 24Seven Disposal, we are dedicated to offering bins that prioritize
          your safety and security. Our bins are built with enhanced protection
          features, giving you peace of mind for all your waste disposal needs.
          Designed to secure your environment, they prevent unauthorized access
          and safeguard the environment. Our bins come with locks and a slot for
          convenient garbage disposal, making them ideal for residential,
          commercial, and industrial use. Trust 24Seven Disposal for durable
          bins that ensure cleanliness and security. Discover a new standard of
          waste management confidence with 24Seven Disposal’s Safe & Secure
          Bins.
        </p>
      </div>
      <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
        <img
          src={BinPic}
          alt={altText}
          className="w-full m-auto h-96 object-cover lg:mt-0 rounded-xl px-1"
        />
      </div>
    </section>
  );
};

export default SafeSecure;

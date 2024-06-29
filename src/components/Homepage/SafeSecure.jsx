
import React from 'react';
import BinPic from '../../assets/binDouble.jpg';
import junkRemoval from '../../assets/junkRemoval.jpg';

const SafeSecure = ({ title, text, imageUrl, altText }) => {
  return (
    <>
      <section
        id="safeSecure"
        className="container mx-auto flex flex-col md:flex-row items-center py-20 text-center p-6"
      >
        <div className="md:w-1/2 md:pr-4">
          <h2 className="text-2xl font-bold mb-2">Junk Removal Bin Rentals</h2>
          <p className="text-base">
            Want to get rid of junk? 24Seven Disposal offers comprehensive junk
            removal services in Brampton and the GTA to help you complete any
            construction project. Our services include residential and
            commercial cleanouts, removal of renovation debris, storage unit
            cleanups, junk removal from moves, and landscaping waste removal.
            Trust 24Seven Disposal for all your junk removal needs.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
          <img
            src={junkRemoval}
            alt={altText}
            className="w-full m-auto h-96 object-cover lg:mt-0 rounded-xl px-1"
          />
        </div>
      </section>
      <section
        id="safeSecure"
        className="container mx-auto flex flex-col-reverse md:flex-row items-center py-20 text-center p-6"
      >
        <div className="md:w-1/2 md:pr-4 mt-4 md:mt-0 order-1 md:order-2">
          <img
            src={BinPic}
            alt={altText}
            className="w-full m-auto h-96 object-cover lg:mt-0 rounded-xl px-1"
          />
        </div>
        <div className="md:w-1/2 md:pr-4 order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-2">Safe & Secure Bins</h2>
          <p className="text-base">
            At 24Seven Disposal, we are dedicated to offering bins that
            prioritize your safety and security. Our bins are built with
            enhanced protection features, giving you peace of mind for all your
            waste disposal needs. Designed to secure your environment, they
            prevent unauthorized access and safeguard the environment. Our bins
            come with locks and a slot for convenient garbage disposal, making
            them ideal for residential, commercial, and industrial use. Trust
            24Seven Disposal for durable bins that ensure cleanliness and
            security. Discover a new standard of waste management confidence
            with 24Seven Disposal’s Safe & Secure Bins.
          </p>
        </div>
      </section>
    </>
  );
};

export default SafeSecure;

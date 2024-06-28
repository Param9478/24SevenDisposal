import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black opacity-90 text-white py-8 lg:py-16 lg:text-left text-center  bottom-0 w-full">
      <div className="container flex flex-wrap m-auto">
        {/* Company Name and Social Media Handlers */}
        <div className="w-full lg:w-1/4 -mt-0 m-auto flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">24SEVEN DISPOSAL</h3>
          <div className="flex space-x-6 ">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>

        {/* Location */}
        <div className="w-full lg:w-1/4 lg:mt-0 mt-6">
          <h3 className="text-lg font-medium mb-2">Our Location</h3>
          <p className="font-light text-sm">
            17 Cloncurry Street, <br />
            Toronto, ON L6P 4G3
          </p>
        </div>

        {/* Opening Hours */}
        <div className="w-full lg:w-1/4 lg:mt-0 mt-6">
          <h3 className="text-xl font-medium mb-2">Opening Hours</h3>
          <div className="lg:flex space-x-2">
            <FontAwesomeIcon icon={faClock} className="mt-1" />
            <p className="font-light text-sm">
              Monday - Saturday <br />
              9:30 AM - 9:30 PM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const socialMedia = [
    {
      icon: faFacebook,
      link: 'https://www.facebook.com/share/19nbgRqThb/?mibextid=LQQJ4d',
    },
    {
      icon: faInstagram,
      link: 'https://www.instagram.com/24seven_disposal/profilecard/?igsh=eXd3M3B3bHA3cGR6',
    },
    {
      icon: faTiktok,
      link: 'https://www.tiktok.com/@24seven_disposal?_t=ZM-8rqNc4j2TId&_r=1',
    },
  ];
  return (
    <footer className="bg-gray-800  opacity-90 text-white py-8 lg:py-16 lg:text-left text-center bottom-0 w-full">
      <div className="container flex flex-wrap m-auto">
        {/* Company Name and Social Media Handlers */}
        <div className="w-full lg:w-1/4 -mt-0 m-auto flex flex-col items-center">
          <h3 className="text-lg font-medium mb-2">24SEVEN DISPOSAL</h3>

          <div className="flex space-x-6">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <FontAwesomeIcon icon={item.icon} className="text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="w-full lg:w-1/4 lg:mt-0 mt-6">
          <h3 className="text-lg font-medium mb-2">Our Location</h3>
          <p className="font-light text-sm">
            26 Beckenham Road <br />
            Brampton, ON, L6P 2L8
          </p>
        </div>

        {/* Opening Hours */}
        <div className="w-full lg:w-1/4 lg:mt-0 mt-6">
          <h3 className="text-xl font-medium mb-2">Contact Us</h3>
          <div className="lg:flex space-x-2">
            <p className="font-light text-sm">
              (+1) 365-323-7373 <br />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

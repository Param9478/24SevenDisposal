// Header.js

import React from 'react';
import Navbar from './navbar';
import HeaderImage from '../../assets/truck7.webp';

const Header = ({ title, content, fullWidth }) => {
  const contentWidthClass = fullWidth ? 'w-full' : 'sm:w-3/4';

  return (
    <div>
      <Navbar />
      <div className="relative overflow-hidden mt-16">
        <div className='40rem'>
          <img
            src={HeaderImage}
            alt="Header Background"
            className="object-cover sm:h-96 w-full brightness-50"
            style={{ objectPosition: 'center 60%' }}
          />
        </div>
        {/* Text Content */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white mt-2`}
        >
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium w-full">
            {title}
          </h1>
          <p
            className={`pt-6 m-auto sm:text-lg text-xs font-light ${contentWidthClass}`}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

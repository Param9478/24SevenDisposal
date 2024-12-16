import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

import React from 'react';
import Header from './Header';
import HeaderImage from '../../assets/truck-banner.jpg';

const Banner = ({ title, content, fullWidth, handleScrollToContactForm }) => {
  const contentWidthClass = fullWidth ? 'w-full' : 'sm:w-3/4';

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
    config: { duration: 1000 },
  });
  return (
    <div ref={ref}>
      <Header />
      <animated.div
        style={animation}
        className="w-full text-center text-white md:px-0"
      >
        <div className="relative overflow-hidden w-full mt-16">
          <div className="40rem">
            <img
              src={HeaderImage}
              alt="Header Background"
              className="object-cover sm:h-96 w-full brightness-50"
              style={{ objectPosition: 'center 55%' }}
            />
          </div>
          {/* Text Content */}
          <div
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white mt-2`}
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium w-full">
              {title}
            </h1>
            <p
              className={`pt-3 m-auto sm:text-lg text-xs font-light ${contentWidthClass}`}
            >
              {content}
            </p>
            <button
              onClick={handleScrollToContactForm}
              className="bg-orange-500 mt-5 hover:bg-orange-600 text-white py-3 px-6 rounded-full inline-block transition duration-300"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Banner;

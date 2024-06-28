import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDumpster,
  faHouse,
  faIndustry,
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 1000 },
  });

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <animated.div style={animation}>
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        </animated.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <animated.div
            style={animation}
            className="p-6 bg-white shadow-lg rounded-lg  relative"
          >
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center m-auto mb-5">
              <FontAwesomeIcon icon={faHouse} className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Residential Services</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet.
            </p>
          </animated.div>
          <animated.div
            style={animation}
            className="p-6 bg-white shadow-lg rounded-lg"
          >
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center m-auto mb-5">
              <FontAwesomeIcon
                icon={faDumpster}
                className="text-white text-2xl"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Commercial Services</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet.
            </p>
          </animated.div>
          <animated.div
            style={animation}
            className="p-6 bg-white shadow-lg rounded-lg"
          >
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center m-auto mb-5">
              <FontAwesomeIcon
                icon={faIndustry}
                className="text-white text-2xl"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Industrial Services</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet.
            </p>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

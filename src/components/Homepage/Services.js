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

  const services = [
    {
      icon: faHouse,
      name: 'Residential Services',
      context: `Our residential bin rental services make home cleanups a breeze.
              Whether you're renovating, decluttering, or just need extra help
              with waste disposal, we offer convenient and reliable bins to suit
              your needs. Enjoy a hassle-free experience with our easy-to-use
              services.`,
    },
    {
      icon: faDumpster,
      name: 'Commercial Services',
      context: `For businesses aiming to maintain a clean and efficient workspace,
      our commercial bin rental services offer the perfect solution. We
      provide a range of bin sizes to ensure seamless and compliant
      waste disposal for your business needs.`,
    },
    {
      icon: faIndustry,
      name: 'Industrial Services',
      context: `Our industrial services cater to the most demanding waste
              management requirements. Ideal for large construction projects and
              ongoing industrial operations, our robust bins provide reliable
              and efficient waste disposal to keep your projects on track.`,
    },
  ];
  return (
    <section id="services" className="py-20 p-6 bg-gray-100">
      <div className="container mx-auto text-center">
        <animated.div style={animation}>
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        </animated.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <animated.div
              key={i}
              style={animation}
              className="p-6 bg-white shadow-lg rounded-lg  relative"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center m-auto mb-5">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="text-white text-2xl"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
              <p className="text-gray-700">{service.context}</p>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

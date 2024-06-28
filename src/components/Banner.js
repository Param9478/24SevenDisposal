import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import bannerImage from '../assets/truck7.webp';

const Banner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.5, // Trigger when 50% of element is in view
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
    config: { duration: 1000 },
  });

  return (
    <section
      ref={ref}
      className="bg-cover bg-center bg-no-repeat py-40 relative"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <animated.div
        style={animation}
        className="container mx-auto text-center text-white"
      >
        <h2 className="text-4xl font-bold mb-4">
          Safe & Secure Waste Management Solutions
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Providing reliable waste disposal services for residential,
          commercial, and industrial needs.
        </p>
        <a
          href="#contact"
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full inline-block transition duration-300"
        >
          Get a Quote
        </a>
      </animated.div>
    </section>
  );
};

export default Banner;

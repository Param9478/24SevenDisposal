import React from 'react';
import { useSpring, animated } from 'react-spring';

const Testimonials2 = () => {
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateX(100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 1000 },
  });

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto text-center">
        <animated.div style={animation}>
          <h2 className="text-3xl font-bold mb-10">Client Testimonials</h2>
        </animated.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <animated.div style={animation} className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-gray-700 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."</p>
            <p className="font-semibold">John Doe</p>
            <p className="text-gray-600">Company ABC</p>
          </animated.div>
          <animated.div style={animation} className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-gray-700 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."</p>
            <p className="font-semibold">Jane Smith</p>
            <p className="text-gray-600">Company XYZ</p>
          </animated.div>
          <animated.div style={animation} className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-gray-700 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."</p>
            <p className="font-semibold">Michael Johnson</p>
            <p className="text-gray-600">Company 123</p>
          </animated.div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials2;

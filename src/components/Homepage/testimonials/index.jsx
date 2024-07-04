import React from 'react';
import { useSpring, animated } from 'react-spring';
import TestimonialSlider from './testimonialSlider'; // Adjust the import path as per your project structure

const Testimonials = () => {
  const reviewerData = [
    {
      review:
        "'We used 24Seven Disposal for our home renovation project, and I couldn't be happier with their service. The bins were delivered on time, and the staff was extremely professional and helpful. They made the entire process smooth and stress-free. Highly recommend!'",
      name: 'Jennifer',
    },
    {
      review:
        '24Seven Disposal has been our go-to for waste management at our construction sites. Their bins are always clean, and they are very prompt with their deliveries and pickups. The team is reliable and efficient, making our job much easier. Great service!',
      name: 'James',
    },
    {
      review:
        'I needed a disposal bin for a large cleanout, and 24Seven Disposal exceeded my expectations. The customer service was outstanding—they answered all my questions and made sure I got the right bin for my needs. The entire experience was hassle-free. Will definitely use them again!',
      name: 'Brian',
    },
  ];

  const animation = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 1000 },
  });

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <animated.div style={animation}>
          <h2 className="text-3xl font-bold mb-10">What They Say</h2>
        </animated.div>
        <TestimonialSlider testimonials={reviewerData} />
      </div>
    </section>
  );
};

export default Testimonials;

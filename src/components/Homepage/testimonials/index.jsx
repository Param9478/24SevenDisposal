// Testimonials.js
import React from 'react';
import ReviewCard from './reviewCard';
import bannerImage from '../../../assets/truck7.webp';

const Testimonials = () => {
  const reviewerImages = [
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

  return (
    <div>
      <div className="relative mt-8">
        <img
          src={bannerImage}
          alt="Header Background"
          className="object-cover h-80 w-full brightness-50"
        />
        {/* Text Content */}
        <div className="absolute text-center sm:text-left top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-20">
          <div className="sm:m-0 m-auto">
            <h2 className="text-3xl font-bold mb-10">What They Say</h2>
          </div>
        </div>
      </div>
      {/* Review Cards */}
      <div className="flex flex-col lg:flex-row justify-center -mt-24 lg:space-x-8 max-w-6xl m-auto">
        {reviewerImages.map((data, index) => (
          <ReviewCard key={index} reviewerData={data} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

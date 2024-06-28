// Testimonials.js
import React from 'react';
import ReviewCard from './reviewCard';
import bannerImage from '../../assets/truck7.webp';

const Testimonials = () => {
  const reviewerImages = [
    {
      imgSrc:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=3571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review:
        "'We used 24Seven Disposal for our home renovation project, and I couldn't be happier with their service. The bins were delivered on time, and the staff was extremely professional and helpful. They made the entire process smooth and stress-free. Highly recommend!'",
      name: 'Jennifer',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3569&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      review:
        '24Seven Disposal has been our go-to for waste management at our construction sites. Their bins are always clean, and they are very prompt with their deliveries and pickups. The team is reliable and efficient, making our job much easier. Great service!',
      name: 'James',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
            <h1 className="lg:text-3xl text-2xl w-full lg:mt-8 mt-12">
              What They Say
            </h1>
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

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; // Assuming you want to use a user icon for testimonials

const TestimonialSlider = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1, // Change this to scroll one slide at a time
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="p-4">
          <div className="bg-gray-900 max-w-md mx-auto p-8 font-light rounded-2xl shadow-md mt-10 relative z-10">
            <p className="text-white mb-4">{testimonial.review}</p>
            <div className="flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} className="text-white mr-2" />
              <p className="text-white font-medium">{testimonial.name}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;

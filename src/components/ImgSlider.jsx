import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRulerCombined } from '@fortawesome/free-solid-svg-icons';

const ImgSlider = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((bin, index) => (
        <div key={index} className="p-4">
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={bin.imgSrc}
              alt={bin.name}
              className="w-full h-80 object-cover transition-transform duration-300 transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center text-white">
              <h2 className="text-xl font-semibold">{bin.name}</h2>
              <p className="text-lg font-medium flex items-center">
                <FontAwesomeIcon icon={faRulerCombined} className="mr-2" />
                {bin.dimension}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImgSlider;

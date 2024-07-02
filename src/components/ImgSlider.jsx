import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        breakpoint: 768, // Mobile breakpoint (adjust as needed)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((d, i) => (
        <div key={i}>
          <img
            src={d.imgSrc}
            alt={`bin${i + 1}`}
            className="w-full h-80 object-cover mt-8 px-1 rounded-xl"
          />
          <h1 className="text-center text-2xl mt-2">{d.name}</h1>
        </div>
      ))}
    </Slider>
  );
};

export default ImgSlider;

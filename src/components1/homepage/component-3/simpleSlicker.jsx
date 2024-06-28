import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageRow from './imageRow';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };
  return (
    <Slider {...settings}>
      <div>
        <ImageRow
          imgSrc="https://gflenv.com/wp-content/uploads/2020/12/Business-Solid_10-yard-rolloff_Side_End-scaled.jpg"
          alt="10 Yard"
        />
        <h1 className="text-center text-2xl mt-2">10 Yard Bin</h1>
      </div>
      <div>
        <ImageRow
          imgSrc="https://gflenv.com/wp-content/uploads/2020/12/Business-Solid_10-yard-rolloff_Side_End-scaled.jpg"
          alt="10 Yard"
        />
        <h1 className="text-center text-2xl mt-2">14 Yard Bin</h1>
      </div>
      <div>
        <ImageRow
          imgSrc="https://gflenv.com/wp-content/uploads/2020/12/Business-Solid_10-yard-rolloff_Side_End-scaled.jpg"
          alt="10 Yard"
        />
        <h1 className="text-center text-2xl mt-2">20 Yard Bin</h1>
      </div>
      <div>
        <ImageRow
          imgSrc="https://gflenv.com/wp-content/uploads/2020/12/Business-Solid_10-yard-rolloff_Side_End-scaled.jpg"
          alt="10 Yard"
        />
        <h1 className="text-center text-2xl mt-2">40 Yard Bin</h1>
      </div>
    </Slider>
  );
}

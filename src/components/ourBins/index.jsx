import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageRow from './ImageRow';
import { useSpring, animated } from 'react-spring';
import smallBin from '../../assets/12YardBin.png';
import mediumBin from '../../assets/20YardBin.jpeg';
import lgBin from '../../assets/40yardBin.webp';

export default function OurBins() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  const animation = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 1000 },
  });

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <animated.div style={animation}>
          <h2 className="text-3xl font-bold mb-10">Book Our Bins</h2>
        </animated.div>
        <Slider {...settings}>
          <div>
            <ImageRow imgSrc={smallBin} alt="12 Yard" />
            <h1 className="text-center text-2xl mt-2">12 Yard Bin</h1>
          </div>
          <div>
            <ImageRow imgSrc={mediumBin} alt="20 Yard" />
            <h1 className="text-center text-2xl mt-2">20 Yard Bin</h1>
          </div>
          <div>
            <ImageRow imgSrc={lgBin} alt="10 Yard" />
            <h1 className="text-center text-2xl mt-2">40 Yard Bin</h1>
          </div>
        </Slider>
      </div>
    </section>
  );
}

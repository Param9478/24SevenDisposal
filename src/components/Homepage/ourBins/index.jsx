import React from 'react';
import { useSpring, animated } from 'react-spring';
import bin10y from '../../../assets/bin10Y.jpg';
import bin14y from '../../../assets/bin14Y.jpg';
import bin20y from '../../../assets/bin20Y.jpg';
import ImgSlider from '../../ImgSlider';

export default function OurBins() {
  const binData = [
    {
      name: '10 Yard Bin',
      dimension: '10x8x4',
      imgSrc: bin10y,
    },
    {
      name: '14 Yard Bin',
      dimension: '12x8x4',
      imgSrc: bin14y,
    },
    {
      name: '20 Yard Bin',
      dimension: '17x8x4.5',
      imgSrc: bin20y,
    },
  ];

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

        <ImgSlider data={binData} />
      </div>
    </section>
  );
}

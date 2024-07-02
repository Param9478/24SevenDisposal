import React from 'react';
import { useSpring, animated } from 'react-spring';
import bin1 from '../../../assets/12YardBin.png';
import bin2 from '../../../assets/20YardBin.jpeg';
import bin3 from '../../../assets/40yardBin.webp';
import ImgSlider from '../../ImgSlider';

export default function OurBins() {
  const binData = [
    {
      name: '14 Yard Bin',
      imgSrc: bin1,
    },
    {
      name: '20 Yard Bin',
      imgSrc: bin2,
    },
    {
      name: '40 Yard Bin',
      imgSrc: bin3,
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

import React from 'react';
import bin10y from '../../../assets/bin10Y.jpg';
import bin14y from '../../../assets/bin14Y.jpg';
import bin20y from '../../../assets/bin20Y.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring';

export default function BinSlider() {
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 1000 },
  });
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

  return (
    <section id="services" className="py-20 p-6 bg-gray-100">
      <div className="container mx-auto text-center">
        <animated.div style={animation}>
          <h2 className="text-3xl font-bold mb-10">Our Bins</h2>
        </animated.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {binData.map((bin, index) => (
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
        </div>
      </div>
    </section>
  );
}

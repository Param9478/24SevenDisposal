import React from 'react';
import bin1 from '../../assets/12YardBin.png';
import bin2 from '../../assets/20YardBin.jpeg';
import bin3 from '../../assets/40yardBin.webp';
import ImgSlider from '../ImgSlider';

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

const TeamPicture = () => {
  return (
    <div className="mt-10 bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <ImgSlider data={binData} />
      </div>
    </div>
  );
};

export default TeamPicture;

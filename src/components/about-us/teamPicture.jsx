import React from 'react';
import bin10y from '../../assets/bin10Y.jpg';
import bin14y from '../../assets/bin14Y.jpg';
import bin20y from '../../assets/bin20Y.jpg';
import ImgSlider from '../ImgSlider';

const binData = [
  {
    name: '10 Yard Bin',
    imgSrc: bin10y,
  },
  {
    name: '14 Yard Bin',
    imgSrc: bin14y,
  },
  {
    name: '20 Yard Bin',
    imgSrc: bin20y,
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

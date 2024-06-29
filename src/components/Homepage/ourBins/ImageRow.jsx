import React from 'react';

const ImageRow = ({ imgSrc, alt }) => {
  return (
    <img
      src={imgSrc}
      alt={alt}
      className="w-full m-auto h-80 object-cover lg:mt-0 rounded-xl px-1"
    />
  );
};

export default ImageRow;

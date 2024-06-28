import React from 'react'

const ImageRow = ({ imgSrc, alt }) => {
  return (
    <img
      src={imgSrc}
      alt={alt}
      className="w-full m-auto h-80 object-cover mt-5 lg:mt-0 rounded-xl"
    />
  )
}

export default ImageRow

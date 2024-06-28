import React from 'react'

const BoondocksCard = (props) => {
  const { imgSrc, title, context } = props
  return (
    <div className="max-w-md bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mb-8 mx-auto">
      {/* Image */}
      <img
        className="h-48 md:h-64 w-full object-cover"
        style={{ objectPosition: 'center 60%' }}
        src={imgSrc}
        alt="The Boondocks Grill"
      />

      {/* Card Content */}
      <div className="p-4 md:p-6">
        <p className="text-xl md:text-2xl mb-2 text-left">{title}</p>
        <p className="text-gray-500 font-light text-sm text-left mt-2 md:mt-4">
          {context}
        </p>
      </div>
    </div>
  )
}

export default BoondocksCard

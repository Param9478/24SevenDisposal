// ReviewCard.js
import React from 'react'

const ReviewCard = ({ reviewerData }) => {
  return (
    <div className="bg-black max-w-md w-3/4 mx-auto p-8 font-light rounded-2xl shadow-md mt-10 relative z-10 text-center">
      <img
        src={reviewerData.imgSrc}
        alt="Reviewer"
        className="h-24 w-24 object-cover rounded-full mx-auto mb-4 -mt-16 border-8 border-yellow-500"
        style={{ objectPosition: 'center 10%' }}
      />
      <p className="text-white mb-4">{reviewerData.review}</p>
      <p className="text-white">{reviewerData.name}</p>
    </div>
  )
}

export default ReviewCard

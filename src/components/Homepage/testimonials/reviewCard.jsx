// ReviewCard.js
import React from 'react';

const ReviewCard = ({ reviewerData }) => {
  return (
    <div className="bg-gray-900 max-w-md w-3/4 mx-auto p-8 font-light rounded-2xl shadow-md mt-10 relative z-10 text-center">
      <p className="text-white mb-4">{reviewerData.review}</p>
      <p className="text-white font-medium">{reviewerData.name}</p>
    </div>
  );
};

export default ReviewCard;

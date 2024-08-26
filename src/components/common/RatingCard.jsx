import React from 'react';

const RatingCard = ({ rating, user, comment }) => {
  return (
    <div className="bg-richblack-400 shadow-md rounded-lg p-4 m-2">
      <div className="text-lg font-semibold">{user}</div>
      <div className="text-yellow-500">{"⭐".repeat(rating)}</div>
      <p className="text-gray-600">{comment}</p>
    </div>
  );
};

export default RatingCard;

import { iconSize } from "@/app/constants/styles";
import React from "react";
import { FaStar } from "react-icons/fa";

const RatingStars = () => {
  return (
    <div className="flex items-center gap-1">
      <FaStar className={`text-sm text-yellow-400`} />
      <FaStar className={`text-sm text-yellow-400`} />
      <FaStar className={`text-sm text-yellow-400`} />
      <FaStar className={`text-sm text-yellow-400`} />
      <FaStar className={`text-sm text-yellow-400`} />
    </div>
  );
};

export default RatingStars;

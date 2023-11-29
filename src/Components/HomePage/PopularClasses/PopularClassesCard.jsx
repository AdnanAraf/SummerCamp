import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const PopularClassesCard = ({ item }) => {
  const { name, lesson, hour, level, img, rating, price } = item;
  return (
    <div>
      <div className="h-[400px] w-[300px] bg-white rounded-lg shadow-lg ">
        <img className="h-[200px] w-full" src={img}></img>

        <div>
          <h1 className="mt-[10px] text-[16px] pl-[10px] font-titleFont font-semibold text-blue-800">
            {name}
          </h1>
          <Rating
            className="text-orange-700 ml-[10px]"
            placeholderRating={rating}
            emptySymbol={<FaRegStar />}
            readonly
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaStar />}
          />
          <div className="flex mt-[15px] gap-[10px]">
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
                />
              </svg>
              <span className="text-[14px] font-titleFont mt-[3px]">
                {lesson}
              </span>
            </div>
            <div className="flex ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-[14px] font-titleFont mt-[3px]">{hour}</p>
            </div>
            <div className="flex  ml-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>

              <p className="text-[14px] font-titleFont mt-[5px]">{level}</p>
            </div>
          </div>
        </div>
        <div>
          <hr className="mt-[20px] w-[250px] ml-[20px]"></hr>
          <p className="text-[22px] pt-[10px] font-bold text-blue-900">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularClassesCard;

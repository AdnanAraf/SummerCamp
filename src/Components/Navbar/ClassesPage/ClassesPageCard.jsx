import React from "react";
import {
  FaChair,
  FaChalkboardTeacher,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ClassesPageCard = ({ item }) => {
  const {
    _id,
    name,
    lesson,
    hour,
    level,
    img,
    rating,
    price,
    instructorname,
    availableseat,
  } = item;
  return (
    <div>
      <div className="h-[470px] w-[300px] bg-white rounded-lg shadow-lg ">
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
          <div className="flex mt-[15px]">
            <div className="flex">
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
              <p className="text-[16px] font-titleFont mt-[2px]">{lesson}</p>
            </div>
            <div className="flex justify-between  ">
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
              <p className="text-[16px] font-titleFont mt-[2px]">{hour}</p>
            </div>
            <div className="flex justify-between gap-[5px] ml-[20px]">
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

              <p className="text-[16px] font-titleFont mt-[2px]">{level}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex mt-[20px] gap-[10px] ml-[10px]">
            <FaChair></FaChair>
            <p className="text-[20px] mt-[-8px] font-titleFont">
              {" "}
              {availableseat} Seat
            </p>
          </div>
          <div className="flex mt-[20px] gap-[10px] ml-[10px]">
            <FaChalkboardTeacher></FaChalkboardTeacher>
            <p className="text-[18px] font-medium mt-[-8px] font-titleFont">
              {instructorname}
            </p>
          </div>
          <hr className="mt-[20px] w-[250px] ml-[20px]"></hr>
          <div className="flex ">
            <p className="text-[22px]  pt-[px] pl-[10px] font-bold text-blue-900">
              ${price}
              <Link to={`/classcard/${_id}`}>
                <button className="btn btn-outline btn-success ml-[150px]">
                  Select
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesPageCard;

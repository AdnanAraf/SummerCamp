import { faBook, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { FaBookOpen, FaCertificate, FaRegClock, FaVideo } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SingleClassDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { user } = useContext(AuthContext);
  const {
    _id,
    img,
    instructorname,
    lesson,
    level,
    name,
    price,
    rating,
    availableseat,
  } = data;
  const handleclick = (details) => {
    console.log(availableseat);
    if (user && user.email && availableseat > 0) {
      const cartItem = {
        MenuItemID: _id,
        name: name,
        teachername: instructorname,
        image: img,
        price: price,
        email: user.email,
        seat: availableseat,
      };
      fetch("https://musical-server-adnanaraf.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Classes added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div className="bg-gray-100 h-full flex p-[20px] justify-between">
      <div className="h-[800px] w-[700px] bg-white mt-[50px] ml-[50px]">
        <h1 className="text-[25px] font-titleFont font-semibold pl-[20px] pt-[10px]">
          {name} Teaching Course
        </h1>
        <div className="flex p-[20px] gap-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-[20px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="">Created by Admin</p>
        </div>

        <div>
          <img
            className="h-[600px] pt-[50px] m-auto rounded-lg"
            src={img}
          ></img>
        </div>
      </div>
      <div>
        <div className="bg-white h-[500px] w-[500px] mr-[100px]  mt-[50px]">
          <h2 className="text-center font-bold my-[10px]">What is included?</h2>
          <hr></hr>

          <div className="flex p-[20px] justify-between  my-[5px]">
            <div className="flex gap-[10px] ">
              <FontAwesomeIcon icon={faPlay} />
              <p className="text-[16px] mt-[-5px]">Video Duration </p>
            </div>

            <p>{lesson}</p>
          </div>
          <hr></hr>
          <div className="flex justify-between  p-[20px] ">
            <div className="flex gap-[10px] ">
              <FaCertificate></FaCertificate>
              <p className="text-[16px] mt-[-5px]">Certificate</p>
            </div>
            <p>No</p>
          </div>
          <hr></hr>
          <div className="flex p-[20px] gap-[10px] ">
            <FaBookOpen></FaBookOpen>
            <span className="text-[16px] mt-[-5px]">Article</span>
          </div>
          <hr></hr>
          <div className="flex p-[20px] justify-between">
            <div className="flex gap-[10px]">
              <FaVideo></FaVideo>
              <span className="text-[16px] mt-[-5px]">Medium</span>
            </div>
            <p className="ml-[50p]">Record Course Class</p>
          </div>
          <hr></hr>
          <div className="flex p-[20px] justify-between">
            <div className="flex gap-[10px]">
              <FaRegClock></FaRegClock>
              <span className="text-[16px] mt-[-5px]">LifetimeAccess</span>
            </div>
            <p>Yes</p>
          </div>
          <hr></hr>
          <div>
            <div className="flex p-[20px] justify-between">
              <div className="flex gap-[10px]">
                <FontAwesomeIcon icon={faBook} />
                <span className="text-[16px] mt-[-5px]">
                  The class test will take
                </span>
              </div>
              <p>Yes</p>
            </div>
          </div>
          <hr></hr>
          <div>
            <div className="flex p-[20px] justify-between">
              <div className="flex gap-[10px]">
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
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
                <span className="text-[16px] mt-[-3px]">
                  The class notes will given
                </span>
              </div>
              <p>Yes</p>
            </div>
          </div>

          {availableseat > 0 ? (
            <button
              onClick={() => handleclick(data)}
              className="btn btn-outline btn-info ml-[200px] mt-[15px] w-[164px]"
            >
              Add to cart
            </button>
          ) : (
            <div>
              <h1 className="font-titleFont text-[25px] text-red-600 font-semibold text-center mt-[20px]">
                The seat is over
              </h1>
              <button
                onClick={() => handleclick(data)}
                className="btn btn-outline btn-info ml-[170px] mt-[15px] w-[164px] "
                disabled
              >
                Add to cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleClassDetails;

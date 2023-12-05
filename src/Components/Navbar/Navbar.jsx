import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBars, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setopen] = useState();
  console.log(user?.email);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const handleImageClick = (open) => {
    setopen(open);
  };
  return (
    <div className="shadow-lg sticky top-0 z-[100] bg-slate-50">
      <div className="flex justify-between  ">
        <div className="lg:ml-[100px]">
          <div className="flex gap-[20px] mt-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[30px] h-[30px] text-[#4bcaaa]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>

            <h1 className=" font-titleFont text-[#4bcaaa] font-semibold text-[20px]">
              Class<span className="text-black"> Connect</span>
            </h1>
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="pt-[20px] p-[30px]">
            <Link
              className=" p-[10px] font-titleFont  hover:bg-[#1fd1a5] ml-[40px] rounded-lg h-[30px]   hover:text-white text-black"
              to="home"
            >
              Home
            </Link>
            <Link
              className=" p-[10px] font-titleFont hover:bg-[#1fd1a5]  ml-[40px] rounded-lg  hover:text-white text-black"
              to="instructor"
            >
              Instructors
            </Link>
            <Link
              className=" p-[10px] font-titleFont hover:bg-[#1fd1a5]  ml-[40px] rounded-lg    hover:text-white text-black"
              to="class"
            >
              Classes
            </Link>
          </div>
          {user?.email ? (
            <div className="flex gap-[30px] ">
              {/* <img
              onClick={() => handleImageClick(!open)}
              className="h-[50px] w-[50px] rounded-full cursor-pointer mt-[15px]"
              src={user?.auth.currentUser.photoURL}
            ></img> */}
              <div className="tooltip lg:mt-[30px] mr-[260px] ">
                {/* <button className="btn">Hover me</button> */}

                <div className="dropdown">
                  <label tabIndex={0} className="m-1">
                    <FaUserCircle
                      onClick={() => handleImageClick(!open)}
                      style={{ fontSize: "2rem" }}
                    ></FaUserCircle>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ml-[-80px]"
                  >
                    <Link
                      className=" p-[10px] text-[18px]  font-titleFont font-semibold   hover:bg-[#1fd1a5] rounded-lg  hover:text-white text-black"
                      to="/dashboard/mycart"
                    >
                      Dashboard
                    </Link>
                    <Link
                      className="text-[18px] p-[10px] font-titleFont font-semibold hover:bg-[#1fd1a5] hover:text-white text-black"
                      onClick={handleLogOut}
                      to=""
                    >
                      Logout
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="mr-[240px] pt-[20px] flex gap-[20px]">
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
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>

              <Link to="login">Login</Link>
            </div>
          )}
        </div>
      </div>

      {/* Responsive */}
      <div className="dropdown dropdown-bottom dropdown-end lg:hidden ml-[300px] mt-[-50px] block">
        <label tabIndex={0} className=" m-4">
          <FaBars className="h-[30px] w-[20px] text-black mt-[20px]   "></FaBars>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1]   p-2  shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link
              className="p-[20px] font-bodyFont text-[16px] text-black overflow-hidden "
              to="/"
            >
              Home
            </Link>
          </li>
          <br></br>
          <li>
            <Link
              className="p-[20px] font-bodyFont text-[16px] text-black overflow-hidden "
              to="instructor"
            >
              Instructors
            </Link>
          </li>
          <li className="pt-[30px]">
            <Link
              className="p-[20px] font-bodyFont text-[16px]  text-black "
              to="class"
            >
              Classes
            </Link>
          </li>

          {user?.email ? (
            <div className="ml-[20px] overflow-hidden pt-[30px]">
              <div className="tooltip lg:mt-[10px] mr-[260px] ">
                <FaUserCircle
                  className="bg-white"
                  onClick={() => handleImageClick(!open)}
                  style={{ fontSize: "2rem" }}
                ></FaUserCircle>
              </div>

              {open && (
                <div className="dropdown-menu lg:mt-[60px] lg:ml-[45px] ml-[-26px]  z-10 h-[100px] absolute  w-[200px] bg-slate-50 shadow-black border-black flex flex-col rounded-lg text-center pt-[20px]">
                  <Link
                    className=" p-[10px] text-[18px]  font-titleFont font-semibold   hover:bg-[#1fd1a5] rounded-lg  hover:text-white text-black"
                    to="/dashboard/mycart"
                  >
                    Dashboard
                  </Link>
                  <Link
                    className="text-[18px] p-[10px] font-titleFont font-semibold hover:bg-blue-800 hover:text-white text-black"
                    onClick={handleLogOut}
                    to=""
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <div>
              <Link
                className="lg:p-[10px] pt-[40px]  lg:mr-[260px]  text-black font-LogoFont1 text-[20px] hover:text-red-500"
                to="login"
              >
                <button className="h-[40px] mt-[20px]  w-[100px] bg-white ml-[-5px] ] ">
                  Login
                </button>
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

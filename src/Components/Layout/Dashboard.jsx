import React from "react";
import {
  FaBars,
  FaHome,
  FaSchool,
  FaShoppingCart,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div>
      <label htmlFor="my-drawer-2" className="ml-[350px]  lg:hidden">
        <FaBars />
      </label>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay "
          ></label>
          <ul className="menu p-4 w-[250px] min-h-full bg-base-200 text-base-content">
            <div className="flex gap-[10px] mt-[20px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[30px] h-[30px] text-[#4bcaaa] mt-[-5px]"
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
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                {" "}
                <li className="mt-[30px] font-titleFont font-semibold text-[16px]">
                  <Link>
                    <FaSchool /> Manage Class
                  </Link>
                </li>
                <li className="mt-[10px] font-titleFont font-semibold text-[16px]">
                  <Link to="/dashboard/alluser">
                    <FaUsers />
                    Manage Users
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="mt-[30px] font-titleFont  font-semibold text-[16px]">
                  <Link to="/dashboard/enroll">
                    <FaHome></FaHome>My enrolled Class
                  </Link>
                </li>
                <li className="mt-[10px] font-titleFont font-semibold text-[16px]">
                  <Link to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart>My Cart
                  </Link>
                </li>
                <li className="mt-[10px] font-titleFont font-semibold text-[16px]">
                  <Link to="/dashboard/payment">
                    <FaWallet></FaWallet>Payment
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

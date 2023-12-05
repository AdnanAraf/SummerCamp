import React from "react";
import useCart from "../hooks/useCart";
import Mycartcard from "./Mycart/Mycartcard";
import { Link } from "react-router-dom";

const Mycart = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const result = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div>
      <div>
        <div className="overflow-x-auto lg:h-full mt-[70px] ">
          <table className="table lg:w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="font-titleFont text-[16px]">No</th>
                <th className="font-titleFont text-[16px]">Image</th>
                <th className="font-titleFont text-[16px]">Name</th>
                <th className="font-titleFont text-[16px]">Email</th>
                <th className="font-titleFont text-[16px]">Instructor Name</th>
                <th className="font-titleFont text-[16px]">Price</th>
                <th className="font-titleFont text-[16px]">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <Mycartcard
                  key={item._id}
                  item={item}
                  index={index}
                ></Mycartcard>
              ))}
            </tbody>
          </table>
          <div className="mt-[50px]">
            <h1 className="font-titleFont font-semibold text-[20px]">
              Total Selected Class:{cart.length}
            </h1>
            <h1 className="font-titleFont font-semibold text-[20px]">
              Total price:${result}
            </h1>
          </div>
          <Link to="/Dashboard/payment">
            <button className="btn btn-success">Payment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mycart;

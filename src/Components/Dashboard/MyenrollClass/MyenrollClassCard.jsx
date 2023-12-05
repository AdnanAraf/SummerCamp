import React from "react";
import Myenrollclassimage from "./Myenrollclassimage";

const MyenrollClassCard = ({ item }) => {
  // console.log(item);
  return (
    <>
      {item.carts.map((item) => (
        <div className="h-[400px] w-[250px] bg-white shadow-lg ml-[50px]  mt-[50px]">
          <img className="h-[200px] m-auto" src={item.image}></img>

          <h1 className="font-titleFont text-[14px] p-[5px]">
            <p className="text-[16px] font-semibold  inline-block">
              ClassName:
            </p>
            {item.name}
          </h1>
          <h3 className="font-titleFont text-[16px] p-[5px]">
            <p className="text-[16px] font-semibold  inline-block">Email:</p>
            {item.email}
          </h3>
          <h1 className="font-titleFont text-[16px] p-[5px]">
            <p className="text-[16px] font-semibold  inline-block">UserName:</p>
            {item.teachername}
          </h1>
          <h1 className="font-titleFont text-[16px] p-[5px]">
            {" "}
            <p className="text-[16px] font-semibold  inline-block">Price:$</p>
            {item.price}
          </h1>
        </div>
      ))}
    </>
  );
};

export default MyenrollClassCard;

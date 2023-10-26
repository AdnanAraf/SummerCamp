import React from "react";
import Myenrollclassimage from "./Myenrollclassimage";

const MyenrollClassCard = ({ item }) => {
  // console.log(item);
  return (
    <div>
      <div>
        {item.carts.map((item) => (
          <div>
            <img src={item.image}></img>
            <h1>{item._id}</h1>
            <h1>{item.name}</h1>
            <h3>{item.email}</h3>
            <h1>{item.teachername}</h1>
            <h1>{item.price}</h1>
          </div>
        ))}
        <h1>{item.name}</h1>
      </div>
    </div>
  );
};

export default MyenrollClassCard;

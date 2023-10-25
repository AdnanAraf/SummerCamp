import React from "react";
import Myenrollclassimage from "./Myenrollclassimage";

const MyenrollClassCard = ({ item }) => {
  return (
    <div>
      <div>
        <div>
          {item.image.map((item) => (
            <Myenrollclassimage key={item._id} item={item}></Myenrollclassimage>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyenrollClassCard;

import React from "react";

const Allusercard = ({ item, index }) => {
  return (
    <tr>
      <td className="font-titleFont">{index + 1}</td>
      <td className="font-titleFont">{item.name}</td>
      <td className="font-titleFont">{item.email}</td>
    </tr>
  );
};

export default Allusercard;

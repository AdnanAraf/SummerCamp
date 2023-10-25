import React, { useEffect, useState } from "react";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
  const [category, setcategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/ForeignCategories")
      .then((res) => res.json())
      .then((data) => setcategory(data));
  }, []);
  return (
    <div className="bg-gray-200">
      <h1 className="text-[25px] font-titleFont ml-[50px] pt-[100px] font-semibold">
        Popular Class
      </h1>
      <div className="grid grid-cols-4 gap-[20px] ml-[50px] pt-[50px]">
        {category.map((item) => (
          <PopularClassesCard key={item.id} item={item}></PopularClassesCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;

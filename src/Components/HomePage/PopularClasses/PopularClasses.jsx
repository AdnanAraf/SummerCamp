import React, { useEffect, useState } from "react";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
  const [category, setcategory] = useState([]);
  useEffect(() => {
    fetch("https://musical-server-adnanaraf.vercel.app/ForeignCategories")
      .then((res) => res.json())
      .then((data) => setcategory(data));
  }, []);
  return (
    <div className="bg-gray-200">
      <h1 className="text-[25px] font-titleFont ml-[35px] lg:pt-[100px] pt-[50px] font-semibold">
        Popular Class
      </h1>
      <div className="grid lg:grid-cols-4  grid-cols-1  gap-[20px] pt-[30px]   ml-[35px]    lg:ml-[50px] lg:pt-[50px]">
        {category.map((item) => (
          <PopularClassesCard key={item.id} item={item}></PopularClassesCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;

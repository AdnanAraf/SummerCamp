import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ClassesPageCard from "./ClassesPageCard";

const ClassesPage = () => {
  const [student, setstudent] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/ForeignCategories")
      .then((res) => res.json())
      .then((data) => setstudent(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-4 gap-[20px] mt-[20px] ml-[30px]">
        {student.map((item) => (
          <ClassesPageCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;

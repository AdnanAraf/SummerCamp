import React from "react";
import InstructorPageCard from "./InstructorPageCard";
import { useState } from "react";
import { useEffect } from "react";

const Instructorpage = () => {
  const [instructor, setinstructor] = useState([]);
  useEffect(() => {
    fetch("InstructorSection.json")
      .then((res) => res.json())
      .then((data) => setinstructor(data));
  }, []);
  return (
    <div className="bg-slate-200 pt-[50px] lg:pl-[50px] pl-[35px]">
      <div>
        <h1 className="lg:text-[30px] text-[20px]  font-bold text-blue-900 pt-[30px]">
          Our Popular Instructors
        </h1>
        <p className="text-[16px] font-titleFont lg:w-[420px] pt-[10px]">
          Our teachers of the month. Whom we selected them Base on student
          feedback and certain criteria.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-[20px]">
        {instructor.map((item) => (
          <InstructorPageCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Instructorpage;

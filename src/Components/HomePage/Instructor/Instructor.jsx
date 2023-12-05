import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
  const [instructor, setinstructor] = useState([]);
  useEffect(() => {
    fetch("InstructorSection.json")
      .then((res) => res.json())
      .then((data) => setinstructor(data));
  }, []);
  return (
    <div className="bg-slate-200  pt-[50px] lg:pl-[50px] pl-[35px]">
      <div>
        <h1 className="lg:text-[30px] text-[25px]  font-bold text-blue-900 pt-[30px]">
          Our Popular Instructors
        </h1>
        <p className="lg:text-[16px] font-titleFont lg:w-[420px] pt-[10px]">
          Our teachers of the month. Whom we selected them Base on student
          feedback and certain criteria.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-[20px] ">
        {instructor.map((item) => (
          <InstructorCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Instructor;

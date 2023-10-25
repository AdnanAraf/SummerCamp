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
    <div className="bg-slate-200 pt-[50px] pl-[50px]">
      <div>
        <h1 className="text-[30px] font-bold text-blue-900 pt-[30px]">
          Our Popular Instructors
        </h1>
        <p className="text-[16px] font-titleFont w-[420px] pt-[10px]">
          Our teachers of the month. Whom we selected them Base on student
          feedback and certain criteria.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-[20px]">
        {instructor.map((item) => (
          <InstructorCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Instructor;

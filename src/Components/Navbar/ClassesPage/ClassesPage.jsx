import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ClassesPageCard from "./ClassesPageCard";
import usePayment from "../../hooks/usePayment";
import CheckoutForm from "../../Payment/CheckoutForm";

const ClassesPage = () => {
  const [student, setstudent] = useState([]);
  const [payment] = usePayment();
  useEffect(() => {
    fetch("https://musical-server-adnanaraf.vercel.app/ForeignCategories")
      .then((res) => res.json())
      .then((data) => setstudent(data));
  }, []);
  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-[20px] mt-[20px] ml-[30px]">
        {student.map((item) => (
          <ClassesPageCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;

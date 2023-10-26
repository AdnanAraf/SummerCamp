import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyenrollClassCard from "./MyenrollClassCard";
import usePayment from "../../hooks/usePayment";
import ClassesPageCard from "../../Navbar/ClassesPage/ClassesPageCard";

const MyenrollClass = () => {
  // const [enroll, setenroll] = useState([]);
  const [payment] = usePayment();

  const { user } = useContext(AuthContext);
  // console.log(enroll);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/payments/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setenroll(data));
  // }, []);
  return (
    <div>
      <div>
        {payment.map((item) => (
          <div>
            <MyenrollClassCard key={item._id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyenrollClass;

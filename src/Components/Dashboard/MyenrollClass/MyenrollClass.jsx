import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyenrollClassCard from "./MyenrollClassCard";

const MyenrollClass = () => {
  const [enroll, setenroll] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/payments/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setenroll(data));
  }, []);
  return (
    <div>
      <div>
        {enroll.map((item) => (
          <MyenrollClassCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MyenrollClass;

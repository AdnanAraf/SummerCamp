import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const Mycartcard = ({ item, index }) => {
  const { _id, email, image, name, price, teachername } = item;
  const [booking, setbooking] = useState([]);
  const [, refetch] = useCart();
  const HandleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            setbooking(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = booking.filter(
                (bookings) => bookings._id !== _id
              );
              setbooking(remaining);
            }
          });
      }
    });
  };
  return (
    <tr>
      <td className="font-titleFont">{index + 1}</td>
      <td className="font-titleFont">
        <img className="h-[50px] w-[50px] rounded-full" src={image}></img>
      </td>
      <td className="font-titleFont">{name}</td>
      <td className="font-titleFont">{email}</td>
      <td className="font-titleFont">{teachername}</td>

      <td className="font-titleFont pl-[30px]">${price}</td>

      <div>
        <td>
          <FontAwesomeIcon
            onClick={() => HandleDelete(_id)}
            className="mt-[20px] ml-[20px]"
            icon={faTrash}
          />
        </td>
      </div>
    </tr>
  );
};

export default Mycartcard;

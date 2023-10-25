import React from "react";
import { useQuery } from "@tanstack/react-query";
import Allusercard from "./Allusercard";
import { FaUser } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Alluser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log(res);
      return res.data;
    },
  });
  const HandlemakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="font-titleFont text-[20px] text-black font-semibold">
                No
              </th>
              <th className="font-titleFont text-[20px] text-black font-semibold">
                Name
              </th>
              <th className="font-titleFont text-[20px] text-black font-semibold">
                Email
              </th>
              <th className="font-titleFont text-[20px] text-black font-semibold">
                Role
              </th>
              <th className="font-titleFont text-[20px] text-black font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} user={user} index={index}>
                <th>{index + 1}</th>
                <td className="font-titleFont">{user.name}</td>
                <td className="font-titleFont">{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => HandlemakeAdmin(user)}
                      className="btn btn-success"
                    >
                      <FaUser className=""></FaUser>
                    </button>
                  )}
                </td>
                <td>
                  <td>
                    <FontAwesomeIcon
                      className="mt-[20px] ml-[20px]"
                      icon={faTrash}
                    />
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Alluser;

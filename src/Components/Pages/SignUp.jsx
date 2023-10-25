import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { registerUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState("");

  // const handlePhotoUrlChange = (event) => {
  //   setPhoto(event.target.value);
  // };
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;

    const email = form.email.value;
    const password = form.password.value;

    if (
      password.length < 6 ||
      /[A-Z]/.test(password) ||
      /[^a-zA-Z0-9]/.test(password)
    ) {
      setError(
        "Password must be less than 6 characters and should not contain capital letters or special characters."
      );
      return;
    }
    setPhoto(photo);
    if ((name, email, password)) {
      // console.log("araf");
      registerUser(email, password);
      const user = { name: name, email: email };
      console.log(user);

      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "SignUp has been success",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div className="flex">
      <div className="lg:flex bg-blue-50">
        <div className="form-container border-2 w-[400px] h-[600px] m-auto my-[50px] lg:mx-[200px]">
          <h2 className="text-center text-3xl font-bold ">Sign Up</h2>
          <form onSubmit={handleRegister} className="text-center">
            {/*********************************NAME********************************************** */}
            <div className="mx-[50px] ">
              <label className="block" htmlFor="name">
                Name
              </label>
              <input
                className="border-2 border-black"
                type="text"
                name="name"
                id=""
                required
              />
            </div>
            {/* ***************************EMAIL********************************************** */}
            <div className="mx-[50px]">
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 border-black"
                type="email"
                name="email"
                id=""
                required
              />
            </div>
            {/***************************** Password***************** */}
            <div className="mx-[50px] ">
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                className="border-2 border-black"
                type="password"
                name="password"
                required
              />
            </div>
            {/******************************** PHOTO URL************************************** */}
            {/* <div className="mx-[50px] m-[20px]">
            <label className="block" htmlFor="text">
              Photo Url
            </label>
          </div> */}

            <div>
              <button className="btn btn-info w-[300px] ">Sign Up</button>
            </div>
          </form>
          <p className="text-center  ">
            <small>
              New to SummerCamp?
              <Link to="/login">Already Have an Account</Link>
            </small>
          </p>
          {/* <p className=" text-red-400 font-bold text-center">{error}</p> */}
        </div>
      </div>
      <div>
        <img
          className=""
          src="https://i.ibb.co/Xt4PCBy/sign-up-concept-illustration-114360-7895.jpg"
        ></img>
      </div>
    </div>
  );
};

export default SignUp;
///

import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import { AuthContext } from "../Provider/AuthProvider";
import SocialLoginbtn from "../SocialLoginBtn/SocialLoginBtn";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  // const location = useLocation();
  // const history = useHistory();
  // let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [error, seterror] = useState("");
  // console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset;
        navigate(from, { replace: true });
        // console.log(loggedUser);
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        seterror("Password or Email Didnot Match");
      });
  };
  return (
    <div className="flex ">
      <div className="form-container border-2 w-[400px] h-[520px] mx-[200px] my-[100px]">
        <h2 className="text-center text-3xl font-bold">Login</h2>
        <form onSubmit={handleLogin} className="text-center">
          <div className="mx-[50px] ">
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

          <div className="mx-[50px]">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className="border-2 border-black"
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div>
            <button className="btn btn-info w-[300px] p-2 mt-3">Login</button>
          </div>
        </form>
        <p className="text-center mt-[20px] ">
          <small>
            New to SummerCamp?
            <Link to="/register">Create New Account</Link>
          </small>
        </p>
        <p className=" text-red-400 font-bold text-center">{error}</p>
        <div className="mt-[-80px] ml-[50px]">
          <SocialLoginbtn />
        </div>
      </div>
      <div className="col-md-6 ">
        <img
          className="w-100 h-[600px]"
          src="https://i.ibb.co/bNtj4cc/contact-4e28682c176f0a40c8a5.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;

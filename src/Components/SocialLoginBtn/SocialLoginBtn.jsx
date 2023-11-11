import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLoginbtn = () => {
  const [user, setUser] = useState({});
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(true);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const users = result.user;
        setloading(true);
        const user = { name: users.displayName, email: users.email };
        // console.log(user);

        fetch("https://musical-server-adnanaraf.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },

          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <div>
        <div className="">
          <img
            onClick={handleGoogleLogin}
            className=" social-button h-[50px]"
            src="https://i.ibb.co/gSTHXZJ/google-btn.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLoginbtn;

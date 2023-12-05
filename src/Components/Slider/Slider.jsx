import Lottie from "lottie-react";
import React from "react";
import Anim from "../Animation2.json";

const Slider = () => {
  return (
    <div>
      <div className="lg:flex lg:justify-between flex lg:flex-row  flex-col-reverse bg-[#e9f4f1a7]">
        <div className="mt-[-50px] lg:mt-[0px]">
          <h1 className="lg:text-[30px] text-[20px] pl-[20px]   font-titleFont lg:pt-[100px] lg:pl-[150px]">
            Welcome to,<br></br>{" "}
            <span className="text-[#63debd] font-semibold">
              Foreign Language Institute
            </span>
          </h1>
          <p className="text-[16px] lg:w-[700px] pl-[20px] font-cursive lg:pl-[150px] pt-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            voluptas natus! Eius laboriosam, aliquam quibusdam reiciendis
            commodi officia numquam accusantium accusamus nisi similique
            quisquam tempora cupiditate, architecto eaque doloremque.
            Repellendus!
          </p>
          <button className="btn btn-outline btn-success lg:ml-[150px] mt-[20px]">
            Get Started
          </button>
        </div>
        <div>
          <Lottie className="h-[400px]" animationData={Anim}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Slider;

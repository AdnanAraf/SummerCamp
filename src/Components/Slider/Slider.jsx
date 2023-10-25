import Lottie from "lottie-react";
import React from "react";
import Anim from "../Animation2.json";

const Slider = () => {
  return (
    <div>
      <div className="flex justify-between bg-[#e9f4f1a7]">
        <div>
          <h1 className="text-[30px] font-titleFont pt-[100px] pl-[150px]">
            Welcome to,<br></br>{" "}
            <span className="text-[#63debd] font-semibold">
              Foreign Language Institute
            </span>
          </h1>
          <p className="text-[16px] w-[700px] pl-[150px] pt-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            voluptas natus! Eius laboriosam, aliquam quibusdam reiciendis
            commodi officia numquam accusantium accusamus nisi similique
            quisquam tempora cupiditate, architecto eaque doloremque.
            Repellendus!
          </p>
          <button className="btn btn-outline btn-success ml-[150px] mt-[20px]">
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

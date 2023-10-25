import React from "react";
import Slider from "../Slider/Slider";
import PopularClasses from "../HomePage/PopularClasses/PopularClasses";
import ExtraSection from "../HomePage/Extrasection/ExtraSection";
import Instructor from "../HomePage/Instructor/Instructor";

const Home1 = () => {
  return (
    <div>
      <Slider />
      <PopularClasses />
      <ExtraSection />
      <Instructor />
    </div>
  );
};

export default Home1;

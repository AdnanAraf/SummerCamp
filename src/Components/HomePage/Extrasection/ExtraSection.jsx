import React from "react";
import {
  FaBookDead,
  FaBookReader,
  FaHeadSideVirus,
  FaRev,
} from "react-icons/fa";

const ExtraSection = () => {
  return (
    <div className="bg-slate-100 flex mt-[20px]">
      <div>
        <h1 className="text-[30px] font-bold text-blue-900 pt-[100px] pl-[50px]">
          Our Specialty
        </h1>
        <p className="w-[700px] pt-[10px] pl-[50px] font-titleFont text-[16px]">
          We understand that every student is unique, which is why we customize
          our teaching methods to cater to individual needs. Whether you're
          seeking academic enrichment, test preparation, or skill development,
          our programs are designed with you in mind.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[10px] mt-[50px]">
        <div className="h-[250px] w-[400px] bg-[#4bcaaa] rounded-lg">
          <h1 className="text-white text-[25px] font-bold text-center ">
            Experienced Instructors
          </h1>
          <FaHeadSideVirus className="h-[40px] w-[40px] m-auto mt-[10px]"></FaHeadSideVirus>
          <p className="text-center pt-[10px] font-titleFont text-[14px]">
            Introduce your team of experienced and qualified instructors.
            Mention their educational backgrounds, teaching experience, and any
            special qualifications they may have.
          </p>
        </div>
        <div className="h-[250px] w-[400px]  rounded-lg bg-white  border-2 border-gray-300">
          <h1 className=" text-[25px] font-bold text-center pt-[20px]">
            Proven Results
          </h1>
          <FaBookReader className="h-[40px] w-[40px] m-auto mt-[10px]"></FaBookReader>
          <p className="text-center pt-[10px] font-titleFont text-[14px]">
            Showcase any success stories or statistics that demonstrate the
            positive outcomes your students have achieved under your guidance.
            This can include improvements in grades, test scores, or college
            admissions.
          </p>
        </div>
        <div className="h-[250px] w-[400px]  rounded-lg bg-white  border-2 border-gray-300">
          <h1 className=" text-[25px] font-bold text-center pt-[20px]">
            Customized Learning
          </h1>
          <FaBookDead className="h-[40px] w-[40px] m-auto mt-[10px]"></FaBookDead>
          <p className="text-center pt-[10px] font-titleFont text-[14px]">
            Explain how your coaching center tailors its teaching methods to
            meet individual student needs. Whether you offer personalized lesson
            plans, one-on-one tutoring, or small class sizes, emphasize your
            commitment to customized learning.
          </p>
        </div>
        <div className="h-[250px] w-[400px]  rounded-lg bg-white  border-2 border-gray-300">
          <h1 className=" text-[25px] font-bold text-center pt-[20px]">
            Testimonials and Reviews:
          </h1>
          <FaRev className="h-[40px] w-[40px] m-auto mt-[10px]"></FaRev>
          <p className="text-center pt-[10px] font-titleFont text-[14px]">
            Share testimonials from current and former students or their
            parents. Real-life success stories can be powerful endorsements of
            your coaching center's quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;

import React from "react";

const InstructorCard = ({ item }) => {
  const {
    img,
    department,
    joiningDate,
    experience,
    numberofclass,
    numberofstudents,
    name,
  } = item;
  return (
    <div>
      <div>
        <div className="h-[400px] w-[300px] bg-white mt-[50px] pt-[20px]">
          <img
            className="h-[130px] w-[130px]   border-[4px]  m-auto border-green-600 rounded-full"
            src={img}
          ></img>

          <div>
            <h1 className="text-[20px] font-titleFont text-center mt-[10px] text-[#13265c] font-semibold">
              {name}
            </h1>
            <div className="flex justify-around mt-[30px]">
              <div>
                <p className="font-bold font-titleFont text-[#13265c] text-[16px]">
                  Department:
                </p>
                <p className="font-bold font-titleFont text-[#13265c] text-[14px]">
                  {department}
                </p>
              </div>
              <div>
                <p className="font-bold font-titleFont text-[#13265c] text-[16px]">
                  Joining Date:
                </p>
                <p>{joiningDate}</p>
              </div>
            </div>
            <hr className="w-[250px] m-auto text-[black] mt-[10px]"></hr>
          </div>
          <div className="flex gap-[10px] mt-[5px] ml-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
            <p>{experience}</p>
          </div>
          <div className="flex gap-[10px] mt-[5px] ml-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            <p> {numberofclass}</p>
          </div>
          <div className="flex gap-[10px] mt-[5px] ml-[5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>

            <p>{numberofstudents}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;

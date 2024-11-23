import React from "react";
import { specialityData } from "../assets/assets_frontend/assets";

const SpecialityMenu = () => {
  return (
    <div className="mb-[60px]">
      <h1 className="text-3xl font-bold text-center mb-5">
        Find by Speciality{" "}
      </h1>
      <p className="text-center text-[#4B5563] mb-[60px]">
        Simply browse through our extensive list of trusted doctors, schedule{" "}
        <br /> your appointment hassle-free.
      </p>
      <div className="specialitymenu grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center items-center ">
        {specialityData.map((data, index) => (
          <div key={index} className="text-center flex flex-col justify-center items-center mb-5">
            <img className="h-24 w-24" src={data.image} alt="" />
            <p
              className="mt-3 text-[#4B5563]
"
            >
              {data.speciality}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;

import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-3 bg-primary p-10 rounded banner">
      {/* Left Content */}
      <div className="content w-full lg:w-[60%]">
        <h1 className="text-[20px] md:text-[30px] 2xl:text-[60px] leading-[40px]  2xl:leading-[80px] text-white font-bold">
          Book Appointment <br /> With Trusted Doctors
        </h1>
        <div className="my-5 flex flex-col xl:flex-row gap-3 items-start xl:items-center">
          <img
            className="w-[130px]"
            src={assets.group_profiles}
            alt="Profiles"
          />
          <p className="text-white ">
            Simply browse through our extensive list of trusted doctors, <br />
            schedule your appointment hassle-free.
          </p>
        </div>
        <button className="bg-white text-primary px-6 py-3 rounded font-semibold hover:bg-gray-200 transition">
          Book Appointment
        </button>
      </div>

      {/* Right Image */}
      <div className=" w-full lg:w-[40%] relative bottom-[-40px]">
        <img
          className=" w-100 h-auto "
          src={assets.header_img}
          alt="Doctors"
        />
      </div>
    </div>
  );
};

export default Banner;





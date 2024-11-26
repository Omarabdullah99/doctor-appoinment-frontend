import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
  return (
    <div className="min-h-screen mb-10">
      <p className="text-center text-[30px] font-[400] mb-[60px]">
        <span className="text-[#4B5563]">CONTACT </span>US
      </p>
      <div className="flex flex-col gap-10 md:flex-row items-start md:items-center md:justify-center">
        <div>
          <img
            className="w-full md:max-w-[360px]"
            src={assets.contact_image}
            alt="contact-logo"
          />
        </div>
        <div className=" text-[#4B5563]">
          <p className="text-2xl font-[600] ">Our OFFICE</p>
          <p className="address my-[20px] text-[18px] ">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <div className="contact text-[18px]">
            <p>Tel: (415) 555‑0132</p>
            <p>Email:omarabdullah917303@gmail.com</p>
          </div>
          <p className="text-2xl font-[600] my-[20px]">Careers at PRESCRIPTO</p>
          <p>Learn more about our teams and job openings.</p>

          <button className="border border-black text-black px-8 py-4 text-sm mt-7 hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

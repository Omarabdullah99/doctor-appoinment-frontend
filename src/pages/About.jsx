import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const About = () => {
  const chooseArray=[
    {
      "title":"Efficiency:",
      "description":"Streamlined appointment scheduling that fits into your busy lifestyle."
    },
    {
      "title":"Convenience:",
      "description":"Access to a network of trusted healthcare professionals in your area."
    },
    {
      "title":"Personalization::",
      "description":"Tailored recommendations and reminders to help you stay on top of your health."
    }
  ]
  return (
    <div className="min-h-screen">
      <p className="text-center text-[30px] font-[400] ">
        {" "}
        <span className="text-[#4B5563]">About </span>Us
      </p>
      <div className="flex flex-col lg:flex-row gap-5 my-[60px]">
        <div>
        <img className="w-full h-[450px] object-cover" src={assets.about_image} alt="" />
        </div>
        <div className="flex-1 ">
          <p className="text-[#4B5563] text-[18px] leading-[32px]">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records. <br /><br />
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way. <br /> <br /> 
            
            <span className="font-[500]">Our Vision</span> <br /><br />
             Our vision at Prescripto is to create a seamless
            healthcare experience for every user. We aim to bridge the gap
            between patients and healthcare providers, making it easier for you
            to access the care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="choose mb-14">
        <p className="text-[#4B5563] text-[24px] mb-8">Why <span className="font-[500] text-black">Choose Us</span></p>
        <div className="flex flex-col lg:flex-row">
          {
            chooseArray.map((c,index)=>(
              <div key={index} className="p-8 border border-gray-500 hover:bg-primary hover:text-white transition-all duration-300">
                <p className="mb-8  font-bold text-[18px] ">{c.title}</p>
                <p className="leading-8 ">{c.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default About;

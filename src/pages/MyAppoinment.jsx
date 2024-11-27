import React from "react";
import doc1 from "../assets/assets_frontend/doc1.png";
import doc2 from "../assets/assets_frontend/doc2.png";
import doc3 from "../assets/assets_frontend/doc3.png";

const MyAppoinment = () => {
  const myAppoinments = [
    {
      _id: "doc1",
      name: "Dr. Richard James",
      image: doc1,
      speciality: "Generalphysician",
      degree: "MBBS",
      experience: "4 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 50,
      address: {
        line1: "17th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc2",
      name: "Dr. Emily Larson",
      image: doc2,
      speciality: "Gynecologist",
      degree: "MBBS",
      experience: "3 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 60,
      address: {
        line1: "27th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
    {
      _id: "doc3",
      name: "Dr. Sarah Patel",
      image: doc3,
      speciality: "Dermatologist",
      degree: "MBBS",
      experience: "1 Years",
      about:
        "Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
      fees: 30,
      address: {
        line1: "37th Cross, Richmond",
        line2: "Circle, Ring Road, London",
      },
    },
  ];
  return (
    <div className="min-h-screen mb-20">
      <h1 className="text-[#4B5563] text-2xl">My appointments</h1>
      <hr className="bg-[#D1D1D1] h-[1px] border-none mt-3" />
      {myAppoinments.map((appoinment) => (
        <div
          key={appoinment._id}
          className="flex flex-col md:flex-row md:justify-between md:items-end mb-5 border-b border-[#D1D1D1] py-5"
        >
          <div className="content flex flex-col md:flex-row gap-3 mb-10">
            <img className="bg-[#EAEFFF] rounded md:h-[182px]" src={appoinment.image} alt="" />
            <div className="info">
              <div>
                <h1 className="text-xl font-[500]">{appoinment.name}</h1>
                <p className="font-[400] text-[#4B5563]">{appoinment.speciality}</p>
              </div>
              <div className="py-[18px] text-[#4B5563]">
                <p className="font-[500]">Address:</p>
                <p>{appoinment.address.line1}</p>
                <p>{appoinment.address.line2}</p>
              </div>
              <p className="text-[#989898]">
                <span className="font-[500]">Date & Time:</span> 25, July, 2024 | 8:30 PM
              </p>
            </div>
          </div>
          <div className="button flex flex-col gap-2">
            <button className="bg-primary px-3 py-2 text-white rounded">Paid</button>
            <button className="bg-primary px-3 py-2 text-white rounded">Pay here</button>
            <button className="bg-transparent px-3 py-2 text-[#4B5563] border border-[#4B5563]">Cancel appointment</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAppoinment;

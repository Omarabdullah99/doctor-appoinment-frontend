import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const TopDoctor = () => {
  const { doctors}=useContext(AppContext)
  const topdoctor = doctors.slice(0, 10);
  return (
    <div className="mb-[80px]">
      <h1 className="text-3xl font-bold text-center mb-5">
        Top Doctors to Book
      </h1>
      <p className="text-center text-[#4B5563] mb-[60px]">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="topdoctorlist grid grid-cols-auto gap-3 mb-[30px]">
        {topdoctor.map((doctor, _id) => (
          <Link to={`/appoinment/${doctor._id}`} key={_id} className="border rounded border-[#C9D8FF] hover:translate-y-[-10px] transition-all duration-500">
            <div className="img bg-[#EAEFFF]">
              <img src={doctor.image} alt="" />
            </div>
            <div className="content p-3">
              <div className="flex items-center gap-2">
                <p className="h-2 w-2 bg-[#0FBF00] rounded-full"></p>
                <p className="text-[15px] text-[#0FBF00]">Available</p>
              </div>
              <p className="text-xl font-bold my-1">{doctor.name}</p>
              <p className="text-[15px]">{doctor.speciality}</p>
            </div>
          </Link>
        ))}
      </div>
      <Link to='/doctors' className="flex justify-center"><button className="bg-[#EAEFFF] w-[214px] h-[60px] rounded-full text-xl text-[#4B5563]">more</button></Link>
    </div>
  );
};

export default TopDoctor;

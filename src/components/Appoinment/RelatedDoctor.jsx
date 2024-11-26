import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const RelatedDoctor = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);

  const [relatedDoctor, setRelatedDoctor] = useState([]);

  useEffect(() => {
    const filterDoctor = doctors.filter((d) => d.speciality === speciality);
    const relatedDocs = filterDoctor.filter((d) => d._id !== docId);
    setRelatedDoctor(relatedDocs);
  }, [doctors, docId, speciality]);

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-5">Related Doctors</h1>
      <p className="text-center text-[#4B5563] mb-[60px]">
        Simply browse through our extensive list of trusted doctors.le-free.
      </p>

      <div className="topdoctorlist grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-auto2 gap-3 mb-[30px]">
          {relatedDoctor.map((doctor, _id) => (
            <Link
              to={`/appoinment/${doctor._id}`}
              key={_id}
              className="border rounded border-[#C9D8FF] hover:translate-y-[-10px] transition-all duration-500"
            >
              <div className="img bg-[#EAEFFF]">
                <img src={doctor.image} alt="" />
              </div>
              <div className="content p-3">
                <div className="flex items-center gap-2">
                  <p className="h-2 w-2 bg-[#0FBF00] rounded-full"></p>
                  <p className="text-[15px] text-[#0FBF00]">Available</p>
                </div>
                <p className="text-[18px] xl::text-xl font-bold my-1 line-clamp-1">{doctor.name}</p>
                <p className="text-[15px]">{doctor.speciality}</p>
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default RelatedDoctor;

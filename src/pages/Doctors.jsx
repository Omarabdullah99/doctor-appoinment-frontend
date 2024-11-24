import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { doctors } = useContext(AppContext);
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate=useNavigate()

  console.log('speciality',speciality)

  function applyFilter(){
    if(speciality){
      const result = doctors.filter((d) => d.speciality === speciality);
      setFilterDoc(result)
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    let isActive = true;
    console.log('connect')
    if (isActive){
      applyFilter()
    }
    return () => {
      console.log('disconnect')
      isActive = false;
    };
  }, [speciality, doctors]);

  return (
    <div className="min-h-[100vh]">
      <p>Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row gap-10 items-start mt-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p onClick={()=> speciality === "Generalphysician" ? navigate('/doctors') : navigate('/doctors/Generalphysician')} className={`w-full pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Generalphysician" ?'bg-indigo-100 text-black':''}`}>Generalphysician</p>
          <p onClick={()=> speciality === "Gynecologist" ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-full pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ?'bg-indigo-100 text-black':''}`}>Gynecologist</p>
          <p onClick={()=> speciality === "Dermatologist" ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-full pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ?'bg-indigo-100 text-black':''}`}>Dermatologist</p>
          <p onClick={()=> speciality === "Pediatricians" ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-full pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ?'bg-indigo-100 text-black':''}`}>Pediatricians</p>
          <p onClick={()=> speciality === "Neurologist" ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-full pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ?'bg-indigo-100 text-black':''}`}>Neurologist</p>
          <p onClick={()=> speciality === "Gastroenterologist" ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-full pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ?'bg-indigo-100 text-black':''}`}>Gastroenterologist</p>
        </div>
        <div className="topdoctorlist grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-auto2 gap-3 mb-[30px]">
          {filterDoc.map((doctor, _id) => (
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
    </div>
  );
};

export default Doctors;

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";

const Appointment = () => {
  const [doctor, setDoctor] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSolIndex] = useState(0);
  const [soltTime, setSoltTime] = useState("");
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const { doctors } = useContext(AppContext);
  const { docId } = useParams();

  const getAvalilAbleSlots = async () => {
    setDocSlots([]);

    //getting current date
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      //getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //setting end time of date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlotes = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        //add slot to array
        timeSlotes.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });

        //increment current time by 30 minute
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlotes]);
    }
  };

  useEffect(() => {
    let isActive = true;
    if (docId && doctors) {
      const selectDoctor = doctors.find((d) => d._id === docId);
      if (isActive) setDoctor(selectDoctor);
    }
    return () => {
      isActive = false;
    };
  }, [docId, doctors]);

  useState(() => {
    getAvalilAbleSlots();
  }, [doctor]);

  useEffect(() => {
    console.log("docslots", docSlots);
  }, [docSlots]);

  if (!doctor) {
    return <div>Loading...</div>;
  }

  console.log("out", docSlots);

  return (
    <div className="details min-h-screen mb-[40px]">
      <div className="appointment">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Image Section */}
          <div className="left">
            <img
              className="bg-blue-500 w-full sm:max-w-[18rem] rounded-lg"
              src={doctor.image}
              alt={doctor.name}
            />
          </div>
          {/* Details Section */}
          <div className="flex-1 border-2 rounded-lg p-5">
            <span className="flex items-center gap-3">
              <p className="text-xl md:text-2xl font-semibold">{doctor.name}</p>
              <img src={assets.verified_icon} alt="Verified Icon" />
            </span>
            <span className="text-gray-600 text-xl flex flex-col md:flex-row gap-3 items-start md:items-center my-3">
              {doctor.degree} - {doctor.speciality}
              <button className="border border-gray-500 p-1 rounded-full">
                {doctor.experience}
              </button>
            </span>
            <div className="about">
              <span className="text-lg font-medium flex items-center gap-2">
                <p>About</p>
                <img src={assets.info_icon} alt="Info Icon" />
              </span>
              <p className="text-gray-600 leading-relaxed mb-3">
                {doctor.about}
              </p>
              <p>
                <span className="text-gray-600 font-normal">
                  Appointment fee:
                </span>{" "}
                <span className="font-semibold">${doctor.fees}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking slots</p>
        {/* ----- Booking slots date ----- */}
        <div className="flex gap-3 items-center  mt-4">
          {docSlots.length > 0 &&
            docSlots.map((item, index) => (
              <div
                key={index}
                onClick={() => setSolIndex(index)}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                  slotIndex === index
                    ? "bg-primary text-white"
                    : "border border-gray-200"
                }`}
              >
                {item.length > 0 && item[0] ? ( // Check if item exists and has at least one element
                  <>
                    <p>{daysOfWeek[item[0].dateTime.getDay()]}</p>
                    <p>{item[0].dateTime.getDate()}</p>
                  </>
                ) : (
                  <p>No Slots</p> // Display fallback content when no slots are available
                )}
              </div>
            ))}
        </div>
        
        {/* ----- Booking slots time ----- */}
        <div className="scorll-hiden flex gap-3 items-center w-full overflow-x-scroll">
            {docSlots.length > 0 &&
              docSlots[slotIndex].map((item, index) => (
                <p onClick={()=>setSoltTime(item.time)} key={index} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer mt-4 ${soltTime === item.time ? 'bg-primary text-white':'border border-gray-200"'}`}>
                  {item.time ? item.time.toLowerCase() : ""}
                </p>
              ))}
          </div>
          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">Book an appointment</button>
      </div>
      
     

          

      <div className="relative"></div>
    </div>
  );
};

export default Appointment;

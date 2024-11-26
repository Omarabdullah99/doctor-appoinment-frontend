import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Omar Abdullah",
    image: assets.profile_pic,
    email: "omarabdullah917303@gmail.com",
    phone: "+880 1624108866",
    address: {
      line1: "Daulatpur, Khulna",
      line2: "Moroljong, Bagerhat",
    },
    gender: "Male",
    dob: "2000-04-23",
  });

  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="min-h-screen">
    <div className="max-w-lg flex flex-col gap-2 text-sm mb-10">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input
          type="text"
          value={userData?.name}
          className="border border-gray-500 py-3 px-2 text-3xl  font-medium max-w-60 mt-4"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl  text-neutral-800 mt-4">
          {userData?.name}
        </p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="border  border-gray-500 max-w-52 sm:text-sm py-2 px-2"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="border  border-gray-500 sm:text-sm py-2 px-2"
                type="text"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
            <br /> <br />
              <input
                className="border  border-gray-500 sm:text-sm py-2 px-2"
                type="text"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
            className="max-w-36 border border-gray-500 py-2 px-2"
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}

          <p className="font-bold">Birthday:</p>
          {isEdit ? (
            <input
            className="max-w-36 border border-gray-500 py-2 px-2"
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>

      <div>
        {isEdit ? (
          <button className="border border-primary px-8 py-2 rounded-full mt-11" onClick={() => setIsEdit(false)}>Save Information</button>
        ) : (
          <button className="border border-primary px-8 py-2 rounded-full mt-11" onClick={() => setIsEdit(true)}>Edit</button>
        )}
      </div>
    </div>
    </div>
  );
};

export default MyProfile;

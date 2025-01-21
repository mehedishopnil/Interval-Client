import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const ProfileInfo = () => {
  const { userData } = useContext(AuthContext);

  // Destructure data from userData
  const { email, membership, name, telephone, userId } = userData || {};

  return (
    <div className="p-4">
      {/* Profile Header */}
      <h1 className="text-2xl font-bold text-[#0077BE]">Profile Information</h1>
      <p className="text-gray-600 mt-2">
        Review and update your profile details below.
      </p>

      {/* Profile Details */}
      <div className="mt-6 space-y-4 border border-gray-200 p-4 rounded-lg shadow-sm bg-white">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <span className="font-medium text-gray-800">Name:</span>
          <span className="text-gray-600">{name || "Not available"}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <span className="font-medium text-gray-800">Email:</span>
          <span className="text-gray-600">{email || "Not available"}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <span className="font-medium text-gray-800">Membership:</span>
          <span className="text-gray-600">{membership || "Not available"}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <span className="font-medium text-gray-800">Telephone:</span>
          <span className="text-gray-600">{telephone || "Not available"}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <span className="font-medium text-gray-800">User ID:</span>
          <span className="text-gray-600">{userId || "Not available"}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row sm:justify-start gap-4">
        <button
          className="px-4 py-2 bg-[#0077BE] text-white rounded-lg shadow hover:bg-[#005f9e] transition w-full sm:w-auto"
          onClick={() => console.log("Edit Profile")}
        >
          Edit Profile
        </button>
        <button
          className="px-4 py-2 bg-[#0077BE] text-white rounded-lg shadow hover:bg-[#005f9e] transition w-full sm:w-auto"
          onClick={() => console.log("Edit Password")}
        >
          Edit Password
        </button>
        <button
          className="px-4 py-2 bg-[#0077BE] text-white rounded-lg shadow hover:bg-[#005f9e] transition w-full sm:w-auto"
          onClick={() => console.log("Edit Security Questions")}
        >
          Edit Security Questions
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;

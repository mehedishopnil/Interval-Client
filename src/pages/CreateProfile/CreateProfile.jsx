import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const CreateProfile = () => {
  const { createProfile, googleLogin } = useContext(AuthContext);

  // State for form inputs
  const [memberNumber, setMemberNumber] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  console.log(areaCode, phoneNumber, userID, password)

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      memberNumber,
      phone: `${areaCode}-${phoneNumber}`,
      userID,
      password,
    };

    try {
      await createProfile(formData); // Send formData to AuthProvider
      Swal.fire({
        icon: "success",
        title: "Profile created successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Profile creation failed",
        text: error.message,
      });
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      Swal.fire({
        icon: "success",
        title: "Google login successful",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Google login failed",
        text: error.message,
      });
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg p-6">
      <h1 className="text-2xl font-semibold text-left text-[#0077BE]">
        Create A Profile
      </h1>
      <p className="mt-4 text-left text-gray-600">
        To create your Web profile and password, please enter your membership
        number and the telephone number that matches your membership record.
      </p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        {/* Member Number */}
        <div>
          <label className="block text-left text-gray-700 font-medium mb-2">
            Member Number
          </label>
          <input
            type="text"
            placeholder="Enter your membership number"
            className="w-full input input-bordered input-primary"
            value={memberNumber}
            onChange={(e) => setMemberNumber(e.target.value)}
            required
          />
        </div>

        {/* Telephone */}
        <div>
          <label className="block text-left text-gray-700 font-medium mb-2">
            Telephone
          </label>
          <div className="flex gap-5">
            <div>
              <label className="block text-left text-gray-700 font-medium mb-2">
                Area Code
              </label>
              <input
                type="text"
                className="input input-bordered input-primary w-full"
                value={areaCode}
                onChange={(e) => setAreaCode(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-left text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="text"
                className="input input-bordered input-primary w-full"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        {/* Set UserID */}
        <div>
          <label className="block text-left text-gray-700 font-medium mb-2">
            Set UserID
          </label>
          <input
            type="text"
            placeholder="Enter your UserID"
            className="w-full input input-bordered input-primary"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-left text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full input input-bordered input-primary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full bg-[#0077BE] hover:bg-[#005a9e] text-white"
        >
          Submit
        </button>
      </form>

      {/* Divider */}
      <div className="divider mt-6">OR</div>

      {/* Google Login */}
      <div className="w-full text-center">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-4 text-[#0077BE] border-[2px] w-full py-2 rounded font-semibold hover:bg-blue-700 hover:text-white"
        >
          <FaGoogle /> Google Login
        </button>
      </div>

      {/* Already have a Profile */}
      <div className="mt-6 text-center text-gray-600">
        <p>Already have a Profile?</p>
        <Link to="/login">
          <p className="text-[#0077BE] font-medium hover:underline">Login</p>
        </Link>
      </div>
    </div>
  );
};

export default CreateProfile;

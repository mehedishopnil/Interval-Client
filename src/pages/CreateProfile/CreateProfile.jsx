import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const CreateProfile = () => {
  const { createProfile, googleLogin } = useContext(AuthContext);

  if (!createProfile || !googleLogin) {
    console.error("AuthContext functions are not defined. Please check the provider setup.");
    return <p>Error: Authentication functions are not available.</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
  
    // Collect form data
    const membership = form.membership.value.trim();
    const areaCode = form.areaCode.value.trim();
    const phoneNumber = form.phoneNumber.value.trim();
    const phone = `${areaCode}-${phoneNumber}`;
    const userID = form.userID.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
  
    const allData = { membership, phone, userID, email, password };
  
    // Debug collected data
    console.log("Collected Data:", allData);
  
    try {
      const response = await createProfile(allData);
      if (response.success) {
        Swal.fire({
          icon: "success",
          title: "Profile created successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Profile creation failed",
        text: error.message || "Something went wrong!",
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
            name="membership"
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
                name="areaCode"
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
                name="phoneNumber"
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
            name="userID"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-left text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email Address"
            className="w-full input input-bordered input-primary"
            name="email"
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
            name="password"
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

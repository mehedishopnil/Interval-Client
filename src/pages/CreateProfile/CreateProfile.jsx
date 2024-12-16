import React from "react";
import { Link } from "react-router-dom";

const CreateProfile = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-lg p-6">
      <h1 className="text-2xl font-semibold text-left text-[#0077BE]">
        Create A Profile
      </h1>
      <p className="mt-4 text-left text-gray-600 ">
        To create your Web profile and password, please enter your membership
        number and the telephone number that matches your membership record.
      </p>
      <form className="mt-6 space-y-4">
        <div>
          <label className="block text-left text-gray-700 font-medium mb-2">
            Member Number
          </label>
          <input
            type="text"
            placeholder="Enter your membership number"
            className="w-full input input-bordered input-primary"
          />
        </div>

        <div>
          <h1 className="block text-left text-gray-700 font-medium mb-2">
            Telephone
          </h1>
        </div>
        <div className="">
          <div className=" flex gap-5 space-x-2">
            <div className="">
              <label className="block text-left text-gray-700 font-medium mb-2">
                Area Code
              </label>
              <input
                type="text"
                className="input input-bordered input-primary w-10/12"
              />
            </div>
            <div className="">
              <label className="block text-left text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="text"
                className="input input-bordered input-primary w-10/12"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full bg-[#0077BE] hover:bg-[#005a9e] text-white"
        >
          Submit
        </button>
      </form>
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

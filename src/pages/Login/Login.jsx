import React from 'react';

const Login = () => {
  return (
    
      <div className="w-96 p-8 bg-white rounded-md">
        {/* Title */}
        <h1 className="text-left text-2xl font-bold text-[#0077BE] mb-6">Login</h1>

        {/* Login Form */}
        <form>
          {/* Login ID */}
          <div className="mb-4">
            <label htmlFor="loginId" className="block text-left text-gray-700 font-medium mb-2">
              Login ID
            </label>
            <input
              type="text"
              id="loginId"
              className="input input-bordered w-full"
              placeholder="Enter your login ID"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-left text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="input input-bordered w-full"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me */}
          <div className="mb-6 flex gap-5">
            <p className="block text-gray-700 font-medium mb-2">Remember Me</p>
            <div className="flex gap-4">
              <button type="button" className="btn btn-outline btn-sm text-[#0077BE]">
                Yes
              </button>
              <button type="button" className="btn btn-outline btn-sm text-[#0077BE]">
                No
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full bg-[#0077BE] border-none hover:bg-blue-600 mb-4"
          >
            Login
          </button>
        </form>

        {/* Login Help */}
        <div className=" mb-4 text-right">
          <a href="#" className="text-[#0077BE]  font-medium hover:underline">
            LOGIN HELP &gt;
          </a>
        </div>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Don't Have a Profile */}
        <p className="text-center text-gray-700 mb-2">Don't have a profile?</p>
        <div className="text-center">
          <a href="create-profile" className="text-[#0077BE] font-medium hover:underline">
            Create a profile
          </a>
        </div>
      </div>

  );
};

export default Login;

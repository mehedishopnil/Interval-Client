import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  console.log(loginId, password);

  // Handle login with loginId and password
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(loginId, password);
      Swal.fire({
        icon: 'success',
        title: 'Login successful',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/'); // Redirect to the homepage
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login failed',
        text: error.message,
      });
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      Swal.fire({
        icon: 'success',
        title: 'Google login successful',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/'); // Redirect to the homepage
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Google login failed',
        text: error.message,
      });
    }
  };

  return (
    <div className="w-96 p-8 bg-white rounded-md">
      {/* Title */}
      <h1 className="text-left text-2xl font-bold text-[#0077BE] mb-6">Login</h1>

      {/* Login Form */}
      <form onSubmit={handleLogin}>
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
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            required
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
      <div className="mb-4 text-right">
        <a href="#" className="text-[#0077BE] font-medium hover:underline">
          LOGIN HELP &gt;
        </a>
      </div>

      {/* Divider */}
      <div className="divider">OR</div>

      {/* Google Login */}
      <div className="w-full text-center mb-5">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-4 text-[#0077BE] border-[2px] w-full py-2 rounded font-semibold hover:bg-[#0077BE] hover:text-white"
        >
          <FaGoogle /> Google Login
        </button>
      </div>

      {/* Don't Have a Profile */}
      <p className="text-center text-gray-700 mb-2">Don't have a profile?</p>
      <div className="text-center">
        <Link to="/create-profile">
          <h1 className="text-[#0077BE] font-medium hover:underline">Create a profile</h1>
        </Link>
      </div>
    </div>
  );
};

export default Login;

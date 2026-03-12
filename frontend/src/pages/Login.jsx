import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // after login success
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white shadow-xl rounded-lg">

        {/* Header */}
        <div className="bg-[#0B3D91] text-white text-center py-4 rounded-t-lg">
          <h1 className="text-2xl font-bold">RoadSync Portal</h1>
          <p className="text-sm">
            Government Infrastructure Coordination System
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">

          <h2 className="text-xl font-semibold text-center text-gray-700">
            Government User Login
          </h2>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Official Email ID
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gov.in"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#FF6B00] text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Login
          </button>

          {/* Extra Links */}
          <div className="flex justify-between text-sm text-gray-600">
            <Link
              to="/signup"
              className="text-[#0B3D91] hover:underline"
            >
              Create Account
            </Link>

            <Link
              to="/forgot-password"
              className="text-[#0B3D91] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

        </form>

      </div>
    </div>
  );
};

export default Login;
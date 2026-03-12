import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    employeeId: "",
    phone: "",
    password: "",
    confirmPassword: "",
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
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="w-full max-w-2xl bg-white shadow-xl rounded-lg">

        {/* Header */}
        <div className="bg-[#0B3D91] text-white text-center py-4 rounded-t-lg">
          <h1 className="text-2xl font-bold">RoadSync Portal</h1>
          <p className="text-sm">Government Infrastructure Coordination System</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">

          <h2 className="text-xl font-semibold text-center text-gray-700">
            Create Government Account
          </h2>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
            />
          </div>

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
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0B3D91]"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Department
            </label>

            <select
              name="department"
              required
              value={formData.department}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0B3D91]"
            >
              <option value="">Select Department</option>
              <option>Road Cutting Department</option>
              <option>Traffic Control Department</option>
              <option>Municipal Corporation</option>
              <option>Electricity Department</option>
              <option>Water Supply Department</option>
              <option>Urban Planning Department</option>
            </select>
          </div>

          {/* Employee ID */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Government Employee ID
            </label>
            <input
              type="text"
              name="employeeId"
              required
              value={formData.employeeId}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0B3D91]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0B3D91]"
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
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0B3D91]"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#0B3D91]"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#FF6B00] text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            Create Account
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already registered?{" "}
            <Link
              to="/login"
              className="text-[#0B3D91] font-medium hover:underline"
            >
              Login Here
            </Link>
          </p>

        </form>

      </div>
    </div>
  );
};

export default Signup;
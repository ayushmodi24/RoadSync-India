import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    employeeId: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await fetch("http://localhost:5000/api/auth/signup", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(formData)

      });

      const data = await res.json();

      alert(data.message);

      navigate("/login");

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          RoadSync Signup
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Official Email"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />

          <select
            name="department"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option>Water Department</option>
            <option>Electricity Department</option>
            <option>Traffic Department</option>
            <option>Municipal Corporation</option>
          </select>

          <input
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Signup
          </button>

        </form>

        <p className="text-center mt-4">

          Already have an account?{" "}

          <Link to="/login" className="text-blue-600">
            Login
          </Link>

        </p>

      </div>

    </div>

  );

};

export default Signup;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <h1 className="text-2xl font-bold text-gray-800">
            Smart Road Coordination & Monitoring Portal
          </h1>
          <p className="text-sm text-gray-600">
            Secure Infrastructure Governance Platform
          </p>
        </div>
      </header>

      {/* Login Card */}
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="bg-white shadow-xl border-t-4 border-[#0B3D91] p-8 w-full max-w-md">

          <h2 className="text-lg font-semibold text-gray-800 text-center mb-6">
            Secure Authorized Access
          </h2>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Official Email Address
              </label>
              <input
                type="email"
                className="w-full border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                placeholder="Enter official email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                placeholder="Enter password"
              />
            </div>

            <button className="w-full bg-[#0B3D91] text-white py-2 font-medium hover:bg-blue-900">
              Authenticate
            </button>

          </form>

          <div className="text-sm text-center mt-6">
            <span className="text-gray-600">New user?</span>{" "}
            <Link to="/register" className="text-[#0B3D91] font-medium">
              Submit Registration Request
            </Link>
          </div>

          <div className="mt-6 text-xs text-gray-600 border-t pt-4 text-center">
            This system is restricted to authorized personnel only.
          </div>

        </div>
      </div>

      <footer className="text-center text-xs text-gray-600 py-4 border-t bg-white">
        © 2026 Smart Road Coordination & Monitoring Portal
      </footer>

    </div>
  );
};

export default Login;

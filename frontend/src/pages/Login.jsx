import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Login As</h1>

      <button onClick={() => handleLogin("Admin")} className="bg-blue-600 text-white px-4 py-2 rounded">
        Admin
      </button>

      <button onClick={() => handleLogin("Department")} className="bg-green-600 text-white px-4 py-2 rounded">
        Department
      </button>

      <button onClick={() => handleLogin("Citizen")} className="bg-gray-600 text-white px-4 py-2 rounded">
        Citizen
      </button>
    </div>
  );
};

export default Login;

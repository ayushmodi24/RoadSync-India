import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center bg-white shadow px-6 py-3">
      {/* <h1 className="font-semibold">Dashboard</h1> */}

      <div className="flex items-center gap-4 w-screen bg-blend-color-dodge">
        {/* <span>🔔</span> */}
        <button onClick={()=>navigate("/login")}>LogIn</button>
        {/* <span>{user?.name}</span> */}
        {/* <button onClick={logout} className="bg-red-500  text-white px-3 py-1 rounded">
          Logout
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;

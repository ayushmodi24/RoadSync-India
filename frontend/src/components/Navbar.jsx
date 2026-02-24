import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center bg-gray-100 shadow px-6 py-3">
      {/* <h1 className="font-semibold">Dashboard</h1> */}

      <div className="flex items-end justify-end gap-4 w-screen bg-blend-color-dodge">
        {/* <span>🔔</span> */}
        <button className="cursor-pointer border-2 rounded-2xl px-2 py-1 hover:bg-gray-800 hover:px-2.5 hover:py-1.5 hover:text-white" onClick={()=>navigate("/login")}>LogIn</button>
        {/* <span>{user?.name}</span> */}
        {/* <button onClick={logout} className="bg-red-500  text-white px-3 py-1 rounded">
          Logout
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;

// import { useNavigate, Link } from "react-router-dom";

// const Navbar = ({ isSticky }) => {
//   const navigate = useNavigate();

//   return (
//     <nav
//       className={`w-full bg-white shadow-md transition-all duration-300 ${
//         isSticky ? "fixed top-0 left-0 z-50" : "relative"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

//         {/* Logo */}
//         <div
//           className="font-bold text-[#0B3D91] text-lg cursor-pointer"
//           onClick={() => navigate("/")}
//         >
//           Road Sync
//         </div>

//         {/* Menu */}
//         <div className="flex items-center space-x-6 text-sm font-medium">

//           <Link to="/" className="hover:text-[#0B3D91]">
//             Home
//           </Link>

//           <Link to="/projects" className="hover:text-[#0B3D91]">
//             Projects
//           </Link>

//           <Link to="/dashboard" className="hover:text-[#0B3D91]">
//             Dashboard
//           </Link>

//           <button
//             onClick={() => navigate("/login")}
//             className="border-2 rounded-2xl px-4 py-1 hover:bg-gray-800 hover:text-white transition"
//           >
//             Login
//           </button>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ isSticky }) => {
  const navigate = useNavigate();

  return (
    <nav
      className={`w-full bg-[#0B3D91] text-white shadow-md transition-all duration-300 ${
        isSticky ? "fixed top-0 left-0 z-50" : "relative"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer tracking-wide"
          onClick={() => navigate("/")}
        >
          🚦 RoadSync
        </div>

        {/* Menu */}
        <div className="flex items-center space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>

          <Link to="/projects" className="hover:text-gray-300 transition">
            Projects
          </Link>

          <Link to="/dashboard" className="hover:text-gray-300 transition">
            Dashboard
          </Link>

          <button
            onClick={() => navigate("/login")}
            className="bg-[#FF6B00] px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
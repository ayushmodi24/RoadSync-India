// import { useState, useEffect, useRef } from "react";
// import Navbar from "../components/Navbar";

// const Homepage = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (heroRef.current) {
//         const heroHeight = heroRef.current.offsetHeight;
//         setIsSticky(window.scrollY >= heroHeight);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div>

//       {/* ===== Fixed Background Hero Section ===== */}
//       <div
//         ref={heroRef}
//         className="w-full h-[50vh] bg-fixed bg-center bg-cover relative"
//         style={{
//           backgroundImage:
//             "url('https://tg-roadcutting.cgg.gov.in/resources/roadCuttingStyles/images/slider1.jpg')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
//             Smart Road Coordination & Monitoring Portal
//           </h1>
//         </div>
//       </div>

//       {/* ===== Navbar ===== */}
//       <Navbar isSticky={isSticky} />

//       {/* Spacer only when fixed */}
//       {isSticky && <div className="h-16"></div>}

//       {/* ===== Scroll Content ===== */}
//       <section className="bg-white">
//         <div className="max-w-6xl mx-auto px-6 py-20 space-y-16">

//           <div>
//             <h2 className="text-3xl font-bold mb-4">Welcome</h2>
//             <p className="text-gray-700 text-lg">
//               Monitor, coordinate and manage infrastructure projects efficiently.
//             </p>
//           </div>

//           <div className="h-250">
//             Scroll down to see the image stay fixed.
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// };

// export default Homepage;

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  FaRoad,
  FaTrafficLight,
  FaBuilding,
  FaBolt,
  FaWater,
  FaCity,
} from "react-icons/fa";

const Homepage = () => {
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        setIsSticky(window.scrollY >= heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const departments = [
    {
      name: "Road Cutting",
      desc: "Manage excavation permissions & approvals",
      icon: <FaRoad size={28} />,
      image:
        "https://media.istockphoto.com/id/2169377990/photo/construction-worker-cuts-the-asphalt-with-a-circular-saw-on-a-road.jpg?s=612x612&w=0&k=20&c=LU2_KaTONsOLgHZS0WDasmPcDiyJ0RDMfqkbzkvRhFs=",
      path: "/department/road-cutting",
    },
    {
      name: "Traffic Control",
      desc: "Traffic signals & congestion monitoring",
      icon: <FaTrafficLight size={28} />,
      image:
        "https://media.istockphoto.com/id/1348929495/photo/a-traffic-control-worker-is-holding-a-slow-sign.jpg?s=612x612&w=0&k=20&c=VK4kqSU3_kOsJq1TqzxqTY0eQVrarCWI1IEJPIvANfk=",
      path: "/department/traffic",
    },
    {
      name: "Municipal Corp",
      desc: "Civic infrastructure & public works",
      icon: <FaBuilding size={28} />,
      image:
        "https://images.picxy.com/cache/2018/8/10/e1325d236782ae61d704b74cf8c12e34.jpg",
      path: "/department/municipal",
    },
    {
      name: "Electricity Dept",
      desc: "Power supply & underground cabling",
      icon: <FaBolt size={28} />,
      image:
        "https://media.assettype.com/tnm%2Fimport%2Fsites%2Fdefault%2Ffiles%2Fpower-cut-in-Delhi-India-in-summer-season_0.jpg?w=480&auto=format%2Ccompress&fit=max",
      path: "/department/electricity",
    },
    {
      name: "Water Supply",
      desc: "Pipeline & water distribution system",
      icon: <FaWater size={28} />,
      image:
        "https://images.picxy.com/cache/2020/2/27/d5040ec1f2d1d9fddf59d5b5748dea7b.jpg",
      path: "/department/water",
    },
    {
      name: "Urban Planning",
      desc: "Smart city & infrastructure planning",
      icon: <FaCity size={28} />,
      image:
        "https://cdn.thehagueacademy.com/2022/11/mohit-kumar-615313-unsplash.jpg",
      path: "/department/urban",
    },
  ];

  return (
    <div>
      {/* ===== Hero Section ===== */}
      <div
        ref={heroRef}
        className="w-full h-[50vh] bg-fixed bg-center bg-cover relative"
        style={{
          backgroundImage:
            "url('https://tg-roadcutting.cgg.gov.in/resources/roadCuttingStyles/images/slider1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Smart Road Coordination & Monitoring Portal
          </h1>
        </div>
      </div>

      {/* ===== Navbar ===== */}
      <Navbar isSticky={isSticky} />
      {isSticky && <div className="h-16"></div>}

      {/* ===== Department Section ===== */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Explore Departments
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
            {departments.map((dept, index) => (
              <div
                key={index}
                onClick={() => navigate(dept.path)}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                {/* Top Image */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <div className="text-green-600 flex justify-center mb-3">
                    {dept.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {dept.name}
                  </h3>

                  <p className="text-sm text-gray-600">
                    {dept.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Extra Section ===== */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-125">
            Additional portal content...
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
// import { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import { motion } from "framer-motion";
// import {
//   FaRoad,
//   FaTrafficLight,
//   FaBuilding,
//   FaBolt,
//   FaWater,
//   FaCity,
// } from "react-icons/fa";

// const Homepage = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const heroRef = useRef(null);
//   const navigate = useNavigate();

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

//   const departments = [
//     {
//       name: "Road Cutting",
//       desc: "Manage excavation permissions & approvals",
//       icon: <FaRoad size={28} />,
//       image:
//         "https://media.istockphoto.com/id/2169377990/photo/construction-worker-cuts-the-asphalt-with-a-circular-saw-on-a-road.jpg?s=612x612&w=0&k=20&c=LU2_KaTONsOLgHZS0WDasmPcDiyJ0RDMfqkbzkvRhFs=",
//       path: "/department/road-cutting",
//     },
//     {
//       name: "Traffic Control",
//       desc: "Traffic signals & congestion monitoring",
//       icon: <FaTrafficLight size={28} />,
//       image:
//         "https://media.istockphoto.com/id/1348929495/photo/a-traffic-control-worker-is-holding-a-slow-sign.jpg?s=612x612&w=0&k=20&c=VK4kqSU3_kOsJq1TqzxqTY0eQVrarCWI1IEJPIvANfk=",
//       path: "/department/traffic",
//     },
//     {
//       name: "Municipal Corp",
//       desc: "Civic infrastructure & public works",
//       icon: <FaBuilding size={28} />,
//       image:
//         "https://images.picxy.com/cache/2018/8/10/e1325d236782ae61d704b74cf8c12e34.jpg",
//       path: "/department/municipal",
//     },
//     {
//       name: "Electricity Dept",
//       desc: "Power supply & underground cabling",
//       icon: <FaBolt size={28} />,
//       image:
//         "https://media.assettype.com/tnm%2Fimport%2Fsites%2Fdefault%2Ffiles%2Fpower-cut-in-Delhi-India-in-summer-season_0.jpg?w=480&auto=format%2Ccompress&fit=max",
//       path: "/department/electricity",
//     },
//     {
//       name: "Water Supply",
//       desc: "Pipeline & water distribution system",
//       icon: <FaWater size={28} />,
//       image:
//         "https://images.picxy.com/cache/2020/2/27/d5040ec1f2d1d9fddf59d5b5748dea7b.jpg",
//       path: "/department/water",
//     },
//     {
//       name: "Urban Planning",
//       desc: "Smart city & infrastructure planning",
//       icon: <FaCity size={28} />,
//       image:
//         "https://cdn.thehagueacademy.com/2022/11/mohit-kumar-615313-unsplash.jpg",
//       path: "/department/urban",
//     },
//   ];

//   return (
//     <div>
//       {/* ===== Hero Section ===== */}
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
//       {/* <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
//         <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
//           Coordinated Infrastructure. Zero Re-Digging.
//         </h1>

//         <p className="text-gray-200 max-w-2xl mb-8">
//           A centralized platform for inter-departmental road construction
//           coordination, deadline tracking, and accountability monitoring.
//         </p>

//         <div className="flex gap-4">
//           <button
//             onClick={() => navigate("/projects")}
//             className="bg-[#FF6B00] text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
//           >
//             View Active Projects
//           </button>

//           <button
//             onClick={() => navigate("/dashboard")}
//             className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
//           >
//             Open Dashboard
//           </button>
//         </div>
//       </div> */}

//       {/* ===== Navbar ===== */}
//       <Navbar isSticky={isSticky} />
//       {isSticky && <div className="h-16"></div>}

//       {/* ===== Department Section ===== */}
//       <section className="bg-gray-100 py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center mb-14">
//             Explore Departments
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
//             {departments.map((dept, index) => (
//               <div
//                 key={index}
//                 onClick={() => navigate(dept.path)}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
//               >
//                 {/* Top Image */}
//                 <div className="h-40 overflow-hidden">
//                   <img
//                     src={dept.image}
//                     alt={dept.name}
//                     className="w-full h-full object-cover hover:scale-110 transition duration-500"
//                   />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 text-center">
//                   <div className="text-green-600 flex justify-center mb-3">
//                     {dept.icon}
//                   </div>

//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                     {dept.name}
//                   </h3>

//                   <p className="text-sm text-gray-600">
//                     {dept.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== Accountability Section ===== */}
//       <section className="bg-[#0B3D91] text-white py-20">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

//           <div>
//             <h2 className="text-3xl font-bold mb-6">
//               Automated Deadline & Fine Monitoring
//             </h2>

//             <ul className="space-y-4 text-gray-200">
//               <li>✔ Real-time task tracking</li>
//               <li>✔ Delay alerts to higher authorities</li>
//               <li>✔ Fine calculation for missed deadlines</li>
//               <li>✔ Proof upload & verification system</li>
//             </ul>
//           </div>

//           <div className="bg-white text-black p-8 rounded-xl shadow-xl">
//             <h3 className="font-bold mb-4">Project Clearance Status</h3>
//             <p>Water Dept ✅</p>
//             <p>Electricity Dept ✅</p>
//             <p>Traffic Dept ❌ Pending</p>
//             <p className="mt-4 font-semibold text-red-600">
//               Road Construction Locked Until All Clearances
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* ===== Stats Section ===== */}
//       <section className="bg-white py-16">
//         <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

//           <div className="bg-gray-100 p-6 rounded-xl shadow">
//             <h3 className="text-3xl font-bold text-[#0B3D91]">24</h3>
//             <p className="text-gray-600 mt-2">Active Projects</p>
//           </div>

//           <div className="bg-gray-100 p-6 rounded-xl shadow">
//             <h3 className="text-3xl font-bold text-green-600">6</h3>
//             <p className="text-gray-600 mt-2">Departments Connected</p>
//           </div>

//           <div className="bg-gray-100 p-6 rounded-xl shadow">
//             <h3 className="text-3xl font-bold text-yellow-500">8</h3>
//             <p className="text-gray-600 mt-2">Pending Clearances</p>
//           </div>

//           <div className="bg-gray-100 p-6 rounded-xl shadow">
//             <h3 className="text-3xl font-bold text-red-500">3</h3>
//             <p className="text-gray-600 mt-2">Delayed Tasks</p>
//           </div>

//         </div>
//       </section>

//       {/* ===== How It Works ===== */}
//       <section className="bg-gray-50 py-20">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-12">How RoadSync Works</h2>

//           <div className="grid md:grid-cols-5 gap-6 text-sm">

//             <div>
//               <div className="text-3xl mb-3">1️⃣</div>
//               <p>Admin Creates Road Project</p>
//             </div>

//             <div>
//               <div className="text-3xl mb-3">2️⃣</div>
//               <p>Departments Notified Instantly</p>
//             </div>

//             <div>
//               <div className="text-3xl mb-3">3️⃣</div>
//               <p>Work Progress Updated</p>
//             </div>

//             <div>
//               <div className="text-3xl mb-3">4️⃣</div>
//               <p>Deadline Monitoring</p>
//             </div>

//             <div>
//               <div className="text-3xl mb-3">5️⃣</div>
//               <p>Final Road Approval</p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ===== Extra Section ===== */}
//       <section className="bg-white py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="h-125">
//             Additional portal content...
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
import { motion } from "framer-motion";
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


  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div>
      {/* HERO SECTION */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-[60vh] bg-fixed bg-center bg-cover relative"
        style={{
          backgroundImage:
            "url('https://tg-roadcutting.cgg.gov.in/resources/roadCuttingStyles/images/slider1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white text-4xl md:text-5xl font-bold mb-6"
          >
            Coordinated Infrastructure. Zero Re-Digging.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-200 max-w-2xl mb-8"
          >
            A centralized portal for real-time inter-department road
            coordination, tracking, and accountability.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/projects")}
            className="bg-[#FF6B00] text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
          >
            View Active Projects
          </motion.button>
        </div>
      </motion.div>

      <Navbar isSticky={isSticky} />
      {isSticky && <div className="h-16"></div>}

      {/* DEPARTMENTS */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-100 py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Explore Departments
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate(dept.path)}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6 text-center">
                  <div className="text-green-600 flex justify-center mb-3">
                    {dept.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-sm text-gray-600">{dept.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ACCOUNTABILITY */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#0B3D91] text-white py-20"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Automated Deadline & Fine Monitoring
            </h2>
            <ul className="space-y-4 text-gray-200">
              <li>✔ Real-time task tracking</li>
              <li>✔ Delay alerts to authorities</li>
              <li>✔ Fine auto-calculation</li>
              <li>✔ Proof upload verification</li>
            </ul>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white text-black p-8 rounded-xl shadow-xl"
          >
            <h3 className="font-bold mb-4">Project Clearance Status</h3>
            <p>Water Dept ✅</p>
            <p>Electricity Dept ✅</p>
            <p>Traffic Dept ❌ Pending</p>
            <p className="mt-4 font-semibold text-red-600">
              Road Locked Until All Clearances
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* STATS */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white py-16"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            { num: "24", label: "Active Projects" },
            { num: "6", label: "Departments Connected" },
            { num: "8", label: "Pending Clearances" },
            { num: "3", label: "Delayed Tasks" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-100 p-6 rounded-xl shadow"
            >
              <h3 className="text-3xl font-bold text-[#0B3D91]">
                {item.num}
              </h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Homepage;
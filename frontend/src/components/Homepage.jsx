import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

const Homepage = () => {
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef(null);

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

  return (
    <div>

      {/* ===== Fixed Background Hero Section ===== */}
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

      {/* Spacer only when fixed */}
      {isSticky && <div className="h-16"></div>}

      {/* ===== Scroll Content ===== */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-16">

          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome</h2>
            <p className="text-gray-700 text-lg">
              Monitor, coordinate and manage infrastructure projects efficiently.
            </p>
          </div>

          <div className="h-250">
            Scroll down to see the image stay fixed.
          </div>

        </div>
      </section>

    </div>
  );
};

export default Homepage;
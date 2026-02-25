import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const DepartmentPage = () => {
  const { deptName } = useParams();

  const departmentContent = {
    "road-cutting": {
      title: "Road Cutting Department",
      description:
        "Manages road excavation permissions and ensures coordinated infrastructure development.",
    },
    traffic: {
      title: "Traffic Control Department",
      description:
        "Handles traffic flow management, signals, road safety and congestion monitoring.",
    },
    municipal: {
      title: "Municipal Corporation",
      description:
        "Oversees city infrastructure, sanitation, and civic services.",
    },
    electricity: {
      title: "Electricity Department",
      description:
        "Responsible for underground cables, power supply coordination and approvals.",
    },
    water: {
      title: "Water Supply Department",
      description:
        "Manages pipelines, water distribution, and excavation coordination.",
    },
    urban: {
      title: "Urban Planning Department",
      description:
        "Plans smart city infrastructure and development projects.",
    },
  };

  const dept = departmentContent[deptName];

  if (!dept) {
    return <div className="p-10">Department Not Found</div>;
  }

  return (
    <div>
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6 text-[#0B3D91]">
          {dept.title}
        </h1>

        <p className="text-lg text-gray-700 mb-10">
          {dept.description}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded shadow">
            <h3 className="font-semibold mb-2">Active Projects</h3>
            <p>24 Ongoing</p>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow">
            <h3 className="font-semibold mb-2">Pending Requests</h3>
            <p>12 Applications</p>
          </div>

          <div className="bg-gray-100 p-6 rounded shadow">
            <h3 className="font-semibold mb-2">Completed This Month</h3>
            <p>18 Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentPage;
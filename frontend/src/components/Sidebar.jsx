import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const { user } = useAuth();

  const menuItems = {
    Citizen: ["Dashboard", "Report Damage", "Track Repairs"],
    Department: ["Dashboard", "Manage Roads", "Digging Requests"],
    Contractor: ["Dashboard", "Assigned Repairs"],
    Admin: ["Dashboard", "Users", "Analytics", "Budget"]
  };

  return (
    <div className="w-64 h-screen bg-blue-900 text-white p-5">
      <h2 className="text-xl font-bold mb-6">Smart Road</h2>

      {menuItems[user?.role]?.map((item, index) => (
        <div key={index} className="mb-4 hover:bg-blue-700 p-2 rounded cursor-pointer">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

import { useEffect, useState } from "react";

const AdminDashboard = () => {

  const [users, setUsers] = useState([]);

  const loadUsers = async () => {

    const res = await fetch("http://localhost:5000/api/admin/pending");

    const data = await res.json();

    setUsers(data);

  };

  useEffect(() => {

    loadUsers();

  }, []);

  const approveUser = async (id) => {

    await fetch(`http://localhost:5000/api/admin/approve/${id}`, {

      method: "PUT"

    });

    loadUsers();

  };

  const rejectUser = async (id) => {

    await fetch(`http://localhost:5000/api/admin/reject/${id}`, {

      method: "PUT"

    });

    loadUsers();

  };

  return (

    <div className="p-10">

      <h2 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h2>

      <h3 className="text-xl mb-4">
        Pending User Approvals
      </h3>

      {users.length === 0 && <p>No pending users</p>}

      {users.map((user) => (

        <div
          key={user._id}
          className="border p-4 mb-3 flex justify-between items-center"
        >

          <div>

            <p className="font-semibold">{user.name}</p>

            <p>{user.email}</p>

            <p>{user.department}</p>

          </div>

          <div className="space-x-4">

            <button
              onClick={() => approveUser(user._id)}
              className="bg-green-600 text-white px-4 py-1 rounded"
            >
              Approve
            </button>

            <button
              onClick={() => rejectUser(user._id)}
              className="bg-red-600 text-white px-4 py-1 rounded"
            >
              Reject
            </button>

          </div>

        </div>

      ))}

    </div>

  );

};

export default AdminDashboard;
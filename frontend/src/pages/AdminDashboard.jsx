// import { useEffect, useState } from "react";

// const AdminDashboard = () => {

//   const [users, setUsers] = useState([]);

//   const [form, setForm] = useState({
//     projectId: "",
//     department: "",
//     task: "",
//     deadline: ""
//   });
//   const assignTask = async (e) => {

//     e.preventDefault();

//     const token = localStorage.getItem("token");

//     await fetch(
//       "http://localhost:5000/api/admin/assign-task",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(form)
//       }
//     );

//     alert("Task Assigned");

//   };

//   const loadUsers = async () => {

//     const res = await fetch("http://192.168.1.43:5000/api/admin/pending");

//     const data = await res.json();

//     setUsers(data);

//   };

//   useEffect(() => {

//     loadUsers();

//   }, []);

//   const approveUser = async (id) => {

//     await fetch(`http://192.168.1.43:5000/api/admin/approve/${id}`, {

//       method: "PUT"

//     });

//     loadUsers();

//   };

//   const rejectUser = async (id) => {

//     await fetch(`http://192.168.1.43:5000/api/admin/reject/${id}`, {

//       method: "PUT"

//     });

//     loadUsers();

//   };

//   return (

//     <div className="p-10">

//       <h2 className="text-3xl font-bold mb-6">
//         Admin Dashboard
//       </h2>

//       <h3 className="text-xl mb-4">
//         Pending User Approvals
//       </h3>

//       {users.length === 0 && <p>No pending users</p>}

//       {users.map((user) => (

//         <div
//           key={user._id}
//           className="border p-4 mb-3 flex justify-between items-center"
//         >

//           <div>

//             <p className="font-semibold">{user.name}</p>

//             <p>{user.email}</p>

//             <p>{user.department}</p>

//           </div>

//           <div className="space-x-4">

//             <button
//               onClick={() => approveUser(user._id)}
//               className="bg-green-600 text-white px-4 py-1 rounded"
//             >
//               Approve
//             </button>

//             <button
//               onClick={() => rejectUser(user._id)}
//               className="bg-red-600 text-white px-4 py-1 rounded"
//             >
//               Reject
//             </button>

//           </div>

//         </div>

//       ))}

//       <div className="p-8">

//         <h1 className="text-3xl mb-6">
//           Assign Task
//         </h1>

//         <form onSubmit={assignTask}>

//           <input
//             placeholder="Project ID"
//             onChange={(e) =>
//               setForm({ ...form, projectId: e.target.value })
//             }
//           />

//           <input
//             placeholder="Department"
//             onChange={(e) =>
//               setForm({ ...form, department: e.target.value })
//             }
//           />

//           <input
//             placeholder="Task"
//             onChange={(e) =>
//               setForm({ ...form, task: e.target.value })
//             }
//           />

//           <button type="submit">
//             Assign
//           </button>

//         </form>

//       </div>


//     </div>

//   );

// };

// export default AdminDashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AdminDashboard = () => {
//   const [pendingUsers, setPendingUsers] = useState([]);
//   const [tasks, setTasks] = useState([]);
//   const token = localStorage.getItem("token");

//   const headers = { Authorization: `Bearer ${token}` };

//   useEffect(() => {
//     fetchPendingUsers();
//     fetchTasks();
//   }, []);

//   const fetchPendingUsers = async () => {
//     const res = await axios.get("http://localhost:5000/api/admin/pending", { headers });
//     setPendingUsers(res.data);
//   };

//   const fetchTasks = async () => {
//     const res = await axios.get("http://localhost:5000/api/admin/tasks", { headers });
//     setTasks(res.data);
//   };

//   const approveUser = async (id) => {
//     await axios.put(`http://localhost:5000/api/admin/approve/${id}`, {}, { headers });
//     fetchPendingUsers();
//   };

//   const rejectUser = async (id) => {
//     await axios.put(`http://localhost:5000/api/admin/reject/${id}`, {}, { headers });
//     fetchPendingUsers();
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Pending Users</h2>
//       {pendingUsers.map(user => (
//         <div key={user._id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
//           {user.name} - {user.department}
//           <button onClick={() => approveUser(user._id)} style={{ marginLeft: "10px" }}>Approve</button>
//           <button onClick={() => rejectUser(user._id)} style={{ marginLeft: "5px" }}>Reject</button>
//         </div>
//       ))}

//       <h2 style={{ marginTop: "40px" }}>All Tasks</h2>
//       {tasks.map(task => (
//         <div key={task._id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
//           {task.title} - {task.status} - {task.department.name}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [pendingUsers, setPendingUsers] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [departmentId, setDepartmentId] = useState("");

  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => {
    fetchPendingUsers();
    fetchDepartments();
    fetchTasks();
  }, []);

  const fetchPendingUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/pending", { headers });
    setPendingUsers(res.data);
  };

  // Fetch all approved departments for task assignment
  const fetchDepartments = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/departments", { headers });
    setDepartments(res.data);
  };

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/tasks", { headers });
    setTasks(res.data);
  };

  const handleAddTask = async () => {
    if (!title || !departmentId) return alert("Title and Department are required");

    await axios.post(
      "http://localhost:5000/api/admin/assign-task",
      { title, description, departmentId },
      { headers }
    );

    setTitle(""); setDescription(""); setDepartmentId("");
    fetchTasks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Assign Task</h2>
      <input placeholder="Task Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      
      <select value={departmentId} onChange={e => setDepartmentId(e.target.value)}>
        <option value="">Select Department</option>
        {departments.map(dep => (
          <option key={dep._id} value={dep._id}>
            {dep.department} ({dep.name})
          </option>
        ))}
      </select>

      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AdminDashboard;
// frontend/src/pages/DepartmentDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const DepartmentDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("token");
  const headers = { Authorization: `Bearer ${token}` };

  useEffect(() => { fetchTasks(); }, []);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/department/tasks", { headers });
    setTasks(res.data);
  };

  const updateTaskStatus = async (id, status) => {
    await axios.put(`http://localhost:5000/api/department/tasks/${id}`, { status }, { headers });
    fetchTasks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Tasks</h2>
      {tasks.map(task => (
        <div key={task._id}>
          <strong>{task.title}</strong> - {task.status}
          <select value={task.status} onChange={e => updateTaskStatus(task._id, e.target.value)}>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default DepartmentDashboard;
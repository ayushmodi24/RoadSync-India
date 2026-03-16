import React, { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {

      const res = await axios.get("http://localhost:5000/api/auth/tasks");

      setProjects(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const pending = projects.filter(p => p.status === "pending");
  const progress = projects.filter(p => p.status === "in-progress");
  const completed = projects.filter(p => p.status === "completed");

  return (

    <div style={{ padding: "30px" }}>

      <h1>RoadSync Projects</h1>

      {/* PENDING PROJECTS */}

      <h2>Pending Projects</h2>

      {pending.length === 0 && <p>No pending projects</p>}

      {pending.map((project) => (

        <div key={project._id} style={cardStyle}>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <p>
            <b>Department:</b> {project.department?.department}
          </p>

          <p>
            <b>Status:</b> {project.status}
          </p>

        </div>

      ))}


      {/* IN PROGRESS */}

      <h2>In Progress Projects</h2>

      {progress.length === 0 && <p>No projects in progress</p>}

      {progress.map((project) => (

        <div key={project._id} style={cardStyle}>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <p>
            <b>Department:</b> {project.department?.department}
          </p>

          <p>
            <b>Status:</b> {project.status}
          </p>

        </div>

      ))}


      {/* COMPLETED */}

      <h2>Completed Projects</h2>

      {completed.length === 0 && <p>No completed projects</p>}

      {completed.map((project) => (

        <div key={project._id} style={cardStyle}>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <p>
            <b>Department:</b> {project.department?.department}
          </p>

          <p>
            <b>Status:</b> {project.status}
          </p>

        </div>

      ))}

    </div>
  );
};

const cardStyle = {

  border: "1px solid #ddd",
  padding: "15px",
  marginBottom: "15px",
  borderRadius: "8px",
  background: "#f9f9f9"

};

export default Projects;
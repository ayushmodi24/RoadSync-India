import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
// import AdminDashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import DepartmentDashboard from "./pages/DepartmentDashboard";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import DepartmentPage from "./pages/DepartmentPage";
import Signup from "./pages/SignUp";
import Projects from "./pages/Projects";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<DepartmentDashboard />} />
          <Route path="/projects" element={<Projects />} />

          <Route
            path="/"
            element={<Homepage />}
          />
          <Route path="/department/:deptName" element={<DepartmentPage />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

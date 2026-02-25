import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import DepartmentPage from "./pages/DepartmentPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

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

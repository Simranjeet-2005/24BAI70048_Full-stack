import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Student from "./pages/Student";
import Staff from "./pages/Staff";
import Admission from "./pages/Admission";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Home */}
        <Route
          path="/home"
          element={
            <ProtectedRoute
              allowedRoles={["Student", "Staff", "Admission"]}
            >
              <Home />
            </ProtectedRoute>
          }
        />

        {/* Student Route */}
        <Route
          path="/student"
          element={
            <ProtectedRoute allowedRoles={["Student"]}>
              <Student />
            </ProtectedRoute>
          }
        />

        {/* Staff Route */}
        <Route
          path="/staff"
          element={
            <ProtectedRoute allowedRoles={["Staff"]}>
              <Staff />
            </ProtectedRoute>
          }
        />

        {/* Admission Route */}
        <Route
          path="/admission"
          element={
            <ProtectedRoute allowedRoles={["Admission"]}>
              <Admission />
            </ProtectedRoute>
          }
        />

        {/* Default */}
        <Route path="*" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
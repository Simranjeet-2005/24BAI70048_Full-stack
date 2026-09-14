import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login(role);
    navigate("/home");
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <h1>🎓 University Portal</h1>

        <p>
          Secure Role-Based Access Control System
        </p>

        <div className="role-cards">

          {/* Student */}
          <div className="role-card">
            <div className="role-icon">👨‍🎓</div>

            <h2>Student</h2>

            <p>
              Access your attendance, courses,
              marks and academic information.
            </p>

            <button
              className="login-btn student-btn"
              onClick={() => handleLogin("Student")}
            >
              Login as Student
            </button>
          </div>

          {/* Staff */}
          <div className="role-card">
            <div className="role-icon">👨‍🏫</div>

            <h2>Staff</h2>

            <p>
              Manage students, attendance,
              marks and academic activities.
            </p>

            <button
              className="login-btn staff-btn"
              onClick={() => handleLogin("Staff")}
            >
              Login as Staff
            </button>
          </div>

          {/* Admission */}
          <div className="role-card">
            <div className="role-icon">🏫</div>

            <h2>Admission</h2>

            <p>
              Manage applications, admissions
              and student registration.
            </p>

            <button
              className="login-btn admission-btn"
              onClick={() => handleLogin("Admission")}
            >
              Login as Admission
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
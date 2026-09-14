import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "../App.css";

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <nav className="navbar">
        <div className="logo">🎓 University Portal</div>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </nav>

      <main className="dashboard">

        <section className="welcome-section">
          <h1>Welcome to your Dashboard 👋</h1>

          <p>
            Manage your university activities from one place.
          </p>

          <span className="role-badge">
            Logged in as: {user.role}
          </span>
        </section>

        <h2 className="section-title">
          Available Services
        </h2>

        <div className="dashboard-cards">

          {user.role === "Student" && (
            <Link to="/student" className="dashboard-card">
              <div className="icon">👨‍🎓</div>
              <h3>Student Dashboard</h3>
              <p>
                View attendance, marks and courses.
              </p>
            </Link>
          )}

          {user.role === "Staff" && (
            <Link to="/staff" className="dashboard-card">
              <div className="icon">👨‍🏫</div>
              <h3>Staff Dashboard</h3>
              <p>
                Manage student academic activities.
              </p>
            </Link>
          )}

          {user.role === "Admission" && (
            <Link to="/admission" className="dashboard-card">
              <div className="icon">🏫</div>
              <h3>Admission Dashboard</h3>
              <p>
                Manage applications and admissions.
              </p>
            </Link>
          )}

        </div>
      </main>
    </>
  );
};

export default Home;
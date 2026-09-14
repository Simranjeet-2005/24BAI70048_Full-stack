import { logoutUser } from "./auth";

function Dashboard({ onLogout }) {
  const handleLogout = () => {
    logoutUser();
    onLogout();
  };

  return (
    <div>
      <h1>Welcome to Dashboard</h1>

      <p>You are authenticated using JWT.</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
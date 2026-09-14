import "../App.css";

const Staff = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">🎓 Staff Portal</div>
      </nav>

      <main className="role-dashboard">

        <section className="role-header staff-header">
          <h1>Staff Dashboard 👨‍🏫</h1>
          <p>
            Manage students and academic activities.
          </p>
        </section>

        <div className="action-grid">

          <div className="action-card">
            <h3>📋 Attendance</h3>
            <p>Manage student attendance records.</p>
            <button className="action-btn green">
              Manage Attendance
            </button>
          </div>

          <div className="action-card">
            <h3>📝 Marks</h3>
            <p>Enter and manage student marks.</p>
            <button className="action-btn green">
              Enter Marks
            </button>
          </div>

          <div className="action-card">
            <h3>👥 Students</h3>
            <p>View registered students.</p>
            <button className="action-btn green">
              View Students
            </button>
          </div>

        </div>

      </main>
    </>
  );
};

export default Staff;
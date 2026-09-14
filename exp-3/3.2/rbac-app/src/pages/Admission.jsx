import "../App.css";

const Admission = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">🎓 Admission Portal</div>
      </nav>

      <main className="role-dashboard">

        <section className="role-header admission-header">
          <h1>Admission Dashboard 🏫</h1>
          <p>
            Manage applications and student admissions.
          </p>
        </section>

        <div className="action-grid">

          <div className="action-card">
            <h3>📄 Applications</h3>
            <p>View submitted admission applications.</p>
            <button className="action-btn purple">
              View Applications
            </button>
          </div>

          <div className="action-card">
            <h3>✅ Approvals</h3>
            <p>Approve eligible student applications.</p>
            <button className="action-btn purple">
              Approve Admission
            </button>
          </div>

          <div className="action-card">
            <h3>👨‍🎓 Registration</h3>
            <p>Register newly admitted students.</p>
            <button className="action-btn purple">
              Register Student
            </button>
          </div>

        </div>

      </main>
    </>
  );
};

export default Admission;
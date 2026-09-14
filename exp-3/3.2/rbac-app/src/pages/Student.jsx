import "../App.css";

const Student = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">🎓 Student Portal</div>
      </nav>

      <main className="role-dashboard">

        <section className="role-header student-header">
          <h1>Student Dashboard 👨‍🎓</h1>
          <p>
            Manage your academic information and activities.
          </p>
        </section>

        <div className="action-grid">

          <div className="action-card">
            <h3>📊 Attendance</h3>
            <p>Check your current attendance.</p>
            <button className="action-btn blue">
              View Attendance
            </button>
          </div>

          <div className="action-card">
            <h3>📝 Marks</h3>
            <p>Check your examination results.</p>
            <button className="action-btn blue">
              View Marks
            </button>
          </div>

          <div className="action-card">
            <h3>📚 Courses</h3>
            <p>View your enrolled courses.</p>
            <button className="action-btn blue">
              View Courses
            </button>
          </div>

        </div>

      </main>
    </>
  );
};

export default Student;
import "./App.css";
import CalendarComponent from "./CalendarComponent";

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>📅 Post Scheduler</h1>
        <p>Plan, schedule and manage your social media posts</p>
      </div>

      <div className="calendar-card">
        <CalendarComponent />
      </div>
    </div>
  );
}

export default App;
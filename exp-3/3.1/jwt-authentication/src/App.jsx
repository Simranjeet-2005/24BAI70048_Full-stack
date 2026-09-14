import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { isAuthenticated } from "./auth";

function App() {
  const [authenticated, setAuthenticated] = useState(
    isAuthenticated()
  );

  return (
    <div>
      {authenticated ? (
        <Dashboard
          onLogout={() => setAuthenticated(false)}
        />
      ) : (
        <Login
          onLogin={() => setAuthenticated(true)}
        />
      )}
    </div>
  );
}

export default App;
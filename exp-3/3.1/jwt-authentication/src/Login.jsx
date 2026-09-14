import { useState } from "react";
import { loginUser } from "./auth";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const success = loginUser(username, password);

    if (success) {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>JWT Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
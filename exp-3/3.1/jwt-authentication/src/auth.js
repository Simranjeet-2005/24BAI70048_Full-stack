// src/auth.js

export const loginUser = (username, password) => {
  if (username === "Simranjeet_24BAI70048" && password === "12345") {
    const token = btoa(
      JSON.stringify({
        userId: 1,
        username: username,
        role: "user",
        exp: Date.now() + 3600000
      })
    );

    localStorage.setItem("jwtToken", token);
    return true;
  }

  return false;
};

export const logoutUser = () => {
  localStorage.removeItem("jwtToken");
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("jwtToken");

  if (!token) {
    return false;
  }

  return true;
};

export const getToken = () => {
  return localStorage.getItem("jwtToken");
};
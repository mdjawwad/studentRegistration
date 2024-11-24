import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin" && password === "admin123") {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g., admin@example.com"
            className="input"
            aria-label="Email Address"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="input"
            aria-label="Password"
          />
        </div>

        <button type="submit" className="button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LogIn;

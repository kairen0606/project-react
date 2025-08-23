import React, { useState, FormEvent } from "react";
import "../CSS/Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    alert("Successful Login!");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="email">User Name</label>
          <input
            id="email"
            type="email"
            placeholder="Enter User Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="**************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-actions">
          <a href="/register" className="register-link">
            Register
          </a>
          <button type="submit" className="login-btn">
            Login
          </button>
        </div>

      </form>
    </div>
  );
};

export default Login;
